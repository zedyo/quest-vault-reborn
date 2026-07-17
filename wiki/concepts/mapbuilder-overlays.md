---
type: Concept
title: MapBuilder-Overlays (platzierbare Token)
description: Katalog + Rendering der platzierbaren Descent-Overlay-Token im Kartenbauer/Quest-Editor.
tags: [map-builder, overlays, token, quest-editor]
timestamp: 2026-07-17T00:00:00Z
---

# Überblick

`src/data/overlays.ts` (`OverlayType` + `OVERLAYS`/`OVERLAY_BY_ID`) ist der
platzierbare Overlay-Katalog. Seit **v1.3.13 sind es 20 platzierbare Elemente**
(Token-Bilder eingeführt v1.3.11 mit 16, um `hero-start` + NSC-Figuren auf 20
erweitert). Die Anzahl ist per `dataIntegrity.test.ts` auf `OVERLAYS.length === 20`
gelockt. Transparente Original-Token unter `public/cards/de/overlays/<id>.png`
(Quelle any2cards `images/tokens/d2e/…`; Helper `overlayTokenUrl(id)` in
`assetUrls.ts`).

# Kategorien (20 Token)

- **`passage` (3, als farbige Kantenbalken):** Tür (rot), Verschlossene Tür
  (gelb/orange), Fallgitter (grau). Rendern seit v1.3.13 als `render:'bar'` auf der
  **Feldkante** (Tür liegt in Descent auf der Kante zwischen vier Feldern) statt als
  Tür-Symbol; per ↻ auf die richtige Kante drehbar.
- **`terrain` (3):** Überwucherung + Alte Mauer (beide `render:'bar'`), Brüchiges
  Gelände.
- **`marker` (7):** Zielmarker rot/blau/grün/weiß, Suchmarker, Besonderer Suchmarker,
  Helden-Start/Eingang (`hero-start`).
- **`figure` (7):** Dorfbewohner, Dorfbewohnerin, Verbündeter, Raythen, Serena, Geißel,
  Raben-Schwarm (`category` wurde um `'figure'` erweitert).

Nummerierte Ziel-/Suchmarker über `PlacedOverlay.label` (1–3 Zeichen, v1.3.14).

# Rendering & UI

- **Visueller Token-Picker** im `MapBuilder` (Popover „+ Overlay setzen", nach
  Kategorie gruppiert, mit Vorschaubildern; Outside-Click/Escape schließen).
- Overlays sind **controlled** (`overlays`/`onOverlaysChange`, vom Quest-Editor
  durchgereicht) **oder** uncontrolled (interner State).
- `MapGrid`-`OverlayToken` rendert das transparente PNG (Emoji+Farbe nur als Fallback
  bei fehlendem Bild / unbekannter id), ✕ zum Entfernen, Platzierung per Klick im
  `overlayPlaceMode`. Platzier-Modi (Tile/Monster/Overlay) schließen sich aus.
- **Token-Pipeline:** PNG laden → auf Alpha-Bounding-Box zuschneiden → 128 px →
  `quantize(128, FASTOCTREE)` alpha-erhaltend (~7 KB/Token).

# Verworfene Ansätze / Historie

- **v1.1.32 → v1.3.11:** die ursprünglichen abstrakten Platzhalter OHNE echtes Token
  (`lava`/`pit`/`sludge`/`rubble`/`chest`) wurden entfernt — solches Gelände ist in
  Descent auf die **Plättchen gedruckt**, es existiert keine separate
  Token-Komponente → keine belegte transparente Vorlage.
- **v1.3.13:** ebenso `water`/`hot`/`ice` aus dem Katalog genommen (gleicher Grund:
  auf die Plättchen gedruckt). Türen wurden zu **Kantenbalken** (`render:'bar'`), und
  `hero-start` + NSC-Figuren (Verbündeter/Raythen/Serena/Geißel/Raben-Schwarm) kamen
  hinzu → 20 Elemente.
- Stabile IDs (`door`/`objective`/`search`/…) bleiben → Alt-Quests überleben;
  entfallene IDs degradieren grafisch sanft (Render-Fallback, kein Crash).

**Persist:** `mapData.overlays` war bereits im Schema → **keine** Schema-/
Versionsänderung nötig. Im echten App-Build per Playwright-Screenshot verifiziert.

# Autoritative Quelle

`src/data/overlays.ts` (Katalog, test-gelockt) + Wissensbasis
`docs/game-data/overlays.md`. Diese Seite hält Architektur + Historie fest.

# Verwandt

* [MapGrid (Komponente)](../entities/map-grid.md) - rendert Overlays *und* Tiles (`OverlayToken`).
* [Connector-Rendering-Modell](./connector-rendering.md) - dieselbe MapGrid-Render-Ebene (Plättchen).

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — Statustabelle v1.3.11 / v1.3.13 / v1.3.14 („20 platzierbare Elemente").
[2] [src/data/overlays.ts](../../src/data/overlays.ts) — Katalog (autoritativ, 20 Token).
[3] [src/data/__tests__/dataIntegrity.test.ts](../../src/data/__tests__/dataIntegrity.test.ts) — `OVERLAYS.length === 20`.
[4] [docs/game-data/overlays.md](../../docs/game-data/overlays.md) — Wissensbasis.
