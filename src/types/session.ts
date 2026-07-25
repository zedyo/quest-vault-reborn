// ── Kampagnen-Session-Tracker: App-State-Typen ───────────────────────────────
//
// State eines laufenden Kampagnen-Spielstands (Session). Bewusst getrennt von
// den statischen Spieldaten in `game.ts`: hier stehen NUR ID-Referenzen in die
// statischen Daten (HEROES/HERO_CLASSES/SHOP_ITEMS/RELICS/OVERLORD_DECKS/…),
// nie kopierte Karteninhalte. Auflösung der IDs geschieht beim Rendern (mit
// sanftem Fallback bei unbekannter ID).
//
// Persistenz: eigener zustand-Store (localStorage-Key `qvr-sessions`), NICHT im
// Spieldaten-Store. Aktueller Stand (XP/Gold/Besitz) wird aus Setup + Szenario-
// Protokoll ABGELEITET (siehe `src/store/sessionDerive.ts`), nicht als Saldo
// gespeichert → keine Doppelzählung.

/** Herkunft eines getrackten Gegenstands. */
export type ItemSource = 'shop' | 'relic' | 'class-start' | 'custom'

/**
 * Eine konkrete Gegenstands-Instanz im Besitz eines Helden/der Partei.
 * `refId` ist eine stabile Instanz-ID (uid) – erlaubt Duplikate desselben
 * Gegenstands und das gezielte Verkaufen genau EINER Kopie.
 */
export interface ItemRef {
  refId: string
  source: ItemSource
  /** id in SHOP_ITEMS / RELICS / HeroClass.startingEquipment[].id; '' bei source==='custom'. */
  dataId: string
  /** Nur bei source==='custom': frei eingegebener Name. */
  customName?: string
}

/**
 * Zeitfenster einer Gerüchtekarte — ABGELEITET aus `Rumor.textDe`
 * (`src/utils/rumorTiming.ts`), NICHT gespeichert.
 */
export type RumorTiming =
  | 'campaign-phase-start' // „zu Beginn einer Kampagnenphase"
  | 'travel-start' // „zu Beginn des Reiseschritts"
  | 'travel-after' // „sofort nach dem Reiseschritt"
  | 'travel-end' // „am Ende des Reiseschritts"
  | 'shopping-start' // „zu Beginn des Einkaufsschritts"
  | 'adventure-only' // kein Spielzeitpunkt, nur als nächstes Abenteuer wählbar

/** Zustand einer beim Kampagnenstart gezogenen Gerüchtekarte. */
export type TrackedRumorStatus = 'in-play' | 'played' | 'expired' | 'discarded'

export interface TrackedRumor {
  /** → RUMORS. */
  rumorId: string
  status: TrackedRumorStatus
  /** PlayedScenario.id, in dessen Kampagnenphase die Karte gespielt wurde. */
  playedInScenarioId?: string
}

/** Zustand einer Zusatzabenteuerkarte (Akt II, kein Teil des Gerüchtedecks). */
export type TrackedAdvancedQuestStatus = 'not-in-play' | 'in-play' | 'played'

export interface TrackedAdvancedQuest {
  /** → ADVANCED_QUESTS. */
  questId: string
  status: TrackedAdvancedQuestStatus
  /** Wodurch sie ins Spiel kam — `rumorId` oder Freitext. */
  source?: string
}

/** Ein getrackter Held: welcher Spieler, welche Klasse, welche Start-Skills/-Items. */
export interface TrackedHero {
  /** Stabiler Schlüssel (uid), unabhängig von `heroId`. */
  localId: string
  /** → HEROES. */
  heroId: string
  /** Name des realen Spielers. */
  playerName: string
  /** → HERO_CLASSES; legal nur, wenn class.archetype === hero.archetype. */
  classId: string | null
  /** Bei Session-Start bekannte Fähigkeiten (Default = kostenlose Skills der Klasse). */
  startingSkillIds: string[]
  /** Bei Session-Start besessene Gegenstände (Default = Startausrüstung der Klasse). */
  startingItemRefs: ItemRef[]
  note?: string
  /** Epische Variante: Start-Erfahrung. Zählt in `xpEarned`. */
  startingXp?: number
  /** Epische Variante: Schicksalsmarker, die dieser Held zum Partei-Vorrat beiträgt. */
  startingFateTokens?: number
}

/** Getrackter Overlord: Deck(s), besessene Karten, Leutnant, Plotdeck, Gerüchte. */
export interface TrackedOverlord {
  /** Gewählte OVERLORD_DECKS (Basisdeck + Klasse(n) + Universal). */
  deckIds: string[]
  /** Bei Session-Start besessene Overlord-Karten (Default = Karten des Basisdecks). */
  startingCardIds: string[]
  /** → LIEUTENANTS. */
  lieutenantId: string | null
  /** → PLOT_DECKS (Default via plotDeckForLieutenant()). */
  plotDeckId: string | null
  /** Besessene/gekaufte Plotkarten (→ PlotCard.id). */
  ownedPlotCardIds: string[]
  /**
   * @deprecated Abgelöst durch `CampaignSession.rumors` (v1.8.0): Gerüchte sind
   * kein Overlord-Besitz, sondern beiden Seiten bekannt. Die Migration v2 → v3
   * überträgt den Inhalt nach `rumors`; danach wird das Feld nicht mehr
   * geschrieben (bleibt nur für den verlustfreien Import alter Dateien).
   */
  activeRumorIds: string[]
  /** → RELICS mit side==='overlord'. */
  relicIds: string[]
  /** Start-XP des Overlords (meist 0). */
  startingXp: number
  /** Aktuelle Bedrohungsmarker des Overlords (Live-Zähler, jederzeit editierbar). */
  threatTokens: number
}

