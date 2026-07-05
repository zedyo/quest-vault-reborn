import { describe, it, expect } from 'vitest'
import { deriveLiveState } from '../sessionDerive'
import type { CampaignSession, ItemRef, PlayedScenario, TrackedHero, TrackedOverlord } from '../../types/session'

// ── Fabriken ─────────────────────────────────────────────────────────────────

function itemRef(refId: string, source: ItemRef['source'] = 'shop', dataId = 'x'): ItemRef {
  return { refId, source, dataId }
}
function overlord(over: Partial<TrackedOverlord> = {}): TrackedOverlord {
  return {
    deckIds: [],
    startingCardIds: [],
    lieutenantId: null,
    plotDeckId: null,
    ownedPlotCardIds: [],
    activeRumorIds: [],
    relicIds: [],
    startingXp: 0,
    ...over,
  }
}
function hero(localId: string, over: Partial<TrackedHero> = {}): TrackedHero {
  return {
    localId,
    heroId: `${localId}-hero`,
    playerName: '',
    classId: 'berserker',
    startingSkillIds: [],
    startingItemRefs: [],
    ...over,
  }
}
function session(over: Partial<CampaignSession> = {}): CampaignSession {
  return {
    id: 's',
    name: 'S',
    campaignId: 'the-shadow-rune',
    playerCount: 2,
    startingGold: 0,
    createdAt: '',
    updatedAt: '',
    heroes: [],
    overlord: overlord(),
    scenarios: [],
    ...over,
  }
}
function scenario(id: string, over: Partial<PlayedScenario> = {}): PlayedScenario {
  return {
    id,
    order: 1,
    scenario: { source: 'custom', dataId: '', title: 'T', act: 1 },
    outcome: 'heroes',
    rewards: { heroXp: {}, overlordXp: 0, partyGold: 0, grantedItems: [], overlordCardIds: [], overlordRelicIds: [] },
    shopping: { bought: [], sold: [], skillsLearned: [], overlordCardsBought: [] },
    ...over,
  }
}

// ── Tests ────────────────────────────────────────────────────────────────────

describe('deriveLiveState – Baseline (Phase 1, keine Szenarien)', () => {
  it('spiegelt das Setup 1:1 wider', () => {
    const s = session({
      startingGold: 5,
      heroes: [
        hero('a', {
          startingSkillIds: ['rage', 'brute'],
          startingItemRefs: [itemRef('i1', 'class-start', 'berserker-axt')],
        }),
      ],
      overlord: overlord({ startingCardIds: ['basic:c1'], startingXp: 2, relicIds: ['relicX'] }),
    })
    const live = deriveLiveState(s)
    expect(live.partyGold).toBe(5)
    expect(live.currentScenario).toBeNull()
    expect(live.currentAct).toBe(1)
    expect(live.heroes.a.ownedSkillIds).toEqual(['rage', 'brute'])
    expect(live.heroes.a.ownedItemRefs.map((r) => r.refId)).toEqual(['i1'])
    expect(live.heroes.a.xpEarned).toBe(0)
    expect(live.heroes.a.xpAvailable).toBe(0)
    expect(live.overlord.xpEarned).toBe(2)
    expect(live.overlord.ownedCardIds).toEqual(['basic:c1'])
    expect(live.overlord.ownedRelicIds).toEqual(['relicX'])
  })
})

describe('deriveLiveState – Belohnungen automatisch anrechnen (reversibel)', () => {
  it('rechnet XP/Gold/Items/Skills an und ist nach dem Entfernen wieder auf Baseline', () => {
    const base = session({ startingGold: 10, heroes: [hero('a')] })
    const sc = scenario('sc1', {
      rewards: {
        heroXp: { a: 3 },
        overlordXp: 0,
        partyGold: 5,
        grantedItems: [],
        overlordCardIds: [],
        overlordRelicIds: [],
      },
      shopping: {
        bought: [{ toHeroLocalId: 'a', item: itemRef('b1'), price: 4 }],
        sold: [],
        skillsLearned: [{ heroLocalId: 'a', skillId: 'brute', xpCost: 1 }],
        overlordCardsBought: [],
      },
    })

    const withSc = deriveLiveState({ ...base, scenarios: [sc] })
    expect(withSc.partyGold).toBe(10 + 5 - 4)
    expect(withSc.heroes.a.xpEarned).toBe(3)
    expect(withSc.heroes.a.xpSpent).toBe(1)
    expect(withSc.heroes.a.xpAvailable).toBe(2)
    expect(withSc.heroes.a.ownedSkillIds).toContain('brute')
    expect(withSc.heroes.a.ownedItemRefs.map((r) => r.refId)).toEqual(['b1'])

    // Szenario entfernen → exakt zurück auf Baseline (kein Rest, kein Doppelzählen)
    const removed = deriveLiveState(base)
    expect(removed.partyGold).toBe(10)
    expect(removed.heroes.a.xpAvailable).toBe(0)
    expect(removed.heroes.a.ownedItemRefs).toEqual([])
    expect(removed.heroes.a.ownedSkillIds).toEqual([])
  })

  it('Edit eines Szenarios wirkt nur auf das geänderte Feld', () => {
    const base = session({ heroes: [hero('a'), hero('b')] })
    const sc = scenario('sc', { rewards: { ...scenario('x').rewards, heroXp: { a: 2, b: 5 } } })
    const before = deriveLiveState({ ...base, scenarios: [sc] })
    expect(before.heroes.a.xpEarned).toBe(2)
    expect(before.heroes.b.xpEarned).toBe(5)

    const edited = { ...sc, rewards: { ...sc.rewards, heroXp: { a: 9, b: 5 } } }
    const after = deriveLiveState({ ...base, scenarios: [edited] })
    expect(after.heroes.a.xpEarned).toBe(9)
    expect(after.heroes.b.xpEarned).toBe(5) // unverändert
  })
})

