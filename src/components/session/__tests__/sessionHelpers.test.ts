import { describe, it, expect } from 'vitest'
import { HERO_CLASSES } from '../../../data/heroClasses'
import {
  classStartingSkillIds,
  classStartingItemRefs,
  withClass,
  newTrackedHero,
  newSession,
  sellRefund,
  isSellable,
} from '../sessionHelpers'
import { SHOP_ITEMS } from '../../../data/items'
import { CAMPAIGNS } from '../../../data/campaigns'

describe('sessionHelpers – Klassen-Seeding gegen echte Spieldaten', () => {
  it('classStartingSkillIds enthält nur kostenlose Startfähigkeiten (xpCost === 0)', () => {
    for (const cls of HERO_CLASSES) {
      const ids = classStartingSkillIds(cls)
      const freeIds = cls.skills.filter((s) => s.xpCost === 0).map((s) => s.id)
      expect(ids).toEqual(freeIds)
    }
  })

  it('classStartingItemRefs verweist nur auf existierende Startausrüstung', () => {
    for (const cls of HERO_CLASSES) {
      const refs = classStartingItemRefs(cls)
      const validIds = new Set((cls.startingEquipment ?? []).map((it) => it.id))
      expect(refs.length).toBe(cls.startingEquipment?.length ?? 0)
      for (const ref of refs) {
        expect(ref.source).toBe('class-start')
        expect(validIds.has(ref.dataId)).toBe(true)
        expect(typeof ref.refId).toBe('string')
        expect(ref.refId.length).toBeGreaterThan(0)
      }
    }
  })

  it('withClass belegt Skills + Ausrüstung neu und lässt sich zurücksetzen', () => {
    const cls = HERO_CLASSES.find((c) => c.id === 'berserker')!
    const hero = newTrackedHero('grisban-the-thirsty')
    const withCls = withClass(hero, cls)
    expect(withCls.classId).toBe('berserker')
    expect(withCls.startingSkillIds).toEqual(classStartingSkillIds(cls))
    expect(withCls.startingItemRefs.map((r) => r.dataId)).toEqual(
      (cls.startingEquipment ?? []).map((it) => it.id),
    )
    const cleared = withClass(withCls, null)
    expect(cleared.classId).toBeNull()
    expect(cleared.startingSkillIds).toEqual([])
    expect(cleared.startingItemRefs).toEqual([])
  })

  it('newSession erzeugt eine gültige, leere Session', () => {
    const s = newSession(CAMPAIGNS[0].id)
    expect(s.campaignId).toBe(CAMPAIGNS[0].id)
    expect(s.heroes).toEqual([])
    expect(s.scenarios).toEqual([])
    expect(s.playerCount).toBe(2)
    expect(s.overlord.deckIds).toEqual([])
  })
})

describe('sellRefund – Verkaufserlös nach Regel', () => {
  // Regel: die Hälfte des aufgedruckten Wertes, auf das nächste Vielfache von 25
  // ABGERUNDET; Startausrüstung pauschal 25; Relikte sind nicht verkäuflich.
  it('rundet auf das nächste Vielfache von 25 ab', () => {
    for (const item of SHOP_ITEMS) {
      const refund = sellRefund({ refId: 'x', source: 'shop', dataId: item.id })
      expect(refund % 25).toBe(0)
      expect(refund).toBeLessThanOrEqual(item.cost / 2)
      expect(refund).toBeGreaterThanOrEqual(item.cost / 2 - 24)
    }
  })

  it('gibt für Startausrüstung pauschal 25 Gold', () => {
    expect(sellRefund({ refId: 'x', source: 'class-start', dataId: 'berserker-axt' })).toBe(25)
  })

  it('schließt Relikte vom Verkauf aus', () => {
    expect(isSellable({ refId: 'x', source: 'relic', dataId: 'anything' })).toBe(false)
    expect(sellRefund({ refId: 'x', source: 'relic', dataId: 'anything' })).toBe(0)
    expect(isSellable({ refId: 'x', source: 'shop', dataId: 'anything' })).toBe(true)
  })
})
