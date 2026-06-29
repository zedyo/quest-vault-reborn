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

/**
 * Eine Startausrüstungs-Karte einer Klasse (das Item, mit dem die Klasse beginnt).
 * Aus den deutschen Original-Karten erfasst; `nameEn`/`rulesEn` optional, da nicht
 * für jede Karte eine verlässliche EN-Quelle vorliegt.
 */
export interface ClassStartingItem {
  id: string
  nameDe: string
  nameEn?: string
  /** Kartentyp / Ausrüstungsslot laut Karte, z. B. 'Kleinod', 'Magie-Stab', 'Trank' */
  type?: string
  rulesDe: string
  rulesEn?: string
  /** Lokales DE-Kartenbild (public/cards/de/classes/...) */
  imageUrl?: string
}

/** Art einer Klasse: reguläre Standard-Klasse oder Hybrid-Klasse. */
export type HeroClassKind = 'standard' | 'hybrid'

export interface HeroClass {
  id: string
  nameEn: string
  nameDe: string
  archetype: HeroArchetype
  expansionId: string
  skills: ClassSkill[]
  familiar?: ClassFamiliar
  /** Startausrüstung der Klasse (Items, mit denen sie beginnt). */
  startingEquipment?: ClassStartingItem[]
  /** 'standard' (Default) oder 'hybrid'. */
  kind?: HeroClassKind
  /**
   * Bei Hybrid-Klassen: der Archetyp des Standard-Klassendecks, mit dem die
   * Hybrid-Klasse laut ihrer Startkarte kombiniert wird.
   */
  hybridArchetype?: HeroArchetype
  /** Lokales DE-Kartenrückseiten-Bild der Klasse (public/cards/de/classes/...). */
  backImageUrl?: string
}

// ── Overlord-Klassen & -Karten ───────────────────────────────────────────────

export type OverlordCardType = 'Event' | 'Magic' | 'Trap' | 'Special'

/** Art eines Overlord-Decks: Basisdeck, wählbare Klasse oder Universalkarten. */
export type OverlordDeckKind = 'basic' | 'class' | 'universal' | 'reward'

/** Eine Overlord-Karte (zweisprachig: EN-Original + DE-Community-Übersetzung). */
export interface OverlordCard {
  id: string
  nameEn: string
  nameDe: string
  /** Kartentyp (Ereignis/Magie/Falle/Spezial) */
  cardType: OverlordCardType
  /** Anzahl Kopien im Deck */
  count: number
  /** XP-Kosten (0 = Basis-/Startdeck, sonst Kaufkosten; null = Belohnungskarte, nicht kaufbar) */
  xpCost: number | null
  rulesEn: string
  rulesDe: string
  /** Kartenbild-URL (any2cards) */
  imageUrl: string
}

/** Ein Overlord-Deck: Basis, eine wählbare Klasse oder Universal-Karten. */
export interface OverlordDeck {
  id: string
  nameEn: string
  nameDe: string
  kind: OverlordDeckKind
  expansionId: string
  cards: OverlordCard[]
}

// ── Leutnants / Hauptmänner ──────────────────────────────────────────────────

/** Werte eines Leutnants bei einer bestimmten Spielerzahl. */
export interface LieutenantPerPlayerStats {
  speed: number
  health: number
  defense: DieColor[]
}

/** Eine Leutnant-Fähigkeit: Kurzlabel (mit Aktion/Schub-Präfix) + optionaler Regeltext. */
export interface LieutenantAbility {
  labelEn: string
  labelDe: string
  rulesEn?: string
  rulesDe?: string
}

/** Werte eines Leutnants in einem Akt (1 oder 2). */
export interface LieutenantForm {
  act: 1 | 2
  /** Erweiterung dieser Akt-Karte (kann von der Leutnant-Erweiterung abweichen, z. B. Akt II in einer anderen Box). */
  expansionId: string
  attackTypeEn: string
  attackTypeDe: string
  attackDice: DieColor[]
  might: number
  knowledge: number
  willpower: number
  awareness: number
  perPlayer: {
    p2: LieutenantPerPlayerStats
    p3: LieutenantPerPlayerStats
    p4: LieutenantPerPlayerStats
  }
  abilities: LieutenantAbility[]
  imageUrl: string
}

export interface Lieutenant {
  id: string
  nameEn: string
  nameDe: string
  expansionId: string
  /** 1 Eintrag (nur ein Akt) oder 2 (Akt I + II). */
  forms: LieutenantForm[]
}

