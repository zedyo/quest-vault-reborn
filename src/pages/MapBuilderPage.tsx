import MapBuilder from '../components/MapBuilder'

export default function MapBuilderPage() {
  return (
    <div className="-mx-4 -mt-6">
      <div className="px-4 pt-4 pb-2">
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-0.5">Kartenbauer</h2>
        <p className="text-gray-400 text-sm">
          Plättchen auswählen, platzieren und drehen; Overlays (Türen, Gelände, Marker, Figuren …) setzen.
        </p>
      </div>
      <MapBuilder />
    </div>
  )
}
