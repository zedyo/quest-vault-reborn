// ── Live-Stand-Ableitung eines Kampagnen-Spielstands ─────────────────────────
//
// Reine, unit-testbare Funktion: faltet `Setup → Szenarien (nach order)` zum
// AKTUELLEN Stand (XP/Gold/besessene Karten & Gegenstände). Es gibt KEINEN
// gespeicherten Saldo, der beim Bearbeiten/Löschen eines Szenarios reversiert
// werden müsste → Add/Update/Remove sind einfache immutable Array-Ops, und
// Doppelzählen ist strukturell unmöglich (der Stand wird immer neu gefaltet).
//
// Dangling-Sell-Regel: Ein Verkauf, dessen refId nicht (mehr) unter den erzeugten
// Instanzen liegt (z. B. weil der zugehörige Kauf gelöscht wurde), zählt WEDER
// für die Gold-Erstattung NOCH für den Besitzentzug.

import type { CampaignSession, ItemRef, PlayedScenario } from '../types/session'

export interface HeroLiveState {
  localId: string
  xpEarned: number
  xpSpent: number
  xpAvailable: number
  ownedSkillIds: string[]
  ownedItemRefs: ItemRef[]
}

export interface OverlordLiveState {
  xpEarned: number
  xpSpent: number
  xpAvailable: number
  ownedCardIds: string[]
  ownedRelicIds: string[]
}

export interface LiveState {
  /** heroLocalId → abgeleiteter Live-Stand. */
  heroes: Record<string, HeroLiveState>
  /** Gegenstände im Partei-Pool (nicht einem Helden zugewiesen). */
  partyItemRefs: ItemRef[]
  partyGold: number
  overlord: OverlordLiveState
  /** Zuletzt gespieltes Szenario (nach order), oder null. */
  currentScenario: PlayedScenario | null
  currentAct: 1 | 2
}

function uniq(ids: string[]): string[] {
  return [...new Set(ids)]
}

/** Faltet den kompletten aktuellen Spielstand aus Setup + Szenario-Protokoll. */
export function deriveLiveState(session: CampaignSession): LiveState {
  const scenarios = [...session.scenarios].sort((a, b) => a.order - b.order)

  // 1) Alle erzeugten Gegenstands-Instanzen + ihr Besitzer (Held oder null=Partei).
  const created: { ref: ItemRef; owner: string | null }[] = []
  for (const h of session.heroes) {
    for (const ref of h.startingItemRefs) created.push({ ref, owner: h.localId })
  }
  for (const sc of scenarios) {
    for (const g of sc.rewards.grantedItems) created.push({ ref: g.item, owner: g.toHeroLocalId })
    for (const b of sc.shopping.bought) created.push({ ref: b.item, owner: b.toHeroLocalId })
  }
  const createdIds = new Set(created.map((c) => c.ref.refId))

  // 2) Verkäufe – nur solche, die eine erzeugte Instanz betreffen (Dangling-Guard).
  const soldIds = new Set<string>()
  for (const sc of scenarios) {
    for (const sold of sc.shopping.sold) {
      if (createdIds.has(sold.refId)) soldIds.add(sold.refId)
    }
  }

  // 3) Besitz = erzeugt minus verkauft (nach refId dedupliziert).
  const ownedByHero = new Map<string, ItemRef[]>()
  const partyItemRefs: ItemRef[] = []
  const seen = new Set<string>()
  for (const { ref, owner } of created) {
    if (soldIds.has(ref.refId) || seen.has(ref.refId)) continue
    seen.add(ref.refId)
    if (owner === null) partyItemRefs.push(ref)
    else {
      const arr = ownedByHero.get(owner)
      if (arr) arr.push(ref)
      else ownedByHero.set(owner, [ref])
    }
  }

  // 4) Helden-Stand.
  const heroes: Record<string, HeroLiveState> = {}
  for (const h of session.heroes) {
    let xpEarned = 0
    let xpSpent = 0
    const learnedSkillIds: string[] = []
    for (const sc of scenarios) {
      xpEarned += sc.rewards.heroXp[h.localId] ?? 0
      for (const learned of sc.shopping.skillsLearned) {
        if (learned.heroLocalId === h.localId) {
          xpSpent += learned.xpCost
          learnedSkillIds.push(learned.skillId)
        }
      }
    }
    heroes[h.localId] = {
      localId: h.localId,
      xpEarned,
      xpSpent,
      xpAvailable: xpEarned - xpSpent,
      ownedSkillIds: uniq([...h.startingSkillIds, ...learnedSkillIds]),
      ownedItemRefs: ownedByHero.get(h.localId) ?? [],
    }
  }

  // 5) Partei-Gold (Start + Belohnungen + realisierbare Verkäufe − Käufe).
  let partyGold = session.startingGold
  for (const sc of scenarios) {
    partyGold += sc.rewards.partyGold
    for (const b of sc.shopping.bought) partyGold -= b.price
    for (const sold of sc.shopping.sold) {
      if (createdIds.has(sold.refId)) partyGold += sold.refund
    }
  }

  // 6) Overlord-Stand.
  let olXpEarned = session.overlord.startingXp
  let olXpSpent = 0
  const olCardIds = new Set(session.overlord.startingCardIds)
  const olRelicIds = new Set(session.overlord.relicIds)
  for (const sc of scenarios) {
    olXpEarned += sc.rewards.overlordXp
    for (const cid of sc.rewards.overlordCardIds) olCardIds.add(cid)
    for (const rid of sc.rewards.overlordRelicIds) olRelicIds.add(rid)
    for (const bought of sc.shopping.overlordCardsBought) {
      olXpSpent += bought.xpCost
      olCardIds.add(bought.cardId)
    }
  }

  const currentScenario = scenarios.length ? scenarios[scenarios.length - 1] : null
  const currentAct: 1 | 2 = currentScenario?.scenario.act ?? 1

  return {
    heroes,
    partyItemRefs,
    partyGold,
    overlord: {
      xpEarned: olXpEarned,
      xpSpent: olXpSpent,
      xpAvailable: olXpEarned - olXpSpent,
      ownedCardIds: [...olCardIds],
      ownedRelicIds: [...olRelicIds],
    },
    currentScenario,
    currentAct,
  }
}
