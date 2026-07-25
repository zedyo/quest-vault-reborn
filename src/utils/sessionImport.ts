// ── Import/Export eines Kampagnen-Spielstands (Session) ──────────────────────
//
// Whitelist-Rebuild wie `questImport.ts`: das Objekt wird Feld für Feld neu
// aufgebaut – unbekannte Felder (inkl. __proto__ u. ä.) fallen weg, falsche Typen
// werden durch Defaults ersetzt, Texte/Arrays längenbegrenzt. Gibt null zurück,
// wenn die Datei strukturell keine Session ist.
//
// WICHTIG – Round-Trip-Treue: Alle verschachtelten Referenz-IDs (heroId, classId,
// skillIds, ItemRef.refId/dataId, Overlord-IDs, Szenario-IDs …) werden ERHALTEN
// und nur typ-/längenvalidiert – sie sind untereinander verlinkt (z. B.
// ItemSold.refId → ItemRef.refId). Nur beim IMPORT wird die Top-Level-Session-ID
// neu erzeugt (Import = neue Session, überschreibt nie eine bestehende).

import type {
  CampaignSession,
  ItemBought,
  ItemGrant,
  ItemRef,
  ItemSold,
  ItemSource,
  OverlordCardBought,
  PlayedScenario,
  ScenarioMarket,
  ScenarioSource,
  SkillLearned,
  TrackedAdvancedQuest,
  TrackedAdvancedQuestStatus,
  TrackedHero,
  TrackedOverlord,
  TrackedRumor,
  TrackedRumorStatus,
} from '../types/session'

// Maximalgrößen gegen localStorage-Quota-DoS durch manipulierte Import-Dateien
export const MAX_IMPORT_BYTES = 2_000_000
const MAX_TEXT = 20_000
const MAX_NAME = 300
const MAX_ID = 100
const MAX_HEROES = 4
const MAX_SCENARIOS = 200
const MAX_LIST = 500
/** Deckel für `rewards.heroXp` – großzügig über den max. 4 Helden je Session. */
const MAX_HERO_XP_KEYS = 32
/**
 * Schlüssel, die als Objekt-Property ein GEERBTES Member träfen (`obj[k]` wäre
 * dann nicht `undefined`, `?? 0` griffe nicht → aus `0 + XP` würde ein String)
 * bzw. den lokalen Prototyp verbögen. Werden als Helden-Schlüssel/`localId`
 * konsequent verworfen. Die Liste wird aus `Object.prototype` ABGELEITET statt
 * von Hand gepflegt — so fehlt garantiert kein Member (`isPrototypeOf`,
 * `propertyIsEnumerable`, `__defineGetter__` …). Beide Schreibwege (JSON-Import
 * und Hydrieren aus dem localStorage) laufen hier durch; App-interne IDs kommen
 * ohnehin aus `uid()`.
 */
const RESERVED_KEYS = new Set<string>([...Object.getOwnPropertyNames(Object.prototype), 'prototype'])

