# Descent 2. Edition – Kampagnen & Szenarien

**Status:** Struktur angelegt, Daten ausstehend (v1.1)  
**Quelle:** offizielle Regelhefte, BGG, Fandom Wiki  
**Zuletzt aktualisiert:** 2026-05-25

---

## Übersicht

| Kampagne | Erweiterung | Szenarien | Verzweigungen | Daten vollständig |
|----------|-------------|-----------|---------------|-------------------|
| Heirs of Blood (Erben des Blutes) | Grundspiel | 9 | Ja | ❌ |
| Lair of the Wyrm | Höhle des Lindwurms | 4 | Nein | ❌ |
| Labyrinth of Ruin | Labyrinth des Verderbens | 9 | Ja | ❌ |
| The Trollfens | Die Trollsümpfe | 4 | Nein | ❌ |
| Shadow of Nerekhall | Schatten von Nerekhall | 9 | Ja | ❌ |
| Manor of Ravens | Schloss Rabenfels | 4 | Nein | ❌ |
| Mists of Bilehall | Nebel von Bilehall | 6 | Ja | ❌ |
| The Chains That Rust | Rostende Ketten | 6 | Ja | ❌ |

*Hinweis: Kleine Erweiterungen (4 Szenarien) sind Mini-Kampagnen oder einzelne Missionen.*

---

## Grundspiel: Heirs of Blood (Erben des Blutes)

**Typ:** Großkampagne mit Verzweigungen  
**Szenarien:** 9 Hauptszenarien + Nebenszenarien

### Szenario-Baum

```
Prolog
  └─► Intro-Szenario
        ├─► Szenario A (Helden gewinnen) → ...
        └─► Szenario B (Overlord gewinnt) → ...
```

*(Vollständige Verzweigungsstruktur ausstehend)*

### Szenarien

| Nr | Name (DE) | Name (EN) | Monster-Typen (2H) | Monster-Typen (3H) | Monster-Typen (4H) | Ziele | Validiert |
|----|-----------|-----------|-------------------|-------------------|-------------------|-------|-----------|
| 1 | *(ausstehend)* | | | | | | |

---

## Die Höhle des Lindwurms / Lair of the Wyrm

**Typ:** Mini-Kampagne (4 Szenarien, linear)

| Nr | Name (DE) | Name (EN) | Monster-Typen | Besonderheiten | Validiert |
|----|-----------|-----------|--------------|----------------|-----------|
| 1 | *(ausstehend)* | | | | |

---

## Labyrinth des Verderbens / Labyrinth of Ruin

**Typ:** Großkampagne mit Verzweigungen  
**Szenarien:** 9

| Nr | Name (DE) | Name (EN) | Monster-Typen | Validiert |
|----|-----------|-----------|--------------|-----------|
| 1 | *(ausstehend)* | | | |

---

## Die Trollsümpfe / The Trollfens

**Typ:** Mini-Kampagne (4 Szenarien)

| Nr | Name (DE) | Name (EN) | Monster-Typen | Validiert |
|----|-----------|-----------|--------------|-----------|
| 1 | *(ausstehend)* | | | |

---

## Schatten von Nerekhall / Shadow of Nerekhall

**Typ:** Großkampagne  
**Szenarien:** 9

| Nr | Name (DE) | Name (EN) | Monster-Typen | Validiert |
|----|-----------|-----------|--------------|-----------|
| 1 | *(ausstehend)* | | | |

---

## Schloss Rabenfels / Manor of Ravens

**Typ:** Mini-Kampagne (4 Szenarien)

| Nr | Name (DE) | Name (EN) | Monster-Typen | Validiert |
|----|-----------|-----------|--------------|-----------|
| 1 | *(ausstehend)* | | | |

---

## Nebel von Bilehall / Mists of Bilehall

**Typ:** Kampagne (6 Szenarien)

| Nr | Name (DE) | Name (EN) | Monster-Typen | Validiert |
|----|-----------|-----------|--------------|-----------|
| 1 | *(ausstehend)* | | | |

---

## Rostende Ketten / The Chains That Rust

**Typ:** Kampagne (6 Szenarien)

| Nr | Name (DE) | Name (EN) | Monster-Typen | Validiert |
|----|-----------|-----------|--------------|-----------|
| 1 | *(ausstehend)* | | | |

---

## Datenmodell (für spätere src/data/campaigns.ts)

```typescript
interface Campaign {
  id: string
  nameDe: string
  nameEn: string
  expansionId: string
  scenarios: Scenario[]
}

interface Scenario {
  id: string
  nameDe: string
  nameEn: string
  campaignId: string
  act: 1 | 2
  monsterGroups: {         // Pflicht-Monstergruppen nach Spielerzahl
    2: string[]
    3: string[]
    4: string[]
  }
  optionalMonsterTypes?: string[]  // erlaubte optionale Typen
  objectives: string[]             // Ziele (Kurzform)
  successScenario?: string         // Szenario-ID wenn Helden gewinnen
  failureScenario?: string         // Szenario-ID wenn Overlord gewinnt
  specialRules?: string[]
}
```
