import { useMemo, useState } from 'react'
import { useSessionStore } from '../store/useSessionStore'
import { useGameStore } from '../store/useGameStore'
import type { CampaignSession, PlayedScenario, TrackedHero, TrackedOverlord } from '../types/session'
import { deriveLiveState } from '../store/sessionDerive'
import { CAMPAIGNS } from '../data/campaigns'
import { exportSessionAsJSON, parseImportedSession, MAX_IMPORT_BYTES } from '../utils/sessionImport'
import { newSession, newTrackedHero, nowISO, HERO_BY_ID } from '../components/session/sessionHelpers'
import SetupTab from '../components/session/SetupTab'
import HeroesTab from '../components/session/HeroesTab'
import OverlordTab from '../components/session/OverlordTab'
import ScenariosTab from '../components/session/ScenariosTab'
import ConfirmDialog from '../components/ConfirmDialog'

const CAMPAIGN_BY_ID = Object.fromEntries(CAMPAIGNS.map((c) => [c.id, c]))

type Tab = 'setup' | 'helden' | 'overlord' | 'szenarien'
const TABS: { id: Tab; label: string }[] = [
  { id: 'setup', label: '⚙️ Setup' },
  { id: 'helden', label: '🧙 Helden' },
  { id: 'overlord', label: '👑 Overlord' },
  { id: 'szenarien', label: '📖 Szenarien' },
]

