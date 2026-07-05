import { useState, useMemo } from 'react'
import { CAMPAIGNS, ADVANCED_QUESTS } from '../data/campaigns'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import ModalOverlay from '../components/ModalOverlay'
import ErrataBox from '../components/ErrataBox'
import { getErrata } from '../data/errataLinks'
import { SearchInput, OwnedToggle, LangToggle, type Lang } from '../components/Filters'
import type { Campaign, AdvancedQuest } from '../types/game'

// Reise-Geländetypen der Rumor-Karten (faktische Kartendaten) → DE + Symbol.
const TERRAIN: Record<string, { de: string; icon: string }> = {
  Road: { de: 'Straße', icon: '🛣️' },
  Forest: { de: 'Wald', icon: '🌲' },
  Mountain: { de: 'Berg', icon: '⛰️' },
  Plain: { de: 'Ebene', icon: '🌾' },
  Water: { de: 'Wasser', icon: '🌊' },
}

function CampaignCard({ c, lang, expansionName }: { c: Campaign; lang: Lang; expansionName: (id: string) => string }) {
  const name = lang === 'de' ? c.nameDe : c.nameEn
  const sub = lang === 'de' ? c.nameEn : c.nameDe
  return (
    <div className="card space-y-1.5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h4 className="text-gray-100 font-semibold leading-snug">{name}</h4>
          <p className="text-gray-500 text-xs italic">{sub}</p>
        </div>
        <span className="shrink-0 text-[10px] uppercase tracking-wide text-gold-500/90">{expansionName(c.expansionId)}</span>
      </div>
      <div className="flex flex-wrap gap-1">
        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${c.kind === 'campaign' ? 'bg-purple-900/50 text-purple-300' : 'bg-sky-900/50 text-sky-300'}`}>
          {c.kind === 'campaign' ? (lang === 'de' ? 'Großkampagne' : 'Full campaign') : (lang === 'de' ? 'Mini-Kampagne' : 'Mini-campaign')}
        </span>
        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${c.branching ? 'bg-amber-900/50 text-amber-300' : 'bg-dungeon-700 text-gray-400'}`}>
          {c.branching ? (lang === 'de' ? 'Verzweigt' : 'Branching') : (lang === 'de' ? 'Linear' : 'Linear')}
        </span>
      </div>
      <p className="text-gray-400 text-xs leading-snug">{c.descriptionDe}</p>
      <ErrataBox entries={getErrata('adventure', c.id)} showEntryNames />
    </div>
  )
}

function TerrainBadge({ t, lang }: { t: string; lang: Lang }) {
  const info = TERRAIN[t]
  return (
    <span className="inline-flex items-center gap-0.5 text-[10px] bg-dungeon-800/70 border border-dungeon-700 rounded px-1.5 py-0.5 text-gray-300">
      <span>{info?.icon ?? '•'}</span>{info ? (lang === 'de' ? info.de : t) : t}
    </span>
  )
}

function QuestCard({ q, lang, onImage }: { q: AdvancedQuest; lang: Lang; onImage: (url: string, name: string) => void }) {
  const name = lang === 'de' ? q.nameDe : q.nameEn
  const sub = lang === 'de' ? q.nameEn : q.nameDe
  return (
    <div className="card space-y-1.5 text-xs">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h4 className="text-gray-100 font-semibold leading-snug">{name}</h4>
          <p className="text-gray-500 text-[10px] italic">{sub}</p>
        </div>
        {q.act && <span className="shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-red-900/50 text-red-300">{lang === 'de' ? 'Akt' : 'Act'} {q.act === 1 ? 'I' : 'II'}</span>}
      </div>
      {q.travel.length > 0 && (
        <div className="flex flex-wrap items-center gap-1">
          <span className="text-[10px] text-gray-500">{lang === 'de' ? 'Reise:' : 'Travel:'}</span>
          {q.travel.map((t, i) => <TerrainBadge key={i} t={t} lang={lang} />)}
        </div>
      )}
      <div className="flex gap-2 pt-0.5">
        <button onClick={() => onImage(q.imageUrlFront, name)} className="text-[10px] text-gray-400 hover:text-gold-400" title="Vorderseite vergrößern">🔍 {lang === 'de' ? 'Vorderseite' : 'Front'}</button>
        <button onClick={() => onImage(q.imageUrlBack, name)} className="text-[10px] text-gray-400 hover:text-gold-400" title="Rückseite vergrößern">🔍 {lang === 'de' ? 'Rückseite' : 'Back'}</button>
      </div>
    </div>
  )
}

