import { useState, useMemo } from 'react'
import { useGameStore } from '../store/useGameStore'
import type { Quest, Encounter, MapData, PlacedTile, PlacedMonster } from '../types/game'
import type { PlacedMapTile } from '../components/MapBuilder/types'
import MapBuilder from '../components/MapBuilder'
import { MONSTERS } from '../data/monsters'
import { HEROES, ARCHETYPE_COLORS } from '../data/heroes'
import { GRID_COLS, GRID_ROWS } from '../components/MapBuilder/constants'

const uid = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(36).slice(2)}`

function emptyMapData(): MapData {
  return { tiles: [], overlays: [], width: GRID_COLS, height: GRID_ROWS }
}

function newEncounter(index: number): Encounter {
  return {
    id: uid(),
    title: `Begegnung ${index}`,
    mapData: emptyMapData(),
    flavourText: '',
    monsters: [],
    setup: '',
    specialRules: '',
    reinforcements: '',
    victoryConditions: '',
    rewards: '',
    story: '',
  }
}

function newQuest(): Quest {
  const now = new Date().toISOString()
  return {
    id: uid(),
    title: 'Neue Quest',
    description: '',
    createdAt: now,
    updatedAt: now,
    heroIds: [],
    encounters: [newEncounter(1)],
  }
}

// Map between the domain tile shape and the builder's native shape.
const toBuilderTiles = (tiles: PlacedTile[]): PlacedMapTile[] =>
  tiles.map((t) => ({
    instanceId: t.id,
    tileId: t.tileId,
    col: t.x,
    row: t.y,
    rotation: t.rotation,
  }))

const toDomainTiles = (tiles: PlacedMapTile[]): PlacedTile[] =>
  tiles.map((t) => ({
    id: t.instanceId,
    tileId: t.tileId,
    x: t.col,
    y: t.row,
    rotation: t.rotation,
  }))

interface TextFieldProps {
  label: string
  value: string
  onChange: (v: string) => void
  rows?: number
  placeholder?: string
}

function TextField({ label, value, onChange, rows = 3, placeholder }: TextFieldProps) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-gold-400 mb-1">{label}</span>
      <textarea
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-dungeon-900 border border-dungeon-700 rounded px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-gold-500 resize-y"
      />
    </label>
  )
}

function HeroPicker({
  selectedIds,
  availableHeroIds,
  onToggle,
}: {
  selectedIds: string[]
  availableHeroIds: string[]
  onToggle: (id: string) => void
}) {
  const heroes = HEROES.filter((h) => availableHeroIds.includes(h.id))
  const MAX = 4

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-gold-400">Helden</span>
        <span className="text-xs text-gray-500">
          {selectedIds.length}/{MAX} gewählt
        </span>
        {selectedIds.length > MAX && (
          <span className="text-xs text-amber-400">⚠ Mehr als {MAX} Helden</span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {heroes.map((hero) => {
          const selected = selectedIds.includes(hero.id)
          const colorClass = ARCHETYPE_COLORS[hero.archetype]
          return (
            <button
              key={hero.id}
              onClick={() => onToggle(hero.id)}
              title={hero.name}
              className={`relative w-16 rounded-md overflow-hidden border-2 transition-all focus:outline-none ${
                selected
                  ? 'border-gold-400 shadow-[0_0_8px_rgba(251,191,36,0.4)]'
                  : 'border-dungeon-600 opacity-60 hover:opacity-90 hover:border-dungeon-500'
              }`}
            >
              {/* Portrait: crop character from left of landscape card */}
              <div className="aspect-[3/4] overflow-hidden bg-dungeon-900">
                {hero.imageUrl ? (
                  <img
                    src={hero.imageUrl}
                    alt={hero.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'left center' }}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600 text-lg">
                    ⚔
                  </div>
                )}
              </div>
              {/* Archetype color bar + name */}
              <div className={`px-1 py-0.5 text-center ${colorClass}`}>
                <span className="block text-[9px] font-semibold leading-tight truncate">
                  {hero.name.split(' ')[0]}
                </span>
              </div>
              {/* Selected checkmark overlay */}
              {selected && (
                <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-gold-400 flex items-center justify-center">
                  <span className="text-dungeon-950 text-[9px] font-black leading-none">✓</span>
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function QuestEditorPage() {
  const quests = useGameStore((s) => s.quests)
  const addQuest = useGameStore((s) => s.addQuest)
  const updateQuest = useGameStore((s) => s.updateQuest)
  const deleteQuest = useGameStore((s) => s.deleteQuest)
  const ownedExpansionIds = useGameStore((s) => s.ownedExpansionIds)

  const availableMonsters = useMemo(
    () => MONSTERS.filter((m) => ownedExpansionIds.includes(m.expansionId)),
    [ownedExpansionIds],
  )

  const availableHeroIds = useMemo(
    () => HEROES.filter((h) => ownedExpansionIds.includes(h.expansionId)).map((h) => h.id),
    [ownedExpansionIds],
  )

  const [selectedQuestId, setSelectedQuestId] = useState<string | null>(null)
  const [activeEncounterId, setActiveEncounterId] = useState<string | null>(null)

  const quest = quests.find((q) => q.id === selectedQuestId) ?? null
  const encounter =
    quest?.encounters.find((e) => e.id === activeEncounterId) ?? quest?.encounters[0] ?? null

  function persist(next: Quest) {
    updateQuest({ ...next, updatedAt: new Date().toISOString() })
  }

  function handleCreate() {
    const q = newQuest()
    addQuest(q)
    setSelectedQuestId(q.id)
    setActiveEncounterId(q.encounters[0].id)
  }

  function patchQuest(patch: Partial<Pick<Quest, 'title' | 'description' | 'heroIds'>>) {
    if (!quest) return
    persist({ ...quest, ...patch })
  }

  function toggleHero(heroId: string) {
    if (!quest) return
    const current = quest.heroIds ?? []
    const next = current.includes(heroId)
      ? current.filter((id) => id !== heroId)
      : [...current, heroId]
    patchQuest({ heroIds: next })
  }

  function patchEncounter(patch: Partial<Encounter>) {
    if (!quest || !encounter) return
    persist({
      ...quest,
      encounters: quest.encounters.map((e) =>
        e.id === encounter.id ? { ...e, ...patch } : e,
      ),
    })
  }

  function addEncounter() {
    if (!quest) return
    const enc = newEncounter(quest.encounters.length + 1)
    persist({ ...quest, encounters: [...quest.encounters, enc] })
    setActiveEncounterId(enc.id)
  }

  function removeEncounter(id: string) {
    if (!quest || quest.encounters.length <= 1) return
    const remaining = quest.encounters.filter((e) => e.id !== id)
    persist({ ...quest, encounters: remaining })
    if (activeEncounterId === id) setActiveEncounterId(remaining[0].id)
  }

  function removeQuest(id: string) {
    deleteQuest(id)
    if (selectedQuestId === id) {
      setSelectedQuestId(null)
      setActiveEncounterId(null)
    }
  }

  // ─── Quest-Liste ────────────────────────────────────────────────────
  if (!quest) {
    return (
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Quest-Editor</h2>
            <p className="text-gray-400 text-sm">
              Eigene Quests mit mehreren Begegnungen, Karten und Erzähltext erstellen.
            </p>
          </div>
          <button onClick={handleCreate} className="btn-primary text-sm whitespace-nowrap">
            + Neue Quest
          </button>
        </div>

        {quests.length === 0 ? (
          <div className="card flex flex-col items-center justify-center py-20 gap-3 border-dashed border-dungeon-600">
            <span className="text-5xl opacity-40">📜</span>
            <h3 className="font-display text-xl text-gray-500">Noch keine Quests</h3>
            <p className="text-gray-600 text-sm text-center max-w-md">
              Lege deine erste Quest an. Quests werden lokal in deinem Browser gespeichert.
            </p>
            <button onClick={handleCreate} className="btn-secondary text-sm mt-2">
              Erste Quest erstellen
            </button>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quests.map((q) => (
              <div
                key={q.id}
                className="card hover:border-gold-500 transition-colors cursor-pointer flex flex-col gap-2"
                onClick={() => {
                  setSelectedQuestId(q.id)
                  setActiveEncounterId(q.encounters[0]?.id ?? null)
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg text-gold-300 font-bold">{q.title}</h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeQuest(q.id)
                    }}
                    className="text-xs text-gray-600 hover:text-red-400 shrink-0"
                    title="Quest löschen"
                  >
                    🗑
                  </button>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2 min-h-[2.5rem]">
                  {q.description || 'Keine Beschreibung'}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-gray-600 text-xs">
                    {q.encounters.length} Begegnung{q.encounters.length === 1 ? '' : 'en'}
                  </span>
                  {(q.heroIds?.length ?? 0) > 0 && (
                    <div className="flex -space-x-1.5">
                      {(q.heroIds ?? []).slice(0, 4).map((hid) => {
                        const h = HEROES.find((x) => x.id === hid)
                        if (!h) return null
                        return (
                          <div
                            key={hid}
                            title={h.name}
                            className={`w-7 h-7 rounded-full overflow-hidden border-2 ${ARCHETYPE_COLORS[h.archetype].split(' ')[2] ?? 'border-dungeon-600'}`}
                          >
                            {h.imageUrl ? (
                              <img
                                src={h.imageUrl}
                                alt={h.name}
                                className="w-full h-full object-cover"
                                style={{ objectPosition: 'left center' }}
                              />
                            ) : (
                              <div className="w-full h-full bg-dungeon-700" />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  // ─── Quest-Detail ───────────────────────────────────────────────────
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            setSelectedQuestId(null)
            setActiveEncounterId(null)
          }}
          className="btn-secondary text-sm"
        >
          ← Übersicht
        </button>
        <span className="text-gray-600 text-xs">
          Änderungen werden automatisch gespeichert.
        </span>
        <button
          onClick={() => removeQuest(quest.id)}
          className="ml-auto text-xs px-3 py-1.5 rounded bg-red-950 text-red-400 border border-red-900 hover:bg-red-900 transition-colors"
        >
          🗑 Quest löschen
        </button>
      </div>

      <div className="card space-y-3">
        <label className="block">
          <span className="block text-xs font-semibold text-gold-400 mb-1">Titel</span>
          <input
            value={quest.title}
            onChange={(e) => patchQuest({ title: e.target.value })}
            className="w-full bg-dungeon-900 border border-dungeon-700 rounded px-3 py-2 text-base text-gray-100 font-display focus:outline-none focus:border-gold-500"
          />
        </label>
        <TextField
          label="Beschreibung"
          value={quest.description}
          onChange={(v) => patchQuest({ description: v })}
          rows={2}
          placeholder="Worum geht es in dieser Quest?"
        />
      </div>

      {/* Heldenauswahl */}
      <div className="card">
        <HeroPicker
          selectedIds={quest.heroIds ?? []}
          availableHeroIds={availableHeroIds}
          onToggle={toggleHero}
        />
      </div>

      {/* Begegnungs-Reiter */}
      <div className="flex items-center gap-2 flex-wrap">
        {quest.encounters.map((e, i) => (
          <button
            key={e.id}
            onClick={() => setActiveEncounterId(e.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
              e.id === encounter?.id
                ? 'bg-gold-500 text-dungeon-950 border-gold-500'
                : 'bg-dungeon-700 text-gray-300 border-dungeon-600 hover:border-gold-500'
            }`}
          >
            {i + 1}. {e.title}
          </button>
        ))}
        <button
          onClick={addEncounter}
          className="px-3 py-1.5 rounded-full text-sm font-medium bg-dungeon-800 text-gray-400 border border-dashed border-dungeon-600 hover:text-gold-400 hover:border-gold-500 transition-all"
        >
          + Begegnung
        </button>
      </div>

      {encounter && (
        <div className="space-y-4">
          <div className="card space-y-3">
            <div className="flex items-center gap-3">
              <label className="flex-1">
                <span className="block text-xs font-semibold text-gold-400 mb-1">
                  Titel der Begegnung
                </span>
                <input
                  value={encounter.title}
                  onChange={(e) => patchEncounter({ title: e.target.value })}
                  className="w-full bg-dungeon-900 border border-dungeon-700 rounded px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-gold-500"
                />
              </label>
              {quest.encounters.length > 1 && (
                <button
                  onClick={() => removeEncounter(encounter.id)}
                  className="self-end text-xs px-3 py-2 rounded bg-red-950 text-red-400 border border-red-900 hover:bg-red-900 transition-colors"
                >
                  🗑 Entfernen
                </button>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <TextField
                label="Erzähltext"
                value={encounter.flavourText}
                onChange={(v) => patchEncounter({ flavourText: v })}
                placeholder="Atmosphärischer Einstiegstext…"
              />
              <TextField
                label="Aufbau"
                value={encounter.setup}
                onChange={(v) => patchEncounter({ setup: v })}
                placeholder="Plättchen, Marker, Startaufstellung…"
              />
              <TextField
                label="Sonderregeln"
                value={encounter.specialRules}
                onChange={(v) => patchEncounter({ specialRules: v })}
              />
              <TextField
                label="Verstärkungen"
                value={encounter.reinforcements}
                onChange={(v) => patchEncounter({ reinforcements: v })}
              />
              <TextField
                label="Siegbedingungen"
                value={encounter.victoryConditions}
                onChange={(v) => patchEncounter({ victoryConditions: v })}
              />
              <TextField
                label="Belohnungen"
                value={encounter.rewards}
                onChange={(v) => patchEncounter({ rewards: v })}
              />
            </div>
            <TextField
              label="Geschichte / Abschluss"
              value={encounter.story}
              onChange={(v) => patchEncounter({ story: v })}
              rows={2}
            />
          </div>

          <div className="card p-0 overflow-hidden">
            <div className="px-4 py-2 border-b border-dungeon-700">
              <h3 className="font-display text-sm text-gold-400 font-bold">Karte</h3>
              <p className="text-gray-500 text-xs">
                Plättchen platzieren, drehen und verschieben – wird mit der Begegnung gespeichert.
              </p>
            </div>
            <MapBuilder
              key={encounter.id}
              tiles={toBuilderTiles(encounter.mapData.tiles)}
              onTilesChange={(t) =>
                patchEncounter({
                  mapData: { ...encounter.mapData, tiles: toDomainTiles(t) },
                })
              }
              monsters={encounter.monsters}
              onMonstersChange={(m: PlacedMonster[]) => patchEncounter({ monsters: m })}
              availableMonsters={availableMonsters}
              mapHeight="520px"
            />
          </div>
        </div>
      )}
    </div>
  )
}
