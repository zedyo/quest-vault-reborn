# Descent 2. Edition – Overlay-Plättchen und Spielmarker

**Status:** Im Kartenbauer umgesetzt ✅ – **16 echte Token mit transparenten Original-Bildern** (v1.3.11)
`src/data/overlays.ts` + Platzierung im MapBuilder, Bilder `public/cards/de/overlays/<id>.png`
**Zuletzt aktualisiert:** 2026-06-25

---

## Umsetzung im Kartenbauer

Overlays sind vor allem für den **Questbuilder** relevant: Quest-Autoren markieren damit
Türen, Gelände, Missionsziele und Figuren auf der Karte. Umgesetzt als platzierbare
**1×1-Feldmarker** im MapBuilder (Quest-Editor *und* Kartenbauer):

- Auswahl per „**+ Overlay setzen**" → visueller **Token-Picker** (Popover, nach Kategorie
  gruppiert, zeigt die echten Token-Bilder) → auf ein Feld klicken platziert den Marker.
- Marker per **✕** wieder entfernen. Im Quest-Editor werden die Overlays mit der Begegnung
  gespeichert (`mapData.overlays`, war bereits im Persist-Schema vorgesehen → keine Migration nötig).

### Token-Bilder (v1.3.11)

Jeder Eintrag entspricht einer **echten Descent-2e-Komponente**; das Markerbild ist das
**transparente Original-Token** (Quelle: any2cards `images/tokens/d2e/…`). Pipeline: PNG laden,
auf Alpha-Bounding-Box zuschneiden (entfernt den transparenten Rand der Rund-Token), auf 128 px
skalieren, mit `quantize(128, FASTOCTREE)` alpha-erhaltend optimieren (~7 KB/Token, 16 Token ~117 KB)
nach `public/cards/de/overlays/<id>.png`. Helper: `overlayTokenUrl(id)` (in `assetUrls.ts`).
`MapGrid`-`OverlayToken` zeigt das Bild (Emoji-Fallback nur bei fehlendem Bild / unbekannter id).

### Katalog `src/data/overlays.ts`

| id | Name (DE) | Name (EN) | Kategorie | Erweiterung | Quelle (any2cards) |
|---|---|---|---|---|---|
| `door` | Tür | Door | passage | base | `base-game/terrain/bg-door-token` |
| `locked-door` | Verschlossene Tür | Locked Door | passage | base | `base-game/terrain/bg-locked-door-token` |
| `portcullis` | Fallgitter | Portcullis | passage | shadow-of-nerekhall | `shadow-of-nerekhall/terrain/sn-portcullis-token` |
| `water` | Wasser | Water Terrain | terrain | base | `base-game/traits/bg-water-trait-token` |
| `hot` | Heißes Gelände | Hot Terrain | terrain | base | `base-game/traits/bg-hot-trait-token` |
| `ice` | Eis | Ice Terrain | terrain | base | `base-game/traits/bg-ice-trait-token` |
| `overgrowth` | Überwucherung | Overgrowth | terrain | labyrinth-of-ruin | `labyrinth-of-ruin/terrain/lr-overgrowth-token` |
| `crumbling` | Brüchiges Gelände | Crumbling Terrain | terrain | mists-of-bilehall | `mists-of-bilehall/terrain/mb-crumbling-terrain-token` |
| `old-wall` | Alte Mauer | Old Wall | terrain | mists-of-bilehall | `mists-of-bilehall/terrain/mb-old-wall-token` |
| `objective` | Zielmarker (rot) | Objective Token (Red) | marker | base | `base-game/objectives/bg-red-objective-token` |
| `objective-blue` | Zielmarker (blau) | Objective Token (Blue) | marker | base | `base-game/objectives/bg-blue-objective-token` |
| `objective-green` | Zielmarker (grün) | Objective Token (Green) | marker | base | `base-game/objectives/bg-green-objective-token` |
| `objective-white` | Zielmarker (weiß) | Objective Token (White) | marker | base | `base-game/objectives/bg-white-objective-token` |
| `search` | Suchmarker | Search Token | marker | base | `base-game/search/bg-normal-search-token` |
| `search-unique` | Besonderer Suchmarker | Unique Search Token | marker | base | `base-game/search/bg-unique-search-token` |
| `villager` | Dorfbewohner | Villager | figure | base | `base-game/villagers/bg-male-villager-token` |

Alle Footprint 1×1. `descriptionDe` ist eine kurze, eigene Mechanik-Notiz (kein Regelheft-Text).

**Umstellung von v1.1.32 → v1.3.11:** Der frühere Kernsatz enthielt abstrakte Platzhalter ohne
echtes Token-Bild (`lava`, `pit`, `sludge`, `rubble`, `chest`). In Descent 2e ist solches Gelände
**auf die Plättchen gedruckt**, es existiert dafür keine separate Token-Komponente – daher gibt es
keine belegte transparente Vorlage. Der Katalog wurde deshalb auf die **echten Token** umgestellt
(Gelände-Eigenschaften Wasser/Heiß/Eis, Erweiterungs-Geländetoken, Tür/Fallgitter, Ziel-/Suchmarker,
Dorfbewohner). Stabile IDs (`door`, `water`, `search`, `objective`) bleiben erhalten; Alt-Quests mit
entfallenen IDs (`lava` …) degradieren grafisch sanft (Render-Fallback, kein Fehler).

### Datenmodell

```typescript
interface OverlayType {           // Katalog (src/data/overlays.ts)
  id: string
  nameEn: string; nameDe: string
  category: 'terrain' | 'passage' | 'object' | 'marker' | 'figure'
  cols: number; rows: number      // Footprint (Annotation: 1×1)
  expansionId: string
  color: string; icon: string     // Akzentfarbe + Emoji-Fallback
  descriptionDe: string           // kurze eigene Mechanik-Notiz
}

interface PlacedOverlay {         // platzierte Instanz (mapData.overlays)
  id: string
  overlayType: string             // → OverlayType.id
  x: number; y: number
}
```

Integration: `src/components/MapBuilder/index.tsx` (Token-Picker-Popover + Platzier-Logik, controlled
*oder* uncontrolled), `MapGrid.tsx` (`OverlayToken`-Bildrendering + Klick-Platzierung), Quest-Editor
reicht `encounter.mapData.overlays` durch. Datenintegritäts-Tests sichern IDs, Anzahl (16), Kategorie,
`expansionId`, Footprint und das Vorhandensein aller Token-Bilder ab.

---

## Hintergrund-Recherche (weitere Komponenten, nicht im Builder)

Diese Listen dienen als faktische Referenz; im Builder ist bewusst der obige reale Token-Satz erfasst.

### Weitere Token (any2cards `tokens.js`)
116 Token insgesamt – u. a. Helden-/Leutnant-/Begleiter-Marker, Overlord-Einfluss/Infektion,
Erschöpfungs-/Schadensmarker, Zustands- und Geländetoken weiterer Erweiterungen. Die übrigen
Gelände-Trait-Token (Höhle, Gebäude, Wildnis, Berg, Verflucht, Dunkel …) sind eher **Reise-/
Regions-Eigenschaften** als auf den Dungeon gelegte Marker und daher nicht im Builder-Set.

### Quest-spezifische Sondertoken
Altar, Statue, Pilz, Käfig usw. werden je Quest im Questbuch definiert – bewusst nicht als
generische Overlays übernommen (keine zuverlässige, allgemeingültige Quelle).
