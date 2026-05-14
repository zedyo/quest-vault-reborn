import { useState, useMemo } from 'react'
import { MONSTERS } from '../data/monsters'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import { DicePip } from '../components/DiceDisplay'
import type { Monster, MonsterStats } from '../types/game'

// Per-expansion filename prefix (any2cards/d2e naming convention)
const EXPANSION_PREFIX: Record<string, string> = {
  'base':                    'bg',
  'lair-of-the-wyrm':        'lw',
  'labyrinth-of-ruin':       'lr',
  'the-trollfens':           'tf',
  'shadow-of-nerekhall':     'sn',
  'manor-of-ravens':         'mr',
  'oath-of-the-outcast':     'oo',
  'crown-of-destiny':        'cd',
  'crusade-of-the-forgotten':'cf',
  'guardians-of-deephall':   'gd',
  'visions-of-dawn':         'vd',
  'bonds-of-the-wild':       'bw',
  'treaty-of-champions':     'tc',
  'stewards-of-the-secret':  'ss',
  'shards-of-everdark':      'se',
  'mists-of-bilehall':       'mb',
  'the-chains-that-rust':    'cr',
}

const EXPANSION_PATH: Record<string, string> = {
  'base':                    'base-game',
  'lair-of-the-wyrm':        'lair-of-the-wyrm',
  'labyrinth-of-ruin':       'labyrinth-of-ruin',
  'the-trollfens':           'the-trollfens',
  'shadow-of-nerekhall':     'shadow-of-nerekhall',
  'manor-of-ravens':         'manor-of-ravens',
  'oath-of-the-outcast':     'oath-of-the-outcast',
  'crown-of-destiny':        'crown-of-destiny',
  'crusade-of-the-forgotten':'crusade-of-the-forgotten',
  'guardians-of-deephall':   'guardians-of-deephall',
  'visions-of-dawn':         'visions-of-dawn',
  'bonds-of-the-wild':       'bonds-of-the-wild',
  'treaty-of-champions':     'treaty-of-champions',
  'stewards-of-the-secret':  'stewards-of-the-secret',
  'shards-of-everdark':      'shards-of-everdark',
  'mists-of-bilehall':       'mists-of-bilehall',
  'the-chains-that-rust':    'the-chains-that-rust',
}

function monsterImageUrl(monsterId: string, expansionId: string): string {
  const prefix = EXPANSION_PREFIX[expansionId] ?? 'bg'
  const expPath = EXPANSION_PATH[expansionId] ?? expansionId
  return `https://raw.githubusercontent.com/any2cards/d2e/master/images/monsters/d2e/${expPath}/act1/${prefix}-${monsterId}-front.png`
}

/** Replace "Herz"/"Herzen" words with ❤ symbol */
function withHeartSymbol(text: string): string {
  return text.replace(/\bHerzen\b/g, '❤').replace(/\bHerz\b/g, '❤')
}

/** Format a surge entry: remove "Schub: " prefix (lightning shown separately) and replace heart words */
function formatSurge(text: string): string {
  return withHeartSymbol(text.replace(/^Schub:\s*/i, ''))
}

/** Format an ability entry: replace heart words */
function formatAbility(text: string): string {
  return withHeartSymbol(text)
}

// ── Stat icons (faithful to the Descent 2e card style) ───────────────────────

function MovementIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="#15803d" />
      {/* Boot side-profile: wider shaft (7-14) gives better proportions at small sizes */}
      <path d="M7,3 L7,14 L4.5,14 L4.5,20.5 L19.5,20.5 L19.5,15.5 L14,15.5 L14,3 Z" fill="white" />
    </svg>
  )
}

function HealthIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="#b91c1c" />
      <path d="M12,19 L4.5,11 C4.5,7 8,6 10,8.5 Q11,9.5 12,11 Q13,9.5 14,8.5 C16,6 19.5,7 19.5,11 Z" fill="white" />
    </svg>
  )
}

function DefenseIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="#6b7280" />
      <path d="M12,20.5 L4.5,15.5 L4.5,5.5 L19.5,5.5 L19.5,15.5 Z" fill="white" />
    </svg>
  )
}

// ── StatBlock ────────────────────────────────────────────────────────────────

interface StatBlockProps {
  stats: MonsterStats
  label: string
  isElite?: boolean
  /** compact=true uses smaller sizes (for grid cards); false uses lightbox sizes */
  compact?: boolean
}

