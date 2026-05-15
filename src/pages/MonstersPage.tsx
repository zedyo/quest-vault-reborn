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

/**
 * Returns merged stats for the requested act:
 * act2 numeric stats override act1, but surges/abilities fall back to act1 when omitted.
 * This mirrors the real cards where act2 changes stats but keeps identical text.
 */
function getActStats(
  m: Monster,
  act: 1 | 2,
  type: 'normal' | 'master',
): MonsterStats | undefined {
  const act1 = type === 'normal' ? m.normal : m.master
  const act2 = type === 'normal' ? m.act2Normal : m.act2Master
  if (act === 1 || !act2) return act1
  return {
    ...act1,
    ...act2,
    surges: act2.surges ?? act1?.surges,
    abilities: act2.abilities ?? act1?.abilities,
    actions: act2.actions ?? act1?.actions,
  }
}

function monsterImageUrl(monsterId: string, expansionId: string, act: 1 | 2 = 1): string {
  const prefix = EXPANSION_PREFIX[expansionId] ?? 'bg'
  const expPath = EXPANSION_PATH[expansionId] ?? expansionId
  // Base game act2 images are not available in the source repo — fall back to act1
  const actPath = act === 2 && expansionId !== 'base' ? 'act2' : 'act1'
  return `https://raw.githubusercontent.com/any2cards/d2e/master/images/monsters/d2e/${expPath}/${actPath}/${prefix}-${monsterId}-front.png`
}

/** Replace "Herz"/"Herzen" words with ❤ symbol */
function withHeartSymbol(text: string): string {
  return text.replace(/\bHerzen\b/g, '❤').replace(/\bHerz\b/g, '❤')
}

/**
 * Format an ability/surge/action entry:
 * - Optionally strip a leading "Schub: " prefix (for surge entries)
 * - If text contains "Name: description", render Name: in bold
 * - Replace Herz/Herzen with ❤
 */
function formatEntry(text: string, stripSchub = false): React.ReactNode {
  let s = stripSchub ? text.replace(/^Schub:\s*/i, '') : text
  const colonIdx = s.indexOf(':')
  if (colonIdx === -1) return withHeartSymbol(s)
  const name = s.slice(0, colonIdx + 1)
  const rest = withHeartSymbol(s.slice(colonIdx + 1))
  return <><strong className="text-gray-300 font-semibold">{name}</strong>{rest}</>
}

// ── Stat icons — faithful to the Descent 2e card art ────────────────────────

function MovementIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="#15552c" />
      {/* Slim fantasy leather boot: tapered shaft, curved instep, defined heel */}
      <g transform="translate(12 12) scale(0.7941) translate(-14 -12.5)">
        <path
          d="M9,4 C8.4,4 8.4,5 8.6,6.5 C8.9,9 8.6,11.5 8.6,13.5 C8.5,15.8 7.9,17.6 7.9,19 C7.9,20.4 8.2,21 9,21 L17.4,21 C19,21 20.1,20.4 20.1,19 C20.1,17.7 19,17 17.4,16.8 L14,16.3 C13,16.1 12.6,15.1 12.6,13.5 C12.6,10 12.8,7 12.6,5 C12.5,4.2 12,4 11.4,4 Z"
          fill="white"
        />
      </g>
    </svg>
  )
}

function HealthIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="#b52524" />
      {/* Classic symmetric heart with cubic bezier lobes */}
      <g transform="translate(12 12) scale(0.7951) translate(-12 -12.92)">
        <path
          d="M12,21 L4.5,13.5 C3,11.5 3,7.5 6,5.5 C9,3.5 11.5,6.5 12,9 C12.5,6.5 15,3.5 18,5.5 C21,7.5 21,11.5 19.5,13.5 Z"
          fill="white"
        />
      </g>
    </svg>
  )
}

function DefenseIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="#1f6fb2" />
      {/* Heater shield: flat top with rounded corners, straight sides, pointed bottom */}
      <g transform="translate(12 12) scale(0.8182) translate(-12 -13.25)">
        <path
          d="M12,21.5 L4.5,15.5 L4.5,7.5 Q4.5,5 7,5 L17,5 Q19.5,5 19.5,7.5 L19.5,15.5 Z"
          fill="white"
        />
      </g>
    </svg>
  )
}

function AttackIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <circle cx="12" cy="12" r="12" fill="#847974" />
      {/* Sword pointing diagonally from bottom-left to top-right */}
      <g stroke="white" strokeLinecap="round">
        <line x1="11.3" y1="12.7" x2="17" y2="7" strokeWidth="2.4" />
        <line x1="9.2" y1="10.6" x2="13.4" y2="14.8" strokeWidth="2" />
        <line x1="11.3" y1="12.7" x2="7.4" y2="16.6" strokeWidth="2" />
      </g>
      <polygon points="18.7,5.3 17.7,8.0 15.9,6.2" fill="white" />
      <circle cx="6.8" cy="17.2" r="1.6" fill="white" />
    </svg>
  )
}

/** Curved action arrow — matches the ↻ symbol on Descent 2e monster cards */
function ActionSymbol({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      {/* Arc: ~300° counterclockwise arc, starting top-right, ending bottom-right */}
      <path
        d="M 18.5 10 A 7 7 0 1 0 17.5 16.5"
        stroke="#6ee7b7"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Arrowhead at the end of the arc */}
      <polyline
        points="14.5,20 17.5,16.5 21,18.5"
        stroke="#6ee7b7"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Lightning bolt — matches the ⚡ surge symbol on Descent 2e monster cards */
function SurgeSymbol({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      {/* Classic lightning bolt: wide upper body, narrow lower spike */}
      <polygon
        points="14,2 6,14 11.5,14 10,22 18,10 12.5,10"
        fill="#c084fc"
        stroke="#a855f7"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ── TraitIcon ─────────────────────────────────────────────────────────────────

const TRAIT_ICON_DATA: Record<string, { bg: string; content: React.ReactNode }> = {
  'Bäume': {
    bg: '#14532d',
    content: (
      <>
        {/* Round deciduous tree: cloud canopy + trunk */}
        <ellipse cx="12" cy="10" rx="7.5" ry="6.5" fill="white"/>
        <rect x="10.5" y="15" width="3" height="6" fill="white"/>
      </>
    ),
  },
  'Mond': {
    bg: '#1e3a5f',
    content: (
      /* Waxing crescent: outer arc around left, concave cutout on right */
      <path
        d="M 14 3 C 8 3 3 7.1 3 12 C 3 16.9 8 21 14 21 C 10 19 8 15.8 8 12 C 8 8.2 10 5 14 3 Z"
        fill="white"
      />
    ),
  },
  'Totenkopf': {
    bg: '#374151',
    content: (
      <>
        {/* Cranium oval */}
        <ellipse cx="12" cy="10.5" rx="7.5" ry="7" fill="white"/>
        {/* Eye sockets */}
        <circle cx="9" cy="10" r="2.5" fill="#374151"/>
        <circle cx="15" cy="10" r="2.5" fill="#374151"/>
        {/* Jaw bar + tooth gaps */}
        <rect x="7.5" y="16" width="9" height="4.5" rx="1" fill="white"/>
        <rect x="10" y="16" width="1.5" height="4.5" fill="#374151"/>
        <rect x="12.5" y="16" width="1.5" height="4.5" fill="#374151"/>
      </>
    ),
  },
  'Berge': {
    bg: '#4b5563',
    content: (
      /* Jagged rocky peaks */
      <path d="M 2 20 L 9 7 L 12.5 13 L 17 9 L 22 20 Z" fill="white"/>
    ),
  },
  'Feuer': {
    bg: '#c2410c',
    content: (
      <>
        {/* Outer flame */}
        <path d="M 12 2 C 16.5 5 18.5 9 17.5 13 C 16.5 17.5 14 20 12 21 C 10 20 7.5 17.5 6.5 13 C 5.5 9 7.5 5 12 2 Z" fill="white"/>
        {/* Inner flame (darker cutout gives depth) */}
        <path d="M 12 10 C 14 12 14 15 13 17 C 12.5 18.5 12 20 12 21 C 11 20 10 18.5 9.5 17 C 9 15 9 12 12 10 Z" fill="#c2410c"/>
      </>
    ),
  },
  'Sonne': {
    bg: '#b45309',
    content: (
      <>
        <circle cx="12" cy="12" r="5" fill="white"/>
        {/* 8 rays */}
        <line x1="12" y1="2" x2="12" y2="5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="12" y1="19" x2="12" y2="22" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="2" y1="12" x2="5" y2="12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="19" y1="12" x2="22" y2="12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="4.9" y1="4.9" x2="7" y2="7" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="17" y1="17" x2="19.1" y2="19.1" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="4.9" y1="19.1" x2="7" y2="17" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="17" y1="7" x2="19.1" y2="4.9" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      </>
    ),
  },
  'Glocke': {
    bg: '#92400e',
    content: (
      <>
        {/* Bell body: rounded crown, flared skirt */}
        <path d="M 12 3.5 C 12.7 3.5 13.2 4 13.2 4.7 C 16 5.7 17.5 8.3 17.5 12 C 17.5 15 18 16.5 19 18 L 5 18 C 6 16.5 6.5 15 6.5 12 C 6.5 8.3 8 5.7 10.8 4.7 C 10.8 4 11.3 3.5 12 3.5 Z" fill="white"/>
        {/* Clapper */}
        <circle cx="12" cy="19.8" r="1.9" fill="white"/>
      </>
    ),
  },
  'Tempel': {
    bg: '#57534e',
    content: (
      <>
        {/* Triangular pediment */}
        <polygon points="12,3 21.5,9 2.5,9" fill="white"/>
        {/* Architrave */}
        <rect x="4" y="9.5" width="16" height="2" fill="white"/>
        {/* Four columns */}
        <rect x="5" y="11.8" width="2.1" height="7" fill="white"/>
        <rect x="8.8" y="11.8" width="2.1" height="7" fill="white"/>
        <rect x="13.1" y="11.8" width="2.1" height="7" fill="white"/>
        <rect x="16.9" y="11.8" width="2.1" height="7" fill="white"/>
        {/* Stylobate base */}
        <rect x="3" y="18.8" width="18" height="2.4" fill="white"/>
      </>
    ),
  },
  'Schneeflocke': {
    bg: '#155e75',
    content: (
      <>
        {/* Snowflake: 3 crossing axes */}
        <line x1="12" y1="2.5" x2="12" y2="21.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="3" y1="7.5" x2="21" y2="16.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="21" y1="7.5" x2="3" y2="16.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Branch tips on vertical arm */}
        <line x1="9.5" y1="6" x2="12" y2="8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14.5" y1="6" x2="12" y2="8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9.5" y1="18" x2="12" y2="15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14.5" y1="18" x2="12" y2="15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </>
    ),
  },
  'Blatt': {
    bg: '#4d7c0f',
    content: (
      <>
        {/* Pointed leaf */}
        <path d="M 12 2.5 C 18.5 6 19.5 14.5 12 21.5 C 4.5 14.5 5.5 6 12 2.5 Z" fill="white"/>
        {/* Midrib */}
        <line x1="12" y1="5" x2="12" y2="20" stroke="#4d7c0f" strokeWidth="1.3"/>
      </>
    ),
  },
}

function TraitIcon({ trait, size = 14 }: { trait: string; size?: number }) {
  const data = TRAIT_ICON_DATA[trait]
  if (!data) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, borderRadius: '50%' }}
    >
      <circle cx="12" cy="12" r="12" fill={data.bg} />
      {data.content}
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

        <span className={`flex items-center gap-1 text-gray-500 ${textCls}`}>
          <AttackIcon size={iconSize} />Angriff
        </span>
        <div className="flex gap-0.5">
          {stats.attack.map((d, i) => <DicePip key={i} color={d} />)}
        </div>
      </div>

      {stats.actions && stats.actions.length > 0 && (
        <div className="mt-1.5 pt-1.5 border-t border-dungeon-700">
          <div className={`${sectionHeaderCls} text-emerald-400 font-semibold mb-0.5`}>Aktion</div>
          {stats.actions.map((a, i) => (
            <p key={i} className={`${sectionTextCls} text-gray-400 leading-tight mb-0.5 flex items-start gap-1`}>
              <ActionSymbol size={compact ? 11 : 13} />
              <span>{formatEntry(a)}</span>
            </p>
          ))}
        </div>
      )}

      {stats.surges && stats.surges.length > 0 && (
        <div className="mt-1.5 pt-1.5 border-t border-dungeon-700">
          <div className={`${sectionHeaderCls} text-purple-400 font-semibold mb-0.5`}>Energie</div>
          {stats.surges.map((s, i) => (
            <p key={i} className={`${sectionTextCls} text-gray-400 leading-tight mb-0.5 flex items-start gap-1`}>
              <SurgeSymbol size={compact ? 11 : 13} />
              <span>{formatEntry(s, true)}</span>
            </p>
          ))}
        </div>
      )}

      {stats.abilities && stats.abilities.length > 0 && (
        <div className="mt-1.5 pt-1.5 border-t border-dungeon-700">
          <div className={`${sectionHeaderCls} text-blue-400 font-semibold mb-0.5`}>Fähigkeiten</div>
          {stats.abilities.map((a, i) => (
            <p key={i} className={`${sectionTextCls} text-gray-400 leading-tight mb-0.5`}>
              {formatEntry(a)}
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
  act: 1 | 2
  onClose: () => void
}

function MonsterLightbox({ monster, imgUrl, act, onClose }: LightboxProps) {
  const [imgError, setImgError] = useState(false)
  const normalStats = getActStats(monster, act, 'normal')
  const masterStats = getActStats(monster, act, 'master')
  const noAct2Data = act === 2 && !monster.act2Normal && !monster.act2Master

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
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

        {noAct2Data && (
          <div className="mx-4 mt-3 px-3 py-2 bg-dungeon-800 border border-dungeon-600 rounded text-xs text-gray-500">
            Akt-2-Werte für dieses Monster noch nicht erfasst.
          </div>
        )}

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
            {normalStats && (
              <StatBlock stats={normalStats} label="Normal" compact={false} />
            )}
            {masterStats && (
              <StatBlock stats={masterStats} label="Elite" isElite compact={false} />
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
  const [act, setAct] = useState<1 | 2>(1)
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set())
  const [lightboxMonster, setLightboxMonster] = useState<Monster | null>(null)
  const [selectedTraits, setSelectedTraits] = useState<Set<string>>(new Set())

  const expansionMap = useMemo(
    () => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])),
    [],
  )

  // Owned-filtered pool (before trait filter) — used to derive available trait chips
  const ownedFiltered = useMemo(() => {
    return MONSTERS.filter((m) => {
      if (onlyOwned && !ownedIds.includes(m.expansionId)) return false
      return true
    })
  }, [onlyOwned, ownedIds])

  // All traits that appear in the owned pool, sorted
  const availableTraits = useMemo(() => {
    const traitSet = new Set<string>()
    for (const m of ownedFiltered) {
      if (m.traits) {
        for (const t of m.traits) {
          traitSet.add(t)
        }
      }
    }
    return Array.from(traitSet).sort()
  }, [ownedFiltered])

  const filtered = useMemo(() => {
    return ownedFiltered.filter((m) => {
      if (search) {
        const q = search.toLowerCase()
        if (!m.nameDe.toLowerCase().includes(q) && !m.nameEn.toLowerCase().includes(q)) return false
      }
      if (selectedTraits.size > 0) {
        if (!m.traits || !m.traits.some((t) => selectedTraits.has(t))) return false
      }
      return true
    })
  }, [ownedFiltered, search, selectedTraits])

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

  const handleActChange = (newAct: 1 | 2) => {
    setAct(newAct)
    setImgErrors(new Set())
  }

  const toggleTrait = (trait: string) => {
    setSelectedTraits((prev) => {
      const next = new Set(prev)
      if (next.has(trait)) {
        next.delete(trait)
      } else {
        next.add(trait)
      }
      return next
    })
  }

  return (
    <div className="space-y-6">
      {lightboxMonster && (
        <MonsterLightbox
          monster={lightboxMonster}
          imgUrl={monsterImageUrl(lightboxMonster.id, lightboxMonster.expansionId, act)}
          act={act}
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

        {/* Act toggle */}
        <div className="flex items-center gap-0 rounded overflow-hidden border border-dungeon-600 ml-auto sm:ml-0">
          <button
            onClick={() => handleActChange(1)}
            className={`px-3 py-1.5 text-sm font-medium transition-colors ${
              act === 1
                ? 'bg-gold-700 text-gray-900'
                : 'bg-dungeon-800 text-gray-400 hover:bg-dungeon-700 hover:text-gray-200'
            }`}
          >
            Akt 1
          </button>
          <button
            onClick={() => handleActChange(2)}
            className={`px-3 py-1.5 text-sm font-medium transition-colors ${
              act === 2
                ? 'bg-gold-700 text-gray-900'
                : 'bg-dungeon-800 text-gray-400 hover:bg-dungeon-700 hover:text-gray-200'
            }`}
          >
            Akt 2
          </button>
        </div>
      </div>

      {availableTraits.length > 0 && (
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Typ-Filter</span>
            {selectedTraits.size > 0 && (
              <button
                onClick={() => setSelectedTraits(new Set())}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                ✕ Alle
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {availableTraits.map((trait) => {
              const isSelected = selectedTraits.has(trait)
              return (
                <button
                  key={trait}
                  onClick={() => toggleTrait(trait)}
                  className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
                    isSelected
                      ? 'bg-dungeon-700 border border-yellow-500'
                      : 'bg-dungeon-800 border border-dungeon-600 hover:border-dungeon-500'
                  }`}
                >
                  <span className="text-gray-300 text-xs">{trait}</span>
                  <TraitIcon trait={trait} size={14} />
                </button>
              )
            })}
          </div>
        </div>
      )}

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
                    const imgUrl = monsterImageUrl(m.id, m.expansionId, act)
                    const hasImg = !imgErrors.has(m.id)
                    const normalStats = getActStats(m, act, 'normal')
                    const masterStats = getActStats(m, act, 'master')
                    const missingAct2 = act === 2 && !m.act2Normal && !m.act2Master
                    return (
                      <div key={m.id} className={`card hover:border-gold-700 transition-colors ${missingAct2 ? 'opacity-60' : ''}`}>
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
                            <div className="mb-1 flex items-start justify-between gap-1">
                              <div>
                                <p className="text-gray-100 font-semibold text-sm leading-tight">{m.nameDe}</p>
                                <p className="text-gray-500 text-xs">{m.nameEn}</p>
                              </div>
                              {missingAct2 && (
                                <span className="text-[10px] text-gray-600 border border-dungeon-600 rounded px-1 py-0.5 shrink-0">Akt 2 folgt</span>
                              )}
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
                              {normalStats && <StatBlock stats={normalStats} label="Normal" compact />}
                              {masterStats && <StatBlock stats={masterStats} label="Elite" isElite compact />}
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
