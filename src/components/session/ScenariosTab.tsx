// Szenarien-Tab (Phase 2): Protokoll der gespielten Szenarien. Liste ↔ Inline-
// Editor. Je Szenario werden Belohnungen (pro Held XP, Overlord-XP, Partei-Gold,
// erhaltene Items/Relikte/Belohnungskarten) und Einkauf (kaufen/verkaufen,
// Fähigkeiten lernen, Overlord-Karten kaufen) erfasst. Die Anrechnung auf den
// Live-Stand passiert automatisch über deriveLiveState (kein Code hier).

import { useMemo, useState } from 'react'
import type {
  CampaignSession,
  ItemRef,
  PlayedScenario,
  ScenarioSource,
} from '../../types/session'
import type { LiveState } from '../../store/sessionDerive'
import { scenariosForCampaign } from '../../data/campaignScenarios'
import { ADVANCED_QUESTS } from '../../data/campaigns'
import { RUMORS } from '../../data/rumors'
import { RELICS } from '../../data/items'
import { OVERLORD_DECKS } from '../../data/overlordClasses'
import { SegmentedControl } from '../Filters'
import ItemPicker from './ItemPicker'
import { ChipToggle, ItemThumb, NumberInput, QtyStepper, SubHeading, TextInput } from './ui'
import {
  CLASS_BY_ID,
  heroDisplayName,
  itemBaseCost,
  resolveItemName,
  sellRefund,
  skillCost,
  uid,
} from './sessionHelpers'

const SOURCE_OPTIONS: { value: ScenarioSource; label: string }[] = [
  { value: 'campaign', label: 'Kampagne' },
  { value: 'advanced-quest', label: 'Nebenquest' },
  { value: 'rumor', label: 'Gerücht' },
  { value: 'custom', label: 'Freitext' },
]

const cardKey = (deckId: string, cardId: string) => `${deckId}:${cardId}`

/** Feste Sonderszenarien (Einführung/Zwischenspiel/Finale) – Anzeige + Symbol. */
type ScenarioRole = 'intro' | 'interlude' | 'finale'
const ROLE_LABEL: Record<ScenarioRole, string> = { intro: 'Einführung', interlude: 'Zwischenspiel', finale: 'Finale' }
const ROLE_SYMBOL: Record<ScenarioRole, string> = { intro: '▶', interlude: '◆', finale: '★' }

const INPUT =
  'w-full bg-dungeon-900 border border-dungeon-700 rounded px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-gold-500'

/** Ganzzahl aus einem Input, geklemmt auf [0, max] (NaN/Infinity → 0). */
function clampInt(raw: string, max: number): number {
  const n = Math.floor(Number(raw))
  return Number.isFinite(n) ? Math.max(0, Math.min(max, n)) : 0
}

function blankScenario(order: number): PlayedScenario {
  return {
    id: uid(),
    order,
    scenario: { source: 'campaign', dataId: '', title: '', act: 1 },
    outcome: 'none',
    rewards: { heroXp: {}, overlordXp: 0, partyGold: 0, grantedItems: [], overlordCardIds: [], overlordRelicIds: [] },
    shopping: { bought: [], sold: [], skillsLearned: [], overlordCardsBought: [] },
  }
}

// ── Editor ────────────────────────────────────────────────────────────────────

