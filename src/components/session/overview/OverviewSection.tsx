// ── Screen 2 · Überblick (Cockpit) ───────────────────────────────────────────
//
// Die Landeansicht: oben die einzige Handlung, die nach einem Spielabend zählt
// (Szenario abschließen), darunter der Partei-Stand im Helden-Design und rechts
// die Overlord-Spalte im Overlord-Design. Die alte Kachelreihe aus sechs gleich
// großen Werten ist ersetzt durch eine Hierarchie: Partei-Gold groß, offene XP
// je Held als Zeile, Bedrohung/Schicksal als Stepper bei ihrem Besitzer.

import { Link } from 'react-router-dom'
import { useSessionCtx } from '../context'
import { LIEUTENANTS } from '../../../data/lieutenants'
import { PLOT_DECKS } from '../../../data/plotDecks'
import { heroMono, heroShortName, resolveItemName } from '../sessionHelpers'
import { suggestNext } from '../scenarioSuggest'
import NextScenarioCard from '../ui/NextScenarioCard'
import { Badge, Eyebrow, LinkBtn, Meta, Micro, ProgressSegments, Stepper, ThemeScope } from '../ui/controls'
import { Icon } from '../../QvIcons'
import { HealthIcon, SpeedIcon, DefenseStatIcon } from '../../StatIcons'

const OUTCOME_LABEL: Record<'heroes' | 'overlord' | 'none', string> = {
  heroes: 'Helden gewonnen',
  overlord: 'Overlord gewonnen',
  none: 'offen',
}

/** Kurze Belohnungszeile eines Szenarios (Mono). */
export function rewardLine(sc: {
  rewards: { heroXp: Record<string, number>; overlordXp: number; partyGold: number; grantedItems: unknown[] }
}): string {
  const parts: string[] = []
  const xp = Object.values(sc.rewards.heroXp)
  // reduce statt Math.max(...xp): eine importierte Session könnte sehr viele
  // Helden-Schlüssel enthalten – ein Spread würde dann beim Rendern werfen.
  const maxXp = xp.reduce((a, b) => (b > a ? b : a), 0)
  if (maxXp) parts.push(`+${maxXp} XP je Held`)
  if (sc.rewards.overlordXp) parts.push(`+${sc.rewards.overlordXp} OL-XP`)
  if (sc.rewards.partyGold) parts.push(`+${sc.rewards.partyGold} Gold`)
  if (sc.rewards.grantedItems.length) parts.push(`${sc.rewards.grantedItems.length} Gegenstand/Relikt`)
  return parts.join(' · ') || 'keine Belohnungen erfasst'
}

