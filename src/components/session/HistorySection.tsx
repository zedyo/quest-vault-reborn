// ── Screen 3 · Verlauf — Zeitleiste statt Liste ──────────────────────────────
//
// Akt-Bänder trennen den Pfad, das offene Ende zeigt die Verzweigung. Gewählt
// werden darf vom Kampagnenbogen ODER von jeder Abenteuerkarte, die im Spiel ist
// — Gerüchteabenteuer und Zusatzabenteuer stehen gleichberechtigt daneben.

import { Link, useNavigate } from 'react-router-dom'
import { useSessionCtx } from './context'
import { scenariosForCampaign } from '../../data/campaignScenarios'
import { chooserSentence, ROLE_LABEL, suggestNext, terrainList } from './scenarioSuggest'
import { rewardLine } from './overview/OverviewSection'
import Timeline, { type TimelineGroup, type TimelineRow } from './ui/Timeline'
import { Btn, Eyebrow, Head, LinkBtn, Meta } from './ui/controls'
import type { PlayedScenario } from '../../types/session'

const OUTCOME_LABEL: Record<PlayedScenario['outcome'], string> = {
  heroes: 'Helden gewonnen',
  overlord: 'Overlord gewonnen',
  none: 'offen',
}

export default function HistorySection() {
  const { session, live, requestDelete } = useSessionCtx()
  const navigate = useNavigate()
  const pool = scenariosForCampaign(session.campaignId)
  const roleOf = (sc: PlayedScenario) =>
    sc.scenario.source === 'campaign' ? pool.find((x) => x.id === sc.scenario.dataId)?.role : undefined

  const sorted = [...session.scenarios].sort((a, b) => a.order - b.order)
  const toRow = (sc: PlayedScenario, i: number): TimelineRow => {
    const role = roleOf(sc)
    return {
      id: sc.id,
      no: String(i + 1).padStart(2, '0'),
      title: sc.scenario.title || 'Unbenannt',
      role: role ? ROLE_LABEL[role] : undefined,
      rewards: rewardLine(sc),
      outcome: OUTCOME_LABEL[sc.outcome],
      highlight: role === 'interlude',
    }
  }

  // Gruppierung: Akt I · Zwischenspiel · Akt II — in Spielreihenfolge.
  const groups: TimelineGroup[] = []
  const act1: TimelineRow[] = []
  const interlude: TimelineRow[] = []
  const act2: TimelineRow[] = []
  sorted.forEach((sc, i) => {
    const row = toRow(sc, i)
    if (roleOf(sc) === 'interlude') interlude.push(row)
    else if (sc.scenario.act === 2) act2.push(row)
    else act1.push(row)
  })
  const wins = (rows: TimelineRow[], side: string) => rows.filter((r) => r.outcome === side).length
  if (act1.length)
    groups.push({
      label: 'Akt I',
      meta: `${act1.length} Szenarien · ${wins(act1, 'Helden gewonnen')} Heldensiege`,
      rows: act1,
    })
  // Neutral formuliert: nach dem Zwischenspiel wird der Akt-I-Stapel noch einmal
  // benutzt und wandert danach in die Schachtel; Akt-II-Karten stehen erst ab
  // dem ersten beendeten Akt-II-Abenteuer offen (Mini-Kampagnen ausgenommen).
  if (interlude.length) groups.push({ label: 'Zwischenspiel', meta: 'Übergang zu Akt II', rows: interlude })
  if (act2.length)
    groups.push({
      label: 'Akt II',
      meta: live.currentAct === 2 ? 'laufend' : `${act2.length} Szenarien`,
      rows: act2,
    })

  const suggestion = suggestNext(session, live)
  const branches: { tag: string; title: string; why: string; to: string }[] = []
  if (suggestion.campaign) {
    branches.push({
      tag: 'Kampagnenbogen · empfohlen',
      title: suggestion.campaign.titleDe,
      why: suggestion.reason,
      to: `/session/${session.id}/abschluss?pick=campaign:${suggestion.campaign.id}`,
    })
  }
  if (suggestion.alternative) {
    branches.push({
      tag: 'Kampagnenbogen · Alternative',
      title: suggestion.alternative.titleDe,
      why: `Akt ${suggestion.alternative.act === 2 ? 'II' : 'I'} · ebenfalls offen.`,
      to: `/session/${session.id}/abschluss?pick=campaign:${suggestion.alternative.id}`,
    })
  }
  for (const a of suggestion.adventures.slice(0, 3 - branches.length)) {
    branches.push({
      tag: `${a.kind === 'rumor' ? 'Gerüchteabenteuer' : 'Zusatzabenteuer'} · Akt ${a.act === 2 ? 'II' : 'I'}`,
      title: a.title,
      why: `${a.reason}${a.travel.length ? ` Reise: ${terrainList(a.travel)}.` : ''}`,
      to: `/session/${session.id}/abschluss?pick=${a.kind === 'rumor' ? 'rumor' : 'advanced-quest'}:${a.dataId}`,
    })
  }

  return (
    <div className="p-5 sm:px-7 sm:py-6 flex flex-col gap-2">
      <div className="flex items-end justify-between gap-4 mb-2 flex-wrap">
        <div>
          <Head>Kampagnenpfad</Head>
          <p className="mt-1 text-[14px] text-muted">
            {sorted.length} {sorted.length === 1 ? 'Szenario' : 'Szenarien'} protokolliert · Belohnungen werden
            automatisch angerechnet, Löschen zieht sie wieder ab.
          </p>
        </div>
        <div className="flex gap-2.5 flex-wrap">
          <LinkBtn variant="ghost" size="sm" to={`/session/${session.id}/verlauf/karten`}>
            Abenteuerkarten im Spiel
          </LinkBtn>
          <LinkBtn variant="ghost" size="sm" to={`/session/${session.id}/abschluss`}>
            Szenario nachtragen
          </LinkBtn>
        </div>
      </div>

      <Timeline
        groups={groups}
        onEdit={(id) => navigate(`/session/${session.id}/abschluss?edit=${id}`)}
        onDelete={(id) => {
          const sc = session.scenarios.find((s) => s.id === id)
          requestDelete({ type: 'scenario', id, name: sc?.scenario.title || 'Szenario' })
        }}
      >
        <Eyebrow className="!text-accent-bright mb-1">Hier steht ihr — weiter geht es mit</Eyebrow>
        <p className="mb-3 text-[13.5px] text-muted">
          {chooserSentence(live)} Gewählt werden darf vom Kampagnenbogen{' '}
          <strong className="font-semibold text-fg">oder</strong> von jeder Abenteuerkarte, die im Spiel ist —
          Gerüchteabenteuer und Zusatzabenteuer stehen gleichberechtigt daneben.
        </p>

        {branches.length === 0 ? (
          <div className="p-4 rounded-card border border-dashed border-accent-line bg-surface">
            <p className="font-head text-[15px] font-semibold text-fg">Der Szenariobaum verzweigt hier</p>
            <p className="mt-1.5 text-[13.5px] leading-[1.5] text-muted">
              Aus dem Protokoll lässt sich das nächste Szenario nicht eindeutig ableiten — die App rät nicht. Wähle es
              beim Abschließen aus der Liste.
            </p>
            <div className="mt-3">
              <LinkBtn variant="secondary" size="sm" to={`/session/${session.id}/abschluss`}>
                Szenario abschließen
              </LinkBtn>
            </div>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {branches.map((b) => (
              <div key={b.to} className="p-4 rounded-card border border-dashed border-accent-line bg-surface">
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-faint">{b.tag}</p>
                <p className="mt-2 font-head text-[18px] font-bold text-fg">{b.title}</p>
                <p className="mt-1.5 mb-3.5 text-[13.5px] leading-[1.5] text-muted">{b.why}</p>
                <Btn variant="secondary" size="sm" onClick={() => navigate(b.to)}>
                  Dieses Szenario spielen
                </Btn>
              </div>
            ))}
          </div>
        )}
      </Timeline>

      {sorted.length === 0 && (
        <p className="mt-4 text-[13.5px] text-muted">
          Noch kein Szenario protokolliert.{' '}
          <Link to={`/session/${session.id}/abschluss`} className="underline text-accent">
            Trage nach dem ersten Spielabend eins ein.
          </Link>
        </p>
      )}

      <Meta className="mt-4">
        Zeitfenster, Akt und Ausschlüsse der Gerüchtekarten werden aus dem deutschen Kartentext erkannt.
      </Meta>
    </div>
  )
}
