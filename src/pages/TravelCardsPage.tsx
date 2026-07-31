import { useState, useMemo } from 'react'
import { Link } from 'react-router'
import { TRAVEL_CARDS } from '../data/travelCards'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import ModalOverlay from '../components/ModalOverlay'
import { OwnedToggle, LangToggle, SegmentedControl, SourceFilter, matchesSource, type Lang, type Source } from '../components/Filters'
import { travelCardDeUrl } from '../data/assetUrls'
import { renderGameTextInline } from '../components/GameSymbols'
import type { TravelCard } from '../types/game'

// Faktische Gelände-Icons je Deck-Typ → DE-Label + Symbol.
const TERRAIN: Record<string, { de: string; icon: string }> = {
  Plain: { de: 'Ebene', icon: '🌾' },
  Forest: { de: 'Wald', icon: '🌲' },
  Mountain: { de: 'Berg', icon: '⛰️' },
  Road: { de: 'Straße', icon: '🛣️' },
  Water: { de: 'Wasser', icon: '🌊' },
  Street: { de: 'Gasse', icon: '🏙️' },
  Tower: { de: 'Turm', icon: '🗼' },
  Building: { de: 'Gebäude', icon: '🏛️' },
  Sewer: { de: 'Kanalisation', icon: '🕳️' },
  Hazard: { de: 'Gefahr', icon: '⚠️' },
}
const TERRAIN_ORDER: Record<'travel' | 'city', string[]> = {
  travel: ['Plain', 'Forest', 'Mountain', 'Road', 'Water'],
  city: ['Street', 'Tower', 'Building', 'Sewer', 'Hazard'],
}

// Bevorzugt das deutsche Kartenbild; fällt bei Ladefehler auf das englische zurück.
function TravelImg({ card, className, onClick }: { card: TravelCard; className?: string; onClick?: () => void }) {
  const [idx, setIdx] = useState(0)
  const srcs = [travelCardDeUrl(card.id), card.imageUrl]
  const src = srcs[idx]
  if (!src) return null
  const img = (
    <img src={src} alt={`${card.deckType} event ${card.position}`} className={className ?? 'w-full h-auto'} loading="lazy" onError={() => setIdx((i) => i + 1)} />
  )
  return onClick
    ? <button onClick={onClick} className="block w-full rounded overflow-hidden border border-dungeon-700 hover:border-gold-500 focus:outline-none focus:border-gold-400 transition-colors" title="Karte vergrößern">{img}</button>
    : img
}

function CardTile({ card, lang, onOpen }: { card: TravelCard; lang: Lang; onOpen: () => void }) {
  const events = new Set(card.eventTerrains)
  return (
    <div className="card space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-gold-400">
          {(card.deckType === 'city' ? (lang === 'de' ? 'Stadt-Ereignis' : 'City event') : (lang === 'de' ? 'Reise-Ereignis' : 'Travel event'))} {card.position}/{card.total}
        </span>
      </div>
      <TravelImg card={card} onClick={onOpen} />
      <div className="flex flex-wrap gap-1">
        {TERRAIN_ORDER[card.deckType].map((t) => {
          const has = events.has(t)
          const info = TERRAIN[t]
          return (
            <span
              key={t}
              className={`inline-flex items-center gap-0.5 text-[10px] rounded px-1.5 py-0.5 border ${has ? 'bg-emerald-900/40 border-emerald-800/60 text-emerald-300' : 'bg-dungeon-800/50 border-dungeon-700 text-gray-600'}`}
              title={has ? (lang === 'de' ? 'Ereignis auf diesem Gelände' : 'Event on this terrain') : (lang === 'de' ? 'Kein Ereignis' : 'No event')}
            >
              <span>{info?.icon ?? '•'}</span>{info ? (lang === 'de' ? info.de : t) : t}
            </span>
          )
        })}
      </div>
    </div>
  )
}

type LightboxState = TravelCard

