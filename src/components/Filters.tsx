// Geteilte Filterleisten-Bausteine. Such-Input, „Nur meine Sammlung"-Schalter,
// DE/EN-Umschalter und die segmentierten Buttongruppen waren über HeroesPage,
// MonstersPage, ItemsPage und ClassesPage hinweg mehrfach identisch kopiert.

export type Lang = 'de' | 'en'

// ── SearchInput ───────────────────────────────────────────────────────────────

export function SearchInput({
  value,
  onChange,
  placeholder = 'Suche…',
  className = 'w-64',
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  className?: string
}) {
  return (
    <input
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`bg-dungeon-800 border border-dungeon-700 text-gray-100 rounded px-3 py-2 text-sm focus:outline-none focus:border-gold-500 ${className}`}
    />
  )
}

// ── OwnedToggle ───────────────────────────────────────────────────────────────

export function OwnedToggle({
  checked,
  onChange,
  label = 'Nur meine Sammlung',
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label?: string
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="accent-gold-500"
      />
      {label}
    </label>
  )
}

// ── SegmentedControl ──────────────────────────────────────────────────────────

export interface SegmentedOption<T extends string | number> {
  value: T
  label: React.ReactNode
}

/** Segmentierte Buttongruppe in der App-Goldoptik (aktiv = gold, sonst dunkel). */
export function SegmentedControl<T extends string | number>({
  options,
  value,
  onChange,
  className = '',
}: {
  options: SegmentedOption<T>[]
  value: T
  onChange: (v: T) => void
  className?: string
}) {
  return (
    <div className={`flex items-center gap-0 rounded overflow-hidden border border-dungeon-600 ${className}`}>
      {options.map((o) => (
        <button
          key={String(o.value)}
          onClick={() => onChange(o.value)}
          className={`px-3 py-1.5 text-sm font-medium transition-colors ${
            value === o.value
              ? 'bg-gold-500 text-dungeon-950'
              : 'bg-dungeon-800 text-gray-400 hover:bg-dungeon-700 hover:text-gray-200'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

// ── SourceFilter (Grundspiel / Erweiterung) ──────────────────────────────────

export type Source = 'all' | 'base' | 'expansion'

/** true, wenn `expansionId` zur gewählten Quelle passt (Grundspiel = 'base'). */
export function matchesSource(source: Source, expansionId: string): boolean {
  if (source === 'base') return expansionId === 'base'
  if (source === 'expansion') return expansionId !== 'base'
  return true
}

/** Grundspiel/Erweiterung-Umschalter (Monster, Overlord, Leutnants, Agenten, …). */
export function SourceFilter({
  value,
  onChange,
  className = '',
}: {
  value: Source
  onChange: (s: Source) => void
  className?: string
}) {
  return (
    <SegmentedControl<Source>
      className={className}
      value={value}
      onChange={onChange}
      options={[
        { value: 'all', label: 'Alle' },
        { value: 'base', label: 'Grundspiel' },
        { value: 'expansion', label: 'Erweiterungen' },
      ]}
    />
  )
}

// ── LangToggle ────────────────────────────────────────────────────────────────

/** DE/EN-Umschalter (identisch auf Items- und Klassenseite). */
export function LangToggle({
  value,
  onChange,
  className = '',
}: {
  value: Lang
  onChange: (l: Lang) => void
  className?: string
}) {
  return (
    <SegmentedControl<Lang>
      className={className}
      value={value}
      onChange={onChange}
      options={[
        { value: 'de', label: 'Deutsch' },
        { value: 'en', label: 'English' },
      ]}
    />
  )
}
