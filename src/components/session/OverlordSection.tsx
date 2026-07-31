// ── Screen 6 · Overlord — Kommandozentrale ───────────────────────────────────
//
// Der Leutnant ist eine echte Karte mit Werten und Fähigkeitstext; Plotdeck,
// spielbare Gerüchte und Relikte stehen als lesbare Karten daneben — keine
// Chip-Wand in einem Aufklapper mehr.

import { Link } from 'react-router'
import { useSessionCtx } from './context'
import { LIEUTENANTS } from '../../data/lieutenants'
import { PLOT_DECKS } from '../../data/plotDecks'
import { RUMORS } from '../../data/rumors'
import { RELICS } from '../../data/items'
import { lieutenantCardDeUrl, plotCardDeUrl, relicCardDeUrl } from '../../data/assetUrls'
import { RUMOR_META, rumorPlayableNow } from '../../utils/rumorTiming'
import { intermezzoSelectable } from './scenarioSuggest'
import CardTile from './ui/CardTile'
import CardThumb from './ui/CardThumb'
import { renderGameText } from '../GameSymbols'
import { DiceRow } from '../DiceDisplay'
import { HealthIcon, SpeedIcon } from '../StatIcons'
import { Badge, Eyebrow, Head, LinkBtn, Meta, Micro, Stepper, ThemeScope } from './ui/controls'

