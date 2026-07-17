---
type: Procedure
title: Kartenbild-Validierung von Spielwerten
description: Etabliertes Verfahren, um Descent-2e-Spielwerte direkt aus any2cards-Kartenbildern zu prüfen.
tags: [daten, validierung, verfahren, any2cards]
timestamp: 2026-07-17T00:00:00Z
---

# Zweck

Spielwerte (Monster, Helden, Gruppengrößen) lassen sich direkt aus den
Kartenbildern validieren — die Werte stehen pro Kartentyp immer an derselben
Position. Zuverlässiger als Raten, ergänzend zu den any2cards-Strukturdaten.

# Ablauf (Kurzform)

1. Karte laden (Helden: `imageUrl` in `heroes.ts`; Monster über das URL-Muster aus `assetUrls.ts`; die `-back.png` trägt Fähigkeitstexte **und** Gruppengrößen pro Spielerzahl).
2. Relevante Bereiche mit Python/PIL zuschneiden und 4–6× hochskalieren (LANCZOS), dann per Read-Tool visuell ablesen.
3. Akt 1 vs. Akt 2 getrennt beachten (getrennte Ordner `act1/` / `act2/`).

Die genauen Pixelbereiche (Monster-/Heldenkarte, Gruppengrößen-Streifen) sind in
der CLAUDE.md ausführlich dokumentiert.

# Ergebnis-Regel

Jede so gefundene Korrektur MUSS in `src/data/*.ts` **und** der zugehörigen
`docs/game-data/*.md` landen (Dokumentations-Pflicht) und dort mit „✅ validiert"
+ Datum vermerkt werden.

# Verwandt

* [any2cards / d2e (Datenquelle)](../sources/any2cards-d2e.md) - Strukturdaten + Kartenbilder.
* [Vorfall: fabrizierte Spieldaten](./fabricated-data-incident.md) - warum Belegen statt Raten Pflicht ist.

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Kartenbild-Validierung (ETABLIERTES VERFAHREN seit 2026-06-12)".
[2] [src/data/assetUrls.ts](../../src/data/assetUrls.ts) — Bild-URL-Muster (`ANY2CARDS_IMAGES`, `EXPANSION_PREFIX`).