function StatBlock({ stats, label, isElite, compact = true }: StatBlockProps) {
  const textCls = compact ? 'text-xs' : 'text-sm'
  const sectionHeaderCls = compact ? 'text-[10px]' : 'text-xs'
  const sectionTextCls = compact ? 'text-[10px]' : 'text-xs'
  const iconSize = compact ? 14 : 16

  return (
    <div className={`rounded p-2 flex-1 min-w-0 ${isElite ? 'bg-yellow-950/40 border border-yellow-800/30' : 'bg-dungeon-800/50'}`}>
      <div className={`${textCls} font-semibold mb-1.5 ${isElite ? 'text-gold-400' : 'text-gray-400'}`}>
        {label}
      </div>
      {/* CSS grid: label column auto-sizes to widest label so all word labels align */}
      <div className="grid gap-y-1 items-center" style={{ gridTemplateColumns: 'auto 1fr', columnGap: 6 }}>
        <span className={`flex items-center gap-1 text-gray-500 ${textCls}`}>
          <MovementIcon size={iconSize} />Bewegung
        </span>
        <span className={`text-gray-200 font-medium ${textCls}`}>{stats.speed}</span>

        <span className={`flex items-center gap-1 text-gray-500 ${textCls}`}>
          <HealthIcon size={iconSize} />Leben
        </span>
        <span className={`text-gray-200 font-medium ${textCls}`}>{stats.health}</span>

        <span className={`flex items-center gap-1 text-gray-500 ${textCls}`}>
          <DefenseIcon size={iconSize} />Verteid.
        </span>
        <div className="flex gap-0.5">
          {stats.defense.map((d, i) => <DicePip key={i} color={d} />)}
        </div>

        {/* Invisible spacer aligns "Angriff" word with the labeled rows above */}
        <span className={`flex items-center gap-1 text-gray-500 ${textCls}`}>
          <span style={{ width: iconSize, height: iconSize, display: 'inline-block', flexShrink: 0 }} />Angriff
        </span>
        <div className="flex gap-0.5">
          {stats.attack.map((d, i) => <DicePip key={i} color={d} />)}
        </div>
      </div>

      {stats.surges && stats.surges.length > 0 && (
        <div className="mt-1.5 pt-1.5 border-t border-dungeon-700">
          <div className={`${sectionHeaderCls} text-purple-400 font-semibold mb-0.5`}>Energie</div>
          {stats.surges.map((s, i) => (
            <p key={i} className={`${sectionTextCls} text-gray-400 leading-tight mb-0.5`}>
              ⚡ {formatSurge(s)}
            </p>
          ))}
        </div>
      )}

      {stats.abilities && stats.abilities.length > 0 && (
        <div className="mt-1.5 pt-1.5 border-t border-dungeon-700">
          <div className={`${sectionHeaderCls} text-blue-400 font-semibold mb-0.5`}>Fähigkeiten</div>
          {stats.abilities.map((a, i) => (
            <p key={i} className={`${sectionTextCls} text-gray-400 leading-tight mb-0.5`}>
              {formatAbility(a)}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Lightbox ─────────────────────────────────────────────────────────────────

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
      {/* 10% bigger than original max-w-2xl (672px → 740px) */}
      <div
        className="bg-dungeon-900 border border-dungeon-600 rounded-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        style={{ maxWidth: 740 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-4 border-b border-dungeon-700">
          <div>
            <h3 className="text-xl font-bold text-gray-100">{monster.nameDe}</h3>
            <p className="text-base text-gray-500">{monster.nameEn}</p>
            {monster.traits && (
              <div className="flex flex-wrap gap-1 mt-1">
                {monster.traits.map((t) => (
                  <span key={t} className="text-sm bg-dungeon-700 text-gray-400 px-1.5 py-0.5 rounded">{t}</span>
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
          <div className="sm:w-52 shrink-0">
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

          <div className="flex-1 space-y-3">
            {monster.normal && (
              <StatBlock stats={monster.normal} label="Normal" compact={false} />
            )}
            {monster.master && (
              <StatBlock stats={monster.master} label="Elite" isElite compact={false} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

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
                              {m.normal && <StatBlock stats={m.normal} label="Normal" compact />}
                              {m.master && <StatBlock stats={m.master} label="Elite" isElite compact />}
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
