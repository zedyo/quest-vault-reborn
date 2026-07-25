# Descent 2. Edition – Gerücht-Karten (Rumor) · Deutsche Originalkarten

> **Status:** ✅ erfasst (v1.3.4), Kartentext + Akt-II-Rückseiten ergänzt (v1.3.5).
> **Quelle:** eingescannte **deutsche** Original-Gerücht-Karten (Akt I + Akt II): Name DE 1:1
> vom Kartentitel, Akt-Badge (I/II) und Reise-Symbole direkt von den Karten gelesen. EN-Name +
> Erweiterung: Akt I aus any2cards `rumors.js`; Akt II aus der verknüpften Advanced Quest
> (`campaigns.ts`, EN-Name = Quest-Name). Daten: `src/data/rumors.ts`, Bilder:
> `public/cards/de/geruechte/<id>.webp` (+ `<id>-back.webp` für Akt-II-Rückseiten), Seite: `/geruechte`.


> **Seit v1.8.0 ist `Rumor.textDe` maschinenlesbare Regelquelle.** Der Session-Tracker
> liest Zeitfenster, Akt-Beschränkung, Intermezzo-Sperre, Ausschlüsse, Verfall und die
> eingebrachte Zusatzabenteuerkarte per Parser aus diesem Text
> (`src/utils/rumorTiming.ts`, Unit-Tests in `src/utils/__tests__/rumorTiming.test.ts`).
> Wer hier den Wortlaut korrigiert, ändert damit direkt das Spielverhalten der App —
> nach jeder Textkorrektur bitte `npm test` laufen lassen.

## Umfang

- **41 Karten** = 25 Akt I + 16 Akt II, aus 13 Erweiterungen/Packs.
- **Kartentext (v1.3.5):** `textDe` = deutscher Vorderseiten-Text (Auslöser + Flavor), 1:1 von
  den Karten transkribiert. **Akt-II-Karten sind doppelseitig** – `back` enthält die
  Rückseiten-Belohnungen (Overlord-Belohnung + Helden-Belohnung) + ein eigenes Kartenbild.
  Akt-I-Karten haben eine generische Rückseite (kein eigener Inhalt). Spielsymbole stehen im
  Text als Wort (Herz/Schub/Erschöpfung/Aktion) und werden in der App als Symbol gerendert.
- **Ausgeschlossen:** Erweiterung „Sands of the Past" (nicht in `expansions.ts`,
  halluzinationsverdächtig – s. CLAUDE.md) → deren 3 Rumor-Karten entfallen.


## Akt I (25)