export default function SessionsPage() {
  const sessions = useSessionStore((s) => s.sessions)
  const activeSessionId = useSessionStore((s) => s.activeSessionId)
  const addSession = useSessionStore((s) => s.addSession)
  const updateSession = useSessionStore((s) => s.updateSession)
  const deleteSession = useSessionStore((s) => s.deleteSession)
  const setActiveSession = useSessionStore((s) => s.setActiveSession)
  const ownedExpansionIds = useGameStore((s) => s.ownedExpansionIds)

  const [tab, setTab] = useState<Tab>('setup')
  const [pendingDelete, setPendingDelete] = useState<
    | { type: 'session'; id: string; name: string }
    | { type: 'hero'; id: string; name: string }
    | { type: 'scenario'; id: string; name: string }
    | null
  >(null)

  const session = sessions.find((s) => s.id === activeSessionId) ?? null
  const live = useMemo(() => (session ? deriveLiveState(session) : null), [session])

  // ── Mutationen (immutabel, Auto-Save wie QuestEditorPage) ──────────────────
  function persist(next: CampaignSession) {
    updateSession({ ...next, updatedAt: nowISO() })
  }
  function patchSession(patch: Partial<CampaignSession>) {
    if (session) persist({ ...session, ...patch })
  }
  function addHero(heroId: string) {
    if (!session || session.heroes.length >= 4) return
    persist({ ...session, heroes: [...session.heroes, newTrackedHero(heroId)] })
  }
  function removeHero(localId: string) {
    if (!session) return
    persist({ ...session, heroes: session.heroes.filter((h) => h.localId !== localId) })
  }
  function patchHero(localId: string, patch: Partial<TrackedHero>) {
    if (!session) return
    persist({
      ...session,
      heroes: session.heroes.map((h) => (h.localId === localId ? { ...h, ...patch } : h)),
    })
  }
  function patchOverlord(patch: Partial<TrackedOverlord>) {
    if (!session) return
    persist({ ...session, overlord: { ...session.overlord, ...patch } })
  }
  function saveScenario(sc: PlayedScenario) {
    if (!session) return
    const exists = session.scenarios.some((s) => s.id === sc.id)
    persist({
      ...session,
      scenarios: exists ? session.scenarios.map((s) => (s.id === sc.id ? sc : s)) : [...session.scenarios, sc],
    })
  }
  function removeScenario(id: string) {
    if (!session) return
    persist({ ...session, scenarios: session.scenarios.filter((s) => s.id !== id) })
  }
  /** Weist einen Gegenstand aus der gemeinsamen Ausrüstung einem Helden (oder null) zu. */
  function reassignItemOwner(refId: string, toHeroLocalId: string | null) {
    if (!session) return
    persist({
      ...session,
      scenarios: session.scenarios.map((sc) => ({
        ...sc,
        rewards: {
          ...sc.rewards,
          grantedItems: sc.rewards.grantedItems.map((g) =>
            g.item.refId === refId ? { ...g, toHeroLocalId } : g,
          ),
        },
        shopping: {
          ...sc.shopping,
          bought: sc.shopping.bought.map((b) =>
            b.item.refId === refId ? { ...b, toHeroLocalId } : b,
          ),
        },
      })),
    })
  }

  function handleCreate() {
    addSession(newSession(CAMPAIGNS[0].id))
    setTab('setup')
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
          alert('Ungültige Session-Datei.')
          return
        }
        addSession(s)
        setTab('setup')
      } catch {
        alert('Datei konnte nicht gelesen werden.')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  function confirmDelete() {
    if (!pendingDelete) return
    if (pendingDelete.type === 'session') deleteSession(pendingDelete.id)
    else if (pendingDelete.type === 'hero') removeHero(pendingDelete.id)
    else removeScenario(pendingDelete.id)
    setPendingDelete(null)
  }

  const DELETE_COPY: Record<string, { title: string; noun: string; effect: string; confirm: string }> = {
    session: {
      title: 'Session löschen?',
      noun: 'Die Session',
      effect: 'wird mit allen Helden, dem Overlord-Setup und dem Verlauf dauerhaft gelöscht.',
      confirm: 'Session löschen',
    },
    hero: { title: 'Held entfernen?', noun: 'Der Held', effect: 'wird aus der Session entfernt.', confirm: 'Held entfernen' },
    scenario: {
      title: 'Szenario löschen?',
      noun: 'Das Szenario',
      effect: 'wird aus dem Verlauf entfernt; seine Belohnungen werden vom Live-Stand abgezogen.',
      confirm: 'Szenario löschen',
    },
  }
  const confirmDialog = pendingDelete && (
    <ConfirmDialog
      title={DELETE_COPY[pendingDelete.type].title}
      message={
        <>
          {DELETE_COPY[pendingDelete.type].noun}{' '}
          <strong className="text-gray-100">„{pendingDelete.name}"</strong> {DELETE_COPY[pendingDelete.type].effect} Das kann
          nicht rückgängig gemacht werden.
        </>
      }
      confirmLabel={DELETE_COPY[pendingDelete.type].confirm}
      onConfirm={confirmDelete}
      onCancel={() => setPendingDelete(null)}
    />
  )

  // ─── Übersichtsliste ────────────────────────────────────────────────
  if (!session) {
    return (
      <div className="space-y-6">
        {confirmDialog}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Session-Tracker</h2>
            <p className="text-gray-400 text-sm">
              Laufende Kampagne festhalten: Helden, Klassen, Ausrüstung und Overlord-Setup. Alles bleibt
              lokal im Browser; per JSON exportierbar und wieder importierbar.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <label className="btn-secondary text-sm cursor-pointer whitespace-nowrap">
              📁 Importieren
              <input type="file" accept=".json" className="hidden" onChange={handleImport} />
            </label>
            <button onClick={handleCreate} className="btn-primary text-sm whitespace-nowrap">
              + Neue Session
            </button>
          </div>
        </div>

        {sessions.length === 0 ? (
          <div className="card flex flex-col items-center justify-center py-20 gap-3 border-dashed border-dungeon-600">
            <span className="text-5xl opacity-40">🎲</span>
            <h3 className="font-display text-xl text-gray-500">Noch keine Session</h3>
            <p className="text-gray-600 text-sm text-center max-w-md">
              Lege eine Session an, um einen laufenden Kampagnen-Spielstand zu tracken.
            </p>
            <button onClick={handleCreate} className="btn-secondary text-sm mt-2">
              Erste Session anlegen
            </button>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sessions.map((s) => {
              const campaign = CAMPAIGN_BY_ID[s.campaignId]
              return (
                <div
                  key={s.id}
                  className="card hover:border-gold-500 transition-colors cursor-pointer flex flex-col gap-2"
                  onClick={() => {
                    setActiveSession(s.id)
                    setTab('setup')
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg text-gold-300 font-bold">{s.name}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setPendingDelete({ type: 'session', id: s.id, name: s.name })
                      }}
                      className="text-xs text-gray-600 hover:text-red-400 shrink-0"
                      title="Session löschen"
                    >
                      🗑
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm">{campaign?.nameDe ?? s.campaignId}</p>
                  <div className="flex items-center gap-3 text-gray-600 text-xs mt-auto">
                    <span>{s.playerCount} Spieler</span>
                    <span>·</span>
                    <span>
                      {s.heroes.length} Held{s.heroes.length === 1 ? '' : 'en'}
                    </span>
                    {s.scenarios.length > 0 && (
                      <>
                        <span>·</span>
                        <span>{s.scenarios.length} Szenario(s)</span>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  // ─── Detailansicht ──────────────────────────────────────────────────
  const campaign = CAMPAIGN_BY_ID[session.campaignId]

  return (
    <div className="space-y-5">
      {confirmDialog}

      <div className="flex flex-wrap items-center gap-3">
        <button onClick={() => setActiveSession(null)} className="btn-secondary text-sm">
          ← Übersicht
        </button>
        <div className="min-w-0">
          <h2 className="font-display text-xl text-gold-300 font-bold truncate">{session.name}</h2>
          <p className="text-gray-500 text-xs">
            {campaign?.nameDe ?? session.campaignId} · Automatisch gespeichert.
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => exportSessionAsJSON(session)}
            className="text-xs px-3 py-1.5 rounded bg-dungeon-700 text-gray-300 border border-dungeon-600 hover:bg-dungeon-600 transition-colors"
            title="Als JSON-Datei herunterladen"
          >
            ⬇ JSON
          </button>
          <button
            onClick={() => setPendingDelete({ type: 'session', id: session.id, name: session.name })}
            className="text-xs px-3 py-1.5 rounded bg-red-950 text-red-400 border border-red-900 hover:bg-red-900 transition-colors"
          >
            🗑 Löschen
          </button>
        </div>
      </div>

      {/* Live-Stand-Streifen */}
      {live && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: 'Akt', value: live.currentAct },
            { label: 'Partei-Gold', value: live.partyGold },
            { label: 'Helden', value: session.heroes.length },
            { label: 'Overlord-XP', value: live.overlord.xpAvailable },
            { label: 'Bedrohung', value: session.overlord.threatTokens },
            { label: 'Schicksal', value: session.partyFateTokens },
          ].map((stat) => (
            <div key={stat.label} className="card text-center py-3">
              <p className="text-2xl font-bold text-gold-400">{stat.value}</p>
              <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab-Leiste */}
      <div className="flex items-center gap-2 flex-wrap">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
              tab === t.id
                ? 'bg-gold-500 text-dungeon-950 border-gold-500'
                : 'bg-dungeon-700 text-gray-300 border-dungeon-600 hover:border-gold-500'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'setup' && <SetupTab session={session} onPatch={patchSession} />}
      {tab === 'helden' && live && (
        <HeroesTab
          session={session}
          live={live}
          ownedExpansionIds={ownedExpansionIds}
          onAddHero={addHero}
          onRemoveHero={(localId) => {
            const h = session.heroes.find((x) => x.localId === localId)
            setPendingDelete({ type: 'hero', id: localId, name: HERO_BY_ID[h?.heroId ?? '']?.name ?? 'Held' })
          }}
          onPatchHero={patchHero}
          onPatchSession={patchSession}
          onReassignItem={reassignItemOwner}
        />
      )}
      {tab === 'overlord' && live && (
        <OverlordTab
          overlord={session.overlord}
          live={live.overlord}
          ownedExpansionIds={ownedExpansionIds}
          onPatch={patchOverlord}
        />
      )}
      {tab === 'szenarien' && live && (
        <ScenariosTab
          session={session}
          live={live}
          ownedExpansionIds={ownedExpansionIds}
          onSaveScenario={saveScenario}
          onRequestDelete={(id, name) => setPendingDelete({ type: 'scenario', id, name })}
        />
      )}
    </div>
  )
}
