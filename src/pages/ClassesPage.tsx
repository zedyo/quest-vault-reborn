import { useState, useMemo } from 'react'
import { HERO_CLASSES } from '../data/heroClasses'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import { renderGameText } from '../components/GameSymbols'
import type { HeroClass, ClassSkill, HeroArchetype } from '../types/game'

const ARCHETYPE_DE: Record<HeroArchetype, string> = {
  krieger: 'Krieger',
  heiler: 'Heiler',
  magier: 'Magier',
  spaeher: 'Späher',
}

const ARCHETYPE_ORDER: HeroArchetype[] = ['krieger', 'heiler', 'magier', 'spaeher']

function XpBadge({ xp }: { xp: number | 'elemental' }) {
  if (xp === 0) {
    return (
      <span className="text-[10px] font-semibold uppercase tracking-wide bg-emerald-900/60 text-emerald-300 px-1.5 py-0.5 rounded shrink-0">
        Start
      </span>
    )
  }
  if (xp === 'elemental') {
    return (
      <span className="text-[10px] font-semibold bg-blue-900/50 text-blue-300 px-1.5 py-0.5 rounded shrink-0">
        Elemental
      </span>
    )
  }
  return (
    <span className="text-[10px] font-semibold bg-gold-900/50 text-gold-300 px-1.5 py-0.5 rounded shrink-0">
      {xp} XP
    </span>
  )
}

function SkillRow({ skill, lang }: { skill: ClassSkill; lang: 'de' | 'en' }) {
  const name = lang === 'de' ? skill.nameDe : skill.nameEn
  const rules = lang === 'de' ? skill.rulesDe : skill.rulesEn
  return (
    <div className="py-2 border-t border-dungeon-700/70 first:border-t-0">
      <div className="flex items-center gap-2 mb-0.5">
        <XpBadge xp={skill.xpCost} />
        <span className="text-sm font-semibold text-gray-200">{name}</span>
        <span className="text-[10px] text-gray-500 ml-auto shrink-0" title="Ausdauer-Kosten">
          Ausdauer: {skill.fatigueCost}
        </span>
      </div>
      <div className="text-xs text-gray-400 leading-snug space-y-0.5">{renderGameText(rules, 12)}</div>
    </div>
  )
}

function FamiliarBlock({ cls, lang }: { cls: HeroClass; lang: 'de' | 'en' }) {
  const f = cls.familiar
  if (!f) return null
  const name = lang === 'de' ? f.nameDe : f.nameEn
  const rules = lang === 'de' ? f.rulesDe : f.rulesEn
  return (
    <div className="mt-2 rounded bg-purple-950/20 border border-purple-900/40 p-2">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-purple-300 mb-1">
        Begleiter: {name}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-gray-400 mb-1">
        {f.speed != null && <span>Bewegung: <span className="text-gray-200">{f.speed}</span></span>}
        {f.health != null && <span>Leben: <span className="text-gray-200">{f.health}</span></span>}
        {f.attackType && <span>Angriff: <span className="text-gray-200">{f.attackType}</span></span>}
      </div>
      <div className="text-xs text-gray-400 leading-snug space-y-0.5">{renderGameText(rules, 12)}</div>
    </div>
  )
}

function ClassCard({ cls, lang }: { cls: HeroClass; lang: 'de' | 'en' }) {
  const skills = useMemo(() => {
    const xpVal = (x: number | 'elemental') => (x === 'elemental' ? 99 : x)
    return [...cls.skills].sort(
      (a, b) => xpVal(a.xpCost) - xpVal(b.xpCost) || a.nameDe.localeCompare(b.nameDe),
    )
  }, [cls.skills])
  return (
    <div className="card">
      <div className="mb-2">
        <h4 className="text-gray-100 font-semibold">{lang === 'de' ? cls.nameDe : cls.nameEn}</h4>
        <p className="text-gray-500 text-xs">{lang === 'de' ? cls.nameEn : cls.nameDe}</p>
      </div>
      <div>
        {skills.map((s) => (
          <SkillRow key={s.id} skill={s} lang={lang} />
        ))}
      </div>
      <FamiliarBlock cls={cls} lang={lang} />
    </div>
  )
}

export default function ClassesPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [search, setSearch] = useState('')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [lang, setLang] = useState<'de' | 'en'>('de')

  const expansionMap = useMemo(
    () => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])),
    [],
  )

  const filtered = useMemo(() => {
    return HERO_CLASSES.filter((c) => {
      if (onlyOwned && !ownedIds.includes(c.expansionId)) return false
      if (search) {
        const q = search.toLowerCase()
        if (!c.nameDe.toLowerCase().includes(q) && !c.nameEn.toLowerCase().includes(q)) return false
      }
      return true
    })
  }, [onlyOwned, ownedIds, search])

  const byArchetype = useMemo(() => {
    const map = new Map<HeroArchetype, HeroClass[]>()
    for (const c of filtered) {
      const arr = map.get(c.archetype) ?? []
      arr.push(c)
      map.set(c.archetype, arr)
    }
    return map
  }, [filtered])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Helden-Klassen</h2>
        <p className="text-gray-400 text-sm">
          {filtered.length} Klassen {onlyOwned ? 'in deiner Sammlung' : 'insgesamt'} · Fähigkeitskarten mit XP-Kosten
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search"
          placeholder="Klasse suchen…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-dungeon-800 border border-dungeon-700 text-gray-100 rounded px-3 py-2 text-sm w-56 focus:outline-none focus:border-gold-500"
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

        {/* Sprach-Umschalter */}
        <div className="flex items-center gap-0 rounded overflow-hidden border border-dungeon-600 ml-auto">
          {(['de', 'en'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                lang === l
                  ? 'bg-gold-700 text-gray-900'
                  : 'bg-dungeon-800 text-gray-400 hover:bg-dungeon-700 hover:text-gray-200'
              }`}
            >
              {l === 'de' ? 'Deutsch' : 'English'}
            </button>
          ))}
        </div>
      </div>

      {lang === 'de' && (
        <p className="text-[11px] text-gray-600 -mt-3">
          Deutsche Kartentexte sind Community-Übersetzungen (nicht zwingend offizieller FFG-Wortlaut). Original via „English".
        </p>
      )}

      {byArchetype.size === 0 ? (
        <div className="card text-center text-gray-500 py-12">
          Keine Klassen gefunden. Passe deine Suche oder Sammlung an.
        </div>
      ) : (
        <div className="space-y-8">
          {ARCHETYPE_ORDER.filter((a) => byArchetype.has(a)).map((arch) => {
            const classes = byArchetype.get(arch)!
            return (
              <div key={arch}>
                <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
                  {ARCHETYPE_DE[arch]}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {classes.map((c) => {
                    const exp = expansionMap[c.expansionId]
                    return (
                      <div key={c.id}>
                        <div className="text-[11px] text-gray-600 mb-1">{exp?.nameDe ?? c.expansionId}</div>
                        <ClassCard cls={c} lang={lang} />
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
