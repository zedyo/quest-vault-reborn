import { useState, useMemo } from 'react'
import { HEROES, ARCHETYPE_LABELS, ARCHETYPE_COLORS } from '../data/heroes'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import { DicePip } from '../components/DiceDisplay'
import type { Hero } from '../types/game'

// ── Stat icons ────────────────────────────────────────────────────────────────

function MovementIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="#15552c" />
      <g transform="translate(12 12) scale(0.7941) translate(-14 -12.5)">
        <path d="M9,4 C8.4,4 8.4,5 8.6,6.5 C8.9,9 8.6,11.5 8.6,13.5 C8.5,15.8 7.9,17.6 7.9,19 C7.9,20.4 8.2,21 9,21 L17.4,21 C19,21 20.1,20.4 20.1,19 C20.1,17.7 19,17 17.4,16.8 L14,16.3 C13,16.1 12.6,15.1 12.6,13.5 C12.6,10 12.8,7 12.6,5 C12.5,4.2 12,4 11.4,4 Z" fill="white" />
      </g>
    </svg>
  )
}

function HealthIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="#b52524" />
      <g transform="translate(12 12) scale(0.7951) translate(-12 -12.92)">
        <path d="M12,21 L4.5,13.5 C3,11.5 3,7.5 6,5.5 C9,3.5 11.5,6.5 12,9 C12.5,6.5 15,3.5 18,5.5 C21,7.5 21,11.5 19.5,13.5 Z" fill="white" />
      </g>
    </svg>
  )
}

function StaminaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="#92400e" />
      <path d="M 12 3 C 7 8 5.5 12 5.5 15 C 5.5 19.1 8.5 21.5 12 21.5 C 15.5 21.5 18.5 19.1 18.5 15 C 18.5 12 17 8 12 3 Z" fill="white" />
      <path d="M 9.5 15 C 9.5 13.5 10.5 12 12 11" stroke="#92400e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function DefenseIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="#1f6fb2" />
      <g transform="translate(12 12) scale(0.8182) translate(-12 -13.25)">
        <path d="M12,21.5 L4.5,15.5 L4.5,7.5 Q4.5,5 7,5 L17,5 Q19.5,5 19.5,7.5 L19.5,15.5 Z" fill="white" />
      </g>
    </svg>
  )
}

// ── Attribute chips ───────────────────────────────────────────────────────────

const ATTR_STYLE = {
  might:     { label: 'Stärke',       cls: 'bg-red-900/50 text-red-300 border border-red-800/50' },
  knowledge: { label: 'Wissen',       cls: 'bg-blue-900/50 text-blue-300 border border-blue-800/50' },
  willpower: { label: 'Willenskraft', cls: 'bg-purple-900/50 text-purple-300 border border-purple-800/50' },
  awareness: { label: 'Gespür',       cls: 'bg-green-900/50 text-green-300 border border-green-800/50' },
} as const

