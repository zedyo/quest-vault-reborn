// ── Design-System-Bausteine des Session-Trackers (Redesign v1.8.0) ───────────
//
// Die Typo-Skala aus dem Design-Handoff lebt hier an EINER Stelle (Eyebrow/Micro/
// Meta/Rules/Head*), damit sie nicht wieder als `text-[9px]`-Wildwuchs über die
// Seiten verteilt wird. Alle Farben laufen ausschließlich über die semantischen
// `--qv-*`-Tokens bzw. die davon abgeleiteten Tailwind-Klassen (bg/surface/
// surface-2/line/fg/muted/faint/accent/onaccent) — dadurch folgt jeder Baustein
// automatisch dem umgebenden `data-theme` (Heldentum bzw. Overlord).
//
// Mindestgrößen (verbindlich): Tippziele ≥ 44 px, Fließtext ≥ 13 px,
// Regeltext ≥ 12,5 px.

import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Icon, type IconName } from '../../QvIcons'

// ── Typo-Skala ───────────────────────────────────────────────────────────────

/** Abschnittslabel: Mono 10 / .20em / uppercase / faint. */
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[10px] tracking-[0.2em] uppercase text-faint ${className}`}>{children}</p>
  )
}

/** Feldlabel / Kartenkopf: Mono 9 / .18em / uppercase. */
export function Micro({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-[9px] tracking-[0.18em] uppercase text-faint ${className}`}>{children}</span>
  )
}

/** Belohnungszeilen / Zähler: Mono 11. */
export function Meta({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`font-mono text-[11px] text-faint ${className}`}>{children}</span>
}

/** Regeltext einer Karte (13,5 px; `dense` = 12,5 px in schmalen Spalten). */
export function Rules({
  children,
  dense = false,
  className = '',
}: {
  children: ReactNode
  dense?: boolean
  className?: string
}) {
  return (
    <p
      className={`text-muted ${dense ? 'text-[12.5px] leading-[1.45]' : 'text-[13.5px] leading-[1.5]'} ${className}`}
      style={{ textWrap: 'pretty' } as React.CSSProperties}
    >
      {children}
    </p>
  )
}

/** Panel-Überschrift (20/700) bzw. Unterabschnitt (18/700) / Kartentitel (16/700). */
export function Head({
  size = 'm',
  children,
  className = '',
}: {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  children: ReactNode
  className?: string
}) {
  const px = { xl: 'text-[26px]', l: 'text-[22px]', m: 'text-[20px]', s: 'text-[18px]', xs: 'text-[16px]' }[size]
  return <h3 className={`font-head font-bold leading-tight text-fg ${px} ${className}`}>{children}</h3>
}

// ── Buttons ──────────────────────────────────────────────────────────────────

export type BtnVariant = 'primary' | 'secondary' | 'ghost'

const BTN_BASE =
  'inline-flex items-center justify-center gap-2 rounded-control font-head font-semibold whitespace-nowrap ' +
  'transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 ' +
  'motion-safe:hover:enabled:-translate-y-[2px] hover:enabled:brightness-110 active:enabled:scale-[.99]'

const BTN_VARIANT: Record<BtnVariant, string> = {
  primary: 'bg-btn-primary text-onaccent border border-accent-deep shadow-btn',
  secondary: 'bg-accent-soft text-fg border border-accent-line',
  ghost: 'bg-surface text-muted border border-line hover:enabled:text-fg',
}

export function Btn({
  variant = 'primary',
  size = 'md',
  block = false,
  icon,
  children,
  className = '',
  ...rest
}: {
  variant?: BtnVariant
  size?: 'md' | 'sm'
  block?: boolean
  icon?: IconName
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      {...rest}
      className={`${BTN_BASE} ${BTN_VARIANT[variant]} ${
        size === 'sm' ? 'h-11 sm:h-9 px-3.5 text-[13.5px]' : 'h-11 px-5 text-[14.5px]'
      } ${block ? 'w-full' : ''} ${className}`}
    >
      {icon && <Icon name={icon} size={size === 'sm' ? 14 : 16} />}
      {children}
    </button>
  )
}

/** Button-Optik als Navigations-Link (react-router). */
export function LinkBtn({
  to,
  variant = 'primary',
  size = 'md',
  block = false,
  icon,
  children,
  className = '',
}: {
  to: string
  variant?: BtnVariant
  size?: 'md' | 'sm'
  block?: boolean
  icon?: IconName
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      to={to}
      className={`${BTN_BASE} ${BTN_VARIANT[variant]} ${
        size === 'sm' ? 'h-11 sm:h-9 px-3.5 text-[13.5px]' : 'h-11 px-5 text-[14.5px]'
      } ${block ? 'w-full' : ''} ${className}`}
    >
      {icon && <Icon name={icon} size={size === 'sm' ? 14 : 16} />}
      {children}
    </Link>
  )
}

