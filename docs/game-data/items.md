# Descent 2. Edition – Item-Shop-Karten & Relikte

**Status:** Struktur angelegt, Daten ausstehend (v1.1)  
**Quelle:** any2cards/d2e, offizielle Karten-Scans  
**Zuletzt aktualisiert:** 2026-05-25

---

## Übersicht

Descent 2. Edition hat zwei Arten von Ausrüstungskarten:
- **Shop-Karten:** Im Shop kaufbar, Kosten in Gold, nach Akt 1 und Akt 2 getrennt
- **Relikte:** Besondere Gegenstände, werden nicht im Shop gekauft (Missionsziel oder spezielle Quellen)

Shop-Karten sind in folgende Typen unterteilt:
- **Waffe** (Weapon): Angriffswürfel, Reichweite, Surge-Fähigkeiten
- **Rüstung** (Armor): Verteidigungswürfel
- **Anderes** (Other): Tränke, Werkzeuge, Zubehör

---

## Grundspiel – Akt 1 Shop

| Name (DE) | Name (EN) | Typ | Kosten | Effekt (DE) | Validiert |
|-----------|-----------|-----|--------|-------------|-----------|
| *(Daten ausstehend – validierungspflichtig)* | | | | | |

## Grundspiel – Akt 2 Shop

| Name (DE) | Name (EN) | Typ | Kosten | Effekt (DE) | Validiert |
|-----------|-----------|-----|--------|-------------|-----------|
| *(Daten ausstehend – validierungspflichtig)* | | | | | |

## Grundspiel – Relikte

| Name (DE) | Name (EN) | Effekt (DE) | Validiert |
|-----------|-----------|-------------|-----------|
| *(Daten ausstehend – validierungspflichtig)* | | | |

---

## Die Höhle des Lindwurms / Lair of the Wyrm

| Name (DE) | Name (EN) | Typ | Akt | Kosten | Effekt (DE) | Validiert |
|-----------|-----------|-----|-----|--------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | |

---

## Labyrinth des Verderbens / Labyrinth of Ruin

| Name (DE) | Name (EN) | Typ | Akt | Kosten | Effekt (DE) | Validiert |
|-----------|-----------|-----|-----|--------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | |

---

## Die Trollsümpfe / The Trollfens

| Name (DE) | Name (EN) | Typ | Akt | Kosten | Effekt (DE) | Validiert |
|-----------|-----------|-----|-----|--------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | |

---

## Schloss Rabenfels / Manor of Ravens

| Name (DE) | Name (EN) | Typ | Akt | Kosten | Effekt (DE) | Validiert |
|-----------|-----------|-----|-----|--------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | |

---

## Schatten von Nerekhall / Shadow of Nerekhall

| Name (DE) | Name (EN) | Typ | Akt | Kosten | Effekt (DE) | Validiert |
|-----------|-----------|-----|-----|--------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | |

---

## Nebel von Bilehall / Mists of Bilehall

| Name (DE) | Name (EN) | Typ | Akt | Kosten | Effekt (DE) | Validiert |
|-----------|-----------|-----|-----|--------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | |

---

## Rostende Ketten / The Chains That Rust

| Name (DE) | Name (EN) | Typ | Akt | Kosten | Effekt (DE) | Validiert |
|-----------|-----------|-----|-----|--------|-------------|-----------|
| *(Daten ausstehend)* | | | | | | |

---

*Weitere Erweiterungen: analog zu ergänzen*

---

## Datenmodell (für spätere src/data/items.ts)

```typescript
interface Item {
  id: string
  nameDe: string
  nameEn: string
  expansionId: string
  type: 'weapon' | 'armor' | 'other' | 'relic'
  act: 1 | 2 | null  // null = Relikt
  cost: number | null  // null = nicht kaufbar
  attackDice?: string[]  // z.B. ['blue', 'yellow']
  surges?: string[]
  abilities?: string[]
  traits?: string[]
}
```
