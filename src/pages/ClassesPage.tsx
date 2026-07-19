import { useState, useMemo } from 'react'
import { HERO_CLASSES } from '../data/heroClasses'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import { renderGameText } from '../components/GameSymbols'
import { SearchInput, OwnedToggle, LangToggle } from '../components/Filters'
import { ArchetypeIcon } from '../components/ArchetypeIcon'
import ModalOverlay from '../components/ModalOverlay'
import ErrataBox from '../components/ErrataBox'
import { getErrata } from '../data/errataLinks'
import { classItemDeUrl, classFamiliarDeUrl, classSkillDeUrl } from '../data/assetUrls'
import type { HeroClass, ClassSkill, HeroArchetype } from '../types/game'

const ARCHETYPE_DE: Record<HeroArchetype, string> = {
  krieger: 'Krieger',
  heiler: 'Heiler',
  magier: 'Magier',
  spaeher: 'Kundschafter',
}

const ARCHETYPE_ORDER: HeroArchetype[] = ['krieger', 'heiler', 'magier', 'spaeher']

// Aktiv-Optik der Archetyp-Filter-Buttons (analog HeroesPage).
const ARCHETYPE_ACTIVE: Record<HeroArchetype, string> = {
  krieger: 'bg-red-800 text-red-100 border-red-700',
  heiler: 'bg-blue-800 text-blue-100 border-blue-700',
  magier: 'bg-yellow-800 text-yellow-100 border-yellow-700',
  spaeher: 'bg-green-800 text-green-100 border-green-700',
}

// ── Kartenbild-Vorschau + Lightbox ──────────────────────────────────────────

interface LightboxState { srcs: string[]; name: string }

// Bevorzugt das deutsche Original-Kartenbild; fällt bei Ladefehler auf das
// englische any2cards-Bild zurück, sonst wird die Vorschau ausgeblendet.
function CardThumb({ srcs, name, onOpen }: { srcs: string[]; name: string; onOpen: () => void }) {
  const [idx, setIdx] = useState(0)
  const src = srcs[idx]
  if (!src) return null
  return (
    <button
      type="button"
      className="shrink-0 w-14 self-start flex items-start rounded overflow-hidden border border-dungeon-700 hover:border-gold-500 transition-colors focus:outline-none focus:border-gold-400"
      onClick={(e) => { e.stopPropagation(); onOpen() }}
      title="Karte vergrößern"
    >
      <img src={src} alt={name} className="w-full h-auto" onError={() => setIdx((i) => i + 1)} loading="lazy" />
    </button>
  )
}

// Bild im Lightbox mit demselben Fallback (DE → EN).
function LightboxImg({ srcs, name }: { srcs: string[]; name: string }) {
  const [idx, setIdx] = useState(0)
  const src = srcs[idx]
  if (!src) return null
  return (
    <img src={src} alt={name} onError={() => setIdx((i) => i + 1)} className="w-full rounded-lg shadow-2xl border border-dungeon-600" />
  )
}

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
    <span className="text-[10px] font-semibold bg-accent-soft text-gold-300 px-1.5 py-0.5 rounded shrink-0">
      {xp} XP
    </span>
  )
}

function SkillRow({ skill, classId, lang, onImageOpen }: { skill: ClassSkill; classId: string; lang: 'de' | 'en'; onImageOpen: (l: LightboxState) => void }) {
  const name = lang === 'de' ? skill.nameDe : skill.nameEn
  const rules = lang === 'de' ? skill.rulesDe : skill.rulesEn
  const srcs = [classSkillDeUrl(classId, skill.id), skill.imageUrl].filter(Boolean) as string[]
  return (
    <div className="py-2 border-t border-dungeon-700/70 first:border-t-0">
      <div className="flex gap-2">
        {srcs.length ? <CardThumb srcs={srcs} name={name} onOpen={() => onImageOpen({ srcs, name })} /> : null}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <XpBadge xp={skill.xpCost} />
            <span className="text-sm font-semibold text-gray-200">{name}</span>
            <span className="text-[10px] text-gray-500 ml-auto shrink-0" title="Ausdauer-Kosten">
              Ausdauer: {skill.fatigueCost}
            </span>
          </div>
          <div className="text-xs text-gray-400 leading-snug space-y-0.5">{renderGameText(rules, 12)}</div>
        </div>
      </div>
    </div>
  )
}

