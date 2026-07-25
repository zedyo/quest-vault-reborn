// ── „Als Nächstes"-Vorschlag + Abenteuer-Optionen ────────────────────────────
//
// Reine Ableitung aus dem Protokoll + den kuratierten Szenario-Titeln. Wichtig:
// wo die Ableitung NICHT eindeutig ist (verzweigender Szenariobaum), gibt es
// bewusst KEINEN Vorschlag — dann bleibt nur die Auswahlliste. Es wird nie geraten.
//
// Maßgeblich für die Auswahl selbst: „Immer wenn ein Spieler in Schritt 6 einer
// Kampagnenphase das nächste Abenteuer aussucht, kann er entweder eines vom
// Kampagnenbogen oder eines von einer Abenteuerkarte wählen, die im Spiel ist."

import type { CampaignScenario } from '../../types/game'
import type { CampaignSession } from '../../types/session'
import type { LiveState } from '../../store/sessionDerive'
import { scenariosForCampaign } from '../../data/campaignScenarios'
import { CAMPAIGNS, ADVANCED_QUESTS } from '../../data/campaigns'
import { RUMORS } from '../../data/rumors'
import { RUMOR_META } from '../../utils/rumorTiming'

export const ROLE_LABEL: Record<NonNullable<CampaignScenario['role']>, string> = {
  intro: 'Einführung',
  interlude: 'Zwischenspiel',
  finale: 'Finale',
}

/** Reise-Gelände: EN → DE (wie auf der Gerüchte-/Reisekartenseite). */
export const TERRAIN_DE: Record<string, string> = {
  Road: 'Straße',
  Forest: 'Wald',
  Mountain: 'Berg',
  Plain: 'Ebene',
  Water: 'Wasser',
}

export const terrainList = (travel: string[]): string =>
  travel.map((t) => TERRAIN_DE[t] ?? t).join(' · ')

export interface AdventureOption {
  kind: 'rumor' | 'advanced-quest'
  /** → RUMORS.id bzw. ADVANCED_QUESTS.id */
  dataId: string
  title: string
  act: 1 | 2
  travel: string[]
  /** Kurze, faktische Begründung, warum die Karte wählbar ist. */
  reason: string
}

export interface NextSuggestion {
  /** Eindeutiger Vorschlag vom Kampagnenbogen — sonst null. */
  campaign: CampaignScenario | null
  /** Zweiter Kampagnen-Kandidat, falls genau zwei übrig bleiben. */
  alternative: CampaignScenario | null
  /** Faktische Begründung des Vorschlags. */
  reason: string
  /** Wer die Wahl trifft (Sieger des letzten Szenarios), null = noch offen. */
  chooser: 'heroes' | 'overlord' | null
  /** true = Kampagnenbogen ist mehrdeutig → nur Auswahlliste zeigen. */
  ambiguous: boolean
  /** Abenteuerkarten im Spiel, gleichberechtigt neben dem Kampagnenbogen. */
  adventures: AdventureOption[]
}

/** IDs der bereits protokollierten Kampagnen-Szenarien. */
export function playedCampaignIds(session: CampaignSession): Set<string> {
  return new Set(
    session.scenarios.filter((s) => s.scenario.source === 'campaign').map((s) => s.scenario.dataId),
  )
}

/**
 * Ist das Zwischenspiel gerade als nächstes Abenteuer wählbar? Das entscheidet
 * der Kampagnenbogen (Anzahl gewonnener Akt-I-Abenteuer) — diese Zahl liegt im
 * Repo NICHT vor. Deshalb wird hier nur der eine Fall bejaht, der sich sauber
 * ableiten lässt: der reguläre Akt-I-Pool ist gespielt, das Zwischenspiel ist
 * der einzige verbliebene Kandidat. Sonst wird NICHT gesperrt — eine geratene
 * Sperre würde die zwölf Gerüchteabenteuer mit Intermezzo-Klausel praktisch den
 * ganzen Akt I blockieren.
 */
export function intermezzoSelectable(session: CampaignSession, live: LiveState): boolean {
  if (live.currentAct !== 1) return false
  const pool = scenariosForCampaign(session.campaignId)
  const interlude = pool.find((s) => s.role === 'interlude')
  if (!interlude) return false
  const played = playedCampaignIds(session)
  if (played.has(interlude.id)) return false
  return pool.filter((s) => s.act === 1 && !s.role && !played.has(s.id)).length === 0
}

/** Abenteuerkarten (Gerüchteabenteuer + Zusatzabenteuer), die im Spiel sind. */
export function adventureOptions(session: CampaignSession): AdventureOption[] {
  const out: AdventureOption[] = []
  for (const tracked of session.rumors) {
    if (tracked.status !== 'in-play') continue
    const rumor = RUMORS.find((r) => r.id === tracked.rumorId)
    if (!rumor) continue
    const meta = RUMOR_META[rumor.id]
    if (!meta?.hasAdventure) continue
    out.push({
      kind: 'rumor',
      dataId: rumor.id,
      title: rumor.nameDe,
      act: rumor.act === 2 ? 2 : 1,
      travel: rumor.travel,
      reason: meta.expiresAtActTransition
        ? 'Gerüchteabenteuer im Spiel — verfällt mit dem Zwischenspiel.'
        : 'Gerüchteabenteuer im Spiel.',
    })
  }
  for (const tracked of session.advancedQuests) {
    if (tracked.status !== 'in-play') continue
    const quest = ADVANCED_QUESTS.find((q) => q.id === tracked.questId)
    if (!quest) continue
    out.push({
      kind: 'advanced-quest',
      dataId: quest.id,
      title: quest.nameDe,
      act: quest.act ?? 2,
      travel: quest.travel,
      reason: 'Zusatzabenteuer im Spiel — nach dem Zwischenspiel wählbar.',
    })
  }
  return out
}

