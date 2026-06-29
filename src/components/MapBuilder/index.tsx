import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import TileSidebar from './TileSidebar'
import MapGrid, { effectiveDims } from './MapGrid'
import type { PlacedMapTile, Rotation } from './types'
import { MAP_TILES, getTilePartner, tileImageUrl } from '../../data/mapTiles'
import { OVERLAYS } from '../../data/overlays'
import { overlayTokenUrl } from '../../data/assetUrls'
import type { Monster, PlacedMonster, PlacedOverlay, OverlayType } from '../../types/game'
import { CELL_SIZE, GRID_COLS, GRID_ROWS } from './constants'

// Overlay-Auswahl: Token nach Kategorie gruppiert (Reihenfolge + Überschriften).
const OVERLAY_GROUPS: { category: OverlayType['category']; label: string }[] = [
  { category: 'passage', label: 'Durchgänge' },
  { category: 'terrain', label: 'Gelände' },
  { category: 'marker', label: 'Marker' },
  { category: 'object', label: 'Objekte' },
  { category: 'figure', label: 'Figuren' },
]

function nextRotation(r: Rotation): Rotation {
  const map: Record<Rotation, Rotation> = { 0: 90, 90: 180, 180: 270, 270: 0 }
  return map[r]
}

/** Vorschau eines Overlay-Typs im Picker/Toolbar: Balken-Swatch für „Absperrung"
 *  (Türen) bzw. das transparente Token-Bild für alle anderen. */
function OverlayIcon({ overlayId, sizePx }: { overlayId: string; sizePx: number }) {
  const def = OVERLAYS.find((o) => o.id === overlayId)
  if (def?.render === 'bar') {
    return (
      <span
        style={{ width: sizePx, height: sizePx }}
        className="inline-flex items-center justify-center"
        aria-hidden
      >
        <span
          style={{ background: def.color, width: sizePx, height: Math.max(4, Math.round(sizePx * 0.36)) }}
          className="rounded-full border border-black/50"
        />
      </span>
    )
  }
  return (
    <img
      src={overlayTokenUrl(overlayId)}
      alt=""
      style={{ width: sizePx, height: sizePx }}
      className="object-contain"
      draggable={false}
    />
  )
}

let counter = 0
const newId = () => `tile-${++counter}-${Date.now()}`

/** Floating tile preview shown during drag-from-sidebar */
function TileDragPreview({ tileId }: { tileId: string }) {
  const def = MAP_TILES.find((t) => t.id === tileId)
  const [imgError, setImgError] = useState(false)
  if (!def) return null
  return (
    <div
      style={{
        width: def.cols * CELL_SIZE,
        height: def.rows * CELL_SIZE,
        border: '2px solid #f59e0b',
        borderRadius: 3,
        overflow: 'hidden',
        opacity: 0.8,
        boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
        pointerEvents: 'none',
      }}
    >
      {!imgError ? (
        <img
          src={tileImageUrl(def)}
          onError={() => setImgError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }}
        />
      ) : (
        <div style={{ width: '100%', height: '100%', backgroundColor: def.color }} />
      )}
    </div>
  )
}

/** Vertical zoom lever — drag up to zoom in, drag down to zoom out */
function ZoomLever({ zoom, onChange }: { zoom: number; onChange: (z: number) => void }) {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, marginLeft: 6 }}
      title={`Zoom: ${Math.round(zoom * 100)}%`}
    >
      <span style={{ fontSize: 10, color: '#9ca3af', lineHeight: 1, userSelect: 'none' }}>+</span>
      <input
        type="range"
        min={25}
        max={200}
        step={5}
        value={Math.round(zoom * 100)}
        onChange={(e) => onChange(parseInt(e.target.value) / 100)}
        style={{
          writingMode: 'vertical-lr' as React.CSSProperties['writingMode'],
          direction: 'rtl' as React.CSSProperties['direction'],
          height: 52,
          width: 18,
          cursor: 'ns-resize',
          accentColor: '#d97706',
          padding: 0,
          margin: 0,
        }}
      />
      <span style={{ fontSize: 10, color: '#9ca3af', lineHeight: 1, userSelect: 'none' }}>–</span>
      <span style={{ fontSize: 9, color: '#6b7280', marginTop: 1, userSelect: 'none' }}>
        {Math.round(zoom * 100)}%
      </span>
    </div>
  )
}

