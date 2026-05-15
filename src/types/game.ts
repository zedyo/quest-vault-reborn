export type ExpansionType =
  | 'base'
  | 'big-box'
  | 'small-box'
  | 'hero-monster'
  | 'lieutenant'
  | 'campaign-book'
  | 'coop'
  | 'card-only'
  | 'conversion'

export interface Expansion {
  id: string
  nameDe: string
  nameEn: string
  year: number
  type: ExpansionType
  code?: string
}

// Würfelfarben in Descent 2e
export type DieColor = 'blue' | 'red' | 'yellow' | 'green' | 'white' | 'gray' | 'brown' | 'black' | 'silver'

export interface MonsterStats {
  speed: number
  health: number
  defense: DieColor[]
  attack: DieColor[]
  /** Energie: durch Blitz/Schub (⚡) ausgelöste Fähigkeiten */
  surges?: string[]
  /** Fähigkeiten: passiv geltende Fähigkeiten (kein Auslöser) */
  abilities?: string[]
  /** Aktion: durch den gebogenen Pfeil (↻) ausgelöste Aktionen */
  actions?: string[]
}

export interface Monster {
  id: string
  nameDe: string
  nameEn: string
  expansionId: string
  traits?: string[]
  normal?: MonsterStats
  master?: MonsterStats
  act2Normal?: MonsterStats
  act2Master?: MonsterStats
  imageUrl?: string
}

export interface Hero {
  id: string
  name: string
  archetype: 'krieger' | 'heiler' | 'magier' | 'spaeher'
  expansionId: string
  speed?: number
  health?: number
  stamina?: number
  defense?: DieColor[]
  might?: number        // Stärke
  knowledge?: number    // Wissen
  willpower?: number    // Willenskraft
  awareness?: number    // Gespür
  heroAbility?: string
  heroicFeat?: string
  imageUrl?: string
}

export interface Quest {
  id: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  encounters: Encounter[]
}

export interface Encounter {
  id: string
  title: string
  mapData: MapData
  flavourText: string
  monsters: PlacedMonster[]
  setup: string
  specialRules: string
  reinforcements: string
  victoryConditions: string
  rewards: string
  story: string
}

export interface MapData {
  tiles: PlacedTile[]
  overlays: PlacedOverlay[]
  width: number
  height: number
}

export interface PlacedTile {
  id: string
  tileId: string
  x: number
  y: number
  rotation: 0 | 90 | 180 | 270
}

export interface PlacedOverlay {
  id: string
  overlayType: string
  x: number
  y: number
}

export interface PlacedMonster {
  id: string
  monsterId: string
  isMaster: boolean
  x: number
  y: number
}
