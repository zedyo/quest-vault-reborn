// ── Flow-Schritt 4 · Markt ───────────────────────────────────────────────────
//
// Kaufen und verkaufen in einer Ansicht, mit laufender Gold-Rechnung daneben.
// Zwei Modi (aufdecken / manuell suchen) + der Zwischenspiel-Sonderfall: der
// Akt-I-Stapel gilt nach der Einführung UND nach dem Zwischenspiel, der
// Akt-II-Stapel erst ab dem ersten Akt-II-Abenteuer — dort bekommen die Helden
// eine echte Wahl, statt dass die App den Akt stillschweigend setzt.
//
// Am Ende dieses Schritts gehen die Schicksalsmarker regelkonform zurück in den
// Vorrat (0) — sichtbar bestätigt in der Gold-Rechnung.

import { useMemo, useState } from 'react'
import type { FlowStepProps } from './types'
import { draftGold } from './types'
import { scenariosForCampaign } from '../../../data/campaignScenarios'
import { itemCardUrl, isSellable, resolveItemName, sellRefund, heroShortName } from '../sessionHelpers'
import type { ItemRef } from '../../../types/session'
import MarketReveal from './MarketReveal'
import MarketManualSearch from './MarketManualSearch'
import CardThumb from '../ui/CardThumb'
import { Btn, Head, Meta, Micro, Segmented, ThemeScope } from '../ui/controls'
import { Icon } from '../../QvIcons'

