// ── Markt-Modus „Marktkarten aufdecken" (Screen 11) ──────────────────────────
//
// Zieht X Karten zufällig aus dem passenden Akt-Stapel — nur aus Erweiterungen
// der Sammlung und ohne bereits besessene Karten. Die Ziehung wird im Entwurf
// festgehalten (`market.revealedItemIds`), damit sie beim Zurückblättern nicht
// neu würfelt.

import { useMemo } from 'react'
import type { CampaignSession, PlayedScenario } from '../../../types/session'
import type { LiveState } from '../../../store/sessionDerive'
import { SHOP_ITEMS } from '../../../data/items'
import { itemCardDeUrl } from '../../../data/assetUrls'
import { uid, ATTACK_DE, EQUIP_DE } from '../sessionHelpers'
import HeroChipRow from '../ui/HeroChipRow'
import CardThumb from '../ui/CardThumb'
import { renderGameText } from '../../GameSymbols'
import { Btn, Micro, Stepper } from '../ui/controls'

export function ownedShopItemIds(base: LiveState, draft: PlayedScenario): Set<string> {
  const ids = new Set<string>()
  for (const h of Object.values(base.heroes)) for (const r of h.ownedItemRefs) if (r.source === 'shop') ids.add(r.dataId)
  for (const r of base.partyItemRefs) if (r.source === 'shop') ids.add(r.dataId)
  for (const b of draft.shopping.bought) if (b.item.source === 'shop') ids.add(b.item.dataId)
  return ids
}

/** Zieht `count` Marktkarten des Akts aus der Sammlung, ohne bereits besessene. */
export function drawMarketCards(
  act: 1 | 2,
  count: number,
  ownedExpansionIds: string[],
  exclude: Set<string>,
): string[] {
  const pool = SHOP_ITEMS.filter(
    (i) => i.act === act && ownedExpansionIds.includes(i.expansionId) && !exclude.has(i.id),
  )
  const bag = [...pool]
  const out: string[] = []
  while (bag.length > 0 && out.length < count) {
    const idx = Math.floor(Math.random() * bag.length)
    out.push(bag.splice(idx, 1)[0].id)
  }
  return out
}

export default function MarketReveal({
  session,
  base,
  draft,
  setScenario,
  ownedExpansionIds,
  act,
}: {
  session: CampaignSession
  base: LiveState
  draft: PlayedScenario
  setScenario: (updater: (sc: PlayedScenario) => PlayedScenario) => void
  ownedExpansionIds: string[]
  act: 1 | 2
}) {
  // Regelstand: 5 zufällige Marktkarten werden vom aktuellen Stapel aufgedeckt
  // (CRRG, Kampagnenphase Schritt „Einkaufen“). Frei verstellbar.
  const count = draft.market?.revealCount ?? 5
  const revealed = draft.market?.revealedItemIds ?? []
  const owned = useMemo(() => ownedShopItemIds(base, draft), [base, draft])

  const reveal = (n = count) =>
    setScenario((sc) => ({
      ...sc,
      market: {
        mode: 'reveal',
        act,
        revealCount: n,
        revealedItemIds: drawMarketCards(act, n, ownedExpansionIds, ownedShopItemIds(base, sc)),
      },
    }))

  const buy = (itemId: string, toHeroLocalId: string | null) => {
    const item = SHOP_ITEMS.find((i) => i.id === itemId)
    if (!item) return
    setScenario((sc) => ({
      ...sc,
      shopping: {
        ...sc.shopping,
        bought: [
          ...sc.shopping.bought,
          { toHeroLocalId, item: { refId: uid(), source: 'shop', dataId: item.id }, price: item.cost },
        ],
      },
    }))
  }

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex items-center gap-3.5 px-3.5 py-3 rounded-control border border-accent-line bg-accent-soft flex-wrap">
        <div>
          <Micro className="block mb-2">Anzahl Karten</Micro>
          <Stepper
            value={count}
            min={1}
            max={12}
            label="Anzahl aufgedeckter Karten"
            onChange={(n) =>
              setScenario((sc) => ({
                ...sc,
                market: { mode: 'reveal', act, revealCount: n, revealedItemIds: sc.market?.revealedItemIds },
              }))
            }
          />
        </div>
        <p className="flex-1 min-w-[16rem] text-[13px] leading-[1.5] text-muted">
          Gezogen wird zufällig aus dem <strong className="font-semibold text-fg">Akt-{act === 2 ? 'II' : 'I'}-Stapel</strong>{' '}
          und nur aus Erweiterungen deiner Sammlung. Bereits besessene Karten sind ausgeschlossen.
        </p>
        <Btn size="sm" onClick={() => reveal()}>
          Neu aufdecken
        </Btn>
      </div>

      {revealed.length === 0 ? (
        <p className="text-[13.5px] text-muted">
          Noch nichts aufgedeckt. „Neu aufdecken" zieht {count} Karten aus dem Akt-{act === 2 ? 'II' : 'I'}-Stapel.
        </p>
      ) : (
        <div className="grid gap-3 lg:grid-cols-2">
          {revealed.map((id) => {
            const item = SHOP_ITEMS.find((i) => i.id === id)
            if (!item) return null
            const alreadyBought = draft.shopping.bought.some((b) => b.item.dataId === id)
            return (
              <div key={id} className="flex gap-3 p-3.5 rounded-card border border-line bg-surface">
                <CardThumb url={itemCardDeUrl(item.id)} name={item.nameDe} size="market" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2.5">
                    <p className="font-head text-[15px] font-bold text-fg">{item.nameDe}</p>
                    <span className="font-head text-[15px] font-bold text-accent whitespace-nowrap">
                      {item.cost} G
                    </span>
                  </div>
                  <Micro className="block mt-0.5">
                    {[item.attack ? ATTACK_DE[item.attack] : '', item.equip ? EQUIP_DE[item.equip] : '']
                      .filter(Boolean)
                      .join(' · ')
                      .toUpperCase()}
                  </Micro>
                  <p className="mt-1.5 mb-2.5 text-[12.5px] leading-[1.45] text-muted">
                    {renderGameText(item.rulesDe, 12)}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <HeroChipRow
                      heroes={session.heroes}
                      value={null}
                      size={28}
                      allowShared={false}
                      onChange={(owner) => buy(item.id, owner)}
                    />
                    <Btn
                      variant="secondary"
                      size="sm"
                      disabled={alreadyBought}
                      onClick={() => buy(item.id, null)}
                    >
                      {alreadyBought ? 'Gekauft' : 'Kaufen'}
                    </Btn>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {owned.size > 0 && (
        <Micro>
          {owned.size} Marktkarten sind bereits im Besitz und werden nicht mehr gezogen.
        </Micro>
      )}
    </div>
  )
}
