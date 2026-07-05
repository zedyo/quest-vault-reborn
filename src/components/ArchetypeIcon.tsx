import type { HeroArchetype } from '../types/game'

// Runde Archetyp-Icons (Descent-Klassenarchetypen) als inline-SVG-Badges –
// farbiger Kreis + weißes Symbol, offline (kein externes Asset). Verwendet auf
// den Archetyp-Filter-Buttons der Helden- und Klassenübersicht.

const BG: Record<HeroArchetype, string> = {
  krieger: '#b91c1c', // rot
  heiler: '#1d4ed8', // blau
  magier: '#d97706', // gold/amber
  spaeher: '#15803d', // grün
}

const SYMBOL: Record<HeroArchetype, React.ReactNode> = {
  // Krieger – Schwert
  krieger: (
    <>
      <path d="M12 2.5 L13.1 4 L13.1 13.5 L10.9 13.5 L10.9 4 Z" fill="white" />
      <rect x="8" y="13.3" width="8" height="1.8" rx="0.6" fill="white" />
      <rect x="11.2" y="15" width="1.6" height="4" fill="white" />
      <rect x="10" y="18.6" width="4" height="1.7" rx="0.7" fill="white" />
    </>
  ),
  // Heiler – Kreuz
  heiler: (
    <>
      <rect x="10.6" y="5" width="2.8" height="14" rx="0.7" fill="white" />
      <rect x="5" y="10.6" width="14" height="2.8" rx="0.7" fill="white" />
    </>
  ),
  // Magier – Funkeln (4-Punkt-Stern)
  magier: (
    <path
      d="M12 2.5 C12.6 8.4 13.6 9.4 19.5 12 C13.6 14.6 12.6 15.6 12 21.5 C11.4 15.6 10.4 14.6 4.5 12 C10.4 9.4 11.4 8.4 12 2.5 Z"
      fill="white"
    />
  ),
  // Kundschafter – Bogen mit Pfeil
  spaeher: (
    <g fill="none" stroke="white" strokeLinecap="round">
      <path d="M8 3 A 12 12 0 0 1 8 21" strokeWidth="2" />
      <line x1="8" y1="3" x2="8" y2="21" strokeWidth="1.3" />
      <line x1="6.5" y1="12" x2="18" y2="12" strokeWidth="1.7" />
      <path d="M18 12 L15 9.4 M18 12 L15 14.6" strokeWidth="1.7" />
    </g>
  ),
}

export function ArchetypeIcon({
  archetype,
  size = 16,
  className = '',
}: {
  archetype: HeroArchetype
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, borderRadius: '50%' }}
      aria-hidden
    >
      <circle cx="12" cy="12" r="12" fill={BG[archetype]} />
      {SYMBOL[archetype]}
    </svg>
  )
}

export default ArchetypeIcon
