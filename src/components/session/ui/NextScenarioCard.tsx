// „Als Nächstes"-Karte: der Vorschlag aus dem Kampagnenpfad. Erscheint im
// Überblick (oben), im Verlauf (offenes Ende) und in Flow-Schritt 1 (links).
// Akzentrahmen + diagonaler Akzentverlauf wie im Design-Handoff.

import type { ReactNode } from 'react'
import { Eyebrow } from './controls'

export default function NextScenarioCard({
  eyebrow,
  title,
  subtitle,
  actions,
  compact = false,
  className = '',
}: {
  eyebrow: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  actions?: ReactNode
  /** Mobil/Seitenspalte: Titel 20 statt 26, Aktionen unter dem Text. */
  compact?: boolean
  className?: string
}) {
  return (
    <div
      className={`rounded-card border border-accent-line shadow-card p-5 sm:px-[22px] ${
        compact ? 'flex flex-col gap-3' : 'flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6'
      } ${className}`}
      style={{ background: 'linear-gradient(120deg, var(--qv-accent-soft), transparent 62%), var(--qv-surface)' }}
    >
      <div className="flex-1 min-w-0">
        <Eyebrow className="!text-accent-bright">{eyebrow}</Eyebrow>
        <h3
          className={`mt-2 font-head font-bold leading-[1.15] text-fg ${compact ? 'text-[20px]' : 'text-[26px]'}`}
        >
          {title}
        </h3>
        {subtitle != null && <p className="mt-1.5 text-[14px] text-muted">{subtitle}</p>}
      </div>
      {actions != null && (
        <div className={`flex flex-col gap-2 shrink-0 ${compact ? '' : 'lg:w-[212px]'}`}>{actions}</div>
      )}
    </div>
  )
}
