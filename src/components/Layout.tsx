import { useState, useEffect, useMemo } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { useGameStore } from '../store/useGameStore'
import { EXPANSIONS } from '../data/expansions'
import ThemeSwitcher from './ThemeSwitcher'
import { Icon, type IconName } from './QvIcons'

// Sidebar-Shell (Design-System v2, „1a Kommandozentrale"): feste Seitenleiste 238px,
// Topbar 74px, Inhalt scrollt darunter. Alle Farben/Schriften laufen über die
// vorhandenen Tokens (bg/surface/accent/font-*), folgen also automatisch dem
// aktiven Theme (Overlord/Heldentum). Auf Mobil wird die Sidebar zum Off-Canvas-Drawer.

type Entry = { to: string; label: string; icon: IconName; end?: boolean }

const TOOLS: Entry[] = [
  { to: '/', label: 'Dashboard', icon: 'dashboard', end: true },
  { to: '/karte', label: 'Kartenbauer', icon: 'map' },
  { to: '/quest', label: 'Quest-Editor', icon: 'quest' },
  { to: '/session', label: 'Session-Tracker', icon: 'session' },
]

const LIBRARY: Entry[] = [
  { to: '/monster', label: 'Monster', icon: 'monster' },
  { to: '/helden', label: 'Helden', icon: 'hero' },
  { to: '/klassen', label: 'Klassen', icon: 'class' },
  { to: '/items', label: 'Items & Relikte', icon: 'item' },
  { to: '/overlord', label: 'Overlord', icon: 'overlord' },
  { to: '/leutnants', label: 'Leutnants', icon: 'lieutenant' },
  { to: '/agenten', label: 'Agenten', icon: 'agent' },
  { to: '/plotdecks', label: 'Plotdecks', icon: 'deck' },
  { to: '/kampagnen', label: 'Kampagnen', icon: 'campaign' },
  { to: '/reisekarten', label: 'Reisekarten', icon: 'compass' },
  { to: '/geruechte', label: 'Gerüchte', icon: 'rumor' },
  { to: '/zustaende', label: 'Zustände', icon: 'condition' },
  { to: '/regeln', label: 'Regeln & Referenz', icon: 'rules' },
  { to: '/klarstellungen', label: 'Errata & FAQ', icon: 'errata' },
  { to: '/designsystem', label: 'Design-System', icon: 'design' },
]

