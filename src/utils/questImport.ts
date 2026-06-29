import type { Quest, Encounter, MapData, PlacedTile, PlacedOverlay, PlacedMonster } from '../types/game'

// Maximalgrößen gegen localStorage-Quota-DoS durch manipulierte Import-Dateien
export const MAX_IMPORT_BYTES = 2_000_000
const MAX_TEXT = 20_000
const MAX_TITLE = 300
const MAX_ENCOUNTERS = 50
const MAX_TILES = 500
const MAX_MONSTERS = 200
const MAX_HEROES = 12

const uid = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(36).slice(2)}`

function str(v: unknown, max = MAX_TEXT): string {
  return typeof v === 'string' ? v.slice(0, max) : ''
}

function num(v: unknown, min: number, max: number, fallback: number): number {
  return typeof v === 'number' && Number.isFinite(v) && v >= min && v <= max ? Math.floor(v) : fallback
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

function sanitizeTile(v: unknown): PlacedTile | null {
  if (!isRecord(v)) return null
  const tileId = str(v.tileId, 50)
  if (!tileId) return null
  const rotation = v.rotation === 90 || v.rotation === 180 || v.rotation === 270 ? v.rotation : 0
  return {
    id: uid(),
    tileId,
    x: num(v.x, 0, 200, 0),
    y: num(v.y, 0, 200, 0),
    rotation,
  }
}

function sanitizeOverlay(v: unknown): PlacedOverlay | null {
  if (!isRecord(v)) return null
  const overlayType = str(v.overlayType, 50)
  if (!overlayType) return null
  const rotation = v.rotation === 90 || v.rotation === 180 || v.rotation === 270 ? v.rotation : 0
  return { id: uid(), overlayType, x: num(v.x, 0, 200, 0), y: num(v.y, 0, 200, 0), rotation }
}

function sanitizeMonster(v: unknown): PlacedMonster | null {
  if (!isRecord(v)) return null
  const monsterId = str(v.monsterId, 100)
  if (!monsterId) return null
  return {
    id: uid(),
    monsterId,
    isMaster: v.isMaster === true,
    x: num(v.x, 0, 200, 0),
    y: num(v.y, 0, 200, 0),
  }
}

function sanitizeMapData(v: unknown): MapData {
  const r = isRecord(v) ? v : {}
  const tiles = Array.isArray(r.tiles)
    ? r.tiles.slice(0, MAX_TILES).map(sanitizeTile).filter((t): t is PlacedTile => t !== null)
    : []
  const overlays = Array.isArray(r.overlays)
    ? r.overlays.slice(0, MAX_TILES).map(sanitizeOverlay).filter((o): o is PlacedOverlay => o !== null)
    : []
  return {
    tiles,
    overlays,
    width: num(r.width, 1, 200, 40),
    height: num(r.height, 1, 200, 32),
  }
}

function sanitizeEncounter(v: unknown): Encounter {
  const r = isRecord(v) ? v : {}
  const monsters = Array.isArray(r.monsters)
    ? r.monsters.slice(0, MAX_MONSTERS).map(sanitizeMonster).filter((m): m is PlacedMonster => m !== null)
    : []
  return {
    id: uid(),
    title: str(r.title, MAX_TITLE) || 'Begegnung',
    mapData: sanitizeMapData(r.mapData),
    flavourText: str(r.flavourText),
    monsters,
    setup: str(r.setup),
    specialRules: str(r.specialRules),
    reinforcements: str(r.reinforcements),
    victoryConditions: str(r.victoryConditions),
    rewards: str(r.rewards),
    story: str(r.story),
  }
}

/**
 * Validiert und bereinigt eine importierte Quest-JSON-Datei.
 * Whitelist-Ansatz: Das Objekt wird Feld für Feld neu aufgebaut — unbekannte
 * Felder (inkl. __proto__ u. ä.) werden verworfen, falsche Typen durch
 * Defaults ersetzt, Texte längenbegrenzt. Gibt null zurück, wenn die Datei
 * strukturell keine Quest ist.
 */
export function parseImportedQuest(raw: unknown): Quest | null {
  if (!isRecord(raw)) return null
  const title = str(raw.title, MAX_TITLE)
  if (!title || !Array.isArray(raw.encounters)) return null

  const heroIds = Array.isArray(raw.heroIds)
    ? raw.heroIds.filter((h): h is string => typeof h === 'string').slice(0, MAX_HEROES).map((h) => h.slice(0, 100))
    : []

  return {
    id: uid(),
    title,
    description: str(raw.description),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    encounters: raw.encounters.slice(0, MAX_ENCOUNTERS).map(sanitizeEncounter),
    heroIds,
  }
}
