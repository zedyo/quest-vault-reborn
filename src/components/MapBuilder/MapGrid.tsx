import { useRef, CSSProperties, useState } from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { MAP_TILES, tileImageUrl } from '../../data/mapTiles'
import type { PlacedMapTile } from './types'
import { CELL_SIZE, GRID_COLS, GRID_ROWS } from './constants'

export function effectiveDims(tile: PlacedMapTile) {
  const def = MAP_TILES.find((t) => t.id === tile.tileId)
  if (!def) return { cols: 1, rows: 1 }
  const rotated = tile.rotation === 90 || tile.rotation === 270
  return rotated ? { cols: def.rows, rows: def.cols } : { cols: def.cols, rows: def.rows }
}

interface DraggableTileProps {
  tile: PlacedMapTile
  isSelected: boolean
  placingMode: boolean
  onSelect: (id: string) => void
}

function DraggableTile({ tile, isSelected, placingMode, onSelect }: DraggableTileProps) {
  const def = MAP_TILES.find((t) => t.id === tile.tileId)
  const { cols, rows } = effectiveDims(tile)
  const [imgError, setImgError] = useState(false)

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: tile.instanceId,
    disabled: placingMode,
  })

  const effW = cols * CELL_SIZE
  const effH = rows * CELL_SIZE

  const style: CSSProperties = {
    position: 'absolute',
    left: tile.col * CELL_SIZE,
    top: tile.row * CELL_SIZE,
    width: effW,
    height: effH,
    backgroundColor: imgError ? (def?.color ?? '#374151') : 'transparent',
    border: isSelected
      ? '2px solid #f59e0b'
      : isDragging
        ? '2px solid #60a5fa'
        : '1px solid rgba(255,255,255,0.2)',
    borderRadius: 3,
    // clip-path clips post-transform content (unlike overflow:hidden which clips
    // the layout box before transforms — causing cropping on rotated non-square tiles).
    clipPath: 'inset(0 round 3px)',
    cursor: placingMode ? 'crosshair' : isDragging ? 'grabbing' : 'grab',
    zIndex: isDragging ? 100 : isSelected ? 10 : 1,
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.75 : 1,
    userSelect: 'none',
    touchAction: 'none',
    boxShadow: isDragging
      ? '0 8px 24px rgba(0,0,0,0.6)'
      : isSelected
        ? '0 0 0 2px rgba(245,158,11,0.5)'
        : undefined,
  }

  const imgUrl = def ? tileImageUrl(def) : null
  // Natural (unrotated) tile dimensions in pixels
  const natW = (def?.cols ?? cols) * CELL_SIZE
  const natH = (def?.rows ?? rows) * CELL_SIZE
  const fontSize = Math.min(cols, rows) >= 3 ? 11 : 9

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={(e) => {
        if (placingMode) return
        e.stopPropagation()
        onSelect(tile.instanceId)
      }}
      title={`${def?.label} (${def?.cols}×${def?.rows}) – Ziehen zum Verschieben`}
    >
      {imgUrl && !imgError ? (
        /*
         * Image rotation: the outer div has the EFFECTIVE (possibly swapped) dimensions.
         * The image has its NATURAL dimensions and is rotated via CSS transform.
         * translateX/Y(-50%) centers the natural image in the container,
         * then rotate() spins it — the visual result fills the container exactly.
         */
        <img
          src={imgUrl}
          alt={def?.label}
          onError={() => setImgError(true)}
          style={{
            position: 'absolute',
            left: (effW - natW) / 2,
            top: (effH - natH) / 2,
            width: natW,
            height: natH,
            transform: `rotate(${tile.rotation}deg)`,
            transformOrigin: 'center',
            objectFit: 'fill',
            display: 'block',
            pointerEvents: 'none',
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: def?.color ?? '#374151',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize,
              color: 'rgba(255,255,255,0.75)',
              textAlign: 'center',
              lineHeight: 1.3,
              padding: 2,
              pointerEvents: 'none',
            }}
          >
            {def?.label}
            {tile.rotation !== 0 && (
              <span style={{ display: 'block', fontSize: 8, opacity: 0.55 }}>{tile.rotation}°</span>
            )}
          </span>
        </div>
      )}
    </div>
  )
}

interface Props {
  tiles: PlacedMapTile[]
  selectedInstanceId: string | null
  selectedTileId: string | null
  onPlaceTile: (col: number, row: number) => void
  onSelectInstance: (id: string | null) => void
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
    if (!selectedTileId) {
      onSelectInstance(null)
      return
    }
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
        style={{
          position: 'relative',
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
        {tiles.map((tile) => (
          <DraggableTile
            key={tile.instanceId}
            tile={tile}
            isSelected={tile.instanceId === selectedInstanceId}
            placingMode={selectedTileId !== null}
            onSelect={onSelectInstance}
          />
        ))}
      </div>
    </div>
  )
}
