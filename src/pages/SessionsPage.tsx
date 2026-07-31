// ── Session-Tracker: Kampagnen-Auswahl (Screen 1) + Shell (Abschnittsleiste) ──
//
// Diese Datei ist nur noch Router/Shell: Einstieg über die Kampagnen-Auswahl,
// darunter die Abschnittsleiste mit den vier Abschnitten (Überblick/Helden/
// Overlord/Verlauf) und der dezent abgesetzten „Einrichtung". Die Mutationen
// liegen in `useSessionMutations` und werden per Outlet-Kontext weitergereicht.

import { useMemo, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate, useParams } from 'react-router'
import { useSessionStore } from '../store/useSessionStore'
import { useGameStore } from '../store/useGameStore'
import { CAMPAIGNS } from '../data/campaigns'
import { EXPANSIONS } from '../data/expansions'
import { scenariosForCampaign } from '../data/campaignScenarios'
import type { CampaignSession } from '../types/session'
import { deriveLiveState } from '../store/sessionDerive'
import { exportSessionAsJSON, parseImportedSession, MAX_IMPORT_BYTES } from '../utils/sessionImport'
import { newSession, heroShortName } from '../components/session/sessionHelpers'
import { useSessionMutations } from '../components/session/useSessionMutations'
import { playedCampaignIds } from '../components/session/scenarioSuggest'
import type { DeleteRequest, SessionCtx } from '../components/session/context'
import { clearScenarioDraft, loadScenarioDraft } from '../components/session/flow/useScenarioDraft'
import ConfirmDialog from '../components/ConfirmDialog'
import { Icon, type IconName } from '../components/QvIcons'
import { Badge, Btn, Eyebrow, Head, Meta, Micro, Panel, Progress } from '../components/session/ui/controls'
import HeroAvatar from '../components/session/ui/HeroAvatar'

const CAMPAIGN_BY_ID = Object.fromEntries(CAMPAIGNS.map((c) => [c.id, c]))
const EXP_BY_ID = Object.fromEntries(EXPANSIONS.map((e) => [e.id, e]))

/** „Die Schattenrune · Großkampagne · Grundspiel" */
export function campaignSubtitle(session: CampaignSession): string {
  const c = CAMPAIGN_BY_ID[session.campaignId]
  if (!c) return session.campaignId
  return [c.nameDe, c.kind === 'mini' ? 'Mini-Kampagne' : 'Großkampagne', EXP_BY_ID[c.expansionId]?.nameDe ?? c.expansionId]
    .filter(Boolean)
    .join(' · ')
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}

// ── Löschdialog (Texte unverändert aus v1.5) ─────────────────────────────────

const DELETE_COPY: Record<DeleteRequest['type'], { title: string; noun: string; effect: string; confirm: string }> = {
  session: {
    title: 'Kampagne löschen?',
    noun: 'Die Kampagne',
    effect: 'wird mit allen Helden, dem Overlord-Aufbau und dem Verlauf dauerhaft gelöscht.',
    confirm: 'Kampagne löschen',
  },
  hero: { title: 'Held entfernen?', noun: 'Der Held', effect: 'wird aus der Kampagne entfernt.', confirm: 'Held entfernen' },
  scenario: {
    title: 'Szenario löschen?',
    noun: 'Das Szenario',
    effect: 'wird aus dem Verlauf entfernt; seine Belohnungen werden vom Live-Stand abgezogen.',
    confirm: 'Szenario löschen',
  },
  draft: {
    title: 'Eintrag verwerfen?',
    noun: 'Der begonnene Eintrag',
    effect: 'wird verworfen; am Spielstand ändert sich nichts.',
    confirm: 'Eintrag verwerfen',
  },
}

export function useDeleteDialog(onConfirm: (req: DeleteRequest) => void) {
  const [pending, setPending] = useState<DeleteRequest | null>(null)
  const dialog = pending && (
    <ConfirmDialog
      title={DELETE_COPY[pending.type].title}
      message={
        <>
          {DELETE_COPY[pending.type].noun} <strong className="text-fg">„{pending.name}"</strong>{' '}
          {DELETE_COPY[pending.type].effect} Das kann nicht rückgängig gemacht werden.
        </>
      }
      confirmLabel={DELETE_COPY[pending.type].confirm}
      onConfirm={() => {
        onConfirm(pending)
        setPending(null)
      }}
      onCancel={() => setPending(null)}
    />
  )
  return { dialog, requestDelete: setPending }
}

// ── Screen 1 · Kampagnen-Auswahl ─────────────────────────────────────────────