interface MapBuilderProps {
  /** Controlled tile list. When provided, the builder is controlled via onTilesChange. */
  tiles?: PlacedMapTile[]
  onTilesChange?: (tiles: PlacedMapTile[]) => void
  /** Monster tokens on the map (controlled). */
  monsters?: PlacedMonster[]
  onMonstersChange?: (monsters: PlacedMonster[]) => void
  /** When provided, enables the monster-placement toolbar section. */
  availableMonsters?: Monster[]
  /** Overlay markers on the map (controlled). When the callback is provided,
   *  the overlay-placement toolbar section is enabled. */
  overlays?: PlacedOverlay[]
  onOverlaysChange?: (overlays: PlacedOverlay[]) => void
  /** CSS height for the builder area. Defaults to the full-page height. */
  mapHeight?: string
}

export default function MapBuilder({
  tiles: controlledTiles,
  onTilesChange,
  monsters,
  onMonstersChange,
  availableMonsters,
  overlays,
  onOverlaysChange,
  mapHeight,
}: MapBuilderProps = {}) {
  const isControlled = controlledTiles !== undefined
  const [internalTiles, setInternalTiles] = useState<PlacedMapTile[]>([])
  const placedTiles = isControlled ? (controlledTiles as PlacedMapTile[]) : internalTiles

  const tilesRef = useRef(placedTiles)
  tilesRef.current = placedTiles
  const onChangeRef = useRef(onTilesChange)
  onChangeRef.current = onTilesChange
  const isControlledRef = useRef(isControlled)
  isControlledRef.current = isControlled

  const setPlacedTiles = useCallback(
    (updater: PlacedMapTile[] | ((prev: PlacedMapTile[]) => PlacedMapTile[])) => {
      const next =
        typeof updater === 'function'
          ? (updater as (prev: PlacedMapTile[]) => PlacedMapTile[])(tilesRef.current)
          : updater
      if (isControlledRef.current) {
        onChangeRef.current?.(next)
      } else {
        setInternalTiles(next)
      }
    },
    [],
  )

  // Monster placement state
  const [selectedMonsterToPlace, setSelectedMonsterToPlace] = useState<{
    monsterId: string
    isMaster: boolean
  } | null>(null)

  const monstersRef = useRef(monsters)
  monstersRef.current = monsters
  const onMonstersChangeRef = useRef(onMonstersChange)
  onMonstersChangeRef.current = onMonstersChange

  const handlePlaceMonsterOnGrid = useCallback((col: number, row: number) => {
    const sel = monsterToPlaceRef.current
    if (!sel) return
    const newMonster: PlacedMonster = {
      id: newId(),
      monsterId: sel.monsterId,
      isMaster: sel.isMaster,
      x: col,
      y: row,
    }
    onMonstersChangeRef.current?.([...(monstersRef.current ?? []), newMonster])
  }, [])

  const handleRemoveMonster = useCallback((id: string) => {
    onMonstersChangeRef.current?.((monstersRef.current ?? []).filter((m) => m.id !== id))
  }, [])

  const monsterNamesMap = availableMonsters
    ? Object.fromEntries(availableMonsters.map((m) => [m.id, m.nameDe]))
    : undefined

  const monsterToPlaceRef = useRef(selectedMonsterToPlace)
  monsterToPlaceRef.current = selectedMonsterToPlace

  // Overlay placement state (controlled via onOverlaysChange, else internal).
  const [selectedOverlayToPlace, setSelectedOverlayToPlace] = useState<string | null>(null)
  const overlayToPlaceRef = useRef(selectedOverlayToPlace)
  overlayToPlaceRef.current = selectedOverlayToPlace

  // Visueller Overlay-Token-Picker (Popover).
  const [overlayPickerOpen, setOverlayPickerOpen] = useState(false)
  const overlayPickerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!overlayPickerOpen) return
    const onClick = (e: MouseEvent) => {
      if (overlayPickerRef.current && !overlayPickerRef.current.contains(e.target as Node)) {
        setOverlayPickerOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOverlayPickerOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [overlayPickerOpen])

  const [internalOverlays, setInternalOverlays] = useState<PlacedOverlay[]>([])
  const placedOverlays = overlays ?? internalOverlays
  const placedOverlaysRef = useRef(placedOverlays)
  placedOverlaysRef.current = placedOverlays
  const onOverlaysChangeRef = useRef(onOverlaysChange)
  onOverlaysChangeRef.current = onOverlaysChange
  const isOverlayControlledRef = useRef(overlays !== undefined)
  isOverlayControlledRef.current = overlays !== undefined

  const setPlacedOverlays = useCallback(
    (updater: PlacedOverlay[] | ((prev: PlacedOverlay[]) => PlacedOverlay[])) => {
      const next =
        typeof updater === 'function'
          ? (updater as (prev: PlacedOverlay[]) => PlacedOverlay[])(placedOverlaysRef.current)
          : updater
      if (isOverlayControlledRef.current) onOverlaysChangeRef.current?.(next)
      else setInternalOverlays(next)
    },
    [],
  )

  const handlePlaceOverlayOnGrid = useCallback((col: number, row: number) => {
    const type = overlayToPlaceRef.current
    if (!type) return
    setPlacedOverlays((prev) => [...prev, { id: newId(), overlayType: type, x: col, y: row }])
  }, [setPlacedOverlays])

  const handleRemoveOverlay = useCallback((id: string) => {
    setPlacedOverlays((prev) => prev.filter((o) => o.id !== id))
  }, [setPlacedOverlays])

  const handleRotateOverlay = useCallback((id: string) => {
    setPlacedOverlays((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, rotation: nextRotation((o.rotation ?? 0) as Rotation) } : o,
      ),
    )
  }, [setPlacedOverlays])

  const handleLabelOverlay = useCallback((id: string) => {
    const current = placedOverlaysRef.current.find((o) => o.id === id)
    const input = window.prompt('Nummer oder Beschriftung des Markers (1–3 Zeichen, leer = entfernen):', current?.label ?? '')
    if (input === null) return // Abbruch
    const label = input.trim().slice(0, 3)
    setPlacedOverlays((prev) =>
      prev.map((o) => (o.id === id ? { ...o, label: label || undefined } : o)),
    )
  }, [setPlacedOverlays])

  const [selectedTileId, setSelectedTileId] = useState<string | null>(null)
  const [selectedInstanceId, setSelectedInstanceId] = useState<string | null>(null)
  const [partnerWarningId, setPartnerWarningId] = useState<string | null>(null)
  const [activePaletteId, setActivePaletteId] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1.0)

  // Stable ref so handleDragEnd (empty deps) always reads current zoom
  const zoomRef = useRef(zoom)
  zoomRef.current = zoom

  const placedTileIds = useMemo(
    () => new Set(placedTiles.map((t) => t.tileId)),
    [placedTiles],
  )

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } }),
  )

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const id = event.active.id as string
    if (id.startsWith('palette-')) {
      setActivePaletteId(id.slice('palette-'.length))
      setSelectedTileId(null)
      setSelectedInstanceId(null)
    }
  }, [])

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, delta } = event
    const activeId = active.id as string
    const currentZoom = zoomRef.current

    if (activeId.startsWith('palette-')) {
      setActivePaletteId(null)
      if (event.over?.id !== 'map-grid') return
      const tileId = activeId.slice('palette-'.length)
      const def = MAP_TILES.find((t) => t.id === tileId)
      if (!def) return
      const gridRect = event.over.rect
      const startEvt = event.activatorEvent as PointerEvent
      const finalX = startEvt.clientX + delta.x
      const finalY = startEvt.clientY + delta.y
      // gridRect is the scaled bounding rect of the grid canvas, so divide by CELL_SIZE * zoom
      const col = Math.max(0, Math.min(GRID_COLS - def.cols, Math.floor((finalX - gridRect.left) / (CELL_SIZE * currentZoom))))
      const row = Math.max(0, Math.min(GRID_ROWS - def.rows, Math.floor((finalY - gridRect.top) / (CELL_SIZE * currentZoom))))
      setPlacedTiles((prev) => [
        ...prev,
        { instanceId: newId(), tileId, col, row, rotation: 0 },
      ])
      return
    }

    // Move an existing placed tile
    if (!delta.x && !delta.y) return
    const instanceId = activeId
    setPlacedTiles((prev) =>
      prev.map((t) => {
        if (t.instanceId !== instanceId) return t
        const { cols, rows } = effectiveDims(t)
        // delta is in screen pixels; one grid cell is CELL_SIZE * zoom screen pixels
        const newCol = Math.max(0, Math.min(GRID_COLS - cols, t.col + Math.round(delta.x / (CELL_SIZE * currentZoom))))
        const newRow = Math.max(0, Math.min(GRID_ROWS - rows, t.row + Math.round(delta.y / (CELL_SIZE * currentZoom))))
        return { ...t, col: newCol, row: newRow }
      }),
    )
  }, []) // empty deps — reads zoom via zoomRef

  const handleSelectPalette = useCallback((id: string) => {
    // Verbindungsstücke (kind 'connector') haben keine eindeutige a/b-Partnerseite
    // und dürfen mehrfach gelegt werden → keine Partnerwarnung.
    const isConnector = MAP_TILES.find((t) => t.id === id)?.kind === 'connector'
    const partner = isConnector ? null : getTilePartner(id)
    if (partner && placedTileIds.has(partner)) {
      setPartnerWarningId(id)
    } else {
      setPartnerWarningId(null)
    }
    setSelectedTileId((prev) => (prev === id ? null : id))
    setSelectedInstanceId(null)
    setSelectedMonsterToPlace(null)
    setSelectedOverlayToPlace(null)
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
      // Verbindungsstücke bleiben ausgewählt → man kann mehrere hintereinander
      // platzieren (Abbrechen über „✕ Abbrechen"). Normale Plättchen deselektieren.
      if (def.kind !== 'connector') setSelectedTileId(null)
      setPartnerWarningId(null)
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
    setPartnerWarningId(null)
    setSelectedMonsterToPlace(null)
    setSelectedOverlayToPlace(null)
  }

  const clearAll = () => {
    setPlacedTiles([])
    setSelectedTileId(null)
    setSelectedInstanceId(null)
    setPartnerWarningId(null)
  }

  const selectedDef = selectedTileId ? MAP_TILES.find((t) => t.id === selectedTileId) : null
  const selectedInst = selectedInstanceId
    ? placedTiles.find((t) => t.instanceId === selectedInstanceId)
    : null

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
              Links Plättchen auswählen oder ziehen → platzieren; Ziehen → verschieben
            </span>
          )}
          {partnerWarningId && (
            <span className="flex items-center gap-1.5 text-amber-400 text-xs bg-amber-950 border border-amber-800 px-2 py-1 rounded ml-2">
              ⚠ {partnerWarningId} kann wahrscheinlich nicht verwendet werden – die andere Seite ({getTilePartner(partnerWarningId)}) ist bereits platziert.
              <button onClick={() => setPartnerWarningId(null)} className="text-amber-600 hover:text-amber-400 ml-1">✕</button>
            </span>
          )}

          {/* Monster-placement section */}
          {availableMonsters && availableMonsters.length > 0 && (
            <>
              <div className="w-px h-5 bg-dungeon-600 self-center mx-1 shrink-0" />
              {selectedMonsterToPlace ? (
                <span className="flex items-center gap-1.5 text-sm text-green-400 shrink-0">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ background: selectedMonsterToPlace.isMaster ? '#dc2626' : '#2563eb' }}
                  />
                  <span className="text-xs">{monsterNamesMap?.[selectedMonsterToPlace.monsterId] ?? '?'}</span>
                  <button
                    onClick={() => setSelectedMonsterToPlace((p) => p ? { ...p, isMaster: false } : p)}
                    className={`text-xs px-2 py-0.5 rounded-l border ${!selectedMonsterToPlace.isMaster ? 'bg-blue-900 text-blue-300 border-blue-700' : 'bg-dungeon-700 text-gray-400 border-dungeon-600 hover:border-gray-500'}`}
                  >Normal</button>
                  <button
                    onClick={() => setSelectedMonsterToPlace((p) => p ? { ...p, isMaster: true } : p)}
                    className={`text-xs px-2 py-0.5 rounded-r border-t border-b border-r ${selectedMonsterToPlace.isMaster ? 'bg-red-900 text-red-300 border-red-700' : 'bg-dungeon-700 text-gray-400 border-dungeon-600 hover:border-gray-500'}`}
                  >Anführer</button>
                  <span className="text-gray-500 text-xs">– auf Karte klicken</span>
                  <button onClick={() => setSelectedMonsterToPlace(null)} className="text-xs text-gray-500 hover:text-gray-300">✕</button>
                </span>
              ) : (
                <span className="flex items-center gap-1.5 shrink-0">
                  <select
                    value=""
                    onChange={(e) => {
                      if (!e.target.value) return
                      setSelectedTileId(null)
                      setSelectedInstanceId(null)
                      setSelectedOverlayToPlace(null)
                      setSelectedMonsterToPlace({ monsterId: e.target.value, isMaster: false })
                    }}
                    className="bg-dungeon-800 text-gray-300 border border-dungeon-600 rounded text-xs px-2 py-1 max-w-40"
                  >
                    <option value="">+ Monster setzen</option>
                    {availableMonsters.map((m) => (
                      <option key={m.id} value={m.id}>{m.nameDe}</option>
                    ))}
                  </select>
                  {(monsters?.length ?? 0) > 0 && (
                    <span className="text-gray-600 text-xs">{monsters!.length} Monster</span>
                  )}
                </span>
              )}
            </>
          )}

          {/* Overlay-placement section (fixed catalog, always available) */}
          {(
            <>
              <div className="w-px h-5 bg-dungeon-600 self-center mx-1 shrink-0" />
              {selectedOverlayToPlace ? (
                <span className="flex items-center gap-1.5 text-sm text-purple-300 shrink-0">
                  <OverlayIcon overlayId={selectedOverlayToPlace} sizePx={20} />
                  <span className="text-xs">{OVERLAYS.find((o) => o.id === selectedOverlayToPlace)?.nameDe}</span>
                  <span className="text-gray-500 text-xs">– auf Karte klicken</span>
                  <button onClick={() => setSelectedOverlayToPlace(null)} className="text-xs text-gray-500 hover:text-gray-300">✕</button>
                </span>
              ) : (
                <span className="relative flex items-center gap-1.5 shrink-0" ref={overlayPickerRef}>
                  <button
                    onClick={() => setOverlayPickerOpen((o) => !o)}
                    aria-haspopup="menu"
                    aria-expanded={overlayPickerOpen}
                    className={`flex items-center gap-1 border rounded text-xs px-2 py-1 transition-colors ${
                      overlayPickerOpen
                        ? 'bg-dungeon-700 text-gray-100 border-gold-600'
                        : 'bg-dungeon-800 text-gray-300 border-dungeon-600 hover:border-gray-500'
                    }`}
                  >
                    + Overlay setzen <span className={`text-[9px] transition-transform ${overlayPickerOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>
                  {placedOverlays.length > 0 && (
                    <span className="text-gray-600 text-xs">{placedOverlays.length} Overlay</span>
                  )}
                  {overlayPickerOpen && (
                    <div
                      role="menu"
                      className="absolute left-0 top-full mt-1 w-72 max-h-[60vh] overflow-y-auto bg-dungeon-850 border border-dungeon-600 rounded-lg shadow-xl shadow-black/50 p-2 z-50"
                    >
                      {OVERLAY_GROUPS.map((g) => {
                        const items = OVERLAYS.filter((o) => o.category === g.category)
                        if (items.length === 0) return null
                        return (
                          <div key={g.category} className="mb-2 last:mb-0">
                            <p className="px-1 text-[10px] uppercase tracking-wider text-gray-500 mb-1">{g.label}</p>
                            <div className="grid grid-cols-4 gap-1">
                              {items.map((o) => (
                                <button
                                  key={o.id}
                                  role="menuitem"
                                  title={`${o.nameDe} – ${o.descriptionDe}`}
                                  onClick={() => {
                                    setSelectedTileId(null)
                                    setSelectedInstanceId(null)
                                    setSelectedMonsterToPlace(null)
                                    setSelectedOverlayToPlace(o.id)
                                    setOverlayPickerOpen(false)
                                  }}
                                  className="flex flex-col items-center gap-0.5 p-1 rounded hover:bg-dungeon-700 transition-colors group"
                                >
                                  <OverlayIcon overlayId={o.id} sizePx={36} />
                                  <span className="text-[9px] leading-tight text-center text-gray-400 group-hover:text-gold-300 line-clamp-2">{o.nameDe}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </span>
              )}
            </>
          )}

          <div className="flex gap-2 ml-auto items-center">
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
            <ZoomLever zoom={zoom} onChange={setZoom} />
          </div>
        </div>

        {/* Builder */}
        <div
          className="flex flex-1 min-h-0 overflow-hidden"
          style={{ height: mapHeight ?? 'calc(100vh - 180px)' }}
        >
          <TileSidebar
            selectedTileId={selectedTileId}
            placedTileIds={placedTileIds}
            onSelect={handleSelectPalette}
          />
          <MapGrid
            tiles={placedTiles}
            selectedInstanceId={selectedInstanceId}
            selectedTileId={selectedTileId}
            onPlaceTile={handlePlaceTile}
            onSelectInstance={handleSelectInstance}
            zoom={zoom}
            isDraggingFromPalette={activePaletteId !== null}
            monsters={monsters}
            monsterNamesMap={monsterNamesMap}
            monsterPlaceMode={!!selectedMonsterToPlace}
            onPlaceMonster={handlePlaceMonsterOnGrid}
            onRemoveMonster={handleRemoveMonster}
            overlays={placedOverlays}
            overlayPlaceMode={!!selectedOverlayToPlace}
            onPlaceOverlay={handlePlaceOverlayOnGrid}
            onRemoveOverlay={handleRemoveOverlay}
            onRotateOverlay={handleRotateOverlay}
            onLabelOverlay={handleLabelOverlay}
          />
        </div>
      </div>

      {/* Floating tile preview when dragging from sidebar */}
      <DragOverlay dropAnimation={null}>
        {activePaletteId ? <TileDragPreview tileId={activePaletteId} /> : null}
      </DragOverlay>
    </DndContext>
  )
}
