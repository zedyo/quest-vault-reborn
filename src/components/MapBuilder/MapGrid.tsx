import { useRef, CSSProperties, useState, useCallback } from 'react'
import { useDraggable, useDroppable } from '@dnd-kit/core'
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
  zoom: number
}

function DraggableTile({ tile, isSelected, placingMode, onSelect, zoom }: DraggableTileProps) {
  const def = MAP_TILES.find((t) => t.id === tile.tileId)
  const { cols, rows } = effectiveDims(tile)
  const [imgError, setImgError] = useState(false)

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: tile.instanceId,
    disabled: placingMode,
  })

  const effW = cols * CELL_SIZE
  const effH = rows * CELL_SIZE
  const natW = (def?.cols ?? cols) * CELL_SIZE
  const natH = (def?.rows ?? rows) * CELL_SIZE

  // dnd-kit's transform is in screen pixels. The parent grid has transform:scale(zoom),
  // so a local-space translate of N gets rendered as N*zoom screen pixels.
  // Compensate by dividing so the tile tracks the cursor 1:1.
  const adjTransform = transform
    ? { ...transform, x: transform.x / zoom, y: transform.y / zoom }
    : null

  const style: CSSProperties = {
    position: 'absolute',
    left: tile.col * CELL_SIZE + (effW - natW) / 2,
    top: tile.row * CELL_SIZE + (effH - natH) / 2,
    width: natW,
    height: natH,
    overflow: 'hidden',
    borderRadius: 3,
    cursor: placingMode ? 'crosshair' : isDragging ? 'grabbing' : 'grab',
    zIndex: isDragging ? 100 : isSelected ? 10 : 1,
    transform: adjTransform
      ? `${CSS.Translate.toString(adjTransform)} rotate(${tile.rotation}deg)`
      : `rotate(${tile.rotation}deg)`,
    transformOrigin: 'center',
    opacity: isDragging ? 0.75 : 1,
    userSelect: 'none',
    touchAction: 'none',
    boxShadow: isSelected
      ? '0 0 0 2px #f59e0b, 0 0 0 4px rgba(245,158,11,0.35)'
      : isDragging
        ? '0 0 0 2px #60a5fa, 0 8px 24px rgba(0,0,0,0.6)'
        : '0 0 0 1px rgba(255,255,255,0.18)',
  }

  const imgUrl = def ? tileImageUrl(def) : null
  const fontSize = Math.min(natW, natH) >= 3 * CELL_SIZE ? 11 : 9

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
        <img
          src={imgUrl}
          alt={def?.label}
          onError={() => setImgError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block', pointerEvents: 'none' }}
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
  zoom: number
  isDraggingFromPalette: boolean
}

export default function MapGrid({
  tiles,
  selectedInstanceId,
  selectedTileId,
  onPlaceTile,
  onSelectInstance,
  zoom,
  isDraggingFromPalette,
}: Props) {
  const gridRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const topBarRef = useRef<HTMLDivElement>(null)
  const syncingScroll = useRef(false)

  const { setNodeRef: setDropRef } = useDroppable({ id: 'map-grid' })

  const scaledW = GRID_COLS * CELL_SIZE * zoom
  const scaledH = GRID_ROWS * CELL_SIZE * zoom

  const handleMainScroll = useCallback(() => {
    if (syncingScroll.current || !topBarRef.current || !scrollRef.current) return
    syncingScroll.current = true
    topBarRef.current.scrollLeft = scrollRef.current.scrollLeft
    syncingScroll.current = false
  }, [])

  const handleTopScroll = useCallback(() => {
    if (syncingScroll.current || !topBarRef.current || !scrollRef.current) return
    syncingScroll.current = true
    scrollRef.current.scrollLeft = topBarRef.current.scrollLeft
    syncingScroll.current = false
  }, [])

  const handleGridClick = (e: React.MouseEvent) => {
    if (!selectedTileId) {
      onSelectInstance(null)
      return
    }
    const rect = gridRef.current?.getBoundingClientRect()
    if (!rect) return
    // getBoundingClientRect returns scaled screen dimensions, so divide by scaled cell size
    const col = Math.floor((e.clientX - rect.left) / (CELL_SIZE * zoom))
    const row = Math.floor((e.clientY - rect.top) / (CELL_SIZE * zoom))
    if (col >= 0 && col < GRID_COLS && row >= 0 && row < GRID_ROWS) {
      onPlaceTile(col, row)
    }
  }

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden bg-dungeon-950">
      {/* Top horizontal scrollbar mirror — keeps horizontal scroll accessible without scrolling down */}
      <div
        ref={topBarRef}
        onScroll={handleTopScroll}
        style={{
          overflowX: isDraggingFromPalette ? 'hidden' : 'scroll',
          overflowY: 'hidden',
          height: 14,
          flexShrink: 0,
          backgroundColor: '#0f0f1a',
        }}
      >
        <div style={{ width: scaledW + 32, height: 1 }} />
      </div>

      {/* Main scroll area */}
      <div
        ref={scrollRef}
        onScroll={handleMainScroll}
        style={{
          flex: 1,
          minHeight: 0,
          overflowX: isDraggingFromPalette ? 'hidden' : 'scroll',
          overflowY: 'scroll',
          padding: 16,
          boxSizing: 'border-box',
        }}
      >
        {/* Wrapper sized to the scaled grid dimensions so scrollable area is correct.
            CSS transform:scale does not affect layout, so we need explicit dimensions here. */}
        <div style={{ width: scaledW, height: scaledH, position: 'relative', flexShrink: 0 }}>
          <div
            ref={(node) => {
              (gridRef as React.MutableRefObject<HTMLDivElement | null>).current = node
              setDropRef(node)
            }}
            onClick={handleGridClick}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: GRID_COLS * CELL_SIZE,
              height: GRID_ROWS * CELL_SIZE,
              transformOrigin: 'top left',
              transform: `scale(${zoom})`,
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
                zoom={zoom}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
