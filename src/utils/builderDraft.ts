import type { PlacedOverlay } from '../types/game'
import type { PlacedMapTile, Rotation } from '../components/MapBuilder/types'

// Standalone-Kartenbauer (/karte) persistiert seinen Entwurf in einem EIGENEN
// localStorage-Key — bewusst getrennt vom zustand-Persist-Schema (quests), damit
// hierfür kein Schema-Bump nötig ist (gleiches Muster wie src/theme.ts).
const KEY = 'qvr-builder-draft'

export interface BuilderDraft {
  tiles: PlacedMapTile[]
  overlays: PlacedOverlay[]
}

const ROTATIONS: Rotation[] = [0, 90, 180, 270]

function sanitizeTile(v: unknown): PlacedMapTile | null {
  if (typeof v !== 'object' || v === null) return null
  const r = v as Record<string, unknown>
  if (typeof r.tileId !== 'string') return null
  const rotation = ROTATIONS.includes(r.rotation as Rotation) ? (r.rotation as Rotation) : 0
  return {
    instanceId: typeof r.instanceId === 'string' ? r.instanceId : `t-${Math.random().toString(36).slice(2)}`,
    tileId: r.tileId.slice(0, 50),
    col: typeof r.col === 'number' && Number.isFinite(r.col) ? Math.floor(r.col) : 0,
    row: typeof r.row === 'number' && Number.isFinite(r.row) ? Math.floor(r.row) : 0,
    rotation,
  }
}

function sanitizeOverlay(v: unknown): PlacedOverlay | null {
  if (typeof v !== 'object' || v === null) return null
  const r = v as Record<string, unknown>
  if (typeof r.overlayType !== 'string') return null
  const rotation = ROTATIONS.includes(r.rotation as Rotation) ? (r.rotation as Rotation) : 0
  return {
    id: typeof r.id === 'string' ? r.id : `o-${Math.random().toString(36).slice(2)}`,
    overlayType: r.overlayType.slice(0, 50),
    x: typeof r.x === 'number' && Number.isFinite(r.x) ? Math.floor(r.x) : 0,
    y: typeof r.y === 'number' && Number.isFinite(r.y) ? Math.floor(r.y) : 0,
    rotation: rotation as PlacedOverlay['rotation'],
  }
}

export function loadBuilderDraft(): BuilderDraft {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { tiles: [], overlays: [] }
    const parsed = JSON.parse(raw) as unknown
    const r = (typeof parsed === 'object' && parsed !== null ? parsed : {}) as Record<string, unknown>
    const tiles = Array.isArray(r.tiles)
      ? r.tiles.slice(0, 500).map(sanitizeTile).filter((t): t is PlacedMapTile => t !== null)
      : []
    const overlays = Array.isArray(r.overlays)
      ? r.overlays.slice(0, 500).map(sanitizeOverlay).filter((o): o is PlacedOverlay => o !== null)
      : []
    return { tiles, overlays }
  } catch {
    return { tiles: [], overlays: [] }
  }
}

export function saveBuilderDraft(draft: BuilderDraft): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(draft))
  } catch {
    /* localStorage voll/blockiert – Entwurf bleibt im Speicher der Sitzung */
  }
}