function SideLink({ to, label, icon, end, onNavigate }: Entry & { onNavigate?: () => void }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        `relative flex items-center gap-3 px-3 py-2.5 rounded-control font-head text-[15px] transition-colors ${
          isActive ? 'bg-accent-soft text-fg font-semibold' : 'text-muted hover:bg-accent-soft hover:text-fg'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && <span className="absolute left-0 top-2 bottom-2 w-[3px] rounded bg-accent" style={{ boxShadow: '0 0 10px var(--qv-accent)' }} />}
          <span className={isActive ? 'text-accent-bright' : ''}><Icon name={icon} /></span>
          <span className="truncate">{label}</span>
        </>
      )}
    </NavLink>
  )
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const ownedCount = useGameStore((s) => s.ownedExpansionIds.length)
  return (
    <>
      <NavLink to="/" end onClick={onNavigate} className="flex items-center gap-3 px-5 h-[74px] shrink-0 border-b border-line">
        <span className="w-9 h-9 shrink-0 rounded-control bg-accent-soft border border-accent-line flex items-center justify-center">
          <span className="w-3 h-3 bg-accent rotate-45" style={{ boxShadow: '0 0 10px var(--qv-accent)' }} />
        </span>
        <span className="leading-tight">
          <span className="block font-head font-bold text-lg text-fg">Quest Vault</span>
          <span className="block font-mono text-[9px] tracking-[0.34em] text-accent-bright mt-0.5">REBORN</span>
        </span>
      </NavLink>

      <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-0.5">
        <p className="px-3 pt-1 pb-2 font-mono text-[9px] tracking-[0.2em] text-faint">WERKZEUGE</p>
        {TOOLS.map((e) => <SideLink key={e.to} {...e} onNavigate={onNavigate} />)}
        <p className="px-3 pt-4 pb-2 font-mono text-[9px] tracking-[0.2em] text-faint">BIBLIOTHEK</p>
        {LIBRARY.map((e) => <SideLink key={e.to} {...e} onNavigate={onNavigate} />)}
      </nav>

      <div className="p-4 border-t border-line">
        <NavLink
          to="/sammlung"
          onClick={onNavigate}
          className="flex items-center justify-between rounded-control border border-line bg-surface px-3 py-3 hover:border-accent-line transition-colors"
        >
          <span className="font-head font-semibold text-sm text-fg">Sammlung</span>
          <span className="font-mono text-[10px] text-accent-bright">{ownedCount} / {EXPANSIONS.length}</span>
        </NavLink>
        <div className="mt-3"><ThemeSwitcher variant="inline" /></div>
        <p className="mt-3 px-1 text-[9.5px] leading-snug text-faint">
          Community-Projekt ohne kommerzielle Absichten. Descent: Journeys in the Dark ©
          Fantasy Flight Games / Asmodee.
        </p>
      </div>
    </>
  )
}

function SammlungBadge() {
  const ownedCount = useGameStore((s) => s.ownedExpansionIds.length)
  return <>{ownedCount}/{EXPANSIONS.length}</>
}

/** Aktives Theme aus `data-theme` (folgt jedem Wechsel via Kopf-/Sidebar-Switcher). */
function useActiveTheme(): string {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'overlord',
  )
  useEffect(() => {
    const el = document.documentElement
    const obs = new MutationObserver(() => setTheme(el.getAttribute('data-theme') || 'overlord'))
    obs.observe(el, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])
  return theme
}

/**
 * Atmosphäre hinter dem Inhalt (Design-System): aufsteigende Partikel je Theme
 * (Overlord = Blut-Ember rot, Heldentum = Gold-Motes) + atmende Akzent-Vignette
 * am unteren Rand. Liegt als absolute Ebene (z-0) hinter Kopfzeile/Inhalt;
 * `motion-reduce` blendet sie aus.
 */
function Atmosphere() {
  const held = useActiveTheme() === 'heldentum'
  const particles = useMemo(
    () =>
      Array.from({ length: held ? 22 : 24 }, () => ({
        left: `${(Math.random() * 100).toFixed(2)}%`,
        size: held ? 2 + Math.random() * 2.5 : 2 + Math.random() * 3,
        dur: held ? 9 + Math.random() * 8 : 6 + Math.random() * 7,
        delay: -(Math.random() * 13),
      })),
    [held],
  )
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 motion-reduce:hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            bottom: -12,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: 0,
            background: held ? '#ecc879' : '#e0552b',
            boxShadow: held ? '0 0 7px 1px rgba(226,190,110,.8)' : '0 0 8px 1px rgba(214,60,30,.85)',
            animation: `${held ? 'qv-mote' : 'qv-ember'} ${p.dur.toFixed(1)}s linear ${p.delay.toFixed(1)}s infinite`,
          }}
        />
      ))}
      <div
        className="absolute left-0 right-0 -bottom-10 h-[210px]"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, var(--qv-accent-soft), transparent 72%)',
          filter: 'blur(10px)',
          animation: 'qv-breathe 7s ease-in-out infinite',
        }}
      />
    </div>
  )
}

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  // Drawer bei Navigationswechsel schließen.
  useEffect(() => { setDrawerOpen(false) }, [location.pathname])

  return (
    <div className="h-screen flex overflow-hidden bg-bg text-fg">
      {/* Desktop-Sidebar */}
      <aside className="hidden md:flex w-[238px] shrink-0 flex-col bg-surface-2 border-r border-line">
        <SidebarContent />
      </aside>

      {/* Mobiler Off-Canvas-Drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/60" onClick={() => setDrawerOpen(false)} />
          <aside className="relative w-[264px] max-w-[80%] flex flex-col bg-surface-2 border-r border-line shadow-2xl">
            <SidebarContent onNavigate={() => setDrawerOpen(false)} />
          </aside>
        </div>
      )}

      {/* Hauptbereich */}
      <div className="relative flex-1 min-w-0 flex flex-col">
        <Atmosphere />
        <header className="relative z-10 h-[74px] shrink-0 flex items-center justify-between gap-3 px-4 md:px-6 border-b border-line bg-bg">
          <div className="flex items-center gap-3 min-w-0">
            <button
              className="md:hidden p-2 rounded-control text-muted hover:bg-surface-2 transition-colors"
              aria-label="Menü öffnen"
              onClick={() => setDrawerOpen(true)}
            >
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current" />
            </button>
            <div className="hidden sm:flex items-center gap-2.5 h-10 w-[260px] px-3 rounded-control bg-surface border border-line text-faint">
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="8" cy="8" r="4.4" /><line x1="11.4" y1="11.4" x2="14.5" y2="14.5" /></svg>
              <span className="font-body italic text-sm">Monster, Held, Quest suchen …</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/quest"
              className="inline-flex items-center h-9 px-4 rounded-control bg-btn-primary text-onaccent border border-accent-deep shadow-btn font-head font-semibold text-sm whitespace-nowrap transition-all hover:brightness-110"
            >
              + Neue Quest
            </Link>
            <NavLink to="/sammlung" className="hidden md:inline-flex items-center gap-1.5 px-3 h-9 rounded-pill bg-accent-soft border border-accent-line font-mono text-[11px] text-accent-bright">
              Sammlung <SammlungBadge />
            </NavLink>
            <ThemeSwitcher />
          </div>
        </header>

        <main className="relative z-[1] flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
