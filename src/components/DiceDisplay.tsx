import type { DieColor } from '../types/game'

const DIE_STYLES: Record<DieColor, string> = {
  blue: 'bg-blue-600 border-blue-400',
  red: 'bg-red-600 border-red-400',
  yellow: 'bg-yellow-400 border-yellow-300 text-gray-900',
  green: 'bg-green-600 border-green-400',
  white: 'bg-white border-gray-300 text-gray-900',
  gray: 'bg-gray-400 border-gray-300',
  brown: 'bg-amber-700 border-amber-600',
  black: 'bg-gray-900 border-gray-600',
  silver: 'bg-gray-300 border-gray-200 text-gray-900',
}

const DIE_LABEL: Record<DieColor, string> = {
  blue: 'B',
  red: 'R',
  yellow: 'G',
  green: 'Gn',
  white: 'W',
  gray: 'Gr',
  brown: 'Br',
  black: 'Sw',
  silver: 'Si',
}

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
  const dim = size === 'md' ? 'w-5 h-5 text-xs' : 'w-4 h-4 text-[10px]'
  return (
    <span
      title={DIE_NAME_DE[color]}
      className={`inline-flex items-center justify-center rounded font-bold border text-white leading-none ${dim} ${DIE_STYLES[color]}`}
    >
      {DIE_LABEL[color]}
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
