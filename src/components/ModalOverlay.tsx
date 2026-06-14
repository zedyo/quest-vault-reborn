import { useEffect, useRef } from 'react'

// Geteilter Modal-/Lightbox-Backdrop. Zuvor war derselbe Overlay-Rahmen
// (`fixed inset-0 z-50 …` + Klick-zum-Schließen + stopPropagation am Panel) in
// HeroesPage, MonstersPage, ItemsPage und ReleaseNotesModal kopiert — teils mit,
// teils ohne Escape-Taste. Hier einmal zentral, inklusive:
//   • Escape schließt das Modal
//   • Klick auf den Backdrop schließt, Klick auf das Panel nicht
//   • Fokus wandert beim Öffnen ins Panel (Basis-Fokusverwaltung, a11y)
//   • role="dialog" / aria-modal

interface ModalOverlayProps {
  onClose: () => void
  children: React.ReactNode
  /** Klassen für das innere Panel (Hintergrund, Rahmen, Breite …). */
  className?: string
  style?: React.CSSProperties
  ariaLabel?: string
  /** Überschreibt die Backdrop-Klassen (Standard: abgedunkelt + Blur). */
  backdropClassName?: string
}

export default function ModalOverlay({
  onClose,
  children,
  className = '',
  style,
  ariaLabel,
  backdropClassName,
}: ModalOverlayProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    // Fokus ins Panel ziehen, damit Tastatur-Navigation/Escape verlässlich greift.
    panelRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        backdropClassName ?? 'bg-black/80 backdrop-blur-sm'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className={`outline-none ${className}`}
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
