import { describe, it, expect } from 'vitest'
import { parseRumorMeta, resolveAdvancedQuestId, rumorPlayableNow, RUMOR_META, rumorDeckCards, type RumorMeta } from '../rumorTiming'
import { ADVANCED_QUESTS } from '../../data/campaigns'
import { RUMORS } from '../../data/rumors'
import type { RumorTiming } from '../../types/session'

// Die Muster werden an ECHTEN Karten geprüft (Kartentext = priorisierte Wahrheit),
// nicht an erfundenen Beispielsätzen.
const byId = (id: string) => {
  const r = RUMORS.find((x) => x.id === id)
  if (!r) throw new Error(`Testkarte fehlt: ${id}`)
  return r
}

describe('parseRumorMeta – die sechs Zeitfenster', () => {
  const cases: [string, RumorTiming][] = [
    ['whatsyoursismine', 'campaign-phase-start'], // Gute Mine zum bösen Spiel
    ['adangerouspath', 'travel-start'], // Gefährliche Pfade
    ['atrocities', 'travel-after'], // Gräueltaten
    ['famineandstrife', 'travel-end'], // Hunger und Not
    ['scarcegoods', 'shopping-start'], // Schwer erhältliche Waren
    ['attheforge', 'adventure-only'], // Die Waffenschmiede (Zusatzabenteuer)
  ]
  it.each(cases)('%s → %s', (id, timing) => {
    expect(parseRumorMeta(byId(id)).timing).toBe(timing)
  })

  it('deckt jede Karte ab und kennt für jede ein Label', () => {
    for (const r of RUMORS) {
      const meta = parseRumorMeta(r)
      expect(meta.timingLabelDe.length).toBeGreaterThan(0)
    }
    // Alle sechs Fenster kommen im echten Datenbestand vor.
    const seen = new Set(RUMORS.map((r) => parseRumorMeta(r).timing))
    expect(seen.size).toBe(6)
  })

  it('markiert einen Auslöser außerhalb der sechs Fenster als unbekannt', () => {
    // „Verfluchte Schätze": „Spiele diese Karte nach dem Aufbau einer Szene …"
    const meta = parseRumorMeta(byId('cursedtreasures'))
    expect(meta.timing).toBe('adventure-only')
    expect(meta.timingUnknown).toBe(true)
    expect(meta.timingLabelDe).toContain('SZENE')
  })
})

describe('parseRumorMeta – Akt, Sperren, Ausschlüsse, Belohnungen', () => {
  it('liest die Akt-Beschränkung aus „in Akt I"', () => {
    expect(parseRumorMeta(byId('whatsyoursismine')).actRestriction).toBe(1)
  })

  it('„Übergang zu Akt II" ist KEINE Akt-Beschränkung auf Akt II', () => {
    const meta = parseRumorMeta(byId('myhousemyrules')) // Der Herr des Hauses
    expect(meta.actRestriction).toBe(1)
    expect(meta.expiresAtActTransition).toBe(true)
    expect(meta.introducesAdvancedQuest).toBe('Tief unterm Schloss')
  })

  it('liest den Akt NUR aus dem Auslösersatz, nicht aus dem übrigen Kartentext', () => {
    // „Zweifelhafte Schätze" trägt kein Aktsymbol (act: null) und ist in beiden
    // Akten spielbar — der Preisabsatz nennt aber „in Akt II 175 Goldstücke".
    const meta = parseRumorMeta(byId('unknowntreasures'))
    expect(meta.actRestriction).toBeUndefined()
    expect(meta.timing).toBe('shopping-start')
  })

  it('erkennt die Intermezzo-Sperre', () => {
    expect(parseRumorMeta(byId('myhousemyrules')).blockedByIntermezzo).toBe(true)
    expect(parseRumorMeta(byId('whatsyoursismine')).blockedByIntermezzo).toBe(false)
  })

  it('zieht die ausgeschlossenen Karten aus dem Text und löst sie auf', () => {
    const meta = parseRumorMeta(byId('rudeawakening')) // Böses Erwachen
    expect(meta.excludes).toEqual(['Gute Mine zum bösen Spiel', 'Schatzjäger'])
    expect(meta.excludeIds).toEqual(['whatsyoursismine', 'golddigger'])
  })

  it('erkennt die Overlord-Belohnung für ungespielte Zusatzabenteuer', () => {
    expect(parseRumorMeta(byId('crownofdestiny')).overlordRewardIfUnplayed).toBe(true) // „beim Aufbau des Finales"
    expect(parseRumorMeta(byId('thecurseofiona')).overlordRewardIfUnplayed).toBe(true) // „nach dem Aufbau des Finales"
    expect(parseRumorMeta(byId('whatsyoursismine')).overlordRewardIfUnplayed).toBe(false)
  })

  it('trennt Gerüchteabenteuer von Gerüchten mit Effekt', () => {
    expect(parseRumorMeta(byId('whatsyoursismine')).hasAdventure).toBe(true)
    expect(parseRumorMeta(byId('scarcegoods')).hasAdventure).toBe(false)
  })

  it('erkennt Zusatzabenteuerkarten (Akt II ohne eigenen Spielzeitpunkt)', () => {
    expect(parseRumorMeta(byId('attheforge')).isAdvancedQuestCard).toBe(true)
    expect(parseRumorMeta(byId('whatsyoursismine')).isAdvancedQuestCard).toBe(false)
  })

  it('Gerüchtedeck enthält keine Zusatzabenteuerkarten', () => {
    const all = RUMORS.map((r) => r.expansionId)
    const deck = rumorDeckCards([...new Set(all)])
    expect(deck.length).toBeGreaterThan(0)
    expect(deck.some((r) => RUMOR_META[r.id].isAdvancedQuestCard)).toBe(false)
  })
})

