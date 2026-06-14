import type { ReactNode } from 'react'
import type { DieColor } from '../types/game'

/**
 * Wiederverwendbare Descent-2e-Spielsymbole und Text-Formatierung.
 *
 * Auf den Originalkarten stehen Symbole statt Worte (Herz ❤, Energie/Schub ⚡,
 * Erschöpfung 💧) und jede Fähigkeit steht in einer eigenen Zeile. `renderGameText`
 * bildet das nach: Es ersetzt die deutschen/englischen Begriffe durch Symbole und
 * setzt jeden mit Punkt endenden Satz auf eine neue Zeile.
 *
 * Die Pfade von Action/Surge/Fatigue/Movement/Defense stammen aus den
 * Familiar-Karten-Vorlagen (PSD) und wurden zu sauberen Vektoren aufbereitet
 * (v1.1.7). DiceSymbol rendert die Descent-Würfel als isometrische Cubes.
 */

const baseStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  flexShrink: 0,
} as const

// Die getracten Symbole haben nicht-quadratische viewBoxes. Damit sie nicht
// verzerren, wird die größere Kante auf `size` skaliert (Seitenverhältnis bleibt).
function fit(size: number, vw: number, vh: number) {
  const s = size / Math.max(vw, vh)
  return { width: vw * s, height: vh * s }
}

// ── Pfaddaten (aus PSD getract) ────────────────────────────────────────────────

const ACTION_PATH = `M1694 2178 c26 -294 16 -429 -34 -471 -29 -25 -33 -26 -325 -46 -110
-8 -110 -8 -262 -84 -94 -47 -171 -78 -200 -82 -88 -12 -110 -24 -148 -76 -28
-40 -50 -56 -103 -80 -57 -26 -87 -51 -203 -168 -147 -148 -159 -166 -178
-253 -7 -31 -26 -76 -42 -100 -92 -132 -84 -111 -81 -226 4 -145 -45 -262
-108 -262 -6 0 -10 -17 -10 -38 0 -84 222 -130 333 -69 35 20 89 46 121 57 50
19 60 27 75 64 27 60 50 76 127 87 52 7 86 20 136 50 131 79 177 88 563 109
105 6 214 13 243 16 122 13 151 -36 112 -186 -21 -76 -21 -119 -4 -347 6 -73
6 -73 112 -73 107 1 107 1 130 49 17 37 120 147 433 462 560 565 539 539 538
654 -1 103 -5 111 -70 155 -38 25 -62 51 -82 87 -24 45 -34 54 -77 68 -30 10
-59 28 -72 46 -61 79 -74 93 -110 115 -27 17 -47 42 -66 82 -24 50 -33 60 -83
84 -44 21 -63 37 -87 76 -21 35 -46 58 -81 77 -37 21 -60 44 -91 91 -23 35
-45 64 -49 64 -18 0 -80 72 -86 100 -7 30 -7 30 -142 30 -135 0 -135 0 -129
-62z`

const SURGE_PATH = `M2673 2850 c-9 -24 -25 -37 -72 -57 -53 -23 -65 -33 -91 -79 -31 -56
-60 -77 -121 -88 -35 -6 -70 -36 -102 -88 -10 -16 -39 -39 -65 -52 -31 -16
-105 -81 -204 -179 -167 -166 -180 -177 -228 -177 -50 0 -70 -16 -70 -56 0
-104 -71 -148 -196 -121 -110 24 -140 46 -160 115 -27 97 -24 95 -236 93 -242
-3 -232 3 -223 -142 11 -155 -2 -178 -109 -193 -54 -7 -57 -15 -50 -146 8
-149 0 -162 -103 -170 -77 -6 -74 4 -58 -162 11 -114 -15 -158 -94 -158 -63 0
-76 -26 -62 -127 20 -145 -8 -203 -99 -203 -55 0 -70 -28 -70 -130 0 -109 -12
-136 -76 -180 -49 -35 -64 -61 -64 -118 0 -83 -57 -182 -104 -182 -14 0 -16
-17 -16 -125 0 -125 0 -125 149 -125 140 0 150 1 156 20 7 21 170 202 203 226
11 7 46 21 78 29 70 18 73 21 85 76 13 58 41 85 101 100 39 9 54 18 67 42 35
65 60 85 117 97 54 11 57 13 79 63 27 63 47 82 105 102 25 8 69 27 97 42 53
28 53 28 108 -1 79 -41 142 -100 173 -164 44 -88 129 -126 282 -126 145 0 177
25 195 149 13 85 13 85 77 154 71 74 78 93 78 199 0 66 0 66 70 133 39 37 71
76 71 86 1 10 2 57 3 105 1 102 16 130 89 165 70 34 78 52 75 171 -4 122 10
150 86 169 76 19 76 19 74 157 -1 141 5 161 81 255 47 59 72 113 69 151 -5 67
43 140 91 140 21 0 21 4 21 170 0 170 0 170 -98 170 -98 0 -98 0 -109 -30z`

