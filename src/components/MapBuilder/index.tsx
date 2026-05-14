import { useState, useCallback, useMemo } from 'react'
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import TileSidebar from './TileSidebar'
import MapGrid, { effectiveDims } from './MapGrid'
import type { PlacedMapTile, Rotation } from './types'
import { MAP_TILES, getTilePartner } from '../../data/mapTiles'
import { CELL_SIZE, GRID_COLS, GRID_ROWS } from './constants'

function nextRotation(r: Rotation): Rotation {
  const map: Record<Rotation, Rotation> = { 0: 90, 90: 180, 180: 270, 270: 0 }
  return map[r]
}

let counter = 0
const newId = () => `tile-${++counter}-${Date.now()}`

export default function MapBuilder() {
  const [placedTiles, setPlacedTiles] = useState<PlacedMapTile[]>([])
  const [selectedTileId, setSelectedTileId] = useState<string | null>(null)
  const [selectedInstanceId, setSelectedInstanceId] = useState<string | null>(null)
  const [partnerWarningId, setPartnerWarningId] = useState<string | null>(null)

  const placedTileIds = useMemo(
    () => new Set(placedTiles.map((t) => t.tileId)),
    [placedTiles],
  )

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } }),
  )

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, delta } = event
    if (!delta.x && !delta.y) return
    const instanceId = active.id as string

    setPlacedTiles((prev) =>
      prev.map((t) => {
        if (t.instanceId !== instanceId) return t
        const { cols, rows } = effectiveDims(t)
        const newCol = Math.max(0, Math.min(GRID_COLS - cols, t.col + Math.round(delta.x / CELL_SIZE)))
        const newRow = Math.max(0, Math.min(GRID_ROWS - rows, t.row + Math.round(delta.y / CELL_SIZE)))
        return { ...t, col: newCol, row: newRow }
      }),
    )
  }, [])

  const handleSelectPalette = useCallback((id: string) => {
    const partner = getTilePartner(id)
    if (partner && placedTileIds.has(partner)) {
      setPartnerWarningId(id)
    } else {
      setPartnerWarningId(null)
    }
    setSelectedTileId((prev) => (prev === id ? null : id))
    setSelectedInstanceId(null)
  }, [placedTileIds])

  const handlePlaceTile = useCallback(
    (col: number, row: number) => {
      if (!selectedTileId) return
      const def = MAP_TILES.find((t) => t.id === selectedTileId)
      if (!def) return
      const newCol = Math.min(col, GRID_COLS - def.cols)
      const newRow = Math.min(row, GRID_ROWS - def.rows)
      setPlacedTiles((prev) => [
        ...prev,
        { instanceId: newId(), tileId: selectedTileId, col: newCol, row: newRow, rotation: 0 },
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
        t.instanceId === selectedInstanceId ? { ...t, rotation: nextRotation(t.rotation) } : t,
      ),
    )
  }

  const deleteSelected = () => {
    if (!selectedInstanceId) return
    setPlacedTiles((prev) => prev.filter((t) => t.instanceId !== selectedInstanceId))
    setSelectedInstanceId(null)
  }

  const cancelPlace = () => {
    setSelectedTileId(null)
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
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex flex-col h-full gap-0">
        {/* Toolbar */}
        <div className="flex items-center gap-2 px-3 py-2 bg-dungeon-900 border-b border-dungeon-700 flex-wrap min-h-[44px]">
          {selectedDef ? (
            <span className="text-gold-400 text-sm font-semibold flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: selectedDef.color }} />
              {selectedDef.label}
              <span className="text-gray-500 text-xs font-normal">
                {selectedDef.cols}×{selectedDef.rows} – Auf Karte klicken zum Platzieren
              </span>
              <button onClick={cancelPlace} className="text-xs text-gray-500 hover:text-gray-300 ml-1">
                ✕ Abbrechen
              </button>
            </span>
          ) : selectedInst ? (
            <span className="text-blue-400 text-sm flex items-center gap-2">
              Plättchen ausgewählt
              <span className="text-gray-500 text-xs">{selectedInst.rotation}° – Ziehen zum Verschieben</span>
            </span>
          ) : (
            <span className="text-gray-500 text-sm">
              Links Plättchen auswählen → platzieren; Ziehen → verschieben
            </span>
          )}
          {partnerWarningId && (
            <span className="flex items-center gap-1.5 text-amber-400 text-xs bg-amber-950 border border-amber-800 px-2 py-1 rounded ml-2">
              ⚠ {partnerWarningId} kann wahrscheinlich nicht verwendet werden – die andere Seite ({getTilePartner(partnerWarningId)}) ist bereits platziert.
              <button onClick={() => setPartnerWarningId(null)} className="text-amber-600 hover:text-amber-400 ml-1">✕</button>
            </span>
          )}

          <div className="flex gap-2 ml-auto">
            <button
              onClick={rotateSelected}
              disabled={!selectedInstanceId}
              className="btn-secondary text-xs px-3 py-1.5 disabled:opacity-30"
              title="Drehen (R)"
            >
              ↻ Drehen
            </button>
            <button
              onClick={deleteSelected}
              disabled={!selectedInstanceId}
              className="text-xs px-3 py-1.5 rounded bg-red-950 text-red-400 border border-red-900 hover:bg-red-900 disabled:opacity-30 transition-colors"
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
            <span className="text-gray-600 text-xs self-center pl-1">
              {placedTiles.length} Plättchen
            </span>
          </div>
        </div>

        {/* Builder */}
        <div
          className="flex flex-1 min-h-0 overflow-hidden"
          style={{ height: 'calc(100vh - 180px)' }}
        >
          <TileSidebar selectedTileId={selectedTileId} placedTileIds={placedTileIds} onSelect={handleSelectPalette} />
          <MapGrid
            tiles={placedTiles}
            selectedInstanceId={selectedInstanceId}
            selectedTileId={selectedTileId}
            onPlaceTile={handlePlaceTile}
            onSelectInstance={handleSelectInstance}
          />
        </div>
      </div>
    </DndContext>
  )
}