/** 32-px-Icon-Knopf (Zeilenaktionen). Auf Touch bleibt die Trefferfläche ≥ 44 px. */
export function IconBtn({
  icon,
  label,
  className = '',
  ...rest
}: { icon: IconName; label: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      {...rest}
      className={`relative inline-flex items-center justify-center w-11 h-11 sm:w-8 sm:h-8 shrink-0 rounded-control
        border border-line text-muted hover:text-fg hover:border-accent-line transition-colors
        after:absolute after:-inset-[6px] after:content-[''] ${className}`}
    >
      <Icon name={icon} size={15} />
    </button>
  )
}

// ── Badge ────────────────────────────────────────────────────────────────────

export function Badge({
  variant = 'outline',
  mono = false,
  glow = false,
  children,
  className = '',
}: {
  variant?: 'accent' | 'outline'
  mono?: boolean
  glow?: boolean
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-2.5 py-[3px] ${
        mono ? 'font-mono text-[9px] tracking-[0.14em] uppercase' : 'font-head text-[12.5px] font-semibold'
      } ${
        variant === 'accent'
          ? 'bg-accent-soft border border-accent-line text-accent-bright'
          : 'border border-line text-muted'
      } ${className}`}
      style={glow ? { boxShadow: 'var(--qv-glow-accent)' } : undefined}
    >
      {children}
    </span>
  )
}

// ── Stepper (44 px, −/Wert/+) ────────────────────────────────────────────────

export function Stepper({
  value,
  onChange,
  min = 0,
  max = 99,
  label,
  className = '',
}: {
  value: number
  onChange: (n: number) => void
  min?: number
  max?: number
  label?: string
  className?: string
}) {
  const btn =
    'w-11 h-11 shrink-0 flex items-center justify-center text-fg text-lg leading-none ' +
    'hover:bg-accent-soft disabled:opacity-30 disabled:hover:bg-transparent transition-colors'
  return (
    <span
      className={`inline-flex items-stretch h-11 rounded-control border border-line bg-surface-2 overflow-hidden ${className}`}
      role="group"
      aria-label={label}
    >
      <button type="button" className={btn} onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label={`${label ?? 'Wert'} verringern`}>
        −
      </button>
      <span className="flex-1 min-w-[2.5rem] flex items-center justify-center font-head font-bold text-[15px] tabular-nums border-x border-line px-1">
        {value}
      </span>
      <button type="button" className={btn} onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label={`${label ?? 'Wert'} erhöhen`}>
        +
      </button>
    </span>
  )
}

// ── Switch ───────────────────────────────────────────────────────────────────

export function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex items-center w-[42px] h-6 shrink-0 rounded-pill border transition-colors
        before:absolute before:-inset-y-2.5 before:inset-x-0 before:content-[''] ${
        checked ? 'bg-accent border-accent' : 'bg-surface-2 border-line'
      }`}
    >
      <span
        className={`block w-[18px] h-[18px] rounded-full transition-transform ${
          checked ? 'translate-x-[21px] bg-onaccent' : 'translate-x-[2px] bg-muted'
        }`}
      />
    </button>
  )
}

// ── Progress ─────────────────────────────────────────────────────────────────

export function Progress({
  value = 0,
  height = 6,
  className = '',
}: {
  value?: number
  height?: number
  className?: string
}) {
  return (
    <span className={`block rounded-pill bg-surface-2 border border-line overflow-hidden ${className}`} style={{ height }}>
      <span className="block h-full bg-accent" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </span>
  )
}

export function ProgressSegments({
  filled,
  total,
  className = '',
}: {
  filled: number
  total: number
  className?: string
}) {
  return (
    <span className={`flex gap-1 ${className}`} aria-hidden>
      {Array.from({ length: Math.max(0, total) }, (_, i) => (
        <span key={i} className={`flex-1 h-[3px] rounded-sm ${i < filled ? 'bg-accent' : 'bg-surface-2'}`} />
      ))}
    </span>
  )
}

// ── Formularfelder ───────────────────────────────────────────────────────────

const FIELD =
  'w-full h-11 rounded-control bg-surface-2 border border-line px-3 text-[14.5px] text-fg ' +
  'placeholder:text-faint focus:outline-none focus:border-accent transition-colors'

export function TextField({
  value,
  onChange,
  placeholder,
  label,
  className = '',
  ...rest
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  label?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) {
  return (
    <input
      {...rest}
      aria-label={label}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`${FIELD} ${className}`}
    />
  )
}

/** Gold-/Zahlenfeld — der einzige verbliebene Einsatz eines Zahlenfelds. */
export function NumberField({
  value,
  onChange,
  max = 100000,
  min = 0,
  label,
  className = '',
}: {
  value: number
  onChange: (n: number) => void
  max?: number
  min?: number
  label?: string
  className?: string
}) {
  return (
    <input
      type="number"
      inputMode="numeric"
      aria-label={label}
      value={value}
      min={min}
      max={max}
      onChange={(e) => onChange(clampInt(e.target.value, max, min))}
      className={`${FIELD} tabular-nums ${className}`}
    />
  )
}