function FamiliarBlock({ cls, lang, onImageOpen }: { cls: HeroClass; lang: 'de' | 'en'; onImageOpen: (l: LightboxState) => void }) {
  const f = cls.familiar
  if (!f) return null
  const name = lang === 'de' ? f.nameDe : f.nameEn
  const rules = lang === 'de' ? f.rulesDe : f.rulesEn
  return (
    <div className="mb-2 rounded bg-purple-950/20 border border-purple-900/40 p-2">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-purple-300 mb-1">
        Begleiter: {name}
      </div>
      <div className="flex gap-2">
        {(() => {
          const srcs = [classFamiliarDeUrl(cls.id), f.imageUrl].filter(Boolean) as string[]
          return srcs.length ? <CardThumb srcs={srcs} name={name} onOpen={() => onImageOpen({ srcs, name })} /> : null
        })()}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-gray-400 mb-1">
            {f.speed != null && <span>Bewegung: <span className="text-gray-200">{f.speed}</span></span>}
            {f.health != null && <span>Leben: <span className="text-gray-200">{f.health}</span></span>}
            {f.attackType && <span>Angriff: <span className="text-gray-200">{f.attackType}</span></span>}
          </div>
          <div className="text-xs text-gray-400 leading-snug space-y-0.5">{renderGameText(rules, 12)}</div>
        </div>
      </div>
    </div>
  )
}

