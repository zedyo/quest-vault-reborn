import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CampaignSession } from '../types/session'
import { sanitizeSessionList } from '../utils/sessionImport'
import { storageKey } from '../utils/previewBuild'

// Eigener Store für den Kampagnen-Session-Tracker – bewusst GETRENNT vom
// Spieldaten-Store (`useGameStore`, Key `quest-vault-reborn`). So bleibt dessen
// Persist-Schema (Quests + Sammlung) unangetastet; dieser Store folgt dem
// gleichen Muster wie theme.ts/builderDraft.ts: eigener localStorage-Key.

interface SessionStore {
  sessions: CampaignSession[]
  /** Aktuell geöffnete Session (null = Übersichtsliste). Persistiert über Reloads. */
  activeSessionId: string | null

  addSession: (session: CampaignSession) => void
  updateSession: (session: CampaignSession) => void
  deleteSession: (id: string) => void
  setActiveSession: (id: string | null) => void
}

// Persist-Schema-Version. Bei JEDER Änderung an der Struktur der persistierten
// Felder hochzählen und in migrate() einen Migrationsschritt ergänzen.
const PERSIST_VERSION = 3

/** Schützt vor manipuliertem/korruptem localStorage (Crash beim Rendern). */
function sanitizePersisted(persisted: unknown): Partial<SessionStore> {
  const p = (typeof persisted === 'object' && persisted !== null ? persisted : {}) as Record<string, unknown>
  const sessions = sanitizeSessionList(p.sessions)
  const ids = new Set(sessions.map((s) => s.id))
  const activeSessionId =
    typeof p.activeSessionId === 'string' && ids.has(p.activeSessionId) ? p.activeSessionId : null
  return { sessions, activeSessionId }
}

export const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({
      sessions: [],
      activeSessionId: null,

      addSession: (session) =>
        set((state) => ({ sessions: [...state.sessions, session], activeSessionId: session.id })),

      updateSession: (session) =>
        set((state) => ({
          sessions: state.sessions.map((s) => (s.id === session.id ? session : s)),
        })),

      deleteSession: (id) =>
        set((state) => ({
          sessions: state.sessions.filter((s) => s.id !== id),
          activeSessionId: state.activeSessionId === id ? null : state.activeSessionId,
        })),

      setActiveSession: (id) => set({ activeSessionId: id }),
    }),
    {
      name: storageKey('qvr-sessions'),
      version: PERSIST_VERSION,
      migrate: (persisted, _version) => {
        // Migrationskette – alle Schritte laufen über `sanitizeSession`, das die
        // neuen Felder mit Defaults auffüllt und dabei nichts Bestehendes verliert:
        //   v1 → v2: neue Live-Zähler (threatTokens/partyFateTokens); fehlende Felder → 0.
        //   v2 → v3: archived/note/epic + rumors/advancedQuests + Helden-Start-XP/-Schicksal
        //            + Szenario-Felder (playedAt/threatAfter/fateAfter/rumorPlayedId/market).
        //            `overlord.activeRumorIds` wird dabei EINMALIG nach `rumors`
        //            (status 'in-play') übertragen und geleert.
        // Alle Schritte sind idempotent → ein Aufruf von sanitizePersisted genügt.
        return sanitizePersisted(persisted)
      },
      merge: (persisted, current) => ({
        ...current,
        ...sanitizePersisted(persisted),
      }),
    },
  ),
)
