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
    partyFateTokens: 3,
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
        startingXp: 2,
        startingFateTokens: 1,
      },
    ],
    overlord: {
      deckIds: ['basic', 'magus'],
      // Doppelter Karten-Schlüssel = zwei Exemplare (Mehrfach-Karte) → muss erhalten bleiben.
      startingCardIds: ['basic:c1', 'basic:c1', 'magus:m1'],
      lieutenantId: 'baronzachareth',
      plotDeckId: 'seeds-of-betrayal',
      ownedPlotCardIds: ['pc1'],
      // v3: Gerüchte liegen nicht mehr beim Overlord (Feld bleibt leer/deprecated).
      activeRumorIds: [],
      relicIds: ['relicX'],
      startingXp: 1,
      threatTokens: 2,
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
        playedAt: '2026-07-05',
        threatAfter: 5,
        fateAfter: 2,
        rumorPlayedId: 'ghosttown',
        market: { mode: 'reveal', act: 2, revealCount: 4, revealedItemIds: ['crossbow', 'chainmail'] },
      },
    ],
    archived: true,
    note: 'Zachareth hat den Schrein erreicht.',
    epic: true,
    rumors: [
      { rumorId: 'whatsyoursismine', status: 'in-play' },
      { rumorId: 'ghosttown', status: 'played', playedInScenarioId: 'sc-1' },
    ],
    advancedQuests: [{ questId: 'attheforge', status: 'in-play', source: 'whatsyoursismine' }],
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

    // Marker + Mehrfach-Karten (doppelte Schlüssel) bleiben erhalten.
    expect(parsed.partyFateTokens).toBe(3)
    expect(parsed.overlord.threatTokens).toBe(2)
    expect(parsed.overlord.startingCardIds.filter((c) => c === 'basic:c1')).toHaveLength(2)

    // v1.8.0-Felder: Gerüchte, Zusatzabenteuer, Marker-Stände, Markt-Modus.
    expect(parsed.rumors.map((r) => r.status)).toEqual(['in-play', 'played'])
    expect(parsed.advancedQuests[0]).toEqual({ questId: 'attheforge', status: 'in-play', source: 'whatsyoursismine' })
    expect(parsed.scenarios[0].threatAfter).toBe(5)
    expect(parsed.scenarios[0].market?.revealedItemIds).toEqual(['crossbow', 'chainmail'])
    expect(parsed.heroes[0].startingXp).toBe(2)
  })
})

