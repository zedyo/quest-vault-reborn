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

# ⚠️ Zwei Druckauflagen: manche DE-Scans sind Errata-Nachdrucke (2026-07-18, geklärt)

Von einigen Descent-2e-Karten existieren **zwei physische Druckauflagen**: ein
**Erstdruck** (Original-Text) und ein **späterer Nachdruck**, der die offiziellen
**FFG-Errata direkt auf die Karte** übernommen hat. Entsprechend zeigt **nicht jeder
deutsche Repo-Scan den Erstdruck** — einige `public/cards/de/**`-Bilder sind der
**Errata-Nachdruck**. Belegt am **Schattendrachen**: `shadow-dragon-act1-back.webp`
druckt die Fähigkeit „Schatten" als „Sobald ein Held, der benachbart zu diesem
Monster ist, einen Angriff ansagt …" (= Errata-Fassung). Es existieren aber auch
Erstdruck-Exemplare mit „Wenn ein Held dieses Monster von einem Nachbarfeld aus
angreift …" (User besitzt beide physisch).

**Das ist KEIN Bug und wird NICHT „zurückkorrigiert".** Regel bleibt: der **vorliegende
Scan = höchste Priorität**. Die Daten folgen dem Scan — auch wenn er die Errata-Fassung
zeigt (die abgebildete Karte sagt genau das). Der Errata-Hinweis bleibt zusätzlich als
additive ErrataBox; bei einem Errata-Nachdruck sagen Haupttext und ErrataBox schlicht
dasselbe.

**Wie man „Original vs. Errata" erkennt** (falls je relevant): Datentext/​Scan gegen die
CRRG-Errata-„sollte lauten"-Fassung vergleichen (bildunabhängig). Stimmt der Scan-Text
mit der Errata-Korrektur überein → der Scan ist ein Errata-Nachdruck. Nicht auf einen
Erstdruck „zurücksetzen", außer der User gibt das ausdrücklich vor.

## Vollständige Liste: Karten mit Errata-Nachdruck-Text (Stand 2026-07-18)

Über den bildunabhängigen Vergleich **aller** Text-Errata (54 „sollte lauten"-Einträge
über Helden/Klassen/Items/Overlord/Plotdecks/Monster/Gerüchte) ermittelt und – wo ein
Scan existiert – am Kartenbild bestätigt. Der Kartentext (Scan) entspricht hier der
**Errata-Fassung** (= Errata-Nachdruck); wir behalten ihn (höchste Priorität).

**Am Scan verifiziert (Kartenbild zeigt die Errata-Fassung):**

| Typ | Karte | Fähigkeit/Feld |
|---|---|---|
| Monster | Schattendrache | Schatten |
| Monster | Goblin-Schamane | Verzaubern |
| Held | Grisban der Durstige | Heldenfähigkeit |
| Overlord | Teuflisches Ritual | Regeltext |
| Overlord | Vielseitigkeit | Regeltext |

**Klassen — kein DE-Skill-Kartenbild im Repo, daher nur textueller Abgleich (Datentext == Errata):**

| Typ | Karte | Fertigkeit | Anmerkung |
|---|---|---|---|
| Klasse | Geomant | Erdbeben | Datentext 1:1 = Errata |
| Klasse | Schattenwandler | Schattenseele (Vertrauter) | 1. Satz = Errata; Quelle any2cards-EN war bereits errata'd |
| Klasse | Geistsprecher | Geister der Ahnen | grenzwertig — einziger Unterschied Herz/Herzen (Symbol) |

**Alle übrigen Text-Errata halten den Erstdruck** (Scan/Datentext ≠ Errata-Korrektur) und
sind KEINE Nachdrucke, u. a.: Held Thaiden Nebelspitze; Overlord Blutdurst + Verstärkung
Rufen; Klassen Ritter/Absichern, Nekromant/Letzter Befehl, Waldläufer, Apothecarius,
Plänkler/Unerbittlich, Runenmeister, Seneschall, Berserker, Seelenschnitter (Unheiliges
Band + Verderbter Entzug); Monster Krähenhexe/Todesomen, Riese (UK) + Troll (UK)/
Rundumschlag, Elementar/Luft, Höllenkoloss/Sturmangriff, Wechselbalg. (Item- und
Plotdeck-Text-Errata: Datentext = Erstdruck, kein Nachdruck.)

**Nicht anwendbar:** Abenteuer-Errata (Szenariotext wird nicht gespeichert, FFG-IP) und
Monsterfähigkeits-Schlagwort „Beherrschung" (kein Monster in den Daten trägt diese
Fähigkeit).

# Citations

[1] CLAUDE.md → „Schutzregeln" (Regel „Kartentext = priorisierte Wahrheit").
[2] [asset-sourcing-and-ip.md](./asset-sourcing-and-ip.md), [ffg-ip-boundary.md](./ffg-ip-boundary.md), [card-image-pipeline.md](./card-image-pipeline.md).
[3] `docs/game-data/scan-sources.md` (Pull-Rezept + Import-Status), `docs/game-data/de-karten/weitere-decks.md` §9 (Plotdeck-Namensabweichungen).
