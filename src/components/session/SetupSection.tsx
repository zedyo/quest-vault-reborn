// ── Screen 13 · Einrichtung ──────────────────────────────────────────────────
//
// Was früher der prominenteste Tab war, liegt jetzt hinter einem dezenten
// Eintrag: dichte Zwei-Spalten-Felder, alles auf einer Seite. Links die
// Heldenseite, rechts der Overlord-Aufbau im Overlord-Design; darunter — über
// beide Spalten, weil es auf beide Seiten wirkt — das Gerüchtedeck.

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSessionCtx } from './context'
import { useSessionStore } from '../../store/useSessionStore'
import { CAMPAIGNS } from '../../data/campaigns'
import { EXPANSIONS } from '../../data/expansions'
import { HEROES, ARCHETYPE_LABELS } from '../../data/heroes'
import { HERO_CLASSES } from '../../data/heroClasses'
import { OVERLORD_DECKS } from '../../data/overlordClasses'
import { LIEUTENANTS } from '../../data/lieutenants'
import { PLOT_DECKS } from '../../data/plotDecks'
import { plotDeckForLieutenant } from '../../data/lieutenantPlotLinks'
import { RUMORS } from '../../data/rumors'
import { rumorDeckCards } from '../../utils/rumorTiming'
import { exportSessionAsJSON, parseImportedSession, MAX_IMPORT_BYTES } from '../../utils/sessionImport'
import type { OverlordDeck } from '../../types/game'
import type { TrackedRumor } from '../../types/session'
import {
  CLASS_BY_ID,
  HERO_BY_ID,
  heroMono,
  itemCardUrl,
  resolveItemName,
  withClass,
} from './sessionHelpers'
import ModalOverlay from '../ModalOverlay'
import ArchetypeIcon from '../ArchetypeIcon'
import CardThumb from './ui/CardThumb'
import { ChipToggle } from './ui'
import ItemPicker from './ItemPicker'
import {
  Badge,
  Btn,
  Head,
  IconBtn,
  Micro,
  NumberField,
  Segmented,
  Select,
  Stepper,
  Switch,
  TextField,
  ThemeScope,
} from './ui/controls'
import { Icon } from '../QvIcons'

const EXP_BY_ID = Object.fromEntries(EXPANSIONS.map((e) => [e.id, e]))
const cardKey = (deckId: string, cardId: string) => `${deckId}:${cardId}`
const toggleId = (arr: string[], id: string) => (arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id])

// ── Helden-Picker ────────────────────────────────────────────────────────────

