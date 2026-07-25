// ── Gerüchtekarten: Zeitfenster + Spielbarkeit ───────────────────────────────
//
// Die Spielregeln einer Gerüchtekarte stehen WÖRTLICH auf der Karte. Statt eines
// handgepflegten Mappings über 60 Karten liest dieser reine Parser sie aus
// `Rumor.textDe` (= deutscher Original-Kartentext, 1:1 transkribiert):
//
//   „Spiele diese Karte zu Beginn einer Kampagnenphase in Akt I."      → Zeitfenster + Akt
//   „Du kannst sie nicht spielen, wenn das Intermezzo …"                → Sperre
//   „Wenn du die Gerüchtekarte „X" oder „Y" gespielt hast, wirf …"      → Ausschlüsse
//   „Wenn diese Karte beim Übergang zu Akt II im Spiel ist, erhält …"   → Verfall + OL-Belohnung
//   „… beim Aufbau des Finales … darf der Overlord 1 Overlordkarte …"   → OL-Belohnung
//   „Solange diese Karte im Spiel ist, kann sie … gewählt werden."      → führt ein Abenteuer ein
//
// Alles hier ist rein und unit-getestet; nichts davon wird persistiert.

import type { Rumor } from '../types/game'
import type { RumorTiming } from '../types/session'
import { RUMORS } from '../data/rumors'
import { ADVANCED_QUESTS } from '../data/campaigns'

export interface RumorMeta {
  rumorId: string
  timing: RumorTiming
  /** Mono-Label des Zeitfensters für die Anzeige. */
  timingLabelDe: string
  /**
   * true, wenn die Karte zwar einen Auslöser nennt, dieser aber keinem der sechs
   * Zeitfenster entspricht (z. B. „nach dem Aufbau einer Szene"). Dann ist der
   * Kartentext maßgeblich — die App bietet bewusst KEINEN „Jetzt spielen"-Knopf an.
   */
  timingUnknown: boolean
  /** Auf einen Akt beschränkt („in Akt I" / „in Akt II"). */
  actRestriction?: 1 | 2
  /** Führt ein Abenteuer ein („kann … als nächstes Abenteuer gewählt werden"). */
  hasAdventure: boolean
  /** „Du kannst sie nicht spielen, wenn das Intermezzo … gewählt werden kann." */
  blockedByIntermezzo: boolean
  /** Namen der Gerüchtekarten, die diese Karte ausschließen (aus dem Kartentext). */
  excludes: string[]
  /** IDs dazu, soweit über RUMORS.nameDe auflösbar. */
  excludeIds: string[]
  /** Akt-I-Abenteuer: bleibt es beim Übergang zu Akt II liegen, verfällt es. */
  expiresAtActTransition: boolean
  /** Zusatzabenteuer/Akt II: ungespielt beim Aufbau des Finales → Overlord zieht. */
  overlordRewardIfUnplayed: boolean
  /** Name der Zusatzabenteuerkarte, die beim Aktwechsel ins Spiel kommt. */
  introducesAdvancedQuest?: string
  /**
   * Akt-II-Karte ohne eigenen Spielzeitpunkt = Zusatzabenteuerkarte. Diese sind
   * KEIN Teil des Gerüchtedecks und werden daher nicht mitgezogen.
   */
  isAdvancedQuestCard: boolean
}

export const TIMING_LABEL_DE: Record<RumorTiming, string> = {
  'campaign-phase-start': 'BEGINN DER KAMPAGNENPHASE',
  'travel-start': 'REISESCHRITT · BEGINN',
  'travel-after': 'REISESCHRITT · DANACH',
  'travel-end': 'REISESCHRITT · ENDE',
  'shopping-start': 'EINKAUFSSCHRITT · BEGINN',
  'adventure-only': 'KEIN SPIELZEITPUNKT · NUR ABENTEUER',
}

