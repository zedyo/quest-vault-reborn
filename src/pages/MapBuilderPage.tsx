import { useState, useCallback, useRef, useEffect } from 'react'
import MapBuilder from '../components/MapBuilder'
import type { PlacedMapTile } from '../components/MapBuilder/types'
import type { PlacedOverlay } from '../types/game'
import { loadBuilderDraft, saveBuilderDraft } from '../utils/builderDraft'

export default function MapBuilderPage() {
  // Entwurf aus dem eigenen localStorage-Key laden (getrennt vom Quest-Store).
  const initial = useRef(loadBuilderDraft())
  const [tiles, setTiles] = useState<PlacedMapTile[]>(initial.current.tiles)
  const [overlays, setOverlays] = useState<PlacedOverlay[]>(initial.current.overlays)

  // Bei jeder Änderung speichern (localStorage ist synchron + günstig).
  useEffect(() => {
    saveBuilderDraft({ tiles, overlays })
  }, [tiles, overlays])

  const handleTilesChange = useCallback((t: PlacedMapTile[]) => setTiles(t), [])
  const handleOverlaysChange = useCallback((o: PlacedOverlay[]) => setOverlays(o), [])

  return (
    <div className="-mx-4 -mt-6">
      <div className="px-4 pt-4 pb-2">
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-0.5">Kartenbauer</h2>
        <p className="text-gray-400 text-sm">
          Plättchen auswählen, platzieren und drehen; Overlays (Türen, Marker, Figuren …) setzen.
          Türen lassen sich drehen und liegen auf der Feldkante. Dein Entwurf wird automatisch im
          Browser gespeichert.
        </p>
      </div>
      <MapBuilder
        tiles={tiles}
        onTilesChange={handleTilesChange}
        overlays={overlays}
        onOverlaysChange={handleOverlaysChange}
      />
    </div>
  )
}
