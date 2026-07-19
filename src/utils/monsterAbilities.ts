// ── Monster-Fähigkeiten für die Anzeige aufbereiten ──────────────────────────
//
// Reine (React-freie) Logik, damit sie testbar ist (Akzeptanzkriterium: Naga
// Akt I → „Hexerei 1" [nur Diener] + „Hexerei 2" [nur Meister]).
//
// Aus den beiden Rang-Listen (Diener = normal, Meister = master) eines Aktes
// werden je Kategorie (Fähigkeiten/Energie/Aktionen) zusammengeführte „Boxen"
// gebildet, gruppiert nach Basisname (Text vor dem „:", ohne angehängte
// Stufenzahl). Bonus-Energie („+N Herz(en)"/„+N Reichweite") wird gesondert als
// führende Zeilen der Energie-Gruppe behandelt.

import type { Monster, MonsterStats } from '../types/game'

/** Gültigkeitsbereich einer Fähigkeits-Box. */
export type AbilityScope = 'both' | 'minion' | 'master'

/** Eine zusammengeführte Fähigkeits-Box (Titel + Scope + Beschreibung). */
export interface AbilityBox {
  /** Basisname ohne Stufe (für die Errata-Zuordnung). */
  baseName: string
  /** Anzeige-Titel inkl. Stufe, z. B. „Hexerei 2". */
  title: string
  scope: AbilityScope
  /** Beschreibungstext (Teil nach dem „:"), kann leer sein. */
  description: string
}

/** Eine Bonus-Energie-Zeile („Diener +N ❤ · Meister +M ❤"). */
export interface BoostRow {
  kind: 'heart' | 'range'
  /** Diener-Bonus (null = Diener hat diesen Bonus nicht). */
  minion: number | null
  /** Meister-Bonus (null = Meister hat diesen Bonus nicht). */
  master: number | null
}

export interface AbilityCategory {
  /** Nur für die Energie-Kategorie befüllt (Bonus-Herz/-Reichweite). */
  boosts: BoostRow[]
  boxes: AbilityBox[]
}

export interface AggregatedAbilities {
  /** Passive Fähigkeiten (`abilities`). */
  passive: AbilityCategory
  /** Energie (`surges`) inkl. Bonus-Zeilen. */
  surge: AbilityCategory
  /** Aktionen (`actions`). */
  action: AbilityCategory
}

/** Akt-Werte eines Rangs zusammenführen (Zahlen aus Akt II, Texte vom Akt I geerbt). */
export function statsFor(m: Monster, rank: 'normal' | 'master', act: 1 | 2): MonsterStats | undefined {
  const a1 = rank === 'master' ? m.master : m.normal
  if (act === 1) return a1
  const a2 = rank === 'master' ? m.act2Master : m.act2Normal
  if (!a2) return a1 // defensiv: fehlt der Akt-II-Block, Akt-I-Werte zeigen
  return {
    ...a2,
    surges: a2.surges ?? a1?.surges,
    abilities: a2.abilities ?? a1?.abilities,
    actions: a2.actions ?? a1?.actions,
  }
}

const BOOST_RE = /^\+\s*(\d+)\s+(Herzen|Herz|Reichweite)\b/

/** Erkennt Bonus-Energie-Einträge („+2 Herzen", „+1 Reichweite"). */
function parseBoost(s: string): { n: number; kind: 'heart' | 'range' } | null {
  const m = s.match(BOOST_RE)
  if (!m) return null
  return { n: Number(m[1]), kind: /Reich/.test(m[2]) ? 'range' : 'heart' }
}

interface ParsedEntry {
  baseName: string
  level: number | null
  description: string
}

/** Zerlegt „Name[ Stufe]: Beschreibung" in Basisname, Stufe und Beschreibung. */
function parseEntry(text: string): ParsedEntry {
  const colon = text.indexOf(':')
  const head = (colon === -1 ? text : text.slice(0, colon)).trim()
  const description = colon === -1 ? '' : text.slice(colon + 1).trim()
  const lvl = head.match(/^(.*?)\s+(\d+)$/)
  if (lvl) return { baseName: lvl[1].trim(), level: Number(lvl[2]), description }
  return { baseName: head, level: null, description }
}

