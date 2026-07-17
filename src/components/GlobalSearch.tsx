import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { searchEntries, type SearchEntry } from '../data/rulesSearchIndex'
import { renderGameTextInline } from './GameSymbols'

const PREVIEW = 8
const MIN = 2

// Kurzen, einzeiligen Ausschnitt für die Vorschau (renderGameTextInline rendert Symbole).
function snippet(text: string): string {
  const t = text.replace(/\s+/g, ' ').trim()
  return t.length > 110 ? t.slice(0, 110) + '…' : t
}

/**
 * Globale Fuzzy-Suche in der Topbar: Live-Vorschau-Dropdown beim Tippen (Top-Treffer
 * quer über Regeln + alle Kartentexte), Tastatur-Navigation (↑/↓/Enter/Esc), „Alle
 * Treffer"-Fußzeile → /suche?q=. Nutzt denselben Index wie die /suche-Seite.
 */
export default function GlobalSearch() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  const all = useMemo(() => (query.trim().length >= MIN ? searchEntries(query) : []), [query])
  const shown = all.slice(0, PREVIEW)
  const total = all.length
  // Fußzeilen-Zeile („Alle N Treffer") ist Index `shown.length` in der Navigation.
  const footerIndex = shown.length
  const showPanel = open && query.trim().length >= MIN

  // Bei Navigationswechsel schließen.
  useEffect(() => { setOpen(false); setActive(-1) }, [location.key])

  // Klick außerhalb schließt das Panel.
  useEffect(() => {
    if (!showPanel) return
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [showPanel])

  const goToFull = useCallback(() => {
    navigate(`/suche?q=${encodeURIComponent(query.trim())}`)
    setOpen(false)
    inputRef.current?.blur()
  }, [navigate, query])

  const openEntry = useCallback((e: SearchEntry) => {
    navigate(e.link)
    setOpen(false)
    setActive(-1)
    inputRef.current?.blur()
  }, [navigate])

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') { setOpen(false); setActive(-1); inputRef.current?.blur(); return }
    if (!showPanel || total === 0) {
      if (e.key === 'Enter' && query.trim().length >= MIN) goToFull()
      return
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, footerIndex)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, -1)) }
    else if (e.key === 'Enter') {
      e.preventDefault()
      if (active >= 0 && active < shown.length) openEntry(shown[active])
      else goToFull()
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <div className="flex items-center gap-2.5 h-10 w-[240px] lg:w-[320px] px-3 rounded-control bg-surface border border-line focus-within:border-accent-line transition-colors">
        <svg width="15" height="15" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.7" className="shrink-0 text-faint" aria-hidden>
          <circle cx="8" cy="8" r="4.4" /><line x1="11.4" y1="11.4" x2="14.5" y2="14.5" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); setActive(-1) }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Regel, Karte, Fähigkeit …"
          aria-label="Globale Suche"
          role="combobox"
          aria-expanded={showPanel}
          aria-controls="global-search-panel"
          className="min-w-0 flex-1 bg-transparent border-0 outline-none font-body text-sm text-fg placeholder:text-faint placeholder:italic"
        />
      </div>

      {showPanel && (
        <div
          id="global-search-panel"
          role="listbox"
          className="absolute z-30 mt-1.5 left-0 w-[min(92vw,420px)] max-h-[70vh] overflow-y-auto rounded-card border border-line bg-surface-2 shadow-panel py-1"
        >
          {total === 0 ? (
            <div className="px-3 py-3 text-sm text-muted">Keine Treffer für „{query.trim()}".</div>
          ) : (
            <>
              {shown.map((e, i) => (
                <button
                  key={e.id}
                  role="option"
                  aria-selected={active === i}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => openEntry(e)}
                  className={`block w-full text-left px-3 py-2 ${active === i ? 'bg-accent-soft' : ''}`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-head text-sm text-fg truncate">{e.title}</span>
                    <span className="shrink-0 text-[9px] uppercase tracking-wide text-accent-bright">{e.category}</span>
                  </div>
                  <div className="text-xs text-muted truncate">{renderGameTextInline(snippet(e.text), 11)}</div>
                </button>
              ))}
              <button
                role="option"
                aria-selected={active === footerIndex}
                onMouseEnter={() => setActive(footerIndex)}
                onClick={goToFull}
                className={`block w-full text-left px-3 py-2 border-t border-line font-head text-xs ${active === footerIndex ? 'bg-accent-soft text-fg' : 'text-accent-bright'}`}
              >
                Alle {total.toLocaleString('de-DE')} Treffer anzeigen →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
