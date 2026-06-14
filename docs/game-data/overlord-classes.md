# Descent 2. Edition – Overlord-Klassen & Karten

**Status:** Grundspiel + alle Erweiterungs-Klassen erfasst ✅ (v1.1.15 / v1.1.16). Nur noch
Belohnungskarten ausstehend.
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
(`overlord-decks-back`) ist keine Spielkarte und wird ausgelassen. EN-Text aller erfassten
Karten ist wortgetreu gegen die Quelle verifiziert (87/87, 0 Abweichungen).

### Erfassungsstand

| Deck | Erweiterung | Karten | Status |
|---|---|---|---|
| Basis | Grundspiel | 10 | ✅ |
| Magus | Grundspiel | 5 | ✅ |
| Saboteur | Grundspiel | 5 | ✅ |
| Kriegsherr/Warlord | Grundspiel | 5 | ✅ |
| Universal | Grundspiel | 3 | ✅ |
| Basis II | Labyrinth des Verderbens | 11 | ✅ |
| Universal | Labyrinth des Verderbens | 1 | ✅ |
| Universal | Schatten von Nerekhall | 5 | ✅ |
| Peiniger/Punisher | Höhle des Lindwurms | 5 | ✅ |
| Seuchenbringer/Infector | Die Trollsümpfe | 7 | ✅ |
| Verzauberer/Enchanter | Schloss Rabenfels | 7 | ✅ |
| Bosheit/Unkindness | Schloss Rabenfels | 8 | ✅ |
| Schattenmagier/Shadowmancer | Schatten von Nerekhall | 7 | ✅ |
| Seelenbinder/Soulbinder | Die rostenden Ketten | 8 | ✅ |
| **Klassen + Universal gesamt** | | **87** | ✅ |
| Belohnungskarten (Overlord/Quest/Rumor Reward) | diverse | 18 | ⏳ offen |

---

## Errata-Behandlung

Vier Karten existieren in der Quelle doppelt (ältere Fassung + Errata-Fassung). Erfasst ist
jeweils die **Errata-Fassung** (Text + Kartenbild `…-errata.png`); die ältere ist weggelassen:

- **Unholy Ritual** (Magus): Errata behält „2 Karten" statt „1 Karte pro Held".
- **Bloodlust** (Kriegsherr): Errata „wird kampfunfähig → 2 Karten" statt „besiegt → 1 pro Held".
- **Reinforce** (Kriegsherr): Errata platziert Diener neben einem Meister-Monster bis zum Gruppenlimit.
- **Diverse Means** (Universal/Nerekhall): Errata „nachdem die Würfel geworfen wurden" statt „defense dice are rolled".

„Universal" kommt in mehreren Erweiterungen vor; jede Erweiterung ist im Code ein eigenes
Deck-Objekt (eigene `expansionId`), der Deckname bleibt „Universal".

---

## Grundspiel

### Basis-Deck (immer im Spiel)

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

### Magus

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Unheiliges Ritual | Unholy Ritual *(Errata)* | Magie | 2 | 1 |
| Wort des Schmerzes | Word of Pain | Magie | 2 | 1 |
| Wiederauferstehung | Rise Again | Magie | 1 | 2 |
| Wort der Verzweiflung | Word of Despair | Magie | 1 | 2 |
| Diabolische Macht | Diabolic Power | Magie | 1 | 3 |

### Saboteur

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Explosive Runen | Explosive Runes | Falle | 2 | 1 |
| Netzfalle | Web Trap | Falle | 2 | 1 |
| Fluch des Affengottes | Curse of the Monkey God | Falle | 1 | 2 |
| Boshaftes Gelächter | Wicked Laughter | Ereignis | 1 | 2 |
| Uthuk-Dämonenfalle | Uthuk Demon Trap | Falle | 1 | 3 |

### Kriegsherr (Warlord)

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Blutrausch | Blood Rage | Ereignis | 2 | 1 |
| Dunkle Standhaftigkeit | Dark Fortitude | Ereignis | 2 | 1 |
| Blutdurst | Bloodlust *(Errata)* | Ereignis | 1 | 2 |
| Meisterhafter Schlag | Expert Blow | Ereignis | 1 | 2 |
| Verstärkung | Reinforce *(Errata)* | Ereignis | 1 | 3 |

### Universal (Grundspiel)

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Dunkle Widerstandskraft | Dark Resilience | Magie | 1 | 1 |
| Vorausplanung | Plan Ahead | Ereignis | 2 | 1 |
| Ränke | Schemes | Ereignis | 1 | 1 |

---

## Erweiterungs-Klassen

### Basis II – Labyrinth des Verderbens (alternatives Basis-Deck)

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Verwirren | Befuddle | Magie | 2 | 0 |
| Blendende Geschwindigkeit | Blinding Speed | Magie | 2 | 0 |
| Hinterhältiger Kampf | Dirty Fighting | Ereignis | 2 | 0 |
| Schlaghagel | Flurry | Ereignis | 1 | 0 |
| Schmierfalle | Grease Trap | Falle | 1 | 0 |
| Denkfehler | Mental Error | Ereignis | 1 | 0 |
| Mimik | Mimic | Falle | 1 | 0 |
| Überwältigen | Overwhelm | Ereignis | 1 | 0 |
| Reflektierender Bann | Reflective Ward | Magie | 1 | 0 |
| Zeichen der Schwäche | Sign of Weakness | Falle | 1 | 0 |
| Unkontrollierte Macht | Uncontrolled Power | Magie | 2 | 0 |

