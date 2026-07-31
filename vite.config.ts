import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import pkg from './package.json' with { type: 'json' }

// ── Vorschau-Builds (GitHub-Pages-Branch-Vorschau) ───────────────────────────
//
// Der Produktions-Build läuft unverändert unter `/quest-vault-reborn/`. Ein
// VORSCHAU-Build (ein Entwicklungsbranch, der vor dem Merge geprüft werden soll)
// wird zusätzlich unter `/quest-vault-reborn/preview/<slug>/` veröffentlicht.
// Gesteuert wird das ausschließlich über Umgebungsvariablen aus dem Workflow —
// ohne gesetzte Variablen verhält sich der Build exakt wie bisher.
//
//   PAGES_BASE            Basis-Pfad des Builds (Default: Produktionspfad)
//   PAGES_ASSET_BASE      Basis für die lokalen Bild-Assets (cards/, game-icons/).
//                         Vorschauen zeigen standardmäßig auf die Bilder der
//                         Hauptseite — sonst läge das 131-MB-Kartenarchiv in
//                         JEDER Vorschau erneut (Pages-Artefakt-Limit: 1 GB).
//   PAGES_PREVIEW_BRANCH  Branchname → markiert den Build als Vorschau
//   PAGES_PREVIEW_SLUG    Ordnername der Vorschau
//   PAGES_PREVIEW_SHA     Commit der Vorschau (für das Vorschau-Abzeichen)
// Die Build-Konfiguration läuft in Node; `@types/node` ist bewusst keine
// Abhängigkeit des Projekts (siehe Dependency-Pass v1.8.1) — die eine benötigte
// Deklaration steht deshalb hier.
declare const process: { env: Record<string, string | undefined> }

const base = process.env.PAGES_BASE || '/quest-vault-reborn/'
const assetBase = process.env.PAGES_ASSET_BASE || base
const previewBranch = process.env.PAGES_PREVIEW_BRANCH || ''

const preview = previewBranch
  ? {
      branch: previewBranch,
      slug: process.env.PAGES_PREVIEW_SLUG || '',
      sha: (process.env.PAGES_PREVIEW_SHA || '').slice(0, 7),
      builtAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
    }
  : null

/** Sonderzeichen für die Verwendung in einem RegExp entschärfen. */
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export default defineConfig({
  base,
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __ASSET_BASE__: JSON.stringify(assetBase),
    __PREVIEW__: JSON.stringify(preview),
  },
  plugins: [
    react(),
    VitePWA({
      // In Vorschau-Builds KEIN Service Worker: die Vorschau liegt im Scope der
      // Hauptseite (`/quest-vault-reborn/`), zwei konkurrierende Worker im selben
      // Scope würden sich gegenseitig die Navigation abfangen. Die Vorschau ist
      // ein Prüfwerkzeug, kein installierbares Offline-Ziel.
      disable: !!preview,
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icon.svg'],
      manifest: {
        name: 'Quest Vault Reborn',
        short_name: 'Quest Vault',
        description: 'Online-Tool für Descent: Die Reise ins Dunkel 2. Edition',
        theme_color: '#1a1a2e',
        background_color: '#0f0f1a',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        // WICHTIG: Der Service Worker der Hauptseite beantwortet JEDE Navigation
        // in seinem Scope aus dem Precache (`NavigationRoute` → index.html). Ohne
        // diese Ausnahme würde er auch `/quest-vault-reborn/preview/<slug>/…`
        // beantworten und damit die HAUPT-App statt der Vorschau ausliefern.
        navigateFallbackDenylist: [new RegExp(`^${escapeRe(base)}preview/`)],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/raw\.githubusercontent\.com\//,
            handler: 'CacheFirst',
            options: {
              cacheName: 'game-assets',
              expiration: {
                maxEntries: 500,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
    }),
  ],
})
