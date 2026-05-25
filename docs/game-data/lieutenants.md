# Descent 2. Edition – Leutnants & Hauptmänner

**Status:** Struktur angelegt, Daten ausstehend (v1.1)  
**Quelle:** any2cards/d2e, offizielle Karten-Scans  
**Zuletzt aktualisiert:** 2026-05-25

---

## Übersicht

Leutnants sind benannte Antagonisten mit eigenen Wertekarten.
Sie treten in Szenarien als Bosse auf oder begleiten den Overlord in bestimmten Quests.

**Typen:**
- **Physische Figur:** Hat eine eigene Spielfigur (wie Monster), eigene HP, Fähigkeiten
- **Karte nur:** Kein physisches Modell, wird als Marker oder Karte auf dem Spielfeld dargestellt

---

## Grundspiel

| Name (DE) | Name (EN) | Figur | LP | Verteidigung | Angriff | Fähigkeiten | Validiert |
|-----------|-----------|-------|----|-------------|---------|-------------|-----------|
| *(Daten ausstehend – validierungspflichtig)* | | | | | | | |

### Leutnant-Fähigkeitskarten – Grundspiel

| Leutnant | Kartenname (DE) | Effekt (DE) | Validiert |
|----------|-----------------|-------------|-----------|
| *(ausstehend)* | | | |

---

## Die Höhle des Lindwurms / Lair of the Wyrm

| Name (DE) | Name (EN) | Figur | LP | Verteidigung | Angriff | Fähigkeiten | Validiert |
|-----------|-----------|-------|----|-------------|---------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | | |

---

## Labyrinth des Verderbens / Labyrinth of Ruin

| Name (DE) | Name (EN) | Figur | LP | Verteidigung | Angriff | Fähigkeiten | Validiert |
|-----------|-----------|-------|----|-------------|---------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | | |

---

## Die Trollsümpfe / The Trollfens

| Name (DE) | Name (EN) | Figur | LP | Verteidigung | Angriff | Fähigkeiten | Validiert |
|-----------|-----------|-------|----|-------------|---------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | | |

---

## Schatten von Nerekhall / Shadow of Nerekhall

| Name (DE) | Name (EN) | Figur | LP | Verteidigung | Angriff | Fähigkeiten | Validiert |
|-----------|-----------|-------|----|-------------|---------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | | |

---

## Schloss Rabenfels / Manor of Ravens

| Name (DE) | Name (EN) | Figur | LP | Verteidigung | Angriff | Fähigkeiten | Validiert |
|-----------|-----------|-------|----|-------------|---------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | | |

---

## Nebel von Bilehall / Mists of Bilehall

| Name (DE) | Name (EN) | Figur | LP | Verteidigung | Angriff | Fähigkeiten | Validiert |
|-----------|-----------|-------|----|-------------|---------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | | |

---

## Rostende Ketten / The Chains That Rust

| Name (DE) | Name (EN) | Figur | LP | Verteidigung | Angriff | Fähigkeiten | Validiert |
|-----------|-----------|-------|----|-------------|---------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | | |

---

*Helden- und Monster-Sets enthalten teilweise eigene Leutnants – separat zu ergänzen.*

---

## Datenmodell (für spätere src/data/lieutenants.ts)

```typescript
interface Lieutenant {
  id: string
  nameDe: string
  nameEn: string
  expansionId: string
  hasFigure: boolean
  size: number        // Felder (1 = 1×1, 4 = 2×2)
  health: number
  defense: string[]
  attack: string[]
  speed: number
  abilities: string[]
  abilityCards: LieutenantAbilityCard[]
}

interface LieutenantAbilityCard {
  nameDe: string
  effectDe: string
}
```
