import type { Agent } from '../types/game'

// Quelle: any2cards/d2e strukturierte Daten (data/agents.js).
// Englischer Text = Originalwortlaut der Karten. Deutscher Text = Community-Übersetzung
// (nicht zwingend identisch mit der offiziellen deutschen FFG-Edition).
//
// Umfang: Grundspiel (6) + saubere Erweiterungs-Agenten (10) = 16 Agenten.
// Agenten = aufgewertete Leutnant-Versionen mit eigenen Fähigkeiten + Plotdeck;
// Agenten-Statkarten führen KEINE Attributwerte. EN 1:1 aus Quelle geparst, DE handübersetzt.
//
// AUSGESCHLOSSEN (Validierung ausstehend): Die Quelldaten für die Agenten von
// Ardus Ix'Erebus / Kyndrithul / Zarihell / Skarn sind in agents.js VERTAUSCHT
// (xws-Schlüssel tragen fremde Fähigkeiten/Regeln, askarn sogar falsche Erweiterung).
// Diese 4 werden erst nach Kartenscan-Validierung ergänzt, statt fehlerhafte Daten zu übernehmen.

export const AGENTS: Agent[] = [
  {
    "id": "abaronzachareth",
    "nameEn": "Baron Zachareth",
    "nameDe": "Baron Zachareth",
    "expansionId": "base",
    "plotDeckEn": "Seeds Of Betrayal",
    "plotDeckDe": "Saat des Verrats",
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
            "labelEn": "Action: Direction",
            "labelDe": "Aktion: Lenkung",
            "rulesEn": "Direction: Choose a hero adjacent to Baron Zachareth and move that hero 2 spaces in any direction. After this movement, the hero tests Willpower. If he fails, the hero is Immobilized.",
            "rulesDe": "Lenkung: Wähle einen zu Baron Zachareth benachbarten Helden und bewege diesen Helden 2 Felder in eine beliebige Richtung. Nach dieser Bewegung legt der Held eine Willenskraft-Probe ab. Misslingt sie, ist der Held bewegungsunfähig."
          },
          {
            "labelEn": "Surge: Pierce 2",
            "labelDe": "Schub: Durchbohren 2",
            "rulesEn": "Pierce X: This attack ignores X Shields rolled on the defense dice.",
            "rulesDe": "Durchbohren X: Dieser Angriff ignoriert X auf den Verteidigungswürfeln gewürfelte Schilde."
          },
          {
            "labelEn": "Surge: Subdue",
            "labelDe": "Schub: Unterwerfen",
            "rulesEn": "Subdue: If this attack deals at least 1 Heart, choose 1 condition. The target suffers the chosen condition.",
            "rulesDe": "Unterwerfen: Fügt dieser Angriff mindestens 1 Herz zu, wähle 1 Zustand. Das Ziel erleidet den gewählten Zustand."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/base-game/act1/bg-baron-zachareth-front.png"
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
            "labelEn": "Action: Direction",
            "labelDe": "Aktion: Lenkung",
            "rulesEn": "Direction: Choose a hero adjacent to Baron Zachareth and move that hero 2 spaces in any direction. After this movement, the hero tests Willpower. If he fails, the hero is Immobilized.",
            "rulesDe": "Lenkung: Wähle einen zu Baron Zachareth benachbarten Helden und bewege diesen Helden 2 Felder in eine beliebige Richtung. Nach dieser Bewegung legt der Held eine Willenskraft-Probe ab. Misslingt sie, ist der Held bewegungsunfähig."
          },
          {
            "labelEn": "Action: Shadow Bolt",
            "labelDe": "Aktion: Schattenblitz",
            "rulesEn": "Shadow Bolt: Zachareth performs a Ranged attack. Range: Blue Red Yellow.",
            "rulesDe": "Schattenblitz: Zachareth führt einen Fernkampfangriff aus. Reichweite: Blau Rot Gelb."
          },
          {
            "labelEn": "Surge: Pierce 2",
            "labelDe": "Schub: Durchbohren 2",
            "rulesEn": "Pierce X: This attack ignores X Shields rolled on the defense dice.",
            "rulesDe": "Durchbohren X: Dieser Angriff ignoriert X auf den Verteidigungswürfeln gewürfelte Schilde."
          },
          {
            "labelEn": "Surge: Subdue",
            "labelDe": "Schub: Unterwerfen",
            "rulesEn": "Subdue: If this attack deals at least 1 Heart, choose 1 condition. The target suffers the chosen condition.",
            "rulesDe": "Unterwerfen: Fügt dieser Angriff mindestens 1 Herz zu, wähle 1 Zustand. Das Ziel erleidet den gewählten Zustand."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/base-game/act2/bg-baron-zachareth-front.png"
      }
    ]
  },
  {
    "id": "abelthir",
    "nameEn": "Belthir",
    "nameDe": "Belthir",
    "expansionId": "base",
    "plotDeckEn": "Hybrid Loyalty",
    "plotDeckDe": "Hybride Loyalität",
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
            "health": 15,
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
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/base-game/act1/bg-belthir-front.png"
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
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/base-game/act2/bg-belthir-front.png"
      }
    ]
  },
  {
    "id": "aladyelizafarrow",
    "nameEn": "Lady Eliza Farrow",
    "nameDe": "Lady Eliza Farrow",
    "expansionId": "base",
    "plotDeckEn": "Endless Thirst",
    "plotDeckDe": "Endloser Durst",
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
            "labelEn": "Action: Allure",
            "labelDe": "Aktion: Betörung",
            "rulesEn": "Allure: You may choose a hero within 3 spaces of Lady Eliza Farrow to test Willpower. If the hero fails, move the hero 1 space in any direction and the hero is Stunned.",
            "rulesDe": "Betörung: Du darfst einen Helden innerhalb von 3 Feldern um Lady Eliza Farrow eine Willenskraft-Probe ablegen lassen. Misslingt sie dem Helden, bewege den Helden 1 Feld in eine beliebige Richtung, und der Held ist betäubt."
          },
          {
            "labelEn": "Surge: Blood Call",
            "labelDe": "Schub: Blutruf",
            "rulesEn": "Blood Call: Lady Eliza Farrow recovers Hearts equal to the amount of Hearts dealt with this attack (after rolling defense dice).",
            "rulesDe": "Blutruf: Lady Eliza Farrow gewinnt so viele Herzen zurück, wie mit diesem Angriff zugefügt wurden (nach dem Wurf der Verteidigungswürfel)."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/base-game/act1/bg-lady-eliza-farrow-front.png"
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
            "labelEn": "Action: Allure",
            "labelDe": "Aktion: Betörung",
            "rulesEn": "Allure: You may choose a hero within 3 spaces of Lady Eliza Farrow to test Willpower. If the hero fails, move the hero 1 space in any direction and the hero is Stunned.",
            "rulesDe": "Betörung: Du darfst einen Helden innerhalb von 3 Feldern um Lady Eliza Farrow eine Willenskraft-Probe ablegen lassen. Misslingt sie dem Helden, bewege den Helden 1 Feld in eine beliebige Richtung, und der Held ist betäubt."
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
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/base-game/act2/bg-lady-eliza-farrow-front.png"
      }
    ]
  },
  {
    "id": "alordmerickfarrow",
    "nameEn": "Lord Merick Farrow",
    "nameDe": "Lord Merick Farrow",
    "expansionId": "base",
    "plotDeckEn": "Cursed By Power",
    "plotDeckDe": "Von Macht verflucht",
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
            "health": 10,
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
            "rulesEn": "Aftershock: When an adjacent hero attacks Lord Merick Farrow, after the attack is resolved, the hero must test Willpower. If he fails, he suffers 1 Fatigue.",
            "rulesDe": "Nachbeben: Wenn ein benachbarter Held Lord Merick Farrow angreift, muss der Held nach dem Abhandeln des Angriffs eine Willenskraft-Probe ablegen. Misslingt sie, erleidet er 1 Erschöpfung."
          },
          {
            "labelEn": "Action: Ignite",
            "labelDe": "Aktion: Entzünden",
            "rulesEn": "Ignite: Lord Merick Farrow suffers 1 Heart to perform an attack that targets all adjacent figures. Each figure rolls defense dice separately. MErick may not perform this action if suffering the Hearts would defeat him.",
            "rulesDe": "Entzünden: Lord Merick Farrow erleidet 1 Herz, um einen Angriff auszuführen, der alle benachbarten Figuren zum Ziel hat. Jede Figur würfelt ihre Verteidigung separat. Merick darf diese Aktion nicht ausführen, wenn das Erleiden der Herzen ihn besiegen würde."
          },
          {
            "labelEn": "Surge: +1 Heart",
            "labelDe": "Schub: +1 Herz"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/base-game/act1/bg-lord-merick-farrow-front.png"
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
            "rulesEn": "Aftershock: When an adjacent hero attacks Lord Merick Farrow, after the attack is resolved, the hero must test Willpower. If he fails, he suffers 1 Fatigue.",
            "rulesDe": "Nachbeben: Wenn ein benachbarter Held Lord Merick Farrow angreift, muss der Held nach dem Abhandeln des Angriffs eine Willenskraft-Probe ablegen. Misslingt sie, erleidet er 1 Erschöpfung."
          },
          {
            "labelEn": "Action: Ignite",
            "labelDe": "Aktion: Entzünden",
            "rulesEn": "Ignite: Lord Merick Farrow suffers 1 Heart to perform an attack that targets all adjacent figures. Each figure rolls defense dice separately. MErick may not perform this action if suffering the Hearts would defeat him.",
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
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/base-game/act2/bg-lord-merick-farrow-front.png"
      }
    ]
  },
  {
    "id": "asiralricfarrow",
    "nameEn": "Sir Alric Farrow",
    "nameDe": "Sir Alric Farrow",
    "expansionId": "base",
    "plotDeckEn": "The Fallen Elite",
    "plotDeckDe": "Die gefallene Elite",
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
            "labelEn": "Action: Overrun",
            "labelDe": "Aktion: Niederrennen",
            "rulesEn": "Overrun: Sir Alric Farrow performs a move action. Each time he moves into a space adjacent to a hero, he may trade spaces with that hero and the hero suffers 1 Fatigue.",
            "rulesDe": "Niederrennen: Sir Alric Farrow führt eine Bewegungsaktion aus. Jedes Mal, wenn er ein Feld betritt, das zu einem Helden benachbart ist, darf er mit diesem Helden die Felder tauschen, und der Held erleidet 1 Erschöpfung."
          },
          {
            "labelEn": "Surge: +1 Heart",
            "labelDe": "Schub: +1 Herz"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/base-game/act1/bg-sir-alric-farrow-front.png"
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
            "rulesEn": "Regeneration 1: At the beginning of the overlord player's turn, Sir Alric Farrow recovers 1 Heart.",
            "rulesDe": "Regeneration 1: Zu Beginn des Zuges des Overlord-Spielers gewinnt Sir Alric Farrow 1 Herz zurück."
          },
          {
            "labelEn": "Unmovable",
            "labelDe": "Unbeweglich",
            "rulesEn": "Unmovable: This monster may choose to ignore any game effect that would force it to move.",
            "rulesDe": "Unbeweglich: Dieses Monster darf jeden Spieleffekt ignorieren, der es zur Bewegung zwingen würde."
          },
          {
            "labelEn": "Action: Overrun",
            "labelDe": "Aktion: Niederrennen",
            "rulesEn": "Overrun: Sir Alric Farrow performs a move action. Each time he moves into a space adjacent to a hero, he may trade spaces with that hero and the hero suffers 1 Fatigue.",
            "rulesDe": "Niederrennen: Sir Alric Farrow führt eine Bewegungsaktion aus. Jedes Mal, wenn er ein Feld betritt, das zu einem Helden benachbart ist, darf er mit diesem Helden die Felder tauschen, und der Held erleidet 1 Erschöpfung."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/base-game/act2/bg-sir-alric-farrow-front.png"
      }
    ]
  },
  {
    "id": "asplig",
    "nameEn": "Splig",
    "nameDe": "Splig",
    "expansionId": "base",
    "plotDeckEn": "Goblin Uprising",
    "plotDeckDe": "Goblin-Aufstand",
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
            "labelEn": "Him Instead!",
            "labelDe": "Der da!",
            "rulesEn": "Him Instead!: Each time Splig is attacked, before dice are rolled, you may choose a monster adjacent to him to become the target of the attack. Range and line of sight are still measured to Splig's space.",
            "rulesDe": "Der da!: Jedes Mal, wenn Splig angegriffen wird, darfst du vor dem Würfeln ein zu ihm benachbartes Monster wählen, das zum Ziel des Angriffs wird. Reichweite und Sichtlinie werden weiterhin zu Spligs Feld gemessen."
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
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/base-game/act1/bg-splig-front.png"
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
            "labelEn": "Him Instead!",
            "labelDe": "Der da!",
            "rulesEn": "Him Instead!: Each time Splig is attacked, before dice are rolled, you may choose a monster adjacent to him to become the target of the attack. Range and line of sight are still measured to Splig's space.",
            "rulesDe": "Der da!: Jedes Mal, wenn Splig angegriffen wird, darfst du vor dem Würfeln ein zu ihm benachbartes Monster wählen, das zum Ziel des Angriffs wird. Reichweite und Sichtlinie werden weiterhin zu Spligs Feld gemessen."
          },
          {
            "labelEn": "Action: Get Them",
            "labelDe": "Aktion: Schnappt sie!",
            "rulesEn": "Get Them: Each minion monster in Splig's monster group may immediately perform an attack. Limit once per round.",
            "rulesDe": "Schnappt sie!: Jedes Diener-Monster in Spligs Monstergruppe darf sofort einen Angriff ausführen. Höchstens einmal pro Runde."
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
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/base-game/act2/bg-splig-front.png"
      }
    ]
  },
  {
    "id": "avalyndra",
    "nameEn": "Valyndra",
    "nameDe": "Valyndra",
    "expansionId": "lair-of-the-wyrm",
    "plotDeckEn": "Dragon's Greed",
    "plotDeckDe": "Gier des Drachen",
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
            "labelEn": "Miser",
            "labelDe": "Geizhals",
            "rulesEn": "Miser: When a hero performs a search action, Valyndra may immediately move up to 2 spaces. Then, the hero's turn resumes.",
            "rulesDe": "Geizhals: Wenn ein Held eine Durchsuchen-Aktion ausführt, darf sich Valyndra sofort bis zu 2 Felder bewegen. Dann wird der Zug des Helden fortgesetzt."
          },
          {
            "labelEn": "Aura 1",
            "labelDe": "Aura 1",
            "rulesEn": "Aura X: Each time a hero enters a space adjacent to this monster, that hero suffers X Hearts.",
            "rulesDe": "Aura X: Jedes Mal, wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet dieser Held X Herzen."
          },
          {
            "labelEn": "Surge: Fire Breath",
            "labelDe": "Schub: Feueratem",
            "rulesEn": "Fire Breath: Starting with the target space, trace a path 4 spaces in any direction. All figures on this path are affected by this attack. Each figure rolls defense dice separately.",
            "rulesDe": "Feueratem: Beginnend mit dem Zielfeld, zeichne einen Pfad von 4 Feldern in eine beliebige Richtung. Alle Figuren auf diesem Pfad sind von diesem Angriff betroffen. Jede Figur würfelt ihre Verteidigung separat."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/lair-of-the-wyrm/act1/lw-valyndra-front.png"
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
            "labelEn": "Miser",
            "labelDe": "Geizhals",
            "rulesEn": "Miser: When a hero performs a search action, Valyndra may immediately move up to 2 spaces. Then, the hero's turn resumes.",
            "rulesDe": "Geizhals: Wenn ein Held eine Durchsuchen-Aktion ausführt, darf sich Valyndra sofort bis zu 2 Felder bewegen. Dann wird der Zug des Helden fortgesetzt."
          },
          {
            "labelEn": "Aura 1",
            "labelDe": "Aura 1",
            "rulesEn": "Aura X: Each time a hero enters a space adjacent to this monster, that hero suffers X Hearts.",
            "rulesDe": "Aura X: Jedes Mal, wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet dieser Held X Herzen."
          },
          {
            "labelEn": "Surge: Fire Breath",
            "labelDe": "Schub: Feueratem",
            "rulesEn": "Fire Breath: Starting with the target space, trace a path 4 spaces in any direction. All figures on this path are affected by this attack. Each figure rolls defense dice separately.",
            "rulesDe": "Feueratem: Beginnend mit dem Zielfeld, zeichne einen Pfad von 4 Feldern in eine beliebige Richtung. Alle Figuren auf diesem Pfad sind von diesem Angriff betroffen. Jede Figur würfelt ihre Verteidigung separat."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/lair-of-the-wyrm/act2/lw-valyndra-front.png"
      }
    ]
  },
  {
    "id": "aariad",
    "nameEn": "Ariad",
    "nameDe": "Ariad",
    "expansionId": "labyrinth-of-ruin",
    "plotDeckEn": "Dark Illusions",
    "plotDeckDe": "Dunkle Illusionen",
    "forms": [
      {
        "act": 1,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow"
        ],
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
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 14,
            "defense": [
              "gray",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Contempt",
            "labelDe": "Verachtung",
            "rulesEn": "Contempt: Each time Ariad performs an attack that targets a hero with a Condition card, that attack gains +1 Heart.",
            "rulesDe": "Verachtung: Jedes Mal, wenn Ariad einen Angriff gegen einen Helden mit einer Zustandskarte ausführt, erhält dieser Angriff +1 Herz."
          },
          {
            "labelEn": "Action: Despair",
            "labelDe": "Aktion: Verzweiflung",
            "rulesEn": "Action: Despair: Each hero within 3 spaces of Ariad tests Willpower. Each hero that fails suffers 2 Fatigue.",
            "rulesDe": "Verzweiflung: Jeder Held innerhalb von 3 Feldern um Ariad legt eine Willenskraft-Probe ab. Jeder Held, dem sie misslingt, erleidet 2 Erschöpfung."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/labyrinth-of-ruin/act1/lr-ariad-front.png"
      },
      {
        "act": 2,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow",
          "yellow"
        ],
        "perPlayer": {
          "p2": {
            "speed": 4,
            "health": 14,
            "defense": [
              "black"
            ]
          },
          "p3": {
            "speed": 4,
            "health": 16,
            "defense": [
              "black",
              "brown"
            ]
          },
          "p4": {
            "speed": 4,
            "health": 18,
            "defense": [
              "black",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Contempt",
            "labelDe": "Verachtung",
            "rulesEn": "Contempt: Each time Ariad performs an attack that targets a hero with a Condition card, that attack gains +1 Heart.",
            "rulesDe": "Verachtung: Jedes Mal, wenn Ariad einen Angriff gegen einen Helden mit einer Zustandskarte ausführt, erhält dieser Angriff +1 Herz."
          },
          {
            "labelEn": "Action: Despair",
            "labelDe": "Aktion: Verzweiflung",
            "rulesEn": "Action: Despair: Each hero within 3 spaces of Ariad tests Willpower. Each hero that fails suffers 2 Fatigue.",
            "rulesDe": "Verzweiflung: Jeder Held innerhalb von 3 Feldern um Ariad legt eine Willenskraft-Probe ab. Jeder Held, dem sie misslingt, erleidet 2 Erschöpfung."
          },
          {
            "labelEn": "Action: Cursed Assault",
            "labelDe": "Aktion: Verfluchter Angriff",
            "rulesEn": "Action: Cursed Assault: Perform an attack that targets each hero in Ariad's line of sight. If insufficient range is rolled for any one target, the entire attack is a miss.",
            "rulesDe": "Verfluchter Angriff: Führe einen Angriff aus, der jeden Helden in Ariads Sichtlinie zum Ziel hat. Wird für ein Ziel zu wenig Reichweite gewürfelt, ist der gesamte Angriff ein Fehlschlag."
          },
          {
            "labelEn": "Surge Surge: +3 Hearts",
            "labelDe": "Schub Schub: +3 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/labyrinth-of-ruin/act2/lr-ariad-front.png"
      }
    ]
  },
  {
    "id": "aqueenariad",
    "nameEn": "Queen Ariad",
    "nameDe": "Königin Ariad",
    "expansionId": "labyrinth-of-ruin",
    "plotDeckEn": "Tangled Web",
    "plotDeckDe": "Verworrenes Netz",
    "forms": [
      {
        "act": 1,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "yellow"
        ],
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 14,
            "defense": [
              "black"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 18,
            "defense": [
              "black",
              "brown"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 22,
            "defense": [
              "black",
              "gray"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Action: Pincer Attack",
            "labelDe": "Aktion: Zangenangriff",
            "rulesEn": "Pincer Attack: Perform an attack that targets up to 2 heroes adjacent to Queen Ariad. One attack roll is made by each hero rolls defense dice separately. Each target that suffers at least 1 Heart from this attack (after the defense roll) is Immobilized.",
            "rulesDe": "Zangenangriff: Führe einen Angriff aus, der bis zu 2 zu Queen Ariad benachbarte Helden zum Ziel hat. Es wird 1 Angriffswurf gemacht, aber jeder Held würfelt seine Verteidigung separat. Jedes Ziel, das durch diesen Angriff mindestens 1 Herz erleidet (nach dem Verteidigungswurf), ist bewegungsunfähig."
          },
          {
            "labelEn": "Surge: Pierce 3",
            "labelDe": "Schub: Durchbohren 3",
            "rulesEn": "Pierce X: This attack ignores X Shields rolled on the defense dice.",
            "rulesDe": "Durchbohren X: Dieser Angriff ignoriert X auf den Verteidigungswürfeln gewürfelte Schilde."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/labyrinth-of-ruin/act1/lr-queen-ariad-front.png"
      },
      {
        "act": 2,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "red",
          "yellow"
        ],
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
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 3,
            "health": 28,
            "defense": [
              "black",
              "gray",
              "brown"
            ]
          }
        },
        "abilities": [
          {
            "labelEn": "Trap Springer",
            "labelDe": "Fallenspringer",
            "rulesEn": "Trap Springer: Each time you play a Trap Overlord card, Queen Ariad may immediately move 1 space.",
            "rulesDe": "Fallenspringer: Jedes Mal, wenn du eine Fallen-Overlord-Karte spielst, darf sich Queen Ariad sofort 1 Feld bewegen."
          },
          {
            "labelEn": "Action: Pincer Attack",
            "labelDe": "Aktion: Zangenangriff",
            "rulesEn": "Pincer Attack: Perform an attack that targets up to 2 heroes adjacent to Queen Ariad. One attack roll is made by each hero rolls defense dice separately. Each target that suffers at least 1 Heart from this attack (after the defense roll) is Immobilized.",
            "rulesDe": "Zangenangriff: Führe einen Angriff aus, der bis zu 2 zu Queen Ariad benachbarte Helden zum Ziel hat. Es wird 1 Angriffswurf gemacht, aber jeder Held würfelt seine Verteidigung separat. Jedes Ziel, das durch diesen Angriff mindestens 1 Herz erleidet (nach dem Verteidigungswurf), ist bewegungsunfähig."
          },
          {
            "labelEn": "Surge: Pierce 3",
            "labelDe": "Schub: Durchbohren 3",
            "rulesEn": "Pierce X: This attack ignores X Shields rolled on the defense dice.",
            "rulesDe": "Durchbohren X: Dieser Angriff ignoriert X auf den Verteidigungswürfeln gewürfelte Schilde."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/labyrinth-of-ruin/act2/lr-queen-ariad-front.png"
      }
    ]
  },
  {
    "id": "araythen",
    "nameEn": "Raythen",
    "nameDe": "Raythen",
    "expansionId": "labyrinth-of-ruin",
    "plotDeckEn": "Skulduggery",
    "plotDeckDe": "Gaunerei",
    "forms": [
      {
        "act": 1,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow"
        ],
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
            "health": 11,
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
            "labelEn": "Surge: Stun",
            "labelDe": "Schub: Betäuben",
            "rulesEn": "Stun: If this attack deals at least 1 Heart (after the defense roll), the target is Stunned.",
            "rulesDe": "Betäuben: Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), ist das Ziel betäubt."
          },
          {
            "labelEn": "Surge Surge: +2 Hearts",
            "labelDe": "Schub Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/labyrinth-of-ruin/act1/lr-raythen-front.png"
      },
      {
        "act": 2,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow",
          "yellow"
        ],
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
              "gray",
              "brown"
            ]
          },
          "p4": {
            "speed": 5,
            "health": 14,
            "defense": [
              "gray",
              "brown"
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
            "rulesEn": "Pilfer: If Raythen is adjacent to a search token, the overlord may look at the top card of the Search deck. Then, he may place it at the top or the bottom of the deck.",
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
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/labyrinth-of-ruin/act2/lr-raythen-front.png"
      }
    ]
  },
  {
    "id": "aserena",
    "nameEn": "Serena",
    "nameDe": "Serena",
    "expansionId": "labyrinth-of-ruin",
    "plotDeckEn": "Silent Protector",
    "plotDeckDe": "Stiller Beschützer",
    "forms": [
      {
        "act": 1,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow"
        ],
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
            "health": 8,
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
            "labelEn": "Action: Miasma",
            "labelDe": "Aktion: Miasma",
            "rulesEn": "Miasma: Each hero within 3 spaces of Serena tests Willpower. Each hero that fails suffers 1 Heart and 1 Fatigue.",
            "rulesDe": "Miasma: Jeder Held innerhalb von 3 Feldern um Serena legt eine Willenskraft-Probe ab. Jeder Held, dem sie misslingt, erleidet 1 Herz und 1 Erschöpfung."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          },
          {
            "labelEn": "Surge: Poison, Disease",
            "labelDe": "Schub: Vergiften, Seuche",
            "rulesEn": "Poison, Disease: If this attack deals at least 1 Heart (after the defense roll), the target is Poisoned and Diseased.",
            "rulesDe": "Vergiften, Seuche: Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), ist das Ziel vergiftet und verseucht."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/labyrinth-of-ruin/act1/lr-serena-front.png"
      },
      {
        "act": 2,
        "expansionId": "labyrinth-of-ruin",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow",
          "yellow"
        ],
        "perPlayer": {
          "p2": {
            "speed": 3,
            "health": 9,
            "defense": [
              "gray"
            ]
          },
          "p3": {
            "speed": 3,
            "health": 11,
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
            "labelEn": "Purity Of Body",
            "labelDe": "Reinheit des Körpers",
            "rulesEn": "Purity Of Body: Serena cannot be Poisoned or Diseased.",
            "rulesDe": "Reinheit des Körpers: Serena kann nicht vergiftet oder verseucht werden."
          },
          {
            "labelEn": "Action: Miasma",
            "labelDe": "Aktion: Miasma",
            "rulesEn": "Miasma: Each hero within 3 spaces of Serena tests Willpower. Each hero that fails suffers 1 Heart and 1 Fatigue.",
            "rulesDe": "Miasma: Jeder Held innerhalb von 3 Feldern um Serena legt eine Willenskraft-Probe ab. Jeder Held, dem sie misslingt, erleidet 1 Herz und 1 Erschöpfung."
          },
          {
            "labelEn": "Surge: Poison, Disease",
            "labelDe": "Schub: Vergiften, Seuche",
            "rulesEn": "Poison, Disease: If this attack deals at least 1 Heart (after the defense roll), the target is Poisoned and Diseased.",
            "rulesDe": "Vergiften, Seuche: Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), ist das Ziel vergiftet und verseucht."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/labyrinth-of-ruin/act2/lr-serena-front.png"
      }
    ]
  },
  {
    "id": "abolgoreth",
    "nameEn": "Bol'Goreth",
    "nameDe": "Bol'Goreth",
    "expansionId": "the-trollfens",
    "plotDeckEn": "Raging Infection",
    "plotDeckDe": "Wütende Infektion",
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
            "labelEn": "Surge: +1 Heart",
            "labelDe": "Schub: +1 Herz"
          },
          {
            "labelEn": "Surge: Disease, Poison",
            "labelDe": "Schub: Seuche, Vergiften",
            "rulesEn": "Disease, Poison: If this attack deals at least 1 Heart (after the defense roll), the target is Diseased and Poisoned.",
            "rulesDe": "Seuche, Vergiften: Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), ist das Ziel verseucht und vergiftet."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/the-trollfens/act1/tf-bolgoreth-front.png"
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
            "health": 22,
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
            "rulesEn": "Resilient: At the start of the overlord player's turn, discard 1 condition token from Bol'Goreth.",
            "rulesDe": "Widerstandsfähig: Zu Beginn des Zuges des Overlord-Spielers lege 1 Zustandsmarker von Bol'Goreth ab."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          },
          {
            "labelEn": "Surge: Disease, Poison",
            "labelDe": "Schub: Seuche, Vergiften",
            "rulesEn": "Disease, Poison: If this attack deals at least 1 Heart (after the defense roll), the target is Diseased and Poisoned.",
            "rulesDe": "Seuche, Vergiften: Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), ist das Ziel verseucht und vergiftet."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/the-trollfens/act2/tf-bolgoreth-front.png"
      }
    ]
  },
  {
    "id": "agarganmirklace",
    "nameEn": "Gargan Mirklace",
    "nameDe": "Gargan Mirklace",
    "expansionId": "shadow-of-nerekhall",
    "plotDeckEn": "Burning Ambition",
    "plotDeckDe": "Brennender Ehrgeiz",
    "forms": [
      {
        "act": 1,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow",
          "red"
        ],
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
            "rulesEn": "Aura X: Each time a hero enters a space adjacent to Gargan Mirklace, that hero suffers X Hearts.",
            "rulesDe": "Aura X: Jedes Mal, wenn ein Held ein zu Gargan Mirklace benachbartes Feld betritt, erleidet dieser Held X Herzen."
          },
          {
            "labelEn": "Action: Split Earth",
            "labelDe": "Aktion: Erdspaltung",
            "rulesEn": "Split Earth: Starting with a space adjacent to Gargan Mirklace, trace a path of 4 spaces in any direction. Each figure on this path suffers 1 Heart and moves to an empty adjacent space of your choice. Limit once per round.",
            "rulesDe": "Erdspaltung: Beginnend mit einem zu Gargan Mirklace benachbarten Feld, zeichne einen Pfad von 4 Feldern in eine beliebige Richtung. Jede Figur auf diesem Pfad erleidet 1 Herz und bewegt sich auf ein leeres benachbartes Feld deiner Wahl. Höchstens einmal pro Runde."
          },
          {
            "labelEn": "Surge Surge: Blast",
            "labelDe": "Schub Schub: Druckwelle",
            "rulesEn": "Blast: This attack affects all figures adjacent to the target space.",
            "rulesDe": "Druckwelle: Dieser Angriff betrifft alle zum Zielfeld benachbarten Figuren."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/shadow-of-nerekhall/act1/sn-gargan-mirklace-front.png"
      },
      {
        "act": 2,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow",
          "yellow",
          "red"
        ],
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
            "rulesEn": "Aura X: Each time a hero enters a space adjacent to Gargan Mirklace, that hero suffers X Hearts.",
            "rulesDe": "Aura X: Jedes Mal, wenn ein Held ein zu Gargan Mirklace benachbartes Feld betritt, erleidet dieser Held X Herzen."
          },
          {
            "labelEn": "Action: Split Earth",
            "labelDe": "Aktion: Erdspaltung",
            "rulesEn": "Split Earth: Starting with a space adjacent to Gargan Mirklace, trace a path of 4 spaces in any direction. Each figure on this path suffers 1 Heart and moves to an empty adjacent space of your choice. Limit once per round.",
            "rulesDe": "Erdspaltung: Beginnend mit einem zu Gargan Mirklace benachbarten Feld, zeichne einen Pfad von 4 Feldern in eine beliebige Richtung. Jede Figur auf diesem Pfad erleidet 1 Herz und bewegt sich auf ein leeres benachbartes Feld deiner Wahl. Höchstens einmal pro Runde."
          },
          {
            "labelEn": "Sorcery 3",
            "labelDe": "Zauberei 3",
            "rulesEn": "Sorcery X: After making an attack roll, Gargan Mirklace may convert up to X range to Hearts, or X Hearts to range.",
            "rulesDe": "Zauberei X: Nach einem Angriffswurf darf Gargan Mirklace bis zu X Reichweite in Herzen oder X Herzen in Reichweite umwandeln."
          },
          {
            "labelEn": "Surge Surge: Blast",
            "labelDe": "Schub Schub: Druckwelle",
            "rulesEn": "Blast: This attack affects all figures adjacent to the target space.",
            "rulesDe": "Druckwelle: Dieser Angriff betrifft alle zum Zielfeld benachbarten Figuren."
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/shadow-of-nerekhall/act2/sn-gargan-mirklace-front.png"
      }
    ]
  },
  {
    "id": "arylanolliven",
    "nameEn": "Rylan Olliven",
    "nameDe": "Rylan Olliven",
    "expansionId": "shadow-of-nerekhall",
    "plotDeckEn": "Inner Corruption",
    "plotDeckDe": "Innere Verderbnis",
    "forms": [
      {
        "act": 1,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow"
        ],
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
            "labelEn": "Surge: Subdue",
            "labelDe": "Schub: Unterwerfen",
            "rulesEn": "Subdue: If this attack deals at least 1 Heart, choose 1 condition. The target suffers the chosen condition.",
            "rulesDe": "Unterwerfen: Fügt dieser Angriff mindestens 1 Herz zu, wähle 1 Zustand. Das Ziel erleidet den gewählten Zustand."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/shadow-of-nerekhall/act1/sn-rylan-olliven-front.png"
      },
      {
        "act": 2,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow",
          "yellow"
        ],
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
            "labelEn": "Surge: Subdue",
            "labelDe": "Schub: Unterwerfen",
            "rulesEn": "Subdue: If this attack deals at least 1 Heart, choose 1 condition. The target suffers the chosen condition.",
            "rulesDe": "Unterwerfen: Fügt dieser Angriff mindestens 1 Herz zu, wähle 1 Zustand. Das Ziel erleidet den gewählten Zustand."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/shadow-of-nerekhall/act2/sn-rylan-olliven-front.png"
      }
    ]
  },
  {
    "id": "atristayneolliven",
    "nameEn": "Tristayne Olliven",
    "nameDe": "Tristayne Olliven",
    "expansionId": "shadow-of-nerekhall",
    "plotDeckEn": "Unstable Forces",
    "plotDeckDe": "Instabile Kräfte",
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
            "rulesEn": "Chaotic Energy: Each time Tristayne Olliven performs an attack, before dice are rolled, you may suffer up to 3 Hearts. This attack deals additional Hearts equal to the Hearts suffered. Tristayne cannot do this if suffering the Hearts would defeat him.",
            "rulesDe": "Chaotische Energie: Jedes Mal, wenn Tristayne Olliven einen Angriff ausführt, darfst du vor dem Würfeln bis zu 3 Herzen erleiden. Dieser Angriff fügt so viele zusätzliche Herzen zu, wie erlitten wurden. Tristayne kann dies nicht tun, wenn das Erleiden der Herzen ihn besiegen würde."
          },
          {
            "labelEn": "Surge: +2 Hearts",
            "labelDe": "Schub: +2 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/shadow-of-nerekhall/act1/sn-tristayne-olliven-front.png"
      },
      {
        "act": 2,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Ranged",
        "attackTypeDe": "Fernkampf",
        "attackDice": [
          "blue",
          "yellow",
          "red"
        ],
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
            "rulesEn": "Soul Siphon: Each time Tristayne Olliven suffers Hearts from any source other than an attack, he may choose an adjacent monster. That monster suffers that amount of Hearts instead.",
            "rulesDe": "Seelenentzug: Jedes Mal, wenn Tristayne Olliven Herzen aus einer anderen Quelle als einem Angriff erleidet, darf er ein benachbartes Monster wählen. Dieses Monster erleidet stattdessen diese Anzahl Herzen."
          },
          {
            "labelEn": "Chaotic Energy",
            "labelDe": "Chaotische Energie",
            "rulesEn": "Chaotic Energy: Each time Tristayne Olliven performs an attack, before dice are rolled, you may suffer up to 3 Hearts. This attack deals additional Hearts equal to the Hearts suffered. Tristayne cannot do this if suffering the Hearts would defeat him.",
            "rulesDe": "Chaotische Energie: Jedes Mal, wenn Tristayne Olliven einen Angriff ausführt, darfst du vor dem Würfeln bis zu 3 Herzen erleiden. Dieser Angriff fügt so viele zusätzliche Herzen zu, wie erlitten wurden. Tristayne kann dies nicht tun, wenn das Erleiden der Herzen ihn besiegen würde."
          },
          {
            "labelEn": "Surge: +3 Hearts",
            "labelDe": "Schub: +3 Herzen"
          }
        ],
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/shadow-of-nerekhall/act2/sn-tristayne-olliven-front.png"
      }
    ]
  },
  {
    "id": "averminous",
    "nameEn": "Verminous",
    "nameDe": "Verminous",
    "expansionId": "shadow-of-nerekhall",
    "plotDeckEn": "Unseen Legions",
    "plotDeckDe": "Ungesehene Legionen",
    "forms": [
      {
        "act": 1,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "yellow"
        ],
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
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/shadow-of-nerekhall/act1/sn-verminous-front.png"
      },
      {
        "act": 2,
        "expansionId": "shadow-of-nerekhall",
        "attackTypeEn": "Melee",
        "attackTypeDe": "Nahkampf",
        "attackDice": [
          "blue",
          "yellow",
          "yellow"
        ],
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
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/agents/d2e/shadow-of-nerekhall/act2/sn-verminous-front.png"
      }
    ]
  }
]
