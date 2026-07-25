import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { LIEUTENANTS } from '../data/lieutenants'
import { EXPANSIONS } from '../data/expansions'
import { plotDeckForLieutenant } from '../data/lieutenantPlotLinks'
import { useGameStore } from '../store/useGameStore'
import { DicePip } from '../components/DiceDisplay'
import { renderGameTextInline } from '../components/GameSymbols'
import { HealthIcon, SpeedIcon, DefenseStatIcon, AttackTypeIcon } from '../components/StatIcons'
import { GameIcon, type GameSymbolName } from '../components/icons/GameIcon'
import ModalOverlay from '../components/ModalOverlay'
import { SearchInput, OwnedToggle, LangToggle, SourceFilter, matchesSource, type Lang, type Source } from '../components/Filters'
import { lieutenantCardDeUrl } from '../data/assetUrls'
import type { Lieutenant, LieutenantForm, LieutenantPerPlayerStats } from '../types/game'

// Bevorzugt das deutsche Kartenbild; fällt bei Ladefehler auf das englische zurück.
function LightboxImg({ srcs, name }: { srcs: string[]; name: string }) {
  const [idx, setIdx] = useState(0)
  const src = srcs[idx]
  if (!src) return null
  return (
    <img
      src={src}
      alt={name}
      onError={() => setIdx((i) => i + 1)}
      className="w-full rounded-lg shadow-2xl border border-dungeon-600"
    />
  )
}

const ATTR: { key: 'might' | 'knowledge' | 'willpower' | 'awareness'; de: string; en: string; icon: GameSymbolName; cls: string }[] = [
  { key: 'might',     de: 'Stärke',       en: 'Might',     icon: 'staerke',      cls: 'bg-red-900/50 text-red-300 border border-red-800/50' },
  { key: 'knowledge', de: 'Wissen',       en: 'Knowledge', icon: 'wissen',       cls: 'bg-blue-900/50 text-blue-300 border border-blue-800/50' },
  { key: 'willpower', de: 'Willenskraft', en: 'Willpower', icon: 'willenskraft', cls: 'bg-purple-900/50 text-purple-300 border border-purple-800/50' },
  { key: 'awareness', de: 'Geistesgegenwart', en: 'Awareness', icon: 'gespuer',  cls: 'bg-green-900/50 text-green-300 border border-green-800/50' },
]

