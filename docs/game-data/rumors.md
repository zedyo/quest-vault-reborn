# Descent 2. Edition – Gerücht-Karten (Rumor)

**Status:** ✅ erfasst (v1.2.6, 2026-06-20) – deutsche Kartenbilder + faktische Metadaten
**Quelle:** eingescannte deutsche Karten des Users (Name DE) + any2cards `data/rumors.js`
(Name EN, Akt, Reise-Gelände). Daten: `src/data/rumors.ts`, Seite: `/geruechte`.

---

## Was sind Gerücht-Karten?

Gerücht-Karten (Rumor) sind ein **eigener Kartentyp** (nicht die Advanced Quests).
Der Overlord bringt sie ins Spiel; sie können u. a. Nebenquests/Advanced Quests
freischalten. In Descent 2e gehören sie zu den kleinen Erweiterungen/Lieutenant-Packs.

## Umfang

- **24 Karten in 11 Erweiterungen** (eingescannt + integriert).
- Bilder: web-optimiert unter `public/geruechte/de/<xws>.webp` (Original-Scans:
  `scans/geruechte/<exp-id>/<xws>.png`, nicht in der App).
- Voller deutscher **Kartentext** liegt als Referenz in
  `scans/geruechte/Geruechtkarten.md` – wird in der App **bewusst nicht** gerendert
  (FFG-IP, konsistent zu Kampagnen-/Reisekarten).

## Karten je Erweiterung

| Erweiterung | # | Karten (DE / EN) |
|---|---|---|
| Die Höhle des Lindwurms | 6 | Gefährliche Pfade (A Dangerous Path) · Schatzjäger (Gold Digger) · Böses Erwachen (Rude Awakening) · Zweifelhafte Schätze (Unknown Treasures) · Valyndras Zorn (Valyndra's Fury) · Gute Mine zum bösen Spiel (What's Yours Is Mine) |
| Die Trollsümpfe | 6 | Gräueltaten (Atrocities) · Hunger und Not (Famine and Strife) · Wurmfraß (Food for Worms) · Geisterstadt (Ghost Town) · Schwer erhältliche Waren (Scarce Goods) · Drei Köpfe, ein Gedanke (Three Heads, One Mind) |
| Schloss Rabenfels | 4 | Verfluchte Schätze (Cursed Treasures) · Finderlohn (Finders and Keepers) · Der Herr des Hauses (My House, My Rules) · Vogelfrei (Spread Your Wings) |
| Krone des Schicksals | 1 | Feurige Ernte (Burning Harvest) |
| Kreuzzug der Vergessenen | 1 | Kreuzzug der Vergessenen (Crusade of the Forgotten) |
| Die Wächter von Deephall | 1 | Die Wächter von Deephall (Guardians of Deephall) |
| Eid des Verstoßenen | 1 | Schwur der Verbannten (Oath of the Outcast) |
| Scherben von Everdark | 1 | Die Scherben von Everdark (Shards of Everdark) |
| Hüter des Geheimnisses | 1 | Hüter des Geheimnisses (Stewards of the Secret) |
| Kontrakt der Unbesiegten | 1 | Sindaeas Geheimnis (Sindae's Secret) |
| Visionen der Morgendämmerung | 1 | Friedensbrecher (Trucebreaker) |

> Die deutschen Titel stammen wortgetreu von den physischen Karten; englische Namen +
> `xws`-Dateinamen aus any2cards. EN↔xws-Zuordnung 1:1 gegen any2cards geprüft.

## Nicht enthalten

- `bonds-of-the-wild` / „One Man's Trash" (1 Karte) – nicht in den Scans (Erweiterung
  nicht vorhanden), kann später nachgereicht werden.
- „Sands of the Past" (any2cards führt 3 Gerüchte) – Erweiterung **nicht** in
  `expansions.ts` (halluzinationsverdächtig); kein solcher Scan vorhanden.
