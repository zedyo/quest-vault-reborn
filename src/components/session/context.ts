// Kontext der Session-Shell: der geöffnete Spielstand + Live-Stand + alle
// Mutationen. Die Abschnitte (Überblick/Helden/Overlord/Verlauf/Einrichtung)
// hängen als Routen darunter und holen ihn per `useSessionCtx()`.

import { useOutletContext } from 'react-router-dom'
import type { CampaignSession } from '../../types/session'
import type { LiveState } from '../../store/sessionDerive'
import type { SessionMutations } from './useSessionMutations'

export type DeleteRequest =
  | { type: 'session'; id: string; name: string }
  | { type: 'hero'; id: string; name: string }
  | { type: 'scenario'; id: string; name: string }
  | { type: 'draft'; id: string; name: string }

export interface SessionCtx extends Omit<SessionMutations, 'session' | 'live'> {
  session: CampaignSession
  live: LiveState
  ownedExpansionIds: string[]
  requestDelete: (req: DeleteRequest) => void
}

export function useSessionCtx(): SessionCtx {
  return useOutletContext<SessionCtx>()
}
