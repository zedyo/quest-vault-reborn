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

## Datenmodell (`src/types/game.ts`)

- `RuleClarification` – ein alphabetischer Regelklärungs-Eintrag aus Teil 1
  (`term`, `groups`, `notes`, `related`, `page`).
- `ErrataEntry` – ein komponentenbezogener Errata-/FAQ-Eintrag aus Teil 2
  (`scope`, `sectionDe`, `subgroupDe?`, `nameDe`, `groups`, `notes`, `page`).
- `ErrataGroup` = `{ label, points[] }` (bei Klassen ist `label` der Fertigkeitskarten-
  Name; `label: null` = allgemeiner Block).
- `ErrataNote` = `{ title, points[] }` – die „Wege zum Ruhm"-/„Die Anderswelt"-/
  „Prüfungen von Frostgate"-Kästen (Regeln für die App-Kampagne Road to Legend).
- `ErrataScope` = `hero | class | item | overlord | plot | monster | monster-ability | adventure | rumor | secret-room | other`.

## Dateien

| Datei | Inhalt |
|---|---|
| `src/data/ruleClarifications.ts` | Teil 1 – alle Regelklärungen (generiert). Exportiert außerdem `CRRG_SOURCE` + `CRRG_URL`. |
| `src/data/errata.ts` | Teil 2 – alle komponentenbezogenen Errata/FAQ (generiert). |
| `src/data/errataLinks.ts` | Laufzeit-Verknüpfung Errata ↔ Komponente. `getErrata(scope, id)`, `hasErrata`, `LINKED_ERRATA`, `MONSTER_ABILITY_ERRATA`, `ERRATA_LINK_STATS`. |
| `src/components/ErrataBox.tsx` | Aufklappbare (default-eingeklappte) Zusatzbox pro Karte. |
| `src/pages/RulesClarificationsPage.tsx` | Durchsuchbare Sektion (`/klarstellungen`): Tab „Regelklärungen" (Teil 1) + Tab „Errata & FAQ" (Teil 2). |

## Verknüpfung an die Karten (`errataLinks.ts`)

Die CRRG-Einträge nennen Komponenten nur beim **Namen**. `errataLinks.ts` löst den
Namen **zur Laufzeit** gegen die echten Datensätze auf (bleibt so automatisch synchron
mit den Datendateien). Normalisierung: Kleinschreibung, `ß`→`ss`, englisches „and"→„und",
Klammer-Zusätze wie „(UK)"/„(Gefährte)" entfernt, Trennzeichen entfernt; für Held/Monster
zusätzlich ein Edit-Distanz-≤1-Rückfall (fängt Schreibvarianten wie „Jain"↔„Jaine").

- `hero` → `HEROES`, `class` → `HERO_CLASSES`, `item` → `SHOP_ITEMS`+`RELICS`,
  `overlord` → alle `OVERLORD_DECKS`-Karten, `monster` → `MONSTERS`, `rumor` → `RUMORS`.
- `plot` → `PLOT_DECKS` (CRRG-Name „Agent – Deckname", Teilstring-Treffer erlaubt).
- `adventure` → Kampagne über die Untergruppe (`subgroupDe` = Kampagnenname).
- Nicht auflösbare Einträge (Geheimkammerkarten, Sammel-Einträge, Komponenten außerhalb
  der DB) behalten `targetId: null` und erscheinen **nur** in der durchsuchbaren
  Übersicht – **es geht keine Information verloren**.

Angebunden an: HeroesPage (Lightbox), ClassesPage, ItemsPage (Shop + Relikte),
OverlordPage, PlotDecksPage (Deck-Ebene), MonstersPage (Lightbox), RumorsPage (Lightbox),
CampaignsPage (Kampagnen-Karte, mehrere Abenteuer-Einträge mit Szenarionamen).

## Extraktion (Verfahren)

Das PDF hat einen echten Textlayer (InDesign). Extraktion via PyMuPDF:
1. **Spaltenerkennung** (2-spaltig) + **Font-basierte Rollen**: `Windlass`-Font =
   Überschriften (Größe 14 Eintrag / 16 Abschnitt / 9 „Wege zum Ruhm"), `GaramondPremrPro`
   = Fließtext, `GaramondPremrPro-Bd` ≥ 11 pt = Fertigkeitskarten-Zwischenüberschrift.
2. **Symbol-Mapping**: Die Descent-Symbole liegen im Font `GaraScenarioDescent` und
   werden als Wörter hinterlegt (die App rendert sie über `GameSymbols` als Icons):
   `∏`→Erschöpfung, `≥`→Herz, `±`/`į`→Schub, `İ`→Verteidigung, `Į`→Aktion, `Ĳ`→Bewegung,
   `Ĵ`→Stärke, `ĵ`→Wissen, `ķ`/`π`→Willenskraft, `ĳ`/`μ`→Gespür.
3. **Bild-Verifikation (adversarial)**: Section 2.2 (Klassen) und alle Teil-2-Seiten
   nutzen teils breite Banner mit 2-spaltigem Fertigkeits-Layout, das reine Textlayer-
   Heuristiken falsch zuordnen. Jede Teil-2-Seite wurde daher **gegen das gerenderte
   Seitenbild verifiziert** (ein Agent je Seite): Wortlaut aus dem Textlayer (maßgeblich),
   Struktur/Zuordnung aus dem Bild. Ergebnis: Wortlaut zu >99 % im PDF-Textlayer belegt,
   Zuordnung bild-korrekt.

## Bekannte Grenzen / bewusste Auslassungen

- **Teil 3** (visuelle Beispiele) ist nicht reproduziert.
- `monster-ability`-Errata (2.7) sind keiner einzelnen Karte zugeordnet (Fähigkeits-
  Schlagwörter) → nur in der durchsuchbaren Übersicht.
- Einzelne Abenteuer-Szenarien sind in der DB nicht als eigene Objekte vorhanden;
  Abenteuer-Errata hängen daher an der **Kampagne** (mit Szenarioname als Zwischenzeile).
- Heldenscans außerhalb der 60-Helden-DB (z. B. „(UK)"-Promo-Helden) bleiben unverknüpft.

## Umfang (Stand v1.3.17)

- Teil 1: **164** Regelklärungen.
- Teil 2: **250** komponentenbezogene Errata/FAQ-Einträge über 10 Abschnitte (Helden 35, Klassen 27, Items/Relikte 27, Overlord 40, Plotdecks 14, Monster 10, Monsterfähigkeiten 34, Abenteuer 59, Gerüchte 3, Geheimkammer 1).
- Verknüpft an konkrete Karten: siehe `ERRATA_LINK_STATS` (Test in `dataIntegrity.test.ts`).
