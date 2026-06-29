# Descent 2. Edition – Overlay-Plättchen und Spielmarker

**Status:** Im Kartenbauer umgesetzt ✅ – **20 platzierbare Elemente** (v1.3.13)
`src/data/overlays.ts` + Platzierung im MapBuilder, Bilder `public/cards/de/overlays/<id>.png`
**Zuletzt aktualisiert:** 2026-06-29

## Änderungen v1.3.13 (Ziel: Buch-Karten 1:1 nachbauen)

- **Türen/Fallgitter als farbige Absperrung auf der Kante** (kein Tür-Symbol mehr):
  In Descent liegt eine Tür auf der KANTE zwischen vier Feldern (2 davor, 2 dahinter)
  und wird auf den Quest-Diagrammen als farbiger Balken über die 2-Felder-Öffnung
  gezeichnet. Umgesetzt über `render: 'bar'` + `PlacedOverlay.rotation` (0 oben,
  90 rechts, 180 unten, 270 links). Balken ≈ 2×0,5 Felder, mittig auf der Gitterlinie.
  Farben: Tür rot, Verschlossene Tür gelb/orange, Fallgitter grau.
- **Alle Overlays drehbar** (`PlacedOverlay.rotation`, optional/abwärtskompatibel,
  ↻-Knopf je Token im MapGrid, Import-Sanitizer akzeptiert rotation).
- **Entfernt (redundant):** `water`/`hot`/`ice`. Dieses Gelände ist in Descent 2e auf
  die PLÄTTCHEN gedruckt (farbige Linien), es gibt KEINE losen Token dafür; die alten
  Builder-Bilder stammten aus dem any2cards `traits/`-Ordner (Regions-Eigenschaften),
  nicht aus Geländefeld-Token. Konsequent zur 1.3.11-Entfernung von lava/pit/sludge/rubble.
- **Neu:** `hero-start` (Helden-Start/Eingang, eigener Builder-Marker – das Startgebiet
  ist auf den Diagrammen eine Hervorhebung, kein universelles Token) + NSC-/Verbündeten-
  Figuren `villager-female`, `ally`, `raythen`, `serena`, `scourge`, `raven-flock`
  (echte any2cards-Token).
- **Standalone-Kartenbauer (/karte) persistiert** den Entwurf jetzt (eigener
  localStorage-Key `qvr-builder-draft`, `src/utils/builderDraft.ts` – kein Persist-Schema-Bump).

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
skalieren, mit `quantize(128, FASTOCTREE)` alpha-erhaltend optimieren (~6–8 KB/Token; Stand 1.3.11
waren es 16 Token, seit 1.3.13 sind es 20) nach `public/cards/de/overlays/<id>.png`. Helper:
`overlayTokenUrl(id)` (in `assetUrls.ts`). `MapGrid`-`OverlayToken` zeigt für bildbasierte Token das
Bild (Emoji-Fallback nur bei fehlendem Bild / unbekannter id), für Passagen (`render:'bar'`) einen
farbigen Kanten-Balken.

### Katalog `src/data/overlays.ts`

