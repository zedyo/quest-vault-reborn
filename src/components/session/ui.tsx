// Kleine, geteilte UI-Bausteine für die Session-Tracker-Tabs (Inputs, Toggle-
// Chips) in der App-Goldoptik. Bewusst schlank – größere Bausteine kommen aus
// src/components (ModalOverlay, ConfirmDialog, Filters …).

import type { ReactNode } from 'react'

const INPUT_CLASS =
  'w-full bg-dungeon-900 border border-dungeon-700 rounded px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-gold-500'

export function FieldLabel({ children }: { children: ReactNode }) {
  return <span className="block text-xs font-semibold text-gold-400 mb-1">{children}</span>
}

export function TextInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label?: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <label className="block">
      {label && <FieldLabel>{label}</FieldLabel>}
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={INPUT_CLASS}
      />
    </label>
  )
}

export function NumberInput({
  label,
  value,
  onChange,
  min = 0,
  max = 999,
  className = 'w-28',
}: {
  label?: string
  value: number
  onChange: (v: number) => void
  min?: number
  max?: number
  className?: string
}) {
  return (
    <label className="block">
      {label && <FieldLabel>{label}</FieldLabel>}
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => {
          const n = Math.floor(Number(e.target.value))
          onChange(Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : min)
        }}
        className={`${INPUT_CLASS} ${className}`}
      />
    </label>
  )
}

/** Ein-/ausschaltbarer Chip (Skills, Karten, Gerüchte, Relikte, Decks …). */
export function ChipToggle({
  active,
  onClick,
  title,
  children,
}: {
  active: boolean
  onClick: () => void
  title?: string
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-pressed={active}
      className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
        active
          ? 'bg-gold-500 text-dungeon-950 border-gold-500'
          : 'bg-dungeon-800 text-gray-300 border-dungeon-600 hover:border-gold-500'
      }`}
    >
      {children}
    </button>
  )
}

/** Mengen-Stepper (−/Wert/+), z. B. für Mehrfach-Exemplare von Karten (0..max). */
export function QtyStepper({
  value,
  max,
  onChange,
  label,
  title,
}: {
  value: number
  max: number
  onChange: (n: number) => void
  label: ReactNode
  title?: string
}) {
  const btn =
    'w-5 h-5 flex items-center justify-center rounded text-sm leading-none disabled:opacity-30 disabled:cursor-not-allowed hover:bg-dungeon-700'
  return (
    <span
      title={title}
      className={`inline-flex items-center gap-1 rounded-full border pl-2.5 pr-1 py-0.5 text-xs ${
        value > 0 ? 'border-gold-500 bg-dungeon-800 text-gold-200' : 'border-dungeon-600 bg-dungeon-800 text-gray-300'
      }`}
    >
      <span className="truncate max-w-[12rem]">{label}</span>
      <button type="button" onClick={() => onChange(Math.max(0, value - 1))} disabled={value <= 0} className={btn} aria-label="weniger">
        −
      </button>
      <span className="w-4 text-center tabular-nums">{value}</span>
      <button type="button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} className={btn} aria-label="mehr">
        +
      </button>
    </span>
  )
}

/** Überschrift eines Unterabschnitts innerhalb eines Tabs. */
export function SubHeading({ children, hint }: { children: ReactNode; hint?: ReactNode }) {
  return (
    <div className="mb-2">
      <h4 className="font-display text-sm text-gold-400 font-bold">{children}</h4>
      {hint && <p className="text-gray-500 text-xs mt-0.5">{hint}</p>}
    </div>
  )
}
