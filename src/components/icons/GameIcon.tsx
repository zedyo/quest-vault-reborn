import { useSyncExternalStore } from 'react'
import { ASSET_BASE } from '../../data/assetUrls'

/**
 * Gerasterte Descent-2e-Embleme (WebP, transparent) aus dem Icon-Set unter
 * `public/game-icons/` — je Design-Theme (`overlord` dunkel/Glut, `heldentum`
 * hell/Gold) und bei Symbolen/Archetypen in zwei Varianten:
 *
 *   • `disc`  = „mit-scheibe": Emblem auf abgetrennter Scheibe (Standalone-Badge)
 *   • `plain` = „ohne-hintergrund": nur das Emblem, für Fließtext/Pills mit
 *     eigenem Hintergrund (Archetypen: Emblem in Klassenfarbe, theme-unabhängig)
 *
 * Würfel haben nur eine theme-unabhängige Variante. Jede Datei liegt in den
 * Größen 32/64/128/256 px; `pickSize` wählt die kleinste ausreichende Stufe
 * (Retina-Displays bekommen die doppelte Auflösung).
 *
 * WICHTIG: Diese Komponente ERSETZT die bestehenden Vektor-Komponenten nicht —
 * `GameSymbols` (Kartentext-Symbole aus der PSD-Vorlage), `StatIcons` und die
 * Design-System-Glyphen in `QvIcons` bleiben. `GameIcon` ist für Stellen gedacht,
 * an denen bisher flache Platzhalter standen (z. B. Archetyp-/Merkmal-Badges).
 *
 * Das Inventar (Namens-Unions unten) ist maschinenlesbar in
 * `public/game-icons/manifest.json` hinterlegt; der Datenintegritäts-Test
 * `gameIcons.test.ts` prüft Unions ↔ Manifest ↔ Dateien auf Deckung.
 */

export type GameIconTheme = 'overlord' | 'heldentum'
export type GameIconVariant = 'disc' | 'plain'
export type GameIconKind = 'symbol' | 'menu' | 'archetype' | 'die'

// ── Inventar (Namens-Unions je kind) ─────────────────────────────────────────

/** Kampfsymbole (8) + Monster-Merkmale (10) + Attribute (4). */
export const GAME_SYMBOL_NAMES = [
  // Kampfsymbole
  'leben', 'schub', 'erschoepfung', 'aktion', 'bewegung', 'verteidigung',
  'nahkampf', 'fernkampf',
  // Monster-Merkmale
  'wildnis', 'dunkel', 'hoehle', 'heiss', 'kalt', 'gebirge', 'verflucht',
  'zivilisiert', 'gebaeude', 'wasser',
  // Attribute
  'staerke', 'wissen', 'willenskraft', 'gespuer',
] as const
export type GameSymbolName = (typeof GAME_SYMBOL_NAMES)[number]

export const MENU_ICON_NAMES = [
  'dashboard', 'karte', 'quest', 'monster', 'held', 'suche', 'plus',
  'bearbeiten', 'loeschen', 'speichern', 'filter', 'sortieren', 'import',
  'export', 'drucken', 'chevron', 'schliessen', 'mehr', 'info', 'warnung',
] as const
export type MenuIconName = (typeof MENU_ICON_NAMES)[number]

export const ARCHETYPE_ICON_NAMES = ['krieger', 'magier', 'heiler', 'kundschafter'] as const
export type ArchetypeIconName = (typeof ARCHETYPE_ICON_NAMES)[number]

export const DIE_ICON_NAMES = ['blau', 'rot', 'gelb', 'gruen', 'grau', 'schwarz', 'braun'] as const
export type DieIconName = (typeof DIE_ICON_NAMES)[number]

// ── Aktives Theme (ein MutationObserver für alle Instanzen) ──────────────────

const THEME_FALLBACK: GameIconTheme = 'heldentum' // = DEFAULT_THEME in src/theme.ts

const themeListeners = new Set<() => void>()
let themeObserver: MutationObserver | null = null

function subscribeTheme(onChange: () => void): () => void {
  themeListeners.add(onChange)
  if (!themeObserver) {
    themeObserver = new MutationObserver(() => themeListeners.forEach((l) => l()))
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
  }
  return () => {
    themeListeners.delete(onChange)
    if (themeListeners.size === 0 && themeObserver) {
      themeObserver.disconnect()
      themeObserver = null
    }
  }
}

function readTheme(): GameIconTheme {
  return document.documentElement.dataset.theme === 'overlord' ? 'overlord' : THEME_FALLBACK
}

/** Aktives `data-theme` von `<html>` lesen (live), per Prop überschreibbar. */
function useIconTheme(override?: GameIconTheme): GameIconTheme {
  const live = useSyncExternalStore(subscribeTheme, readTheme)
  return override ?? live
}

// ── Pfadauflösung ────────────────────────────────────────────────────────────

const SIZES = [32, 64, 128, 256] as const

// ASSET_BASE statt "/" — die App wird unter GitHub Pages mit
// base '/quest-vault-reborn/' ausgeliefert; in einer Branch-Vorschau zeigt
// ASSET_BASE auf die Bilder der Hauptseite (vgl. assetUrls.ts).
const BASE = `${ASSET_BASE}game-icons`

function pickSize(px: number): number {
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
  const target = px * (dpr >= 1.5 ? 2 : 1)
  return SIZES.find((s) => s >= target) ?? 256
}

function resolvePath(
  kind: GameIconKind,
  name: string,
  theme: GameIconTheme,
  variant: GameIconVariant,
  file: number,
): string {
  switch (kind) {
    case 'symbol':
      return `${BASE}/symbols/${theme}/${variant === 'plain' ? 'ohne-hintergrund' : 'mit-scheibe'}/${name}-${file}.webp`
    case 'menu':
      return `${BASE}/menu/${theme}/${name}-${file}.webp`
    case 'archetype':
      return variant === 'plain'
        ? `${BASE}/archetypes/ohne-hintergrund/${name}-${file}.webp`
        : `${BASE}/archetypes/${theme}/${name}-${file}.webp`
    case 'die':
      return `${BASE}/dice/${name}-${file}.webp`
  }
}

// ── Komponente ───────────────────────────────────────────────────────────────

interface GameIconBaseProps {
  /** Kantenlänge in px. Default: 24 */
  size?: number
  /** Theme-Override; sonst folgt das Icon live dem aktiven `data-theme`. */
  theme?: GameIconTheme
  /** Alt-Text; leer (Default) = dekorativ (aria-hidden). */
  alt?: string
  className?: string
}

/** Diskriminierte Union: je `kind` sind nur die inventarisierten Namen gültig. */
export type GameIconProps = GameIconBaseProps &
  (
    | { kind: 'symbol'; name: GameSymbolName; variant?: GameIconVariant }
    | { kind: 'menu'; name: MenuIconName; variant?: never }
    | { kind: 'archetype'; name: ArchetypeIconName; variant?: GameIconVariant }
    | { kind: 'die'; name: DieIconName; variant?: never }
  )

export function GameIcon({
  kind,
  name,
  variant = 'disc',
  size = 24,
  theme: themeOverride,
  alt = '',
  className,
}: GameIconProps) {
  const theme = useIconTheme(themeOverride)
  const file = pickSize(size)
  return (
    <img
      src={resolvePath(kind, name, theme, variant, file)}
      width={size}
      height={size}
      alt={alt}
      aria-hidden={alt === '' ? true : undefined}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    />
  )
}

export default GameIcon
