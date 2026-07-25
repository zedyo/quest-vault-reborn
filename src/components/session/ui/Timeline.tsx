// Zeitleiste des Kampagnenpfads: Akt-Bänder, 44-px-Rail mit 26-px-Nummernkreisen
// und 1-px-Verbindern, Zeile = Titel + Rolle + Belohnungs-Mono-Zeile + Ausgang +
// Bearbeiten-Knopf. Das offene Ende („hier stehen wir") kommt als `children`.

import type { ReactNode } from 'react'
import { Band, IconBtn } from './controls'

export interface TimelineRow {
  id: string
  /** Laufende Nummer im Verlauf (bereits formatiert, z. B. „01"). */
  no: string
  title: string
  /** Rolle (Einführung/Zwischenspiel/Finale) – Mono in Akzentfarbe. */
  role?: string
  /** Belohnungszeile, Mono. */
  rewards: string
  outcome: string
  /** Zwischenspiel-Zeilen werden mit Akzentrahmen hervorgehoben. */
  highlight?: boolean
}

export interface TimelineGroup {
  /** Akt-Band-Label („AKT I", „ZWISCHENSPIEL", „AKT II"). */
  label: string
  meta?: string
  rows: TimelineRow[]
}

function Rail({ no, highlight, last = false }: { no: ReactNode; highlight?: boolean; last?: boolean }) {
  return (
    <div className="w-11 shrink-0 flex flex-col items-center">
      <span className="w-px flex-1 bg-line" />
      <span
        className={`w-[26px] h-[26px] shrink-0 rounded-full inline-flex items-center justify-center font-mono text-[10px] ${
          highlight ? 'border border-accent-line bg-accent-soft text-accent-bright' : 'border border-line bg-surface-2 text-muted'
        }`}
      >
        {no}
      </span>
      <span className={`w-px flex-1 ${last ? 'bg-transparent' : 'bg-line'}`} />
    </div>
  )
}

export default function Timeline({
  groups,
  onEdit,
  onDelete,
  children,
}: {
  groups: TimelineGroup[]
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
  /** Offenes Ende (Vorschlagszweige). */
  children?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      {groups.map((g) => (
        <div key={g.label} className="flex flex-col gap-2">
          <Band label={g.label} meta={g.meta} className="mt-3 mb-0.5" />
          {g.rows.map((r) => (
            <div key={r.id} className="flex items-stretch">
              <Rail no={r.no} highlight={r.highlight} />
              <div
                className={`flex-1 min-w-0 my-[3px] rounded-control border bg-surface px-4 py-3 flex items-center gap-3.5 ${
                  r.highlight ? 'border-accent-line' : 'border-line'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <p className="font-head text-[16px] font-semibold text-fg truncate">{r.title}</p>
                    {r.role && (
                      <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-accent-bright whitespace-nowrap">
                        {r.role}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-faint">{r.rewards}</p>
                </div>
                <span className="hidden sm:block text-[13px] text-muted whitespace-nowrap">{r.outcome}</span>
                {onEdit && <IconBtn icon="edit" label={`${r.title} bearbeiten`} onClick={() => onEdit(r.id)} />}
                {onDelete && <IconBtn icon="trash" label={`${r.title} löschen`} onClick={() => onDelete(r.id)} />}
              </div>
            </div>
          ))}
        </div>
      ))}

      {children != null && (
        <div className="flex items-stretch mt-1">
          <div className="w-11 shrink-0 flex flex-col items-center">
            <span className="w-px h-3.5 bg-line" />
            <span
              className="w-2.5 h-2.5 shrink-0 rounded-full bg-accent"
              style={{ boxShadow: 'var(--qv-glow-accent)' }}
            />
          </div>
          <div className="flex-1 min-w-0 pt-0.5">{children}</div>
        </div>
      )}
    </div>
  )
}
