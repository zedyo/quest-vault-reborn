import { describe, it, expect } from 'vitest'
import { MONSTERS } from '../monsters'
import { HEROES } from '../heroes'
import { MAP_TILES, getTilePartner } from '../mapTiles'
import { EXPANSIONS } from '../expansions'
import type { DieColor, MonsterStats } from '../../types/game'

const EXPANSION_IDS = new Set(EXPANSIONS.map((e) => e.id))

// In Descent 2e: Angriffswürfel = blau/rot/gelb/grün, Verteidigungswürfel = grau/braun/schwarz
const ATTACK_DICE: DieColor[] = ['blue', 'red', 'yellow', 'green']
const DEFENSE_DICE: DieColor[] = ['gray', 'brown', 'black']

// Chaosbiest greift via "Wandeln" mit den Würfeln anderer Figuren an –
// die Karte hat regelkonform keinen eigenen Angriffspool.
const EMPTY_ATTACK_ALLOWED = new Set(['chaos-beast'])

function checkStats(monsterId: string, label: string, stats: MonsterStats | undefined, errors: string[]) {
  if (!stats) return
  if (stats.speed < 1 || stats.speed > 10) errors.push(`${label}: speed ${stats.speed} unplausibel`)
  if (stats.health < 1 || stats.health > 40) errors.push(`${label}: health ${stats.health} unplausibel`)
  for (const d of stats.defense) {
    if (!DEFENSE_DICE.includes(d)) errors.push(`${label}: '${d}' ist kein Verteidigungswürfel`)
  }
  for (const d of stats.attack) {
    if (!ATTACK_DICE.includes(d)) errors.push(`${label}: '${d}' ist kein Angriffswürfel`)
  }
  if (stats.attack.length === 0 && !EMPTY_ATTACK_ALLOWED.has(monsterId))
    errors.push(`${label}: Angriffspool leer`)
}