function ScenarioEditor({
  initial,
  session,
  live,
  ownedExpansionIds,
  onSave,
  onCancel,
}: {
  initial: PlayedScenario
  session: CampaignSession
  live: LiveState
  ownedExpansionIds: string[]
  onSave: (sc: PlayedScenario) => void
  onCancel: () => void
}) {
  const [draft, setDraft] = useState<PlayedScenario>(initial)
  const [picker, setPicker] = useState<'grant' | 'buy' | null>(null)

  const owns = (expansionId: string) => ownedExpansionIds.includes(expansionId)
  const campaignScenarios = scenariosForCampaign(session.campaignId)
  const heroes = session.heroes

  // Aktuell besessene Gegenstände (für den Verkaufs-Picker), refId → ItemRef.
  const ownedRefs = useMemo(() => {
    const map = new Map<string, ItemRef>()
    for (const h of session.heroes) for (const r of live.heroes[h.localId]?.ownedItemRefs ?? []) map.set(r.refId, r)
    for (const r of live.partyItemRefs) map.set(r.refId, r)
    return map
  }, [session.heroes, live])

  const rewardDecks = OVERLORD_DECKS.filter((d) => d.kind === 'reward' && owns(d.expansionId))
  const overlordRelics = RELICS.filter((r) => r.side === 'overlord' && owns(r.expansionId))
  const classDecks = OVERLORD_DECKS.filter((d) => session.overlord.deckIds.includes(d.id))

  // Rolle des gewählten Kampagnen-Szenarios (Einführung/Zwischenspiel/Finale) – u. a. für den Akt-Filter beim Kauf.
  const selectedCampaignScenario =
    draft.scenario.source === 'campaign' ? campaignScenarios.find((s) => s.id === draft.scenario.dataId) : undefined
  const buyActFilter: 1 | 2 | 'both' =
    selectedCampaignScenario?.role === 'interlude' ? 'both' : draft.scenario.act

  // Funktionale Updates → keine Stale-Closure, wenn der ItemPicker onPick aufruft.
  const patch = (p: Partial<PlayedScenario>) => setDraft((d) => ({ ...d, ...p }))
  const patchRewards = (p: Partial<PlayedScenario['rewards']>) => setDraft((d) => ({ ...d, rewards: { ...d.rewards, ...p } }))
  const patchShopping = (p: Partial<PlayedScenario['shopping']>) => setDraft((d) => ({ ...d, shopping: { ...d.shopping, ...p } }))

  function setSource(source: ScenarioSource) {
    patch({ scenario: { source, dataId: '', title: source === 'custom' ? draft.scenario.title : '', act: draft.scenario.act } })
  }
  function toggleReward(field: 'overlordCardIds' | 'overlordRelicIds', id: string) {
    const arr = draft.rewards[field]
    patchRewards({ [field]: arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id] } as Partial<PlayedScenario['rewards']>)
  }
  function ownerSelect(value: string | null, onChange: (v: string | null) => void) {
    return (
      <select value={value ?? ''} onChange={(e) => onChange(e.target.value || null)} className={`${INPUT} w-40`}>
        <option value="">Gemeinsame Ausrüstung</option>
        {heroes.map((h) => (
          <option key={h.localId} value={h.localId}>
            {heroDisplayName(h)}
          </option>
        ))}
      </select>
    )
  }

  const scenarioValid = draft.scenario.source === 'custom' ? !!draft.scenario.title.trim() : !!draft.scenario.dataId

  return (
    <div className="space-y-4">
      {picker && (
        <ItemPicker
          ownedExpansionIds={ownedExpansionIds}
          title={picker === 'grant' ? 'Erhaltenen Gegenstand wählen' : 'Gekauften Gegenstand wählen'}
          actFilter={picker === 'buy' ? buyActFilter : undefined}
          onPick={(item) =>
            picker === 'grant'
              ? setDraft((d) => ({ ...d, rewards: { ...d.rewards, grantedItems: [...d.rewards.grantedItems, { toHeroLocalId: null, item }] } }))
              : setDraft((d) => ({ ...d, shopping: { ...d.shopping, bought: [...d.shopping.bought, { toHeroLocalId: null, item, price: itemBaseCost(item) }] } }))
          }
          onClose={() => setPicker(null)}
        />
      )}

      <div className="flex items-center gap-3">
        <button onClick={onCancel} className="btn-secondary text-sm">← Zurück</button>
        <h3 className="font-display text-lg text-gold-300 font-bold">
          {draft.scenario.title || 'Neues Szenario'}
        </h3>
        <button
          onClick={() => onSave(draft)}
          disabled={!scenarioValid}
          className="btn-primary text-sm ml-auto disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Speichern
        </button>
      </div>

      {/* Szenario-Wahl */}
      <div className="card space-y-3">
        <SubHeading>Gespieltes Szenario</SubHeading>
        <SegmentedControl<ScenarioSource> value={draft.scenario.source} onChange={setSource} options={SOURCE_OPTIONS} />

        {draft.scenario.source === 'campaign' && (
          <select
            className={INPUT}
            value={draft.scenario.dataId}
            onChange={(e) => {
              const sc = campaignScenarios.find((s) => s.id === e.target.value)
              if (sc) patch({ scenario: { source: 'campaign', dataId: sc.id, title: sc.titleDe, act: sc.act } })
            }}
          >
            <option value="">– Szenario wählen –</option>
            {campaignScenarios.some((s) => s.role) && (
              <optgroup label="★ Feste Szenarien">
                {campaignScenarios
                  .filter((s) => s.role)
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      {ROLE_SYMBOL[s.role as ScenarioRole]} {ROLE_LABEL[s.role as ScenarioRole]}: {s.titleDe}
                    </option>
                  ))}
              </optgroup>
            )}
            {[1, 2].map((act) => {
              const list = campaignScenarios.filter((s) => s.act === act && !s.role)
              if (!list.length) return null
              return (
                <optgroup key={act} label={`Akt ${act} · weitere Szenarien`}>
                  {list.map((s) => (
                    <option key={s.id} value={s.id}>{s.titleDe}</option>
                  ))}
                </optgroup>
              )
            })}
          </select>
        )}
        {draft.scenario.source === 'advanced-quest' && (
          <select
            className={INPUT}
            value={draft.scenario.dataId}
            onChange={(e) => {
              const q = ADVANCED_QUESTS.find((x) => x.id === e.target.value)
              if (q) patch({ scenario: { source: 'advanced-quest', dataId: q.id, title: q.nameDe, act: q.act ?? 2 } })
            }}
          >
            <option value="">– Nebenquest wählen –</option>
            {ADVANCED_QUESTS.filter((q) => owns(q.expansionId)).map((q) => (
              <option key={q.id} value={q.id}>{q.nameDe}</option>
            ))}
          </select>
        )}
        {draft.scenario.source === 'rumor' && (
          <select
            className={INPUT}
            value={draft.scenario.dataId}
            onChange={(e) => {
              const r = RUMORS.find((x) => x.id === e.target.value)
              if (r) patch({ scenario: { source: 'rumor', dataId: r.id, title: r.nameDe, act: r.act ?? 1 } })
            }}
          >
            <option value="">– Gerücht wählen –</option>
            {RUMORS.filter((r) => owns(r.expansionId)).map((r) => (
              <option key={r.id} value={r.id}>{r.nameDe}</option>
            ))}
          </select>
        )}
        {draft.scenario.source === 'custom' && (
          <TextInput
            value={draft.scenario.title}
            onChange={(v) => patch({ scenario: { ...draft.scenario, title: v } })}
            placeholder="Szenario-Name…"
          />
        )}

        <div className="flex flex-wrap items-end gap-4">
          <div>
            <span className="block text-xs font-semibold text-gold-400 mb-1">Akt</span>
            <SegmentedControl<1 | 2>
              value={draft.scenario.act}
              onChange={(v) => patch({ scenario: { ...draft.scenario, act: v } })}
              options={[{ value: 1, label: 'Akt 1' }, { value: 2, label: 'Akt 2' }]}
            />
          </div>
          <div>
            <span className="block text-xs font-semibold text-gold-400 mb-1">Ausgang</span>
            <SegmentedControl<'heroes' | 'overlord' | 'none'>
              value={draft.outcome}
              onChange={(v) => patch({ outcome: v })}
              options={[
                { value: 'heroes', label: 'Helden' },
                { value: 'overlord', label: 'Overlord' },
                { value: 'none', label: 'offen' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Belohnungen */}
      <div className="card space-y-3">
        <SubHeading hint="Werden automatisch auf den Live-Stand angerechnet.">Belohnungen</SubHeading>

        {heroes.length > 0 && (
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-600 mb-1">Helden-XP</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {heroes.map((h) => (
                <div key={h.localId} className="block">
                  <span className="block text-[11px] text-gray-400 mb-0.5 truncate">{heroDisplayName(h)}</span>
                  <QtyStepper
                    value={draft.rewards.heroXp[h.localId] ?? 0}
                    max={99}
                    title={`XP für ${heroDisplayName(h)}`}
                    onChange={(v) => patchRewards({ heroXp: { ...draft.rewards.heroXp, [h.localId]: v } })}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-end gap-4">
          <div>
            <span className="block text-xs font-semibold text-gold-400 mb-1">Overlord-XP</span>
            <QtyStepper value={draft.rewards.overlordXp} max={99} title="Overlord-XP" onChange={(v) => patchRewards({ overlordXp: v })} />
          </div>
          <NumberInput label="Partei-Gold" value={draft.rewards.partyGold} onChange={(v) => patchRewards({ partyGold: v })} max={100000} />
        </div>

        {/* Erhaltene Gegenstände */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-[10px] uppercase tracking-wider text-gray-600">Erhaltene Gegenstände</p>
            <button onClick={() => setPicker('grant')} className="btn-secondary text-xs">+ Item</button>
          </div>
          {draft.rewards.grantedItems.length === 0 ? (
            <p className="text-gray-600 text-xs">Keine.</p>
          ) : (
            <div className="space-y-2">
              {draft.rewards.grantedItems.map((g) => (
                <div key={g.item.refId} className="flex items-start gap-2">
                  <ItemThumb item={g.item} />
                  <div className="flex-1 min-w-0 space-y-1">
                    <p className="font-medium text-gray-100 text-sm break-words">{resolveItemName(g.item)}</p>
                    <div className="flex items-center gap-2">
                      {ownerSelect(g.toHeroLocalId, (owner) =>
                        patchRewards({
                          grantedItems: draft.rewards.grantedItems.map((x) =>
                            x.item.refId === g.item.refId ? { ...x, toHeroLocalId: owner } : x,
                          ),
                        }),
                      )}
                      <button
                        onClick={() => patchRewards({ grantedItems: draft.rewards.grantedItems.filter((x) => x.item.refId !== g.item.refId) })}
                        className="text-gray-500 hover:text-red-400 text-lg leading-none ml-auto"
                        title="Entfernen"
                      >×</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Overlord-Belohnungskarten */}
        {rewardDecks.length > 0 && (
          <details>
            <summary className="cursor-pointer text-xs text-gray-400 select-none">
              Overlord-Belohnungskarten ({draft.rewards.overlordCardIds.length})
            </summary>
            <div className="mt-2 space-y-2">
              {rewardDecks.map((deck) => (
                <div key={deck.id}>
                  <p className="text-[10px] text-gray-600">{deck.nameDe}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {deck.cards.map((c) => {
                      const key = cardKey(deck.id, c.id)
                      return (
                        <ChipToggle key={key} active={draft.rewards.overlordCardIds.includes(key)} onClick={() => toggleReward('overlordCardIds', key)} title={c.rulesDe}>
                          {c.nameDe}
                        </ChipToggle>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </details>
        )}

        {/* Overlord-Relikte */}
        {overlordRelics.length > 0 && (
          <details>
            <summary className="cursor-pointer text-xs text-gray-400 select-none">
              Overlord-Relikte ({draft.rewards.overlordRelicIds.length})
            </summary>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {overlordRelics.map((r) => (
                <ChipToggle key={r.id} active={draft.rewards.overlordRelicIds.includes(r.id)} onClick={() => toggleReward('overlordRelicIds', r.id)} title={r.rulesDe}>
                  {r.nameDe}
                </ChipToggle>
              ))}
            </div>
          </details>
        )}
      </div>

      {/* Einkauf */}
      <div className="card space-y-3">
        <SubHeading hint="Käufe kosten Gold, Verkäufe erstatten Gold, gelernte Fähigkeiten kosten XP.">Einkauf & Ausbildung</SubHeading>

        {/* Kaufen */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-[10px] uppercase tracking-wider text-gray-600">
              Gekauft
              <span className="normal-case tracking-normal text-gray-600">
                {' '}· Markt {buyActFilter === 'both' ? 'Akt 1 + 2 (Zwischenspiel)' : `Akt ${buyActFilter}`}
              </span>
            </p>
            <button onClick={() => setPicker('buy')} className="btn-secondary text-xs">+ Kaufen</button>
          </div>
          {draft.shopping.bought.length === 0 ? (
            <p className="text-gray-600 text-xs">Nichts gekauft.</p>
          ) : (
            <div className="space-y-2">
              {draft.shopping.bought.map((b) => (
                <div key={b.item.refId} className="flex items-start gap-2">
                  <ItemThumb item={b.item} />
                  <div className="flex-1 min-w-0 space-y-1">
                    <p className="font-medium text-gray-100 text-sm break-words">{resolveItemName(b.item)}</p>
                    <div className="flex items-center gap-2">
                      {ownerSelect(b.toHeroLocalId, (owner) =>
                        patchShopping({ bought: draft.shopping.bought.map((x) => (x.item.refId === b.item.refId ? { ...x, toHeroLocalId: owner } : x)) }),
                      )}
                      <label className="flex items-center gap-1 text-[11px] text-gray-500">
                        Preis
                        <input
                          type="number"
                          min={0}
                          max={100000}
                          value={b.price}
                          onChange={(e) =>
                            patchShopping({ bought: draft.shopping.bought.map((x) => (x.item.refId === b.item.refId ? { ...x, price: clampInt(e.target.value, 100000) } : x)) })
                          }
                          className={`${INPUT} w-20`}
                          title="Preis (Gold)"
                        />
                      </label>
                      <button onClick={() => patchShopping({ bought: draft.shopping.bought.filter((x) => x.item.refId !== b.item.refId) })} className="text-gray-500 hover:text-red-400 text-lg leading-none ml-auto" title="Entfernen">×</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Verkaufen */}
        <div>
          <p className="text-[10px] uppercase tracking-wider text-gray-600 mb-1">Verkauft</p>
          <select
            className={`${INPUT} mb-1.5`}
            value=""
            onChange={(e) => {
              const ref = ownedRefs.get(e.target.value)
              if (ref) patchShopping({ sold: [...draft.shopping.sold, { refId: ref.refId, refund: sellRefund(ref) }] })
            }}
          >
            <option value="">+ Gegenstand aus dem Besitz verkaufen…</option>
            {[...ownedRefs.values()]
              .filter((r) => !draft.shopping.sold.some((s) => s.refId === r.refId))
              .map((r) => (
                <option key={r.refId} value={r.refId}>{resolveItemName(r)}</option>
              ))}
          </select>
          {draft.shopping.sold.length > 0 && (
            <div className="space-y-2">
              {draft.shopping.sold.map((s) => {
                const ref = ownedRefs.get(s.refId)
                return (
                  <div key={s.refId} className="flex items-start gap-2">
                    {ref && <ItemThumb item={ref} />}
                    <div className="flex-1 min-w-0 space-y-1">
                      <p className="font-medium text-gray-100 text-sm break-words">{ref ? resolveItemName(ref) : s.refId}</p>
                      <div className="flex items-center gap-2">
                        <label className="flex items-center gap-1 text-[11px] text-gray-500">
                          Erlös
                          <input
                            type="number"
                            min={0}
                            max={100000}
                            value={s.refund}
                            onChange={(e) =>
                              patchShopping({ sold: draft.shopping.sold.map((x) => (x.refId === s.refId ? { ...x, refund: clampInt(e.target.value, 100000) } : x)) })
                            }
                            className={`${INPUT} w-20`}
                            title="Erlös (Gold)"
                          />
                        </label>
                        <button onClick={() => patchShopping({ sold: draft.shopping.sold.filter((x) => x.refId !== s.refId) })} className="text-gray-500 hover:text-red-400 text-lg leading-none ml-auto" title="Entfernen">×</button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Gelernte Fähigkeiten */}
        {heroes.some((h) => h.classId) && (
          <details>
            <summary className="cursor-pointer text-xs text-gray-400 select-none">
              Gelernte Fähigkeiten ({draft.shopping.skillsLearned.length})
            </summary>
            <div className="mt-2 space-y-2">
              {heroes.map((h) => {
                const cls = h.classId ? CLASS_BY_ID[h.classId] : null
                if (!cls) return null
                const known = new Set(live.heroes[h.localId]?.ownedSkillIds ?? [])
                const buyable = cls.skills.filter((s) => typeof s.xpCost === 'number' && s.xpCost > 0 && !known.has(s.id))
                if (!buyable.length) return null
                return (
                  <div key={h.localId}>
                    <p className="text-[10px] text-gray-600">{heroDisplayName(h)}</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {buyable.map((s) => {
                        const active = draft.shopping.skillsLearned.some((l) => l.heroLocalId === h.localId && l.skillId === s.id)
                        return (
                          <ChipToggle
                            key={s.id}
                            active={active}
                            title={s.rulesDe}
                            onClick={() =>
                              patchShopping({
                                skillsLearned: active
                                  ? draft.shopping.skillsLearned.filter((l) => !(l.heroLocalId === h.localId && l.skillId === s.id))
                                  : [...draft.shopping.skillsLearned, { heroLocalId: h.localId, skillId: s.id, xpCost: skillCost(s) }],
                              })
                            }
                          >
                            {s.nameDe} <span className="opacity-60">· {skillCost(s)} XP</span>
                          </ChipToggle>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </details>
        )}

        {/* Gekaufte Overlord-Karten */}
        {classDecks.length > 0 && (
          <details>
            <summary className="cursor-pointer text-xs text-gray-400 select-none">
              Gekaufte Overlord-Karten ({draft.shopping.overlordCardsBought.length})
            </summary>
            <div className="mt-2 space-y-2">
              {classDecks.map((deck) => {
                const buyable = deck.cards.filter((c) => typeof c.xpCost === 'number' && c.xpCost > 0)
                if (!buyable.length) return null
                return (
                  <div key={deck.id}>
                    <p className="text-[10px] text-gray-600">{deck.nameDe}</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {buyable.map((c) => {
                        const key = cardKey(deck.id, c.id)
                        const max = Math.max(1, c.count)
                        const cur = draft.shopping.overlordCardsBought.filter((x) => x.cardId === key).length
                        const setN = (n: number) =>
                          setDraft((d) => ({
                            ...d,
                            shopping: {
                              ...d.shopping,
                              overlordCardsBought: [
                                ...d.shopping.overlordCardsBought.filter((x) => x.cardId !== key),
                                ...Array.from({ length: Math.max(0, n) }, () => ({ cardId: key, xpCost: c.xpCost as number })),
                              ],
                            },
                          }))
                        if (max > 1) {
                          return (
                            <QtyStepper key={key} value={cur} max={max} onChange={setN} title={c.rulesDe} label={`${c.nameDe} · ${c.xpCost} XP`} />
                          )
                        }
                        return (
                          <ChipToggle key={key} active={cur > 0} title={c.rulesDe} onClick={() => setN(cur > 0 ? 0 : 1)}>
                            {c.nameDe} <span className="opacity-60">· {c.xpCost} XP</span>
                          </ChipToggle>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </details>
        )}
      </div>
    </div>
  )
}

// ── Liste ─────────────────────────────────────────────────────────────────────

function scenarioSummary(sc: PlayedScenario): string {
  const parts: string[] = []
  const totalHeroXp = Object.values(sc.rewards.heroXp).reduce((a, b) => a + b, 0)
  if (totalHeroXp) parts.push(`${totalHeroXp} Helden-XP`)
  if (sc.rewards.overlordXp) parts.push(`${sc.rewards.overlordXp} OL-XP`)
  if (sc.rewards.partyGold) parts.push(`${sc.rewards.partyGold} Gold`)
  const items = sc.rewards.grantedItems.length + sc.shopping.bought.length
  if (items) parts.push(`${items} Items`)
  return parts.join(' · ') || 'keine Belohnungen erfasst'
}

const OUTCOME_LABEL: Record<PlayedScenario['outcome'], string> = {
  heroes: 'Helden gewonnen',
  overlord: 'Overlord gewonnen',
  none: 'offen',
}

export default function ScenariosTab({
  session,
  live,
  ownedExpansionIds,
  onSaveScenario,
  onRequestDelete,
}: {
  session: CampaignSession
  live: LiveState
  ownedExpansionIds: string[]
  onSaveScenario: (sc: PlayedScenario) => void
  onRequestDelete: (id: string, name: string) => void
}) {
  const [editing, setEditing] = useState<PlayedScenario | null>(null)
  const sorted = useMemo(() => [...session.scenarios].sort((a, b) => a.order - b.order), [session.scenarios])
  const nextOrder = sorted.length ? sorted[sorted.length - 1].order + 1 : 1
  const campaignScenarios = scenariosForCampaign(session.campaignId)
  const roleOf = (sc: PlayedScenario): ScenarioRole | undefined =>
    sc.scenario.source === 'campaign'
      ? (campaignScenarios.find((x) => x.id === sc.scenario.dataId)?.role as ScenarioRole | undefined)
      : undefined

  if (editing) {
    return (
      <ScenarioEditor
        initial={editing}
        session={session}
        live={live}
        ownedExpansionIds={ownedExpansionIds}
        onSave={(sc) => {
          onSaveScenario(sc)
          setEditing(null)
        }}
        onCancel={() => setEditing(null)}
      />
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-gray-400 text-sm">
          {sorted.length} Szenario{sorted.length === 1 ? '' : 's'} protokolliert · aktueller Akt {live.currentAct}
        </p>
        <button onClick={() => setEditing(blankScenario(nextOrder))} className="btn-primary text-sm">+ Szenario</button>
      </div>

      {sorted.length === 0 ? (
        <div className="card text-center text-gray-500 py-12">
          Noch kein Szenario protokolliert. Trage nach dem Spielen ein Szenario mit seinen Belohnungen ein.
        </div>
      ) : (
        <div className="space-y-2">
          {sorted.map((sc, i) => (
            <div key={sc.id} className="card flex items-center gap-3">
              <span className="font-display text-gold-400 font-bold text-lg w-8 text-center">{i + 1}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-gold-300 font-semibold truncate">{sc.scenario.title || 'Unbenannt'}</h4>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-dungeon-700 text-gray-400 shrink-0">Akt {sc.scenario.act}</span>
                  {roleOf(sc) && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-600/40 shrink-0">
                      {ROLE_SYMBOL[roleOf(sc)!]} {ROLE_LABEL[roleOf(sc)!]}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-xs truncate">{OUTCOME_LABEL[sc.outcome]} · {scenarioSummary(sc)}</p>
              </div>
              <button onClick={() => setEditing(sc)} className="btn-secondary text-xs shrink-0">Bearbeiten</button>
              <button onClick={() => onRequestDelete(sc.id, sc.scenario.title || 'Szenario')} className="text-gray-600 hover:text-red-400 shrink-0" title="Szenario löschen">🗑</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