export default function OverviewSection() {
  const { session, live, patchSession, patchOverlord } = useSessionCtx()
  const suggestion = suggestNext(session, live)

  const lieutenant = LIEUTENANTS.find((l) => l.id === session.overlord.lieutenantId) ?? null
  const form = lieutenant?.forms.find((f) => f.act === live.currentAct) ?? lieutenant?.forms[0] ?? null
  const stats = form?.perPlayer[`p${session.playerCount}` as 'p2' | 'p3' | 'p4']
  const plotDeck = PLOT_DECKS.find((d) => d.id === session.overlord.plotDeckId) ?? null
  const ownedPlot = plotDeck ? plotDeck.cards.filter((c) => session.overlord.ownedPlotCardIds.includes(c.id)).length : 0

  const recent = [...session.scenarios].sort((a, b) => b.order - a.order).slice(0, 3)
  const partyItems = live.partyItemRefs

  return (
    <div className="flex flex-col xl:flex-row items-stretch">
      {/* ── Linke Spalte ─────────────────────────────────────────────── */}
      <div className="flex-1 min-w-0 p-5 sm:px-6 sm:py-[22px] flex flex-col gap-[18px]">
        {suggestion.campaign || suggestion.adventures.length > 0 ? (
          <NextScenarioCard
            eyebrow={
              suggestion.campaign
                ? 'Als Nächstes · empfohlen aus dem Kampagnenpfad'
                : 'Als Nächstes · aus einer Abenteuerkarte'
            }
            title={suggestion.campaign?.titleDe ?? suggestion.adventures[0]?.title ?? '—'}
            subtitle={
              suggestion.campaign
                ? `Akt ${suggestion.campaign.act === 2 ? 'II' : 'I'} · ${suggestion.reason}`
                : suggestion.adventures[0]?.reason
            }
            actions={
              <>
                <LinkBtn block to={`/session/${session.id}/abschluss`}>
                  Szenario abschließen
                </LinkBtn>
                <LinkBtn block size="sm" variant="ghost" to={`/session/${session.id}/verlauf`}>
                  Anderes Szenario wählen
                </LinkBtn>
              </>
            }
          />
        ) : (
          <NextScenarioCard
            eyebrow="Als Nächstes"
            title="Der Kampagnenbogen verzweigt hier"
            subtitle="Die Gruppe wählt aus dem Verlauf oder direkt beim Abschließen — die App rät nicht."
            actions={
              <LinkBtn block to={`/session/${session.id}/abschluss`}>
                Szenario abschließen
              </LinkBtn>
            }
          />
        )}

        {/* Partei — Heldenbereich */}
        <ThemeScope
          theme="heldentum"
          className="rounded-card border border-line bg-surface shadow-card px-5 py-[18px] flex flex-col gap-4"
        >
          <div className="flex items-start justify-between gap-5 flex-wrap">
            <div>
              <Eyebrow>Partei</Eyebrow>
              <div className="flex items-end gap-6 mt-2 flex-wrap">
                <div>
                  <p className="font-head text-[40px] font-bold leading-none text-accent tabular-nums">
                    {live.partyGold}
                  </p>
                  <p className="mt-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-muted">Gold im Pool</p>
                </div>
                <div className="pl-6 border-l border-line">
                  <div className="flex items-center gap-2.5">
                    <p className="font-head text-[24px] font-bold leading-none tabular-nums text-fg">
                      {session.partyFateTokens}
                    </p>
                    <Stepper
                      value={session.partyFateTokens}
                      max={30}
                      label="Schicksalsmarker"
                      onChange={(n) => patchSession({ partyFateTokens: n })}
                    />
                  </div>
                  <p className="mt-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                    Schicksalsmarker
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right min-w-0">
              <Eyebrow>Gemeinsame Ausrüstung</Eyebrow>
              <p className="mt-2 font-head text-[15px] font-semibold text-fg">
                {partyItems.length} {partyItems.length === 1 ? 'Gegenstand' : 'Gegenstände'}
              </p>
              <p className="mt-0.5 text-[13px] text-muted truncate max-w-[22rem]">
                {partyItems.length ? partyItems.map(resolveItemName).join(' · ') : 'nichts abgelegt'}
              </p>
            </div>
          </div>

          <div>
            <Eyebrow className="mb-2.5">Erfahrung zum Ausgeben</Eyebrow>
            {session.heroes.length === 0 ? (
              <p className="text-[13.5px] text-muted">
                Noch keine Helden — lege sie in der{' '}
                <Link to={`/session/${session.id}/einrichtung`} className="underline text-accent">
                  Einrichtung
                </Link>{' '}
                an.
              </p>
            ) : (
              <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
                {session.heroes.map((h) => {
                  const hl = live.heroes[h.localId]
                  const open = hl?.xpAvailable ?? 0
                  return (
                    <Link
                      key={h.localId}
                      to={`/session/${session.id}/helden/${h.localId}`}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-control border border-line bg-surface-2 hover:border-accent-line transition-colors"
                    >
                      <span className="w-8 h-8 shrink-0 rounded-chip bg-accent-soft border border-accent-line inline-flex items-center justify-center font-mono text-[10px] text-accent">
                        {heroMono(h)}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-head text-[13px] font-semibold text-fg truncate">
                          {heroShortName(h)}
                        </span>
                        <span className="block text-[12px] text-muted">
                          {open > 0 ? `${open} XP offen` : 'alles ausgegeben'}
                        </span>
                      </span>
                      <span className="font-head text-[22px] font-bold text-accent tabular-nums">{open}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </ThemeScope>

        {/* Letzte Szenarien */}
        <div className="rounded-card border border-line bg-surface px-5 pt-4 pb-[18px] flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-3">
            <Eyebrow>Letzte Szenarien</Eyebrow>
            <Link
              to={`/session/${session.id}/verlauf`}
              className="inline-flex items-center h-11 sm:h-auto font-mono text-[11px] text-accent-bright hover:underline"
            >
              Ganzen Verlauf ansehen
            </Link>
          </div>
          {recent.length === 0 ? (
            <p className="text-[13.5px] text-muted">
              Noch kein Szenario protokolliert. Nach dem ersten Spielabend steht hier der Verlauf.
            </p>
          ) : (
            recent.map((sc) => (
              <div key={sc.id} className="flex items-center gap-3.5">
                <Meta className="w-6 text-right">{String(sc.order).padStart(2, '0')}</Meta>
                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-accent opacity-70" />
                <span className="flex-1 min-w-0 font-head text-[14px] font-semibold text-fg truncate">
                  {sc.scenario.title || 'Unbenannt'}
                </span>
                <span className="hidden sm:block text-[13px] text-muted whitespace-nowrap">
                  {OUTCOME_LABEL[sc.outcome]}
                </span>
                <Meta className="hidden md:block whitespace-nowrap">{rewardLine(sc)}</Meta>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── Rechte Spalte · Overlord ─────────────────────────────────── */}
      <ThemeScope
        theme="overlord"
        className="w-full xl:w-[352px] shrink-0 border-t xl:border-t-0 xl:border-l border-line bg-surface-2 p-5 sm:px-5 sm:py-[22px] flex flex-col gap-4"
      >
        <div className="flex items-center gap-2.5 text-accent-bright">
          <Icon name="overlord" size={16} />
          <Eyebrow className="!text-accent-bright">Overlord</Eyebrow>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 rounded-control border border-line bg-surface">
            <p className="font-head text-[26px] font-bold leading-none text-accent-bright tabular-nums">
              {session.overlord.threatTokens}
            </p>
            <p className="mt-1.5 mb-2 font-mono text-[9px] tracking-[0.16em] uppercase text-muted">Bedrohung</p>
            <Stepper
              className="w-full"
              value={session.overlord.threatTokens}
              max={30}
              label="Bedrohungsmarker"
              onChange={(n) => patchOverlord({ threatTokens: n })}
            />
          </div>
          <div className="p-3 rounded-control border border-line bg-surface">
            <p className="font-head text-[26px] font-bold leading-none text-accent-bright tabular-nums">
              {live.overlord.xpAvailable}
            </p>
            <p className="mt-1.5 mb-2 font-mono text-[9px] tracking-[0.16em] uppercase text-muted">XP offen</p>
            <p className="text-[13px] leading-[1.4] text-muted">
              von {live.overlord.xpEarned} verdient · {live.overlord.xpSpent} ausgegeben
            </p>
          </div>
        </div>

        {/* Leutnant */}
        <div className="rounded-card border border-line bg-surface overflow-hidden">
          <div className="flex gap-3 p-3">
            <div
              className="w-[62px] h-[84px] shrink-0 rounded-chip border border-accent-line"
              style={{
                background:
                  'repeating-linear-gradient(135deg, var(--qv-accent-soft) 0 6px, transparent 6px 12px), radial-gradient(circle at 50% 35%, var(--qv-accent-soft), transparent 70%), var(--qv-surface-2)',
              }}
            />
            <div className="min-w-0 flex-1">
              <Micro>Leutnant</Micro>
              <p className="mt-1 font-head text-[17px] font-bold text-fg truncate">
                {lieutenant?.nameDe ?? 'kein Leutnant gewählt'}
              </p>
              {stats && (
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
                    <HealthIcon size={13} />
                    {stats.health}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
                    <SpeedIcon size={13} />
                    {stats.speed}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
                    <DefenseStatIcon size={13} />
                    {stats.defense.length}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="px-3 py-2.5 border-t border-line bg-surface-2">
            <Micro>Plotdeck · {plotDeck?.nameDe ?? 'keins'}</Micro>
            {plotDeck && (
              <div className="flex items-center gap-2.5 mt-2">
                <ProgressSegments className="flex-1" filled={ownedPlot} total={plotDeck.cards.length} />
                <span className="font-mono text-[10px] text-muted whitespace-nowrap">
                  {ownedPlot} / {plotDeck.cards.length} Karten
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Spielstand-Notiz */}
        <div className="rounded-card border border-line bg-surface p-3">
          <Micro>Spielstand-Notiz</Micro>
          <textarea
            value={session.note ?? ''}
            onChange={(e) => patchSession({ note: e.target.value.slice(0, 2000) })}
            rows={3}
            placeholder="Was solltet ihr beim nächsten Mal wissen?"
            className="mt-2 w-full bg-transparent text-[14px] leading-[1.55] text-muted italic placeholder:text-faint resize-y focus:outline-none focus:text-fg"
          />
        </div>

        {/* Platzhalter für den Monster-Tracker (v1.9) */}
        <div className="mt-auto rounded-card border border-dashed border-accent-line bg-accent-soft p-3.5">
          <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-accent-bright">Vorgesehen für v1.9</p>
          <p className="mt-1.5 font-head text-[15px] font-semibold text-fg">Monster-Tracker</p>
          <p className="mt-1 text-[13px] leading-[1.5] text-muted">
            Live-Lebenspunkte und Zustände je Figur bekommen hier ihren Platz — als fünfter Abschnitt „Am Tisch", der
            nur während eines laufenden Szenarios erscheint.
          </p>
        </div>

        {session.archived && <Badge mono>Archivierte Kampagne — schreibgeschützt gedacht</Badge>}
      </ThemeScope>
    </div>
  )
}
