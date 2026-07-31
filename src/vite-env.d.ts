/// <reference types="vite/client" />

/** App-Version, zur Build-Zeit aus package.json injiziert (siehe vite.config.ts) */
declare const __APP_VERSION__: string

/**
 * Basis-URL der lokalen Bild-Assets (`cards/`, `game-icons/`). Normalerweise
 * identisch mit `import.meta.env.BASE_URL`; in Branch-Vorschau-Builds zeigt sie
 * auf die Hauptseite, damit das Kartenarchiv nicht je Vorschau dupliziert wird.
 */
declare const __ASSET_BASE__: string

/**
 * Kennung des Vorschau-Builds (Branch-Vorschau auf GitHub Pages) — `null` im
 * regulären Produktions-Build.
 */
declare const __PREVIEW__: {
  branch: string
  slug: string
  sha: string
  builtAt: string
} | null
