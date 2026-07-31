// ── Screen 3b · Abenteuerkarten im Spiel (geteilte Sicht) ────────────────────
//
// Gerüchte werden beim Kampagnenstart gezogen und wirken auf HELDEN WIE OVERLORD
// (sie bringen unter anderem wählbare Abenteuer ins Spiel) — deshalb führt der
// Tracker sie hier im Verlauf und nicht als Chip-Liste im Overlord-Bereich.
// Nicht spielbare Karten werden ANGEZEIGT, nicht versteckt;
// nur der Knopf verschwindet und der Grund steht als Mono-Kleintext darunter.

import { Link, useNavigate } from 'react-router'
import { useSessionCtx } from './context'
import { RUMORS } from '../../data/rumors'
import { ADVANCED_QUESTS, CAMPAIGNS } from '../../data/campaigns'
import { rumorCardDeUrl } from '../../data/assetUrls'
import { RUMOR_META, resolveAdvancedQuestId, rumorPlayableNow, type RumorMeta } from '../../utils/rumorTiming'
import { intermezzoSelectable, terrainList } from './scenarioSuggest'
import CardTile from './ui/CardTile'
import CardThumb from './ui/CardThumb'
import { renderGameText } from '../GameSymbols'
import { Band, Badge, Btn, Head, Meta, Micro, NoteBox, ThemeScope } from './ui/controls'
import { Icon } from '../QvIcons'
import type { TrackedAdvancedQuest, TrackedRumor } from '../../types/session'

/** Erster (= regeltragender) Absatz des Kartentexts, ohne Flavour. */
function ruleParagraphs(textDe: string): string {
  const parts = textDe.split('\n').map((p) => p.trim()).filter(Boolean)
  const rules = parts.filter((p) =>
    /Spiele diese Karte|Solange diese Karte|Wenn du die Ger|kannst sie nicht spielen|Wirf diese Ger/i.test(p),
  )
  return (rules.length ? rules : parts.slice(0, 1)).join(' ')
}

/** Warnzeile: was passiert, wenn die Karte liegen bleibt. */
function expiryWarning(meta: RumorMeta | undefined): string {
  if (!meta) return ''
  if (meta.expiresAtActTransition) {
    // Was der Overlord bekommt, steht NAMENTLICH auf der Vorderseite (Relikt bzw.
    // Overlordkarte) — Akt-I-Gerüchtekarten haben keine Belohnungsrückseite.
    const quest = meta.introducesAdvancedQuest
      ? ` Dann kommt „${meta.introducesAdvancedQuest}" als Zusatzabenteuer ins Spiel.`
      : ''
    return `Beim Übergang zu Akt II noch im Spiel → der Overlord erhält die auf der Karte genannte Belohnung.${quest}`
  }
  if (meta.overlordRewardIfUnplayed)
    return 'Beim Aufbau des Finales noch ungespielt → der Overlord darf 1 Overlordkarte ziehen.'
  return ''
}