export default function Step4Market({ session, base, draft, setScenario, ownedExpansionIds }: FlowStepProps) {
  const pool = scenariosForCampaign(session.campaignId)
  const role =
    draft.scenario.source === 'campaign' ? pool.find((s) => s.id === draft.scenario.dataId)?.role : undefined
  const isInterlude = role === 'interlude'

  // Akt des Einkaufsschritts: nach dem Zwischenspiel wählbar, sonst aus dem Szenario.
  const [interludeAct, setInterludeAct] = useState<1 | 2>(draft.market?.act ?? 1)
  const act: 1 | 2 = isInterlude ? interludeAct : draft.scenario.act
  const mode = draft.market?.mode ?? 'reveal'

  const setMode = (m: 'reveal' | 'manual') =>
    setScenario((sc) => ({ ...sc, market: { ...(sc.market ?? { revealCount: 5 }), mode: m, act } }))

  // Verkaufbarer Besitz = Stand vor dem Szenario + in diesem Szenario Erhaltenes/Gekauftes.
  const sellable = useMemo(() => {
    const map = new Map<string, { ref: ItemRef; owner: string | null }>()
    for (const h of session.heroes)
      for (const r of base.heroes[h.localId]?.ownedItemRefs ?? []) map.set(r.refId, { ref: r, owner: h.localId })
    for (const r of base.partyItemRefs) map.set(r.refId, { ref: r, owner: null })
    for (const g of draft.rewards.grantedItems) map.set(g.item.refId, { ref: g.item, owner: g.toHeroLocalId })
    for (const b of draft.shopping.bought) map.set(b.item.refId, { ref: b.item, owner: b.toHeroLocalId })
    // Relikte sind laut Regel nicht verkäuflich und tauchen hier gar nicht auf.
    return [...map.values()].filter(
      (x) => isSellable(x.ref) && !draft.shopping.sold.some((s) => s.refId === x.ref.refId),
    )
  }, [session.heroes, base, draft])

  const goldBefore = base.partyGold
  const buys = draft.shopping.bought.reduce((n, b) => n + b.price, 0)
  const sells = draft.shopping.sold.reduce((n, s) => n + s.refund, 0)
  const goldAfter = draftGold(goldBefore, draft)
  const fateBefore = draft.fateAfter ?? session.partyFateTokens

  const ownerName = (localId: string | null) => {
    if (localId === null) return 'gemeinsam'
    const h = session.heroes.find((x) => x.localId === localId)
    return h ? heroShortName(h) : 'unbekannt'
  }

  return (
    <div className="grid xl:grid-cols-[1fr_320px] items-stretch">
      <ThemeScope theme="heldentum" className="bg-bg px-5 py-6 sm:px-6 flex flex-col gap-5">
        <div>
          <div className="flex items-end justify-between gap-4 mb-3 flex-wrap">
            <div>
              <Head>Kaufen</Head>
              <p className="mt-1 text-[14px] text-muted">
                Markt Akt {act === 2 ? 'II' : 'I'} · {goldAfter} Gold verfügbar
              </p>
            </div>
            <Segmented
              value={mode}
              onChange={setMode}
              options={[
                { value: 'reveal', label: 'Marktkarten aufdecken' },
                { value: 'manual', label: 'Manuell suchen' },
              ]}
            />
          </div>

          {mode === 'reveal' ? (
            <MarketReveal
              session={session}
              base={base}
              draft={draft}
              setScenario={setScenario}
              ownedExpansionIds={ownedExpansionIds}
              act={act}
            />
          ) : (
            <MarketManualSearch
              session={session}
              setScenario={setScenario}
              ownedExpansionIds={ownedExpansionIds}
              act={act}
            />
          )}
        </div>

        {/* Zwischenspiel-Sonderfall */}
        {isInterlude && (
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-accent-bright whitespace-nowrap">
                Sonderfall · direkt nach dem Zwischenspiel
              </span>
              <span className="flex-1 h-px bg-accent-line" />
            </div>
            <p className="mb-3 text-[14px] leading-[1.55] text-muted max-w-[96ch]">
              Der Akt-I-Stapel wird nach der Einführung <strong className="font-semibold text-fg">und</strong> nach dem
              Zwischenspiel benutzt, der Akt-II-Stapel erst ab dem ersten Akt-II-Abenteuer. In diesem einen
              Einkaufsschritt bekommen die Helden deshalb eine Wahl — die App fragt sie, statt den Akt stillschweigend
              zu setzen.
            </p>
            <div className="grid gap-3 lg:grid-cols-2">
              {([1, 2] as const).map((a) => {
                const selected = interludeAct === a
                return (
                  <button
                    key={a}
                    type="button"
                    onClick={() => {
                      setInterludeAct(a)
                      setScenario((sc) => ({ ...sc, market: { ...(sc.market ?? { mode: 'reveal' }), mode, act: a } }))
                    }}
                    className={`p-4 rounded-card text-left transition-all ${
                      selected ? 'border-2 border-accent bg-accent-soft shadow-btn' : 'border border-line bg-surface'
                    }`}
                  >
                    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent-bright">
                      {selected ? 'Gewählt' : 'Alternative'}
                    </p>
                    <p className="mt-2 font-head text-[18px] font-bold text-fg">
                      {a === 1 ? 'Alle Akt-I-Karten ansehen' : 'Aus dem Akt-II-Stapel aufdecken'}
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-[1.5] text-muted">
                      {a === 1
                        ? 'Der komplette Akt-I-Stapel liegt offen — kein Zufall, freie Wahl, so oft ihr wollt. Nutze dafür „Manuell suchen".'
                        : 'Zufällig einige Karten vom stärkeren Stapel — mehr Wirkung, weniger Auswahl. Nur wählen, wenn ihr in dieser Kampagnenphase bereits ein Akt-II-Abenteuer gespielt habt; sonst gilt weiter der Akt-I-Stapel.'}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Verkaufen */}
        <div>
          <Head className="mb-3">Verkaufen</Head>
          {sellable.length === 0 ? (
            <p className="text-[13.5px] text-muted">Nichts im Besitz, das verkauft werden könnte.</p>
          ) : (
            <div className="flex flex-col gap-2.5">
              {sellable.map(({ ref, owner }) => (
                <div
                  key={ref.refId}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-control border border-line bg-surface flex-wrap"
                >
                  <CardThumb url={itemCardUrl(ref)} name={resolveItemName(ref)} size="xs" />
                  <div className="min-w-0 flex-1">
                    <p className="font-head text-[14.5px] font-semibold text-fg">{resolveItemName(ref)}</p>
                    <p className="mt-0.5 text-[12.5px] text-muted">
                      bei {ownerName(owner)} ·{' '}
                      {ref.source === 'class-start' ? 'Startausrüstung, pauschal 25 G' : 'halber Wert, auf 25 abgerundet'}
                    </p>
                  </div>
                  <span className="font-head text-[15px] font-bold text-accent whitespace-nowrap">
                    +{sellRefund(ref)} G
                  </span>
                  <Btn
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setScenario((sc) => ({
                        ...sc,
                        shopping: {
                          ...sc.shopping,
                          sold: [...sc.shopping.sold, { refId: ref.refId, refund: sellRefund(ref) }],
                        },
                      }))
                    }
                  >
                    Verkaufen
                  </Btn>
                </div>
              ))}
            </div>
          )}
          {draft.shopping.sold.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {draft.shopping.sold.map((s) => (
                <button
                  key={s.refId}
                  type="button"
                  onClick={() =>
                    setScenario((sc) => ({
                      ...sc,
                      shopping: { ...sc.shopping, sold: sc.shopping.sold.filter((x) => x.refId !== s.refId) },
                    }))
                  }
                  className="inline-flex items-center gap-2 h-9 px-3 rounded-pill border border-accent-line bg-accent-soft text-[12.5px] text-fg"
                >
                  Verkauft · +{s.refund} G
                  <Icon name="close" size={12} />
                </button>
              ))}
            </div>
          )}
        </div>
      </ThemeScope>

      {/* Gold-Rechnung */}
      <aside className="border-t xl:border-t-0 xl:border-l border-line bg-surface-2 px-5 py-6 flex flex-col gap-3.5">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-bright">Gold-Rechnung</span>
        <div className="flex flex-col">
          {[
            ['Stand vor dem Szenario', `${goldBefore}`],
            ['Belohnung', `+${draft.rewards.partyGold}`],
            ['Käufe', `−${buys}`],
            ['Verkauf', `+${sells}`],
          ].map(([label, value]) => (
            <div key={label} className="flex items-baseline justify-between gap-3 py-2.5 border-b border-line">
              <span className="text-[13.5px] text-muted">{label}</span>
              <span className="font-head text-[15px] font-semibold tabular-nums text-fg whitespace-nowrap">{value}</span>
            </div>
          ))}
        </div>

        <div className="flex items-end justify-between gap-3 p-3.5 rounded-card border border-accent-line bg-accent-soft">
          <Micro className="pb-1">Neuer Stand</Micro>
          <span className="font-head text-[32px] font-bold leading-none text-accent tabular-nums">{goldAfter}</span>
        </div>

        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-control border border-line bg-surface">
          <span className="text-accent-bright shrink-0">
            <Icon name="check" size={15} />
          </span>
          <p className="text-[12.5px] leading-[1.45] text-muted">
            <strong className="font-semibold text-fg">Schicksalsmarker {fateBefore} → 0.</strong> Nach dem
            Einkaufsschritt gehen sie zurück in den Vorrat — automatisch, beim Abschließen.
          </p>
        </div>

        <p className="text-[13px] leading-[1.55] text-muted">
          Alles reversibel: Wird dieses Szenario später gelöscht, verschwinden Käufe, Verkäufe und Belohnungen wieder
          aus dem Stand — der Live-Stand wird immer neu aus dem Protokoll gefaltet.
        </p>

        <Meta>Modus und Kartenzahl werden je Kampagne im Entwurf gemerkt.</Meta>
      </aside>
    </div>
  )
}
