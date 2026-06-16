# Descent 2. Edition – Leutnants & Hauptmänner

**Status:** VOLLSTÄNDIG ✅ (v1.1.18 Grundspiel + v1.1.19 Erweiterungen): 21 Leutnants, 39 Formen,
EN 1:1 aus Quelle + maschinell verifiziert (0 Abweichungen, Regelpaarung geprüft).
**Quelle:** any2cards/d2e, `data/lieutenants.js` (englischer Originaltext)
**Übersetzung:** Deutsch = Community-Übersetzung (nicht zwingend offizieller FFG-Wortlaut)
**Zuletzt aktualisiert:** 2026-06-14

---

## Übersicht

Leutnants sind benannte Antagonisten des Overlords mit eigenen Wertekarten. Sie treten
je nach Quest als Bosse auf. Jeder Leutnant hat Werte für **Akt I** und **Akt II**; die
Werte (Bewegung, Leben, Verteidigung) skalieren mit der **Spielerzahl** (2/3/4 Helden).

Datenmodell pro Akt: Angriffstyp + -würfel, vier Attribute (Stärke/Wissen/Willenskraft/
Gespür), Werte je Spielerzahl sowie Fähigkeiten (Kurzlabel mit Aktions-/Schub-Präfix +
ausführlicher Regeltext). Numerische Werte sind 1:1 aus der Quelle geparst und
maschinell gegengeprüft (39 Formen, 138 Fähigkeiten, 0 Abweichungen, Regelpaarung verifiziert).

### Erfassungsstand

| Erweiterung | Leutnants | Status |
|---|---|---|
| Grundspiel | Baron Zachareth, Belthir, Lady Eliza Farrow, Lord Merick Farrow, Sir Alric Farrow, Splig | ✅ (6) |
| Höhle des Lindwurms | Valyndra | ✅ (1) |
| Labyrinth des Verderbens | Ariad, Königin Ariad, Raythen, Serena | ✅ (4) |
| Die Trollsümpfe | Bol'Goreth | ✅ (1) |
| Schloss Rabenfels | Skarn | ✅ (1) |
| Schatten von Nerekhall | Mirklace, Gargan Mirklace, Rylan Olliven, Tristayne Olliven, Verminous | ✅ (5) |
| Nebel von Bilehall → Rostende Ketten | Ardus Ix'Erebus, Kyndrithul, Zarihell (Akt I Bilehall, Akt II Ketten) | ✅ (3) |
| **Gesamt** | | **21 Leutnants / 39 Formen** |

*Hinweis: Ardus Ix'Erebus, Kyndrithul und Zarihell haben Akt I in „Nebel von Bilehall" und Akt II
in „Die rostenden Ketten" — die `expansionId` ist je Form gespeichert, in der App mit Erweiterungs-Tag angezeigt.*

*Aufgewertete „Agenten"-Versionen (Plotdecks) sind separat in any2cards `agents.js` erfasst und
für ein späteres Increment vorgesehen.*

---

## Grundspiel-Leutnants

Werte als **Akt I → Akt II**; Leben/Verteidigung in der Reihenfolge **2 / 3 / 4 Spieler**.

### Baron Zachareth
- **Angriff:** Nahkampf Blau Rot → Blau Rot Rot
- **Attribute:** Stärke 4, Wissen 3, Willenskraft 3, Gespür 4
- **Leben (2/3/4):** 10/13/16 → 16/18/20
- **Fähigkeiten:** Herrschaft (Aktion), Durchbohren 2 (Schub), Unterwerfen (Schub); Akt II zusätzlich Schattenblitz (Aktion)

### Belthir
- **Angriff:** Nahkampf Blau Rot → Blau Rot Rot
- **Attribute:** Stärke 4, Wissen 3, Willenskraft 4, Gespür 1
- **Leben (2/3/4):** 9/11/13 → 13/15/18
- **Fähigkeiten:** Fliegen, Reichweite, Vergiften (Schub); Akt II zusätzlich Verheerung (Aktion)

