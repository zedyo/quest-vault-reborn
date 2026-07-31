import { useState, useMemo, useRef, type JSX } from 'react'
import { useGameStore } from '../store/useGameStore'
import type { Quest, Encounter, MapData, PlacedTile, PlacedMonster, PlacedOverlay } from '../types/game'
import type { PlacedMapTile } from '../components/MapBuilder/types'
import MapBuilder from '../components/MapBuilder'
import { MONSTERS } from '../data/monsters'
import { HEROES, ARCHETYPE_COLORS } from '../data/heroes'
import { GRID_COLS, GRID_ROWS } from '../components/MapBuilder/constants'
import { parseImportedQuest, MAX_IMPORT_BYTES } from '../utils/questImport'
import { renderGameTextInline, HeartSymbol, SurgeSymbol, FatigueSymbol, ActionSymbol } from '../components/GameSymbols'
import ConfirmDialog from '../components/ConfirmDialog'
import HeroPortrait from '../components/HeroPortrait'
import { heroPortraitUrl } from '../data/assetUrls'

const uid = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(36).slice(2)}`

// ── JSON export/import ────────────────────────────────────────────────────────

function exportQuestAsJSON(quest: Quest) {
  const blob = new Blob([JSON.stringify(quest, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${quest.title.replace(/\s+/g, '-').toLowerCase()}.json`
  a.click()
  URL.revokeObjectURL(url)
}


// ── Print helpers ─────────────────────────────────────────────────────────────

function groupMonsters(monsters: PlacedMonster[]) {
  const map = new Map<string, { nameDe: string; isMaster: boolean; count: number }>()
  for (const m of monsters) {
    const key = `${m.monsterId}-${String(m.isMaster)}`
    const nameDe = MONSTERS.find((x) => x.id === m.monsterId)?.nameDe ?? m.monsterId
    const entry = map.get(key)
    if (entry) entry.count++
    else map.set(key, { nameDe, isMaster: m.isMaster, count: 1 })
  }
  return [...map.values()]
}

