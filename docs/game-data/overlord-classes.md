# Descent 2. Edition – Overlord-Klassen & Karten

**Status:** VOLLSTÄNDIG ✅ (v1.1.15–v1.1.17): Grundspiel + alle Erweiterungs-Klassen + alle
Belohnungskarten. 105 Karten in 27 Decks, EN wortgetreu gegen Quelle verifiziert (105/105).
**Deutsche Originalkarten ✅ (v1.3.7):** alle 105 Karten als deutsche Original-Kartenbilder
(`public/cards/de/overlord/<id>.webp`, `overlordCardDeUrl`, OverlordPage zeigt DE-Bild mit
EN-Fallback) + **offizielle Kartennamen** + **kartengenaue Regeltexte** (`nameDe`/`rulesDe` in
`overlordClasses.ts` ersetzt). Die früheren Community-`nameDe` wichen von den Karten ab
(z. B. Unheiliges Ritual → **Teuflisches Ritual**, Diabolische Macht → **Teuflische Macht**,
Wiederauferstehung → **Wiederkehr**, Wort → **Worte** des Schmerzes/der Verzweiflung). Mapping
pro Deck über die englischen Namen/Regeln (dt. Klassen-Sheets Hexer/Schurke/Heermeister/Gebieter/
Vergelter/Verseucher/Verzauberer/Schattenmagier/Seelenbinder ↔ magus/saboteur/warlord/unkindness/
punisher/infector/enchanter/shadowmancer/soulbinder; Arsenal=Basis, Arsenal II=Basis II,
Alle Klassen=Universal, Belohnung=Belohnungen).
**Quelle:** Kartennamen/-texte deutsch von den Original-Karten-Scans; EN-Struktur any2cards/d2e
`data/overlord-decks.js`.
**Zuletzt aktualisiert:** 2026-06-23

---

## Übersicht

Der Overlord spielt mit einem **Basis-Deck** (immer im Spiel) plus den Karten **einer
gewählten Klasse**, die mit XP erworben werden. **Universal**-Karten kann jede Klasse kaufen.
Zusätzlich gibt es **Belohnungskarten** (Overlord/Quest/Rumor Reward), die über Kampagnen-
Ereignisse erworben werden.

Datenquelle `overlord-decks.js`: 110 Einträge gesamt. Die Kartenrückseite
(`overlord-decks-back`) ist keine Spielkarte und wird ausgelassen. EN-Text wortgetreu gegen
die Quelle verifiziert: Basis+Klassen+Universal **87/87**, mit den 18 Belohnungskarten (v1.1.17)
**105/105** — 0 Abweichungen (vgl. Kopf).

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
| Belohnungskarten (Overlord/Quest/Rumor Reward) | diverse (13 Erweiterungen) | 18 | ✅ |
| **Gesamt** | | **105** | ✅ |

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
| Wuchtiger Schlag | Critical Blow | Ereignis | 1 | 0 |
| Dunkle Bezauberung | Dark Charm | Magie | 1 | 0 |
| Dunkles Karma | Dark Fortune | Ereignis | 2 | 0 |
| Dunkle Macht | Dark Might | Magie | 2 | 0 |
| Rennen | Dash | Ereignis | 2 | 0 |
| Wutausbruch | Frenzy | Ereignis | 2 | 0 |
| Fallgrube | Pit Trap | Falle | 1 | 0 |
| Giftpfeil | Poison Dart | Falle | 1 | 0 |
| Stolperdraht | Tripwire | Falle | 2 | 0 |
| Worte der Qual | Word of Misery | Magie | 1 | 0 |

### Magus

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Teuflisches Ritual | Unholy Ritual *(Errata)* | Magie | 2 | 1 |
| Worte des Schmerzes | Word of Pain | Magie | 2 | 1 |
| Wiederkehr | Rise Again | Magie | 1 | 2 |
| Worte der Verzweiflung | Word of Despair | Magie | 1 | 2 |
| Teuflische Macht | Diabolic Power | Magie | 1 | 3 |

### Saboteur

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Explodierende Runen | Explosive Runes | Falle | 2 | 1 |
| Netzfalle | Web Trap | Falle | 2 | 1 |
| Fluch des Affengottes | Curse of the Monkey God | Falle | 1 | 2 |
| Hämisches Gelächter | Wicked Laughter | Ereignis | 1 | 2 |
| Dämonenfalle der Uthuk | Uthuk Demon Trap | Falle | 1 | 3 |

