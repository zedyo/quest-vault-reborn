# Descent 2. Edition – Kampagnen & Quests

**Status:** Faktischer Überblick erfasst ✅ (v1.1.30) – `src/data/campaigns.ts` + `/kampagnen`-Seite  
**Quelle:** Erweiterungs-/Produktliste (`expansions.ts`), Descent-Wiki (nur Struktur-Fakten),
any2cards `advanced-quests.js` (Advanced Quests)  
**Zuletzt aktualisiert:** 2026-06-16

---

## Umfang & bewusste Abgrenzung (wichtig)

Die **detaillierten Szenario-Inhalte** der offiziellen Kampagnen (Missionsziele, vorgegebene
Monstergruppen nach Spielerzahl, Aufbauten, Spezialregeln) stehen **ausschließlich in den
FFG-Questbüchern** (urheberrechtlich geschützt) und liegen in **keiner zuverlässigen
strukturierten Quelle** vor. Sie werden daher **bewusst NICHT reproduziert** – sowohl aus
urheberrechtlichen Gründen als auch, um keine unbelegten/halluzinierten Daten einzutragen.
(Projektweite IP-Regel: `wiki/concepts/ffg-ip-boundary.md`.)

Erfasst werden:
1. **Kampagnen-Überblick** – rein faktische Eckdaten je offizieller Kampagne.
2. **Advanced Quests** – die eigenständigen Rumor-Quests der kleinen Packs (zuverlässige
   any2cards-Strukturdaten), aber nur faktische Metadaten (Titel, Erweiterung, Akt,
   Reise-Geländetypen) + Kartenbild-Links, **kein** reproduzierter Quest-Text.

---

## Offizielle Kampagnen (Überblick)

| Kampagne (EN) | Kampagne (DE) | Erweiterung | Typ | Verzweigt |
|---|---|---|---|---|
| The Shadow Rune | Die Schattenrune | Grundspiel | Großkampagne | Ja |
| Heirs of Blood | Das Blutvermächtnis | Das Blutvermächtnis (P&P, Grundspiel) | Großkampagne | Ja |
| Lair of the Wyrm | Die Höhle des Lindwurms | Die Höhle des Lindwurms | Mini-Kampagne | Nein |
| Labyrinth of Ruin | Labyrinth des Verderbens | Labyrinth des Verderbens | Großkampagne | Ja |
| The Trollfens | Die Trollsümpfe | Die Trollsümpfe | Mini-Kampagne | Nein |
| Shadow of Nerekhall | Schatten von Nerekhall | Schatten von Nerekhall | Großkampagne | Ja |
| Manor of Ravens | Schloss Rabenfels | Schloss Rabenfels | Mini-Kampagne | Nein |
| Mists of Bilehall | Nebel von Bilehall | Nebel von Bilehall | Großkampagne | Ja |
| The Chains That Rust | Rostende Ketten | Rostende Ketten | Großkampagne | Ja |

*Hinweis: „Großkampagne" = verzweigter Szenariobaum über zwei Akte (Folge-Szenario hängt von
Sieg/Niederlage ab); „Mini-Kampagne" = wenige, linear gespielte Szenarien. Die genaue Anzahl
spielbarer Szenarien pro Kampagne variiert je nach Auslegung (gespielte Sequenz vs. Pool im
Questbuch) und wird hier bewusst nicht als harte Zahl behauptet.*

