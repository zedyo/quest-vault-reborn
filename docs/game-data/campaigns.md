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
sind Community-Übersetzungen. **16 Quests** (alle Akt II soweit auf der Karte angegeben).

| Quest (EN) | Quest (DE, Community) | Erweiterung | Reise-Gelände |
|---|---|---|---|
| Bonds of the Wild | Bande der Wildnis | Erwachen der Wildnis | Straße/Wald/Wald |
| Crown of Destiny | Krone des Schicksals | Krone des Schicksals | Ebene/Berg/Berg |
| Shadowside Watch | Wacht der Schattenseite | Kreuzzug der Vergessenen | Wald/Wasser/Berg |
| The Curse of Iona | Der Fluch von Iona | Wächter von Deephall | Straße/Berg/Berg |
| Armed to the Teeth | Bis an die Zähne bewaffnet | Die Höhle des Lindwurms | Ebene/Wald/Berg/Straße |
| At the Forge | An der Schmiede | Die Höhle des Lindwurms | Wald/Wald/Berg/Berg |
| Beneath the Manor | Unter dem Herrenhaus | Schloss Rabenfels | Straße/Straße |
| Where the Heart Is | Wo das Herz wohnt | Schloss Rabenfels | Straße/Straße |
| Wrong Man for the Job | Der Falsche für den Auftrag | Schloss Rabenfels | Straße/Straße |
| Prison of Ice and Lies | Gefängnis aus Eis und Lügen | Schwur der Verbannten | Wasser/Wald/Berg |
| Host of Everdark | Heerschar von Everdark | Scherben von Everdark | – |
| Bloodspire of Devis | Blutspitze von Devis | Hüter des Geheimnisses | Straße/Wasser/Berg |
| Treaty of Champions | Kontrakt der Unbesiegten | Kontrakt der Unbesiegten | Wasser/Wald/Wasser |
| Source of Sickness | Quelle der Seuche | Die Trollsümpfe | Wasser/Wald/Wasser |
| Spreading Affliction | Sich ausbreitende Plage | Die Trollsümpfe | Straße/Berg/Berg |
| Visions of Dawn | Visionen der Morgendämmerung | Prophezeiung eines neuen Anfangs | Straße/Ebene/Berg |

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
