---
type: Decision
title: Vorfall + Regeln — fabrizierte Spieldaten (2026-06-12)
description: Halluzinierte Helden/Erweiterungen wurden entfernt; daraus abgeleitete verbindliche Anti-Halluzinations-Regeln.
tags: [daten, postmortem, regeln, integritaet]
timestamp: 2026-07-17T00:00:00Z
---

# Was passiert ist

In `heroes.ts` fanden sich 8 frei erfundene Helden mit zwei nicht existierenden
Erweiterungen („Maze of the Drakon", „Sands of the Past") — vermutlich in einer
früheren Session halluziniert. Entfernt. Korrekte Zahlen: **60 Helden, 56
Monstergruppen, 23 Erweiterungen** sowie **225 Map-Tiles** (204 Räume + 21
Verbindungsstücke seit v1.3.15; per `dataIntegrity.test.ts` gelockt sind u. a. 20
Agenten, 20 Plotdecks/200 Karten, 105 Overlord-Karten, 9 Kampagnen).

# Abgeleitete Regeln (verbindlich)

1. `src/data/expansions.ts` ist die verbindliche Produktliste. Jeder Datensatz mit einer `expansionId` außerhalb dieser Liste ist halluzinationsverdächtig.
2. Die Datenintegritäts-Tests (`dataIntegrity.test.ts`) prüfen das automatisch — nie umgehen.
3. Vor dem Eintragen neuer Spieldaten: Existenz gegen die echte Produktwelt prüfen (BGG, Fandom-Wiki, any2cards).
4. Bei Datenänderungen den Subagenten `daten-pruefer` laufen lassen.

# Verwandt

* [Kartenbild-Validierung](./card-image-validation.md) - das positive Gegenstück (Werte belegen statt raten).
* [any2cards / d2e (Datenquelle)](../sources/any2cards-d2e.md) - belegbare Quelle für Spielwerte.

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „DATEN-VORFALL 2026-06-12: Fabrizierte Helden (BEHOBEN – Lehre beachten!)".
[2] [src/data/expansions.ts](../../src/data/expansions.ts) — verbindliche Produktliste.
[3] [src/data/__tests__/dataIntegrity.test.ts](../../src/data/__tests__/dataIntegrity.test.ts) — automatische Absicherung.
[4] [.claude/agents/daten-pruefer.md](../../.claude/agents/daten-pruefer.md) — Prüf-Subagent.
