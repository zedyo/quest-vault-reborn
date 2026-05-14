import { Outlet, NavLink } from 'react-router-dom'
import { useGameStore } from '../store/useGameStore'
import { EXPANSIONS } from '../data/expansions'

export default function Layout() {
  const ownedCount = useGameStore((s) => s.ownedExpansionIds.length)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-dungeon-900 border-b border-dungeon-700 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="text-2xl">⚔️</span>
            <div>
              <h1 className="text-gold-400 font-display text-lg font-bold leading-tight">
                Quest Vault Reborn
              </h1>
              <p className="text-dungeon-600 text-xs text-gray-400">
                Descent – Die Reise ins Dunkel 2. Edition
              </p>
            </div>
          </NavLink>

          <nav className="flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gold-500 text-dungeon-950'
                    : 'text-gray-400 hover:text-gray-100 hover:bg-dungeon-800'
                }`
              }
            >
              Start
            </NavLink>
            <NavLink
              to="/karte"
              className={({ isActive }) =>
                `px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gold-500 text-dungeon-950'
                    : 'text-gray-400 hover:text-gray-100 hover:bg-dungeon-800'
                }`
              }
            >
              Kartenbauer
            </NavLink>
            <NavLink
              to="/quest"
              className={({ isActive }) =>
                `px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gold-500 text-dungeon-950'
                    : 'text-gray-400 hover:text-gray-100 hover:bg-dungeon-800'
                }`
              }
            >
              Quest-Editor
            </NavLink>
            <NavLink
              to="/sammlung"
              className={({ isActive }) =>
                `px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gold-500 text-dungeon-950'
                    : 'text-gray-400 hover:text-gray-100 hover:bg-dungeon-800'
                }`
              }
            >
              Meine Sammlung
              <span className="ml-1 text-xs bg-dungeon-700 text-gold-400 px-1.5 py-0.5 rounded-full">
                {ownedCount}/{EXPANSIONS.length}
              </span>
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-dungeon-800 px-4 py-3 text-center text-xs text-gray-600">
        Quest Vault Reborn – Community-Projekt ohne kommerzielle Absichten.
        Descent: Journeys in the Dark ist ein eingetragenes Warenzeichen von Fantasy Flight Games / Asmodee.
        Alle Spielinhalte und Markennamen gehören den jeweiligen Rechteinhabern.
      </footer>
    </div>
  )
}
