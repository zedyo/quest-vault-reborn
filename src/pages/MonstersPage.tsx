import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MONSTERS } from '../data/monsters'
import { EXPANSIONS } from '../data/expansions'
import { monsterCardDeUrl } from '../data/assetUrls'
import { useGameStore } from '../store/useGameStore'
import { DicePip } from '../components/DiceDisplay'
import { SurgeSymbol, ActionSymbol, renderGameTextInline } from '../components/GameSymbols'
import { HealthIcon, SpeedIcon, DefenseStatIcon, AttackTypeIcon } from '../components/StatIcons'
import TraitIcon from '../components/TraitIcon'
import ModalOverlay from '../components/ModalOverlay'
import ErrataBox, { ErrataEntryBody } from '../components/ErrataBox'
import { getErrata, getMonsterAbilityErrata, MONSTER_ABILITY_ERRATA } from '../data/errataLinks'
import { CRRG_SOURCE } from '../data/ruleClarifications'
import { SearchInput, OwnedToggle, SegmentedControl, SourceFilter, matchesSource, type Source } from '../components/Filters'
import type { Monster, MonsterStats, MonsterGroupSizes, GroupComposition, AttackType } from '../types/game'

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

// Stat-Icons (HealthIcon/SpeedIcon/DefenseStatIcon/AttackTypeIcon) liegen zentral in ../components/StatIcons;
// SurgeSymbol & ActionSymbol in ../components/GameSymbols.
// TraitIcon (Monster-Eigenschaften) liegt zentral in ../components/TraitIcon.

// ── StatBlock ────────────────────────────────────────────────────────────────

interface StatBlockProps {
  stats: MonsterStats
  label: string
  isElite?: boolean
  /** Angriffsart der Gruppe – als Icon hinter den Angriffswürfeln (Nahkampf/Fernkampf) */
  attackType?: AttackType
  /** compact=true uses smaller sizes (for grid cards); false uses lightbox sizes */
  compact?: boolean
}

function StatBlock({ stats, label, isElite, attackType, compact = true }: StatBlockProps) {
  const textCls = compact ? 'text-xs' : 'text-sm'
  const sectionHeaderCls = compact ? 'text-[10px]' : 'text-xs'
  const sectionTextCls = compact ? 'text-[10px]' : 'text-xs'
  const iconSize = compact ? 14 : 16
  // Kompakte Grid-Karten: Wort-Labels erst ab sm einblenden (Mobil nur Icons).
  const labelCls = compact ? 'hidden sm:inline' : 'inline'

  return (
    <div className={`rounded p-2 flex-1 min-w-0 ${isElite ? 'bg-yellow-950/40 border border-yellow-800/30' : 'bg-dungeon-800/50'}`}>
      <div className={`${textCls} font-semibold mb-1.5 ${isElite ? 'text-gold-400' : 'text-gray-400'}`}>
        {label}
      </div>
      {/* CSS grid: label column auto-sizes to widest label so all word labels align.
          In der kompakten Grid-Ansicht (Mobil) werden die Wort-Labels ausgeblendet
          (nur Icons) – so überlaufen die Angriffswürfel den Kartenrand nicht mehr. */}
      <div className="grid gap-y-1 items-center" style={{ gridTemplateColumns: 'auto 1fr', columnGap: 6 }}>
        <span className={`flex items-center gap-1 text-gray-500 ${textCls}`}>
          <SpeedIcon size={iconSize} /><span className={labelCls}>Bewegung</span>
        </span>
        <span className={`text-gray-200 font-medium ${textCls}`}>{stats.speed}</span>

        <span className={`flex items-center gap-1 text-gray-500 ${textCls}`}>
          <HealthIcon size={iconSize} /><span className={labelCls}>Leben</span>
        </span>
        <span className={`text-gray-200 font-medium ${textCls}`}>{stats.health}</span>

        <span className={`flex items-center gap-1 text-gray-500 ${textCls}`}>
          <DefenseStatIcon size={iconSize} /><span className={labelCls}>Verteid.</span>
        </span>
        <div className="flex gap-0.5 flex-wrap">
          {stats.defense.map((d, i) => <DicePip key={i} color={d} />)}
        </div>

        {/* Angriffszeile: das Zeilen-Icon selbst zeigt die Angriffsart (Axt/Bogen) */}
        <span
          className={`flex items-center gap-1 text-gray-500 ${textCls}`}
          title={attackType === 'range' ? 'Fernkampf' : 'Nahkampf'}
        >
          <AttackTypeIcon type={attackType} size={iconSize} /><span className={labelCls}>Angriff</span>
        </span>
        <div className="flex items-center gap-0.5 flex-wrap">
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
              <StatBlock stats={normalStats} label="Diener" attackType={monster.attackType} compact={false} />
            )}
            {masterStats && (
              <StatBlock stats={masterStats} label="Meister" isElite attackType={monster.attackType} compact={false} />
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
    <details className="group rounded border border-accent-line bg-accent-soft">
      <summary className="cursor-pointer select-none list-none marker:content-none [&::-webkit-details-marker]:hidden flex items-center gap-1.5 px-3 py-2 text-xs hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">
        <span aria-hidden>📖</span>
        <span className="font-semibold text-gold-400 uppercase tracking-wide">Monsterfähigkeiten – Errata &amp; FAQ</span>
        <span className="text-gold-300">({list.length})</span>
        <span className="text-faint normal-case tracking-normal">· CRRG V1.15</span>
        <span className="ml-auto text-faint text-[9px] transition-transform group-open:rotate-180" aria-hidden>▾</span>
      </summary>
      <div className="px-3 pb-3 pt-1 border-t border-accent-line">
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
  // Deep-Link: `/monster?q=<Name>` filtert direkt auf das gesuchte Monster
  // (z. B. aus dem „Monster des Tages"-Widget auf dem Dashboard).
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState(() => searchParams.get('q') ?? '')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [act, setAct] = useState<1 | 2>(1)
  const [source, setSource] = useState<Source>('all')
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
      if (!matchesSource(source, m.expansionId)) return false
      return true
    })
  }, [onlyOwned, ownedIds, source])

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
        <SourceFilter value={source} onChange={setSource} />

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
                  {/* groß + negative Vertikal-Margin: füllt den Chip, ohne ihn zu vergrößern */}
                  <TraitIcon trait={trait} size={20} className="-my-1" />
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
                              {normalStats && <StatBlock stats={normalStats} label="Diener" attackType={m.attackType} compact />}
                              {masterStats && <StatBlock stats={masterStats} label="Meister" isElite attackType={m.attackType} compact />}
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