Frühere Stub-Tabelle korrigiert: Das Grundspiel enthält die Kampagne **„Die Schattenrune"**
(spätere Auflagen alternativ **„Das Blutvermächtnis"** als separate Hefte) – beide getrennt
geführt, statt „Heirs of Blood" pauschal als Grundspiel zu listen.

---

## Advanced Quests (Rumor-Quests der kleinen Packs)

Quelle: any2cards `advanced-quests.js`. Es werden nur faktische Metadaten erfasst; die DE-Titel
sind seit **v1.8.0 kartengenau** (vorher Community-Übersetzungen): Zusatzabenteuerkarten
liegen unter derselben ID auch in `src/data/rumors.ts` (Akt-II-Gerüchtekarten, 1:1 von den
deutschen Scans transkribiert, v1.3.4). **12 der 16** Titel wichen ab und wurden zum
Kartentitel hin korrigiert — Regel „Kartentext = priorisierte Wahrheit":

| ID | vorher (Community) | jetzt (deutsche Karte) |
|---|---|---|
| `bondsofthewild` | Bande der Wildnis | **Erwachen der Wildnis** |
| `shadowsidewatch` | Wacht der Schattenseite | **Schattenwacht** |
| `attheforge` | An der Schmiede | **Die Waffenschmiede** |
| `beneaththemanor` | Unter dem Herrenhaus | **Tief unterm Schloss** |
| `wheretheheartis` | Wo das Herz wohnt | **Herzensangelegenheit** |
| `wrongmanforthejob` | Der Falsche für den Auftrag | **Zur falschen Zeit am falschen Ort** |
| `prisonoficeandlies` | Gefängnis aus Eis und Lügen | **Ein Käfig aus Eis und Lügen** |
| `hostofeverdark` | Heerschar von Everdark | **Das Heer von Everdark** |
| `bloodspireofdevis` | Blutspitze von Devis | **Devis' Blutturm** |
| `sourceofsickness` | Quelle der Seuche | **Quell der Krankheit** |
| `spreadingaffliction` | Sich ausbreitende Plage | **Ausbreitung der Pest** |
| `visionsofdawn` | Visionen der Morgendämmerung | **Prophezeiung eines neuen Anfangs** |

**16 Quests** (alle Akt II soweit auf der Karte angegeben).

| Quest (EN) | Quest (DE, Karte) | Erweiterung | Reise-Gelände |
|---|---|---|---|
| Bonds of the Wild | Erwachen der Wildnis | Erwachen der Wildnis | Straße/Wald/Wald |
| Crown of Destiny | Krone des Schicksals | Krone des Schicksals | Ebene/Berg/Berg |
| Shadowside Watch | Schattenwacht | Kreuzzug der Vergessenen | Wald/Wasser/Berg |
| The Curse of Iona | Der Fluch von Iona | Wächter von Deephall | Straße/Berg/Berg |
| Armed to the Teeth | Bis an die Zähne bewaffnet | Die Höhle des Lindwurms | Ebene/Wald/Berg/Straße |
| At the Forge | Die Waffenschmiede | Die Höhle des Lindwurms | Wald/Wald/Berg/Berg |
| Beneath the Manor | Tief unterm Schloss | Schloss Rabenfels | Straße/Straße |
| Where the Heart Is | Herzensangelegenheit | Schloss Rabenfels | Straße/Straße |
| Wrong Man for the Job | Zur falschen Zeit am falschen Ort | Schloss Rabenfels | Straße/Straße |
| Prison of Ice and Lies | Ein Käfig aus Eis und Lügen | Schwur der Verbannten | Wasser/Wald/Berg |
| Host of Everdark | Das Heer von Everdark | Scherben von Everdark | – |
| Bloodspire of Devis | Devis' Blutturm | Hüter des Geheimnisses | Straße/Wasser/Berg |
| Treaty of Champions | Kontrakt der Unbesiegten | Kontrakt der Unbesiegten | Wasser/Wald/Wasser |
| Source of Sickness | Quell der Krankheit | Die Trollsümpfe | Wasser/Wald/Wasser |
| Spreading Affliction | Ausbreitung der Pest | Die Trollsümpfe | Straße/Berg/Berg |
| Visions of Dawn | Prophezeiung eines neuen Anfangs | Prophezeiung eines neuen Anfangs | Straße/Ebene/Berg |

**Ausgeschlossen:** „The Sunken Temple" (Quell-Erweiterung *„Sands of the Past"*) — nicht in
der verbindlichen Produktliste (`expansions.ts`), daher bewusst ausgelassen. Hintergrund/
Rationale (Anti-Halluzinations-Regel aus dem Datenvorfall 2026-06-12):
`wiki/concepts/fabricated-data-incident.md`. Falls doch real, zuerst belegt in `expansions.ts`
aufnehmen (offen).

---

## Datenmodell (`src/data/campaigns.ts`)

```typescript
interface Campaign {
  id: string
  nameEn: string
  nameDe: string
  expansionId: string
  kind: 'campaign' | 'mini'   // Groß- vs. Mini-Kampagne
  branching: boolean          // verzweigter Szenariobaum?
  descriptionDe: string       // kurze, eigene faktische Beschreibung
}

interface AdvancedQuest {
  id: string
  nameEn: string
  nameDe: string
  expansionId: string
  act?: 1 | 2
  travel: string[]            // Reise-Geländetypen (EN), z. B. ['Road','Forest']
  imageUrlFront: string
  imageUrlBack: string
}
```

Anzeige: `src/pages/CampaignsPage.tsx` (Route `/kampagnen`, Nav „🏰 Kampagnen") – zwei Abschnitte
(Kampagnen-Überblick + Advanced Quests gruppiert nach Erweiterung), Such-/Sammlungs-/Sprachfilter,
Reise-Gelände als Symbole, Kartenbild-Lightbox (Vorder-/Rückseite). Datenintegritäts-Tests sichern
Count (9 / 16), gültige `expansionId`, Zweisprachigkeit und Gelände-Typen ab.

---

## Offen / später (v1.4+, separate Planung)

- Detaillierte Szenario-Daten (Ziele, Monstergruppen, Verzweigungs-IDs) – nur mit zuverlässiger
  Quelle und geklärter Rechtslage; nicht aus Questbüchern reproduzieren.
- Kampagnen-Speicherstand (v1.4) ist ein eigenes Feature (Datenmodell separat).
