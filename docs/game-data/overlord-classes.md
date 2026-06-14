# Descent 2. Edition – Overlord-Klassen & Karten

**Status:** Grundspiel erfasst ✅ (v1.1.15). Erweiterungs-Klassen + Belohnungskarten ausstehend.
**Quelle:** any2cards/d2e, `data/overlord-decks.js` (englischer Originaltext)
**Übersetzung:** Deutsch = Community-Übersetzung (nicht zwingend offizieller FFG-Wortlaut)
**Zuletzt aktualisiert:** 2026-06-14

---

## Übersicht

Der Overlord spielt mit einem **Basis-Deck** (immer im Spiel) plus den Karten **einer
gewählten Klasse**, die mit XP erworben werden. **Universal**-Karten kann jede Klasse kaufen.
Zusätzlich gibt es **Belohnungskarten** (Overlord/Quest/Rumor Reward), die über Kampagnen-
Ereignisse erworben werden.

Datenquelle `overlord-decks.js`: 110 Einträge gesamt. Die Kartenrückseite
(`overlord-decks-back`) ist keine Spielkarte und wird ausgelassen.

### Erfassungsstand

| Bereich | Karten | Status |
|---|---|---|
| Basis-Deck (Grundspiel) | 10 | ✅ erfasst |
| Magus (Grundspiel) | 5 | ✅ erfasst |
| Saboteur (Grundspiel) | 5 | ✅ erfasst |
| Kriegsherr/Warlord (Grundspiel) | 5 | ✅ erfasst |
| Universal (Grundspiel) | 3 | ✅ erfasst |
| **Grundspiel gesamt** | **28** | ✅ |
| Basis II (Labyrinth des Verderbens) | 11 | ⏳ offen |
| Universal (Erweiterungen) | 7 | ⏳ offen |
| Peiniger/Punisher (Höhle des Lindwurms) | 5 | ⏳ offen |
| Seuchenbringer/Infector (Trollsümpfe) | 7 | ⏳ offen |
| Verzauberer/Enchanter (Schloss Rabenfels) | 7 | ⏳ offen |
| Bosheit/Unkindness (Schloss Rabenfels) | 8 | ⏳ offen |
| Schattenmagier/Shadowmancer (Schatten von Nerekhall) | 7 | ⏳ offen |
| Seelenbinder/Soulbinder (Rostende Ketten) | 8 | ⏳ offen |
| Belohnungskarten (diverse Erweiterungen) | 18 | ⏳ offen |

---

## Errata-Behandlung (Grundspiel)

Drei Karten existieren in der Quelle doppelt (ältere Fassung + Errata-Fassung). Erfasst ist
jeweils die **Errata-Fassung** (Text + Kartenbild `…-errata.png`); die ältere ist weggelassen:

- **Unholy Ritual** (Magus): Errata behält „2 Karten" statt „1 Karte pro Held".
- **Bloodlust** (Kriegsherr): Errata „wird kampfunfähig → 2 Karten" statt „besiegt → 1 pro Held".
- **Reinforce** (Kriegsherr): Errata platziert Diener neben einem Meister-Monster bis zum Gruppenlimit.

---

## Basis-Deck – Grundspiel (immer im Spiel)

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Kritischer Schlag | Critical Blow | Ereignis | 1 | 0 |
| Dunkler Zauber | Dark Charm | Magie | 1 | 0 |
| Dunkles Schicksal | Dark Fortune | Ereignis | 2 | 0 |
| Dunkle Macht | Dark Might | Magie | 2 | 0 |
| Sprint | Dash | Ereignis | 2 | 0 |
| Raserei | Frenzy | Ereignis | 2 | 0 |
| Fallgrube | Pit Trap | Falle | 1 | 0 |
| Giftpfeil | Poison Dart | Falle | 1 | 0 |
| Stolperdraht | Tripwire | Falle | 2 | 0 |
| Wort des Elends | Word of Misery | Magie | 1 | 0 |

## Klasse: Magus – Grundspiel

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Unheiliges Ritual | Unholy Ritual *(Errata)* | Magie | 2 | 1 |
| Wort des Schmerzes | Word of Pain | Magie | 2 | 1 |
| Wiederauferstehung | Rise Again | Magie | 1 | 2 |
| Wort der Verzweiflung | Word of Despair | Magie | 1 | 2 |
| Diabolische Macht | Diabolic Power | Magie | 1 | 3 |

## Klasse: Saboteur – Grundspiel

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Explosive Runen | Explosive Runes | Falle | 2 | 1 |
| Netzfalle | Web Trap | Falle | 2 | 1 |
| Fluch des Affengottes | Curse of the Monkey God | Falle | 1 | 2 |
| Boshaftes Gelächter | Wicked Laughter | Ereignis | 1 | 2 |
| Uthuk-Dämonenfalle | Uthuk Demon Trap | Falle | 1 | 3 |

## Klasse: Kriegsherr (Warlord) – Grundspiel

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Blutrausch | Blood Rage | Ereignis | 2 | 1 |
| Dunkle Standhaftigkeit | Dark Fortitude | Ereignis | 2 | 1 |
| Blutdurst | Bloodlust *(Errata)* | Ereignis | 1 | 2 |
| Meisterhafter Schlag | Expert Blow | Ereignis | 1 | 2 |
| Verstärkung | Reinforce *(Errata)* | Ereignis | 1 | 3 |

## Universal – Grundspiel (jede Klasse kaufbar)

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Dunkle Widerstandskraft | Dark Resilience | Magie | 1 | 1 |
| Vorausplanung | Plan Ahead | Ereignis | 2 | 1 |
| Ränke | Schemes | Ereignis | 1 | 1 |

---

## Datenmodell (`src/data/overlordClasses.ts`)

```typescript
type OverlordCardType = 'Event' | 'Magic' | 'Trap' | 'Special'
type OverlordDeckKind  = 'basic' | 'class' | 'universal' | 'reward'

interface OverlordCard {
  id: string            // = any2cards xws (z. B. 'criticalblow')
  nameEn: string
  nameDe: string
  cardType: OverlordCardType
  count: number         // Kopien im Deck
  xpCost: number        // 0 = Basis-/Startdeck
  rulesEn: string       // Originalwortlaut
  rulesDe: string       // Community-Übersetzung
  imageUrl: string
}

interface OverlordDeck {
  id: string
  nameEn: string
  nameDe: string
  kind: OverlordDeckKind
  expansionId: string
  cards: OverlordCard[]
}
```

Anzeige: `src/pages/OverlordPage.tsx` (Route `/overlord`), gruppiert nach Erweiterung
und Deck, mit Such-/Sammlungs-/Sprachfilter, Symbolen (❤/⚡/💧/↻) und Karten-Lightbox.
Datenintegritäts-Tests in `src/data/__tests__/dataIntegrity.test.ts`.
