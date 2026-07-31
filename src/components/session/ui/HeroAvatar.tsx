// ── HeroAvatar — Porträt eines Helden im Session-Tracker ────────────────────
//
// Dünne Hülle um `HeroPortrait`, die Kürzel und Namen aus dem `TrackedHero`
// zieht. Damit haben alle Heldenkacheln des Trackers (Überblick, Helden,
// Heldenbogen, Einrichtung, Abschluss-Flow) dieselbe Optik und dieselbe
// Rückfallebene, ohne dass jede Stelle `heroMono` selbst importiert.

import HeroPortrait from '../../HeroPortrait'
import type { TrackedHero } from '../../../types/session'
import { heroMono, heroFullName } from '../sessionHelpers'

export default function HeroAvatar({
  hero,
  size = 30,
  shape = 'chip',
  className = '',
  dimmed = false,
  withTitle = true,
}: {
  hero: TrackedHero
  size?: number
  shape?: 'circle' | 'chip'
  className?: string
  dimmed?: boolean
  withTitle?: boolean
}) {
  return (
    <HeroPortrait
      heroId={hero.heroId}
      size={size}
      shape={shape}
      label={heroMono(hero)}
      title={withTitle ? heroFullName(hero) : undefined}
      className={className}
      dimmed={dimmed}
    />
  )
}