function AddHeroModal({
  usedHeroIds,
  ownedExpansionIds,
  onAdd,
  onClose,
}: {
  usedHeroIds: string[]
  ownedExpansionIds: string[]
  onAdd: (heroId: string) => void
  onClose: () => void
}) {
  const heroes = HEROES.filter((h) => !usedHeroIds.includes(h.id) && ownedExpansionIds.includes(h.expansionId))
  return (
    <ModalOverlay
      onClose={onClose}
      ariaLabel="Held hinzufügen"
      className="bg-surface border border-line rounded-card shadow-panel w-full max-w-2xl max-h-[85vh] flex flex-col"
    >
      <div className="p-4 border-b border-line flex items-center justify-between gap-3">
        <Head size="s">Held hinzufügen</Head>
        <IconBtn icon="close" label="Schließen" onClick={onClose} />
      </div>
      <div className="p-4 overflow-y-auto">
        {heroes.length === 0 ? (
          <p className="text-[13.5px] text-muted text-center py-6">Keine weiteren Helden in deiner Sammlung.</p>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
            {heroes.map((hero) => (
              <button
                key={hero.id}
                type="button"
                onClick={() => {
                  onAdd(hero.id)
                  onClose()
                }}
                title={hero.name}
                className="rounded-chip overflow-hidden border border-line hover:border-accent transition-colors text-left"
              >
                <div className="aspect-[3/4] bg-surface-2 overflow-hidden">
                  {hero.imageUrl && (
                    <img
                      src={hero.imageUrl}
                      alt={hero.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'left center' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  )}
                </div>
                <span className="block px-1.5 py-1 text-center font-head text-[12px] font-semibold text-fg truncate">
                  {hero.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </ModalOverlay>
  )
}

// ── Einrichtung ──────────────────────────────────────────────────────────────

export default function SetupSection() {
  const {
    session,
    ownedExpansionIds,
    patchSession,
    patchHero,
    patchOverlord,
    addHero,
    requestDelete,
    setRumors,
  } = useSessionCtx()
  const addSession = useSessionStore((s) => s.addSession)
  const navigate = useNavigate()
  const [adding, setAdding] = useState(false)
  // Regelstand: vor Beginn der Kampagne mischt der Overlord die Gerüchtekarten
  // und zieht 3 davon (CRRG). Frei verstellbar.
  const [drawCount, setDrawCount] = useState(3)
  const [manualRumor, setManualRumor] = useState('')
  const [detailHero, setDetailHero] = useState<string | null>(null)
  const [itemPickerFor, setItemPickerFor] = useState<string | null>(null)

  const campaign = CAMPAIGNS.find((c) => c.id === session.campaignId)
  const owns = (id: string) => ownedExpansionIds.includes(id)
  const pickableDecks = OVERLORD_DECKS.filter((d) => d.kind !== 'reward' && owns(d.expansionId))
  const lieutenants = LIEUTENANTS.filter((l) => owns(l.expansionId))
  const plotDecks = PLOT_DECKS.filter((d) => owns(d.expansionId))
  const deckPool = rumorDeckCards(ownedExpansionIds)
  const drawn = new Set(session.rumors.map((r) => r.rumorId))

  function toggleDeck(deck: OverlordDeck) {
    const ol = session.overlord
    if (ol.deckIds.includes(deck.id)) {
      const keys = new Set(deck.cards.map((c) => cardKey(deck.id, c.id)))
      patchOverlord({
        deckIds: ol.deckIds.filter((d) => d !== deck.id),
        startingCardIds: ol.startingCardIds.filter((c) => !keys.has(c)),
      })
    } else {
      const seed = deck.cards
        .filter((c) => c.xpCost === 0)
        .flatMap((c) => Array<string>(Math.max(1, c.count)).fill(cardKey(deck.id, c.id)))
      patchOverlord({ deckIds: [...ol.deckIds, deck.id], startingCardIds: [...ol.startingCardIds, ...seed] })
    }
  }

  function changeLieutenant(id: string) {
    const lt = id ? LIEUTENANTS.find((l) => l.id === id) ?? null : null
    const linked = lt ? plotDeckForLieutenant(lt) : undefined
    patchOverlord({ lieutenantId: id || null, plotDeckId: linked ? linked.id : session.overlord.plotDeckId })
  }

  /**
   * Zieht n Gerüchtekarten neu. Bereits GESPIELTE/verfallene Karten bleiben
   * erhalten (sie sind Teil des Verlaufs) — ersetzt werden nur die im Spiel
   * liegenden; gezogen wird ohne Wiederholung aus der Sammlung.
   */
  function drawRumors(n: number) {
    const kept = session.rumors.filter((r) => r.status !== 'in-play')
    const keptIds = new Set(kept.map((r) => r.rumorId))
    const bag = deckPool.filter((r) => !keptIds.has(r.id))
    const out: TrackedRumor[] = []
    while (bag.length > 0 && out.length < n) {
      const idx = Math.floor(Math.random() * bag.length)
      out.push({ rumorId: bag.splice(idx, 1)[0].id, status: 'in-play' })
    }
    setRumors([...kept, ...out])
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > MAX_IMPORT_BYTES) {
      alert('Datei zu groß (max. 2 MB).')
      e.target.value = ''
      return
    }
    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const s = parseImportedSession(JSON.parse(ev.target?.result as string))
        if (!s) {
          alert('Ungültige Kampagnen-Datei.')
          return
        }
        addSession(s)
        navigate(`/session/${s.id}`)
      } catch {
        alert('Datei konnte nicht gelesen werden.')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const epicOn = session.epic === true

  return (
    <div className="flex flex-col">
      {adding && (
        <AddHeroModal
          usedHeroIds={session.heroes.map((h) => h.heroId)}
          ownedExpansionIds={ownedExpansionIds}
          onAdd={addHero}
          onClose={() => setAdding(false)}
        />
      )}
      {itemPickerFor && (
        <ItemPicker
          ownedExpansionIds={ownedExpansionIds}
          title="Startausrüstung ergänzen"
          onPick={(item) => {
            const hero = session.heroes.find((h) => h.localId === itemPickerFor)
            if (hero) patchHero(hero.localId, { startingItemRefs: [...hero.startingItemRefs, item] })
          }}
          onClose={() => setItemPickerFor(null)}
        />
      )}

      {/* Kopfzeile */}
      <div className="flex items-center gap-3 px-5 sm:px-6 py-3.5 border-b border-line bg-surface-2 flex-wrap">
        <Link
          to={`/session/${session.id}`}
          className="inline-flex items-center gap-2 h-11 sm:h-auto text-[13.5px] text-muted hover:text-fg transition-colors"
        >
          <Icon name="chevron-left" size={15} />
          Überblick
        </Link>
        <span className="text-faint">/</span>
        <span className="font-head text-[14px] font-semibold text-fg">Einrichtung</span>
        <span className="ml-auto font-mono text-[10px] tracking-[0.14em] uppercase text-faint">
          Änderungen werden sofort gespeichert
        </span>
      </div>

      <div className="grid xl:grid-cols-2 items-start">
        {/* ── Links: Rahmendaten + Helden + epische Variante ─────────── */}
        <div className="px-5 py-6 sm:px-6 flex flex-col gap-6 border-b xl:border-b-0 xl:border-r border-line">
          <div>
            <Head size="s">Rahmendaten</Head>
            <p className="mt-1 mb-3.5 text-[13.5px] text-muted">
              Nach dem ersten Abend ändert sich hier praktisch nichts mehr.
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <Micro className="block mb-1.5">Name der Runde</Micro>
                <TextField
                  label="Name der Runde"
                  value={session.name}
                  maxLength={120}
                  placeholder="z. B. Dienstagsrunde"
                  onChange={(v) => patchSession({ name: v })}
                  onBlur={() => {
                    // Ein leerer Name würde die Kampagne in der Auswahlliste
                    // namenlos machen — beim Verlassen auf einen Default zurück.
                    if (!session.name.trim()) patchSession({ name: 'Unbenannte Kampagne' })
                  }}
                />
              </div>
              <div>
                <Micro className="block mb-1.5">Kampagne</Micro>
                <Select
                  label="Kampagne"
                  value={session.campaignId}
                  onChange={(v) => patchSession({ campaignId: v })}
                >
                  {CAMPAIGNS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.nameDe} ({c.kind === 'mini' ? 'Mini-Kampagne' : 'Großkampagne'})
                    </option>
                  ))}
                </Select>
                {campaign && (
                  <p className="mt-1.5 text-[12.5px] text-muted">
                    {EXP_BY_ID[campaign.expansionId]?.nameDe ?? campaign.expansionId} ·{' '}
                    {campaign.branching ? 'verzweigter Szenariobaum' : 'linearer Ablauf'}
                  </p>
                )}
              </div>
              <div className="flex gap-3 flex-wrap">
                <div className="flex-1 min-w-[10rem]">
                  <Micro className="block mb-1.5">Spielerzahl</Micro>
                  <Segmented<2 | 3 | 4>
                    block
                    value={session.playerCount}
                    onChange={(v) => patchSession({ playerCount: v })}
                    options={[
                      { value: 2, label: '2' },
                      { value: 3, label: '3' },
                      { value: 4, label: '4' },
                    ]}
                  />
                </div>
                <div className="w-[140px]">
                  <Micro className="block mb-1.5">Start-Gold</Micro>
                  <NumberField
                    label="Start-Gold"
                    value={session.startingGold}
                    onChange={(n) => patchSession({ startingGold: n })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Helden & Klassen */}
          <div>
            <Head size="s">Helden &amp; Klassen</Head>
            <p className="mt-1 mb-3 text-[13.5px] text-muted">
              Startfähigkeiten und Startausrüstung werden aus der Klasse vorbelegt — abweichende Auswahl nur bei Bedarf
              aufklappen.
            </p>
            <div className="flex flex-col gap-2">
              {session.heroes.map((h) => {
                const data = HERO_BY_ID[h.heroId]
                const cls = h.classId ? CLASS_BY_ID[h.classId] : null
                const classOptions = data
                  ? HERO_CLASSES.filter((c) => c.archetype === data.archetype && owns(c.expansionId))
                  : []
                const open = detailHero === h.localId
                return (
                  <div key={h.localId} className="rounded-control border border-line bg-surface">
                    <div className="flex items-center gap-3 px-3 py-2.5 flex-wrap">
                      <span className="w-7 h-7 shrink-0 rounded-chip bg-accent-soft border border-accent-line inline-flex items-center justify-center font-mono text-[9px] text-accent">
                        {heroMono(h)}
                      </span>
                      <span className="min-w-0 flex-1 flex items-baseline gap-2">
                        <span className="min-w-0 font-head text-[14px] font-semibold text-fg truncate">
                          {data?.name ?? h.heroId}
                        </span>
                        {data && (
                          <span
                            className="shrink-0 self-center"
                            title={ARCHETYPE_LABELS[data.archetype]}
                            aria-label={ARCHETYPE_LABELS[data.archetype]}
                          >
                            <ArchetypeIcon archetype={data.archetype} size={16} />
                          </span>
                        )}
                      </span>
                      <input
                        value={h.playerName}
                        placeholder="Spieler …"
                        aria-label={`Spieler von ${data?.name ?? h.heroId}`}
                        onChange={(e) => patchHero(h.localId, { playerName: e.target.value.slice(0, 60) })}
                        className="w-28 h-11 sm:h-auto bg-transparent border-b border-transparent hover:border-line focus:border-accent text-[13px] text-muted focus:text-fg focus:outline-none"
                      />
                      <select
                        aria-label={`Klasse von ${data?.name ?? h.heroId}`}
                        value={h.classId ?? ''}
                        onChange={(e) => {
                          const next = withClass(h, e.target.value ? CLASS_BY_ID[e.target.value] ?? null : null)
                          patchHero(h.localId, {
                            classId: next.classId,
                            startingSkillIds: next.startingSkillIds,
                            startingItemRefs: next.startingItemRefs,
                          })
                        }}
                        className="h-11 sm:h-8 rounded-control border border-line bg-surface-2 px-2.5 text-[13px] text-fg focus:outline-none focus:border-accent"
                      >
                        <option value="">– keine Klasse –</option>
                        {classOptions.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.nameDe}
                            {c.kind === 'hybrid' ? ' (Hybrid)' : ''}
                          </option>
                        ))}
                      </select>
                      <IconBtn
                        icon={open ? 'chevron-up' : 'chevron-down'}
                        label="Start-Auswahl anzeigen"
                        onClick={() => setDetailHero(open ? null : h.localId)}
                      />
                      <IconBtn
                        icon="trash"
                        label="Held entfernen"
                        onClick={() =>
                          requestDelete({ type: 'hero', id: h.localId, name: data?.name ?? 'Held' })
                        }
                      />
                    </div>

                    {open && (
                      <div className="px-3 pb-3 pt-1 border-t border-line flex flex-col gap-3">
                        {cls ? (
                          <>
                            <div>
                              <Micro className="block mb-1.5">Start-Fähigkeiten</Micro>
                              <div className="flex flex-wrap gap-1.5">
                                {cls.skills.map((s) => (
                                  <ChipToggle
                                    key={s.id}
                                    active={h.startingSkillIds.includes(s.id)}
                                    title={s.rulesDe}
                                    onClick={() =>
                                      patchHero(h.localId, { startingSkillIds: toggleId(h.startingSkillIds, s.id) })
                                    }
                                  >
                                    {s.nameDe}
                                    <span className="opacity-60"> · {s.xpCost === 0 ? 'Start' : `${s.xpCost} XP`}</span>
                                  </ChipToggle>
                                ))}
                              </div>
                            </div>
                            <div>
                              <Micro className="block mb-1.5">Startausrüstung</Micro>
                              <div className="flex flex-col gap-1.5">
                                {h.startingItemRefs.map((ref) => (
                                  <div key={ref.refId} className="flex items-center gap-2.5">
                                    <CardThumb url={itemCardUrl(ref)} name={resolveItemName(ref)} size="xs" />
                                    <span className="flex-1 min-w-0 text-[13.5px] text-fg">
                                      {resolveItemName(ref)}
                                    </span>
                                    <IconBtn
                                      icon="close"
                                      label="Gegenstand entfernen"
                                      onClick={() =>
                                        patchHero(h.localId, {
                                          startingItemRefs: h.startingItemRefs.filter((x) => x.refId !== ref.refId),
                                        })
                                      }
                                    />
                                  </div>
                                ))}
                                <Btn
                                  variant="ghost"
                                  size="sm"
                                  icon="plus"
                                  className="self-start"
                                  onClick={() => setItemPickerFor(h.localId)}
                                >
                                  Gegenstand ergänzen
                                </Btn>
                              </div>
                            </div>
                          </>
                        ) : (
                          <p className="text-[13px] text-muted">
                            Ohne Klasse gibt es keine Startfähigkeiten und keine Startausrüstung.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}

              <button
                type="button"
                onClick={() => setAdding(true)}
                disabled={session.heroes.length >= 4}
                className="inline-flex items-center gap-2 min-h-11 px-3 py-2.5 rounded-control border border-dashed border-line text-[13.5px] text-muted hover:text-fg hover:border-accent-line transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Icon name="plus" size={14} />
                Held hinzufügen · {session.heroes.length} von 4 belegt
              </button>
            </div>
          </div>

          {/* Epische Variante */}
          <div>
            <div className="flex items-center gap-3">
              <Switch checked={epicOn} onChange={(v) => patchSession({ epic: v })} label="Epische Variante" />
              <div>
                <Head size="s">Epische Variante</Head>
                <p className="mt-1 text-[13.5px] text-muted">
                  Helden starten mit Erfahrung und Schicksalsmarkern. Aus bleibt der Block leer.
                </p>
              </div>
            </div>

            {epicOn && (
              <>
                <div className="mt-3 rounded-control border border-line overflow-hidden">
                  <div className="grid grid-cols-[1fr_96px_96px] px-3 py-2 bg-surface-2 border-b border-line">
                    <Micro>Held</Micro>
                    <Micro className="text-right">Start-XP</Micro>
                    <Micro className="text-right">Schicksal</Micro>
                  </div>
                  {session.heroes.length === 0 && (
                    <p className="px-3 py-3 text-[13px] text-muted">Noch keine Helden angelegt.</p>
                  )}
                  {session.heroes.map((h) => (
                    <div
                      key={h.localId}
                      className="grid grid-cols-[1fr_96px_96px] items-center px-3 py-2 border-b border-line last:border-b-0 bg-surface"
                    >
                      <span className="inline-flex items-center gap-2.5 min-w-0">
                        <span className="w-[26px] h-[26px] shrink-0 rounded-chip bg-accent-soft border border-accent-line inline-flex items-center justify-center font-mono text-[8.5px] text-accent">
                          {heroMono(h)}
                        </span>
                        <span className="font-head text-[14px] font-semibold text-fg truncate">
                          {HERO_BY_ID[h.heroId]?.name ?? h.heroId}
                        </span>
                      </span>
                      <NumberField
                        label={`Start-XP ${HERO_BY_ID[h.heroId]?.name ?? ''}`}
                        className="!h-9 text-right"
                        max={99}
                        value={h.startingXp ?? 0}
                        onChange={(n) => patchHero(h.localId, { startingXp: n })}
                      />
                      <NumberField
                        label={`Start-Schicksal ${HERO_BY_ID[h.heroId]?.name ?? ''}`}
                        className="!h-9 text-right"
                        max={99}
                        value={h.startingFateTokens ?? 0}
                        onChange={(n) => {
                          patchHero(h.localId, { startingFateTokens: n })
                        }}
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-2.5 text-[13px] leading-[1.55] text-muted">
                  Start-XP zählen in die verdiente Erfahrung des Helden und dürfen schon vor dem ersten Szenario
                  ausgegeben werden. Die Schicksalsmarker füllen den gemeinsamen Vorrat der Partei.
                </p>
                <Btn
                  variant="ghost"
                  size="sm"
                  className="mt-2.5"
                  onClick={() =>
                    patchSession({
                      partyFateTokens: session.heroes.reduce((n, h) => n + (h.startingFateTokens ?? 0), 0),
                    })
                  }
                >
                  Schicksalsmarker in den Partei-Vorrat übernehmen
                </Btn>
              </>
            )}
          </div>
        </div>

        {/* ── Rechts: Overlord-Aufbau + Daten ────────────────────────── */}
        <ThemeScope theme="overlord" className="bg-surface-2 px-5 py-6 sm:px-6 flex flex-col gap-6 min-h-full">
          <div>
            <Head size="s">Overlord-Aufbau</Head>
            <p className="mt-1 mb-3 text-[13.5px] text-muted">
              Decks bestimmen, welche Karten im Kartendeck und im Abschluss-Flow auftauchen.
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <Micro className="block mb-2">Gewählte Decks</Micro>
                <div className="flex flex-wrap gap-2">
                  {pickableDecks.map((d) => {
                    const on = session.overlord.deckIds.includes(d.id)
                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => toggleDeck(d)}
                        aria-pressed={on}
                        title={`${d.nameDe} · ${EXP_BY_ID[d.expansionId]?.nameDe ?? d.expansionId}`}
                      >
                        <Badge variant={on ? 'accent' : 'outline'}>{d.nameDe}</Badge>
                      </button>
                    )
                  })}
                </div>
              </div>
              <div>
                <Micro className="block mb-1.5">Leutnant</Micro>
                <Select
                  label="Leutnant"
                  value={session.overlord.lieutenantId ?? ''}
                  onChange={changeLieutenant}
                >
                  <option value="">– kein Leutnant –</option>
                  {lieutenants.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.nameDe}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Micro className="block mb-1.5">Plotdeck</Micro>
                <Select
                  label="Plotdeck"
                  value={session.overlord.plotDeckId ?? ''}
                  onChange={(v) => patchOverlord({ plotDeckId: v || null, ownedPlotCardIds: [] })}
                >
                  <option value="">– kein Plotdeck –</option>
                  {plotDecks.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.nameDe}
                    </option>
                  ))}
                </Select>
                <p className="mt-1.5 text-[12.5px] text-muted">Folgt automatisch dem Leutnant.</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <Micro className="block mb-1.5">Start-XP</Micro>
                  <NumberField
                    label="Start-XP des Overlords"
                    value={session.overlord.startingXp}
                    onChange={(n) => patchOverlord({ startingXp: n })}
                  />
                </div>
                <div className="flex-1">
                  <Micro className="block mb-1.5">Start-Bedrohung</Micro>
                  <NumberField
                    label="Start-Bedrohung"
                    value={session.overlord.threatTokens}
                    onChange={(n) => patchOverlord({ threatTokens: n })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <Head size="s">Daten</Head>
            <p className="mt-1 mb-3 text-[13.5px] text-muted">
              Alles bleibt lokal im Browser. Der Export ist verlustfrei importierbar.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Btn variant="ghost" size="sm" icon="download" onClick={() => exportSessionAsJSON(session)}>
                Als JSON sichern
              </Btn>
              <label className="inline-flex items-center justify-center gap-2 h-9 px-3.5 rounded-control bg-surface text-muted border border-line font-head font-semibold text-[13.5px] cursor-pointer whitespace-nowrap hover:text-fg transition-colors">
                <Icon name="upload" size={14} />
                JSON laden
                <input type="file" accept=".json" className="hidden" onChange={handleImport} />
              </label>
            </div>

            <div className="mt-3.5 p-3.5 rounded-card border border-accent-line bg-surface">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent-bright">
                Kampagne beenden
              </span>
              <div className="flex flex-col gap-3 mt-3">
                <div className="flex items-center gap-3.5 flex-wrap">
                  <div className="min-w-0 flex-1">
                    <p className="font-head text-[14px] font-semibold text-fg">Archivieren</p>
                    <p className="mt-1 text-[12.5px] leading-[1.5] text-muted">
                      Bleibt vollständig lesbar, verschwindet aber aus der laufenden Ansicht.
                    </p>
                  </div>
                  <Btn
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      patchSession({ archived: !session.archived })
                      if (!session.archived) navigate('/session')
                    }}
                  >
                    {session.archived ? 'Wieder aufnehmen' : 'Archivieren'}
                  </Btn>
                </div>
                <div className="flex items-center gap-3.5 pt-3 border-t border-line flex-wrap">
                  <div className="min-w-0 flex-1">
                    <p className="font-head text-[14px] font-semibold text-fg">Endgültig löschen</p>
                    <p className="mt-1 text-[12.5px] leading-[1.5] text-muted">
                      Entfernt Helden, Overlord-Aufbau und den kompletten Verlauf. Nicht rückgängig zu machen —
                      archivieren reicht meistens.
                    </p>
                  </div>
                  <Btn
                    variant="ghost"
                    size="sm"
                    onClick={() => requestDelete({ type: 'session', id: session.id, name: session.name })}
                  >
                    Löschen
                  </Btn>
                </div>
              </div>
            </div>
          </div>
        </ThemeScope>
      </div>

      {/* ── Gerüchtedeck (über beide Spalten) ────────────────────────── */}
      {campaign?.kind !== 'mini' && (
        <div className="px-5 py-6 sm:px-6 border-t border-line">
          <div className="flex items-end justify-between gap-4 mb-3.5 flex-wrap">
            <div>
              <Head size="s">Gerüchtedeck — beim Kampagnenstart ziehen</Head>
              <p className="mt-1 text-[13.5px] leading-[1.55] text-muted max-w-[80ch]">
                Steht bewusst über beiden Spalten: gezogene Gerüchte wirken auf Helden{' '}
                <strong className="font-semibold text-fg">und</strong> Overlord, deshalb führt der Tracker sie an einer
                gemeinsamen Stelle statt im Overlord-Bereich. Zusatzabenteuer sind kein Teil des Decks — sie kommen nur
                über Belohnungen ins Spiel.
              </p>
            </div>
            <div className="flex items-end gap-3 shrink-0">
              <div>
                <Micro className="block mb-2">Anzahl</Micro>
                <Stepper value={drawCount} min={1} max={20} label="Anzahl Gerüchte" onChange={setDrawCount} />
              </div>
              <Btn variant="ghost" size="sm" onClick={() => drawRumors(drawCount)}>
                Neu ziehen
              </Btn>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {session.rumors.map((t) => {
              const rumor = RUMORS.find((r) => r.id === t.rumorId)
              return (
                <span
                  key={t.rumorId}
                  className="inline-flex items-center gap-2 h-[34px] px-3.5 rounded-pill border border-accent-line bg-accent-soft text-[13.5px] text-fg whitespace-nowrap"
                >
                  {rumor?.nameDe ?? t.rumorId}
                  <button
                    type="button"
                    aria-label={`${rumor?.nameDe ?? t.rumorId} entfernen`}
                    onClick={() => setRumors(session.rumors.filter((x) => x.rumorId !== t.rumorId))}
                    className="text-muted hover:text-fg"
                  >
                    <Icon name="close" size={12} />
                  </button>
                </span>
              )
            })}

            <label className="inline-flex items-center gap-2 h-[34px] px-3.5 rounded-pill border border-dashed border-line text-[13.5px] text-muted whitespace-nowrap cursor-pointer hover:text-fg transition-colors">
              <Icon name="plus" size={13} />
              Gerücht von Hand hinzufügen
              <select
                aria-label="Gerücht von Hand hinzufügen"
                value={manualRumor}
                onChange={(e) => {
                  const id = e.target.value
                  if (id) setRumors([...session.rumors, { rumorId: id, status: 'in-play' }])
                  setManualRumor('')
                }}
                className="bg-transparent text-[13px] text-fg focus:outline-none max-w-[9rem]"
              >
                <option value="">wählen …</option>
                {deckPool
                  .filter((r) => !drawn.has(r.id))
                  .map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.nameDe}
                    </option>
                  ))}
              </select>
            </label>
          </div>

          <p className="mt-3 text-[13px] leading-[1.55] text-muted">
            Gezogen wird aus allen Erweiterungen deiner Sammlung ({deckPool.length} Karten im Deck).
            Mini-Kampagnen verwenden keine Gerüchtekarten — dort bleibt dieser Block ausgeblendet.
          </p>
        </div>
      )}
    </div>
  )
}