### Kriegsherr (Warlord)

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Blutrausch | Blood Rage | Ereignis | 2 | 1 |
| Unheilige Stärke | Dark Fortitude | Ereignis | 2 | 1 |
| Blutdurst | Bloodlust *(Errata)* | Ereignis | 1 | 2 |
| Erfahrener Kämpfer | Expert Blow | Ereignis | 1 | 2 |
| Verstärkung rufen | Reinforce *(Errata)* | Ereignis | 1 | 3 |

### Universal (Grundspiel)

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Dunkle Heilkraft | Dark Resilience | Magie | 1 | 1 |
| Vorausplanen | Plan Ahead | Ereignis | 2 | 1 |
| Finstere Pläne | Schemes | Ereignis | 1 | 1 |

---

## Erweiterungs-Klassen

### Basis II – Labyrinth des Verderbens (alternatives Basis-Deck)

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Verwirren | Befuddle | Magie | 2 | 0 |
| Blitzschnell | Blinding Speed | Magie | 2 | 0 |
| Harte Bandagen | Dirty Fighting | Ereignis | 2 | 0 |
| Zerfleischen | Flurry | Ereignis | 1 | 0 |
| Rutschiger Boden | Grease Trap | Falle | 1 | 0 |
| Denkfehler | Mental Error | Ereignis | 1 | 0 |
| Mimikry | Mimic | Falle | 1 | 0 |
| Überwältigende Meute | Overwhelm | Ereignis | 1 | 0 |
| Auge um Auge | Reflective Ward | Magie | 1 | 0 |
| Zeichen der Schwäche | Sign of Weakness | Falle | 1 | 0 |
| Ungezügelte Kraft | Uncontrolled Power | Magie | 2 | 0 |

### Peiniger (Punisher) – Höhle des Lindwurms

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Keine Atempause | No Rest for the Wicked | Ereignis | 2 | 1 |
| Schmerzensbande | Trading Pains | Ereignis | 2 | 1 |
| Die Schwachen zuerst | Exploit Weakness | Ereignis | 1 | 2 |
| Alles hat seinen Preis | Price of Prevention | Ereignis | 1 | 2 |
| Blutsbande | Blood Bargaining | Ereignis | 1 | 3 |

### Seuchenbringer (Infector) – Die Trollsümpfe

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Adaptive Ansteckung | Adaptive Contagion | Magie | 1 | 1 |
| Pestwolke | Airborne | Magie | 1 | 1 |
| Kontaminiert | Contaminated | Magie | 1 | 1 |
| Heftige Infektion | Virulent Infection | Ereignis | 1 | 1 |
| Ausbruch | Outbreak | Falle | 1 | 2 |
| Seuchenhieb | Tainted Blow | Ereignis | 1 | 2 |
| Dunkler Wirt | Dark Host | Magie | 1 | 3 |

### Verzauberer (Enchanter) – Schloss Rabenfels

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Drachenbein-Amulett | Dragonbone Pendant | Magie | 1 | 1 |
| Steinelixier | Elixir of Stone | Magie | 1 | 1 |
| Zhol'alam-Ringe | Rings of Zhol'alam | Magie | 1 | 1 |
| Windarmbänder | Wristlet of Wind | Magie | 1 | 1 |
| Phönixrune | Rune of the Phoenix | Magie | 1 | 2 |
| Zauber des Friedens | Ward of Peace | Magie | 1 | 2 |
| Zeichen des letzten Zenits | Sign of the Last Zenith | Magie | 1 | 3 |

### Bosheit (Unkindness) – Schloss Rabenfels

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Im Schatten | Beneath the Shadow | Magie | 1 | 1 |
| Obacht | Beware | Ereignis | 1 | 1 |
| Ruf der Raben | Call of the Ravens | Ereignis | 1 | 1 |
| Schmaus | Feast | Ereignis | 1 | 1 |
| Böses Omen | Ill Omen | Magie | 1 | 1 |
| Imitation | Imitation | Falle | 1 | 2 |
| Plötzlicher Ausbruch | Sudden Flurry | Ereignis | 1 | 2 |
| Eingehüllt | Envelop | Ereignis | 1 | 3 |

