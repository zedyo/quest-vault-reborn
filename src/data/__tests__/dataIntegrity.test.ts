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
import { CAMPAIGN_SCENARIOS, scenariosForCampaign } from '../campaignScenarios'
import { TRAVEL_CARDS } from '../travelCards'
import { RUMORS } from '../rumors'
import { CONDITIONS } from '../conditions'
import { SEARCH_INDEX, SEARCH_CATEGORIES } from '../rulesSearchIndex'
import {
  GAME_SYMBOLS,
  ATTACK_DICE as REF_ATTACK_DICE,
  DEFENSE_DICE as REF_DEFENSE_DICE,
  GAMEPLAY_STEPS,
  GLOSSARY,
} from '../rulesReference'
import { THEMES, DEFAULT_THEME } from '../../theme'
import { OVERLAYS, OVERLAY_BY_ID } from '../overlays'
import { ERRATA } from '../errata'
import { RULE_CLARIFICATIONS, CRRG_SOURCE } from '../ruleClarifications'
import { LINKED_ERRATA, getErrata, getMonsterAbilityErrata, MONSTER_ABILITY_ERRATA, ERRATA_LINK_STATS } from '../errataLinks'
import type { DieColor, MonsterStats, OverlordCardType, ErrataScope } from '../../types/game'

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

  it('Angriffsart (attackType) vollständig und gültig (melee | range)', () => {
    const errors: string[] = []
    for (const m of MONSTERS) {
      if (m.attackType == null) {
        errors.push(`${m.id}: attackType fehlt`)
      } else if (m.attackType !== 'melee' && m.attackType !== 'range') {
        errors.push(`${m.id}: attackType '${m.attackType}' ungültig`)
      }
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

  it('jede Startausrüstung + jeder Begleiter hat ein deutsches Kartenbild (public/cards/de/classes)', () => {
    const files = import.meta.glob('/public/cards/de/classes/*.webp')
    const present = new Set(Object.keys(files).map((p) => p.split('/').pop()!.replace('.webp', '')))
    const missing: string[] = []
    for (const c of HERO_CLASSES) {
      for (const it of c.startingEquipment ?? []) {
        if (!present.has(it.id)) missing.push(`item ${it.id}`)
      }
      if (c.familiar && !present.has(`familiar-${c.id}`)) missing.push(`familiar-${c.id}`)
    }
    expect(missing, `fehlende Klassen-Kartenbilder: ${missing.join(', ')}`).toEqual([])
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

  it('jede Karte hat ein deutsches Kartenbild (105)', () => {
    const files = import.meta.glob('/public/cards/de/overlord/*.webp')
    const present = new Set(Object.keys(files).map((p) => p.split('/').pop()!.replace('.webp', '')))
    const missing = allCards.filter((c) => !present.has(c.id)).map((c) => c.id)
    expect(missing, `fehlende Overlord-Bilder: ${missing.join(', ')}`).toEqual([])
    expect(allCards.length).toBe(105)
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

  it('jede Akt-Form hat ein deutsches Hauptmann-Kartenbild (39)', () => {
    const files = import.meta.glob('/public/cards/de/lieutenants/*.webp')
    const present = new Set(Object.keys(files).map((p) => p.split('/').pop()!.replace('.webp', '')))
    const missing: string[] = []
    let forms = 0
    for (const l of LIEUTENANTS)
      for (const f of l.forms) {
        forms++
        if (!present.has(`${l.id}-act${f.act}`)) missing.push(`${l.id}-act${f.act}`)
      }
    expect(missing, `fehlende Hauptmann-Bilder: ${missing.join(', ')}`).toEqual([])
    expect(forms).toBe(39)
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

describe('Reisekarten-Datenintegrität', () => {
  const TERRAINS: Record<'travel' | 'city', Set<string>> = {
    travel: new Set(['Plain', 'Forest', 'Mountain', 'Road', 'Water']),
    city: new Set(['Street', 'Tower', 'Building', 'Sewer', 'Hazard']),
  }

  it('keine doppelten IDs', () => {
    const ids = TRAVEL_CARDS.map((c) => c.id)
    expect(new Set(ids).size, 'doppelte Reisekarten-IDs').toBe(ids.length)
  })

  it('gültige Felder: Erweiterung, Deck-Typ, Position, Gelände, Bild', () => {
    const errors: string[] = []
    for (const c of TRAVEL_CARDS) {
      if (!EXPANSION_IDS.has(c.expansionId)) errors.push(`${c.id}: unbekannte expansionId '${c.expansionId}'`)
      if (c.deckType !== 'travel' && c.deckType !== 'city') errors.push(`${c.id}: ungültiger deckType '${c.deckType}'`)
      if (!Number.isInteger(c.position) || c.position < 1) errors.push(`${c.id}: position ${c.position} unplausibel`)
      if (!Number.isInteger(c.total) || c.total < 1) errors.push(`${c.id}: total ${c.total} unplausibel`)
      if (c.eventTerrains.length === 0) errors.push(`${c.id}: keine Ereignis-Gelände`)
      for (const t of c.eventTerrains) if (!TERRAINS[c.deckType].has(t)) errors.push(`${c.id}: '${t}' kein ${c.deckType}-Gelände`)
      if (!c.imageUrl.startsWith('https://')) errors.push(`${c.id}: imageUrl ungültig`)
    }
    expect(errors, errors.join('\n')).toEqual([])
  })

  it('vollständig erfasst: 41 Karten (31 Reise + 10 Stadt)', () => {
    expect(TRAVEL_CARDS.length).toBe(41)
    expect(TRAVEL_CARDS.filter((c) => c.deckType === 'travel').length).toBe(31)
    expect(TRAVEL_CARDS.filter((c) => c.deckType === 'city').length).toBe(10)
  })

  it('deutsches Kartenbild + Ereignistext (eventsDe) für alle 41', () => {
    const files = import.meta.glob('/public/cards/de/reisekarten/*.webp')
    const present = new Set(Object.keys(files).map((p) => p.split('/').pop()!.replace('.webp', '')))
    const allTerr = new Set([...TERRAINS.travel, ...TERRAINS.city])
    const errors: string[] = []
    for (const c of TRAVEL_CARDS) {
      if (!present.has(c.id)) errors.push(`${c.id}: deutsches Bild fehlt`)
      if (!c.eventsDe || c.eventsDe.length === 0) { errors.push(`${c.id}: eventsDe fehlt`); continue }
      for (const e of c.eventsDe) {
        if (!allTerr.has(e.terrainEn)) errors.push(`${c.id}: '${e.terrainEn}' kein Gelände`)
        if (!e.textDe.trim()) errors.push(`${c.id}: leerer Ereignistext`)
      }
    }
    expect(errors, errors.join('\n')).toEqual([])
  })
})

describe('Gerücht-Karten-Datenintegrität', () => {
  const TERRAINS = new Set(['Plain', 'Forest', 'Mountain', 'Road', 'Water'])

  it('keine doppelten IDs', () => {
    const ids = RUMORS.map((r) => r.id)
    expect(new Set(ids).size, 'doppelte Gerücht-IDs').toBe(ids.length)
  })

  it('gültige Felder: Name, Erweiterung, Akt, Reise-Gelände', () => {
    const errors: string[] = []
    for (const r of RUMORS) {
      if (!r.nameDe || !r.nameEn) errors.push(`${r.id}: Name fehlt`)
      if (!EXPANSION_IDS.has(r.expansionId)) errors.push(`${r.id}: unbekannte expansionId '${r.expansionId}'`)
      if (r.act !== 1 && r.act !== 2 && r.act !== null) errors.push(`${r.id}: ungültiger Akt '${r.act}'`)
      for (const t of r.travel) if (!TERRAINS.has(t)) errors.push(`${r.id}: '${t}' kein Reise-Gelände`)
    }
    expect(errors, errors.join('\n')).toEqual([])
  })

  it('Kartentext + Akt-II-Rückseite konsistent', () => {
    const errors: string[] = []
    for (const r of RUMORS) {
      if (!r.textDe || r.textDe.trim().length < 10) errors.push(`${r.id}: textDe fehlt/zu kurz`)
      if (r.act === 2) {
        if (!r.back) errors.push(`${r.id}: Akt-II-Karte ohne back`)
        else if (!r.back.overlordDe.trim() || !r.back.heroDe.trim())
          errors.push(`${r.id}: back-Belohnung leer`)
      } else if (r.back) {
        errors.push(`${r.id}: back nur bei Akt II erlaubt`)
      }
    }
    expect(errors, errors.join('\n')).toEqual([])
  })

  it('jedes deutsche Kartenbild (Vorder- + Akt-II-Rückseite) ist vorhanden', () => {
    const files = import.meta.glob('/public/cards/de/geruechte/*.webp')
    const present = new Set(Object.keys(files).map((p) => p.split('/').pop()!.replace('.webp', '')))
    const missing: string[] = []
    for (const r of RUMORS) {
      if (!present.has(r.id)) missing.push(r.id)
      if (r.back && !present.has(`${r.id}-back`)) missing.push(`${r.id}-back`)
    }
    expect(missing, `fehlende Bilder: ${missing.join(', ')}`).toEqual([])
  })

  it('vollständig erfasst: 41 Karten (25 Akt I + 16 Akt II)', () => {
    expect(RUMORS.length).toBe(41)
    expect(RUMORS.filter((r) => r.act === 2).length).toBe(16)
    expect(RUMORS.filter((r) => r.act !== 2).length).toBe(25)
    expect(RUMORS.filter((r) => r.back).length).toBe(16)
  })
})

describe('Zustands-Datenintegrität', () => {
  it('keine doppelten IDs + vollständig (10)', () => {
    const ids = CONDITIONS.map((c) => c.id)
    expect(new Set(ids).size, 'doppelte Zustands-IDs').toBe(ids.length)
    expect(CONDITIONS.length).toBe(10)
  })

  it('Pflichtfelder, gültige Erweiterung, Effekttext', () => {
    const errors: string[] = []
    for (const c of CONDITIONS) {
      if (!c.nameDe || !c.nameEn) errors.push(`${c.id}: Name fehlt`)
      if (!EXPANSION_IDS.has(c.expansionId)) errors.push(`${c.id}: unbekannte expansionId '${c.expansionId}'`)
      if (!c.textDe || c.textDe.trim().length < 10) errors.push(`${c.id}: textDe fehlt/zu kurz`)
    }
    expect(errors, errors.join('\n')).toEqual([])
  })

  it('jede Zustandskarte hat ein deutsches Kartenbild', () => {
    const files = import.meta.glob('/public/cards/de/zustand/*.webp')
    const present = new Set(Object.keys(files).map((p) => p.split('/').pop()!.replace('.webp', '')))
    const missing = CONDITIONS.filter((c) => !present.has(c.id)).map((c) => c.id)
    expect(missing, `fehlende Zustands-Bilder: ${missing.join(', ')}`).toEqual([])
  })
})

describe('Overlay-Datenintegrität', () => {
  const CATS = new Set(['terrain', 'passage', 'object', 'marker', 'figure'])

  it('keine doppelten IDs und OVERLAY_BY_ID deckt alle ab', () => {
    const ids = OVERLAYS.map((o) => o.id)
    expect(new Set(ids).size, 'doppelte Overlay-IDs').toBe(ids.length)
    expect(Object.keys(OVERLAY_BY_ID).length).toBe(OVERLAYS.length)
    for (const o of OVERLAYS) expect(OVERLAY_BY_ID[o.id]).toBe(o)
    expect(OVERLAYS.length, 'Overlay-Anzahl').toBe(20)
  })

  it('redundante Gelände-Trait-Marker (water/hot/ice) sind NICHT im Katalog', () => {
    // Wasser/Lava/Eis sind auf die Plättchen gedruckt, kein loses Token (v1.3.13).
    const ids = new Set(OVERLAYS.map((o) => o.id))
    for (const gone of ['water', 'hot', 'ice', 'lava', 'pit', 'sludge', 'rubble']) {
      expect(ids.has(gone), `${gone} sollte entfernt sein`).toBe(false)
    }
  })

  it('Passagen werden als Balken-Absperrung gerendert; Balken sind Passage oder Gelände', () => {
    for (const o of OVERLAYS) {
      if (o.category === 'passage') expect(o.render, `${o.id}`).toBe('bar')
      // Balken-Darstellung gibt es für Türen/Fallgitter (passage) sowie für
      // längliche Geländeleisten (Überwucherung/Alte Mauer, terrain).
      if (o.render === 'bar') expect(['passage', 'terrain'], `${o.id}`).toContain(o.category)
    }
  })

  it('Pflichtfelder, gültige Kategorie/Erweiterung, plausibler Footprint', () => {
    const errors: string[] = []
    for (const o of OVERLAYS) {
      if (!o.nameEn || !o.nameDe || !o.descriptionDe) errors.push(`${o.id}: Pflichtfeld fehlt`)
      if (!o.color || !o.icon) errors.push(`${o.id}: color/icon fehlt`)
      if (!CATS.has(o.category)) errors.push(`${o.id}: ungültige Kategorie '${o.category}'`)
      if (!EXPANSION_IDS.has(o.expansionId)) errors.push(`${o.id}: unbekannte expansionId '${o.expansionId}'`)
      if (!Number.isInteger(o.cols) || o.cols < 1 || !Number.isInteger(o.rows) || o.rows < 1)
        errors.push(`${o.id}: Footprint ${o.cols}×${o.rows} unplausibel`)
    }
    expect(errors, errors.join('\n')).toEqual([])
  })

  it('jedes Overlay hat ein transparentes Token-Bild (public/cards/de/overlays/<id>.png)', () => {
    const files = import.meta.glob('/public/cards/de/overlays/*.png')
    const present = new Set(Object.keys(files).map((p) => p.split('/').pop()!.replace('.png', '')))
    const missing = OVERLAYS.filter((o) => !present.has(o.id)).map((o) => o.id)
    expect(missing, `fehlende Overlay-Token-Bilder: ${missing.join(', ')}`).toEqual([])
  })
})

describe('Regeln-Referenz-Datenintegrität', () => {
  const VALID_SYMBOLS = new Set(['heart', 'surge', 'fatigue', 'action', 'movement', 'defense'])
  const ATTACK_COLORS = new Set<DieColor>(['blue', 'red', 'yellow', 'green'])
  const DEFENSE_COLORS = new Set<DieColor>(['gray', 'brown', 'black'])
  // Interne App-Routen, auf die Glossar-Einträge verweisen dürfen.
  const VALID_LINKS = new Set(['/zustaende', '/karte', '/monster', '/overlord', '/items', '/helden', '/klassen'])

  it('Symbole: eindeutige IDs, gültiger Symbol-Schlüssel, Pflichttexte', () => {
    const ids = GAME_SYMBOLS.map((s) => s.id)
    expect(new Set(ids).size, 'doppelte Symbol-IDs').toBe(ids.length)
    expect(GAME_SYMBOLS.length).toBeGreaterThanOrEqual(6)
    for (const s of GAME_SYMBOLS) {
      expect(VALID_SYMBOLS.has(s.symbol), `${s.id}: ungültiger Symbol-Schlüssel '${s.symbol}'`).toBe(true)
      expect(s.nameDe && s.nameEn, `${s.id}: Name fehlt`).toBeTruthy()
      expect(s.descriptionDe.length, `${s.id}: descriptionDe zu kurz`).toBeGreaterThan(15)
    }
  })

  it('Würfel: korrekte Angriffs-/Verteidigungsfarben, Texte vorhanden', () => {
    for (const d of REF_ATTACK_DICE) {
      expect(ATTACK_COLORS.has(d.color), `${d.color} ist keine Angriffsfarbe`).toBe(true)
      expect(d.descriptionDe.length).toBeGreaterThan(10)
    }
    for (const d of REF_DEFENSE_DICE) {
      expect(DEFENSE_COLORS.has(d.color), `${d.color} ist keine Verteidigungsfarbe`).toBe(true)
      expect(d.descriptionDe.length).toBeGreaterThan(10)
    }
  })

  it('Spielablauf + Glossar: eindeutige IDs, Pflichttexte, gültige Links', () => {
    const stepIds = GAMEPLAY_STEPS.map((g) => g.id)
    expect(new Set(stepIds).size).toBe(stepIds.length)
    for (const g of GAMEPLAY_STEPS) {
      expect(g.title, `${g.id}: Titel fehlt`).toBeTruthy()
      expect(g.textDe.length, `${g.id}: textDe zu kurz`).toBeGreaterThan(20)
    }
    const termIds = GLOSSARY.map((t) => t.id)
    expect(new Set(termIds).size).toBe(termIds.length)
    for (const t of GLOSSARY) {
      expect(t.term, `${t.id}: term fehlt`).toBeTruthy()
      expect(t.textDe.length, `${t.id}: textDe zu kurz`).toBeGreaterThan(20)
      if (t.link) expect(VALID_LINKS.has(t.link), `${t.id}: unbekannter Link '${t.link}'`).toBe(true)
    }
  })
})

describe('Theme-Datenintegrität', () => {
  it('mehrere Themes, eindeutige IDs, Standard enthalten, Pflichtfelder', () => {
    expect(THEMES.length, 'mindestens 2 Themes').toBeGreaterThanOrEqual(2)
    const ids = THEMES.map((t) => t.id)
    expect(new Set(ids).size, 'doppelte Theme-IDs').toBe(ids.length)
    expect(ids, 'Standard-Theme nicht in der Liste').toContain(DEFAULT_THEME)
    for (const t of THEMES) {
      expect(t.label, `${t.id}: label fehlt`).toBeTruthy()
      expect(/^#[0-9a-fA-F]{6}$/.test(t.swatch), `${t.id}: swatch kein Hex`).toBe(true)
    }
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

// ── CRRG: Errata, FAQ & Regelklärungen (Community Rules Reference Guide V1.15) ──

const SYMBOL_GLYPHS = /[∏≥±įİĮĲĳĴĵķπμ]/

function errataText(groups: { label: string | null; points: string[] }[], notes: { title: string; points: string[] }[]): string {
  return [
    ...groups.flatMap((g) => [g.label ?? '', ...g.points]),
    ...notes.flatMap((n) => [n.title, ...n.points]),
  ].join(' ')
}

describe('CRRG – Regelklärungen (Teil 1)', () => {
  it('hat keine doppelten IDs', () => {
    const ids = RULE_CLARIFICATIONS.map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('vollständiger Umfang (164 Begriffe)', () => {
    expect(RULE_CLARIFICATIONS.length).toBe(164)
  })

  it('Pflichtfelder + plausible Seiten + Inhalt vorhanden', () => {
    for (const c of RULE_CLARIFICATIONS) {
      expect(c.term, `${c.id}: term`).toBeTruthy()
      expect(c.page, `${c.id}: page`).toBeGreaterThanOrEqual(3)
      expect(c.page, `${c.id}: page`).toBeLessThanOrEqual(46)
      expect(c.groups.length + c.notes.length, `${c.id}: kein Inhalt`).toBeGreaterThan(0)
    }
  })

  it('keine unübersetzten Symbol-Glyphen im Text', () => {
    for (const c of RULE_CLARIFICATIONS) {
      expect(SYMBOL_GLYPHS.test(errataText(c.groups, c.notes)), `${c.id}: rohes Symbol-Glyph`).toBe(false)
    }
  })
})

describe('CRRG – Errata & FAQ (Teil 2)', () => {
  const VALID_SCOPES = new Set<ErrataScope>([
    'hero', 'class', 'item', 'overlord', 'plot', 'monster',
    'monster-ability', 'adventure', 'rumor', 'secret-room', 'other',
  ])

  it('hat keine doppelten IDs', () => {
    const ids = ERRATA.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('plausibler Umfang', () => {
    expect(ERRATA.length).toBeGreaterThan(200)
  })

  it('gültige scopes, Pflichtfelder, Seiten 47–84, Inhalt vorhanden', () => {
    for (const e of ERRATA) {
      expect(VALID_SCOPES.has(e.scope), `${e.id}: scope ${e.scope}`).toBe(true)
      expect(e.nameDe, `${e.id}: nameDe`).toBeTruthy()
      expect(e.sectionDe, `${e.id}: sectionDe`).toBeTruthy()
      expect(e.page, `${e.id}: page`).toBeGreaterThanOrEqual(47)
      expect(e.page, `${e.id}: page`).toBeLessThanOrEqual(84)
      expect(e.groups.length + e.notes.length, `${e.id}: leer`).toBeGreaterThan(0)
    }
  })

  it('keine unübersetzten Symbol-Glyphen im Text', () => {
    for (const e of ERRATA) {
      expect(SYMBOL_GLYPHS.test(errataText(e.groups, e.notes)), `${e.id}: rohes Symbol-Glyph`).toBe(false)
    }
  })
})

describe('CRRG – Verknüpfung an Karten (errataLinks)', () => {
  it('Quelle nennt Version 1.15', () => {
    expect(CRRG_SOURCE).toContain('1.15')
  })

  it('LINKED_ERRATA deckt sich mit ERRATA', () => {
    expect(LINKED_ERRATA.length).toBe(ERRATA.length)
    expect(ERRATA_LINK_STATS.total).toBe(ERRATA.length)
  })

  it('ein Großteil der Einträge ist an eine Karte verknüpft', () => {
    expect(ERRATA_LINK_STATS.linked).toBeGreaterThan(120)
  })

  it('jede aufgelöste targetId existiert in der Zieldatenmenge', () => {
    const sets: Partial<Record<ErrataScope, Set<string>>> = {
      hero: new Set(HEROES.map((h) => h.id)),
      class: new Set(HERO_CLASSES.map((c) => c.id)),
      item: new Set([...SHOP_ITEMS, ...RELICS].map((i) => i.id)),
      overlord: new Set(OVERLORD_DECKS.flatMap((d) => d.cards.map((c) => c.id))),
      monster: new Set(MONSTERS.map((m) => m.id)),
      rumor: new Set(RUMORS.map((r) => r.id)),
      plot: new Set(PLOT_DECKS.map((d) => d.id)),
      adventure: new Set(CAMPAIGNS.map((c) => c.id)),
    }
    for (const e of LINKED_ERRATA) {
      if (e.targetId == null) continue
      const set = sets[e.scope]
      expect(set, `${e.id}: scope ${e.scope} ohne Zielmenge`).toBeTruthy()
      expect(set!.has(e.targetId), `${e.id}: targetId '${e.targetId}' fehlt in ${e.scope}`).toBe(true)
    }
  })

  it('Beispiel Cwellin: Held-Errata ist an den Helden verknüpft', () => {
    const cwellin = getErrata('hero', 'high-mage-quellen')
    expect(cwellin.length).toBeGreaterThan(0)
    expect(cwellin.some((e) => e.nameDe.includes('Cwellin'))).toBe(true)
  })

  it('Alias: „Augur Grimson" (CRRG) ist an Held „Augur Grisom" verknüpft', () => {
    const augur = getErrata('hero', 'augur-grisom')
    expect(augur.some((e) => e.nameDe.includes('Augur'))).toBe(true)
  })
})

describe('CRRG – Monsterfähigkeiten-Errata je Monster', () => {
  it('ordnet Fähigkeits-Errata den Monstern zu, die die Fähigkeit besitzen', () => {
    // Schattendrache hat „Feuerodem", Arachyura „Durchbohren", Höhlenspinne „Netz"
    expect(getMonsterAbilityErrata('shadow-dragon').some((e) => e.nameDe === 'Feuerodem')).toBe(true)
    expect(getMonsterAbilityErrata('arachyura').some((e) => e.nameDe === 'Durchbohren')).toBe(true)
    expect(getMonsterAbilityErrata('cave-spider').some((e) => e.nameDe === 'Netz')).toBe(true)
  })

  it('viele Monster haben zugeordnete Fähigkeits-Errata', () => {
    const withAbility = MONSTERS.filter((m) => getMonsterAbilityErrata(m.id).length > 0)
    expect(withAbility.length).toBeGreaterThan(8)
  })

  it('zugeordnete Fähigkeits-Errata stammen aus der monster-ability-Menge', () => {
    const abilityIds = new Set(MONSTER_ABILITY_ERRATA.map((e) => e.id))
    for (const m of MONSTERS) {
      for (const e of getMonsterAbilityErrata(m.id)) {
        expect(abilityIds.has(e.id), `${m.id}: ${e.id} nicht in monster-ability`).toBe(true)
      }
    }
  })
})

describe('Kampagnen-Szenario-Datenintegrität', () => {
  const CAMPAIGN_IDS = new Set(CAMPAIGNS.map((c) => c.id))
  // Erlaubte Keys je Szenario — schützt die IP-Grenze (keine Ziele/Monster/Story).
  const ALLOWED_KEYS = new Set(['id', 'titleDe', 'titleEn', 'act', 'order', 'role'])
  const ROLES = new Set(['intro', 'interlude', 'finale'])

  it('alle Schlüssel sind gültige Kampagnen-IDs', () => {
    for (const cid of Object.keys(CAMPAIGN_SCENARIOS)) {
      expect(CAMPAIGN_IDS.has(cid), `${cid} ist keine Kampagne`).toBe(true)
    }
  })

  it('jede Kampagne hat mindestens ein Szenario', () => {
    for (const c of CAMPAIGNS) {
      expect(scenariosForCampaign(c.id).length, `${c.id} ohne Szenarien`).toBeGreaterThan(0)
    }
  })

  it('Szenario-IDs sind je Kampagne eindeutig + kebab-case', () => {
    for (const [cid, list] of Object.entries(CAMPAIGN_SCENARIOS)) {
      const ids = list.map((s) => s.id)
      expect(new Set(ids).size, `${cid}: doppelte Szenario-ID`).toBe(ids.length)
      for (const id of ids) {
        expect(/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id), `${cid}: '${id}' nicht kebab-case`).toBe(true)
      }
    }
  })

  it('order ist je Kampagne eindeutig, act ∈ {1,2}, titleDe vorhanden', () => {
    for (const [cid, list] of Object.entries(CAMPAIGN_SCENARIOS)) {
      const orders = list.map((s) => s.order)
      expect(new Set(orders).size, `${cid}: doppelte order`).toBe(orders.length)
      for (const s of list) {
        expect(s.act === 1 || s.act === 2, `${cid}/${s.id}: act ${s.act}`).toBe(true)
        expect(typeof s.titleDe === 'string' && s.titleDe.trim().length > 0, `${cid}/${s.id}: titleDe fehlt`).toBe(true)
      }
    }
  })

  it('IP-Grenze: Szenarien tragen NUR erlaubte Felder (keine Questbuch-Inhalte)', () => {
    for (const [cid, list] of Object.entries(CAMPAIGN_SCENARIOS)) {
      for (const s of list) {
        for (const key of Object.keys(s)) {
          expect(ALLOWED_KEYS.has(key), `${cid}/${s.id}: unerlaubtes Feld '${key}'`).toBe(true)
        }
      }
    }
  })

  it('role (falls gesetzt) ∈ {intro,interlude,finale}; ≤1 intro + ≤1 finale, Zwischenspiele in Akt 1', () => {
    for (const [cid, list] of Object.entries(CAMPAIGN_SCENARIOS)) {
      let intros = 0
      let finales = 0
      for (const s of list) {
        if (s.role === undefined) continue
        expect(ROLES.has(s.role), `${cid}/${s.id}: ungültige role '${s.role}'`).toBe(true)
        if (s.role === 'intro') intros++
        if (s.role === 'finale') finales++
        if (s.role === 'interlude') {
          expect(s.act, `${cid}/${s.id}: Zwischenspiel nicht in Akt 1`).toBe(1)
        }
      }
      expect(intros, `${cid}: mehr als eine Einführung`).toBeLessThanOrEqual(1)
      expect(finales, `${cid}: mehr als ein Finale`).toBeLessThanOrEqual(1)
    }
  })
})

describe('Globale Regelsuche (rulesSearchIndex)', () => {
  const VALID_LINKS = new Set([
    '/regeln', '/klarstellungen', '/monster', '/items', '/overlord', '/plotdecks',
    '/zustaende', '/helden', '/klassen', '/leutnants', '/agenten', '/geruechte',
    '/reisekarten', '/karte',
  ])

  it('Index hat substanziellen Umfang', () => {
    expect(SEARCH_INDEX.length).toBeGreaterThan(500)
  })

  it('jede Kategorie ist vertreten', () => {
    const byCat = new Map<string, number>()
    for (const e of SEARCH_INDEX) byCat.set(e.category, (byCat.get(e.category) ?? 0) + 1)
    for (const c of SEARCH_CATEGORIES) expect(byCat.get(c) ?? 0, c).toBeGreaterThan(0)
  })

  it('jeder Eintrag hat Titel, Text und gültigen internen Link', () => {
    for (const e of SEARCH_INDEX) {
      expect(e.title.trim().length, e.id).toBeGreaterThan(0)
      expect(e.text.trim().length, e.id).toBeGreaterThan(0)
      // Link ist eine interne Route (ggf. mit ?query)
      const path = e.link.split('?')[0]
      expect(VALID_LINKS.has(path), `${e.id}: ungültiger Link ${e.link}`).toBe(true)
    }
  })

  it('Eintrags-IDs sind eindeutig', () => {
    const ids = SEARCH_INDEX.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