/** Ganzzahl aus einem Input, geklemmt auf [min, max] (NaN/Infinity → min). */
export function clampInt(raw: string, max: number, min = 0): number {
  const n = Math.floor(Number(raw))
  return Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : min
}

export function Select({
  value,
  onChange,
  children,
  label,
  className = '',
}: {
  value: string
  onChange: (v: string) => void
  children: ReactNode
  label?: string
  className?: string
}) {
  return (
    <select
      aria-label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${FIELD} pr-8 [&>option]:text-[14px] [&>optgroup]:text-[13px] ${className}`}
    >
      {children}
    </select>
  )
}

/** Filterfeld (40 px) mit fest positioniertem Lupen-Icon. */
export function FilterSearch({
  value,
  onChange,
  placeholder = 'Karte oder Regeltext suchen …',
  focused = false,
  className = 'w-[264px]',
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  /** Fokussierte Optik (Screen 11b: 44 px + Akzentring). */
  focused?: boolean
  className?: string
}) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <span className="pointer-events-none absolute left-3.5 text-faint">
        <Icon name="search" size={focused ? 16 : 15} />
      </span>
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-control bg-surface-2 pl-10 pr-3 text-fg placeholder:text-faint placeholder:italic
          focus:outline-none transition-colors ${
            focused
              ? 'h-11 text-[15px] border border-accent'
              : 'h-11 sm:h-10 text-[14px] border border-line focus:border-accent'
          }`}
        style={focused ? { boxShadow: '0 0 0 3px var(--qv-accent-soft)' } : undefined}
      />
    </div>
  )
}

// ── Segmentierte Umschalter (40 px, Design-Handoff) ──────────────────────────

export function Segmented<T extends string | number>({
  options,
  value,
  onChange,
  block = false,
  className = '',
}: {
  options: { value: T; label: ReactNode }[]
  value: T
  onChange: (v: T) => void
  block?: boolean
  className?: string
}) {
  return (
    <div
      className={`inline-flex h-12 sm:h-10 items-stretch rounded-control border border-line overflow-hidden ${
        block ? 'w-full' : ''
      } ${className}`}
    >
      {options.map((o) => (
        <button
          key={String(o.value)}
          type="button"
          onClick={() => onChange(o.value)}
          aria-pressed={value === o.value}
          className={`flex-1 px-3.5 text-[13.5px] font-head font-semibold transition-colors whitespace-nowrap ${
            value === o.value ? 'bg-accent text-onaccent' : 'bg-surface-2 text-muted hover:text-fg'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

// ── Strukturbausteine ────────────────────────────────────────────────────────

/** Akt-/Abschnittsband: Mono-Label + Akzentlinie + optionale rechte Mono-Meta. */
export function Band({ label, meta, className = '' }: { label: ReactNode; meta?: ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-accent-bright whitespace-nowrap">
        {label}
      </span>
      <span className="flex-1 h-px bg-accent-line" />
      {meta != null && (
        <span className="font-mono text-[10px] uppercase text-faint whitespace-nowrap">{meta}</span>
      )}
    </div>
  )
}

/** Karten-/Panel-Rahmen (surface, 1 px Linie, radius-card, shadow-card). */
export function Panel({
  children,
  className = '',
  tone = 'surface',
  accent = false,
}: {
  children: ReactNode
  className?: string
  tone?: 'surface' | 'surface-2'
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-card border shadow-card ${accent ? 'border-accent-line' : 'border-line'} ${
        tone === 'surface' ? 'bg-surface' : 'bg-surface-2'
      } ${className}`}
    >
      {children}
    </div>
  )
}

/** Akzent-Hinweiskasten (Info-Banner). */
export function NoteBox({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-control border border-accent-line bg-accent-soft px-4 py-3 text-[13.5px] leading-[1.5] text-fg ${className}`}
    >
      <span className="shrink-0 mt-0.5 text-accent-bright">
        <Icon name="info" size={16} />
      </span>
      <div className="min-w-0">{children}</div>
    </div>
  )
}

/**
 * Bereichs-Design: rendert Kinder in einem eigenen `data-theme`-Container.
 * Heldenbereiche laufen in „heldentum", Overlord-Bereiche in „overlord" —
 * unabhängig vom globalen Theme-Schalter (Kern der neuen Orientierung).
 */
export function ThemeScope({
  theme,
  children,
  className = '',
  ...rest
}: { theme: 'heldentum' | 'overlord'; children: ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-theme={theme} {...rest} className={`text-fg ${className}`}>
      {children}
    </div>
  )
}

/** 20-px-Auswahlkästchen (Belohnungs-/Fähigkeits-/Overlord-Kacheln). */
export function CheckBox({ checked, size = 20 }: { checked: boolean; size?: number }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[5px] border ${
        checked ? 'bg-accent border-accent text-onaccent' : 'bg-surface border-line'
      }`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {checked && <Icon name="check" size={Math.round(size * 0.6)} />}
    </span>
  )
}
