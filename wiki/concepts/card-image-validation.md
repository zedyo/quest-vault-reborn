---
type: Procedure
title: Kartenbild-Validierung von Spielwerten
description: Etabliertes Verfahren, um Descent-2e-Spielwerte direkt aus any2cards-Kartenbildern zu prüfen.
tags: [daten, validierung, verfahren, any2cards]
timestamp: 2026-07-17T00:00:00Z
---

# Zweck

Spielwerte lassen sich **direkt aus den any2cards-Kartenbildern validieren** — die
Werte stehen pro Kartentyp immer an derselben Position. Ergänzt die (zuverlässigeren)
any2cards-Strukturdaten, wo nur Bilder vorliegen.

# Ablauf

1. Karte herunterladen (Helden: `imageUrl` in `heroes.ts`; Monster per Muster
   `images/monsters/d2e/<erweiterung>/<act1|act2>/<prefix>-<id>-front.png`, siehe
   `EXPANSION_PREFIX`/`EXPANSION_PATH`. Die `-back.png` enthält Fähigkeitstexte
   **und** Gruppengrößen pro Spielerzahl!).
2. Mit Python/PIL die relevanten Bereiche zuschneiden und 4–6× hochskalieren
   (LANCZOS), dann per Read-Tool visuell ablesen.
3. Akt 1 vs. Akt 2 beachten (getrennte Karten in `act1/`- und `act2/`-Ordnern).

## Pixel-Positionen

- **Monsterkarte (385×600):** Diener-Stats oben (y 0–60), Meister-Stats unten
  (y 540–600), Verteidigungswürfel jeweils rechts (x 230–385); Angriffswürfel Diener
  ~y 155–200, Meister ~y 405–450.
- **Heldenkarte (600×483):** Stats-Spalte x 230–420.

## Gruppengrößen ablesen (etabliert 2026-06-13)

Auf der `-back.png` (385×600) liegt unten ein Streifen (y ~548–600) mit drei
Segmenten für 2 / 3 / 4 Spieler (links→rechts). Jedes Segment zeigt links die
**Diener**-Zahl (goldene Figur), rechts die **Meister**-Zahl (rote Figur). Effizient:
alle `-back.png` laden, den Streifen ausschneiden, 4–5× hochskalieren und mehrere als
beschriftete Montage stapeln. Große Monster: Muster 1+0 / 0+1 / 1+1; Schwärme (Kobold)
deutlich größere Zahlen. Im Code: `groupSizes` als `[Diener, Meister]`.

# Ergebnis-Regel

Jede Korrektur MUSS in `src/data/*.ts` **und** der zugehörigen `docs/game-data/*.md`
landen (Dokumentations-Pflicht) und mit `✅ validiert` + Datum vermerkt werden.
Größere Korrekturen zusätzlich als `Correction`-Eintrag im Wiki-Log
(siehe [Schema](../schema.md) → „Korrekturen wandern zur Quelle").

# Damit gefundene & behobene Fehler (kartenscan-validiert)

Der vollständige Validierungspass aller 56 Monstergruppen + 2 Helden ist
**abgeschlossen** (v1.0.2–v1.0.3, 2026-06-12/13). Beispiele:

- Ravaella Leichtfuß: Bewegung 5→4; Reanimate: Verteidigung Braun, act2Master +1 gelb;
  Rat Swarm: Meister-Verteidigung Braun, „Gefräßig" gibt Energie statt Herz (v1.0.2).
- **v1.0.3 – 70+ Korrekturen:** Verteidigungswürfelfarben bei ~35 Monstern; diverse
  Angriffswürfel- und Textfehler (z. B. Elemental Erde→Gespür/Wasser→Willenskraft),
  Fähigkeitstypen (surge↔action↔ability) u. a.

Der **kartengenaue Volltext** dieser Korrekturliste steht in `CLAUDE.md` und in den
`docs/game-data/*.md` (autoritativ) — hier bewusst nur zusammengefasst.

# Verwandt

* [any2cards / d2e (Datenquelle)](../sources/any2cards-d2e.md) - Strukturdaten + Kartenbilder.
* [Vorfall: fabrizierte Spieldaten](./fabricated-data-incident.md) - warum Belegen statt Raten Pflicht ist.

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Kartenbild-Validierung (ETABLIERTES VERFAHREN seit 2026-06-12)".
[2] [src/data/assetUrls.ts](../../src/data/assetUrls.ts) — Bild-URL-Muster (`ANY2CARDS_IMAGES`, `EXPANSION_PREFIX`, `EXPANSION_PATH`).
[3] [docs/game-data/monsters.md](../../docs/game-data/monsters.md), [docs/game-data/heroes.md](../../docs/game-data/heroes.md) — autoritative validierte Werte.
