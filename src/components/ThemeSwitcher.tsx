import { useState, useRef, useEffect } from 'react'
import { THEMES, getStoredTheme, setStoredTheme } from '../theme'

function Swatch({ color }: { color: string }) {
  return (
    <span
      className="inline-block w-3.5 h-3.5 rounded-sm border border-black/40 shrink-0"
      style={{ backgroundColor: color }}
    />
  )
}

/**
 * Theme-Umschalter. `variant="inline"` rendert eine Liste (für das mobile Menü),
 * sonst einen Dropdown-Button (für die Kopfleiste).
 */
export default function ThemeSwitcher({ variant = 'dropdown' }: { variant?: 'dropdown' | 'inline' }) {
  const [current, setCurrent] = useState(getStoredTheme)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const choose = (id: string) => {
    setStoredTheme(id)
    setCurrent(id)
    setOpen(false)
  }

  if (variant === 'inline') {
    return (
      <div>
        <p className="px-2.5 text-[10px] uppercase tracking-wider text-gray-600 mb-1">Design</p>
        <div className="flex flex-col gap-0.5">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => choose(t.id)}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded text-xs font-medium transition-colors ${
                current === t.id ? 'bg-accent text-onaccent' : 'text-gray-300 hover:text-gray-50 hover:bg-dungeon-800'
              }`}
            >
              <Swatch color={t.swatch} />
              {t.label}
              {current === t.id && <span className="ml-auto">✓</span>}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Design wählen"
        title="Design wählen"
        className="p-2 rounded text-gray-300 hover:text-gray-50 hover:bg-dungeon-800 transition-colors flex items-center"
      >
        <span className="text-base leading-none">🎨</span>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-1 w-44 bg-dungeon-850 border border-dungeon-600 rounded-lg shadow-xl shadow-black/40 p-1.5 z-50 flex flex-col gap-0.5"
        >
          {THEMES.map((t) => (
            <button
              key={t.id}
              role="menuitemradio"
              aria-checked={current === t.id}
              onClick={() => choose(t.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                current === t.id ? 'bg-accent text-onaccent' : 'text-gray-300 hover:text-gray-50 hover:bg-dungeon-800'
              }`}
            >
              <Swatch color={t.swatch} />
              {t.label}
              {current === t.id && <span className="ml-auto">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
