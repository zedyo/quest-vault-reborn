import { useRef } from 'react'
import { MAP_TILES } from '../../data/mapTiles'
import type { PlacedMapTile } from './types'

const CELL_SIZE = 48
const GRID_COLS = 28
const GRID_ROWS = 20

interface Props {
  tiles: PlacedMapTile[]
  selectedInstanceId: string | null
  selectedTileId: string | null
  onPlaceTile: (col: number, row: number) => void
  onSelectInstance: (id: string | null) => void
}

function effectiveDims(tile: PlacedMapTile) {
  const def = MAP_TILES.find((t) => t.id === tile.tileId)
  if (!def) return { cols: 1, rows: 1 }
  const rotated = tile.rotation === 90 || tile.rotation === 270
  return rotated
    ? { cols: def.rows, rows: def.cols }
    : { cols: def.cols, rows: def.rows }
}

export default function MapGrid({
  tiles,
  selectedInstanceId,
  selectedTileId,
  onPlaceTile,
  onSelectInstance,
}: Props) {
  const gridRef = useRef<HTMLDivElement>(null)

  const handleGridClick = (e: React.MouseEvent) => {
    if (!selectedTileId) return
    const rect = gridRef.current?.getBoundingClientRect()
    if (!rect) return
    const col = Math.floor((e.clientX - rect.left) / CELL_SIZE)
    const row = Math.floor((e.clientY - rect.top) / CELL_SIZE)
    if (col >= 0 && col < GRID_COLS && row >= 0 && row < GRID_ROWS) {
      onPlaceTile(col, row)
    }
  }

  return (
    <div className="flex-1 overflow-auto bg-dungeon-950 p-4">
      <div
        ref={gridRef}
        onClick={handleGridClick}
        className="relative select-none"
        style={{
          width: GRID_COLS * CELL_SIZE,
          height: GRID_ROWS * CELL_SIZE,
          backgroundImage: `
            linear-gradient(to right, #2a2a3a 1px, transparent 1px),
            linear-gradient(to bottom, #2a2a3a 1px, transparent 1px)
          `,
          backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          cursor: selectedTileId ? 'crosshair' : 'default',
        }}
      >
        {tiles.map((tile) => {
          const def = MAP_TILES.find((t) => t.id === tile.tileId)
          if (!def) return null
          const { cols, rows } = effectiveDims(tile)
          const isSelected = tile.instanceId === selectedInstanceId

          return (
            <div
              key={tile.instanceId}
              onClick={(e) => {
                e.stopPropagation()
                if (!selectedTileId) onSelectInstance(tile.instanceId)
              }}
              title={`${def.label} (${def.cols}×${def.rows}) – Klicken zum Auswählen`}
              style={{
                position: 'absolute',
                left: tile.col * CELL_SIZE,
                top: tile.row * CELL_SIZE,
                width: cols * CELL_SIZE,
                height: rows * CELL_SIZE,
                backgroundColor: def.color,
                border: isSelected ? '2px solid #f59e0b' : '1px solid rgba(255,255,255,0.15)',
                borderRadius: 3,
                cursor: selectedTileId ? 'crosshair' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                zIndex: isSelected ? 10 : 1,
              }}
            >
              <span
                style={{
                  fontSize: Math.min(cols, rows) >= 3 ? 11 : 9,
                  color: 'rgba(255,255,255,0.7)',
                  textAlign: 'center',
                  lineHeight: 1.2,
                  padding: 2,
                  transform: tile.rotation !== 0 ? `rotate(${tile.rotation}deg)` : undefined,
                }}
              >
                {def.label}
                {tile.rotation !== 0 && (
                  <span style={{ display: 'block', fontSize: 8, opacity: 0.6 }}>
                    {tile.rotation}°
                  </span>
                )}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { CELL_SIZE, GRID_COLS, GRID_ROWS }