export default function OverlordSection() {
  const { session, live, patchOverlord } = useSessionCtx()
  const ol = session.overlord

  const lieutenant = LIEUTENANTS.find((l) => l.id === ol.lieutenantId) ?? null
  const form = lieutenant?.forms.find((f) => f.act === live.currentAct) ?? lieutenant?.forms[0] ?? null
  const stats = form?.perPlayer[`p${session.playerCount}` as 'p2' | 'p3' | 'p4']
  const plotDeck = PLOT_DECKS.find((d) => d.id === ol.plotDeckId) ?? null
  const ownedPlot = new Set(ol.ownedPlotCardIds)
  const relics = RELICS.filter((r) => r.side === 'overlord' && live.overlord.ownedRelicIds.includes(r.id))

  // Gerüchte mit Effekt, die JETZT (zu Beginn der Kampagnenphase) spielbar wären.
  const ctx = {
    step: 'campaign-phase-start' as const,
    act: live.currentAct,
    intermezzoSelectable: intermezzoSelectable(session, live),
    rumorAlreadyPlayedThisPhase: live.rumorPlayedInCurrentPhase,
  }
  const inPlay = session.rumors.filter((r) => r.status === 'in-play')
  const effectRumors = inPlay
    .map((t) => RUMORS.find((r) => r.id === t.rumorId))
    .filter((r): r is NonNullable<typeof r> => !!r)
    .filter((r) => !RUMOR_META[r.id]?.hasAdventure)
    .map((r) => ({ rumor: r, meta: RUMOR_META[r.id], play: rumorPlayableNow(RUMOR_META[r.id], ctx) }))
  const playableNow = effectRumors.filter((e) => e.play.playable)

  return (
    <ThemeScope theme="overlord" className="bg-bg min-h-full p-5 sm:px-7 sm:py-6 flex flex-col gap-5">
      <div className="grid gap-[18px] xl:grid-cols-[1fr_336px] items-start">
        {/* Leutnantskarte */}
        <div className="rounded-card border border-accent-line bg-surface shadow-card overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-[18px] p-5">
            <div
              className="w-[150px] h-[212px] shrink-0 rounded-card border border-accent-line flex items-end p-2.5 overflow-hidden relative"
              style={{
                background:
                  'repeating-linear-gradient(135deg, var(--qv-accent-soft) 0 8px, transparent 8px 16px), radial-gradient(circle at 50% 32%, var(--qv-accent-soft), transparent 70%), var(--qv-surface-2)',
              }}
            >
              {lieutenant && form ? (
                <CardThumb
                  url={lieutenantCardDeUrl(lieutenant.id, form.act)}
                  name={lieutenant.nameDe}
                  size="tile"
                  hideOnMobile={false}
                />
              ) : (
                <Badge mono>Leutnantskarte</Badge>
              )}
            </div>

            <div className="min-w-0 flex-1 flex flex-col gap-3.5">
              <div>
                <Eyebrow className="!text-accent-bright">
                  Leutnant{form ? ` · Akt ${form.act === 2 ? 'II' : 'I'}` : ''}
                </Eyebrow>
                <h3 className="mt-2 font-display text-[32px] font-normal leading-[1.05] text-fg">
                  {lieutenant?.nameDe ?? 'Kein Leutnant gewählt'}
                </h3>
                {form && (
                  <p className="mt-1.5 text-[14.5px] text-muted">
                    {form.attackTypeDe} · Werte für {session.playerCount} Helden
                  </p>
                )}
              </div>

              {stats && form && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 rounded-control border border-line bg-surface-2">
                    <div className="flex items-center gap-2">
                      <HealthIcon size={15} />
                      <span className="font-head text-[19px] font-bold text-fg">{stats.health}</span>
                    </div>
                    <Micro className="block mt-1.5">Leben</Micro>
                  </div>
                  <div className="p-3 rounded-control border border-line bg-surface-2">
                    <div className="flex items-center gap-2">
                      <SpeedIcon size={15} />
                      <span className="font-head text-[19px] font-bold text-fg">{stats.speed}</span>
                    </div>
                    <Micro className="block mt-1.5">Bewegung</Micro>
                  </div>
                  <div className="p-3 rounded-control border border-line bg-surface-2">
                    <DiceRow dice={stats.defense} />
                    <Micro className="block mt-1.5">Verteidigung</Micro>
                  </div>
                  <div className="p-3 rounded-control border border-line bg-surface-2">
                    <DiceRow dice={form.attackDice} />
                    <Micro className="block mt-1.5">Angriff</Micro>
                  </div>
                </div>
              )}

              {form?.abilities.map((a) => (
                <div key={a.labelDe} className="px-3.5 py-3 rounded-control border border-line bg-surface-2">
                  <Micro>Fähigkeit</Micro>
                  <p className="mt-1.5 text-[14px] leading-[1.55] text-muted">
                    <strong className="font-semibold text-fg">{a.labelDe}</strong>
                    {a.rulesDe ? <> {renderGameText(a.rulesDe, 13)}</> : null}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3.5 px-5 py-3 border-t border-line bg-surface-2 flex-wrap">
            <Micro>Leutnant wechseln</Micro>
            <LinkBtn variant="ghost" size="sm" to={`/session/${session.id}/einrichtung`}>
              Anderer Leutnant
            </LinkBtn>
            <span className="sm:ml-auto text-[13px] text-muted">Plotdeck folgt automatisch dem Leutnant</span>
          </div>
        </div>

        {/* Rechte Spalte */}
        <div className="flex flex-col gap-3.5">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-card border border-accent-line bg-surface">
              <p className="font-head text-[32px] font-bold leading-none text-accent-bright tabular-nums">
                {ol.threatTokens}
              </p>
              <Micro className="block mt-1.5 mb-2.5">Bedrohung</Micro>
              <Stepper
                className="w-full"
                value={ol.threatTokens}
                max={30}
                label="Bedrohungsmarker"
                onChange={(n) => patchOverlord({ threatTokens: n })}
              />
            </div>
            <div className="p-3.5 rounded-card border border-line bg-surface">
              <p className="font-head text-[32px] font-bold leading-none text-fg tabular-nums">
                {live.overlord.xpAvailable}
              </p>
              <Micro className="block mt-1.5 mb-2.5">XP offen</Micro>
              <p className="text-[13px] leading-[1.45] text-muted">
                {live.overlord.xpEarned} verdient · {live.overlord.xpSpent} ausgegeben
              </p>
            </div>
          </div>

          {/* Jetzt spielbare Gerüchte */}
          <div className="rounded-card border border-line bg-surface p-4">
            <div className="flex items-baseline justify-between gap-2.5 mb-1">
              <Eyebrow>Jetzt spielbare Gerüchte · {playableNow.length}</Eyebrow>
              <Link
                to={`/session/${session.id}/verlauf/karten`}
                className="inline-flex items-center h-11 sm:h-auto font-mono text-[10px] text-accent-bright hover:underline whitespace-nowrap"
              >
                Alle {session.rumors.length} ansehen
              </Link>
            </div>
            <p className="mb-3 text-[12.5px] leading-[1.45] text-muted">
              Alle gezogenen Gerüchte führt der Tracker gesammelt im Verlauf. Hier steht nur, was du in dieser Phase
              spielen darfst — höchstens 1 pro Kampagnenphase.
            </p>
            {effectRumors.length === 0 ? (
              <p className="text-[12.5px] text-muted">
                Keine Gerüchte mit Effekt im Spiel. Gezogen wird in der Einrichtung.
              </p>
            ) : (
              <div className="flex flex-col gap-2.5">
                {effectRumors.map(({ rumor, meta, play }) => (
                  <div key={rumor.id} className="px-3 py-2.5 rounded-control border border-line bg-surface-2">
                    <div className="flex items-center gap-2">
                      <p className="font-head text-[14px] font-semibold text-fg">{rumor.nameDe}</p>
                      <span className="font-mono text-[8.5px] tracking-[0.14em] uppercase text-accent-bright">
                        {rumor.act ? `Akt ${rumor.act === 2 ? 'II' : 'I'}` : 'Beide Akte'}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[9px] tracking-[0.1em] uppercase text-faint">
                      {meta.timingLabelDe}
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-[1.45] text-muted">
                      {renderGameText(rumor.textDe.split('\n')[0], 12)}
                    </p>
                    <p className="mt-1.5 font-mono text-[9.5px] tracking-[0.1em] uppercase text-faint">
                      {play.playable ? 'Jetzt spielbar' : play.reason}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Overlord-Relikte */}
          <div className="rounded-card border border-line bg-surface p-4">
            <Eyebrow className="mb-3">Overlord-Relikte · {relics.length}</Eyebrow>
            {relics.length === 0 ? (
              <p className="text-[12.5px] text-muted">Noch kein Relikt erhalten.</p>
            ) : (
              <div className="flex flex-col gap-2.5">
                {relics.map((r) => (
                  <div key={r.id} className="flex gap-2.5 px-3 py-2.5 rounded-control border border-line bg-surface-2">
                    <CardThumb url={relicCardDeUrl(r.id)} name={r.nameDe} size="xs" />
                    <div className="min-w-0">
                      <p className="font-head text-[14px] font-semibold text-fg">{r.nameDe}</p>
                      <p className="mt-1 text-[12.5px] leading-[1.45] text-muted">{renderGameText(r.rulesDe, 12)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Plotdeck */}
      <div>
        <div className="flex items-baseline justify-between gap-4 mb-3 flex-wrap">
          <div>
            <Head size="s">Plotdeck · {plotDeck?.nameDe ?? 'keins gewählt'}</Head>
            <p className="mt-1 text-[13.5px] text-muted">
              Bedrohungskosten und Regeltext direkt sichtbar — so weiß der Overlord vor dem Szenario, wofür er spart.
            </p>
          </div>
          {plotDeck && (
            <Meta>
              {plotDeck.cards.filter((c) => ownedPlot.has(c.id)).length} von {plotDeck.cards.length} Karten besessen
            </Meta>
          )}
        </div>
        {!plotDeck ? (
          <p className="text-[13.5px] text-muted">
            Ohne Leutnant kein Plotdeck. In der{' '}
            <Link to={`/session/${session.id}/einrichtung`} className="underline text-accent-bright">
              Einrichtung
            </Link>{' '}
            wählbar.
          </p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {plotDeck.cards.map((c) => (
              <CardTile
                key={c.id}
                title={c.nameDe}
                cost={`${c.threatCost} Bedrohung`}
                rulesText={c.rulesDe}
                thumbUrl={plotCardDeUrl(c.id)}
                thumbSize="market"
                dense
                state={
                  ownedPlot.has(c.id)
                    ? 'Im Deck'
                    : `Kauf: ${c.threatCost} Marker${c.triggerCost ? ` · Auslösen: ${c.triggerCost}` : ''}`
                }
                selected={ownedPlot.has(c.id)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-start">
        <LinkBtn variant="ghost" size="sm" to={`/session/${session.id}/overlord/karten`}>
          Kartendeck ansehen
        </LinkBtn>
      </div>
    </ThemeScope>
  )
}