### Lady Eliza Farrow
- **Angriff:** Fernkampf Blau Gelb → Blau Gelb Rot
- **Attribute:** Stärke 1, Wissen 3, Willenskraft 3, Gespür 5
- **Leben (2/3/4):** 7/9/12 → 9/11/15
- **Fähigkeiten:** Opfern, Verführen (Aktionen), Blutruf (Schub); Akt II zusätzlich Wehklagen (Aktion)

### Lord Merick Farrow
- **Angriff:** Fernkampf Blau Rot → Blau Rot Gelb
- **Attribute:** Stärke 2, Wissen 4, Willenskraft 2, Gespür 3
- **Leben (2/3/4):** 8/11/13 → 10/12/15
- **Fähigkeiten:** Nachbeben, Entzünden (Aktion), +1 Herz (Schub); Akt II zusätzlich Verdorren (Schub)

### Sir Alric Farrow
- **Angriff:** Nahkampf Blau Rot → Blau Rot Rot
- **Attribute:** Stärke 5, Wissen 1, Willenskraft 2, Gespür 4
- **Leben (2/3/4):** 10/14/16 → 12/15/18
- **Fähigkeiten:** Unbeweglich, Überwältigen (Aktion), +1 Herz (Schub); Akt II zusätzlich Regeneration 1, +2 Herzen (Schub)

### Splig
- **Angriff:** Nahkampf Blau Rot → Blau Rot Gelb
- **Attribute:** Stärke 4, Wissen 3, Willenskraft 3, Gespür 2
- **Leben (2/3/4):** 7/9/13 → 10/12/16
- **Fähigkeiten:** Nicht ich!, Rückstoß (Schub), +1 Herz (Schub); Akt II zusätzlich Beförderung (Aktion), +2 Herzen (Schub)

---

## Erweiterungs-Leutnants

Attribute: Stärke/Wissen/Willenskraft/Gespür (M/W/Wi/G). Angriff/Fähigkeiten in der Form
**Akt I → Akt II**. Voller Regeltext je Fähigkeit im Code (`lieutenants.ts`) und in der App.

| Leutnant | Erweiterung | Angriff (I→II) | M/W/Wi/G | Fähigkeiten (Akt II) |
|---|---|---|---|---|
| Valyndra | Höhle des Lindwurms | Nahkampf BR → BRG | 5/2/1/3 | Hortend, Feueratem (Schub), Verbrennen (Schub) |
| Ariad | Labyrinth des Verderbens | Fernkampf BG → BGG | 2/4/2/4 | Verdorben, Uralter Fluch, Fluchstoß (Aktionen) |
| Königin Ariad | Labyrinth des Verderbens | nur Akt II: Nahkampf BRG | 3/3/3/3 | Verdorben, Uralter Fluch, Zangenangriff (Aktionen) |
| Raythen | Labyrinth des Verderbens | nur Akt II: Fernkampf BRG | 3/3/3/3 | Opportunist, Stehlen (Aktion), Betäuben (Schub) |
| Serena | Labyrinth des Verderbens | nur Akt II: Nahkampf BRG | 3/3/3/3 | Starker Geist, Miasma (Aktion), Fluch/Seuche (Schub) |
| Bol'Goreth | Die Trollsümpfe | Nahkampf BR → BRR | 6/1/2/2 | Reichweite, Widerstandsfähig, Amoklauf (Aktion) |
| Skarn | Schloss Rabenfels | Nahkampf BY → BRY | 4/3/4/1 | Energieentzug 4, Dreschen (Aktion), Heilen 4 (Schub) |
| Mirklace | Schatten von Nerekhall | Fernkampf BRG → BRYG | 3/5/3/2 | Aura 2, Erdspaltung (Aktion), Zauberei 3, Druckwelle (2 Schub) |
| Gargan Mirklace | Schatten von Nerekhall | Fernkampf BRG → BRYG | 3/5/3/2 | wie Mirklace (eigene Kampagnen-Figur) |
| Rylan Olliven | Schatten von Nerekhall | Fernkampf BGG → BRGG | 1/4/3/3 | Präzise, Beeinflussen (Aktion), Unterwerfen (2 Schub) |
| Tristayne Olliven | Schatten von Nerekhall | Fernkampf BR → BRY | 2/4/4/2 | Verwüsten, Seelenentzug, Chaotische Energie |
| Verminous | Schatten von Nerekhall | Nahkampf BYG → BYGG | 2/3/2/5 | Meisterplan, Heimlich, Intrige (Schub) |
| Ardus Ix'Erebus | Bilehall → Rost. Ketten | Nahkampf BR → BRR | 5/2/1/4 | Flankieren, Wut, Sammeln (Aktion), Durchbohren 1 (Schub) |
| Kyndrithul | Bilehall → Rost. Ketten | Fernkampf BY → BYY | 3/4/4/1 | Blutlinien, Versklaven, Zauberei 4, Knochensplitter (Schub) |
| Zarihell | Bilehall → Rost. Ketten | Fernkampf BR → BRY | 2/4/3/3 | Seelenherrschaft, Peinigerin, Furcht ausnutzen (Aktion) |

