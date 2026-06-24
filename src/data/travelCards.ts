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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-1-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Street",
        "textDe": "Eine Eskorte aus Wachen geleitet euch durch die Stadt. Für das nächste Reisesymbol wird keine Stadtereigniskarte gezogen."
      },
      {
        "terrainEn": "Tower",
        "textDe": "Wilde Bestien haben euch umzingelt. Ihr müsst euch freikämpfen. Wirf 2 rote Machtwürfel. Die Heldengruppe muss insgesamt die gewürfelten Herz erleiden. Sie können die Herz beliebig aufteilen."
      },
      {
        "terrainEn": "Building",
        "textDe": "In der Kneipe um die Ecke kommt es zu einer Rauferei. Wenn die Helden sich entscheiden, einzugreifen, erleidet jeder Held 1 Herz. Andernfalls zieht der Overlord 1 Overlordkarte."
      },
      {
        "terrainEn": "Sewer",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-2-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Hazard",
        "textDe": "Ein rasender Höllenkoloss fällt euch an. Jeder Held erleidet 2 Herz."
      },
      {
        "terrainEn": "Sewer",
        "textDe": "Ihr lechzt nach Wasser. Da seht ihr eine Feldflasche im Abwasserkanal schwimmen. Wenn die Helden daraus trinken, wird ein Held ihrer Wahl vergiftet. Andernfalls zieht der Overlord 2 Overlordkarten."
      },
      {
        "terrainEn": "Building",
        "textDe": "Der Spion, der euch folgt, weiß unentdeckt zu bleiben. Der Overlord zieht 1 Overlordkarte."
      },
      {
        "terrainEn": "Street",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-3-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Sewer",
        "textDe": "Ein Deckeneinsturz zwingt euch, viel Zeit mit Graben zu verschwenden. Jeder Held legt eine [Stärke]-Probe ab. Jeder, dessen Probe misslingt, erleidet 1 Erschöpfung. Wenn mindestens 2 Proben misslingen, zieht der Overlord 1 Overlordkarte."
      },
      {
        "terrainEn": "Hazard",
        "textDe": "Wer hier nicht schnell genug ist, wird von den Schatten selbst verzehrt. Der Held mit der geringsten [Gespür] blutet (bei Gleichstand entscheidet der Overlord)."
      },
      {
        "terrainEn": "Tower",
        "textDe": "Ihr meint, aus einer dunklen Gasse ein Geräusch zu hören. Vielleicht ist es nichts, aber vielleicht ist jemand in Not. Jeder Held legt eine [Willenskraft]-Probe ab. Wenn mindestens 2 Proben misslingen, zieht der Overlord 1 Overlordkarte."
      },
      {
        "terrainEn": "Street",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-4-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Tower",
        "textDe": "Aus einem geborstenen Kanal quillt stinkendes Abwasser. Ihr müsst hindurch waten. Jeder Held legt eine [Gespür]-Probe ab. Jeder Held, dessen Probe misslingt, erkrankt."
      },
      {
        "terrainEn": "Street",
        "textDe": "Ein zwielichtiger Straßenhändler bietet euch heiße Ware an. Jeder Held kann eine [Wissen]-Probe ablegen. Jeder, dessen Probe gelingt, zieht 1 Suchkarte. Für jede misslungene Probe zieht der Overlord 1 Overlordkarte."
      },
      {
        "terrainEn": "Hazard",
        "textDe": "Ihr seid in eine teuflische Falle getappt! Ein glühender Feuerstrahl versengt einen eurer Gefährten. Der Held mit der größten Lebenskraft erleidet 2 Herz (bei Gleichstand entscheidet der Overlord)."
      },
      {
        "terrainEn": "Building",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-5-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Street",
        "textDe": "Das Gewimmel auf den Straßen lässt euch nur mühsam vorankommen. Jeder Held erleidet 1 Erschöpfung."
      },
      {
        "terrainEn": "Building",
        "textDe": "Ihr findet eine verschlossene, mit fremdartigen Schriftzeichen verzierte Truhe. Die Helden wählen 1 Helden, der eine [Wissen]-Probe ablegt. Wenn sie gelingt, zieht er 1 Suchkarte. Wenn sie misslingt, zieht der Overlord 1 Overlordkarte."
      },
      {
        "terrainEn": "Sewer",
        "textDe": "In diesem Viertel ist der Stadtrat besonders gründlich gegen das Rattenproblem vorgegangen. Der Overlord legt 1 Handkarte oben auf das Overlorddeck."
      },
      {
        "terrainEn": "Hazard",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-6-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Street",
        "textDe": "Ihr habt euch in einem dunklen, schäbigen Viertel verlaufen. Ihr fühlt euch beobachtet ... Die Helden wählen 1 Helden, der eine [Willenskraft]-Probe ablegt. Wenn sie misslingt, erleidet er 2 Herz. Dann wird eine weitere Karte für dieses Reisesymbol gezogen."
      },
      {
        "terrainEn": "Hazard",
        "textDe": "Ein gewaltiger Monolith versperrt euch den Weg. Ihr müsst versuchen, ihn aus dem Weg zu räumen. Jeder Held legt eine [Stärke]-Probe ab. Wenn mindestens 2 Proben misslingen, erleidet jeder Held 1 Herz und 1 Erschöpfung."
      },
      {
        "terrainEn": "Building",
        "textDe": "Einige Teile dieses Gebäudes sind eingestürzt. Ihr müsst euch vorsichtig hindurch bewegen. Jeder Held erleidet 1 Erschöpfung."
      },
      {
        "terrainEn": "Sewer",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-7-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Sewer",
        "textDe": "Ein irrer Greis verspricht, euch eine Abkürzung zu zeigen, wenn ihr ein Rätsel löst. Jeder Held legt eine [Wissen]-Probe ab. Wenn mindestens 2 Proben gelingen, wird für das nächste Reisesymbol keine Stadtereigniskarte gezogen."
      },
      {
        "terrainEn": "Tower",
        "textDe": "Schwärme von Ratten scharen sich in den Schatten um euch. Auf der Flucht nach draußen nagen ihre gelben Zähne an euren Fersen. Jeder Held erleidet 1 Herz oder 1 Held erleidet 3 Herz."
      },
      {
        "terrainEn": "Building",
        "textDe": "Angeblich lebt ein verruchter Hexer in diesem Haus. Wenn die Helden dem Gerücht nachgehen, erleidet jeder Held 1 Erschöpfung, und der Overlord wirft 1 Overlordkarte seiner Wahl ab."
      },
      {
        "terrainEn": "Street",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-8-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Tower",
        "textDe": "Ein Straßenjunge führt euch durch die dunklen Gassen der Stadt. Für das nächste Reisesymbol wird keine Stadtereigniskarte gezogen."
      },
      {
        "terrainEn": "Street",
        "textDe": "Eine riesige Kutsche rast auf euch zu. Ihr hechtet aus dem Weg! Jeder Held legt eine [Willenskraft]-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 1 Erschöpfung und 1 Herz."
      },
      {
        "terrainEn": "Sewer",
        "textDe": "Tief im trüben Dreckwasser seht ihr etwas Helles funkeln. Die Helden wählen 1 Helden, der eine [Gespür]-Probe ablegt. Wenn sie gelingt, zieht er 1 Suchkarte. Wenn sie misslingt, zieht der Overlord 1 Overlordkarte."
      },
      {
        "terrainEn": "Hazard",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-9-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Hazard",
        "textDe": "Dichter, beißender Nebel dringt durch Risse im Boden und hüllt euch im Nu ein. Der Held mit der geringsten [Gespür] erkrankt und wird vergiftet (bei Gleichstand entscheidet der Overlord)."
      },
      {
        "terrainEn": "Building",
        "textDe": "Ein Gruppe von Schlägern hat euch in einem Gebäude umzingelt. Ihr müsst einen Ausweg finden! Der Overlord wählt 1 Attribut, in dem alle Helden eine Probe ablegen. Jeder Held, dessen Probe misslingt, erleidet 1 Herz und 1 Erschöpfung."
      },
      {
        "terrainEn": "Street",
        "textDe": "Geifernde Hunde stürzen aus einer Gasse und fallen euch an. Jeder Held legt eine [Stärke]-Probe ab. Jeder Held, dessen Probe misslingt, blutet."
      },
      {
        "terrainEn": "Sewer",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/city-event-decks/d2e/shadow-of-nerekhall/sn-city-event-10-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Tower",
        "textDe": "Einer eurer Kontakte hat hier Vorräte für euch gelagert. Jeder Held gewinnt alle Herz und Erschöpfung zurück."
      },
      {
        "terrainEn": "Sewer",
        "textDe": "Ratten! Überall Ratten! Rette sich, wer kann! Jeder Held mit Geschwindigkeit 3 oder weniger erkrankt. Jeder andere Held erleidet 1 Erschöpfung."
      },
      {
        "terrainEn": "Hazard",
        "textDe": "Widerwärtige Wesen versperren euch den Weg. Ihr könntet umkehren und eine anderen Weg suchen. Aber das würde dauern. Die Helden können entscheiden, dass jeder 2 Herz erleidet. Wenn nicht, zieht der Overlord 2 Overlordkarten."
      },
      {
        "terrainEn": "Street",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-1-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Plain",
        "textDe": "Ihr kommt zu einem von Efeu überwucherten Steinkreis. Jeder Held legt eine Willenskraft-Probe ab und erleidet 1 Erschöpfung, wenn sie misslingt. Wenn alle Proben gelingen, zieht jeder Held eine Suchkarte."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Aus einem Dickicht am Wegesrand hört ihr ein Wimmern. Wenn ihr dem Geräusch nachgehen möchtet, erleidet jeder Held 1 Herz, und der Overlord wirft 1 zufällige Overlordkarte ab."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Auf den steinigen Hängen geratet ihr in einen tosenden Sturm. Jeder Held erleidet 1 Herz und 1 Erschöpfung."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-2-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "Ihr trefft einen fahrenden Händler. Jeder Held legt eine Wissen-Probe ab und zieht eine Suchkarte, wenn sie gelingt."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Ihr stoßt auf eine Gruppe von Flüchtlingen. Wenn ihr anhaltet und ihnen helft, zieht der Overlord eine Overlordkarte. Wenn ihr sie ignoriert, erleidet jeder Held 1 Herz."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Ihr habt euch verlaufen. Wählt einen Helden, der eine Gespür-Probe ablegt. Wenn sie misslingt, erleidet jeder Held 1 Erschöpfung."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-3-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Plain",
        "textDe": "In der Ferne seht ihr Rauchsäulen aufsteigen. Der Overlord zieht eine Overlordkarte."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Vor euch tut sich eine wunderschöne, geschützte Lichtung auf. Jeder Held gewinnt alle Herz und Erschöpfung zurück."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Ein Ettin rast den Hang hinab und greift euch an! Jeder Held legt eine Stärke-Probe ab und erleidet 1 Herz, wenn sie misslingt. Wenn alle Proben misslingen, erleidet jeder Held 1 Herz zusätzlich."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-4-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Plain",
        "textDe": "Eine Bande von Wegelagerern versperrt euch den Weg. Wählt einen Helden, der eine Stärke-Probe ablegt, um sie einzuschüchtern. Wenn sie misslingt, erleidet jeder Held 1 Herz im Kampf mit den Halunken."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Spinnennetze überall! Jeder Held legt eine Gespür-Probe ab. Jeder Held, dessen Probe misslingt, wird von einer Spinne angegriffen und vergiftet. Wenn alle Proben misslingen, erleidet jeder Held außerdem 1 Herz."
      },
      {
        "terrainEn": "Water",
        "textDe": "Am Boden eines Tümpels seht ihr etwas glitzern! Wählt einen Helden, der eine Gespür-Probe ablegt, um danach zu tauchen. Wenn sie gelingt, zieht er eine Suchkarte."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-5-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Forest",
        "textDe": "Eine Gruppe Latari-Elfen wird von Schergen des Overlords angegriffen. Ihr könnt ihnen zu Hilfe eilen und jeder Held erleidet 1 Herz. Wenn nicht, zieht der Overlord 2 Overlordkarten."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Ein Zwerg aus Dunwarr ist dabei, seinen Bruder zu beerdigen. Er warnt euch vor Gefahren auf dem Weg. Für das nächste Reisesymbol dieser Kampagnenphase wird keine Ereigniskarte gezogen."
      },
      {
        "terrainEn": "Water",
        "textDe": "Aufgedunsene Leichen treiben im Wasser. Als ihr euch nähert, erheben sie sich ächzend und stöhnend. Jeder Held legt eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, wird von den Zombies überwältigt und erkrankt."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-6-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "Ihr findet eine versteckte Abkürzung. Für das nächste Reisesymbol dieser Kampagnenphase wird keine Ereigniskarte gezogen."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Die Schergen des Overlords steigen aus ihren Löchern. Der Overlord wählt 1 Attribut, in dem alle Helden eine Probe ablegen. Jeder Held, dessen Probe misslingt, erleidet 1 Herz und 1 Erschöpfung."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Die Schergen des Overlords steigen aus ihren Löchern. Der Overlord wählt 1 Attribut, in dem alle Helden eine Probe ablegen. Jeder Held, dessen Probe misslingt, erleidet 1 Herz und 1 Erschöpfung."
      },
      {
        "terrainEn": "Road",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-7-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "Ein wandernder Gelehrter gewährt euch Einsicht in seine Schriftrollen. Wählt einen Helden, der eine Wissen-Probe ablegt. Wenn sie gelingt, darf er sich die Handkarten des Overlords ansehen und 1 davon abwerfen."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Spinnen! Der Himmel steh uns bei, Spinnen! Der Held mit der geringsten Gespür wird vergiftet (bei Gleichstand entscheidet der Overlord)."
      },
      {
        "terrainEn": "Water",
        "textDe": "Ein Pesthauch scheint aus dem Wasser emporzusteigen. Der Held mit der geringsten Stärke erkrankt (bei Gleichstand entscheidet der Overlord)."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-8-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Plain",
        "textDe": "Am Wegesrand seht ihr einen noch schwelenden, ausgebrannten Hof. Ihr haltet an, um die Bewohner in Würde zu beerdigen. Der Overlord zieht eine Overlordkarte."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Der Pfad führt am Eingang einer geheimnisvollen Höhle vorbei. Wenn ihr sie erkunden wollt, zieht ihr 1 Suchkarte und der Overlord 1 Overlordkarte."
      },
      {
        "terrainEn": "Water",
        "textDe": "Eine geheimnisvolle Gestalt bietet euch an, euch auf ihrem Kahn mitzunehmen. Wenn ihr das Angebot annehmt, gewinnt jeder Held alle Erschöpfung zurück, aber der Overlord zieht 1 Overlordkarte."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-9-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "Die Späher des Overlords sind überall. Jeder Held legt eine Wissen-Probe ab. Pro misslungener Probe zieht der Overlord 1 Overlordkarte."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Erdrutsch! Jeder Held legt eine Stärke-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 2 Erschöpfung."
      },
      {
        "terrainEn": "Water",
        "textDe": "Nach dem Regen der letzten Nacht sind die Flüsse mächtig angeschwollen. Jeder Held legt eine Gespür-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 2 Erschöpfung."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/base-game/bg-travel-event-10-of-10.png",
    "eventsDe": [
      {
        "terrainEn": "Plain",
        "textDe": "Ihr legt eine kurze Rast in einem Obstgarten ein, an dessen Bäumen goldene Äpfel wachsen. Wählt einen Helden, der eine Willenskraft-Probe ablegt. Wenn sie gelingt, zieht er eine Suchkarte."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Pfeile schwirren euch entgegen! Jeder Held legt eine Gespür-Probe ab und erleidet 1 Herz, wenn sie misslingt. Wenn alle Proben misslingen, erleidet jeder Held 1 Herz zusätzlich."
      },
      {
        "terrainEn": "Water",
        "textDe": "Greifarme durchbrechen die Wasseroberfläche und versuchen, euch in die Tiefe zu ziehen! Jeder Held legt eine Stärke-Probe ab und erleidet 1 Erschöpfung, wenn sie misslingt. Wenn alle Proben misslingen, erleidet jeder Held außerdem 1 Herz."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-1-of-8.png",
    "eventsDe": [
      {
        "terrainEn": "Plain",
        "textDe": "Es sieht aus, als hättet ihr euch verlaufen ... Jeder Held legt eine Wissen-Probe ab und erleidet 1 Erschöpfung, wenn sie misslingt. Wenn alle Proben gelingen, wird für das nächste Reisesymbol keine Reiseereigniskarte gezogen."
      },
      {
        "terrainEn": "Water",
        "textDe": "Der lange Marsch hat euch ermüden lassen. Ein Fährmann hat Mitleid und bietet an euch mitzunehmen. Ihr müsst 25 Goldstücke zahlen, oder jeder Held erleidet 1 Erschöpfung."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Geflügelte Ungeheuer stoßen aus dem Himmel auf euch herab. Die Heldenspieler wählen 1 Helden, der eine Gespür-Probe ablegt. Wenn sie misslingt, erleidet jeder Held 1 Herz und 1 Erschöpfung."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-2-of-8.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "Auf dem Weg zu eurem Ziel spricht euch ein geheimnisvoller Fremder an. „Gebt Acht, Freunde! Die Schergen des Overlords sind überall! Finstere Pläne werden geschmiedet und zwar ganz in eurer Nähe. Ihr müsst sie durchkreuzen! Sputet euch!“ Die Helden können den Overlord zwingen sofort eine Gerüchtabenteuerkarte des aktuellen Akts zu spielen. Wenn sie das nicht tun oder wenn der Overlord keine passende Gerüchtkarte auf der Hand hat, gilt diese Karte, als wäre „Nichts passiert“. Nachdem ihr diese Karte abgehandelt habt, kommt sie zurück in die Schachtel."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-3-of-8.png",
    "eventsDe": [
      {
        "terrainEn": "Plain",
        "textDe": "Ihr entdeckt Späher des Overlords. Der Held mit der höchsten Aktion kann 1 Erschöpfung erleiden, um sich eine zufällige Handkarte des Overlords anzusehen, oder 2 Herz erleiden, um den Overlord zu zwingen, 1 zufällige Overlordkarte aus der Hand abzuwerfen."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Ein runzliges Weib erscheint vor euch, spricht einen Fluch über euch und verschwindet wieder im Nebel. Jeder Held legt eine Gespür-Probe ab. Jeder Held, dessen Probe misslingt, wird von ihrem Fluch getroffen und brennt."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Ihr trefft einen geheimnisvollen Narren, der euch ein verlockendes Angebot macht ... Ein Held legt alle 4 Attributsproben ab (Gespür, Wissen, Willenskraft und Stärke). Wenn alle gelingen, zieht er 1 Marktkarte des aktuellen Akts."
      },
      {
        "terrainEn": "Road",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-4-of-8.png",
    "eventsDe": [
      {
        "terrainEn": "Water",
        "textDe": "Du fühlst dich erfrischt. Wählt einen Krieger, und legt diese Karte vor ihm ab. Er kann sie zu Beginn seines Zuges abwerfen. In diesem Zug muss er für Fertigkeiten keine Erschöpfung zahlen."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Ein wandernder Mystiker segnet dich. Wählt einen Heiler und legt diese Karte vor ihm ab. Er kann sie abwerfen, wenn er einem Helden aufhilft, damit dieser alle Herz zurückgewinnt."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Ihr spürt einen dichten Nebel um euch herum. Plötzlich fühlt ihr euch eigenartig müde. Jeder Held legt eine Wissen-Probe ab. Jeder, dessen Probe misslingt, legt einen Heldenmarker auf seinen Heldenbogen. Diese Helden haben im ersten Zug Geschwindigkeit 2."
      },
      {
        "terrainEn": "Road",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-5-of-8.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "Ihr findet eine alte Schriftrolle. Wählt einen Magier, und legt diese Karte vor ihm ab. Er kann sie nach einem eigenen Verteidigungswurf abwerfen, um so viele Schub zusätzlich zu erhalten, wie er Wissen hat."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Ein fahrender Heiler bietet euch eine geheimnisvolle Heilmethode an. Wählt 1 Helden, der 2 Herz erleidet. Ein beliebiger anderer Held gewinnt alle seine Herz zurück und wirft alle seine Zustandskarten ab."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Der Wald wird von Räubern heimgesucht. Jeder Held legt entweder eine Gespür- oder eine Wissen-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 1 Herz und 1 Erschöpfung. Wenn alle Proben gelingen, darf ein beliebiger Held 1 Marktkarte ziehen und behalten."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-6-of-8.png",
    "eventsDe": [
      {
        "terrainEn": "Plain",
        "textDe": "Ihr wittert einen Hinterhalt. Der Overlord wählt bis zu 3 Helden, die je 1 Herz erleiden. Zu Beginn des Abenteuers muss er ein beliebiges Monster ebenso viele Herz erleiden lassen."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Ein verirrter Händler fragt euch nach dem Weg. Jeder Held legt eine Wissen-Probe ab. Jeder, dessen Probe gelingt, erhält 25 Goldstücke. Wenn alle Proben gelingen, darf stattdessen ein beliebiger Held 1 Marktkarte ziehen und behalten."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Ihr kämpft euch den steilen Pfad hinauf und träumt von großen Schätzen. Der Overlord darf sich die obersten 3 Suchkarten ansehen und in beliebiger Reihenfolge zurück auf den Suchstapel legen."
      },
      {
        "terrainEn": "Road",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-7-of-8.png",
    "eventsDe": [
      {
        "terrainEn": "Mountain",
        "textDe": "Der Gebirgspfad ist anstrengender, als ihr dachtet. Der Overlord wählt 1 Helden, der eine Stärke-Probe ablegt. Wenn seine Probe misslingt, legt er einen Heldenmarker auf seinen Heldenbogen. Er erhält −1 auf seine Geschwindigkeit, bis er eine Ausruhaktion ausführt."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Ein mysteriöser Mann schenkt euch einen goldenen Schlüssel. Wählt einen Kundschafter und legt diese Karte vor ihm ab. Er kann sie im Schritt „Einkaufen“ abwerfen, um 3 Marktkarten mehr zu ziehen."
      },
      {
        "terrainEn": "Road",
        "textDe": "Ein verirrter Bote bietet euch geheime Informationen an. Ihr könnt 25 Goldstücke ausgeben, um euch die Handkarten des Overlords anzusehen. Ihr könnt ihn zwingen, 1 Overlordkarte abzuwerfen und 1 neue zu ziehen."
      },
      {
        "terrainEn": "Water",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/labyrinth-of-ruin/lr-travel-event-8-of-8.png",
    "eventsDe": [
      {
        "terrainEn": "Forest",
        "textDe": "Ein wildes Tier erschreckt euch und ihr lasst eure Waffen fallen. Ihr müsst mit bloßen Fäusten kämpfen. Der Overlord wählt 1 Helden, der eine Stärke-Probe ablegt. Wenn sie misslingt, erleidet er so viele Herz, wie er Stärke hat."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Ihr findet eine runenversiegelte Truhe. Jeder Held legt eine Wissen-Probe ab. Wenn mindestens 2 Proben gelingen, dürft ihr 1 Heiltrank aus dem Suchstapel nehmen und den Stapel dann wieder mischen."
      },
      {
        "terrainEn": "Water",
        "textDe": "Am Ufer sitzt eine Frau, die unverständlich murmelt. Als ihr euch nähert, ergreift euch ein Schrecken. Jeder Held legt eine Wissen-Probe ab. Jeder Held, dessen Probe misslingt, wird verflucht."
      },
      {
        "terrainEn": "Road",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/lair-of-the-wyrm/lw-travel-event-1-of-3.png",
    "eventsDe": [
      {
        "terrainEn": "Plain",
        "textDe": "Ein finsterer Wanderer warnt euch. Deckt die oberste Karte vom Overlorddeck auf. Ihr könnt je Held 1 Herz erleiden, um die Karte unter das Deck zu legen. Wenn nicht, legt ihr sie wieder oben drauf."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Der steile Gebirgspfad bricht plötzlich unter euch ein. Jeder Held legt eine Stärke-Probe ab. Jeder Held, dessen Probe misslingt, wird betäubt. Wenn alle Proben misslingen, erleidet jeder Held 1 Herz."
      },
      {
        "terrainEn": "Water",
        "textDe": "Ein dunkler Nebel liegt über dem Wasser. Wenn der Overlord höchstens so viele Overlordkarten auf der Hand hat, wie Helden mitspielen, zieht er 1 Overlordkarte."
      },
      {
        "terrainEn": "Road",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/lair-of-the-wyrm/lw-travel-event-2-of-3.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "Vom Wipfel eines großen Baums habt ihr einen weiten Blick. Ein beliebiger Held erleidet 1 Erschöpfung und legt eine Aktion-Probe ab. Wenn sie gelingt, darf er sich die obersten 3 Karten des Overlorddecks ansehen und in beliebiger Reihenfolge zurücklegen."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Die Jagd auf einen Spion ist unerwartet mühsam. Der Overlord kann die Overlordkarten auf seiner Hand zeigen. Wenn er das tut, erleidet jeder Held 2 Erschöpfung."
      },
      {
        "terrainEn": "Water",
        "textDe": "Das Wasser wirkt trübe und riecht verfault. Der Overlord lässt 1 Helden seiner Wahl, der keine Zustandskarte besitzt, eine Attributsprobe nach Wahl des Overlords ablegen. Wenn sie misslingt, wird der Held verflucht."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/lair-of-the-wyrm/lw-travel-event-3-of-3.png",
    "eventsDe": [
      {
        "terrainEn": "Plain",
        "textDe": "Bei der Durchquerung des leblosen Brachlands werdet ihr von einer unsichtbaren dunklen Energie erfasst. Jeder Held legt eine Gespür-Probe ab. Jeder Held, dessen Probe misslingt, wird verflucht."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Finstere Gestalten scharen sich zusammen. Der Overlord legt diese Karte vor sich ab. Er kann sie abwerfen, wenn er ein Monster aktiviert. Das Monster erhält 2 Bewegungspunkte."
      },
      {
        "terrainEn": "Water",
        "textDe": "Langes Feilschen mit einem fahrenden Händler hält euch auf. Ein beliebiger Held darf 1 Marktkarte ziehen und behalten. Wenn er das tut, darf der Overlord 2 Overlordkarten ziehen."
      },
      {
        "terrainEn": "Road",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/mists-of-bilehall/mb-travel-event-1-of-5.png",
    "eventsDe": [
      {
        "terrainEn": "Water",
        "textDe": "In den dunklen Wassern seht ihr eine tiefe, aber einladend wirkende Lagune. Jeder Held darf wählen, entweder 2 Herz zu erleiden und 2 Erschöpfung zurückzuhalten oder 2 Erschöpfung zu erleiden und 2 Herz zurückzuhalten."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Eine wilde Hexe gewährt euch ihre Gunst. Die Helden wählen 1 Helden aus, der verängstigt wird. Am Ende des ersten Zuges dieses Helden wird jedes zu diesem Helden benachbarte Monster verängstigt."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Ein merkwürdiges Kleinod glitzert im Schmutz. Die Helden wählen 1 Helden aus, der eine Wissen-Probe ablegt. Wenn sie misslingt, erleidet jeder Held Erschöpfung in Höhe der die über das Wissen dieses Helden hinausgehend gewürfelten Schub. Wenn sie gelingt, erhalten die Helden 25 Gold."
      },
      {
        "terrainEn": "Road",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/mists-of-bilehall/mb-travel-event-2-of-5.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "In einen riesigen Baum auf eurem Weg sind inspirierende Worte eingeritzt. Alle Attribute jedes Helden steigen bis zum Ende dieses Reiseschrittes um +1."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Unnatürliche Gestalten suchen den Rand eures Lagers heim. Die Helden wählen einen Helden, der eine Gespür-Probe ablegt. Wenn sie gelingt, ist er verängstigt. Wenn sie misslingt, ist jeder andere Held verängstigt."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Der kürzlich gefallene Regen hat den Wald in Chaos und Morast verwandelt. Jeder Held legt eine Stärke-Probe ab. Jeder Held, dessen Probe misslingt, senkt seine Geschwindigkeit während seines ersten Zuges auf 1."
      },
      {
        "terrainEn": "Water",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/mists-of-bilehall/mb-travel-event-3-of-5.png",
    "eventsDe": [
      {
        "terrainEn": "Water",
        "textDe": "Das Wasser scheint vor verfaulenden Blutegeln zu brodeln. Jeder Held legt eine Gespür-Probe ab. Jeder Held, dessen Probe misslingt, ist erkrankt."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Der Gestank brennenden Fleisches führt euch zu einem verlassenen Scheiterhaufen. Die Helden dürfen 1 Helden auswählen, der eine Gespür-Probe ablegt. Falls sie gelingt, zieht dieser Held 1 Suchkarte und ist verängstigt."
      },
      {
        "terrainEn": "Road",
        "textDe": "Auf einen alten Wegstein ist in blutigen Lettern „KEHRT UM\" geschmiert. Jeder Held legt eine Willenskraft-Probe ab. Falls sie 2 oder mehr Helden misslingt, zieht der Overlord eine weitere Reisekarte und wickelt ein Ereignissymbol seiner Wahl ab."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/mists-of-bilehall/mb-travel-event-4-of-5.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "Ihr entdeckt einen uralten Friedhof. Die Statue einer Gestalt mit Kapuze ragt über die zerfallenen Grabsteine auf. In ihren Händen hält diese Statue einen schwarzen Kristall, dessen Glühen böse Vorahnungen weckt. Die Helden dürfen entscheiden, ob sie die Macht des Kristalls nutzen. Wenn sie dies tun, legt jeder Held eine Wissen-Probe ab. Jeder Held, dessen Probe misslingt, ist verängstigt oder erkrankt (nach Wahl des Overlords). Wenn alle Proben gelingen, wird diese Karte in den Spielbereich des Helden mit dem höchsten Wissen gelegt. Während seines Zuges darf dieser Held diese Karte zurück in die Spielschachtel legen. Wenn er dies tut, darf jeder Held 1 Zustand abwerfen. Wenn sich die Helden entscheiden, diesen Effekt nicht abzuwickeln, wird diese Reiseereigniskarte als „Nichts passiert.\" behandelt."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/mists-of-bilehall/mb-travel-event-5-of-5.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "Ihr findet die Überreste eines Wagens. Eine Truhe mit einem bizarr wirkenden Schloss liegt ungeöffnet zwischen den Trümmern. Eine Stimme flüstert in euren Köpfen: „Im Namen des Ogers und des Geists, entfesselt das, was wartet.\" Die Helden können 2 Helden auswählen, die sowohl eine Stärke-Probe als auch eine Gespür-Probe ablegen, um die Truhe zu öffnen. Wenn beiden Helden beide Proben gelingen, zieht 1 Held 1 Marktkarte vom Marktkartenstapel des aktuellen Aktes und erhält diese. Jeder Held, dessen Stärke-Probe misslingt, ist betäubt. Jeder Held, dessen Gespür-Probe misslingt, ist verängstigt. Wenn sich die Helden entscheiden, diesen Effekt nicht abzuwickeln, wird diese Reiseereigniskarte als „Nichts passiert.\" behandelt. Nachdem ihr dieses Ereignis abgewickelt habt, wird diese Karte zurück in die Spielschachtel gelegt."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/the-chains-that-rust/cr-travel-event-1-of-2.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "Hastig springt ihr von der Straße, als ein Bataillon gegnerischer Soldaten in Sicht kommt. Verzweifelt versucht ihr euch in der Böschung zu verstecken. Jeder Held legt eine Gespür-Probe ab. Für jeden Helden, dessen Probe misslingt, erleidet jeder Held 1 Erschöpfung."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Lautlos sammeln sich Geier über euch am Himmel – es werden von Minute zu Minute mehr. Jeder Held legt eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, wird verängstigt. Jeder Held, dessen Probe gelingt, wählt 1 Monster auf dem Spielplan, das verängstigt wird."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Ein junges Paar wühlt in den Trümmern ihrer niedergebrannten Hütte. Die Helden dürfen 25 Gold ausgeben. Wenn sie dies tun, dürfen sie das Deck des Overlords durchsuchen und 2 Overlordkarten ihrer Wahl abwerfen."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/the-chains-that-rust/cr-travel-event-2-of-2.png",
    "eventsDe": [
      {
        "terrainEn": "Water",
        "textDe": "Perlen von Blut steigen aus unsichtbaren Tiefen auf und erfüllen die Luft mit einem faulig riechenden, roten Nebel. Jeder Held legt eine Wissen-Probe ab. Jeder Held, dessen Probe misslingt, ist erkrankt und legt eine Willenskraft-Probe ab. Jeder Held, dessen Probe erneut misslingt, ist verängstigt."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Ihr stoßt auf einen riesigen, in eine Klippe eingelassenen Totenschrein. Die Helden wählen eine beliebige Anzahl Helden, die eine Stärke-Probe ablegen. Jeder Held, dessen Probe misslingt, erleidet 3 Herz. Wenn sie 1 oder mehreren Helden gelingt, erhalten die Helden 25 Gold."
      },
      {
        "terrainEn": "Road",
        "textDe": "Zwölf Straßen kreuzen euren Weg. Ein Held legt eine Wissen- oder Gespür-Probe ab. Wenn die Probe misslingt, zieht der Overlord 1 zusätzliche Reiseereigniskarte und führt eine beliebige Anzahl Ereignisse seiner Wahl durch."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/the-trollfens/tf-travel-event-1-of-3.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "Ein dubioser Wanderer weist euch den Weg, gegen Bezahlung. Wenn ihr 25 Goldstücke zahlt, wird für das nächste Reisesymbol in diesem Reiseschritt keine Karte gezogen."
      },
      {
        "terrainEn": "Forest",
        "textDe": "Ein Goblin-Kundschafter flieht, um seine Kameraden zu warnen! Ein Held mit einer Fernkampfwaffe wirft die Würfel seiner Waffe. Wenn die gewürfelte Reichweite weniger als 4 ist, erleidet jeder Held 2 Herz."
      },
      {
        "terrainEn": "Plain",
        "textDe": "Ein entsetzliches Gewitter hält euch auf. Jeder Held erleidet 1 Erschöpfung. Zieht dann eine weitere Karte für dieses Reisesymbol."
      },
      {
        "terrainEn": "Water",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/the-trollfens/tf-travel-event-2-of-3.png",
    "eventsDe": [
      {
        "terrainEn": "Forest",
        "textDe": "Ein abscheulicher Pestwurm greift euch an! Der Overlord wählt einen Helden. Der Held erleidet 1 Herz und wird geschwächt."
      },
      {
        "terrainEn": "Water",
        "textDe": "Irgendetwas Unreines hat hier das Wasser verpestet. Jeder Held legt eine Stärke-Probe ab. Jeder Held, dessen Probe misslingt, erhält nach Wahl des Overlords 1 Infektionsmarker oder wird vergiftet."
      },
      {
        "terrainEn": "Mountain",
        "textDe": "Ein gefangener Spion plaudert Geheimnisse aus. Der Overlord zeigt den Helden die Overlordkarten auf seiner Hand. Die Helden können ihn zwingen, alle Karten abzuwerfen. Dann zieht er so viele Overlordkarten nach, wie er abgeworfen hat."
      },
      {
        "terrainEn": "Road",
        "textDe": "Nichts passiert."
      }
    ]
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
    "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/travel-event-decks/d2e/the-trollfens/tf-travel-event-3-of-3.png",
    "eventsDe": [
      {
        "terrainEn": "Road",
        "textDe": "Ein einsamer Ritter in glänzender Rüstung verstellt euch den Weg und fordert den mächtigsten Kämpfer eurer Truppe heraus. Zieht Karten vom Marktkartenstapel des aktuellen Akts, bis ihr eine Nahkampfwaffe zieht. Ein Held kann einen Nahkampfangriff gegen einen grauen Verteidigungswürfel durchführen. Er wird dann mit der gezogenen Marktkarte angegriffen und verteidigt sich normal. Fügt der Held mehr Herz zu, als er erleidet, darf er die gezogene Marktkarte behalten. Andernfalls wird die gezogene Karte abgeworfen. In jedem Fall legt ihr diese Reiseereigniskarte zurück in die Schachtel. Nimmt kein Held die Herausforderung an, gilt diese Karte, als wäre „nichts passiert\"."
      }
    ]
  }
]
