import { LIEUTENANTS } from './lieutenants'
import { PLOT_DECKS } from './plotDecks'
import type { Lieutenant, PlotDeck } from '../types/game'

// Verknüpfung Leutnant ↔ Plotdeck.
//
// Jeder Leutnant und „sein" Plotdeck gehören demselben Charakter: Das Plotdeck
// listet den Agenten (die aufgewertete Leutnant-Form) unter `agentEn`, der mit dem
// Leutnant-Namen (`nameEn`) übereinstimmt. Einzige Ausnahme: Der generische
// Nerekhall-Leutnant „Mirklace" entspricht dem Agenten „Gargan Mirklace"
// (eigene Kampagnen-Figur, siehe docs/game-data/lieutenants.md) und damit dem
// Plotdeck „Burning Ambition".
const LIEUTENANT_NAME_ALIASES: Record<string, string> = {
  Mirklace: 'Gargan Mirklace',
}

const deckByAgent = new Map(PLOT_DECKS.map((d) => [d.agentEn, d]))
const lieutenantByName = new Map(LIEUTENANTS.map((l) => [l.nameEn, l]))
const agentToAliasName: Record<string, string> = Object.fromEntries(
  Object.entries(LIEUTENANT_NAME_ALIASES).map(([lt, agent]) => [agent, lt]),
)

/** Das Plotdeck, das zum Leutnant gehört (oder undefined, falls keines existiert). */
export function plotDeckForLieutenant(lt: Lieutenant): PlotDeck | undefined {
  return deckByAgent.get(lt.nameEn) ?? deckByAgent.get(LIEUTENANT_NAME_ALIASES[lt.nameEn] ?? '')
}

/** Der Leutnant, zu dem das Plotdeck gehört (oder undefined). */
export function lieutenantForDeck(deck: PlotDeck): Lieutenant | undefined {
  return lieutenantByName.get(deck.agentEn) ?? lieutenantByName.get(agentToAliasName[deck.agentEn] ?? '')
}