*(B = Blau, R = Rot, Y = Gelb, G = Grün)*

---

## Agenten (`src/data/agents.ts`)

Agenten sind die **aufgewerteten Leutnant-Versionen** aus den Leutnants-Packs: eigene
Fähigkeiten (z. B. „Lenkung" statt „Herrschaft", „Der da!" statt „Nicht ich!") und je ein
zugehöriges **Plotdeck**. Agenten-Statkarten führen **keine Attributwerte** (nur Angriff,
Werte je Spielerzahl, Fähigkeiten). Quelle: any2cards `data/agents.js`.

**Status:** Grundspiel + saubere Erweiterungs-Agenten erfasst ✅ (v1.1.20 + v1.1.21 –
**16 Agenten, 32 Formen**, EN 1:1 verifiziert). Die eigentlichen **Plotdeck-Karten**
(`data/plot-decks.js`, 201 Karten in 20 Decks) folgen in weiteren Increments.

> ⚠️ **Datenbefund (Validierung ausstehend):** Die any2cards-`agents.js`-Daten für die
> Agenten von **Ardus Ix'Erebus, Kyndrithul, Zarihell und Skarn** sind **vertauscht** –
> die xws-Schlüssel tragen fremde Fähigkeiten/Regeltexte (die Regeln nennen jeweils einen
> anderen Charakter), `askarn` ist sogar unter falscher Erweiterung gelistet. Diese 4 Agenten
> sind **bewusst ausgeschlossen** und werden erst nach Kartenscan-Validierung ergänzt, statt
> fehlerhafte Daten zu übernehmen.

| Agent | Erweiterung | Plotdeck (DE / EN) |
|---|---|---|
| Baron Zachareth | Grundspiel | Saat des Verrats / Seeds of Betrayal |
| Belthir | Grundspiel | Hybride Loyalität / Hybrid Loyalty |
| Lady Eliza Farrow | Grundspiel | Endloser Durst / Endless Thirst |
| Lord Merick Farrow | Grundspiel | Von Macht verflucht / Cursed by Power |
| Sir Alric Farrow | Grundspiel | Die gefallene Elite / The Fallen Elite |
| Splig | Grundspiel | Goblin-Aufstand / Goblin Uprising |
| Ariad | Labyrinth des Verderbens | Dunkle Illusionen / Dark Illusions |
| Königin Ariad | Labyrinth des Verderbens | Verworrenes Netz / Tangled Web |
| Raythen | Labyrinth des Verderbens | Gaunerei / Skulduggery |
| Serena | Labyrinth des Verderbens | Stiller Beschützer / Silent Protector |
| Valyndra | Höhle des Lindwurms | Gier des Drachen / Dragon's Greed |
| Gargan Mirklace | Schatten von Nerekhall | Brennender Ehrgeiz / Burning Ambition |
| Rylan Olliven | Schatten von Nerekhall | Innere Verderbnis / Inner Corruption |
| Tristayne Olliven | Schatten von Nerekhall | Instabile Kräfte / Unstable Forces |
| Verminous | Schatten von Nerekhall | Ungesehene Legionen / Unseen Legions |
| Bol'Goreth | Die Trollsümpfe | Wütende Infektion / Raging Infection |

