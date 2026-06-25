import { useRef, CSSProperties, useState, useCallback } from 'react'
import { useDraggable, useDroppable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { MAP_TILES, tileImageUrl } from '../../data/mapTiles'
import { OVERLAY_BY_ID } from '../../data/overlays'
import { overlayTokenUrl } from '../../data/assetUrls'
import type { PlacedMapTile } from './types'
import type { PlacedMonster, PlacedOverlay } from '../../types/game'
import { CELL_SIZE, GRID_COLS, GRID_ROWS, CONNECTOR_INSET_FRAC } from './constants'

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

  // The PNG canvas is exactly def.cols×75 × def.rows×75 px. The connector
  // tab/notch zone occupies an inset margin inside the canvas, so the PLAYABLE
  // grid is the canvas minus that margin — but ONLY on edges that actually have
  // a connector. We stretch the image per axis so the playable rectangle maps
  // exactly onto the cols×rows board footprint, letting the connector margin
  // overflow outside. Flat edges keep the canvas edge as the playable boundary.
  const conn = def?.connectors
  const dCols = def?.cols ?? cols
  const dRows = def?.rows ?? rows
  const f = conn ? CONNECTOR_INSET_FRAC : 0
  const iL = conn?.left ? f : 0
  const iR = conn?.right ? f : 0
  const iT = conn?.top ? f : 0
  const iB = conn?.bottom ? f : 0

  // footprint = playable grid in board pixels (natural orientation)
  const footW = dCols * CELL_SIZE
  const footH = dRows * CELL_SIZE
  // stretch only the axis whose connector side(s) carry an inset
  const sx = dCols / Math.max(0.5, dCols - iL - iR)
  const sy = dRows / Math.max(0.5, dRows - iT - iB)
  const imgW = footW * sx
  const imgH = footH * sy
  const imgLeft = -(iL * CELL_SIZE) * sx
  const imgTop = -(iT * CELL_SIZE) * sy

  const style: CSSProperties = {
    position: 'absolute',
    left: tile.col * CELL_SIZE + (effW - footW) / 2,
    top: tile.row * CELL_SIZE + (effH - footH) / 2,
    width: footW,
    height: footH,
    overflow: conn ? 'visible' : 'hidden',
    borderRadius: conn ? 0 : 3,
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
        : conn
          ? 'none'
          : '0 0 0 1px rgba(255,255,255,0.18)',
  }

  const imgStyle: CSSProperties = {
    position: 'absolute',
    left: imgLeft,
    top: imgTop,
    width: imgW,
    height: imgH,
    // Override Tailwind preflight's `img { max-width: 100%; height: auto }`,
    // which otherwise clamps a horizontally-stretched connector image back to
    // the wrapper width and discards the right-side overflow.
    maxWidth: 'none',
    maxHeight: 'none',
    objectFit: 'fill',
    display: 'block',
    pointerEvents: 'none',
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
          style={imgStyle}
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

function MonsterToken({
  monster,
  label,
  onRemove,
}: {
  monster: PlacedMonster
  label: string
  onRemove: (id: string) => void
}) {
  const abbr = label.slice(0, 2).toUpperCase()
  const bgColor = monster.isMaster ? '#450a0a' : '#0c1a2e'
  const borderColor = monster.isMaster ? '#dc2626' : '#2563eb'
  const textColor = monster.isMaster ? '#fca5a5' : '#93c5fd'
  return (
    <div
      style={{
        position: 'absolute',
        left: monster.x * CELL_SIZE + 5,
        top: monster.y * CELL_SIZE + 5,
        width: CELL_SIZE - 10,
        height: CELL_SIZE - 10,
        borderRadius: '50%',
        backgroundColor: bgColor,
        border: `2px solid ${borderColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 25,
        cursor: 'default',
        userSelect: 'none',
      }}
      title={`${label} (${monster.isMaster ? 'Anführer' : 'Normal'}) – ✕ entfernen`}
      onClick={(e) => e.stopPropagation()}
    >
      <span style={{ fontSize: 12, fontWeight: 'bold', color: textColor, lineHeight: 1 }}>
        {abbr}
      </span>
      <button
        onClick={(e) => { e.stopPropagation(); onRemove(monster.id) }}
        style={{
          position: 'absolute',
          top: -5,
          right: -5,
          width: 14,
          height: 14,
          borderRadius: '50%',
          backgroundColor: '#1f2937',
          border: '1px solid #4b5563',
          color: '#9ca3af',
          fontSize: 9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          lineHeight: 1,
          padding: 0,
        }}
      >
        ✕
      </button>
    </div>
  )
}

function OverlayToken({ overlay, onRemove }: { overlay: PlacedOverlay; onRemove: (id: string) => void }) {
  // hasOwnProperty-Guard: verhindert, dass ein manipulierter overlayType (z. B.
  // "constructor"/"toString" aus importiertem JSON) einen Prototyp-Wert liefert.
  const def = Object.prototype.hasOwnProperty.call(OVERLAY_BY_ID, overlay.overlayType)
    ? OVERLAY_BY_ID[overlay.overlayType]
    : undefined
  // Transparentes Original-Token-Bild; bei Fehler (z. B. unbekannte id aus einem
  // Alt-Quest) auf das Emoji im farbigen Kästchen zurückfallen.
  const [imgError, setImgError] = useState(false)
  const showImg = !!def && !imgError
  return (
    <div
      style={{
        position: 'absolute',
        left: overlay.x * CELL_SIZE + 4,
        top: overlay.y * CELL_SIZE + 4,
        width: CELL_SIZE - 8,
        height: CELL_SIZE - 8,
        borderRadius: 6,
        backgroundColor: showImg ? 'transparent' : (def?.color ?? '#374151') + 'cc',
        border: showImg ? 'none' : `2px solid ${def?.color ?? '#6b7280'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
        cursor: 'default',
        userSelect: 'none',
      }}
      title={`${def?.nameDe ?? overlay.overlayType} – ✕ entfernen`}
      onClick={(e) => e.stopPropagation()}
    >
      {showImg ? (
        <img
          src={overlayTokenUrl(def.id)}
          alt={def.nameDe}
          onError={() => setImgError(true)}
          draggable={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            pointerEvents: 'none',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.6))',
          }}
        />
      ) : (
        <span style={{ fontSize: 16, lineHeight: 1, pointerEvents: 'none' }}>{def?.icon ?? '◆'}</span>
      )}
      <button
        onClick={(e) => { e.stopPropagation(); onRemove(overlay.id) }}
        style={{
          position: 'absolute',
          top: -5,
          right: -5,
          width: 14,
          height: 14,
          borderRadius: '50%',
          backgroundColor: '#1f2937',
          border: '1px solid #4b5563',
          color: '#9ca3af',
          fontSize: 9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          lineHeight: 1,
          padding: 0,
        }}
      >
        ✕
      </button>
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
  monsters?: PlacedMonster[]
  monsterNamesMap?: Record<string, string>
  monsterPlaceMode?: boolean
  onPlaceMonster?: (col: number, row: number) => void
  onRemoveMonster?: (id: string) => void
  overlays?: PlacedOverlay[]
  overlayPlaceMode?: boolean
  onPlaceOverlay?: (col: number, row: number) => void
  onRemoveOverlay?: (id: string) => void
}

export default function MapGrid({
  tiles,
  selectedInstanceId,
  selectedTileId,
  onPlaceTile,
  onSelectInstance,
  zoom,
  isDraggingFromPalette,
  monsters,
  monsterNamesMap,
  monsterPlaceMode,
  onPlaceMonster,
  onRemoveMonster,
  overlays,
  overlayPlaceMode,
  onPlaceOverlay,
  onRemoveOverlay,
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
    const rect = gridRef.current?.getBoundingClientRect()
    if (!rect) return
    const col = Math.floor((e.clientX - rect.left) / (CELL_SIZE * zoom))
    const row = Math.floor((e.clientY - rect.top) / (CELL_SIZE * zoom))
    if (monsterPlaceMode && onPlaceMonster) {
      if (col >= 0 && col < GRID_COLS && row >= 0 && row < GRID_ROWS) {
        onPlaceMonster(col, row)
      }
      return
    }
    if (overlayPlaceMode && onPlaceOverlay) {
      if (col >= 0 && col < GRID_COLS && row >= 0 && row < GRID_ROWS) {
        onPlaceOverlay(col, row)
      }
      return
    }
    if (!selectedTileId) {
      onSelectInstance(null)
      return
    }
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
          backgroundColor: 'rgb(var(--c-dungeon-900))',
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
                linear-gradient(to right, rgb(var(--c-dungeon-700)) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(var(--c-dungeon-700)) 1px, transparent 1px)
              `,
              backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
              cursor: (selectedTileId || monsterPlaceMode || overlayPlaceMode) ? 'crosshair' : 'default',
            }}
          >
            {tiles.map((tile) => (
              <DraggableTile
                key={tile.instanceId}
                tile={tile}
                isSelected={tile.instanceId === selectedInstanceId}
                placingMode={selectedTileId !== null || !!monsterPlaceMode || !!overlayPlaceMode}
                onSelect={onSelectInstance}
                zoom={zoom}
              />
            ))}
            {(overlays ?? []).map((o) => (
              <OverlayToken key={o.id} overlay={o} onRemove={onRemoveOverlay ?? (() => {})} />
            ))}
            {(monsters ?? []).map((m) => (
              <MonsterToken
                key={m.id}
                monster={m}
                label={monsterNamesMap?.[m.monsterId] ?? m.monsterId}
                onRemove={onRemoveMonster ?? (() => {})}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
