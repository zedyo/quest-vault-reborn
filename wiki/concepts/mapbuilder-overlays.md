---
type: Concept
title: MapBuilder-Overlays (platzierbare Token)
description: Katalog + Rendering der platzierbaren Descent-Overlay-Token im Kartenbauer/Quest-Editor.
resource: src/data/overlays.ts
tags: [map-builder, overlays, token, quest-editor]
timestamp: 2026-07-17T00:00:00Z
---

# Überblick

`src/data/overlays.ts` (`OverlayType` + `OVERLAYS`/`OVERLAY_BY_ID`) ist der
platzierbare Overlay-Katalog. Seit **1.3.11** sind es **16 echte Descent-Token** mit
transparenten Original-Bildern (`public/cards/de/overlays/<id>.png`, Quelle any2cards
`images/tokens/d2e/…`; Helper `overlayTokenUrl(id)` in `assetUrls.ts`).

# Kategorien

- `passage` — Tür / Verschlossene Tür / Fallgitter
- `terrain` — Wasser / Heiß / Eis-Trait + Überwucherung / Brüchiges Gelände / Alte Mauer
- `marker` — Zielmarker rot/blau/grün/weiß, Suchmarker / Besonderer Suchmarker
- `figure` — Dorfbewohner (`category` wurde um `'figure'` erweitert)

# Rendering & UI

- `MapBuilder` hat einen **visuellen Token-Picker** (Popover „+ Overlay setzen", nach
  Kategorie gruppiert, mit Vorschaubildern; Outside-Click/Escape schließen) statt des
  alten `<select>`.
- Overlays sind **controlled** (`overlays`/`onOverlaysChange`, vom Quest-Editor
  durchgereicht) **oder** uncontrolled (interner State).
- `MapGrid`-`OverlayToken` rendert das transparente PNG (Emoji+Farbe nur als Fallback
  bei fehlendem Bild / unbekannter id), ✕ zum Entfernen, Platzierung per Klick im
  `overlayPlaceMode`. Platzier-Modi (Tile/Monster/Overlay) schließen sich gegenseitig aus.
- **Token-Pipeline:** PNG laden → auf Alpha-Bounding-Box zuschneiden → 128 px →
  `quantize(128, FASTOCTREE)` alpha-erhaltend (~7 KB/Token, 16 ≈ 117 KB).

# Umstellung von 1.1.32 (verworfene Platzhalter)

Der alte Kernsatz hatte abstrakte Platzhalter OHNE echtes Token
(`lava`/`pit`/`sludge`/`rubble`/`chest`) — solches Gelände ist in Descent auf die
PLÄTTCHEN gedruckt, es gibt keine separate Token-Komponente → keine belegte transparente
Vorlage. Katalog daher auf echte Token umgestellt. Stabile IDs
(`door`/`water`/`search`/`objective`) bleiben → Alt-Quests überleben; entfallene IDs
degradieren grafisch sanft (Render-Fallback, kein Crash).

**Persist:** `mapData.overlays` war bereits im Schema → **keine** Schema-/
Versionsänderung nötig. Im echten App-Build per Playwright-Screenshot verifiziert.

# Verwandt

* Wissensbasis `docs/game-data/overlays.md` (autoritativ).

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Overlays im MapBuilder (1.1.32 → Token-Bilder 1.3.11)".
[2] [src/data/overlays.ts](../../src/data/overlays.ts) — Katalog (autoritativ).
[3] [docs/game-data/overlays.md](../../docs/game-data/overlays.md) — Wissensbasis.
