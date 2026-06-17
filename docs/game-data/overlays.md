# Descent 2. Edition – Overlay-Plättchen und Spielmarker

**Status:** Im Kartenbauer umgesetzt ✅ (v1.1.32) – `src/data/overlays.ts` + Platzierung im MapBuilder  
**Zuletzt aktualisiert:** 2026-06-17

---

## Umsetzung im Kartenbauer (v1.1.32)

Overlays sind vor allem für den **Questbuilder** relevant: Quest-Autoren markieren damit
Gelände, Türen, Objekte und Missionsmarker auf der Karte. Umgesetzt als platzierbare
**1×1-Feldmarker** im MapBuilder (Quest-Editor *und* Kartenbauer):

- Auswahl per „**+ Overlay setzen**" in der Werkzeugleiste → auf ein Feld klicken platziert den Marker.
- Marker per **✕** wieder entfernen. Im Quest-Editor werden die Overlays mit der Begegnung
  gespeichert (`mapData.overlays`, war bereits im Persist-Schema vorgesehen → keine Migration nötig).

Erfasst ist ein bewusst **kompakter, eindeutig realer Kernsatz** des Grundspiels (keine
quest-spezifischen Sondertoken, um keine unbelegten Daten anzulegen). `descriptionDe` ist eine
kurze, eigene Mechanik-Notiz (kein Regelheft-Text). Modell = pro Feld ein Marker (1×1), passend
für die Karten-Annotation; nicht als exakte physische Plättchengröße gedacht.

### Katalog `src/data/overlays.ts`

| id | Name (DE) | Name (EN) | Kategorie | Symbol |
|---|---|---|---|---|
| `water` | Wasser | Water | terrain | 💧 |
| `lava` | Lava | Lava | terrain | 🔥 |
| `pit` | Grube | Pit | terrain | 🕳️ |
| `sludge` | Schlamm | Sludge | terrain | 🟤 |
| `rubble` | Trümmer | Rubble | terrain | 🪨 |
| `door` | Tür | Door | passage | 🚪 |
| `chest` | Schatztruhe | Treasure Chest | object | 🧰 |
| `objective` | Zielmarker | Objective Token | marker | 🎯 |
| `search` | Suchmarker | Search Token | marker | 🔍 |

Alle `expansionId: base`, alle Footprint 1×1. Erweiterungs-Overlays können später ergänzt werden.

### Datenmodell

```typescript
interface OverlayType {           // Katalog (src/data/overlays.ts)
  id: string
  nameEn: string; nameDe: string
  category: 'terrain' | 'passage' | 'object' | 'marker'
  cols: number; rows: number      // Footprint (Annotation: 1×1)
  expansionId: string
  color: string; icon: string     // Marker-Darstellung
  descriptionDe: string           // kurze eigene Mechanik-Notiz
}

interface PlacedOverlay {         // platzierte Instanz (mapData.overlays)
  id: string
  overlayType: string             // → OverlayType.id
  x: number; y: number
}
```

Integration: `src/components/MapBuilder/index.tsx` (Werkzeugleiste + Platzier-Logik, controlled
*oder* uncontrolled), `MapGrid.tsx` (`OverlayToken`-Rendering + Klick-Platzierung), Quest-Editor
reicht `encounter.mapData.overlays` durch. Datenintegritäts-Tests sichern IDs, Kategorie,
`expansionId`, Footprint und Zweisprachigkeit ab.

---

## Hintergrund-Recherche (weitere Komponenten, nicht im Builder)

Diese Listen dienen als faktische Referenz; im Builder ist bewusst nur der obige Kernsatz erfasst.

### Weitere Gelände-/Objekt-Overlays
Gefahrenfeld (Hazard, wie Lava); quest-spezifische Objekte wie Altar, Statue, Pilz, Käfig (jeweils
in den Quest-Guides definiert) – bewusst nicht als generische Overlays übernommen.

### Spielmarker (Tokens, kein Karten-Overlay)
Bedrohungs-, Such-, Aktivierungs-, Runden-, Erschöpfungs- und Zustandsmarker (Vergiftet, Betäubt,
Immobilisiert, Verflucht, Blind …) sind Spielmarker, keine auf die Karte gelegten Gelände-Overlays,
und daher nicht Teil des Builder-Overlay-Sets. Strukturiert u. a. in any2cards `tokens.js` /
`conditions.js`.

---

## Quellen

- Descent Community Wiki: https://wiki.descent-community.org
- any2cards/d2e – data/tokens.js, data/conditions.js: https://github.com/any2cards/d2e
