import type { ErrataEntry, ErrataScope } from '../types/game'
import { ERRATA } from './errata'
import { HEROES } from './heroes'
import { HERO_CLASSES } from './heroClasses'
import { SHOP_ITEMS, RELICS } from './items'
import { OVERLORD_DECKS } from './overlordClasses'
import { PLOT_DECKS } from './plotDecks'
import { MONSTERS } from './monsters'
import { RUMORS } from './rumors'
import { CAMPAIGNS } from './campaigns'

// ── CRRG-Errata ↔ Komponenten-Verknüpfung (zur Laufzeit) ─────────────────────
//
// Die CRRG-Einträge (errata.ts) nennen Komponenten nur beim NAMEN. Diese Datei
// löst den Namen gegen die echten Datensätze (Helden/Klassen/Items/…) auf, damit
// die aufklappbare Errata-Box an der richtigen Karte erscheint. Bewusst zur
// Laufzeit statt beim Generieren – so bleibt die Zuordnung automatisch synchron
// mit den Datendateien. Nicht auflösbare Einträge (z. B. Geheimkammerkarten,
// Sammel-Einträge) behalten `targetId: null` und erscheinen NUR in der
// durchsuchbaren Errata-Übersicht (es geht keine Information verloren).

export interface LinkedErrata extends ErrataEntry {
  /** ID des zugeordneten Datensatzes (Held/Klasse/Item/…), oder null. */
  targetId: string | null
  /** Erweiterung des zugeordneten Datensatzes (für „Nur meine Sammlung"). */
  expansionId: string | null
}

/** Normalisiert Namen für den Abgleich: Kleinschreibung, ß→ss, Klammer-Zusätze
 *  wie „(UK)"/„(Gefährte)" entfernt, alle Trenn-/Sonderzeichen entfernt. */
function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\band\b/g, 'und') // englischer Rest im CRRG → deutsche Schreibweise
    .replace(/[^a-z0-9äöü]+/g, '')
}

/** true, wenn a und b sich um höchstens eine Einfügung/Löschung/Ersetzung
 *  unterscheiden (Levenshtein ≤ 1) – fängt Schreibvarianten wie „Jain"↔„Jaine". */
function withinEdit1(a: string, b: string): boolean {
  if (a === b) return true
  const la = a.length, lb = b.length
  if (Math.abs(la - lb) > 1) return false
  if (la === lb) {
    let diff = 0
    for (let i = 0; i < la; i++) if (a[i] !== b[i] && ++diff > 1) return false
    return diff === 1
  }
  const [s, l] = la < lb ? [a, b] : [b, a] // s ist kürzer
  let i = 0, j = 0, skips = 0
  while (i < s.length && j < l.length) {
    if (s[i] === l[j]) { i++; j++ } else if (++skips > 1) return false
    else j++
  }
  return true
}

interface Cand {
  id: string
  expansionId: string | null
  keys: string[]
}

function buildIndex(cands: Cand[]): Map<string, Cand> {
  const m = new Map<string, Cand>()
  for (const c of cands) {
    for (const k of c.keys) {
      if (k && !m.has(k)) m.set(k, c)
    }
  }
  return m
}

const heroIdx = buildIndex(HEROES.map((h) => ({ id: h.id, expansionId: h.expansionId, keys: [norm(h.name)] })))
const classIdx = buildIndex(HERO_CLASSES.map((c) => ({ id: c.id, expansionId: c.expansionId, keys: [norm(c.nameDe)] })))
const itemIdx = buildIndex([...SHOP_ITEMS, ...RELICS].map((i) => ({ id: i.id, expansionId: i.expansionId, keys: [norm(i.nameDe)] })))
const overlordIdx = buildIndex(
  OVERLORD_DECKS.flatMap((d) => d.cards.map((c) => ({ id: c.id, expansionId: d.expansionId, keys: [norm(c.nameDe)] }))),
)
const monsterIdx = buildIndex(MONSTERS.map((m) => ({ id: m.id, expansionId: m.expansionId, keys: [norm(m.nameDe)] })))
const rumorIdx = buildIndex(RUMORS.map((r) => ({ id: r.id, expansionId: r.expansionId, keys: [norm(r.nameDe)] })))

// Plotdecks heißen im CRRG „Agent – Deckname"; Kampagnen matchen über die
// Untergruppe (Kampagnenname). Beide erlauben zusätzlich einen Teilstring-Treffer.
const plotCands: Cand[] = PLOT_DECKS.map((d) => ({
  id: d.id,
  expansionId: d.expansionId,
  keys: [norm(d.agentDe + d.nameDe), norm(d.nameDe), norm(d.agentDe)],
}))
const campaignCands: Cand[] = CAMPAIGNS.map((c) => ({ id: c.id, expansionId: c.expansionId, keys: [norm(c.nameDe)] }))

type Resolved = { targetId: string | null; expansionId: string | null }
const NONE: Resolved = { targetId: null, expansionId: null }

function fromIndex(idx: Map<string, Cand>, key: string): Resolved {
  const c = idx.get(key)
  return c ? { targetId: c.id, expansionId: c.expansionId } : NONE
}

/** Wie fromIndex, aber mit Edit-Distanz-≤1-Rückfall (für Held/Monster-Namen). */
function fromIndexFuzzy(idx: Map<string, Cand>, key: string): Resolved {
  const exact = idx.get(key)
  if (exact) return { targetId: exact.id, expansionId: exact.expansionId }
  if (key.length >= 5) {
    for (const [k, c] of idx) if (withinEdit1(key, k)) return { targetId: c.id, expansionId: c.expansionId }
  }
  return NONE
}

