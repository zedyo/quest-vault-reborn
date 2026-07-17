---
type: Decision
title: Asset-Sourcing & IP-Grauzone (gewählter Weg)
description: Welche Asset-/IP-Option das Projekt gewählt hat und mit welchen Absicherungen.
tags: [ip, assets, entscheidung, recht, grauzone]
timestamp: 2026-07-17T00:00:00Z
---

# Entscheidung

Von den vier in `docs/research/digital-assets.md` §6 evaluierten Optionen (A Grauzone /
B eigene Grafiken / C APK-Extraktion / D Asmodee-Kontakt) nutzt das Projekt
**Option A (Community-Praxis, Grauzone)** — mit Absicherungen:

- **Primärquelle:** [any2cards / d2e](../sources/any2cards-d2e.md) (strukturierte
  JSON-Daten + Kartenbilder), plus die deutschen Original-Karten-Scans.
- **Lokale Optimierung statt Hotlinking:** die genutzten Kartenbilder werden als
  klein-optimierte `public/cards/de/**`-webp **ins Repo committet** (reduziert externe
  Abhängigkeit, macht die PWA offline-fähig; Roh-Scans werden nie committet).
- **Nicht-kommerziell**, mit **FFG-Copyright-Anerkennung** (Attribution im UI/Footer).
- **Keine Bezahl-Schranken** — Monetarisierung höchstens als freiwillige Spende
  (Ko-Fi); ein optionaler Konto-/Sync-Dienst wäre von den FFG-Daten trennbar
  (→ [interne Strategie](./internal-strategy.md)).
- **Inhaltsgrenze:** faktische Metadaten + funktionale Kartentexte ja, kreative
  FFG-Prosa (Quest-/Regelheft-Text) nein → [FFG-IP-Grenze](./ffg-ip-boundary.md).

# Rationale

Ein kommerzielles Modell mit FFG-Material wäre rechtlich riskant; ein vollständiger
Eigen-Neuzeichen-Weg (Option B) war für den Umfang nicht leistbar. Option A entspricht
der geduldeten Praxis vergleichbarer Community-Tools (D2eMap, any2cards). **Restrisiko:**
Abmahnung/Takedown möglich — daher nicht-kommerziell + Attribution + keine Bezahlfeatures.

# Autoritative Quelle

Die vollständige Lizenz-/Policy-Analyse (Erlaubt/Verboten-Tabelle, Optionen A–D) steht
in `docs/research/digital-assets.md` §5/§6. Diese Seite hält nur die **getroffene
Entscheidung** fest.

# Citations

[1] [docs/research/digital-assets.md](../../docs/research/digital-assets.md) §5 (Lizenz-Bewertung) + §6 (Optionen).
[2] [sources/any2cards-d2e.md](../sources/any2cards-d2e.md), [concepts/ffg-ip-boundary.md](./ffg-ip-boundary.md), [concepts/internal-strategy.md](./internal-strategy.md).
