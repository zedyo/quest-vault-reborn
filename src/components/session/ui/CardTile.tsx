// ── CardTile — die eine Karten-Kachel des Session-Trackers ───────────────────
//
// Kern des Redesigns: JEDE Karte im Tracker (Fähigkeit, Gegenstand, Overlord-
// Karte, Plotkarte, Gerücht, Belohnung, Marktkarte) geht durch diese Komponente.
// `rulesText` ist deshalb PFLICHTFELD — der Regeltext steht immer im Klartext,
// der Kartenscan ist nur noch 40×56-Miniatur mit Lightbox.
//
// Symbole im Regeltext (Herz/Schub/Erschöpfung/Aktion …) rendert `renderGameText`
// wie überall sonst in der App.

import type { ReactNode } from 'react'
import { renderGameText } from '../../GameSymbols'
import CardThumb, { type ThumbSize } from './CardThumb'
import { CheckBox, Rules } from './controls'

export interface CardTileProps {
  /** Kopfzeilen-Label links (Deckname, Slot, „AKT I · Straße"). */
  eyebrow?: ReactNode
  /** Kopfzeilen-Label rechts (Kosten, Kartentyp, „ABENTEUER"). */
  eyebrowRight?: ReactNode
  title: ReactNode
  /** Kosten-Pille neben dem Titel („2 XP", „175 G", „3 BEDROHUNG"). */
  cost?: ReactNode
  /** Regeltext im Klartext — Pflicht, nicht optional. */
  rulesText: string
  /** Zusatzzeile zwischen Titel und Regeltext (z. B. Zeitfenster, Herkunft). */
  above?: ReactNode
  /** Warn-/Hinweiszeile in Akzentfarbe unter dem Regeltext. */
  warn?: ReactNode
  thumbUrl?: string | null
  thumbSize?: ThumbSize
  /** Zustandszeile in der Fußzeile (Mono, faint) — „Im Deck", Sperrgrund … */
  state?: ReactNode
  /** Exemplarzahl rechts in der Fußzeile („2×"). */
  copies?: ReactNode
  /** Auswahl-Kachel: zeigt links ein 20-px-Kästchen und macht die Kachel klickbar. */
  selected?: boolean
  onSelect?: () => void
  disabled?: boolean
  /** Beliebige Fußzeilen-Steuerung (Buttons, HeroChipRow). */
  footer?: ReactNode
  /** Schmale Spalte → Regeltext 12,5 px statt 13,5 px. */
  dense?: boolean
  className?: string
}

export default function CardTile({
  eyebrow,
  eyebrowRight,
  title,
  cost,
  rulesText,
  above,
  warn,
  thumbUrl,
  thumbSize = 'tile',
  state,
  copies,
  selected,
  onSelect,
  disabled = false,
  footer,
  dense = false,
  className = '',
}: CardTileProps) {
  const selectable = typeof onSelect === 'function'
  const hasHeader = eyebrow != null || eyebrowRight != null

  const body = (
    <>
      {hasHeader && (
        <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 border-b border-line bg-surface-2">
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-faint truncate">{eyebrow}</span>
          {eyebrowRight != null && (
            <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-accent-bright whitespace-nowrap">
              {eyebrowRight}
            </span>
          )}
        </div>
      )}
      <div className="flex gap-3 p-3.5 flex-1">
        {selectable && <span className="pt-0.5"><CheckBox checked={!!selected} /></span>}
        <div className="min-w-0 flex-1 flex flex-col gap-2">
          <div className="flex items-start gap-2.5">
            <p className="min-w-0 font-head text-[16px] font-bold leading-[1.2] text-fg">{title}</p>
            {cost != null && (
              <span className="ml-auto shrink-0 font-mono text-[9px] tracking-[0.12em] uppercase whitespace-nowrap rounded-pill border border-accent-line bg-accent-soft px-2 py-[3px] text-accent">
                {cost}
              </span>
            )}
          </div>
          {above}
          <Rules dense={dense}>{renderGameText(rulesText, dense ? 12 : 13)}</Rules>
          {warn != null && <p className="text-[12px] leading-[1.45] text-accent-bright">{warn}</p>}
          {(footer != null || state != null || copies != null) && (
            <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
              {footer}
              {state != null && (
                <span className="font-mono text-[9.5px] tracking-[0.1em] uppercase text-faint">{state}</span>
              )}
              {copies != null && (
                <span className="ml-auto font-mono text-[10px] text-faint whitespace-nowrap">{copies}</span>
              )}
            </div>
          )}
        </div>
        {thumbUrl && <CardThumb url={thumbUrl} name={typeof title === 'string' ? title : 'Karte'} size={thumbSize} />}
      </div>
    </>
  )

  const shell = `flex flex-col rounded-card border overflow-hidden text-left transition-all ${
    selected ? 'border-accent-line bg-accent-soft' : 'border-line bg-surface'
  } ${disabled ? 'opacity-45' : ''} ${className}`

  if (selectable) {
    return (
      <button type="button" onClick={onSelect} disabled={disabled} aria-pressed={!!selected} className={`${shell} ${disabled ? 'cursor-not-allowed' : 'hover:border-accent-line'}`}>
        {body}
      </button>
    )
  }
  return <div className={shell}>{body}</div>
}
