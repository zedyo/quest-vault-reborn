import { useState } from 'react'
import { Icon } from './QvIcons'
import { IS_PREVIEW, PREVIEW, PRODUCTION_BASE } from '../utils/previewBuild'

/**
 * Abzeichen für Branch-VORSCHAUEN (`/quest-vault-reborn/preview/<slug>/`).
 *
 * Es macht drei Dinge sichtbar, die man beim Testen einer noch nicht
 * freigegebenen Fassung wissen muss:
 *   • dass dies NICHT die Live-Version ist (Branch + Commit stehen dabei),
 *   • dass die Spielstände dieser Vorschau von denen der Live-Version
 *     GETRENNT sind (eigener localStorage-Schlüsselraum, s. previewBuild.ts),
 *   • wie man zur Live-Version zurückkommt.
 *
 * Im Produktions-Build rendert die Komponente nichts (`__PREVIEW__` ist `null`,
 * der Rumpf fällt beim Bundling weg).
 */
export default function PreviewBadge() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  if (!IS_PREVIEW || !PREVIEW || hidden) return null

  return (
    // Auf schmalen Schirmen oberhalb der 64-px-Fußleiste des Session-Trackers,
    // damit das Abzeichen deren Tippziele nicht verdeckt.
    <div className="fixed bottom-[76px] left-3 z-[100] md:bottom-3 print:hidden">
      {open && (
        <div className="mb-2 w-72 max-w-[85vw] rounded-card border border-accent-line bg-surface-2 p-3 shadow-panel">
          <p className="font-head text-sm text-fg">Vorschau eines Entwicklungsstands</p>
          <dl className="mt-2 space-y-1 text-xs">
            <div className="flex gap-2">
              <dt className="w-16 shrink-0 text-faint">Branch</dt>
              <dd className="break-all font-mono text-muted">{PREVIEW.branch}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-16 shrink-0 text-faint">Commit</dt>
              <dd className="font-mono text-muted">{PREVIEW.sha || '—'}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-16 shrink-0 text-faint">Gebaut</dt>
              <dd className="font-mono text-muted">{PREVIEW.builtAt} UTC</dd>
            </div>
          </dl>
          <p className="mt-2 border-t border-line pt-2 text-xs leading-relaxed text-muted">
            Quests und Kampagnen-Spielstände dieser Vorschau sind von der Live-Version
            <strong className="text-fg"> getrennt</strong> gespeichert. Zum Testen mit echten
            Daten: in der Live-Version exportieren, hier importieren.
          </p>
          <a
            href={PRODUCTION_BASE}
            className="mt-2 inline-flex items-center gap-1 text-xs text-accent underline underline-offset-2"
          >
            Zur Live-Version <Icon name="external" size={12} />
          </a>
        </div>
      )}

      <div className="flex items-center gap-1 rounded-pill border border-accent-line bg-surface-2 px-2 py-1 shadow-btn">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 text-xs"
          title={`Vorschau von ${PREVIEW.branch} (${PREVIEW.sha}) – nicht die Live-Version`}
          aria-expanded={open}
        >
          <span className="rounded-pill bg-accent px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-onaccent">
            VORSCHAU
          </span>
          <span className="max-w-[38vw] truncate font-mono text-muted sm:max-w-[20rem]">
            {PREVIEW.branch}
          </span>
        </button>
        <button
          type="button"
          onClick={() => setHidden(true)}
          className="rounded-pill p-1 text-faint hover:text-fg"
          title="Abzeichen ausblenden (bis zum Neuladen)"
          aria-label="Vorschau-Abzeichen ausblenden"
        >
          <Icon name="close" size={12} />
        </button>
      </div>
    </div>
  )
}
