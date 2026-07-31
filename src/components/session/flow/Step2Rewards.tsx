// ── Flow-Schritt 2 · Belohnungen ─────────────────────────────────────────────
//
// Vorbelegt aus dem Ausgang (Schritt 1), immer überschreibbar. Zuweisung von
// Gegenständen über Heldenkürzel statt Dropdown. Bedrohungs- und Schicksalsmarker
// werden hier mitgeschrieben, weil sie sich am Szenario-Ende ändern.

import { useState } from 'react'
import type { FlowStepProps } from './types'
import { OVERLORD_DECKS } from '../../../data/overlordClasses'
import { RELICS } from '../../../data/items'
import { overlordCardDeUrl, relicCardDeUrl } from '../../../data/assetUrls'
import {
  CLASS_BY_ID,
  heroShortName,
  itemCardUrl,
  itemRulesText,
  itemSlotLabel,
  resolveItemName,
} from '../sessionHelpers'
import ItemPicker from '../ItemPicker'
import CardTile from '../ui/CardTile'
import CardThumb from '../ui/CardThumb'
import HeroChipRow from '../ui/HeroChipRow'
import { renderGameText } from '../../GameSymbols'
import { Btn, Head, Meta, Micro, NumberField, Stepper, ThemeScope } from '../ui/controls'
import HeroAvatar from '../ui/HeroAvatar'

const cardKey = (deckId: string, cardId: string) => `${deckId}:${cardId}`