export default function AdventureCardsSection() {
  const { session, live, setRumors, setAdvancedQuests } = useSessionCtx()
  const navigate = useNavigate()
  const campaign = CAMPAIGNS.find((c) => c.id === session.campaignId)

  const ctx = {
    step: 'campaign-phase-start' as const,
    act: live.currentAct,
    intermezzoSelectable: intermezzoSelectable(session, live),
    rumorAlreadyPlayedThisPhase: live.rumorPlayedInCurrentPhase,
  }

  const tracked = session.rumors.filter((r) => r.status !== 'discarded')
  const resolved = tracked
    .map((t) => ({ t, rumor: RUMORS.find((r) => r.id === t.rumorId) }))
    .filter((x): x is { t: TrackedRumor; rumor: NonNullable<typeof x.rumor> } => !!x.rumor)
    .map((x) => ({ ...x, meta: RUMOR_META[x.rumor.id] }))

  const adventures = resolved.filter((x) => x.meta?.hasAdventure)
  const effects = resolved.filter((x) => !x.meta?.hasAdventure)

  const setStatus = (rumorId: string, status: TrackedRumor['status']) =>
    setRumors(session.rumors.map((r) => (r.rumorId === rumorId ? { ...r, status } : r)))

  /**
   * Verfall beim Übergang zu Akt II: die Karte geht aus dem Spiel, der Overlord
   * erhält die auf der Karte GENANNTE Belohnung — und die ebenfalls dort genannte
   * Zusatzabenteuerkarte kommt ins Spiel (Name aus `Rumor.textDe` geparst,
   * normalisiert aufgelöst wegen Apostroph-Varianten).
   */
  const expire = (rumorId: string, meta: RumorMeta) => {
    setStatus(rumorId, 'expired')
    const questName = meta.introducesAdvancedQuest
    if (!questName) return
    const questId = resolveAdvancedQuestId(questName)
    if (!questId || session.advancedQuests.some((q) => q.questId === questId)) return
    setAdvancedQuests([...session.advancedQuests, { questId, status: 'in-play', source: rumorId }])
  }
  const setQuestStatus = (questId: string, status: TrackedAdvancedQuest['status']) =>
    setAdvancedQuests(session.advancedQuests.map((q) => (q.questId === questId ? { ...q, status } : q)))

  if (campaign?.kind === 'mini') {
    return (
      <div className="p-5 sm:px-7 sm:py-6 flex flex-col gap-4">
        <Head>Gerüchte &amp; Zusatzabenteuer</Head>
        <p className="text-[14px] text-muted max-w-[70ch]">
          Mini-Kampagnen verwenden keine Gerüchtekarten — für „{campaign.nameDe}" bleibt dieser Bereich leer.
        </p>
        <Link to={`/session/${session.id}/verlauf`} className="text-[13.5px] underline text-accent">
          Zurück zum Verlauf
        </Link>
      </div>
    )
  }

  const questRows = session.advancedQuests
    .map((t) => ({ t, quest: ADVANCED_QUESTS.find((q) => q.id === t.questId) }))
    .filter((x): x is { t: TrackedAdvancedQuest; quest: NonNullable<typeof x.quest> } => !!x.quest)

  return (
    <div className="p-5 sm:px-7 sm:py-6 flex flex-col gap-5">
      <div className="flex items-center gap-3 flex-wrap">
        <Link
          to={`/session/${session.id}/verlauf`}
          className="inline-flex items-center gap-2 h-11 sm:h-auto text-[13.5px] text-muted hover:text-fg transition-colors"
        >
          <Icon name="chevron-left" size={15} />
          Verlauf
        </Link>
        <span className="text-faint">/</span>
        <span className="font-head text-[14px] font-semibold text-fg">Abenteuerkarten im Spiel</span>
      </div>

      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <Head>Gerüchte &amp; Zusatzabenteuer</Head>
          <p className="mt-1 text-[14px] text-muted">
            {session.rumors.length} Gerüchtekarten gezogen · {adventures.length} führen ein Abenteuer ein ·{' '}
            {questRows.filter((q) => q.t.status === 'in-play').length} Zusatzabenteuer im Spiel
          </p>
        </div>
        <NoteBox className="max-w-[34rem]">
          Der Overlord darf <strong className="font-semibold">höchstens 1 Gerücht pro Kampagnenphase</strong> spielen —
          {live.rumorPlayedInCurrentPhase ? ' in dieser Phase ist es schon geschehen.' : ' in dieser Phase noch keins.'}
        </NoteBox>
      </div>

      {/* 1 · Gerüchte mit Abenteuer */}
      <div>
        <Band
          label={`Gerüchte mit Abenteuer · Akt ${live.currentAct === 2 ? 'II' : 'I'}`}
          meta="Wählbar von Helden und Overlord"
          className="mb-3"
        />
        {adventures.length === 0 ? (
          <p className="text-[13.5px] text-muted">
            Kein Gerüchteabenteuer im Spiel. Gezogen wird in der{' '}
            <Link to={`/session/${session.id}/einrichtung`} className="underline text-accent">
              Einrichtung
            </Link>
            .
          </p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {adventures.map(({ t, rumor, meta }) => {
              // Auch Gerüchteabenteuer werden „gespielt" — es gilt dasselbe
              // Zeitfenster (Beginn der Kampagnenphase) samt Intermezzo-Sperre
              // und der Regel „höchstens 1 Gerücht pro Kampagnenphase".
              const play = rumorPlayableNow(meta, ctx)
              const playable = t.status === 'in-play' && play.playable
              return (
                <CardTile
                  key={rumor.id}
                  eyebrow={`Akt ${rumor.act === 2 ? 'II' : 'I'}${rumor.travel.length ? ` · ${terrainList(rumor.travel)}` : ''}`}
                  eyebrowRight="Abenteuer"
                  title={rumor.nameDe}
                  rulesText={ruleParagraphs(rumor.textDe)}
                  above={
                    <div>
                      <Micro>Zeitfenster</Micro>
                      <p className="mt-1 font-mono text-[10px] tracking-[0.08em] uppercase text-fg">
                        {meta.timingLabelDe}
                      </p>
                    </div>
                  }
                  warn={expiryWarning(meta)}
                  thumbUrl={rumorCardDeUrl(rumor.id)}
                  thumbSize="quest"
                  dense
                  footer={
                    <div className="flex flex-wrap items-center gap-2">
                      {playable && (
                        <Btn
                          variant="secondary"
                          size="sm"
                          onClick={() => navigate(`/session/${session.id}/abschluss?pick=rumor:${rumor.id}`)}
                        >
                          Als Abenteuer wählen
                        </Btn>
                      )}
                      {t.status === 'in-play' && (
                        <Btn
                          variant="ghost"
                          size="sm"
                          title={
                            meta.introducesAdvancedQuest
                              ? `Bringt „${meta.introducesAdvancedQuest}" als Zusatzabenteuer ins Spiel`
                              : undefined
                          }
                          onClick={() => expire(rumor.id, meta)}
                        >
                          Verfallen lassen
                        </Btn>
                      )}
                    </div>
                  }
                  state={
                    t.status === 'played'
                      ? 'Gespielt'
                      : t.status === 'expired'
                        ? 'Verfallen — Belohnung beim Overlord'
                        : playable
                          ? undefined
                          : `Gesperrt — ${play.reason}`
                  }
                />
              )
            })}
          </div>
        )}
      </div>

      {/* 2 · Zusatzabenteuer */}
      <div>
        <Band label="Zusatzabenteuer · Akt II" meta="Kein Teil des Gerüchtedecks" className="mb-3" />
        {questRows.length === 0 ? (
          <p className="text-[13.5px] text-muted">
            Noch kein Zusatzabenteuer im Spiel. Sie kommen ausschließlich über Belohnungen ins Spiel — meist als
            Belohnung einer Akt-I-Abenteuerkarte.
          </p>
        ) : (
          <div className="grid gap-3 lg:grid-cols-2">
            {questRows.map(({ t, quest }) => (
              <div key={quest.id} className="flex gap-3.5 p-3.5 rounded-card border border-line bg-surface">
                <CardThumb url={quest.imageUrlFront} name={quest.nameDe} size="quest" />
                <div className="min-w-0 flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <p className="font-head text-[16px] font-bold text-fg">{quest.nameDe}</p>
                    <Badge variant="accent" mono>
                      Akt {quest.act === 1 ? 'I' : 'II'}
                    </Badge>
                  </div>
                  {quest.travel.length > 0 && <Micro>Reise: {terrainList(quest.travel)}</Micro>}
                  {t.source && (
                    <p className="text-[12.5px] leading-[1.5] text-muted">
                      Ins Spiel gekommen über: {RUMORS.find((r) => r.id === t.source)?.nameDe ?? t.source}
                    </p>
                  )}
                  <p className="text-[12.5px] leading-[1.5] text-muted">
                    Wählbar nach dem Zwischenspiel oder jedem anderen Akt-II-Abenteuer. Beim Reiseschritt gelten die
                    Reisesymbole dieser Karte, nicht die der Landkarte.
                  </p>
                  {/* Nur zeigen, wenn die Karte diesen Satz wirklich trägt —
                      4 der 16 Zusatzabenteuer tun das nicht. */}
                  {RUMOR_META[quest.id]?.overlordRewardIfUnplayed && (
                    <p className="text-[12px] leading-[1.45] text-accent-bright">
                      Beim Aufbau des Finales noch ungespielt → der Overlord darf 1 Overlordkarte ziehen.
                    </p>
                  )}
                  <div className="mt-auto flex items-center gap-2.5 flex-wrap pt-1">
                    {t.status === 'in-play' && (
                      <Btn
                        variant="secondary"
                        size="sm"
                        onClick={() => navigate(`/session/${session.id}/abschluss?pick=advanced-quest:${quest.id}`)}
                      >
                        Als Abenteuer wählen
                      </Btn>
                    )}
                    {t.status === 'not-in-play' && (
                      <Btn variant="ghost" size="sm" onClick={() => setQuestStatus(quest.id, 'in-play')}>
                        Ins Spiel bringen
                      </Btn>
                    )}
                    <span className="font-mono text-[9.5px] tracking-[0.1em] uppercase text-faint">
                      {t.status === 'in-play'
                        ? 'Im Spiel · wählbar'
                        : t.status === 'played'
                          ? 'Gespielt'
                          : 'Noch nicht im Spiel'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3 · Gerüchte mit Effekt */}
      <ThemeScope theme="overlord" className="rounded-card border border-line bg-surface-2 px-5 py-[18px]">
        <Band label="Gerüchte mit Effekt · ohne Abenteuer" meta="Nur der Overlord spielt sie" className="mb-3" />
        {effects.length === 0 ? (
          <p className="text-[13.5px] text-muted">Kein Gerücht mit Effekt im Spiel.</p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {effects.map(({ t, rumor, meta }) => {
              const play = rumorPlayableNow(meta, ctx)
              return (
                <div
                  key={rumor.id}
                  className="p-3.5 rounded-card border border-line bg-surface flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-head text-[15.5px] font-bold text-fg">{rumor.nameDe}</p>
                    <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-faint whitespace-nowrap">
                      {rumor.act ? `Akt ${rumor.act === 2 ? 'II' : 'I'}` : 'Beide Akte'}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] tracking-[0.08em] uppercase text-accent-bright">
                    {meta.timingLabelDe}
                  </p>
                  <p className="text-[12.5px] leading-[1.5] text-muted">
                    {renderGameText(ruleParagraphs(rumor.textDe), 12)}
                  </p>
                  <div className="mt-auto pt-1">
                    {t.status === 'in-play' && play.playable ? (
                      <Btn variant="secondary" size="sm" onClick={() => setStatus(rumor.id, 'played')}>
                        Jetzt spielen
                      </Btn>
                    ) : (
                      <span className="font-mono text-[9.5px] tracking-[0.1em] uppercase text-faint">
                        {t.status === 'played' ? 'Gespielt' : t.status === 'expired' ? 'Verfallen' : play.reason}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
        <p className="mt-3 text-[13px] leading-[1.55] text-muted">
          Ein Gerücht mit Effekt erscheint nur dort, wo es die Karte erlaubt: „Beginn der Kampagnenphase" schon hier,
          „Einkaufsschritt" erst in Flow-Schritt 4, „Reiseschritt" als eigener Zwischenschritt vor dem nächsten
          Szenario. Außerhalb seines Zeitfensters bleibt es sichtbar, aber nicht spielbar.
        </p>
      </ThemeScope>

      <Meta>
        Zeitfenster, Akt und Ausschlüsse werden aus dem deutschen Kartentext (Rumor.textDe) erkannt — kein
        handgepflegtes Mapping.
      </Meta>
    </div>
  )
}
