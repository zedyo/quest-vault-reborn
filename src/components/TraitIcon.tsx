import type { ReactNode } from 'react'

// ── Trait-Icons (Monster-Eigenschaften) ──────────────────────────────────────
//
// Kleine runde SVG-Badges für die Monster-Eigenschaften (Wildnis, Dunkel, Höhle …).
// Aus MonstersPage herausgelöst, damit sie auch das „Monster des Tages"-Widget
// nutzen kann. Optik unverändert.

export const TRAIT_ICON_DATA: Record<string, { bg: string; content: ReactNode }> = {
  // Wildnis (Wilderness) — pine tree
  'Wildnis': {
    bg: '#14532d',
    content: (
      <>
        <polygon points="12,3 6.5,11 9.5,11 5.5,17 18.5,17 14.5,11 17.5,11" fill="white"/>
        <rect x="10.7" y="17" width="2.6" height="4" fill="white"/>
      </>
    ),
  },
  // Dunkel (Dark) — waxing crescent
  'Dunkel': {
    bg: '#1e3a5f',
    content: (
      <path
        d="M 14 3 C 8 3 3 7.1 3 12 C 3 16.9 8 21 14 21 C 10 19 8 15.8 8 12 C 8 8.2 10 5 14 3 Z"
        fill="white"
      />
    ),
  },
  // Höhle (Cave) — cave mouth in rock
  'Höhle': {
    bg: '#44403c',
    content: (
      <>
        <path d="M 3 20 L 3 13 C 3 6 8 3 12 3 C 16 3 21 6 21 13 L 21 20 Z" fill="white"/>
        <path d="M 8 20 L 8 14 C 8 10 9.8 8 12 8 C 14.2 8 16 10 16 14 L 16 20 Z" fill="#44403c"/>
      </>
    ),
  },
  // Heiß (Hot) — flame
  'Heiß': {
    bg: '#c2410c',
    content: (
      <>
        <path d="M 12 2 C 16.5 5 18.5 9 17.5 13 C 16.5 17.5 14 20 12 21 C 10 20 7.5 17.5 6.5 13 C 5.5 9 7.5 5 12 2 Z" fill="white"/>
        <path d="M 12 10 C 14 12 14 15 13 17 C 12.5 18.5 12 20 12 21 C 11 20 10 18.5 9.5 17 C 9 15 9 12 12 10 Z" fill="#c2410c"/>
      </>
    ),
  },
  // Kalt (Cold) — six-point snowflake
  'Kalt': {
    bg: '#155e75',
    content: (
      <>
        <line x1="12" y1="2.5" x2="12" y2="21.5" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
        <line x1="3.8" y1="7.25" x2="20.2" y2="16.75" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
        <line x1="20.2" y1="7.25" x2="3.8" y2="16.75" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
        <g stroke="white" strokeWidth="1.6" strokeLinecap="round">
          <line x1="12" y1="6.5" x2="9.4" y2="4.6"/><line x1="12" y1="6.5" x2="14.6" y2="4.6"/>
          <line x1="12" y1="17.5" x2="9.4" y2="19.4"/><line x1="12" y1="17.5" x2="14.6" y2="19.4"/>
        </g>
      </>
    ),
  },
  // Gebirge (Mountain) — twin rocky peaks with snow caps
  'Gebirge': {
    bg: '#4b5563',
    content: (
      <>
        <polygon points="2,20 9,6 13,13 16,9 22,20" fill="white"/>
        <polygon points="7.6,9 9,6 10.6,9 9.6,9.8 8.4,9.8" fill="#4b5563"/>
        <polygon points="14.7,11 16,9 17.3,11 16.5,11.6 15.5,11.6" fill="#4b5563"/>
      </>
    ),
  },
  // Verflucht (Cursed) — skull
  'Verflucht': {
    bg: '#374151',
    content: (
      <>
        <ellipse cx="12" cy="10.5" rx="7.5" ry="7" fill="white"/>
        <circle cx="9" cy="10.5" r="2.4" fill="#374151"/>
        <circle cx="15" cy="10.5" r="2.4" fill="#374151"/>
        <polygon points="12,13 10.8,15.5 13.2,15.5" fill="#374151"/>
        <rect x="7.5" y="16" width="9" height="4.5" rx="1" fill="white"/>
        <rect x="10" y="16" width="1.4" height="4.5" fill="#374151"/>
        <rect x="12.6" y="16" width="1.4" height="4.5" fill="#374151"/>
      </>
    ),
  },
  // Zivilisiert (Civilized) — classical temple
  'Zivilisiert': {
    bg: '#57534e',
    content: (
      <>
        <polygon points="12,3 21.5,9 2.5,9" fill="white"/>
        <rect x="4" y="9.5" width="16" height="2" fill="white"/>
        <rect x="5" y="11.8" width="2.1" height="7" fill="white"/>
        <rect x="8.8" y="11.8" width="2.1" height="7" fill="white"/>
        <rect x="13.1" y="11.8" width="2.1" height="7" fill="white"/>
        <rect x="16.9" y="11.8" width="2.1" height="7" fill="white"/>
        <rect x="3" y="18.8" width="18" height="2.4" fill="white"/>
      </>
    ),
  },
  // Gebäude (Building) — crumbling tower wall
  'Gebäude': {
    bg: '#78716c',
    content: (
      <>
        {/* broken battlement wall */}
        <path d="M 4 21 L 4 8 L 7 8 L 7 5 L 10 5 L 10 8 L 13 8 L 13 4 L 16 4 L 16 9 L 20 9 L 20 21 Z" fill="white"/>
        {/* arched doorway */}
        <path d="M 9 21 L 9 15 C 9 13 10 12 11.5 12 C 13 12 14 13 14 15 L 14 21 Z" fill="#78716c"/>
        {/* crack */}
        <line x1="17.5" y1="11" x2="17.5" y2="21" stroke="#78716c" strokeWidth="1"/>
      </>
    ),
  },
  // Wasser (Water) — water droplet with wave
  'Wasser': {
    bg: '#1d4ed8',
    content: (
      <>
        <path d="M 12 2.5 C 12 2.5 18.5 10.5 18.5 15 C 18.5 18.9 15.6 21.5 12 21.5 C 8.4 21.5 5.5 18.9 5.5 15 C 5.5 10.5 12 2.5 12 2.5 Z" fill="white"/>
        <path d="M 9 15.5 C 10 14 11 17 12 15.5 C 13 14 14 17 15 15.5" stroke="#1d4ed8" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      </>
    ),
  },
}

export default function TraitIcon({ trait, size = 14 }: { trait: string; size?: number }) {
  const data = TRAIT_ICON_DATA[trait]
  if (!data) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, borderRadius: '50%' }}
    >
      <circle cx="12" cy="12" r="12" fill={data.bg} />
      {data.content}
    </svg>
  )
}
