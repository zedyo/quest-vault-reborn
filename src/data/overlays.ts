import type { OverlayType } from '../types/game'

// Overlay-Plättchen / Spielmarker, die Quest-Autoren im Kartenbauer als 1×1-Feld-
// marker platzieren, um Türen, Gelände, Missionsziele und Figuren auf der Karte zu
// kennzeichnen. Jeder Eintrag entspricht einer ECHTEN Descent-2e-Komponente; das
// Markerbild ist das transparente Original-Token (`overlayTokenUrl(id)` ->
// public/cards/de/overlays/<id>.png, Quelle: any2cards `tokens/d2e/...`).
//
// `descriptionDe` ist eine kurze, eigene Mechanik-Notiz (kein Regelheft-Text).
// `icon`/`color` dienen nur als Fallback bzw. Akzentfarbe (z. B. im Auswahlmenü).
// Modell: pro Feld ein Marker (1×1) – passend für die Karten-Annotation, nicht als
// exakte physische Plättchengröße gedacht.
export const OVERLAYS: OverlayType[] = [
  // ── Durchgänge ────────────────────────────────────────────────────────────
  { id: 'door', nameEn: 'Door', nameDe: 'Tür', category: 'passage', cols: 1, rows: 1, expansionId: 'base', color: '#b45309', icon: '🚪',
    descriptionDe: 'Tür – blockiert Bewegung und Sichtlinie, bis eine Figur sie als Aktion öffnet.' },
  { id: 'locked-door', nameEn: 'Locked Door', nameDe: 'Verschlossene Tür', category: 'passage', cols: 1, rows: 1, expansionId: 'base', color: '#92400e', icon: '🔒',
    descriptionDe: 'Verschlossene Tür – lässt sich erst nach Erfüllen einer Quest-Bedingung öffnen.' },
  { id: 'portcullis', nameEn: 'Portcullis', nameDe: 'Fallgitter', category: 'passage', cols: 1, rows: 1, expansionId: 'shadow-of-nerekhall', color: '#6b7280', icon: '⛩️',
    descriptionDe: 'Fallgitter – blockiert das Feld wie eine Wand, bis es ausgelöst/geöffnet wird.' },
  // ── Gelände ───────────────────────────────────────────────────────────────
  { id: 'water', nameEn: 'Water Terrain', nameDe: 'Wasser', category: 'terrain', cols: 1, rows: 1, expansionId: 'base', color: '#1d4ed8', icon: '💧',
    descriptionDe: 'Wasser-Geländemarker (Eigenschaft „Wasser") – kennzeichnet Wasserfelder für Karten-/Quest-Effekte.' },
  { id: 'hot', nameEn: 'Hot Terrain', nameDe: 'Heißes Gelände', category: 'terrain', cols: 1, rows: 1, expansionId: 'base', color: '#dc2626', icon: '🔥',
    descriptionDe: 'Hitze-Geländemarker (Eigenschaft „Heiß") – kennzeichnet Lava-/Feuerfelder für entsprechende Effekte.' },
  { id: 'ice', nameEn: 'Ice Terrain', nameDe: 'Eis', category: 'terrain', cols: 1, rows: 1, expansionId: 'base', color: '#0891b2', icon: '❄️',
    descriptionDe: 'Eis-Geländemarker (Eigenschaft „Eis") – kennzeichnet vereiste Felder für entsprechende Effekte.' },
  { id: 'overgrowth', nameEn: 'Overgrowth', nameDe: 'Überwucherung', category: 'terrain', cols: 1, rows: 1, expansionId: 'labyrinth-of-ruin', color: '#15803d', icon: '🌿',
    descriptionDe: 'Überwucherung – Geländeplättchen aus „Labyrinth des Schreckens", markiert ein zugewuchertes Feld.' },
  { id: 'crumbling', nameEn: 'Crumbling Terrain', nameDe: 'Brüchiges Gelände', category: 'terrain', cols: 1, rows: 1, expansionId: 'mists-of-bilehall', color: '#78716c', icon: '🪨',
    descriptionDe: 'Brüchiges Gelände – Geländeplättchen aus „Nebel über Bilehall".' },
  { id: 'old-wall', nameEn: 'Old Wall', nameDe: 'Alte Mauer', category: 'terrain', cols: 1, rows: 1, expansionId: 'mists-of-bilehall', color: '#57534e', icon: '🧱',
    descriptionDe: 'Alte Mauer – Geländeplättchen aus „Nebel über Bilehall"; blockiert wie eine Wand.' },
  // ── Marker ────────────────────────────────────────────────────────────────
  { id: 'objective', nameEn: 'Objective Token (Red)', nameDe: 'Zielmarker (rot)', category: 'marker', cols: 1, rows: 1, expansionId: 'base', color: '#dc2626', icon: '🎯',
    descriptionDe: 'Zielmarker – kennzeichnet ein Missionsziel auf der Karte.' },
  { id: 'objective-blue', nameEn: 'Objective Token (Blue)', nameDe: 'Zielmarker (blau)', category: 'marker', cols: 1, rows: 1, expansionId: 'base', color: '#2563eb', icon: '🔵',
    descriptionDe: 'Zielmarker (blau) – kennzeichnet ein Missionsziel; Farben unterscheiden mehrere Ziele.' },
  { id: 'objective-green', nameEn: 'Objective Token (Green)', nameDe: 'Zielmarker (grün)', category: 'marker', cols: 1, rows: 1, expansionId: 'base', color: '#16a34a', icon: '🟢',
    descriptionDe: 'Zielmarker (grün) – kennzeichnet ein Missionsziel; Farben unterscheiden mehrere Ziele.' },
  { id: 'objective-white', nameEn: 'Objective Token (White)', nameDe: 'Zielmarker (weiß)', category: 'marker', cols: 1, rows: 1, expansionId: 'base', color: '#e5e7eb', icon: '⚪',
    descriptionDe: 'Zielmarker (weiß) – kennzeichnet ein Missionsziel; Farben unterscheiden mehrere Ziele.' },
  { id: 'search', nameEn: 'Search Token', nameDe: 'Suchmarker', category: 'marker', cols: 1, rows: 1, expansionId: 'base', color: '#15803d', icon: '🔍',
    descriptionDe: 'Suchmarker – durchsuchbarer Punkt; eine Figur zieht beim Durchsuchen eine Suchkarte.' },
  { id: 'search-unique', nameEn: 'Unique Search Token', nameDe: 'Besonderer Suchmarker', category: 'marker', cols: 1, rows: 1, expansionId: 'base', color: '#ca8a04', icon: '⭐',
    descriptionDe: 'Besonderer Suchmarker – durchsuchbarer Punkt mit einem questspezifischen Fund.' },
  // ── Figuren ───────────────────────────────────────────────────────────────
  { id: 'villager', nameEn: 'Villager', nameDe: 'Dorfbewohner', category: 'figure', cols: 1, rows: 1, expansionId: 'base', color: '#a16207', icon: '🧍',
    descriptionDe: 'Dorfbewohner – neutrale Figur, z. B. zum Eskortieren oder Beschützen in einer Quest.' },
]

/** Schneller Zugriff auf einen Overlay-Typ per id. */
export const OVERLAY_BY_ID: Record<string, OverlayType> = Object.fromEntries(
  OVERLAYS.map((o) => [o.id, o]),
)
