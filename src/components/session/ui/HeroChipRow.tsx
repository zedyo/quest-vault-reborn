// ── HeroChipRow — Zuweisung über Heldenkürzel ────────────────────────────────
//
// Ersetzt sämtliche `<select>`-Zuweisungen des alten Trackers („verschieben zu…",
// „einem Helden zuweisen…"). Ein Klick auf ein Kürzel setzt `toHeroLocalId`;
// ein Klick auf das AKTIVE Kürzel oder auf „Gemeinsam" setzt `null`.
//
// Mobil (< sm) werden die Kürzel zu gleich breiten 44-px-Flächen — kein Dropdown,
// das auf dem Handy den halben Bildschirm verdeckt. Ab `sm` gilt die im Design
// vorgegebene Kachelgröße (24–34 px, über `--chip` gesetzt).

import type { CSSProperties, ReactNode } from 'react'
import type { TrackedHero } from '../../../types/session'
import { heroMono, heroFullName } from '../sessionHelpers'
import HeroPortrait from '../../HeroPortrait'

export default function HeroChipRow({
  heroes,
  value,
  onChange,
  allowShared = true,
  size = 32,
  orientation = 'row',
  label,
  className = '',
}: {
  heroes: TrackedHero[]
  /** Aktuell zugewiesener Held (localId) oder null = gemeinsame Ausrüstung. */
  value: string | null
  onChange: (localId: string | null) => void
  allowShared?: boolean
  size?: number
  orientation?: 'row' | 'col'
  label?: ReactNode
  className?: string
}) {
  if (heroes.length === 0) return null
  const col = orientation === 'col'
  const vars = { '--chip': `${size}px`, '--chip-h': `${col ? Math.round(size * 0.83) : size}px` } as CSSProperties
  // Porträt etwas kleiner als die Fläche — der Knopfrahmen bleibt als Auswahlring sichtbar.
  const inner = Math.max(18, Math.round((col ? size * 0.83 : size) - 5))

  return (
    <div
      className={`flex gap-1.5 ${col ? 'flex-col items-stretch' : 'flex-row flex-wrap items-center'} ${className}`}
      role="group"
      aria-label="Gegenstand zuweisen"
      style={vars}
    >
      {label != null && (
        <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-faint mr-1 self-center">{label}</span>
      )}
      {heroes.map((h) => {
        const active = value === h.localId
        return (
          <button
            key={h.localId}
            type="button"
            onClick={() => onChange(active ? null : h.localId)}
            title={heroFullName(h)}
            aria-label={heroFullName(h)}
            aria-pressed={active}
            className={`inline-flex items-center justify-center rounded-chip border transition-colors
              ${col ? 'w-[var(--chip)] h-[var(--chip-h)]' : 'flex-1 min-w-11 h-11 sm:flex-none sm:w-[var(--chip)] sm:h-[var(--chip-h)]'}
              ${active ? 'bg-accent border-accent' : 'bg-surface-2 border-line hover:border-accent-line'}`}
          >
            {/* Ausgewählt = volles Porträt im Akzentrahmen, sonst abgedunkelt. */}
            <HeroPortrait
              heroId={h.heroId}
              size={inner}
              label={heroMono(h)}
              dimmed={!active}
            />
          </button>
        )
      })}
      {allowShared && !col && (
        <button
          type="button"
          onClick={() => onChange(null)}
          aria-pressed={value === null}
          className={`inline-flex items-center justify-center shrink-0 h-11 sm:h-[var(--chip-h)] px-3 rounded-chip border border-dashed
            text-[12.5px] whitespace-nowrap transition-colors ${
              value === null ? 'border-accent bg-accent-soft text-fg' : 'border-line text-muted hover:text-fg'
            }`}
        >
          Gemeinsam
        </button>
      )}
    </div>
  )
}
