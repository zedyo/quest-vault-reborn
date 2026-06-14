import type { Lieutenant } from '../types/game'

// Quelle: any2cards/d2e strukturierte Daten (data/lieutenants.js).
// Englischer Text = Originalwortlaut der Karten. Deutscher Text = Community-Übersetzung
// (nicht zwingend identisch mit der offiziellen deutschen FFG-Edition).
//
// Umfang: GRUNDSPIEL (6 Leutnants, je Akt I + II). Erweiterungs-Leutnants folgen.
// Pro Akt: Angriffswürfel, Attribute (Stärke/Wissen/Willenskraft/Gespür), Werte je
// Spielerzahl (2/3/4: Bewegung/Leben/Verteidigung) und Fähigkeiten (Kurzlabel + Regeltext).
// Erzeugt aus den Quelldaten (numerische Werte 1:1 geparst), DE-Texte handübersetzt.

export const LIEUTENANTS: Lieutenant[] = [
  {
    "id": "baronzachareth",
    "nameEn": "Baron Zachareth",
    "nameDe": "Baron Zachareth",
    "expansionId": "base",
    "forms": [
      {
        "act": 1,
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
            "labelDe": "Aktion: Herrschaft",
            "rulesEn": "Dominion: Baron Zachareth tests Willpower. If he passes, he may move a hero within his line of sight 2 spaces in any direction. After the movement, the hero tests Willpower. If he fails, the hero is Immobilized.",
            "rulesDe": "Herrschaft: Baron Zachareth legt eine Willenskraft-Probe ab. Gelingt sie, darf er einen Helden in seiner Sichtlinie 2 Felder in eine beliebige Richtung bewegen. Nach der Bewegung legt der Held eine Willenskraft-Probe ab. Misslingt sie, ist der Held bewegungsunfähig."
          },
          {
            "labelEn": "Surge: Pierce 2",
            "labelDe": "Schub: Durchbohren 2",
            "rulesEn": "Pierce 2: This attack ignores 2 Shields rolled on the defense dice.",
            "rulesDe": "Durchbohren 2: Dieser Angriff ignoriert 2 auf den Verteidigungswürfeln gewürfelte Schilde."
          },
          {
            "labelEn": "Surge: Subdue",
            "labelDe": "Schub: Unterwerfen",
            "rulesEn": "Subdue: If this attack deals at least 1 Heart, choose 1 condition. The target suffers the chosen condition.",
            "rulesDe": "Unterwerfen: Fügt dieser Angriff mindestens 1 Herz zu, wähle 1 Zustand. Das Ziel erleidet den gewählten Zustand."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act1/bg-baron-zachareth-front.png"
      },
      {
        "act": 2,
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
            "labelDe": "Aktion: Herrschaft",
            "rulesEn": "Dominion: Baron Zachareth tests Willpower. If he passes, he may move a hero within his line of sight 2 spaces in any direction. After the movement, the hero tests Willpower. If he fails, the hero is Immobilized.",
            "rulesDe": "Herrschaft: Baron Zachareth legt eine Willenskraft-Probe ab. Gelingt sie, darf er einen Helden in seiner Sichtlinie 2 Felder in eine beliebige Richtung bewegen. Nach der Bewegung legt der Held eine Willenskraft-Probe ab. Misslingt sie, ist der Held bewegungsunfähig."
          },
          {
            "labelEn": "Action: Shadow Bolt",
            "labelDe": "Aktion: Schattenblitz",
            "rulesEn": "Shadow Bolt: Zachareth performs a Ranged attack: Blue Red Yellow",
            "rulesDe": "Schattenblitz: Zachareth führt einen Fernkampfangriff aus: Blau Rot Gelb"
          },
          {
            "labelEn": "Surge: Pierce 2",
            "labelDe": "Schub: Durchbohren 2",
            "rulesEn": "Pierce 2: This attack ignores 2 Shields rolled on the defense dice.",
            "rulesDe": "Durchbohren 2: Dieser Angriff ignoriert 2 auf den Verteidigungswürfeln gewürfelte Schilde."
          },
          {
            "labelEn": "Surge: Subdue",
            "labelDe": "Schub: Unterwerfen",
            "rulesEn": "Subdue: If this attack deals at least 1 Heart, choose 1 condition. The target suffers the chosen condition.",
            "rulesDe": "Unterwerfen: Fügt dieser Angriff mindestens 1 Herz zu, wähle 1 Zustand. Das Ziel erleidet den gewählten Zustand."
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
            "rulesDe": "Fliegen: Dieses Monster darf bei der Bewegung feindliche Figuren und die Auswirkungen von Gelände ignorieren. Es muss seine Bewegung gemäß den normalen Bewegungsregeln auf einem leeren Feld beenden."
          },
          {
            "labelEn": "Reach",
            "labelDe": "Reichweite",
            "rulesEn": "Reach: This monster may attack targets up to 2 spaces away.",
            "rulesDe": "Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen."
          },
          {
            "labelEn": "Surge: Poison",
            "labelDe": "Schub: Vergiften",
            "rulesEn": "Poison: If this attack deals at least 1 Heart (after the defense roll), the target is Poisoned.",
            "rulesDe": "Vergiften: Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), ist das Ziel vergiftet."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act1/bg-belthir-front.png"
      },
      {
        "act": 2,
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
            "rulesDe": "Fliegen: Dieses Monster darf bei der Bewegung feindliche Figuren und die Auswirkungen von Gelände ignorieren. Es muss seine Bewegung gemäß den normalen Bewegungsregeln auf einem leeren Feld beenden."
          },
          {
            "labelEn": "Reach",
            "labelDe": "Reichweite",
            "rulesEn": "Reach: This monster may attack targets up to 2 spaces away.",
            "rulesDe": "Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen."
          },
          {
            "labelEn": "Action: Cry Havoc",
            "labelDe": "Aktion: Verheerung",
            "rulesEn": "Cry Havoc: Belthir performs a move action and then attack action. The attack targets every figure he moves through.",
            "rulesDe": "Verheerung: Belthir führt eine Bewegungsaktion und dann eine Angriffsaktion aus. Der Angriff hat jede Figur zum Ziel, durch die er sich bewegt."
          },
          {
            "labelEn": "Surge: Poison",
            "labelDe": "Schub: Vergiften",
            "rulesEn": "Poison: If this attack deals at least 1 Heart (after the defense roll), the target is Poisoned.",
            "rulesDe": "Vergiften: Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), ist das Ziel vergiftet."
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
            "labelDe": "Aktion: Opfern",
            "rulesEn": "Sacrifice: Deal up to 5 Hearts to an adjacent monster to allow Lady Eliza Farrow to recover an equal amount of Hearts.",
            "rulesDe": "Opfern: Füge einem benachbarten Monster bis zu 5 Herzen zu, damit Lady Eliza Farrow ebenso viele Herzen zurückgewinnt."
          },
          {
            "labelEn": "Action: Seduce",
            "labelDe": "Aktion: Verführen",
            "rulesEn": "Seduce: You may choose a hero within 3 spaces of Lady Eliza Farrow and test Eliza's Willpower. If Eliza passes, move the hero 1 space in any direction and the hero is Stunned.",
            "rulesDe": "Verführen: Du darfst einen Helden innerhalb von 3 Feldern um Lady Eliza Farrow wählen und Elizas Willenskraft prüfen. Gelingt Elizas Probe, bewege den Helden 1 Feld in eine beliebige Richtung, und der Held ist betäubt."
          },
          {
            "labelEn": "Surge: Blood Call",
            "labelDe": "Schub: Blutruf",
            "rulesEn": "Blood Call: Lady Eliza Farrow recovers Hearts equal to the amount of Hearts dealt with this attack (after rolling defense dice).",
            "rulesDe": "Blutruf: Lady Eliza Farrow gewinnt so viele Herzen zurück, wie mit diesem Angriff zugefügt wurden (nach dem Wurf der Verteidigungswürfel)."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act1/bg-lady-eliza-farrow-front.png"
      },
      {
        "act": 2,
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
            "labelDe": "Aktion: Opfern",
            "rulesEn": "Sacrifice: Deal up to 5 Hearts to an adjacent monster to allow Lady Eliza Farrow to recover an equal amount of Hearts.",
            "rulesDe": "Opfern: Füge einem benachbarten Monster bis zu 5 Herzen zu, damit Lady Eliza Farrow ebenso viele Herzen zurückgewinnt."
          },
          {
            "labelEn": "Action: Seduce",
            "labelDe": "Aktion: Verführen",
            "rulesEn": "Seduce: You may choose a hero within 3 spaces of Lady Eliza Farrow and test Eliza's Willpower. If Eliza passes, move the hero 1 space in any direction and the hero is Stunned.",
            "rulesDe": "Verführen: Du darfst einen Helden innerhalb von 3 Feldern um Lady Eliza Farrow wählen und Elizas Willenskraft prüfen. Gelingt Elizas Probe, bewege den Helden 1 Feld in eine beliebige Richtung, und der Held ist betäubt."
          },
          {
            "labelEn": "Action: Wail",
            "labelDe": "Aktion: Wehklagen",
            "rulesEn": "Wail: All heroes within 3 spaces of Lady Eliza Farrow must test Willpower. Each hero that fails suffers 2 Fatigue.",
            "rulesDe": "Wehklagen: Alle Helden innerhalb von 3 Feldern um Lady Eliza Farrow müssen eine Willenskraft-Probe ablegen. Jeder Held, dem sie misslingt, erleidet 2 Erschöpfung."
          },
          {
            "labelEn": "Surge: Blood Call",
            "labelDe": "Schub: Blutruf",
            "rulesEn": "Blood Call: Lady Eliza Farrow recovers Hearts equal to the amount of Hearts dealt with this attack (after rolling defense dice).",
            "rulesDe": "Blutruf: Lady Eliza Farrow gewinnt so viele Herzen zurück, wie mit diesem Angriff zugefügt wurden (nach dem Wurf der Verteidigungswürfel)."
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
            "labelDe": "Nachbeben",
            "rulesEn": "Aftershock: When an adjacent hero attacks this monster, after the attack is resolved, the hero must test Willpower. If he fails, he suffers 1 Fatigue.",
            "rulesDe": "Nachbeben: Wenn ein benachbarter Held dieses Monster angreift, muss der Held nach dem Abhandeln des Angriffs eine Willenskraft-Probe ablegen. Misslingt sie, erleidet er 1 Erschöpfung."
          },
          {
            "labelEn": "Action: Ignite",
            "labelDe": "Aktion: Entzünden",
            "rulesEn": "Ignite: Lord Merick Farrow suffers 1 Heart to perform an attack that targets all adjacent figures. Each figure rolls defense dice separately. Merick may not perform this action if suffering the Hearts would defeat him.",
            "rulesDe": "Entzünden: Lord Merick Farrow erleidet 1 Herz, um einen Angriff auszuführen, der alle benachbarten Figuren zum Ziel hat. Jede Figur würfelt ihre Verteidigung separat. Merick darf diese Aktion nicht ausführen, wenn das Erleiden der Herzen ihn besiegen würde."
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
            "labelDe": "Nachbeben",
            "rulesEn": "Aftershock: When an adjacent hero attacks this monster, after the attack is resolved, the hero must test Willpower. If he fails, he suffers 1 Fatigue.",
            "rulesDe": "Nachbeben: Wenn ein benachbarter Held dieses Monster angreift, muss der Held nach dem Abhandeln des Angriffs eine Willenskraft-Probe ablegen. Misslingt sie, erleidet er 1 Erschöpfung."
          },
          {
            "labelEn": "Action: Ignite",
            "labelDe": "Aktion: Entzünden",
            "rulesEn": "Ignite: Lord Merick Farrow suffers 1 Heart to perform an attack that targets all adjacent figures. Each figure rolls defense dice separately. Merick may not perform this action if suffering the Hearts would defeat him.",
            "rulesDe": "Entzünden: Lord Merick Farrow erleidet 1 Herz, um einen Angriff auszuführen, der alle benachbarten Figuren zum Ziel hat. Jede Figur würfelt ihre Verteidigung separat. Merick darf diese Aktion nicht ausführen, wenn das Erleiden der Herzen ihn besiegen würde."
          },
          {
            "labelEn": "Surge: Wither",
            "labelDe": "Schub: Verdorren",
            "rulesEn": "Wither: The target suffers 1 Fatigue.",
            "rulesDe": "Verdorren: Das Ziel erleidet 1 Erschöpfung."
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
            "labelDe": "Unbeweglich",
            "rulesEn": "Unmovable: This monster may choose to ignore any game effect that would force it to move.",
            "rulesDe": "Unbeweglich: Dieses Monster darf jeden Spieleffekt ignorieren, der es zur Bewegung zwingen würde."
          },
          {
            "labelEn": "Action: Overpower",
            "labelDe": "Aktion: Überwältigen",
            "rulesEn": "Overpower: Sir Alric Farrow performs a move action. Each time he moves into a space adjacent to a hero, Alric may test Might. If he passes, he may trade spaces with that hero and the hero suffers 1 Fatigue.",
            "rulesDe": "Überwältigen: Sir Alric Farrow führt eine Bewegungsaktion aus. Jedes Mal, wenn er ein Feld betritt, das zu einem Helden benachbart ist, darf Alric eine Stärke-Probe ablegen. Gelingt sie, darf er mit diesem Helden die Felder tauschen, und der Held erleidet 1 Erschöpfung."
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
            "rulesDe": "Regeneration 1: Zu Beginn des Zuges des Overlord-Spielers gewinnt dieses Monster 1 Herz zurück."
          },
          {
            "labelEn": "Unmovable",
            "labelDe": "Unbeweglich",
            "rulesEn": "Unmovable: This monster may choose to ignore any game effect that would force it to move.",
            "rulesDe": "Unbeweglich: Dieses Monster darf jeden Spieleffekt ignorieren, der es zur Bewegung zwingen würde."
          },
          {
            "labelEn": "Action: Overpower",
            "labelDe": "Aktion: Überwältigen",
            "rulesEn": "Overpower: Sir Alric Farrow performs a move action. Each time he moves into a space adjacent to a hero, Alric may test Might. If he passes, he may trade spaces with that hero and the hero suffers 1 Fatigue.",
            "rulesDe": "Überwältigen: Sir Alric Farrow führt eine Bewegungsaktion aus. Jedes Mal, wenn er ein Feld betritt, das zu einem Helden benachbart ist, darf Alric eine Stärke-Probe ablegen. Gelingt sie, darf er mit diesem Helden die Felder tauschen, und der Held erleidet 1 Erschöpfung."
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
            "labelDe": "Nicht ich!",
            "rulesEn": "Not Me!: Each time Splig is attacked, before dice are rolled, test his Awareness. If he passes, a monster adjacent to him becomes the target of the attack. Range and line of sight are still measured to Splig's space.",
            "rulesDe": "Nicht ich!: Jedes Mal, wenn Splig angegriffen wird, prüfe vor dem Würfeln sein Gespür. Gelingt die Probe, wird ein zu ihm benachbartes Monster zum Ziel des Angriffs. Reichweite und Sichtlinie werden weiterhin zu Spligs Feld gemessen."
          },
          {
            "labelEn": "Surge: Knockback",
            "labelDe": "Schub: Rückstoß",
            "rulesEn": "Knockback: Remove the target from the map, then place him on any empty space within 3 spaces of his original space. He counts as entering that space.",
            "rulesDe": "Rückstoß: Entferne das Ziel vom Spielplan und platziere es dann auf einem beliebigen leeren Feld innerhalb von 3 Feldern um sein ursprüngliches Feld. Es gilt als dieses Feld betretend."
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
            "labelDe": "Nicht ich!",
            "rulesEn": "Not Me!: Each time Splig is attacked, before dice are rolled, test his Awareness. If he passes, a monster adjacent to him becomes the target of the attack. Range and line of sight are still measured to Splig's space.",
            "rulesDe": "Nicht ich!: Jedes Mal, wenn Splig angegriffen wird, prüfe vor dem Würfeln sein Gespür. Gelingt die Probe, wird ein zu ihm benachbartes Monster zum Ziel des Angriffs. Reichweite und Sichtlinie werden weiterhin zu Spligs Feld gemessen."
          },
          {
            "labelEn": "Action: Promotion",
            "labelDe": "Aktion: Beförderung",
            "rulesEn": "Promotion: Splig tests Willpower. If he passes, you may replace an adjacent minion monster with a master monster of that type. This may not exceed that monster group limit.",
            "rulesDe": "Beförderung: Splig legt eine Willenskraft-Probe ab. Gelingt sie, darfst du ein benachbartes Diener-Monster durch ein Meister-Monster desselben Typs ersetzen. Dies darf das Gruppenlimit dieser Monstergruppe nicht überschreiten."
          },
          {
            "labelEn": "Surge: Knockback",
            "labelDe": "Schub: Rückstoß",
            "rulesEn": "Knockback: Remove the target from the map, then place him on any empty space within 3 spaces of his original space. He counts as entering that space.",
            "rulesDe": "Rückstoß: Entferne das Ziel vom Spielplan und platziere es dann auf einem beliebigen leeren Feld innerhalb von 3 Feldern um sein ursprüngliches Feld. Es gilt als dieses Feld betretend."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/base-game/act2/bg-splig-front.png"
      }
    ]
  }
]
