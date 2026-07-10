import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
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
import { applyTheme, getStoredTheme } from './theme'

// Gespeichertes Theme vor dem ersten Render setzen (kein Aufflackern).
applyTheme(getStoredTheme())

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename="/quest-vault-reborn">
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
