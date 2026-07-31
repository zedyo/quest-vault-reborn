// ── Abschluss-Flow (Screens 8–12) ────────────────────────────────────────────
//
// Fünf Schritte statt eines Riesenformulars: Ergebnis → Belohnungen → Erfahrung
// → Markt → Overlord. Gearbeitet wird auf einem ENTWURF (localStorage-Key
// `qvr-scenario-draft:<sessionId>`, einer je Kampagne); erst „Szenario
// abschließen" schreibt in den Spielstand.
//
// Die Anrechnung bleibt unverändert: gespeichert wird nur der Szenario-Eintrag,
// den `deriveLiveState` faltet. Zusätzlich werden am Ende die Marker-Stände
// (Bedrohung / Schicksal → 0) und die Kartenzustände (Gerücht/Zusatzabenteuer
// gespielt) fortgeschrieben — in EINEM Schreibvorgang.

import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router'
import { useGameStore } from '../../../store/useGameStore'
import { deriveLiveState } from '../../../store/sessionDerive'
import type { CampaignSession, PlayedScenario } from '../../../types/session'
import { useSessionMutations } from '../useSessionMutations'
import { scenariosForCampaign } from '../../../data/campaignScenarios'
import { ADVANCED_QUESTS } from '../../../data/campaigns'
import { RUMORS } from '../../../data/rumors'
import { uid, nowISO } from '../sessionHelpers'
import { clearScenarioDraft, useScenarioDraft } from './useScenarioDraft'
import { draftGold, draftHeroXp, type FlowStepProps } from './types'
import Step1Outcome from './Step1Outcome'
import Step2Rewards from './Step2Rewards'
import Step3Experience from './Step3Experience'
import Step4Market from './Step4Market'
import Step5Overlord from './Step5Overlord'
import ConfirmDialog from '../../ConfirmDialog'
import { Btn, Eyebrow, Head } from '../ui/controls'
import { Icon } from '../../QvIcons'

const STEP_NAMES = ['Ergebnis', 'Belohnungen', 'Erfahrung', 'Markt', 'Overlord']
/** Beschriftung des Weiter-Knopfes je Schritt (deutsche Artikel, wie im Design). */
const NEXT_LABEL = ['Weiter zu Belohnungen', 'Weiter zu Erfahrung', 'Weiter zum Markt', 'Weiter zum Overlord']

function blankScenario(order: number): PlayedScenario {
  return {
    id: uid(),
    order,
    scenario: { source: 'campaign', dataId: '', title: '', act: 1 },
    outcome: 'none',
    rewards: { heroXp: {}, overlordXp: 0, partyGold: 0, grantedItems: [], overlordCardIds: [], overlordRelicIds: [] },
    shopping: { bought: [], sold: [], skillsLearned: [], overlordCardsBought: [] },
    playedAt: nowISO().slice(0, 10),
  }
}

