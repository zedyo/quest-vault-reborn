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
    },
  ),
)