| id | Name (DE) | Name (EN) | Kategorie | render | Erweiterung | Quelle (any2cards) |
|---|---|---|---|---|---|---|
| `door` | Tür | Door | passage | bar (rot) | base | `base-game/terrain/bg-door-token` |
| `locked-door` | Verschlossene Tür | Locked Door | passage | bar (gelb) | base | `base-game/terrain/bg-locked-door-token` |
| `portcullis` | Fallgitter | Portcullis | passage | bar (grau) | shadow-of-nerekhall | `shadow-of-nerekhall/terrain/sn-portcullis-token` |
| `overgrowth` | Überwucherung | Overgrowth | terrain | image | labyrinth-of-ruin | `labyrinth-of-ruin/terrain/lr-overgrowth-token` |
| `crumbling` | Brüchiges Gelände | Crumbling Terrain | terrain | image | mists-of-bilehall | `mists-of-bilehall/terrain/mb-crumbling-terrain-token` |
| `old-wall` | Alte Mauer | Old Wall | terrain | image | mists-of-bilehall | `mists-of-bilehall/terrain/mb-old-wall-token` |
| `objective` | Zielmarker (rot) | Objective Token (Red) | marker | image | base | `base-game/objectives/bg-red-objective-token` |
| `objective-blue` | Zielmarker (blau) | Objective Token (Blue) | marker | image | base | `base-game/objectives/bg-blue-objective-token` |
| `objective-green` | Zielmarker (grün) | Objective Token (Green) | marker | image | base | `base-game/objectives/bg-green-objective-token` |
| `objective-white` | Zielmarker (weiß) | Objective Token (White) | marker | image | base | `base-game/objectives/bg-white-objective-token` |
| `search` | Suchmarker | Search Token | marker | image | base | `base-game/search/bg-normal-search-token` |
| `search-unique` | Besonderer Suchmarker | Unique Search Token | marker | image | base | `base-game/search/bg-unique-search-token` |
| `hero-start` | Helden-Start / Eingang | Hero Start / Entrance | marker | image | base | eigener Builder-Marker (generiert) |
| `villager` | Dorfbewohner | Villager (male) | figure | image | base | `base-game/villagers/bg-male-villager-token` |
| `villager-female` | Dorfbewohnerin | Villager (female) | figure | image | base | `base-game/villagers/bg-female-villager-token` |
| `ally` | Verbündeter | Ally | figure | image | labyrinth-of-ruin | `labyrinth-of-ruin/allies/lr-ally-token` |
| `raythen` | Raythen | Raythen | figure | image | labyrinth-of-ruin | `labyrinth-of-ruin/allies/lr-raythen-token` |
| `serena` | Serena | Serena | figure | image | labyrinth-of-ruin | `labyrinth-of-ruin/allies/lr-serena-token` |
| `scourge` | Geißel | Scourge | figure | image | the-chains-that-rust | `the-chains-that-rust/servants/cr-scourge-token` |
| `raven-flock` | Rabenschwarm | Raven Flock | figure | image | the-trollfens | `the-trollfens/servants/tf-raven-flock-token` |

Marker/Figuren-Footprint 1×1; Passagen (`render: 'bar'`) liegen 2×0,5 auf der Feldkante.
`descriptionDe` ist eine kurze, eigene Mechanik-Notiz (kein Regelheft-Text).

**Umstellung von v1.1.32 → v1.3.11:** Der frühere Kernsatz enthielt abstrakte Platzhalter ohne
echtes Token-Bild (`lava`, `pit`, `sludge`, `rubble`, `chest`). In Descent 2e ist solches Gelände
**auf die Plättchen gedruckt**, es existiert dafür keine separate Token-Komponente – daher gibt es
keine belegte transparente Vorlage. Der Katalog wurde deshalb auf die **echten Token** umgestellt
(Gelände-Eigenschaften Wasser/Heiß/Eis, Erweiterungs-Geländetoken, Tür/Fallgitter, Ziel-/Suchmarker,
Dorfbewohner). Stabile IDs (`door`, `search`, `objective` …) bleiben erhalten; Alt-Quests mit
entfallenen IDs (`lava` …; seit 1.3.13 auch `water`/`hot`/`ice`) degradieren grafisch sanft
(Render-Fallback, kein Fehler).

### Datenmodell

```typescript
interface OverlayType {           // Katalog (src/data/overlays.ts)
  id: string
  nameEn: string; nameDe: string
  category: 'terrain' | 'passage' | 'object' | 'marker' | 'figure'
  cols: number; rows: number      // Footprint (Annotation: 1×1)
  expansionId: string
  color: string; icon: string     // Akzentfarbe (auch Balkenfarbe) + Emoji-Fallback
  descriptionDe: string           // kurze eigene Mechanik-Notiz
  render?: 'image' | 'bar'        // 'bar' = Kanten-Absperrung (Türen); sonst Token-Bild (Default)
}

interface PlacedOverlay {         // platzierte Instanz (mapData.overlays)
  id: string
  overlayType: string             // → OverlayType.id
  x: number; y: number
  rotation?: 0 | 90 | 180 | 270   // optional/abwärtskompatibel; Kante bei Passagen, Drehung sonst
}
```

Integration: `src/components/MapBuilder/index.tsx` (Token-Picker-Popover + Platzier-Logik + Dreh-Handler,
controlled *oder* uncontrolled; `OverlayIcon` zeigt Balken-Swatch für Passagen), `MapGrid.tsx`
(`OverlayToken` rendert Bild *oder* Kanten-Balken + ↻/✕-Knöpfe + Klick-Platzierung), Quest-Editor reicht
`encounter.mapData.overlays` durch. Datenintegritäts-Tests sichern IDs, Anzahl (20), Kategorie,
`expansionId`, Footprint, `render`/Passage-Invariante, Abwesenheit von water/hot/ice und das
Vorhandensein aller Token-Bilder ab.

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