describe('sanitizeSession – Migration v2 → v3 (Gerüchte verlassen den Overlord)', () => {
  const v2 = () => ({
    id: 'alt',
    name: 'Alte Runde',
    campaignId: 'the-shadow-rune',
    playerCount: 4,
    startingGold: 0,
    partyFateTokens: 1,
    heroes: [{ localId: 'h1', heroId: 'grisban', playerName: 'Nik', classId: 'berserker', startingSkillIds: [], startingItemRefs: [] }],
    overlord: {
      deckIds: ['basic'],
      startingCardIds: ['basic:c1'],
      lieutenantId: null,
      plotDeckId: null,
      ownedPlotCardIds: [],
      activeRumorIds: ['ghosttown', 'golddigger'],
      relicIds: [],
      startingXp: 0,
      threatTokens: 0,
    },
    scenarios: [],
  })

  it('überträgt activeRumorIds einmalig nach rumors und leert das Altfeld', () => {
    const s = sanitizeSession(v2(), true)
    expect(s).not.toBeNull()
    if (!s) return
    expect(s.rumors).toEqual([
      { rumorId: 'ghosttown', status: 'in-play' },
      { rumorId: 'golddigger', status: 'in-play' },
    ])
    expect(s.overlord.activeRumorIds).toEqual([])
    expect(s.advancedQuests).toEqual([])
    // Bestehende Daten bleiben unangetastet.
    expect(s.id).toBe('alt')
    expect(s.heroes[0].localId).toBe('h1')
    expect(s.overlord.startingCardIds).toEqual(['basic:c1'])
  })

  it('ist idempotent – ein zweiter Durchlauf bringt die Gerüchte nicht zurück', () => {
    const once = sanitizeSession(v2(), true)!
    const twice = sanitizeSession(JSON.parse(JSON.stringify(once)), true)!
    expect(twice.rumors).toEqual(once.rumors)

    // Ein leeres (aber vorhandenes) rumors-Array ist v3 → keine erneute Übernahme.
    const cleared = sanitizeSession({ ...JSON.parse(JSON.stringify(once)), rumors: [] }, true)!
    expect(cleared.rumors).toEqual([])
  })

  it('defaultet die neuen Felder für Stände ohne sie', () => {
    const s = sanitizeSession({ name: 'x', campaignId: 'c' }, true)!
    expect(s.rumors).toEqual([])
    expect(s.advancedQuests).toEqual([])
    expect(s.archived).toBeUndefined()
    expect(s.epic).toBeUndefined()
    expect(s.note).toBeUndefined()
  })

  it('begrenzt die Zahl der heroXp-Schlüssel und verwirft reservierte Namen', () => {
    const heroXp: Record<string, number> = { __proto__: 1, toString: 2, constructor: 3 }
    for (let i = 0; i < 500; i++) heroXp[`h${i}`] = 1
    const s = sanitizeSession(
      {
        name: 'x',
        campaignId: 'c',
        scenarios: [{ id: 'sc', order: 1, rewards: { heroXp } }],
      },
      true,
    )!
    const keys = Object.keys(s.scenarios[0].rewards.heroXp)
    expect(keys.length).toBeLessThanOrEqual(32)
    expect(keys).not.toContain('__proto__')
    expect(keys).not.toContain('toString')
    expect(keys).not.toContain('constructor')
    expect(Object.prototype).not.toHaveProperty('polluted')
  })

  it('ersetzt eine reservierte localId durch eine neue ID', () => {
    const s = sanitizeSession(
      { name: 'x', campaignId: 'c', heroes: [{ heroId: 'grisban-the-thirsty', localId: 'toString' }] },
      true,
    )!
    expect(s.heroes[0].localId).not.toBe('toString')
    expect(s.heroes[0].localId.length).toBeGreaterThan(0)
  })

  it('verwirft beim Hydrieren keinen Spielstand mit leerem Namen', () => {
    const hydrated = sanitizeSession({ id: 'keep', name: '', campaignId: 'c', heroes: [] }, true)
    expect(hydrated).not.toBeNull()
    expect(hydrated?.id).toBe('keep')
    expect(hydrated?.name).toBe('Unbenannte Kampagne')
    // Beim IMPORT bleibt die strikte Prüfung bestehen.
    expect(parseImportedSession({ name: '', campaignId: 'c' })).toBeNull()
  })

  it('lässt nur erlaubte Status-Werte durch', () => {
    const s = sanitizeSession(
      {
        name: 'x',
        campaignId: 'c',
        rumors: [{ rumorId: 'a', status: 'boese' }, { status: 'in-play' }, { rumorId: 'b', status: 'expired' }],
        advancedQuests: [{ questId: 'q', status: 'kaputt' }],
      },
      true,
    )!
    expect(s.rumors).toEqual([
      { rumorId: 'a', status: 'in-play' },
      { rumorId: 'b', status: 'expired' },
    ])
    expect(s.advancedQuests).toEqual([{ questId: 'q', status: 'not-in-play' }])
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

describe('ID-Form – nur URL- und schlüsselsichere IDs werden beibehalten', () => {
  it('behält normale IDs (UUID / id-…) unverändert', () => {
    const uuid = '9f1d1c2e-7a10-4c3b-9b0e-1f2a3b4c5d6e'
    const s = sanitizeSession({ id: uuid, name: 'x', campaignId: 'c', heroes: [{ heroId: 'h', localId: 'id-1-abc' }] }, true)
    expect(s?.id).toBe(uuid)
    expect(s?.heroes[0].localId).toBe('id-1-abc')
  })

  it('ersetzt IDs, die als Route oder Objektschlüssel Ärger machen', () => {
    const s = sanitizeSession(
      { id: 'a/../b?x=1', name: 'x', campaignId: 'c', heroes: [{ heroId: 'h', localId: 'toString' }] },
      true,
    )
    expect(s?.id).not.toBe('a/../b?x=1')
    expect(s?.heroes[0].localId).not.toBe('toString')
    expect(s?.heroes[0].localId).toMatch(/^[A-Za-z0-9_-]+$/)
  })

  it('lässt geerbte Object-Member nicht als XP-Schlüssel durch', () => {
    const s = sanitizeSession(
      {
        id: 'ok',
        name: 'x',
        campaignId: 'c',
        scenarios: [
          {
            id: 'sc1',
            order: 1,
            scenario: { source: 'custom', dataId: '', title: 'T', act: 1 },
            rewards: { heroXp: { isPrototypeOf: 3, 'a b': 2, good: 4 }, overlordXp: 0, partyGold: 0 },
          },
        ],
      },
      true,
    )
    const xp = s?.scenarios[0].rewards.heroXp ?? {}
    expect(Object.keys(xp)).toEqual(['good'])
    // Der kritische Fall: `xp[k] ?? 0` darf nie eine Funktion liefern.
    expect(typeof (xp as Record<string, number>)['isPrototypeOf']).toBe('function')
    expect(Object.prototype.hasOwnProperty.call(xp, 'isPrototypeOf')).toBe(false)
  })
})
