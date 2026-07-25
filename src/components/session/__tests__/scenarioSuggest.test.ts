import { describe, it, expect } from 'vitest'
import { deriveLiveState } from '../../../store/sessionDerive'
import { scenariosForCampaign } from '../../../data/campaignScenarios'
import { adventureOptions, chooserSentence, intermezzoSelectable, suggestNext, terrainList } from '../scenarioSuggest'
import type { CampaignSession, PlayedScenario } from '../../../types/session'

function session(over: Partial<CampaignSession> = {}): CampaignSession {
  return {
    id: 's',
    name: 'S',
    campaignId: 'the-shadow-rune',
    playerCount: 2,
    startingGold: 0,
    partyFateTokens: 0,
    createdAt: '',
    updatedAt: '',
    heroes: [],
    overlord: {
      deckIds: [], startingCardIds: [], lieutenantId: null, plotDeckId: null,
      ownedPlotCardIds: [], activeRumorIds: [], relicIds: [], startingXp: 0, threatTokens: 0,
    },
    scenarios: [],
    rumors: [],
    advancedQuests: [],
    ...over,
  }
}

function played(dataId: string, order: number, act: 1 | 2 = 1, outcome: PlayedScenario['outcome'] = 'heroes'): PlayedScenario {
  return {
    id: `p-${dataId}`,
    order,
    scenario: { source: 'campaign', dataId, title: dataId, act },
    outcome,
    rewards: { heroXp: {}, overlordXp: 0, partyGold: 0, grantedItems: [], overlordCardIds: [], overlordRelicIds: [] },
    shopping: { bought: [], sold: [], skillsLearned: [], overlordCardsBought: [] },
  }
}

const suggest = (s: CampaignSession) => suggestNext(s, deriveLiveState(s))

describe('suggestNext – nur eindeutige Vorschläge, niemals raten', () => {
  it('schlägt bei leerem Protokoll die Einführung vor', () => {
    const res = suggest(session())
    expect(res.ambiguous).toBe(false)
    expect(res.campaign?.role).toBe('intro')
  })

  it('macht bei einem verzweigenden Pool KEINEN Vorschlag', () => {
    // Nach der Einführung stehen in „Die Schattenrune" viele Akt-I-Szenarien offen.
    const res = suggest(session({ scenarios: [played('first-blood', 1)] }))
    expect(res.ambiguous).toBe(true)
    expect(res.campaign).toBeNull()
  })

  it('schlägt bei genau einem offenen Szenario dieses vor', () => {
    const pool = scenariosForCampaign('the-shadow-rune')
    const act1 = pool.filter((s) => s.act === 1 && !s.role)
    // Alle bis auf eins spielen.
    const scenarios = act1.slice(0, act1.length - 1).map((s, i) => played(s.id, i + 2))
    const res = suggest(session({ scenarios: [played('first-blood', 1), ...scenarios] }))
    expect(res.ambiguous).toBe(false)
    expect(res.campaign?.id).toBe(act1[act1.length - 1].id)
  })

  it('schlägt bei genau zwei offenen Szenarien beide Zweige vor', () => {
    const pool = scenariosForCampaign('the-shadow-rune')
    const act1 = pool.filter((s) => s.act === 1 && !s.role)
    const scenarios = act1.slice(0, act1.length - 2).map((s, i) => played(s.id, i + 2))
    const res = suggest(session({ scenarios: [played('first-blood', 1), ...scenarios] }))
    expect(res.ambiguous).toBe(false)
    expect(res.campaign?.id).toBe(act1[act1.length - 2].id)
    expect(res.alternative?.id).toBe(act1[act1.length - 1].id)
  })

  it('schlägt das Zwischenspiel vor, wenn der Akt-I-Pool erschöpft ist', () => {
    const pool = scenariosForCampaign('the-shadow-rune')
    const act1 = pool.filter((s) => s.act === 1 && !s.role)
    const scenarios = act1.map((s, i) => played(s.id, i + 2))
    const res = suggest(session({ scenarios: [played('first-blood', 1), ...scenarios] }))
    expect(res.ambiguous).toBe(false)
    expect(res.campaign?.role).toBe('interlude')
  })

  it('folgt bei linearen Mini-Kampagnen einfach der Reihenfolge', () => {
    const s = session({ campaignId: 'lair-of-the-wyrm' })
    const first = suggest(s)
    expect(first.ambiguous).toBe(false)
    const pool = scenariosForCampaign('lair-of-the-wyrm')
    expect(first.campaign?.id).toBe(pool[0].id)
    const next = suggest(session({ campaignId: 'lair-of-the-wyrm', scenarios: [played(pool[0].id, 1)] }))
    expect(next.campaign?.id).toBe(pool[1].id)
  })

  it('nennt den Sieger des letzten Szenarios als Wählenden', () => {
    const s = session({ scenarios: [played('first-blood', 1, 1, 'overlord')] })
    expect(chooserSentence(deriveLiveState(s))).toMatch(/Overlord/)
    const h = session({ scenarios: [played('first-blood', 1, 1, 'heroes')] })
    expect(chooserSentence(deriveLiveState(h))).toMatch(/Helden/)
  })
})

