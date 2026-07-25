import type { ReactNode } from 'react'

// Schlanke, geometrische Icon-Familie im Stil des Design-Systems (Overlord/Heldentum).
// Bewusst nur einfache Formen/Striche — nimmt die Akzent-/Textfarbe über `currentColor`.
export type IconName =
  | 'dashboard' | 'map' | 'quest' | 'session'
  | 'monster' | 'hero' | 'class' | 'item' | 'overlord' | 'lieutenant'
  | 'agent' | 'deck' | 'campaign' | 'compass' | 'rumor' | 'condition'
  | 'rules' | 'errata' | 'design' | 'search'
  // Aktions-/Steuer-Glyphen (Session-Tracker-Redesign, v1.8.0)
  | 'plus' | 'close' | 'check' | 'edit' | 'trash' | 'save'
  | 'download' | 'upload' | 'print' | 'filter' | 'sort'
  | 'info' | 'warning' | 'external' | 'more' | 'gold' | 'xp'
  | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevron-down'

const PATHS: Record<IconName, ReactNode> = {
  dashboard: (<><rect x="3" y="3" width="5.5" height="5.5" rx="1.2" /><rect x="9.5" y="3" width="5.5" height="5.5" rx="1.2" /><rect x="3" y="9.5" width="5.5" height="5.5" rx="1.2" /><rect x="9.5" y="9.5" width="5.5" height="5.5" rx="1.2" /></>),
  map: (<rect x="4.5" y="4.5" width="9" height="9" rx="1.2" transform="rotate(45 9 9)" />),
  quest: (<><rect x="4" y="2.5" width="10" height="13" rx="1.4" /><line x1="6.4" y1="6.5" x2="11.6" y2="6.5" /><line x1="6.4" y1="9.2" x2="11.6" y2="9.2" /><line x1="6.4" y1="11.9" x2="9.6" y2="11.9" /></>),
  session: (<><rect x="2.5" y="2.5" width="13" height="13" rx="2.4" /><circle cx="6" cy="6" r="1.1" fill="currentColor" stroke="none" /><circle cx="12" cy="6" r="1.1" fill="currentColor" stroke="none" /><circle cx="9" cy="9" r="1.1" fill="currentColor" stroke="none" /><circle cx="6" cy="12" r="1.1" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" /></>),
  monster: (<><path d="M9 3 L15 15 L3 15 Z" /><circle cx="9" cy="11.5" r="1" fill="currentColor" stroke="none" /></>),
  hero: (<><circle cx="9" cy="5.5" r="2.6" /><path d="M4 15 L9 8.8 L14 15 Z" /></>),
  class: (<path d="M9 2 L15 5.5 L15 12.5 L9 16 L3 12.5 L3 5.5 Z" />),
  item: (<><path d="M5 6 L13 6 L12 15 L6 15 Z" /><path d="M7 6 a2 2 0 0 1 4 0" /></>),
  overlord: (<><rect x="4.5" y="4.5" width="9" height="9" rx="1.4" transform="rotate(45 9 9)" /><circle cx="9" cy="9" r="1.3" fill="currentColor" stroke="none" /></>),
  lieutenant: (<><line x1="6" y1="3" x2="6" y2="15" /><path d="M6 4 L13.5 6 L6 8.5 Z" /></>),
  agent: (<><path d="M3.5 7 Q9 3.5 14.5 7 Q13 12 9 12 Q5 12 3.5 7 Z" /><circle cx="6.8" cy="8" r="1" fill="currentColor" stroke="none" /><circle cx="11.2" cy="8" r="1" fill="currentColor" stroke="none" /></>),
  deck: (<><rect x="4" y="6" width="9" height="9" rx="1.2" /><rect x="6.5" y="3" width="9" height="9" rx="1.2" /></>),
  campaign: (<><rect x="4" y="3" width="10" height="12" rx="1.2" /><line x1="9" y1="3" x2="9" y2="15" /></>),
  compass: (<><circle cx="9" cy="9" r="6" /><path d="M9 5 L11 9 L9 13 L7 9 Z" fill="currentColor" /></>),
  rumor: (<><rect x="3" y="4" width="12" height="8" rx="2" /><path d="M7 12 L7 15 L10 12" /></>),
  condition: (<><circle cx="9" cy="9" r="5.5" /><circle cx="9" cy="9" r="2" fill="currentColor" stroke="none" /></>),
  rules: (<><path d="M9 5 C7 4 4.5 4 3 4.6 V14 C4.5 13.4 7 13.4 9 14.4 C11 13.4 13.5 13.4 15 14 V4.6 C13.5 4 11 4 9 5 Z" /><line x1="9" y1="5" x2="9" y2="14.4" /></>),
  errata: (<><rect x="4" y="3.5" width="10" height="12" rx="1.5" /><rect x="6.5" y="2.5" width="5" height="2.4" rx="1" /><line x1="6.5" y1="8" x2="11.5" y2="8" /><line x1="6.5" y1="11" x2="10" y2="11" /></>),
  design: (<><circle cx="9" cy="9" r="6" /><circle cx="6.5" cy="7" r="1" fill="currentColor" stroke="none" /><circle cx="11" cy="6.5" r="1" fill="currentColor" stroke="none" /><circle cx="12" cy="10.8" r="1" fill="currentColor" stroke="none" /></>),
  search: (<><circle cx="7.8" cy="7.8" r="4.3" /><line x1="11" y1="11" x2="15" y2="15" /></>),

  // ── Aktions-/Steuer-Glyphen (18×18-Raster, Strichstärke 1,6, currentColor) ──
  plus: (<><line x1="9" y1="4" x2="9" y2="14" /><line x1="4" y1="9" x2="14" y2="9" /></>),
  close: (<><line x1="4.6" y1="4.6" x2="13.4" y2="13.4" /><line x1="13.4" y1="4.6" x2="4.6" y2="13.4" /></>),
  check: (<path d="M4 9.4 L7.4 12.8 L14 5.8" />),
  edit: (<><path d="M12.2 3.6 L14.4 5.8 L6.6 13.6 L3.6 14.4 L4.4 11.4 Z" /><line x1="10.7" y1="5.1" x2="12.9" y2="7.3" /></>),
  trash: (<><line x1="3.5" y1="5" x2="14.5" y2="5" /><path d="M5.5 5 L6.2 15 L11.8 15 L12.5 5" /><path d="M7 5 L7 3.2 L11 3.2 L11 5" /></>),
  save: (<><path d="M3.5 3.5 H12 L14.5 6 V14.5 H3.5 Z" /><path d="M6 3.5 V7.5 H11.4 V3.5" /><rect x="6" y="10.2" width="6" height="4.3" /></>),
  download: (<><line x1="9" y1="3.2" x2="9" y2="11.2" /><path d="M5.6 8 L9 11.4 L12.4 8" /><line x1="3.8" y1="14.6" x2="14.2" y2="14.6" /></>),
  upload: (<><line x1="9" y1="11.4" x2="9" y2="3.4" /><path d="M5.6 6.8 L9 3.4 L12.4 6.8" /><line x1="3.8" y1="14.6" x2="14.2" y2="14.6" /></>),
  print: (<><path d="M5.5 6.5 V3 H12.5 V6.5" /><rect x="3" y="6.5" width="12" height="5.5" rx="1.2" /><rect x="5.5" y="10.5" width="7" height="4.5" /></>),
  filter: (<><line x1="3.2" y1="5" x2="14.8" y2="5" /><line x1="5.4" y1="9" x2="12.6" y2="9" /><line x1="7.4" y1="13" x2="10.6" y2="13" /></>),
  sort: (<><path d="M5.4 4 V13.4 M3.2 11.2 L5.4 13.4 L7.6 11.2" /><path d="M12.6 14 V4.6 M10.4 6.8 L12.6 4.6 L14.8 6.8" /></>),
  info: (<><circle cx="9" cy="9" r="6.2" /><line x1="9" y1="8.2" x2="9" y2="12.4" /><circle cx="9" cy="5.6" r=".9" fill="currentColor" stroke="none" /></>),
  warning: (<><path d="M9 3 L15.4 14.4 H2.6 Z" /><line x1="9" y1="7.4" x2="9" y2="10.6" /><circle cx="9" cy="12.6" r=".9" fill="currentColor" stroke="none" /></>),
  external: (<><path d="M10.4 3.6 H14.4 V7.6" /><line x1="14.4" y1="3.6" x2="8.6" y2="9.4" /><path d="M12.4 10.6 V14 H4 V5.6 H7.4" /></>),
  more: (<><circle cx="4.4" cy="9" r="1.15" fill="currentColor" stroke="none" /><circle cx="9" cy="9" r="1.15" fill="currentColor" stroke="none" /><circle cx="13.6" cy="9" r="1.15" fill="currentColor" stroke="none" /></>),
  gold: (<><ellipse cx="9" cy="5.6" rx="5.6" ry="2.4" /><path d="M3.4 5.6 V12.4 C3.4 13.7 5.9 14.8 9 14.8 C12.1 14.8 14.6 13.7 14.6 12.4 V5.6" /><path d="M3.4 9 C3.4 10.3 5.9 11.4 9 11.4 C12.1 11.4 14.6 10.3 14.6 9" /></>),
  xp: (<><path d="M9 2.6 L11 6.9 L15.6 7.5 L12.3 10.8 L13.1 15.4 L9 13.2 L4.9 15.4 L5.7 10.8 L2.4 7.5 L7 6.9 Z" /></>),
  'chevron-left': (<path d="M11.4 3.8 L5.8 9 L11.4 14.2" />),
  'chevron-right': (<path d="M6.6 3.8 L12.2 9 L6.6 14.2" />),
  'chevron-up': (<path d="M3.8 11.8 L9 6.2 L14.2 11.8" />),
  'chevron-down': (<path d="M3.8 6.2 L9 11.8 L14.2 6.2" />),
}

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  )
}