// ── Szenario-Protokoll (Payloads: Schema in Phase 1, UI in Phase 2) ──────────

export type ScenarioSource = 'campaign' | 'advanced-quest' | 'rumor' | 'custom'

/** Verweis auf das gespielte Szenario (kuratierte Liste, Nebenquest, Gerücht oder Freitext). */
export interface ScenarioRef {
  source: ScenarioSource
  /** → CampaignScenario.id | AdvancedQuest.id | Rumor.id; '' bei source==='custom'. */
  dataId: string
  /** Snapshot des Titels (auch der Freitext-Fallback). */
  title: string
  act: 1 | 2
}

/** Eine im Szenario erhaltene Gegenstands-Zuweisung (an einen Helden oder null=Partei-Pool). */
export interface ItemGrant {
  toHeroLocalId: string | null
  item: ItemRef
}

/** Eine gelernte Fähigkeit (XP-Kosten als Snapshot; 'elemental' → 0). */
export interface SkillLearned {
  heroLocalId: string
  skillId: string
  xpCost: number
}

/** Ein gekaufter Gegenstand (Preis-Snapshot; Zuweisung an Held oder null=Partei-Pool). */
export interface ItemBought {
  toHeroLocalId: string | null
  item: ItemRef
  price: number
}

/** Ein verkaufter Gegenstand (Erstattung als Snapshot; entfernt die Instanz refId). */
export interface ItemSold {
  refId: string
  refund: number
}

/** Eine gekaufte Overlord-Karte (XP-Kosten als Snapshot). */
export interface OverlordCardBought {
  cardId: string
  xpCost: number
}

/** Ein Eintrag im Szenario-Protokoll: gespieltes Szenario + Belohnungen + Einkauf. */
export interface PlayedScenario {
  id: string
  /** Reihenfolge im Kampagnenverlauf (stabile Sortierung). */
  order: number
  scenario: ScenarioRef
  outcome: 'heroes' | 'overlord' | 'none'
  rewards: {
    /** heroLocalId → erhaltene XP (pro Held; Descent 2e). */
    heroXp: Record<string, number>
    overlordXp: number
    /** Gold-Gewinn (geteilter Partei-Pool). */
    partyGold: number
    grantedItems: ItemGrant[]
    /** Erhaltene Belohnungskarten (Overlord-Karten mit xpCost===null → cardId). */
    overlordCardIds: string[]
    overlordRelicIds: string[]
  }
  shopping: {
    bought: ItemBought[]
    /** Kann auch Startausrüstung verkaufen (refId einer besessenen ItemRef). */
    sold: ItemSold[]
    skillsLearned: SkillLearned[]
    overlordCardsBought: OverlordCardBought[]
  }
  note?: string
  /** ISO-Datum des Spielabends (Screen 8, Feld „gespielt am"). */
  playedAt?: string
  /** Bedrohungsmarker-Stand nach diesem Szenario (Screen 9). */
  threatAfter?: number
  /** Schicksalsmarker-Stand nach diesem Szenario, VOR dem Einkaufsschritt (Screen 9). */
  fateAfter?: number
  /** Die eine Gerüchtekarte, die in dieser Kampagnenphase gespielt wurde. */
  rumorPlayedId?: string
  /** Markt-Modus dieses Einkaufsschritts (Screens 11 / 11b). */
  market?: ScenarioMarket
}

/** Markt-Modus eines Einkaufsschritts. */
export interface ScenarioMarket {
  mode: 'reveal' | 'manual'
  act: 1 | 2
  /** Nur bei mode==='reveal': wie viele Karten aufgedeckt wurden. */
  revealCount?: number
  /** Nur bei mode==='reveal': die gezogenen Marktkarten (→ SHOP_ITEMS). */
  revealedItemIds?: string[]
}

/** Ein kompletter Kampagnen-Spielstand. */
export interface CampaignSession {
  id: string
  name: string
  /** → CAMPAIGNS. */
  campaignId: string
  playerCount: 2 | 3 | 4
  /** Start-Gold der Partei (meist 0). */
  startingGold: number
  /** Aktuelle Schicksalsmarker der Partei (gemeinsamer Live-Zähler, jederzeit editierbar). */
  partyFateTokens: number
  createdAt: string
  updatedAt: string
  /** Max. 4 Helden. */
  heroes: TrackedHero[]
  overlord: TrackedOverlord
  /** Szenario-Protokoll (in Phase 1 leer; von deriveLiveState gefaltet). */
  scenarios: PlayedScenario[]
  /** Archiviert = nicht mehr laufend, bleibt lesbar (Screen 1, Archiv-Liste). */
  archived?: boolean
  /** Freie Spielstand-Notiz (Screen 2, rechte Spalte). */
  note?: string
  /** Epische Variante (Screen 13): erlaubt Start-XP/-Schicksal je Held. */
  epic?: boolean
  /** Beim Kampagnenstart gezogene Gerüchtekarten (Screen 3b + 13). */
  rumors: TrackedRumor[]
  /** Zusatzabenteuerkarten, die im Spiel sind (Screen 3b). */
  advancedQuests: TrackedAdvancedQuest[]
}
