import { describe, it, expect } from 'vitest'
import { parseImportedSession, sanitizeSession, sanitizeSessionList } from '../sessionImport'
import type { CampaignSession } from '../../types/session'

// Vollständige Session, deren Feld-Shape exakt der Sanitizer-Ausgabe entspricht,
// damit der Round-Trip per deep-equal geprüft werden kann.
function fullSession(): CampaignSession {
  return {
    id: 'orig-id',
    name: 'Dienstagsrunde',
    campaignId: 'the-shadow-rune',
    playerCount: 3,
    startingGold: 12,
    createdAt: '2026-07-05T10:00:00.000Z',
    updatedAt: '2026-07-05T11:00:00.000Z',
    heroes: [
      {
        localId: 'h-local-1',
        heroId: 'ashrian',
        playerName: 'Anna',
        classId: 'apothecary',
        startingSkillIds: ['skill-a', 'skill-b'],
        startingItemRefs: [
          { refId: 'ref-1', source: 'class-start', dataId: 'apothecary-item' },
          { refId: 'ref-2', source: 'custom', dataId: '', customName: 'Selbstgebautes' },
        ],
        note: 'Heilerin',
      },
    ],
    overlord: {
      deckIds: ['basic', 'magus'],
      startingCardIds: ['basic:c1', 'magus:m1'],
      lieutenantId: 'baronzachareth',
      plotDeckId: 'seeds-of-betrayal',
      ownedPlotCardIds: ['pc1'],
      activeRumorIds: ['rudeawakening'],
      relicIds: ['relicX'],
      startingXp: 1,
    },
    scenarios: [
      {
        id: 'sc-1',
        order: 1,
        scenario: { source: 'campaign', dataId: 'first-blood', title: 'Erstes Blut', act: 1 },
        outcome: 'heroes',
        rewards: {
          heroXp: { 'h-local-1': 1 },
          overlordXp: 1,
          partyGold: 25,
          grantedItems: [{ toHeroLocalId: 'h-local-1', item: { refId: 'g1', source: 'shop', dataId: 'chainmail' } }],
          overlordCardIds: ['reward:r1'],
          overlordRelicIds: ['relicY'],
        },
        shopping: {
          bought: [{ toHeroLocalId: null, item: { refId: 'b1', source: 'shop', dataId: 'crossbow' }, price: 75 }],
          sold: [{ refId: 'ref-1', refund: 25 }],
          skillsLearned: [{ heroLocalId: 'h-local-1', skillId: 'skill-c', xpCost: 1 }],
          overlordCardsBought: [{ cardId: 'magus:m2', xpCost: 1 }],
        },
        note: 'Runde 1',
      },
    ],
  }
}

describe('parseImportedSession – Round-Trip', () => {
  it('erhält alle verschachtelten Referenz-IDs, erzeugt nur die Top-ID neu', () => {
    const original = fullSession()
    const parsed = parseImportedSession(JSON.parse(JSON.stringify(original)))
    expect(parsed).not.toBeNull()
    if (!parsed) return

    // Top-Level-ID neu, alles andere identisch.
    expect(parsed.id).not.toBe(original.id)
    expect({ ...parsed, id: original.id }).toEqual(original)

    // Explizite Prüfung der verlinkten inneren IDs.
    expect(parsed.heroes[0].localId).toBe('h-local-1')
    expect(parsed.heroes[0].startingItemRefs[0].refId).toBe('ref-1')
    expect(parsed.scenarios[0].id).toBe('sc-1')
    expect(parsed.scenarios[0].shopping.sold[0].refId).toBe('ref-1')
    expect(parsed.scenarios[0].shopping.bought[0].item.refId).toBe('b1')
    expect(parsed.scenarios[0].rewards.heroXp['h-local-1']).toBe(1)
  })
})

describe('parseImportedSession – Validierung', () => {
  it('lehnt strukturell ungültige Eingaben ab', () => {
    expect(parseImportedSession(null)).toBeNull()
    expect(parseImportedSession([])).toBeNull()
    expect(parseImportedSession({})).toBeNull()
    expect(parseImportedSession({ name: 'x' })).toBeNull() // ohne campaignId
    expect(parseImportedSession({ campaignId: 'c' })).toBeNull() // ohne name
    expect(parseImportedSession({ name: 'x', campaignId: 'c' })).not.toBeNull()
  })

  it('entfernt unbekannte Felder inkl. __proto__ (Whitelist-Rebuild)', () => {
    const raw = JSON.parse('{"name":"x","campaignId":"c","polluted":true,"__proto__":{"bad":1},"heroes":[]}')
    const parsed = parseImportedSession(raw)
    expect(parsed).not.toBeNull()
    const rec = parsed as unknown as Record<string, unknown>
    expect(rec.polluted).toBeUndefined()
    expect(rec.bad).toBeUndefined()
  })

  it('deckelt die Heldenzahl bei 4 und klemmt playerCount', () => {
    const many = {
      name: 'x',
      campaignId: 'c',
      heroes: Array.from({ length: 8 }, (_, i) => ({ heroId: `h${i}` })),
    }
    expect(parseImportedSession(many)?.heroes.length).toBe(4)
    expect(parseImportedSession({ name: 'x', campaignId: 'c', playerCount: 99 })?.playerCount).toBe(2)
    expect(parseImportedSession({ name: 'x', campaignId: 'c', playerCount: 3 })?.playerCount).toBe(3)
  })

  it('verwirft Helden ohne heroId', () => {
    const parsed = parseImportedSession({ name: 'x', campaignId: 'c', heroes: [{ playerName: 'ohne Held' }] })
    expect(parsed?.heroes).toEqual([])
  })
})

describe('sanitizeSession / sanitizeSessionList – Store-Hydration', () => {
  it('behält die Top-ID bei keepId=true (kein Datenverlust beim Reload)', () => {
    const kept = sanitizeSession({ id: 'keepme', name: 'x', campaignId: 'c' }, true)
    expect(kept?.id).toBe('keepme')
    const list = sanitizeSessionList([{ id: 'a', name: 'x', campaignId: 'c' }, 'kaputt', { nope: true }])
    expect(list.map((s) => s.id)).toEqual(['a'])
  })
})