/** Exakter Schlüssel-Treffer, sonst Teilstring in beide Richtungen. */
function fromCands(key: string, cands: Cand[]): Resolved {
  if (!key) return NONE
  for (const c of cands) if (c.keys.includes(key)) return { targetId: c.id, expansionId: c.expansionId }
  for (const c of cands) {
    for (const k of c.keys) {
      if (k.length >= 5 && (key.includes(k) || k.includes(key))) return { targetId: c.id, expansionId: c.expansionId }
    }
  }
  return NONE
}

// Bekannte Schreibvarianten (CRRG ↔ Datenbank), die die Fuzzy-Suche nicht
// abdeckt (Edit-Distanz > 1). Schlüssel + Wert sind normalisiert.
const HERO_ALIASES: Record<string, string> = {
  augurgrimson: 'augurgrisom', // CRRG „Augur Grimson" = Held „Augur Grisom"
}

function resolve(entry: ErrataEntry): Resolved {
  const key = norm(entry.nameDe)
  switch (entry.scope) {
    case 'hero': return fromIndexFuzzy(heroIdx, HERO_ALIASES[key] ?? key)
    case 'class': return fromIndex(classIdx, key)
    case 'item': return fromIndex(itemIdx, key)
    case 'overlord': return fromIndex(overlordIdx, key)
    case 'monster': return fromIndexFuzzy(monsterIdx, key)
    case 'rumor': return fromIndex(rumorIdx, key)
    case 'plot': return fromCands(key, plotCands)
    case 'adventure': return fromCands(norm(entry.subgroupDe ?? ''), campaignCands)
    default: return NONE
  }
}

/** Alle Errata-Einträge mit aufgelöster Ziel-ID/Erweiterung. */
export const LINKED_ERRATA: LinkedErrata[] = ERRATA.map((e) => ({ ...e, ...resolve(e) }))

// Schnell-Nachschlag: `${scope}:${targetId}` → Einträge.
const byTarget = new Map<string, LinkedErrata[]>()
for (const e of LINKED_ERRATA) {
  if (e.targetId == null) continue
  const k = `${e.scope}:${e.targetId}`
  const arr = byTarget.get(k) ?? []
  arr.push(e)
  byTarget.set(k, arr)
}

/** Errata-Einträge für eine konkrete Komponente (leeres Array = keine). */
export function getErrata(scope: ErrataScope, targetId: string | null | undefined): LinkedErrata[] {
  if (!targetId) return []
  return byTarget.get(`${scope}:${targetId}`) ?? []
}

/** Gibt es Errata für diese Komponente? */
export function hasErrata(scope: ErrataScope, targetId: string | null | undefined): boolean {
  return getErrata(scope, targetId).length > 0
}

/** Monsterfähigkeiten-Errata (Schlagwort-basiert, z. B. „Feuerodem", „Durchbohren"). */
export const MONSTER_ABILITY_ERRATA: LinkedErrata[] = LINKED_ERRATA.filter((e) => e.scope === 'monster-ability')

// ── Monsterfähigkeiten-Errata je Monster ─────────────────────────────────────
//
// Monsterfähigkeiten sind keiner einzelnen Monsterkarte zugeordnet, sondern
// Schlagwörter. Hier wird jede Fähigkeits-Errata den Monstern zugeordnet, die
// diese Fähigkeit tatsächlich besitzen (Fähigkeitsname = Text vor dem „:" in
// surges/abilities/actions, ohne angehängte Zahl), damit sie auch direkt am
// Monster erscheint – nicht nur in der durchsuchbaren Übersicht.

function monsterAbilityKeys(m: (typeof MONSTERS)[number]): string[] {
  const keys = new Set<string>()
  for (const b of [m.normal, m.master, m.act2Normal, m.act2Master]) {
    if (!b) continue
    for (const arr of [b.surges, b.abilities, b.actions]) {
      for (const s of arr ?? []) {
        const head = s.split(':')[0].replace(/\s+\d+\s*$/, '').trim() // „Aura 1" → „Aura"
        const k = norm(head)
        if (k) keys.add(k)
      }
    }
  }
  return [...keys]
}

const abilityErrataByKey = new Map<string, LinkedErrata>()
for (const e of MONSTER_ABILITY_ERRATA) abilityErrataByKey.set(norm(e.nameDe), e)

const monsterAbilityErrataById = new Map<string, LinkedErrata[]>()
for (const m of MONSTERS) {
  const out: LinkedErrata[] = []
  const seen = new Set<string>()
  for (const k of monsterAbilityKeys(m)) {
    const e = abilityErrataByKey.get(k)
    if (e && !seen.has(e.id)) {
      seen.add(e.id)
      out.push(e)
    }
  }
  if (out.length) monsterAbilityErrataById.set(m.id, out)
}

/** Monsterfähigkeiten-Errata für ein konkretes Monster (aufgrund seiner Fähigkeiten). */
export function getMonsterAbilityErrata(monsterId: string): LinkedErrata[] {
  return monsterAbilityErrataById.get(monsterId) ?? []
}

/** Anteil der auflösbaren Einträge (für Datenintegritäts-Tests / Diagnose). */
export const ERRATA_LINK_STATS = {
  total: LINKED_ERRATA.length,
  linked: LINKED_ERRATA.filter((e) => e.targetId != null).length,
}
