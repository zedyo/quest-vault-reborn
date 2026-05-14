export default function MapBuilderPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Kartenbauer</h2>
        <p className="text-gray-400 text-sm">
          Spielplan-Plättchen per Drag & Drop zu einer Quest-Karte zusammenstellen.
        </p>
      </div>

      <div className="card flex flex-col items-center justify-center py-20 gap-4 border-dashed border-dungeon-600">
        <span className="text-5xl opacity-40">🗺️</span>
        <h3 className="font-display text-xl text-gray-500">In Entwicklung</h3>
        <p className="text-gray-600 text-sm text-center max-w-md">
          Der Kartenbauer wird in Phase 5 implementiert. Du kannst dann alle
          Spielplan-Plättchen deiner Sammlung per Drag & Drop platzieren und drehen.
        </p>
        <ul className="text-gray-600 text-sm space-y-1 text-left mt-2">
          <li>• Alle Spielplan-Plättchen aus deinen Erweiterungen</li>
          <li>• Drag & Drop Positionierung</li>
          <li>• Kacheln in 4 Richtungen drehen</li>
          <li>• Overlays und Marker platzieren</li>
          <li>• Karte als Teil eines Quests speichern</li>
        </ul>
      </div>
    </div>
  )
}