const FATIGUE_PATH = `M1481 2312 c2 -102 -10 -132 -69 -177 -22 -16 -57 -58 -78 -93 -25
-40 -60 -79 -99 -109 -33 -25 -85 -70 -116 -100 -39 -38 -98 -76 -200 -130
-269 -143 -293 -153 -401 -175 -57 -11 -121 -29 -142 -40 -44 -22 -193 -174
-270 -274 -26 -35 -61 -69 -77 -76 -48 -21 -45 -521 3 -541 46 -20 66 -45 118
-145 41 -78 50 -90 100 -118 58 -34 138 -86 205 -134 101 -73 437 -96 570 -39
164 69 296 172 397 310 26 35 68 89 93 119 31 39 55 83 76 145 35 102 68 170
111 233 55 80 77 152 93 302 16 152 42 234 96 302 29 37 29 37 29 432 0 396 0
396 -220 396 -220 0 -220 0 -219 -88z`

const MOVEMENT_PATH = `M873 1754 c-45 -46 -60 -50 -230 -72 -178 -24 -230 -93 -182 -244 20
-64 23 -100 28 -308 7 -266 5 -260 87 -321 130 -99 152 -247 50 -337 -78 -68
-219 -123 -356 -137 -76 -8 -102 -20 -188 -86 -35 -27 -67 -49 -73 -49 -5 0
-9 -16 -9 -35 0 -19 5 -35 11 -35 21 0 87 -60 103 -95 17 -35 17 -35 605 -35
588 0 588 0 624 95 45 115 46 156 10 267 -43 132 -41 560 3 732 38 146 129
286 186 286 15 0 18 9 18 63 -1 62 -1 62 -39 80 -22 10 -56 39 -77 65 -21 26
-59 70 -86 99 -27 29 -51 66 -54 83 -6 30 -6 30 -198 28 -191 -1 -191 -1 -233
-44z`

const DEFENSE_PATH = `M210 2084 c0 -9 -14 -48 -32 -87 -32 -72 -32 -72 -29 -592 3 -555 4
-567 54 -642 19 -26 49 -77 67 -112 24 -44 50 -75 85 -102 28 -21 60 -51 71
-66 12 -15 48 -43 80 -62 33 -19 79 -51 104 -71 25 -21 65 -47 89 -60 25 -12
67 -44 95 -70 70 -65 86 -72 181 -72 95 0 111 7 181 72 28 26 70 58 95 70 24
13 64 39 89 60 25 20 71 52 104 71 32 19 68 47 80 62 11 15 43 45 71 66 35 27
61 58 85 102 18 35 48 86 67 112 50 75 51 87 54 642 3 520 3 520 -29 592 -18
39 -32 78 -32 87 0 14 -74 16 -765 16 -691 0 -765 -2 -765 -16z`

// ── Symbole ─────────────────────────────────────────────────────────────────────

/** Diagonaler Blitz — das ⚡ Energie/Schub-Symbol auf Descent-2e-Karten */
export function SurgeSymbol({ size = 12 }: { size?: number }) {
  return (
    <svg {...fit(size, 288, 288)} viewBox="0 0 288 288" style={baseStyle}>
      <g transform="translate(0,288) scale(0.1,-0.1)" fill="#c084fc" stroke="#a855f7" strokeWidth={8}>
        <path d={SURGE_PATH} />
      </g>
    </svg>
  )
}

/** Pfeil nach rechts — das ↻ Aktions-Symbol auf Descent-2e-Karten */
export function ActionSymbol({ size = 12 }: { size?: number }) {
  return (
    <svg {...fit(size, 304, 224)} viewBox="0 0 304 224" style={baseStyle}>
      <g transform="translate(0,224) scale(0.1,-0.1)" fill="#3b82f6" stroke="none">
        <path d={ACTION_PATH} />
      </g>
    </svg>
  )
}

/** Solides rotes Herz — das ❤ Herz-Symbol (Schaden / Heilung) auf Descent-2e-Karten */
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

