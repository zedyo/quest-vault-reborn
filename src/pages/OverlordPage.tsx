import { useState, useMemo } from 'react'
import { OVERLORD_DECKS } from '../data/overlordClasses'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import { renderGameText } from '../components/GameSymbols'
import ModalOverlay from '../components/ModalOverlay'
import ErrataBox from '../components/ErrataBox'
import { getErrata } from '../data/errataLinks'
import { SearchInput, OwnedToggle, LangToggle, type Lang } from '../components/Filters'
import { overlordCardDeUrl } from '../data/assetUrls'
import type { OverlordCard, OverlordDeck, OverlordDeckKind, OverlordCardType } from '../types/game'

// Bevorzugt das deutsche Kartenbild; fällt bei Ladefehler auf das englische zurück.
function useFallbackSrc(srcs: string[]): [string | undefined, () => void] {
  const [idx, setIdx] = useState(0)
  return [srcs[idx], () => setIdx((i) => i + 1)]
}
function cardImgSrcs(card: OverlordCard): string[] {
  return [overlordCardDeUrl(card.id), card.imageUrl].filter(Boolean) as string[]
}

const KIND_LABEL: Record<OverlordDeckKind, string> = {
  basic: 'Basis-Deck',
  class: 'Klasse',
  universal: 'Universal',
  reward: 'Belohnung',
}

const TYPE_LABEL: Record<OverlordCardType, string> = {
  Event: 'Ereignis',
  Magic: 'Magie',
  Trap: 'Falle',
  Special: 'Spezial',
}

const TYPE_STYLE: Record<OverlordCardType, string> = {
  Event: 'bg-sky-900/50 text-sky-300 border border-sky-800/50',
  Magic: 'bg-purple-900/50 text-purple-300 border border-purple-800/50',
  Trap: 'bg-red-900/50 text-red-300 border border-red-800/50',
  Special: 'bg-amber-900/50 text-amber-300 border border-amber-800/50',
}

function XpBadge({ xp }: { xp: number | null }) {
  if (xp === null) {
    return (
      <span className="text-[10px] font-semibold uppercase tracking-wide bg-amber-900/60 text-amber-300 px-1.5 py-0.5 rounded shrink-0">
        Belohnung
      </span>
    )
  }
  if (xp === 0) {
    return (
      <span className="text-[10px] font-semibold uppercase tracking-wide bg-emerald-900/60 text-emerald-300 px-1.5 py-0.5 rounded shrink-0">
        Basis
      </span>
    )
  }
  return (
    <span className="text-[10px] font-semibold bg-gold-900/50 text-gold-300 px-1.5 py-0.5 rounded shrink-0">
      {xp} XP
    </span>
  )
}

function CardThumb({ srcs, name, onOpen }: { srcs: string[]; name: string; onOpen: () => void }) {
  const [src, onError] = useFallbackSrc(srcs)
  if (!src) return null
  return (
    <button
      className="shrink-0 w-12 self-stretch flex items-start rounded overflow-hidden border border-dungeon-700 hover:border-gold-500 transition-colors focus:outline-none focus:border-gold-400"
      onClick={onOpen}
      title="Karte vergrößern"
    >
      <img
        src={src}
        alt={name}
        className="w-full h-auto"
        onError={onError}
        loading="lazy"
      />
    </button>
  )
}

