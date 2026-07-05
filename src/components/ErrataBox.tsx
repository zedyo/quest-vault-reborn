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
    <ul className="list-disc pl-4 space-y-1 marker:text-gold-600/70">
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
    <div className="rounded border border-emerald-900/50 bg-emerald-950/20 px-2 py-1.5 space-y-1">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-emerald-300/90">
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
    <p className="text-[10px] text-gray-600 italic pt-0.5">
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
}: {
  entries: ErrataEntry[]
  className?: string
  /** Zeigt pro Eintrag den Komponentennamen als Zwischenüberschrift (z. B. bei
   *  Kampagnen mit mehreren Abenteuer-Errata). */
  showEntryNames?: boolean
}) {
  if (!entries.length) return null
  return (
    <details
      className={`mt-2 group rounded border border-amber-800/40 bg-amber-950/15 open:bg-amber-950/25 transition-colors ${className}`}
    >
      <summary className="cursor-pointer select-none list-none marker:content-none [&::-webkit-details-marker]:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[11px] hover:bg-amber-900/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500">
        <span aria-hidden>📖</span>
        <span className="font-semibold text-amber-300/90 uppercase tracking-wide">Errata &amp; FAQ</span>
        {entries.length > 1 && <span className="text-amber-400/70">({entries.length})</span>}
        <span className="text-gray-500 normal-case tracking-normal">· CRRG V1.15</span>
        <span className="ml-auto text-gray-500 text-[9px] transition-transform group-open:rotate-180" aria-hidden>
          ▾
        </span>
      </summary>
      <div className="px-2.5 pb-2.5 pt-1 space-y-3 text-xs border-t border-amber-900/30">
        {entries.map((e) => (
          <div key={e.id} className="space-y-1.5">
            {showEntryNames && (
              <div className="text-amber-200/90 font-semibold border-l-2 border-amber-700/50 pl-2">
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