function AttributeChips({ hero, compact = true }: { hero: Hero; compact?: boolean }) {
  const sz = compact ? 'text-[9px] px-1 py-0.5' : 'text-xs px-2 py-1'
  return (
    <div className="grid grid-cols-2 gap-0.5">
      {(['might', 'knowledge', 'willpower', 'awareness'] as const).map((k) => {
        const v = hero[k]
        if (v == null) return null
        const { label, cls } = ATTR_STYLE[k]
        return (
          <span key={k} className={`rounded flex items-center justify-between gap-1 ${cls} ${sz}`}>
            <span className="opacity-80 truncate">{label}</span>
            <span className="font-bold">{v}</span>
          </span>
        )
      })}
    </div>
  )
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

function HeroLightbox({ hero, onClose }: { hero: Hero; onClose: () => void }) {
  const [cardImgError, setCardImgError] = useState(false)
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="bg-dungeon-900 border border-dungeon-700 rounded-lg shadow-2xl max-w-3xl w-full overflow-y-auto max-h-[90vh] p-4 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl text-gold-400 font-bold">{hero.name}</h3>
            <span className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full border font-medium mt-1 ${ARCHETYPE_COLORS[hero.archetype]}`}>
              {ARCHETYPE_LABELS[hero.archetype]}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-100 text-2xl leading-none flex-shrink-0">×</button>
        </div>

        {/* Full card image + stats */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Full landscape card */}
          {!cardImgError && hero.imageUrl && (
            <div className="sm:w-72 flex-shrink-0">
              <img
                src={hero.imageUrl}
                alt={hero.name}
                className="w-full rounded border border-dungeon-700"
                onError={() => setCardImgError(true)}
              />
            </div>
          )}

          {/* Stats + attributes + abilities */}
          <div className="flex-1 space-y-3 min-w-0">
            {/* Core stats */}
            {(hero.speed != null || hero.health != null || hero.stamina != null) && (
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {hero.speed != null && (
                  <div className="flex items-center gap-2 text-sm">
                    <MovementIcon size={18} /><span className="text-gray-400">Bewegung</span>
                    <span className="text-gray-100 font-semibold ml-auto">{hero.speed}</span>
                  </div>
                )}
                {hero.health != null && (
                  <div className="flex items-center gap-2 text-sm">
                    <HealthIcon size={18} /><span className="text-gray-400">Leben</span>
                    <span className="text-gray-100 font-semibold ml-auto">{hero.health}</span>
                  </div>
                )}
                {hero.stamina != null && (
                  <div className="flex items-center gap-2 text-sm">
                    <StaminaIcon size={18} /><span className="text-gray-400">Ausdauer</span>
                    <span className="text-gray-100 font-semibold ml-auto">{hero.stamina}</span>
                  </div>
                )}
                {hero.defense && hero.defense.length > 0 && (
                  <div className="flex items-center gap-2 text-sm">
                    <DefenseIcon size={18} /><span className="text-gray-400">Verteidigung</span>
                    <div className="flex gap-0.5 ml-auto">{hero.defense.map((d, i) => <DicePip key={i} color={d} />)}</div>
                  </div>
                )}
              </div>
            )}

            {/* Attributes */}
            {hero.might != null && (
              <div>
                <p className="text-xs text-gray-500 mb-1 font-medium">Attribute</p>
                <AttributeChips hero={hero} compact={false} />
              </div>
            )}

            {/* Ability */}
            {hero.heroAbility && (
              <div className="pt-1 border-t border-dungeon-700">
                <p className="text-xs text-blue-400 font-semibold mb-0.5">Heldenfähigkeit</p>
                <p className="text-sm text-gray-300 leading-snug">{hero.heroAbility}</p>
              </div>
            )}

            {/* Feat */}
            {hero.heroicFeat && (
              <div className="pt-1 border-t border-dungeon-700">
                <p className="text-xs text-gold-500 font-semibold mb-0.5">Heldentat</p>
                <p className="text-sm text-gray-300 leading-snug">{hero.heroicFeat}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

const archetypeActiveCls: Record<string, string> = {
  krieger: 'bg-red-800 text-red-100 border-red-700',
  heiler:  'bg-blue-800 text-blue-100 border-blue-700',
  magier:  'bg-yellow-800 text-yellow-100 border-yellow-700',
  spaeher: 'bg-green-800 text-green-100 border-green-700',
}

export default function HeroesPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [search, setSearch] = useState('')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [filterArchetype, setFilterArchetype] = useState<Hero['archetype'] | 'alle'>('alle')
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set())
  const [lightboxHero, setLightboxHero] = useState<Hero | null>(null)

  const expansionMap = useMemo(() => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])), [])

  const filtered = useMemo(() => HEROES.filter((h) => {
    if (onlyOwned && !ownedIds.includes(h.expansionId)) return false
    if (filterArchetype !== 'alle' && h.archetype !== filterArchetype) return false
    if (search && !h.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  }), [search, onlyOwned, filterArchetype, ownedIds])

  const archetypes: Array<Hero['archetype'] | 'alle'> = ['alle', 'krieger', 'heiler', 'magier', 'spaeher']

  return (
    <div className="space-y-6">
      {lightboxHero && (
        <HeroLightbox hero={lightboxHero} onClose={() => setLightboxHero(null)} />
      )}

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
              className={`px-3 py-1.5 rounded text-sm transition-colors border font-medium ${
                filterArchetype === a
                  ? a === 'alle'
                    ? 'bg-gold-500 text-dungeon-950 border-gold-600'
                    : archetypeActiveCls[a]
                  : 'bg-dungeon-800 text-gray-400 hover:text-gray-200 border-dungeon-700'
              }`}
            >
              {a === 'alle' ? 'Alle' : ARCHETYPE_LABELS[a as Hero['archetype']]}
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
            const hasImg = !!h.imageUrl && !imgErrors.has(h.id)
            return (
              <div
                key={h.id}
                className="card hover:border-gold-600 transition-colors flex flex-col gap-0 p-0 overflow-hidden cursor-pointer"
                onClick={() => setLightboxHero(h)}
              >
                {/* Portrait: object-position left center crops the hero figure from the landscape card */}
                <div className="w-full aspect-[3/4] bg-dungeon-800 relative overflow-hidden">
                  {hasImg ? (
                    <img
                      src={h.imageUrl!}
                      alt={h.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'left center' }}
                      onError={() => setImgErrors((prev) => new Set(prev).add(h.id))}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-20 text-4xl text-gray-400">
                      {h.archetype === 'heiler' ? '✚' : h.archetype === 'magier' ? '✦' : h.archetype === 'spaeher' ? '🏹' : '⚔️'}
                    </div>
                  )}
                  <span className={`absolute bottom-1 right-1 text-[9px] px-1.5 py-0.5 rounded-full border font-medium ${ARCHETYPE_COLORS[h.archetype]}`}>
                    {ARCHETYPE_LABELS[h.archetype]}
                  </span>
                </div>

                {/* Info */}
                <div className="p-2 space-y-1.5">
                  <p className="text-gray-100 text-xs font-semibold leading-tight">{h.name}</p>
                  <p className="text-gray-600 text-[10px] leading-tight">{exp?.nameDe ?? h.expansionId}</p>

                  {/* Stats row */}
                  {(h.speed != null || h.health != null) && (
                    <div className="grid grid-cols-2 gap-x-1 gap-y-0.5 pt-1 border-t border-dungeon-700">
                      {h.speed != null && (
                        <div className="flex items-center gap-1">
                          <MovementIcon size={12} />
                          <span className="text-[10px] text-gray-300 font-medium">{h.speed}</span>
                        </div>
                      )}
                      {h.health != null && (
                        <div className="flex items-center gap-1">
                          <HealthIcon size={12} />
                          <span className="text-[10px] text-gray-300 font-medium">{h.health}</span>
                        </div>
                      )}
                      {h.stamina != null && (
                        <div className="flex items-center gap-1">
                          <StaminaIcon size={12} />
                          <span className="text-[10px] text-gray-300 font-medium">{h.stamina}</span>
                        </div>
                      )}
                      {h.defense && h.defense.length > 0 && (
                        <div className="flex items-center gap-0.5">
                          <DefenseIcon size={12} />
                          {h.defense.map((d, i) => <DicePip key={i} color={d} />)}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Attribute chips */}
                  {h.might != null && (
                    <div className="pt-1 border-t border-dungeon-700">
                      <AttributeChips hero={h} compact />
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
