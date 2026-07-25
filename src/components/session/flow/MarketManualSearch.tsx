// ── Markt-Modus „Manuell suchen" (Screen 11b) ────────────────────────────────
//
// Für Gruppen, die am Tisch echte Karten ziehen: Namen tippen, zuweisen, fertig.
// Die Suche greift auf Name UND Regeltext, filtert auf die Sammlung und MARKIERT
// Karten aus dem falschen Akt, statt sie zu verstecken — am Tisch gezogen ist
// gezogen.

import { useMemo, useState } from 'react'
import type { CampaignSession, PlayedScenario } from '../../../types/session'
import { SHOP_ITEMS, RELICS } from '../../../data/items'
import { itemCardDeUrl, relicCardDeUrl } from '../../../data/assetUrls'
import { uid, ATTACK_DE, EQUIP_DE } from '../sessionHelpers'
import HeroChipRow from '../ui/HeroChipRow'
import CardThumb from '../ui/CardThumb'
import { renderGameText } from '../../GameSymbols'
import { Btn, FilterSearch, Meta, Micro } from '../ui/controls'

interface Hit {
  id: string
  kind: 'shop' | 'relic'
  name: string
  slot: string
  rules: string
  cost: number
  act?: 1 | 2
  image: string
}

export default function MarketManualSearch({
  session,
  setScenario,
  ownedExpansionIds,
  act,
}: {
  session: CampaignSession
  setScenario: (updater: (sc: PlayedScenario) => PlayedScenario) => void
  ownedExpansionIds: string[]
  act: 1 | 2
}) {
  const [q, setQ] = useState('')
  const needle = q.trim().toLowerCase()

  const hits = useMemo<Hit[]>(() => {
    if (needle.length < 2) return []
    const owns = (id: string) => ownedExpansionIds.includes(id)
    const shop: Hit[] = SHOP_ITEMS.filter(
      (i) => owns(i.expansionId) && (i.nameDe.toLowerCase().includes(needle) || i.rulesDe.toLowerCase().includes(needle)),
    ).map((i) => ({
      id: i.id,
      kind: 'shop',
      name: i.nameDe,
      slot: [i.attack ? ATTACK_DE[i.attack] : '', i.equip ? EQUIP_DE[i.equip] : '']
        .filter(Boolean)
        .join(' · ')
        .toUpperCase(),
      rules: i.rulesDe,
      cost: i.cost,
      act: i.act,
      image: itemCardDeUrl(i.id),
    }))
    const relics: Hit[] = RELICS.filter(
      (r) =>
        r.side === 'hero' &&
        owns(r.expansionId) &&
        (r.nameDe.toLowerCase().includes(needle) || r.rulesDe.toLowerCase().includes(needle)),
    ).map((r) => ({
      id: r.id,
      kind: 'relic',
      name: r.nameDe,
      slot: `RELIKT${r.equip ? ` · ${(EQUIP_DE[r.equip] ?? r.equip).toUpperCase()}` : ''}`,
      rules: r.rulesDe,
      cost: 0,
      image: relicCardDeUrl(r.id),
    }))
    return [...shop, ...relics].slice(0, 40)
  }, [needle, ownedExpansionIds])

  const buy = (hit: Hit, toHeroLocalId: string | null) =>
    setScenario((sc) => ({
      ...sc,
      market: { mode: 'manual', act },
      shopping: {
        ...sc.shopping,
        bought: [
          ...sc.shopping.bought,
          {
            toHeroLocalId,
            item: { refId: uid(), source: hit.kind, dataId: hit.id },
            price: hit.cost,
          },
        ],
      },
    }))

  return (
    <div className="flex flex-col gap-3">
      <FilterSearch
        value={q}
        onChange={setQ}
        focused
        placeholder="Kartennamen oder Regeltext tippen …"
        className="w-full"
      />
      <div className="flex justify-end">
        <Meta>
          {hits.length} {hits.length === 1 ? 'Treffer' : 'Treffer'} · Markt + Relikte
        </Meta>
      </div>

      {needle.length < 2 ? (
        <p className="text-[13.5px] text-muted">Mindestens zwei Zeichen tippen.</p>
      ) : hits.length === 0 ? (
        <p className="text-[13.5px] text-muted">Keine Karte in deiner Sammlung passt dazu.</p>
      ) : (
        <div className="flex flex-col gap-2.5">
          {hits.map((hit) => {
            const wrongAct = hit.act !== undefined && hit.act !== act
            return (
              <div
                key={`${hit.kind}-${hit.id}`}
                className="flex items-start gap-3.5 px-3.5 py-3 rounded-control border border-line bg-surface flex-wrap"
              >
                <CardThumb url={hit.image} name={hit.name} size="row" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <p className="font-head text-[15px] font-bold text-fg">{hit.name}</p>
                    {hit.act && (
                      <span
                        className={`inline-flex items-center rounded-pill border px-2 py-[2px] font-mono text-[8.5px] tracking-[0.12em] uppercase whitespace-nowrap ${
                          wrongAct ? 'border-accent-line text-accent-bright' : 'border-line text-faint'
                        }`}
                      >
                        Akt {hit.act === 2 ? 'II' : 'I'}
                        {wrongAct ? ' · anderer Stapel' : ''}
                      </span>
                    )}
                  </div>
                  <Micro className="block mt-0.5">{hit.slot}</Micro>
                  <p className="mt-1.5 text-[12.5px] leading-[1.45] text-muted">{renderGameText(hit.rules, 12)}</p>
                </div>
                <span className="font-head text-[15px] font-bold text-accent whitespace-nowrap">{hit.cost} G</span>
                <div className="flex items-center gap-2 shrink-0 flex-wrap">
                  <HeroChipRow heroes={session.heroes} value={null} size={32} onChange={(o) => buy(hit, o)} />
                  <Btn variant="secondary" size="sm" onClick={() => buy(hit, null)}>
                    Kaufen
                  </Btn>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <p className="text-[13px] leading-[1.55] text-muted">
        Die Suche greift auf Name <strong className="font-semibold text-fg">und</strong> Regeltext, filtert auf deine
        Sammlung und markiert Karten aus dem falschen Akt, statt sie zu verstecken — am Tisch gezogen ist gezogen.
      </p>
    </div>
  )
}