describe('rumorPlayableNow', () => {
  const meta = (over: Partial<RumorMeta> = {}): RumorMeta => ({
    rumorId: 'x',
    timing: 'campaign-phase-start',
    timingLabelDe: 'BEGINN DER KAMPAGNENPHASE',
    timingUnknown: false,
    actRestriction: 1,
    hasAdventure: false,
    blockedByIntermezzo: false,
    excludes: [],
    excludeIds: [],
    expiresAtActTransition: false,
    overlordRewardIfUnplayed: false,
    isAdvancedQuestCard: false,
    ...over,
  })
  const ctx = {
    step: 'campaign-phase-start' as const,
    act: 1 as const,
    intermezzoSelectable: false,
    rumorAlreadyPlayedThisPhase: false,
  }

  it('ist im passenden Fenster spielbar', () => {
    expect(rumorPlayableNow(meta(), ctx).playable).toBe(true)
  })

  it('ist außerhalb seines Fensters gesperrt und nennt den Grund', () => {
    const res = rumorPlayableNow(meta({ timing: 'shopping-start' }), ctx)
    expect(res.playable).toBe(false)
    expect(res.reason).toMatch(/Einkaufsschritt/)
  })

  it('unterscheidet die drei Reise-Momente', () => {
    const travel = { ...ctx, step: 'travel' as const, travelMoment: 'after' as const }
    expect(rumorPlayableNow(meta({ timing: 'travel-after' }), travel).playable).toBe(true)
    expect(rumorPlayableNow(meta({ timing: 'travel-start' }), travel).playable).toBe(false)
  })

  it('respektiert die Akt-Beschränkung', () => {
    const res = rumorPlayableNow(meta({ actRestriction: 2 }), ctx)
    expect(res.playable).toBe(false)
    expect(res.reason).toMatch(/Akt II/)
  })

  it('sperrt bei wählbarem Zwischenspiel', () => {
    const res = rumorPlayableNow(meta({ blockedByIntermezzo: true }), { ...ctx, intermezzoSelectable: true })
    expect(res.playable).toBe(false)
    expect(res.reason).toMatch(/Zwischenspiel/)
  })

  it('erlaubt höchstens 1 Gerücht pro Kampagnenphase', () => {
    const res = rumorPlayableNow(meta(), { ...ctx, rumorAlreadyPlayedThisPhase: true })
    expect(res.playable).toBe(false)
    expect(res.reason).toMatch(/Kampagnenphase/)
  })

  it('macht reine Abenteuerkarten nie „spielbar"', () => {
    expect(rumorPlayableNow(meta({ timing: 'adventure-only' }), ctx).playable).toBe(false)
  })
})

describe('resolveAdvancedQuestId – der genannte Titel muss auffindbar sein', () => {
  it('löst JEDE auf einer Gerüchtekarte genannte Zusatzabenteuerkarte auf', () => {
    const named = Object.values(RUMOR_META)
      .map((m) => m.introducesAdvancedQuest)
      .filter((n): n is string => !!n)
    expect(named.length).toBeGreaterThan(0)
    const unresolved = named.filter((n) => resolveAdvancedQuestId(n) === null)
    expect(unresolved).toEqual([])
  })

  it('gleicht Apostroph-Varianten aus, ohne eine Transkription zu ändern', () => {
    // Die Karte „Die Hüter des Geheimnisses" nennt die Folgekarte OHNE Apostroph,
    // die Zusatzabenteuerkarte selbst trägt ihn — beides kartengenau.
    expect(RUMOR_META['stewardsofthesecret'].introducesAdvancedQuest).toBe('Devis Blutturm')
    expect(ADVANCED_QUESTS.find((q) => q.id === 'bloodspireofdevis')?.nameDe).toBe("Devis' Blutturm")
    expect(resolveAdvancedQuestId('Devis Blutturm')).toBe('bloodspireofdevis')
  })

  it('gibt null zurück, wenn es die Karte nicht gibt (rät nicht)', () => {
    expect(resolveAdvancedQuestId('Gibt es nicht')).toBeNull()
  })
})
