import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
// Design-System-Schriften, self-hosted (offline/PWA – kein CDN):
//  Heldentum → Cinzel (Display/Head) + EB Garamond (Text)
//  Overlord  → Pirata One (Display) + Cormorant Garamond (Head/Text)
//  Daten/Mono (themeübergreifend) → IBM Plex Mono
import '@fontsource/cinzel/600.css'
import '@fontsource/cinzel/700.css'
import '@fontsource/eb-garamond/400.css'
import '@fontsource/eb-garamond/500.css'
import '@fontsource/eb-garamond/600.css'
import '@fontsource/pirata-one/400.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary'
import PreviewBadge from './components/PreviewBadge'
import { applyTheme, getStoredTheme } from './theme'
import { IS_PREVIEW } from './utils/previewBuild'

// Gespeichertes Theme vor dem ersten Render setzen (kein Aufflackern).
applyTheme(getStoredTheme())

// Basis-Pfad des Builds: '/quest-vault-reborn/' in der Produktion,
// '/quest-vault-reborn/preview/<slug>/' in einer Branch-Vorschau.
const BASENAME = import.meta.env.BASE_URL.replace(/\/$/, '')

/** sessionStorage kann blockiert sein (Privatmodus) – nie hart scheitern. */
function session(fn: (s: Storage) => void): void {
  try {
    fn(window.sessionStorage)
  } catch {
    /* nicht verfügbar */
  }
}

// ── Branch-Vorschau: Navigation aus dem Service Worker zurückholen ───────────
//
// Der Service Worker der HAUPTSEITE beantwortet jede Navigation in seinem Scope
// (`/quest-vault-reborn/`) aus dem Precache — auch die der Vorschauen, die ja
// darunter liegen. Seit v1.8.2 nimmt er `/preview/` per `navigateFallbackDenylist`
// aus; ein davor installierter Worker tut das noch nicht und liefert dort die
// HAUPT-App aus. Genau das ist hier erkennbar: Produktions-Build, aber eine
// Vorschau-URL. Dann den Worker abmelden und neu laden — danach kommt die
// Vorschau vom Netz. Der Marker verhindert eine Endlosschleife.
const RELOAD_FLAG = 'qvr-preview-sw-reload'
let hijacked = false

if (IS_PREVIEW) {
  // Erfolgreich geladene Vorschau → Marker zurücksetzen.
  session((s) => s.removeItem(RELOAD_FLAG))
} else if (location.pathname.startsWith(`${import.meta.env.BASE_URL}preview/`)) {
  session((s) => {
    if (s.getItem(RELOAD_FLAG)) return
    if (!('serviceWorker' in navigator)) return
    s.setItem(RELOAD_FLAG, '1')
    hijacked = true
    navigator.serviceWorker
      .getRegistrations()
      .then((regs) =>
        Promise.all(
          // NUR die Worker dieses Projekts abmelden: `getRegistrations()` liefert
          // alle der Origin, und zedyo.github.io teilen sich alle GitHub-Pages-
          // Projekte des Kontos.
          regs
            .filter((r) => new URL(r.scope).pathname.startsWith(import.meta.env.BASE_URL))
            .map((r) => r.unregister()),
        ),
      )
      .then(() => location.reload())
      .catch(() => location.reload())
  })
}

// ── Tiefer Link in eine Vorschau (SPA-Fallback) ──────────────────────────────
//
// GitHub Pages kennt keine SPA-Routen: `…/preview/<slug>/monster` ist eine echte
// 404. Die ausgelieferte 404-Seite merkt sich den Pfad und leitet auf die
// Vorschau-Wurzel um (siehe scripts/postbuild.mjs); hier wird er wiederhergestellt.
session((s) => {
  const target = s.getItem('qvr-redirect')
  if (!target || target.length > 2000) return
  s.removeItem('qvr-redirect')
  // Nur Pfade innerhalb des eigenen Basis-Pfads — nie eine fremde URL. Erst
  // normalisieren (`..`-Segmente auflösen), dann prüfen: sessionStorage teilen
  // sich alle Projekte der Origin, der Wert ist also nicht zwingend unserer.
  try {
    const url = new URL(target, location.origin)
    if (url.origin === location.origin && url.pathname.startsWith(import.meta.env.BASE_URL)) {
      history.replaceState(null, '', url.pathname + url.search + url.hash)
    }
  } catch {
    /* unbrauchbarer Wert – ignorieren */
  }
})

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

if (!hijacked) {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <BrowserRouter basename={BASENAME}>
          <App />
        </BrowserRouter>
        <PreviewBadge />
      </ErrorBoundary>
    </StrictMode>,
  )
}
