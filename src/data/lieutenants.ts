import type { Lieutenant } from '../types/game'

// Quelle: any2cards/d2e strukturierte Daten (data/lieutenants.js).
// Englischer Text = Originalwortlaut der Karten. Deutscher Text = Community-Übersetzung
// (nicht zwingend identisch mit der offiziellen deutschen FFG-Edition).
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
            "labelDe": "Hortend",
            "rulesEn": "Hoarder: When a hero performs a search action, Valyndra may test Awareness. If she passes, she may immediately move up to 2 spaces. Then the hero's turn resumes.",
            "rulesDe": "Hortend: Wenn ein Held eine Durchsuchen-Aktion ausführt, darf Valyndra eine Gespür-Probe ablegen. Gelingt sie, darf sie sich sofort bis zu 2 Felder bewegen. Dann wird der Zug des Helden fortgesetzt."
          },
          {
            "labelEn": "Surge: Fire Breath",
            "labelDe": "Schub: Feueratem",
            "rulesEn": "Fire Breath: Starting with the target space, trace a path of 4 spaces in any direction. All figures on this path are affected by this attack. Each figure rolls defense dice separately.",
            "rulesDe": "Feueratem: Beginnend mit dem Zielfeld, zeichne einen Pfad von 4 Feldern in eine beliebige Richtung. Alle Figuren auf diesem Pfad sind von diesem Angriff betroffen. Jede Figur würfelt ihre Verteidigung separat."
          },
          {
            "labelEn": "Surge: Burn",
            "labelDe": "Schub: Verbrennen",
            "rulesEn": "Burn: If this attack deals at least 1 Heart (after the defense roll), the target is Burning.",
            "rulesDe": "Verbrennen: Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), brennt das Ziel."
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
            "labelDe": "Hortend",
            "rulesEn": "Hoarder: When a hero performs a search action, Valyndra may test Awareness. If she passes, she may immediately move up to 2 spaces. Then the hero's turn resumes.",
            "rulesDe": "Hortend: Wenn ein Held eine Durchsuchen-Aktion ausführt, darf Valyndra eine Gespür-Probe ablegen. Gelingt sie, darf sie sich sofort bis zu 2 Felder bewegen. Dann wird der Zug des Helden fortgesetzt."
          },
          {
            "labelEn": "Surge: Fire Breath",
            "labelDe": "Schub: Feueratem",
            "rulesEn": "Fire Breath: Starting with the target space, trace a path of 4 spaces in any direction. All figures on this path are affected by this attack. Each figure rolls defense dice separately.",
            "rulesDe": "Feueratem: Beginnend mit dem Zielfeld, zeichne einen Pfad von 4 Feldern in eine beliebige Richtung. Alle Figuren auf diesem Pfad sind von diesem Angriff betroffen. Jede Figur würfelt ihre Verteidigung separat."
          },
          {
            "labelEn": "Surge: Burn",
            "labelDe": "Schub: Verbrennen",
            "rulesEn": "Burn: If this attack deals at least 1 Heart (after the defense roll), the target is Burning.",
            "rulesDe": "Verbrennen: Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), brennt das Ziel."
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
            "rulesDe": "Verdorben: Jedes Mal, wenn Ariad einen Angriff gegen einen verfluchten Helden ausführt, füge ihrem Angriffspool für jeden anvisierten verfluchten Helden 1 zusätzlichen gelben Machtwürfel hinzu."
          },
          {
            "labelEn": "Action: Ancient Curse",
            "labelDe": "Aktion: Uralter Fluch",
            "rulesEn": "Ancient Curse: Each hero within 3 spaces of Ariad must test Willpower. Each hero that fails is Cursed.",
            "rulesDe": "Uralter Fluch: Jeder Held innerhalb von 3 Feldern um Ariad muss eine Willenskraft-Probe ablegen. Jeder Held, dem sie misslingt, ist verflucht."
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
            "rulesDe": "Verdorben: Jedes Mal, wenn Ariad einen Angriff gegen einen verfluchten Helden ausführt, füge ihrem Angriffspool für jeden anvisierten verfluchten Helden 1 zusätzlichen gelben Machtwürfel hinzu."
          },
          {
            "labelEn": "Action: Ancient Curse",
            "labelDe": "Aktion: Uralter Fluch",
            "rulesEn": "Ancient Curse: Each hero within 3 spaces of Ariad must test Willpower. Each hero that fails is Cursed.",
            "rulesDe": "Uralter Fluch: Jeder Held innerhalb von 3 Feldern um Ariad muss eine Willenskraft-Probe ablegen. Jeder Held, dem sie misslingt, ist verflucht."
          },
          {
            "labelEn": "Action: Cursed Blast",
            "labelDe": "Aktion: Fluchstoß",
            "rulesEn": "Cursed Blast: Perform an attack targeting each Cursed hero in Ariad's line of sight. If insufficient range is rolled for any one target, the entire attack is considered a miss.",
            "rulesDe": "Fluchstoß: Führe einen Angriff aus, der jeden verfluchten Helden in Ariads Sichtlinie zum Ziel hat. Wird für ein Ziel zu wenig Reichweite gewürfelt, gilt der gesamte Angriff als Fehlschlag."
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
            "rulesDe": "Verdorben: Jedes Mal, wenn Ariad einen Angriff gegen einen verfluchten Helden ausführt, füge ihrem Angriffspool für jeden anvisierten verfluchten Helden 1 zusätzlichen gelben Machtwürfel hinzu."
          },
          {
            "labelEn": "Action: Ancient Curse",
            "labelDe": "Aktion: Uralter Fluch",
            "rulesEn": "Ancient Curse: Each hero within 3 spaces of Ariad must test Willpower. Each hero that fails is Cursed.",
            "rulesDe": "Uralter Fluch: Jeder Held innerhalb von 3 Feldern um Ariad muss eine Willenskraft-Probe ablegen. Jeder Held, dem sie misslingt, ist verflucht."
          },
          {
            "labelEn": "Action: Pincer Attack",
            "labelDe": "Aktion: Zangenangriff",
            "rulesEn": "Pincer Attack: Perform an attack targeting up to 2 heroes adjacent to this monster. 1 attack roll is made but each hero rolls defense dice separately. Each target that suffers at least 1 Heart from this attack (after the defense roll) is Immobilized.",
            "rulesDe": "Zangenangriff: Führe einen Angriff aus, der bis zu 2 zu diesem Monster benachbarte Helden zum Ziel hat. Es wird 1 Angriffswurf gemacht, aber jeder Held würfelt seine Verteidigung separat. Jedes Ziel, das durch diesen Angriff mindestens 1 Herz erleidet (nach dem Verteidigungswurf), ist bewegungsunfähig."
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
            "rulesDe": "Opportunist: Jeder Angriff von Raythen erhält 1 Schub für jeden benachbarten bewegungsunfähigen Helden und 2 Schub für jeden benachbarten betäubten Helden."
          },
          {
            "labelEn": "Action: Pilfer",
            "labelDe": "Aktion: Stehlen",
            "rulesEn": "Pilfer: If Raythen is adjacent to a search token, the overlord may look at the top card of the Search deck. Then he may place it at the top or the bottom of the deck.",
            "rulesDe": "Stehlen: Ist Raythen zu einem Suchmarker benachbart, darf der Overlord die oberste Karte des Suchstapels ansehen. Dann darf er sie oben oder unten auf den Stapel legen."
          },
          {
            "labelEn": "Surge: Stun",
            "labelDe": "Schub: Betäuben",
            "rulesEn": "Stun: If this attack deals at least 1 Heart (after the defense roll), the target is Stunned.",
            "rulesDe": "Betäuben: Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), ist das Ziel betäubt."
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
            "rulesDe": "Starker Geist: Serena kann nicht verflucht oder vergiftet werden."
          },
          {
            "labelEn": "Action: Miasma",
            "labelDe": "Aktion: Miasma",
            "rulesEn": "Miasma: Each hero within 3 spaces of Serena must test Willpower. Each hero that fails suffers 1 Heart and 1 Fatigue.",
            "rulesDe": "Miasma: Jeder Held innerhalb von 3 Feldern um Serena muss eine Willenskraft-Probe ablegen. Jeder Held, dem sie misslingt, erleidet 1 Herz und 1 Erschöpfung."
          },
          {
            "labelEn": "Surge: +2 Hearts, Curse",
            "labelDe": "Schub: +2 Herzen, Fluch",
            "rulesEn": "Curse: If this attack deals at least 1 Heart (after the defense roll), the target is Cursed.",
            "rulesDe": "Fluch: Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), ist das Ziel verflucht."
          },
          {
            "labelEn": "Surge: +2 Hearts, Disease",
            "labelDe": "Schub: +2 Herzen, Seuche",
            "rulesEn": "Disease: If this attack deals at least 1 Heart (after the defense roll), the target is Diseased.",
            "rulesDe": "Seuche: Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), ist das Ziel verseucht."
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
            "labelDe": "Reichweite",
            "rulesEn": "Reach: Bol'Goreth may attack targets up to 2 spaces away.",
            "rulesDe": "Reichweite: Bol'Goreth darf Ziele in bis zu 2 Feldern Entfernung angreifen."
          },
          {
            "labelEn": "Action: Rampage",
            "labelDe": "Aktion: Amoklauf",
            "rulesEn": "Rampage: Bol'Goreth performs a move action followed by an attack action. This attack affects each figure within 2 spaces of each space he entered during this movement. After this attack is resolved, Bol'Goreth is Stunned and Weakened.",
            "rulesDe": "Amoklauf: Bol'Goreth führt eine Bewegungsaktion gefolgt von einer Angriffsaktion aus. Dieser Angriff betrifft jede Figur innerhalb von 2 Feldern um jedes Feld, das er während dieser Bewegung betreten hat. Nachdem dieser Angriff abgehandelt wurde, ist Bol'Goreth betäubt und geschwächt."
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
            "labelDe": "Reichweite",
            "rulesEn": "Reach: Bol'Goreth may attack targets up to 2 spaces away.",
            "rulesDe": "Reichweite: Bol'Goreth darf Ziele in bis zu 2 Feldern Entfernung angreifen."
          },
          {
            "labelEn": "Resilient",
            "labelDe": "Widerstandsfähig",
            "rulesEn": "Resilient: At the start of the overlord player's turn, discard 1 Condition token from Bol'Goreth.",
            "rulesDe": "Widerstandsfähig: Zu Beginn des Zuges des Overlord-Spielers lege 1 Zustandsmarker von Bol'Goreth ab."
          },
          {
            "labelEn": "Action: Rampage",
            "labelDe": "Aktion: Amoklauf",
            "rulesEn": "Rampage: Bol'Goreth performs a move action followed by an attack action. This attack affects each figure within 2 spaces of each space he entered during this movement. After this attack is resolved, Bol'Goreth is Stunned and Weakened.",
            "rulesDe": "Amoklauf: Bol'Goreth führt eine Bewegungsaktion gefolgt von einer Angriffsaktion aus. Dieser Angriff betrifft jede Figur innerhalb von 2 Feldern um jedes Feld, das er während dieser Bewegung betreten hat. Nachdem dieser Angriff abgehandelt wurde, ist Bol'Goreth betäubt und geschwächt."
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
            "labelDe": "Dreschflegel",
            "rulesEn": "Flail: When attacking Skarn may target 2 separate heroes. It makes 1 attack roll, and each hero rolls defense dice separately.",
            "rulesDe": "Dreschflegel: Beim Angreifen darf Skarn 2 verschiedene Helden zum Ziel haben. Es wird 1 Angriffswurf gemacht, und jeder Held würfelt seine Verteidigung separat."
          },
          {
            "labelEn": "Energy Drain 3",
            "labelDe": "Energieentzug 3",
            "rulesEn": "Energy Drain X: If a hero suffers Hearts as the result of an attack from Skarn, you may cause that hero to suffer up to X Hearts as Fatigue instead.",
            "rulesDe": "Energieentzug X: Erleidet ein Held Herzen als Folge eines Angriffs von Skarn, darfst du diesen Helden stattdessen bis zu X Herzen als Erschöpfung erleiden lassen."
          },
          {
            "labelEn": "Surge: Mend 3",
            "labelDe": "Schub: Heilen 3",
            "rulesEn": "Mend X: Skarn recovers X Hearts.",
            "rulesDe": "Heilen X: Skarn gewinnt X Herzen zurück."
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
            "labelDe": "Energieentzug 4",
            "rulesEn": "Energy Drain X: If a hero suffers Hearts as the result of an attack from Skarn, you may cause that hero to suffer up to X Hearts as Fatigue instead.",
            "rulesDe": "Energieentzug X: Erleidet ein Held Herzen als Folge eines Angriffs von Skarn, darfst du diesen Helden stattdessen bis zu X Herzen als Erschöpfung erleiden lassen."
          },
          {
            "labelEn": "Action: Thrash",
            "labelDe": "Aktion: Dreschen",
            "rulesEn": "Thrash: Perform an attack. This attack affects each figure adjacent to Skarn. Each figure rolls defense dice separately.",
            "rulesDe": "Dreschen: Führe einen Angriff aus. Dieser Angriff betrifft jede zu Skarn benachbarte Figur. Jede Figur würfelt ihre Verteidigung separat."
          },
          {
            "labelEn": "Surge: Mend 4",
            "labelDe": "Schub: Heilen 4",
            "rulesEn": "Mend X: Skarn recovers X Hearts.",
            "rulesDe": "Heilen X: Skarn gewinnt X Herzen zurück."
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
    "nameDe": "Mirklace",
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
            "labelDe": "Aura 1",
            "rulesEn": "Aura X: Each time a hero enters a space adjacent to Mirklace, that hero suffers X Hearts.",
            "rulesDe": "Aura X: Jedes Mal, wenn ein Held ein zu Mirklace benachbartes Feld betritt, erleidet dieser Held X Herzen."
          },
          {
            "labelEn": "Action: Split Earth",
            "labelDe": "Aktion: Erdspaltung",
            "rulesEn": "Split Earth: Starting with a space adjacent to Mirklace, trace a path of 4 spaces in any direction. Each figure on this path suffers 1 Heart and moves to an empty adjacent space of your choice. Limit once per round.",
            "rulesDe": "Erdspaltung: Beginnend mit einem zu Mirklace benachbarten Feld, zeichne einen Pfad von 4 Feldern in eine beliebige Richtung. Jede Figur auf diesem Pfad erleidet 1 Herz und bewegt sich auf ein leeres benachbartes Feld deiner Wahl. Höchstens einmal pro Runde."
          },
          {
            "labelEn": "Surge Surge: Blast",
            "labelDe": "Schub Schub: Druckwelle",
            "rulesEn": "Blast: This attack affects all figures adjacent to the target space.",
            "rulesDe": "Druckwelle: Dieser Angriff betrifft alle zum Zielfeld benachbarten Figuren."
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
            "labelDe": "Aura 2",
            "rulesEn": "Aura X: Each time a hero enters a space adjacent to Mirklace, that hero suffers X Hearts.",
            "rulesDe": "Aura X: Jedes Mal, wenn ein Held ein zu Mirklace benachbartes Feld betritt, erleidet dieser Held X Herzen."
          },
          {
            "labelEn": "Action: Split Earth",
            "labelDe": "Aktion: Erdspaltung",
            "rulesEn": "Split Earth: Starting with a space adjacent to Mirklace, trace a path of 4 spaces in any direction. Each figure on this path suffers 1 Heart and moves to an empty adjacent space of your choice. Limit once per round.",
            "rulesDe": "Erdspaltung: Beginnend mit einem zu Mirklace benachbarten Feld, zeichne einen Pfad von 4 Feldern in eine beliebige Richtung. Jede Figur auf diesem Pfad erleidet 1 Herz und bewegt sich auf ein leeres benachbartes Feld deiner Wahl. Höchstens einmal pro Runde."
          },
          {
            "labelEn": "Sorcery 3",
            "labelDe": "Zauberei 3",
            "rulesEn": "Sorcery X: After making an attack roll, Mirklace may convert up to X range to Hearts, or up to X Hearts to range.",
            "rulesDe": "Zauberei X: Nach einem Angriffswurf darf Mirklace bis zu X Reichweite in Herzen oder bis zu X Herzen in Reichweite umwandeln."
          },
          {
            "labelEn": "Surge Surge: Blast",
            "labelDe": "Schub Schub: Druckwelle",
            "rulesEn": "Blast: This attack affects all figures adjacent to the target space.",
            "rulesDe": "Druckwelle: Dieser Angriff betrifft alle zum Zielfeld benachbarten Figuren."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/lieutenants/d2e/shadow-of-nerekhall/act2/sn-mirklace-front.png"
      }
    ]
  },
  {
    "id": "garganmirklace",
    "nameEn": "Gargan Mirklace",
    "nameDe": "Gargan Mirklace",
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
            "labelDe": "Aura 1",
            "rulesEn": "Aura X: Each time a hero enters a space adjacent to Mirklace, that hero suffers X Hearts.",
            "rulesDe": "Aura X: Jedes Mal, wenn ein Held ein zu Mirklace benachbartes Feld betritt, erleidet dieser Held X Herzen."
          },
          {
            "labelEn": "Action: Split Earth",
            "labelDe": "Aktion: Erdspaltung",
            "rulesEn": "Split Earth: Starting with a space adjacent to Mirklace, trace a path of 4 spaces in any direction. Each figure on this path suffers 1 Heart and moves to an empty adjacent space of your choice. Limit once per round.",
            "rulesDe": "Erdspaltung: Beginnend mit einem zu Mirklace benachbarten Feld, zeichne einen Pfad von 4 Feldern in eine beliebige Richtung. Jede Figur auf diesem Pfad erleidet 1 Herz und bewegt sich auf ein leeres benachbartes Feld deiner Wahl. Höchstens einmal pro Runde."
          },
          {
            "labelEn": "Surge Surge: Blast",
            "labelDe": "Schub Schub: Druckwelle",
            "rulesEn": "Blast: This attack affects all figures adjacent to the target space.",
            "rulesDe": "Druckwelle: Dieser Angriff betrifft alle zum Zielfeld benachbarten Figuren."
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
            "labelDe": "Aura 2",
            "rulesEn": "Aura X: Each time a hero enters a space adjacent to Mirklace, that hero suffers X Hearts.",
            "rulesDe": "Aura X: Jedes Mal, wenn ein Held ein zu Mirklace benachbartes Feld betritt, erleidet dieser Held X Herzen."
          },
          {
            "labelEn": "Action: Split Earth",
            "labelDe": "Aktion: Erdspaltung",
            "rulesEn": "Split Earth: Starting with a space adjacent to Mirklace, trace a path of 4 spaces in any direction. Each figure on this path suffers 1 Heart and moves to an empty adjacent space of your choice. Limit once per round.",
            "rulesDe": "Erdspaltung: Beginnend mit einem zu Mirklace benachbarten Feld, zeichne einen Pfad von 4 Feldern in eine beliebige Richtung. Jede Figur auf diesem Pfad erleidet 1 Herz und bewegt sich auf ein leeres benachbartes Feld deiner Wahl. Höchstens einmal pro Runde."
          },
          {
            "labelEn": "Sorcery 3",
            "labelDe": "Zauberei 3",
            "rulesEn": "Sorcery X: After making an attack roll, Mirklace may convert up to X range to Hearts, or up to X Hearts to range.",
            "rulesDe": "Zauberei X: Nach einem Angriffswurf darf Mirklace bis zu X Reichweite in Herzen oder bis zu X Herzen in Reichweite umwandeln."
          },
          {
            "labelEn": "Surge Surge: Blast",
            "labelDe": "Schub Schub: Druckwelle",
            "rulesEn": "Blast: This attack affects all figures adjacent to the target space.",
            "rulesDe": "Druckwelle: Dieser Angriff betrifft alle zum Zielfeld benachbarten Figuren."
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
            "labelDe": "Aktion: Beeinflussen",
            "rulesEn": "Influence: Choose 1 figure adjacent to Rylan Olliven. That figure immediately performs one action of the controlling player's choice. Limit once per round.",
            "rulesDe": "Beeinflussen: Wähle 1 zu Rylan Olliven benachbarte Figur. Diese Figur führt sofort eine Aktion nach Wahl des kontrollierenden Spielers aus. Höchstens einmal pro Runde."
          },
          {
            "labelEn": "Surge Surge: Subdue",
            "labelDe": "Schub Schub: Unterwerfen",
            "rulesEn": "Subdue: If this attack deals at least 1 Heart, choose 1 condition. The target suffers the chosen condition.",
            "rulesDe": "Unterwerfen: Fügt dieser Angriff mindestens 1 Herz zu, wähle 1 Zustand. Das Ziel erleidet den gewählten Zustand."
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
            "rulesDe": "Präzise: Benachbarte Figuren blockieren Rylan Ollivens Sichtlinie nicht."
          },
          {
            "labelEn": "Action: Influence",
            "labelDe": "Aktion: Beeinflussen",
            "rulesEn": "Influence: Choose 1 figure adjacent to Rylan Olliven. That figure immediately performs one action of the controlling player's choice. Limit once per round.",
            "rulesDe": "Beeinflussen: Wähle 1 zu Rylan Olliven benachbarte Figur. Diese Figur führt sofort eine Aktion nach Wahl des kontrollierenden Spielers aus. Höchstens einmal pro Runde."
          },
          {
            "labelEn": "Surge Surge: Subdue",
            "labelDe": "Schub Schub: Unterwerfen",
            "rulesEn": "Subdue: If this attack deals at least 1 Heart, choose 1 condition. The target suffers the chosen condition.",
            "rulesDe": "Unterwerfen: Fügt dieser Angriff mindestens 1 Herz zu, wähle 1 Zustand. Das Ziel erleidet den gewählten Zustand."
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
            "labelDe": "Verwüsten",
            "rulesEn": "Ravage: Both of Tristayne Olliven's actions on a turn may be attack actions.",
            "rulesDe": "Verwüsten: Beide Aktionen von Tristayne Olliven in einem Zug dürfen Angriffsaktionen sein."
          },
          {
            "labelEn": "Chaotic Energy",
            "labelDe": "Chaotische Energie",
            "rulesEn": "Chaotic Energy: Each time Tristayne Olliven performs an attack, before dice are rolled, he may suffer up to 3 Hearts. This attack deals additional Hearts equal to the Hearts suffered. Tristayne cannot do this if suffering the Hearts would defeat him.",
            "rulesDe": "Chaotische Energie: Jedes Mal, wenn Tristayne Olliven einen Angriff ausführt, darf er vor dem Würfeln bis zu 3 Herzen erleiden. Dieser Angriff fügt so viele zusätzliche Herzen zu, wie erlitten wurden. Tristayne kann dies nicht tun, wenn das Erleiden der Herzen ihn besiegen würde."
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
            "labelDe": "Verwüsten",
            "rulesEn": "Ravage: Both of Tristayne Olliven's actions on a turn may be attack actions.",
            "rulesDe": "Verwüsten: Beide Aktionen von Tristayne Olliven in einem Zug dürfen Angriffsaktionen sein."
          },
          {
            "labelEn": "Soul Siphon",
            "labelDe": "Seelenentzug",
            "rulesEn": "Soul Siphon: Each time Tristayne Olliven suffers Hearts from any source other than an attack, you may choose an adjacent monster. That monster suffers that amount of Hearts instead.",
            "rulesDe": "Seelenentzug: Jedes Mal, wenn Tristayne Olliven Herzen aus einer anderen Quelle als einem Angriff erleidet, darfst du ein benachbartes Monster wählen. Dieses Monster erleidet stattdessen diese Anzahl Herzen."
          },
          {
            "labelEn": "Chaotic Energy",
            "labelDe": "Chaotische Energie",
            "rulesEn": "Chaotic Energy: Each time Tristayne Olliven performs an attack, before dice are rolled, he may suffer up to 3 Hearts. This attack deals additional Hearts equal to the Hearts suffered. Tristayne cannot do this if suffering the Hearts would defeat him.",
            "rulesDe": "Chaotische Energie: Jedes Mal, wenn Tristayne Olliven einen Angriff ausführt, darf er vor dem Würfeln bis zu 3 Herzen erleiden. Dieser Angriff fügt so viele zusätzliche Herzen zu, wie erlitten wurden. Tristayne kann dies nicht tun, wenn das Erleiden der Herzen ihn besiegen würde."
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
    "nameDe": "Verminous",
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
            "labelDe": "Heimlich",
            "rulesEn": "Stealthy: Each attack that targets Verminous must roll 3 additional range beyond the normally required amount or the attack is a miss.",
            "rulesDe": "Heimlich: Jeder Angriff, der Verminous zum Ziel hat, muss 3 zusätzliche Reichweite über die normalerweise erforderliche Menge hinaus würfeln, sonst ist der Angriff ein Fehlschlag."
          },
          {
            "labelEn": "Surge: Scheme",
            "labelDe": "Schub: Intrige",
            "rulesEn": "Scheme: Discard 1 Overlord card from your hand to draw 1 Overlord card.",
            "rulesDe": "Intrige: Lege 1 Overlord-Karte von deiner Hand ab, um 1 Overlord-Karte zu ziehen."
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
            "labelDe": "Meisterplan",
            "rulesEn": "Master Plan: Each time you play an Overlord card, choose one hero within 3 spaces of Verminous. That hero suffers 1 Heart.",
            "rulesDe": "Meisterplan: Jedes Mal, wenn du eine Overlord-Karte spielst, wähle einen Helden innerhalb von 3 Feldern um Verminous. Dieser Held erleidet 1 Herz."
          },
          {
            "labelEn": "Stealthy",
            "labelDe": "Heimlich",
            "rulesEn": "Stealthy: Each attack that targets Verminous must roll 3 additional range beyond the normally required amount or the attack is a miss.",
            "rulesDe": "Heimlich: Jeder Angriff, der Verminous zum Ziel hat, muss 3 zusätzliche Reichweite über die normalerweise erforderliche Menge hinaus würfeln, sonst ist der Angriff ein Fehlschlag."
          },
          {
            "labelEn": "Surge: Scheme",
            "labelDe": "Schub: Intrige",
            "rulesEn": "Scheme: Discard 1 Overlord card from your hand to draw 1 Overlord card.",
            "rulesDe": "Intrige: Lege 1 Overlord-Karte von deiner Hand ab, um 1 Overlord-Karte zu ziehen."
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
            "labelDe": "Flankieren",
            "rulesEn": "Flanking: Each time Ardus Ix'Erebus performs an attack, he may choose 1 monster with the Cursed monster trait adjacent to the target. During that attack, Ardus Ix'Erebus may use the Surge abilities of that monster.",
            "rulesDe": "Flankieren: Jedes Mal, wenn Ardus Ix'Erebus einen Angriff ausführt, darf er 1 Monster mit dem Monster-Merkmal „Verflucht\" wählen, das zum Ziel benachbart ist. Während dieses Angriffs darf Ardus Ix'Erebus die Schub-Fähigkeiten dieses Monsters nutzen."
          },
          {
            "labelEn": "Fury",
            "labelDe": "Wut",
            "rulesEn": "Fury: Each time Ardus Ix'Erebus performs an attack, after rolling dice, he may test Might. If he passes, add 1 Surge to the results. If he fails, that attack is a miss.",
            "rulesDe": "Wut: Jedes Mal, wenn Ardus Ix'Erebus einen Angriff ausführt, darf er nach dem Würfeln eine Stärke-Probe ablegen. Gelingt sie, füge 1 Schub zu den Ergebnissen hinzu. Misslingt sie, ist der Angriff ein Fehlschlag."
          },
          {
            "labelEn": "Surge: Pierce 1",
            "labelDe": "Schub: Durchbohren 1",
            "rulesEn": "Pierce X: This attack ignores X Shields on the defense dice.",
            "rulesDe": "Durchbohren X: Dieser Angriff ignoriert X Schilde auf den Verteidigungswürfeln."
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
            "labelDe": "Flankieren",
            "rulesEn": "Flanking: Each time Ardus Ix'Erebus performs an attack, he may choose 1 monster with the Cursed monster trait adjacent to the target. During that attack, Ardus Ix'Erebus may use the Surge abilities of that monster.",
            "rulesDe": "Flankieren: Jedes Mal, wenn Ardus Ix'Erebus einen Angriff ausführt, darf er 1 Monster mit dem Monster-Merkmal „Verflucht\" wählen, das zum Ziel benachbart ist. Während dieses Angriffs darf Ardus Ix'Erebus die Schub-Fähigkeiten dieses Monsters nutzen."
          },
          {
            "labelEn": "Fury",
            "labelDe": "Wut",
            "rulesEn": "Fury: Each time Ardus Ix'Erebus performs an attack, after rolling dice, he may test Might. If he passes, add 1 Surge to the results. If he fails, that attack is a miss.",
            "rulesDe": "Wut: Jedes Mal, wenn Ardus Ix'Erebus einen Angriff ausführt, darf er nach dem Würfeln eine Stärke-Probe ablegen. Gelingt sie, füge 1 Schub zu den Ergebnissen hinzu. Misslingt sie, ist der Angriff ein Fehlschlag."
          },
          {
            "labelEn": "Action: Rally",
            "labelDe": "Aktion: Sammeln",
            "rulesEn": "Rally: Each monster within 3 spaces of Ardus Ix'Erebus discards 1 condition.",
            "rulesDe": "Sammeln: Jedes Monster innerhalb von 3 Feldern um Ardus Ix'Erebus legt 1 Zustand ab."
          },
          {
            "labelEn": "Surge: Pierce 1",
            "labelDe": "Schub: Durchbohren 1",
            "rulesEn": "Pierce X: This attack ignores X Shields on the defense dice.",
            "rulesDe": "Durchbohren X: Dieser Angriff ignoriert X Schilde auf den Verteidigungswürfeln."
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
            "rulesDe": "Blutlinien: Füge Kyndrithuls Verteidigungsergebnissen für jeden kampfunfähigen Helden 1 Schild hinzu."
          },
          {
            "labelEn": "Sorcery 3",
            "labelDe": "Zauberei 3",
            "rulesEn": "Sorcery X: After making an attack roll, Kyndrithul may convert up to X range to Hearts, or up to X Hearts to range.",
            "rulesDe": "Zauberei X: Nach einem Angriffswurf darf Kyndrithul bis zu X Reichweite in Herzen oder bis zu X Herzen in Reichweite umwandeln."
          },
          {
            "labelEn": "Surge: Bone Splinter",
            "labelDe": "Schub: Knochensplitter",
            "rulesEn": "Bone Splinter: Each figure adjacent to the target suffers 2 Hearts.",
            "rulesDe": "Knochensplitter: Jede zum Ziel benachbarte Figur erleidet 2 Herzen."
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
            "rulesDe": "Blutlinien: Füge Kyndrithuls Verteidigungsergebnissen für jeden kampfunfähigen Helden 1 Schild hinzu."
          },
          {
            "labelEn": "Enthrall",
            "labelDe": "Versklaven",
            "rulesEn": "Enthrall: At the start of Kyndrithul's activation, you may choose any number of heroes in his line of sight to test Willpower. If none of the heroes pass, perform an attack with each chosen hero as if it were a monster.",
            "rulesDe": "Versklaven: Zu Beginn von Kyndrithuls Aktivierung darfst du beliebig viele Helden in seiner Sichtlinie eine Willenskraft-Probe ablegen lassen. Gelingt sie keinem der Helden, führe mit jedem gewählten Helden einen Angriff aus, als wäre er ein Monster."
          },
          {
            "labelEn": "Sorcery 4",
            "labelDe": "Zauberei 4",
            "rulesEn": "Sorcery X: After making an attack roll, Kyndrithul may convert up to X range to Hearts, or up to X Hearts to range.",
            "rulesDe": "Zauberei X: Nach einem Angriffswurf darf Kyndrithul bis zu X Reichweite in Herzen oder bis zu X Herzen in Reichweite umwandeln."
          },
          {
            "labelEn": "Surge: Bone Splinter",
            "labelDe": "Schub: Knochensplitter",
            "rulesEn": "Bone Splinter: Each figure adjacent to the target suffers 2 Hearts.",
            "rulesDe": "Knochensplitter: Jede zum Ziel benachbarte Figur erleidet 2 Herzen."
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
            "labelDe": "Seelenherrschaft",
            "rulesEn": "Soul Mastery: Each time a hero within 3 spaces of Zarihell would be defeated, she may test Knowledge. If she passes, before that hero is knocked-out, perform an attack with that hero as if it were a monster. Then, that hero is defeated.",
            "rulesDe": "Seelenherrschaft: Jedes Mal, wenn ein Held innerhalb von 3 Feldern um Zarihell besiegt werden würde, darf sie eine Wissen-Probe ablegen. Gelingt sie, führe vor der Kampfunfähigkeit dieses Helden einen Angriff mit diesem Helden aus, als wäre er ein Monster. Dann ist dieser Held besiegt."
          },
          {
            "labelEn": "Tormentress",
            "labelDe": "Peinigerin",
            "rulesEn": "Tormentress: When a hero starts his turn within 3 spaces of Zarihell or enters a space within 3 spaces of Zarihell, that hero is Terrified.",
            "rulesDe": "Peinigerin: Wenn ein Held seinen Zug innerhalb von 3 Feldern um Zarihell beginnt oder ein Feld innerhalb von 3 Feldern um Zarihell betritt, ist dieser Held verängstigt."
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
            "labelDe": "Seelenherrschaft",
            "rulesEn": "Soul Mastery: Each time a hero within 3 spaces of Zarihell would be defeated, she may test Knowledge. If she passes, before that hero is knocked-out, perform an attack with that hero as if it were a monster. Then, that hero is defeated.",
            "rulesDe": "Seelenherrschaft: Jedes Mal, wenn ein Held innerhalb von 3 Feldern um Zarihell besiegt werden würde, darf sie eine Wissen-Probe ablegen. Gelingt sie, führe vor der Kampfunfähigkeit dieses Helden einen Angriff mit diesem Helden aus, als wäre er ein Monster. Dann ist dieser Held besiegt."
          },
          {
            "labelEn": "Tormentress",
            "labelDe": "Peinigerin",
            "rulesEn": "Tormentress: When a hero starts his turn within 3 spaces of Zarihell or enters a space within 3 spaces of Zarihell, that hero is Terrified.",
            "rulesDe": "Peinigerin: Wenn ein Held seinen Zug innerhalb von 3 Feldern um Zarihell beginnt oder ein Feld innerhalb von 3 Feldern um Zarihell betritt, ist dieser Held verängstigt."
          },
          {
            "labelEn": "Action: Exploit Fear",
            "labelDe": "Aktion: Furcht ausnutzen",
            "rulesEn": "Exploit Fear: Each Terrified hero within 3 spaces of Zarihell tests Willpower. Each hero that fails is Stunned.",
            "rulesDe": "Furcht ausnutzen: Jeder verängstigte Held innerhalb von 3 Feldern um Zarihell legt eine Willenskraft-Probe ab. Jeder Held, dem sie misslingt, ist betäubt."
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