const normName = (s: string): string => s.toLowerCase().trim()

function titleFor(base: string, level: number | null): string {
  return level == null ? base : `${base} ${level}`
}

/** Führt die Diener-/Meister-Einträge einer Kategorie nach Basisname zusammen. */
function groupNamed(minion: string[], master: string[]): AbilityBox[] {
  const mn = minion.map(parseEntry)
  const ms = master.map(parseEntry)

  // Reihenfolge der Basisnamen: Diener zuerst, dann nur bei Meister vorkommende.
  const order: string[] = []
  const seen = new Set<string>()
  for (const e of [...mn, ...ms]) {
    const k = normName(e.baseName)
    if (!seen.has(k)) {
      seen.add(k)
      order.push(e.baseName)
    }
  }

  const boxes: AbilityBox[] = []
  for (const base of order) {
    const k = normName(base)
    const d = mn.find((e) => normName(e.baseName) === k)
    const m = ms.find((e) => normName(e.baseName) === k)
    if (d && m) {
      if (d.level === m.level) {
        boxes.push({ baseName: base, title: titleFor(base, d.level), scope: 'both', description: d.description || m.description })
      } else {
        // Unterschiedliche Stufe → getrennte Boxen (Testfall Naga: Hexerei 1/2).
        boxes.push({ baseName: base, title: titleFor(base, d.level), scope: 'minion', description: d.description })
        boxes.push({ baseName: base, title: titleFor(base, m.level), scope: 'master', description: m.description })
      }
    } else if (d) {
      boxes.push({ baseName: base, title: titleFor(base, d.level), scope: 'minion', description: d.description })
    } else if (m) {
      boxes.push({ baseName: base, title: titleFor(base, m.level), scope: 'master', description: m.description })
    }
  }
  return boxes
}

/** Bonus-Energie beider Ränge zu Zeilen zusammenführen (pro Art summiert). */
function buildBoosts(minion: string[], master: string[]): BoostRow[] {
  const sum = (list: string[]) => {
    const acc: { heart: number; range: number } = { heart: 0, range: 0 }
    const has: { heart: boolean; range: boolean } = { heart: false, range: false }
    for (const s of list) {
      const b = parseBoost(s)
      if (!b) continue
      acc[b.kind] += b.n
      has[b.kind] = true
    }
    return { acc, has }
  }
  const d = sum(minion)
  const m = sum(master)
  const rows: BoostRow[] = []
  for (const kind of ['heart', 'range'] as const) {
    if (!d.has[kind] && !m.has[kind]) continue
    rows.push({
      kind,
      minion: d.has[kind] ? d.acc[kind] : null,
      master: m.has[kind] ? m.acc[kind] : null,
    })
  }
  return rows
}

/** Trennt Bonus-Energie-Einträge von den benannten Energie-Einträgen. */
function splitSurges(list: string[] | undefined): { boosts: string[]; named: string[] } {
  const boosts: string[] = []
  const named: string[] = []
  for (const s of list ?? []) (parseBoost(s) ? boosts : named).push(s)
  return { boosts, named }
}

/**
 * Bereitet die Fähigkeiten eines Monsters für den gewählten Akt auf. Reihenfolge
 * der Kategorien: Fähigkeiten (passiv) → Energie → Aktionen.
 */
export function aggregateAbilities(m: Monster, act: 1 | 2): AggregatedAbilities {
  const d = statsFor(m, 'normal', act)
  const mm = statsFor(m, 'master', act)

  const dSurge = splitSurges(d?.surges)
  const mSurge = splitSurges(mm?.surges)

  return {
    passive: {
      boosts: [],
      boxes: groupNamed(d?.abilities ?? [], mm?.abilities ?? []),
    },
    surge: {
      boosts: buildBoosts(dSurge.boosts, mSurge.boosts),
      boxes: groupNamed(dSurge.named, mSurge.named),
    },
    action: {
      boosts: [],
      boxes: groupNamed(d?.actions ?? [], mm?.actions ?? []),
    },
  }
}
