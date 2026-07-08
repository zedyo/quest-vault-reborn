// Helden-Tab: pro Held Spieler, Klasse, Start-Fähigkeiten, Startausrüstung +
// Begleiter-Anzeige. „+ Held hinzufügen“ öffnet einen Portrait-Picker.

import { useMemo, useState } from 'react'
import type { HeroClass } from '../../types/game'
import type { CampaignSession, ItemRef, TrackedHero } from '../../types/session'
import type { HeroLiveState, LiveState } from '../../store/sessionDerive'
import { HEROES, ARCHETYPE_COLORS, ARCHETYPE_LABELS } from '../../data/heroes'
import { HERO_CLASSES } from '../../data/heroClasses'
import ModalOverlay from '../ModalOverlay'
import ArchetypeIcon from '../ArchetypeIcon'
import { OwnedToggle } from '../Filters'
import { renderGameText } from '../GameSymbols'
import { CLASS_BY_ID, HERO_BY_ID, heroDisplayName, resolveItemName, withClass } from './sessionHelpers'
import { ChipToggle, ItemThumb, NumberInput, TextInput, SubHeading } from './ui'
import ItemPicker from './ItemPicker'

const MAX_HEROES = 4

// Aktions-Dropdown (Item zuweisen/verschieben). `[&>option]:text-sm` gleicht die
// Schriftgröße von geschlossenem Feld und aufgeklapptem Menü an; feste, ausreichend
// breite Größe, damit der Platzhaltertext nicht abgeschnitten wirkt.
const REASSIGN_SELECT =
  'shrink-0 w-48 max-w-[55vw] bg-dungeon-900 border border-dungeon-700 rounded px-2 py-1.5 text-sm text-gray-100 focus:outline-none focus:border-gold-500 [&>option]:text-sm'

// ── Add-Hero-Modal (Portrait-Grid) ────────────────────────────────────────────

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
  const [onlyOwned, setOnlyOwned] = useState(true)
  const heroes = HEROES.filter(
    (h) => !usedHeroIds.includes(h.id) && (!onlyOwned || ownedExpansionIds.includes(h.expansionId)),
  )
  return (
    <ModalOverlay
      onClose={onClose}
      ariaLabel="Held hinzufügen"
      className="bg-dungeon-900 border border-dungeon-600 rounded-lg shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col"
    >
      <div className="p-4 border-b border-dungeon-700 flex items-center justify-between gap-3">
        <h3 className="font-display text-lg text-gold-300 font-bold">Held hinzufügen</h3>
        <div className="flex items-center gap-3">
          <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />
          <button onClick={onClose} className="text-gray-500 hover:text-gray-200 text-xl leading-none">×</button>
        </div>
      </div>
      <div className="p-4 overflow-y-auto">
        {heroes.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-6">Keine weiteren Helden verfügbar.</p>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {heroes.map((hero) => (
              <button
                key={hero.id}
                onClick={() => {
                  onAdd(hero.id)
                  onClose()
                }}
                title={hero.name}
                className="rounded-md overflow-hidden border-2 border-dungeon-600 hover:border-gold-400 transition-colors"
              >
                <div className="aspect-[3/4] bg-dungeon-900 overflow-hidden">
                  {hero.imageUrl ? (
                    <img
                      src={hero.imageUrl}
                      alt={hero.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'left center' }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600">⚔</div>
                  )}
                </div>
                <div className={`px-1 py-0.5 text-center ${ARCHETYPE_COLORS[hero.archetype]}`}>
                  <span className="block text-[9px] font-semibold truncate">{hero.name.split(' ')[0]}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </ModalOverlay>
  )
}

// ── HeroSetupCard ─────────────────────────────────────────────────────────────

