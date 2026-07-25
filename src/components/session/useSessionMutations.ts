// Mutationen eines Kampagnen-Spielstands. Bewusst dieselben Funktionen wie vor
// dem Redesign (persist / patchSession / patchHero / patchOverlord / saveScenario /
// removeScenario / reassignItemOwner) — sie sind erprobt und der Live-Stand wird
// weiterhin AUSSCHLIESSLICH über `deriveLiveState` abgeleitet (kein Saldo).
//
// Der Hook wird von der Session-Shell (SessionsPage) UND vom Abschluss-Flow
// genutzt, damit beide dieselbe Schreiblogik teilen.

import { useMemo } from 'react'
import { useSessionStore } from '../../store/useSessionStore'
import { deriveLiveState, type LiveState } from '../../store/sessionDerive'
import type {
  CampaignSession,
  PlayedScenario,
  TrackedAdvancedQuest,
  TrackedHero,
  TrackedOverlord,
  TrackedRumor,
} from '../../types/session'
import { newTrackedHero, nowISO } from './sessionHelpers'

export interface SessionMutations {
  session: CampaignSession | null
  live: LiveState | null
  persist: (next: CampaignSession) => void
  patchSession: (patch: Partial<CampaignSession>) => void
  addHero: (heroId: string) => void
  removeHero: (localId: string) => void
  patchHero: (localId: string, patch: Partial<TrackedHero>) => void
  patchOverlord: (patch: Partial<TrackedOverlord>) => void
  saveScenario: (sc: PlayedScenario) => void
  removeScenario: (id: string) => void
  reassignItemOwner: (refId: string, toHeroLocalId: string | null) => void
  setRumors: (rumors: TrackedRumor[]) => void
  setAdvancedQuests: (quests: TrackedAdvancedQuest[]) => void
}

export function useSessionMutations(sessionId: string | undefined): SessionMutations {
  const sessions = useSessionStore((s) => s.sessions)
  const updateSession = useSessionStore((s) => s.updateSession)

  const session = sessions.find((s) => s.id === sessionId) ?? null
  const live = useMemo(() => (session ? deriveLiveState(session) : null), [session])

  // ── Mutationen (immutabel, Auto-Save wie QuestEditorPage) ──────────────────
  function persist(next: CampaignSession) {
    updateSession({ ...next, updatedAt: nowISO() })
  }
  function patchSession(patch: Partial<CampaignSession>) {
    if (session) persist({ ...session, ...patch })
  }
  function addHero(heroId: string) {
    if (!session || session.heroes.length >= 4) return
    persist({ ...session, heroes: [...session.heroes, newTrackedHero(heroId)] })
  }
  function removeHero(localId: string) {
    if (!session) return
    persist({ ...session, heroes: session.heroes.filter((h) => h.localId !== localId) })
  }
  function patchHero(localId: string, patch: Partial<TrackedHero>) {
    if (!session) return
    persist({
      ...session,
      heroes: session.heroes.map((h) => (h.localId === localId ? { ...h, ...patch } : h)),
    })
  }
  function patchOverlord(patch: Partial<TrackedOverlord>) {
    if (!session) return
    persist({ ...session, overlord: { ...session.overlord, ...patch } })
  }
  function saveScenario(sc: PlayedScenario) {
    if (!session) return
    const exists = session.scenarios.some((s) => s.id === sc.id)
    persist({
      ...session,
      scenarios: exists ? session.scenarios.map((s) => (s.id === sc.id ? sc : s)) : [...session.scenarios, sc],
    })
  }
  function removeScenario(id: string) {
    if (!session) return
    persist({ ...session, scenarios: session.scenarios.filter((s) => s.id !== id) })
  }
  /** Weist einen Gegenstand aus der gemeinsamen Ausrüstung einem Helden (oder null) zu. */
  function reassignItemOwner(refId: string, toHeroLocalId: string | null) {
    if (!session) return
    persist({
      ...session,
      scenarios: session.scenarios.map((sc) => ({
        ...sc,
        rewards: {
          ...sc.rewards,
          grantedItems: sc.rewards.grantedItems.map((g) =>
            g.item.refId === refId ? { ...g, toHeroLocalId } : g,
          ),
        },
        shopping: {
          ...sc.shopping,
          bought: sc.shopping.bought.map((b) =>
            b.item.refId === refId ? { ...b, toHeroLocalId } : b,
          ),
        },
      })),
    })
  }
  function setRumors(rumors: TrackedRumor[]) {
    patchSession({ rumors })
  }
  function setAdvancedQuests(advancedQuests: TrackedAdvancedQuest[]) {
    patchSession({ advancedQuests })
  }

  return {
    session,
    live,
    persist,
    patchSession,
    addHero,
    removeHero,
    patchHero,
    patchOverlord,
    saveScenario,
    removeScenario,
    reassignItemOwner,
    setRumors,
    setAdvancedQuests,
  }
}
