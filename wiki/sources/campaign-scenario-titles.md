---
type: Source Summary
title: Kampagnen-Szenariotitel — Provenienz & Lokalisierungs-Fallen
description: Woher die 108 kuratierten Szenariotitel stammen (DE-Questbücher + Community-DBs) und welche Fallen dabei auftraten.
tags: [kampagnen, szenarien, provenienz, lokalisierung, quelle]
timestamp: 2026-07-17T00:00:00Z
---

# Herkunft der Titel (Stand 2026-07-05)

Die 108 kuratierten Szenariotitel (nur Metadaten, siehe
`docs/game-data/campaign-scenarios.md`) stammen aus zwei Quellen:

- **`titleDe` = offizielle deutsche Questhandbücher** aus dem Release `scans-transfer`
  (`Descent.Scans.zip` → `Regelbücher PDF/`, siehe
  [DE-Kartenbild-Pipeline](../concepts/card-image-pipeline.md) /
  `docs/game-data/scan-sources.md`). Je Quest die **Titelseite** per
  PyMuPDF-Textlayer extrahiert (bei Nebel von Bilehall der Kampagnen-Regeltext).
- **`titleEn` = Community-Datenbanken auf GitHub** (Wikis/BGG/d2etracker sind über die
  Egress-Policy dieser Umgebung gesperrt): `Sadgit-HL/D2eMap`,
  `jaredswarts55/DescentCampaignSaver` (Shadow-Rune-Akte explizit), `any2cards/d2e`.
  Die EN-Titel wurden **positionsweise** an die deutsche Questbuch-Reihenfolge angelegt
  (Endpunkte Intro/Interlude/Finale + Gesamtzahl je Kampagne stimmen überein); wo keine
  verlässliche EN-Quelle vorlag, fehlt `titleEn` bewusst.
- **`act`** aus den Akt-Abschnitten der Questbücher + D2eMap-Akt-Tags (gegengeprüft);
  Interlude-Quests → Akt 1.

# Fallen (bewusst dokumentiert)

- **Nebel von Bilehall:** Release enthält nur das 8-seitige Regelheft (keine
  Quest-Titelseiten) → die 6 Titel stammen aus dem Kampagnen-Regeltext; Community-Listen
  nennen zusätzliche Begegnungen → Liste **möglicherweise unvollständig** (Editor-Freitext
  fängt Fehlende ab). Belegqualität dieser Kampagne = „mittel".
- **Bilehall = Akt-I-Kampagne, Rostende Ketten = deren Akt-II-Fortsetzung** → Bilehall
  `act:1`, Ketten `act:2` (offizielle kombinierte Struktur).
- **DE-/EN-Abweichungen sind teils echte Lokalisierung**, keine Fehler (z. B.
  „Hugins Hügelgrab" ↔ „Barrow of Barris", „Der Rattenkönig" ↔ „The Rat-Thing King").
  `titleDe` (offizielles Questbuch) ist maßgeblich, `titleEn` der Community-Anker.
- **„Der Drache/Wyrm" im Grundspiel:** „Des Drachen Umkehr/Wiederkehr" gehören zur
  **Grundspiel-Kampagne** (Gryvorn), NICHT zu „Höhle des Lindwurms".
- **Schloss Rabenfels** (Gerücht-Quests): drei Akt-II-Titel überschneiden sich mit
  `ADVANCED_QUESTS` in `campaigns.ts` (dort Community-DE, hier der offizielle
  Questbuch-Titel — bewusst).

# Autoritative Quelle

Die Titel-Tabelle (108 Szenarien / 9 Kampagnen mit Belegqualität), das
6-Feld-`CampaignScenario`-Schema (IP-Shape-Guard) und die `role`-Sonderrollen stehen in
`docs/game-data/campaign-scenarios.md`; die Titel selbst in `src/data/campaignScenarios.ts`.

# Verwandt

* [Kartentext-Transkription](../concepts/card-text-transcription.md) - PDF-Textlayer-Extraktion.
* [FFG-IP-Grenze](../concepts/ffg-ip-boundary.md) - warum nur Titel/Metadaten, kein Questbuch-Inhalt.

# Citations

[1] [docs/game-data/campaign-scenarios.md](../../docs/game-data/campaign-scenarios.md) — Tabelle + Schema (autoritativ).
[2] [docs/game-data/scan-sources.md](../../docs/game-data/scan-sources.md) — Questbuch-PDFs im Release.
