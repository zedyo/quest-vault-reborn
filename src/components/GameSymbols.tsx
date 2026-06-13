import type { ReactNode } from 'react'

/**
 * Wiederverwendbare Descent-2e-Spielsymbole und Text-Formatierung.
 *
 * Auf den Originalkarten stehen Symbole statt Worte (Herz ❤, Energie/Schub ⚡,
 * Erschöpfung 💧) und jede Fähigkeit steht in einer eigenen Zeile. `renderGameText`
 * bildet das nach: Es ersetzt die deutschen/englischen Begriffe durch Symbole und
 * setzt jeden mit Punkt endenden Satz auf eine neue Zeile.
 *
 * SurgeSymbol/ActionSymbol sind identisch zu denen der Monsterkarten (MonstersPage).
 */

const baseStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  flexShrink: 0,
} as const

/** Lightning bolt — matches the ⚡ surge symbol on Descent 2e cards */
export function SurgeSymbol({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={baseStyle}>
      {/* Classic lightning bolt: wide upper body, narrow lower spike */}
      <polygon
        points="14,2 6,14 11.5,14 10,22 18,10 12.5,10"
        fill="#c084fc"
        stroke="#a855f7"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Curved action arrow — matches the ↻ symbol on Descent 2e cards */
export function ActionSymbol({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={baseStyle}>
      {/* Arc: ~300° counterclockwise arc, starting top-right, ending bottom-right */}
      <path d="M 18.5 10 A 7 7 0 1 0 17.5 16.5" stroke="#6ee7b7" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Arrowhead at the end of the arc */}
      <polyline points="14.5,20 17.5,16.5 21,18.5" stroke="#6ee7b7" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Solid red heart — the ❤ heart symbol (damage / recovery) on Descent 2e cards */
export function HeartSymbol({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={baseStyle}>
      <path
        d="M12 21 L4.6 13.4 C2.9 11.5 2.9 7.7 5.8 5.8 C8.7 3.9 11.4 6.6 12 9 C12.6 6.6 15.3 3.9 18.2 5.8 C21.1 7.7 21.1 11.5 19.4 13.4 Z"
        fill="#dc2626"
        stroke="#b91c1c"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Blue droplet — the 💧 fatigue symbol on Descent 2e hero/item cards */
export function FatigueSymbol({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={baseStyle}>
      <path
        d="M12 2.5 C12 2.5 5.5 10.5 5.5 15 A6.5 6.5 0 0 0 18.5 15 C18.5 10.5 12 2.5 12 2.5 Z"
        fill="#3b82f6"
        stroke="#2563eb"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ── Text-Formatierung ─────────────────────────────────────────────────────────

// Begriffe (DE + EN), die durch Symbole ersetzt werden. Reihenfolge: Plural vor
// Singular, damit z. B. "Herzen" vor "Herz" greift. Wortgrenzen (\b) verhindern,
// dass Teilstrings in zusammengesetzten Wörtern fälschlich ersetzt werden.
const TOKEN_SPLIT = /(\bHerzen\b|\bHerz\b|\bHearts\b|\bHeart\b|\bSchübe\b|\bSchub\b|\bSurges\b|\bSurge\b|\bErschöpfung\b|\bFatigue\b)/g
const IS_HEART = /^(Herzen|Herz|Hearts|Heart)$/
const IS_SURGE = /^(Schübe|Schub|Surges|Surge)$/
const IS_FATIGUE = /^(Erschöpfung|Fatigue)$/

function renderInline(text: string, symbolSize: number): ReactNode[] {
  // String.split mit Capture-Gruppe behält die Treffer im Ergebnis-Array.
  return text.split(TOKEN_SPLIT).map((part, i) => {
    if (IS_HEART.test(part)) return <HeartSymbol key={i} size={symbolSize} />
    if (IS_SURGE.test(part)) return <SurgeSymbol key={i} size={symbolSize} />
    if (IS_FATIGUE.test(part)) return <FatigueSymbol key={i} size={symbolSize} />
    return <span key={i}>{part}</span>
  })
}

/**
 * Rendert einen Regeltext kartengetreu:
 * - Herz/Herzen → ❤, Schub/Surge → ⚡, Erschöpfung/Fatigue → 💧
 * - jeder mit Punkt endende Satz steht in einer eigenen Zeile
 */
export function renderGameText(text: string, symbolSize = 13): ReactNode {
  if (!text) return null
  // Split at ". " boundaries; re-append period stripped by split (no lookbehind — Safari compat)
  const sentences = text.split(/\.\s+/).map((s, i, arr) => i < arr.length - 1 ? s + '.' : s).filter((s) => s.trim().length > 0)
  return (
    <>
      {sentences.map((sentence, i) => (
        <span key={i} className="block">
          {renderInline(sentence, symbolSize)}
        </span>
      ))}
    </>
  )
}
