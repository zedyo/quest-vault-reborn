// ── Entwurf des Abschluss-Flows ──────────────────────────────────────────────
//
// Der Flow arbeitet auf einem ENTWURF, nicht direkt auf dem Spielstand: erst
// „Szenario abschließen" (Schritt 5) ruft `saveScenario` auf. Muster wie
// `src/utils/builderDraft.ts` — eigener localStorage-Key, kein Persist-Bump am
// Session-Schema.
//
//   • „Später fortsetzen" schließt den Flow und BEHÄLT den Entwurf.
//   • „Abbrechen" (Schritt 1) verwirft ihn nach Bestätigung.

import { useCallback, useState } from 'react'
import type { PlayedScenario } from '../../../types/session'
import { sanitizePlayedScenario } from '../../../utils/sessionImport'
import { storageKey } from '../../../utils/previewBuild'

const KEY_PREFIX = storageKey('qvr-scenario-draft')

/**
 * Ein Entwurf JE KAMPAGNE — sonst überschreibt der Flow in Kampagne B den
 * unfertigen Eintrag von Kampagne A.
 */
const keyFor = (sessionId: string) => `${KEY_PREFIX}:${sessionId}`

export interface ScenarioDraft {
  sessionId: string
  /** Aktueller Schritt 1–5. */
  step: number
  scenario: PlayedScenario
}

export function loadScenarioDraft(sessionId: string): ScenarioDraft | null {
  try {
    const raw = localStorage.getItem(keyFor(sessionId))
    if (!raw) return null
    const parsed = JSON.parse(raw) as unknown
    if (typeof parsed !== 'object' || parsed === null) return null
    const r = parsed as Record<string, unknown>
    const storedSessionId = typeof r.sessionId === 'string' ? r.sessionId.slice(0, 100) : ''
    const scenario = sanitizePlayedScenario(r.scenario)
    if (!storedSessionId || !scenario) return null
    const step = typeof r.step === 'number' && r.step >= 1 && r.step <= 5 ? Math.floor(r.step) : 1
    return { sessionId: storedSessionId, step, scenario }
  } catch {
    return null
  }
}

export function saveScenarioDraft(draft: ScenarioDraft): void {
  try {
    localStorage.setItem(keyFor(draft.sessionId), JSON.stringify(draft))
  } catch {
    /* localStorage voll/blockiert – der Entwurf bleibt im Speicher der Sitzung */
  }
}

export function clearScenarioDraft(sessionId: string): void {
  try {
    localStorage.removeItem(keyFor(sessionId))
  } catch {
    /* nichts zu tun */
  }
}

/**
 * Entwurfs-State des Flows. `initial` wird nur benutzt, wenn (noch) kein Entwurf
 * für diese Session existiert bzw. ein anderes Szenario bearbeitet wird.
 */
export function useScenarioDraft(sessionId: string, initial: () => PlayedScenario, editId?: string) {
  const [state, setState] = useState<{ step: number; scenario: PlayedScenario }>(() => {
    const stored = loadScenarioDraft(sessionId)
    if (stored && stored.sessionId === sessionId && (!editId || stored.scenario.id === editId)) {
      return { step: stored.step, scenario: stored.scenario }
    }
    return { step: 1, scenario: initial() }
  })

  const write = useCallback(
    (next: { step: number; scenario: PlayedScenario }) => {
      setState(next)
      saveScenarioDraft({ sessionId, ...next })
    },
    [sessionId],
  )

  const setScenario = useCallback(
    (updater: (sc: PlayedScenario) => PlayedScenario) =>
      setState((prev) => {
        const next = { step: prev.step, scenario: updater(prev.scenario) }
        saveScenarioDraft({ sessionId, ...next })
        return next
      }),
    [sessionId],
  )

  const setStep = useCallback(
    (step: number) =>
      setState((prev) => {
        const next = { step: Math.max(1, Math.min(5, step)), scenario: prev.scenario }
        saveScenarioDraft({ sessionId, ...next })
        return next
      }),
    [sessionId],
  )

  return { step: state.step, scenario: state.scenario, setScenario, setStep, write }
}