function CardRow({ card, lang, onImageOpen }: { card: OverlordCard; lang: Lang; onImageOpen: () => void }) {
  const name = lang === 'de' ? card.nameDe : card.nameEn
  const subName = lang === 'de' ? card.nameEn : card.nameDe
  const rules = lang === 'de' ? card.rulesDe : card.rulesEn
  return (
    <div className="card text-xs space-y-1.5">
      <div className="flex items-stretch gap-2">
        <CardThumb srcs={cardImgSrcs(card)} name={card.nameDe} onOpen={onImageOpen} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-1">
            <div className="flex-1 min-w-0">
              <div className="text-gray-100 font-semibold leading-snug">{name}</div>
              <div className="text-gray-600 text-[10px] italic leading-tight">{subName}</div>
            </div>
            <div className="shrink-0 flex items-center gap-1">
              <XpBadge xp={card.xpCost} />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-[10px] px-1.5 py-0.5 rounded ${TYPE_STYLE[card.cardType]}`}>
              {TYPE_LABEL[card.cardType]}
            </span>
            {card.count > 1 && (
              <span className="text-[10px] text-gray-500" title="Anzahl im Deck">{card.count}×</span>
            )}
          </div>
        </div>
      </div>
      <div className="text-gray-400 leading-snug space-y-0.5">{renderGameText(rules, 13)}</div>
      <ErrataBox entries={getErrata('overlord', card.id)} />
    </div>
  )
}

function DeckBlock({ deck, lang, onImageOpen }: { deck: OverlordDeck; lang: Lang; onImageOpen: (c: OverlordCard) => void }) {
  // Karten nach XP-Kosten sortieren, dann nach Name
  const cards = useMemo(
    () => [...deck.cards].sort((a, b) => (a.xpCost ?? 99) - (b.xpCost ?? 99) || a.nameDe.localeCompare(b.nameDe)),
    [deck.cards],
  )
  const totalCards = deck.cards.reduce((sum, c) => sum + c.count, 0)
  return (
    <div>
      <div className="flex items-baseline gap-2 mb-2">
        <h4 className="text-gray-100 font-semibold">{lang === 'de' ? deck.nameDe : deck.nameEn}</h4>
        <span className="text-[10px] uppercase tracking-wide text-gold-500/80">{KIND_LABEL[deck.kind]}</span>
        <span className="text-[10px] text-gray-600">
          {deck.cards.length} Karten · {totalCards} im Deck
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {cards.map((c) => (
          <CardRow key={c.id} card={c} lang={lang} onImageOpen={() => onImageOpen(c)} />
        ))}
      </div>
    </div>
  )
}

interface LightboxState { srcs: string[]; name: string }

function LightboxImg({ srcs, name }: { srcs: string[]; name: string }) {
  const [src, onError] = useFallbackSrc(srcs)
  if (!src) return null
  return (
    <img
      src={src}
      alt={name}
      onError={onError}
      className="w-full rounded-lg shadow-2xl border border-dungeon-600"
    />
  )
}

export default function OverlordPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [search, setSearch] = useState('')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [lang, setLang] = useState<Lang>('de')
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const expansionMap = useMemo(
    () => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])),
    [],
  )

  // Decks nach Sammlung + Suche filtern (Suche trifft Deck- oder Kartennamen/-text)
  const filteredDecks = useMemo(() => {
    const q = search.trim().toLowerCase()
    return OVERLORD_DECKS
      .filter((d) => !onlyOwned || ownedIds.includes(d.expansionId))
      .map((deck) => {
        if (!q) return deck
        const deckMatches =
          deck.nameDe.toLowerCase().includes(q) || deck.nameEn.toLowerCase().includes(q)
        if (deckMatches) return deck
        const cards = deck.cards.filter(
          (c) =>
            c.nameDe.toLowerCase().includes(q) ||
            c.nameEn.toLowerCase().includes(q) ||
            c.rulesDe.toLowerCase().includes(q) ||
            c.rulesEn.toLowerCase().includes(q),
        )
        return cards.length ? { ...deck, cards } : null
      })
      .filter((d): d is OverlordDeck => d !== null)
  }, [search, onlyOwned, ownedIds])

  // Nach Erweiterung gruppieren (aktuell nur Grundspiel, aber zukunftssicher)
  const byExpansion = useMemo(() => {
    const map = new Map<string, OverlordDeck[]>()
    for (const d of filteredDecks) {
      const arr = map.get(d.expansionId) ?? []
      arr.push(d)
      map.set(d.expansionId, arr)
    }
    return map
  }, [filteredDecks])

  const totalCards = filteredDecks.reduce((sum, d) => sum + d.cards.length, 0)

  const openLightbox = (card: OverlordCard) => {
    setLightbox({ srcs: cardImgSrcs(card), name: lang === 'de' ? card.nameDe : card.nameEn })
  }

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
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">👑 Overlord-Klassen</h2>
        <p className="text-gray-400 text-sm">
          {totalCards} Overlord-Karten {onlyOwned ? 'in deiner Sammlung' : 'insgesamt'} · Basis-Deck + Klassenkarten mit XP-Kosten
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <SearchInput value={search} onChange={setSearch} placeholder="Karte oder Klasse suchen…" className="w-56" />
        <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />
        <LangToggle value={lang} onChange={setLang} className="ml-auto" />
      </div>

      {lang === 'de' && (
        <p className="text-[11px] text-gray-600 -mt-3">
          Deutsche Kartentexte sind Community-Übersetzungen (nicht zwingend offizieller FFG-Wortlaut). Original via „English". Klick auf das Vorschaubild vergrößert die Karte.
        </p>
      )}

      {byExpansion.size === 0 ? (
        <div className="card text-center text-gray-500 py-12">
          Keine Overlord-Karten gefunden. Passe deine Suche oder Sammlung an.
        </div>
      ) : (
        <div className="space-y-8">
          {Array.from(byExpansion.entries()).map(([expId, decks]) => (
            <div key={expId}>
              <h3 className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
                {expansionMap[expId]?.nameDe ?? expId}
              </h3>
              <div className="space-y-6">
                {decks.map((deck) => (
                  <DeckBlock key={deck.id} deck={deck} lang={lang} onImageOpen={openLightbox} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