| Deutsch | English | Erweiterung | Akt | Reise-Gelände |
|---|---|---|---|---|
| Böses Erwachen | Rude Awakening | Die Höhle des Lindwurms | I | Ebene, Ebene, Wald, Straße |
| Der Herr des Hauses | My House, My Rules | Schloss Rabenfels | I | Wald, Wald, Ebene |
| Des einen Müll … | One Man's Trash | Erwachen der Wildnis | I | Straße, Wald, Berg |
| Die Scherben von Everdark | Shards of Everdark | Scherben von Everdark | I | Straße, Ebene, Berg |
| Die Wächter von Deephall | Guardians of Deephall | Wächter von Deephall | I | Straße, Ebene, Berg, Straße |
| Drei Köpfe, ein Gedanke | Three Heads, One Mind | Die Trollsümpfe | I | Wasser, Straße, Berg |
| Feurige Ernte | Burning Harvest | Krone des Schicksals | I | Berg, Ebene, Berg |
| Finderlohn | Finders and Keepers | Schloss Rabenfels | I | Straße, Ebene, Wald |
| Friedensbrecher | Trucebreaker | Prophezeiung eines neuen Anfangs | I | Ebene, Wald, Berg |
| Gefährliche Pfade | A Dangerous Path | Die Höhle des Lindwurms | I | – |
| Geisterstadt | Ghost Town | Die Trollsümpfe | I | Wald, Straße, Straße |
| Gräueltaten | Atrocities | Die Trollsümpfe | I | – |
| Gute Mine zum bösen Spiel | What's Yours Is Mine | Die Höhle des Lindwurms | I | Ebene, Wald, Berg, Berg |
| Hunger und Not | Famine and Strife | Die Trollsümpfe | I | – |
| Hüter des Geheimnisses | Stewards of the Secret | Hüter des Geheimnisses | I | Wald, Wasser, Berg |
| Kreuzzug der Vergessenen | Crusade of the Forgotten | Kreuzzug der Vergessenen | I | Straße, Wasser, Ebene |
| Schatzjäger | Gold Digger | Die Höhle des Lindwurms | I | Straße, Straße, Straße |
| Schwer erhältliche Waren | Scarce Goods | Die Trollsümpfe | I | – |
| Schwur der Verbannten | Oath of the Outcast | Schwur der Verbannten | I | Wald, Wald, Berg |
| Sindaeas Geheimnis | Sindae's Secret | Kontrakt der Unbesiegten | I | Straße, Wald, Ebene |
| Valyndras Zorn | Valyndra's Fury | Die Höhle des Lindwurms | I | – |
| Verfluchte Schätze | Cursed Treasures | Schloss Rabenfels | – | – |
| Vogelfrei | Spread Your Wings | Schloss Rabenfels | I | Berg, Wasser, Ebene |
| Wurmfraß | Food for Worms | Die Trollsümpfe | I | Wald, Wasser, Wasser |
| Zweifelhafte Schätze | Unknown Treasures | Die Höhle des Lindwurms | – | – |

## Akt II (16)

| Deutsch | English | Erweiterung | Akt | Reise-Gelände |
|---|---|---|---|---|
| Ausbreitung der Pest | Spreading Affliction | Die Trollsümpfe | II | Straße, Berg, Berg |
| Bis an die Zähne bewaffnet | Armed to the Teeth | Die Höhle des Lindwurms | II | Ebene, Wald, Berg, Straße |
| Das Heer von Everdark | Host of Everdark | Scherben von Everdark | II | Wald, Ebene, Berg |
| Der Fluch von Iona | The Curse of Iona | Wächter von Deephall | II | Straße, Berg, Berg |
| Devis' Blutturm | Bloodspire of Devis | Hüter des Geheimnisses | II | Straße, Wasser, Berg |
| Die Waffenschmiede | At the Forge | Die Höhle des Lindwurms | II | Wald, Wald, Berg, Berg |
| Ein Käfig aus Eis und Lügen | Prison of Ice and Lies | Schwur der Verbannten | II | Wasser, Wald, Berg |
| Erwachen der Wildnis | Bonds of the Wild | Erwachen der Wildnis | II | Straße, Wald, Wald |
| Herzensangelegenheit | Where the Heart Is | Schloss Rabenfels | II | Straße, Straße |
| Kontrakt der Unbesiegten | Treaty of Champions | Kontrakt der Unbesiegten | II | Wasser, Wald, Wasser |
| Krone des Schicksals | Crown of Destiny | Krone des Schicksals | II | Ebene, Berg, Berg |
| Prophezeiung eines neuen Anfangs | Visions of Dawn | Prophezeiung eines neuen Anfangs | II | Straße, Ebene, Berg |
| Quell der Krankheit | Source of Sickness | Die Trollsümpfe | II | Wasser, Wald, Wasser |
| Schattenwacht | Shadowside Watch | Kreuzzug der Vergessenen | II | Wald, Wasser, Berg |
| Tief unterm Schloss | Beneath the Manor | Schloss Rabenfels | II | Straße, Straße |
| Zur falschen Zeit am falschen Ort | Wrong Man for the Job | Schloss Rabenfels | II | Straße, Straße |

> Akt-II-Gerücht-Karten sind die Akt-II-Auslöser der jeweiligen Advanced Quest (kleine Packs).
> Der englische Name entspricht dort dem Namen der verknüpften Advanced Quest.