function StartingEquipmentBlock({ cls, lang, onImageOpen }: { cls: HeroClass; lang: 'de' | 'en'; onImageOpen: (l: LightboxState) => void }) {
  const items = cls.startingEquipment
  if (!items || items.length === 0) return null
  return (
    <div className="mb-2 rounded bg-amber-950/20 border border-amber-900/40 p-2">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-amber-300 mb-1">
        Startausrüstung
      </div>
      <div className="space-y-2">
        {items.map((it) => {
          const name = lang === 'en' && it.nameEn ? it.nameEn : it.nameDe
          const rules = lang === 'en' && it.rulesEn ? it.rulesEn : it.rulesDe
          return (
            <div key={it.id} className="flex gap-2">
              {(() => {
                const srcs = [classItemDeUrl(it.id), it.imageUrl].filter(Boolean) as string[]
                return srcs.length ? <CardThumb srcs={srcs} name={name} onOpen={() => onImageOpen({ srcs, name })} /> : null
              })()}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-semibold text-gray-200">{name}</span>
                  {it.type && <span className="text-[10px] text-gray-500">{it.type}</span>}
                </div>
                <div className="text-xs text-gray-400 leading-snug space-y-0.5">{renderGameText(rules, 12)}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ClassCard({ cls, lang, onImageOpen }: { cls: HeroClass; lang: 'de' | 'en'; onImageOpen: (l: LightboxState) => void }) {
  const skills = useMemo(() => {
    const xpVal = (x: number | 'elemental') => (x === 'elemental' ? 99 : x)
    return [...cls.skills].sort(
      (a, b) => xpVal(a.xpCost) - xpVal(b.xpCost) || a.nameDe.localeCompare(b.nameDe),
    )
  }, [cls.skills])
  return (
    <div className="card">
      <div className="mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="text-gray-100 font-semibold">{lang === 'de' ? cls.nameDe : cls.nameEn}</h4>
          {cls.kind === 'hybrid' && (
            <span className="text-[10px] font-semibold uppercase tracking-wide bg-purple-900/60 text-purple-300 px-1.5 py-0.5 rounded">
              Hybrid
            </span>
          )}
        </div>
        <p className="text-gray-500 text-xs">{lang === 'de' ? cls.nameEn : cls.nameDe}</p>
        {cls.kind === 'hybrid' && cls.hybridArchetype && (
          <p className="text-[11px] text-purple-300/80 mt-0.5">
            Kombinierbar mit einem Standard-Klassendeck des Archetyps {ARCHETYPE_DE[cls.hybridArchetype]}.
          </p>
        )}
      </div>
      {/* Begleiter + Startausrüstung zuerst (vor den Fähigkeitskarten) */}
      <FamiliarBlock cls={cls} lang={lang} onImageOpen={onImageOpen} />
      <StartingEquipmentBlock cls={cls} lang={lang} onImageOpen={onImageOpen} />
      <div>
        {skills.map((s) => (
          <SkillRow key={s.id} skill={s} classId={cls.id} lang={lang} onImageOpen={onImageOpen} />
        ))}
      </div>
      <ErrataBox entries={getErrata('class', cls.id)} />
    </div>
  )
}

export default function ClassesPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [search, setSearch] = useState('')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [lang, setLang] = useState<'de' | 'en'>('de')
  const [filterArchetype, setFilterArchetype] = useState<HeroArchetype | 'alle'>('alle')
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const expansionMap = useMemo(
    () => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])),
    [],
  )

  const filtered = useMemo(() => {
    return HERO_CLASSES.filter((c) => {
      if (onlyOwned && !ownedIds.includes(c.expansionId)) return false
      if (filterArchetype !== 'alle' && c.archetype !== filterArchetype) return false
      if (search) {
        const q = search.toLowerCase()
        if (!c.nameDe.toLowerCase().includes(q) && !c.nameEn.toLowerCase().includes(q)) return false
      }
      return true
    })
  }, [onlyOwned, ownedIds, search, filterArchetype])

  const byArchetype = useMemo(() => {
    const map = new Map<HeroArchetype, HeroClass[]>()
    for (const c of filtered) {
      const arr = map.get(c.archetype) ?? []
      arr.push(c)
      map.set(c.archetype, arr)
    }
    return map
  }, [filtered])

  const archetypes: Array<HeroArchetype | 'alle'> = ['alle', ...ARCHETYPE_ORDER]

  return (
    <div className="space-y-6">
      {lightbox && (
        <ModalOverlay onClose={() => setLightbox(null)} ariaLabel={lightbox.name} backdropClassName="bg-black/85" className="relative max-w-xs w-full">
          <button onClick={() => setLightbox(null)} className="absolute -top-8 right-0 text-gray-400 hover:text-white text-sm">✕ Schließen</button>
          <LightboxImg srcs={lightbox.srcs} name={lightbox.name} />
        </ModalOverlay>
      )}

      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Helden-Klassen</h2>
        <p className="text-gray-400 text-sm">
          {filtered.length} Klassen {onlyOwned ? 'in deiner Sammlung' : 'insgesamt'} · Begleiter, Startausrüstung und Fähigkeitskarten
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <SearchInput value={search} onChange={setSearch} placeholder="Klasse suchen…" className="w-56" />
        <div className="flex gap-1 flex-wrap">
          {archetypes.map((a) => (
            <button
              key={a}
              onClick={() => setFilterArchetype(a)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm transition-colors border font-medium ${
                filterArchetype === a
                  ? a === 'alle'
                    ? 'bg-accent text-onaccent border-gold-600'
                    : ARCHETYPE_ACTIVE[a]
                  : 'bg-dungeon-800 text-gray-400 hover:text-gray-200 border-dungeon-700'
              }`}
            >
              {a !== 'alle' && <ArchetypeIcon archetype={a} size={15} />}
              {a === 'alle' ? 'Alle' : ARCHETYPE_DE[a]}
            </button>
          ))}
        </div>
        <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />
        <LangToggle value={lang} onChange={setLang} className="ml-auto" />
      </div>

      {lang === 'de' && (
        <p className="text-[11px] text-gray-600 -mt-3">
          Deutsche Texte sind 1:1 von den deutschen Original-Klassenkarten erfasst. Hybrid-Klassen
          (lila Markierung) werden mit einem Standard-Klassendeck kombiniert. Klick auf ein Kartenbild vergrößert es.
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
                <h3 className="flex items-center gap-2 text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
                  <ArchetypeIcon archetype={arch} size={18} />
                  {ARCHETYPE_DE[arch]}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {classes.map((c) => {
                    const exp = expansionMap[c.expansionId]
                    return (
                      <div key={c.id}>
                        <div className="text-[11px] text-gray-600 mb-1">{exp?.nameDe ?? c.expansionId}</div>
                        <ClassCard cls={c} lang={lang} onImageOpen={setLightbox} />
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
