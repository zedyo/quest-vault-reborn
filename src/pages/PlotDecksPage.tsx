import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PLOT_DECKS } from '../data/plotDecks'
import { EXPANSIONS } from '../data/expansions'
import { lieutenantForDeck } from '../data/lieutenantPlotLinks'
import { useGameStore } from '../store/useGameStore'
import { renderGameText } from '../components/GameSymbols'
import ModalOverlay from '../components/ModalOverlay'
import { SearchInput, OwnedToggle, LangToggle, type Lang } from '../components/Filters'
import type { PlotCard, PlotDeck } from '../types/game'

function CostBadge({ label, value, cls }: { label: string; value: number; cls: string }) {
  return (
    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded shrink-0 ${cls}`} title={label}>
      {label} {value}
    </span>
  )
}

function CardThumb({ imageUrl, name, onOpen }: { imageUrl: string; name: string; onOpen: () => void }) {
  const [err, setErr] = useState(false)
  if (err) return null
  return (
    <button
      className="shrink-0 w-12 self-stretch flex items-start rounded overflow-hidden border border-dungeon-700 hover:border-gold-500 transition-colors focus:outline-none focus:border-gold-400"
      onClick={onOpen}
      title="Karte vergrößern"
    >
      <img src={imageUrl} alt={name} className="w-full h-auto" onError={() => setErr(true)} loading="lazy" />
    </button>
  )
}

function PlotCardRow({ card, lang, onImageOpen }: { card: PlotCard; lang: Lang; onImageOpen: () => void }) {
  const name = lang === 'de' ? card.nameDe : card.nameEn
  const subName = lang === 'de' ? card.nameEn : card.nameDe
  const rules = lang === 'de' ? card.rulesDe : card.rulesEn
  return (
    <div className="card text-xs space-y-1.5">
      <div className="flex items-stretch gap-2">
        <CardThumb imageUrl={card.imageUrl} name={card.nameEn} onOpen={onImageOpen} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-1">
            <div className="flex-1 min-w-0">
              <div className="text-gray-100 font-semibold leading-snug">{name}</div>
              <div className="text-gray-600 text-[10px] italic leading-tight">{subName}</div>
            </div>
            <div className="shrink-0 flex flex-col items-end gap-0.5">
              <CostBadge label={lang === 'de' ? 'Kauf' : 'Buy'} value={card.threatCost} cls="bg-red-900/50 text-red-300" />
              <CostBadge label={lang === 'de' ? 'Auslösen' : 'Trigger'} value={card.triggerCost} cls="bg-amber-900/50 text-amber-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-400 leading-snug space-y-0.5">{renderGameText(rules, 12)}</div>
    </div>
  )
}

function DeckBlock({ deck, lang, onImageOpen, highlighted }: { deck: PlotDeck; lang: Lang; onImageOpen: (c: PlotCard) => void; highlighted?: boolean }) {
  const lt = lieutenantForDeck(deck)
  const agentName = lang === 'de' ? deck.agentDe : deck.agentEn
  return (
    <div id={`deck-${deck.id}`} className={`scroll-mt-24 transition-shadow ${highlighted ? 'ring-2 ring-gold-400 rounded-lg p-2 -m-2' : ''}`}>
      <div className="flex items-baseline gap-2 mb-2">
        <h4 className="text-gray-100 font-semibold">{lang === 'de' ? deck.nameDe : deck.nameEn}</h4>
        {lt ? (
          <Link
            to={`/leutnants?lt=${lt.id}`}
            className="text-[10px] uppercase tracking-wide text-purple-300 hover:text-purple-200 underline decoration-dotted underline-offset-2"
            title={lang === 'de' ? 'Zum Leutnant dieses Plotdecks' : "To this plot deck's lieutenant"}
          >
            🎭 {agentName} ↗
          </Link>
        ) : (
          <span className="text-[10px] uppercase tracking-wide text-purple-300/80">🎭 {agentName}</span>
        )}
        <span className="text-[10px] text-gray-600">{deck.cards.length} Karten</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {deck.cards.map((c) => (
          <PlotCardRow key={c.id} card={c} lang={lang} onImageOpen={() => onImageOpen(c)} />
        ))}
      </div>
    </div>
  )
}

interface LightboxState { imageUrl: string; name: string }

export default function PlotDecksPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [params] = useSearchParams()
  const focusDeckId = params.get('deck')
  const [search, setSearch] = useState('')
  // Beim Aufruf über einen Leutnant-Link das fokussierte Deck immer zeigen.
  const [onlyOwned, setOnlyOwned] = useState(() => !focusDeckId)
  const [lang, setLang] = useState<Lang>('de')
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)
  const [highlightId, setHighlightId] = useState<string | null>(focusDeckId)

  const expansionMap = useMemo(() => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])), [])

  useEffect(() => {
    if (!focusDeckId) return
    document.getElementById(`deck-${focusDeckId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const t = setTimeout(() => setHighlightId(null), 2500)
    return () => clearTimeout(t)
  }, [focusDeckId])

  const filteredDecks = useMemo(() => {
    const q = search.trim().toLowerCase()
    return PLOT_DECKS
      .filter((d) => !onlyOwned || ownedIds.includes(d.expansionId))
      .map((deck) => {
        if (!q) return deck
        const deckMatch = deck.nameDe.toLowerCase().includes(q) || deck.nameEn.toLowerCase().includes(q)
          || deck.agentDe.toLowerCase().includes(q) || deck.agentEn.toLowerCase().includes(q)
        if (deckMatch) return deck
        const cards = deck.cards.filter((c) =>
          c.nameDe.toLowerCase().includes(q) || c.nameEn.toLowerCase().includes(q)
          || c.rulesDe.toLowerCase().includes(q) || c.rulesEn.toLowerCase().includes(q))
        return cards.length ? { ...deck, cards } : null
      })
      .filter((d): d is PlotDeck => d !== null)
  }, [search, onlyOwned, ownedIds])

  const byExpansion = useMemo(() => {
    const map = new Map<string, PlotDeck[]>()
    for (const d of filteredDecks) {
      const arr = map.get(d.expansionId) ?? []
      arr.push(d)
      map.set(d.expansionId, arr)
    }
    return map
  }, [filteredDecks])

  const totalCards = filteredDecks.reduce((s, d) => s + d.cards.length, 0)

  return (
    <div className="space-y-6">
      {lightbox && (
        <ModalOverlay onClose={() => setLightbox(null)} ariaLabel={lightbox.name} backdropClassName="bg-black/85" className="relative max-w-xs w-full">
          <button onClick={() => setLightbox(null)} className="absolute -top-8 right-0 text-gray-400 hover:text-white text-sm">✕ Schließen</button>
          <img src={lightbox.imageUrl} alt={lightbox.name} className="w-full rounded-lg shadow-2xl border border-dungeon-600" />
        </ModalOverlay>
      )}

      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">📜 Plotdecks</h2>
        <p className="text-gray-400 text-sm">
          {totalCards} Plotkarten {onlyOwned ? 'in deiner Sammlung' : 'insgesamt'} · Agenten-Karten mit Bedrohungskosten
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <SearchInput value={search} onChange={setSearch} placeholder="Karte, Deck oder Agent suchen…" className="w-60" />
        <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />
        <LangToggle value={lang} onChange={setLang} className="ml-auto" />
      </div>

      <p className="text-[11px] text-gray-600 -mt-3">
        Plotdecks gehören je zu einem <span className="text-purple-300">Agenten</span>. <span className="text-red-300">Kauf</span> = Bedrohungsmarker zum Erwerb, <span className="text-amber-300">Auslösen</span> = Kosten beim Aktivieren.
        {lang === 'de' && ' Deutsche Texte sind Community-Übersetzungen.'}
      </p>

      {byExpansion.size === 0 ? (
        <div className="card text-center text-gray-500 py-12">Keine Plotkarten gefunden. Passe deine Suche oder Sammlung an.</div>
      ) : (
        <div className="space-y-8">
          {Array.from(byExpansion.entries()).map(([expId, decks]) => (
            <div key={expId}>
              <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">{expansionMap[expId]?.nameDe ?? expId}</h3>
              <div className="space-y-6">
                {decks.map((deck) => (
                  <DeckBlock key={deck.id} deck={deck} lang={lang} highlighted={deck.id === highlightId} onImageOpen={(c) => setLightbox({ imageUrl: c.imageUrl, name: lang === 'de' ? c.nameDe : c.nameEn })} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
