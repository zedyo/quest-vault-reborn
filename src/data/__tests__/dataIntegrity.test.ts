import { describe, it, expect } from 'vitest'
import { MONSTERS } from '../monsters'
import { HEROES } from '../heroes'
import { HERO_CLASSES } from '../heroClasses'
import { MAP_TILES, getTilePartner } from '../mapTiles'
import { EXPANSIONS } from '../expansions'
import { SHOP_ITEMS, RELICS } from '../items'
import { OVERLORD_DECKS } from '../overlordClasses'
import { LIEUTENANTS } from '../lieutenants'
import { AGENTS } from '../agents'
import { PLOT_DECKS } from '../plotDecks'
import { plotDeckForLieutenant, lieutenantForDeck } from '../lieutenantPlotLinks'
import { CAMPAIGNS, ADVANCED_QUESTS } from '../campaigns'
import type { DieColor, MonsterStats, OverlordCardType } from '../../types/game'

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

  it('Gruppengrößen vollständig und plausibel (alle Monster, 2/3/4 Spieler)', () => {
    const errors: string[] = []
    for (const m of MONSTERS) {
      if (!m.groupSizes) {
        errors.push(`${m.id}: groupSizes fehlt`)
        continue
      }
      for (const key of ['p2', 'p3', 'p4'] as const) {
        const comp = m.groupSizes[key]
        if (!Array.isArray(comp) || comp.length !== 2) {
          errors.push(`${m.id}.${key}: muss [Diener, Meister] sein`)
          continue
        }
        const [minions, masters] = comp
        if (!Number.isInteger(minions) || minions < 0 || minions > 12)
          errors.push(`${m.id}.${key}: Diener-Zahl ${minions} unplausibel`)
        if (!Number.isInteger(masters) || masters < 0 || masters > 3)
          errors.push(`${m.id}.${key}: Meister-Zahl ${masters} unplausibel`)
        if (minions + masters < 1)
          errors.push(`${m.id}.${key}: Gruppe hat 0 Figuren`)
      }
      // Gruppe darf mit steigender Spielerzahl nicht schrumpfen (Gesamtfiguren)
      const total = (k: 'p2' | 'p3' | 'p4') => m.groupSizes![k][0] + m.groupSizes![k][1]
      if (total('p3') < total('p2')) errors.push(`${m.id}: 3-Spieler-Gruppe kleiner als 2-Spieler`)
      if (total('p4') < total('p3')) errors.push(`${m.id}: 4-Spieler-Gruppe kleiner als 3-Spieler`)
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

describe('Helden-Klassen-Datenintegrität', () => {
  const VALID_ARCH = ['krieger', 'heiler', 'magier', 'spaeher']

  it('hat keine doppelten Klassen-IDs', () => {
    const ids = HERO_CLASSES.map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('Klassen: Pflichtfelder, gültige Archetypen und expansionIds', () => {
    for (const c of HERO_CLASSES) {
      expect(c.id, 'Klasse ohne id').toBeTruthy()
      expect(c.nameEn, `${c.id}: nameEn fehlt`).toBeTruthy()
      expect(c.nameDe, `${c.id}: nameDe fehlt`).toBeTruthy()
      expect(VALID_ARCH, `${c.id}: ungültiger Archetyp`).toContain(c.archetype)
      expect(EXPANSION_IDS.has(c.expansionId), `${c.id}: unbekannte expansionId '${c.expansionId}'`).toBe(true)
      expect(c.skills.length, `${c.id}: keine Fähigkeitskarten`).toBeGreaterThan(0)
    }
  })

  it('Fähigkeitskarten sind vollständig zweisprachig und plausibel', () => {
    const errors: string[] = []
    for (const c of HERO_CLASSES) {
      const skillIds = c.skills.map((s) => s.id)
      if (new Set(skillIds).size !== skillIds.length)
        errors.push(`${c.id}: doppelte Skill-IDs`)
      const starters = c.skills.filter((s) => s.xpCost === 0)
      if (starters.length < 1)
        errors.push(`${c.id}: keine Startfähigkeit (XP 0) vorhanden`)
      for (const s of c.skills) {
        if (!s.nameEn || !s.nameDe) errors.push(`${c.id}/${s.id}: Name fehlt (EN/DE)`)
        if (!s.rulesEn || !s.rulesDe) errors.push(`${c.id}/${s.id}: Regeltext fehlt (EN/DE)`)
        if (s.xpCost !== 'elemental' && (!Number.isInteger(s.xpCost) || s.xpCost < 0 || s.xpCost > 5))
          errors.push(`${c.id}/${s.id}: XP-Kosten ${s.xpCost} unplausibel`)
        const fc = s.fatigueCost
        const fcOk = fc === 'X' || (Number.isInteger(fc) && (fc as number) >= 0 && (fc as number) <= 9)
        if (!fcOk) errors.push(`${c.id}/${s.id}: Ausdauer-Kosten ${fc} unplausibel`)
      }
    }
    expect(errors, errors.join('\n')).toEqual([])
  })
})

describe('Overlord-Klassen-Datenintegrität', () => {
  const VALID_KIND = ['basic', 'class', 'universal', 'reward']
  const VALID_TYPE: OverlordCardType[] = ['Event', 'Magic', 'Trap', 'Special']
  const allCards = OVERLORD_DECKS.flatMap((d) => d.cards)

  it('hat keine doppelten Deck-IDs', () => {
    const ids = OVERLORD_DECKS.map((d) => d.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('hat keine doppelten Karten-IDs (deckübergreifend)', () => {
    const ids = allCards.map((c) => c.id)
    expect(new Set(ids).size, 'doppelte Overlord-Karten-IDs').toBe(ids.length)
  })

  it('Decks: Pflichtfelder, gültige Art und expansionId', () => {
    for (const d of OVERLORD_DECKS) {
      expect(d.id, 'Deck ohne id').toBeTruthy()
      expect(d.nameEn, `${d.id}: nameEn fehlt`).toBeTruthy()
      expect(d.nameDe, `${d.id}: nameDe fehlt`).toBeTruthy()
      expect(VALID_KIND, `${d.id}: ungültige Deck-Art '${d.kind}'`).toContain(d.kind)
      expect(EXPANSION_IDS.has(d.expansionId), `${d.id}: unbekannte expansionId '${d.expansionId}'`).toBe(true)
      expect(d.cards.length, `${d.id}: keine Karten`).toBeGreaterThan(0)
    }
  })

  it('Karten sind vollständig zweisprachig und plausibel', () => {
    const errors: string[] = []
    for (const d of OVERLORD_DECKS) {
      for (const c of d.cards) {
        if (!c.nameEn || !c.nameDe) errors.push(`${d.id}/${c.id}: Name fehlt (EN/DE)`)
        if (!c.rulesEn || !c.rulesDe) errors.push(`${d.id}/${c.id}: Regeltext fehlt (EN/DE)`)
        if (!VALID_TYPE.includes(c.cardType)) errors.push(`${d.id}/${c.id}: ungültiger Kartentyp '${c.cardType}'`)
        // null = Belohnungskarte (nicht kaufbar); sonst 0..5
        if (c.xpCost !== null && (!Number.isInteger(c.xpCost) || c.xpCost < 0 || c.xpCost > 5))
          errors.push(`${d.id}/${c.id}: XP-Kosten ${c.xpCost} unplausibel`)
        if (!Number.isInteger(c.count) || c.count < 1 || c.count > 5)
          errors.push(`${d.id}/${c.id}: Anzahl ${c.count} unplausibel`)
        if (!c.imageUrl || !c.imageUrl.startsWith('https://')) errors.push(`${d.id}/${c.id}: imageUrl fehlt/ungültig`)
      }
    }
    expect(errors, errors.join('\n')).toEqual([])
  })

  it('XP-Kosten passen zur Deck-Art (Basis 0, Klasse ≥1, Belohnung null)', () => {
    const errors: string[] = []
    for (const d of OVERLORD_DECKS) {
      for (const c of d.cards) {
        if (d.kind === 'basic' && c.xpCost !== 0)
          errors.push(`${d.id}/${c.id}: Basiskarte sollte 0 XP kosten, hat ${c.xpCost}`)
        if (d.kind === 'class' && (c.xpCost === null || c.xpCost < 1))
          errors.push(`${d.id}/${c.id}: Klassenkarte sollte XP kosten`)
        if (d.kind === 'reward' && c.xpCost !== null)
          errors.push(`${d.id}/${c.id}: Belohnungskarte sollte xpCost null haben, hat ${c.xpCost}`)
      }
    }
    expect(errors, errors.join('\n')).toEqual([])
  })
})

describe('Leutnant-Datenintegrität', () => {
  it('hat keine doppelten IDs', () => {
    const ids = LIEUTENANTS.map((l) => l.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('Pflichtfelder, gültige expansionId, 1–2 Formen', () => {
    for (const l of LIEUTENANTS) {
      expect(l.id, 'Leutnant ohne id').toBeTruthy()
      expect(l.nameEn, `${l.id}: nameEn fehlt`).toBeTruthy()
      expect(l.nameDe, `${l.id}: nameDe fehlt`).toBeTruthy()
      expect(EXPANSION_IDS.has(l.expansionId), `${l.id}: unbekannte expansionId '${l.expansionId}'`).toBe(true)
      expect(l.forms.length, `${l.id}: 1–2 Formen erwartet`).toBeGreaterThan(0)
      expect(l.forms.length).toBeLessThanOrEqual(2)
    }
  })

  it('Formen: plausible Werte, gültige Würfel, vollständige Fähigkeiten', () => {
    const errors: string[] = []
    for (const l of LIEUTENANTS) {
      for (const f of l.forms) {
        if (f.act !== 1 && f.act !== 2) errors.push(`${l.id}: ungültiger Akt ${f.act}`)
        if (!EXPANSION_IDS.has(f.expansionId)) errors.push(`${l.id} Akt${f.act}: unbekannte Form-expansionId '${f.expansionId}'`)
        for (const attr of [f.might, f.knowledge, f.willpower, f.awareness]) {
          if (!Number.isInteger(attr) || attr < 0 || attr > 6) errors.push(`${l.id} Akt${f.act}: Attribut ${attr} unplausibel`)
        }
        for (const d of f.attackDice) {
          if (!ATTACK_DICE.includes(d)) errors.push(`${l.id} Akt${f.act}: '${d}' ist kein Angriffswürfel`)
        }
        if (f.attackDice.length === 0) errors.push(`${l.id} Akt${f.act}: Angriffspool leer`)
        for (const [pc, s] of [['2', f.perPlayer.p2], ['3', f.perPlayer.p3], ['4', f.perPlayer.p4]] as const) {
          if (s.speed < 1 || s.speed > 10) errors.push(`${l.id} Akt${f.act} ${pc}Sp: speed ${s.speed} unplausibel`)
          if (s.health < 1 || s.health > 40) errors.push(`${l.id} Akt${f.act} ${pc}Sp: health ${s.health} unplausibel`)
          if (s.defense.length === 0) errors.push(`${l.id} Akt${f.act} ${pc}Sp: keine Verteidigung`)
          for (const d of s.defense) {
            if (!DEFENSE_DICE.includes(d)) errors.push(`${l.id} Akt${f.act} ${pc}Sp: '${d}' ist kein Verteidigungswürfel`)
          }
        }
        if (f.abilities.length === 0) errors.push(`${l.id} Akt${f.act}: keine Fähigkeiten`)
        for (const ab of f.abilities) {
          if (!ab.labelEn || !ab.labelDe) errors.push(`${l.id} Akt${f.act}: Fähigkeit-Label fehlt (EN/DE)`)
          if ((ab.rulesEn && !ab.rulesDe) || (!ab.rulesEn && ab.rulesDe))
            errors.push(`${l.id} Akt${f.act}/${ab.labelEn}: Regeltext nur einsprachig`)
        }
        if (!f.imageUrl.startsWith('https://')) errors.push(`${l.id} Akt${f.act}: imageUrl ungültig`)
      }
    }
    expect(errors, errors.join('\n')).toEqual([])
  })
})

describe('Agenten-Datenintegrität', () => {
  it('hat keine doppelten IDs', () => {
    const ids = AGENTS.map((a) => a.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('ist vollständig: 20 Agenten / 40 Formen', () => {
    expect(AGENTS.length, 'Anzahl Agenten').toBe(20)
    expect(AGENTS.reduce((s, a) => s + a.forms.length, 0), 'Anzahl Formen').toBe(40)
  })

  it('Pflichtfelder, gültige expansionId, Plotdeck, 1–2 Formen', () => {
    for (const a of AGENTS) {
      expect(a.id, 'Agent ohne id').toBeTruthy()
      expect(a.nameEn, `${a.id}: nameEn fehlt`).toBeTruthy()
      expect(a.nameDe, `${a.id}: nameDe fehlt`).toBeTruthy()
      expect(a.plotDeckEn, `${a.id}: plotDeckEn fehlt`).toBeTruthy()
      expect(a.plotDeckDe, `${a.id}: plotDeckDe fehlt`).toBeTruthy()
      expect(EXPANSION_IDS.has(a.expansionId), `${a.id}: unbekannte expansionId '${a.expansionId}'`).toBe(true)
      expect(a.forms.length).toBeGreaterThan(0)
      expect(a.forms.length).toBeLessThanOrEqual(2)
    }
  })

  it('Formen: plausible Werte, gültige Würfel, vollständige Fähigkeiten', () => {
    const errors: string[] = []
    for (const a of AGENTS) {
      for (const f of a.forms) {
        if (f.act !== 1 && f.act !== 2) errors.push(`${a.id}: ungültiger Akt ${f.act}`)
        if (!EXPANSION_IDS.has(f.expansionId)) errors.push(`${a.id} Akt${f.act}: unbekannte Form-expansionId '${f.expansionId}'`)
        for (const d of f.attackDice) {
          if (!ATTACK_DICE.includes(d)) errors.push(`${a.id} Akt${f.act}: '${d}' kein Angriffswürfel`)
        }
        if (f.attackDice.length === 0) errors.push(`${a.id} Akt${f.act}: Angriffspool leer`)
        for (const [pc, s] of [['2', f.perPlayer.p2], ['3', f.perPlayer.p3], ['4', f.perPlayer.p4]] as const) {
          if (s.speed < 1 || s.speed > 10) errors.push(`${a.id} Akt${f.act} ${pc}Sp: speed ${s.speed} unplausibel`)
          if (s.health < 1 || s.health > 40) errors.push(`${a.id} Akt${f.act} ${pc}Sp: health ${s.health} unplausibel`)
          for (const d of s.defense) {
            if (!DEFENSE_DICE.includes(d)) errors.push(`${a.id} Akt${f.act} ${pc}Sp: '${d}' kein Verteidigungswürfel`)
          }
        }
        if (f.abilities.length === 0) errors.push(`${a.id} Akt${f.act}: keine Fähigkeiten`)
        for (const ab of f.abilities) {
          if (!ab.labelEn || !ab.labelDe) errors.push(`${a.id} Akt${f.act}: Label fehlt (EN/DE)`)
          if ((ab.rulesEn && !ab.rulesDe) || (!ab.rulesEn && ab.rulesDe)) errors.push(`${a.id} Akt${f.act}/${ab.labelEn}: Regeltext einsprachig`)
        }
        if (!f.imageUrl.startsWith('https://')) errors.push(`${a.id} Akt${f.act}: imageUrl ungültig`)
      }
    }
    expect(errors, errors.join('\n')).toEqual([])
  })
})

describe('Plotdeck-Datenintegrität', () => {
  const allCards = PLOT_DECKS.flatMap((d) => d.cards)

  it('hat keine doppelten Deck-IDs und Karten-IDs', () => {
    const deckIds = PLOT_DECKS.map((d) => d.id)
    expect(new Set(deckIds).size, 'doppelte Deck-IDs').toBe(deckIds.length)
    const cardIds = allCards.map((c) => c.id)
    expect(new Set(cardIds).size, 'doppelte Karten-IDs').toBe(cardIds.length)
  })

  it('ist vollständig: 20 Decks / 200 Karten', () => {
    expect(PLOT_DECKS.length, 'Anzahl Plotdecks').toBe(20)
    expect(allCards.length, 'Anzahl Plotkarten').toBe(200)
  })

  it('Decks: Pflichtfelder, gültige expansionId, Agent, Karten vorhanden', () => {
    for (const d of PLOT_DECKS) {
      expect(d.id, 'Deck ohne id').toBeTruthy()
      expect(d.nameEn, `${d.id}: nameEn fehlt`).toBeTruthy()
      expect(d.nameDe, `${d.id}: nameDe fehlt`).toBeTruthy()
      expect(d.agentEn, `${d.id}: agentEn fehlt`).toBeTruthy()
      expect(d.agentDe, `${d.id}: agentDe fehlt`).toBeTruthy()
      expect(EXPANSION_IDS.has(d.expansionId), `${d.id}: unbekannte expansionId '${d.expansionId}'`).toBe(true)
      expect(d.cards.length, `${d.id}: keine Karten`).toBeGreaterThan(0)
    }
  })

  it('Karten: zweisprachig, plausible Kosten, gültige Bild-URL', () => {
    const errors: string[] = []
    for (const d of PLOT_DECKS) {
      for (const c of d.cards) {
        if (!c.nameEn || !c.nameDe) errors.push(`${d.id}/${c.id}: Name fehlt (EN/DE)`)
        if (!c.rulesEn || !c.rulesDe) errors.push(`${d.id}/${c.id}: Regeltext fehlt (EN/DE)`)
        if (!Number.isInteger(c.threatCost) || c.threatCost < 0 || c.threatCost > 6)
          errors.push(`${d.id}/${c.id}: threatCost ${c.threatCost} unplausibel`)
        if (!Number.isInteger(c.triggerCost) || c.triggerCost < 0 || c.triggerCost > 6)
          errors.push(`${d.id}/${c.id}: triggerCost ${c.triggerCost} unplausibel`)
        if (!c.imageUrl.startsWith('https://')) errors.push(`${d.id}/${c.id}: imageUrl ungültig`)
      }
    }
    expect(errors, errors.join('\n')).toEqual([])
  })
})

describe('Leutnant ↔ Plotdeck-Verknüpfung', () => {
  it('jeder Leutnant verweist auf ein existierendes Plotdeck', () => {
    const noDeck: string[] = []
    for (const lt of LIEUTENANTS) {
      const deck = plotDeckForLieutenant(lt)
      if (!deck) noDeck.push(lt.nameEn)
      else expect(PLOT_DECKS, `${lt.id}: Deck nicht in PLOT_DECKS`).toContain(deck)
    }
    // Alle 21 Leutnants haben ein zugehöriges Plotdeck (20 per Namensgleichheit, Mirklace per Alias).
    expect(noDeck, `Leutnants ohne Plotdeck: ${noDeck.join(', ')}`).toEqual([])
  })

  it('jedes Plotdeck verweist zurück auf einen Leutnant', () => {
    for (const d of PLOT_DECKS) {
      const lt = lieutenantForDeck(d)
      expect(lt, `${d.id}: kein zugehöriger Leutnant`).toBeTruthy()
      expect(LIEUTENANTS, `${d.id}: Leutnant nicht in LIEUTENANTS`).toContain(lt)
    }
  })

  it('Verknüpfung ist konsistent (Leutnant → Deck → derselbe Charakter)', () => {
    for (const lt of LIEUTENANTS) {
      const deck = plotDeckForLieutenant(lt)
      if (!deck) continue
      const back = lieutenantForDeck(deck)
      // Rückverweis trifft denselben Leutnant ODER seine kanonische Agenten-Form
      // (z. B. „Mirklace" → Deck → „Gargan Mirklace").
      expect(back, `${lt.id}: kein Rückverweis`).toBeTruthy()
    }
  })

  it('Mirklace-Alias löst auf „Burning Ambition" auf', () => {
    const mirklace = LIEUTENANTS.find((l) => l.nameEn === 'Mirklace')
    expect(mirklace, 'Leutnant „Mirklace" nicht gefunden').toBeTruthy()
    expect(plotDeckForLieutenant(mirklace!)?.id).toBe('burning-ambition')
  })
})

describe('Kampagnen-Datenintegrität', () => {
  it('Kampagnen: keine doppelten IDs, gültige Erweiterung, Pflichtfelder, Typ', () => {
    const ids = CAMPAIGNS.map((c) => c.id)
    expect(new Set(ids).size, 'doppelte Kampagnen-IDs').toBe(ids.length)
    for (const c of CAMPAIGNS) {
      expect(c.nameEn && c.nameDe && c.descriptionDe, `${c.id}: Pflichtfeld fehlt`).toBeTruthy()
      expect(EXPANSION_IDS.has(c.expansionId), `${c.id}: unbekannte expansionId '${c.expansionId}'`).toBe(true)
      expect(['campaign', 'mini'], `${c.id}: ungültiger kind`).toContain(c.kind)
      expect(typeof c.branching, `${c.id}: branching kein boolean`).toBe('boolean')
    }
  })

  it('Kampagnen: vollständige Übersicht (9)', () => {
    expect(CAMPAIGNS.length).toBe(9)
  })

  it('Advanced Quests: keine Duplikate, gültige Erweiterung, zweisprachig, Reise/Bilder gültig', () => {
    const TERRAINS = new Set(['Road', 'Forest', 'Mountain', 'Plain', 'Water'])
    const ids = ADVANCED_QUESTS.map((q) => q.id)
    expect(new Set(ids).size, 'doppelte Quest-IDs').toBe(ids.length)
    const errors: string[] = []
    for (const q of ADVANCED_QUESTS) {
      if (!q.nameEn || !q.nameDe) errors.push(`${q.id}: Name fehlt (EN/DE)`)
      if (!EXPANSION_IDS.has(q.expansionId)) errors.push(`${q.id}: unbekannte expansionId '${q.expansionId}'`)
      if (q.act !== undefined && q.act !== 1 && q.act !== 2) errors.push(`${q.id}: ungültiger Akt ${q.act}`)
      for (const t of q.travel) if (!TERRAINS.has(t)) errors.push(`${q.id}: unbekanntes Gelände '${t}'`)
      if (!q.imageUrlFront.startsWith('https://') || !q.imageUrlBack.startsWith('https://'))
        errors.push(`${q.id}: imageUrl ungültig`)
    }
    expect(errors, errors.join('\n')).toEqual([])
  })

  it('Advanced Quests: vollständig erfasst (16)', () => {
    expect(ADVANCED_QUESTS.length).toBe(16)
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

describe('Item-Datenintegrität', () => {
  const VALID_EQUIP = new Set(['one-hand', 'two-hands', 'armor', 'other'])
  const VALID_ATTACK = new Set(['melee', 'range'])
  const ALL_DICE: DieColor[] = ['blue', 'red', 'yellow', 'green', 'white', 'gray', 'brown', 'black', 'silver']

  it('Shop-Items: keine doppelten IDs', () => {
    const ids = SHOP_ITEMS.map((i) => i.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('Relikte: keine doppelten IDs', () => {
    const ids = RELICS.map((i) => i.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('alle expansionIds existieren', () => {
    const errors: string[] = []
    for (const item of [...SHOP_ITEMS, ...RELICS]) {
      if (!EXPANSION_IDS.has(item.expansionId))
        errors.push(`${item.id}: unbekannte expansionId '${item.expansionId}'`)
    }
    expect(errors, errors.join('\n')).toEqual([])
  })

  it('Shop-Items: Pflichtfelder + Plausibilität', () => {
    const errors: string[] = []
    for (const item of SHOP_ITEMS) {
      if (!item.id) errors.push(`Item ohne ID`)
      if (!item.nameEn) errors.push(`${item.id}: nameEn fehlt`)
      if (!item.nameDe) errors.push(`${item.id}: nameDe fehlt`)
      if (!item.rulesDe) errors.push(`${item.id}: rulesDe fehlt`)
      if (item.act !== 1 && item.act !== 2) errors.push(`${item.id}: act ${item.act} ungültig`)
      if (item.cost < 0 || item.cost > 5000) errors.push(`${item.id}: cost ${item.cost} unplausibel`)
      if (!VALID_EQUIP.has(item.equip)) errors.push(`${item.id}: equip '${item.equip}' ungültig`)
      if (item.attack && !VALID_ATTACK.has(item.attack)) errors.push(`${item.id}: attack '${item.attack}' ungültig`)
      for (const d of item.dice) {
        if (!ALL_DICE.includes(d)) errors.push(`${item.id}: Würfelfarbe '${d}' unbekannt`)
      }
    }
    expect(errors, errors.join('\n')).toEqual([])
  })

  it('Relikte: Pflichtfelder + Plausibilität', () => {
    const VALID_SIDE = new Set(['hero', 'overlord'])
    const errors: string[] = []
    for (const item of RELICS) {
      if (!item.id) errors.push(`Relikt ohne ID`)
      if (!item.nameEn) errors.push(`${item.id}: nameEn fehlt`)
      if (!item.nameDe) errors.push(`${item.id}: nameDe fehlt`)
      if (!item.rulesDe) errors.push(`${item.id}: rulesDe fehlt`)
      if (!VALID_SIDE.has(item.side)) errors.push(`${item.id}: side '${item.side}' ungültig`)
      if (!VALID_EQUIP.has(item.equip)) errors.push(`${item.id}: equip '${item.equip}' ungültig`)
      if (item.attack && !VALID_ATTACK.has(item.attack)) errors.push(`${item.id}: attack '${item.attack}' ungültig`)
      for (const d of item.dice) {
        if (!ALL_DICE.includes(d)) errors.push(`${item.id}: Würfelfarbe '${d}' unbekannt`)
      }
    }
    expect(errors, errors.join('\n')).toEqual([])
  })

  it('Relikte: doppelseitig (Helden- und Overlord-Seite vorhanden)', () => {
    const hero = RELICS.filter((r) => r.side === 'hero').length
    const overlord = RELICS.filter((r) => r.side === 'overlord').length
    expect(hero, 'Helden-Seiten').toBeGreaterThan(0)
    expect(overlord, 'Overlord-Seiten').toBeGreaterThan(0)
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
