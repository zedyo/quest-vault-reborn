// Gemeinsame Props der fünf Flow-Schritte.

import type { CampaignSession, PlayedScenario } from '../../../types/session'
import type { LiveState } from '../../../store/sessionDerive'

export interface FlowStepProps {
  session: CampaignSession
  /** Live-Stand OHNE das gerade bearbeitete Szenario („Stand vor dem Szenario"). */
  base: LiveState
  draft: PlayedScenario
  setScenario: (updater: (sc: PlayedScenario) => PlayedScenario) => void
  ownedExpansionIds: string[]
  goTo: (step: number) => void
}

/** Summe aller Helden-XP-Belohnungen im Entwurf. */
export const draftHeroXp = (sc: PlayedScenario): number =>
  Object.values(sc.rewards.heroXp).reduce((a, b) => a + b, 0)

/** Gold nach diesem Szenario (Stand davor + Belohnung + Verkäufe − Käufe). */
export function draftGold(base: number, sc: PlayedScenario): number {
  const buys = sc.shopping.bought.reduce((n, b) => n + b.price, 0)
  const sells = sc.shopping.sold.reduce((n, s) => n + s.refund, 0)
  return base + sc.rewards.partyGold + sells - buys
}