export default function Step2Rewards({ session, base, draft, setScenario, ownedExpansionIds }: FlowStepProps) {
  const [picker, setPicker] = useState(false)
  const owns = (id: string) => ownedExpansionIds.includes(id)
  const rewardDecks = OVERLORD_DECKS.filter((d) => d.kind === 'reward' && owns(d.expansionId))
  const overlordRelics = RELICS.filter((r) => r.side === 'overlord' && owns(r.expansionId))

  const toggle = (field: 'overlordCardIds' | 'overlordRelicIds', id: string) =>
    setScenario((sc) => {
      const arr = sc.rewards[field]
      return {
        ...sc,
        rewards: {
          ...sc.rewards,
          [field]: arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id],
        },
      }
    })

  const threat = draft.threatAfter ?? session.overlord.threatTokens
  const fate = draft.fateAfter ?? session.partyFateTokens

  return (
    <div className="px-5 py-6 sm:px-7 flex flex-col gap-5">
      {picker && (
        <ItemPicker
          ownedExpansionIds={ownedExpansionIds}
          title="Erhaltenen Gegenstand wählen"
          onPick={(item) =>
            setScenario((sc) => ({
              ...sc,
              rewards: { ...sc.rewards, grantedItems: [...sc.rewards.grantedItems, { toHeroLocalId: null, item }] },
            }))
          }
          onClose={() => setPicker(false)}
        />
      )}

      <div className="grid gap-5 xl:grid-cols-[1fr_336px] items-start">
        {/* Erfahrung je Held */}
        <ThemeScope theme="heldentum" className="rounded-card border border-line bg-surface p-[18px]">
          <div className="flex items-baseline justify-between gap-4 mb-3.5 flex-wrap">
            <Head size="s">Erfahrung je Held</Head>
            <Meta>
              {draft.outcome === 'none'
                ? 'Vorbelegt: kein Ergebnis = 0 XP'
                : 'Vorbelegt: 1 XP je Spieler — unabhängig vom Ausgang'}
            </Meta>
          </div>

          {session.heroes.length === 0 ? (
            <p className="text-[13.5px] text-muted">Keine Helden in dieser Kampagne.</p>
          ) : (
            <div className="grid gap-2.5 sm:grid-cols-2">
              {session.heroes.map((h) => (
                <div
                  key={h.localId}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-control border border-line bg-surface-2"
                >
                  <HeroAvatar hero={h} size={30} />
                  <div className="min-w-0 flex-1">
                    <p className="font-head text-[14px] font-semibold text-fg truncate">{heroShortName(h)}</p>
                    <p className="text-[12px] text-muted truncate">
                      {h.classId ? CLASS_BY_ID[h.classId]?.nameDe ?? '—' : 'ohne Klasse'}
                    </p>
                  </div>
                  <Stepper
                    value={draft.rewards.heroXp[h.localId] ?? 0}
                    max={20}
                    label={`XP für ${heroShortName(h)}`}
                    onChange={(n) =>
                      setScenario((sc) => ({
                        ...sc,
                        rewards: { ...sc.rewards, heroXp: { ...sc.rewards.heroXp, [h.localId]: n } },
                      }))
                    }
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-3 mt-3.5 pt-3.5 border-t border-line flex-wrap">
            <div className="flex-1 min-w-[10rem]">
              <Micro className="block mb-2">Partei-Gold aus diesem Szenario</Micro>
              <NumberField
                label="Partei-Gold"
                value={draft.rewards.partyGold}
                onChange={(n) => setScenario((sc) => ({ ...sc, rewards: { ...sc.rewards, partyGold: n } }))}
              />
            </div>
            <div>
              <Micro className="block mb-2">Overlord-XP</Micro>
              <Stepper
                value={draft.rewards.overlordXp}
                max={20}
                label="Overlord-XP"
                onChange={(n) => setScenario((sc) => ({ ...sc, rewards: { ...sc.rewards, overlordXp: n } }))}
              />
            </div>
          </div>

          {/* Marker */}
          <div className="flex gap-3.5 items-start mt-3 px-3.5 py-3 rounded-control border border-line bg-surface-2 flex-wrap">
            <div>
              <Micro className="block mb-2">Bedrohungsmarker</Micro>
              <Stepper
                value={threat}
                max={50}
                label="Bedrohungsmarker"
                onChange={(n) => setScenario((sc) => ({ ...sc, threatAfter: n }))}
              />
              <p className="mt-1.5 text-[12px] text-muted">Stand nach dem Szenario</p>
            </div>
            <div>
              <Micro className="block mb-2">Schicksalsmarker</Micro>
              <Stepper
                value={fate}
                max={50}
                label="Schicksalsmarker"
                onChange={(n) => setScenario((sc) => ({ ...sc, fateAfter: n }))}
              />
              <p className="mt-1.5 text-[12px] text-muted">Gemeinsamer Vorrat der Partei</p>
            </div>
            <div className="flex-1 min-w-[14rem] pl-3.5 border-l border-line">
              <p className="text-[13px] leading-[1.55] text-muted">
                Beide Zähler stehen hier, weil sie sich am Szenario-Ende ändern und danach niemand mehr im
                Overlord-Bereich nachpflegen soll. <strong className="font-semibold text-fg">Nach dem Einkaufsschritt</strong>{' '}
                legen die Helden alle Schicksalsmarker zurück — Schritt 4 erledigt das automatisch und zeigt es an.
              </p>
            </div>
          </div>
        </ThemeScope>

        {/* Belohnungskarten */}
        <div className="rounded-card border border-line bg-surface p-[18px]">
          <Head size="s">Belohnungskarten</Head>
          <p className="mt-1 mb-3.5 text-[13.5px] text-muted">
            Nur was dieses Szenario ausschüttet — mit Regeltext, damit klar ist, was ihr da bekommt.
          </p>
          <div className="flex flex-col gap-2.5">
            {rewardDecks.flatMap((deck) =>
              deck.cards.map((c) => {
                const key = cardKey(deck.id, c.id)
                return (
                  <CardTile
                    key={key}
                    title={c.nameDe}
                    eyebrowRight="OL-Karte"
                    rulesText={c.rulesDe}
                    thumbUrl={overlordCardDeUrl(c.id)}
                    thumbSize="xs"
                    dense
                    selected={draft.rewards.overlordCardIds.includes(key)}
                    onSelect={() => toggle('overlordCardIds', key)}
                  />
                )
              }),
            )}
            {overlordRelics.map((r) => (
              <CardTile
                key={r.id}
                title={r.nameDe}
                eyebrowRight="Relikt"
                rulesText={r.rulesDe}
                thumbUrl={relicCardDeUrl(r.id)}
                thumbSize="xs"
                dense
                selected={draft.rewards.overlordRelicIds.includes(r.id)}
                onSelect={() => toggle('overlordRelicIds', r.id)}
              />
            ))}
            {rewardDecks.length === 0 && overlordRelics.length === 0 && (
              <p className="text-[13px] text-muted">
                Keine Belohnungskarten in deiner Sammlung — erweiterbar über die Sammlung.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Erhaltene Gegenstände */}
      <ThemeScope theme="heldentum" className="rounded-card border border-line bg-surface p-[18px]">
        <div className="flex items-baseline justify-between gap-4 mb-3.5 flex-wrap">
          <div>
            <Head size="s">Erhaltene Gegenstände</Head>
            <p className="mt-1 text-[13.5px] text-muted">
              Zuweisen mit einem Klick auf ein Heldenkürzel — oder in die gemeinsame Ausrüstung legen.
            </p>
          </div>
          <Btn variant="secondary" size="sm" icon="plus" onClick={() => setPicker(true)}>
            Gegenstand wählen
          </Btn>
        </div>

        {draft.rewards.grantedItems.length === 0 ? (
          <p className="text-[13.5px] text-muted">Nichts erhalten.</p>
        ) : (
          <div className="flex flex-col gap-2.5">
            {draft.rewards.grantedItems.map((g) => (
              <div
                key={g.item.refId}
                className="flex items-start gap-3.5 px-3.5 py-3 rounded-control border border-line bg-surface-2 flex-wrap"
              >
                <CardThumb url={itemCardUrl(g.item)} name={resolveItemName(g.item)} size="row" />
                <div className="min-w-0 flex-1">
                  <p className="font-head text-[15px] font-semibold text-fg">{resolveItemName(g.item)}</p>
                  <Micro className="block mt-0.5">{itemSlotLabel(g.item)}</Micro>
                  <p className="mt-1.5 text-[13px] leading-[1.5] text-muted">
                    {renderGameText(itemRulesText(g.item) || 'Kein Regeltext hinterlegt.', 13)}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 flex-wrap">
                  <HeroChipRow
                    heroes={session.heroes}
                    value={g.toHeroLocalId}
                    label="An"
                    size={34}
                    onChange={(owner) =>
                      setScenario((sc) => ({
                        ...sc,
                        rewards: {
                          ...sc.rewards,
                          grantedItems: sc.rewards.grantedItems.map((x) =>
                            x.item.refId === g.item.refId ? { ...x, toHeroLocalId: owner } : x,
                          ),
                        },
                      }))
                    }
                  />
                  <Btn
                    variant="ghost"
                    size="sm"
                    icon="trash"
                    aria-label="Gegenstand entfernen"
                    onClick={() =>
                      setScenario((sc) => ({
                        ...sc,
                        rewards: {
                          ...sc.rewards,
                          grantedItems: sc.rewards.grantedItems.filter((x) => x.item.refId !== g.item.refId),
                        },
                      }))
                    }
                  >
                    Entfernen
                  </Btn>
                </div>
              </div>
            ))}
          </div>
        )}
        <Meta className="block mt-3">
          Stand vor dem Szenario: {base.partyGold} Gold. Belohnungen sind kostenlos — Käufe folgen in Schritt 4.
        </Meta>
      </ThemeScope>
    </div>
  )
}
