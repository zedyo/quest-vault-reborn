import { Outlet, NavLink } from 'react-router-dom'
import { useGameStore } from '../store/useGameStore'
import { EXPANSIONS } from '../data/expansions'

const navItems = [
  { to: '/', label: 'Start', end: true },
  { to: '/karte', label: '🗺️ Kartenbauer', end: false },
  { to: '/quest', label: '📜 Quest-Editor', end: false },
  { to: '/monster', label: '👹 Monster', end: false },
  { to: '/helden', label: '🧙 Helden', end: false },
  { to: '/klassen', label: '⚔️ Klassen', end: false },
  { to: '/items', label: '🛒 Items', end: false },
  { to: '/overlord', label: '👑 Overlord', end: false },
  { to: '/leutnants', label: '🗡️ Leutnants', end: false },
  { to: '/agenten', label: '🎭 Agenten', end: false },
  { to: '/plotdecks', label: '📜 Plotdecks', end: false },
  { to: '/sammlung', label: '👜 Sammlung', end: false },
]

export default function Layout() {
  const ownedCount = useGameStore((s) => s.ownedExpansionIds.length)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-dungeon-900 border-b border-dungeon-700 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl">⚔️</span>
            <div>
              <h1 className="text-gold-400 font-display text-base font-bold leading-tight">
                Quest Vault Reborn
              </h1>
              <p className="text-gray-600 text-xs hidden sm:block">
                Descent 2. Edition
              </p>
            </div>
          </NavLink>

          <nav className="flex items-center gap-0.5 flex-wrap">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-gold-500 text-dungeon-950'
                      : 'text-gray-400 hover:text-gray-100 hover:bg-dungeon-800'
                  }`
                }
              >
                {item.label}
                {item.to === '/sammlung' && (
                  <span className="ml-1 text-xs opacity-70">
                    {ownedCount}/{EXPANSIONS.length}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
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
