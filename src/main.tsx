import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/inter'
import '@fontsource/cinzel/600.css'
import '@fontsource/cinzel/700.css'
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