/**
 * Vorschlag für das nächste Szenario. Eindeutig nur dort, wo der Kampagnenbogen
 * es hergibt (lineare Kampagne, Einführung, letztes verbliebenes Szenario,
 * Zwischenspiel/Finale als einzige Kandidaten) — sonst `ambiguous`.
 */
export function suggestNext(session: CampaignSession, live: LiveState): NextSuggestion {
  const pool = scenariosForCampaign(session.campaignId)
  const campaign = CAMPAIGNS.find((c) => c.id === session.campaignId)
  const played = playedCampaignIds(session)
  const remaining = pool.filter((s) => !played.has(s.id)).sort((a, b) => a.order - b.order)
  const adventures = adventureOptions(session)
  const chooser = live.currentScenario
    ? live.currentScenario.outcome === 'none'
      ? null
      : live.currentScenario.outcome
    : null

  const none: NextSuggestion = {
    campaign: null,
    alternative: null,
    reason: '',
    chooser,
    ambiguous: true,
    adventures,
  }
  if (pool.length === 0 || remaining.length === 0) return { ...none, ambiguous: pool.length > 0 }

  // Mini-/lineare Kampagnen: die kuratierte Liste ist die Reihenfolge der
  // QUESTBÜCHER, nicht zwingend der Kampagnenbogen (Mini-Kampagnen bestehen aus
  // vier bis fünf Abenteuern, es sind teils mehr Titel erfasst). Deshalb wird
  // das nächste Szenario vorgeschlagen, die Begründung sagt aber offen, worauf
  // sie beruht.
  if (campaign && !campaign.branching) {
    return {
      ...none,
      campaign: remaining[0],
      reason: 'Nächster Titel in der Reihenfolge des Questbuchs — der Kampagnenbogen kann abweichen.',
      ambiguous: false,
    }
  }

  // Noch nichts gespielt → die Einführung, sofern es genau eine gibt.
  if (session.scenarios.length === 0) {
    const intros = remaining.filter((s) => s.role === 'intro')
    if (intros.length === 1) {
      return { ...none, campaign: intros[0], reason: 'Einführung der Kampagne.', ambiguous: false }
    }
    return none
  }

  const act = live.currentAct
  const openInAct = remaining.filter((s) => s.act === act && !s.role)
  const rolesInAct = remaining.filter((s) => s.act === act && s.role && s.role !== 'intro')

  // Regulärer Pool des laufenden Akts erschöpft → das feste Szenario (Zwischenspiel
  // in Akt I bzw. Finale in Akt II) ist der einzige verbliebene Kandidat.
  if (openInAct.length === 0 && rolesInAct.length === 1) {
    const s = rolesInAct[0]
    return {
      ...none,
      campaign: s,
      reason: `${ROLE_LABEL[s.role!]} — der reguläre Pool von Akt ${act === 2 ? 'II' : 'I'} ist gespielt.`,
      ambiguous: false,
    }
  }

  // Genau ein regulärer Kandidat übrig → eindeutig.
  if (openInAct.length === 1) {
    return {
      ...none,
      campaign: openInAct[0],
      reason: `Letztes offenes Szenario in Akt ${act === 2 ? 'II' : 'I'}.`,
      ambiguous: false,
    }
  }

  // Genau zwei → Verzweigung mit zwei Zweigen (EMPFOHLEN + ALTERNATIVE).
  if (openInAct.length === 2) {
    return {
      ...none,
      campaign: openInAct[0],
      alternative: openInAct[1],
      reason: `Zwei offene Szenarien in Akt ${act === 2 ? 'II' : 'I'} — die Gruppe wählt.`,
      ambiguous: false,
    }
  }

  // Mehr als zwei Kandidaten: der Szenariobaum verzweigt, die Ableitung wäre
  // geraten → kein Vorschlag, nur die Auswahlliste.
  return none
}

/** Text, wer die Wahl trifft (aus dem Ausgang des letzten Szenarios). */
export function chooserSentence(live: LiveState): string {
  const last = live.currentScenario
  if (!last) return 'Noch kein Szenario protokolliert — die Gruppe beginnt mit der Einführung.'
  const nr = last.order
  if (last.outcome === 'overlord') return `Die Auswahl trifft der Overlord (Sieg in Szenario ${nr}).`
  if (last.outcome === 'heroes') return `Die Auswahl treffen die Helden (Sieg in Szenario ${nr}).`
  return `Szenario ${nr} ist ohne Ergebnis protokolliert — wer wählt, entscheidet die Gruppe.`
}
