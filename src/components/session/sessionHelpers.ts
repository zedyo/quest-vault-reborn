// Geteilte Hilfsfunktionen für den Session-Tracker: Fabriken für neue Sessions/
// Helden, Seeding von Start-Skills/-Ausrüstung aus der Klasse, sowie ID→Name-
// Auflösung für die Anzeige (statische Daten). Keine React-Abhängigkeit.

import type { HeroClass, ShopItem, Relic, Hero, ClassStartingItem } from '../../types/game'
import type { CampaignSession, ItemRef, TrackedHero, TrackedOverlord } from '../../types/session'
import { HERO_CLASSES } from '../../data/heroClasses'
import { SHOP_ITEMS, RELICS } from '../../data/items'
import { HEROES } from '../../data/heroes'

export const uid = (): string =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(36).slice(2)}`

export const nowISO = (): string => new Date().toISOString()

// ── Auflösungs-Maps (einmal aufgebaut) ───────────────────────────────────────

export const HERO_BY_ID: Record<string, Hero> = Object.fromEntries(HEROES.map((h) => [h.id, h]))
export const CLASS_BY_ID: Record<string, HeroClass> = Object.fromEntries(HERO_CLASSES.map((c) => [c.id, c]))
export const SHOP_BY_ID: Record<string, ShopItem> = Object.fromEntries(SHOP_ITEMS.map((i) => [i.id, i]))
export const RELIC_BY_ID: Record<string, Relic> = Object.fromEntries(RELICS.map((r) => [r.id, r]))

/** Alle Klassen-Startgegenstände nach ID (über alle Klassen). */
export const CLASS_START_ITEM_BY_ID: Record<string, ClassStartingItem> = Object.fromEntries(
  HERO_CLASSES.flatMap((c) => (c.startingEquipment ?? []).map((it) => [it.id, it] as const)),
)

/** Anzeigename einer Gegenstands-Instanz (mit Fallback auf die rohe ID). */
export function resolveItemName(ref: ItemRef): string {
  switch (ref.source) {
    case 'custom':
      return ref.customName?.trim() || 'Eigener Gegenstand'
    case 'shop':
      return SHOP_BY_ID[ref.dataId]?.nameDe ?? ref.dataId
    case 'relic':
      return RELIC_BY_ID[ref.dataId]?.nameDe ?? ref.dataId
    case 'class-start':
      return CLASS_START_ITEM_BY_ID[ref.dataId]?.nameDe ?? ref.dataId
    default:
      return ref.dataId
  }
}

// ── Fabriken ─────────────────────────────────────────────────────────────────

export function emptyOverlord(): TrackedOverlord {
  return {
    deckIds: [],
    startingCardIds: [],
    lieutenantId: null,
    plotDeckId: null,
    ownedPlotCardIds: [],
    activeRumorIds: [],
    relicIds: [],
    startingXp: 0,
  }
}

export function newSession(campaignId: string): CampaignSession {
  const now = nowISO()
  return {
    id: uid(),
    name: 'Neue Session',
    campaignId,
    playerCount: 2,
    startingGold: 0,
    createdAt: now,
    updatedAt: now,
    heroes: [],
    overlord: emptyOverlord(),
    scenarios: [],
  }
}

export function newTrackedHero(heroId: string): TrackedHero {
  return { localId: uid(), heroId, playerName: '', classId: null, startingSkillIds: [], startingItemRefs: [] }
}

/** Kostenlose Startfähigkeiten (xpCost === 0) einer Klasse. */
export function classStartingSkillIds(cls: HeroClass): string[] {
  return cls.skills.filter((s) => s.xpCost === 0).map((s) => s.id)
}

/** Startausrüstung einer Klasse als frische Gegenstands-Instanzen. */
export function classStartingItemRefs(cls: HeroClass): ItemRef[] {
  return (cls.startingEquipment ?? []).map((it) => ({
    refId: uid(),
    source: 'class-start' as const,
    dataId: it.id,
  }))
}

/**
 * Setzt die Klasse eines Helden und befüllt Start-Skills + Startausrüstung neu
 * (alte klassenspezifische Auswahl wird verworfen). `null` entfernt die Klasse.
 */
export function withClass(hero: TrackedHero, cls: HeroClass | null): TrackedHero {
  if (!cls) return { ...hero, classId: null, startingSkillIds: [], startingItemRefs: [] }
  return {
    ...hero,
    classId: cls.id,
    startingSkillIds: classStartingSkillIds(cls),
    startingItemRefs: classStartingItemRefs(cls),
  }
}