function PerPlayerTable({ form, lang }: { form: LieutenantForm; lang: Lang }) {
  const cols: { label: string; s: LieutenantPerPlayerStats }[] = [
    { label: '2', s: form.perPlayer.p2 },
    { label: '3', s: form.perPlayer.p3 },
    { label: '4', s: form.perPlayer.p4 },
  ]
  return (
    <div className="rounded bg-dungeon-800/50 p-2">
      <div className="text-[10px] font-semibold text-gray-400 mb-1">
        {lang === 'de' ? 'Werte je Spielerzahl' : 'Stats per player count'}
      </div>
      <div className="flex gap-1.5">
        {cols.map(({ label, s }) => (
          <div key={label} className="flex-1 rounded bg-dungeon-900/60 px-1.5 py-1 text-center space-y-0.5">
            <div className="text-[10px] text-gray-500">{label} {lang === 'de' ? 'Sp.' : 'pl.'}</div>
            <div className="flex items-center justify-center gap-1 text-[11px] text-gray-200">
              <SpeedIcon size={12} />{s.speed}
            </div>
            <div className="flex items-center justify-center gap-1 text-[11px] text-gray-200">
              <HealthIcon size={12} />{s.health}
            </div>
            <div className="flex items-center justify-center gap-0.5">
              <DefenseStatIcon size={12} />
              {s.defense.map((d, i) => <DicePip key={i} color={d} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FormBlock({ form, lang, otherExpansion, onImageOpen }: { form: LieutenantForm; lang: Lang; otherExpansion?: string; onImageOpen: () => void }) {
  return (
    <div className="rounded border border-dungeon-700 p-2 space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-gold-400">
          Akt {form.act === 1 ? 'I' : 'II'}
          {otherExpansion && (
            <span className="ml-1 text-[10px] font-normal text-gray-500" title="Diese Akt-Karte stammt aus einer anderen Erweiterung">
              · {otherExpansion}
            </span>
          )}
        </span>
        <button onClick={onImageOpen} className="text-[10px] text-gray-500 hover:text-gold-400 shrink-0" title="Karte vergrößern">
          🔍 Karte
        </button>
      </div>

      {/* Angriff + Attribute */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="flex items-center gap-1 text-xs text-gray-400">
          <AttackTypeIcon type={form.attackTypeDe === 'Fernkampf' ? 'range' : 'melee'} size={15} />
          {lang === 'de' ? form.attackTypeDe : form.attackTypeEn}
          <span className="flex gap-0.5 ml-0.5">{form.attackDice.map((d, i) => <DicePip key={i} color={d} />)}</span>
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-0.5">
        {ATTR.map((a) => (
          <span key={a.key} className={`rounded flex items-center justify-between gap-1 text-[10px] px-1 py-0.5 ${a.cls}`}>
            <span className="flex items-center gap-1 min-w-0">
              <GameIcon kind="symbol" name={a.icon} variant="plain" size={13} className="-my-1" />
              <span className="opacity-80 truncate">{lang === 'de' ? a.de : a.en}</span>
            </span>
            <span className="font-bold">{form[a.key]}</span>
          </span>
        ))}
      </div>

      <PerPlayerTable form={form} lang={lang} />

      {/* Fähigkeiten */}
      <div className="space-y-1">
        {form.abilities.map((ab, i) => {
          const label = lang === 'de' ? ab.labelDe : ab.labelEn
          const rules = lang === 'de' ? ab.rulesDe : ab.rulesEn
          return (
            <div key={i} className="text-[11px] leading-snug">
              <span className="text-gray-200 font-semibold">{renderGameTextInline(label, 12)}</span>
              {rules && <span className="text-gray-400"> — {renderGameTextInline(rules.replace(/^[^:]+:\s*/, ''), 12)}</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function LieutenantCard({ lt, lang, expansionName, onImageOpen, highlighted }: { lt: Lieutenant; lang: Lang; expansionName: (id: string) => string; onImageOpen: (srcs: string[], name: string) => void; highlighted?: boolean }) {
  const deck = plotDeckForLieutenant(lt)
  return (
    <div id={`lt-${lt.id}`} className={`card space-y-2 scroll-mt-24 transition-shadow ${highlighted ? 'ring-2 ring-gold-400' : ''}`}>
      <div>
        <h4 className="text-gray-100 font-semibold">{lang === 'de' ? lt.nameDe : lt.nameEn}</h4>
        {lt.nameDe !== lt.nameEn && (
          <p className="text-gray-500 text-xs">{lang === 'de' ? lt.nameEn : lt.nameDe}</p>
        )}
      </div>
      {deck && (
        <Link
          to={`/plotdecks?deck=${deck.id}`}
          className="inline-flex items-center gap-1 text-[11px] text-purple-300 hover:text-purple-200 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-800/50 rounded px-2 py-0.5 transition-colors"
          title={lang === 'de' ? 'Zum Plotdeck dieses Leutnants' : "To this lieutenant's plot deck"}
        >
          📜 {lang === 'de' ? `Plotdeck: ${deck.nameDe}` : `Plot deck: ${deck.nameEn}`} ↗
        </Link>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {lt.forms.map((f) => (
          <FormBlock
            key={f.act}
            form={f}
            lang={lang}
            otherExpansion={f.expansionId !== lt.expansionId ? expansionName(f.expansionId) : undefined}
            onImageOpen={() => onImageOpen([lieutenantCardDeUrl(lt.id, f.act), f.imageUrl], `${lang === 'de' ? lt.nameDe : lt.nameEn} – Akt ${f.act === 1 ? 'I' : 'II'}`)}
          />
        ))}
      </div>
    </div>
  )
}

interface LightboxState { srcs: string[]; name: string }

export default function LieutenantsPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [params] = useSearchParams()
  const focusId = params.get('lt')
  const [search, setSearch] = useState('')
  const [source, setSource] = useState<Source>('all')
  // Beim Aufruf über einen Plotdeck-Link den fokussierten Leutnant immer zeigen.
  const [onlyOwned, setOnlyOwned] = useState(() => !focusId)
  const [lang, setLang] = useState<Lang>('de')
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)
  const [highlightId, setHighlightId] = useState<string | null>(focusId)

  const expansionMap = useMemo(() => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])), [])

  useEffect(() => {
    if (!focusId) return
    document.getElementById(`lt-${focusId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const t = setTimeout(() => setHighlightId(null), 2500)
    return () => clearTimeout(t)
  }, [focusId])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return LIEUTENANTS.filter((lt) => {
      if (onlyOwned && !ownedIds.includes(lt.expansionId)) return false
      if (!matchesSource(source, lt.expansionId)) return false
      if (q && !lt.nameDe.toLowerCase().includes(q) && !lt.nameEn.toLowerCase().includes(q)) return false
      return true
    })
  }, [search, onlyOwned, ownedIds, source])

  const byExpansion = useMemo(() => {
    const map = new Map<string, Lieutenant[]>()
    for (const lt of filtered) {
      const arr = map.get(lt.expansionId) ?? []
      arr.push(lt)
      map.set(lt.expansionId, arr)
    }
    return map
  }, [filtered])

  return (
    <div className="space-y-6">
      {lightbox && (
        <ModalOverlay
          onClose={() => setLightbox(null)}
          ariaLabel={lightbox.name}
          backdropClassName="bg-black/85"
          className="relative max-w-xs w-full"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute -top-8 right-0 text-gray-400 hover:text-white text-sm"
          >
            ✕ Schließen
          </button>
          <LightboxImg srcs={lightbox.srcs} name={lightbox.name} />
        </ModalOverlay>
      )}

      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">🗡️ Leutnants</h2>
        <p className="text-gray-400 text-sm">
          {filtered.length} Leutnants {onlyOwned ? 'in deiner Sammlung' : 'insgesamt'} · Werte je Akt &amp; Spielerzahl
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <SearchInput value={search} onChange={setSearch} placeholder="Leutnant suchen…" className="w-56" />
        <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />
        <SourceFilter value={source} onChange={setSource} />
        <LangToggle value={lang} onChange={setLang} className="ml-auto" />
      </div>

      {lang === 'de' && (
        <p className="text-[11px] text-gray-600 -mt-3">
          Deutsche Kartentexte sind Community-Übersetzungen (nicht zwingend offizieller FFG-Wortlaut). Original via „English".
        </p>
      )}

      {byExpansion.size === 0 ? (
        <div className="card text-center text-gray-500 py-12">
          Keine Leutnants gefunden. Passe deine Suche oder Sammlung an.
        </div>
      ) : (
        <div className="space-y-8">
          {Array.from(byExpansion.entries()).map(([expId, lts]) => (
            <div key={expId}>
              <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
                {expansionMap[expId]?.nameDe ?? expId}
              </h3>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                {lts.map((lt) => (
                  <LieutenantCard
                    key={lt.id}
                    lt={lt}
                    lang={lang}
                    expansionName={(id) => expansionMap[id]?.nameDe ?? id}
                    onImageOpen={(srcs, name) => setLightbox({ srcs, name })}
                    highlighted={lt.id === highlightId}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
