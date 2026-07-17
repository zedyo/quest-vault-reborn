---
type: Decision
title: Kartentext = priorisierte Wahrheit (Sprach- & Quellen-Priorität)
description: Verbindliche Regel, dass der Original-Kartentext (sprachrichtig) über Community-/Daten-Text steht und Diskrepanzen immer zur Karte hin korrigiert werden.
tags: [ip, daten, karten, sprache, deutsch, korrektur, verbindlich]
timestamp: 2026-07-17T00:00:00Z
---

# Entscheidung (User-Vorgabe 2026-07-17, verbindlich)

Der Text auf dem **Original-Kartenbild** ist die **priorisierte Wahrheit** für alle
Spieldaten und Dokumentation.

- **Sprachtreue Quelle:** Deutscher Text stammt von der **deutschen** Karte, englischer
  Text von der **englischen** Karte.
- **Keine Rate-Übersetzungen:** Geratene oder Community-Übersetzungen sind zu **vermeiden**.
  Zulässig nur, wenn nachweislich **kein** deutsches Kartenbild existiert (dann klar als
  solche kennzeichnen).
- **Diskrepanz ⇒ zur Karte korrigieren:** Weicht ein dokumentierter/gespeicherter Text
  (`src/data/**`, `docs/game-data/**`) vom Kartentext ab, wird **immer** zum Kartentext hin
  korrigiert — **priorisiert**, sobald es auffällt, nicht aufgeschoben.
- **Englische Karte im UI ⇒ deutsche suchen:** Wird irgendwo ein englisches Kartenbild
  angezeigt/verwendet, ist das deutsche Pendant zu suchen und (falls vorhanden) einzusetzen.
  Alle aus dem `scans-transfer`-Release importierten Karten sollten auffindbar sein.

# Rationale

Community-Übersetzungen (z. B. aus any2cards) wichen wiederholt vom offiziellen deutschen
Kartentext ab — belegt bei Overlord (v1.3.7: *Unheiliges Ritual*→*Teuflisches Ritual* …),
Hauptmännern (v1.3.8), Items (v1.3.3, ~70 Korrekturen) und Plotdecks (2026-07-17:
*Saat des Verrats*→**Saat der Zwietracht**, *Hybride Loyalität*→**Gespaltene Loyalität**,
*Wütende Infektion*→**Grassierende Seuche**, *Ungesehene Legionen*→**Legionen der Unterstadt**).
Die Karte ist die einzige verlässliche, prüfbare Quelle; sie schlägt jede Sekundärübersetzung.

# Konsequenzen für die Arbeit

- Beim Berühren eines Datenbereichs mit vorhandenem deutschem Kartenbild: Namen + Regeltexte
  gegen die Karte prüfen und abweichende `nameDe`/`rulesDe`/Doku korrigieren.
- Neue deutsche Kartenbilder bevorzugt lokal einbinden (`public/cards/de/**`), EN-Bild nur
  als Fallback, wo kein deutsches existiert.
- Offene Audit-Aufgabe: systematisch prüfen, wo das UI noch EN-Karten zeigt, obwohl ein
  deutsches Bild im Release vorliegt (→ ersetzen).

# Citations

[1] CLAUDE.md → „Schutzregeln" (Regel „Kartentext = priorisierte Wahrheit").
[2] [asset-sourcing-and-ip.md](./asset-sourcing-and-ip.md), [ffg-ip-boundary.md](./ffg-ip-boundary.md), [card-image-pipeline.md](./card-image-pipeline.md).
[3] `docs/game-data/scan-sources.md` (Pull-Rezept + Import-Status), `docs/game-data/de-karten/weitere-decks.md` §9 (Plotdeck-Namensabweichungen).
