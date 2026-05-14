import { EXPANSIONS, EXPANSION_TYPE_LABELS } from '../data/expansions'
import { useGameStore } from '../store/useGameStore'
import type { Expansion } from '../types/game'

const TYPE_ORDER: Expansion['type'][] = [
  'base',
  'big-box',
  'small-box',
  'hero-monster',
  'campaign-book',
  'coop',
  'card-only',
  'conversion',
]

export default function ExpansionSelector() {
  const { ownedExpansionIds, toggleExpansion, setOwnedExpansions } = useGameStore()

  const grouped = TYPE_ORDER.reduce<Record<string, Expansion[]>>((acc, type) => {
    const items = EXPANSIONS.filter((e) => e.type === type)
    if (items.length > 0) acc[type] = items
    return acc
  }, {})

  const selectAll = () => setOwnedExpansions(EXPANSIONS.map((e) => e.id))
  const selectNone = () => setOwnedExpansions(['base'])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gold-400 font-display text-xl font-bold">Meine Sammlung</h2>
          <p className="text-gray-400 text-sm mt-1">
            Wähle aus, welche Erweiterungen du besitzt. Das Tool zeigt nur Inhalte
            deiner Sammlung an.
          </p>
        </div>
        <div className="flex gap-2 text-sm">
          <button onClick={selectAll} className="btn-secondary text-xs">
            Alle auswählen
          </button>
          <button onClick={selectNone} className="btn-secondary text-xs">
            Zurücksetzen
          </button>
        </div>
      </div>

      <div className="space-y-5">
        {Object.entries(grouped).map(([type, expansions]) => (
          <div key={type}>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
              {EXPANSION_TYPE_LABELS[type as Expansion['type']]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {expansions.map((exp) => {
                const owned = ownedExpansionIds.includes(exp.id)
                const isBase = exp.id === 'base'
                return (
                  <button
                    key={exp.id}
                    onClick={() => !isBase && toggleExpansion(exp.id)}
                    disabled={isBase}
                    title={isBase ? 'Das Grundspiel ist immer aktiv' : exp.nameEn}
                    className={`expansion-chip ${
                      owned ? 'expansion-chip-owned' : 'expansion-chip-missing'
                    } ${isBase ? 'opacity-90 cursor-default' : ''}`}
                  >
                    {owned ? '✓' : '○'} {exp.nameDe}
                    <span className="text-xs opacity-60">({exp.year})</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="card text-sm text-gray-400 flex items-start gap-2">
        <span className="text-gold-500 mt-0.5">ℹ</span>
        <p>
          Deine Auswahl wird automatisch im Browser gespeichert. Alle anderen
          Werkzeuge (Kartenbauer, Quest-Editor) berücksichtigen nur Inhalte aus
          deiner Sammlung.
        </p>
      </div>
    </div>
  )
}
