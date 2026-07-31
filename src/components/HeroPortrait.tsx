// ── HeroPortrait — Kopf-Porträt eines Helden in den kleinen Kreisen/Kacheln ──
//
// Ersetzt die früheren Initialen-Platzhalter (Dashboard, Session-Tracker) und den
// blinden Kartenausschnitt (Quest-Editor). Das Bild ist ein aus dem deutschen
// Original-Kartenscan geschnittenes Quadrat, in dem der Kopf 80 % der Kante füllt
// (`scripts/hero_portraits.py`) — dadurch bleibt das Gesicht bis hinunter zu 22 px
// erkennbar.
//
// Das Kürzel bleibt als Rückfallebene sichtbar: es liegt UNTER dem Bild und wird
// erst sichtbar, wenn das Bild fehlt (z. B. unbekannte Helden-Id aus einem
// importierten Spielstand). Damit sieht ein Fehlschlag exakt wie vorher aus.

import { heroPortraitUrl } from '../data/assetUrls'

export default function HeroPortrait({
  heroId,
  size,
  label,
  shape = 'circle',
  title,
  className = '',
  borderClass = 'border-accent-line',
  style,
  dimmed = false,
}: {
  heroId: string
  /** Kantenlänge in px. */
  size: number
  /** Kürzel/Initialen als Rückfallebene. */
  label?: string
  shape?: 'circle' | 'chip' | 'square'
  title?: string
  className?: string
  /** Rahmenfarbe — z. B. die Archetyp-Farbe im Quest-Editor. */
  borderClass?: string
  style?: React.CSSProperties
  /** Nicht ausgewählter Zustand in Umschaltern: abgedunkelt statt gefüllt. */
  dimmed?: boolean
}) {
  const radius = shape === 'circle' ? 'rounded-full' : shape === 'chip' ? 'rounded-chip' : ''
  return (
    <span
      title={title}
      className={`relative shrink-0 overflow-hidden inline-flex items-center justify-center
        bg-accent-soft border ${borderClass} ${radius} ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      {label && (
        <span
          className="font-mono uppercase leading-none text-accent"
          style={{ fontSize: Math.max(8, Math.round(size * 0.32)) }}
        >
          {label}
        </span>
      )}
      <img
        src={heroPortraitUrl(heroId)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        draggable={false}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
          dimmed ? 'opacity-55' : ''
        }`}
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
    </span>
  )
}
