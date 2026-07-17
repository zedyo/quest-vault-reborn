# Descent 2. Edition – Reisekarten & Nebenszenarien

**Status:** Reisekarten erfasst ✅ (v1.1.31) – `src/data/travelCards.ts` + `/reisekarten`-Seite  
**Deutsche Originalkarten + Ereignistext ✅ (v1.3.9):** alle 41 Karten als deutsche Original-Kartenbilder
(`public/cards/de/reisekarten/<id>.webp`, `travelCardDeUrl`, TravelCardsPage zeigt DE-Bild mit EN-Fallback) +
**ausgeschriebener deutscher Ereignistext** (`eventsDe: {terrainEn,textDe}[]` je Gelände-Abschnitt, inkl.
„Nichts passiert"-Abschnitt) 1:1 von den Karten transkribiert. Reise-Sheet 7×5 (660×1030), Stadt-Sheet 4×3
(475×740). Mapping per Deck-Reihenfolge (base-1 + alle Stadtkarten terrain-verifiziert). Hinweis: das gelesene
Karten-Gelände (`eventsDe[].terrainEn`) weicht bei einigen Karten von den any2cards-`eventTerrains` ab —
`eventsDe` ist die kartengenaue Quelle.  
**Quelle:** Ereignistext + Bilder von den deutschen Original-Karten-Scans; Struktur (Position/Gelände)
any2cards `travel-event-decks.js` + `city-event-decks.js`.  
**Zuletzt aktualisiert:** 2026-06-24

---

## Umfang & bewusste Abgrenzung (wichtig)

Reisekarten lösen abhängig vom Reise-Geländetyp ein Ereignis aus. Seit **v1.3.9** wird der
**deutsche Ereignistext** von den Original-Karten mit erfasst (`eventsDe` je Gelände-Abschnitt);
dazu die **faktischen Strukturdaten** je physischer Karte (projektweite IP-Regel:
`wiki/concepts/ffg-ip-boundary.md`):

- Erweiterung
- Deck-Typ (`travel` = Reise-Ereignisse, Wildnis-Gelände · `city` = Stadt-Ereignisse aus
  „Schatten von Nerekhall")
- Deck-Position (N von M)
- welche **Gelände-Icons** auf der Karte ein Ereignis tragen (faktisch, abgeleitet aus
  „No Event" vs. Ereignis in den Quelldaten)
- der **Kartenbild-Link** (das Bild zeigt den vollständigen Inhalt)

Deck-Rückseiten werden ausgelassen.

---

## Reisekarten – Bestand

**41 Karten** gesamt: **31 Reise-Ereignisse** + **10 Stadt-Ereignisse**.

| Erweiterung | Deck-Typ | Karten |
|---|---|---|
| Grundspiel | Reise | 10 |
| Die Höhle des Lindwurms | Reise | 3 |
| Labyrinth des Verderbens | Reise | 8 |
| Die Trollsümpfe | Reise | 3 |
| Nebel von Bilehall | Reise | 5 |
| Rostende Ketten | Reise | 2 |
| Schatten von Nerekhall | Stadt | 10 |

**Gelände-Icons:**
- Reise-Ereignisse (Wildnis): Ebene / Wald / Berg / Straße / Wasser (Plain/Forest/Mountain/Road/Water)
- Stadt-Ereignisse (Nerekhall): Gasse / Turm / Gebäude / Kanalisation / Gefahr (Street/Tower/Building/Sewer/Hazard)

---

## Nebenszenarien (Side Quests)

Reisekarten können **Nebenszenarien** (Side Quests) freischalten. Diese sind als **Advanced Quests**
bereits separat erfasst (v1.1.30, `src/data/campaigns.ts`, Seite `/kampagnen`) – 16 eigenständige
Rumor-Quests der kleinen Packs mit Titel, Erweiterung, Akt, Reise-Gelände und Kartenbildern. Die
Reisekarten-Seite verlinkt darauf. Es werden hier bewusst keine doppelten Daten angelegt.

---

## Datenmodell (`src/data/travelCards.ts`)

```typescript
interface TravelCard {
  id: string
  expansionId: string
  deckType: 'travel' | 'city'
  position: number          // N (von total)
  total: number
  eventTerrains: string[]   // Gelände-Icons MIT Ereignis (EN)
  imageUrl: string
}
```

Anzeige: `src/pages/TravelCardsPage.tsx` (Route `/reisekarten`, Nav „🧭 Reisekarten") – Galerie
gruppiert nach Erweiterung, Deck-Typ-Filter (Alle/Reise/Stadt), Gelände-Abdeckung als farbige
Marker (Ereignis vs. kein Ereignis), Kartenbild-Lightbox, Sammlungs-/Sprachfilter. Cross-Link zu
den Nebenszenarien (Advanced Quests). Datenintegritäts-Tests sichern Count (41 = 31 + 10), gültige
`expansionId`, gültige Gelände je Deck-Typ und https-Bild-URLs ab.

---

## Offen / später

- ✅ Erledigt (v1.3.9): der deutsche Ereignistext je Gelände ist als `eventsDe` erfasst
  (siehe „Umfang & bewusste Abgrenzung" oben); der Kartenbild-Link zeigt zusätzlich das Original.
- Geheimräume (`secret-rooms.js`) und Co-op-Karten (Explorations/Perils) sind weitere
  Event-Decktypen – bei Bedarf später als eigene, ebenfalls metadaten-basierte Übersicht.
