---
type: Pattern
title: Connector-Rendering-Modell (Map-Tiles)
description: Warum Tile-Connectoren mit Inset-Streckung + maxWidth:none gerendert werden — und was NICHT wieder umgebaut werden darf.
tags: [map-builder, rendering, connectors, gotcha, geloest]
timestamp: 2026-07-17T00:00:00Z
---

# Zusammenfassung

Descent-2e-Plättchen-PNGs müssen so gerendert werden, dass sie über
Puzzle-Connectoren ineinandergreifen und ihr internes Raster deckungsgleich zum
Board-Raster bleibt. Die funktionierende Lösung ist eine **pro Connector-Seite
angewandte Inset-Streckung** (`CONNECTOR_INSET_FRAC = 0.269`, visuell kalibriert)
plus ein **kritischer `maxWidth:'none'` / `maxHeight:'none'`-Fix** gegen den
Tailwind-Preflight (`img { max-width: 100% }`), der sonst horizontal gestreckte
Bilder staucht und die rechte Connector-Seite falsch macht.

# Schutzregel (verbindlich)

`CONNECTOR_INSET_FRAC` und den `maxWidth`/`maxHeight:none`-Fix **nie** anfassen.
Nur die tatsächlichen Connector-Seiten strecken (nicht alle vier). Verworfen –
nicht erneut versuchen:

- `0.24` aus reiner Pixel-Analyse → visuell falsch; `0.269` ist die kalibrierte Zahl.
- Natural-Scale ohne Streckung → Tiles liegen nicht korrekt auf dem Grid.
- Einheitliche Streckung auf alle vier Seiten → falsch.

# Autoritative Quelle

Die **Werte und Formeln leben im Code** (`constants.ts`, `MapGrid.tsx`) und die
Schutzregel in der **CLAUDE.md**; bei Widerspruch gewinnen diese. Diese Seite ist
Synthese und Navigation, **keine** zweite Quelle der Wahrheit.

# Verwandt

* [MapGrid (Komponente)](../entities/map-grid.md) - wo es implementiert ist.

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Map-Tile Connector-Rendering (GELÖST – nicht erneut umbauen!)" + „Schutzregeln".
[2] [src/components/MapBuilder/constants.ts](../../src/components/MapBuilder/constants.ts) — `CONNECTOR_INSET_FRAC`.
[3] [src/components/MapBuilder/MapGrid.tsx](../../src/components/MapBuilder/MapGrid.tsx) — `DraggableTile`, `maxWidth:'none'`.
