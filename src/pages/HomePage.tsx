import { Link } from 'react-router-dom'
import { useGameStore } from '../store/useGameStore'
import { HEROES } from '../data/heroes'
import { MONSTERS } from '../data/monsters'

const FEATURES = [
  {
    icon: '🗺️',
    title: 'Kartenbauer',
    description: 'Spielplan-Plättchen deiner Sammlung per Klick platzieren und drehen.',
    href: '/karte',
    available: true,
  },
  {
    icon: '📜',
    title: 'Quest-Editor',
    description: 'Quests mit Begegnungen, Siegbedingungen, Monstern und Erzähltext.',
    href: '/quest',
    available: true,
  },
  {
    icon: '👹',
    title: 'Monster',
    description: 'Alle Monstergruppen aus deiner Sammlung auf einen Blick.',
    href: '/monster',
    available: true,
  },
  {
    icon: '🧙',
    title: 'Helden',
    description: 'Alle Helden nach Archetyp und Erweiterung gefiltert.',
    href: '/helden',
    available: true,
  },
  {
    icon: '👜',
    title: 'Meine Sammlung',
    description: 'Verwalte deine Erweiterungen. Alle Werkzeuge passen sich an.',
    href: '/sammlung',
    available: true,
  },
]

export default function HomePage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const questCount = useGameStore((s) => s.quests.length)

  const ownedMonsters = MONSTERS.filter((m) => ownedIds.includes(m.expansionId)).length
  const ownedHeroes = HEROES.filter((h) => ownedIds.includes(h.expansionId)).length

  return (
    <div className="space-y-10">
      <div className="text-center py-6 space-y-3">
        <h2 className="font-display text-4xl text-gold-400 font-bold">Quest Vault Reborn</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Das Community-Tool für{' '}
          <strong className="text-gold-300">Descent – Die Reise ins Dunkel 2. Edition</strong>.
          Erstelle Quests, baue Spielpläne und verwalte deine Kampagne.
        </p>
        <p className="text-gray-600 text-sm">
          Wiedergeburt des originalen Quest Vault von Fantasy Flight Games (2013–2020)
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
        {[
          { label: 'Erweiterungen', value: ownedIds.length },
          { label: 'Monster', value: ownedMonsters },
          { label: 'Helden', value: ownedHeroes },
          { label: 'Quests', value: questCount },
        ].map((s) => (
          <div key={s.label} className="card text-center">
            <p className="text-2xl font-bold text-gold-400">{s.value}</p>
            <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-display text-lg text-gray-300 font-semibold mb-3">Werkzeuge</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {FEATURES.map((f) => (
            <Link
              key={f.href}
              to={f.href}
              className={`card hover:border-gold-500 transition-colors group ${
                !f.available ? 'opacity-50 pointer-events-none' : ''
              }`}
            >
              <div className="text-2xl mb-2">{f.icon}</div>
              <h4 className="font-display text-gold-300 font-semibold group-hover:text-gold-400 transition-colors">
                {f.title}
              </h4>
              <p className="text-gray-400 text-sm mt-1">{f.description}</p>
              {!f.available && (
                <span className="mt-2 inline-block text-xs bg-dungeon-700 text-gray-600 px-2 py-0.5 rounded">
                  In Entwicklung
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
