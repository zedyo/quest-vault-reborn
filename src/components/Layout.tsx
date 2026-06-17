import { useState, useRef, useEffect } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useGameStore } from '../store/useGameStore'
import { EXPANSIONS } from '../data/expansions'

// Werkzeuge (eigene Inhalte erstellen) bleiben prominent; die Referenz-/Datenseiten
// liegen gebündelt unter „Daten", damit die Leiste nicht überquillt.
const TOOLS = [
  { to: '/karte', label: '🗺️ Kartenbauer' },
  { to: '/quest', label: '📜 Quest-Editor' },
]
const DATA = [
  { to: '/monster', label: '👹 Monster' },
  { to: '/helden', label: '🧙 Helden' },
  { to: '/klassen', label: '⚔️ Klassen' },
  { to: '/items', label: '🛒 Items' },
  { to: '/overlord', label: '👑 Overlord' },
  { to: '/leutnants', label: '🗡️ Leutnants' },
  { to: '/agenten', label: '🎭 Agenten' },
  { to: '/plotdecks', label: '📜 Plotdecks' },
  { to: '/kampagnen', label: '🏰 Kampagnen' },
  { to: '/reisekarten', label: '🧭 Reisekarten' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-2.5 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap ${
    isActive ? 'bg-gold-500 text-dungeon-950' : 'text-gray-300 hover:text-gray-50 hover:bg-dungeon-800'
  }`

export default function Layout() {
  const ownedCount = useGameStore((s) => s.ownedExpansionIds.length)
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dataOpen, setDataOpen] = useState(false)
  const dataRef = useRef<HTMLDivElement>(null)

  const isDataActive = DATA.some((d) => location.pathname.startsWith(d.to))

  // Menüs bei Navigationswechsel schließen.
  useEffect(() => {
    setMobileOpen(false)
    setDataOpen(false)
  }, [location.pathname])

  // Desktop-Dropdown bei Klick außerhalb / Escape schließen.
  useEffect(() => {
    if (!dataOpen) return
    const onClick = (e: MouseEvent) => {
      if (dataRef.current && !dataRef.current.contains(e.target as Node)) setDataOpen(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDataOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [dataOpen])

  const sammlungBadge = (
    <span className="ml-1 text-xs opacity-70">{ownedCount}/{EXPANSIONS.length}</span>
  )

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-dungeon-900 border-b border-dungeon-700 px-4 py-2 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl">⚔️</span>
            <div>
              <h1 className="text-gold-400 font-display text-base font-bold leading-tight">
                Quest Vault Reborn
              </h1>
              <p className="text-gray-600 text-xs hidden sm:block">Descent 2. Edition</p>
            </div>
          </NavLink>

          {/* Desktop-/Tablet-Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            <NavLink to="/" end className={linkClass}>Start</NavLink>
            {TOOLS.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>{item.label}</NavLink>
            ))}

            <div className="relative" ref={dataRef}>
              <button
                onClick={() => setDataOpen((o) => !o)}
                aria-haspopup="menu"
                aria-expanded={dataOpen}
                className={`px-2.5 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                  isDataActive || dataOpen ? 'bg-gold-500 text-dungeon-950' : 'text-gray-300 hover:text-gray-50 hover:bg-dungeon-800'
                }`}
              >
                📚 Daten <span className={`text-[9px] transition-transform ${dataOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {dataOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-1 w-48 bg-dungeon-850 border border-dungeon-600 rounded-lg shadow-xl shadow-black/40 p-1.5 z-50 grid grid-cols-1 gap-0.5"
                >
                  {DATA.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      role="menuitem"
                      className={({ isActive }) =>
                        `px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                          isActive ? 'bg-gold-500 text-dungeon-950' : 'text-gray-300 hover:text-gray-50 hover:bg-dungeon-800'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/sammlung" className={linkClass}>👜 Sammlung{sammlungBadge}</NavLink>
          </nav>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menü"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="md:hidden p-2 rounded text-gray-200 hover:bg-dungeon-800 transition-colors"
          >
            <span className="block text-lg leading-none">{mobileOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile-Navigationspanel */}
        {mobileOpen && (
          <nav id="mobile-nav" className="md:hidden max-w-7xl mx-auto mt-2 pb-1 space-y-3">
            <div className="flex flex-col gap-0.5">
              <NavLink to="/" end className={linkClass}>Start</NavLink>
              {TOOLS.map((item) => (
                <NavLink key={item.to} to={item.to} className={linkClass}>{item.label}</NavLink>
              ))}
              <NavLink to="/sammlung" className={linkClass}>👜 Sammlung{sammlungBadge}</NavLink>
            </div>
            <div>
              <p className="px-2.5 text-[10px] uppercase tracking-wider text-gray-600 mb-1">Daten &amp; Referenz</p>
              <div className="grid grid-cols-2 gap-0.5">
                {DATA.map((item) => (
                  <NavLink key={item.to} to={item.to} className={linkClass}>{item.label}</NavLink>
                ))}
              </div>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-dungeon-800 px-4 py-2 text-center text-xs text-gray-700">
        Community-Projekt ohne kommerzielle Absichten.
        Descent: Journeys in the Dark © Fantasy Flight Games / Asmodee.
      </footer>
    </div>
  )
}
