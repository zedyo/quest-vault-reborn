import { useState, useMemo } from 'react'
import { MONSTERS } from '../data/monsters'
import { EXPANSIONS } from '../data/expansions'
import { monsterCardDeUrl } from '../data/assetUrls'
import { useGameStore } from '../store/useGameStore'
import { DicePip } from '../components/DiceDisplay'
import { SurgeSymbol, ActionSymbol, MovementBadge, DefenseBadge, renderGameTextInline } from '../components/GameSymbols'
import { HealthIcon, AttackIcon } from '../components/StatIcons'
import ModalOverlay from '../components/ModalOverlay'
import ErrataBox, { ErrataEntryBody } from '../components/ErrataBox'
import { getErrata, getMonsterAbilityErrata, MONSTER_ABILITY_ERRATA } from '../data/errataLinks'
import { CRRG_SOURCE } from '../data/ruleClarifications'
import { SearchInput, OwnedToggle, SegmentedControl } from '../components/Filters'
import type { Monster, MonsterStats, MonsterGroupSizes, GroupComposition } from '../types/game'

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

/**
 * Format an ability/surge/action entry:
 * - Optionally strip a leading "Schub: " prefix (for surge entries)
 * - If text contains "Name: description", render Name: in bold
 * - Ersetzt Herz/Schub/Erschöpfung durch die Kartensymbole ❤/⚡/💧 (inline,
 *   ohne Satzumbruch — jeder Eintrag ist bereits eine eigene Zeile)
 */
function formatEntry(text: string, stripSchub = false): React.ReactNode {
  const s = stripSchub ? text.replace(/^Schub:\s*/i, '') : text
  const colonIdx = s.indexOf(':')
  if (colonIdx === -1) return renderGameTextInline(s, 12)
  const name = s.slice(0, colonIdx + 1)
  const rest = s.slice(colonIdx + 1)
  return <><strong className="text-gray-300 font-semibold">{name}</strong>{renderGameTextInline(rest, 12)}</>
}

// Stat-Icons (HealthIcon/AttackIcon) liegen zentral in ../components/StatIcons;
// SurgeSymbol & ActionSymbol in ../components/GameSymbols.

// ── TraitIcon ─────────────────────────────────────────────────────────────────