export default function TravelCardsPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [lang, setLang] = useState<Lang>('de')
  const [deckFilter, setDeckFilter] = useState<'all' | 'travel' | 'city'>('all')
  const [source, setSource] = useState<Source>('all')
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const expansionMap = useMemo(() => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])), [])
  const expansionName = (id: string) => expansionMap[id]?.nameDe ?? id

  const filtered = useMemo(() => TRAVEL_CARDS.filter((c) => {
    if (onlyOwned && !ownedIds.includes(c.expansionId)) return false
    if (deckFilter !== 'all' && c.deckType !== deckFilter) return false
    // Grundspiel/Erweiterung-Filter gilt nur für Reisekarten, nicht für Stadtkarten.
    if (c.deckType === 'travel' && !matchesSource(source, c.expansionId)) return false
    return true
  }), [onlyOwned, ownedIds, deckFilter, source])

  const byExpansion = useMemo(() => {
    const map = new Map<string, TravelCard[]>()
    for (const c of filtered) {
      const arr = map.get(c.expansionId) ?? []
      arr.push(c)
      map.set(c.expansionId, arr)
    }
    return map
  }, [filtered])

  return (
    <div className="space-y-6">
      {lightbox && (
        <ModalOverlay onClose={() => setLightbox(null)} ariaLabel={`${lightbox.deckType} event ${lightbox.position}`} backdropClassName="bg-black/85" className="bg-dungeon-900 border border-dungeon-700 rounded-lg shadow-2xl max-w-2xl w-full overflow-y-auto max-h-[90vh] p-4 flex flex-col sm:flex-row gap-4">
          <div className="sm:w-56 flex-shrink-0 mx-auto">
            <TravelImg card={lightbox} className="w-full rounded border border-dungeon-700" />
          </div>
          <div className="flex-1 min-w-0 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-lg text-gold-400 font-bold">
                {lightbox.deckType === 'city' ? 'Stadt-Ereignis' : 'Reise-Ereignis'} {lightbox.position}/{lightbox.total}
              </h3>
              <button onClick={() => setLightbox(null)} className="text-gray-400 hover:text-gray-100 text-2xl leading-none flex-shrink-0">×</button>
            </div>
            {lightbox.eventsDe?.length ? (
              <div className="space-y-2">
                {lightbox.eventsDe.map((ev, i) => {
                  const info = TERRAIN[ev.terrainEn]
                  return (
                    <div key={i} className="border-b border-dungeon-700/60 pb-2 last:border-0">
                      <p className="text-xs font-semibold text-emerald-300 mb-0.5">
                        {info?.icon ?? '•'} {info ? info.de : ev.terrainEn}
                      </p>
                      <p className="text-gray-300 text-sm leading-snug">{renderGameTextInline(ev.textDe)}</p>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">Kein Ereignistext erfasst.</p>
            )}
            <p className="text-[11px] text-gray-600">Deutscher Original-Kartentext (FFG).</p>
          </div>
        </ModalOverlay>
      )}

      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">🧭 Reisekarten</h2>
        <p className="text-gray-400 text-sm">
          {filtered.length} Reise- &amp; Stadtereignis-Karten {onlyOwned ? 'in deiner Sammlung' : 'insgesamt'}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <SegmentedControl
          value={deckFilter}
          onChange={setDeckFilter}
          options={[
            { value: 'all', label: lang === 'de' ? 'Alle' : 'All' },
            { value: 'travel', label: lang === 'de' ? 'Reise' : 'Travel' },
            { value: 'city', label: lang === 'de' ? 'Stadt' : 'City' },
          ]}
        />
        {deckFilter !== 'city' && <SourceFilter value={source} onChange={setSource} />}
        <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />
        <LangToggle value={lang} onChange={setLang} className="ml-auto" />
      </div>

      <p className="text-[11px] text-gray-600 -mt-3">
        Reisekarten lösen je nach Reise-Gelände ein Ereignis aus. Farbige Gelände-Marker = Karte hat dort ein Ereignis.
        Der Kartentext wird nicht abgebildet – zum Lesen die Karte antippen. Side-Quests („Nebenszenarien") stehen als{' '}
        <Link to="/kampagnen" className="text-gold-400 hover:text-gold-300 underline decoration-dotted">Advanced Quests auf der Kampagnen-Seite ↗</Link>.
      </p>

      {byExpansion.size === 0 ? (
        <div className="card text-center text-gray-500 py-12">Keine Reisekarten für diese Auswahl.</div>
      ) : (
        <div className="space-y-8">
          {Array.from(byExpansion.entries()).map(([expId, cards]) => (
            <div key={expId}>
              <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
                {expansionName(expId)} <span className="text-gray-600 normal-case">· {cards[0].deckType === 'city' ? 'Stadt-Ereignisse' : 'Reise-Ereignisse'} ({cards.length})</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {cards.map((c) => (
                  <CardTile key={c.id} card={c} lang={lang} onOpen={() => setLightbox(c)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