function HeroSetupCard({
  hero,
  live,
  heroes,
  ownedExpansionIds,
  onPatch,
  onRemove,
  onReassign,
}: {
  hero: TrackedHero
  live: HeroLiveState | undefined
  heroes: TrackedHero[]
  ownedExpansionIds: string[]
  onPatch: (patch: Partial<TrackedHero>) => void
  onRemove: () => void
  onReassign: (refId: string, toHeroLocalId: string | null) => void
}) {
  const [itemPicker, setItemPicker] = useState(false)
  const heroData = HERO_BY_ID[hero.heroId]
  const cls: HeroClass | null = hero.classId ? CLASS_BY_ID[hero.classId] ?? null : null

  const classOptions = useMemo(
    () =>
      heroData
        ? HERO_CLASSES.filter(
            (c) => c.archetype === heroData.archetype && ownedExpansionIds.includes(c.expansionId),
          )
        : [],
    [heroData, ownedExpansionIds],
  )

  const startingSkills = new Set(hero.startingSkillIds)
  const ownedItems = live?.ownedItemRefs ?? hero.startingItemRefs
  // Nur Start-/manuell hinzugefügte Gegenstände sind hier entfernbar; Szenario-erlangte
  // Items (nicht in startingItemRefs) werden im Szenario-Protokoll verwaltet.
  const startingRefIds = new Set(hero.startingItemRefs.map((r) => r.refId))

  function toggleSkill(skillId: string) {
    onPatch({
      startingSkillIds: startingSkills.has(skillId)
        ? hero.startingSkillIds.filter((s) => s !== skillId)
        : [...hero.startingSkillIds, skillId],
    })
  }

  function changeClass(classId: string) {
    const next = withClass(hero, classId ? CLASS_BY_ID[classId] ?? null : null)
    onPatch({
      classId: next.classId,
      startingSkillIds: next.startingSkillIds,
      startingItemRefs: next.startingItemRefs,
    })
  }

  function addItem(ref: ItemRef) {
    onPatch({ startingItemRefs: [...hero.startingItemRefs, ref] })
  }
  function removeItem(refId: string) {
    onPatch({ startingItemRefs: hero.startingItemRefs.filter((r) => r.refId !== refId) })
  }

  return (
    <div className="card space-y-4">
      {itemPicker && (
        <ItemPicker ownedExpansionIds={ownedExpansionIds} onPick={addItem} onClose={() => setItemPicker(false)} />
      )}

      {/* Kopf: Portrait + Name + Archetyp */}
      <div className="flex items-start gap-3">
        <div className="w-14 shrink-0 rounded-md overflow-hidden border border-dungeon-600 aspect-[3/4] bg-dungeon-900">
          {heroData?.imageUrl ? (
            <img
              src={heroData.imageUrl}
              alt={heroData.name}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'left center' }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600">⚔</div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-lg text-gold-300 font-bold truncate">
              {heroData?.name ?? hero.heroId}
            </h3>
            {heroData && (
              <span className="inline-flex items-center gap-1 text-[11px] text-gray-400">
                <ArchetypeIcon archetype={heroData.archetype} size={14} />
                {ARCHETYPE_LABELS[heroData.archetype]}
              </span>
            )}
          </div>
          {live && (
            <p className="text-[11px] text-gray-500 mt-0.5">
              {live.ownedSkillIds.length} Fähigkeiten · {live.ownedItemRefs.length} Gegenstände
              {live.xpEarned > 0 ? ` · ${live.xpAvailable}/${live.xpEarned} XP` : ''}
            </p>
          )}
          <div className="mt-1.5">
            <TextInput
              value={hero.playerName}
              onChange={(v) => onPatch({ playerName: v })}
              placeholder="Spielername…"
            />
          </div>
        </div>
        <button
          onClick={onRemove}
          title="Held entfernen"
          className="text-xs text-gray-600 hover:text-red-400 shrink-0"
        >
          🗑
        </button>
      </div>

      {/* Klassenwahl */}
      <label className="block">
        <span className="block text-xs font-semibold text-gold-400 mb-1">Klasse</span>
        <select
          value={hero.classId ?? ''}
          onChange={(e) => changeClass(e.target.value)}
          className="w-full bg-dungeon-900 border border-dungeon-700 rounded px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-gold-500"
        >
          <option value="">– keine Klasse –</option>
          {classOptions.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nameDe}
              {c.kind === 'hybrid' ? ' (Hybrid)' : ''}
            </option>
          ))}
        </select>
        {heroData && classOptions.length === 0 && (
          <p className="text-gray-500 text-xs mt-1">
            Keine {ARCHETYPE_LABELS[heroData.archetype]}-Klasse in deiner Sammlung.
          </p>
        )}
      </label>

      {cls && (
        <>
          {/* Start-Fähigkeiten */}
          <div>
            <SubHeading hint="Bei Session-Start bekannte Fähigkeiten (kostenlose Startkarten vorausgewählt).">
              Fähigkeiten
            </SubHeading>
            <div className="flex flex-wrap gap-1.5">
              {cls.skills.map((s) => (
                <ChipToggle
                  key={s.id}
                  active={startingSkills.has(s.id)}
                  onClick={() => toggleSkill(s.id)}
                  title={s.rulesDe}
                >
                  {s.nameDe}
                  <span className="opacity-60"> · {s.xpCost === 0 ? 'Start' : `${s.xpCost} XP`}</span>
                </ChipToggle>
              ))}
            </div>
          </div>

          {/* Begleiter (abgeleitet aus der Klasse) */}
          {cls.familiar && (
            <div className="rounded border border-dungeon-700 bg-dungeon-900/60 p-2.5">
              <p className="text-xs font-semibold text-gold-400 mb-0.5">
                Begleiter: {cls.familiar.nameDe}
              </p>
              <div className="text-[11px] text-gray-400 leading-snug">
                {renderGameText(cls.familiar.rulesDe, 11)}
              </div>
            </div>
          )}
        </>
      )}

      {/* Ausrüstung */}
      <div>
        <SubHeading hint="Startausrüstung ist vorbelegt; weitere Gegenstände kommen aus den Szenarien (Einkauf/Belohnung).">
          Ausrüstung
        </SubHeading>
        {ownedItems.length === 0 ? (
          <p className="text-gray-500 text-xs">Keine Gegenstände.</p>
        ) : (
          <div className="space-y-1.5">
            {ownedItems.map((ref) => {
              const isStarting = startingRefIds.has(ref.refId)
              return (
                <div key={ref.refId} className="flex items-center gap-2">
                  <ItemThumb item={ref} />
                  <span className="flex-1 min-w-0 text-sm text-gray-100 break-words">
                    {resolveItemName(ref)}
                    {ref.source === 'class-start' && (
                      <span className="ml-1 align-middle text-[9px] text-gold-500/80">Start</span>
                    )}
                  </span>
                  {isStarting ? (
                    <button
                      onClick={() => removeItem(ref.refId)}
                      title="Entfernen"
                      className="shrink-0 text-gray-500 hover:text-red-400 text-lg leading-none"
                    >
                      ×
                    </button>
                  ) : (
                    // Szenario-Gegenstand: einem anderen Helden zuweisen oder in die
                    // gemeinsame Ausrüstung zurücklegen (setzt `toHeroLocalId`).
                    <select
                      value=""
                      onChange={(e) => {
                        const v = e.target.value
                        if (v) onReassign(ref.refId, v === '__party__' ? null : v)
                      }}
                      className={REASSIGN_SELECT}
                      title="Diesen Gegenstand verschieben"
                    >
                      <option value="">verschieben zu…</option>
                      <option value="__party__">↩ Gemeinsame Ausrüstung</option>
                      {heroes
                        .filter((h) => h.localId !== hero.localId)
                        .map((h) => (
                          <option key={h.localId} value={h.localId}>
                            {heroDisplayName(h)}
                          </option>
                        ))}
                    </select>
                  )}
                </div>
              )
            })}
          </div>
        )}
        <button
          onClick={() => setItemPicker(true)}
          className="mt-2 text-xs text-gray-500 hover:text-gold-400 underline decoration-dotted underline-offset-2"
        >
          ＋ Weitere Items/Relikte manuell hinzufügen
        </button>
      </div>
    </div>
  )
}