### Peiniger (Punisher) – Höhle des Lindwurms

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Keine Ruhe für die Bösen | No Rest for the Wicked | Ereignis | 2 | 1 |
| Geteilter Schmerz | Trading Pains | Ereignis | 2 | 1 |
| Schwäche ausnutzen | Exploit Weakness | Ereignis | 1 | 2 |
| Preis der Vorbeugung | Price of Prevention | Ereignis | 1 | 2 |
| Bluthandel | Blood Bargaining | Ereignis | 1 | 3 |

### Seuchenbringer (Infector) – Die Trollsümpfe

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Anpassungsfähige Seuche | Adaptive Contagion | Magie | 1 | 1 |
| Luftübertragung | Airborne | Magie | 1 | 1 |
| Kontaminiert | Contaminated | Magie | 1 | 1 |
| Bösartige Infektion | Virulent Infection | Ereignis | 1 | 1 |
| Ausbruch | Outbreak | Falle | 1 | 2 |
| Vergifteter Schlag | Tainted Blow | Ereignis | 1 | 2 |
| Dunkler Wirt | Dark Host | Magie | 1 | 3 |

### Verzauberer (Enchanter) – Schloss Rabenfels

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Drachenknochen-Anhänger | Dragonbone Pendant | Magie | 1 | 1 |
| Elixier des Steins | Elixir of Stone | Magie | 1 | 1 |
| Ringe von Zhol'alam | Rings of Zhol'alam | Magie | 1 | 1 |
| Windarmreif | Wristlet of Wind | Magie | 1 | 1 |
| Rune des Phönix | Rune of the Phoenix | Magie | 1 | 2 |
| Bann des Friedens | Ward of Peace | Magie | 1 | 2 |
| Zeichen des letzten Zenits | Sign of the Last Zenith | Magie | 1 | 3 |

### Bosheit (Unkindness) – Schloss Rabenfels

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Unter dem Schatten | Beneath the Shadow | Magie | 1 | 1 |
| Hab Acht | Beware | Ereignis | 1 | 1 |
| Ruf der Raben | Call of the Ravens | Ereignis | 1 | 1 |
| Festmahl | Feast | Ereignis | 1 | 1 |
| Böses Omen | Ill Omen | Magie | 1 | 1 |
| Nachahmung | Imitation | Falle | 1 | 2 |
| Plötzlicher Schlaghagel | Sudden Flurry | Ereignis | 1 | 2 |
| Umhüllen | Envelop | Ereignis | 1 | 3 |

### Schattenmagier (Shadowmancer) – Schatten von Nerekhall

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Implodierender Riss | Imploding Rift | Falle | 1 | 1 |
| Misstrauen | Mistrust | Ereignis | 1 | 1 |
| Aus der Dunkelheit | Out of Darkness | Ereignis | 1 | 1 |
| Schatten des Zweifels | Shadow of Doubt | Magie | 1 | 1 |
| Verdunkelung | Black Out | Magie | 1 | 2 |
| Schattengang | Shadow Walk | Magie | 1 | 2 |
| Tückische Schatten | Treacherous Shadows | Magie | 1 | 3 |

### Seelenbinder (Soulbinder) – Die rostenden Ketten

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Dunkle Silhouette | Dark Silhouette | Falle | 1 | 1 |
| Grotesk | Grotesque | Magie | 1 | 1 |
| Besitzergreifend | Possessive | Falle | 1 | 1 |
| Ruheloser Geist | Restless Spirit | Ereignis | 1 | 1 |
| Bindende Fesseln | Ties That Bind | Ereignis | 1 | 1 |
| Spukende Schritte | Haunted Steps | Falle | 1 | 2 |
| Ohne zu blinzeln | Unblinking | Ereignis | 1 | 2 |
| Totentanz | Danse Macabre | Magie | 1 | 3 |

### Universal – Erweiterungen

| Karte (DE) | Karte (EN) | Erweiterung | Typ | Anzahl | XP |
|---|---|---|---|---|---|
| Dunkles Heilmittel | Dark Remedy | Labyrinth des Verderbens | Magie | 2 | 1 |
| Placebo | Placebo | Schatten von Nerekhall | Ereignis | 1 | 1 |
| Auffrischen | Refresh | Schatten von Nerekhall | Ereignis | 1 | 1 |
| Solidarität | Solidarity | Schatten von Nerekhall | Ereignis | 1 | 1 |
| Aufwertung | Upgrade | Schatten von Nerekhall | Ereignis | 1 | 1 |
| Vielfältige Mittel | Diverse Means *(Errata)* | Schatten von Nerekhall | Ereignis | 1 | 2 |

---

## Datenmodell (`src/data/overlordClasses.ts`)

```typescript
type OverlordCardType = 'Event' | 'Magic' | 'Trap' | 'Special'
type OverlordDeckKind  = 'basic' | 'class' | 'universal' | 'reward'

interface OverlordCard {
  id: string            // = any2cards xws (Errata-Karten: Basis-id)
  nameEn: string
  nameDe: string
  cardType: OverlordCardType
  count: number         // Kopien im Deck
  xpCost: number        // 0 = Basis-/Startdeck
  rulesEn: string       // Originalwortlaut (wortgetreu gegen Quelle verifiziert)
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
