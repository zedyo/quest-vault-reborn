# Kampagnen-Szenarien (kuratierte Titel-Liste)

**Datei:** `src/data/campaignScenarios.ts` · **Typ:** `CampaignScenario` (`src/types/game.ts`)
· **Genutzt von:** Session-Tracker (`/session`, Szenario-Editor) — Auswahl-Dropdown „gespieltes
Szenario je Kampagne". Eingeführt in **v1.5.0**.

## Was hier steht — und was bewusst NICHT

Erfasst werden **ausschließlich faktische Metadaten** je Szenario:

- `id` (kebab-case, je Kampagne eindeutig), `titleDe` (offizieller dt. Titel),
  `titleEn?` (offizieller/Community-EN-Titel, Anker), `act` (1 | 2), `order` (Reihenfolge),
  `role?` (feste Sonderrolle: `intro` / `interlude` / `finale` — rein strukturell).

**NICHT enthalten (FFG-Urheberrecht):** Questbuch-Inhalte — Ziele, Monsterlisten,
Aufbauten, Sonderregeln, Story/Erzähltext. Ein Datenintegritäts-Test (**IP-Shape-Guard**)
lässt den Build fehlschlagen, sobald ein Szenario ein anderes als die sechs erlaubten Felder
trägt (verhindert versehentliches Einpflegen von Quest-Inhalten). Projektweite IP-Regel:
`wiki/concepts/ffg-ip-boundary.md`.

### `role` — feste Sonderszenarien (v1.5.1)

Markiert die **festen** Szenarien (nicht Teil des verzweigenden Pools), damit der
Szenario-Editor sie hervorheben kann (eigene Optgroup „★ Feste Szenarien" + Badge) und der
Akt-abhängige Einkaufsfilter das Zwischenspiel erkennt (dort Akt 1 **und** 2):

- `intro` = Einführung (erstes Szenario) — bei jeder Kampagne außer **Rostende Ketten**
  (reine Akt-II-Fortsetzung von Nebel von Bilehall, kein eigenes Intro).
- `interlude` = Zwischenspiel am Übergang Akt 1 → 2 (immer `act: 1`). Nur die verzweigenden
  Großkampagnen haben ein formales Zwischenspiel: Schattenrune (`the-overlord-revealed`),
  Blutvermächtnis (**zwei:** `der-lockvogel` + `die-tiefen-des-klosters`), Labyrinth
  (`fortune-and-glory`), Nerekhall (`traitors-among-us`). Mini-Kampagnen + Bilehall/Ketten
  haben keins.
- `finale` = letztes Szenario — bei jeder Kampagne außer **Nebel von Bilehall** (läuft in
  Rostende Ketten weiter; das echte Finale ist dort `profane-nexus`).

## Herkunft & Fallen

> Die Titel-Provenienz (offizielle deutsche Questbücher aus dem `scans-transfer`-Release
> für `titleDe`; Community-DBs D2eMap/DescentCampaignSaver/any2cards für `titleEn`,
> positionsweise angelegt; `act` aus Questbüchern + D2eMap-Tags) **und** die
> Lokalisierungs-Fallen (Bilehall ggf. unvollständig, DE/EN-Abweichungen sind teils echte
> Lokalisierung, „Der Drache/Wyrm" gehört zum Grundspiel, Rabenfels-Überschneidung mit
> `ADVANCED_QUESTS`) sind ins Wiki übertragen: `wiki/sources/campaign-scenario-titles.md`.

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

## Freitext-/Alternativ-Quellen im Editor

Der Szenario-Editor erlaubt neben der kuratierten Kampagnen-Liste auch:
`advanced-quest` (→ `ADVANCED_QUESTS`), `rumor` (→ `RUMORS`) und **Freitext** — so lassen sich
auch Nebenquests, Gerücht-Szenarien und (noch) nicht gelistete Szenarien erfassen.