### Schattenmagier (Shadowmancer) – Schatten von Nerekhall

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Implodierender Graben | Imploding Rift | Falle | 1 | 1 |
| Misstrauen | Mistrust | Ereignis | 1 | 1 |
| Aus der Dunkelheit | Out of Darkness | Ereignis | 1 | 1 |
| Zaghaftigkeit | Shadow of Doubt | Magie | 1 | 1 |
| Dunkelheit | Black Out | Magie | 1 | 2 |
| Schattenflug | Shadow Walk | Magie | 1 | 2 |
| Tückische Schatten | Treacherous Shadows | Magie | 1 | 3 |

### Seelenbinder (Soulbinder) – Die rostenden Ketten

| Karte (DE) | Karte (EN) | Typ | Anzahl | XP |
|---|---|---|---|---|
| Dunkle Silhouette | Dark Silhouette | Falle | 1 | 1 |
| Grotesk | Grotesque | Magie | 1 | 1 |
| Besitzergreifend | Possessive | Falle | 1 | 1 |
| Ruheloser Geist | Restless Spirit | Ereignis | 1 | 1 |
| Fesselnde Bande | Ties That Bind | Ereignis | 1 | 1 |
| Geisterhafte Schritte | Haunted Steps | Falle | 1 | 2 |
| Unerschrocken | Unblinking | Ereignis | 1 | 2 |
| Totentanz | Danse Macabre | Magie | 1 | 3 |

### Universal – Erweiterungen

| Karte (DE) | Karte (EN) | Erweiterung | Typ | Anzahl | XP |
|---|---|---|---|---|---|
| Dunkles Heilmittel | Dark Remedy | Labyrinth des Verderbens | Magie | 2 | 1 |
| Placebo | Placebo | Schatten von Nerekhall | Ereignis | 1 | 1 |
| Neuanfang | Refresh | Schatten von Nerekhall | Ereignis | 1 | 1 |
| Solidarität | Solidarity | Schatten von Nerekhall | Ereignis | 1 | 1 |
| Alternative | Upgrade | Schatten von Nerekhall | Ereignis | 1 | 1 |
| Vielseitigkeit | Diverse Means *(Errata)* | Schatten von Nerekhall | Ereignis | 1 | 2 |

---

## Belohnungskarten

*Über Kampagnen-Ereignisse erworben, nicht mit XP kaufbar (`xpCost: null`, `kind: 'reward'`).*

| Karte (DE) | Karte (EN) | Belohnungs-Art | Erweiterung | Typ |
|---|---|---|---|---|
| Spligs Rache | Splig's Revenge | Quest | Labyrinth des Verderbens | Ereignis |
| Zwillingsseele | Twin Souls | Quest | Labyrinth des Verderbens | Magie |
| Gunst der Lindwurmkönigin | The Wyrm Queen's Favor | Gerücht | Höhle des Lindwurms | Spezial |
| Schrotthaufen | Hunk of Junk | Overlord | Bündnisse der Wildnis | Falle |
| Feuerkristalle | Fire Gems | Overlord | Krone des Schicksals | Falle |
| Vergessene Hexerei | Forgotten Sorcery | Overlord | Kreuzzug der Vergessenen | Magie |
| Erdrückende Überzahl | Power in Numbers | Overlord | Wächter von Deephall | Ereignis |
| Völlig am Boden | Down and Out | Overlord | Schloss Rabenfels | Ereignis |
| Endlose Vorräte | Endless Supply | Overlord | Schloss Rabenfels | Ereignis |
| Ungebrochen | Unbroken | Overlord | Schloss Rabenfels | Ereignis |
| Unsichtbare Schwingen | Unseen Wings | Overlord | Eid des Ausgestoßenen | Ereignis |
| Spott | Mockery | Overlord | Splitter der Ewigen Dunkelheit | Ereignis |
| Spleissen | Splice | Overlord | Hüter des Geheimnisses | Magie |
| Wandelndes Gebrechen | Offertory Affliction | Overlord | Die Trollsümpfe | Ereignis |
| Geheimnis des Fleisches | Secrets of Flesh | Overlord | Die Trollsümpfe | Magie |
| Toxische Vergeltung | Toxic Reprisal | Overlord | Die Trollsümpfe | Falle |
| Hexenhunger | Hag's Hunger | Overlord | Vertrag der Champions | Ereignis |
| Harte Schläge | Hard Knocks | Overlord | Visionen der Dämmerung | Ereignis |

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
  rulesDe: string       // kartengenaue offizielle DE-Regel (v1.3.7; früher Community-Übersetzung)
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