const uid = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(36).slice(2)}`

function str(v: unknown, max = MAX_TEXT): string {
  return typeof v === 'string' ? v.slice(0, max) : ''
}

function num(v: unknown, min: number, max: number, fallback: number): number {
  return typeof v === 'number' && Number.isFinite(v) && v >= min && v <= max ? Math.floor(v) : fallback
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

/** Array von IDs (Strings), element- und längenbegrenzt, leere verworfen. */
function idList(v: unknown, maxItems = MAX_LIST): string[] {
  if (!Array.isArray(v)) return []
  return v
    .filter((x): x is string => typeof x === 'string' && x.trim().length > 0)
    .slice(0, maxItems)
    .map((x) => x.slice(0, MAX_ID))
}

/**
 * Alle intern erzeugten IDs sind UUIDs bzw. `id-<zeit>-<zufall>` — also URL- und
 * objektschlüsselsicher. Eine importierte ID wird nur BEIBEHALTEN, wenn sie
 * dieser Form entspricht (sonst landet sie über `?edit=`/`/helden/:id` als
 * Rohtext in einer Route bzw. als Objektschlüssel in `rewards.heroXp`);
 * andernfalls bekommt der Eintrag eine frische ID. Die inneren Verweise bleiben
 * damit konsistent, weil jede ID genau einmal durch diese Funktion läuft.
 */
const ID_SHAPE = /^[A-Za-z0-9_-]{1,100}$/
function safeId(v: unknown): string {
  if (typeof v !== 'string') return uid()
  const s = v.trim()
  return ID_SHAPE.test(s) && !RESERVED_KEYS.has(s) ? s : uid()
}

/** Stabile Instanz-ID beibehalten (verlinkt via ItemSold.refId), sonst neu erzeugen. */
function refId(v: unknown): string {
  return safeId(v)
}

const ITEM_SOURCES: ItemSource[] = ['shop', 'relic', 'class-start', 'custom']
const SCENARIO_SOURCES: ScenarioSource[] = ['campaign', 'advanced-quest', 'rumor', 'custom']

function sanitizeItemRef(v: unknown): ItemRef | null {
  if (!isRecord(v)) return null
  const source = ITEM_SOURCES.includes(v.source as ItemSource) ? (v.source as ItemSource) : 'custom'
  const ref: ItemRef = { refId: refId(v.refId), source, dataId: str(v.dataId, MAX_ID) }
  const customName = str(v.customName, MAX_NAME)
  if (customName) ref.customName = customName
  return ref
}

function refArray(v: unknown): ItemRef[] {
  if (!Array.isArray(v)) return []
  return v.slice(0, MAX_LIST).map(sanitizeItemRef).filter((r): r is ItemRef => r !== null)
}

function sanitizeHero(v: unknown): TrackedHero | null {
  if (!isRecord(v)) return null
  const heroId = str(v.heroId, MAX_ID)
  if (!heroId) return null
  const h: TrackedHero = {
    localId: safeId(v.localId),
    heroId,
    playerName: str(v.playerName, MAX_NAME),
    classId: typeof v.classId === 'string' && v.classId.trim() ? v.classId.slice(0, MAX_ID) : null,
    startingSkillIds: idList(v.startingSkillIds),
    startingItemRefs: refArray(v.startingItemRefs),
  }
  const note = str(v.note, MAX_TEXT)
  if (note) h.note = note
  // Epische Variante (v1.8.0) – optionale Felder nur setzen, wenn vorhanden/>0,
  // damit der Round-Trip alter Stände byte-gleich bleibt.
  const startingXp = num(v.startingXp, 0, 1_000_000, 0)
  if (startingXp) h.startingXp = startingXp
  const startingFate = num(v.startingFateTokens, 0, 1_000_000, 0)
  if (startingFate) h.startingFateTokens = startingFate
  return h
}

// ── Gerüchte + Zusatzabenteuer (v1.8.0) ──────────────────────────────────────

const RUMOR_STATUS: TrackedRumorStatus[] = ['in-play', 'played', 'expired', 'discarded']
const QUEST_STATUS: TrackedAdvancedQuestStatus[] = ['not-in-play', 'in-play', 'played']

function sanitizeRumor(v: unknown): TrackedRumor | null {
  if (!isRecord(v)) return null
  const rumorId = str(v.rumorId, MAX_ID)
  if (!rumorId) return null
  const out: TrackedRumor = {
    rumorId,
    status: RUMOR_STATUS.includes(v.status as TrackedRumorStatus) ? (v.status as TrackedRumorStatus) : 'in-play',
  }
  const playedIn = str(v.playedInScenarioId, MAX_ID)
  if (playedIn) out.playedInScenarioId = playedIn
  return out
}

function sanitizeAdvancedQuest(v: unknown): TrackedAdvancedQuest | null {
  if (!isRecord(v)) return null
  const questId = str(v.questId, MAX_ID)
  if (!questId) return null
  const out: TrackedAdvancedQuest = {
    questId,
    status: QUEST_STATUS.includes(v.status as TrackedAdvancedQuestStatus)
      ? (v.status as TrackedAdvancedQuestStatus)
      : 'not-in-play',
  }
  const source = str(v.source, MAX_NAME)
  if (source) out.source = source
  return out
}

function sanitizeMarket(v: unknown): ScenarioMarket | null {
  if (!isRecord(v)) return null
  const out: ScenarioMarket = {
    mode: v.mode === 'manual' ? 'manual' : 'reveal',
    act: v.act === 2 ? 2 : 1,
  }
  const revealCount = num(v.revealCount, 0, 99, 0)
  if (revealCount) out.revealCount = revealCount
  const revealed = idList(v.revealedItemIds, 60)
  if (revealed.length) out.revealedItemIds = revealed
  return out
}

function sanitizeOverlord(v: unknown): TrackedOverlord {
  const r = isRecord(v) ? v : {}
  return {
    deckIds: idList(r.deckIds),
    startingCardIds: idList(r.startingCardIds),
    lieutenantId: typeof r.lieutenantId === 'string' && r.lieutenantId.trim() ? r.lieutenantId.slice(0, MAX_ID) : null,
    plotDeckId: typeof r.plotDeckId === 'string' && r.plotDeckId.trim() ? r.plotDeckId.slice(0, MAX_ID) : null,
    ownedPlotCardIds: idList(r.ownedPlotCardIds),
    activeRumorIds: idList(r.activeRumorIds),
    relicIds: idList(r.relicIds),
    startingXp: num(r.startingXp, 0, 1_000_000, 0),
    threatTokens: num(r.threatTokens, 0, 1_000_000, 0),
  }
}

function optHeroLocalId(v: unknown): string | null {
  return typeof v === 'string' && v.trim() ? v.slice(0, MAX_ID) : null
}

function sanitizeGrant(v: unknown): ItemGrant | null {
  if (!isRecord(v)) return null
  const item = sanitizeItemRef(v.item)
  if (!item) return null
  return { toHeroLocalId: optHeroLocalId(v.toHeroLocalId), item }
}

function sanitizeBought(v: unknown): ItemBought | null {
  if (!isRecord(v)) return null
  const item = sanitizeItemRef(v.item)
  if (!item) return null
  return { toHeroLocalId: optHeroLocalId(v.toHeroLocalId), item, price: num(v.price, 0, 1_000_000, 0) }
}

function sanitizeSold(v: unknown): ItemSold | null {
  if (!isRecord(v)) return null
  const rid = str(v.refId, MAX_ID)
  if (!rid) return null
  return { refId: rid, refund: num(v.refund, 0, 1_000_000, 0) }
}

function sanitizeSkillLearned(v: unknown): SkillLearned | null {
  if (!isRecord(v)) return null
  const heroLocalId = str(v.heroLocalId, MAX_ID)
  const skillId = str(v.skillId, MAX_ID)
  if (!heroLocalId || !skillId) return null
  return { heroLocalId, skillId, xpCost: num(v.xpCost, 0, 1_000_000, 0) }
}

function sanitizeOverlordCardBought(v: unknown): OverlordCardBought | null {
  if (!isRecord(v)) return null
  const cardId = str(v.cardId, MAX_ID)
  if (!cardId) return null
  return { cardId, xpCost: num(v.xpCost, 0, 1_000_000, 0) }
}

function sanitizeHeroXp(v: unknown): Record<string, number> {
  if (!isRecord(v)) return {}
  const out: Record<string, number> = {}
  // Anzahl der Schlüssel begrenzen: eine Session hat höchstens 4 Helden. Ohne
  // Deckel könnte eine präparierte Datei hunderttausende Einträge einschleusen.
  for (const [k, val] of Object.entries(v).slice(0, MAX_HERO_XP_KEYS)) {
    // Schlüssel sind Helden-`localId`s und müssen dieselbe Form haben (sonst
    // stünde hier ein geerbtes Object-Member statt einer Zahl).
    if (!ID_SHAPE.test(k) || RESERVED_KEYS.has(k)) continue
    out[k] = num(val, -1_000_000, 1_000_000, 0)
  }
  return out
}

/** Validiert einen einzelnen Szenario-Eintrag (auch für den Flow-Entwurf genutzt). */
export function sanitizePlayedScenario(v: unknown): PlayedScenario | null {
  return sanitizeScenario(v)
}

function sanitizeScenario(v: unknown): PlayedScenario | null {
  if (!isRecord(v)) return null
  const sc = isRecord(v.scenario) ? v.scenario : {}
  const rewards = isRecord(v.rewards) ? v.rewards : {}
  const shopping = isRecord(v.shopping) ? v.shopping : {}
  const arr = <T>(x: unknown, fn: (e: unknown) => T | null): T[] =>
    Array.isArray(x) ? x.slice(0, MAX_LIST).map(fn).filter((e): e is T => e !== null) : []
  const out: PlayedScenario = {
    id: safeId(v.id),
    order: num(v.order, 0, 1_000_000, 0),
    scenario: {
      source: SCENARIO_SOURCES.includes(sc.source as ScenarioSource) ? (sc.source as ScenarioSource) : 'custom',
      dataId: str(sc.dataId, MAX_ID),
      title: str(sc.title, MAX_NAME),
      act: sc.act === 2 ? 2 : 1,
    },
    outcome: v.outcome === 'heroes' || v.outcome === 'overlord' ? v.outcome : 'none',
    rewards: {
      heroXp: sanitizeHeroXp(rewards.heroXp),
      overlordXp: num(rewards.overlordXp, -1_000_000, 1_000_000, 0),
      partyGold: num(rewards.partyGold, -1_000_000, 1_000_000, 0),
      grantedItems: arr(rewards.grantedItems, sanitizeGrant),
      overlordCardIds: idList(rewards.overlordCardIds),
      overlordRelicIds: idList(rewards.overlordRelicIds),
    },
    shopping: {
      bought: arr(shopping.bought, sanitizeBought),
      sold: arr(shopping.sold, sanitizeSold),
      skillsLearned: arr(shopping.skillsLearned, sanitizeSkillLearned),
      overlordCardsBought: arr(shopping.overlordCardsBought, sanitizeOverlordCardBought),
    },
  }
  const note = str(v.note, MAX_TEXT)
  if (note) out.note = note
  // Ergänzungen v1.8.0 (Abschluss-Flow) – optional, nur wenn vorhanden.
  const playedAt = str(v.playedAt, 40)
  if (playedAt) out.playedAt = playedAt
  if (typeof v.threatAfter === 'number') out.threatAfter = num(v.threatAfter, 0, 1_000_000, 0)
  if (typeof v.fateAfter === 'number') out.fateAfter = num(v.fateAfter, 0, 1_000_000, 0)
  const rumorPlayedId = str(v.rumorPlayedId, MAX_ID)
  if (rumorPlayedId) out.rumorPlayedId = rumorPlayedId
  const market = sanitizeMarket(v.market)
  if (market) out.market = market
  return out
}

/**
 * Validiert + bereinigt einen rohen Session-Datensatz.
 * @param keepId true = bestehende Top-Level-ID erhalten (Store-Hydration);
 *               false = neue ID erzeugen (Import als neue Session).
 */
export function sanitizeSession(raw: unknown, keepId: boolean): CampaignSession | null {
  if (!isRecord(raw)) return null
  const campaignId = str(raw.campaignId, MAX_ID)
  // Beim IMPORT bleibt die strikte Prüfung (eine Datei ohne Namen ist keine
  // Session). Beim HYDRIEREN darf ein leerer Name den Spielstand NICHT
  // verwerfen – sonst löscht ein leer gelassenes Namensfeld die Kampagne.
  const name = str(raw.name, MAX_NAME) || (keepId ? 'Unbenannte Kampagne' : '')
  if (!name || !campaignId) return null
  const nowIso = new Date().toISOString()
  const id = keepId ? safeId(raw.id) : uid()
  const overlord = sanitizeOverlord(raw.overlord)

  // v2 → v3: Gerüchte sind kein Overlord-Besitz mehr. Fehlt das Feld `rumors`
  // KOMPLETT (= Stand vor v1.8.0), werden die alten `activeRumorIds` einmalig
  // übernommen und dort geleert. Ein vorhandenes (auch leeres) `rumors`-Array
  // ist bereits v3 → dann wird nichts erneut übertragen.
  let rumors: TrackedRumor[]
  if (Array.isArray(raw.rumors)) {
    rumors = raw.rumors.slice(0, MAX_LIST).map(sanitizeRumor).filter((r): r is TrackedRumor => r !== null)
  } else {
    rumors = overlord.activeRumorIds.map((rumorId) => ({ rumorId, status: 'in-play' as const }))
    overlord.activeRumorIds = []
  }

  const session: CampaignSession = {
    id,
    name,
    campaignId,
    playerCount: raw.playerCount === 3 ? 3 : raw.playerCount === 4 ? 4 : 2,
    startingGold: num(raw.startingGold, 0, 1_000_000, 0),
    partyFateTokens: num(raw.partyFateTokens, 0, 1_000_000, 0),
    createdAt: str(raw.createdAt, 40) || nowIso,
    updatedAt: str(raw.updatedAt, 40) || nowIso,
    heroes: Array.isArray(raw.heroes)
      ? raw.heroes.slice(0, MAX_HEROES).map(sanitizeHero).filter((h): h is TrackedHero => h !== null)
      : [],
    overlord,
    scenarios: Array.isArray(raw.scenarios)
      ? raw.scenarios.slice(0, MAX_SCENARIOS).map(sanitizeScenario).filter((s): s is PlayedScenario => s !== null)
      : [],
    rumors,
    advancedQuests: Array.isArray(raw.advancedQuests)
      ? raw.advancedQuests
          .slice(0, MAX_LIST)
          .map(sanitizeAdvancedQuest)
          .filter((q): q is TrackedAdvancedQuest => q !== null)
      : [],
  }
  if (raw.archived === true) session.archived = true
  if (raw.epic === true) session.epic = true
  const sessionNote = str(raw.note, MAX_TEXT)
  if (sessionNote) session.note = sessionNote
  return session
}

/** Import einer Session-JSON-Datei (neue Top-Level-ID). Null bei ungültiger Datei. */
export function parseImportedSession(raw: unknown): CampaignSession | null {
  return sanitizeSession(raw, false)
}

/** Bereinigt eine Liste persistierter Sessions (Store-Hydration; IDs bleiben erhalten). */
export function sanitizeSessionList(raw: unknown): CampaignSession[] {
  if (!Array.isArray(raw)) return []
  return raw
    .slice(0, 1000)
    .map((s) => sanitizeSession(s, true))
    .filter((s): s is CampaignSession => s !== null)
}

/** Lädt die Session als JSON-Datei herunter (wie exportQuestAsJSON). */
export function exportSessionAsJSON(session: CampaignSession): void {
  const blob = new Blob([JSON.stringify(session, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  const slug = (session.name || 'session').replace(/\s+/g, '-').toLowerCase().slice(0, 60)
  a.download = `${slug}.json`
  a.click()
  URL.revokeObjectURL(url)
}
