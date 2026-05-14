import { useState } from 'react'
import { MAP_TILES } from '../../data/mapTiles'
import { EXPANSIONS } from '../../data/expansions'
import { useGameStore } from '../../store/useGameStore'

interface Props {
  selectedTileId: string | null
  onSelect: (id: string) => void
}

export default function TileSidebar({ selectedTileId, onSelect }: Props) {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const [openExpansions, setOpenExpansions] = useState<Set<string>>(new Set(['base']))

  const ownedExpansions = EXPANSIONS.filter(
    (e) => ownedIds.includes(e.id) && MAP_TILES.some((t) => t.expansionId === e.id),
  )

  const toggle = (id: string) => {
    setOpenExpansions((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <aside className="w-52 shrink-0 bg-dungeon-900 border-r border-dungeon-700 overflow-y-auto flex flex-col">
      <div className="px-3 py-2 border-b border-dungeon-700">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Plättchen</p>
        <p className="text-xs text-gray-600 mt-0.5">Anklicken → auf Karte platzieren</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {ownedExpansions.map((exp) => {
          const tiles = MAP_TILES.filter((t) => t.expansionId === exp.id)
          const open = openExpansions.has(exp.id)
          return (
            <div key={exp.id}>
              <button
                onClick={() => toggle(exp.id)}
                className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-dungeon-800 transition-colors"
              >
                <span className="text-xs font-semibold text-gold-500 truncate pr-1">{exp.nameDe}</span>
                <span className="text-gray-500 text-xs">{open ? '▲' : '▼'}</span>
              </button>
              {open && (
                <div className="px-2 pb-2 grid grid-cols-2 gap-1">
                  {tiles.map((tile) => {
                    const isSelected = selectedTileId === tile.id
                    return (
                      <button
                        key={tile.id}
                        onClick={() => onSelect(tile.id)}
                        title={`${tile.label} (${tile.cols}×${tile.rows})`}
                        className={`rounded text-xs p-1 transition-all border ${
                          isSelected
                            ? 'border-gold-400 bg-dungeon-700 text-gold-300'
                            : 'border-dungeon-600 bg-dungeon-800 text-gray-400 hover:border-gold-600 hover:text-gray-200'
                        }`}
                      >
                        <div
                          className="w-full rounded mb-1"
                          style={{
                            backgroundColor: tile.color,
                            height: `${Math.min(tile.rows * 6, 36)}px`,
                            opacity: 0.8,
                          }}
                        />
                        <span className="truncate block">{tile.label}</span>
                        <span className="text-gray-600 block">{tile.cols}×{tile.rows}</span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="px-3 py-2 border-t border-dungeon-700 text-xs text-gray-600">
        {MAP_TILES.filter((t) => ownedIds.includes(t.expansionId)).length} Plättchen verfügbar
      </div>
    </aside>
  )
}
