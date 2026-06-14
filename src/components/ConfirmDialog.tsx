import ModalOverlay from './ModalOverlay'

// Wiederverwendbarer Bestätigungsdialog für destruktive Aktionen (z. B. Quest /
// Begegnung löschen). Baut auf dem geteilten ModalOverlay auf (Escape schließt =
// Abbrechen, Klick außerhalb bricht ab, Fokus ins Panel). Der bestätigende Knopf
// wird bewusst NICHT autofokussiert, damit ein versehentliches Enter die Aktion
// nicht auslöst.

interface ConfirmDialogProps {
  title: string
  message: React.ReactNode
  confirmLabel?: string
  cancelLabel?: string
  onConfirm: () => void
  onCancel: () => void
  /** Rote Optik für unwiderrufliche Aktionen (Standard). */
  destructive?: boolean
}

export default function ConfirmDialog({
  title,
  message,
  confirmLabel = 'Löschen',
  cancelLabel = 'Abbrechen',
  onConfirm,
  onCancel,
  destructive = true,
}: ConfirmDialogProps) {
  return (
    <ModalOverlay
      onClose={onCancel}
      ariaLabel={title}
      className="bg-dungeon-900 border border-dungeon-600 rounded-lg shadow-2xl w-full max-w-sm p-5"
    >
      <h3 className="font-display text-lg text-gold-300 font-bold mb-2">{title}</h3>
      <div className="text-sm text-gray-300 leading-snug mb-5">{message}</div>
      <div className="flex justify-end gap-2">
        <button
          onClick={onCancel}
          className="text-sm px-4 py-2 rounded bg-dungeon-700 text-gray-200 border border-dungeon-600 hover:bg-dungeon-600 transition-colors"
        >
          {cancelLabel}
        </button>
        <button
          onClick={onConfirm}
          className={`text-sm px-4 py-2 rounded border font-medium transition-colors ${
            destructive
              ? 'bg-red-900 text-red-100 border-red-800 hover:bg-red-800'
              : 'bg-gold-700 text-gray-900 border-gold-600 hover:bg-gold-600'
          }`}
        >
          {confirmLabel}
        </button>
      </div>
    </ModalOverlay>
  )
}