/** Deutsche Anführungszeichen der Scans sind gemischt („…" und „…“). */
const QUOTED = /[„"]([^„“"”]{2,80})[“"”]/g

/** Erster Satz, der einen Auslöser nennt („Spiele diese Karte …"). */
function triggerSentence(text: string): string | null {
  const m = text.match(/Spiele diese Karte[^.:]*[.:]/)
  return m ? m[0] : null
}

/**
 * Liest Zeitfenster, Akt-Beschränkung, Sperren und Ausschlüsse aus dem deutschen
 * Kartentext. Reine Funktion — gleiche Karte, gleiches Ergebnis.
 */
export function parseRumorMeta(rumor: Rumor): RumorMeta {
  const text = rumor.textDe ?? ''
  const trigger = triggerSentence(text)

  // ── Zeitfenster ────────────────────────────────────────────────────────────
  // Reise-/Einkaufsschritt zuerst prüfen: „zu Beginn des Reiseschritts einer
  // Kampagnenphase" enthält ebenfalls das Wort „Kampagnenphase".
  let timing: RumorTiming
  let timingUnknown = false
  if (/zu Beginn des Reiseschritts/i.test(text)) timing = 'travel-start'
  else if (/(sofort )?nach dem Reiseschritt/i.test(text)) timing = 'travel-after'
  else if (/am Ende des Reiseschritts/i.test(text)) timing = 'travel-end'
  else if (/zu Beginn des Einkaufsschritts/i.test(text)) timing = 'shopping-start'
  else if (/zu Beginn einer Kampag\w*phase/i.test(text)) timing = 'campaign-phase-start'
  else {
    // Kein bekanntes Fenster. Nennt die Karte dennoch einen Auslöser, ist der
    // Kartentext maßgeblich (kein „Jetzt spielen") – sonst ist es eine reine
    // Abenteuerkarte.
    timing = 'adventure-only'
    timingUnknown = trigger !== null
  }

  // ── Akt-Beschränkung ───────────────────────────────────────────────────────
  // NUR aus dem Auslösersatz („Spiele diese Karte … in Akt I."). Der übrige
  // Kartentext nennt Akte in ganz anderer Bedeutung — „Zweifelhafte Schätze"
  // etwa im Preisabsatz („in Akt II 175 Goldstücke"), obwohl die Karte KEIN
  // Aktsymbol trägt (act: null) und in beiden Akten spielbar ist. Fallback ist
  // das Aktsymbol der Karte selbst; ohne Symbol gilt keine Beschränkung.
  const actMatch = trigger?.match(/\bin Akt (II|I)\b/) ?? null
  const actRestriction: 1 | 2 | undefined = actMatch
    ? actMatch[1] === 'II'
      ? 2
      : 1
    : rumor.act === 1 || rumor.act === 2
      ? rumor.act
      : undefined

  // ── Abenteuer / Sperren / Ausschlüsse ──────────────────────────────────────
  const hasAdventure = /als n(ä|ae)chstes Abenteuer gew(ä|ae)hlt werden/i.test(text)
  const blockedByIntermezzo = /nicht spielen,?\s*wenn das (Intermezzo|Zwischenspiel)/i.test(text)

  const excludes: string[] = []
  const excludeSentence = text.match(/Wenn du die Ger(ü|ue)chtekarten?[^.]*?gespielt hast[^.]*\./)
  if (excludeSentence) {
    QUOTED.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = QUOTED.exec(excludeSentence[0])) !== null) excludes.push(m[1].trim())
  }
  const excludeIds = excludes
    .map((name) => RUMORS.find((r) => r.nameDe === name)?.id)
    .filter((id): id is string => !!id)

  // ── Verfall / Overlord-Belohnung ───────────────────────────────────────────
  const expiresAtActTransition = /Wenn diese Karte beim (Ü|Ue)bergang zu Akt II im Spiel ist/i.test(text)
  const overlordRewardIfUnplayed = /(beim|nach dem) Aufbau des Finales/i.test(text)

  let introducesAdvancedQuest: string | undefined
  const questSentence = text.match(/Zusatzabenteuerkarte[^.]*\./)
  if (questSentence) {
    QUOTED.lastIndex = 0
    const m = QUOTED.exec(questSentence[0])
    if (m) introducesAdvancedQuest = m[1].trim()
  }

  const isAdvancedQuestCard = rumor.act === 2 && trigger === null && hasAdventure

  return {
    rumorId: rumor.id,
    timing,
    timingLabelDe: timingUnknown && trigger ? trigger.replace(/[.:]$/, '').toUpperCase() : TIMING_LABEL_DE[timing],
    timingUnknown,
    actRestriction,
    hasAdventure,
    blockedByIntermezzo,
    excludes,
    excludeIds,
    expiresAtActTransition,
    overlordRewardIfUnplayed,
    introducesAdvancedQuest,
    isAdvancedQuestCard,
  }
}

// ── Spielbarkeit ─────────────────────────────────────────────────────────────

