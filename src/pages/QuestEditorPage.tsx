export default function QuestEditorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Quest-Editor</h2>
        <p className="text-gray-400 text-sm">
          Vollständige Quests mit Begegnungen, Siegbedingungen, Monstern und Erzähltext erstellen.
        </p>
      </div>

      <div className="card flex flex-col items-center justify-center py-20 gap-4 border-dashed border-dungeon-600">
        <span className="text-5xl opacity-40">📜</span>
        <h3 className="font-display text-xl text-gray-500">In Entwicklung</h3>
        <p className="text-gray-600 text-sm text-center max-w-md">
          Der Quest-Editor wird in Phase 6 implementiert und orientiert sich am
          Original Quest Vault von Fantasy Flight Games.
        </p>
        <ul className="text-gray-600 text-sm space-y-1 text-left mt-2">
          <li>• Mehrere Begegnungen pro Quest</li>
          <li>• Visueller Karteneditor je Begegnung</li>
          <li>• Monster, Siegbedingungen, Belohnungen</li>
          <li>• Erzähltext und Sonderregeln</li>
          <li>• Export als PDF (wie Original)</li>
          <li>• Lokal speichern und laden</li>
        </ul>
      </div>
    </div>
  )
}
