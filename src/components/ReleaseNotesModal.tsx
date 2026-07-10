import { RELEASE_NOTES } from '../data/releaseNotes'
import ModalOverlay from './ModalOverlay'

const MONTHS_DE = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
]

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  return `${d}. ${MONTHS_DE[m - 1]} ${y}`
}

interface Props {
  onClose: () => void
}

export default function ReleaseNotesModal({ onClose }: Props) {
  const current = __APP_VERSION__

  return (
    <ModalOverlay
      onClose={onClose}
      ariaLabel="Versionsverlauf"
      className="bg-dungeon-900 border border-dungeon-600 rounded-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
      style={{ maxWidth: 560 }}
    >
        <div className="flex items-start justify-between p-4 border-b border-dungeon-700 sticky top-0 bg-dungeon-900 z-10">
          <div>
            <h3 className="text-xl font-bold text-gold-400 font-display">Versionsverlauf</h3>
            <p className="text-sm text-gray-500">Was sich in Quest Vault Reborn getan hat</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-200 text-xl leading-none ml-4 shrink-0"
            aria-label="Schließen"
          >
            ✕
          </button>
        </div>

        <div className="p-4 space-y-5">
          {RELEASE_NOTES.map((note) => {
            const isCurrent = note.version === current
            return (
              <div
                key={note.version}
                className={`rounded-lg border p-3 ${
                  isCurrent
                    ? 'border-gold-700/60 bg-accent-soft'
                    : 'border-dungeon-700 bg-dungeon-800/40'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`font-display font-bold ${isCurrent ? 'text-gold-300' : 'text-gray-300'}`}>
                    Version {note.version}
                  </span>
                  {isCurrent && (
                    <span className="text-[10px] uppercase tracking-wide bg-accent-deep text-onaccent px-1.5 py-0.5 rounded font-semibold">
                      Aktuell
                    </span>
                  )}
                  <span className="text-xs text-gray-600 ml-auto">{formatDate(note.date)}</span>
                </div>
                <p className="text-sm text-gray-300 font-medium mb-1.5">{note.title}</p>
                <ul className="space-y-1">
                  {note.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-400 leading-snug">
                      <span className="text-gold-600 shrink-0">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
    </ModalOverlay>
  )
}
