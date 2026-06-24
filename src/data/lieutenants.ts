import type { Lieutenant } from '../types/game'

// Quelle: any2cards/d2e strukturierte Daten (data/lieutenants.js).
// Englischer Text = Originalwortlaut der Karten. Deutscher Name + Fähigkeitstexte
// = kartengenau von den deutschen Original-Karten transkribiert (Vorder- + Rückseite, v1.3.8).
//
// Umfang: alle 21 Leutnants (Grundspiel + Erweiterungen), je 1–2 Akte.
// Pro Akt: Angriffswürfel, Attribute (Stärke/Wissen/Willenskraft/Gespür), Werte je
// Spielerzahl (2/3/4: Bewegung/Leben/Verteidigung) und Fähigkeiten (Kurzlabel + Regeltext).
// Erzeugt aus den Quelldaten (numerische Werte 1:1 geparst), DE-Texte handübersetzt.
// Hinweis: Ardus Ix'Erebus / Kyndrithul / Zarihell erscheinen mit Akt I in „Nebel von
// Bilehall" und Akt II in „Die rostenden Ketten" (`expansionId` je Form).

export const LIEUTENANTS: Lieutenant[] = [
  {
    "id": "baronzachareth",
    "nameEn": "Baron Zachareth",
    "nameDe": "Baron Zachareth",
    "expansionId": "base",
    "forms": [
      {
        "act": 1,
        "expansionId": "base",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red"
        ],
        "might": 4,
        "knowledge": 3,
        "willpower": 3,
        "awareness": 4,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 10,
            "defense": [
              "black"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 13,
            "defense": [
              "black"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 16,
            "defense": [
              "black"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Action: Dominion",
            "labelDe": "Aktion: Beherrschung",
            "rulesEn": "Dominion: Baron Zachareth tests Willpower. If he passes, he may move a hero within his line of sight 2 spaces in any direction. After the movement, the hero tests Willpower. If he fails, the hero is Immobilized.",
            "rulesDe": "Beherrschung: Baron Zachareth legt eine Wissen-Probe ab. Wenn sie gelingt, kann er einen Helden in seiner Sichtlinie beliebig bis zu 2 Felder weit bewegen. Danach legt der Held eine Wissen-Probe ab. Wenn sie misslingt, ist der Held gelähmt."
          },
          {
            "labelEn": "Surge: Pierce 2",
            "labelDe": "Schub: Durchbohren 2",
            "rulesEn": "Pierce 2: This attack ignores 2 Shields rolled on the defense dice.",
            "rulesDe": "Durchbohren 2: Dieser Angriff ignoriert bis zu 2 Schildsymbole des Verteidigers."
          },
          {
            "labelEn": "Surge: Subdue",
            "labelDe": "Schub: Bezwingen",
            "rulesEn": "Subdue: If this attack deals at least 1 Heart, choose 1 condition. The target suffers the chosen condition.",
            "rulesDe": "Bezwingen: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Abzug der Schildsymbole), wähle 1 Zustand, den das Ziel sofort erhält."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act1/bg-baron-zachareth-front.png"
      },
      {
        "act": 2,
        "expansionId": "base",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red",
          "red"
        ],
        "might": 4,
        "knowledge": 3,
        "willpower": 3,
        "awareness": 4,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 16,
            "defense": [
              "black",
              "gray"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 18,
            "defense": [
              "black",
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 20,
            "defense": [
              "black",
              "gray",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Action: Dominion",
            "labelDe": "Aktion: Beherrschung",
            "rulesEn": "Dominion: Baron Zachareth tests Willpower. If he passes, he may move a hero within his line of sight 2 spaces in any direction. After the movement, the hero tests Willpower. If he fails, the hero is Immobilized.",
            "rulesDe": "Beherrschung: Baron Zachareth legt eine Wissen-Probe ab. Wenn sie gelingt, kann er einen Helden in seiner Sichtlinie beliebig bis zu 2 Felder weit bewegen. Danach legt der Held eine Wissen-Probe ab. Wenn sie misslingt, ist der Held gelähmt."
          },
          {
            "labelEn": "Action: Shadow Bolt",
            "labelDe": "Aktion: Schattenblitz",
            "rulesEn": "Shadow Bolt: Zachareth performs a Ranged attack: Blue Red Yellow",
            "rulesDe": "Schattenblitz: Zachareth führt einen Fernkampfangriff durch:"
          },
          {
            "labelEn": "Surge: Pierce 2",
            "labelDe": "Schub: Durchbohren 2",
            "rulesEn": "Pierce 2: This attack ignores 2 Shields rolled on the defense dice.",
            "rulesDe": "Durchbohren 2: Dieser Angriff ignoriert bis zu 2 Schildsymbole des Verteidigers."
          },
          {
            "labelEn": "Surge: Subdue",
            "labelDe": "Schub: Bezwingen",
            "rulesEn": "Subdue: If this attack deals at least 1 Heart, choose 1 condition. The target suffers the chosen condition.",
            "rulesDe": "Bezwingen: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Abzug der Schildsymbole), wähle 1 Zustand, den das Ziel sofort erhält."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act2/bg-baron-zachareth-front.png"
      }
    ]
  },
  {
    "id": "belthir",
    "nameEn": "Belthir",
    "nameDe": "Belthir",
    "expansionId": "base",
    "forms": [
      {
        "act": 1,
        "expansionId": "base",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red"
        ],
        "might": 4,
        "knowledge": 3,
        "willpower": 4,
        "awareness": 1,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 9,
            "defense": [
              "gray"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 11,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 13,
            "defense": [
              "gray",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Fly",
            "labelDe": "Fliegen",
            "rulesEn": "Fly: This monster may ignore enemy figures and the effects of terrain while moving. It must end its movement in an empty space following normal movement rules.",
            "rulesDe": "Fliegen: Belthir kann während der Bewegung feindliche Figuren und Terrain ignorieren. Er muss seine Bewegung nach den normalen Regeln auf einem leeren Feld beenden."
          },
          {
            "labelEn": "Reach",
            "labelDe": "Weitreichend",
            "rulesEn": "Reach: This monster may attack targets up to 2 spaces away.",
            "rulesDe": "Weitreichend: Belthir kann mit einem Nahkampfangriff bis zu 2 Felder weit angreifen."
          },
          {
            "labelEn": "Surge: Poison",
            "labelDe": "Schub: Gift",
            "rulesEn": "Poison: If this attack deals at least 1 Heart (after the defense roll), the target is Poisoned.",
            "rulesDe": "Gift: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Abzug der Schildsymbole), wird das Ziel vergiftet."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act1/bg-belthir-front.png"
      },
      {
        "act": 2,
        "expansionId": "base",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red",
          "red"
        ],
        "might": 4,
        "knowledge": 3,
        "willpower": 4,
        "awareness": 1,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 13,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 15,
            "defense": [
              "gray",
              "gray"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 18,
            "defense": [
              "gray",
              "gray",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Fly",
            "labelDe": "Fliegen",
            "rulesEn": "Fly: This monster may ignore enemy figures and the effects of terrain while moving. It must end its movement in an empty space following normal movement rules.",
            "rulesDe": "Fliegen: Belthir kann während der Bewegung feindliche Figuren und Terrain ignorieren. Er muss seine Bewegung nach den normalen Regeln auf einem leeren Feld beenden."
          },
          {
            "labelEn": "Reach",
            "labelDe": "Weitreichend",
            "rulesEn": "Reach: This monster may attack targets up to 2 spaces away.",
            "rulesDe": "Weitreichend: Belthir kann mit einem Nahkampfangriff bis zu 2 Felder weit angreifen."
          },
          {
            "labelEn": "Action: Cry Havoc",
            "labelDe": "Aktion: Flugangriff",
            "rulesEn": "Cry Havoc: Belthir performs a move action and then attack action. The attack targets every figure he moves through.",
            "rulesDe": "Flugangriff: Belthir führt eine Bewegungsaktion und dann eine Angriffsaktion aus. Der Angriff zielt auf alle Figuren, durch die er sich mit dieser Aktion bewegt."
          },
          {
            "labelEn": "Surge: Poison",
            "labelDe": "Schub: Gift",
            "rulesEn": "Poison: If this attack deals at least 1 Heart (after the defense roll), the target is Poisoned.",
            "rulesDe": "Gift: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Abzug der Schildsymbole), wird das Ziel vergiftet."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act2/bg-belthir-front.png"
      }
    ]
  },
  {
    "id": "ladyelizafarrow",
    "nameEn": "Lady Eliza Farrow",
    "nameDe": "Lady Eliza Farrow",
    "expansionId": "base",
    "forms": [
      {
        "act": 1,
        "expansionId": "base",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow"
        ],
        "might": 1,
        "knowledge": 3,
        "willpower": 3,
        "awareness": 5,
        "perPlayer": {
          "p2": {
            "speed": 5,
            "health": 7,
            "defense": [
              "brown"
            ]
          },
          "p3": {
            "speed": 5,
            "health": 9,
            "defense": [
              "gray"
            ]
          },
          "p4": {
            "speed": 5,
            "health": 12,
            "defense": [
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Action: Sacrifice",
            "labelDe": "Aktion: Opfer",
            "rulesEn": "Sacrifice: Deal up to 5 Hearts to an adjacent monster to allow Lady Eliza Farrow to recover an equal amount of Hearts.",
            "rulesDe": "Opfer: Lady Eliza fügt einem benachbarten Monster bis zu 5 Herzen zu, um ebenso viele Herzen zurückzugewinnen."
          },
          {
            "labelEn": "Action: Seduce",
            "labelDe": "Aktion: Verführung",
            "rulesEn": "Seduce: You may choose a hero within 3 spaces of Lady Eliza Farrow and test Eliza's Willpower. If Eliza passes, move the hero 1 space in any direction and the hero is Stunned.",
            "rulesDe": "Verführung: Lady Eliza wählt einen Helden innerhalb von 3 Feldern zu ihr und legt eine Wissen-Probe ab. Wenn sie gelingt, kannst du den Helden beliebig um 1 Feld bewegen. Wenn du ihn bewegst, ist er betäubt."
          },
          {
            "labelEn": "Surge: Blood Call",
            "labelDe": "Schub: Blutzoll",
            "rulesEn": "Blood Call: Lady Eliza Farrow recovers Hearts equal to the amount of Hearts dealt with this attack (after rolling defense dice).",
            "rulesDe": "Blutzoll: Lady Eliza gewinnt so viel Herzen zurück, wie sie mit diesem Angriff Herz zugefügt hat (nach Abzug der Schildsymbole)."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act1/bg-lady-eliza-farrow-front.png"
      },
      {
        "act": 2,
        "expansionId": "base",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow",
          "red"
        ],
        "might": 1,
        "knowledge": 3,
        "willpower": 3,
        "awareness": 5,
        "perPlayer": {
          "p2": {
            "speed": 5,
            "health": 9,
            "defense": [
              "gray"
            ]
          },
          "p3": {
            "speed": 5,
            "health": 11,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 5,
            "health": 15,
            "defense": [
              "gray",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Action: Sacrifice",
            "labelDe": "Aktion: Opfer",
            "rulesEn": "Sacrifice: Deal up to 5 Hearts to an adjacent monster to allow Lady Eliza Farrow to recover an equal amount of Hearts.",
            "rulesDe": "Opfer: Lady Eliza fügt einem benachbarten Monster bis zu 5 Herzen zu, um ebenso viele Herzen zurückzugewinnen."
          },
          {
            "labelEn": "Action: Seduce",
            "labelDe": "Aktion: Verführung",
            "rulesEn": "Seduce: You may choose a hero within 3 spaces of Lady Eliza Farrow and test Eliza's Willpower. If Eliza passes, move the hero 1 space in any direction and the hero is Stunned.",
            "rulesDe": "Verführung: Lady Eliza wählt einen Helden innerhalb von 3 Feldern zu ihr und legt eine Wissen-Probe ab. Wenn sie gelingt, kannst du den Helden beliebig um 1 Feld bewegen. Wenn du ihn bewegst, ist er betäubt."
          },
          {
            "labelEn": "Action: Wail",
            "labelDe": "Aktion: Schrei",
            "rulesEn": "Wail: All heroes within 3 spaces of Lady Eliza Farrow must test Willpower. Each hero that fails suffers 2 Fatigue.",
            "rulesDe": "Schrei: Jeder Held innerhalb von 3 Feldern zu Lady Eliza legt eine Wissen-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 2 Erschöpfung."
          },
          {
            "labelEn": "Surge: Blood Call",
            "labelDe": "Schub: Blutzoll",
            "rulesEn": "Blood Call: Lady Eliza Farrow recovers Hearts equal to the amount of Hearts dealt with this attack (after rolling defense dice).",
            "rulesDe": "Blutzoll: Lady Eliza gewinnt so viel Herzen zurück, wie sie mit diesem Angriff Herz zugefügt hat (nach Abzug der Schildsymbole)."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act2/bg-lady-eliza-farrow-front.png"
      }
    ]
  },
  {
    "id": "lordmerickfarrow",
    "nameEn": "Lord Merick Farrow",
    "nameDe": "Lord Merick Farrow",
    "expansionId": "base",
    "forms": [
      {
        "act": 1,
        "expansionId": "base",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "red"
        ],
        "might": 2,
        "knowledge": 4,
        "willpower": 2,
        "awareness": 3,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 8,
            "defense": [
              "gray"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 11,
            "defense": [
              "gray"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 13,
            "defense": [
              "gray",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Aftershock",
            "labelDe": "Flammenaura",
            "rulesEn": "Aftershock: When an adjacent hero attacks this monster, after the attack is resolved, the hero must test Willpower. If he fails, he suffers 1 Fatigue.",
            "rulesDe": "Flammenaura: Wenn ein benachbarter Held Lord Merick Farrow angreift, legt der Held nach dem Angriff eine Wissen-Probe ab. Wenn sie misslingt, erleidet er 1 Erschöpfung."
          },
          {
            "labelEn": "Action: Ignite",
            "labelDe": "Aktion: Stichflamme",
            "rulesEn": "Ignite: Lord Merick Farrow suffers 1 Heart to perform an attack that targets all adjacent figures. Each figure rolls defense dice separately. Merick may not perform this action if suffering the Hearts would defeat him.",
            "rulesDe": "Stichflamme: Lord Merick Farrow erleidet 1 Herz, um einen Angriff durchzuführen, der auf alle benachbarten Figuren zielt. Jede Figur wirft ihre eigenen Verteidigungswürfel. Lord Merick kann diese Aktion nicht ausführen, wenn er durch den erlittenen Herz besiegt würde."
          },
          {
            "labelEn": "Surge: +1 Heart",
            "labelDe": "Schub: +1 Herz"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act1/bg-lord-merick-farrow-front.png"
      },
      {
        "act": 2,
        "expansionId": "base",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "red",
          "yellow"
        ],
        "might": 2,
        "knowledge": 4,
        "willpower": 2,
        "awareness": 3,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 10,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 12,
            "defense": [
              "gray",
              "gray"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 15,
            "defense": [
              "black",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Aftershock",
            "labelDe": "Flammenaura",
            "rulesEn": "Aftershock: When an adjacent hero attacks this monster, after the attack is resolved, the hero must test Willpower. If he fails, he suffers 1 Fatigue.",
            "rulesDe": "Flammenaura: Wenn ein benachbarter Held Lord Merick Farrow angreift, legt der Held nach dem Angriff eine Wissen-Probe ab. Wenn sie misslingt, erleidet er 1 Erschöpfung."
          },
          {
            "labelEn": "Action: Ignite",
            "labelDe": "Aktion: Stichflamme",
            "rulesEn": "Ignite: Lord Merick Farrow suffers 1 Heart to perform an attack that targets all adjacent figures. Each figure rolls defense dice separately. Merick may not perform this action if suffering the Hearts would defeat him.",
            "rulesDe": "Stichflamme: Lord Merick Farrow erleidet 1 Herz, um einen Angriff durchzuführen, der auf alle benachbarten Figuren zielt. Jede Figur wirft ihre eigenen Verteidigungswürfel. Lord Merick kann diese Aktion nicht ausführen, wenn er durch den erlittenen Herz besiegt würde."
          },
          {
            "labelEn": "Surge: Wither",
            "labelDe": "Schub: Verwelken",
            "rulesEn": "Wither: The target suffers 1 Fatigue.",
            "rulesDe": "Verwelken: Das Ziel erleidet 1 Erschöpfung."
          },
          {
            "labelEn": "Surge: +1 Heart",
            "labelDe": "Schub: +1 Herz"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act2/bg-lord-merick-farrow-front.png"
      }
    ]
  },
  {
    "id": "siralricfarrow",
    "nameEn": "Sir Alric Farrow",
    "nameDe": "Sir Alric Farrow",
    "expansionId": "base",
    "forms": [
      {
        "act": 1,
        "expansionId": "base",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red"
        ],
        "might": 5,
        "knowledge": 1,
        "willpower": 2,
        "awareness": 4,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 10,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 14,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 16,
            "defense": [
              "gray",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Unmovable",
            "labelDe": "Felsenfest",
            "rulesEn": "Unmovable: This monster may choose to ignore any game effect that would force it to move.",
            "rulesDe": "Felsenfest: Sir Alric Farrow kann Effekte ignorieren, die ihn bewegen würden."
          },
          {
            "labelEn": "Action: Overpower",
            "labelDe": "Überwältigen",
            "rulesEn": "Overpower: Sir Alric Farrow performs a move action. Each time he moves into a space adjacent to a hero, Alric may test Might. If he passes, he may trade spaces with that hero and the hero suffers 1 Fatigue.",
            "rulesDe": "Überwältigen: Sir Alric Farrow führt eine Bewegungsaktion aus. Jedes Mal, wenn er ein Nachbarfeld eines Helden betritt, kann er eine Stärke-Probe ablegen. Wenn sie gelingt, kann er mit dem Helden den Platz tauschen; wenn er das tut, erleidet der Held 1 Erschöpfung."
          },
          {
            "labelEn": "Surge: +1 Heart",
            "labelDe": "Schub: +1 Herz"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act1/bg-sir-alric-farrow-front.png"
      },
      {
        "act": 2,
        "expansionId": "base",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red",
          "red"
        ],
        "might": 5,
        "knowledge": 1,
        "willpower": 2,
        "awareness": 4,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 12,
            "defense": [
              "gray",
              "gray"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 15,
            "defense": [
              "black",
              "gray"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 18,
            "defense": [
              "black",
              "gray",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Regeneration 1",
            "labelDe": "Regeneration 1",
            "rulesEn": "Regeneration 1: At the beginning of the overlord player's turn, this monster recovers 1 Heart.",
            "rulesDe": "Regeneration 1: Zu Beginn des Overlordzugs gewinnt Sir Alric Farrow 1 Herz zurück."
          },
          {
            "labelEn": "Unmovable",
            "labelDe": "Felsenfest",
            "rulesEn": "Unmovable: This monster may choose to ignore any game effect that would force it to move.",
            "rulesDe": "Felsenfest: Sir Alric Farrow kann Effekte ignorieren, die ihn bewegen würden."
          },
          {
            "labelEn": "Action: Overpower",
            "labelDe": "Überwältigen",
            "rulesEn": "Overpower: Sir Alric Farrow performs a move action. Each time he moves into a space adjacent to a hero, Alric may test Might. If he passes, he may trade spaces with that hero and the hero suffers 1 Fatigue.",
            "rulesDe": "Überwältigen: Sir Alric Farrow führt eine Bewegungsaktion aus. Jedes Mal, wenn er ein Nachbarfeld eines Helden betritt, kann er eine Stärke-Probe ablegen. Wenn sie gelingt, kann er mit dem Helden den Platz tauschen; wenn er das tut, erleidet der Held 1 Erschöpfung."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act2/bg-sir-alric-farrow-front.png"
      }
    ]
  },
  {
    "id": "splig",
    "nameEn": "Splig",
    "nameDe": "Splig",
    "expansionId": "base",
    "forms": [
      {
        "act": 1,
        "expansionId": "base",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red"
        ],
        "might": 4,
        "knowledge": 3,
        "willpower": 3,
        "awareness": 2,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 7,
            "defense": [
              "brown"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 9,
            "defense": [
              "gray"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 13,
            "defense": [
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Not Me!",
            "labelDe": "Nicht auf mich!",
            "rulesEn": "Not Me!: Each time Splig is attacked, before dice are rolled, test his Awareness. If he passes, a monster adjacent to him becomes the target of the attack. Range and line of sight are still measured to Splig's space.",
            "rulesDe": "Nicht auf mich!: Jedes Mal, wenn Splig angegriffen wird, kann er, bevor gewürfelt wird, eine Gespür-Probe ablegen. Wenn sie gelingt, wählt der Overlord ein Monster auf einem Nachbarfeld als Ziel des Angriffs. Reichweite und Sichtlinie werden weiterhin zu Spligs Feld gemessen."
          },
          {
            "labelEn": "Surge: Knockback",
            "labelDe": "Zurückstoßen",
            "rulesEn": "Knockback: Remove the target from the map, then place him on any empty space within 3 spaces of his original space. He counts as entering that space.",
            "rulesDe": "Zurückstoßen: Nimm das Ziel vom Spielplan und stelle es auf ein leeres Feld innerhalb von 3 Feldern seines ursprünglichen Felds. Der Held betritt dieses Feld."
          },
          {
            "labelEn": "Surge: +1 Heart",
            "labelDe": "Schub: +1 Herz"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act1/bg-splig-front.png"
      },
      {
        "act": 2,
        "expansionId": "base",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red",
          "yellow"
        ],
        "might": 4,
        "knowledge": 3,
        "willpower": 3,
        "awareness": 2,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 10,
            "defense": [
              "gray"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 12,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 16,
            "defense": [
              "gray",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Not Me!",
            "labelDe": "Nicht auf mich!",
            "rulesEn": "Not Me!: Each time Splig is attacked, before dice are rolled, test his Awareness. If he passes, a monster adjacent to him becomes the target of the attack. Range and line of sight are still measured to Splig's space.",
            "rulesDe": "Nicht auf mich!: Jedes Mal, wenn Splig angegriffen wird, kann er, bevor gewürfelt wird, eine Gespür-Probe ablegen. Wenn sie gelingt, wählt der Overlord ein Monster auf einem Nachbarfeld als Ziel des Angriffs. Reichweite und Sichtlinie werden weiterhin zu Spligs Feld gemessen."
          },
          {
            "labelEn": "Action: Promotion",
            "labelDe": "Beförderung",
            "rulesEn": "Promotion: Splig tests Willpower. If he passes, you may replace an adjacent minion monster with a master monster of that type. This may not exceed that monster group limit.",
            "rulesDe": "Beförderung: Splig legt eine Willenskraft-Probe ab. Wenn sie gelingt, kann er ein normales Monster auf einem Nachbarfeld durch ein Elite-Monster desselben Typs aus dem Vorrat ersetzen. Dabei muss die Gruppengröße eingehalten werden."
          },
          {
            "labelEn": "Surge: Knockback",
            "labelDe": "Zurückstoßen",
            "rulesEn": "Knockback: Remove the target from the map, then place him on any empty space within 3 spaces of his original space. He counts as entering that space.",
            "rulesDe": "Zurückstoßen: Nimm das Ziel vom Spielplan und stelle es auf ein leeres Feld innerhalb von 3 Feldern seines ursprünglichen Felds. Der Held betritt dieses Feld."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act2/bg-splig-front.png"
      }
    ]
  },
  {
    "id": "valyndra",
    "nameEn": "Valyndra",
    "nameDe": "Valyndra",
    "expansionId": "lair-of-the-wyrm",
    "forms": [
      {
        "act": 1,
        "expansionId": "lair-of-the-wyrm",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red"
        ],
        "might": 5,
        "knowledge": 2,
        "willpower": 1,
        "awareness": 3,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 12,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 14,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 17,
            "defense": [
              "black",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Hoarder",
            "labelDe": "Habsucht",
            "rulesEn": "Hoarder: When a hero performs a search action, Valyndra may test Awareness. If she passes, she may immediately move up to 2 spaces. Then the hero's turn resumes.",
            "rulesDe": "Habsucht: Wenn ein Held eine Suchaktion ausführt, kann Valyndra eine Gespür-Probe ablegen. Wenn sie gelingt, kann sie sich sofort um bis zu 2 Felder bewegen. Dann setzt der Held seinen Zug fort."
          },
          {
            "labelEn": "Surge: Fire Breath",
            "labelDe": "Feuerodem",
            "rulesEn": "Fire Breath: Starting with the target space, trace a path of 4 spaces in any direction. All figures on this path are affected by this attack. Each figure rolls defense dice separately.",
            "rulesDe": "Feuerodem: Ziehe vom Zielfeld aus einen Pfad von 4 Feldern (inklusive Zielfeld) in beliebiger Richtung. Alle Figuren auf diesen 4 Feldern sind vom Angriff betroffen. Jede Figur wirft ihre eigenen Verteidigungswürfel."
          },
          {
            "labelEn": "Surge: Burn",
            "labelDe": "Brand",
            "rulesEn": "Burn: If this attack deals at least 1 Heart (after the defense roll), the target is Burning.",
            "rulesDe": "Brand: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Erschöpfung), brennt das Ziel."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/lair-of-the-wyrm/act1/lw-valyndra-front.png"
      },
      {
        "act": 2,
        "expansionId": "lair-of-the-wyrm",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red",
          "yellow"
        ],
        "might": 5,
        "knowledge": 2,
        "willpower": 1,
        "awareness": 3,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 15,
            "defense": [
              "gray",
              "gray"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 17,
            "defense": [
              "gray",
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 22,
            "defense": [
              "black",
              "gray",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Hoarder",
            "labelDe": "Habsucht",
            "rulesEn": "Hoarder: When a hero performs a search action, Valyndra may test Awareness. If she passes, she may immediately move up to 2 spaces. Then the hero's turn resumes.",
            "rulesDe": "Habsucht: Wenn ein Held eine Suchaktion ausführt, kann Valyndra eine Gespür-Probe ablegen. Wenn sie gelingt, kann sie sich sofort um bis zu 2 Felder bewegen. Dann setzt der Held seinen Zug fort."
          },
          {
            "labelEn": "Surge: Fire Breath",
            "labelDe": "Feuerodem",
            "rulesEn": "Fire Breath: Starting with the target space, trace a path of 4 spaces in any direction. All figures on this path are affected by this attack. Each figure rolls defense dice separately.",
            "rulesDe": "Feuerodem: Ziehe vom Zielfeld aus einen Pfad von 4 Feldern (inklusive Zielfeld) in beliebiger Richtung. Alle Figuren auf diesen 4 Feldern sind vom Angriff betroffen. Jede Figur wirft ihre eigenen Verteidigungswürfel."
          },
          {
            "labelEn": "Surge: Burn",
            "labelDe": "Brand",
            "rulesEn": "Burn: If this attack deals at least 1 Heart (after the defense roll), the target is Burning.",
            "rulesDe": "Brand: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Erschöpfung), brennt das Ziel."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/lair-of-the-wyrm/act2/lw-valyndra-front.png"
      }
    ]
  },
  {
    "id": "ariad",
    "nameEn": "Ariad",
    "nameDe": "Ariad",
    "expansionId": "labyrinth-of-ruin",
    "forms": [
      {
        "act": 1,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "green"
        ],
        "might": 2,
        "knowledge": 4,
        "willpower": 2,
        "awareness": 4,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 12,
            "defense": [
              "gray"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 14,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 16,
            "defense": [
              "black",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Corrupted",
            "labelDe": "Verdorben",
            "rulesEn": "Corrupted: Each time Ariad performs an attack targeting a Cursed hero, add 1 additional yellow power die to her attack pool for each Cursed hero targeted.",
            "rulesDe": "Verdorben: Für jeden verfluchten Helden auf den Ariad zielt, fügt sie ihrem Angriffswurf 1 gelben Machtwürfel hinzu."
          },
          {
            "labelEn": "Action: Ancient Curse",
            "labelDe": "Aktion: Uralter Fluch",
            "rulesEn": "Ancient Curse: Each hero within 3 spaces of Ariad must test Willpower. Each hero that fails is Cursed.",
            "rulesDe": "Uralter Fluch: Jeder Held innerhalb von 3 Feldern zu Ariad legt eine Wissen-Probe ab. Jeder Held, dessen Probe misslingt, wird verflucht."
          },
          {
            "labelEn": "Surge Surge: +3 Hearts",
            "labelDe": "Schub Schub: +3 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/labyrinth-of-ruin/act1/lr-ariad-front.png"
      },
      {
        "act": 2,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "green",
          "green"
        ],
        "might": 2,
        "knowledge": 4,
        "willpower": 2,
        "awareness": 4,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 20,
            "defense": [
              "black",
              "gray"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 24,
            "defense": [
              "black",
              "black"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 28,
            "defense": [
              "black",
              "gray",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Corrupted",
            "labelDe": "Verdorben",
            "rulesEn": "Corrupted: Each time Ariad performs an attack targeting a Cursed hero, add 1 additional yellow power die to her attack pool for each Cursed hero targeted.",
            "rulesDe": "Verdorben: Für jeden verfluchten Helden auf den Ariad zielt, fügt sie ihrem Angriffswurf 1 gelben Machtwürfel hinzu."
          },
          {
            "labelEn": "Action: Ancient Curse",
            "labelDe": "Aktion: Uralter Fluch",
            "rulesEn": "Ancient Curse: Each hero within 3 spaces of Ariad must test Willpower. Each hero that fails is Cursed.",
            "rulesDe": "Uralter Fluch: Jeder Held innerhalb von 3 Feldern zu Ariad legt eine Wissen-Probe ab. Jeder Held, dessen Probe misslingt, wird verflucht."
          },
          {
            "labelEn": "Action: Cursed Blast",
            "labelDe": "Aktion: Fluchwelle",
            "rulesEn": "Cursed Blast: Perform an attack targeting each Cursed hero in Ariad's line of sight. If insufficient range is rolled for any one target, the entire attack is considered a miss.",
            "rulesDe": "Fluchwelle: Führe einen Angriff durch, der auf alle verfluchten Helden in Ariads Sichtlinie zielt. Wenn die gewürfelte Reichweite für mindestens 1 Ziel nicht reicht, schlägt der ganze Angriff fehl."
          },
          {
            "labelEn": "Surge Surge: +3 Hearts",
            "labelDe": "Schub Schub: +3 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/labyrinth-of-ruin/act2/lr-ariad-front.png"
      }
    ]
  },
  {
    "id": "queenariad",
    "nameEn": "Queen Ariad",
    "nameDe": "Königin Ariad",
    "expansionId": "labyrinth-of-ruin",
    "forms": [
      {
        "act": 2,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red",
          "green"
        ],
        "might": 3,
        "knowledge": 3,
        "willpower": 3,
        "awareness": 3,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 20,
            "defense": [
              "black",
              "gray"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 24,
            "defense": [
              "black",
              "black"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 28,
            "defense": [
              "black",
              "gray",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Corrupted",
            "labelDe": "Verdorben",
            "rulesEn": "Corrupted: Each time Ariad performs an attack targeting a Cursed hero, add 1 additional yellow power die to her attack pool for each Cursed hero targeted.",
            "rulesDe": "Verdorben: Für jeden verfluchten Helden auf den Königin Ariad zielt, fügt sie ihrem Angriffswurf 1 gelben Machtwürfel hinzu."
          },
          {
            "labelEn": "Action: Ancient Curse",
            "labelDe": "Aktion: Uralter Fluch",
            "rulesEn": "Ancient Curse: Each hero within 3 spaces of Ariad must test Willpower. Each hero that fails is Cursed.",
            "rulesDe": "Uralter Fluch: Jeder Held innerhalb von 3 Feldern zu Königin Ariad legt eine Wissen-Probe ab. Jeder Held, dessen Probe misslingt, wird verflucht."
          },
          {
            "labelEn": "Action: Pincer Attack",
            "labelDe": "Aktion: Zangenangriff",
            "rulesEn": "Pincer Attack: Perform an attack targeting up to 2 heroes adjacent to this monster. 1 attack roll is made but each hero rolls defense dice separately. Each target that suffers at least 1 Heart from this attack (after the defense roll) is Immobilized.",
            "rulesDe": "Zangenangriff: Führe einen Angriff gegen bis zu 2 zu diesem Monster benachbarte Helden durch. Du machst nur 1 Angriffswurf, aber jeder Held macht seinen eigenen Verteidigungswurf. Jeder Held, der durch diesen Angriff mindestens 1 Herz erleidet (nach Verrechnung der Schildsymbole), wird gelähmt."
          },
          {
            "labelEn": "Surge Surge: +3 Hearts",
            "labelDe": "Schub Schub: +3 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/labyrinth-of-ruin/act2/lr-queen-ariad-front.png"
      }
    ]
  },
  {
    "id": "raythen",
    "nameEn": "Raythen",
    "nameDe": "Raythen",
    "expansionId": "labyrinth-of-ruin",
    "forms": [
      {
        "act": 2,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "red",
          "green"
        ],
        "might": 3,
        "knowledge": 3,
        "willpower": 3,
        "awareness": 3,
        "perPlayer": {
          "p2": {
            "speed": 5,
            "health": 8,
            "defense": [
              "brown"
            ]
          },
          "p3": {
            "speed": 5,
            "health": 10,
            "defense": [
              "gray"
            ]
          },
          "p4": {
            "speed": 5,
            "health": 12,
            "defense": [
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Opportunist",
            "labelDe": "Opportunist",
            "rulesEn": "Opportunist: Each of Raythen's attacks gains 1 Surge for each adjacent Immobilized hero and 2 Surges for each adjacent Stunned hero.",
            "rulesDe": "Opportunist: Jeder Angriff Raythens hat pro gelähmtem Helden auf einem Nachbarfeld +1 Schub und pro betäubtem Helden auf einem Nachbarfeld +2 Schub."
          },
          {
            "labelEn": "Action: Pilfer",
            "labelDe": "Langfinger",
            "rulesEn": "Pilfer: If Raythen is adjacent to a search token, the overlord may look at the top card of the Search deck. Then he may place it at the top or the bottom of the deck.",
            "rulesDe": "Langfinger: Wenn Raythen auf einem Nachbarfeld eines Suchmarkers steht, darf der Overlord sich die oberste Karte des Suchstapels ansehen. Er darf sie dann auf oder unter den Stapel legen."
          },
          {
            "labelEn": "Surge: Stun",
            "labelDe": "Betäubung",
            "rulesEn": "Stun: If this attack deals at least 1 Heart (after the defense roll), the target is Stunned.",
            "rulesDe": "Betäubung: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Erschöpfung), wird das Ziel betäubt."
          },
          {
            "labelEn": "Surge Surge: +3 Hearts",
            "labelDe": "Schub Schub: +3 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/labyrinth-of-ruin/act2/lr-raythen-front.png"
      }
    ]
  },
  {
    "id": "serena",
    "nameEn": "Serena",
    "nameDe": "Serena",
    "expansionId": "labyrinth-of-ruin",
    "forms": [
      {
        "act": 2,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red",
          "green"
        ],
        "might": 3,
        "knowledge": 3,
        "willpower": 3,
        "awareness": 3,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 8,
            "defense": [
              "brown"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 10,
            "defense": [
              "gray"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 10,
            "defense": [
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Strong Spirit",
            "labelDe": "Starker Geist",
            "rulesEn": "Strong Spirit: Serena cannot be Cursed or Poisoned.",
            "rulesDe": "Starker Geist: Serena kann weder verflucht werden noch erkranken."
          },
          {
            "labelEn": "Action: Miasma",
            "labelDe": "Pesthauch",
            "rulesEn": "Miasma: Each hero within 3 spaces of Serena must test Willpower. Each hero that fails suffers 1 Heart and 1 Fatigue.",
            "rulesDe": "Pesthauch: Jeder Held innerhalb von 3 Feldern zu Serena legt eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 1 Herz und 1 Erschöpfung."
          },
          {
            "labelEn": "Surge: +2 Hearts, Curse",
            "labelDe": "Fluch",
            "rulesEn": "Curse: If this attack deals at least 1 Heart (after the defense roll), the target is Cursed.",
            "rulesDe": "Fluch: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Erschöpfung), wird das Ziel verflucht."
          },
          {
            "labelEn": "Surge: +2 Hearts, Disease",
            "labelDe": "Krankheit",
            "rulesEn": "Disease: If this attack deals at least 1 Heart (after the defense roll), the target is Diseased.",
            "rulesDe": "Krankheit: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Erschöpfung), erkrankt das Ziel."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/labyrinth-of-ruin/act2/lr-serena-front.png"
      }
    ]
  },
  {
    "id": "bolgoreth",
    "nameEn": "Bol'Goreth",
    "nameDe": "Bol'Goreth",
    "expansionId": "the-trollfens",
    "forms": [
      {
        "act": 1,
        "expansionId": "the-trollfens",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red"
        ],
        "might": 6,
        "knowledge": 1,
        "willpower": 2,
        "awareness": 2,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 12,
            "defense": [
              "gray"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 14,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 18,
            "defense": [
              "gray",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Reach",
            "labelDe": "Weitreichend",
            "rulesEn": "Reach: Bol'Goreth may attack targets up to 2 spaces away.",
            "rulesDe": "Weitreichend: Bol'Goreth kann mit einem Nahkampfangriff bis zu 2 Felder weit angreifen."
          },
          {
            "labelEn": "Action: Rampage",
            "labelDe": "Aktion: Tobsucht",
            "rulesEn": "Rampage: Bol'Goreth performs a move action followed by an attack action. This attack affects each figure within 2 spaces of each space he entered during this movement. After this attack is resolved, Bol'Goreth is Stunned and Weakened.",
            "rulesDe": "Tobsucht: Bol'Goreth führt eine Bewegungsaktion und anschließend eine Angriffsaktion aus. Dieser Angriff betrifft jede Figur innerhalb von 2 Feldern jedes Feldes, das er während dieser Bewegung betritt. Nach diesem Angriff ist Bol'Goreth betäubt und geschwächt."
          },
          {
            "labelEn": "Surge Surge: +1 Heart",
            "labelDe": "Schub Schub: +1 Herz"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/the-trollfens/act1/tf-bolgoreth-front.png"
      },
      {
        "act": 2,
        "expansionId": "the-trollfens",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red",
          "red"
        ],
        "might": 6,
        "knowledge": 1,
        "willpower": 2,
        "awareness": 2,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 16,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 19,
            "defense": [
              "gray",
              "gray"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 23,
            "defense": [
              "gray",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Reach",
            "labelDe": "Weitreichend",
            "rulesEn": "Reach: Bol'Goreth may attack targets up to 2 spaces away.",
            "rulesDe": "Weitreichend: Bol'Goreth kann mit einem Nahkampfangriff bis zu 2 Felder weit angreifen."
          },
          {
            "labelEn": "Resilient",
            "labelDe": "Robust",
            "rulesEn": "Resilient: At the start of the overlord player's turn, discard 1 Condition token from Bol'Goreth.",
            "rulesDe": "Robust: Wirf zu Beginn des Overlordzuges 1 Zustandsmarker von Bol'Goreth ab."
          },
          {
            "labelEn": "Action: Rampage",
            "labelDe": "Aktion: Tobsucht",
            "rulesEn": "Rampage: Bol'Goreth performs a move action followed by an attack action. This attack affects each figure within 2 spaces of each space he entered during this movement. After this attack is resolved, Bol'Goreth is Stunned and Weakened.",
            "rulesDe": "Tobsucht: Bol'Goreth führt eine Bewegungsaktion und anschließend eine Angriffsaktion aus. Dieser Angriff betrifft jede Figur innerhalb von 2 Feldern jedes Feldes, das er während dieser Bewegung betritt. Nach diesem Angriff ist Bol'Goreth betäubt und geschwächt."
          },
          {
            "labelEn": "Surge Surge: +2 Hearts",
            "labelDe": "Schub Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/the-trollfens/act2/tf-bolgoreth-front.png"
      }
    ]
  },
  {
    "id": "skarn",
    "nameEn": "Skarn",
    "nameDe": "Skarn",
    "expansionId": "manor-of-ravens",
    "forms": [
      {
        "act": 1,
        "expansionId": "manor-of-ravens",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "yellow"
        ],
        "might": 4,
        "knowledge": 3,
        "willpower": 4,
        "awareness": 1,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 10,
            "defense": [
              "black"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 13,
            "defense": [
              "gray",
              "gray"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 18,
            "defense": [
              "gray",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Flail",
            "labelDe": "Peitscharme",
            "rulesEn": "Flail: When attacking Skarn may target 2 separate heroes. It makes 1 attack roll, and each hero rolls defense dice separately.",
            "rulesDe": "Peitscharme: Skarn kann mit einem Angriff zwei verschiedene Helden ziehen. Er macht nur einen Angriffswurf, aber jeder Held legt seinen eigenen Verteidigungswurf ab."
          },
          {
            "labelEn": "Energy Drain 3",
            "labelDe": "Kraftentzug 3",
            "rulesEn": "Energy Drain X: If a hero suffers Hearts as the result of an attack from Skarn, you may cause that hero to suffer up to X Hearts as Fatigue instead.",
            "rulesDe": "Kraftentzug 3: Wenn ein Held durch einen Angriff von Skarn Herz erleidet, kannst du ihn von max bis zu 3 als Erschöpfung erleiden lassen (statt Herz)."
          },
          {
            "labelEn": "Surge: Mend 3",
            "labelDe": "Nachwachsen 3",
            "rulesEn": "Mend X: Skarn recovers X Hearts.",
            "rulesDe": "Nachwachsen: Skarn gewinnt 3 Herz zurück."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/manor-of-ravens/act1/mr-skarn-front.png"
      },
      {
        "act": 2,
        "expansionId": "manor-of-ravens",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red",
          "yellow"
        ],
        "might": 4,
        "knowledge": 3,
        "willpower": 4,
        "awareness": 1,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 16,
            "defense": [
              "gray",
              "gray"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 19,
            "defense": [
              "black",
              "gray"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 24,
            "defense": [
              "black",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Energy Drain 4",
            "labelDe": "Kraftentzug 4",
            "rulesEn": "Energy Drain X: If a hero suffers Hearts as the result of an attack from Skarn, you may cause that hero to suffer up to X Hearts as Fatigue instead.",
            "rulesDe": "Kraftentzug 4: Wenn ein Held durch einen Angriff von Skarn Herzen erleidet, kannst du ihn von den zugefügten Herzen bis zu 4 als Erschöpfung erleiden lassen (statt Herzen)."
          },
          {
            "labelEn": "Action: Thrash",
            "labelDe": "Dreschen",
            "rulesEn": "Thrash: Perform an attack. This attack affects each figure adjacent to Skarn. Each figure rolls defense dice separately.",
            "rulesDe": "Dreschen: Führe einen Angriff durch. Dieser Angriff betrifft alle Figuren auf Skarns Nachbarfeldern. Jede Figur wirft ihre eigenen Verteidigungswürfel."
          },
          {
            "labelEn": "Surge: Mend 4",
            "labelDe": "Nachwachsen 4",
            "rulesEn": "Mend X: Skarn recovers X Hearts.",
            "rulesDe": "Nachwachsen 4: Skarn gewinnt 4 Herzen zurück."
          },
          {
            "labelEn": "Surge: +1 Heart",
            "labelDe": "Schub: +1 Herz"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/manor-of-ravens/act2/mr-skarn-front.png"
      }
    ]
  },
  {
    "id": "mirklace",
    "nameEn": "Mirklace",
    "nameDe": "Sinistrael",
    "expansionId": "shadow-of-nerekhall",
    "forms": [
      {
        "act": 1,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "red",
          "green"
        ],
        "might": 3,
        "knowledge": 5,
        "willpower": 3,
        "awareness": 2,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 13,
            "defense": [
              "black"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 16,
            "defense": [
              "black"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 19,
            "defense": [
              "black",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Aura 1",
            "labelDe": "Aura X",
            "rulesEn": "Aura X: Each time a hero enters a space adjacent to Mirklace, that hero suffers X Hearts.",
            "rulesDe": "Aura X: Jedes Mal, wenn ein Held ein Nachbarfeld Sinistraels betritt, erleidet er X Herz."
          },
          {
            "labelEn": "Action: Split Earth",
            "labelDe": "Erdspalte",
            "rulesEn": "Split Earth: Starting with a space adjacent to Mirklace, trace a path of 4 spaces in any direction. Each figure on this path suffers 1 Heart and moves to an empty adjacent space of your choice. Limit once per round.",
            "rulesDe": "Erdspalte: Ziehe von einem Nachbarfeld Sinistraels aus einen Pfad von 4 Feldern in beliebiger Richtung. Jede Figur auf diesem Pfad erleidet 1 Herz und bewegt sich auf ein leeres Nachbarfeld deiner Wahl. (Höchstens ein Mal pro Runde)."
          },
          {
            "labelEn": "Surge Surge: Blast",
            "labelDe": "Explosion",
            "rulesEn": "Blast: This attack affects all figures adjacent to the target space.",
            "rulesDe": "Explosion: Dieser Angriff betrifft auch alle Figuren auf Nachbarfeldern des Ziels."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/shadow-of-nerekhall/act1/sn-mirklace-front.png"
      },
      {
        "act": 2,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "red",
          "yellow",
          "green"
        ],
        "might": 3,
        "knowledge": 5,
        "willpower": 3,
        "awareness": 2,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 18,
            "defense": [
              "black",
              "brown"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 21,
            "defense": [
              "black",
              "brown"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 24,
            "defense": [
              "black",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Aura 2",
            "labelDe": "Aura X",
            "rulesEn": "Aura X: Each time a hero enters a space adjacent to Mirklace, that hero suffers X Hearts.",
            "rulesDe": "Aura X: Jedes Mal, wenn ein Held ein Nachbarfeld Sinistraels betritt, erleidet er X Herzen."
          },
          {
            "labelEn": "Action: Split Earth",
            "labelDe": "Erdspalte",
            "rulesEn": "Split Earth: Starting with a space adjacent to Mirklace, trace a path of 4 spaces in any direction. Each figure on this path suffers 1 Heart and moves to an empty adjacent space of your choice. Limit once per round.",
            "rulesDe": "Erdspalte: Ziehe von einem Nachbarfeld Sinistraels aus einen Pfad von 4 Feldern in beliebiger Richtung. Jede Figur auf diesem Pfad erleidet 1 Herz und bewegt sich auf ein leeres Nachbarfeld deiner Wahl. (Höchstens ein Mal pro Runde)."
          },
          {
            "labelEn": "Sorcery 3",
            "labelDe": "Hexerei X",
            "rulesEn": "Sorcery X: After making an attack roll, Mirklace may convert up to X range to Hearts, or up to X Hearts to range.",
            "rulesDe": "Hexerei X: Nach einem eigenen Angriffswurf kann Sinistrael bis zu X Reichweite in Herzen oder bis zu X Herzen in Reichweite umwandeln."
          },
          {
            "labelEn": "Surge Surge: Blast",
            "labelDe": "Explosion",
            "rulesEn": "Blast: This attack affects all figures adjacent to the target space.",
            "rulesDe": "Explosion: Dieser Angriff betrifft auch alle Figuren auf Nachbarfeldern des Ziels."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/shadow-of-nerekhall/act2/sn-mirklace-front.png"
      }
    ]
  },
  {
    "id": "garganmirklace",
    "nameEn": "Gargan Mirklace",
    "nameDe": "Sinistrael",
    "expansionId": "shadow-of-nerekhall",
    "forms": [
      {
        "act": 1,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "red",
          "green"
        ],
        "might": 3,
        "knowledge": 5,
        "willpower": 3,
        "awareness": 2,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 13,
            "defense": [
              "black"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 16,
            "defense": [
              "black"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 19,
            "defense": [
              "black",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Aura 1",
            "labelDe": "Aura X",
            "rulesEn": "Aura X: Each time a hero enters a space adjacent to Mirklace, that hero suffers X Hearts.",
            "rulesDe": "Aura X: Jedes Mal, wenn ein Held ein Nachbarfeld Sinistraels betritt, erleidet er X Herz."
          },
          {
            "labelEn": "Action: Split Earth",
            "labelDe": "Erdspalte",
            "rulesEn": "Split Earth: Starting with a space adjacent to Mirklace, trace a path of 4 spaces in any direction. Each figure on this path suffers 1 Heart and moves to an empty adjacent space of your choice. Limit once per round.",
            "rulesDe": "Erdspalte: Ziehe von einem Nachbarfeld Sinistraels aus einen Pfad von 4 Feldern in beliebiger Richtung. Jede Figur auf diesem Pfad erleidet 1 Herz und bewegt sich auf ein leeres Nachbarfeld deiner Wahl. (Höchstens ein Mal pro Runde)."
          },
          {
            "labelEn": "Surge Surge: Blast",
            "labelDe": "Explosion",
            "rulesEn": "Blast: This attack affects all figures adjacent to the target space.",
            "rulesDe": "Explosion: Dieser Angriff betrifft auch alle Figuren auf Nachbarfeldern des Ziels."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/shadow-of-nerekhall/act1/sn-mirklace-front.png"
      },
      {
        "act": 2,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "red",
          "yellow",
          "green"
        ],
        "might": 3,
        "knowledge": 5,
        "willpower": 3,
        "awareness": 2,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 18,
            "defense": [
              "black",
              "brown"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 21,
            "defense": [
              "black",
              "brown"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 24,
            "defense": [
              "black",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Aura 2",
            "labelDe": "Aura X",
            "rulesEn": "Aura X: Each time a hero enters a space adjacent to Mirklace, that hero suffers X Hearts.",
            "rulesDe": "Aura X: Jedes Mal, wenn ein Held ein Nachbarfeld Sinistraels betritt, erleidet er X Herzen."
          },
          {
            "labelEn": "Action: Split Earth",
            "labelDe": "Erdspalte",
            "rulesEn": "Split Earth: Starting with a space adjacent to Mirklace, trace a path of 4 spaces in any direction. Each figure on this path suffers 1 Heart and moves to an empty adjacent space of your choice. Limit once per round.",
            "rulesDe": "Erdspalte: Ziehe von einem Nachbarfeld Sinistraels aus einen Pfad von 4 Feldern in beliebiger Richtung. Jede Figur auf diesem Pfad erleidet 1 Herz und bewegt sich auf ein leeres Nachbarfeld deiner Wahl. (Höchstens ein Mal pro Runde)."
          },
          {
            "labelEn": "Sorcery 3",
            "labelDe": "Hexerei X",
            "rulesEn": "Sorcery X: After making an attack roll, Mirklace may convert up to X range to Hearts, or up to X Hearts to range.",
            "rulesDe": "Hexerei X: Nach einem eigenen Angriffswurf kann Sinistrael bis zu X Reichweite in Herzen oder bis zu X Herzen in Reichweite umwandeln."
          },
          {
            "labelEn": "Surge Surge: Blast",
            "labelDe": "Explosion",
            "rulesEn": "Blast: This attack affects all figures adjacent to the target space.",
            "rulesDe": "Explosion: Dieser Angriff betrifft auch alle Figuren auf Nachbarfeldern des Ziels."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/shadow-of-nerekhall/act2/sn-mirklace-front.png"
      }
    ]
  },
  {
    "id": "rylanolliven",
    "nameEn": "Rylan Olliven",
    "nameDe": "Rylan Olliven",
    "expansionId": "shadow-of-nerekhall",
    "forms": [
      {
        "act": 1,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "green",
          "green"
        ],
        "might": 1,
        "knowledge": 4,
        "willpower": 3,
        "awareness": 3,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 8,
            "defense": [
              "gray"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 10,
            "defense": [
              "gray"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 12,
            "defense": [
              "black"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Action: Influence",
            "labelDe": "Beeinflussen",
            "rulesEn": "Influence: Choose 1 figure adjacent to Rylan Olliven. That figure immediately performs one action of the controlling player's choice. Limit once per round.",
            "rulesDe": "Beeinflussen: Wähle 1 Figur auf einem Nachbarfeld Rylans. Die Figur führt sofort eine Aktion nach Wahl des Spielers der gewählten Figur aus. (Höchstens ein Mal pro Runde)."
          },
          {
            "labelEn": "Surge Surge: Subdue",
            "labelDe": "Bezwingen",
            "rulesEn": "Subdue: If this attack deals at least 1 Heart, choose 1 condition. The target suffers the chosen condition.",
            "rulesDe": "Bezwingen: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Erschöpfung), wähle 1 Zustand. Das Ziel erhält diesen Zustand."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/shadow-of-nerekhall/act1/sn-rylan-olliven-front.png"
      },
      {
        "act": 2,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "red",
          "green",
          "green"
        ],
        "might": 1,
        "knowledge": 4,
        "willpower": 3,
        "awareness": 3,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 12,
            "defense": [
              "black"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 14,
            "defense": [
              "gray",
              "gray"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 17,
            "defense": [
              "gray",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Precise",
            "labelDe": "Präzise",
            "rulesEn": "Precise: Adjacent figures do not block Rylan Olliven's line of sight.",
            "rulesDe": "Präzise: Figuren auf Rylans Nachbarfeldern blockieren seine Sichtlinie nicht."
          },
          {
            "labelEn": "Action: Influence",
            "labelDe": "Beeinflussen",
            "rulesEn": "Influence: Choose 1 figure adjacent to Rylan Olliven. That figure immediately performs one action of the controlling player's choice. Limit once per round.",
            "rulesDe": "Beeinflussen: Wähle 1 Figur auf einem Nachbarfeld Rylans. Die Figur führt sofort eine Aktion nach Wahl des Spielers der gewählten Figur aus. (Höchstens ein Mal pro Runde)."
          },
          {
            "labelEn": "Surge Surge: Subdue",
            "labelDe": "Bezwingen",
            "rulesEn": "Subdue: If this attack deals at least 1 Heart, choose 1 condition. The target suffers the chosen condition.",
            "rulesDe": "Bezwingen: Wenn dieser Angriff mindestens 1 Herz zufügt (nach Verrechnung der Erschöpfung), wähle 1 Zustand. Das Ziel erhält diesen Zustand."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/shadow-of-nerekhall/act2/sn-rylan-olliven-front.png"
      }
    ]
  },
  {
    "id": "tristayneolliven",
    "nameEn": "Tristayne Olliven",
    "nameDe": "Tristayne Olliven",
    "expansionId": "shadow-of-nerekhall",
    "forms": [
      {
        "act": 1,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "red"
        ],
        "might": 2,
        "knowledge": 4,
        "willpower": 4,
        "awareness": 2,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 10,
            "defense": [
              "gray"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 12,
            "defense": [
              "gray"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 14,
            "defense": [
              "black"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Ravage",
            "labelDe": "Aggressiv",
            "rulesEn": "Ravage: Both of Tristayne Olliven's actions on a turn may be attack actions.",
            "rulesDe": "Aggressiv: Tristayne Olliven kann in seinem Zug beide Aktionen für Angriffe verwenden."
          },
          {
            "labelEn": "Chaotic Energy",
            "labelDe": "Chaosenergie",
            "rulesEn": "Chaotic Energy: Each time Tristayne Olliven performs an attack, before dice are rolled, he may suffer up to 3 Hearts. This attack deals additional Hearts equal to the Hearts suffered. Tristayne cannot do this if suffering the Hearts would defeat him.",
            "rulesDe": "Chaosenergie: Vor der Durchführung jedes eigenen Angriffswurfes kann Tristayne bis zu 3 Herzen erleiden. Der Angriff fügt so viele Herzen zusätzlich zu, wie Tristayne Herzen erlitten hat. Tristayne kann diese Aktion nicht ausführen, wenn er durch den erlittenen Herzen besiegt würde."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/shadow-of-nerekhall/act1/sn-tristayne-olliven-front.png"
      },
      {
        "act": 2,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "red",
          "yellow"
        ],
        "might": 2,
        "knowledge": 4,
        "willpower": 4,
        "awareness": 2,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 12,
            "defense": [
              "black"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 15,
            "defense": [
              "gray",
              "gray"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 18,
            "defense": [
              "black",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Ravage",
            "labelDe": "Aggressiv",
            "rulesEn": "Ravage: Both of Tristayne Olliven's actions on a turn may be attack actions.",
            "rulesDe": "Aggressiv: Tristayne Olliven kann in seinem Zug beide Aktionen für Angriffe verwenden."
          },
          {
            "labelEn": "Soul Siphon",
            "labelDe": "Seelensog",
            "rulesEn": "Soul Siphon: Each time Tristayne Olliven suffers Hearts from any source other than an attack, you may choose an adjacent monster. That monster suffers that amount of Hearts instead.",
            "rulesDe": "Seelensog: Jedes Mal, wenn Tristayne aus irgendeinem Grund Herzen erleidet (außer von einem Angriff), kann er stattdessen ein Monster auf einem Nachbarfeld diese Herzen erleiden lassen."
          },
          {
            "labelEn": "Chaotic Energy",
            "labelDe": "Chaosenergie",
            "rulesEn": "Chaotic Energy: Each time Tristayne Olliven performs an attack, before dice are rolled, he may suffer up to 3 Hearts. This attack deals additional Hearts equal to the Hearts suffered. Tristayne cannot do this if suffering the Hearts would defeat him.",
            "rulesDe": "Chaosenergie: Vor der Durchführung jedes eigenen Angriffswurfes kann Tristayne bis zu 3 Herzen erleiden. Der Angriff fügt so viele Herzen zusätzlich zu, wie Tristayne Herzen erlitten hat. Tristayne kann diese Aktion nicht ausführen, wenn er durch den erlittenen Herzen besiegt würde."
          },
          {
            "labelEn": "Surge: +3 Hearts",
            "labelDe": "Schub: +3 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/shadow-of-nerekhall/act2/sn-tristayne-olliven-front.png"
      }
    ]
  },
  {
    "id": "verminous",
    "nameEn": "Verminous",
    "nameDe": "Der Rattenkönig",
    "expansionId": "shadow-of-nerekhall",
    "forms": [
      {
        "act": 1,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "yellow",
          "green"
        ],
        "might": 2,
        "knowledge": 3,
        "willpower": 2,
        "awareness": 5,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 8,
            "defense": [
              "gray"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 10,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 13,
            "defense": [
              "gray",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Stealthy",
            "labelDe": "Tarnung",
            "rulesEn": "Stealthy: Each attack that targets Verminous must roll 3 additional range beyond the normally required amount or the attack is a miss.",
            "rulesDe": "Tarnung: Jeder Angriff, der auf den Rattenkönig zielt, muss 3 Reichweite mehr haben als normal; sonst gilt er als Fehlschlag."
          },
          {
            "labelEn": "Surge: Scheme",
            "labelDe": "Schub: Ränke",
            "rulesEn": "Scheme: Discard 1 Overlord card from your hand to draw 1 Overlord card.",
            "rulesDe": "Ränke: Wirf 1 Overlordkarte aus der Hand ab, um 1 neue zu ziehen."
          },
          {
            "labelEn": "Surge Surge: +2 Hearts",
            "labelDe": "Schub Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/shadow-of-nerekhall/act1/sn-verminous-front.png"
      },
      {
        "act": 2,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "yellow",
          "green",
          "green"
        ],
        "might": 2,
        "knowledge": 3,
        "willpower": 2,
        "awareness": 5,
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 11,
            "defense": [
              "gray",
              "brown"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 13,
            "defense": [
              "black",
              "brown"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 17,
            "defense": [
              "black",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Master Plan",
            "labelDe": "Großer Plan",
            "rulesEn": "Master Plan: Each time you play an Overlord card, choose one hero within 3 spaces of Verminous. That hero suffers 1 Heart.",
            "rulesDe": "Großer Plan: Jedes Mal, wenn du eine Overlordkarte spielst, kannst du 1 Helden innerhalb von 3 Feldern zum Rattenkönig auswählen. Dieser Held erleidet 1 Herz."
          },
          {
            "labelEn": "Stealthy",
            "labelDe": "Tarnung",
            "rulesEn": "Stealthy: Each attack that targets Verminous must roll 3 additional range beyond the normally required amount or the attack is a miss.",
            "rulesDe": "Tarnung: Jeder Angriff, der auf den Rattenkönig zielt, muss 3 Reichweite mehr haben als normal; sonst gilt er als Fehlschlag."
          },
          {
            "labelEn": "Surge: Scheme",
            "labelDe": "Schub: Ränke",
            "rulesEn": "Scheme: Discard 1 Overlord card from your hand to draw 1 Overlord card.",
            "rulesDe": "Ränke: Wirf 1 Overlordkarte aus der Hand ab, um 1 neue zu ziehen."
          },
          {
            "labelEn": "Surge Surge: +3 Hearts",
            "labelDe": "Schub Schub: +3 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/shadow-of-nerekhall/act2/sn-verminous-front.png"
      }
    ]
  },
  {
    "id": "ardusixerebus",
    "nameEn": "Ardus Ix'Erebus",
    "nameDe": "Ardus Ix'Erebus",
    "expansionId": "mists-of-bilehall",
    "forms": [
      {
        "act": 1,
        "expansionId": "mists-of-bilehall",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red"
        ],
        "might": 5,
        "knowledge": 2,
        "willpower": 1,
        "awareness": 4,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 12,
            "defense": [
              "black"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 14,
            "defense": [
              "black",
              "brown"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 17,
            "defense": [
              "black",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Flanking",
            "labelDe": "Flankenangriff",
            "rulesEn": "Flanking: Each time Ardus Ix'Erebus performs an attack, he may choose 1 monster with the Cursed monster trait adjacent to the target. During that attack, Ardus Ix'Erebus may use the Surge abilities of that monster.",
            "rulesDe": "Flankenangriff: Jedes Mal wenn Ardus Ix'Erebus einen Angriff ausführt, darf er 1 Monster mit dem Monstermerkmal Verflucht wählen, das zu dem Ziel benachbart ist. In diesem Angriff darf er die Aktion-Fähigkeiten dieses Monsters benutzen."
          },
          {
            "labelEn": "Fury",
            "labelDe": "Zorn",
            "rulesEn": "Fury: Each time Ardus Ix'Erebus performs an attack, after rolling dice, he may test Might. If he passes, add 1 Surge to the results. If he fails, that attack is a miss.",
            "rulesDe": "Zorn: Jedes Mal wenn Ardus Ix'Erebus einen Angriff ausführt, darf er nach dem Würfelwurf eine Stärke-Probe ablegen. Wenn sie gelingt, wird dem Ergebnis 1 Schub hinzugefügt. Wenn sie misslingt, ist der Angriff ein Fehlschlag."
          },
          {
            "labelEn": "Surge: Pierce 1",
            "labelDe": "Schub: Durchbohren X",
            "rulesEn": "Pierce X: This attack ignores X Shields on the defense dice.",
            "rulesDe": "Durchbohren X: Dieser Angriff ignoriert X Schildsymbole des Verteidigers."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/mists-of-bilehall/act1/mb-ardus-ixerebus-front.png"
      },
      {
        "act": 2,
        "expansionId": "the-chains-that-rust",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red",
          "red"
        ],
        "might": 5,
        "knowledge": 2,
        "willpower": 1,
        "awareness": 4,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 13,
            "defense": [
              "black",
              "brown"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 16,
            "defense": [
              "black",
              "gray"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 19,
            "defense": [
              "black",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Flanking",
            "labelDe": "Flankenangriff",
            "rulesEn": "Flanking: Each time Ardus Ix'Erebus performs an attack, he may choose 1 monster with the Cursed monster trait adjacent to the target. During that attack, Ardus Ix'Erebus may use the Surge abilities of that monster.",
            "rulesDe": "Flankenangriff: Jedes Mal wenn Ardus Ix'Erebus einen Angriff ausführt, darf er 1 Monster mit dem Monstermerkmal Verflucht wählen, das zu dem Ziel benachbart ist. In diesem Angriff darf er die Aktion-Fähigkeiten dieses Monsters benutzen."
          },
          {
            "labelEn": "Fury",
            "labelDe": "Zorn",
            "rulesEn": "Fury: Each time Ardus Ix'Erebus performs an attack, after rolling dice, he may test Might. If he passes, add 1 Surge to the results. If he fails, that attack is a miss.",
            "rulesDe": "Zorn: Jedes Mal wenn Ardus Ix'Erebus einen Angriff ausführt, darf er nach dem Würfelwurf eine Stärke-Probe ablegen. Wenn sie gelingt, wird dem Ergebnis 1 Schub hinzugefügt. Wenn sie misslingt, ist der Angriff ein Fehlschlag."
          },
          {
            "labelEn": "Action: Rally",
            "labelDe": "Aktion: Sammeln",
            "rulesEn": "Rally: Each monster within 3 spaces of Ardus Ix'Erebus discards 1 condition.",
            "rulesDe": "Sammeln: Jedes Monster innerhalb von 3 Feldern zu Ardus Ix'Erebus wirft 1 Zustand ab."
          },
          {
            "labelEn": "Surge: Pierce 1",
            "labelDe": "Schub: Durchbohren X",
            "rulesEn": "Pierce X: This attack ignores X Shields on the defense dice.",
            "rulesDe": "Durchbohren X: Dieser Angriff ignoriert X Schildsymbole des Verteidigers."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/the-chains-that-rust/act2/cr-ardus-ixerebus-front.png"
      }
    ]
  },
  {
    "id": "kyndrithul",
    "nameEn": "Kyndrithul",
    "nameDe": "Kyndrithul",
    "expansionId": "mists-of-bilehall",
    "forms": [
      {
        "act": 1,
        "expansionId": "mists-of-bilehall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow"
        ],
        "might": 3,
        "knowledge": 4,
        "willpower": 4,
        "awareness": 1,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 11,
            "defense": [
              "gray"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 13,
            "defense": [
              "black"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 16,
            "defense": [
              "black"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Bloodlines",
            "labelDe": "Blutlinien",
            "rulesEn": "Bloodlines: Add 1 Shield to Kyndrithul's defense results for each knocked-out hero.",
            "rulesDe": "Blutlinien: Füge für jeden niedergestreckten Held 1 Schildsymbol zu Kyndrithuls Verteidigung hinzu."
          },
          {
            "labelEn": "Sorcery 3",
            "labelDe": "Hexerei X",
            "rulesEn": "Sorcery X: After making an attack roll, Kyndrithul may convert up to X range to Hearts, or up to X Hearts to range.",
            "rulesDe": "Hexerei X: Nach seinem Angriffswurf darf Kyndrithul bis zu X Reichweite in Herzen oder bis zu X Herzen in Reichweite umwandeln."
          },
          {
            "labelEn": "Surge: Bone Splinter",
            "labelDe": "Schub: Knochensplitter",
            "rulesEn": "Bone Splinter: Each figure adjacent to the target suffers 2 Hearts.",
            "rulesDe": "Knochensplitter: Jede zu dem Ziel benachbarte Figur erleidet 2 Herzen."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/mists-of-bilehall/act1/mb-kyndrithul-front.png"
      },
      {
        "act": 2,
        "expansionId": "the-chains-that-rust",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow",
          "yellow"
        ],
        "might": 3,
        "knowledge": 4,
        "willpower": 4,
        "awareness": 1,
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 13,
            "defense": [
              "black"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 15,
            "defense": [
              "black",
              "brown"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 19,
            "defense": [
              "black",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Bloodlines",
            "labelDe": "Blutlinien",
            "rulesEn": "Bloodlines: Add 1 Shield to Kyndrithul's defense results for each knocked-out hero.",
            "rulesDe": "Blutlinien: Füge für jeden niedergestreckten Held 1 Schildsymbol zu Kyndrithuls Verteidigung hinzu."
          },
          {
            "labelEn": "Enthrall",
            "labelDe": "Bezaubern",
            "rulesEn": "Enthrall: At the start of Kyndrithul's activation, you may choose any number of heroes in his line of sight to test Willpower. If none of the heroes pass, perform an attack with each chosen hero as if it were a monster.",
            "rulesDe": "Bezaubern: Zu Beginn von Kyndrithuls Aktivierung darfst du eine beliebige Anzahl Helden in seiner Sichtlinie auswählen, die eine Wissen-Probe ablegen. Wenn keinem dieser Helden die Probe gelingt, führe einen Angriff mit jedem dieser Helden aus, als ob sie Monster wären."
          },
          {
            "labelEn": "Sorcery 4",
            "labelDe": "Hexerei X",
            "rulesEn": "Sorcery X: After making an attack roll, Kyndrithul may convert up to X range to Hearts, or up to X Hearts to range.",
            "rulesDe": "Hexerei X: Nach seinem Angriffswurf darf Kyndrithul bis zu X Reichweite in Herz oder bis zu X Herz in Reichweite umwandeln."
          },
          {
            "labelEn": "Surge: Bone Splinter",
            "labelDe": "Schub: Knochensplitter",
            "rulesEn": "Bone Splinter: Each figure adjacent to the target suffers 2 Hearts.",
            "rulesDe": "Knochensplitter: Jede zu dem Ziel benachbarte Figur erleidet 2 Herzen."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/the-chains-that-rust/act2/cr-kyndrithul-front.png"
      }
    ]
  },
  {
    "id": "zarihell",
    "nameEn": "Zarihell",
    "nameDe": "Zarihell",
    "expansionId": "mists-of-bilehall",
    "forms": [
      {
        "act": 1,
        "expansionId": "mists-of-bilehall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "red"
        ],
        "might": 2,
        "knowledge": 4,
        "willpower": 3,
        "awareness": 3,
        "perPlayer": {
          "p2": {
            "speed": 5,
            "health": 9,
            "defense": [
              "gray"
            ]
          },
          "p3": {
            "speed": 5,
            "health": 12,
            "defense": [
              "gray"
            ]
          },
          "p4": {
            "speed": 5,
            "health": 15,
            "defense": [
              "black"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Soul Mastery",
            "labelDe": "Seelenmeisterschaft",
            "rulesEn": "Soul Mastery: Each time a hero within 3 spaces of Zarihell would be defeated, she may test Knowledge. If she passes, before that hero is knocked-out, perform an attack with that hero as if it were a monster. Then, that hero is defeated.",
            "rulesDe": "Seelenmeisterschaft: Jedes Mal wenn ein Held innerhalb von 3 Feldern zu Zarihell besiegt werden würde, darf sie eine Wissen-Probe ablegen. Wenn ihr die Probe gelingt, führt sie mit diesem Helden, bevor er niedergestreckt wird, einen Angriff durch, als ob er ein Monster sei. Dann wird der Held besiegt."
          },
          {
            "labelEn": "Tormentress",
            "labelDe": "Peinigerin",
            "rulesEn": "Tormentress: When a hero starts his turn within 3 spaces of Zarihell or enters a space within 3 spaces of Zarihell, that hero is Terrified.",
            "rulesDe": "Peinigerin: Sobald ein Held seinen Zug innerhalb von 3 Feldern zu Zarihell beginnt oder ein Feld innerhalb von 3 Feldern zu Zarihell betritt, wird dieser Held verängstigt."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/mists-of-bilehall/act1/mb-zarihell-front.png"
      },
      {
        "act": 2,
        "expansionId": "the-chains-that-rust",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "red",
          "yellow"
        ],
        "might": 2,
        "knowledge": 4,
        "willpower": 3,
        "awareness": 3,
        "perPlayer": {
          "p2": {
            "speed": 5,
            "health": 11,
            "defense": [
              "black"
            ]
          },
          "p3": {
            "speed": 5,
            "health": 14,
            "defense": [
              "gray",
              "gray"
            ]
          },
          "p4": {
            "speed": 5,
            "health": 17,
            "defense": [
              "gray",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Soul Mastery",
            "labelDe": "Seelenmeisterschaft",
            "rulesEn": "Soul Mastery: Each time a hero within 3 spaces of Zarihell would be defeated, she may test Knowledge. If she passes, before that hero is knocked-out, perform an attack with that hero as if it were a monster. Then, that hero is defeated.",
            "rulesDe": "Seelenmeisterschaft: Jedes Mal wenn ein Held innerhalb von 3 Feldern zu Zarihell besiegt werden würde, darf sie eine Wissen-Probe ablegen. Wenn ihr die Probe gelingt, führt sie mit diesem Helden, bevor er niedergestreckt wird, einen Angriff durch, als ob er ein Monster sei. Dann wird der Held besiegt."
          },
          {
            "labelEn": "Tormentress",
            "labelDe": "Peinigerin",
            "rulesEn": "Tormentress: When a hero starts his turn within 3 spaces of Zarihell or enters a space within 3 spaces of Zarihell, that hero is Terrified.",
            "rulesDe": "Peinigerin: Sobald ein Held seinen Zug innerhalb von 3 Feldern zu Zarihell beginnt oder ein Feld innerhalb von 3 Feldern zu Zarihell betritt, wird dieser Held verängstigt."
          },
          {
            "labelEn": "Action: Exploit Fear",
            "labelDe": "Furcht ausnutzen",
            "rulesEn": "Exploit Fear: Each Terrified hero within 3 spaces of Zarihell tests Willpower. Each hero that fails is Stunned.",
            "rulesDe": "Furcht ausnutzen: Jeder verängstigte Held innerhalb von 3 Feldern zu Zarihell legt eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, ist betäubt."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/the-chains-that-rust/act2/cr-zarihell-front.png"
      }
    ]
  }
]