/**
 * Werte eines Agenten in einem Akt. Wie LieutenantForm, aber OHNE Attribute
 * (Agenten-Statkarten führen keine Attributwerte).
 */
export interface AgentForm {
  act: 1 | 2
  expansionId: string
  attackTypeEn: string
  attackTypeDe: string
  attackDice: DieColor[]
  perPlayer: {
    p2: LieutenantPerPlayerStats
    p3: LieutenantPerPlayerStats
    p4: LieutenantPerPlayerStats
  }
  abilities: LieutenantAbility[]
  imageUrl: string
}

/**
 * Ein Agent: die aufgewertete Version eines Leutnants (eigene Werte/Fähigkeiten)
 * aus einem Leutnants-Pack, verknüpft mit einem Plotdeck.
 */
export interface Agent {
  id: string
  nameEn: string
  nameDe: string
  expansionId: string
  /** Name des zugehörigen Plotdecks (EN/DE). */
  plotDeckEn: string
  plotDeckDe: string
  forms: AgentForm[]
}

// ── Plotdecks (Agenten-Karten) ───────────────────────────────────────────────

/** Eine Plotkarte aus dem Plotdeck eines Agenten (zweisprachig). */
export interface PlotCard {
  id: string
  nameEn: string
  nameDe: string
  /** Kaufkosten in Bedrohungsmarkern. */
  threatCost: number
  /** Auslösekosten (Bedrohungsmarker) beim Aktivieren. */
  triggerCost: number
  rulesEn: string
  rulesDe: string
  imageUrl: string
}

/** Ein Plotdeck, das zu einem Agenten gehört. */
export interface PlotDeck {
  id: string
  nameEn: string
  nameDe: string
  /** Agent, dem dieses Plotdeck gehört (EN/DE). */
  agentEn: string
  agentDe: string
  expansionId: string
  cards: PlotCard[]
}

// ── Kampagnen & Quests ───────────────────────────────────────────────────────

/**
 * Faktischer Überblick über eine offizielle Kampagne. Bewusst NUR strukturelle
 * Eckdaten (Name, Erweiterung, Typ, Verzweigung, kurze eigene Beschreibung) —
 * keine Reproduktion von Questbuch-Inhalten (Ziele/Monsterlisten = FFG-IP, keine
 * zuverlässige strukturierte Quelle).
 */
export interface Campaign {
  id: string
  nameEn: string
  nameDe: string
  expansionId: string
  /** Großkampagne vs. kurze Mini-Kampagne. */
  kind: 'campaign' | 'mini'
  /** Verzweigt der Szenariobaum nach Sieg/Niederlage? */
  branching: boolean
  /** Kurze, faktische Beschreibung (eigene Worte, kein Questbuch-Text). */
  descriptionDe: string
}

/**
 * Eine „Advanced Quest" (Rumor-Quest) aus den kleinen Erweiterungs-Packs.
 * Quelle: any2cards `advanced-quests.js`. Es werden NUR faktische Metadaten
 * erfasst (Titel, Erweiterung, Akt, Reise-Geländetypen) + Kartenbild-Links;
 * der Quest-Text selbst wird nicht reproduziert.
 */
export interface AdvancedQuest {
  id: string
  nameEn: string
  nameDe: string
  expansionId: string
  act?: 1 | 2
  /** Reise-Geländetypen der Rumor-Karte (EN), z. B. ['Road','Forest']. */
  travel: string[]
  imageUrlFront: string
  imageUrlBack: string
}

/**
 * Eine Gerücht-Karte (Rumor) aus den kleinen Erweiterungs-Packs. Es werden NUR
 * faktische Metadaten erfasst (deutscher Kartenname, Erweiterung, Akt, Reise-
 * Geländetypen); der Kartentext wird NICHT reproduziert (FFG-IP). Das deutsche
 * Kartenbild liegt unter `public/cards/de/geruechte/<id>.webp` (rumorCardDeUrl).
 */
export interface RumorReward {
  /** Overlord-Belohnung (deutscher Kartentext). */
  overlordDe: string
  /** Helden-Belohnung (deutscher Kartentext). */
  heroDe: string
}
export interface Rumor {
  id: string
  nameDe: string
  nameEn: string
  expansionId: string
  /** Akt der Karte: 1, 2 oder null (akt-unabhängige Gerücht-Karte). */
  act: 1 | 2 | null
  /** Reise-Geländetypen (EN), z. B. ['Road','Forest']; kann leer sein. */
  travel: string[]
  /** Deutscher Vorderseiten-Kartentext (Auslöser + Flavor), 1:1 von der Karte. */
  textDe: string
  /**
   * Rückseite – nur Akt-II-Karten sind doppelseitig. Enthält die beiden
   * Belohnungs-Abschnitte (Overlord/Helden) + ein eigenes Kartenbild
   * (`rumorCardBackDeUrl(id)`). Akt-I-Karten haben eine generische Rückseite.
   */
  back?: RumorReward
}

