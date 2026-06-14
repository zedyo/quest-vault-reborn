// Geteilte Stat-Icons (Leben/Ausdauer/Angriff), originalgetreu zur Descent-2e-
// Kartengrafik. Bewegung/Verteidigung liegen als Badges in GameSymbols.tsx;
// diese drei ergänzen sie für Helden- und Monster-Statzeilen. Zuvor waren
// HealthIcon (identisch), StaminaIcon und AttackIcon je in HeroesPage/MonstersPage
// dupliziert — hier einmal zentral.

const ICON_STYLE: React.CSSProperties = {
  display: 'inline-block',
  verticalAlign: 'middle',
  flexShrink: 0,
}

/** Rotes Herz — Lebenspunkte. */
export function HealthIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={ICON_STYLE}>
      <circle cx="12" cy="12" r="12" fill="#b52524" />
      {/* Klassisches symmetrisches Herz mit kubischen Bézier-Lappen */}
      <g transform="translate(12 12) scale(0.7951) translate(-12 -12.92)">
        <path
          d="M12,21 L4.5,13.5 C3,11.5 3,7.5 6,5.5 C9,3.5 11.5,6.5 12,9 C12.5,6.5 15,3.5 18,5.5 C21,7.5 21,11.5 19.5,13.5 Z"
          fill="white"
        />
      </g>
    </svg>
  )
}

/** Brauner Tropfen — Ausdauer (Stamina). */
export function StaminaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={ICON_STYLE}>
      <circle cx="12" cy="12" r="12" fill="#92400e" />
      <path d="M 12 3 C 7 8 5.5 12 5.5 15 C 5.5 19.1 8.5 21.5 12 21.5 C 15.5 21.5 18.5 19.1 18.5 15 C 18.5 12 17 8 12 3 Z" fill="white" />
      <path d="M 9.5 15 C 9.5 13.5 10.5 12 12 11" stroke="#92400e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Schwert — Angriff (auf Monsterkarten). */
export function AttackIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={ICON_STYLE}>
      <circle cx="12" cy="12" r="12" fill="#847974" />
      {/* Schwert diagonal von unten-links nach oben-rechts */}
      <g stroke="white" strokeLinecap="round">
        <line x1="11.3" y1="12.7" x2="17" y2="7" strokeWidth="2.4" />
        <line x1="9.2" y1="10.6" x2="13.4" y2="14.8" strokeWidth="2" />
        <line x1="11.3" y1="12.7" x2="7.4" y2="16.6" strokeWidth="2" />
      </g>
      <polygon points="18.7,5.3 17.7,8.0 15.9,6.2" fill="white" />
      <circle cx="6.8" cy="17.2" r="1.6" fill="white" />
    </svg>
  )
}
