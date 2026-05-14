import { Link } from 'react-router-dom'
import { useGameStore } from '../store/useGameStore'
import ExpansionSelector from '../components/ExpansionSelector'

const FEATURES = [
  {
    icon: '🗺️',
    title: 'Kartenbauer',
    description: 'Spielplan-Plättchen per Drag & Drop platzieren und Karten erstellen.',
    href: '/karte',
    available: false,
  },
  {
    icon: '📜',
    title: 'Quest-Editor',
    description: 'Quests mit allen Begegnungen, Siegbedingungen und Monsterpositionen erstellen.',
    href: '/quest',
    available: false,
  },
  {
    icon: '👜',
    title: 'Meine Sammlung',
    description: 'Verwalte deine Erweiterungen. Das Tool zeigt nur Inhalte deiner Sammlung.',
    href: '/sammlung',
    available: true,
  },
]

export default function HomePage() {
  const ownedCount = useGameStore((s) => s.ownedExpansionIds.length)
  const questCount = useGameStore((s) => s.quests.length)

  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="text-center py-8 space-y-4">
        <h2 className="font-display text-4xl text-gold-400 font-bold">
          Quest Vault Reborn
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Das Community-Tool für <strong className="text-gold-300">Descent – Die Reise ins Dunkel 2. Edition</strong>.
          Erstelle Quests, baue Spielpläne und verwalte deine Kampagne.
        </p>
        <p className="text-gray-500 text-sm">
          Wiedergeburt des originalen Quest Vault von Fantasy Flight Games (2013–2020)
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
        <div className="card text-center">
          <p className="text-3xl font-bold text-gold-400">{ownedCount}</p>
          <p className="text-gray-400 text-sm mt-1">Erweiterungen</p>
        </div>
        <div className="card text-center">
          <p className="text-3xl font-bold text-gold-400">{questCount}</p>
          <p className="text-gray-400 text-sm mt-1">Eigene Quests</p>
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="font-display text-xl text-gray-200 font-semibold mb-4">Werkzeuge</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <Link
              key={f.href}
              to={f.href}
              className={`card hover:border-gold-500 transition-colors group ${
                !f.available ? 'opacity-60' : ''
              }`}
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h4 className="font-display text-gold-300 font-semibold group-hover:text-gold-400 transition-colors">
                {f.title}
              </h4>
              <p className="text-gray-400 text-sm mt-1">{f.description}</p>
              {!f.available && (
                <span className="mt-3 inline-block text-xs bg-dungeon-700 text-gray-500 px-2 py-0.5 rounded">
                  In Entwicklung
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Quick expansion selector */}
      <div className="card">
        <ExpansionSelector />
      </div>
    </div>
  )
}
