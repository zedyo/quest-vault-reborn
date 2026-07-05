# Kampagnen-Szenarien (kuratierte Titel-Liste)

**Datei:** `src/data/campaignScenarios.ts` · **Typ:** `CampaignScenario` (`src/types/game.ts`)
· **Genutzt von:** Session-Tracker (`/session`, Szenario-Editor) — Auswahl-Dropdown „gespieltes
Szenario je Kampagne". Eingeführt in **v1.5.0**.

## Was hier steht — und was bewusst NICHT

Erfasst werden **ausschließlich faktische Metadaten** je Szenario:

- `id` (kebab-case, je Kampagne eindeutig), `titleDe` (offizieller dt. Titel),
  `titleEn?` (offizieller/Community-EN-Titel, Anker), `act` (1 | 2), `order` (Reihenfolge).

**NICHT enthalten (FFG-Urheberrecht):** Questbuch-Inhalte — Ziele, Monsterlisten,
Aufbauten, Sonderregeln, Story/Erzähltext. Ein Datenintegritäts-Test (**IP-Shape-Guard**)
lässt den Build fehlschlagen, sobald ein Szenario ein anderes als die fünf erlaubten Felder
trägt (verhindert versehentliches Einpflegen von Quest-Inhalten).

## Quellen (2026-07-05)

- **`titleDe` = offizielle deutsche Questhandbücher** aus dem projekteigenen Release
  `scans-transfer` (`docs/game-data/scan-sources.md`, `Descent.Scans.zip` → Ordner
  `Regelbücher PDF/`). Pro Quest wurde die **Titelseite** (bzw. bei Nebel von Bilehall der
  **Kampagnen-Regeltext**) per PyMuPDF-Textlayer extrahiert. PDFs: `Questhandbuch.pdf`
  (Grundspiel), `Questhandbuch - Das Blutvermächtnis Akt 1/2.pdf`, `Höhle des Lindwurms.pdf`,
  `Labyrinth des Verderbens.pdf`, `Die Trollsümpfe.pdf`, `Schatten von Nerekhall.pdf`,
  `Schloss Rabenfels.pdf`, `Nebel von Belihall.pdf`, `Rostende Ketten.pdf`.
- **`titleEn` = Community-Datenbanken** (auf GitHub erreichbar, da die Wikis/BGG/d2etracker
  über die Egress-Policy dieser Umgebung gesperrt sind): `Sadgit-HL/D2eMap`
  (`scripts/campaign_quest_lists.txt` + `scripts/constants.js` mit Akt-Tags),
  `jaredswarts55/DescentCampaignSaver` (`Data/Scenario.csv`, Shadow-Rune-Akte explizit),
  `any2cards/d2e`. Die EN-Titel wurden **positionsweise** an die deutsche Questbuch-Reihenfolge
  angelegt (Endpunkte Intro/Interlude/Finale + Gesamtzahl je Kampagne stimmen überein).
  Wo keine verlässliche EN-Quelle vorlag (v. a. deutsche Interlude-Umbenennungen), fehlt
  `titleEn` bewusst.
- **`act`:** aus den Akt-Abschnitten der deutschen Questbücher **und** den D2eMap-Akt-Tags
  (gegengeprüft). **Interlude-Quests → Akt 1** (Übergang Akt 1 → 2).

## Umfang (108 Szenarien, 9 Kampagnen)

| Kampagne (`id`) | Anzahl | Belegqualität |
|---|---|---|
| Die Schattenrune (`the-shadow-rune`) | 20 | hoch (DE-Titelseiten + EN doppelt belegt, Akte aus CSV) |
| Das Blutvermächtnis (`heirs-of-blood`) | 19 | hoch; 2 Interludes (Der Lockvogel / Die Tiefen des Klosters) ohne gesicherten EN-Titel |
| Höhle des Lindwurms (`lair-of-the-wyrm`) | 5 | hoch (DE-Questbuch = D2eMap-Liste) |
| Labyrinth des Verderbens (`labyrinth-of-ruin`) | 19 | hoch (DE-Titelseiten, EN 1:1 positioniert) |
| Die Trollsümpfe (`the-trollfens`) | 5 | hoch |
| Schatten von Nerekhall (`shadow-of-nerekhall`) | 19 | hoch (alle DE-Titelseiten sauber) |
| Schloss Rabenfels (`manor-of-ravens`) | 6 | hoch (DE-Questbuch); „Vogelfrei" ohne gesicherten EN-Titel |
| Nebel von Bilehall (`mists-of-bilehall`) | 6 | mittel — nur Regeltext im Release (keine Titelseiten); Liste ggf. unvollständig |
| Rostende Ketten (`the-chains-that-rust`) | 9 | hoch (DE-Titelseiten = D2eMap-Liste) |

## Besonderheiten / Fallen

- **Nebel von Bilehall:** Das Release enthält nur das 8-seitige Regelheft (keine Quest-
  Titelseiten). Die 6 Titel stammen aus dem offiziellen Kampagnen-Regeltext; Community-Listen
  nennen zusätzliche Begegnungen (Fear Unshackled / Troubled Waters / Shattered Schemes) →
  die Liste ist möglicherweise **unvollständig**. Fehlende Szenarien können Nutzer über die
  Freitext-Option des Editors erfassen.
- **Bilehall = Akt-I-Kampagne, Rostende Ketten = deren Akt-II-Fortsetzung** → Bilehall-Quests
  tragen `act: 1`, Ketten-Quests `act: 2` (offizielle kombinierte Kampagnenstruktur).
- **DE-/EN-Abweichungen sind teils echte Lokalisierung**, nicht Fehler (z. B.
  „Hugins Hügelgrab" ↔ „Barrow of Barris", „Tot oder untot" ↔ „Dead or Drowning",
  „Der Rattenkönig" ↔ „The Rat-Thing King"). `titleDe` ist maßgeblich (offizielles Questbuch);
  `titleEn` ist der Community-Anker.
- **„Der Drache/Wyrm" im Grundspiel:** „Des Drachen Umkehr/Wiederkehr" (The Wyrm Turns/Rises)
  gehören zur **Grundspiel-Kampagne** (Endgegner Gryvorn = Schattendrache), NICHT zu „Höhle des
  Lindwurms".
- **Schloss Rabenfels** besteht aus Gerücht-Quests; die drei Akt-II-Titel überschneiden sich
  mit den `ADVANCED_QUESTS` in `campaigns.ts` (dort Community-DE-Übersetzung; hier der offizielle
  Questbuch-Titel — bewusst, da Questbuch = maßgebliche Quelle).

## Freitext-/Alternativ-Quellen im Editor

Der Szenario-Editor erlaubt neben der kuratierten Kampagnen-Liste auch:
`advanced-quest` (→ `ADVANCED_QUESTS`), `rumor` (→ `RUMORS`) und **Freitext** — so lassen sich
auch Nebenquests, Gerücht-Szenarien und (noch) nicht gelistete Szenarien erfassen.
