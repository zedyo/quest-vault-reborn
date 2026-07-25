// ── Flow-Schritt 1 · Ergebnis ────────────────────────────────────────────────
//
// Zwei Fragen: welches Szenario, und wie ist es ausgegangen. Der Vorschlag kommt
// aus dem Kampagnenpfad; gewählt werden darf auch jede Abenteuerkarte im Spiel.

import type { FlowStepProps } from './types'
import type { ScenarioSource } from '../../../types/session'
import { scenariosForCampaign } from '../../../data/campaignScenarios'
import { ADVANCED_QUESTS } from '../../../data/campaigns'
import { RUMORS } from '../../../data/rumors'
import { adventureOptions, ROLE_LABEL, suggestNext, terrainList } from '../scenarioSuggest'
import { RUMOR_META } from '../../../utils/rumorTiming'
import { deriveLiveState } from '../../../store/sessionDerive'
import { Head, Micro, Select, TextField, ThemeScope } from '../ui/controls'
import { Icon } from '../../QvIcons'

/** Feste Szenarien (Einführung/Zwischenspiel/Finale) tragen im Select ein ★. */
const FIXED_MARK = '★'

// Regelstand (CRRG, Kampagnenphase Schritt 3 „Belohnungen erhalten"): jeder
// Spieler — Held wie Overlord — erhält 1 Erfahrungspunkt, EGAL wer gewonnen hat.
// Die Vorbelegung folgt dem; überschreibbar bleibt sie ohnehin.
const OUTCOMES: { value: 'heroes' | 'overlord' | 'none'; icon: 'hero' | 'overlord' | 'info'; title: string; hint: string }[] = [
  { value: 'heroes', icon: 'hero', title: 'Helden gewonnen', hint: '+1 XP je Held, +1 OL-XP' },
  { value: 'overlord', icon: 'overlord', title: 'Overlord gewonnen', hint: '+1 XP je Held, +1 OL-XP' },
  { value: 'none', icon: 'info', title: 'Offen / abgebrochen', hint: 'Nichts wird vorbelegt' },
]

