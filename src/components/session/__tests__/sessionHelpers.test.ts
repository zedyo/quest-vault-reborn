import { describe, it, expect } from 'vitest'
import { HERO_CLASSES } from '../../../data/heroClasses'
import { classStartingSkillIds, classStartingItemRefs, withClass, newTrackedHero, newSession } from '../sessionHelpers'
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
