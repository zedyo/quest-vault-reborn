import { useState, useMemo } from 'react'
import { MONSTERS } from '../data/monsters'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import { DicePip } from '../components/DiceDisplay'
import type { Monster, MonsterStats } from '../types/game'

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
  'mists-of-bilehall': 'mists-of-bilehall',
  'the-chains-that-rust': 'the-chains-that-rust',
}

function monsterImageUrl(monsterId: string, expansionId: string): string {
  const expPath = EXPANSION_IMG_PATH[expansionId] ?? expansionId
  return `https://raw.githubusercontent.com/any2cards/d2e/master/images/monsters/d2e/${expPath}/act1/bg-${monsterId}-front.png`
}

interface StatBlockProps {
  stats: MonsterStats
  label: string
  isElite?: boolean
}

function StatBlock({ stats, label, isElite }: StatBlockProps) {
  return (
    <div className={`rounded p-2 flex-1 min-w-0 ${isElite ? 'bg-yellow-950/40 border border-yellow-800/30' : 'bg-dungeon-800/50'}`}>
      <div className={`text-xs font-semibold mb-1.5 ${isElite ? 'text-gold-400' : 'text-gray-400'}`}>
        {label}
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-gray-500 w-14 shrink-0">Bewegung</span>
          <span className="text-gray-200 font-medium">{stats.speed}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-gray-500 w-14 shrink-0">Leben</span>
          <span className="text-gray-200 font-medium">{stats.health}</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="text-gray-500 w-14 shrink-0">Verteid.</span>
          <div className="flex gap-0.5">
            {stats.defense.map((d, i) => <DicePip key={i} color={d} />)}
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="text-gray-500 w-14 shrink-0">Angriff</span>
          <div className="flex gap-0.5">
            {stats.attack.map((d, i) => <DicePip key={i} color={d} />)}
          </div>
        </div>
      </div>
      {stats.surges && stats.surges.length > 0 && (
        <div className="mt-1.5 pt-1.5 border-t border-dungeon-700">
          <div className="text-[10px] text-purple-400 font-semibold mb-0.5">Schübe</div>
          {stats.surges.map((s, i) => (
            <p key={i} className="text-[10px] text-gray-400 leading-tight mb-0.5">{s}</p>
          ))}
        </div>
      )}
      {stats.abilities && stats.abilities.length > 0 && (
        <div className="mt-1.5 pt-1.5 border-t border-dungeon-700">
          <div className="text-[10px] text-blue-400 font-semibold mb-0.5">Fähigkeiten</div>
          {stats.abilities.map((a, i) => (
            <p key={i} className="text-[10px] text-gray-400 leading-tight mb-0.5">{a}</p>
          ))}
        </div>
      )}
    </div>
  )
}

interface LightboxProps {
  monster: Monster
  imgUrl: string
  onClose: () => void
}

function MonsterLightbox({ monster, imgUrl, onClose }: LightboxProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-dungeon-900 border border-dungeon-600 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 border-b border-dungeon-700">
          <div>
            <h3 className="text-lg font-bold text-gray-100">{monster.nameDe}</h3>
            <p className="text-gray-500 text-sm">{monster.nameEn}</p>
            {monster.traits && (
              <div className="flex flex-wrap gap-1 mt-1">
                {monster.traits.map((t) => (
                  <span key={t} className="text-xs bg-dungeon-700 text-gray-400 px-1.5 py-0.5 rounded">{t}</span>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-200 text-xl leading-none ml-4 shrink-0"
          >
            ✕
          </button>
        </div>

        <div className="p-4 flex flex-col sm:flex-row gap-4">
          {/* Large image */}
          <div className="sm:w-48 shrink-0">
            {!imgError ? (
              <img
                src={imgUrl}
                alt={monster.nameEn}
                className="w-full rounded border border-dungeon-700"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full aspect-[2/3] bg-dungeon-800 rounded border border-dungeon-700 flex items-center justify-center text-5xl opacity-30">
                👹
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex-1 space-y-3">
            {monster.normal && (
              <StatBlock stats={monster.normal} label="Normal" />
            )}
            {monster.master && (
              <StatBlock stats={monster.master} label="Elite" isElite />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MonstersPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [search, setSearch] = useState('')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set())
  const [lightboxMonster, setLightboxMonster] = useState<Monster | null>(null)

  const expansionMap = useMemo(
    () => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])),
    [],
  )

  const filtered = useMemo(() => {
    return MONSTERS.filter((m) => {
      if (onlyOwned && !ownedIds.includes(m.expansionId)) return false
      if (search) {
        const q = search.toLowerCase()
        return m.nameDe.toLowerCase().includes(q) || m.nameEn.toLowerCase().includes(q)
      }
      return true
    })
  }, [search, onlyOwned, ownedIds])

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>()
    for (const m of filtered) {
      const existing = map.get(m.expansionId) ?? []
      existing.push(m)
      map.set(m.expansionId, existing)
    }
    return map
  }, [filtered])

  const handleImgError = (id: string) => {
    setImgErrors((prev) => new Set(prev).add(id))
  }

  return (
    <div className="space-y-6">
      {lightboxMonster && (
        <MonsterLightbox
          monster={lightboxMonster}
          imgUrl={monsterImageUrl(lightboxMonster.id, lightboxMonster.expansionId)}
          onClose={() => setLightboxMonster(null)}
        />
      )}

      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Monster</h2>
        <p className="text-gray-400 text-sm">
          {filtered.length} Monstergruppen {onlyOwned ? 'in deiner Sammlung' : 'insgesamt'}
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

      {grouped.size === 0 ? (
        <div className="card text-center text-gray-500 py-12">
          Keine Monster gefunden. Passe deine Suche oder Sammlung an.
        </div>
      ) : (
        <div className="space-y-8">
          {Array.from(grouped.entries()).map(([expId, monsters]) => {
            const exp = expansionMap[expId]
            return (
              <div key={expId}>
                <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
                  {exp?.nameDe ?? expId}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {monsters.map((m) => {
                    const imgUrl = monsterImageUrl(m.id, m.expansionId)
                    const hasImg = !imgErrors.has(m.id)
                    return (
                      <div key={m.id} className="card hover:border-gold-700 transition-colors">
                        <div className="flex gap-3">
                          {/* Clickable image */}
                          <button
                            className="shrink-0 w-20 h-28 rounded overflow-hidden bg-dungeon-800 flex items-center justify-center hover:ring-2 hover:ring-gold-500 transition-all cursor-zoom-in"
                            onClick={() => setLightboxMonster(m)}
                            title="Karte vergrößern"
                          >
                            {hasImg ? (
                              <img
                                src={imgUrl}
                                alt={m.nameEn}
                                className="w-full h-full object-cover object-top"
                                onError={() => handleImgError(m.id)}
                                loading="lazy"
                              />
                            ) : (
                              <span className="text-3xl opacity-30">👹</span>
                            )}
                          </button>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="mb-1">
                              <p className="text-gray-100 font-semibold text-sm leading-tight">{m.nameDe}</p>
                              <p className="text-gray-500 text-xs">{m.nameEn}</p>
                            </div>
                            {m.traits && m.traits.length > 0 && (
                              <div className="flex flex-wrap gap-1 mb-2">
                                {m.traits.map((t) => (
                                  <span key={t} className="text-[10px] bg-dungeon-700 text-gray-400 px-1.5 py-0.5 rounded">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                            <div className="flex gap-2">
                              {m.normal && <StatBlock stats={m.normal} label="Normal" />}
                              {m.master && <StatBlock stats={m.master} label="Elite" isElite />}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
