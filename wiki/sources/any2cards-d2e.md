---
type: Source Summary
title: any2cards / d2e (Community-Datensatz)
description: Strukturierte JS/JSON-Spieldaten + Kartenbilder für Descent 2e — Haupt-Asset des Projekts, inkl. bekannter Fallstricke.
resource: https://github.com/any2cards/d2e
tags: [quelle, any2cards, daten, assets]
timestamp: 2026-07-17T00:00:00Z
---

# Was es ist

Das any2cards/d2e-Repo liefert strukturierte `data/*.js`-Dateien (gültiges JSON)
plus PNG-Bilder aller Karten und Tiles — zuverlässiger als reines Pixel-Lesen.
Zugriff ohne API-Limit per Blobless-Clone; Einzeldateien direkt über
`raw.githubusercontent.com/any2cards/d2e/master/data/<name>.js`.

# Nutzung im Projekt

- Bild-URLs werden zentral über `src/data/assetUrls.ts` gebildet (`ANY2CARDS_IMAGES`, `EXPANSION_PREFIX`, `EXPANSION_PATH`).
- Die Rohdaten sind **englisch** → im Projekt zweisprachig speichern: EN-Original (zuverlässig) + DE-Community-Übersetzung (klar als solche markiert, nicht zwingend offizieller FFG-Wortlaut).

# Fallstricke (bekannt)

- **Errata-Dubletten:** dieselbe Karte 2× mit unterschiedlichem Text → die spätere/klarere Fassung nehmen.
- **Stub-Fehler:** z. B. Runenmeister hat KEINEN Begleiter; der Totenbeschwörer-Begleiter heißt „Reanimate", nicht „Skelett".
- **Vertauschte Quelldaten (`agents.js`):** bei Ardus Ix'Erebus / Kyndrithul / Zarihell / Skarn waren die Label-Felder permutiert — Inhalte in sich stimmig, aber falsch beschriftet; per Kartenbild eindeutig zugeordnet (v1.1.29). Details in der CLAUDE.md.

# Verwandt

* [Kartenbild-Validierung](../concepts/card-image-validation.md) - Kreuzprüfung der Werte gegen die Kartenbilder.
* [Vorfall: fabrizierte Spieldaten](../concepts/fabricated-data-incident.md) - warum jede Quelle geprüft wird.

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „any2cards-STRUKTURDATEN (Goldgrube, entdeckt 2026-06-13)" + „VERTAUSCHTE Quelldaten".
[2] any2cards/d2e: <https://github.com/any2cards/d2e>
[3] [src/data/assetUrls.ts](../../src/data/assetUrls.ts) — Asset-URL-Modul.
