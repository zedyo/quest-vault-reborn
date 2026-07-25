// Kartenscan-Miniatur mit Lightbox. Im Redesign ist der Scan nur noch Beiwerk —
// der Regeltext steht immer im Klartext daneben (siehe CardTile). Klick öffnet
// das deutsche Original-Kartenbild groß in einem ModalOverlay; fehlt die Datei,
// blendet `onError` die Miniatur sanft aus (bestehendes ItemThumb-Verhalten).
//
// Unter 480 px Breite entfällt die Miniatur komplett (Design-Regel „Mobil"),
// der Regeltext bleibt sichtbar.

import { useState } from 'react'
import ModalOverlay from '../../ModalOverlay'
import { Icon } from '../../QvIcons'

/** Miniaturgrößen aus dem Design-Handoff (Breite × Höhe in px). */
export const THUMB_SIZES = {
  xs: [30, 42],
  sm: [34, 48],
  row: [38, 54],
  market: [40, 56],
  tile: [44, 62],
  quest: [48, 72],
} as const

export type ThumbSize = keyof typeof THUMB_SIZES

export default function CardThumb({
  url,
  name,
  size = 'tile',
  hideOnMobile = true,
}: {
  url: string | null | undefined
  name: string
  size?: ThumbSize
  hideOnMobile?: boolean
}) {
  const [ok, setOk] = useState(true)
  const [zoom, setZoom] = useState(false)
  if (!url || !ok) return null
  const [w, h] = THUMB_SIZES[size]
  return (
    <>
      <button
        type="button"
        onClick={() => setZoom(true)}
        title={`${name} – Karte vergrößern`}
        className={`shrink-0 self-start rounded-[6px] border border-line bg-surface-2 overflow-hidden
          hover:border-accent-line focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-zoom-in
          ${hideOnMobile ? 'hidden min-[480px]:block' : ''}`}
        style={{ width: w, height: h }}
      >
        <img
          src={url}
          alt={name}
          loading="lazy"
          onError={() => setOk(false)}
          className="w-full h-full object-cover block"
        />
      </button>
      {zoom && (
        <ModalOverlay
          onClose={() => setZoom(false)}
          ariaLabel={name}
          backdropClassName="bg-black/85"
          className="relative max-w-xs w-full"
        >
          <button
            onClick={() => setZoom(false)}
            className="absolute -top-9 right-0 inline-flex items-center gap-2 text-muted hover:text-fg text-[13px]"
          >
            <Icon name="close" size={14} /> Schließen
          </button>
          <img src={url} alt={name} className="w-full rounded-card shadow-panel border border-line" />
          <p className="mt-2 text-center text-[14px] font-head font-semibold text-fg">{name}</p>
        </ModalOverlay>
      )}
    </>
  )
}
