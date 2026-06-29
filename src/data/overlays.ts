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
  // ── Durchgänge (als farbige Absperrung auf der Feldkante gerendert) ─────────
  // Türen liegen in Descent auf der KANTE zwischen vier Feldern (2 davor, 2
  // dahinter) und werden auf den Quest-Buch-Diagrammen als farbiger Balken über
  // die 2-Felder-Öffnung gezeichnet – daher `render: 'bar'` + Rotation (Kante).
  { id: 'door', nameEn: 'Door', nameDe: 'Tür', category: 'passage', cols: 1, rows: 1, expansionId: 'base', color: '#dc2626', icon: '🚪', render: 'bar',
    descriptionDe: 'Tür – rote Absperrung über die 2-Felder-Öffnung zwischen zwei Kartenteilen; per ↻ auf die richtige Kante drehen.' },
  { id: 'locked-door', nameEn: 'Locked Door', nameDe: 'Verschlossene Tür', category: 'passage', cols: 1, rows: 1, expansionId: 'base', color: '#d97706', icon: '🔒', render: 'bar',
    descriptionDe: 'Verschlossene Tür – gelbe/orange Absperrung; öffnet erst nach Erfüllen einer Quest-Bedingung. Per ↻ auf die Kante drehen.' },
  { id: 'portcullis', nameEn: 'Portcullis', nameDe: 'Fallgitter', category: 'passage', cols: 1, rows: 1, expansionId: 'shadow-of-nerekhall', color: '#64748b', icon: '⛩️', render: 'bar',
    descriptionDe: 'Fallgitter – graue Absperrung; blockiert die Öffnung wie eine Wand, bis es ausgelöst/geöffnet wird. Per ↻ auf die Kante drehen.' },
  // ── Gelände-Overlay-Token (echte lose Plättchen-Overlays) ──────────────────
  // Hinweis: Wasser/Lava/Eis/Grube sind in Descent 2e auf die PLÄTTCHEN GEDRUCKT
  // (farbige Linien), es gibt keine losen Token dafür → bewusst NICHT im Katalog.
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
  { id: 'hero-start', nameEn: 'Hero Start / Entrance', nameDe: 'Helden-Start / Eingang', category: 'marker', cols: 1, rows: 1, expansionId: 'base', color: '#16a34a', icon: '🏁',
    descriptionDe: 'Helden-Startgebiet / Eingang – markiert, wo die Helden die Begegnung beginnen (auf den Quest-Diagrammen als hervorgehobenes Startfeld gezeigt; hier eigener Builder-Marker).' },
  // ── Figuren (echte NSC-/Verbündeten-Token, any2cards) ──────────────────────
  { id: 'villager', nameEn: 'Villager (male)', nameDe: 'Dorfbewohner', category: 'figure', cols: 1, rows: 1, expansionId: 'base', color: '#a16207', icon: '🧍',
    descriptionDe: 'Dorfbewohner – neutrale Figur, z. B. zum Eskortieren oder Beschützen in einer Quest.' },
  { id: 'villager-female', nameEn: 'Villager (female)', nameDe: 'Dorfbewohnerin', category: 'figure', cols: 1, rows: 1, expansionId: 'base', color: '#a16207', icon: '🧍‍♀️',
    descriptionDe: 'Dorfbewohnerin – neutrale Figur (zweite Dorfbewohner-Variante).' },
  { id: 'ally', nameEn: 'Ally', nameDe: 'Verbündeter', category: 'figure', cols: 1, rows: 1, expansionId: 'labyrinth-of-ruin', color: '#0d9488', icon: '🤝',
    descriptionDe: 'Verbündeter – generische Verbündeten-Figur, die in manchen Quests an der Seite der Helden kämpft.' },
  { id: 'raythen', nameEn: 'Raythen', nameDe: 'Raythen', category: 'figure', cols: 1, rows: 1, expansionId: 'labyrinth-of-ruin', color: '#0d9488', icon: '🧝',
    descriptionDe: 'Raythen – benannter Verbündeter aus „Labyrinth des Schreckens".' },
  { id: 'serena', nameEn: 'Serena', nameDe: 'Serena', category: 'figure', cols: 1, rows: 1, expansionId: 'labyrinth-of-ruin', color: '#0d9488', icon: '🧝‍♀️',
    descriptionDe: 'Serena – benannte Verbündete aus „Labyrinth des Schreckens".' },
  { id: 'scourge', nameEn: 'Scourge', nameDe: 'Geißel', category: 'figure', cols: 1, rows: 1, expansionId: 'the-chains-that-rust', color: '#7c3aed', icon: '👹',
    descriptionDe: 'Geißel – Diener-/NSC-Figur aus „Die rostenden Ketten".' },
  { id: 'raven-flock', nameEn: 'Raven Flock', nameDe: 'Rabenschwarm', category: 'figure', cols: 1, rows: 1, expansionId: 'the-trollfens', color: '#475569', icon: '🐦‍⬛',
    descriptionDe: 'Rabenschwarm – Diener-/NSC-Figur aus „Die Trollsümpfe".' },
]

/** Schneller Zugriff auf einen Overlay-Typ per id. */
export const OVERLAY_BY_ID: Record<string, OverlayType> = Object.fromEntries(
  OVERLAYS.map((o) => [o.id, o]),
)
