import type { OverlayType } from '../types/game'

// Overlay-Plättchen (Auflegeplättchen) des Grundspiels, die Quest-Autoren im
// Kartenbauer als 1×1-Feldmarker platzieren, um Gelände, Türen, Objekte und
// Missionsmarker auf der Karte zu kennzeichnen.
//
// Es ist nur ein bewusst kompakter, eindeutig realer Kernsatz erfasst (keine
// quest-spezifischen Sondertoken, um keine unbelegten Daten anzulegen).
// `descriptionDe` ist eine kurze, eigene Mechanik-Notiz (kein Regelheft-Text).
// Modell: pro Feld ein Marker (1×1) – passend für die Karten-Annotation, nicht
// als exakte physische Plättchengröße gedacht. Erweiterungs-Overlays können
// später ergänzt werden.
export const OVERLAYS: OverlayType[] = [
  // Gelände / Hindernisse
  { id: 'water', nameEn: 'Water', nameDe: 'Wasser', category: 'terrain', cols: 1, rows: 1, expansionId: 'base', color: '#1d4ed8', icon: '💧',
    descriptionDe: 'Geländefeld – kostet zusätzliche Bewegung zum Betreten.' },
  { id: 'lava', nameEn: 'Lava', nameDe: 'Lava', category: 'terrain', cols: 1, rows: 1, expansionId: 'base', color: '#dc2626', icon: '🔥',
    descriptionDe: 'Gefahrenfeld – eine Figur, die ihren Zug hier beendet, nimmt Schaden.' },
  { id: 'pit', nameEn: 'Pit', nameDe: 'Grube', category: 'terrain', cols: 1, rows: 1, expansionId: 'base', color: '#1f2937', icon: '🕳️',
    descriptionDe: 'Grubenfeld – Figuren fallen hinein und müssen sich befreien.' },
  { id: 'sludge', nameEn: 'Sludge', nameDe: 'Schlamm', category: 'terrain', cols: 1, rows: 1, expansionId: 'base', color: '#854d0e', icon: '🟤',
    descriptionDe: 'Schlamm – verlangsamt die Bewegung beim Betreten.' },
  { id: 'rubble', nameEn: 'Rubble', nameDe: 'Trümmer', category: 'terrain', cols: 1, rows: 1, expansionId: 'base', color: '#6b7280', icon: '🪨',
    descriptionDe: 'Trümmer-Hindernis – kostet zusätzliche Bewegung zum Betreten.' },
  // Durchgänge
  { id: 'door', nameEn: 'Door', nameDe: 'Tür', category: 'passage', cols: 1, rows: 1, expansionId: 'base', color: '#b45309', icon: '🚪',
    descriptionDe: 'Tür – blockiert Bewegung und Sichtlinie, bis sie geöffnet wird.' },
  // Objekte
  { id: 'chest', nameEn: 'Treasure Chest', nameDe: 'Schatztruhe', category: 'object', cols: 1, rows: 1, expansionId: 'base', color: '#ca8a04', icon: '🧰',
    descriptionDe: 'Truhe – Schatz- oder Quest-Objekt zum Durchsuchen.' },
  // Marker
  { id: 'objective', nameEn: 'Objective Token', nameDe: 'Zielmarker', category: 'marker', cols: 1, rows: 1, expansionId: 'base', color: '#7c3aed', icon: '🎯',
    descriptionDe: 'Zielmarker – kennzeichnet ein Missionsziel auf der Karte.' },
  { id: 'search', nameEn: 'Search Token', nameDe: 'Suchmarker', category: 'marker', cols: 1, rows: 1, expansionId: 'base', color: '#15803d', icon: '🔍',
    descriptionDe: 'Suchmarker – durchsuchbarer Punkt; gibt eine Suchkarte.' },
]

/** Schneller Zugriff auf einen Overlay-Typ per id. */
export const OVERLAY_BY_ID: Record<string, OverlayType> = Object.fromEntries(
  OVERLAYS.map((o) => [o.id, o]),
)
