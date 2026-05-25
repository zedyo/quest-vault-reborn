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

      {/* Projekt-Status für Fans */}
      <div className="rounded-lg border border-dungeon-600 overflow-hidden">
        <div className="bg-dungeon-700 px-4 py-3 flex items-center gap-2 border-b border-dungeon-600">
          <span className="text-lg">🛠️</span>
          <div>
            <p className="text-amber-400 font-semibold text-sm">Hobbyprojekt in aktiver Entwicklung</p>
            <p className="text-gray-500 text-xs mt-0.5">
              Quest Vault Reborn wird von einer einzelnen Person in der Freizeit entwickelt und laufend erweitert.
              Kein kommerzielles Produkt – sondern Leidenschaft für Descent.
            </p>
          </div>
        </div>

        <div className="p-4 grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-display text-gold-400 font-semibold text-sm mb-3 flex items-center gap-1.5">
              <span className="text-green-500">✓</span> Bereits verfügbar
            </h4>
            <ul className="space-y-2">
              {[
                { icon: '🗺️', text: 'Spielplan-Baukasten – Plättchen aus deiner Sammlung platzieren und drehen' },
                { icon: '📜', text: 'Quest-Editor – eigene Abenteuer erstellen, speichern und exportieren' },
                { icon: '👹', text: 'Über 60 Monstergruppen mit allen Spielwerten (Akt 1 & Akt 2)' },
                { icon: '🧙', text: 'Über 68 Helden mit Fähigkeiten aus allen Erweiterungen' },
                { icon: '👜', text: 'Erweiterungs-Filter – die App passt sich deiner Sammlung an' },
                { icon: '💾', text: 'Quests automatisch im Browser speichern – auch offline nutzbar' },
              ].map((item) => (
                <li key={item.text} className="flex gap-2 text-sm text-gray-400">
                  <span className="shrink-0 text-base leading-5">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-gold-400 font-semibold text-sm mb-3 flex items-center gap-1.5">
              <span className="text-amber-500">◎</span> Geplant & in Arbeit
            </h4>
            <ul className="space-y-2">
              {[
                { icon: '❤️', text: 'Monster-Lebenspunkte live tracken – kein Plättchen-Chaos mehr auf dem Tisch' },
                { icon: '📖', text: 'Komplette Kampagne speichern – Spielstand pausieren und Wochen später weitermachen' },
                { icon: '⚔️', text: 'Overlord-Zentrale – eigenes Deck verwalten, Leutnanten steuern, Helden im Blick behalten' },
                { icon: '🛡️', text: 'Spieler-Ansicht – jeder Held hat seine eigene Übersicht am Tisch' },
                { icon: '🎨', text: 'Neues Design – düsterer, mystischer, mehr Dungeon-Atmosphäre' },
                { icon: '🔄', text: 'Geräte-Synchronisation – Overlord und Spieler teilen sich denselben Spielstand' },
              ].map((item) => (
                <li key={item.text} className="flex gap-2 text-sm text-gray-500">
                  <span className="shrink-0 text-base leading-5">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-4 py-3 border-t border-dungeon-700 bg-dungeon-900/50 space-y-1.5">
          <p className="text-xs text-gray-500 text-center">
            Da sich das Projekt noch in aktiver Entwicklung befindet, können vereinzelt Fehler auftreten.
            Gemeldete Fehler werden schnellstmöglich behoben.
          </p>
          <p className="text-xs text-gray-600 text-center">
            Fehler gefunden oder einen Feature-Wunsch?{' '}
            <a
              href="mailto:ze.d@me.com"
              className="text-gold-600 hover:text-gold-400 transition-colors"
            >
              ze.d@me.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