/** Gebogener Tropfen — das 💧 Erschöpfungs-Symbol auf Descent-2e-Helden-/Item-Karten */
export function FatigueSymbol({ size = 13 }: { size?: number }) {
  return (
    <svg {...fit(size, 192, 240)} viewBox="0 0 192 240" style={baseStyle}>
      <g transform="translate(0,240) scale(0.1,-0.1)" fill="#facc15" stroke="#ca8a04" strokeWidth={6}>
        <path d={FATIGUE_PATH} />
      </g>
    </svg>
  )
}

/** Stiefel — das Bewegungs-Symbol auf Descent-2e-Karten */
export function MovementSymbol({ size = 13, color = '#22c55e' }: { size?: number; color?: string }) {
  return (
    <svg {...fit(size, 156, 180)} viewBox="0 0 156 180" style={baseStyle}>
      <g transform="translate(0,180) scale(0.1,-0.1)" fill={color} stroke="none">
        <path d={MOVEMENT_PATH} />
      </g>
    </svg>
  )
}

/** Schild — das Verteidigungs-Symbol auf Descent-2e-Karten */
export function DefenseSymbol({ size = 13, color = '#64748b' }: { size?: number; color?: string }) {
  return (
    <svg {...fit(size, 182, 210)} viewBox="0 0 182 210" style={baseStyle}>
      <g transform="translate(0,210) scale(0.1,-0.1)" fill={color} stroke="none">
        <path d={DEFENSE_PATH} />
      </g>
    </svg>
  )
}

/** Bewegungs-Symbol weiß zentriert auf grünem Kreis */
export function MovementBadge({ size = 28, circle = '#22c55e' }: { size?: number; circle?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={baseStyle}>
      <circle cx="50" cy="50" r="48" fill={circle} />
      <g transform="translate(23.16,19) scale(0.3464)">
        <g transform="translate(0,180) scale(0.1,-0.1)" fill="#ffffff" stroke="none">
          <path d={MOVEMENT_PATH} />
        </g>
      </g>
    </svg>
  )
}

/** Schild weiß zentriert auf grauem Kreis */
export function DefenseBadge({ size = 28, circle = '#64748b' }: { size?: number; circle?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={baseStyle}>
      <circle cx="50" cy="50" r="48" fill={circle} />
      <g transform="translate(19.16,19) scale(0.3179)">
        <g transform="translate(0,210) scale(0.1,-0.1)" fill="#ffffff" stroke="none">
          <path d={DEFENSE_PATH} />
        </g>
      </g>
    </svg>
  )
}

// ── Würfel ────────────────────────────────────────────────────────────────────

// Basisfarbe (Frontfläche) je Würfel, gesampelt aus den PSD-Karten. Ober- und
// rechte Fläche werden durch Mischen mit Weiß/Schwarz abgeleitet → 3D-Cube.
const DIE_BASE: Record<DieColor, [number, number, number]> = {
  red:    [201, 85, 86],
  yellow: [236, 233, 150],
  green:  [151, 209, 145],
  blue:   [92, 94, 252],
  gray:   [126, 125, 125],
  black:  [53, 53, 45],
  brown:  [131, 79, 59],
  white:  [237, 237, 237],
  silver: [200, 200, 205],
}

const mix = (c: [number, number, number], t: [number, number, number], f: number) =>
  `rgb(${c.map((v, i) => Math.round(v * (1 - f) + t[i] * f)).join(',')})`

/** Descent-Würfel als isometrischer Cube (helle Ober-, mittlere und dunkle Seitenfläche) */
export function DiceSymbol({ color, size = 16 }: { color: DieColor; size?: number }) {
  const base = DIE_BASE[color] ?? DIE_BASE.gray
  const top = mix(base, [255, 255, 255], 0.4)
  const right = mix(base, [0, 0, 0], 0.32)
  const left = `rgb(${base.join(',')})`
  const lum = 0.299 * base[0] + 0.587 * base[1] + 0.114 * base[2]
  const rim = lum > 185 ? '#9ca3af' : '#f4f4f5' // heller Rand verschwindet bei hellen Würfeln → grau
  return (
    <svg width={size * 100 / 112} height={size} viewBox="0 0 100 112" style={baseStyle}>
      <polygon points="50,6 95,31 95,81 50,106 5,81 5,31" fill="none" stroke={rim} strokeWidth={6} strokeLinejoin="round" />
      <polygon points="50,6 95,31 50,56 5,31" fill={top} />
      <polygon points="5,31 50,56 50,106 5,81" fill={left} />
      <polygon points="95,31 95,81 50,106 50,56" fill={right} />
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
