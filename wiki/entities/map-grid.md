---
type: Component
title: MapGrid (Kartenraster-Renderer)
description: Rendert platzierte Descent-Plättchen im Kartenbauer inkl. Connector-Streckung.
resource: src/components/MapBuilder/MapGrid.tsx
tags: [map-builder, rendering, connectors]
timestamp: 2026-07-17T00:00:00Z
---

# Überblick

`MapGrid` (mit der inneren `DraggableTile`) zeichnet die im Kartenbauer und
Quest-Editor platzierten Plättchen auf das Board-Raster. Der heikelste Teil ist
das **Connector-Rendering**: Plättchen müssen über ihre Puzzle-Connectoren
ineinandergreifen und ihr internes 75-px-Raster deckungsgleich zum Board-Raster
halten.

# Schlüsselstellen

| Ort | Bedeutung |
|---|---|
| `src/components/MapBuilder/constants.ts` — `CONNECTOR_INSET_FRAC = 0.269` | Visuell kalibrierter Streck-Faktor je Connector-Seite. |
| `src/components/MapBuilder/MapGrid.tsx` — `DraggableTile`, `maxWidth:'none'` | Streckungs-Modell + der kritische Tailwind-Preflight-Fix. |

# Verwandt

* [Connector-Rendering-Modell](../concepts/connector-rendering.md) - das Muster, die verworfenen Ansätze und die Schutzregel dahinter.

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — Abschnitt „Map-Tile Connector-Rendering (GELÖST)".
[2] [docs/game-data/map-tiles.md](../../docs/game-data/map-tiles.md) — Connector-Legende + Tile-Tabelle.
