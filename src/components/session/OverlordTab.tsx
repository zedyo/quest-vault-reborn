// Overlord-Tab: gewählte Decks + besessene Karten, Leutnant → Plotdeck +
// Plotkarten, aktive Gerüchte, Overlord-Relikte, Start-XP.

import type { OverlordDeck } from '../../types/game'
import type { TrackedOverlord } from '../../types/session'
import type { OverlordLiveState } from '../../store/sessionDerive'
import { OVERLORD_DECKS } from '../../data/overlordClasses'
import { LIEUTENANTS } from '../../data/lieutenants'
import { PLOT_DECKS } from '../../data/plotDecks'
import { plotDeckForLieutenant } from '../../data/lieutenantPlotLinks'
import { RUMORS } from '../../data/rumors'
import { RELICS } from '../../data/items'
import { ChipToggle, NumberInput, QtyStepper, SubHeading } from './ui'
import { countOf, setCount } from './sessionHelpers'

const DECK_KIND_LABEL: Record<string, string> = {
  basic: 'Basisdeck',
  class: 'Klassen-Decks',
  universal: 'Universal',
}
const DECK_KIND_ORDER = ['basic', 'class', 'universal'] as const

/** Zusammengesetzter Karten-Schlüssel deckId:cardId (Karten-IDs sind nur je Deck eindeutig). */
const cardKey = (deckId: string, cardId: string) => `${deckId}:${cardId}`

function toggleId(arr: string[], id: string): string[] {
  return arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id]
}

