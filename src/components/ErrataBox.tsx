import type { ErrataEntry, ErrataGroup, ErrataNote } from '../types/game'
import { renderGameTextInline } from './GameSymbols'
import { CRRG_SOURCE } from '../data/ruleClarifications'

// ── Aufklappbare Errata-/FAQ-Zusatzbox (CRRG V1.15) ──────────────────────────
//
// Zeigt komponentenbezogene Errata/FAQ aus dem Community Rules Reference Guide
// als ZUSÄTZLICHE, per Default eingeklappte Info. Erweitert die Original-Karte,
// ersetzt sie nicht. Immer mit Quellenangabe.

export function PointList({ points, size = 12 }: { points: string[]; size?: number }) {
  if (!points.length) return null
  return (
    <ul className="list-disc pl-4 space-y-1 marker:text-accent/60">
      {points.map((p, i) => (
        <li key={i} className="text-gray-300 leading-snug">
          {renderGameTextInline(p, size)}
        </li>
      ))}
    </ul>
  )
}

export function GroupBlock({ group, size = 12 }: { group: ErrataGroup; size?: number }) {
  return (
    <div className="space-y-1">
      {group.label && <div className="text-gray-100 font-semibold">{group.label}</div>}
      <PointList points={group.points} size={size} />
    </div>
  )
}

export function NoteBlock({ note, size = 12 }: { note: ErrataNote; size?: number }) {
  return (
    <div className="rounded border-l-2 border border-success/40 bg-success/10 px-2 py-1.5 space-y-1">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-success">
        {note.title}
      </div>
      <PointList points={note.points} size={size} />
    </div>
  )
}

/** Rendert den Inhalt eines Errata-Eintrags (Gruppen + Notizen), ohne Rahmen. */
export function ErrataEntryBody({ entry, size = 12 }: { entry: ErrataEntry; size?: number }) {
  return (
    <div className="space-y-2">
      {entry.groups.map((g, i) => (
        <GroupBlock key={i} group={g} size={size} />
      ))}
      {entry.notes.map((n, i) => (
        <NoteBlock key={i} note={n} size={size} />
      ))}
    </div>
  )
}

function SourceLine({ pages }: { pages: number[] }) {
  const uniq = Array.from(new Set(pages)).sort((a, b) => a - b)
  return (
    <p className="text-[10px] text-faint italic pt-0.5">
      Quelle: {CRRG_SOURCE}, S. {uniq.join(', ')}
    </p>
  )
}

/**
 * Aufklappbare Errata-/FAQ-Box für eine Komponente. Rendert nichts, wenn keine
 * Einträge vorliegen – kann also bedenkenlos auf jeder Karte platziert werden.
 * Standardmäßig eingeklappt (natives <details>).
 */
export default function ErrataBox({
  entries,
  className = '',
  showEntryNames = false,
  title = 'Errata & FAQ',
}: {
  entries: ErrataEntry[]
  className?: string
  /** Zeigt pro Eintrag den Komponentennamen als Zwischenüberschrift (z. B. bei
   *  Kampagnen mit mehreren Abenteuer-Errata). */
  showEntryNames?: boolean
  /** Überschrift der Box (Default „Errata & FAQ"). */
  title?: string
}) {
  if (!entries.length) return null
  return (
    <details
      className={`mt-2 group rounded border border-accent-line bg-accent-soft transition-colors ${className}`}
    >
      <summary className="cursor-pointer select-none list-none marker:content-none [&::-webkit-details-marker]:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[11px] hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">
        <span aria-hidden>📖</span>
        <span className="font-semibold text-gold-400 uppercase tracking-wide">{title}</span>
        {entries.length > 1 && <span className="text-gold-300">({entries.length})</span>}
        <span className="text-faint normal-case tracking-normal">· CRRG V1.15</span>
        <span className="ml-auto text-faint text-[9px] transition-transform group-open:rotate-180" aria-hidden>
          ▾
        </span>
      </summary>
      <div className="px-2.5 pb-2.5 pt-1 space-y-3 text-xs border-t border-accent-line">
        {entries.map((e) => (
          <div key={e.id} className="space-y-1.5">
            {showEntryNames && (
              <div className="text-fg font-semibold border-l-2 border-accent-line pl-2">
                {e.nameDe}
              </div>
            )}
            <ErrataEntryBody entry={e} />
          </div>
        ))}
        <SourceLine pages={entries.map((e) => e.page)} />
      </div>
    </details>
  )
}
