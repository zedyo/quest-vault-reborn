# Descent 2. Edition – Leutnants & Hauptmänner

**Status:** Grundspiel erfasst ✅ (v1.1.18). Erweiterungs-Leutnants ausstehend.
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
maschinell gegengeprüft (12 Formen, 42 Fähigkeiten, 0 Abweichungen).

### Erfassungsstand

| Erweiterung | Leutnants | Status |
|---|---|---|
| Grundspiel | Baron Zachareth, Belthir, Lady Eliza Farrow, Lord Merick Farrow, Sir Alric Farrow, Splig | ✅ (6) |
| Höhle des Lindwurms | Valyndra | ⏳ |
| Labyrinth des Verderbens | Ariad/Queen Ariad, Raythen, Serena | ⏳ |
| Die Trollsümpfe | Bol'goreth | ⏳ |
| Schatten von Nerekhall | Mirklace/Gargan Mirklace, Rylan/Tristayne Olliven, Verminous | ⏳ |
| Schloss Rabenfels | Skarn | ⏳ |
| Nebel von Bilehall | Ardus Ix'Erebus, Kyndrithul, Zarihell | ⏳ |
| Rostende Ketten | Ardus/Kyndrithul/Zarihell (Akt II) | ⏳ |

*Hinweis: Aufgewertete „Agenten"-Versionen (Plotdecks) sind separat in any2cards `agents.js`
erfasst und für ein späteres Increment vorgesehen.*

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

## Datenmodell (`src/data/lieutenants.ts`)

```typescript
interface LieutenantPerPlayerStats { speed: number; health: number; defense: DieColor[] }

interface LieutenantAbility {
  labelEn: string; labelDe: string   // z. B. "Action: Dominion" / "Aktion: Herrschaft"
  rulesEn?: string; rulesDe?: string  // ausführlicher Regeltext (optional)
}

interface LieutenantForm {
  act: 1 | 2
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
