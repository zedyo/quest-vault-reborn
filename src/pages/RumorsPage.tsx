import { useState, useMemo } from 'react'
import { RUMORS } from '../data/rumors'
import { EXPANSIONS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import ModalOverlay from '../components/ModalOverlay'
import { SearchInput, OwnedToggle, SegmentedControl } from '../components/Filters'
import { rumorCardDeUrl, rumorCardBackDeUrl } from '../data/assetUrls'
import { renderGameTextInline } from '../components/GameSymbols'
import type { Rumor } from '../types/game'

// Mehrzeiligen Kartentext (Absätze durch Leerzeile getrennt) mit Spielsymbolen rendern.
function CardText({ text }: { text: string }) {
  const paras = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
  return (
    <div className="space-y-2">
      {paras.map((p, i) => (
        <p key={i} className="text-gray-300 text-sm leading-snug whitespace-pre-line">
          {renderGameTextInline(p)}
        </p>
      ))}
    </div>
  )
}

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
        <div className="sm:w-56 flex-shrink-0 mx-auto space-y-3">
          <div>
            {rumor.back && <p className="text-[11px] text-gray-500 mb-1 text-center">Vorderseite</p>}
            <img src={rumorCardDeUrl(rumor.id)} alt={rumor.nameDe} className="w-full rounded border border-dungeon-700" />
          </div>
          {rumor.back && (
            <div>
              <p className="text-[11px] text-gray-500 mb-1 text-center">Rückseite · Belohnungen</p>
              <img src={rumorCardBackDeUrl(rumor.id)} alt={`${rumor.nameDe} – Rückseite`} className="w-full rounded border border-dungeon-700" />
            </div>
          )}
        </div>
        <div className="flex-1 space-y-3 text-sm min-w-0">
          <div className="flex flex-wrap gap-x-4 gap-y-1 border-b border-dungeon-700 pb-2 text-xs">
            <span><span className="text-gray-500">Erweiterung:</span> <span className="text-gray-200">{expansionName}</span></span>
            {act && <span><span className="text-gray-500">Akt:</span> <span className="text-gray-200">{act}</span></span>}
            {rumor.travel.length > 0 && (
              <span className="flex items-center gap-1">
                <span className="text-gray-500">Reise:</span>
                <span className="text-gray-300">{rumor.travel.map((t) => TERRAIN_DE[t] ?? t).join(' · ')}</span>
              </span>
            )}
          </div>

          {rumor.textDe && <CardText text={rumor.textDe} />}

          {rumor.back && (
            <div className="space-y-2 pt-1">
              <div className="rounded border border-red-900/40 bg-red-950/20 p-2">
                <p className="text-[11px] uppercase tracking-wide text-red-300/90 font-semibold mb-1">Overlord-Belohnung</p>
                <CardText text={rumor.back.overlordDe} />
              </div>
              <div className="rounded border border-purple-900/40 bg-purple-950/20 p-2">
                <p className="text-[11px] uppercase tracking-wide text-purple-300/90 font-semibold mb-1">Helden-Belohnung</p>
                <CardText text={rumor.back.heroDe} />
              </div>
            </div>
          )}

          <p className="text-[11px] text-gray-600 pt-1">
            Deutscher Original-Kartentext (FFG). Werte ggf. dem Kartenbild entnehmen.
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
                <div className="w-full aspect-[9/14] bg-dungeon-800 relative overflow-hidden">
                  {hasImg ? (
                    <img
                      src={rumorCardDeUrl(r.id)}
                      alt={r.nameDe}
                      className="w-full h-full object-contain"
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