describe('Monster-Datenintegrität', () => {
  it('hat keine doppelten IDs', () => {
    const ids = MONSTERS.map((m) => m.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('alle Pflichtfelder vorhanden', () => {
    for (const m of MONSTERS) {
      expect(m.id, `Monster ohne id`).toBeTruthy()
      expect(m.nameDe, `${m.id}: nameDe fehlt`).toBeTruthy()
      expect(m.nameEn, `${m.id}: nameEn fehlt`).toBeTruthy()
      expect(m.expansionId, `${m.id}: expansionId fehlt`).toBeTruthy()
    }
  })

  it('IDs sind kebab-case', () => {
    for (const m of MONSTERS) {
      expect(m.id, `${m.id} ist nicht kebab-case`).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
    }
  })

  it('alle expansionIds existieren', () => {
    for (const m of MONSTERS) {
      expect(EXPANSION_IDS.has(m.expansionId), `${m.id}: unbekannte expansionId '${m.expansionId}'`).toBe(true)
    }
  })

  it('vollständige Werteblöcke (Akt 1+2, Normal+Meister)', () => {
    for (const m of MONSTERS) {
      expect(m.normal, `${m.id}: normal fehlt`).toBeDefined()
      expect(m.master, `${m.id}: master fehlt`).toBeDefined()
      expect(m.act2Normal, `${m.id}: act2Normal fehlt`).toBeDefined()
      expect(m.act2Master, `${m.id}: act2Master fehlt`).toBeDefined()
    }
  })

  it('Würfelfarben und Wertebereiche sind gültig', () => {
    const errors: string[] = []
    for (const m of MONSTERS) {
      checkStats(m.id, `${m.id}.normal`, m.normal, errors)
      checkStats(m.id, `${m.id}.master`, m.master, errors)
      checkStats(m.id, `${m.id}.act2Normal`, m.act2Normal, errors)
      checkStats(m.id, `${m.id}.act2Master`, m.act2Master, errors)
    }
    expect(errors, errors.join('\n')).toEqual([])
  })

  it('Meister hat mindestens so viele LP wie Normal (gleicher Akt)', () => {
    const errors: string[] = []
    for (const m of MONSTERS) {
      if (m.normal && m.master && m.master.health < m.normal.health)
        errors.push(`${m.id}: Akt1 Meister-LP (${m.master.health}) < Normal-LP (${m.normal.health})`)
      if (m.act2Normal && m.act2Master && m.act2Master.health < m.act2Normal.health)
        errors.push(`${m.id}: Akt2 Meister-LP (${m.act2Master.health}) < Normal-LP (${m.act2Normal.health})`)
    }
    expect(errors, errors.join('\n')).toEqual([])
  })
})

describe('Helden-Datenintegrität', () => {
  it('hat keine doppelten IDs', () => {
    const ids = HEROES.map((h) => h.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('alle Pflichtfelder und gültige Archetypen', () => {
    for (const h of HEROES) {
      expect(h.id, 'Held ohne id').toBeTruthy()
      expect(h.name, `${h.id}: name fehlt`).toBeTruthy()
      expect(['krieger', 'heiler', 'magier', 'spaeher'], `${h.id}: ungültiger Archetyp`).toContain(h.archetype)
      expect(EXPANSION_IDS.has(h.expansionId), `${h.id}: unbekannte expansionId '${h.expansionId}'`).toBe(true)
    }
  })

  it('vollständige Spielwerte', () => {
    for (const h of HEROES) {
      expect(h.speed, `${h.id}: speed fehlt`).toBeDefined()
      expect(h.health, `${h.id}: health fehlt`).toBeDefined()
      expect(h.stamina, `${h.id}: stamina fehlt`).toBeDefined()
      expect(h.defense, `${h.id}: defense fehlt`).toBeDefined()
      expect(h.might, `${h.id}: might fehlt`).toBeDefined()
      expect(h.knowledge, `${h.id}: knowledge fehlt`).toBeDefined()
      expect(h.willpower, `${h.id}: willpower fehlt`).toBeDefined()
      expect(h.awareness, `${h.id}: awareness fehlt`).toBeDefined()
      expect(h.heroAbility, `${h.id}: heroAbility fehlt`).toBeTruthy()
      expect(h.heroicFeat, `${h.id}: heroicFeat fehlt`).toBeTruthy()
    }
  })

  it('Wertebereiche plausibel', () => {
    const errors: string[] = []
    for (const h of HEROES) {
      if (h.speed! < 2 || h.speed! > 6) errors.push(`${h.id}: speed ${h.speed}`)
      if (h.health! < 6 || h.health! > 18) errors.push(`${h.id}: health ${h.health}`)
      if (h.stamina! < 2 || h.stamina! > 7) errors.push(`${h.id}: stamina ${h.stamina}`)
      for (const attr of ['might', 'knowledge', 'willpower', 'awareness'] as const) {
        const v = h[attr]!
        if (v < 1 || v > 6) errors.push(`${h.id}: ${attr} ${v}`)
      }
    }
    expect(errors, errors.join('\n')).toEqual([])
  })
})

describe('Map-Tile-Datenintegrität', () => {
  it('hat keine doppelten IDs', () => {
    const ids = MAP_TILES.map((t) => t.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('alle expansionIds existieren', () => {
    for (const t of MAP_TILES) {
      expect(EXPANSION_IDS.has(t.expansionId), `${t.id}: unbekannte expansionId '${t.expansionId}'`).toBe(true)
    }
  })

  it('cols/rows sind positiv', () => {
    for (const t of MAP_TILES) {
      expect(t.cols, `${t.id}: cols`).toBeGreaterThan(0)
      expect(t.rows, `${t.id}: rows`).toBeGreaterThan(0)
    }
  })

  it('a/b-Partnerseiten haben identische Maße', () => {
    const errors: string[] = []
    const byId = new Map(MAP_TILES.map((t) => [t.id, t]))
    for (const t of MAP_TILES) {
      const partnerId = getTilePartner(t.id)
      if (!partnerId) continue
      const partner = byId.get(partnerId)
      if (!partner) {
        errors.push(`${t.id}: Partnerseite ${partnerId} fehlt`)
        continue
      }
      if (partner.cols !== t.cols || partner.rows !== t.rows)
        errors.push(`${t.id} (${t.cols}×${t.rows}) ≠ ${partnerId} (${partner.cols}×${partner.rows})`)
    }
    expect(errors, errors.join('\n')).toEqual([])
  })

  it('Connector-Objekte haben alle 4 Seiten als boolean', () => {
    for (const t of MAP_TILES) {
      if (!t.connectors) continue
      for (const side of ['top', 'right', 'bottom', 'left'] as const) {
        expect(typeof t.connectors[side], `${t.id}: connectors.${side}`).toBe('boolean')
      }
    }
  })
})

describe('Erweiterungs-Datenintegrität', () => {
  it('hat keine doppelten IDs', () => {
    const ids = EXPANSIONS.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('Pflichtfelder vorhanden', () => {
    for (const e of EXPANSIONS) {
      expect(e.nameDe, `${e.id}: nameDe`).toBeTruthy()
      expect(e.nameEn, `${e.id}: nameEn`).toBeTruthy()
      expect(e.year, `${e.id}: year`).toBeGreaterThan(2010)
    }
  })
})
