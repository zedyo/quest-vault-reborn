// Theme-Verwaltung. Die Farb-Themes sind als CSS-Variablen-Sätze in src/index.css
// definiert (per `data-theme` auf <html> umschaltbar). Die Auswahl wird separat in
// localStorage gespeichert – bewusst NICHT im zustand-Persist-Store, damit das
// Spieldaten-Schema (und dessen Migrationspflicht) unangetastet bleibt.
//
// `storageKey` trennt den Schlüsselraum einer Branch-Vorschau von dem der
// Hauptseite (beide liegen auf derselben Domain) — siehe utils/previewBuild.ts.

import { storageKey } from './utils/previewBuild'

export interface Theme {
  id: string
  /** Anzeigename im Umschalter. */
  label: string
  /** Repräsentative Farbe für das Vorschau-Plättchen. */
  swatch: string
}

export const THEMES: Theme[] = [
  { id: 'overlord', label: 'Overlord (Dunkel)', swatch: '#b52626' },
  { id: 'heldentum', label: 'Heldentum (Hell)', swatch: '#c69821' },
]

export const DEFAULT_THEME = 'heldentum'
const STORAGE_KEY = storageKey('qvr-theme')

/** Gespeichertes Theme lesen (oder Standard), robust gegen fehlenden/ungültigen Wert. */
export function getStoredTheme(): string {
  try {
    const t = localStorage.getItem(STORAGE_KEY)
    if (t && THEMES.some((x) => x.id === t)) return t
  } catch {
    /* localStorage nicht verfügbar */
  }
  return DEFAULT_THEME
}

/** `data-theme` auf <html> setzen (wirkt sofort über die CSS-Variablen). */
export function applyTheme(id: string): void {
  document.documentElement.setAttribute('data-theme', id)
}

/** Theme wählen: speichern + anwenden. */
export function setStoredTheme(id: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, id)
  } catch {
    /* Schreiben fehlgeschlagen – Theme trotzdem anwenden */
  }
  applyTheme(id)
}