describe('Abenteuerkarten als gleichberechtigte Optionen', () => {
  it('listet Gerüchteabenteuer und Zusatzabenteuer im Spiel', () => {
    const s = session({
      rumors: [
        { rumorId: 'whatsyoursismine', status: 'in-play' }, // Gerücht MIT Abenteuer
        { rumorId: 'scarcegoods', status: 'in-play' }, // Gerücht mit Effekt → keine Option
        { rumorId: 'ghosttown', status: 'played' }, // gespielt → keine Option
      ],
      advancedQuests: [{ questId: 'attheforge', status: 'in-play' }],
    })
    const opts = adventureOptions(s)
    expect(opts.map((o) => o.dataId)).toEqual(['whatsyoursismine', 'attheforge'])
    expect(opts[0].kind).toBe('rumor')
    expect(opts[1].kind).toBe('advanced-quest')
    // Der Vorschlagsbereich zeigt sie neben dem Kampagnenbogen.
    expect(suggest(s).adventures).toHaveLength(2)
  })

  it('übersetzt die Reise-Gelände ins Deutsche', () => {
    expect(terrainList(['Road', 'Forest', 'Mountain', 'Plain', 'Water'])).toBe(
      'Straße · Wald · Berg · Ebene · Wasser',
    )
  })
})

describe('intermezzoSelectable — nur wenn ableitbar, sonst nicht sperren', () => {
  it('ist NICHT wahr, solange noch reguläre Akt-I-Szenarien offen sind', () => {
    // Wann der Kampagnenbogen das Zwischenspiel freigibt, steht nirgends im Repo.
    // Eine geratene Sperre würde die zwölf Gerüchteabenteuer mit Intermezzo-Klausel
    // praktisch den ganzen Akt I blockieren — deshalb: nicht sperren.
    const empty = session()
    expect(intermezzoSelectable(empty, deriveLiveState(empty))).toBe(false)
    const running = session({ scenarios: [played('first-blood', 1)] })
    expect(intermezzoSelectable(running, deriveLiveState(running))).toBe(false)
  })

  it('ist wahr, wenn der reguläre Akt-I-Pool gespielt ist (einziger ableitbarer Fall)', () => {
    const pool = scenariosForCampaign('the-shadow-rune')
    const act1 = pool.filter((s) => s.act === 1 && !s.role)
    const scenarios = [played('first-blood', 1), ...act1.map((s, i) => played(s.id, i + 2))]
    const s = session({ scenarios })
    expect(intermezzoSelectable(s, deriveLiveState(s))).toBe(true)
  })

  it('ist in Akt II nie wahr', () => {
    const act2 = session({ scenarios: [played('first-blood', 1), played('the-monsters-hoard', 2, 2)] })
    expect(intermezzoSelectable(act2, deriveLiveState(act2))).toBe(false)
  })
})
