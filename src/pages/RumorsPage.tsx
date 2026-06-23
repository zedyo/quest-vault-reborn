import { useState, useMemo } from 'react'
import { RUMORS } from '../data/rumors'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import ModalOverlay from '../components/ModalOverlay'
import { SearchInput, OwnedToggle, SegmentedControl } from '../components/Filters'
import { rumorCardDeUrl } from '../data/assetUrls'
import type { Rumor } from '../types/game'

// Reise-Geländetypen (EN) → deutsche Kurzlabels.
const TERRAIN_DE: Record<string, string> = {
  Road: 'Straße',
  Forest: 'Wald',
  Mountain: 'Berg',
  Plain: 'Ebene',
  Water: 'Wasser',
}

type ActFilter = 'all' | '1' | '2'

function actLabel(act: Rumor['act']): string | null {
  if (act === 1) return 'Akt I'
  if (act === 2) return 'Akt II'
  return null
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

function RumorLightbox({ rumor, expansionName, onClose }: {
  rumor: Rumor
  expansionName: string
  onClose: () => void
}) {
  const act = actLabel(rumor.act)
  return (
    <ModalOverlay
      onClose={onClose}
      ariaLabel={rumor.nameDe}
      backdropClassName="bg-black/80"
      className="bg-dungeon-900 border border-dungeon-700 rounded-lg shadow-2xl max-w-2xl w-full overflow-y-auto max-h-[90vh] p-4 flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-gold-400 font-bold">{rumor.nameDe}</h3>
          <p className="text-gray-500 text-sm italic">{rumor.nameEn}</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-100 text-2xl leading-none flex-shrink-0">×</button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="sm:w-64 flex-shrink-0 mx-auto">
          <img src={rumorCardDeUrl(rumor.id)} alt={rumor.nameDe} className="w-full rounded border border-dungeon-700" />
        </div>
        <div className="flex-1 space-y-2 text-sm min-w-0">
          <div className="flex justify-between gap-2 border-b border-dungeon-700 pb-1.5">
            <span className="text-gray-400">Erweiterung</span>
            <span className="text-gray-100 text-right">{expansionName}</span>
          </div>
          {act && (
            <div className="flex justify-between gap-2 border-b border-dungeon-700 pb-1.5">
              <span className="text-gray-400">Akt</span>
              <span className="text-gray-100">{act}</span>
            </div>
          )}
          {rumor.travel.length > 0 && (
            <div className="border-b border-dungeon-700 pb-1.5">
              <span className="text-gray-400 block mb-1">Reise-Gelände</span>
              <div className="flex flex-wrap gap-1">
                {rumor.travel.map((t, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-dungeon-800 border border-dungeon-700 text-gray-300">
                    {TERRAIN_DE[t] ?? t}
                  </span>
                ))}
              </div>
            </div>
          )}
          <p className="text-xs text-gray-500 pt-1">
            Gerücht-Karte (Rumor). Der Kartentext wird hier aus Urheberrechtsgründen nicht
            wiedergegeben – er ist dem deutschen Kartenbild zu entnehmen.
          </p>
        </div>
      </div>
    </ModalOverlay>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function RumorsPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [search, setSearch] = useState('')
  const [onlyOwned, setOnlyOwned] = useState(true)
  const [actFilter, setActFilter] = useState<ActFilter>('all')
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set())
  const [lightbox, setLightbox] = useState<Rumor | null>(null)

  const expansionMap = useMemo(() => Object.fromEntries(EXPANSIONS.map((e) => [e.id, e])), [])

  const filtered = useMemo(() => RUMORS.filter((r) => {
    if (onlyOwned && !ownedIds.includes(r.expansionId)) return false
    if (actFilter === '1' && r.act !== 1) return false
    if (actFilter === '2' && r.act !== 2) return false
    if (search) {
      const q = search.toLowerCase()
      if (!r.nameDe.toLowerCase().includes(q) && !r.nameEn.toLowerCase().includes(q)) return false
    }
    return true
  }), [search, onlyOwned, actFilter, ownedIds])

  return (
    <div className="space-y-6">
      {lightbox && (
        <RumorLightbox
          rumor={lightbox}
          expansionName={expansionMap[lightbox.expansionId]?.nameDe ?? lightbox.expansionId}
          onClose={() => setLightbox(null)}
        />
      )}

      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Gerücht-Karten</h2>
        <p className="text-gray-400 text-sm">
          {filtered.length} Gerücht-Karten {onlyOwned ? 'in deiner Sammlung' : 'insgesamt'} · deutsche Original-Kartenbilder (Akt I + Akt II)
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <SearchInput value={search} onChange={setSearch} placeholder="Suche nach Name…" />
        <OwnedToggle checked={onlyOwned} onChange={setOnlyOwned} />
        <SegmentedControl<ActFilter>
          className="ml-auto"
          value={actFilter}
          onChange={setActFilter}
          options={[
            { value: 'all', label: 'Alle' },
            { value: '1', label: 'Akt I' },
            { value: '2', label: 'Akt II' },
          ]}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="card text-center text-gray-500 py-12">
          Keine Gerücht-Karten gefunden. Passe deine Suche oder Sammlung an.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {filtered.map((r) => {
            const exp = expansionMap[r.expansionId]
            const act = actLabel(r.act)
            const hasImg = !imgErrors.has(r.id)
            return (
              <div
                key={r.id}
                className="card hover:border-gold-600 transition-colors flex flex-col gap-0 p-0 overflow-hidden cursor-pointer"
                onClick={() => setLightbox(r)}
              >
                <div className="w-full aspect-[3/4] bg-dungeon-800 relative overflow-hidden">
                  {hasImg ? (
                    <img
                      src={rumorCardDeUrl(r.id)}
                      alt={r.nameDe}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center top' }}
                      onError={() => setImgErrors((prev) => new Set(prev).add(r.id))}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-20 text-4xl text-gray-400">🗣️</div>
                  )}
                  {act && (
                    <span className="absolute bottom-1 right-1 text-[9px] px-1.5 py-0.5 rounded-full border font-medium bg-dungeon-900/90 text-gold-300 border-gold-700">
                      {act}
                    </span>
                  )}
                </div>
                <div className="p-2 space-y-0.5">
                  <p className="text-gray-100 text-xs font-semibold leading-tight">{r.nameDe}</p>
                  <p className="text-gray-600 text-[10px] leading-tight italic">{r.nameEn}</p>
                  <p className="text-gray-500 text-[10px] leading-tight pt-0.5">{exp?.nameDe ?? r.expansionId}</p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