// ── HeroesTab ─────────────────────────────────────────────────────────────────

export default function HeroesTab({
  session,
  live,
  ownedExpansionIds,
  onAddHero,
  onRemoveHero,
  onPatchHero,
  onPatchSession,
  onReassignItem,
}: {
  session: CampaignSession
  live: LiveState
  ownedExpansionIds: string[]
  onAddHero: (heroId: string) => void
  onRemoveHero: (localId: string) => void
  onPatchHero: (localId: string, patch: Partial<TrackedHero>) => void
  onPatchSession: (patch: Partial<CampaignSession>) => void
  onReassignItem: (refId: string, toHeroLocalId: string | null) => void
}) {
  const [adding, setAdding] = useState(false)
  const heroes = session.heroes

  return (
    <div className="space-y-4">
      {adding && (
        <AddHeroModal
          usedHeroIds={heroes.map((h) => h.heroId)}
          ownedExpansionIds={ownedExpansionIds}
          onAdd={onAddHero}
          onClose={() => setAdding(false)}
        />
      )}

      {/* Partei: Schicksalsmarker + gemeinsame Ausrüstung */}
      <div className="card space-y-3">
        <SubHeading hint="Gemeinsam für die ganze Gruppe.">Partei</SubHeading>
        <NumberInput
          label="Schicksalsmarker (aktuell)"
          value={session.partyFateTokens}
          onChange={(v) => onPatchSession({ partyFateTokens: v })}
          min={0}
          max={100000}
        />
        <div>
          <p className="text-[10px] uppercase tracking-wider text-gray-600 mb-1">Gemeinsame Ausrüstung</p>
          {live.partyItemRefs.length === 0 ? (
            <p className="text-gray-600 text-xs">
              Keine gemeinsamen Gegenstände. (Items aus Szenario-Belohnungen/-Käufen, die keinem Helden zugewiesen wurden.)
            </p>
          ) : (
            <div className="space-y-1.5">
              {live.partyItemRefs.map((ref) => (
                <div key={ref.refId} className="flex items-center gap-2">
                  <ItemThumb item={ref} />
                  <span className="flex-1 min-w-0 font-medium text-gray-100 text-sm break-words">{resolveItemName(ref)}</span>
                  <select
                    value=""
                    onChange={(e) => onReassignItem(ref.refId, e.target.value || null)}
                    className={REASSIGN_SELECT}
                    title="Diesen Gegenstand einem Helden zuweisen"
                  >
                    <option value="">einem Helden zuweisen…</option>
                    {heroes.map((h) => (
                      <option key={h.localId} value={h.localId}>{heroDisplayName(h)}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-gray-400 text-sm">
          {heroes.length}/{MAX_HEROES} Helden
        </p>
        <button
          onClick={() => setAdding(true)}
          disabled={heroes.length >= MAX_HEROES}
          className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          + Held hinzufügen
        </button>
      </div>

      {heroes.length === 0 ? (
        <div className="card text-center text-gray-500 py-12">
          Noch keine Helden. Füge bis zu {MAX_HEROES} Helden hinzu.
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {heroes.map((hero) => (
            <HeroSetupCard
              key={hero.localId}
              hero={hero}
              live={live.heroes[hero.localId]}
              heroes={heroes}
              ownedExpansionIds={ownedExpansionIds}
              onPatch={(patch) => onPatchHero(hero.localId, patch)}
              onRemove={() => onRemoveHero(hero.localId)}
              onReassign={onReassignItem}
            />
          ))}
        </div>
      )}
    </div>
  )
}
