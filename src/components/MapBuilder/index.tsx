import { useState, useCallback } from 'react'
import TileSidebar from './TileSidebar'
import MapGrid from './MapGrid'
import type { PlacedMapTile, Rotation } from './types'
import { MAP_TILES } from '../../data/mapTiles'

function nextRotation(r: Rotation): Rotation {
  const map: Record<Rotation, Rotation> = { 0: 90, 90: 180, 180: 270, 270: 0 }
  return map[r]
}

let instanceCounter = 0
const newId = () => `tile-${++instanceCounter}-${Date.now()}`

export default function MapBuilder() {
  const [placedTiles, setPlacedTiles] = useState<PlacedMapTile[]>([])
  const [selectedTileId, setSelectedTileId] = useState<string | null>(null)
  const [selectedInstanceId, setSelectedInstanceId] = useState<string | null>(null)

  const handleSelectPalette = useCallback((id: string) => {
    setSelectedTileId((prev) => (prev === id ? null : id))
    setSelectedInstanceId(null)
  }, [])

  const handlePlaceTile = useCallback(
    (col: number, row: number) => {
      if (!selectedTileId) return
      setPlacedTiles((prev) => [
        ...prev,
        { instanceId: newId(), tileId: selectedTileId, col, row, rotation: 0 },
      ])
    },
    [selectedTileId],
  )

  const handleSelectInstance = useCallback((id: string | null) => {
    setSelectedInstanceId(id)
    setSelectedTileId(null)
  }, [])

  const rotateSelected = () => {
    if (!selectedInstanceId) return
    setPlacedTiles((prev) =>
      prev.map((t) =>
        t.instanceId === selectedInstanceId
          ? { ...t, rotation: nextRotation(t.rotation) }
          : t,
      ),
    )
  }

  const deleteSelected = () => {
    if (!selectedInstanceId) return
    setPlacedTiles((prev) => prev.filter((t) => t.instanceId !== selectedInstanceId))
    setSelectedInstanceId(null)
  }

  const clearAll = () => {
    setPlacedTiles([])
    setSelectedTileId(null)
    setSelectedInstanceId(null)
  }

  const selectedDef = selectedTileId ? MAP_TILES.find((t) => t.id === selectedTileId) : null
  const selectedInst = selectedInstanceId
    ? placedTiles.find((t) => t.instanceId === selectedInstanceId)
    : null

  return (
    <div className="flex flex-col h-full gap-0">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-dungeon-900 border-b border-dungeon-700 flex-wrap">
        {selectedDef ? (
          <span className="text-gold-400 text-sm font-semibold">
            Ausgewählt: <span className="text-gold-300">{selectedDef.label}</span>
            <span className="text-gray-500 ml-1 text-xs">({selectedDef.cols}×{selectedDef.rows}) – auf Karte klicken zum Platzieren</span>
          </span>
        ) : selectedInst ? (
          <span className="text-blue-400 text-sm">
            Plättchen ausgewählt
            <span className="text-gray-500 ml-1 text-xs">(Rotation: {selectedInst.rotation}°)</span>
          </span>
        ) : (
          <span className="text-gray-500 text-sm">
            Plättchen in der Seitenleiste auswählen → auf Karte klicken
          </span>
        )}

        <div className="flex gap-2 ml-auto">
          <button
            onClick={rotateSelected}
            disabled={!selectedInstanceId}
            className="btn-secondary text-xs px-3 py-1.5 disabled:opacity-30"
            title="Ausgewähltes Plättchen drehen (R)"
          >
            ↻ Drehen
          </button>
          <button
            onClick={deleteSelected}
            disabled={!selectedInstanceId}
            className="text-xs px-3 py-1.5 rounded bg-red-950 text-red-400 border border-red-900 hover:bg-red-900 disabled:opacity-30 transition-colors"
            title="Ausgewähltes Plättchen löschen (Entf)"
          >
            🗑 Entfernen
          </button>
          <button
            onClick={clearAll}
            disabled={placedTiles.length === 0}
            className="text-xs px-3 py-1.5 rounded bg-dungeon-700 text-gray-400 border border-dungeon-600 hover:bg-dungeon-600 disabled:opacity-30 transition-colors"
          >
            Alle löschen
          </button>
          <span className="text-gray-600 text-xs self-center">{placedTiles.length} Plättchen</span>
        </div>
      </div>

      {/* Builder body */}
      <div className="flex flex-1 min-h-0 overflow-hidden" style={{ height: 'calc(100vh - 220px)' }}>
        <TileSidebar selectedTileId={selectedTileId} onSelect={handleSelectPalette} />
        <MapGrid
          tiles={placedTiles}
          selectedInstanceId={selectedInstanceId}
          selectedTileId={selectedTileId}
          onPlaceTile={handlePlaceTile}
          onSelectInstance={handleSelectInstance}
        />
      </div>
    </div>
  )
}
