import type { ReactNode } from 'react'

// Schlanke, geometrische Icon-Familie im Stil des Design-Systems (Overlord/Heldentum).
// Bewusst nur einfache Formen/Striche — nimmt die Akzent-/Textfarbe über `currentColor`.
export type IconName =
  | 'dashboard' | 'map' | 'quest' | 'session'
  | 'monster' | 'hero' | 'class' | 'item' | 'overlord' | 'lieutenant'
  | 'agent' | 'deck' | 'campaign' | 'compass' | 'rumor' | 'condition'
  | 'rules' | 'errata' | 'design' | 'search'

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
}

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  )
}
