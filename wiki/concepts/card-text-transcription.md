---
type: Procedure
title: Kartentext-Transkription mit adversarialer Verifikation
description: Bewährtes Verfahren, um Kartentexte 1:1 zu übernehmen und per Verify-Pass gegen das Kartenbild abzusichern.
tags: [transkription, verifikation, workflow, karten, verfahren]
timestamp: 2026-07-17T00:00:00Z
---

# Muster

Kartentexte werden nicht einfach abgetippt, sondern in zwei Phasen erfasst:

1. **Transkribieren** — meist ein Subagent pro Kartenblatt/Seite; wo zweisprachige
   Daten existieren, dient die **englische Karte als Anker** (zuverlässiger Wortlaut),
   DE wird zugeordnet/übersetzt.
2. **Adversarial verifizieren** — ein separater Verify-Pass vergleicht jede
   transkribierte Einheit gegen das **gerenderte Kartenbild** (bzw. den PDF-Textlayer).
   Der Wortlaut ist maßgeblich aus dem Text/der Karte, die **Struktur/Zuordnung** aus
   dem Bild.

# Warum

Reine Textlayer-/OCR-Heuristiken ordnen bei mehrspaltigen Layouts (breite Banner,
2-Spalten-Fertigkeiten) Wortlaut den falschen Feldern zu → das **Bild ist die
Wahrheit für die Struktur**. Der Verify-Pass ist kein Formalismus: er findet echte
Fehler.

# Belege (der Verify-Pass fing echte Fehler)

- **Zustände (v1.3.10):** 5 echte Fehler gefunden — z. B. „Verängstigt" fehlte die
  „keine"-Negation, „Vergiftet" Stärke- statt Schub-Probe, „Verflucht" Wissen-Probe,
  „Todgeweiht" Schub- statt Aktions-Symbol, „Geschwächt" fehlendes „−1 Schild".
- **Overlord (v1.3.7):** 13 Subagenten, EN-Karte als Anker (Community-`nameDe` wichen
  von den offiziellen Kartennamen ab).
- **CRRG Errata/FAQ Teil 2 (v1.3.17):** jede Seite gegen das gerenderte Seitenbild
  verifiziert (1 Agent/Seite; Wortlaut zu >99 % im PDF-Textlayer belegt).

# Ergebnis-Regel

Zweisprachig speichern (EN 1:1 + DE, DE als Community-Übersetzung markiert).
Korrekturen an den Werten/Texten wandern zur autoritativen Quelle (`src/data/**` +
`docs/game-data/**`) und werden als `Correction` protokolliert (siehe
[Schema](../schema.md)).

# Verwandt

* [DE-Kartenbild-Pipeline](./card-image-pipeline.md) - die Bilder, gegen die verifiziert wird.
* [Kartenbild-Validierung](./card-image-validation.md) - Werte (statt Texte) prüfen.

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — Statustabelle v1.3.7 (Overlord), v1.3.10 (Zustände), v1.3.17 (CRRG).
[2] [docs/game-data/crrg-errata.md](../../docs/game-data/crrg-errata.md) — „Extraktion" (Textlayer-Rollen + Symbol-Mapping).
