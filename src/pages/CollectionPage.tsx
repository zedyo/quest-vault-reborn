import ExpansionSelector from '../components/ExpansionSelector'
import { useGameStore } from '../store/useGameStore'
import { EXPANSIONS } from '../data/expansions'

export default function CollectionPage() {
  const ownedIds = useGameStore((s) => s.ownedExpansionIds)
  const owned = EXPANSIONS.filter((e) => ownedIds.includes(e.id))

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Meine Sammlung</h2>
        <p className="text-gray-400 text-sm">
          Du hast <strong className="text-gold-300">{owned.length}</strong> von{' '}
          {EXPANSIONS.length} verfügbaren Erweiterungen ausgewählt.
        </p>
      </div>

      <ExpansionSelector />

      {owned.length > 0 && (
        <div className="card">
          <h3 className="text-gold-400 font-semibold mb-3">Deine aktiven Erweiterungen</h3>
          <ul className="space-y-1">
            {owned.map((exp) => (
              <li key={exp.id} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-gold-500">✓</span>
                <span>{exp.nameDe}</span>
                <span className="text-gray-600">– {exp.nameEn} ({exp.year})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
