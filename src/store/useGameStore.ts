import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Quest } from '../types/game'

interface GameStore {
  ownedExpansionIds: string[]
  quests: Quest[]

  toggleExpansion: (id: string) => void
  setOwnedExpansions: (ids: string[]) => void
  addQuest: (quest: Quest) => void
  updateQuest: (quest: Quest) => void
  deleteQuest: (id: string) => void
}

// Persist-Schema-Version. Bei JEDER Änderung an der Struktur der persistierten
// Felder (ownedExpansionIds, quests) hochzählen und in migrate() einen
// Migrationsschritt ergänzen — sonst verwirft zustand die Nutzerdaten.
const PERSIST_VERSION = 1

/** Stellt sicher, dass persistierter State die erwarteten Grundtypen hat.
 *  Schützt vor manipuliertem/korruptem localStorage (Crash beim Rendern). */
function sanitizePersisted(persisted: unknown): Partial<GameStore> {
  const p = (typeof persisted === 'object' && persisted !== null ? persisted : {}) as Record<string, unknown>
  return {
    ownedExpansionIds: Array.isArray(p.ownedExpansionIds)
      ? p.ownedExpansionIds.filter((id): id is string => typeof id === 'string')
      : ['base'],
    quests: Array.isArray(p.quests)
      ? (p.quests.filter(
          (q) => typeof q === 'object' && q !== null && typeof (q as Quest).title === 'string' && Array.isArray((q as Quest).encounters),
        ) as Quest[])
      : [],
  }
}

export const useGameStore = create<GameStore>()(
  persist(
    (set) => ({
      ownedExpansionIds: ['base'],
      quests: [],

      toggleExpansion: (id) =>
        set((state) => ({
          ownedExpansionIds: state.ownedExpansionIds.includes(id)
            ? state.ownedExpansionIds.filter((eid) => eid !== id)
            : [...state.ownedExpansionIds, id],
        })),

      setOwnedExpansions: (ids) => set({ ownedExpansionIds: ids }),

      addQuest: (quest) =>
        set((state) => ({ quests: [...state.quests, quest] })),

      updateQuest: (quest) =>
        set((state) => ({
          quests: state.quests.map((q) => (q.id === quest.id ? quest : q)),
        })),

      deleteQuest: (id) =>
        set((state) => ({
          quests: state.quests.filter((q) => q.id !== id),
        })),
    }),
    {
      name: 'quest-vault-reborn',
      version: PERSIST_VERSION,
      migrate: (persisted, _version) => {
        // v0 → v1: keine Strukturänderung, nur Validierung nachgerüstet.
        // Künftige Migrationen hier als Kette ergänzen (if (version < 2) {...}).
        return sanitizePersisted(persisted)
      },
      merge: (persisted, current) => ({
        ...current,
        ...sanitizePersisted(persisted),
      }),
    },
  ),
)
