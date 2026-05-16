import { useState } from 'react'
import { useDraggable } from '@dnd-kit/core'
import { MAP_TILES, tileImageUrl, getTilePartner } from '../../data/mapTiles'
import { EXPANSIONS } from '../../data/expansions'
import { useGameStore } from '../../store/useGameStore'

interface TileThumbProps {
  tileId: string
  color: string
  cols: number
  rows: number
}

function TileThumb({ tileId, color, cols, rows }: TileThumbProps) {
  const [imgError, setImgError] = useState(false)
  const tileDef = MAP_TILES.find((t) => t.id === tileId)
  const imgUrl = tileDef ? tileImageUrl(tileDef) : ''

  const maxW = 56
  const maxH = 48
  const scale = Math.min(maxW / cols, maxH / rows)
  const thumbW = Math.round(cols * scale)
  const thumbH = Math.round(rows * scale)

  return (
    <div
      className="rounded overflow-hidden flex items-center justify-center mx-auto"
      style={{ width: thumbW, height: thumbH, backgroundColor: color }}
    >
      {!imgError && (
        <img
          src={imgUrl}
          alt={tileId}
          onError={() => setImgError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }}
          loading="lazy"
        />
      )}
    </div>
  )
}

interface HoverPreview {
  tileId: string
  label: string
  cols: number
  rows: number
  color: string
  anchorY: number
}

function TilePreview({ preview }: { preview: HoverPreview }) {
  const [imgError, setImgError] = useState(false)
  const { tileId, label, cols, rows, color, anchorY } = preview
  const tileDef = MAP_TILES.find((t) => t.id === tileId)
  const imgUrl = tileDef ? tileImageUrl(tileDef) : ''

  // At least 4× the thumbnail. Thumbnail caps at 56×48 px; here we scale the
  // tile so its larger side reaches ~320 px while keeping the cols:rows ratio.
  const maxDim = 320
  const scale = maxDim / Math.max(cols, rows)
  const w = Math.round(cols * scale)
  const h = Math.round(rows * scale)

  // Keep the popup inside the viewport vertically.
  const margin = 12
  const top = Math.min(
    Math.max(margin, anchorY - h / 2),
    window.innerHeight - h - margin - 40,
  )

  return (
    <div
      className="fixed z-50 pointer-events-none rounded-lg border border-gold-600 bg-dungeon-900 shadow-2xl p-2"
      style={{ left: 212, top: Math.max(margin, top) }}
    >
      <div
        className="rounded overflow-hidden flex items-center justify-center"
        style={{ width: w, height: h, backgroundColor: color }}
      >
        {!imgError && (
          <img
            src={imgUrl}
            alt={label}
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block', maxWidth: 'none', maxHeight: 'none' }}
          />
        )}
      </div>
      <div className="mt-1 text-center text-xs text-gold-300">
        {label} <span className="text-gray-500">({cols}×{rows})</span>
      </div>
    </div>
  )
}

interface SidebarTileProps {
  tileId: string
  label: string
  cols: number
  rows: number
  color: string
  isSelected: boolean
  partnerPlaced: boolean
  partner: string | null
  onSelect: (id: string) => void
  onHover: (preview: HoverPreview | null) => void
}

function SidebarTile({ tileId, label, cols, rows, color, isSelected, partnerPlaced, partner, onSelect, onHover }: SidebarTileProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `palette-${tileId}`,
    data: { tileId },
  })

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onClick={() => onSelect(tileId)}
      onMouseEnter={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        onHover({ tileId, label, cols, rows, color, anchorY: r.top + r.height / 2 })
      }}
      onMouseLeave={() => onHover(null)}
      title={
        partnerPlaced
          ? `${label} – Achtung: Seite ${partner} ist bereits platziert!`
          : `${label} (${cols}×${rows}) – Klicken oder ziehen zum Platzieren`
      }
      style={{ touchAction: 'none', opacity: isDragging ? 0.4 : undefined }}
      className={`rounded text-xs p-1.5 transition-all border flex flex-col items-center gap-1 ${
        isSelected
          ? 'border-gold-400 bg-dungeon-700 ring-1 ring-gold-400/50'
          : partnerPlaced
            ? 'border-dungeon-700 bg-dungeon-900 opacity-40 hover:opacity-60'
            : 'border-dungeon-600 bg-dungeon-800 hover:border-gold-700 hover:bg-dungeon-700'
      }`}
    >
      <TileThumb tileId={tileId} color={color} cols={cols} rows={rows} />
      <span className={`truncate block w-full text-center ${isSelected ? 'text-gold-300' : partnerPlaced ? 'text-gray-600' : 'text-gray-400'}`}>
        {label}
      </span>
      <span className={`block ${partnerPlaced ? 'text-gray-700' : 'text-gray-600'}`}>{cols}×{rows}</span>
    </button>
  )
}

interface Props {
  selectedTileId: string | null
  placedTileIds: Set<string>
  onSelect: (id: string) => void
}

export default function TileSidebar({ selectedTileId, placedTileIds, onSelect }: Props) {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [openExpansions, setOpenExpansions] = useState<Set<string>>(new Set(['base']))
  const [hoverPreview, setHoverPreview] = useState<HoverPreview | null>(null)

  const ownedExpansions = EXPANSIONS.filter(
    (e) => ownedIds.includes(e.id) && MAP_TILES.some((t) => t.expansionId === e.id),
  )

  const toggle = (id: string) => {
    setOpenExpansions((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <aside className="w-52 shrink-0 bg-dungeon-900 border-r border-dungeon-700 overflow-y-auto flex flex-col">
      <div className="px-3 py-2 border-b border-dungeon-700">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Plättchen</p>
        <p className="text-xs text-gray-600 mt-0.5">Klicken oder ziehen → platzieren</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {ownedExpansions.map((exp) => {
          const tiles = MAP_TILES.filter((t) => t.expansionId === exp.id)
          const open = openExpansions.has(exp.id)
          return (
            <div key={exp.id}>
              <button
                onClick={() => toggle(exp.id)}
                className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-dungeon-800 transition-colors"
              >
                <span className="text-xs font-semibold text-gold-500 truncate pr-1">{exp.nameDe}</span>
                <span className="text-gray-500 text-xs">{open ? '▲' : '▼'}</span>
              </button>
              {open && (
                <div className="px-2 pb-2 grid grid-cols-2 gap-1.5">
                  {tiles.map((tile) => {
                    const partner = getTilePartner(tile.id)
                    const partnerPlaced = partner ? placedTileIds.has(partner) : false
                    return (
                      <SidebarTile
                        key={tile.id}
                        tileId={tile.id}
                        label={tile.label}
                        cols={tile.cols}
                        rows={tile.rows}
                        color={tile.color}
                        isSelected={selectedTileId === tile.id}
                        partnerPlaced={partnerPlaced}
                        partner={partner}
                        onSelect={onSelect}
                        onHover={setHoverPreview}
                      />
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="px-3 py-2 border-t border-dungeon-700 text-xs text-gray-600">
        {MAP_TILES.filter((t) => ownedIds.includes(t.expansionId)).length} Plättchen verfügbar
      </div>

      {hoverPreview && <TilePreview preview={hoverPreview} />}
    </aside>
  )
}
