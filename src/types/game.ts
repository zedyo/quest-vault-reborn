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

export type ItemEquip = 'one-hand' | 'two-hands' | 'armor' | 'other'
export type AttackType = 'melee' | 'range'

/** Relikte sind doppelseitig: eine Helden-Seite und eine Overlord-(Leutnants-)Seite. */
export type RelicSide = 'hero' | 'overlord'

export interface ShopItem {
  id: string
  nameEn: string
  /** DE-Name: Community-Übersetzung (nicht zwingend offizieller FFG-Wortlaut) */
  nameDe: string
  expansionId: string
  act: 1 | 2
  cost: number
  traits: string[]
  attack?: AttackType
  equip: ItemEquip
  dice: DieColor[]
  rulesEn: string
  /** DE-Regeltext: Community-Übersetzung (nicht zwingend offizieller FFG-Wortlaut) */
  rulesDe: string
  imageUrl?: string
}

export interface Relic {
  id: string
  nameEn: string
  /** DE-Name: Community-Übersetzung (nicht zwingend offizieller FFG-Wortlaut) */
  nameDe: string
  expansionId: string
  /** Welche Seite der doppelseitigen Reliktkarte: Helden- oder Overlord-Seite */
  side: RelicSide
  traits: string[]
  attack?: AttackType
  equip: ItemEquip
  dice: DieColor[]
  rulesEn: string
  /** DE-Regeltext: Community-Übersetzung (nicht zwingend offizieller FFG-Wortlaut) */
  rulesDe: string
  imageUrl?: string
}

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

/** Gruppenzusammensetzung als [Diener, Meister] (Anzahl normaler + Meister-Figuren) */
export type GroupComposition = [minions: number, masters: number]

/**
 * Monster-Gruppengröße pro Spielerzahl, von den offiziellen Kartenrückseiten
 * (any2cards `-back.png`) validiert. Jeder Eintrag ist [Diener, Meister].
 */
export interface MonsterGroupSizes {
  /** 2 Helden */
  p2: GroupComposition
  /** 3 Helden */
  p3: GroupComposition
  /** 4 Helden */
  p4: GroupComposition
}

export interface Monster {
  id: string
  nameDe: string
  nameEn: string
  expansionId: string
  traits?: string[]
  groupSizes?: MonsterGroupSizes
  normal?: MonsterStats
  master?: MonsterStats
  act2Normal?: MonsterStats
  act2Master?: MonsterStats
  imageUrl?: string
}

export type HeroArchetype = 'krieger' | 'heiler' | 'magier' | 'spaeher'

/** Eine Klassen-Fähigkeitskarte (zweisprachig: EN-Original + DE-Übersetzung) */
export interface ClassSkill {
  id: string
  nameEn: string
  nameDe: string
  /** XP-Kosten (0 = kostenlose Startfähigkeit, 'elemental' = Elementalkarte ohne XP-Kosten) */
  xpCost: number | 'elemental'
  /** Ausdauer-Kosten zum Auslösen ('X' = variabel) */
  fatigueCost: number | 'X'
  rulesEn: string
  rulesDe: string
  /** Kartenbild-URL (any2cards) */
  imageUrl?: string
}

/** Beschwörungs-/Begleiter-Figur einer Klasse (z. B. Reanimierter des Totenbeschwörers) */
export interface ClassFamiliar {
  nameEn: string
  nameDe: string
  speed?: number
  health?: number
  defense?: DieColor[]
  /** Angriffsart, z. B. 'Nahkampf' */
  attackType?: string
  /** Angriffswürfel */
  dice?: DieColor[]
  rulesEn: string
  rulesDe: string
  imageUrl?: string
}

export interface HeroClass {
  id: string
  nameEn: string
  nameDe: string
  archetype: HeroArchetype
  expansionId: string
  skills: ClassSkill[]
  familiar?: ClassFamiliar
}

export interface Hero {
  id: string
  name: string
  archetype: HeroArchetype
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
  heroIds?: string[]
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
