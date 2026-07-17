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