interface LightboxState { imageUrl: string; name: string }

export default function CampaignsPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [search, setSearch] = useState('')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [lang, setLang] = useState<Lang>('de')
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const expansionMap = useMemo(() => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])), [])
  const expansionName = (id: string) => expansionMap[id]?.nameDe ?? id

  const q = search.trim().toLowerCase()

  const campaigns = useMemo(() => CAMPAIGNS.filter((c) => {
    if (onlyOwned && !ownedIds.includes(c.expansionId)) return false
    if (q && !c.nameDe.toLowerCase().includes(q) && !c.nameEn.toLowerCase().includes(q) && !c.descriptionDe.toLowerCase().includes(q)) return false
    return true
  }), [q, onlyOwned, ownedIds])

  const questsByExpansion = useMemo(() => {
    const filtered = ADVANCED_QUESTS.filter((quest) => {
      if (onlyOwned && !ownedIds.includes(quest.expansionId)) return false
      if (q && !quest.nameDe.toLowerCase().includes(q) && !quest.nameEn.toLowerCase().includes(q)) return false
      return true
    })
    const map = new Map<string, AdvancedQuest[]>()
    for (const quest of filtered) {
      const arr = map.get(quest.expansionId) ?? []
      arr.push(quest)
      map.set(quest.expansionId, arr)
    }
    return map
  }, [q, onlyOwned, ownedIds])

  return (
    <div className="space-y-6">
      {lightbox && (
        <ModalOverlay onClose={() => setLightbox(null)} ariaLabel={lightbox.name} backdropClassName="bg-black/85" className="relative max-w-md w-full">
          <button onClick={() => setLightbox(null)} className="absolute -top-8 right-0 text-gray-400 hover:text-white text-sm">✕ Schließen</button>
          <img src={lightbox.imageUrl} alt={lightbox.name} className="w-full rounded-lg shadow-2xl border border-dungeon-600" />
        </ModalOverlay>
      )}

      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">🏰 Kampagnen &amp; Quests</h2>
        <p className="text-gray-400 text-sm">
          Überblick der offiziellen Kampagnen · {ADVANCED_QUESTS.length} Advanced Quests der kleinen Packs
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <SearchInput value={search} onChange={setSearch} placeholder="Kampagne oder Quest suchen…" className="w-60" />
        <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />
        <LangToggle value={lang} onChange={setLang} className="ml-auto" />
      </div>

      <p className="text-[11px] text-gray-600 -mt-3">
        Kampagnen-Übersicht: nur strukturelle Eckdaten (Typ, Verzweigung). Szenario-Details der Questbücher werden bewusst nicht abgebildet.
        {lang === 'de' && ' Deutsche Titel/Texte sind Community-Übersetzungen.'}
      </p>

      {/* Kampagnen-Überblick */}
      <section>
        <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
          {lang === 'de' ? 'Offizielle Kampagnen' : 'Official campaigns'} <span className="text-gray-600 normal-case">({campaigns.length})</span>
        </h3>
        {campaigns.length === 0 ? (
          <div className="card text-center text-gray-500 py-8">Keine Kampagnen für diese Auswahl.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {campaigns.map((c) => <CampaignCard key={c.id} c={c} lang={lang} expansionName={expansionName} />)}
          </div>
        )}
      </section>

      {/* Advanced Quests */}
      <section>
        <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-1">
          {lang === 'de' ? 'Advanced Quests' : 'Advanced quests'}
        </h3>
        <p className="text-[11px] text-gray-600 mb-3">
          {lang === 'de'
            ? 'Eigenständige Rumor-Quests aus den kleinen Erweiterungs-Packs. Karten zum Vergrößern antippen.'
            : 'Standalone rumor quests from the small expansion packs. Tap a card to enlarge.'}
        </p>
        {questsByExpansion.size === 0 ? (
          <div className="card text-center text-gray-500 py-8">Keine Advanced Quests für diese Auswahl.</div>
        ) : (
          <div className="space-y-6">
            {Array.from(questsByExpansion.entries()).map(([expId, quests]) => (
              <div key={expId}>
                <h4 className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2">{expansionName(expId)}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                  {quests.map((quest) => (
                    <QuestCard key={quest.id} q={quest} lang={lang} onImage={(url, name) => setLightbox({ imageUrl: url, name })} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
