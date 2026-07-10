import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

/**
 * Fängt Render-Fehler ab, damit Nutzer statt einer weißen Seite eine
 * verständliche Meldung sehen. Die gespeicherten Daten (localStorage)
 * bleiben dabei erhalten.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  handleExportBackup = () => {
    try {
      const data = localStorage.getItem('quest-vault-reborn') ?? '{}'
      const blob = new Blob([data], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `quest-vault-backup-${new Date().toISOString().slice(0, 10)}.json`
      a.click()
      URL.revokeObjectURL(url)
    } catch {
      alert('Backup konnte nicht erstellt werden.')
    }
  }

  handleReset = () => {
    this.setState({ error: null })
    window.location.hash = ''
    window.location.reload()
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <div className="min-h-screen bg-dungeon-900 flex items-center justify-center p-6">
        <div className="max-w-md w-full rounded-lg border border-dungeon-600 bg-dungeon-800 p-6 space-y-4 text-center">
          <div className="text-4xl">⚔️</div>
          <h1 className="font-display text-xl text-gold-400 font-bold">Da ist etwas schiefgelaufen</h1>
          <p className="text-gray-400 text-sm">
            Die App ist auf einen unerwarteten Fehler gestoßen. Keine Sorge:
            Deine gespeicherten Quests und Einstellungen sind davon nicht betroffen.
          </p>
          <p className="text-gray-600 text-xs break-all">
            Technische Details: {this.state.error.message}
          </p>
          <div className="flex flex-col gap-2">
            <button
              onClick={this.handleReset}
              className="rounded bg-accent hover:bg-accent text-onaccent font-semibold py-2 px-4 transition-colors"
            >
              Zur Startseite
            </button>
            <button
              onClick={this.handleExportBackup}
              className="rounded border border-dungeon-600 hover:border-gold-600 text-gray-300 py-2 px-4 transition-colors text-sm"
            >
              Daten-Backup herunterladen
            </button>
          </div>
          <p className="text-gray-600 text-xs">
            Tritt der Fehler wiederholt auf? Schreib an{' '}
            <a href="mailto:ze.d@me.com" className="text-gold-600 hover:text-gold-400">ze.d@me.com</a>
          </p>
        </div>
      </div>
    )
  }
}
