# CRRG – Errata, FAQ & Regelklärungen (Community Rules Reference Guide V1.15)

**Status:** ✅ integriert (v1.3.17) · **Quelle:** „Community Rules Reference Guide (CRRG) V1.15", deutsche Ausgabe, <https://crrg.descent-community.org>

Diese Seite dokumentiert die Einbindung des von der Community erstellten, frei
verfügbaren **CRRG** (offizielle FFG-Errata + FAQ Version 1.0d + ~400 inoffizielle
Community-FAQs) in Quest Vault Reborn.

## Leitprinzip (WICHTIG)

Die CRRG-Inhalte sind **additiv**: Sie erweitern die Original-Karten-/Spieldaten als
**optionale Zusatzinfo / Variante** und **ersetzen oder überschreiben den Original-
Inhalt NIEMALS**. In der App erscheinen sie ausschließlich als **per Default
eingeklappte** Zusatzbox bzw. in einer eigenen, durchsuchbaren Sektion – jeweils mit
klarer Quellenangabe („CRRG V1.15"). Der Original-Kartentext bleibt unverändert die
Hauptdarstellung.

## Aufbau des Quelldokuments

Das CRRG-PDF (100 Seiten, deutsche Ausgabe) gliedert sich in drei Teile:

| Teil | Seiten | Inhalt | Verwendung in der App |
|---|---|---|---|
| **Teil 1** – Referenz-Regel-Guide | 3–46 | Regeln alphabetisch (Regelklärungen, offizielle + inoffizielle FAQs) | Durchsuchbare **Regelklärungs-Sektion** |
| **Teil 2** – Errata & FAQ | 47–84 | Errata/FAQ zu konkreten Komponenten (Helden, Klassen, Items, Overlord, Monster, Abenteuer …) | Aufklappbare **Errata-Box an der jeweiligen Karte** + durchsuchbare Übersicht |
| **Teil 3** – Anhänge | 85–92 | Tabellen, visuelle Beispiele (Bewegung/Sichtlinie/Kampf) | (nicht importiert – reine Bildbeispiele) |

Teil 2 unterteilt sich in die Abschnitte 2.1 Helden & Verbündete, 2.2 Klassenkarten,
2.3 Markt- & Reliktkarten, 2.4 Overlordkarten, 2.5 Handlungskarten (Plotdecks),
2.6 Monster, 2.7 Monsterfähigkeiten, 2.8 Abenteuer (nach Kampagne gruppiert),
2.9 Gerüchtekarten, 2.10 Geheimkammerkarten.

## Architektur, Verknüpfung & Extraktion

> Datenmodell (`ErrataEntry`/`RuleClarification`/`ErrataScope`), die namensbasierte
> Laufzeit-Verknüpfung (`src/data/errataLinks.ts`, `getErrata`/`getMonsterAbilityErrata`,
> Normalisierung + Edit-Distanz-Rückfall + `HERO_ALIASES`) und das PDF-Extraktions-
> verfahren (PyMuPDF, font-basierte Rollen, `GaraScenarioDescent`-Symbol-Mapping,
> adversariale Seitenbild-Verifikation) sowie die bekannten Grenzen sind ins Wiki
> übertragen: `wiki/concepts/crrg-errata-integration.md`. Autoritativ bleiben die
> Errata-Daten in `src/data/errata.ts` + `ruleClarifications.ts` (+ `errataLinks.ts`).

## Umfang (Stand v1.3.18)

- Teil 1: **164** Regelklärungen.
- Teil 2: **250** komponentenbezogene Errata/FAQ-Einträge über 10 Abschnitte (Helden 35, Klassen 27, Items/Relikte 27, Overlord 40, Plotdecks 14, Monster 10, Monsterfähigkeiten 34, Abenteuer 59, Gerüchte 3, Geheimkammer 1).
- Verknüpft an konkrete Karten: siehe `ERRATA_LINK_STATS` (Test in `dataIntegrity.test.ts`).