const TRAIT_ICON_DATA: Record<string, { bg: string; content: React.ReactNode }> = {
  // Wildnis (Wilderness) — pine tree
  'Wildnis': {
    bg: '#14532d',
    content: (
      <>
        <polygon points="12,3 6.5,11 9.5,11 5.5,17 18.5,17 14.5,11 17.5,11" fill="white"/>
        <rect x="10.7" y="17" width="2.6" height="4" fill="white"/>
      </>
    ),
  },
  // Dunkel (Dark) — waxing crescent
  'Dunkel': {
    bg: '#1e3a5f',
    content: (
      <path
        d="M 14 3 C 8 3 3 7.1 3 12 C 3 16.9 8 21 14 21 C 10 19 8 15.8 8 12 C 8 8.2 10 5 14 3 Z"
        fill="white"
      />
    ),
  },
  // Höhle (Cave) — cave mouth in rock
  'Höhle': {
    bg: '#44403c',
    content: (
      <>
        <path d="M 3 20 L 3 13 C 3 6 8 3 12 3 C 16 3 21 6 21 13 L 21 20 Z" fill="white"/>
        <path d="M 8 20 L 8 14 C 8 10 9.8 8 12 8 C 14.2 8 16 10 16 14 L 16 20 Z" fill="#44403c"/>
      </>
    ),
  },
  // Heiß (Hot) — flame
  'Heiß': {
    bg: '#c2410c',
    content: (
      <>
        <path d="M 12 2 C 16.5 5 18.5 9 17.5 13 C 16.5 17.5 14 20 12 21 C 10 20 7.5 17.5 6.5 13 C 5.5 9 7.5 5 12 2 Z" fill="white"/>
        <path d="M 12 10 C 14 12 14 15 13 17 C 12.5 18.5 12 20 12 21 C 11 20 10 18.5 9.5 17 C 9 15 9 12 12 10 Z" fill="#c2410c"/>
      </>
    ),
  },
  // Kalt (Cold) — six-point snowflake
  'Kalt': {
    bg: '#155e75',
    content: (
      <>
        <line x1="12" y1="2.5" x2="12" y2="21.5" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
        <line x1="3.8" y1="7.25" x2="20.2" y2="16.75" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
        <line x1="20.2" y1="7.25" x2="3.8" y2="16.75" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
        <g stroke="white" strokeWidth="1.6" strokeLinecap="round">
          <line x1="12" y1="6.5" x2="9.4" y2="4.6"/><line x1="12" y1="6.5" x2="14.6" y2="4.6"/>
          <line x1="12" y1="17.5" x2="9.4" y2="19.4"/><line x1="12" y1="17.5" x2="14.6" y2="19.4"/>
        </g>
      </>
    ),
  },
  // Gebirge (Mountain) — twin rocky peaks with snow caps
  'Gebirge': {
    bg: '#4b5563',
    content: (
      <>
        <polygon points="2,20 9,6 13,13 16,9 22,20" fill="white"/>
        <polygon points="7.6,9 9,6 10.6,9 9.6,9.8 8.4,9.8" fill="#4b5563"/>
        <polygon points="14.7,11 16,9 17.3,11 16.5,11.6 15.5,11.6" fill="#4b5563"/>
      </>
    ),
  },
  // Verflucht (Cursed) — skull
  'Verflucht': {
    bg: '#374151',
    content: (
      <>
        <ellipse cx="12" cy="10.5" rx="7.5" ry="7" fill="white"/>
        <circle cx="9" cy="10.5" r="2.4" fill="#374151"/>
        <circle cx="15" cy="10.5" r="2.4" fill="#374151"/>
        <polygon points="12,13 10.8,15.5 13.2,15.5" fill="#374151"/>
        <rect x="7.5" y="16" width="9" height="4.5" rx="1" fill="white"/>
        <rect x="10" y="16" width="1.4" height="4.5" fill="#374151"/>
        <rect x="12.6" y="16" width="1.4" height="4.5" fill="#374151"/>
      </>
    ),
  },
  // Zivilisiert (Civilized) — classical temple
  'Zivilisiert': {
    bg: '#57534e',
    content: (
      <>
        <polygon points="12,3 21.5,9 2.5,9" fill="white"/>
        <rect x="4" y="9.5" width="16" height="2" fill="white"/>
        <rect x="5" y="11.8" width="2.1" height="7" fill="white"/>
        <rect x="8.8" y="11.8" width="2.1" height="7" fill="white"/>
        <rect x="13.1" y="11.8" width="2.1" height="7" fill="white"/>
        <rect x="16.9" y="11.8" width="2.1" height="7" fill="white"/>
        <rect x="3" y="18.8" width="18" height="2.4" fill="white"/>
      </>
    ),
  },
  // Gebäude (Building) — crumbling tower wall
  'Gebäude': {
    bg: '#78716c',
    content: (
      <>
        {/* broken battlement wall */}
        <path d="M 4 21 L 4 8 L 7 8 L 7 5 L 10 5 L 10 8 L 13 8 L 13 4 L 16 4 L 16 9 L 20 9 L 20 21 Z" fill="white"/>
        {/* arched doorway */}
        <path d="M 9 21 L 9 15 C 9 13 10 12 11.5 12 C 13 12 14 13 14 15 L 14 21 Z" fill="#78716c"/>
        {/* crack */}
        <line x1="17.5" y1="11" x2="17.5" y2="21" stroke="#78716c" strokeWidth="1"/>
      </>
    ),
  },
  // Wasser (Water) — water droplet with wave
  'Wasser': {
    bg: '#1d4ed8',
    content: (
      <>
        <path d="M 12 2.5 C 12 2.5 18.5 10.5 18.5 15 C 18.5 18.9 15.6 21.5 12 21.5 C 8.4 21.5 5.5 18.9 5.5 15 C 5.5 10.5 12 2.5 12 2.5 Z" fill="white"/>
        <path d="M 9 15.5 C 10 14 11 17 12 15.5 C 13 14 14 17 15 15.5" stroke="#1d4ed8" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
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
          <MovementBadge size={iconSize} circle="#15552c" />Bewegung
        </span>
        <span className={`text-gray-200 font-medium ${textCls}`}>{stats.speed}</span>

        <span className={`flex items-center gap-1 text-gray-500 ${textCls}`}>
          <HealthIcon size={iconSize} />Leben
        </span>
        <span className={`text-gray-200 font-medium ${textCls}`}>{stats.health}</span>

        <span className={`flex items-center gap-1 text-gray-500 ${textCls}`}>
          <DefenseBadge size={iconSize} circle="#1f6fb2" />Verteid.
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

// ── GroupSizeBlock ───────────────────────────────────────────────────────────

/**
 * Zeigt die Gruppenzusammensetzung pro Spielerzahl (2/3/4 Helden) als
 * Diener + Meister. Werte stammen von den offiziellen Kartenrückseiten.
 */
function GroupSizeBlock({ groupSizes, compact = true }: { groupSizes: MonsterGroupSizes; compact?: boolean }) {
  const headerCls = compact ? 'text-[10px]' : 'text-xs'
  const valueCls = compact ? 'text-xs' : 'text-sm'
  const cols: { label: string; comp: GroupComposition }[] = [
    { label: '2', comp: groupSizes.p2 },
    { label: '3', comp: groupSizes.p3 },
    { label: '4', comp: groupSizes.p4 },
  ]
  return (
    <div className="mt-2 rounded bg-dungeon-800/50 p-2">
      <div className={`${headerCls} font-semibold text-gray-400 mb-1`}>
        Gruppengröße <span className="text-gray-600 font-normal">· Figuren je Spielerzahl</span>
      </div>
      <div className="flex gap-1.5">
        {cols.map(({ label, comp }) => (
          <div key={label} className="flex-1 rounded bg-dungeon-900/60 px-1.5 py-1 text-center">
            <div className={`${headerCls} text-gray-500`}>{label} Sp.</div>
            <div className={`${valueCls} font-medium`}>
              <span className="text-gray-200" title="Diener">{comp[0]}</span>
              <span className="text-gray-600"> + </span>
              <span className="text-gold-400" title="Meister">{comp[1]}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={`${headerCls} text-gray-600 mt-1`}>
        <span className="text-gray-300">Diener</span> + <span className="text-gold-500">Meister</span>
      </div>
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
    <ModalOverlay
      onClose={onClose}
      ariaLabel={monster.nameDe}
      className="bg-dungeon-900 border border-dungeon-600 rounded-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      style={{ maxWidth: 740 }}
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
            {monster.groupSizes && (
              <GroupSizeBlock groupSizes={monster.groupSizes} compact={false} />
            )}
          </div>
        </div>

        <div className="px-4 pb-4 space-y-2">
          <ErrataBox entries={getErrata('monster', monster.id)} />
          <ErrataBox
            entries={getMonsterAbilityErrata(monster.id)}
            showEntryNames
            title="Fähigkeiten – Errata & FAQ"
          />
        </div>
    </ModalOverlay>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

/**
 * Sammel-Panel aller Monsterfähigkeiten-Errata/FAQ (CRRG). Monsterfähigkeiten
 * sind Schlagwörter ohne eigene Karte – hier sind sie im Monster-Bereich
 * durchsuchbar gebündelt (zusätzlich erscheinen sie am jeweiligen Monster).
 */
function AbilityErrataPanel({ search }: { search: string }) {
  const q = search.trim().toLowerCase().replace(/ß/g, 'ss')
  const list = useMemo(() => {
    if (!q) return MONSTER_ABILITY_ERRATA
    return MONSTER_ABILITY_ERRATA.filter((e) => {
      if (e.nameDe.toLowerCase().replace(/ß/g, 'ss').includes(q)) return true
      return e.groups.some((g) => g.points.some((p) => p.toLowerCase().replace(/ß/g, 'ss').includes(q)))
    })
  }, [q])
  if (!list.length) return null
  return (
    <details className="group rounded border border-amber-800/40 bg-amber-950/15 open:bg-amber-950/25">
      <summary className="cursor-pointer select-none list-none marker:content-none [&::-webkit-details-marker]:hidden flex items-center gap-1.5 px-3 py-2 text-xs hover:bg-amber-900/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500">
        <span aria-hidden>📖</span>
        <span className="font-semibold text-amber-300/90 uppercase tracking-wide">Monsterfähigkeiten – Errata &amp; FAQ</span>
        <span className="text-amber-400/70">({list.length})</span>
        <span className="text-gray-500 normal-case tracking-normal">· CRRG V1.15</span>
        <span className="ml-auto text-gray-500 text-[9px] transition-transform group-open:rotate-180" aria-hidden>▾</span>
      </summary>
      <div className="px-3 pb-3 pt-1 border-t border-amber-900/30">
        <p className="text-[11px] text-gray-500 mb-2">
          Fähigkeits-Schlagwörter (Feuerodem, Durchbohren, Netz …). Am jeweiligen Monster erscheinen zusätzlich nur die dort vorhandenen Fähigkeiten.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 items-start">
          {list.map((e) => (
            <div key={e.id} className="rounded bg-dungeon-900/40 border border-dungeon-700 p-2 space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-gray-100 font-semibold text-sm">{e.nameDe}</span>
                <span className="text-[10px] text-gray-600">S. {e.page}</span>
              </div>
              <ErrataEntryBody entry={e} />
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-600 italic mt-2">Quelle: {CRRG_SOURCE}</p>
      </div>
    </details>
  )
}

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
          imgUrl={monsterCardDeUrl(lightboxMonster.id, act)}
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
        <SearchInput value={search} onChange={setSearch} placeholder="Suche nach Name…" />
        <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />

        {/* Act toggle */}
        <SegmentedControl<1 | 2>
          className="ml-auto sm:ml-0"
          value={act}
          onChange={handleActChange}
          options={[
            { value: 1, label: 'Akt 1' },
            { value: 2, label: 'Akt 2' },
          ]}
        />
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

      <AbilityErrataPanel search={search} />

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
                    const imgUrl = monsterCardDeUrl(m.id, act)
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
                            {m.groupSizes && <GroupSizeBlock groupSizes={m.groupSizes} />}
                            <ErrataBox entries={getErrata('monster', m.id)} />
                            <ErrataBox
                              entries={getMonsterAbilityErrata(m.id)}
                              showEntryNames
                              title="Fähigkeiten – Errata & FAQ"
                            />
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
