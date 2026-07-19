import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGameStore } from '../store/useGameStore'
import { useSessionStore } from '../store/useSessionStore'
import { deriveLiveState } from '../store/sessionDerive'
import { HEROES } from '../data/heroes'
import ReleaseNotesModal from '../components/ReleaseNotesModal'
import MonsterOfTheDay from '../components/MonsterOfTheDay'
import { Icon, type IconName } from '../components/QvIcons'

const LIBRARY: { to: string; label: string; icon: IconName }[] = [
  { to: '/monster', label: 'Monster', icon: 'monster' },
  { to: '/helden', label: 'Helden', icon: 'hero' },
  { to: '/klassen', label: 'Klassen', icon: 'class' },
  { to: '/items', label: 'Items', icon: 'item' },
  { to: '/overlord', label: 'Overlord', icon: 'overlord' },
  { to: '/leutnants', label: 'Leutnants', icon: 'lieutenant' },
  { to: '/agenten', label: 'Agenten', icon: 'agent' },
  { to: '/plotdecks', label: 'Plotdecks', icon: 'deck' },
  { to: '/kampagnen', label: 'Kampagnen', icon: 'campaign' },
  { to: '/reisekarten', label: 'Reisekarten', icon: 'compass' },
  { to: '/geruechte', label: 'Gerüchte', icon: 'rumor' },
  { to: '/zustaende', label: 'Zustände', icon: 'condition' },
  { to: '/regeln', label: 'Regeln', icon: 'rules' },
  { to: '/klarstellungen', label: 'Errata & FAQ', icon: 'errata' },
]

const QUICKSTART: { to: string; label: string; desc: string; icon: IconName }[] = [
  { to: '/karte', label: 'Kartenbauer', desc: 'Spielplan legen & drehen', icon: 'map' },
  { to: '/quest', label: 'Quest-Editor', desc: 'Begegnungen & Erzähltext', icon: 'quest' },
  { to: '/session', label: 'Session-Tracker', desc: 'Kampagne festhalten', icon: 'session' },
]

