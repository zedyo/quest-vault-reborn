import type { HeroArchetype } from '../types/game'
import { GameIcon, type ArchetypeIconName } from './icons/GameIcon'

// Runde Archetyp-Icons (Descent-Klassenarchetypen) — seit v1.6.11 die gerasterten
// Embleme aus dem Icon-Set (farbige Klassenscheibe, folgt dem aktiven Theme).
// Verwendet auf den Archetyp-Filter-Buttons der Helden- und Klassenübersicht.
// Die früheren flachen Inline-SVG-Badges wurden dadurch ersetzt.

// Datentyp 'spaeher' heißt im Icon-Set (und im Regelbuch) 'kundschafter'.
const ICON_NAME: Record<HeroArchetype, ArchetypeIconName> = {
  krieger: 'krieger',
  heiler: 'heiler',
  magier: 'magier',
  spaeher: 'kundschafter',
}

export function ArchetypeIcon({
  archetype,
  size = 16,
  className = '',
  variant = 'disc',
}: {
  archetype: HeroArchetype
  size?: number
  className?: string
  /** 'disc' = Klassenscheibe (Standard), 'plain' = Emblem in Klassenfarbe (für Pills mit eigenem Hintergrund) */
  variant?: 'disc' | 'plain'
}) {
  // hasOwnProperty-Guard: `archetype` kann aus importierten Session-Daten stammen
  if (!Object.prototype.hasOwnProperty.call(ICON_NAME, archetype)) return null
  return (
    <GameIcon
      kind="archetype"
      name={ICON_NAME[archetype]}
      variant={variant}
      size={size}
      className={className}
    />
  )
}

export default ArchetypeIcon
