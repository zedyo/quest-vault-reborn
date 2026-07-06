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
  ScenarioSource,
  SkillLearned,
  TrackedHero,
  TrackedOverlord,
} from '../types/session'

// Maximalgrößen gegen localStorage-Quota-DoS durch manipulierte Import-Dateien
export const MAX_IMPORT_BYTES = 2_000_000
const MAX_TEXT = 20_000
const MAX_NAME = 300
const MAX_ID = 100
const MAX_HEROES = 4
const MAX_SCENARIOS = 200
const MAX_LIST = 500

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

/** Stabile Instanz-ID beibehalten (verlinkt via ItemSold.refId), sonst neu erzeugen. */
function refId(v: unknown): string {
  return typeof v === 'string' && v.trim() ? v.slice(0, MAX_ID) : uid()
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
  const localId = typeof v.localId === 'string' && v.localId.trim() ? v.localId.slice(0, MAX_ID) : uid()
  const h: TrackedHero = {
    localId,
    heroId,
    playerName: str(v.playerName, MAX_NAME),
    classId: typeof v.classId === 'string' && v.classId.trim() ? v.classId.slice(0, MAX_ID) : null,
    startingSkillIds: idList(v.startingSkillIds),
    startingItemRefs: refArray(v.startingItemRefs),
  }
  const note = str(v.note, MAX_TEXT)
  if (note) h.note = note
  return h
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
  for (const [k, val] of Object.entries(v)) {
    if (k === '__proto__') continue
    out[k.slice(0, MAX_ID)] = num(val, -1_000_000, 1_000_000, 0)
  }
  return out
}

function sanitizeScenario(v: unknown): PlayedScenario | null {
  if (!isRecord(v)) return null
  const sc = isRecord(v.scenario) ? v.scenario : {}
  const rewards = isRecord(v.rewards) ? v.rewards : {}
  const shopping = isRecord(v.shopping) ? v.shopping : {}
  const arr = <T>(x: unknown, fn: (e: unknown) => T | null): T[] =>
    Array.isArray(x) ? x.slice(0, MAX_LIST).map(fn).filter((e): e is T => e !== null) : []
  const out: PlayedScenario = {
    id: typeof v.id === 'string' && v.id.trim() ? v.id.slice(0, MAX_ID) : uid(),
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
  return out
}

/**
 * Validiert + bereinigt einen rohen Session-Datensatz.
 * @param keepId true = bestehende Top-Level-ID erhalten (Store-Hydration);
 *               false = neue ID erzeugen (Import als neue Session).
 */
export function sanitizeSession(raw: unknown, keepId: boolean): CampaignSession | null {
  if (!isRecord(raw)) return null
  const name = str(raw.name, MAX_NAME)
  const campaignId = str(raw.campaignId, MAX_ID)
  if (!name || !campaignId) return null
  const nowIso = new Date().toISOString()
  const id = keepId && typeof raw.id === 'string' && raw.id.trim() ? raw.id.slice(0, MAX_ID) : uid()
  return {
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
    overlord: sanitizeOverlord(raw.overlord),
    scenarios: Array.isArray(raw.scenarios)
      ? raw.scenarios.slice(0, MAX_SCENARIOS).map(sanitizeScenario).filter((s): s is PlayedScenario => s !== null)
      : [],
  }
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
