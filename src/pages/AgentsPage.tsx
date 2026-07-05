import { useState, useMemo } from 'react'
import { AGENTS } from '../data/agents'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import { DicePip } from '../components/DiceDisplay'
import { MovementBadge, DefenseBadge, renderGameTextInline } from '../components/GameSymbols'
import { HealthIcon, AttackIcon } from '../components/StatIcons'
import ModalOverlay from '../components/ModalOverlay'
import { SearchInput, OwnedToggle, LangToggle, SourceFilter, matchesSource, type Lang, type Source } from '../components/Filters'
import type { Agent, AgentForm, LieutenantPerPlayerStats } from '../types/game'

function PerPlayerTable({ form, lang }: { form: AgentForm; lang: Lang }) {
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
            <div className="flex items-center justify-center gap-1 text-[11px] text-gray-200"><MovementBadge size={12} circle="#15552c" />{s.speed}</div>
            <div className="flex items-center justify-center gap-1 text-[11px] text-gray-200"><HealthIcon size={12} />{s.health}</div>
            <div className="flex items-center justify-center gap-0.5"><DefenseBadge size={12} circle="#1f6fb2" />{s.defense.map((d, i) => <DicePip key={i} color={d} />)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FormBlock({ form, lang, onImageOpen }: { form: AgentForm; lang: Lang; onImageOpen: () => void }) {
  return (
    <div className="rounded border border-dungeon-700 p-2 space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-gold-400">Akt {form.act === 1 ? 'I' : 'II'}</span>
        <button onClick={onImageOpen} className="text-[10px] text-gray-500 hover:text-gold-400 shrink-0" title="Karte vergrößern">🔍 Karte</button>
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="flex items-center gap-1 text-xs text-gray-400">
          <AttackIcon size={14} />{lang === 'de' ? form.attackTypeDe : form.attackTypeEn}
          <span className="flex gap-0.5 ml-0.5">{form.attackDice.map((d, i) => <DicePip key={i} color={d} />)}</span>
        </span>
      </div>
      <PerPlayerTable form={form} lang={lang} />
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

function AgentCard({ ag, lang, onImageOpen }: { ag: Agent; lang: Lang; onImageOpen: (url: string, name: string) => void }) {
  return (
    <div className="card space-y-2">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-gray-100 font-semibold">{lang === 'de' ? ag.nameDe : ag.nameEn}</h4>
        <span className="shrink-0 text-[10px] text-purple-300 bg-purple-900/40 px-1.5 py-0.5 rounded" title="Zugehöriges Plotdeck">
          📜 {lang === 'de' ? ag.plotDeckDe : ag.plotDeckEn}
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {ag.forms.map((f) => (
          <FormBlock
            key={f.act}
            form={f}
            lang={lang}
            onImageOpen={() => onImageOpen(f.imageUrl, `${lang === 'de' ? ag.nameDe : ag.nameEn} – Akt ${f.act === 1 ? 'I' : 'II'}`)}
          />
        ))}
      </div>
    </div>
  )
}

interface LightboxState { imageUrl: string; name: string }

export default function AgentsPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [search, setSearch] = useState('')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [source, setSource] = useState<Source>('all')
  const [lang, setLang] = useState<Lang>('de')
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const expansionMap = useMemo(() => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])), [])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return AGENTS.filter((a) => {
      if (onlyOwned && !ownedIds.includes(a.expansionId)) return false
      if (!matchesSource(source, a.expansionId)) return false
      if (q && !a.nameDe.toLowerCase().includes(q) && !a.nameEn.toLowerCase().includes(q)
        && !a.plotDeckDe.toLowerCase().includes(q) && !a.plotDeckEn.toLowerCase().includes(q)) return false
      return true
    })
  }, [search, onlyOwned, ownedIds, source])

  const byExpansion = useMemo(() => {
    const map = new Map<string, Agent[]>()
    for (const a of filtered) {
      const arr = map.get(a.expansionId) ?? []
      arr.push(a)
      map.set(a.expansionId, arr)
    }
    return map
  }, [filtered])

  return (
    <div className="space-y-6">
      {lightbox && (
        <ModalOverlay onClose={() => setLightbox(null)} ariaLabel={lightbox.name} backdropClassName="bg-black/85" className="relative max-w-xs w-full">
          <button onClick={() => setLightbox(null)} className="absolute -top-8 right-0 text-gray-400 hover:text-white text-sm">✕ Schließen</button>
          <img src={lightbox.imageUrl} alt={lightbox.name} className="w-full rounded-lg shadow-2xl border border-dungeon-600" />
        </ModalOverlay>
      )}

      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">🎭 Agenten</h2>
        <p className="text-gray-400 text-sm">
          {filtered.length} Agenten {onlyOwned ? 'in deiner Sammlung' : 'insgesamt'} · aufgewertete Leutnants mit Plotdeck
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <SearchInput value={search} onChange={setSearch} placeholder="Agent oder Plotdeck suchen…" className="w-56" />
        <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />
        <SourceFilter value={source} onChange={setSource} />
        <LangToggle value={lang} onChange={setLang} className="ml-auto" />
      </div>

      <p className="text-[11px] text-gray-600 -mt-3">
        Agenten sind die aufgewerteten Leutnant-Versionen aus den Leutnants-Packs. Die zugehörigen
        <span className="text-purple-300"> Plotdeck-Karten</span> folgen in einem nächsten Schritt.
        {lang === 'de' && ' Deutsche Texte sind Community-Übersetzungen.'}
      </p>

      {byExpansion.size === 0 ? (
        <div className="card text-center text-gray-500 py-12">Keine Agenten gefunden. Passe deine Suche oder Sammlung an.</div>
      ) : (
        <div className="space-y-8">
          {Array.from(byExpansion.entries()).map(([expId, ags]) => (
            <div key={expId}>
              <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">{expansionMap[expId]?.nameDe ?? expId}</h3>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                {ags.map((ag) => (
                  <AgentCard key={ag.id} ag={ag} lang={lang} onImageOpen={(url, name) => setLightbox({ imageUrl: url, name })} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