/**
 * Eine Reise-/Stadtereignis-Karte. Quelle: Strukturdaten any2cards travel-event-decks /
 * city-event-decks (Erweiterung, Deck-Position, Gelände-Icons) + Kartenbild. Der
 * deutsche Ereignistext (`eventsDe`) ist 1:1 von den deutschen Original-Karten
 * transkribiert (Bild: `travelCardDeUrl(id)`).
 */
export interface TravelEvent {
  /** Gelände dieses Abschnitts (EN, aus eventTerrains). */
  terrainEn: string
  /** Deutscher Ereignistext dieses Gelände-Abschnitts, 1:1 von der Karte. */
  textDe: string
}
export interface TravelCard {
  id: string
  expansionId: string
  /** 'travel' = Reise-Ereignisse (Wildnis), 'city' = Stadt-Ereignisse (Nerekhall). */
  deckType: 'travel' | 'city'
  /** Deck-Position N (von total). */
  position: number
  total: number
  /** Gelände-Icons, die auf dieser Karte ein Ereignis auslösen (EN). */
  eventTerrains: string[]
  imageUrl: string
  /** Deutscher Ereignistext je Gelände-Abschnitt (von der deutschen Original-Karte). */
  eventsDe?: TravelEvent[]
}

/**
 * Eine Zustandskarte (Condition). Quelle: deutsche Original-Karten (Name + Effekttext
 * 1:1 transkribiert), Erweiterungszuordnung aus any2cards (Ordnerstruktur). Bild:
 * `conditionCardDeUrl(id)` -> public/cards/de/zustand/<id>.webp.
 */
export interface Condition {
  id: string
  nameEn: string
  nameDe: string
  expansionId: string
  /** Deutscher Effekt-/Regeltext der Zustandskarte, 1:1 von der Karte. */
  textDe: string
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
  /**
   * Drehung des Overlays in Grad. Optional/abwärtskompatibel (fehlt = 0).
   * Relevant für gerichtete Token (Türen, Fallgitter, Mauern), die auf den
   * Quest-Maps horizontal oder vertikal liegen.
   */
  rotation?: 0 | 90 | 180 | 270
  /**
   * Optionale kurze Beschriftung (1–3 Zeichen), die als Badge auf dem Token
   * erscheint. Bildet die NUMMERIERTEN Ziel-/Suchmarker der Quest-Diagramme ab
   * (z. B. „1"–„4"). Abwärtskompatibel (fehlt = keine Beschriftung).
   */
  label?: string
}

/**
 * Katalog-Definition eines Overlay-Typs (Gelände-/Tür-/Objekt-/Marker-Plättchen),
 * den Quest-Autoren im Kartenbauer als 1×1-Feldmarker platzieren. Faktische
 * Descent-2e-Komponenten; `descriptionDe` ist eine kurze, eigene Mechanik-Notiz.
 */
export interface OverlayType {
  id: string
  nameEn: string
  nameDe: string
  category: 'terrain' | 'passage' | 'object' | 'marker' | 'figure'
  /** Footprint in Feldern (Annotation: 1×1 pro Feld). */
  cols: number
  rows: number
  expansionId: string
  /** Akzentfarbe des Markers (Auswahlmenü / Bild-Fallback / Balkenfarbe). */
  color: string
  /** Symbol (Emoji) – Fallback, falls das Token-Bild fehlt. */
  icon: string
  descriptionDe: string
  /**
   * Darstellung auf der Karte:
   * - undefined/'image' → transparentes Token-Bild (Standard).
   * - 'bar' → farbige Absperrung (~2×0,5 Felder) auf der Feldkante zwischen zwei
   *   Kartenteilen (Türen/Fallgitter; Rotation bestimmt die Kante). So sehen
   *   Türen wie auf den Quest-Buch-Diagrammen aus (kein Tür-Symbol).
   */
  render?: 'image' | 'bar'
}

export interface PlacedMonster {
  id: string
  monsterId: string
  isMaster: boolean
  x: number
  y: number
}