function QuestPrintView({ quest }: { quest: Quest }) {
  const heroNames = (quest.heroIds ?? [])
    .map((id) => {
      const h = HEROES.find((x) => x.id === id)
      return h ? h.name : null
    })
    .filter(Boolean) as string[]

  const s = (val: string | undefined, fallback = '') => val || fallback

  return (
    <div className="quest-print-view">
      {/* Header */}
      <div style={{ borderBottom: '2px solid #000', paddingBottom: 8, marginBottom: 14 }}>
        <div style={{ fontSize: 22, fontWeight: 'bold', margin: 0 }}>{quest.title}</div>
        {quest.description && (
          <div style={{ marginTop: 4, fontSize: 13, color: '#333' }}>{renderGameTextInline(quest.description, 13)}</div>
        )}
      </div>

      {/* Heroes */}
      {heroNames.length > 0 && (
        <div style={{ marginBottom: 12, fontSize: 12 }}>
          <strong>Helden: </strong>{heroNames.join(' · ')}
        </div>
      )}

      {/* Encounters */}
      {quest.encounters.map((enc, i) => (
        <div key={enc.id} style={{ marginBottom: 20, pageBreakInside: 'avoid' }}>
          <div style={{ fontSize: 15, fontWeight: 'bold', borderBottom: '1px solid #aaa', paddingBottom: 3, marginBottom: 8 }}>
            {i + 1}. Begegnung – {enc.title}
          </div>

          {enc.flavourText && (
            <div style={{ fontStyle: 'italic', fontSize: 12, marginBottom: 8, color: '#444', borderLeft: '3px solid #ccc', paddingLeft: 8 }}>
              {renderGameTextInline(enc.flavourText, 12)}
            </div>
          )}

          {/* 2-column grid for text fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: 8 }}>
            {[
              { label: 'Aufbau', value: s(enc.setup) },
              { label: 'Sonderregeln', value: s(enc.specialRules) },
              { label: 'Verstärkungen', value: s(enc.reinforcements) },
              { label: 'Siegbedingungen', value: s(enc.victoryConditions) },
              { label: 'Belohnungen', value: s(enc.rewards) },
            ]
              .filter((f) => f.value)
              .map(({ label, value }) => (
                <div key={label}>
                  <div style={{ fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#555' }}>{label}</div>
                  <div style={{ fontSize: 12, marginTop: 2, whiteSpace: 'pre-wrap' }}>{renderGameTextInline(value, 12)}</div>
                </div>
              ))}

            {enc.monsters.length > 0 && (
              <div>
                <div style={{ fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#555' }}>Monster</div>
                <ul style={{ margin: '2px 0 0 14px', padding: 0, fontSize: 12 }}>
                  {groupMonsters(enc.monsters).map(({ nameDe, isMaster, count }) => (
                    <li key={nameDe + String(isMaster)}>
                      {nameDe} ({isMaster ? 'Anführer' : 'Normal'}){count > 1 ? ` ×${count}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {enc.story && (
            <div style={{ fontSize: 12, fontStyle: 'italic', color: '#444', marginTop: 4 }}>
              <strong style={{ fontStyle: 'normal', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Geschichte</strong>
              <div style={{ marginTop: 2 }}>{renderGameTextInline(enc.story, 12)}</div>
            </div>
          )}
        </div>
      ))}

      {/* Footer */}
      <div style={{ borderTop: '1px solid #ccc', paddingTop: 6, fontSize: 9, color: '#999', textAlign: 'center' }}>
        Quest Vault Reborn · {new Date().toLocaleDateString('de-DE')}
      </div>
    </div>
  )
}

function emptyMapData(): MapData {
  return { tiles: [], overlays: [], width: GRID_COLS, height: GRID_ROWS }
}

function newEncounter(index: number): Encounter {
  return {
    id: uid(),
    title: `Begegnung ${index}`,
    mapData: emptyMapData(),
    flavourText: '',
    monsters: [],
    setup: '',
    specialRules: '',
    reinforcements: '',
    victoryConditions: '',
    rewards: '',
    story: '',
  }
}

function newQuest(): Quest {
  const now = new Date().toISOString()
  return {
    id: uid(),
    title: 'Neue Quest',
    description: '',
    createdAt: now,
    updatedAt: now,
    heroIds: [],
    encounters: [newEncounter(1)],
  }
}

// Map between the domain tile shape and the builder's native shape.
const toBuilderTiles = (tiles: PlacedTile[]): PlacedMapTile[] =>
  tiles.map((t) => ({
    instanceId: t.id,
    tileId: t.tileId,
    col: t.x,
    row: t.y,
    rotation: t.rotation,
  }))

const toDomainTiles = (tiles: PlacedMapTile[]): PlacedTile[] =>
  tiles.map((t) => ({
    id: t.instanceId,
    tileId: t.tileId,
    x: t.col,
    y: t.row,
    rotation: t.rotation,
  }))

interface TextFieldProps {
  label: string
  value: string
  onChange: (v: string) => void
  rows?: number
  placeholder?: string
}

// Wörter, die in Vorschau/Druck als Kartensymbole gerendert werden (siehe
// renderGameTextInline). Über die Leiste per Klick einfügbar.
const INSERTABLE_SYMBOLS: { word: string; Icon: (p: { size?: number }) => JSX.Element }[] = [
  { word: 'Herz', Icon: HeartSymbol },
  { word: 'Schub', Icon: SurgeSymbol },
  { word: 'Erschöpfung', Icon: FatigueSymbol },
  { word: 'Aktion', Icon: ActionSymbol },
]

function SymbolInsertBar({ onInsert }: { onInsert: (word: string) => void }) {
  return (
    <span className="flex items-center gap-1">
      {INSERTABLE_SYMBOLS.map(({ word, Icon }) => (
        <button
          key={word}
          type="button"
          title={`„${word}" einfügen – erscheint in Vorschau & Druck als Symbol`}
          aria-label={`${word} als Symbol einfügen`}
          // onMouseDown + preventDefault: Fokus/Cursor im Textfeld bleibt erhalten
          onMouseDown={(e) => {
            e.preventDefault()
            onInsert(word)
          }}
          className="inline-flex items-center justify-center w-6 h-6 rounded bg-dungeon-800 border border-dungeon-700 hover:border-gold-500 hover:bg-dungeon-700 transition-colors"
        >
          <Icon size={13} />
        </button>
      ))}
    </span>
  )
}

function TextField({ label, value, onChange, rows = 3, placeholder }: TextFieldProps) {
  const taRef = useRef<HTMLTextAreaElement>(null)

  const insertSymbol = (word: string) => {
    const el = taRef.current
    // Cursorposition nur nutzen, wenn das Feld fokussiert ist – sonst ans Ende anhängen
    const focused = !!el && document.activeElement === el
    const start = focused ? el.selectionStart : value.length
    const end = focused ? el.selectionEnd : value.length
    const before = value.slice(0, start)
    const after = value.slice(end)
    // Leerzeichen davor, damit die Wortgrenze stimmt (sonst rendert das Symbol nicht)
    const sep = before.length > 0 && !/\s$/.test(before) ? ' ' : ''
    const insert = sep + word
    onChange(before + insert + after)
    const caret = before.length + insert.length
    requestAnimationFrame(() => {
      if (!el) return
      el.focus()
      el.setSelectionRange(caret, caret)
    })
  }

  return (
    <div className="block">
      <div className="flex items-center justify-between gap-2 mb-1">
        <span className="text-xs font-semibold text-gold-400">{label}</span>
        <SymbolInsertBar onInsert={insertSymbol} />
      </div>
      <textarea
        ref={taRef}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-dungeon-900 border border-dungeon-700 rounded px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-gold-500 resize-y"
      />
    </div>
  )
}

function HeroPicker({
  selectedIds,
  availableHeroIds,
  onToggle,
}: {
  selectedIds: string[]
  availableHeroIds: string[]
  onToggle: (id: string) => void
}) {
  const heroes = HEROES.filter((h) => availableHeroIds.includes(h.id))
  const MAX = 4

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-gold-400">Helden</span>
        <span className="text-xs text-gray-500">
          {selectedIds.length}/{MAX} gewählt
        </span>
        {selectedIds.length > MAX && (
          <span className="text-xs text-amber-400">⚠ Mehr als {MAX} Helden</span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {heroes.map((hero) => {
          const selected = selectedIds.includes(hero.id)
          const colorClass = ARCHETYPE_COLORS[hero.archetype]
          return (
            <button
              key={hero.id}
              onClick={() => onToggle(hero.id)}
              title={hero.name}
              className={`relative w-16 rounded-md overflow-hidden border-2 transition-all focus:outline-none ${
                selected
                  ? 'border-gold-400 shadow-[0_0_8px_rgba(251,191,36,0.4)]'
                  : 'border-dungeon-600 opacity-60 hover:opacity-90 hover:border-dungeon-500'
              }`}
            >
              {/* Kopf-Porträt aus dem deutschen Kartenscan (Kopf = 80 % der Kante) */}
              <div className="aspect-square overflow-hidden bg-dungeon-900">
                <img
                  src={heroPortraitUrl(hero.id)}
                  alt={hero.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Archetype color bar + name */}
              <div className={`px-1 py-0.5 text-center ${colorClass}`}>
                <span className="block text-[9px] font-semibold leading-tight truncate">
                  {hero.name.split(' ')[0]}
                </span>
              </div>
              {/* Selected checkmark overlay */}
              {selected && (
                <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-onaccent text-[9px] font-black leading-none">✓</span>
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function QuestEditorPage() {
  const quests = useGameStore((s) => s.quests)
  const addQuest = useGameStore((s) => s.addQuest)
  const updateQuest = useGameStore((s) => s.updateQuest)
  const deleteQuest = useGameStore((s) => s.deleteQuest)
  const ownedExpansionIds = useGameStore((s) => s.ownedExpansionIds)

  const availableMonsters = useMemo(
    () => MONSTERS.filter((m) => ownedExpansionIds.includes(m.expansionId)),
    [ownedExpansionIds],
  )

  const availableHeroIds = useMemo(
    () => HEROES.filter((h) => ownedExpansionIds.includes(h.expansionId)).map((h) => h.id),
    [ownedExpansionIds],
  )

  const [selectedQuestId, setSelectedQuestId] = useState<string | null>(null)
  const [activeEncounterId, setActiveEncounterId] = useState<string | null>(null)
  // Bestätigung vor dem Löschen (Touch-Mistap = Datenverlust vermeiden)
  const [pendingDelete, setPendingDelete] = useState<
    | { type: 'quest'; id: string; title: string }
    | { type: 'encounter'; id: string; title: string }
    | null
  >(null)

  const quest = quests.find((q) => q.id === selectedQuestId) ?? null
  const encounter =
    quest?.encounters.find((e) => e.id === activeEncounterId) ?? quest?.encounters[0] ?? null

  function persist(next: Quest) {
    updateQuest({ ...next, updatedAt: new Date().toISOString() })
  }

  function handleCreate() {
    const q = newQuest()
    addQuest(q)
    setSelectedQuestId(q.id)
    setActiveEncounterId(q.encounters[0].id)
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
        const q = parseImportedQuest(JSON.parse(ev.target?.result as string))
        if (!q) { alert('Ungültige Quest-Datei.'); return }
        addQuest(q)
        setSelectedQuestId(q.id)
        setActiveEncounterId(q.encounters[0]?.id ?? null)
      } catch {
        alert('Datei konnte nicht gelesen werden.')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  function patchQuest(patch: Partial<Pick<Quest, 'title' | 'description' | 'heroIds'>>) {
    if (!quest) return
    persist({ ...quest, ...patch })
  }

  function toggleHero(heroId: string) {
    if (!quest) return
    const current = quest.heroIds ?? []
    const next = current.includes(heroId)
      ? current.filter((id) => id !== heroId)
      : [...current, heroId]
    patchQuest({ heroIds: next })
  }

  function patchEncounter(patch: Partial<Encounter>) {
    if (!quest || !encounter) return
    persist({
      ...quest,
      encounters: quest.encounters.map((e) =>
        e.id === encounter.id ? { ...e, ...patch } : e,
      ),
    })
  }

  function addEncounter() {
    if (!quest) return
    const enc = newEncounter(quest.encounters.length + 1)
    persist({ ...quest, encounters: [...quest.encounters, enc] })
    setActiveEncounterId(enc.id)
  }

  function removeEncounter(id: string) {
    if (!quest || quest.encounters.length <= 1) return
    const remaining = quest.encounters.filter((e) => e.id !== id)
    persist({ ...quest, encounters: remaining })
    if (activeEncounterId === id) setActiveEncounterId(remaining[0].id)
  }

  function removeQuest(id: string) {
    deleteQuest(id)
    if (selectedQuestId === id) {
      setSelectedQuestId(null)
      setActiveEncounterId(null)
    }
  }

  function confirmPendingDelete() {
    if (!pendingDelete) return
    if (pendingDelete.type === 'quest') removeQuest(pendingDelete.id)
    else removeEncounter(pendingDelete.id)
    setPendingDelete(null)
  }

  // Bestätigungsdialog – in beiden Ansichten (Liste + Editor) einblendbar
  const confirmDialog = pendingDelete && (
    <ConfirmDialog
      title={pendingDelete.type === 'quest' ? 'Quest löschen?' : 'Begegnung entfernen?'}
      message={
        pendingDelete.type === 'quest' ? (
          <>
            Die Quest <strong className="text-gray-100">„{pendingDelete.title}"</strong> wird mit
            allen Begegnungen dauerhaft gelöscht. Das kann nicht rückgängig gemacht werden.
          </>
        ) : (
          <>
            Die Begegnung <strong className="text-gray-100">„{pendingDelete.title}"</strong> wird
            dauerhaft entfernt. Das kann nicht rückgängig gemacht werden.
          </>
        )
      }
      confirmLabel={pendingDelete.type === 'quest' ? 'Quest löschen' : 'Begegnung entfernen'}
      onConfirm={confirmPendingDelete}
      onCancel={() => setPendingDelete(null)}
    />
  )

  // ─── Quest-Liste ────────────────────────────────────────────────────
  if (!quest) {
    return (
      <div className="space-y-6">
        {confirmDialog}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Quest-Editor</h2>
            <p className="text-gray-400 text-sm">
              Eigene Quests mit mehreren Begegnungen, Karten und Erzähltext erstellen.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <label className="btn-secondary text-sm cursor-pointer whitespace-nowrap">
              📁 Importieren
              <input type="file" accept=".json" className="hidden" onChange={handleImport} />
            </label>
            <button onClick={handleCreate} className="btn-primary text-sm whitespace-nowrap">
              + Neue Quest
            </button>
          </div>
        </div>

        {quests.length === 0 ? (
          <div className="card flex flex-col items-center justify-center py-20 gap-3 border-dashed border-dungeon-600">
            <span className="text-5xl opacity-40">📜</span>
            <h3 className="font-display text-xl text-gray-500">Noch keine Quests</h3>
            <p className="text-gray-600 text-sm text-center max-w-md">
              Lege deine erste Quest an. Quests werden lokal in deinem Browser gespeichert.
            </p>
            <button onClick={handleCreate} className="btn-secondary text-sm mt-2">
              Erste Quest erstellen
            </button>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quests.map((q) => (
              <div
                key={q.id}
                className="card hover:border-gold-500 transition-colors cursor-pointer flex flex-col gap-2"
                onClick={() => {
                  setSelectedQuestId(q.id)
                  setActiveEncounterId(q.encounters[0]?.id ?? null)
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg text-gold-300 font-bold">{q.title}</h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setPendingDelete({ type: 'quest', id: q.id, title: q.title })
                    }}
                    className="text-xs text-gray-600 hover:text-red-400 shrink-0"
                    title="Quest löschen"
                  >
                    🗑
                  </button>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2 min-h-[2.5rem]">
                  {q.description ? renderGameTextInline(q.description, 13) : 'Keine Beschreibung'}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-gray-600 text-xs">
                    {q.encounters.length} Begegnung{q.encounters.length === 1 ? '' : 'en'}
                  </span>
                  {(q.heroIds?.length ?? 0) > 0 && (
                    <div className="flex -space-x-1.5">
                      {(q.heroIds ?? []).slice(0, 4).map((hid) => {
                        const h = HEROES.find((x) => x.id === hid)
                        if (!h) return null
                        return (
                          <HeroPortrait
                            key={hid}
                            heroId={h.id}
                            size={28}
                            title={h.name}
                            borderClass={`border-2 ${ARCHETYPE_COLORS[h.archetype].split(' ')[2] ?? 'border-dungeon-600'}`}
                          />
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  // ─── Quest-Detail ───────────────────────────────────────────────────
  return (
    <div className="space-y-5">
      {confirmDialog}
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            setSelectedQuestId(null)
            setActiveEncounterId(null)
          }}
          className="btn-secondary text-sm"
        >
          ← Übersicht
        </button>
        <span className="text-gray-600 text-xs">
          Automatisch gespeichert.
        </span>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => exportQuestAsJSON(quest)}
            className="text-xs px-3 py-1.5 rounded bg-dungeon-700 text-gray-300 border border-dungeon-600 hover:bg-dungeon-600 transition-colors"
            title="Als JSON-Datei herunterladen"
          >
            ⬇ JSON
          </button>
          <button
            onClick={() => window.print()}
            className="text-xs px-3 py-1.5 rounded bg-dungeon-700 text-gray-300 border border-dungeon-600 hover:bg-dungeon-600 transition-colors"
            title="Als PDF drucken / speichern"
          >
            🖨 PDF
          </button>
          <button
            onClick={() => setPendingDelete({ type: 'quest', id: quest.id, title: quest.title })}
            className="text-xs px-3 py-1.5 rounded bg-red-950 text-red-400 border border-red-900 hover:bg-red-900 transition-colors"
          >
            🗑 Löschen
          </button>
        </div>
      </div>

      <div className="card space-y-3">
        <label className="block">
          <span className="block text-xs font-semibold text-gold-400 mb-1">Titel</span>
          <input
            value={quest.title}
            onChange={(e) => patchQuest({ title: e.target.value })}
            className="w-full bg-dungeon-900 border border-dungeon-700 rounded px-3 py-2 text-base text-gray-100 font-display focus:outline-none focus:border-gold-500"
          />
        </label>
        <TextField
          label="Beschreibung"
          value={quest.description}
          onChange={(v) => patchQuest({ description: v })}
          rows={2}
          placeholder="Worum geht es in dieser Quest?"
        />
        <p className="text-[11px] text-gray-500 flex flex-wrap items-center gap-x-1.5 gap-y-1">
          <span className="text-gray-400">Tipp:</span>
          <span className="inline-flex items-center gap-1"><HeartSymbol size={12} />Herz</span>
          <span className="inline-flex items-center gap-1"><SurgeSymbol size={12} />Schub</span>
          <span className="inline-flex items-center gap-1"><FatigueSymbol size={12} />Erschöpfung</span>
          <span className="inline-flex items-center gap-1"><ActionSymbol size={12} />Aktion</span>
          <span>– diese Wörter erscheinen in Vorschau &amp; Druckansicht als Symbole. Per Klick auf die Symbol-Knöpfe an jedem Textfeld einfügen oder einfach so tippen.</span>
        </p>
      </div>

      {/* Heldenauswahl */}
      <div className="card">
        <HeroPicker
          selectedIds={quest.heroIds ?? []}
          availableHeroIds={availableHeroIds}
          onToggle={toggleHero}
        />
      </div>

      {/* Begegnungs-Reiter */}
      <div className="flex items-center gap-2 flex-wrap">
        {quest.encounters.map((e, i) => (
          <button
            key={e.id}
            onClick={() => setActiveEncounterId(e.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
              e.id === encounter?.id
                ? 'bg-accent text-onaccent border-gold-500'
                : 'bg-dungeon-700 text-gray-300 border-dungeon-600 hover:border-gold-500'
            }`}
          >
            {i + 1}. {e.title}
          </button>
        ))}
        <button
          onClick={addEncounter}
          className="px-3 py-1.5 rounded-full text-sm font-medium bg-dungeon-800 text-gray-400 border border-dashed border-dungeon-600 hover:text-gold-400 hover:border-gold-500 transition-all"
        >
          + Begegnung
        </button>
      </div>

      {encounter && (
        <div className="space-y-4">
          <div className="card space-y-3">
            <div className="flex items-center gap-3">
              <label className="flex-1">
                <span className="block text-xs font-semibold text-gold-400 mb-1">
                  Titel der Begegnung
                </span>
                <input
                  value={encounter.title}
                  onChange={(e) => patchEncounter({ title: e.target.value })}
                  className="w-full bg-dungeon-900 border border-dungeon-700 rounded px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-gold-500"
                />
              </label>
              {quest.encounters.length > 1 && (
                <button
                  onClick={() =>
                    setPendingDelete({ type: 'encounter', id: encounter.id, title: encounter.title })
                  }
                  className="self-end text-xs px-3 py-2 rounded bg-red-950 text-red-400 border border-red-900 hover:bg-red-900 transition-colors"
                >
                  🗑 Entfernen
                </button>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <TextField
                label="Erzähltext"
                value={encounter.flavourText}
                onChange={(v) => patchEncounter({ flavourText: v })}
                placeholder="Atmosphärischer Einstiegstext…"
              />
              <TextField
                label="Aufbau"
                value={encounter.setup}
                onChange={(v) => patchEncounter({ setup: v })}
                placeholder="Plättchen, Marker, Startaufstellung…"
              />
              <TextField
                label="Sonderregeln"
                value={encounter.specialRules}
                onChange={(v) => patchEncounter({ specialRules: v })}
              />
              <TextField
                label="Verstärkungen"
                value={encounter.reinforcements}
                onChange={(v) => patchEncounter({ reinforcements: v })}
              />
              <TextField
                label="Siegbedingungen"
                value={encounter.victoryConditions}
                onChange={(v) => patchEncounter({ victoryConditions: v })}
              />
              <TextField
                label="Belohnungen"
                value={encounter.rewards}
                onChange={(v) => patchEncounter({ rewards: v })}
              />
            </div>
            <TextField
              label="Geschichte / Abschluss"
              value={encounter.story}
              onChange={(v) => patchEncounter({ story: v })}
              rows={2}
            />
          </div>

          <div className="card p-0 overflow-hidden">
            <div className="px-4 py-2 border-b border-dungeon-700">
              <h3 className="font-display text-sm text-gold-400 font-bold">Karte</h3>
              <p className="text-gray-500 text-xs">
                Plättchen platzieren, drehen und verschieben; Monster &amp; Overlays (Türen,
                Gelände, Marker, Figuren …) setzen – wird mit der Begegnung gespeichert.
              </p>
            </div>
            <MapBuilder
              key={encounter.id}
              tiles={toBuilderTiles(encounter.mapData.tiles)}
              onTilesChange={(t) =>
                patchEncounter({
                  mapData: { ...encounter.mapData, tiles: toDomainTiles(t) },
                })
              }
              monsters={encounter.monsters}
              onMonstersChange={(m: PlacedMonster[]) => patchEncounter({ monsters: m })}
              availableMonsters={availableMonsters}
              overlays={encounter.mapData.overlays ?? []}
              onOverlaysChange={(o: PlacedOverlay[]) =>
                patchEncounter({ mapData: { ...encounter.mapData, overlays: o } })
              }
              mapHeight="520px"
            />
          </div>
        </div>
      )}

      {/* Print view — invisible on screen, appears when window.print() is called */}
      <QuestPrintView quest={quest} />
    </div>
  )
}
