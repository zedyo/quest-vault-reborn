# Descent 2. Edition – Reisekarten & Nebenszenarien

**Status:** Reisekarten erfasst ✅ (v1.1.31) – `src/data/travelCards.ts` + `/reisekarten`-Seite  
**Quelle:** any2cards `travel-event-decks.js` + `city-event-decks.js`  
**Zuletzt aktualisiert:** 2026-06-17

---

## Umfang & bewusste Abgrenzung (wichtig)

Reisekarten lösen abhängig vom Reise-Geländetyp ein Ereignis aus. Der **Ereignistext** der
Karten ist FFG-Material (Urheberrecht) und wird **bewusst NICHT reproduziert**. Erfasst werden
nur **faktische Strukturdaten** je physischer Karte:

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

- Detaillierte Ereignistexte werden bewusst nicht erfasst (Urheberrecht); der Kartenbild-Link
  liefert den Inhalt.
- Geheimräume (`secret-rooms.js`) und Co-op-Karten (Explorations/Perils) sind weitere
  Event-Decktypen – bei Bedarf später als eigene, ebenfalls metadaten-basierte Übersicht.
