# Descent 2. Edition – Overlord-Klassen & Karten

**Status:** Struktur angelegt, Daten ausstehend (v1.1)  
**Quelle:** any2cards/d2e, offizielle Karten-Scans  
**Zuletzt aktualisiert:** 2026-05-25

---

## Übersicht

Der Overlord hat ein Basis-Deck sowie wählbare Klassenkarten. Klassenkarten werden mit
XP erworben. Es gibt immer genau ein Basis-Deck plus eine gewählte Klasse.

**Bekannte Overlord-Klassen:**

| Klasse (DE) | Klasse (EN) | Erweiterung | Daten vollständig |
|-------------|-------------|-------------|-------------------|
| Basis | Basic | Grundspiel | ❌ |
| Magus | Magus | Grundspiel | ❌ |
| Saboteur | Saboteur | Grundspiel | ❌ |
| Kriegsherr | Warlord | Grundspiel | ❌ |
| Universal | Universal | Grundspiel | ❌ |
| Peiniger | Punisher | Die Höhle des Lindwurms | ❌ |
| Basis II | Basic II | Labyrinth des Verderbens | ❌ |
| Seuchenbringer | Infector | Die Trollsümpfe | ❌ |
| Verzauberer | Enchanter | Schloss Rabenfels | ❌ |
| Bosheit | Unkindness | Schloss Rabenfels | ❌ |
| Schattenmagier | Shadowmancer | Schatten von Nerekhall | ❌ |
| Seelenbinder | Soulbinder | Rostende Ketten | ❌ |

---

## Basis-Overlord-Deck (Grundspiel)

*Das Basis-Deck ist immer im Spiel, unabhängig von der gewählten Klasse.*

| Kartenname (DE) | Kartenname (EN) | Anzahl | XP-Kosten | Effekt (DE) | Validiert |
|-----------------|-----------------|--------|-----------|-------------|-----------|
| *(Daten ausstehend – validierungspflichtig)* | | | | | |

---

## Klasse: Magus – Grundspiel

| Kartenname (DE) | Kartenname (EN) | Anzahl | XP-Kosten | Effekt (DE) | Validiert |
|-----------------|-----------------|--------|-----------|-------------|-----------|
| *(Daten ausstehend)* | | | | | |

---

## Klasse: Saboteur – Grundspiel

| Kartenname (DE) | Kartenname (EN) | Anzahl | XP-Kosten | Effekt (DE) | Validiert |
|-----------------|-----------------|--------|-----------|-------------|-----------|
| *(Daten ausstehend)* | | | | | |

---

## Klasse: Kriegsherr – Grundspiel

| Kartenname (DE) | Kartenname (EN) | Anzahl | XP-Kosten | Effekt (DE) | Validiert |
|-----------------|-----------------|--------|-----------|-------------|-----------|
| *(Daten ausstehend)* | | | | | |

---

## Klasse: Universal – Grundspiel

| Kartenname (DE) | Kartenname (EN) | Anzahl | XP-Kosten | Effekt (DE) | Validiert |
|-----------------|-----------------|--------|-----------|-------------|-----------|
| *(Daten ausstehend)* | | | | | |

---

## Klasse: Peiniger – Die Höhle des Lindwurms

| Kartenname (DE) | Kartenname (EN) | Anzahl | XP-Kosten | Effekt (DE) | Validiert |
|-----------------|-----------------|--------|-----------|-------------|-----------|
| *(Daten ausstehend)* | | | | | |

---

## Klasse: Basis II – Labyrinth des Verderbens

| Kartenname (DE) | Kartenname (EN) | Anzahl | XP-Kosten | Effekt (DE) | Validiert |
|-----------------|-----------------|--------|-----------|-------------|-----------|
| *(Daten ausstehend)* | | | | | |

---

## Klasse: Seuchenbringer – Die Trollsümpfe

| Kartenname (DE) | Kartenname (EN) | Anzahl | XP-Kosten | Effekt (DE) | Validiert |
|-----------------|-----------------|--------|-----------|-------------|-----------|
| *(Daten ausstehend)* | | | | | |

---

## Klasse: Verzauberer – Schloss Rabenfels

| Kartenname (DE) | Kartenname (EN) | Anzahl | XP-Kosten | Effekt (DE) | Validiert |
|-----------------|-----------------|--------|-----------|-------------|-----------|
| *(Daten ausstehend)* | | | | | |

---

## Klasse: Bosheit – Schloss Rabenfels

| Kartenname (DE) | Kartenname (EN) | Anzahl | XP-Kosten | Effekt (DE) | Validiert |
|-----------------|-----------------|--------|-----------|-------------|-----------|
| *(Daten ausstehend)* | | | | | |

---

## Klasse: Schattenmagier – Schatten von Nerekhall

| Kartenname (DE) | Kartenname (EN) | Anzahl | XP-Kosten | Effekt (DE) | Validiert |
|-----------------|-----------------|--------|-----------|-------------|-----------|
| *(Daten ausstehend)* | | | | | |

---

## Klasse: Seelenbinder – Rostende Ketten

| Kartenname (DE) | Kartenname (EN) | Anzahl | XP-Kosten | Effekt (DE) | Validiert |
|-----------------|-----------------|--------|-----------|-------------|-----------|
| *(Daten ausstehend)* | | | | | |

---

## Datenmodell (für spätere src/data/overlordClasses.ts)

```typescript
interface OverlordCard {
  id: string
  nameDe: string
  nameEn: string
  classId: string       // z.B. 'magus', 'basic', 'saboteur'
  expansionId: string
  count: number         // Anzahl dieser Karte im Deck
  xpCost: number        // 0 = Basiskarte, >0 = kaufbar
  effectDe: string
}
```
