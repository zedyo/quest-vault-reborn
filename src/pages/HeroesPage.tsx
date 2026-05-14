import { useState, useMemo } from 'react'
import { HEROES, ARCHETYPE_LABELS, ARCHETYPE_ICONS, ARCHETYPE_COLORS } from '../data/heroes'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import { DicePip } from '../components/DiceDisplay'
import type { Hero } from '../types/game'

const ARCHETYPE_IMG_FOLDER: Record<Hero['archetype'], string> = {
  krieger: 'warrior',
  heiler: 'healer',
  magier: 'mage',
  spaeher: 'scout',
}

const EXPANSION_IMG_PATH: Record<string, string> = {
  'base': 'base-game',
  'lair-of-the-wyrm': 'lair-of-the-wyrm',
  'labyrinth-of-ruin': 'labyrinth-of-ruin',
  'the-trollfens': 'the-trollfens',
  'shadow-of-nerekhall': 'shadow-of-nerekhall',
  'manor-of-ravens': 'manor-of-ravens',
  'oath-of-the-outcast': 'oath-of-the-outcast',
  'crown-of-destiny': 'crown-of-destiny',
  'crusade-of-the-forgotten': 'crusade-of-the-forgotten',
  'guardians-of-deephall': 'guardians-of-deephall',
  'visions-of-dawn': 'visions-of-dawn',
  'bonds-of-the-wild': 'bonds-of-the-wild',
  'treaty-of-champions': 'treaty-of-champions',
  'stewards-of-the-secret': 'stewards-of-the-secret',
  'shards-of-everdark': 'shards-of-everdark',
}

function heroImageUrl(hero: Hero): string {
  const expPath = EXPANSION_IMG_PATH[hero.expansionId] ?? hero.expansionId
  const archPath = ARCHETYPE_IMG_FOLDER[hero.archetype]
  return `https://raw.githubusercontent.com/any2cards/d2e/master/images/heroes/d2e/${expPath}/${archPath}/bg-${hero.id}.png`
}

export default function HeroesPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [search, setSearch] = useState('')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [filterArchetype, setFilterArchetype] = useState<Hero['archetype'] | 'alle'>('alle')
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set())

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

  const handleImgError = (id: string) => {
    setImgErrors((prev) => new Set(prev).add(id))
  }

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
        <div className="flex gap-1 flex-wrap">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {filtered.map((h) => {
            const exp = expansionMap[h.expansionId]
            const imgUrl = heroImageUrl(h)
            const hasImg = !imgErrors.has(h.id)
            return (
              <div key={h.id} className="card hover:border-gold-600 transition-colors flex flex-col gap-0 p-0 overflow-hidden">
                {/* Hero portrait */}
                <div className="w-full aspect-[3/4] bg-dungeon-800 relative overflow-hidden">
                  {hasImg ? (
                    <img
                      src={imgUrl}
                      alt={h.name}
                      className="w-full h-full object-cover object-top"
                      onError={() => handleImgError(h.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">
                      {ARCHETYPE_ICONS[h.archetype]}
                    </div>
                  )}
                  {/* Archetype badge overlay */}
                  <span
                    className={`absolute bottom-1 left-1 inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full border font-medium ${ARCHETYPE_COLORS[h.archetype]}`}
                  >
                    {ARCHETYPE_ICONS[h.archetype]} {ARCHETYPE_LABELS[h.archetype]}
                  </span>
                </div>

                {/* Info section */}
                <div className="p-2 space-y-1.5">
                  <p className="text-gray-100 text-xs font-semibold leading-tight">{h.name}</p>
                  <p className="text-gray-600 text-[10px] leading-tight">{exp?.nameDe ?? h.expansionId}</p>

                  {/* Stats */}
                  {(h.speed || h.health || h.stamina || h.defense) && (
                    <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 pt-1 border-t border-dungeon-700">
                      {h.speed !== undefined && (
                        <div className="flex items-center gap-1 text-[10px]">
                          <span className="text-gray-500">Bew.</span>
                          <span className="text-gray-300 font-medium">{h.speed}</span>
                        </div>
                      )}
                      {h.health !== undefined && (
                        <div className="flex items-center gap-1 text-[10px]">
                          <span className="text-gray-500">Leben</span>
                          <span className="text-gray-300 font-medium">{h.health}</span>
                        </div>
                      )}
                      {h.stamina !== undefined && (
                        <div className="flex items-center gap-1 text-[10px]">
                          <span className="text-gray-500">Ausd.</span>
                          <span className="text-gray-300 font-medium">{h.stamina}</span>
                        </div>
                      )}
                      {h.defense && h.defense.length > 0 && (
                        <div className="flex items-center gap-0.5 text-[10px] col-span-2">
                          <span className="text-gray-500 mr-0.5">Vert.</span>
                          {h.defense.map((d, i) => <DicePip key={i} color={d} />)}
                        </div>
                      )}
                    </div>
                  )}

                  {h.heroAbility && (
                    <div className="pt-1 border-t border-dungeon-700">
                      <p className="text-[10px] text-blue-400 font-semibold mb-0.5">Heldenfähigkeit</p>
                      <p className="text-[10px] text-gray-400 leading-tight">{h.heroAbility}</p>
                    </div>
                  )}

                  {h.heroicFeat && (
                    <div className="pt-1 border-t border-dungeon-700">
                      <p className="text-[10px] text-gold-500 font-semibold mb-0.5">Heldentat</p>
                      <p className="text-[10px] text-gray-400 leading-tight">{h.heroicFeat}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
