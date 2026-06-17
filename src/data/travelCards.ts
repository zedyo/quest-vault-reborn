import type { TravelCard } from '../types/game'

// Quelle: any2cards/d2e (data/travel-event-decks.js + city-event-decks.js).
//
// WICHTIG: Reisekarten/Stadtereignis-Karten lösen je nach Reise-Geländetyp ein
// Ereignis aus. Hier werden BEWUSST nur faktische Strukturdaten erfasst –
// Erweiterung, Deck-Position (N von M), welche Gelände-Icons ein Ereignis tragen –
// plus der Kartenbild-Link. Der eigentliche Ereignistext (FFG-Urheberrecht) wird
// NICHT reproduziert; das Kartenbild zeigt den vollständigen Inhalt.
//
// „Nebenszenarien" (Side Quests) sind als Advanced Quests separat auf der
// Kampagnen-Seite erfasst (src/data/campaigns.ts, v1.1.30).
//
// deckType: 'travel' = Reise-Ereignisse (Wildnis-Gelände Plain/Forest/Mountain/
// Road/Water), 'city' = Stadt-Ereignisse aus „Schatten von Nerekhall"
// (Street/Tower/Building/Sewer/Hazard). Deck-Rückseiten ausgelassen.
export const TRAVEL_CARDS: TravelCard[] = [
  {
    "id": "sn-city-event-1-of-10",
    "expansionId": "shadow-of-nerekhall",
    "deckType": "city",
    "position": 1,
    "total": 10,
    "eventTerrains": [
      "Street",
      "Tower",
      "Building"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-1-of-10.png"
  },
  {
    "id": "sn-city-event-2-of-10",
    "expansionId": "shadow-of-nerekhall",
    "deckType": "city",
    "position": 2,
    "total": 10,
    "eventTerrains": [
      "Hazard",
      "Sewer",
      "Building"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-2-of-10.png"
  },
  {
    "id": "sn-city-event-3-of-10",
    "expansionId": "shadow-of-nerekhall",
    "deckType": "city",
    "position": 3,
    "total": 10,
    "eventTerrains": [
      "Sewer",
      "Hazard",
      "Tower"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-3-of-10.png"
  },
  {
    "id": "sn-city-event-4-of-10",
    "expansionId": "shadow-of-nerekhall",
    "deckType": "city",
    "position": 4,
    "total": 10,
    "eventTerrains": [
      "Tower",
      "Street",
      "Hazard"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-4-of-10.png"
  },
  {
    "id": "sn-city-event-5-of-10",
    "expansionId": "shadow-of-nerekhall",
    "deckType": "city",
    "position": 5,
    "total": 10,
    "eventTerrains": [
      "Street",
      "Building",
      "Sewer"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-5-of-10.png"
  },
  {
    "id": "sn-city-event-6-of-10",
    "expansionId": "shadow-of-nerekhall",
    "deckType": "city",
    "position": 6,
    "total": 10,
    "eventTerrains": [
      "Street",
      "Hazard",
      "Building"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-6-of-10.png"
  },
  {
    "id": "sn-city-event-7-of-10",
    "expansionId": "shadow-of-nerekhall",
    "deckType": "city",
    "position": 7,
    "total": 10,
    "eventTerrains": [
      "Sewer",
      "Tower",
      "Building"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-7-of-10.png"
  },
  {
    "id": "sn-city-event-8-of-10",
    "expansionId": "shadow-of-nerekhall",
    "deckType": "city",
    "position": 8,
    "total": 10,
    "eventTerrains": [
      "Tower",
      "Street",
      "Sewer"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-8-of-10.png"
  },
  {
    "id": "sn-city-event-9-of-10",
    "expansionId": "shadow-of-nerekhall",
    "deckType": "city",
    "position": 9,
    "total": 10,
    "eventTerrains": [
      "Hazard",
      "Building",
      "Street"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-9-of-10.png"
  },
  {
    "id": "sn-city-event-10-of-10",
    "expansionId": "shadow-of-nerekhall",
    "deckType": "city",
    "position": 10,
    "total": 10,
    "eventTerrains": [
      "Tower",
      "Sewer",
      "Hazard"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-10-of-10.png"
  },
  {
    "id": "bg-travel-event-1-of-10",
    "expansionId": "base",
    "deckType": "travel",
    "position": 1,
    "total": 10,
    "eventTerrains": [
      "Plain",
      "Forest",
      "Mountain"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-1-of-10.png"
  },
  {
    "id": "bg-travel-event-2-of-10",
    "expansionId": "base",
    "deckType": "travel",
    "position": 2,
    "total": 10,
    "eventTerrains": [
      "Road",
      "Plain",
      "Forest"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-2-of-10.png"
  },
  {
    "id": "bg-travel-event-3-of-10",
    "expansionId": "base",
    "deckType": "travel",
    "position": 3,
    "total": 10,
    "eventTerrains": [
      "Plain",
      "Forest",
      "Mountain"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-3-of-10.png"
  },
  {
    "id": "bg-travel-event-4-of-10",
    "expansionId": "base",
    "deckType": "travel",
    "position": 4,
    "total": 10,
    "eventTerrains": [
      "Plain",
      "Forest",
      "Water"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-4-of-10.png"
  },
  {
    "id": "bg-travel-event-5-of-10",
    "expansionId": "base",
    "deckType": "travel",
    "position": 5,
    "total": 10,
    "eventTerrains": [
      "Forest",
      "Mountain",
      "Water"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-5-of-10.png"
  },
  {
    "id": "bg-travel-event-6-of-10",
    "expansionId": "base",
    "deckType": "travel",
    "position": 6,
    "total": 10,
    "eventTerrains": [
      "Road",
      "Mountain",
      "Forest"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-6-of-10.png"
  },
  {
    "id": "bg-travel-event-7-of-10",
    "expansionId": "base",
    "deckType": "travel",
    "position": 7,
    "total": 10,
    "eventTerrains": [
      "Road",
      "Forest",
      "Water"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-7-of-10.png"
  },
  {
    "id": "bg-travel-event-8-of-10",
    "expansionId": "base",
    "deckType": "travel",
    "position": 8,
    "total": 10,
    "eventTerrains": [
      "Plain",
      "Mountain",
      "Water"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-8-of-10.png"
  },
  {
    "id": "bg-travel-event-9-of-10",
    "expansionId": "base",
    "deckType": "travel",
    "position": 9,
    "total": 10,
    "eventTerrains": [
      "Road",
      "Mountain",
      "Water"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-9-of-10.png"
  },
  {
    "id": "bg-travel-event-10-of-10",
    "expansionId": "base",
    "deckType": "travel",
    "position": 10,
    "total": 10,
    "eventTerrains": [
      "Plain",
      "Mountain",
      "Water"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-10-of-10.png"
  },
  {
    "id": "lr-travel-event-1-of-8",
    "expansionId": "labyrinth-of-ruin",
    "deckType": "travel",
    "position": 1,
    "total": 8,
    "eventTerrains": [
      "Water",
      "Plain",
      "Forest"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-1-of-8.png"
  },
  {
    "id": "lr-travel-event-2-of-8",
    "expansionId": "labyrinth-of-ruin",
    "deckType": "travel",
    "position": 2,
    "total": 8,
    "eventTerrains": [
      "Road",
      "Plain",
      "Forest"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-2-of-8.png"
  },
  {
    "id": "lr-travel-event-3-of-8",
    "expansionId": "labyrinth-of-ruin",
    "deckType": "travel",
    "position": 3,
    "total": 8,
    "eventTerrains": [
      "Plain",
      "Forest",
      "Mountain"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-3-of-8.png"
  },
  {
    "id": "lr-travel-event-4-of-8",
    "expansionId": "labyrinth-of-ruin",
    "deckType": "travel",
    "position": 4,
    "total": 8,
    "eventTerrains": [
      "Mountain",
      "Forest",
      "Road"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-4-of-8.png"
  },
  {
    "id": "lr-travel-event-5-of-8",
    "expansionId": "labyrinth-of-ruin",
    "deckType": "travel",
    "position": 5,
    "total": 8,
    "eventTerrains": [
      "Forest",
      "Mountain",
      "Water"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-5-of-8.png"
  },
  {
    "id": "lr-travel-event-6-of-8",
    "expansionId": "labyrinth-of-ruin",
    "deckType": "travel",
    "position": 6,
    "total": 8,
    "eventTerrains": [
      "Plain",
      "Mountain",
      "Water"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-6-of-8.png"
  },
  {
    "id": "lr-travel-event-7-of-8",
    "expansionId": "labyrinth-of-ruin",
    "deckType": "travel",
    "position": 7,
    "total": 8,
    "eventTerrains": [
      "Road",
      "Mountain",
      "Water"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-7-of-8.png"
  },
  {
    "id": "lr-travel-event-8-of-8",
    "expansionId": "labyrinth-of-ruin",
    "deckType": "travel",
    "position": 8,
    "total": 8,
    "eventTerrains": [
      "Plain",
      "Mountain",
      "Water"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-8-of-8.png"
  },
  {
    "id": "lw-travel-event-1-of-3",
    "expansionId": "lair-of-the-wyrm",
    "deckType": "travel",
    "position": 1,
    "total": 3,
    "eventTerrains": [
      "Road",
      "Water",
      "Plain"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/lair-of-the-wyrm/lw-travel-event-1-of-3.png"
  },
  {
    "id": "lw-travel-event-2-of-3",
    "expansionId": "lair-of-the-wyrm",
    "deckType": "travel",
    "position": 2,
    "total": 3,
    "eventTerrains": [
      "Road",
      "Plain",
      "Forest",
      "Water",
      "Mountain"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/lair-of-the-wyrm/lw-travel-event-2-of-3.png"
  },
  {
    "id": "lw-travel-event-3-of-3",
    "expansionId": "lair-of-the-wyrm",
    "deckType": "travel",
    "position": 3,
    "total": 3,
    "eventTerrains": [
      "Plain",
      "Forest",
      "Mountain"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/lair-of-the-wyrm/lw-travel-event-3-of-3.png"
  },
  {
    "id": "mb-travel-event-1-of-5",
    "expansionId": "mists-of-bilehall",
    "deckType": "travel",
    "position": 1,
    "total": 5,
    "eventTerrains": [
      "Water",
      "Plain",
      "Forest"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/mists-of-bilehall/mb-travel-event-1-of-5.png"
  },
  {
    "id": "mb-travel-event-2-of-5",
    "expansionId": "mists-of-bilehall",
    "deckType": "travel",
    "position": 2,
    "total": 5,
    "eventTerrains": [
      "Road",
      "Mountain",
      "Forest"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/mists-of-bilehall/mb-travel-event-2-of-5.png"
  },
  {
    "id": "mb-travel-event-3-of-5",
    "expansionId": "mists-of-bilehall",
    "deckType": "travel",
    "position": 3,
    "total": 5,
    "eventTerrains": [
      "Water",
      "Mountain",
      "Road"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/mists-of-bilehall/mb-travel-event-3-of-5.png"
  },
  {
    "id": "mb-travel-event-4-of-5",
    "expansionId": "mists-of-bilehall",
    "deckType": "travel",
    "position": 4,
    "total": 5,
    "eventTerrains": [
      "Road",
      "Plain",
      "Forest",
      "Water",
      "Mountain"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/mists-of-bilehall/mb-travel-event-4-of-5.png"
  },
  {
    "id": "mb-travel-event-5-of-5",
    "expansionId": "mists-of-bilehall",
    "deckType": "travel",
    "position": 5,
    "total": 5,
    "eventTerrains": [
      "Road",
      "Plain",
      "Forest",
      "Water",
      "Mountain"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/mists-of-bilehall/mb-travel-event-5-of-5.png"
  },
  {
    "id": "cr-travel-event-1-of-2",
    "expansionId": "the-chains-that-rust",
    "deckType": "travel",
    "position": 1,
    "total": 2,
    "eventTerrains": [
      "Road",
      "Plain",
      "Forest"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/the-chains-that-rust/cr-travel-event-1-of-2.png"
  },
  {
    "id": "cr-travel-event-2-of-2",
    "expansionId": "the-chains-that-rust",
    "deckType": "travel",
    "position": 2,
    "total": 2,
    "eventTerrains": [
      "Water",
      "Mountain",
      "Road"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/the-chains-that-rust/cr-travel-event-2-of-2.png"
  },
  {
    "id": "tf-travel-event-1-of-3",
    "expansionId": "the-trollfens",
    "deckType": "travel",
    "position": 1,
    "total": 3,
    "eventTerrains": [
      "Road",
      "Forest",
      "Plain"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/the-trollfens/tf-travel-event-1-of-3.png"
  },
  {
    "id": "tf-travel-event-2-of-3",
    "expansionId": "the-trollfens",
    "deckType": "travel",
    "position": 2,
    "total": 3,
    "eventTerrains": [
      "Forest",
      "Water",
      "Mountain"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/the-trollfens/tf-travel-event-2-of-3.png"
  },
  {
    "id": "tf-travel-event-3-of-3",
    "expansionId": "the-trollfens",
    "deckType": "travel",
    "position": 3,
    "total": 3,
    "eventTerrains": [
      "Road",
      "Plain",
      "Forest",
      "Water",
      "Mountain"
    ],
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/the-trollfens/tf-travel-event-3-of-3.png"
  }
]