export default function Step1Outcome({ session, base, draft, setScenario, ownedExpansionIds }: FlowStepProps) {
  const pool = scenariosForCampaign(session.campaignId)
  const suggestion = suggestNext(session, base)
  const adventures = adventureOptions(session)
  const owns = (id: string) => ownedExpansionIds.includes(id)

  /** Vorbelegung der Belohnungen aus dem Ausgang (immer überschreibbar). */
  function setOutcome(outcome: 'heroes' | 'overlord' | 'none') {
    setScenario((sc) => {
      const heroXp: Record<string, number> = {}
      for (const h of session.heroes) heroXp[h.localId] = outcome === 'none' ? 0 : 1
      return {
        ...sc,
        outcome,
        rewards: {
          ...sc.rewards,
          heroXp,
          // 1 EP für jeden — unabhängig vom Ausgang (CRRG).
          overlordXp: outcome === 'none' ? 0 : 1,
          partyGold: outcome === 'none' ? 0 : sc.rewards.partyGold,
        },
      }
    })
  }

  function pickCampaign(id: string) {
    const s = pool.find((x) => x.id === id)
    if (!s) return
    setScenario((sc) => ({ ...sc, scenario: { source: 'campaign', dataId: s.id, title: s.titleDe, act: s.act } }))
  }
  function pickOther(source: ScenarioSource, dataId: string) {
    if (source === 'rumor') {
      const r = RUMORS.find((x) => x.id === dataId)
      if (r) setScenario((sc) => ({ ...sc, scenario: { source, dataId, title: r.nameDe, act: r.act === 2 ? 2 : 1 } }))
    } else if (source === 'advanced-quest') {
      const q = ADVANCED_QUESTS.find((x) => x.id === dataId)
      if (q) setScenario((sc) => ({ ...sc, scenario: { source, dataId, title: q.nameDe, act: q.act ?? 2 } }))
    }
  }

  const selectValue =
    draft.scenario.source === 'custom' ? 'custom' : `${draft.scenario.source}:${draft.scenario.dataId}`
  const suggested = suggestion.campaign
  const isSuggestionSelected =
    !!suggested && draft.scenario.source === 'campaign' && draft.scenario.dataId === suggested.id

  // Rolle des gewählten Szenarios → Verfallshinweis für liegen gebliebene
  // Abenteuerkarten (Zwischenspiel: Akt-I-Gerüchteabenteuer; Finale: Zusatzabenteuer).
  const role =
    draft.scenario.source === 'campaign' ? pool.find((s) => s.id === draft.scenario.dataId)?.role : undefined
  // Beide Hinweise nennen NUR die Karten, die den jeweiligen Satz auch tragen —
  // nicht jede Abenteuerkarte hat eine Verfalls- bzw. Finale-Klausel.
  const openRumorAdventures = adventures.filter(
    (a) => a.kind === 'rumor' && RUMOR_META[a.dataId]?.expiresAtActTransition,
  )
  const openQuests = adventures.filter(
    (a) => a.kind === 'advanced-quest' && RUMOR_META[a.dataId]?.overlordRewardIfUnplayed,
  )
  const titles = (list: typeof adventures) => list.map((a) => a.title).join(', ')
  const nRumor = openRumorAdventures.length
  const nQuest = openQuests.length
  const expiryHint =
    role === 'interlude' && nRumor > 0
      ? nRumor === 1
        ? `Mit dem Übergang zu Akt II verfällt 1 noch nicht gespieltes Gerüchteabenteuer (${titles(openRumorAdventures)}). Der Overlord erhält die auf der Karte genannte Belohnung — trage den Verfall danach unter „Abenteuerkarten im Spiel" ein.`
        : `Mit dem Übergang zu Akt II verfallen ${nRumor} noch nicht gespielte Gerüchteabenteuer (${titles(openRumorAdventures)}). Der Overlord erhält jeweils die auf der Karte genannte Belohnung — trage den Verfall danach unter „Abenteuerkarten im Spiel" ein.`
      : role === 'finale' && nQuest > 0
        ? nQuest === 1
          ? `Beim Aufbau des Finales ist 1 Zusatzabenteuer noch ungespielt (${titles(openQuests)}). Der Overlord darf 1 Overlordkarte ziehen.`
          : `Beim Aufbau des Finales sind ${nQuest} Zusatzabenteuer noch ungespielt (${titles(openQuests)}). Der Overlord darf je Karte 1 Overlordkarte ziehen.`
        : null

  return (
    <div className="px-5 py-6 sm:px-7 flex flex-col gap-6">
      <div>
        <Head>Welches Szenario habt ihr gespielt?</Head>
        <p className="mt-1 mb-3.5 text-[14px] text-muted">
          Der Vorschlag kommt aus dem Kampagnenpfad. Akt und Markt-Freischaltung ergeben sich daraus automatisch.
        </p>

        <div className="grid gap-3 lg:grid-cols-2">
          {suggested ? (
            <button
              type="button"
              onClick={() => pickCampaign(suggested.id)}
              className={`p-4 rounded-card border text-left flex items-start gap-3 transition-all ${
                isSuggestionSelected ? 'border-accent-line bg-accent-soft' : 'border-line bg-surface hover:border-accent-line'
              }`}
            >
              <span
                className={`w-5 h-5 shrink-0 mt-0.5 rounded-full inline-flex items-center justify-center ${
                  isSuggestionSelected ? 'bg-accent text-onaccent' : 'border border-line text-transparent'
                }`}
              >
                <Icon name="check" size={12} />
              </span>
              <span>
                <span className="block font-mono text-[9px] tracking-[0.2em] uppercase text-accent-bright">
                  Empfohlen · Akt {suggested.act === 2 ? 'II' : 'I'}
                </span>
                <span className="block mt-1.5 font-head text-[18px] font-bold text-fg">{suggested.titleDe}</span>
                <span className="block mt-1 text-[13.5px] text-muted">{suggestion.reason}</span>
              </span>
            </button>
          ) : (
            <div className="p-4 rounded-card border border-dashed border-line bg-surface">
              <Micro>Kein eindeutiger Vorschlag</Micro>
              <p className="mt-2 text-[13.5px] leading-[1.5] text-muted">
                Der Szenariobaum verzweigt hier — wähle das gespielte Szenario rechts aus der Liste. Die App rät nicht.
              </p>
            </div>
          )}

          <div className="p-4 rounded-card border border-line bg-surface flex flex-col gap-2.5">
            <Micro>Anderes Szenario</Micro>
            <Select
              label="Gespieltes Szenario"
              value={selectValue}
              onChange={(v) => {
                if (v === 'custom') {
                  setScenario((sc) => ({ ...sc, scenario: { source: 'custom', dataId: '', title: '', act: sc.scenario.act } }))
                  return
                }
                const [source, id] = v.split(':')
                if (source === 'campaign') pickCampaign(id)
                else pickOther(source as ScenarioSource, id)
              }}
            >
              <option value=":">– Szenario wählen –</option>
              {pool.some((s) => s.role) && (
                <optgroup label="★ Kampagnenbogen · feste Szenarien">
                  {pool
                    .filter((s) => s.role)
                    .map((s) => (
                      <option key={s.id} value={`campaign:${s.id}`}>
                        {FIXED_MARK} {ROLE_LABEL[s.role!]}: {s.titleDe}
                      </option>
                    ))}
                </optgroup>
              )}
              {[1, 2].map((act) => {
                const list = pool.filter((s) => s.act === act && !s.role)
                if (!list.length) return null
                return (
                  <optgroup key={act} label={`Kampagnenbogen · Akt ${act === 2 ? 'II' : 'I'}`}>
                    {list.map((s) => (
                      <option key={s.id} value={`campaign:${s.id}`}>
                        {s.titleDe}
                      </option>
                    ))}
                  </optgroup>
                )
              })}
              {adventures.some((a) => a.kind === 'rumor') && (
                <optgroup label="Gerüchteabenteuer im Spiel">
                  {adventures
                    .filter((a) => a.kind === 'rumor')
                    .map((a) => (
                      <option key={a.dataId} value={`rumor:${a.dataId}`}>
                        {a.title}
                      </option>
                    ))}
                </optgroup>
              )}
              {adventures.some((a) => a.kind === 'advanced-quest') && (
                <optgroup label="Zusatzabenteuer im Spiel">
                  {adventures
                    .filter((a) => a.kind === 'advanced-quest')
                    .map((a) => (
                      <option key={a.dataId} value={`advanced-quest:${a.dataId}`}>
                        {a.title}
                      </option>
                    ))}
                </optgroup>
              )}
              <optgroup label="Sonstiges">
                {RUMORS.filter((r) => owns(r.expansionId) && !adventures.some((a) => a.dataId === r.id)).map((r) => (
                  <option key={r.id} value={`rumor:${r.id}`}>
                    Gerücht: {r.nameDe}
                  </option>
                ))}
                <option value="custom">Freitext …</option>
              </optgroup>
            </Select>

            <p className="text-[13px] text-muted">
              Vier Gruppen: Kampagnenbogen (feste Szenarien mit ★) · Gerüchteabenteuer im Spiel · Zusatzabenteuer im
              Spiel · Freitext.
            </p>

            {draft.scenario.source === 'custom' && (
              <TextField
                label="Szenario-Name"
                value={draft.scenario.title}
                maxLength={120}
                placeholder="Szenario-Name …"
                onChange={(v) => setScenario((sc) => ({ ...sc, scenario: { ...sc.scenario, title: v } }))}
              />
            )}

            {adventures.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {adventures.map((a) => (
                  <button
                    key={a.dataId}
                    type="button"
                    onClick={() => pickOther(a.kind === 'rumor' ? 'rumor' : 'advanced-quest', a.dataId)}
                    title={a.travel.length ? `Reise: ${terrainList(a.travel)}` : undefined}
                    className={`inline-flex items-center gap-1.5 h-[30px] px-3 rounded-pill border text-[12.5px] whitespace-nowrap transition-colors ${
                      draft.scenario.dataId === a.dataId
                        ? 'border-accent bg-accent-soft text-fg'
                        : 'border-accent-line bg-accent-soft/60 text-fg hover:border-accent'
                    }`}
                  >
                    {a.title}
                    <span className="font-mono text-[8.5px] tracking-[0.1em] uppercase text-accent-bright">
                      {a.kind === 'rumor' ? 'Gerücht' : 'Zusatz'}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Verfalls-Hinweis: beim Zwischenspiel bzw. beim Aufbau des Finales geht
          liegen gebliebenen Abenteuerkarten die Zeit aus (Regeln der Karten). */}
      {expiryHint && (
        <div className="flex items-start gap-3 rounded-control border border-accent-line bg-accent-soft px-4 py-3">
          <span className="shrink-0 mt-0.5 text-accent-bright">
            <Icon name="warning" size={16} />
          </span>
          <p className="text-[13.5px] leading-[1.55] text-fg">{expiryHint}</p>
        </div>
      )}

      <div>
        <Head className="mb-3.5">Wie ist es ausgegangen?</Head>
        <div className="grid gap-3 sm:grid-cols-3">
          {OUTCOMES.map((o) => {
            const selected = draft.outcome === o.value
            const card = (
              <button
                type="button"
                onClick={() => setOutcome(o.value)}
                className={`w-full h-full p-4 rounded-card text-center transition-all ${
                  selected ? 'border-2 border-accent bg-accent-soft shadow-btn' : 'border border-line bg-surface hover:border-accent-line'
                }`}
              >
                <span className="inline-flex text-fg">
                  <Icon name={o.icon} size={24} />
                </span>
                <span className="block mt-2.5 font-head text-[17px] font-bold text-fg">{o.title}</span>
                <span className={`block mt-1 text-[13px] ${selected ? 'text-accent-bright' : 'text-muted'}`}>
                  {selected ? `Ausgewählt · ${o.hint}` : o.hint}
                </span>
              </button>
            )
            return o.value === 'heroes' ? (
              <ThemeScope key={o.value} theme="heldentum" className="h-full">
                {card}
              </ThemeScope>
            ) : (
              <div key={o.value} className="h-full">
                {card}
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-[200px_1fr] items-start">
        <div>
          <Micro className="block mb-2">Gespielt am</Micro>
          <TextField
            type="date"
            label="Gespielt am"
            value={draft.playedAt ?? ''}
            onChange={(v) => setScenario((sc) => ({ ...sc, playedAt: v || undefined }))}
          />
        </div>
        <div>
          <Micro className="block mb-2">Notiz (optional)</Micro>
          <TextField
            label="Notiz"
            value={draft.note ?? ''}
            maxLength={500}
            placeholder="Was solltet ihr euch merken?"
            onChange={(v) => setScenario((sc) => ({ ...sc, note: v || undefined }))}
          />
        </div>
      </div>

      {/* Akt des Szenarios – bestimmt den Markt-Stapel in Schritt 4. */}
      <div className="flex items-center gap-3 flex-wrap">
        <Micro>Akt</Micro>
        <div className="inline-flex h-12 sm:h-10 rounded-control border border-line overflow-hidden">
          {[1, 2].map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setScenario((sc) => ({ ...sc, scenario: { ...sc.scenario, act: a as 1 | 2 } }))}
              className={`px-4 text-[13.5px] font-head font-semibold transition-colors ${
                draft.scenario.act === a ? 'bg-accent text-onaccent' : 'bg-surface-2 text-muted hover:text-fg'
              }`}
            >
              Akt {a === 2 ? 'II' : 'I'}
            </button>
          ))}
        </div>
        <span className="text-[13px] text-muted">
          Aktueller Stand der Kampagne: Akt {deriveLiveState(session).currentAct === 2 ? 'II' : 'I'}
        </span>
      </div>
    </div>
  )
}
