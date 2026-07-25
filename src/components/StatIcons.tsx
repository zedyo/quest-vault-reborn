import { GameIcon } from './icons/GameIcon'
import type { AttackType } from '../types/game'

// Geteilte Stat-Icons für Helden-/Monster-/Leutnant-Statzeilen. Seit v1.6.12
// die gerasterten Descent-Embleme aus dem Icon-Set (Scheiben-Variante, folgen
// dem aktiven Theme); die früheren Inline-SVG-Badges (Herz/Tropfen/Schwert und
// die Movement-/Defense-Badges aus GameSymbols) wurden dadurch ersetzt.
// Die flachen Kartentext-Symbole in GameSymbols (renderGameText) bleiben.

/** Herz — Lebenspunkte. */
export function HealthIcon({ size = 16 }: { size?: number }) {
  return <GameIcon kind="symbol" name="leben" size={size} />
}

/** Erschöpfungs-Tropfen — Ausdauer (Stamina). */
export function StaminaIcon({ size = 16 }: { size?: number }) {
  return <GameIcon kind="symbol" name="erschoepfung" size={size} />
}

/** Stiefel — Geschwindigkeit/Bewegung (Statzeile). */
export function SpeedIcon({ size = 16 }: { size?: number }) {
  return <GameIcon kind="symbol" name="bewegung" size={size} />
}

/** Schild — Verteidigung (Statzeile). */
export function DefenseStatIcon({ size = 16 }: { size?: number }) {
  return <GameIcon kind="symbol" name="verteidigung" size={size} />
}

/** Angriffsart: Axt = Nahkampf, Bogen = Fernkampf (ersetzt das generische Schwert). */
export function AttackTypeIcon({ type, size = 16 }: { type?: AttackType; size?: number }) {
  const range = type === 'range'
  return (
    <GameIcon
      kind="symbol"
      name={range ? 'fernkampf' : 'nahkampf'}
      size={size}
      alt={range ? 'Fernkampf' : 'Nahkampf'}
    />
  )
}