Anzeige: `src/pages/AgentsPage.tsx` (Route `/agenten`), gruppiert nach Erweiterung, mit
Plotdeck-Label, Such-/Sammlungs-/Sprachfilter und Karten-Lightbox.

---

## Plotdeck-Karten (`src/data/plotDecks.ts`)

Die eigentlichen **Plotdeck-Karten**: jeder Agent bringt ein Plotdeck mit ~10 Karten, die der
Overlord mit **Bedrohungsmarkern** kauft (`threatCost`) und auslöst (`triggerCost`). Quelle:
any2cards `data/plot-decks.js` (201 Karten in 20 Decks). EN 1:1 aus Quelle, DE handübersetzt.
Kartenrückseiten (`plot-decks-back`) ausgelassen.

**Status:** **15 Decks, 150 Karten** ✅. Grundspiel (v1.1.22/23): 6 Decks. Erweiterungen: Gier des
Drachen (Valyndra), Wütende Infektion (Bol'Goreth), Labyrinth (Dunkle Illusionen/Verworrenes Netz/
Gaunerei/Stiller Beschützer), Rabenfels (Verworrene Seele/Skarn), Bilehall (Lebensessenz/Kyndrithul,
Ewige Qual/Zarihell). Karten-ID = `deckId-xws` (ein xws „feralinstincts" kommt in zwei Decks vor).
Offen: 5 Erweiterungs-Plotdecks (50 Karten): First Legion (Bilehall) + 4 Nerekhall-Decks.

Anzeige: `src/pages/PlotDecksPage.tsx` (Route `/plotdecks`), gruppiert nach Erweiterung + Deck
(mit Agenten-Label), Such-/Sammlungs-/Sprachfilter, Symbolen und Karten-Lightbox.

---

## Datenmodell (`src/data/lieutenants.ts`)

```typescript
interface LieutenantPerPlayerStats { speed: number; health: number; defense: DieColor[] }

interface LieutenantAbility {
  labelEn: string; labelDe: string   // z. B. "Action: Dominion" / "Aktion: Herrschaft"
  rulesEn?: string; rulesDe?: string  // ausführlicher Regeltext (optional)
}

interface LieutenantForm {
  act: 1 | 2
  expansionId: string   // Erweiterung DIESER Akt-Karte (kann von der Leutnant-Erweiterung abweichen)
  attackTypeEn: string; attackTypeDe: string; attackDice: DieColor[]
  might: number; knowledge: number; willpower: number; awareness: number
  perPlayer: { p2: …; p3: …; p4: … }
  abilities: LieutenantAbility[]
  imageUrl: string
}

interface Lieutenant {
  id: string; nameEn: string; nameDe: string; expansionId: string
  forms: LieutenantForm[]   // 1–2 (Akt I/II)
}
```

Anzeige: `src/pages/LieutenantsPage.tsx` (Route `/leutnants`), gruppiert nach Erweiterung,
Akt I/II nebeneinander, mit Such-/Sammlungs-/Sprachfilter, Symbolen und Karten-Lightbox.
Erzeugt via Generator (`/tmp/gen-lieutenants.js`, EN aus Quelle geparst, DE handübersetzt);
Datenintegritäts-Tests in `src/data/__tests__/dataIntegrity.test.ts`.
