// ── Flow-Schritt 5 · Overlord & Abschluss ────────────────────────────────────
//
// Der Overlord gibt seine XP aus, dann bestätigt eine Zusammenfassung alles, was
// sich ändert. Erst dieser Klick schreibt in den Spielstand.

import type { FlowStepProps } from './types'
import { draftGold, draftHeroXp } from './types'
import { OVERLORD_DECKS } from '../../../data/overlordClasses'
import { overlordCardDeUrl } from '../../../data/assetUrls'
import { heroShortName } from '../sessionHelpers'
import CardTile from '../ui/CardTile'
import { Btn, Head, Micro, Progress, Stepper, ThemeScope } from '../ui/controls'

const cardKey = (deckId: string, cardId: string) => `${deckId}:${cardId}`

export default function Step5Overlord({
  session,
  base,
  draft,
  setScenario,
  onFinish,
}: FlowStepProps & { onFinish: () => void }) {
  const budget = base.overlord.xpAvailable + draft.rewards.overlordXp
  const spent = draft.shopping.overlordCardsBought.reduce((n, c) => n + c.xpCost, 0)
  const left = budget - spent

  const decks = OVERLORD_DECKS.filter((d) => session.overlord.deckIds.includes(d.id))
  const buyableCount = decks.reduce(
    (n, d) => n + d.cards.filter((c) => typeof c.xpCost === 'number' && c.xpCost > 0).length,
    0,
  )
  const threat = draft.threatAfter ?? session.overlord.threatTokens

  const buyCount = (key: string) => draft.shopping.overlordCardsBought.filter((c) => c.cardId === key).length
  const setBuy = (key: string, n: number, xpCost: number) =>
    setScenario((sc) => ({
      ...sc,
      shopping: {
        ...sc.shopping,
        overlordCardsBought: [
          ...sc.shopping.overlordCardsBought.filter((c) => c.cardId !== key),
          ...Array.from({ length: Math.max(0, n) }, () => ({ cardId: key, xpCost })),
        ],
      },
    }))

  const heroXpTotal = draftHeroXp(draft)
  const grantedCount = draft.rewards.grantedItems.length
  const summary: [string, string][] = [
    ['Szenario', `${draft.scenario.title || 'Unbenannt'} · Akt ${draft.scenario.act === 2 ? 'II' : 'I'}`],
    [
      'Helden-XP',
      session.heroes.length
        ? session.heroes
            .map((h) => `${heroShortName(h)} +${draft.rewards.heroXp[h.localId] ?? 0}`)
            .join(' · ')
        : `${heroXpTotal} XP`,
    ],
    ['Partei-Gold', `${base.partyGold} → ${draftGold(base.partyGold, draft)}`],
    [
      'Gegenstände',
      `${grantedCount} erhalten · ${draft.shopping.bought.length} gekauft · ${draft.shopping.sold.length} verkauft`,
    ],
    [
      'Overlord',
      `XP ${base.overlord.xpAvailable} → ${left} · Bedrohung ${session.overlord.threatTokens} → ${threat} · ${draft.shopping.overlordCardsBought.length} Karten gekauft`,
    ],
  ]

  return (
    <ThemeScope theme="overlord" className="bg-bg grid xl:grid-cols-[1fr_380px] items-stretch">
      <div className="px-5 py-6 sm:px-6 flex flex-col gap-4">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <Head>Overlord-Karten kaufen</Head>
            <p className="mt-1 text-[14px] text-muted">
              {budget} XP verfügbar · Bedrohungsmarker aus dem Szenario mitschreiben
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Micro>Bedrohung</Micro>
            <Stepper
              value={threat}
              max={50}
              label="Bedrohungsmarker"
              onChange={(n) => setScenario((sc) => ({ ...sc, threatAfter: n }))}
            />
          </div>
        </div>

        <div className="flex items-center gap-3 px-3.5 py-3 rounded-control border border-line bg-surface flex-wrap">
          <Micro className="whitespace-nowrap">XP-Budget</Micro>
          <Progress className="flex-1 min-w-[8rem]" value={budget > 0 ? (spent / budget) * 100 : 0} />
          <span className="font-head text-[14px] font-semibold text-fg whitespace-nowrap">
            {spent} von {budget} XP ausgegeben
          </span>
        </div>

        {decks.length === 0 ? (
          <p className="text-[13.5px] text-muted">
            Keine Overlord-Decks gewählt — das passiert in der Einrichtung.
          </p>
        ) : buyableCount === 0 ? (
          <p className="text-[13.5px] text-muted">
            Die gewählten Decks enthalten keine kaufbaren Karten — Klassen-Decks kommen in der Einrichtung dazu.
          </p>
        ) : (
          <div className="flex flex-col gap-2.5">
            {decks.flatMap((deck) =>
              deck.cards
                .filter((c) => typeof c.xpCost === 'number' && c.xpCost > 0)
                .map((c) => {
                  const key = cardKey(deck.id, c.id)
                  const owned = base.overlord.ownedCardCounts[key] ?? 0
                  const max = Math.max(1, c.count)
                  const n = buyCount(key)
                  const xp = c.xpCost as number
                  const tooExpensive = n === 0 && xp > left
                  const soldOut = owned + n >= max
                  return (
                    <CardTile
                      key={key}
                      eyebrow={deck.nameDe}
                      title={c.nameDe}
                      cost={`${xp} XP`}
                      rulesText={c.rulesDe}
                      thumbUrl={overlordCardDeUrl(c.id)}
                      thumbSize="row"
                      selected={n > 0}
                      disabled={tooExpensive}
                      onSelect={() => !tooExpensive && setBuy(key, n > 0 ? 0 : 1, xp)}
                      state={
                        tooExpensive
                          ? `Zu teuer — ${left} von ${xp} XP`
                          : owned > 0
                            ? `${owned} von ${max} Exemplaren im Deck`
                            : undefined
                      }
                      copies={max > 1 && !tooExpensive ? `${owned + n}/${max}×` : undefined}
                      footer={
                        max > 1 && !tooExpensive ? (
                          <Stepper
                            value={n}
                            max={Math.max(0, max - owned)}
                            label={`${c.nameDe} kaufen`}
                            onChange={(v) => setBuy(key, v, xp)}
                          />
                        ) : soldOut && n === 0 ? (
                          <span className="font-mono text-[9.5px] tracking-[0.12em] uppercase text-faint">
                            Alle Exemplare im Deck
                          </span>
                        ) : undefined
                      }
                    />
                  )
                }),
            )}
          </div>
        )}
      </div>

      <aside className="border-t xl:border-t-0 xl:border-l border-line bg-surface-2 px-5 py-6 sm:px-[22px] flex flex-col gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-bright">Zusammenfassung</span>
          <Head className="mt-2">Das wird gespeichert</Head>
        </div>
        <div className="flex flex-col">
          {summary.map(([label, value]) => (
            <div key={label} className="py-2.5 border-b border-line">
              <Micro>{label}</Micro>
              <p className="mt-1.5 text-[13.5px] leading-[1.5] text-fg">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-2.5">
          <Btn block onClick={onFinish}>
            Szenario abschließen
          </Btn>
          <p className="text-center text-[12.5px] text-faint">Jederzeit im Verlauf korrigierbar</p>
        </div>
      </aside>
    </ThemeScope>
  )
}