function initials(name: string): string {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

const eyebrow = 'font-mono text-[10px] tracking-[0.16em] uppercase text-accent-bright'

export default function HomePage() {
  const sessions = useSessionStore((s) => s.sessions)
  const activeSessionId = useSessionStore((s) => s.activeSessionId)
  const setActiveSession = useSessionStore((s) => s.setActiveSession)
  const quests = useGameStore((s) => s.quests)
  const [showNotes, setShowNotes] = useState(false)

  const activeSession = sessions.find((s) => s.id === activeSessionId) ?? sessions[0] ?? null
  const live = activeSession ? deriveLiveState(activeSession) : null
  const party = activeSession
    ? activeSession.heroes.map((th) => HEROES.find((h) => h.id === th.heroId)?.name ?? th.playerName)
    : []

  const recentQuests = [...quests].reverse().slice(0, 4)

  return (
    <div className="p-5 md:p-6 flex flex-col gap-[18px] max-w-[1240px]">
      {showNotes && <ReleaseNotesModal onClose={() => setShowNotes(false)} />}

      <div>
        <h2 className="font-head font-bold text-2xl text-fg">Übersicht</h2>
        <p className="mt-1 text-sm text-muted">Willkommen zurück, Spielleiter — der Kerker wartet.</p>
      </div>

      {/* Hauptbereich: linke Spalte (Session · Zuletzt · Schnellstart) gestapelt
          neben dem hohen „Monster des Tages"-Widget – so füllt die linke Spalte
          die Höhe und es entsteht kein großer Leerraum. */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-4 items-start">
        <div className="flex flex-col gap-4 min-w-0">
        {activeSession ? (
          <section className="relative overflow-hidden border border-accent-line rounded-card bg-surface p-5">
            <div className="pointer-events-none absolute -top-14 -right-8 w-[220px] h-[180px]" style={{ background: 'radial-gradient(circle at 60% 40%, var(--qv-accent-soft), transparent 68%)', filter: 'blur(18px)' }} />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div className={eyebrow}>Weiter im Spiel</div>
                <h3 className="mt-1.5 font-head font-bold text-2xl leading-tight text-fg">{activeSession.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  {live?.currentScenario
                    ? `${live.currentScenario.scenario.title} · Szenario ${activeSession.scenarios.length}`
                    : 'Aufstellung — noch kein Szenario gespielt'}
                </p>
              </div>
              <span className="shrink-0 px-2.5 py-1 rounded-pill bg-accent-soft border border-accent-line font-mono text-[10px] text-accent-bright">
                AKT {live?.currentAct === 2 ? 'II' : 'I'}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-4 flex-wrap">
              <div className="flex items-center">
                {party.slice(0, 5).map((name, i) => (
                  <span
                    key={i}
                    title={name}
                    className="w-[34px] h-[34px] rounded-full bg-accent-soft border border-accent-line flex items-center justify-center font-head font-semibold text-xs text-accent-bright"
                    style={{ marginLeft: i === 0 ? 0 : -8 }}
                  >
                    {initials(name)}
                  </span>
                ))}
                <span className="ml-2.5 text-xs text-muted">{party.length} {party.length === 1 ? 'Held' : 'Helden'}</span>
              </div>
              <div className="w-px h-6 bg-line" />
              <div className="flex gap-5">
                <Stat label="BEDROHUNG" value={activeSession.overlord.threatTokens} />
                <Stat label="GOLD" value={live?.partyGold ?? 0} />
                <Stat label="SCHICKSAL" value={activeSession.partyFateTokens} />
              </div>
            </div>

            <div className="mt-[18px] flex gap-2.5">
              <Link
                to="/session"
                onClick={() => setActiveSession(activeSession.id)}
                className="btn-primary"
              >
                Session fortsetzen
              </Link>
              <Link to="/session" className="btn-secondary">Alle Sessions</Link>
            </div>
          </section>
        ) : (
          <section className="border border-line rounded-card bg-surface p-5 flex flex-col justify-center">
            <div className={eyebrow}>Weiter im Spiel</div>
            <h3 className="mt-1.5 font-head font-bold text-2xl text-fg">Noch keine Kampagne aktiv</h3>
            <p className="mt-1 text-sm text-muted max-w-md">
              Lege im Session-Tracker deinen ersten Kampagnen-Spielstand an — Helden, Klassen,
              Ausrüstung und Overlord-Setup. Der aktuelle Stand landet dann hier.
            </p>
            <div className="mt-4"><Link to="/session" className="btn-primary">Session starten</Link></div>
          </section>
        )}

        {/* Zuletzt bearbeitet */}
        <section className="border border-line rounded-card bg-surface p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-head font-semibold text-lg text-fg">Zuletzt bearbeitet</h3>
            <Link to="/quest" className="font-head font-semibold text-sm text-accent-bright">Alle Quests ›</Link>
          </div>
          {recentQuests.length > 0 ? (
            <div className="flex flex-col">
              {recentQuests.map((q) => (
                <Link key={q.id} to="/quest" className="flex items-center gap-3 px-2.5 py-2.5 rounded-control border-b border-line hover:bg-accent-soft transition-colors">
                  <span className="w-9 h-9 shrink-0 rounded-control bg-accent-soft border border-accent-line flex items-center justify-center font-head font-semibold text-xs text-accent-bright">
                    {initials(q.title || 'Quest')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-head font-semibold text-base text-fg truncate">{q.title || 'Unbenannte Quest'}</div>
                    <div className="text-[11.5px] text-muted">{q.encounters?.length ?? 0} Begegnungen</div>
                  </div>
                  <span className="font-head font-semibold text-accent-bright">›</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-muted">Noch keine Quests gespeichert.</p>
              <Link to="/quest" className="inline-block mt-3 font-head font-semibold text-sm text-accent-bright">Erste Quest erstellen ›</Link>
            </div>
          )}
        </section>

        {/* Schnellstart */}
        <div className="flex flex-col gap-3">
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-faint pl-0.5">Schnellstart</div>
          {QUICKSTART.map((q) => (
            <Link key={q.to} to={q.to} className="group flex items-center gap-3 border border-line rounded-card bg-surface p-3.5 hover:border-accent-line hover:-translate-y-0.5 transition-all">
              <span className="w-10 h-10 shrink-0 rounded-control bg-accent-soft border border-accent-line flex items-center justify-center text-accent-bright"><Icon name={q.icon} size={20} /></span>
              <div className="flex-1">
                <div className="font-head font-semibold text-base text-fg">{q.label}</div>
                <div className="text-[11.5px] text-muted">{q.desc}</div>
              </div>
              <span className="font-head font-semibold text-accent-bright">›</span>
            </Link>
          ))}
        </div>
        </div>

        {/* Monster des Tages */}
        <MonsterOfTheDay />
      </div>

      {/* Reihe C: Bibliothek */}
      <section>
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="font-head font-semibold text-lg text-fg">Bibliothek & Referenz</h3>
          <span className="text-xs text-muted">Vollständige Spieldaten — filtern sich nach deiner Sammlung</span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 xl:grid-cols-7 gap-2.5">
          {LIBRARY.map((o) => (
            <Link key={o.to} to={o.to} className="flex flex-col items-center justify-center gap-2 py-4 px-1.5 border border-line rounded-control bg-surface text-center hover:border-accent-line hover:-translate-y-0.5 transition-all">
              <span className="text-accent-bright"><Icon name={o.icon} size={20} /></span>
              <span className="text-xs font-medium text-fg">{o.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Reihe D: Projekt / Roadmap (dezent) */}
      <section className="border border-line rounded-card bg-surface-2 flex items-center gap-3 px-4 py-3.5 flex-wrap">
        <span className="w-6.5 h-6.5 shrink-0 rounded-md bg-accent-soft border border-accent-line flex items-center justify-center text-accent-bright" style={{ width: 26, height: 26 }}>
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 14 L14 4" /><path d="M10 4 H14 V8" /></svg>
        </span>
        <div className="flex-1 min-w-[220px]">
          <span className="font-head font-semibold text-[15px] text-fg">Hobbyprojekt in aktiver Entwicklung</span>
          <span className="text-xs text-muted"> — Roadmap: Monster-HP live · Overlord-Zentrale · Spieler-Ansicht · Geräte-Sync.</span>
        </div>
        <button onClick={() => setShowNotes(true)} className="font-mono text-[11px] text-faint hover:text-accent-bright underline decoration-dotted underline-offset-2 transition-colors">
          Version {__APP_VERSION__}
        </button>
      </section>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="font-mono text-[8.5px] tracking-wider text-faint">{label}</div>
      <div className="font-head font-bold text-lg text-fg mt-px">{value}</div>
    </div>
  )
}