function HeroChips({ session }: { session: CampaignSession }) {
  if (session.heroes.length === 0) return null
  return (
    <div className="flex items-center gap-2.5 flex-wrap">
      {session.heroes.map((h) => (
        <span
          key={h.localId}
          className="inline-flex items-center gap-2 rounded-pill bg-surface-2 border border-line pl-[5px] pr-3 py-[5px]"
        >
          <HeroAvatar hero={h} size={26} withTitle={false} />
          <span className="text-[13px] text-muted">{heroShortName(h)}</span>
        </span>
      ))}
    </div>
  )
}

function RunningCampaignCard({
  session,
  onOpen,
  onExport,
}: {
  session: CampaignSession
  onOpen: () => void
  onExport: () => void
}) {
  const live = deriveLiveState(session)
  const pool = scenariosForCampaign(session.campaignId).length
  // Zähler und Nenner müssen dasselbe messen: nur GESPIELTE TITEL des
  // Kampagnenbogens (Gerüchte-/Zusatzabenteuer und Freitext zählen nicht,
  // sonst überschritte der Balken den Bogen).
  const played = playedCampaignIds(session).size
  const pct = pool > 0 ? Math.min(100, Math.round((played / pool) * 100)) : 0

  return (
    <div className="rounded-card border border-accent-line bg-surface shadow-card overflow-hidden">
      <div className="flex">
        <div className="w-1.5 shrink-0 bg-accent" style={{ boxShadow: 'var(--qv-glow-accent)' }} />
        <div className="flex-1 min-w-0 p-5 sm:px-6 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-5 flex-wrap">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <h4 className="font-head text-[22px] font-bold text-fg truncate">{session.name}</h4>
                <Badge variant="accent" mono glow>
                  Akt {live.currentAct === 2 ? 'II' : 'I'}
                </Badge>
              </div>
              <p className="mt-1.5 text-[15px] text-muted">{campaignSubtitle(session)}</p>
            </div>
            <div className="text-right shrink-0">
              <Micro>Zuletzt gespielt</Micro>
              <p className="mt-1 font-head text-[15px] font-semibold text-fg">{formatDate(session.updatedAt)}</p>
            </div>
          </div>

          <HeroChips session={session} />

          <div className="flex items-center gap-7 flex-wrap">
            <div className="flex-1 min-w-[12rem]">
              <div className="flex items-baseline justify-between mb-1.5">
                <Micro>Kampagnenfortschritt</Micro>
                {/* Der Nenner ist die Zahl der kuratierten TITEL des Kampagnenbogens
                    — nicht die Länge eines Durchlaufs (die steht nirgends belegt). */}
                <Meta>
                  {played} von {pool} Titeln des Kampagnenbogens
                </Meta>
              </div>
              <Progress value={pct} />
            </div>
            <div className="flex gap-2.5 shrink-0">
              <Btn variant="ghost" size="sm" onClick={onExport}>
                Exportieren
              </Btn>
              <Btn onClick={onOpen}>Kampagne öffnen</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SessionsPage() {
  const sessions = useSessionStore((s) => s.sessions)
  const addSession = useSessionStore((s) => s.addSession)
  const setActiveSession = useSessionStore((s) => s.setActiveSession)
  const navigate = useNavigate()

  // Löschen/Archivieren liegt bewusst in der Einrichtung („Kampagne beenden"),
  // nicht in der Auswahlliste.
  const running = sessions.filter((s) => !s.archived)
  const archived = sessions.filter((s) => s.archived)

  function open(id: string) {
    setActiveSession(id)
    navigate(`/session/${id}`)
  }

  function handleCreate() {
    const s = newSession(CAMPAIGNS[0].id)
    addSession(s)
    navigate(`/session/${s.id}/einrichtung`)
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > MAX_IMPORT_BYTES) {
      alert('Datei zu groß (max. 2 MB).')
      e.target.value = ''
      return
    }
    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const s = parseImportedSession(JSON.parse(ev.target?.result as string))
        if (!s) {
          alert('Ungültige Kampagnen-Datei.')
          return
        }
        addSession(s)
        navigate(`/session/${s.id}`)
      } catch {
        alert('Datei konnte nicht gelesen werden.')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <div className="mx-auto w-full max-w-[1202px] px-6 py-7 sm:px-8 flex flex-col gap-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <Eyebrow>Werkzeuge</Eyebrow>
          <Head size="xl" className="mt-1.5">
            Session-Tracker
          </Head>
          <p className="mt-1 text-[15px] text-muted">
            Kampagnen-Spielstand — lokal im Browser, als JSON sicherbar.
          </p>
        </div>
        <div className="flex gap-2.5">
          <label className="inline-flex items-center justify-center gap-2 h-9 px-3.5 rounded-control bg-surface text-muted border border-line font-head font-semibold text-[13.5px] cursor-pointer whitespace-nowrap hover:text-fg transition-colors">
            <Icon name="upload" size={14} />
            Importieren
            <input type="file" accept=".json" className="hidden" onChange={handleImport} />
          </label>
          <Btn size="sm" icon="plus" onClick={handleCreate}>
            Neue Kampagne
          </Btn>
        </div>
      </div>

      {sessions.length === 0 ? (
        <Panel className="flex flex-col items-center justify-center gap-3 py-16 px-6 text-center !border-dashed">
          <Head size="s">Noch keine Kampagne</Head>
          <p className="text-[14px] text-muted max-w-md">
            Lege eine an, um einen Spielstand zu tracken — Helden, Overlord-Aufbau und den ganzen Verlauf.
          </p>
          <Btn className="mt-1" icon="plus" onClick={handleCreate}>
            Neue Kampagne
          </Btn>
        </Panel>
      ) : (
        <>
          {running.length > 0 && (
            <div>
              <Eyebrow className="!text-accent-bright mb-2.5">Laufend</Eyebrow>
              <div className="flex flex-col gap-3">
                {running.map((s) => (
                  <RunningCampaignCard
                    key={s.id}
                    session={s}
                    onOpen={() => open(s.id)}
                    onExport={() => exportSessionAsJSON(s)}
                  />
                ))}
              </div>
            </div>
          )}

          {archived.length > 0 && (
            <div>
              <Eyebrow className="mb-2.5">
                Archiv · {archived.length} beendete {archived.length === 1 ? 'Kampagne' : 'Kampagnen'}
              </Eyebrow>
              <div className="rounded-card border border-line overflow-hidden">
                {archived.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center gap-4 px-4 py-3.5 border-b border-line last:border-b-0 bg-surface"
                  >
                    <span className="w-8 h-8 shrink-0 rounded-chip bg-surface-2 border border-line inline-flex items-center justify-center text-muted">
                      <Icon name="campaign" size={15} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-head text-[15px] font-semibold text-fg truncate">{s.name}</p>
                      <p className="mt-0.5 text-[13px] text-faint truncate">
                        {campaignSubtitle(s)} · {s.scenarios.length} Szenarien
                      </p>
                    </div>
                    <Meta className="hidden sm:block">{s.heroes.length} Helden</Meta>
                    <Btn variant="ghost" size="sm" onClick={() => open(s.id)}>
                      Ansehen
                    </Btn>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

// ── Shell mit Abschnittsleiste ───────────────────────────────────────────────

const SECTIONS: { to: string; label: string; end?: boolean }[] = [
  { to: '', label: 'Überblick', end: true },
  { to: 'helden', label: 'Helden' },
  { to: 'overlord', label: 'Overlord' },
  { to: 'verlauf', label: 'Verlauf' },
]

/** Mobile Fußleiste (Screen 14): dieselben vier Abschnitte, mit Glyphen. */
const MOBILE_SECTIONS: { to: string; label: string; icon: IconName; end?: boolean }[] = [
  { to: '', label: 'Überblick', icon: 'dashboard', end: true },
  { to: 'helden', label: 'Helden', icon: 'hero' },
  { to: 'overlord', label: 'Overlord', icon: 'overlord' },
  { to: 'verlauf', label: 'Verlauf', icon: 'campaign' },
]

export function SessionShell() {
  const { sessionId } = useParams()
  const navigate = useNavigate()
  const ownedExpansionIds = useGameStore((s) => s.ownedExpansionIds)
  const deleteSession = useSessionStore((s) => s.deleteSession)
  const mutations = useSessionMutations(sessionId)
  const { session, live } = mutations

  // Einmal je Kampagne lesen — nicht bei jedem Render (JSON.parse + Sanitizer).
  // Der Flow liegt auf einer Geschwister-Route: die Shell montiert bei der
  // Rückkehr neu und liest damit ohnehin frisch.
  const draft = useMemo(() => (sessionId ? loadScenarioDraft(sessionId) : null), [sessionId])

  const { dialog, requestDelete } = useDeleteDialog((req) => {
    if (req.type === 'session') {
      deleteSession(req.id)
      clearScenarioDraft(req.id) // sonst bleibt der Entwurf als Waise im localStorage
      navigate('/session')
    } else if (req.type === 'hero') mutations.removeHero(req.id)
    else if (req.type === 'scenario') mutations.removeScenario(req.id)
  })

  if (!session || !live) {
    return (
      <div className="mx-auto w-full max-w-[1202px] px-6 py-10 text-center">
        <Head size="s">Diese Kampagne gibt es nicht (mehr).</Head>
        <Link to="/session" className="mt-3 inline-block text-[14px] text-accent-bright underline">
          Zurück zur Kampagnen-Auswahl
        </Link>
      </div>
    )
  }

  const hasDraft = draft?.sessionId === session.id
  const ctx: SessionCtx = { ...mutations, session, live, ownedExpansionIds, requestDelete }

  return (
    <div className="flex flex-col min-h-full">
      {dialog}

      {/* Kopfzeile der Kampagne (74 px) */}
      <header className="h-[74px] shrink-0 flex items-center justify-between gap-4 px-4 sm:px-6 border-b border-line bg-bg">
        <div className="flex items-center gap-3.5 min-w-0">
          <Link
            to="/session"
            className="inline-flex items-center justify-center w-11 h-11 sm:w-8 sm:h-8 shrink-0 rounded-control border border-line text-muted hover:text-fg transition-colors"
            aria-label="Zurück zur Kampagnen-Auswahl"
          >
            <Icon name="chevron-left" size={15} />
          </Link>
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <h2 className="font-head text-[19px] font-bold text-fg truncate">{session.name}</h2>
              <Badge variant="accent" mono>
                Akt {live.currentAct === 2 ? 'II' : 'I'}
              </Badge>
              {session.archived && <Badge mono>archiviert</Badge>}
            </div>
            <p className="mt-0.5 font-mono text-[10px] tracking-[0.14em] uppercase text-faint truncate">
              {campaignSubtitle(session)} · {session.scenarios.length} Szenarien · automatisch gespeichert
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => exportSessionAsJSON(session)}
            title="Als JSON sichern"
            aria-label="Als JSON sichern"
            className="inline-flex items-center justify-center w-11 h-11 sm:w-9 sm:h-9 rounded-control border border-line bg-surface text-muted hover:text-fg transition-colors"
          >
            <Icon name="download" size={16} />
          </button>
          <Link
            to={`/session/${session.id}/einrichtung`}
            title="Einrichtung"
            aria-label="Einrichtung"
            className="inline-flex items-center justify-center w-11 h-11 sm:w-9 sm:h-9 rounded-control border border-line bg-surface text-muted hover:text-fg transition-colors"
          >
            <Icon name="more" size={16} />
          </Link>
        </div>
      </header>

      {/* Abschnittsleiste (46 px) — mobil ersetzt durch die Fußleiste unten */}
      <div className="h-[46px] shrink-0 hidden sm:flex items-center justify-between gap-4 px-4 sm:px-6 border-b border-line bg-bg overflow-x-auto">
        <nav className="flex items-stretch h-full">
          {SECTIONS.map((s) => (
            <NavLink
              key={s.to}
              to={s.to ? `/session/${session.id}/${s.to}` : `/session/${session.id}`}
              end={s.end}
              className={({ isActive }) =>
                `relative inline-flex items-center px-4 font-head text-[14.5px] font-semibold whitespace-nowrap transition-colors ${
                  isActive ? 'text-fg' : 'text-muted hover:text-fg'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {s.label}
                  {isActive && <span className="absolute left-3 right-3 bottom-0 h-0.5 rounded-t bg-accent" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <NavLink
          to={`/session/${session.id}/einrichtung`}
          className={({ isActive }) =>
            `inline-flex items-center gap-2 text-[13px] whitespace-nowrap transition-colors ${
              isActive ? 'text-fg' : 'text-faint hover:text-muted'
            }`
          }
        >
          <Icon name="design" size={15} />
          Einrichtung
        </NavLink>
      </div>

      {hasDraft && (
        <div className="px-4 sm:px-6 pt-3">
          <Link
            to={`/session/${session.id}/abschluss`}
            className="flex items-center gap-3 rounded-control border border-accent-line bg-accent-soft px-4 py-2.5 text-[13.5px] text-fg hover:brightness-110 transition-all"
          >
            <Icon name="info" size={16} />
            <span>
              Ein begonnener Eintrag wartet — <strong className="font-semibold">Schritt {draft!.step} von 5</strong>.
            </span>
            <span className="ml-auto font-mono text-[10px] tracking-[0.12em] uppercase text-accent-bright">
              Fortsetzen
            </span>
          </Link>
        </div>
      )}

      <div className="flex-1 min-h-0">
        <Outlet context={ctx} />
      </div>

      {/* Mobil: die vier Abschnitte als 64-px-Fußleiste (Screen 14) */}
      <nav className="sm:hidden sticky bottom-0 z-20 h-16 shrink-0 grid grid-cols-4 border-t border-line bg-surface-2">
        {MOBILE_SECTIONS.map((s) => (
          <NavLink
            key={s.to}
            to={s.to ? `/session/${session.id}/${s.to}` : `/session/${session.id}`}
            end={s.end}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 font-mono text-[9px] tracking-[0.1em] uppercase transition-colors ${
                isActive ? 'text-accent-bright' : 'text-faint'
              }`
            }
          >
            <Icon name={s.icon} size={18} />
            {s.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