/** Schrittleiste — Pills (Schritte 1–2) bzw. kompakte Mono-Variante (3–5). */
function StepBar({ step, goTo }: { step: number; goTo: (n: number) => void }) {
  if (step >= 3) {
    return (
      <div className="flex items-center gap-3 px-5 sm:px-6 py-3.5 border-b border-line bg-surface-2 overflow-x-auto">
        {STEP_NAMES.map((name, i) => {
          const n = i + 1
          const active = n === step
          return (
            <div key={name} className="flex items-center gap-3 shrink-0">
              {i > 0 && <span className={`w-8 sm:w-16 h-px ${n <= step ? 'bg-accent-line' : 'bg-line'}`} />}
              <button
                type="button"
                onClick={() => goTo(n)}
                className={`inline-flex items-center min-h-11 sm:min-h-0 font-mono text-[11px] tracking-[0.14em] uppercase whitespace-nowrap transition-colors ${
                  active
                    ? 'text-fg pb-[3px] border-b-2 border-accent'
                    : n < step
                      ? 'text-muted hover:text-fg'
                      : 'text-faint hover:text-muted'
                }`}
              >
                {n} {name}
              </button>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div className="flex items-center px-5 sm:px-6 py-3.5 border-b border-line overflow-x-auto">
      {STEP_NAMES.map((name, i) => {
        const n = i + 1
        const active = n === step
        const done = n < step
        return (
          <div key={name} className="flex items-center shrink-0">
            {i > 0 && <span className={`w-6 sm:w-12 h-px mx-2.5 ${done || active ? 'bg-accent-line' : 'bg-line'}`} />}
            <button
              type="button"
              onClick={() => goTo(n)}
              className={`inline-flex items-center gap-2.5 min-h-11 sm:min-h-0 pl-2 pr-3.5 py-1.5 rounded-pill border transition-colors ${
                active ? 'bg-accent-soft border-accent-line' : 'border-transparent hover:border-line'
              }`}
            >
              <span
                className={`w-[22px] h-[22px] rounded-full inline-flex items-center justify-center font-mono text-[10px] ${
                  active
                    ? 'bg-accent text-onaccent'
                    : done
                      ? 'bg-accent-soft border border-accent-line text-accent-bright'
                      : 'border border-line text-faint'
                }`}
              >
                {done ? <Icon name="check" size={12} /> : n}
              </span>
              <span
                className={`font-head text-[14px] whitespace-nowrap ${
                  active ? 'font-semibold text-fg' : done ? 'text-muted' : 'text-faint'
                }`}
              >
                {name}
              </span>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default function ScenarioFlow() {
  const { sessionId } = useParams()
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const ownedExpansionIds = useGameStore((s) => s.ownedExpansionIds)
  const { session, live, persist } = useSessionMutations(sessionId)
  const [cancelling, setCancelling] = useState(false)

  const editId = params.get('edit') ?? undefined
  const pick = params.get('pick') ?? undefined
  const wantedStep = Number(params.get('step') ?? '0')

  const nextOrder = session ? (session.scenarios.length ? Math.max(...session.scenarios.map((s) => s.order)) + 1 : 1) : 1

  const { step, scenario, setScenario, setStep } = useScenarioDraft(
    sessionId ?? '',
    () => {
      const existing = editId ? session?.scenarios.find((s) => s.id === editId) : undefined
      if (existing) return existing
      const sc = blankScenario(nextOrder)
      if (pick) {
        const [kind, id] = pick.split(':')
        if (kind === 'campaign') {
          const s = scenariosForCampaign(session?.campaignId ?? '').find((x) => x.id === id)
          if (s) sc.scenario = { source: 'campaign', dataId: s.id, title: s.titleDe, act: s.act }
        } else if (kind === 'rumor') {
          const r = RUMORS.find((x) => x.id === id)
          if (r) sc.scenario = { source: 'rumor', dataId: r.id, title: r.nameDe, act: r.act === 2 ? 2 : 1 }
        } else if (kind === 'advanced-quest') {
          const q = ADVANCED_QUESTS.find((x) => x.id === id)
          if (q) sc.scenario = { source: 'advanced-quest', dataId: q.id, title: q.nameDe, act: q.act ?? 2 }
        }
      }
      return sc
    },
    editId,
  )

  // Ein `?step=N`-Deep-Link (z. B. „XP jetzt ausgeben" im Heldenbogen) springt
  // einmalig in den gewünschten Schritt.
  useEffect(() => {
    // Hooks laufen vor dem Early-Return: ohne diese Prüfung legte ein Link auf
    // eine nicht existierende Kampagne einen Waisen-Entwurf im localStorage an.
    if (!session) return
    if (wantedStep >= 1 && wantedStep <= 5) setStep(wantedStep)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wantedStep, session])

  // Live-Stand OHNE den Entwurf: „Stand vor dem Szenario" (auch beim Bearbeiten).
  const base = useMemo(() => {
    if (!session) return null
    const without: CampaignSession = { ...session, scenarios: session.scenarios.filter((s) => s.id !== scenario.id) }
    return deriveLiveState(without)
  }, [session, scenario.id])

  if (!session || !live || !base) {
    return (
      <div className="p-8 text-center">
        <Head size="s">Diese Kampagne gibt es nicht (mehr).</Head>
      </div>
    )
  }

  const scenarioValid =
    scenario.scenario.source === 'custom' ? !!scenario.scenario.title.trim() : !!scenario.scenario.dataId

  /** Schreibt Szenario + Marker + Kartenzustände in EINEM Vorgang. */
  function finish() {
    if (!session) return
    const exists = session.scenarios.some((s) => s.id === scenario.id)
    const scenarios = exists
      ? session.scenarios.map((s) => (s.id === scenario.id ? scenario : s))
      : [...session.scenarios, scenario]

    // Gespielte Abenteuerkarte im Bestand fortschreiben.
    let rumors = session.rumors
    if (scenario.scenario.source === 'rumor') {
      rumors = rumors.map((r) =>
        r.rumorId === scenario.scenario.dataId ? { ...r, status: 'played' as const, playedInScenarioId: scenario.id } : r,
      )
    }
    if (scenario.rumorPlayedId) {
      rumors = rumors.map((r) =>
        r.rumorId === scenario.rumorPlayedId ? { ...r, status: 'played' as const, playedInScenarioId: scenario.id } : r,
      )
    }
    const advancedQuests =
      scenario.scenario.source === 'advanced-quest'
        ? session.advancedQuests.map((q) =>
            q.questId === scenario.scenario.dataId ? { ...q, status: 'played' as const } : q,
          )
        : session.advancedQuests

    // Bedrohung und Schicksal beschreiben den AKTUELLEN Stand am Tisch. Beim
    // Nachbearbeiten eines älteren Eintrags dürfen sie deshalb nicht überschrieben
    // werden — sonst setzt eine Korrektur an Szenario 2 von 10 die Marker still auf
    // einen historischen Stand zurück. Nur der jüngste Eintrag schreibt sie fort.
    const isLatest = !exists || scenario.order >= Math.max(...scenarios.map((s) => s.order))

    persist({
      ...session,
      scenarios,
      rumors,
      advancedQuests,
      // Nach dem Einkaufsschritt gehen alle Schicksalsmarker zurück in den Vorrat.
      partyFateTokens: isLatest ? 0 : session.partyFateTokens,
      overlord: {
        ...session.overlord,
        threatTokens: isLatest ? scenario.threatAfter ?? session.overlord.threatTokens : session.overlord.threatTokens,
      },
    })
    clearScenarioDraft(session.id)
    navigate(`/session/${session.id}/verlauf`)
  }

  const stepProps: FlowStepProps = {
    session,
    base,
    draft: scenario,
    setScenario,
    ownedExpansionIds,
    goTo: setStep,
  }

  const balance = (() => {
    switch (step) {
      case 1:
        return 'Schritt 1 von 5 · nichts wird gespeichert, bis der Ablauf abgeschlossen ist'
      case 2:
        return `Partei-Gold ${base.partyGold} → ${base.partyGold + scenario.rewards.partyGold} · Helden-XP +${draftHeroXp(
          scenario,
        )} · Overlord-XP ${base.overlord.xpAvailable} → ${base.overlord.xpAvailable + scenario.rewards.overlordXp}`
      case 3: {
        const spent = scenario.shopping.skillsLearned.reduce((n, l) => n + l.xpCost, 0)
        return `${scenario.shopping.skillsLearned.length} Fähigkeiten gelernt · ${spent} XP ausgegeben`
      }
      case 4:
        return `${scenario.shopping.bought.length} gekauft · ${scenario.shopping.sold.length} verkauft · Partei-Gold ${
          base.partyGold + scenario.rewards.partyGold
        } → ${draftGold(base.partyGold, scenario)}`
      default:
        return 'Schritt 5 von 5 · erst der Abschluss schreibt in den Spielstand'
    }
  })()

  return (
    <div className="flex flex-col min-h-full">
      {cancelling && (
        <ConfirmDialog
          title="Eintrag verwerfen?"
          message={
            <>
              Der begonnene Eintrag <strong className="text-fg">„{scenario.scenario.title || 'ohne Szenario'}"</strong>{' '}
              wird verworfen; am Spielstand ändert sich nichts.
            </>
          }
          confirmLabel="Eintrag verwerfen"
          onConfirm={() => {
            clearScenarioDraft(session.id)
            navigate(`/session/${session.id}`)
          }}
          onCancel={() => setCancelling(false)}
        />
      )}

      {/* Kopfzeile */}
      <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-line bg-surface-2">
        <div>
          <Eyebrow className="!text-accent-bright">
            {editId ? 'Szenario bearbeiten' : 'Szenario abschließen'}
          </Eyebrow>
          <p className="mt-1.5 font-head text-[18px] font-bold text-fg">
            {session.name} · Akt {scenario.scenario.act === 2 ? 'II' : 'I'}
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate(`/session/${session.id}`)}
          className="inline-flex items-center gap-2 h-11 sm:h-auto text-[13.5px] text-muted hover:text-fg transition-colors"
        >
          Später fortsetzen
          <Icon name="close" size={15} />
        </button>
      </div>

      <StepBar step={step} goTo={setStep} />

      <div className="flex-1 min-h-0">
        {step === 1 && <Step1Outcome {...stepProps} />}
        {step === 2 && <Step2Rewards {...stepProps} />}
        {step === 3 && <Step3Experience {...stepProps} />}
        {step === 4 && <Step4Market {...stepProps} />}
        {step === 5 && <Step5Overlord {...stepProps} onFinish={finish} />}
      </div>

      {/* Fußleiste */}
      <div className="sticky bottom-0 flex items-center gap-4 px-5 sm:px-6 py-4 border-t border-line bg-surface-2 flex-wrap">
        {step === 1 ? (
          <Btn variant="ghost" onClick={() => setCancelling(true)}>
            Abbrechen
          </Btn>
        ) : (
          <Btn variant="ghost" onClick={() => setStep(step - 1)}>
            Zurück
          </Btn>
        )}
        <p className="order-last w-full sm:order-none sm:w-auto sm:mx-auto font-mono text-[11px] tracking-[0.1em] uppercase text-faint text-center">
          {balance}
        </p>
        {step < 5 ? (
          <Btn
            className="ml-auto sm:ml-0"
            disabled={step === 1 && !scenarioValid}
            title={step === 1 && !scenarioValid ? 'Bitte zuerst ein Szenario wählen' : undefined}
            onClick={() => setStep(step + 1)}
          >
            {NEXT_LABEL[step - 1]}
          </Btn>
        ) : (
          <Btn className="ml-auto sm:ml-0" onClick={finish}>
            Szenario abschließen
          </Btn>
        )}
      </div>
    </div>
  )
}
