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

export interface Hero {
  id: string
  name: string
  archetype: 'krieger' | 'heiler' | 'magier' | 'spaeher'
  expansionId: string
}

export interface Monster {
  id: string
  nameDe: string
  nameEn: string
  expansionId: string
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