export interface RumorContext {
  /** Wo im Ablauf befindet sich die Gruppe gerade? */
  step: 'campaign-phase-start' | 'travel' | 'shopping' | 'none'
  /** Bei step==='travel': welcher Moment des Reiseschritts. */
  travelMoment?: 'start' | 'after' | 'end'
  act: 1 | 2
  /** Kann das Zwischenspiel gerade als nächstes Abenteuer gewählt werden? */
  intermezzoSelectable: boolean
  /** Wurde in dieser Kampagnenphase schon ein Gerücht gespielt? */
  rumorAlreadyPlayedThisPhase: boolean
}

export interface RumorPlayability {
  playable: boolean
  /** Grund der Sperre (Mono-Kleintext unter der Karte). Nicht spielbare Karten
   *  werden ANGEZEIGT, nicht versteckt. */
  reason?: string
}

const TRAVEL_TIMING: Record<'start' | 'after' | 'end', RumorTiming> = {
  start: 'travel-start',
  after: 'travel-after',
  end: 'travel-end',
}

const STEP_LABEL: Record<RumorTiming, string> = {
  'campaign-phase-start': 'Erst zu Beginn der Kampagnenphase',
  'travel-start': 'Erst zu Beginn des Reiseschritts',
  'travel-after': 'Erst nach dem Reiseschritt',
  'travel-end': 'Erst am Ende des Reiseschritts',
  'shopping-start': 'Erst im Einkaufsschritt',
  'adventure-only': 'Kein Spielzeitpunkt — nur als Abenteuer wählbar',
}

/** Reine Regelprüfung: Darf diese Gerüchtekarte JETZT gespielt werden? */
export function rumorPlayableNow(meta: RumorMeta, ctx: RumorContext): RumorPlayability {
  if (meta.timing === 'adventure-only') {
    return {
      playable: false,
      reason: meta.timingUnknown ? 'Zeitpunkt laut Kartentext' : STEP_LABEL['adventure-only'],
    }
  }

  const expected: RumorTiming | null =
    ctx.step === 'campaign-phase-start'
      ? 'campaign-phase-start'
      : ctx.step === 'shopping'
        ? 'shopping-start'
        : ctx.step === 'travel'
          ? TRAVEL_TIMING[ctx.travelMoment ?? 'start']
          : null

  if (expected !== meta.timing) return { playable: false, reason: STEP_LABEL[meta.timing] }
  if (meta.actRestriction !== undefined && meta.actRestriction !== ctx.act) {
    return { playable: false, reason: `Nur in Akt ${meta.actRestriction === 2 ? 'II' : 'I'}` }
  }
  if (meta.blockedByIntermezzo && ctx.intermezzoSelectable) {
    return { playable: false, reason: 'Zwischenspiel ist wählbar' }
  }
  if (ctx.rumorAlreadyPlayedThisPhase) {
    return { playable: false, reason: 'Schon 1 Gerücht in dieser Kampagnenphase gespielt' }
  }
  return { playable: true }
}

/** Meta aller Gerüchtekarten, einmal berechnet (rein statische Daten). */
export const RUMOR_META: Record<string, RumorMeta> = Object.fromEntries(
  RUMORS.map((r) => [r.id, parseRumorMeta(r)]),
)

/** Vergleichsform eines Kartentitels: ohne Apostrophvarianten, Mehrfach-Leerzeichen, Groß-/Kleinschreibung. */
function normalizeTitle(s: string): string {
  return s
    .replace(/[’‘'`´]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

/**
 * Löst den auf einer Gerüchtekarte GENANNTEN Zusatzabenteuer-Titel zur ID auf.
 * Ein exakter Stringvergleich scheitert an Apostroph-Varianten: „Die Hüter des
 * Geheimnisses" nennt die Folgekarte „Devis Blutturm“, die Zusatzabenteuerkarte
 * selbst heißt „Devis' Blutturm“. Beide Transkriptionen sind kartengenau und
 * bleiben unangetastet (Kartentext = priorisierte Wahrheit) — verglichen wird
 * normalisiert.
 */
export function resolveAdvancedQuestId(nameDe: string): string | null {
  const want = normalizeTitle(nameDe)
  return ADVANCED_QUESTS.find((q) => normalizeTitle(q.nameDe) === want)?.id ?? null
}

/**
 * Karten des Gerüchtedecks: alle Gerüchtekarten AUSSER den Zusatzabenteuerkarten
 * (die sind kein Teil des Decks und kommen nur über Belohnungen ins Spiel).
 */
export function rumorDeckCards(ownedExpansionIds: string[]): Rumor[] {
  return RUMORS.filter(
    (r) => ownedExpansionIds.includes(r.expansionId) && !RUMOR_META[r.id].isAdvancedQuestCard,
  )
}
