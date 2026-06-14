import type { DieColor } from '../types/game'
import { DiceSymbol } from './GameSymbols'

const DIE_NAME_DE: Record<DieColor, string> = {
  blue: 'Blau',
  red: 'Rot',
  yellow: 'Gelb',
  green: 'Grün',
  white: 'Weiß',
  gray: 'Grau',
  brown: 'Braun',
  black: 'Schwarz',
  silver: 'Silber',
}

interface DicePipProps {
  color: DieColor
  size?: 'sm' | 'md'
}

export function DicePip({ color, size = 'sm' }: DicePipProps) {
  return (
    <span title={DIE_NAME_DE[color]} className="inline-flex items-center leading-none">
      <DiceSymbol color={color} size={size === 'md' ? 22 : 16} />
    </span>
  )
}

interface DiceRowProps {
  dice: DieColor[]
  label?: string
}

export function DiceRow({ dice, label }: DiceRowProps) {
  return (
    <div className="flex items-center gap-1">
      {label && <span className="text-gray-500 text-xs w-16 shrink-0">{label}</span>}
      <div className="flex gap-0.5">
        {dice.map((d, i) => (
          <DicePip key={i} color={d} />
        ))}
      </div>
    </div>
  )
}
