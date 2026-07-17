---
type: Pattern
title: Connector-Rendering-Modell (Map-Tiles)
description: Warum Tile-Connectoren mit Inset-Streckung + maxWidth:none gerendert werden — und was NICHT wieder umgebaut werden darf.
tags: [map-builder, rendering, connectors, gotcha, geloest]
timestamp: 2026-07-17T00:00:00Z
---

# Problem

Descent-2e-Tile-PNGs müssen so dargestellt werden, dass Tiles über
Puzzle-Connectoren ineinandergreifen und das interne Tile-Raster deckungsgleich
mit dem Board-Raster bleibt.

# Funktionierende Lösung

1. **PNG-Geometrie:** Canvas ist exakt `cols×75 × rows×75 px`. Auf Connector-Kanten
   liegt die Body-Wall ~18 px innen, der Tab ragt bis zur Canvas-Kante (~1 px), die
   Notch schneidet bis ~35 px ein.
2. **Streckungs-Modell** (`MapGrid.tsx` → `DraggableTile`): `CONNECTOR_INSET_FRAC = 0.269`
   (visuell kalibriert). Pro Seite **nur** strecken, wenn dort ein Connector ist:
   `iL/iR/iT/iB = conn[seite] ? 0.269 : 0`. Formeln:
   - `sx = dCols/(dCols − iL − iR)`, `sy = dRows/(dRows − iT − iB)`
   - `imgW = footW·sx`, `imgH = footH·sy`
   - `imgLeft = −(iL·CELL_SIZE)·sx`, `imgTop = −(iT·CELL_SIZE)·sy`
   - Wrapper = Footprint, `overflow: visible` bei Connector-Tiles.
3. **Kritischer Fix:** Tailwind-Preflight setzt `img { max-width: 100% }`. Das
   stauchte horizontal gestreckte Bilder → die rechte Streckung wirkte nie. Lösung:
   `maxWidth: 'none'` **und** `maxHeight: 'none'` im img-Style. Ohne diesen Fix ist
   die rechte Connector-Seite immer falsch.

# Schutzregel (verbindlich)

`CONNECTOR_INSET_FRAC` und den `maxWidth`/`maxHeight:none`-Fix **nie** anfassen. Nur
die tatsächlichen Connector-Seiten strecken (nicht alle vier). Verworfen — nicht
erneut versuchen:

- `CONNECTOR_INSET_FRAC = 0.24` (aus Pixel-Analyse) → visuell falsch; der User hat
  `0.269` kalibriert.
- Natural-Scale ohne Streckung → Tiles liegen nicht korrekt auf dem Grid.
- Einheitliche Streckung auf alle 4 Seiten → falsch, nur Connector-Seiten strecken.

# Connector-Daten

In `src/data/mapTiles.ts` als `connectors: { top, right, bottom, left: boolean }`.
B-Seiten haben eigene Muster. Vollständige Connector-Tabelle in
`docs/game-data/map-tiles.md`.

# Verbindungsstücke (Connector-Plättchen) — eigene Render-Geometrie (v1.3.16)

Die unnummerierten Verbindungsstücke (`kind:'connector'`, seit v1.3.15) rendern
**anders** als die nummerierten Plättchen und dürfen mit deren Inset-Streckung nicht
verwechselt werden:

- Nummerierte Tiles: Canvas exakt `cols×75 × rows×75`, Tab liegt **innen** → per
  `CONNECTOR_INSET_FRAC` nach außen gestreckt (oben).
- Verbindungsstücke: Canvas auf der Verbindungsachse **größer** als `cols×75` (Tab liegt
  **außerhalb** der Spielfläche), z. B. Extension 150×112 (2×1 + 37 px Überstand),
  sn-Extension 112×150 (1×2 + Überstand), Eingang/Übergang 150×150 (2×2, Tab innen).
- **Fix** (`MapGrid.tsx` `DraggableTile`): für `kind:'connector'` je Achse aus den
  **echten** Bildmaßen (`naturalWidth/Height` via `onLoad`) den Überstand
  `ov = naturalPx − cols·75` bestimmen. Bei `ov>1` maßstäblich **1:1** rendern (kein
  Verzerren) und den Überstand gemäß Connector-Flags auf die Kante(n) versetzen; Achsen
  ohne Überstand (2×2) behalten die Inset-Streckung. Inset-Streckung anzuwenden war die
  Ursache des 1.3.15-Verzerrungs-Bugs. **Nummerierte Plättchen bleiben unberührt.**

Richtung: 1×2 verbindet über die Breite (links/rechts), 2×1 über die Höhe (oben/unten).

# Autoritative Quelle

Die **Werte, Formeln und der Fix leben im Code** (`constants.ts`, `MapGrid.tsx`); die
verbindliche Schutzregel steht zusätzlich in `CLAUDE.md` → „Schutzregeln". Bei
Widerspruch gewinnen diese. Diese Seite ist Synthese/Navigation, **keine** zweite
Quelle der Wahrheit.

# Verwandt

* [MapGrid (Komponente)](../entities/map-grid.md) - wo es implementiert ist.

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Map-Tile Connector-Rendering (GELÖST – nicht erneut umbauen!)" + „Schutzregeln".
[2] [src/components/MapBuilder/constants.ts](../../src/components/MapBuilder/constants.ts) — `CONNECTOR_INSET_FRAC`.
[3] [src/components/MapBuilder/MapGrid.tsx](../../src/components/MapBuilder/MapGrid.tsx) — `DraggableTile`, `maxWidth:'none'`.
[4] [src/data/mapTiles.ts](../../src/data/mapTiles.ts) — `connectors`-Felder.
[5] [docs/game-data/map-tiles.md](../../docs/game-data/map-tiles.md) — vollständige Connector-Tabelle.