export default function OverlordTab({
  overlord,
  live,
  ownedExpansionIds,
  onPatch,
}: {
  overlord: TrackedOverlord
  live: OverlordLiveState
  ownedExpansionIds: string[]
  onPatch: (patch: Partial<TrackedOverlord>) => void
}) {
  const owns = (expansionId: string) => ownedExpansionIds.includes(expansionId)

  const pickableDecks = OVERLORD_DECKS.filter((d) => d.kind !== 'reward' && owns(d.expansionId))
  const selectedDecks = OVERLORD_DECKS.filter((d) => overlord.deckIds.includes(d.id))
  const lieutenants = LIEUTENANTS.filter((l) => owns(l.expansionId))
  const plotDecks = PLOT_DECKS.filter((d) => owns(d.expansionId))
  const plotDeck = PLOT_DECKS.find((d) => d.id === overlord.plotDeckId) ?? null
  const rumors = RUMORS.filter((r) => owns(r.expansionId))
  const overlordRelics = RELICS.filter((r) => r.side === 'overlord' && owns(r.expansionId))

  function toggleDeck(deck: OverlordDeck) {
    if (overlord.deckIds.includes(deck.id)) {
      const keys = new Set(deck.cards.map((c) => cardKey(deck.id, c.id)))
      onPatch({
        deckIds: overlord.deckIds.filter((d) => d !== deck.id),
        startingCardIds: overlord.startingCardIds.filter((c) => !keys.has(c)),
      })
    } else {
      // Basis-/Startkarten (xpCost === 0) sind zu Beginn im Deck – mit ALLEN Exemplaren
      // (count). Klassenkarten (xpCost > 0) kauft der Overlord erst über die Kampagne.
      const seed = deck.cards
        .filter((c) => c.xpCost === 0)
        .flatMap((c) => Array<string>(Math.max(1, c.count)).fill(cardKey(deck.id, c.id)))
      onPatch({
        deckIds: [...overlord.deckIds, deck.id],
        startingCardIds: [...overlord.startingCardIds, ...seed],
      })
    }
  }

  function changeLieutenant(id: string) {
    const lt = id ? LIEUTENANTS.find((l) => l.id === id) ?? null : null
    const linked = lt ? plotDeckForLieutenant(lt) : undefined
    onPatch({
      lieutenantId: id || null,
      plotDeckId: linked ? linked.id : overlord.plotDeckId,
    })
  }

  function changePlotDeck(id: string) {
    onPatch({ plotDeckId: id || null, ownedPlotCardIds: [] })
  }

  return (
    <div className="space-y-4">
      {/* Decks */}
      <div className="card">
        <SubHeading hint="Basisdeck + gewählte Overlord-Klasse(n) + Universal.">Overlord-Decks</SubHeading>
        {DECK_KIND_ORDER.map((kind) => {
          const decks = pickableDecks.filter((d) => d.kind === kind)
          if (decks.length === 0) return null
          return (
            <div key={kind} className="mb-2 last:mb-0">
              <p className="text-[10px] uppercase tracking-wider text-gray-600 mb-1">{DECK_KIND_LABEL[kind]}</p>
              <div className="flex flex-wrap gap-1.5">
                {decks.map((d) => (
                  <ChipToggle key={d.id} active={overlord.deckIds.includes(d.id)} onClick={() => toggleDeck(d)}>
                    {d.nameDe}
                  </ChipToggle>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Besessene Karten je gewähltem Deck */}
      {selectedDecks.length > 0 && (
        <div className="card">
          <SubHeading hint="Welche Karten der Overlord aktuell im Deck hat (Klassenkarten nach Kauf antippen).">
            Besessene Karten
          </SubHeading>
          <div className="space-y-2">
            {selectedDecks.map((deck) => {
              const totalCopies = deck.cards.reduce((n, c) => n + Math.max(1, c.count), 0)
              const ownedCopies = deck.cards.reduce((n, c) => n + countOf(overlord.startingCardIds, cardKey(deck.id, c.id)), 0)
              return (
                <details key={deck.id} className="rounded border border-dungeon-700 bg-dungeon-900/50">
                  <summary className="cursor-pointer px-3 py-2 text-sm text-gray-200 select-none">
                    {deck.nameDe}
                    <span className="text-gray-500 text-xs"> ({ownedCopies}/{totalCopies})</span>
                  </summary>
                  <div className="px-3 pb-3 flex flex-wrap gap-1.5">
                    {deck.cards.map((c) => {
                      const key = cardKey(deck.id, c.id)
                      const max = Math.max(1, c.count)
                      const xp = c.xpCost && c.xpCost > 0 ? ` · ${c.xpCost} XP` : ''
                      if (max > 1) {
                        return (
                          <QtyStepper
                            key={key}
                            value={countOf(overlord.startingCardIds, key)}
                            max={max}
                            onChange={(n) => onPatch({ startingCardIds: setCount(overlord.startingCardIds, key, n) })}
                            title={c.rulesDe}
                            label={`${c.nameDe}${xp}`}
                          />
                        )
                      }
                      return (
                        <ChipToggle
                          key={key}
                          active={countOf(overlord.startingCardIds, key) > 0}
                          onClick={() => onPatch({ startingCardIds: toggleId(overlord.startingCardIds, key) })}
                          title={c.rulesDe}
                        >
                          {c.nameDe}
                          {xp ? <span className="opacity-60">{xp}</span> : null}
                        </ChipToggle>
                      )
                    })}
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      )}

      {/* Leutnant + Plotdeck */}
      <div className="card space-y-3">
        <SubHeading>Leutnant & Plotdeck</SubHeading>
        <label className="block">
          <span className="block text-xs font-semibold text-gold-400 mb-1">Leutnant</span>
          <select
            value={overlord.lieutenantId ?? ''}
            onChange={(e) => changeLieutenant(e.target.value)}
            className="w-full bg-dungeon-900 border border-dungeon-700 rounded px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-gold-500"
          >
            <option value="">– kein Leutnant –</option>
            {lieutenants.map((l) => (
              <option key={l.id} value={l.id}>
                {l.nameDe}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="block text-xs font-semibold text-gold-400 mb-1">Plotdeck</span>
          <select
            value={overlord.plotDeckId ?? ''}
            onChange={(e) => changePlotDeck(e.target.value)}
            className="w-full bg-dungeon-900 border border-dungeon-700 rounded px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-gold-500"
          >
            <option value="">– kein Plotdeck –</option>
            {plotDecks.map((d) => (
              <option key={d.id} value={d.id}>
                {d.nameDe}
              </option>
            ))}
          </select>
        </label>

        {plotDeck && (
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-600 mb-1">Besessene Plotkarten</p>
            <div className="flex flex-wrap gap-1.5">
              {plotDeck.cards.map((c) => (
                <ChipToggle
                  key={c.id}
                  active={overlord.ownedPlotCardIds.includes(c.id)}
                  onClick={() => onPatch({ ownedPlotCardIds: toggleId(overlord.ownedPlotCardIds, c.id) })}
                  title={c.rulesDe}
                >
                  {c.nameDe}
                </ChipToggle>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Aktive Gerüchte */}
      {rumors.length > 0 && (
        <div className="card">
          <SubHeading hint="Gerücht-Karten, die aktuell aktiv sind und noch nicht aktiviert wurden.">
            Aktive Gerüchte
          </SubHeading>
          <details>
            <summary className="cursor-pointer text-sm text-gray-300 select-none mb-2">
              {overlord.activeRumorIds.length} aktiv · Liste anzeigen
            </summary>
            <div className="flex flex-wrap gap-1.5">
              {rumors.map((r) => (
                <ChipToggle
                  key={r.id}
                  active={overlord.activeRumorIds.includes(r.id)}
                  onClick={() => onPatch({ activeRumorIds: toggleId(overlord.activeRumorIds, r.id) })}
                  title={r.act ? `Akt ${r.act}` : undefined}
                >
                  {r.nameDe}
                </ChipToggle>
              ))}
            </div>
          </details>
        </div>
      )}

      {/* Relikte + XP + Bedrohung */}
      <div className="card space-y-3">
        <SubHeading>Overlord-Relikte, XP & Bedrohung</SubHeading>
        {overlordRelics.length > 0 && (
          <details>
            <summary className="cursor-pointer text-sm text-gray-300 select-none mb-2">
              {live.ownedRelicIds.length} Relikt(e) · Liste anzeigen
            </summary>
            <div className="flex flex-wrap gap-1.5">
              {overlordRelics.map((r) => (
                <ChipToggle
                  key={r.id}
                  active={overlord.relicIds.includes(r.id)}
                  onClick={() => onPatch({ relicIds: toggleId(overlord.relicIds, r.id) })}
                  title={r.rulesDe}
                >
                  {r.nameDe}
                </ChipToggle>
              ))}
            </div>
          </details>
        )}
        <div className="flex flex-wrap gap-3">
          <NumberInput
            label="Start-XP des Overlords"
            value={overlord.startingXp}
            onChange={(v) => onPatch({ startingXp: v })}
            min={0}
            max={100000}
          />
          <NumberInput
            label="Bedrohungsmarker (aktuell)"
            value={overlord.threatTokens}
            onChange={(v) => onPatch({ threatTokens: v })}
            min={0}
            max={100000}
          />
        </div>
      </div>
    </div>
  )
}