describe('deriveLiveState – Gold-Ledger inkl. Verkauf einer Startausrüstung', () => {
  it('erstattet den Verkauf und entzieht den Besitz', () => {
    const s = session({
      startingGold: 0,
      heroes: [hero('a', { startingItemRefs: [itemRef('start1', 'class-start', 'berserker-axt')] })],
    })
    const sc = scenario('sc', {
      shopping: { bought: [], sold: [{ refId: 'start1', refund: 25 }], skillsLearned: [], overlordCardsBought: [] },
    })
    const live = deriveLiveState({ ...s, scenarios: [sc] })
    expect(live.partyGold).toBe(25)
    expect(live.heroes.a.ownedItemRefs).toEqual([])
  })
})

describe('deriveLiveState – Dangling-Sell-Guard', () => {
  it('ignoriert einen Verkauf, dessen Kauf-Szenario gelöscht wurde (Gold + Besitz)', () => {
    const A = scenario('A', {
      order: 1,
      shopping: { bought: [{ toHeroLocalId: 'a', item: itemRef('buy1'), price: 3 }], sold: [], skillsLearned: [], overlordCardsBought: [] },
    })
    const B = scenario('B', {
      order: 2,
      shopping: { bought: [], sold: [{ refId: 'buy1', refund: 10 }], skillsLearned: [], overlordCardsBought: [] },
    })
    const both = deriveLiveState(session({ startingGold: 20, heroes: [hero('a')], scenarios: [A, B] }))
    expect(both.partyGold).toBe(20 - 3 + 10)
    expect(both.heroes.a.ownedItemRefs).toEqual([])

    // Kauf-Szenario A gelöscht: B's Verkauf betrifft eine nicht (mehr) erzeugte Instanz
    const onlyB = deriveLiveState(session({ startingGold: 20, heroes: [hero('a')], scenarios: [B] }))
    expect(onlyB.partyGold).toBe(20) // Verkauf ignoriert – kein Phantom-Gold
    expect(onlyB.heroes.a.ownedItemRefs).toEqual([])
  })
})

describe('deriveLiveState – Overlord & Reihenfolge', () => {
  it('faltet Overlord-XP/Karten/Relikte', () => {
    const s = session({ overlord: overlord({ startingCardIds: ['basic:c1'], startingXp: 2 }) })
    const sc = scenario('sc', {
      rewards: { heroXp: {}, overlordXp: 3, partyGold: 0, grantedItems: [], overlordCardIds: ['reward:r1'], overlordRelicIds: ['relic1'] },
      shopping: { bought: [], sold: [], skillsLearned: [], overlordCardsBought: [{ cardId: 'magus:m1', xpCost: 1 }] },
    })
    const live = deriveLiveState({ ...s, scenarios: [sc] })
    expect(live.overlord.xpEarned).toBe(5)
    expect(live.overlord.xpSpent).toBe(1)
    expect(live.overlord.xpAvailable).toBe(4)
    expect(live.overlord.ownedCardIds.sort()).toEqual(['basic:c1', 'magus:m1', 'reward:r1'])
    expect(live.overlord.ownedRelicIds).toEqual(['relic1'])
  })

  it('nimmt das Szenario mit dem höchsten order als aktuelles', () => {
    const s = session({
      scenarios: [
        scenario('a', { order: 2, scenario: { source: 'custom', dataId: '', title: 'A2', act: 2 } }),
        scenario('b', { order: 1, scenario: { source: 'custom', dataId: '', title: 'B1', act: 1 } }),
      ],
    })
    const live = deriveLiveState(s)
    expect(live.currentScenario?.id).toBe('a')
    expect(live.currentAct).toBe(2)
  })
})
