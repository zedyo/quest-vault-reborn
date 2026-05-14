import { useState, useMemo } from 'react'
import { HEROES, ARCHETYPE_LABELS, ARCHETYPE_ICONS, ARCHETYPE_COLORS } from '../data/heroes'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import type { Hero } from '../types/game'

export default function HeroesPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [search, setSearch] = useState('')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [filterArchetype, setFilterArchetype] = useState<Hero['archetype'] | 'alle'>('alle')

  const expansionMap = useMemo(
    () => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])),
    [],
  )

  const filtered = useMemo(() => {
    return HEROES.filter((h) => {
      if (onlyOwned && !ownedIds.includes(h.expansionId)) return false
      if (filterArchetype !== 'alle' && h.archetype !== filterArchetype) return false
      if (search && !h.name.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [search, onlyOwned, filterArchetype, ownedIds])

  const archetypes: Array<Hero['archetype'] | 'alle'> = ['alle', 'krieger', 'heiler', 'magier', 'spaeher']

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Helden</h2>
        <p className="text-gray-400 text-sm">
          {filtered.length} Helden {onlyOwned ? 'in deiner Sammlung' : 'insgesamt'}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search"
          placeholder="Suche nach Name…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-dungeon-800 border border-dungeon-700 text-gray-100 rounded px-3 py-2 text-sm w-64 focus:outline-none focus:border-gold-500"
        />
        <div className="flex gap-1">
          {archetypes.map((a) => (
            <button
              key={a}
              onClick={() => setFilterArchetype(a)}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                filterArchetype === a
                  ? 'bg-gold-500 text-dungeon-950 font-semibold'
                  : 'bg-dungeon-800 text-gray-400 hover:text-gray-200 border border-dungeon-700'
              }`}
            >
              {a === 'alle'
                ? 'Alle'
                : `${ARCHETYPE_ICONS[a]} ${ARCHETYPE_LABELS[a]}`}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={onlyOwned}
            onChange={(e) => setOnlyOwned(e.target.checked)}
            className="accent-gold-500"
          />
          Nur meine Sammlung
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className="card text-center text-gray-500 py-12">
          Keine Helden gefunden. Passe deine Suche oder Sammlung an.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map((h) => {
            const exp = expansionMap[h.expansionId]
            return (
              <div key={h.id} className="card hover:border-gold-600 transition-colors space-y-2">
                <p className="text-gray-200 text-sm font-semibold leading-tight">{h.name}</p>
                <span
                  className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${ARCHETYPE_COLORS[h.archetype]}`}
                >
                  {ARCHETYPE_ICONS[h.archetype]} {ARCHETYPE_LABELS[h.archetype]}
                </span>
                <p className="text-gray-600 text-xs">{exp?.nameDe ?? h.expansionId}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
