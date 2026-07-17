import type { PlotDeck } from '../types/game'

// Quelle: any2cards/d2e strukturierte Daten (data/plot-decks.js).
// Englischer Text = Originalwortlaut der Karten.
// Deutscher Text: 6 Decks aus dem Scan „Handlungskarten" (first-legion, dark-illusions,
// seeds-of-betrayal, hybrid-loyalty, raging-infection, unseen-legions) sind seit 2026-07-17
// 1:1 vom deutschen Original-Kartenbild transkribiert (nameDe + rulesDe kartengenau,
// Regel „Kartentext = priorisierte Wahrheit"). Die übrigen 14 Decks: Community-Übersetzung
// (kein deutsches Kartenbild vorhanden) — bei Verfügbarkeit ebenfalls zu korrigieren.
// DE-Kartenbilder der 6 Decks: public/cards/de/plotdecks/<cardId>.webp (plotCardDeUrl).
//
// Plotdecks gehören je zu einem Agenten (Leutnants-Pack). threatCost = Kaufkosten in
// Bedrohungsmarkern, triggerCost = Auslösekosten. Kartenrückseiten ('plot-decks-back')
// werden ausgelassen. EN 1:1 aus Quelle geparst, DE handübersetzt.
// Umfang: GRUNDSPIEL (6) + Erweiterungs-Plotdecks (Lindwurm/Trollsümpfe/Labyrinth/Rabenfels/
// Bilehall (inkl. First Legion)/Nerekhall) = 20 Decks / 200 Karten – ALLE Plotdecks komplett.
// Karten-ID = deckId-xws (ein xws kommt in zwei Decks vor).

export const PLOT_DECKS: PlotDeck[] = [
  {
    "id": "seeds-of-betrayal",
    "nameEn": "Seeds of Betrayal",
    "nameDe": "Saat der Zwietracht",
    "agentEn": "Baron Zachareth",
    "agentDe": "Baron Zachareth",
    "expansionId": "base",
    "cards": [
      {
        "id": "seeds-of-betrayal-solepurpose",
        "nameEn": "Sole Purpose",
        "nameDe": "Zielstrebigkeit",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Use this card when removing Overlord cards from your deck before a quest to remove additional Overlord cards, creating an Overlord deck with a minimum of 13 Overlord cards instead of 15.",
        "rulesDe": "Setze diese Karte ein, um vor einem Abenteuer zusätzliche Overlordkarten aus deinem Deck zu entfernen. Dein Deck muss für dieses Abenteuer aus mindestens 13 Overlordkarten bestehen, statt aus 15.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-sole-purpose.png"
      },
      {
        "id": "seeds-of-betrayal-scryingandplotting",
        "nameEn": "Scrying And Plotting",
        "nameDe": "Vorsehung",
        "threatCost": 1,
        "triggerCost": 3,
        "rulesEn": "Exhaust this card during quest setup. Instead of drawing your starting hand as normal, search your Overlord deck and choose a number of Overlord cards equal to the number of heroes. These cards are your starting hand. Then, shuffle your Overlord deck.",
        "rulesDe": "Erschöpfe diese Karte während des Aufbaus eines Abenteuers. Anstatt wie üblich deine Startkarten zu ziehen, darfst du dir so viele Karten aus deinem Overlorddeck heraussuchen, wie Helden mitspielen. Dies sind jetzt deine Startkarten.\n\nMische danach das Overlorddeck.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-scrying-and-plotting.png"
      },
      {
        "id": "seeds-of-betrayal-alwaysprepared",
        "nameEn": "Always Prepared",
        "nameDe": "Allzeit bereit",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn and discard up to 2 Overlord cards from your hand. Then, draw Overlord cards equal to the number of discarded cards.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges und wirf bis zu 2 Overlordkarten ab. Ziehe dann so viele Karten, wie du abgeworfen hast.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-always-prepared.png"
      },
      {
        "id": "seeds-of-betrayal-nefariouspower",
        "nameEn": "Nefarious Power",
        "nameDe": "Unheimlicher Einfluss",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero performs an attribute test, after the dice are rolled, to add 1 Shield to his results.",
        "rulesDe": "Erschöpfe diese Karte nach einer Attributsprobe eines Helden, um seinen Wurf um 1 [Verteidigung] zu erhöhen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-nefarious-power.png"
      },
      {
        "id": "seeds-of-betrayal-rushofpower",
        "nameEn": "Rush Of Power",
        "nameDe": "Von Macht erfüllt",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. At the end of this turn, draw 2 Overlord cards.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Am Ende deines Zuges ziehst du 2 Overlordkarten.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-rush-of-power.png"
      },
      {
        "id": "seeds-of-betrayal-twoprongedgambit",
        "nameEn": "Two-Pronged Gambit",
        "nameDe": "Alles auf Sieg?",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during setup of the first encounter. Then, place a threat token from the supply beneath this card with either the threat or fortune side faceup. No hero player can know which side is faceup. Reveal the token at the end of the quest. If the threat side is faceup and the overlord won, gain 3 threat. If the fortune side is faceup and the heroes won, gain 3 threat.",
        "rulesDe": "Erschöpfe diese Karte beim Aufbau der ersten Szene eines Abenteuers. Lege dann einen Drohmarker aus dem Vorrat geheim mit der roten oder weißen Seite nach oben unter diese Karte.\n\nZeige am Ende des Abenteuers den Marker unter dieser Karte. Zeigt er die rote Seite und du hast gewonnen, erhältst du 3 Drohmarker. Zeigt er die weiße Seite und die Helden haben gewonnen, erhältst du 3 Drohmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-two-pronged-gambit.png"
      },
      {
        "id": "seeds-of-betrayal-falsefriends",
        "nameEn": "False Friends",
        "nameDe": "Falsche Freunde",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card during setup of the first encounter. While this card is exhausted, reveal 2 fewer Shop Item cards during the next Shopping step of the Campaign phase. This card does not refresh as normal. Refresh this card after the next Shopping step.",
        "rulesDe": "Erschöpfe diese Karte beim Aufbau der ersten Szene eines Abenteuers. Solange diese Karte erschöpft ist, werden im Schritt „Einkaufen\" der nächsten Kampagnenphase 2 Marktkarten weniger aufgedeckt.\n\nDiese Karte wird nicht normal aufgefrischt, sondern erst nach dem nächsten Schritt „Einkaufen\".",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-false-friends.png"
      },
      {
        "id": "seeds-of-betrayal-summonzachareth",
        "nameEn": "Summon - Zachareth",
        "nameDe": "Beschwörung von Zachareth",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of each encounter to choose an open monster group. Replace 1 master and 1 minion monster in the chosen group with the Baron Zachareth agent. If the Baron Zachareth agent is defeated, return this card to your Plot deck. You cannot use this card in \"The Shadow Rune\" campaign.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Szene und wähle eine offene Monstergruppe. Ersetze 1 Elite-Monster und 1 normales Monster der gewählten Gruppe durch den Anführer Baron Zachareth.\n\nWird der Anführer Baron Zachareth besiegt, legst du diese Karte zurück in dein Handlungsdeck.\n\nDu kannst diese Karte nicht in der Kampagne „Die Schattenrune\" einsetzen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-summon-zachareth.png"
      },
      {
        "id": "seeds-of-betrayal-troubleontheroad",
        "nameEn": "Trouble On The Road",
        "nameDe": "Gefährliche Wege",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after the Travel step of the Campaign phase. Each hero tests one attribute of your choice. Each hero that tests Might or Knowledge and fails is Stunned. Each hero that tests Awareness and fails is Diseased. Each hero that tests Willpower and fails is Poisoned.",
        "rulesDe": "Erschöpfe diese Karte nach dem Reiseschritt einer Kampagnenphase. Jeder Held legt eine Attributsprobe deiner Wahl ab.\n\nJeder Held, dessen [Stärke]- oder [Wissen]-Probe misslingt, wird betäubt.\n\nJeder Held, dessen [Geistesgegenwart]-Probe misslingt, erkrankt.\n\nJeder Held, dessen [Willenskraft]-Probe misslingt, wird vergiftet.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-trouble-on-the-road.png"
      },
      {
        "id": "seeds-of-betrayal-meticulousplanning",
        "nameEn": "Meticulous Planning",
        "nameDe": "Ausgeklügelter Plan",
        "threatCost": 4,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after a hero draws (and chooses to keep) a Search card to force that hero to place that Search card on the bottom of the deck and draw a new one.",
        "rulesDe": "Erschöpfe diese Karte, nachdem ein Held eine Suchkarte gezogen hat (und diese behalten möchte). Der Held legt die gezogene Karte unter den Stapel und zieht eine neue.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-meticulous-planning.png"
      }
    ]
  },
  {
    "id": "hybrid-loyalty",
    "nameEn": "Hybrid Loyalty",
    "nameDe": "Gespaltene Loyalität",
    "agentEn": "Belthir",
    "agentDe": "Belthir",
    "expansionId": "base",
    "cards": [
      {
        "id": "hybrid-loyalty-dualtraining",
        "nameEn": "Dual Training",
        "nameDe": "Gruppen-Ausbildung",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you target a monster with the \"Frenzy\" Overlord card. During this turn, each monster in the target monster's group gains +1 Heart on each attack. Exhaust this card when you target a monster with the \"Dash\" Overlord card. Each other monster in the target monster's group may immediately move 1 space.",
        "rulesDe": "Erschöpfe diese Karte, wenn du die Overlordkarte „Wutausbruch“ auf ein Monster spielst. In diesem Zug haben alle Angriffe von Monstern dieser Gruppe +1 [Herz].\n\nErschöpfe diese Karte, wenn du die Overlordkarte „Rennen“ auf ein Monster spielst. Jedes andere Monster dieser Monstergruppe, darf sich sofort 1 Feld bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-dual-training.png"
      },
      {
        "id": "hybrid-loyalty-bribery",
        "nameEn": "Bribery",
        "nameDe": "Bestechung",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after resolving the effects of a \"Dark Charm\" Overlord card to return that card to your hand. Immediately play it, targeting a different hero. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, nachdem du die Overlordkarte „Dunkle Bezauberung“ abgehandelt hast, um sie wieder auf die Hand zu nehmen. Spiele sie sofort wieder auf einen anderen Helden.\n\nDiese Karte wird nicht normal aufgefrischt, sondern erst am Ende jeder Szene.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-bribery.png"
      },
      {
        "id": "hybrid-loyalty-cutadeal",
        "nameEn": "Cut A Deal",
        "nameDe": "Eine Hand wäscht die andere",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card at the end of a quest to add the following Rewards to that quest: If the heroes win, the overlord gains 1 threat token and the heroes receive 25 gold. If the overlord wins, he gains 2 threat tokens and the heroes receive 25 gold.",
        "rulesDe": "Erschöpfe diese Karte nach dem Ende eines Abenteuers. Dieses Abenteuer hat die folgenden zusätzlichen Belohnungen:\n\nWenn die Helden gewinnen, erhält der Overlord 1 Drohmarker und die Helden 25 Goldstücke.\n\nWenn der Overlord gewinnt, erhält er 2 Drohmarker und die Helden 25 Goldstücke.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-cut-a-deal.png"
      },
      {
        "id": "hybrid-loyalty-endit",
        "nameEn": "End It!",
        "nameDe": "Garaus",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you play a \"Critical Blow\" Overlord card to add 1 Surge to the attack results.",
        "rulesDe": "Erschöpfe diese Karte, wenn du die Overlordkarte „Wuchtiger Schlag“ spielst, um dem Angriff +1 [Schub] zu geben.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-end-it.png"
      },
      {
        "id": "hybrid-loyalty-fightwithhonor",
        "nameEn": "Fight With Honor",
        "nameDe": "Ehrenhafter Kampf",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card and discard a Trap Overlord card before triggering the ability of another Plot card. Reduce the Plot card's trigger cost by 1 (to a minimum of 0).",
        "rulesDe": "Erschöpfe diese Karte und wirf eine Overlordkarte des Typs Falle ab, bevor du eine andere Handlungskarte einsetzt. Der Einsatz der anderen Handlungskarte kostet 1 Drohmarker weniger (mindestens 0).",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-fight-with-honor.png"
      },
      {
        "id": "hybrid-loyalty-makeourownluck",
        "nameEn": "Make Our Own Luck",
        "nameDe": "Des eigenen Glückes Schmied",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after resolving a \"Dark Fortune\" Overlord card to change the rerolled die to a result of your choice.",
        "rulesDe": "Erschöpfe diese Karte, nachdem du die Overlordkarte „Dunkles Karma“ gespielt hast, um den neu geworfenen Würfel auf eine beliebige Seite zu drehen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-make-our-own-luck.png"
      },
      {
        "id": "hybrid-loyalty-showofforce",
        "nameEn": "Show Of Force",
        "nameDe": "Demonstration der Stärke",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you knock out a hero, before drawing an overlord card or gaining a threat token for knocking out that hero. While this card is exhausted, each time you gain a threat token, you may draw an Overlord card. This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte, wenn du einen Helden niederstreckst, aber bevor du dafür eine Overlordkarte ziehst oder einen Drohmarker erhältst. Solange diese Karte erschöpft ist, darfst du jedes Mal eine Overlordkarte ziehen, wenn du einen Drohmarker erhältst.\n\nDiese Karte wird nicht normal aufgefrischt, sondern erst am Ende jedes Abenteuers.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-show-of-force.png"
      },
      {
        "id": "hybrid-loyalty-resourceful",
        "nameEn": "Resourceful",
        "nameDe": "Ideenreich",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn instead of drawing an Overlord card. Choose a basic Overlord card in your discard pile and place it on top of your Overlord deck.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges, anstatt eine Overlordkarte zu ziehen.\n\nWähle eine Arsenal-Overlordkarte aus deinem Ablagestapel und lege sie oben auf das Overlorddeck.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-resourceful.png"
      },
      {
        "id": "hybrid-loyalty-summonbelthir",
        "nameEn": "Summon - Belthir",
        "nameDe": "Beschwörung von Belthir",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 1 minion monster in the chosen group with the Belthir agent. If the Belthir agent is defeated during this encounter, return this card to your Plot deck. You cannot use this card in any quest that uses the Belthir lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Szene und wähle eine offene Monstergruppe. Ersetze 1 Elite-Monster und 1 normales Monster der gewählten Gruppe durch den Anführer Belthir.\n\nWird der Anführer Belthir besiegt, legst du diese Karte zurück in dein Handlungsdeck.\n\nDiese Karte kannst du in keinem Abenteuer einsetzen, in dem der Hauptmann Belthir vorkommt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-summon-belthir.png"
      },
      {
        "id": "hybrid-loyalty-hazardpay",
        "nameEn": "Hazard Pay",
        "nameDe": "Gefahr im Verzug",
        "threatCost": 4,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card when placing reinforcements. You may spend threat tokens to place 1 additional monster from one of your monster groups that you can reinforce, respecting group limits. Spend threat tokens as follows: SMALL monsters cost 1 threat token. MEDIUM monsters cost 2 threat tokens. HUGE monsters cost 3 threat tokens. MASSIVE monsters cost 4 threat tokens.",
        "rulesDe": "Erschöpfe diese Karte, wenn du Verstärkungen ins Spiel bringst. Du kannst Drohmarker ausgeben, um 1 zusätzliches Monster einer Monstergruppe, die als Verstärkung vorgesehen ist, ins Spiel zu bringen (Gruppengröße einhalten).\n\nEin kleines Monster kostet 1 Drohmarker; ein mittleres Monster kostet 2 Drohmarker; ein riesiges Monster kostet 3 Drohmarker; ein gewaltiges Monster kostet 4 Drohmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-hazard-pay.png"
      }
    ]
  },
  {
    "id": "endless-thirst",
    "nameEn": "Endless Thirst",
    "nameDe": "Endloser Durst",
    "agentEn": "Lady Eliza Farrow",
    "agentDe": "Lady Eliza Farrow",
    "expansionId": "base",
    "cards": [
      {
        "id": "endless-thirst-bloodline",
        "nameEn": "Bloodline",
        "nameDe": "Blutlinie",
        "threatCost": 0,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card during your turn to choose two monsters. One monster suffers 2 Hearts and the other monster recovers 1 Heart. If both monsters have the Dark monster trait, the monster suffering Hearts suffers 1 fewer Heart.",
        "rulesDe": "Erschöpfe diese Karte während deines Zuges, um zwei Monster zu wählen. Ein Monster erleidet 2 Herzen und das andere Monster gewinnt 1 Herz zurück. Haben beide Monster das Monster-Merkmal „Dunkel\", erleidet das Herzen erleidende Monster 1 Herz weniger.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-bloodline.png"
      },
      {
        "id": "endless-thirst-baddreams",
        "nameEn": "Bad Dreams",
        "nameDe": "Albträume",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of the Travel step of the Campaign phase. Each hero tests Willpower. Each hero who fails suffers 2 Fatigue.",
        "rulesDe": "Erschöpfe diese Karte am Ende des Reiseschritts der Kampagnenphase. Jeder Held legt eine Willenskraft-Probe ab. Jeder Held, dem sie misslingt, erleidet 2 Erschöpfung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-bad-dreams.png"
      },
      {
        "id": "endless-thirst-nightsembrace",
        "nameEn": "Night'S Embrace",
        "nameDe": "Umarmung der Nacht",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Use this card after setup of an encounter to choose one of your monster groups. During this encounter, that monster group gains the Dark monster trait. Place a threat token from the supply on that group's Monster card as a reminder.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung, um eine deiner Monstergruppen zu wählen. Während dieser Begegnung erhält diese Monstergruppe das Monster-Merkmal „Dunkel\". Lege als Erinnerung einen Bedrohungsmarker aus dem Vorrat auf die Monsterkarte dieser Gruppe.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-nights-embrace.png"
      },
      {
        "id": "endless-thirst-fangsinthedark",
        "nameEn": "Fangs In The Dark",
        "nameDe": "Reißzähne im Dunkeln",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster deals at least 1 Heart from an attack. That monster recovers 2 Hearts. If that monster has the Dark monster trait, it recovers an additional 1 Heart.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster mit einem Angriff mindestens 1 Herz zufügt. Dieses Monster gewinnt 2 Herzen zurück. Hat dieses Monster das Monster-Merkmal „Dunkel\", gewinnt es 1 zusätzliches Herz zurück.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-fangs-in-the-dark.png"
      },
      {
        "id": "endless-thirst-thepowerofblood",
        "nameEn": "The Power Of Blood",
        "nameDe": "Die Macht des Blutes",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a SMALL monster declares a move action. Move that monster 1 space. While this card is exhausted, if that monster has the Dark monster trait, it gains +1 Heart on each attack.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein KLEINES Monster eine Bewegungsaktion ansagt. Bewege dieses Monster 1 Feld. Solange diese Karte erschöpft ist, erhält dieses Monster +1 Herz auf jeden Angriff, falls es das Monster-Merkmal „Dunkel\" hat.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-the-power-of-blood.png"
      },
      {
        "id": "endless-thirst-nighttimehunt",
        "nameEn": "Nighttime Hunt",
        "nameDe": "Nächtliche Jagd",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster with the Dark monster trait performs an attack, before dice are rolled, to add 1 additional yellow power die to its attack pool. Exhaust this card when a monster with the Dark monster trait is attacked, before dice are rolled, to add 1 additional black die to its defense pool.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster mit dem Monster-Merkmal „Dunkel\" einen Angriff ausführt, bevor die Würfel geworfen werden, um 1 zusätzlichen gelben Machtwürfel zu seinem Angriffspool hinzuzufügen. Erschöpfe diese Karte, wenn ein Monster mit dem Monster-Merkmal „Dunkel\" angegriffen wird, bevor die Würfel geworfen werden, um 1 zusätzlichen schwarzen Würfel zu seinem Verteidigungspool hinzuzufügen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-nighttime-hunt.png"
      },
      {
        "id": "endless-thirst-scentofblood",
        "nameEn": "Scent Of Blood",
        "nameDe": "Witterung von Blut",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster attacks a hero that has 6 or more damage tokens on his Hero sheet, before dice are rolled. This attack gains: Surge: +3 Hearts. If the monster has the Dark monster trait, you may reroll the attack die once during this attack.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster einen Helden angreift, der 6 oder mehr Schadensmarker auf seinem Heldenbogen hat, bevor die Würfel geworfen werden. Dieser Angriff erhält: Schub: +3 Herzen. Hat das Monster das Monster-Merkmal „Dunkel\", darfst du den Angriffswürfel während dieses Angriffs einmal neu würfeln.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-scent-of-blood.png"
      },
      {
        "id": "endless-thirst-summoneliza",
        "nameEn": "Summon - Eliza",
        "nameDe": "Beschwören – Eliza",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master monster in that group with the Lady Eliza Farrow agent. If the Lady Eliza Farrow agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Lady Eliza Farrow lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister-Monster dieser Gruppe durch den Lady-Eliza-Farrow-Agenten. Wird der Lady-Eliza-Farrow-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Lady-Eliza-Farrow-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-summon-eliza.png"
      },
      {
        "id": "endless-thirst-theladyscare",
        "nameEn": "The Lady'S Care",
        "nameDe": "Die Fürsorge der Lady",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during your turn to choose a monster and roll 1 red power die. The chosen monster recovers Hearts equal to the Hearts rolled. If the chosen monster has the Dark monster trait, each other monster in its group recovers 1 Heart.",
        "rulesDe": "Erschöpfe diese Karte während deines Zuges, um ein Monster zu wählen und 1 roten Machtwürfel zu werfen. Das gewählte Monster gewinnt so viele Herzen zurück, wie gewürfelt wurden. Hat das gewählte Monster das Monster-Merkmal „Dunkel\", gewinnt jedes andere Monster seiner Gruppe 1 Herz zurück.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-the-ladys-care.png"
      },
      {
        "id": "endless-thirst-thetasteofsuffering",
        "nameEn": "The Taste Of Suffering",
        "nameDe": "Der Geschmack des Leids",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster knocks out a hero. Mark that monster by placing 1 threat token from the supply on its base. If it has the Dark monster trait, you may immediately move it up to its Speed. Each marked monster applies +1 to its Health per hero.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster einen Helden kampfunfähig macht. Markiere dieses Monster, indem du 1 Bedrohungsmarker aus dem Vorrat auf seine Basis legst. Hat es das Monster-Merkmal „Dunkel\", darfst du es sofort bis zu seiner Bewegung weit bewegen. Jedes markiertes Monster erhält +1 auf seine Lebenspunkte pro Held.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-the-taste-of-suffering.png"
      }
    ]
  },
  {
    "id": "cursed-by-power",
    "nameEn": "Cursed by Power",
    "nameDe": "Von Macht verflucht",
    "agentEn": "Lord Merick Farrow",
    "agentDe": "Lord Merick Farrow",
    "expansionId": "base",
    "cards": [
      {
        "id": "cursed-by-power-darkpact",
        "nameEn": "Dark Pact",
        "nameDe": "Dunkler Pakt",
        "threatCost": 0,
        "triggerCost": 0,
        "rulesEn": "After setup of the first encounter of each quest, the hero players choose a hero and place that hero's hero token on this card. When the chosen hero suffers any amount of Hearts, he may exhaust this card to reduce the amount of Hearts suffered by up to 2. If he does, you gain 1 threat token. At the end of each quest, discard the hero token from this card.",
        "rulesDe": "Nach dem Aufbau der ersten Begegnung jedes Szenarios wählen die Heldenspieler einen Helden und legen den Heldenmarker dieses Helden auf diese Karte. Wenn der gewählte Held eine beliebige Menge Herzen erleidet, darf er diese Karte erschöpfen, um die Menge der erlittenen Herzen um bis zu 2 zu verringern. Tut er das, erhältst du 1 Bedrohungsmarker. Am Ende jedes Szenarios entferne den Heldenmarker von dieser Karte.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-dark-pact.png"
      },
      {
        "id": "cursed-by-power-greaterpower",
        "nameEn": "Greater Power",
        "nameDe": "Größere Macht",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster performs an attack, after dice are rolled, to discard the top card from your Overlord deck. This attack gains +2 Hearts. If the discarded card was a Magic Overlord card, this attack gains +3 Hearts instead.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster einen Angriff ausführt, nachdem die Würfel geworfen wurden, um die oberste Karte deines Overlord-Decks abzulegen. Dieser Angriff erhält +2 Herzen. War die abgelegte Karte eine Magie-Overlord-Karte, erhält dieser Angriff stattdessen +3 Herzen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-greater-power.png"
      },
      {
        "id": "cursed-by-power-masques",
        "nameEn": "Masques",
        "nameDe": "Maskenspiel",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero performs an attack, before dice are rolled. If you do, the attack is a miss. This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held einen Angriff ausführt, bevor die Würfel geworfen werden. Tust du das, geht der Angriff daneben. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-masques.png"
      },
      {
        "id": "cursed-by-power-thedarkmark",
        "nameEn": "The Dark Mark",
        "nameDe": "Das dunkle Mal",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "After setup of the first encounter of each quest, the hero players choose a hero and place that hero's hero token on this card. Exhaust this card when a hero suffers at least 1 Heart. That hero suffers no Hearts and the hero whose hero token is on this card suffers 2 Hearts instead. At the end of the quest, discard the hero token from this card.",
        "rulesDe": "Nach dem Aufbau der ersten Begegnung jedes Szenarios wählen die Heldenspieler einen Helden und legen den Heldenmarker dieses Helden auf diese Karte. Erschöpfe diese Karte, wenn ein Held mindestens 1 Herz erleidet. Dieser Held erleidet keine Herzen, und stattdessen erleidet der Held, dessen Heldenmarker auf dieser Karte liegt, 2 Herzen. Am Ende des Szenarios entferne den Heldenmarker von dieser Karte.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-the-dark-mark.png"
      },
      {
        "id": "cursed-by-power-thegraspinggrave",
        "nameEn": "The Grasping Grave",
        "nameDe": "Das greifende Grab",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero performs a stand-up action or is revived by another hero. That hero rolls 1 red power die instead of 2.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held eine Aufsteh-Aktion ausführt oder von einem anderen Helden wiederbelebt wird. Dieser Held wirft 1 roten Machtwürfel statt 2.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-the-grasping-grave.png"
      },
      {
        "id": "cursed-by-power-boltfromtheblue",
        "nameEn": "Bolt From The Blue",
        "nameDe": "Blitz aus heiterem Himmel",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during your turn to choose a hero. Perform an attack targeting the chosen hero using the following dice: Range: Blue Yellow. If the total range is less than 4, it is a miss. This attack gains: Surge: +2 Range. Surge: +2 Hearts.",
        "rulesDe": "Erschöpfe diese Karte während deines Zuges, um einen Helden zu wählen. Führe einen Angriff gegen den gewählten Helden mit folgenden Würfeln aus: Reichweite: Blau Gelb. Ist die Gesamtreichweite kleiner als 4, geht er daneben. Dieser Angriff erhält: Schub: +2 Reichweite. Schub: +2 Herzen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-bolt-from-the-blue.png"
      },
      {
        "id": "cursed-by-power-mysticmight",
        "nameEn": "Mystic Might",
        "nameDe": "Mystische Macht",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Use this card after you play a Magic Overlord card. Place 1 fatigue token on this card. You may discard 1 fatigue token from this card, after dice are rolled, to either gain +2 Hearts for an attack or add 2 Shields to a defense result. At the end of each quest, discard all fatigue tokens on this card.",
        "rulesDe": "Nutze diese Karte, nachdem du eine Magie-Overlord-Karte gespielt hast. Lege 1 Erschöpfungsmarker auf diese Karte. Du darfst 1 Erschöpfungsmarker von dieser Karte ablegen, nachdem die Würfel geworfen wurden, um entweder +2 Herzen für einen Angriff zu erhalten oder 2 Schilde zu einem Verteidigungsergebnis hinzuzufügen. Am Ende jedes Szenarios entferne alle Erschöpfungsmarker von dieser Karte.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-mystic-might.png"
      },
      {
        "id": "cursed-by-power-summonmerick",
        "nameEn": "Summon - Merick",
        "nameDe": "Beschwören – Merick",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master monster in that group with the Lord Merick Farrow agent. If the Lord Merick Farrow agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Lord Merick Farrow lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister-Monster dieser Gruppe durch den Lord-Merick-Farrow-Agenten. Wird der Lord-Merick-Farrow-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Lord-Merick-Farrow-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-summon-merick.png"
      },
      {
        "id": "cursed-by-power-thaumaturgy",
        "nameEn": "Thaumaturgy",
        "nameDe": "Thaumaturgie",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn and discard a Magic Overlord card from your hand to search your discard pile for a Magic Overlord card of your choice. Reveal that card and place it in your hand.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges und lege eine Magie-Overlord-Karte von deiner Hand ab, um deinen Ablagestapel nach einer Magie-Overlord-Karte deiner Wahl zu durchsuchen. Decke diese Karte auf und nimm sie auf deine Hand.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-thaumaturgy.png"
      },
      {
        "id": "cursed-by-power-cabal",
        "nameEn": "Cabal",
        "nameDe": "Kabale",
        "threatCost": 4,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter to choose a monster group and place this card near that group's Monster card. Each master monster in that group gains: Surge: Overseer: This monster deals +1 Heart for each other monster in its group within 3 spaces of the target, (to a maximum of +4 Hearts).",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine Monstergruppe zu wählen, und lege diese Karte neben die Monsterkarte dieser Gruppe. Jedes Meister-Monster dieser Gruppe erhält: Schub: Aufseher: Dieses Monster fügt +1 Herz für jedes andere Monster seiner Gruppe innerhalb von 3 Feldern um das Ziel zu (bis zu maximal +4 Herzen).",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-cabal.png"
      }
    ]
  },
  {
    "id": "the-fallen-elite",
    "nameEn": "The Fallen Elite",
    "nameDe": "Die gefallene Elite",
    "agentEn": "Sir Alric Farrow",
    "agentDe": "Sir Alric Farrow",
    "expansionId": "base",
    "cards": [
      {
        "id": "the-fallen-elite-armorofdarkness",
        "nameEn": "Armor Of Darkness",
        "nameDe": "Rüstung der Finsternis",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster is attacked, after dice are rolled, to add 2 Shields to the results.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster angegriffen wird, nachdem die Würfel geworfen wurden, um 2 Schilde zu den Ergebnissen hinzuzufügen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-armor-of-darkness.png"
      },
      {
        "id": "the-fallen-elite-darkchampions",
        "nameEn": "Dark Champions",
        "nameDe": "Dunkle Champions",
        "threatCost": 2,
        "triggerCost": 3,
        "rulesEn": "Exhaust this card after setup of an encounter. While this card is exhausted, each master monster gains +2 Health and adds 1 additional brown die to its defense pool. Each of its attacks gains: Surge: +2 Hearts. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung. Solange diese Karte erschöpft ist, erhält jedes Meister-Monster +2 Lebenspunkte und fügt 1 zusätzlichen braunen Würfel zu seinem Verteidigungspool hinzu. Jeder seiner Angriffe erhält: Schub: +2 Herzen. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-dark-champions.png"
      },
      {
        "id": "the-fallen-elite-fightinformation",
        "nameEn": "Fight In Formation",
        "nameDe": "In Formation kämpfen",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster is attacked, before dice are rolled. Add 1 Shield to the results for each monster in the monster's group that is adjacent to it (to a maximum of 3 Shields). If the defending monster does not suffer at least 1 Heart from this attack, gain 1 threat token.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster angegriffen wird, bevor die Würfel geworfen werden. Füge 1 Schild zu den Ergebnissen hinzu für jedes Monster der Gruppe des Monsters, das ihm benachbart ist (bis zu maximal 3 Schilde). Erleidet das verteidigende Monster durch diesen Angriff nicht mindestens 1 Herz, erhalte 1 Bedrohungsmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-fight-in-formation.png"
      },
      {
        "id": "the-fallen-elite-trialofknighthood",
        "nameEn": "Trial Of Knighthood",
        "nameDe": "Ritterprobe",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a master monster performs an attack, before dice are rolled. If this attack defeats a hero that has at least 4 Might, gain 2 threat tokens. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Meister-Monster einen Angriff ausführt, bevor die Würfel geworfen werden. Besiegt dieser Angriff einen Helden mit mindestens 4 Stärke, erhalte 2 Bedrohungsmarker. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-trial-of-knighthood.png"
      },
      {
        "id": "the-fallen-elite-veterancouncil",
        "nameEn": "Veteran Council",
        "nameDe": "Veteranenrat",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter. At the end of this encounter, gain 1 threat token for each master monster remaining on the map (to a maximum of 3 threat tokens). This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung. Am Ende dieser Begegnung erhalte 1 Bedrohungsmarker für jedes auf dem Spielplan verbliebene Meister-Monster (bis zu maximal 3 Bedrohungsmarker). Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-veteran-council.png"
      },
      {
        "id": "the-fallen-elite-knighttraining",
        "nameEn": "Knight Training",
        "nameDe": "Ritterausbildung",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "After setup of each encounter, choose a monster group of SMALL monsters and place this card near the chosen group's Monster card. Exhaust this card when a monster of the chosen group is attacked, after dice are rolled, to reroll 1 defense die. While this card is exhausted, each time a monster of that group is attacked, after dice are rolled, you may reroll 1 defense die.",
        "rulesDe": "Wähle nach dem Aufbau jeder Begegnung eine Monstergruppe aus KLEINEN Monstern und lege diese Karte neben die Monsterkarte der gewählten Gruppe. Erschöpfe diese Karte, wenn ein Monster der gewählten Gruppe angegriffen wird, nachdem die Würfel geworfen wurden, um 1 Verteidigungswürfel neu zu würfeln. Solange diese Karte erschöpft ist, darfst du jedes Mal, wenn ein Monster dieser Gruppe angegriffen wird, nachdem die Würfel geworfen wurden, 1 Verteidigungswürfel neu würfeln.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-knight-training.png"
      },
      {
        "id": "the-fallen-elite-summonalric",
        "nameEn": "Summon - Alric",
        "nameDe": "Beschwören – Alric",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 1 minion monster in the chosen group with the Sir Alric Farrow agent. If the Sir Alric Farrow agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Sir Alric Farrow lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 1 Diener-Monster der gewählten Gruppe durch den Sir-Alric-Farrow-Agenten. Wird der Sir-Alric-Farrow-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Sir-Alric-Farrow-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-summon-alric.png"
      },
      {
        "id": "the-fallen-elite-unkillable",
        "nameEn": "Unkillable",
        "nameDe": "Untötbar",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card when a master monster is defeated. Replace the master monster with a minion monster from the same monster group, respecting group limits. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Meister-Monster besiegt wird. Ersetze das Meister-Monster durch ein Diener-Monster derselben Monstergruppe, unter Beachtung der Gruppenlimits. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-unkillable.png"
      },
      {
        "id": "the-fallen-elite-vengefulresolve",
        "nameEn": "Vengeful Resolve",
        "nameDe": "Rachsüchtige Entschlossenheit",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "After setup of each encounter, choose a monster group of SMALL monsters and place this card near the chosen group's Monster card. Exhaust this card at the end of your turn. While this card is exhausted, each time a hero performs an attack that deals at least 1 Heart to a monster of that group, that hero suffers 1 Heart.",
        "rulesDe": "Wähle nach dem Aufbau jeder Begegnung eine Monstergruppe aus KLEINEN Monstern und lege diese Karte neben die Monsterkarte der gewählten Gruppe. Erschöpfe diese Karte am Ende deines Zuges. Solange diese Karte erschöpft ist, erleidet jedes Mal, wenn ein Held einen Angriff ausführt, der einem Monster dieser Gruppe mindestens 1 Herz zufügt, dieser Held 1 Herz.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-vengeful-resolve.png"
      },
      {
        "id": "the-fallen-elite-refusetodie",
        "nameEn": "Refuse To Die",
        "nameDe": "Sich weigern zu sterben",
        "threatCost": 4,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card at the start of your turn to choose a monster. Place a threat token on that monster's base as a reminder. While this card is exhausted, the chosen monster applies +2 to its Health. The monster also recovers 2 Hearts at the start of each overlord turn. This card does not refresh as normal. It refreshes when the chosen monster is defeated or at the end of the encounter.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges, um ein Monster zu wählen. Lege als Erinnerung einen Bedrohungsmarker auf die Basis dieses Monsters. Solange diese Karte erschöpft ist, erhält das gewählte Monster +2 auf seine Lebenspunkte. Das Monster gewinnt außerdem zu Beginn jedes Overlord-Zuges 2 Herzen zurück. Diese Karte erholt sich nicht wie üblich. Sie erholt sich, wenn das gewählte Monster besiegt wird oder am Ende der Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-refuse-to-die.png"
      }
    ]
  },
  {
    "id": "goblin-uprising",
    "nameEn": "Goblin Uprising",
    "nameDe": "Goblin-Aufstand",
    "agentEn": "Splig",
    "agentDe": "Splig",
    "expansionId": "base",
    "cards": [
      {
        "id": "goblin-uprising-spiritedretreat",
        "nameEn": "Spirited Retreat",
        "nameDe": "Beherzter Rückzug",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a SMALL monster with the Wilderness monster trait declares a move action. Move that monster 1 space. If that monster ends this move action within 3 spaces of a hero, it may move 1 additional space.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein KLEINES Monster mit dem Monster-Merkmal „Wildnis\" eine Bewegungsaktion ansagt. Bewege dieses Monster 1 Feld. Beendet dieses Monster diese Bewegungsaktion innerhalb von 3 Feldern um einen Helden, darf es sich 1 zusätzliches Feld bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-spirited-retreat.png"
      },
      {
        "id": "goblin-uprising-feralinstincts",
        "nameEn": "Feral Instincts",
        "nameDe": "Wilde Instinkte",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Use this card after setup of an encounter to choose one of your monster groups. During this encounter, that group gains the Wilderness monster trait. Place a threat token from the supply on that group's Monster card as a reminder.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung, um eine deiner Monstergruppen zu wählen. Während dieser Begegnung erhält diese Gruppe das Monster-Merkmal „Wildnis\". Lege als Erinnerung einen Bedrohungsmarker aus dem Vorrat auf die Monsterkarte dieser Gruppe.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-feral-instincts.png"
      },
      {
        "id": "goblin-uprising-emergencyrations",
        "nameEn": "Emergency Rations",
        "nameDe": "Notrationen",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during your turn to choose a monster and roll 1 red power die. The chosen monster recovers Hearts equal to the Hearts rolled. If that monster has the Wilderness monster trait, it recovers 1 additional Heart.",
        "rulesDe": "Erschöpfe diese Karte während deines Zuges, um ein Monster zu wählen und 1 roten Machtwürfel zu werfen. Das gewählte Monster gewinnt so viele Herzen zurück, wie gewürfelt wurden. Hat dieses Monster das Monster-Merkmal „Wildnis\", gewinnt es 1 zusätzliches Herz zurück.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-emergency-rations.png"
      },
      {
        "id": "goblin-uprising-meatshield",
        "nameEn": "Meat Shield",
        "nameDe": "Kanonenfutter",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster suffers any amount of Hearts. Choose a monster adjacent to that monster to suffer all of the Hearts instead.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster eine beliebige Menge Herzen erleidet. Wähle ein zu diesem Monster benachbartes Monster, das stattdessen alle Herzen erleidet.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-meat-shield.png"
      },
      {
        "id": "goblin-uprising-overfed",
        "nameEn": "Overfed",
        "nameDe": "Überfüttert",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter. While this card is exhausted, each monster with the Wilderness monster trait applies +2 to its Health and -1 to its Speed. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung. Solange diese Karte erschöpft ist, erhält jedes Monster mit dem Monster-Merkmal „Wildnis\" +2 auf seine Lebenspunkte und -1 auf seine Bewegung. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-overfed.png"
      },
      {
        "id": "goblin-uprising-diveintocover",
        "nameEn": "Dive Into Cover",
        "nameDe": "In Deckung springen",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after a hero resolves an attack affecting a monster. If that monster was not defeated, it may immediately move 3 spaces. If that monster has the Wilderness monster trait, it adds 1 additional black die to its defense pool until the start of your next turn. Place a threat token from the supply on that monster's base as a reminder.",
        "rulesDe": "Erschöpfe diese Karte, nachdem ein Held einen Angriff abgehandelt hat, der ein Monster betrifft. Wurde dieses Monster nicht besiegt, darf es sich sofort 3 Felder bewegen. Hat dieses Monster das Monster-Merkmal „Wildnis\", fügt es bis zum Beginn deines nächsten Zuges 1 zusätzlichen schwarzen Würfel zu seinem Verteidigungspool hinzu. Lege als Erinnerung einen Bedrohungsmarker aus dem Vorrat auf die Basis dieses Monsters.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-dive-into-cover.png"
      },
      {
        "id": "goblin-uprising-goblinambush",
        "nameEn": "Goblin Ambush",
        "nameDe": "Goblin-Hinterhalt",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after a hero enters an empty space. Perform an attack targeting that hero as if from a master goblin archer. If the total range of this attack is less than 4, it is a miss. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, nachdem ein Held ein leeres Feld betreten hat. Führe einen Angriff gegen diesen Helden aus, als käme er von einem Meister-Goblin-Schützen. Ist die Gesamtreichweite dieses Angriffs kleiner als 4, geht er daneben. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-goblin-ambush.png"
      },
      {
        "id": "goblin-uprising-summonsplig",
        "nameEn": "Summon - Splig",
        "nameDe": "Beschwören – Splig",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master monster in the chosen group with the Splig agent. If the Splig agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Splig lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister-Monster der gewählten Gruppe durch den Splig-Agenten. Wird der Splig-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Splig-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-summon-splig.png"
      },
      {
        "id": "goblin-uprising-raidedarmory",
        "nameEn": "Raided Armory",
        "nameDe": "Geplünderte Waffenkammer",
        "threatCost": 4,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card at the start of your turn and choose a monster group. Place this card near that group's Monster card. While this card is exhausted, each monster in that group adds 1 Surge to each of its attack results and 1 Shield to each of its defense results. If that group has the Wilderness monster trait, each monster in that group gains +1 Heart on each attack.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges und wähle eine Monstergruppe. Lege diese Karte neben die Monsterkarte dieser Gruppe. Solange diese Karte erschöpft ist, fügt jedes Monster dieser Gruppe 1 Schub zu jedem seiner Angriffsergebnisse und 1 Schild zu jedem seiner Verteidigungsergebnisse hinzu. Hat diese Gruppe das Monster-Merkmal „Wildnis\", erhält jedes Monster dieser Gruppe +1 Herz auf jeden Angriff.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-raided-armory.png"
      },
      {
        "id": "goblin-uprising-scavenge",
        "nameEn": "Scavenge",
        "nameDe": "Plündern",
        "threatCost": 4,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. While this card in exhausted, each of your monsters gains: Action: If this monster is in a space containing or adjacent to a knocked-out hero, place 1 threat token from the supply on this card. No more than 6 threat tokens can be on this card at any time. At the end of the quest, gain all threat tokens on this card.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, erhält jedes deiner Monster: Aktion: Befindet sich dieses Monster auf einem Feld, das einen kampfunfähigen Helden enthält oder ihm benachbart ist, lege 1 Bedrohungsmarker aus dem Vorrat auf diese Karte. Es können sich nie mehr als 6 Bedrohungsmarker auf dieser Karte befinden. Am Ende des Szenarios erhalte alle Bedrohungsmarker auf dieser Karte.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-scavenge.png"
      }
    ]
  },
  {
    "id": "dragons-greed",
    "nameEn": "Dragon's Greed",
    "nameDe": "Gier des Drachen",
    "agentEn": "Valyndra",
    "agentDe": "Valyndra",
    "expansionId": "lair-of-the-wyrm",
    "cards": [
      {
        "id": "dragons-greed-mineallmine",
        "nameEn": "Mine All Mine",
        "nameDe": "Alles meins",
        "threatCost": 0,
        "triggerCost": 0,
        "rulesEn": "At the end of each encounter, place a number of threat tokens on this card equal to the number of search tokens remaining on the map. You may return this card to the game box at the end of any quest to gain all threat tokens on this card. If you do not do this, discard all threat tokens on this card.",
        "rulesDe": "Lege am Ende jeder Begegnung so viele Bedrohungsmarker auf diese Karte wie Suchmarker auf dem Spielplan verbleiben. Du darfst diese Karte am Ende eines beliebigen Szenarios zurück in die Spielschachtel legen, um alle Bedrohungsmarker auf dieser Karte zu erhalten. Tust du das nicht, lege alle Bedrohungsmarker auf dieser Karte ab.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-mine-all-mine.png"
      },
      {
        "id": "dragons-greed-ironhardscales",
        "nameEn": "Iron-Hard Scales",
        "nameDe": "Eisenharte Schuppen",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster is attacked, before dice are rolled, to add 2 Shields to the results. If you roll one or more blanks, add an additional 1 Shield to the results.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster angegriffen wird, bevor die Würfel geworfen werden, um 2 Schilde zu den Ergebnissen hinzuzufügen. Würfelst du eine oder mehr Leerseiten, füge 1 zusätzliches Schild zu den Ergebnissen hinzu.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-iron-hard-scales.png"
      },
      {
        "id": "dragons-greed-terrifyingpresence",
        "nameEn": "Terrifying Presence",
        "nameDe": "Furchteinflößende Präsenz",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each hero within 3 spaces of a HUGE or MASSIVE monster applies -1 to his Might, Willpower, Knowledge, and Awareness, (to a minimum of 1).",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, erhält jeder Held innerhalb von 3 Feldern um ein RIESIGES oder GEWALTIGES Monster -1 auf seine Stärke, Willenskraft, sein Wissen und Gespür (mindestens 1).",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-terrifying-presence.png"
      },
      {
        "id": "dragons-greed-auriumplating",
        "nameEn": "Aurium Plating",
        "nameDe": "Auriumpanzerung",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose a HUGE or MASSIVE monster group. Place this card near that group's Monster card. Each monster in that group applies +2 to its Health and is immune to Pierce. This card does not refresh as normal. Refresh this card at the start of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine RIESIGE oder GEWALTIGE Monstergruppe zu wählen. Lege diese Karte neben die Monsterkarte dieser Gruppe. Jedes Monster dieser Gruppe erhält +2 auf seine Lebenspunkte und ist immun gegen Durchbohren. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte zu Beginn jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-aurium-plating.png"
      },
      {
        "id": "dragons-greed-jealousrage",
        "nameEn": "Jealous Rage",
        "nameDe": "Eifersüchtige Wut",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card when a hero declares a search action to choose a monster within 5 spaces of that hero. Remove that monster from the map and place it in an empty space adjacent to that hero. Then, that monster immediately performs an attack targeting that hero. After resolving this attack, if the hero was not defeated, he may continue his turn.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held eine Durchsuchen-Aktion ansagt, um ein Monster innerhalb von 5 Feldern um diesen Helden zu wählen. Entferne dieses Monster vom Spielplan und platziere es auf einem leeren Feld benachbart zu diesem Helden. Dann führt dieses Monster sofort einen Angriff gegen diesen Helden aus. Wurde der Held nach dem Abhandeln dieses Angriffs nicht besiegt, darf er seinen Zug fortsetzen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-jealous-rage.png"
      },
      {
        "id": "dragons-greed-massivebulk",
        "nameEn": "Massive Bulk",
        "nameDe": "Gewaltige Masse",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a HUGE or MASSIVE monster ends or interrupts its movement. You can place that monster's base in spaces occupied by heroes. Move each hero in the occupied spaces to the closest empty space. The HUGE or MASSIVE monster suffers 1 Heart for each hero it moves.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein RIESIGES oder GEWALTIGES Monster seine Bewegung beendet oder unterbricht. Du darfst die Basis dieses Monsters auf von Helden besetzten Feldern platzieren. Bewege jeden Helden auf den besetzten Feldern auf das nächstgelegene leere Feld. Das RIESIGE oder GEWALTIGE Monster erleidet 1 Herz für jeden Helden, den es bewegt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-massive-bulk.png"
      },
      {
        "id": "dragons-greed-punishtheweak",
        "nameEn": "Punish The Weak",
        "nameDe": "Die Schwachen bestrafen",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each of your monsters gains: Surge: Crush: This monster deals +1 Heart for each space its base occupies that exceeds the target hero's Might.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, erhält jedes deiner Monster: Schub: Zermalmen: Dieses Monster fügt +1 Herz für jedes von seiner Basis besetzte Feld zu, das die Stärke des Zielhelden übersteigt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-punish-the-weak.png"
      },
      {
        "id": "dragons-greed-summonvalyndra",
        "nameEn": "Summon - Valyndra",
        "nameDe": "Beschwören – Valyndra",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 2 minion monsters in the chosen group with the Valyndra agent. If the Valyndra agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Valyndra lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 2 Diener-Monster der gewählten Gruppe durch den Valyndra-Agenten. Wird der Valyndra-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Valyndra-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-summon-valyndra.png"
      },
      {
        "id": "dragons-greed-guardiansofthehoard",
        "nameEn": "Guardians Of The Hoard",
        "nameDe": "Wächter des Hortes",
        "threatCost": 4,
        "triggerCost": 0,
        "rulesEn": "Use this card after setup of an encounter to place any number of your threat tokens on this card. Threat tokens on this card cannot be spent during this encounter. Return all threat tokens from this card to your play area at the end of each encounter. If there are more threat tokens on this card than there are HUGE and MASSIVE monsters on the map, each HUGE and MASSIVE monster gains gain +1 Heart on each attack.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung, um beliebig viele deiner Bedrohungsmarker auf diese Karte zu legen. Bedrohungsmarker auf dieser Karte können während dieser Begegnung nicht ausgegeben werden. Lege am Ende jeder Begegnung alle Bedrohungsmarker von dieser Karte zurück in deine Auslage. Liegen auf dieser Karte mehr Bedrohungsmarker, als es RIESIGE und GEWALTIGE Monster auf dem Spielplan gibt, erhält jedes RIESIGE und GEWALTIGE Monster +1 Herz auf jeden Angriff.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-guardians-of-the-hoard.png"
      },
      {
        "id": "dragons-greed-valyndrasshadow",
        "nameEn": "Valyndra'S Shadow",
        "nameDe": "Valyndras Schatten",
        "threatCost": 4,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn to choose a hero. Mark him with a threat token from the supply. At the start of your next turn, perform an attack targeting the marked hero as if from the Valyndra agent. You cannot use this card in any quest that uses the Valyndra lieutenant or the Valyndra agent. This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges, um einen Helden zu wählen. Markiere ihn mit einem Bedrohungsmarker aus dem Vorrat. Führe zu Beginn deines nächsten Zuges einen Angriff gegen den markierten Helden aus, als käme er vom Valyndra-Agenten. Du kannst diese Karte nicht in einem Szenario verwenden, das den Valyndra-Leutnant oder den Valyndra-Agenten nutzt. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-valyndras-shadow.png"
      }
    ]
  },
  {
    "id": "raging-infection",
    "nameEn": "Raging Infection",
    "nameDe": "Grassierende Seuche",
    "agentEn": "Bol'Goreth",
    "agentDe": "Bol'Goreth",
    "expansionId": "the-trollfens",
    "cards": [
      {
        "id": "raging-infection-plaguerelease",
        "nameEn": "Plague Release",
        "nameDe": "Seuchenausbruch",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero who is Poisoned or Diseased is defeated. If that hero was Poisoned, each hero within 3 spaces tests Might. Each hero who fails is Poisoned. If that hero was Diseased, each hero within 3 spaces tests Willpower. Each hero who fails is Diseased.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein vergifteter oder erkrankter Held besiegt wird.\n\nWenn der Held vergiftet war, legt jeder Held innerhalb von 3 Feldern eine [Stärke]-Probe ab. Jeder Held, dessen Probe misslingt, wird vergiftet.\n\nWenn der Held erkrankt war, legt jeder Held innerhalb von 3 Feldern eine [Willenskraft]-Probe ab. Jeder Held, dessen Probe misslingt, erkrankt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-plague-release.png"
      },
      {
        "id": "raging-infection-envenom",
        "nameEn": "Envenom",
        "nameDe": "Giftmeute",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter to choose one of your monster groups, and place this card near that group's Monster card. While this card is exhausted, each master monster in the group gains: Surge: Poison. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Szene und wähle eine deiner Monstergruppen. Lege zur Erinnerung diese Karte neben die entsprechende Monsterkarte. Solange diese Karte erschöpft ist, erhält jedes Elite-Monster dieser Gruppe:\n\n[Schub]: Gift\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern erst am Ende der Szene.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-envenom.png"
      },
      {
        "id": "raging-infection-infected",
        "nameEn": "Infected",
        "nameDe": "Infiziert",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter to choose one of your monster groups, and place this card near that group's Monster card. While this card is exhausted, each master monster in the group gains: Surge: Disease. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Szene und wähle eine deiner Monstergruppen. Lege zur Erinnerung diese Karte neben die entsprechende Monsterkarte. Solange diese Karte erschöpft ist, erhält jedes Elite-Monster dieser Gruppe:\n\n[Schub]: Krankheit\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern erst am Ende der Szene.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-infected.png"
      },
      {
        "id": "raging-infection-afflictionaura",
        "nameEn": "Affliction Aura",
        "nameDe": "Aura des Leidens",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Use this card after setup of an encounter to choose a monster. Each hero that starts his turn within 5 spaces of that monster is Diseased. Place a threat token on the monster's base as a reminder.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Szene, um ein Monster zu wählen. Jeder Held, der seinen Zug innerhalb von 5 Feldern zu diesem Monster beginnt, erkrankt.\n\nLege zur Erinnerung einen Drohmarker aus dem Vorrat auf die Monsterfigur.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-affliction-aura.png"
      },
      {
        "id": "raging-infection-fetidstench",
        "nameEn": "Fetid Stench",
        "nameDe": "Pestgestank",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero passes an attribute test from a Poisoned or Diseased Condition card. That hero fails the test instead.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held die Probe einer Vergiftet- oder Erkrankt-Zustandskarte besteht. Die Probe gilt als misslungen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-fetid-stench.png"
      },
      {
        "id": "raging-infection-massmutation",
        "nameEn": "Mass Mutation",
        "nameDe": "Massenmutation",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. Each hero discards all Condition cards from his play area. For each Condition card discarded, gain 1 threat token (to a maximum of 4). This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Alle Helden werfen alle Zustandskarten ab. Du erhältst für jede abgeworfene Zustandskarte 1 Drohmarker (höchstens 4).\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern erst am Ende des Abenteuers.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-mass-mutation.png"
      },
      {
        "id": "raging-infection-weaknesswithin",
        "nameEn": "Weakness Within",
        "nameDe": "Innere Schwäche",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter. While this card is exhausted, each time a hero fails an attribute test while Poisoned or Diseased, that hero suffers 1 Heart in addition to any other effects. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Szene. Solange diese Karte erschöpft ist, erleidet jeder erkrankte oder vergiftete Held, dem eine Probe misslingt, 1 [Herz] zusätzlich zu allen anderen Folgen der misslungenen Probe.\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern erst am Ende der Szene.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-weakness-within.png"
      },
      {
        "id": "raging-infection-summonbolgoreth",
        "nameEn": "Summon - Bol'Goreth",
        "nameDe": "Beschwörung von Bol'Goreth",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 2 minion monsters in the chosen group with the Bol'Goreth agent. If the Bol'Goreth agent is defeated, return this card to your Plot deck. You cannot use this card in a quest that uses the Bol'Goreth lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Szene und wähle eine offene Monstergruppe. Ersetze 1 Elite-Monster und 2 normale Monster der gewählten Gruppe durch den Anführer Bol'Goreth.\n\nWird der Anführer Bol'Goreth besiegt, legst du diese Karte zurück in dein Handlungsdeck.\n\nDiese Karte kannst du in keinem Abenteuer einsetzen, in dem der Hauptmann Bol'Goreth vorkommt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-summon-bolgoreth.png"
      },
      {
        "id": "raging-infection-weakenedspirit",
        "nameEn": "Weakened Spirit",
        "nameDe": "Geschwächter Wille",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero is defeated to mark that hero with a threat token from the supply. Each marked hero applies -1 to his Willpower (to a minimum of 1) while he is Diseased and -1 to his Might (to a minimum of 1) while he is Poisoned. Discard all threat tokens on heroes at the end of the quest.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held besiegt wird, und markiere ihn mit einem Drohmarker aus dem Vorrat. Jeder so markierte Held erhält -1 auf seine [Willenskraft] (mindestens 1), solange er erkrankt ist, und -1 auf seine [Stärke] (mindestens 1), solange er vergiftet ist.\n\nAm Ende des Abenteuers werfen alle Helden diese Drohmarker wieder ab.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-weakened-spirit.png"
      },
      {
        "id": "raging-infection-virulentcloud",
        "nameEn": "Virulent Cloud",
        "nameDe": "Virulente Wolke",
        "threatCost": 4,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during your turn. Each hero with the Poisoned condition suffers 1 Heart and each hero with the Diseased condition suffers 1 Fatigue. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte in deinem Zug. Jeder vergiftete Held erleidet 1 [Herz], und jeder erkrankte Held erleidet 1 [Erschöpfung].\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern erst am Ende der Szene.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-virulent-cloud.png"
      }
    ]
  },
  {
    "id": "dark-illusions",
    "nameEn": "Dark Illusions",
    "nameDe": "Dunkle Illusionen",
    "agentEn": "Ariad",
    "agentDe": "Ariad",
    "expansionId": "labyrinth-of-ruin",
    "cards": [
      {
        "id": "dark-illusions-misdirection",
        "nameEn": "Misdirection",
        "nameDe": "Irreführung",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster performs an attack that is a miss. Reroll the attack die. If that monster has the Cursed monster trait, you may also reroll 1 power die. If that attack deals at least 1 Heart (after the defense roll), the monster that performed the attack may move 1 space.",
        "rulesDe": "Erschöpfe diese Karte nach einem fehlgeschlagenen Angriff eines Monsters. Wirf den Kampfwürfel neu.\n\nWenn das Monster das Merkmal Verflucht hat, kannst du auch 1 Machtwürfel neu werfen.\n\nWenn dieser Angriff mindestens 1 [Herz] zufügt (nach Verrechnung der [Verteidigung]), kann sich das angreifende Monster um 1 Feld bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-misdirection.png"
      },
      {
        "id": "dark-illusions-intricateschemes",
        "nameEn": "Intricate Schemes",
        "nameDe": "Ausgeklügelter Plan",
        "threatCost": 1,
        "triggerCost": 0,
        "rulesEn": "During the Choose Next Quest step of the Campaign Phase, each time you would choose the next quest to be played, you may force the heroes to choose which quest will be played next. If you do, gain 3 threat tokens.",
        "rulesDe": "Wenn du in Schritt 6 einer Kampagnenphase das nächste Abenteuer aussuchen dürftest, kannst du stattdessen die Helden zwingen, das nächste Abenteuer auszusuchen. Dafür erhältst du 3 Drohmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-intricate-schemes.png"
      },
      {
        "id": "dark-illusions-taintedblood",
        "nameEn": "Tainted Blood",
        "nameDe": "Verderbtes Blut",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Use this card after setup of an encounter to choose one of your monster groups. During this encounter, that monster group gains the Cursed monster trait. Place 1 threat token from the supply on that group's Monster card as a reminder.",
        "rulesDe": "Setze diese Karte nach dem Aufbau einer Szene ein und wähle eine deiner Monstergruppen. Für diese Szene hat die gewählte Gruppe zusätzlich das Merkmal Verflucht.\n\nLege zur Erinnerung einen Drohmarker aus dem Vorrat auf die Monsterkarte.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-tainted-blood.png"
      },
      {
        "id": "dark-illusions-enthrall",
        "nameEn": "Enthrall",
        "nameDe": "Bezaubern",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn to choose 1 monster. Each hero in that monster's line of sight tests Willpower. If that monster has the Cursed monster trait, add 1 Shield to the results of each test. You may move each hero who fails 2 spaces.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges und wähle 1 Monster. Jeder Held in der Sichtlinie dieses Monsters legt eine [Geistesgegenwart]-Probe ab. Hat das Monster das Merkmal Verflucht, wird dem Ergebnis 1 [Verteidigung] hinzugefügt. Du kannst jeden Helden, dessen Probe misslingt, um bis zu 2 Felder bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-enthrall.png"
      },
      {
        "id": "dark-illusions-malediction",
        "nameEn": "Malediction",
        "nameDe": "Verwünschung",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn. While this card is exhausted, each attack that targets a monster with the Cursed monster trait gains +1 Heart. After resolving each of these attacks, the attacking hero suffers 1 Heart and 1 Fatigue.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges. Solange diese Karte erschöpft ist, hat jeder Angriff, der auf ein Monster mit dem Merkmal Verflucht zielt, +1 [Herz]. Nach einem solchen Angriff erleidet der angreifende Held 1 [Herz] und 1 [Erschöpfung].",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-malediction.png"
      },
      {
        "id": "dark-illusions-mirage",
        "nameEn": "Mirage",
        "nameDe": "Trugbild",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero resolves an attack that does not deal at least 1 Heart (after the defense roll). Remove 1 monster affected by this attack from the map and place it in an empty space within 3 spaces of its original space. If that monster has the Cursed monster trait, the attacking hero suffers 1 Fatigue.",
        "rulesDe": "Erschöpfe diese Karte nach einem Angriff eines Helden, der keinen [Herz] zugefügt hat (nach Verrechnung der [Verteidigung]). Nimm 1 von diesem Angriff betroffenes Monster vom Spielplan und stelle es auf ein leeres Feld innerhalb von 3 Feldern seines ursprünglichen Feldes.\n\nHat das Monster das Merkmal Verflucht, erleidet der angreifende Held 1 [Erschöpfung].",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-mirage.png"
      },
      {
        "id": "dark-illusions-darknessfalls",
        "nameEn": "Darkness Falls",
        "nameDe": "Einbruch der Dunkelheit",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. Until the start of your next turn, line of sight for Ranged attacks can only be measured up to a range of 2. Monsters with the Cursed monster trait, lieutenants, and agents are not affected by this card. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Bis zum Beginn deines nächsten Zuges kann für Fernkampfangriffe die Sichtlinie nur 2 Felder weit gezogen werden. Monster mit dem Merkmal Verflucht, Hauptmänner und Anführer sind von dieser Karte nicht betroffen.\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern erst am Ende der Szene.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-darkness-falls.png"
      },
      {
        "id": "dark-illusions-phantasm",
        "nameEn": "Phantasm",
        "nameDe": "Phantasma",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero attacks a master monster with the Cursed monster trait, before dice are rolled. While this card is exhausted, each attack that targets that monster must roll 3 range in addition to any other range requirements, or the attack is a miss.",
        "rulesDe": "Erschöpfe diese Karte vor dem Angriffswurf eines Helden, der auf ein Elite-Monster mit dem Merkmal Verflucht zielt. Solange diese Karte erschöpft ist, muss jeder Angriff, der auf dieses Monster zielt, 3 Reichweite mehr haben als normal; sonst gilt er als Fehlschlag.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-phantasm.png"
      },
      {
        "id": "dark-illusions-summonariad",
        "nameEn": "Summon - Ariad",
        "nameDe": "Beschwörung von Ariad",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 1 minion monster in that group with the Ariad agent. If the Ariad agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Ariad or Queen Ariad lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Szene und wähle eine offene Monstergruppe. Ersetze 1 Elite-Monster und 1 normales Monster der gewählten Gruppe durch die Anführerin Ariad.\n\nWird die Anführerin Ariad besiegt, legst du diese Karte zurück in dein Handlungsdeck.\n\nDiese Karte kannst du in keinem Abenteuer einsetzen, in dem die Hauptmänner Ariad oder Königin Ariad vorkommen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-summon-ariad.png"
      },
      {
        "id": "dark-illusions-theritualcontinues",
        "nameEn": "The Ritual Continues",
        "nameDe": "Das Ewige Ritual",
        "threatCost": 4,
        "triggerCost": 0,
        "rulesEn": "At the start of each encounter, place fatigue tokens on this card equal to the number of heroes. Each of your master monsters gains: Action: Discard 1 fatigue token from \"The Ritual Continues\". At the end of each encounter, if there are no fatigue tokens on this card, gain 2 threat tokens. Then, discard all tokens from this card.",
        "rulesDe": "Lege zu Beginn jeder Szene 1 Erschöpfungsmarker pro Held auf diese Karte. Jedes Elite-Monster hat:\n\n[Aktion]: Wirf 1 Erschöpfungsmarker von „Das Ewige Ritual\" ab.\n\nWenn am Ende einer Szene keine Erschöpfungsmarker auf dieser Karte sind, erhältst du 2 Drohmarker. Unabhängig davon werden danach alle Erschöpfungsmarker von dieser Karte abgeworfen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-the-ritual-continues.png"
      }
    ]
  },
  {
    "id": "tangled-web",
    "nameEn": "Tangled Web",
    "nameDe": "Verworrenes Netz",
    "agentEn": "Queen Ariad",
    "agentDe": "Königin Ariad",
    "expansionId": "labyrinth-of-ruin",
    "cards": [
      {
        "id": "tangled-web-naturalcamouflage",
        "nameEn": "Natural Camouflage",
        "nameDe": "Natürliche Tarnung",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "At the start of an encounter, exhaust this card. While this card is exhausted, each time a monster with the Wilderness monster trait rolls at least 1 blank when rolling defense dice, add 1 Shield to the results for each blank rolled. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn einer Begegnung. Solange diese Karte erschöpft ist, füge jedes Mal, wenn ein Monster mit dem Monster-Merkmal „Wildnis\" beim Werfen der Verteidigungswürfel mindestens 1 Leerseite würfelt, 1 Schild zu den Ergebnissen hinzu für jede gewürfelte Leerseite. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/tangled-web/lr-natural-camouflage.png"
      },
      {
        "id": "tangled-web-feralinstincts",
        "nameEn": "Feral Instincts",
        "nameDe": "Wilde Instinkte",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Use this card after setup of an encounter to choose one of your monster groups. During this encounter, that group gains the Wilderness monster trait. Place a threat token from the supply on that group's Monster card as a reminder.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung, um eine deiner Monstergruppen zu wählen. Während dieser Begegnung erhält diese Gruppe das Monster-Merkmal „Wildnis\". Lege als Erinnerung einen Bedrohungsmarker aus dem Vorrat auf die Monsterkarte dieser Gruppe.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/tangled-web/lr-feral-instincts.png"
      },
      {
        "id": "tangled-web-embracedarkness",
        "nameEn": "Embrace Darkness",
        "nameDe": "Dunkelheit umarmen",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during your turn. Gain 1 threat token for each knocked-out hero. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte während deines Zuges. Erhalte 1 Bedrohungsmarker für jeden kampfunfähigen Helden. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/tangled-web/lr-embrace-darkness.png"
      },
      {
        "id": "tangled-web-entanglingweave",
        "nameEn": "Entangling Weave",
        "nameDe": "Verstrickendes Gewebe",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn to choose a monster group and place this card near that group's Monster card. While this card is exhausted, each hero must spend 1 additional movement point to enter a space adjacent to at least 1 monster in that group.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges, um eine Monstergruppe zu wählen, und lege diese Karte neben die Monsterkarte dieser Gruppe. Solange diese Karte erschöpft ist, muss jeder Held 1 zusätzlichen Bewegungspunkt ausgeben, um ein Feld zu betreten, das zu mindestens 1 Monster dieser Gruppe benachbart ist.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/tangled-web/lr-entangling-weave.png"
      },
      {
        "id": "tangled-web-hiddenpredator",
        "nameEn": "Hidden Predator",
        "nameDe": "Verborgener Räuber",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter. While this card is exhausted, each monster with the Wilderness monster trait gains: Ambush: Each time this monster performs an attack that targets a hero that did not have line of sight to this monster at the start of its activation, that attack gains Pierce 2. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung. Solange diese Karte erschöpft ist, erhält jedes Monster mit dem Monster-Merkmal „Wildnis\": Hinterhalt: Jedes Mal, wenn dieses Monster einen Angriff gegen einen Helden ausführt, der zu Beginn seiner Aktivierung keine Sichtlinie zu diesem Monster hatte, erhält dieser Angriff Durchbohren 2. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/tangled-web/lr-hidden-predator.png"
      },
      {
        "id": "tangled-web-unsafepassage",
        "nameEn": "Unsafe Passage",
        "nameDe": "Unsicherer Durchgang",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after resolving a Trap card to return that card to your hand. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, nachdem du eine Fallenkarte abgehandelt hast, um diese Karte auf deine Hand zurückzunehmen. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/tangled-web/lr-unsafe-passage.png"
      },
      {
        "id": "tangled-web-webofdeception",
        "nameEn": "Web Of Deception",
        "nameDe": "Netz der Täuschung",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero gains a Condition card. Replace that card with a different Condition card of your choice.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held eine Zustandskarte erhält. Ersetze diese Karte durch eine andere Zustandskarte deiner Wahl.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/tangled-web/lr-web-of-deception.png"
      },
      {
        "id": "tangled-web-solitaryprey",
        "nameEn": "Solitary Prey",
        "nameDe": "Einsame Beute",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster performs an attack that targets a hero who is not adjacent to any other hero, before dice are rolled. This attack gains +2 Hearts. Additionally, if the monster has the Wilderness monster trait, this attack gains Pierce 1.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster einen Angriff gegen einen Helden ausführt, der zu keinem anderen Helden benachbart ist, bevor die Würfel geworfen werden. Dieser Angriff erhält +2 Herzen. Hat das Monster außerdem das Monster-Merkmal „Wildnis\", erhält dieser Angriff Durchbohren 1.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/tangled-web/lr-solitary-prey.png"
      },
      {
        "id": "tangled-web-summonqueenariad",
        "nameEn": "Summon - Queen Ariad",
        "nameDe": "Beschwören – Königin Ariad",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace that group with the Queen Ariad agent. If the Queen Ariad agent is defeated, return this card to your Plot deck. You cannot use this card in the \"Labyrinth Of Ruin\" campaign.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze diese Gruppe durch den Königin-Ariad-Agenten. Wird der Königin-Ariad-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in der Kampagne „Labyrinth des Verderbens\" verwenden.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/tangled-web/lr-summon-queen-ariad.png"
      },
      {
        "id": "tangled-web-savageexploitation",
        "nameEn": "Savage Exploitation",
        "nameDe": "Wilde Ausbeutung",
        "threatCost": 4,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card when you resolve a Trap card played on a hero during his turn. Choose 1 monster with the Wilderness monster trait. That monster may immediately perform an attack targeting that hero. After this attack is resolved, the active player resumes his turn.",
        "rulesDe": "Erschöpfe diese Karte, wenn du eine Fallenkarte abhandelst, die während des Zuges eines Helden auf ihn gespielt wurde. Wähle 1 Monster mit dem Monster-Merkmal „Wildnis\". Dieses Monster darf sofort einen Angriff gegen diesen Helden ausführen. Nach dem Abhandeln dieses Angriffs setzt der aktive Spieler seinen Zug fort.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/tangled-web/lr-savage-exploitation.png"
      }
    ]
  },
  {
    "id": "skulduggery",
    "nameEn": "Skulduggery",
    "nameDe": "Gaunerei",
    "agentEn": "Raythen",
    "agentDe": "Raythen",
    "expansionId": "labyrinth-of-ruin",
    "cards": [
      {
        "id": "skulduggery-pettytheft",
        "nameEn": "Petty Theft",
        "nameDe": "Kleiner Diebstahl",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each of your monsters gains the following abilities: This monster may spend 2 movement points to reveal 1 adjacent search token. If it is not a unique search token, place it on this monster's base. While a search token is on this monster's base, the token cannot be searched by any hero. If this monster is defeated or leaves the map for any reason, place any search tokens on its base in the space last occupied by the monster.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, erhält jedes deiner Monster folgende Fähigkeiten: Dieses Monster darf 2 Bewegungspunkte ausgeben, um 1 benachbarten Suchmarker aufzudecken. Ist es kein einzigartiger Suchmarker, lege ihn auf die Basis dieses Monsters. Solange ein Suchmarker auf der Basis dieses Monsters liegt, kann der Marker von keinem Helden durchsucht werden. Wird dieses Monster besiegt oder verlässt es aus irgendeinem Grund den Spielplan, lege alle Suchmarker auf seiner Basis auf das zuletzt von dem Monster besetzte Feld.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/skulduggery/lr-petty-theft.png"
      },
      {
        "id": "skulduggery-concealment",
        "nameEn": "Concealment",
        "nameDe": "Verbergen",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card when you activate a monster with at least 1 search token on its base. Look at the top 2 cards of the Search deck. Place 1 card on the top of the Search deck and 1 card on the bottom. This card does not refresh as normal. Refresh this card at the end of each quest, or spend 1 threat token at the start of your turn to refresh it.",
        "rulesDe": "Erschöpfe diese Karte, wenn du ein Monster mit mindestens 1 Suchmarker auf seiner Basis aktivierst. Sieh dir die obersten 2 Karten des Suchstapels an. Lege 1 Karte oben auf den Suchstapel und 1 Karte unten darunter. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios, oder gib zu Beginn deines Zuges 1 Bedrohungsmarker aus, um sie zu erholen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/skulduggery/lr-concealment.png"
      },
      {
        "id": "skulduggery-covetous",
        "nameEn": "Covetous",
        "nameDe": "Begierig",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero draws a Search card. While this card is exhausted, add 1 Surge to the results of each attack that targets a hero with at least 1 faceup Search card in his play area. This card does not refresh as normal. Refresh this card at the end of your turn.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held eine Suchkarte zieht. Solange diese Karte erschöpft ist, füge 1 Schub zu den Ergebnissen jedes Angriffs hinzu, der einen Helden mit mindestens 1 offen liegenden Suchkarte in seiner Auslage zum Ziel hat. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende deines Zuges.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/skulduggery/lr-covetous.png"
      },
      {
        "id": "skulduggery-distraction",
        "nameEn": "Distraction",
        "nameDe": "Ablenkungsmanöver",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card when a hero declares an attack targeting a monster with at least 1 search token on its base. Remove 1 search token from that monster's base and place it in a space adjacent to the hero performing the attack. That hero immediately searches that search token instead of performing the attack. Then, he is Stunned, and you may move the monster up to 2 spaces.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held einen Angriff gegen ein Monster mit mindestens 1 Suchmarker auf seiner Basis ansagt. Entferne 1 Suchmarker von der Basis dieses Monsters und platziere ihn auf einem Feld benachbart zu dem angreifenden Helden. Dieser Held durchsucht sofort diesen Suchmarker, anstatt den Angriff auszuführen. Dann ist er betäubt, und du darfst das Monster bis zu 2 Felder bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/skulduggery/lr-distraction.png"
      },
      {
        "id": "skulduggery-foiledagain",
        "nameEn": "Foiled Again",
        "nameDe": "Schon wieder vereitelt",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after a hero draws (and chooses to keep) a Search card. Set that Search card aside and that hero draws another Search card. Then, return the Search card that was set aside to the top of the Search deck.",
        "rulesDe": "Erschöpfe diese Karte, nachdem ein Held eine Suchkarte gezogen (und sich entschieden hat, sie zu behalten) hat. Lege diese Suchkarte beiseite, und dieser Held zieht eine andere Suchkarte. Lege dann die beiseitegelegte Suchkarte oben auf den Suchstapel zurück.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/skulduggery/lr-foiled-again.png"
      },
      {
        "id": "skulduggery-slippery",
        "nameEn": "Slippery",
        "nameDe": "Glitschig",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you activate a monster. That monster may move into spaces occupied by enemy figures at a cost of 1 additional movement point per space. The monster must end its movement in an empty space following normal movement rules. If that monster has at least 1 search token on its base, refresh this card at the end of that monster's activation.",
        "rulesDe": "Erschöpfe diese Karte, wenn du ein Monster aktivierst. Dieses Monster darf sich auf von feindlichen Figuren besetzte Felder bewegen, zu Kosten von 1 zusätzlichen Bewegungspunkt pro Feld. Das Monster muss seine Bewegung gemäß den normalen Bewegungsregeln auf einem leeren Feld beenden. Hat dieses Monster mindestens 1 Suchmarker auf seiner Basis, erhole diese Karte am Ende der Aktivierung dieses Monsters.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/skulduggery/lr-slippery.png"
      },
      {
        "id": "skulduggery-baitandswitch",
        "nameEn": "Bait And Switch",
        "nameDe": "Köder und Tausch",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card when a hero enters an empty space adjacent to a search token. Choose 1 SMALL monster within 5 spaces of that search token. The chosen monster and that search token trade spaces. Then, that monster may immediately perform an attack targeting that hero. After this attack is resolved, the active player resumes their turn.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held ein leeres Feld betritt, das zu einem Suchmarker benachbart ist. Wähle 1 KLEINES Monster innerhalb von 5 Feldern um diesen Suchmarker. Das gewählte Monster und dieser Suchmarker tauschen die Felder. Dann darf dieses Monster sofort einen Angriff gegen diesen Helden ausführen. Nach dem Abhandeln dieses Angriffs setzt der aktive Spieler seinen Zug fort.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/skulduggery/lr-bait-and-switch.png"
      },
      {
        "id": "skulduggery-cursedtreasure",
        "nameEn": "Cursed Treasure",
        "nameDe": "Verfluchter Schatz",
        "threatCost": 3,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card when a hero within 3 spaces of a monster searches a search token. You may place 1 threat token on this card. This card cannot hold more than 4 threat tokens at any time. At the end of the quest, gain all threat tokens on this card.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held innerhalb von 3 Feldern um ein Monster einen Suchmarker durchsucht. Du darfst 1 Bedrohungsmarker auf diese Karte legen. Diese Karte kann nie mehr als 4 Bedrohungsmarker tragen. Am Ende des Szenarios erhalte alle Bedrohungsmarker auf dieser Karte.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/skulduggery/lr-cursed-treasure.png"
      },
      {
        "id": "skulduggery-guardedtreasure",
        "nameEn": "Guarded Treasure",
        "nameDe": "Bewachter Schatz",
        "threatCost": 3,
        "triggerCost": 0,
        "rulesEn": "Each monster with at least 1 search token on its base adds 1 Shield to its defense results. At the end of each encounter, if there is at least 1 monster with a search token on its base, gain 1 threat token.",
        "rulesDe": "Jedes Monster mit mindestens 1 Suchmarker auf seiner Basis fügt 1 Schild zu seinen Verteidigungsergebnissen hinzu. Liegt am Ende jeder Begegnung mindestens 1 Monster mit einem Suchmarker auf seiner Basis vor, erhalte 1 Bedrohungsmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/skulduggery/lr-guarded-treasure.png"
      },
      {
        "id": "skulduggery-summonraythen",
        "nameEn": "Summon - Raythen",
        "nameDe": "Beschwören – Raythen",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master monster in that group with the Raythen agent. If the Raythen agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Raythen lieutenant, ally, or hero.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister-Monster dieser Gruppe durch den Raythen-Agenten. Wird der Raythen-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das Raythen als Leutnant, Verbündeten oder Held nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/skulduggery/lr-summon-raythen.png"
      }
    ]
  },
  {
    "id": "silent-protector",
    "nameEn": "Silent Protector",
    "nameDe": "Stiller Beschützer",
    "agentEn": "Serena",
    "agentDe": "Serena",
    "expansionId": "labyrinth-of-ruin",
    "cards": [
      {
        "id": "silent-protector-brethren",
        "nameEn": "Brethren",
        "nameDe": "Brüder",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you activate a monster group with the Civilized monster trait. Choose 2 monsters in that group. The first monster performs 1 less action this turn, and the second monster may perform 1 additional action this turn.",
        "rulesDe": "Erschöpfe diese Karte, wenn du eine Monstergruppe mit dem Monster-Merkmal „Zivilisiert\" aktivierst. Wähle 2 Monster dieser Gruppe. Das erste Monster führt in diesem Zug 1 Aktion weniger aus, und das zweite Monster darf in diesem Zug 1 zusätzliche Aktion ausführen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/silent-protector/lr-brethren.png"
      },
      {
        "id": "silent-protector-diplomatic",
        "nameEn": "Diplomatic",
        "nameDe": "Diplomatisch",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Use this card after setup of an encounter to choose one of your monster groups. During this encounter, that group gains the Civilized monster trait. Place 1 threat token from the supply on that group's Monster card as a reminder.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung, um eine deiner Monstergruppen zu wählen. Während dieser Begegnung erhält diese Gruppe das Monster-Merkmal „Zivilisiert\". Lege als Erinnerung 1 Bedrohungsmarker aus dem Vorrat auf die Monsterkarte dieser Gruppe.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/silent-protector/lr-diplomatic.png"
      },
      {
        "id": "silent-protector-curativespirit",
        "nameEn": "Curative Spirit",
        "nameDe": "Heilender Geist",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each master monster with the Civilized monster trait gains: Action: Perform an attack. If this attack deals at least 1 Heart (after the defense roll), this monster and 1 monster within 3 spaces of this monster each recover 2 Hearts.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, erhält jedes Meister-Monster mit dem Monster-Merkmal „Zivilisiert\": Aktion: Führe einen Angriff aus. Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), gewinnen dieses Monster und 1 Monster innerhalb von 3 Feldern um dieses Monster je 2 Herzen zurück.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/silent-protector/lr-curative-spirit.png"
      },
      {
        "id": "silent-protector-pacify",
        "nameEn": "Pacify",
        "nameDe": "Befrieden",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster performs an attack that targets a hero, before dice are rolled. If that attack is not a miss, that hero is Stunned.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster einen Angriff gegen einen Helden ausführt, bevor die Würfel geworfen werden. Geht dieser Angriff nicht daneben, ist dieser Held betäubt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/silent-protector/lr-pacify.png"
      },
      {
        "id": "silent-protector-pitytheweak",
        "nameEn": "Pity The Weak",
        "nameDe": "Mitleid mit den Schwachen",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero performs an attack targeting a monster that has at least 1 Heart token, before dice are rolled. The hero suffers 1 Fatigue and tests Willpower. If he fails, he removes 1 Surge from the attack results. After the attack is resolved, if that monster has the Civilized monster trait and was not defeated, the monster may move 2 spaces.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held einen Angriff gegen ein Monster mit mindestens 1 Herzmarker ausführt, bevor die Würfel geworfen werden. Der Held erleidet 1 Erschöpfung und legt eine Willenskraft-Probe ab. Misslingt sie, entfernt er 1 Schub aus den Angriffsergebnissen. Hat dieses Monster nach dem Abhandeln des Angriffs das Monster-Merkmal „Zivilisiert\" und wurde nicht besiegt, darf sich das Monster 2 Felder bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/silent-protector/lr-pity-the-weak.png"
      },
      {
        "id": "silent-protector-oathofsilence",
        "nameEn": "Oath Of Silence",
        "nameDe": "Schweigegelübde",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter to choose a monster. While this card is exhausted, that monster cannot perform any actions except for move actions. At the end of each of your turns, each monster within 3 spaces of that monster recovers 2 Hearts. Place 1 threat token from the supply on that monster's base as a reminder. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um ein Monster zu wählen. Solange diese Karte erschöpft ist, kann dieses Monster außer Bewegungsaktionen keine Aktionen ausführen. Am Ende jedes deiner Züge gewinnt jedes Monster innerhalb von 3 Feldern um dieses Monster 2 Herzen zurück. Lege als Erinnerung 1 Bedrohungsmarker aus dem Vorrat auf die Basis dieses Monsters. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/silent-protector/lr-oath-of-silence.png"
      },
      {
        "id": "silent-protector-powerinmourning",
        "nameEn": "Power In Mourning",
        "nameDe": "Macht in der Trauer",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a master monster is defeated. You may place 2 threat tokens on this card. This card cannot hold more than 8 threat tokens at any time. At the end of the quest, gain all threat tokens on this card.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Meister-Monster besiegt wird. Du darfst 2 Bedrohungsmarker auf diese Karte legen. Diese Karte kann nie mehr als 8 Bedrohungsmarker tragen. Am Ende des Szenarios erhalte alle Bedrohungsmarker auf dieser Karte.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/silent-protector/lr-power-in-mourning.png"
      },
      {
        "id": "silent-protector-sharedburdens",
        "nameEn": "Shared Burdens",
        "nameDe": "Geteilte Lasten",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster suffers at least 2 Hearts to reduce the amount of Hearts that monster suffers to a minimum of 1 Heart. Then, all monsters in that monster's group suffer an amount of Hearts equal to the amount by which you reduced the first monster's Hearts, divided any way you choose between those monsters.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster mindestens 2 Herzen erleidet, um die Menge der von diesem Monster erlittenen Herzen auf mindestens 1 Herz zu verringern. Dann erleiden alle Monster der Gruppe dieses Monsters so viele Herzen, wie du die Herzen des ersten Monsters verringert hast, beliebig zwischen diesen Monstern aufgeteilt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/silent-protector/lr-shared-burdens.png"
      },
      {
        "id": "silent-protector-summonserena",
        "nameEn": "Summon - Serena",
        "nameDe": "Beschwören – Serena",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master monster in that group with the Serena agent. If the Serena agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Serena lieutenant, ally, or hero.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister-Monster dieser Gruppe durch den Serena-Agenten. Wird der Serena-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das Serena als Leutnant, Verbündeten oder Held nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/silent-protector/lr-summon-serena.png"
      },
      {
        "id": "silent-protector-travelersrest",
        "nameEn": "Traveler'S Rest",
        "nameDe": "Rast des Reisenden",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card at the end of your turn. While this card is exhausted, heroes cannot suffer Fatigue to gain movement points.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges. Solange diese Karte erschöpft ist, können Helden keine Erschöpfung erleiden, um Bewegungspunkte zu erhalten.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/silent-protector/lr-travelers-rest.png"
      }
    ]
  },
  {
    "id": "twisted-soul",
    "nameEn": "Twisted Soul",
    "nameDe": "Verworrene Seele",
    "agentEn": "Skarn",
    "agentDe": "Skarn",
    "expansionId": "manor-of-ravens",
    "cards": [
      {
        "id": "twisted-soul-whatdoesntkill",
        "nameEn": "What Doesn'T Kill",
        "nameDe": "Was nicht tötet",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster suffers 1 or more Hearts. If that monster was not defeated, it recovers 1 Heart. Mark that monster with a threat token from the supply. Each marked monster adds 1 brown die to its defense pool.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster 1 oder mehr Herzen erleidet. Wurde dieses Monster nicht besiegt, gewinnt es 1 Herz zurück. Markiere dieses Monster mit einem Bedrohungsmarker aus dem Vorrat. Jedes markierte Monster fügt 1 braunen Würfel zu seinem Verteidigungspool hinzu.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/manor-of-ravens/twisted-soul/mr-what-doesnt-kill.png"
      },
      {
        "id": "twisted-soul-possessivenature",
        "nameEn": "Possessive Nature",
        "nameDe": "Besitzergreifende Natur",
        "threatCost": 1,
        "triggerCost": 0,
        "rulesEn": "Use this card when you exhaust the \"Summon Skarn\" Plot card. Gain threat tokens equal to the number of relics in the play areas of the heroes and the overlord. Then, return this card to the game box.",
        "rulesDe": "Nutze diese Karte, wenn du die Plotkarte „Skarn beschwören\" erschöpfst. Erhalte so viele Bedrohungsmarker wie Relikte in den Auslagen der Helden und des Overlords. Lege dann diese Karte zurück in die Spielschachtel.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/manor-of-ravens/twisted-soul/mr-possessive-nature.png"
      },
      {
        "id": "twisted-soul-bitterrage",
        "nameEn": "Bitter Rage",
        "nameDe": "Bittere Wut",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each time a monster marked with a threat token performs an attack, that attack gains +2 Hearts. This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, erhält jedes Mal, wenn ein mit einem Bedrohungsmarker markiertes Monster einen Angriff ausführt, dieser Angriff +2 Herzen. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/manor-of-ravens/twisted-soul/mr-bitter-rage.png"
      },
      {
        "id": "twisted-soul-desolation",
        "nameEn": "Desolation",
        "nameDe": "Trostlosigkeit",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each time a hero suffers 1 or more Fatigue, that hero suffers 1 additional Fatigue. This card does not refresh as normal. Refresh this card at the end of your turn.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, erleidet jedes Mal, wenn ein Held 1 oder mehr Erschöpfung erleidet, dieser Held 1 zusätzliche Erschöpfung. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende deines Zuges.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/manor-of-ravens/twisted-soul/mr-desolation.png"
      },
      {
        "id": "twisted-soul-thickscars",
        "nameEn": "Thick Scars",
        "nameDe": "Dicke Narben",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each monster marked with a threat token applies +2 to its Health. This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, erhält jedes mit einem Bedrohungsmarker markierte Monster +2 auf seine Lebenspunkte. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/manor-of-ravens/twisted-soul/mr-thick-scars.png"
      },
      {
        "id": "twisted-soul-thunderousfall",
        "nameEn": "Thunderous Fall",
        "nameDe": "Donnernder Sturz",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a HUGE or MASSIVE monster suffers damage equal to its Health and is defeated. Each hero adjacent to that monster is Stunned.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein RIESIGES oder GEWALTIGES Monster Schaden in Höhe seiner Lebenspunkte erleidet und besiegt wird. Jeder zu diesem Monster benachbarte Held ist betäubt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/manor-of-ravens/twisted-soul/mr-thunderous-fall.png"
      },
      {
        "id": "twisted-soul-delusionalpath",
        "nameEn": "Delusional Path",
        "nameDe": "Wahnhafter Pfad",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero enters an empty space that is 5 or more spaces away from each other hero. That hero tests Willpower. If he fails, you may immediately move him up to his Speed. Then, the active player continues his turn.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held ein leeres Feld betritt, das 5 oder mehr Felder von jedem anderen Helden entfernt ist. Dieser Held legt eine Willenskraft-Probe ab. Misslingt sie, darfst du ihn sofort bis zu seiner Bewegung weit bewegen. Dann setzt der aktive Spieler seinen Zug fort.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/manor-of-ravens/twisted-soul/mr-delusional-path.png"
      },
      {
        "id": "twisted-soul-summonskarn",
        "nameEn": "Summon Skarn",
        "nameDe": "Skarn beschwören",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 2 minion monsters in that group with the Skarn agent. If the Skarn agent is defeated, return this card to your Plot deck. You cannot use this card in a quest that uses the Skarn lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 2 Diener-Monster dieser Gruppe durch den Skarn-Agenten. Wird der Skarn-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Skarn-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/manor-of-ravens/twisted-soul/mr-summon-skarn.png"
      },
      {
        "id": "twisted-soul-unknownorigin",
        "nameEn": "Unknown Origin",
        "nameDe": "Unbekannter Ursprung",
        "threatCost": 3,
        "triggerCost": 0,
        "rulesEn": "Use this card when you exhaust the \"Summon Skarn\" Plot card. Each hero tests Knowledge. FOr each hero who fails, you gain 1 threat token.",
        "rulesDe": "Nutze diese Karte, wenn du die Plotkarte „Skarn beschwören\" erschöpfst. Jeder Held legt eine Wissen-Probe ab. Für jeden Helden, dem sie misslingt, erhältst du 1 Bedrohungsmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/manor-of-ravens/twisted-soul/mr-unknown-origin.png"
      },
      {
        "id": "twisted-soul-faithfulguardian",
        "nameEn": "Faithful Guardian",
        "nameDe": "Treuer Wächter",
        "threatCost": 4,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card when the Skarn agent is defeated. Gain 3 threat tokens.",
        "rulesDe": "Erschöpfe diese Karte, wenn der Skarn-Agent besiegt wird. Erhalte 3 Bedrohungsmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/manor-of-ravens/twisted-soul/mr-faithful-guardian.png"
      }
    ]
  },
  {
    "id": "vital-essence",
    "nameEn": "Vital Essence",
    "nameDe": "Lebensessenz",
    "agentEn": "Kyndrithul",
    "agentDe": "Kyndrithul",
    "expansionId": "mists-of-bilehall",
    "cards": [
      {
        "id": "vital-essence-broken",
        "nameEn": "Broken",
        "nameDe": "Gebrochen",
        "threatCost": 0,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card when a hero is defeated. Instead of gaining 1 threat token or drawing 1 Overlord card, you may place 1 threat token from the supply on 1 of that hero's Class cards that has a fatigue cost. Each Class card with 1 or more threat tokens on it costs 1 additional fatigue to use. At the end of each quest, return all threat tokens on Class cards to the supply.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held besiegt wird. Anstatt 1 Bedrohungsmarker zu erhalten oder 1 Overlord-Karte zu ziehen, darfst du 1 Bedrohungsmarker aus dem Vorrat auf 1 Klassenkarte dieses Helden legen, die Ausdauer-Kosten hat. Jede Klassenkarte mit 1 oder mehr Bedrohungsmarkern kostet 1 zusätzliche Ausdauer zum Benutzen. Lege am Ende jedes Szenarios alle Bedrohungsmarker auf Klassenkarten zurück in den Vorrat.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/vital-essence/mb-broken.png"
      },
      {
        "id": "vital-essence-lastwords",
        "nameEn": "Last Words",
        "nameDe": "Letzte Worte",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero defeats a lieutenant or agent. Place 1 threat token from the supply on 1 of that hero's Class cards that has a fatigue cost. Then, that hero suffers Fatigue equal to the number of threat tokens on all his Class cards.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held einen Leutnant oder Agenten besiegt. Lege 1 Bedrohungsmarker aus dem Vorrat auf 1 Klassenkarte dieses Helden, die Ausdauer-Kosten hat. Dann erleidet dieser Held so viel Erschöpfung wie die Anzahl der Bedrohungsmarker auf allen seinen Klassenkarten.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/vital-essence/mb-last-words.png"
      },
      {
        "id": "vital-essence-dangerousknowledge",
        "nameEn": "Dangerous Knowledge",
        "nameDe": "Gefährliches Wissen",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card after a hero discards an overlord card from your hand or forces you to place an overlord card on top of your deck. That hero test Knowledge. If he fails, he suffers Hearts equal to the Shields rolled in excess of his Knowledge value. If he passes, gain 1 threat token.",
        "rulesDe": "Erschöpfe diese Karte, nachdem ein Held eine Overlord-Karte von deiner Hand abgelegt oder dich gezwungen hat, eine Overlord-Karte oben auf dein Deck zu legen. Dieser Held legt eine Wissen-Probe ab. Misslingt sie, erleidet er so viele Herzen wie Schilde, die über seinen Wissen-Wert hinaus gewürfelt wurden. Gelingt sie, erhalte 1 Bedrohungsmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/vital-essence/mb-dangerous-knowledge.png"
      },
      {
        "id": "vital-essence-nointerference",
        "nameEn": "No Interference",
        "nameDe": "Keine Einmischung",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each time a hero uses a Class card with 1 or more threat tokens on it, that hero suffers 3 Hearts. This card does not refresh as normal. Refresh this card at the end of your turn.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, erleidet jedes Mal, wenn ein Held eine Klassenkarte mit 1 oder mehr Bedrohungsmarkern benutzt, dieser Held 3 Herzen. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende deines Zuges.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/vital-essence/mb-no-interference.png"
      },
      {
        "id": "vital-essence-plagueofthemind",
        "nameEn": "Plague Of The Mind",
        "nameDe": "Seuche des Geistes",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn and choose 1 hero; mark that hero with a threat token. Each time a marked hero would refresh a Class card with 1 or more threat tokens on it, he may choose to not refresh it. If he does refresh that card, he suffers 1 condition of your choice. When you refresh this card, discard the threat token from the marked hero.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges und wähle 1 Helden; markiere diesen Helden mit einem Bedrohungsmarker. Jedes Mal, wenn ein markierter Held eine Klassenkarte mit 1 oder mehr Bedrohungsmarkern erholen würde, darf er sich entscheiden, sie nicht zu erholen. Erholt er diese Karte, erleidet er 1 Zustand deiner Wahl. Wenn du diese Karte erholst, entferne den Bedrohungsmarker vom markierten Helden.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/vital-essence/mb-plague-of-the-mind.png"
      },
      {
        "id": "vital-essence-bleeditout",
        "nameEn": "Bleed It Out",
        "nameDe": "Ausbluten lassen",
        "threatCost": 3,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card after a hero uses a Class card with 1 or more threat tokens on it. Discard 1 threat token from that Class card. Then, that hero suffers 1 Heart and 1 Fatigue.",
        "rulesDe": "Erschöpfe diese Karte, nachdem ein Held eine Klassenkarte mit 1 oder mehr Bedrohungsmarkern benutzt hat. Lege 1 Bedrohungsmarker von dieser Klassenkarte ab. Dann erleidet dieser Held 1 Herz und 1 Erschöpfung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/vital-essence/mb-bleed-it-out.png"
      },
      {
        "id": "vital-essence-investintheflesh",
        "nameEn": "Invest In The Flesh",
        "nameDe": "In das Fleisch investieren",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Use this card at the end of each quest. For each hero with 1 or more threat tokens on 1 or more of his Class cards, gain 1 threat token.",
        "rulesDe": "Nutze diese Karte am Ende jedes Szenarios. Für jeden Helden mit 1 oder mehr Bedrohungsmarkern auf 1 oder mehr seiner Klassenkarten erhalte 1 Bedrohungsmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/vital-essence/mb-invest-in-the-flesh.png"
      },
      {
        "id": "vital-essence-slowbones",
        "nameEn": "Slow Bones",
        "nameDe": "Träge Knochen",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each hero reduces his Speed by the number of threat tokens on all his Class cards (to a minimum of 1).",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, verringert jeder Held seine Bewegung um die Anzahl der Bedrohungsmarker auf allen seinen Klassenkarten (mindestens 1).",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/vital-essence/mb-slow-bones.png"
      },
      {
        "id": "vital-essence-summonkyndrithul",
        "nameEn": "Summon Kyndrithul",
        "nameDe": "Kyndrithul beschwören",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter and choose one open monster group. Replace 1 master and 2 minion monsters in that group with the Kyndrithul agent. If the Kyndrithul agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Kyndrithul lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung und wähle eine offene Monstergruppe. Ersetze 1 Meister- und 2 Diener-Monster dieser Gruppe durch den Kyndrithul-Agenten. Wird der Kyndrithul-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Kyndrithul-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/vital-essence/mb-summon-kyndrithul.png"
      },
      {
        "id": "vital-essence-worndown",
        "nameEn": "Worn Down",
        "nameDe": "Zermürbt",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after a hero uses a Class card that has a fatigue cost. Place 1 threat token from the supply on that Class card.",
        "rulesDe": "Erschöpfe diese Karte, nachdem ein Held eine Klassenkarte mit Ausdauer-Kosten benutzt hat. Lege 1 Bedrohungsmarker aus dem Vorrat auf diese Klassenkarte.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/vital-essence/mb-worn-down.png"
      }
    ]
  },
  {
    "id": "eternal-agony",
    "nameEn": "Eternal Agony",
    "nameDe": "Ewige Qual",
    "agentEn": "Zarihell",
    "agentDe": "Zarihell",
    "expansionId": "mists-of-bilehall",
    "cards": [
      {
        "id": "eternal-agony-spite",
        "nameEn": "Spite",
        "nameDe": "Boshaftigkeit",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero performs an attack, before rolling dice. After that attack resolves, that hero suffers an amount of Fatigue equal to the Surge results. If that hero did not spend all Surge results during that attack, refresh this card after that attack resolves.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held einen Angriff ausführt, bevor die Würfel geworfen werden. Nachdem dieser Angriff abgehandelt wurde, erleidet dieser Held so viel Erschöpfung wie die Schub-Ergebnisse. Hat dieser Held nicht alle Schub-Ergebnisse während dieses Angriffs eingesetzt, erhole diese Karte, nachdem der Angriff abgehandelt wurde.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/eternal-agony/mb-spite.png"
      },
      {
        "id": "eternal-agony-iflookscouldkill",
        "nameEn": "If Looks Could Kill",
        "nameDe": "Wenn Blicke töten könnten",
        "threatCost": 1,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card when a master monster performs an attack, after spending Surges. If the Shield results are equal to or greater than the Heart results, the target is Poisoned or Diseased, your choice.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Meister-Monster einen Angriff ausführt, nachdem Schübe eingesetzt wurden. Sind die Schild-Ergebnisse gleich oder größer als die Herz-Ergebnisse, ist das Ziel vergiftet oder verseucht (deine Wahl).",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/eternal-agony/mb-if-looks-could-kill.png"
      },
      {
        "id": "eternal-agony-longsuffering",
        "nameEn": "Long Suffering",
        "nameDe": "Langes Leiden",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Each time the Zarihell agent is affected by an attack, before Hearts is dealt, place 1 damage token on this card. Use this card when the Zarihell agent is defeated. Each hero suffers an amount of Hearts equal to the number of damage tokens on his card minus his Knowledge value. Then, gain 1 threat token for each hero defeated by this Hearts.",
        "rulesDe": "Jedes Mal, wenn der Zarihell-Agent von einem Angriff betroffen ist, lege vor dem Zufügen von Herzen 1 Schadensmarker auf diese Karte. Nutze diese Karte, wenn der Zarihell-Agent besiegt wird. Jeder Held erleidet so viele Herzen wie die Anzahl der Schadensmarker auf dieser Karte minus seinem Wissen-Wert. Dann erhalte 1 Bedrohungsmarker für jeden durch diese Herzen besiegten Helden.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/eternal-agony/mb-long-suffering.png"
      },
      {
        "id": "eternal-agony-makenoexcuse",
        "nameEn": "Make No Excuse",
        "nameDe": "Keine Ausreden",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster rolls an X. That monster is immediately defeated. While this card is exhausted, you may change each X result to another result of your choice.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster ein X würfelt. Dieses Monster wird sofort besiegt. Solange diese Karte erschöpft ist, darfst du jedes X-Ergebnis in ein anderes Ergebnis deiner Wahl ändern.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/eternal-agony/mb-make-no-excuse.png"
      },
      {
        "id": "eternal-agony-branded",
        "nameEn": "Branded",
        "nameDe": "Gebrandmarkt",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Use this card when a hero is defeated. Place 1 threat token from the supply on his Hero sheet. Each hero applies -1 to his Willpower and Might for each threat token on his Hero sheet (to a minimum of 1). Each time a hero performs a rest action, he may suffer 2 Fatigue to discard 1 threat token from his Hero sheet. Limit once per rest action.",
        "rulesDe": "Nutze diese Karte, wenn ein Held besiegt wird. Lege 1 Bedrohungsmarker aus dem Vorrat auf seinen Heldenbogen. Jeder Held erhält -1 auf seine Willenskraft und Stärke für jeden Bedrohungsmarker auf seinem Heldenbogen (mindestens 1). Jedes Mal, wenn ein Held eine Rast-Aktion ausführt, darf er 2 Erschöpfung erleiden, um 1 Bedrohungsmarker von seinem Heldenbogen abzulegen. Höchstens einmal pro Rast-Aktion.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/eternal-agony/mb-branded.png"
      },
      {
        "id": "eternal-agony-pinsandneedles",
        "nameEn": "Pins And Needles",
        "nameDe": "Wie auf Nadeln",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card when a hero suffers exactly 1 Heart. That hero suffers an additional 2 Hearts and 1 Fatigue.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held genau 1 Herz erleidet. Dieser Held erleidet zusätzlich 2 Herzen und 1 Erschöpfung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/eternal-agony/mb-pins-and-needles.png"
      },
      {
        "id": "eternal-agony-idlehands",
        "nameEn": "Idle Hands",
        "nameDe": "Müßige Hände",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster that did not perform an attack during its activation ends its activation. That monster suffers 2 Hearts, and 1 other monster in its group immediately performs an attack.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster, das während seiner Aktivierung keinen Angriff ausgeführt hat, seine Aktivierung beendet. Dieses Monster erleidet 2 Herzen, und 1 anderes Monster seiner Gruppe führt sofort einen Angriff aus.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/eternal-agony/mb-idle-hands.png"
      },
      {
        "id": "eternal-agony-sadist",
        "nameEn": "Sadist",
        "nameDe": "Sadist",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each of your plot cards costs 1 less threat to trigger.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, kostet jede deiner Plotkarten 1 Bedrohung weniger zum Auslösen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/eternal-agony/mb-sadist.png"
      },
      {
        "id": "eternal-agony-summonzarihell",
        "nameEn": "Summon Zarihell",
        "nameDe": "Zarihell beschwören",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter and choose one open monster group. Replace 1 master and 2 minion monsters in that group with the Zarihell agent. If the Zarihell agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Zarihell lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung und wähle eine offene Monstergruppe. Ersetze 1 Meister- und 2 Diener-Monster dieser Gruppe durch den Zarihell-Agenten. Wird der Zarihell-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Zarihell-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/eternal-agony/mb-summon-zarihell.png"
      },
      {
        "id": "eternal-agony-timeontherack",
        "nameEn": "Time On The Rack",
        "nameDe": "Zeit auf der Streckbank",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Use this card when a hero ends his turn while knocked out. Choose 1 hero and place 1 of that hero's hero tokens on this card. Each hero applies -1 to his Stamina (to a minimum of 0) for each of his hero tokens on this card. Discard all hero tokens from this card at the end of each quest.",
        "rulesDe": "Nutze diese Karte, wenn ein Held seinen Zug kampfunfähig beendet. Wähle 1 Helden und lege 1 Heldenmarker dieses Helden auf diese Karte. Jeder Held erhält -1 auf seine Ausdauer (mindestens 0) für jeden seiner Heldenmarker auf dieser Karte. Lege am Ende jedes Szenarios alle Heldenmarker von dieser Karte ab.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/eternal-agony/mb-time-on-the-rack.png"
      }
    ]
  },
  {
    "id": "first-legion",
    "nameEn": "First Legion",
    "nameDe": "Die Erste Legion",
    "agentEn": "Ardus Ix'Erebus",
    "agentDe": "Ardus Ix'Erebus",
    "expansionId": "mists-of-bilehall",
    "cards": [
      {
        "id": "first-legion-strengthinnumbers",
        "nameEn": "Strength In Numbers",
        "nameDe": "Zahlenmässige Überlegenheit",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a SMALL monster performs an attack, before dice are rolled. This attack gains: Pierce X, where X is the number of monsters from that monster's group adjacent to the target.",
        "rulesDe": "Erschöpfe diese Karte vor dem Würfelwurf, sobald ein KLEINES Monster einen Angriff durchführt. Dieser Angriff erhält:\n\nDurchbohren X, wobei X die Anzahl Monster aus der Monstergruppe dieses Monsters ist, die zum Ziel benachbart sind.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/first-legion/mb-strength-in-numbers.png"
      },
      {
        "id": "first-legion-camaraderie",
        "nameEn": "Camaraderie",
        "nameDe": "Kameradschaft",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Use this card during setup of an encounter an choose 1 monster group; place a threat token from the supply on that group's Monster card as a reminder. During this encounter, each SMALL monster in that group gains: Comrade: Each time a hero performs an attack that targets a SMALL monster adjacent to this monster, after dice are rolled, that hero must choose to either suffer 1 Fatigue or not spend Surges during that attack.",
        "rulesDe": "Verwende diese Karte während des Aufbaus einer Szene und wähle 1 Monstergruppe; lege als Erinnerung einen Drohmarker aus dem Vorrat auf die Monsterkarte. Während dieser Szene erhält jedes KLEINE Monster in dieser Gruppe:\n\nKamerad: Jedes Mal wenn ein Held einen Angriff ausführt, der ein KLEINES Monster zum Ziel hat, das zu diesem Monster benachbart ist, muss der Held nach dem Würfelwurf wählen: entweder erleidet er 1 [Erschöpfung] oder er setzt in diesem Angriff keine [Schub] ein.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/first-legion/mb-camaraderie.png"
      },
      {
        "id": "first-legion-fealty",
        "nameEn": "Fealty",
        "nameDe": "Lehnstreue",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn. While this card is exhausted, each time a master monster or lieutenant is affected by an attack, after dice are rolled, you may choose 1 SMALL minion monster adjacent to that master monster or lieutenant to suffer 5 Hearts. If you do, add 2 Shields to that master monster or lieutenant's defense results.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges. Solange diese Karte erschöpft ist, darfst du jedes Mal wenn ein Elite-Monster oder ein Hauptmann von einem Angriff betroffen ist, nach dem Würfelwurf 1 KLEINES normales Monster auswählen, das zu diesem Elite-Monster oder Hauptmann benachbart ist, und es 5 [Herz] erleiden lassen. Wenn du das tust, füge zum Verteidigungsergebnis des Elite-Monsters oder Hauptmanns 2 [Verteidigung] hinzu.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/first-legion/mb-fealty.png"
      },
      {
        "id": "first-legion-retribution",
        "nameEn": "Retribution",
        "nameDe": "Vergeltung",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when 2 or more SMALL monsters are defeated by the same attack. Choose 1 monster from the same monster group as 1 of the defeated monsters. The chosen monster immediately moves up to its Speed and then performs an attack. This attack gains: Pierce X, where X is the number of monsters defeated by the hero's attack.",
        "rulesDe": "Erschöpfe diese Karte, wenn 2 oder mehr KLEINE Monster in demselben Angriff besiegt werden. Wähle 1 Monster aus derselben Monstergruppe von 1 der besiegten Monster. Das gewählte Monster bewegt sich sofort bis zu seiner Geschwindigkeit und führt dann einen Angriff aus. Dieser Angriff erhält:\n\nDurchbohren X, wobei X die Anzahl Monster ist, die durch den Angriff dieses Helden besiegt worden sind.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/first-legion/mb-retribution.png"
      },
      {
        "id": "first-legion-swarmingtide",
        "nameEn": "Swarming Tide",
        "nameDe": "Ansturm der Horde",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn. While this card is exhausted, at the start of each hero's turn, that hero tests Willpower. If he fails, he suffers 1 Fatigue for each monster adjacent to him.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges. Solange diese Karte erschöpft ist, legt jeder Held zu Beginn seines Zuges eine [Geistesgegenwart]-Probe ab. Wenn sie misslingt, erleidet er 1 [Erschöpfung] für jedes zu ihm benachbarte Monster.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/first-legion/mb-swarming-tide.png"
      },
      {
        "id": "first-legion-threateningmasses",
        "nameEn": "Threatening Masses",
        "nameDe": "Bedrohliche Massen",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero enters an empty space adjacent to 1 or more monsters during his turn. That hero must choose to either immediately end his turn or test Might. If he tests and fails, gain 1 threat token for each monster adjacent to that hero. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held in seinem Zug ein leeres Feld betritt, das zu 1 oder mehreren Monstern benachbart ist. Dieser Held muss wählen: Entweder beendet er seinen Zug sofort oder er legt eine [Stärke]-Probe ab. Wenn er die Probe ablegt und sie misslingt, erhältst du 1 Drohmarker für jedes zu diesem Helden benachbarte Monster.\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern am Ende jeder Szene.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/first-legion/mb-threatening-masses.png"
      },
      {
        "id": "first-legion-defensiveposition",
        "nameEn": "Defensive Position",
        "nameDe": "Verteidigungsposition",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card at the end of your turn and choose 1 tile; place a threat token from the supply on that tile as a reminder. While this card is exhausted, each time a hero spends movement points to enter a space on the chosen tile, he must spend 1 additional movement point. This card does not refresh as normal. Refresh this card if there are more heroes on the chosen tile than monsters.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges und wähle 1 Spielplanteil; lege als Erinnerung einen Drohmarker aus dem Vorrat auf dieses Spielplanteil. Solange diese Karte erschöpft ist, muss jeder Held jedes Mal wenn er Bewegungspunkte einsetzt, um ein Feld auf dem gewählten Spielplanteil zu betreten, 1 zusätzlichen Bewegungspunkt einsetzen.\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern wenn sich mehr Helden als Monster auf dem ausgewählten Spielplanteil befinden.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/first-legion/mb-defensive-position.png"
      },
      {
        "id": "first-legion-summonardusixerebus",
        "nameEn": "Summon Ardus Ix'Erebus",
        "nameDe": "Beschwöre Ardus Ix'Erebus",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter and choose one open monster group. Replace 1 master and 1 minion monster in that group with the Ardus Ix'Erebus agent. If the Ardus Ix'Erebus agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Ardus Ix'Erebus lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Szene und wähle 1 deiner offenen Gruppen. Ersetze 1 Elite-Monster und 1 normales Monster der gewählten Gruppe durch den Anführer Ardus Ix'Erebus.\n\nWenn der Anführer Ardus Ix'Erebus besiegt worden ist, lege diese Karte zurück in dein Handlungsdeck.\n\nDu kannst diese Karte nicht in Abenteuern verwenden, die den Hauptmann Ardus Ix'Erebus verwenden.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/first-legion/mb-summon-ardus-ixerebus.png"
      },
      {
        "id": "first-legion-loyaltyrewarded",
        "nameEn": "Loyalty Rewarded",
        "nameDe": "Loyalität zahlt sich aus",
        "threatCost": 4,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter and choose 1 of your open groups. While this card is exhausted, each SMALL monster that belongs to the chosen group applies +1 to its Health. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Szene und wähle 1 deiner offenen Gruppen. Solange diese Karte erschöpft ist, steigt die Lebenskraft jedes KLEINEN Monsters dieser Gruppe um 1.\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern erst am Ende jeder Szene.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/first-legion/mb-loyalty-rewarded.png"
      },
      {
        "id": "first-legion-risetothechallenge",
        "nameEn": "Rise To The Challenge",
        "nameDe": "Sich der Herausforderung stellen",
        "threatCost": 4,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card when a SMALL master monster is defeated. While this card is exhausted, each minion monster in that monster's group uses the Speed, Health, Defense, surge abilities, and attack dice of the master monster (not including an agent) in its group; place this card near that monster group as a reminder. This card does not refresh as normal. Refresh this card at the end of your turn.",
        "rulesDe": "Erschöpfe diese Karte, sobald ein KLEINES Elite-Monster besiegt wird. Solange diese Karte erschöpft ist, verwendet jedes normale Monster der Gruppe dieses Monsters die Geschwindigkeit, Lebenskraft, Verteidigung, Energiefähigkeiten und Angriffswürfel des Elite-Monsters (gilt nicht für Anführer) in dieser Gruppe; lege diese Karte als Erinnerung neben diese Monstergruppe.\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern am Ende deines Zuges.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/mists-of-bilehall/first-legion/mb-rise-to-the-challenge.png"
      }
    ]
  },
  {
    "id": "burning-ambition",
    "nameEn": "Burning Ambition",
    "nameDe": "Brennender Ehrgeiz",
    "agentEn": "Gargan Mirklace",
    "agentDe": "Gargan Mirklace",
    "expansionId": "shadow-of-nerekhall",
    "cards": [
      {
        "id": "burning-ambition-inferno",
        "nameEn": "Inferno",
        "nameDe": "Inferno",
        "threatCost": 0,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card when a monster performs an attack, before dice are rolled. That attack affects all figures adjacent to the target. After that attack resolves, if that monster has the Hot monster trait, it recovers Hearts equal to the number of figures affected by the attack.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster einen Angriff ausführt, bevor die Würfel geworfen werden. Dieser Angriff betrifft alle dem Ziel benachbarten Figuren. Nachdem dieser Angriff abgehandelt wurde, gewinnt dieses Monster, falls es das Monster-Merkmal „Heiß\" hat, so viele Herzen zurück, wie Figuren von dem Angriff betroffen waren.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/burning-ambition/sn-inferno.png"
      },
      {
        "id": "burning-ambition-enkindle",
        "nameEn": "Enkindle",
        "nameDe": "Entfachen",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Use this card after setup of an encounter and choose 1 monster group. During this encounter, that group gains the Hot monster trait. Place 1 threat token from the supply on that group's Monster card as a reminder.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung und wähle 1 Monstergruppe. Während dieser Begegnung erhält diese Gruppe das Monster-Merkmal „Heiß\". Lege als Erinnerung 1 Bedrohungsmarker aus dem Vorrat auf die Monsterkarte dieser Gruppe.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/burning-ambition/sn-enkindle.png"
      },
      {
        "id": "burning-ambition-scorchingpresence",
        "nameEn": "Scorching Presence",
        "nameDe": "Sengende Präsenz",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter. While this card is exhausted, each time a hero enters a space adjacent to at least 1 monster with the Hot monster trait, that hero suffers 1 Heart. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung. Solange diese Karte erschöpft ist, erleidet jeder Held jedes Mal, wenn er ein Feld betritt, das mindestens 1 Monster mit dem Monster-Merkmal „Heiß\" benachbart ist, 1 Herz. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/burning-ambition/sn-scorching-presence.png"
      },
      {
        "id": "burning-ambition-shiftingearth",
        "nameEn": "Shifting Earth",
        "nameDe": "Bebende Erde",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn and choose a space on the map. Each hero within 3 spaces of the chosen space tests Might or Awareness, your choice. Move each hero that fails 2 spaces.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges und wähle ein Feld auf dem Spielplan. Jeder Held innerhalb von 3 Feldern um das gewählte Feld legt eine Stärke- oder Gespür-Probe ab (deine Wahl). Bewege jeden Helden, dem sie misslingt, 2 Felder weit.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/burning-ambition/sn-shifting-earth.png"
      },
      {
        "id": "burning-ambition-tasteoftheforbidden",
        "nameEn": "Taste Of The Forbidden",
        "nameDe": "Geschmack des Verbotenen",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "A hero may exhaust this card when he performs an attack, before dice are rolled. If he does, that attack gains +2 Hearts, and you gain 1 threat token.",
        "rulesDe": "Ein Held darf diese Karte erschöpfen, wenn er einen Angriff ausführt, bevor die Würfel geworfen werden. Tut er das, erhält dieser Angriff +2 Herzen, und du erhältst 1 Bedrohungsmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/burning-ambition/sn-taste-of-the-forbidden.png"
      },
      {
        "id": "burning-ambition-ynfernaelbonds",
        "nameEn": "Ynfernael Bonds",
        "nameDe": "Ynfernael-Bande",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster performs an attack. You may measure range and line of sight from one of the other monsters in that monster's group for that attack.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster einen Angriff ausführt. Du darfst für diesen Angriff Reichweite und Sichtlinie von einem der anderen Monster der Gruppe dieses Monsters aus messen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/burning-ambition/sn-ynfernael-bonds.png"
      },
      {
        "id": "burning-ambition-blazingrage",
        "nameEn": "Blazing Rage",
        "nameDe": "Lodernde Wut",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you activate a monster. That monster may perform 1 additional attack action this turn in addition to its normal 2 actions. At the end of the monster's activation, it suffers 2 Hearts for each attack it performed this turn. If that monster has the Hot monster trait, you may reroll 1 die during each attack the monster performs this turn.",
        "rulesDe": "Erschöpfe diese Karte, wenn du ein Monster aktivierst. Dieses Monster darf in diesem Zug zusätzlich zu seinen normalen 2 Aktionen 1 zusätzliche Angriffsaktion ausführen. Am Ende der Aktivierung des Monsters erleidet es 2 Herzen für jeden Angriff, den es in diesem Zug ausgeführt hat. Hat dieses Monster das Monster-Merkmal „Heiß\", darfst du während jedes Angriffs, den das Monster in diesem Zug ausführt, 1 Würfel neu würfeln.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/burning-ambition/sn-blazing-rage.png"
      },
      {
        "id": "burning-ambition-crushingexhaustion",
        "nameEn": "Crushing Exhaustion",
        "nameDe": "Erdrückende Erschöpfung",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card at the end of your turn. Each hero tests Might or Willpower, your choice. Place 1 threat token from the supply on the Hero sheet of each hero who fails. A hero with a threat token on his Hero sheet suffers Fatigue equal to his Stamina at the end of his turn. Each time a hero performs a rest action, he may test Might or Willpower, his choice. He discards his threat token if he passes that test, or if he is defeated. This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges. Jeder Held legt eine Stärke- oder Willenskraft-Probe ab (deine Wahl). Lege 1 Bedrohungsmarker aus dem Vorrat auf den Heldenbogen jedes Helden, dem sie misslingt. Ein Held mit einem Bedrohungsmarker auf seinem Heldenbogen erleidet am Ende seines Zuges Erschöpfung in Höhe seiner Ausdauer. Jedes Mal, wenn ein Held eine Rast-Aktion ausführt, darf er eine Stärke- oder Willenskraft-Probe ablegen (seine Wahl). Er legt seinen Bedrohungsmarker ab, wenn ihm die Probe gelingt oder wenn er besiegt wird. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/burning-ambition/sn-crushing-exhaustion.png"
      },
      {
        "id": "burning-ambition-demonsbargain",
        "nameEn": "Demon'S Bargain",
        "nameDe": "Pakt mit dem Dämon",
        "threatCost": 3,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card at the end of your turn and choose 1 knocked-out hero and an amount of Hearts and Fatigue. That hero may choose to immediately recover that amount of Hearts and Fatigue. If he does, you gain 3 threat tokens. This card does not refresh as normal. Refresh this card if the hero chooses not to recover the Hearts and Fatigue or at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges und wähle 1 kampfunfähigen Helden sowie eine Menge an Herzen und Erschöpfung. Dieser Held darf sich entscheiden, sofort diese Menge an Herzen und Erschöpfung zurückzugewinnen. Tut er das, erhältst du 3 Bedrohungsmarker. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte, wenn der Held sich entscheidet, die Herzen und Erschöpfung nicht zurückzugewinnen, oder am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/burning-ambition/sn-demons-bargain.png"
      },
      {
        "id": "burning-ambition-summongarganmirklace",
        "nameEn": "Summon Gargan Mirklace",
        "nameDe": "Gargan Mirklace beschwören",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter and choose 1 open monster group. Replace that group with the Gargan Mirklace agent. If the Gargan Mirklace agent is defeated, return this card to your Plot deck. You cannot use this card in the \"Shadow Of Nerekhall\" campaign.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung und wähle 1 offene Monstergruppe. Ersetze diese Gruppe durch den Gargan-Mirklace-Agenten. Wird der Gargan-Mirklace-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in der Kampagne „Schatten über Nerekhall\" verwenden.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/burning-ambition/sn-summon-gargan-mirklace.png"
      }
    ]
  },
  {
    "id": "inner-corruption",
    "nameEn": "Inner Corruption",
    "nameDe": "Innere Verderbnis",
    "agentEn": "Rylan Olliven",
    "agentDe": "Rylan Olliven",
    "expansionId": "shadow-of-nerekhall",
    "cards": [
      {
        "id": "inner-corruption-friendorfoe",
        "nameEn": "Friend Or Foe",
        "nameDe": "Freund oder Feind",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn to choose 1 monster. Until the start of your next turn, a hero cannot declare that monster as the target of an attack if there is another monster within 3 spaces of that monster. Place 1 threat token from the supply on that monster's base as a reminder. This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges, um 1 Monster zu wählen. Bis zum Beginn deines nächsten Zuges kann ein Held dieses Monster nicht als Ziel eines Angriffs ansagen, wenn sich ein anderes Monster innerhalb von 3 Feldern um dieses Monster befindet. Lege als Erinnerung 1 Bedrohungsmarker aus dem Vorrat auf die Basis dieses Monsters. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/inner-corruption/sn-friend-or-foe.png"
      },
      {
        "id": "inner-corruption-merchantsguild",
        "nameEn": "Merchants' Guild",
        "nameDe": "Händlergilde",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card during the Shopping step of the Campaign phase, after revealing the Shop Item cards, and discard 1 threat token to choose 1 Shop Item card. That card costs an additional 50 gold to purchase.",
        "rulesDe": "Erschöpfe diese Karte während des Einkaufsschritts der Kampagnenphase, nachdem die Shop-Karten aufgedeckt wurden, und lege 1 Bedrohungsmarker ab, um 1 Shop-Karte zu wählen. Diese Karte kostet 50 Gold zusätzlich beim Kauf.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/inner-corruption/sn-merchants-guild.png"
      },
      {
        "id": "inner-corruption-shadowcouncil",
        "nameEn": "Shadow Council",
        "nameDe": "Schattenrat",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of the first encounter of each quest and place up to 3 Overlord cards from your hand facedown under this card. Gain 1 threat token for each card placed under this card. While this card is exhausted, you cannot use cards under this card. When you refresh this card, discard all cards under this card. This card does not refresh as normal. Refresh this card at the end of the first encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau der ersten Begegnung jedes Szenarios und lege bis zu 3 Overlord-Karten von deiner Hand verdeckt unter diese Karte. Erhalte 1 Bedrohungsmarker für jede unter diese Karte gelegte Karte. Solange diese Karte erschöpft ist, kannst du Karten unter dieser Karte nicht benutzen. Wenn du diese Karte erholst, lege alle Karten unter dieser Karte ab. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende der ersten Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/inner-corruption/sn-shadow-council.png"
      },
      {
        "id": "inner-corruption-thievesguild",
        "nameEn": "Thieves' Guild",
        "nameDe": "Diebesgilde",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter to look at the top 3 cards of the Search deck. Place 2 of those cards on top of the Search deck in the order of your choice and place the remaining card on the bottom of the Search deck.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um dir die obersten 3 Karten des Suchstapels anzusehen. Lege 2 dieser Karten in einer Reihenfolge deiner Wahl oben auf den Suchstapel und lege die verbleibende Karte unter den Suchstapel.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/inner-corruption/sn-thieves-guild.png"
      },
      {
        "id": "inner-corruption-deceitfulscribe",
        "nameEn": "Deceitful Scribe",
        "nameDe": "Hinterlistiger Schreiber",
        "threatCost": 3,
        "triggerCost": 0,
        "rulesEn": "Use this card during the Spend Experience Points step of the Campaign phase. You receive 1 XP. Then, return this card to the game box.",
        "rulesDe": "Nutze diese Karte während des Schritts „Erfahrungspunkte ausgeben\" der Kampagnenphase. Du erhältst 1 EP. Lege dann diese Karte zurück in die Spielschachtel.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/inner-corruption/sn-deceitful-scribe.png"
      },
      {
        "id": "inner-corruption-falseinformant",
        "nameEn": "False Informant",
        "nameDe": "Falscher Informant",
        "threatCost": 3,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card at the end of the Travel step of the Campaign phase. The heroes choose 1 hero to test Awareness. If he fails, the heroes return to the location in which they started this Travel step and perform a second Travel step.",
        "rulesDe": "Erschöpfe diese Karte am Ende des Reiseschritts der Kampagnenphase. Die Helden wählen 1 Helden, der eine Gespür-Probe ablegt. Misslingt sie, kehren die Helden zu dem Ort zurück, an dem sie diesen Reiseschritt begonnen haben, und führen einen zweiten Reiseschritt durch.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/inner-corruption/sn-false-informant.png"
      },
      {
        "id": "inner-corruption-oneofus",
        "nameEn": "One Of Us",
        "nameDe": "Einer von uns",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card when a hero tests Willpower and fails. Immediately move that hero up to his Speed. Then, perform an attack with that hero as if he were 1 of your monsters. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, wenn einem Helden eine Willenskraft-Probe misslingt. Bewege diesen Helden sofort bis zu seiner Bewegung weit. Führe dann einen Angriff mit diesem Helden aus, als wäre er eines deiner Monster. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/inner-corruption/sn-one-of-us.png"
      },
      {
        "id": "inner-corruption-summonrylanolliven",
        "nameEn": "Summon Rylan Olliven",
        "nameDe": "Rylan Olliven beschwören",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter and choose 1 open monster group. Replace 1 master and 1 minion monster in that group with the Rylan Olliven agent. If the Rylan Olliven agent is defeated, return this card to your Plot deck. You cannot use this card in the \"Shadow Of Nerekhall\" campaign.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung und wähle 1 offene Monstergruppe. Ersetze 1 Meister- und 1 Diener-Monster dieser Gruppe durch den Rylan-Olliven-Agenten. Wird der Rylan-Olliven-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in der Kampagne „Schatten über Nerekhall\" verwenden.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/inner-corruption/sn-summon-rylan-olliven.png"
      },
      {
        "id": "inner-corruption-traitorousfriend",
        "nameEn": "Traitorous Friend",
        "nameDe": "Verräterischer Freund",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero starts his turn. That hero tests Willpower. If he fails, he suffers Fatigue equal to his Willpower. If he passes, gain 2 threat tokens. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held seinen Zug beginnt. Dieser Held legt eine Willenskraft-Probe ab. Misslingt sie, erleidet er Erschöpfung in Höhe seiner Willenskraft. Gelingt sie, erhalte 2 Bedrohungsmarker. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/inner-corruption/sn-traitorous-friend.png"
      },
      {
        "id": "inner-corruption-magesguild",
        "nameEn": "Mages' Guild",
        "nameDe": "Magiergilde",
        "threatCost": 4,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn. Each hero tests Knowledge. Each hero who fails suffers 1 Fatigue. If 2 or more heroes fail, draw 1 Overlord card. If 3 or more heroes fail, 1 of those heroes is Stunned, your choice. If 4 or more heroes fail, gain 1 threat token. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges. Jeder Held legt eine Wissen-Probe ab. Jeder Held, dem sie misslingt, erleidet 1 Erschöpfung. Misslingt sie 2 oder mehr Helden, ziehe 1 Overlord-Karte. Misslingt sie 3 oder mehr Helden, ist 1 dieser Helden betäubt (deine Wahl). Misslingt sie 4 oder mehr Helden, erhalte 1 Bedrohungsmarker. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/inner-corruption/sn-mages-guild.png"
      }
    ]
  },
  {
    "id": "unstable-forces",
    "nameEn": "Unstable Forces",
    "nameDe": "Instabile Kräfte",
    "agentEn": "Tristayne Olliven",
    "agentDe": "Tristayne Olliven",
    "expansionId": "shadow-of-nerekhall",
    "cards": [
      {
        "id": "unstable-forces-wildenergy",
        "nameEn": "Wild Energy",
        "nameDe": "Wilde Energie",
        "threatCost": 0,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card when a master monster performs an attack, before dice are rolled, to add 1 Surge to the attack results. When you exhaust this card, you may discard 1 threat token. After resolving this attack, if you did not discard 1 threat token and that attack did not deal 1 or more Hearts, discard 1 threat token and the monster that attacked is defeated.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Meister-Monster einen Angriff ausführt, bevor die Würfel geworfen werden, um 1 Schub zu den Angriffsergebnissen hinzuzufügen. Wenn du diese Karte erschöpfst, darfst du 1 Bedrohungsmarker ablegen. Hast du nach dem Abhandeln dieses Angriffs keinen Bedrohungsmarker abgelegt und hat dieser Angriff nicht mindestens 1 Herz zugefügt, lege 1 Bedrohungsmarker ab, und das angreifende Monster wird besiegt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unstable-forces/sn-wild-energy.png"
      },
      {
        "id": "unstable-forces-explosivefall",
        "nameEn": "Explosive Fall",
        "nameDe": "Explosiver Fall",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster is defeated. Each figure within 3 spaces of that monster suffers 2 Hearts.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster besiegt wird. Jede Figur innerhalb von 3 Feldern um dieses Monster erleidet 2 Herzen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unstable-forces/sn-explosive-fall.png"
      },
      {
        "id": "unstable-forces-mortalcoil",
        "nameEn": "Mortal Coil",
        "nameDe": "Sterbliche Hülle",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card when a master monster is defeated to place 1 fatigue token in its space. At the start of your next turn, replace the fatigue token with a master monster in the same group as the defeated monster, respecting group limits. This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Meister-Monster besiegt wird, um 1 Erschöpfungsmarker auf sein Feld zu legen. Zu Beginn deines nächsten Zuges ersetze den Erschöpfungsmarker durch ein Meister-Monster derselben Gruppe wie das besiegte Monster, unter Beachtung der Gruppenlimits. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unstable-forces/sn-mortal-coil.png"
      },
      {
        "id": "unstable-forces-pariah",
        "nameEn": "Pariah",
        "nameDe": "Ausgestoßener",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card during your turn and choose 1 monster group. Place this card near that group's Monster card. While this card is exhausted, you may activate 1 master monster of the chosen group during any other monster group's activation instead of the chosen group's activation.",
        "rulesDe": "Erschöpfe diese Karte während deines Zuges und wähle 1 Monstergruppe. Lege diese Karte neben die Monsterkarte dieser Gruppe. Solange diese Karte erschöpft ist, darfst du 1 Meister-Monster der gewählten Gruppe während der Aktivierung einer beliebigen anderen Monstergruppe aktivieren, anstatt während der Aktivierung der gewählten Gruppe.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unstable-forces/sn-pariah.png"
      },
      {
        "id": "unstable-forces-descendtomadness",
        "nameEn": "Descend To Madness",
        "nameDe": "Abstieg in den Wahnsinn",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn. Each hero tests Knowledge or Willpower, your choice, in an order of your choice. Each time a hero fails, gain 1 threat token. If a hero passes, all heroes after that hero do not test. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges. Jeder Held legt eine Wissen- oder Willenskraft-Probe ab (deine Wahl), in einer Reihenfolge deiner Wahl. Jedes Mal, wenn einem Helden die Probe misslingt, erhalte 1 Bedrohungsmarker. Gelingt einem Helden die Probe, legen alle Helden nach diesem Helden keine Probe ab. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unstable-forces/sn-descend-to-madness.png"
      },
      {
        "id": "unstable-forces-loveofchaos",
        "nameEn": "Love Of Chaos",
        "nameDe": "Liebe zum Chaos",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during your turn and choose 1 master monster on the map. That monster is immediately defeated, and you gain 2 threat tokens. If that monster is a large monster, you gain 1 additional threat token. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte während deines Zuges und wähle 1 Meister-Monster auf dem Spielplan. Dieses Monster wird sofort besiegt, und du erhältst 2 Bedrohungsmarker. Ist dieses Monster ein großes Monster, erhältst du 1 zusätzlichen Bedrohungsmarker. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unstable-forces/sn-love-of-chaos.png"
      },
      {
        "id": "unstable-forces-onslaught",
        "nameEn": "Onslaught",
        "nameDe": "Ansturm",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card at the start of your turn and choose 1 monster group. Place this card near the chosen group's Monster card. While this card is exhausted, each monster in the chosen group gains: Ravage: Both of this monster's actions on a turn may be attack actions.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges und wähle 1 Monstergruppe. Lege diese Karte neben die Monsterkarte der gewählten Gruppe. Solange diese Karte erschöpft ist, erhält jedes Monster der gewählten Gruppe: Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unstable-forces/sn-onslaught.png"
      },
      {
        "id": "unstable-forces-powerandsacrifice",
        "nameEn": "Power And Sacrifice",
        "nameDe": "Macht und Opfer",
        "threatCost": 3,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card when a master monster performs an attack, before dice are rolled. That monster may suffer up to 2 Hearts. If it does, that attack deals additional Hearts equal to the Hearts suffered. That monster cannot do this if suffering the Hearts would defeat it.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Meister-Monster einen Angriff ausführt, bevor die Würfel geworfen werden. Dieses Monster darf bis zu 2 Herzen erleiden. Tut es das, fügt dieser Angriff zusätzliche Herzen in Höhe der erlittenen Herzen zu. Dieses Monster kann dies nicht tun, wenn das Erleiden der Herzen es besiegen würde.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unstable-forces/sn-power-and-sacrifice.png"
      },
      {
        "id": "unstable-forces-soulensnare",
        "nameEn": "Soul Ensnare",
        "nameDe": "Seelenfang",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn. While this card is exhausted, each time a knocked-out hero recovers 1 or more Hearts, each hero within 3 spaces of that hero suffers 1 Heart.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges. Solange diese Karte erschöpft ist, erleidet jedes Mal, wenn ein kampfunfähiger Held 1 oder mehr Herzen zurückgewinnt, jeder Held innerhalb von 3 Feldern um diesen Helden 1 Herz.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unstable-forces/sn-soul-ensnare.png"
      },
      {
        "id": "unstable-forces-summontristayneolliven",
        "nameEn": "Summon Tristayne Olliven",
        "nameDe": "Tristayne Olliven beschwören",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter and choose 1 open monster group. Replace 1 master and 1 minion monster in that group with the Tristayne Olliven agent. If the Tristayne Olliven agent is defeated, return this card to your Plot deck. You cannot use this card in the \"Shadow Of Nerekhall\" campaign.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung und wähle 1 offene Monstergruppe. Ersetze 1 Meister- und 1 Diener-Monster dieser Gruppe durch den Tristayne-Olliven-Agenten. Wird der Tristayne-Olliven-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in der Kampagne „Schatten über Nerekhall\" verwenden.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unstable-forces/sn-summon-tristayne-olliven.png"
      }
    ]
  },
  {
    "id": "unseen-legions",
    "nameEn": "Unseen Legions",
    "nameDe": "Legionen der Unterstadt",
    "agentEn": "Verminous",
    "agentDe": "Verminous",
    "expansionId": "shadow-of-nerekhall",
    "cards": [
      {
        "id": "unseen-legions-mouthstofeed",
        "nameEn": "Mouths To Feed",
        "nameDe": "Hungrige Mäuler",
        "threatCost": 0,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card when a monster with 4 or less Health defeats a hero. Gain 1 threat token. This card does not refresh as normal. Refresh this card at the end of each encounter. After transitioning to Act II, Plot cards that require monsters with 4 or less Health require monsters with 6 or less Health instead (even while this card is exhausted).",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster mit Lebenskraft 4 oder weniger einen Helden besiegt. Du erhältst 1 Drohmarker.\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern erst am Ende der Szene.\n\nIn Akt II benötigen Handlungskarten, die bisher Monster mit Lebenskraft 4 oder weniger benötigten, Monster mit Lebenskraft 6 oder weniger.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unseen-legions/sn-mouths-to-feed.png"
      },
      {
        "id": "unseen-legions-enviousswarm",
        "nameEn": "Envious Swarm",
        "nameDe": "Neidischer Schwarm",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each monster with 4 or less Health gains: Action: Perform an attack that targets 1 hero with 1 or more Relic cards equipped. This attack gains +1 Heart.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, hat jedes Monster mit Lebenskraft 4 oder weniger:\n\n[Aktion]: Führe einen Angriff durch, der auf einen Helden zielt, der mit mindestens 1 Relikt ausgerüstet ist. Der Angriff hat +1 [Herz].",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unseen-legions/sn-envious-swarm.png"
      },
      {
        "id": "unseen-legions-fleethelight",
        "nameEn": "Flee The Light",
        "nameDe": "Lichtscheu",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn. Until the start of your next turn, each monster with 4 or less Health gains: Skittish: Each time a hero within 3 spaces of this monster suffers 1 Fatigue to gain 1 movement point, this monster may immediately move 1 space. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges. Bis zum Beginn deines nächsten Zuges hat jedes Monster mit Lebenskraft 4 oder weniger:\n\nNervös: Jedes Mal, wenn ein Held innerhalb von 3 Feldern zu diesem Monster 1 [Erschöpfung] erleidet, um 1 Bewegungspunkt zu erhalten, kann sich dieses Monster um 1 Feld bewegen.\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern erst am Ende der Szene.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unseen-legions/sn-flee-the-light.png"
      },
      {
        "id": "unseen-legions-ignoblesacrifice",
        "nameEn": "Ignoble Sacrifice",
        "nameDe": "Schändliches Opfer",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when more than 1 monster in a monster group is affected by an attack. Before damage is dealt, choose 1 monster affected by that attack. That monster suffers all damage all other monsters in its group would suffer from that attack.",
        "rulesDe": "Setze diese Karte ein, wenn mehrere Monster derselben Gruppe von einem Angriff betroffen sind. Wähle 1 dieser Monster, bevor Schaden zugefügt wird. Dieses Monster erleidet den gesamten Schaden, den alle betroffenen Monster zusammen durch diesen Angriff erleiden würden.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unseen-legions/sn-ignoble-sacrifice.png"
      },
      {
        "id": "unseen-legions-ineveryshadow",
        "nameEn": "In Every Shadow",
        "nameDe": "Aus den Schatten",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card and discard 1 Trap Overlord card from your hand when a hero declares an open door or search action. That hero tests Awareness. If he fails, perform an attack that targets that hero with 1 monster with 4 or less Health that is on the map, ignoring range and line of sight.",
        "rulesDe": "Erschöpfe diese Karte und wirf 1 Fallenkarte von deiner Hand ab, wenn ein Held eine Aktion „Tür öffnen oder schließen\" oder „Suchen\" ansagt. Dieser Held legt eine [Geistesgegenwart]-Probe ab. Wenn die Probe misslingt, führst du 1 Angriff mit einem Monster mit Lebenskraft 4 oder weniger durch, der auf diesen Helden zielt (Sichtlinie und Reichweite werden ignoriert).",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unseen-legions/sn-in-every-shadow.png"
      },
      {
        "id": "unseen-legions-infestation",
        "nameEn": "Infestation",
        "nameDe": "Ungeziefer",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you place a monster as a reinforcement. Place 1 minion monster with 4 or less Health from the same monster group in an empty space adjacent to that monster, respecting group limits.",
        "rulesDe": "Erschöpfe diese Karte, wenn du ein Monster als Verstärkung ins Spiel bringst. Stelle 1 normales Monster derselben Gruppe mit Lebenskraft 4 oder weniger auf ein leeres Nachbarfeld des ersten Monsters (Gruppengröße einhalten).",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unseen-legions/sn-infestation.png"
      },
      {
        "id": "unseen-legions-initiation",
        "nameEn": "Initiation",
        "nameDe": "Initiation",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Use this card when a minion monster with 4 or less Health knocks out a hero. Until that monster is defeated, it uses the characteristics, abilities, and dice of the master monster (not including an agent) in its group. Place 1 threat token on that monster's base as a reminder.",
        "rulesDe": "Setze diese Karte ein, wenn ein normales Monster mit Lebenskraft 4 oder weniger einen Helden besiegt. Bis dieses Monster besiegt ist, hat es die Werte, Fähigkeiten und Würfel des Elite-Monsters derselben Gruppe (nicht die eines Anführers), gilt ansonsten aber weiterhin als normales Monster. Lege zur Erinnerung einen Drohmarker aus dem Vorrat auf die Monsterfigur.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unseen-legions/sn-initiation.png"
      },
      {
        "id": "unseen-legions-intotheshadows",
        "nameEn": "Into The Shadows",
        "nameDe": "In die Schatten",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Use this card when you activate a monster with 4 or less Health. Instead of performing actions, remove that monster from the map and place it on this card. Each monster on this card still counts toward the group limit of its monster group. When a hero declares a rest action, you must place each monster on this card in an empty space adjacent to that hero. Then, each of those monsters may perform an attack that targets that hero.",
        "rulesDe": "Setze diese Karte ein, wenn du ein Monster mit Lebenskraft 4 oder weniger aktivierst. Anstatt mit ihm Aktionen auszuführen, kannst du es vom Spielplan nehmen und auf diese Karte stellen. Die Monster auf dieser Karte werden für die Gruppengröße immer noch mitgezählt.\n\nWenn ein Held eine Aktion Ausruhen ansagt, musst du alle Monster auf dieser Karte auf Nachbarfelder des Helden stellen. Dann kann jedes dieser Monster einen Angriff durchführen, der auf den Helden zielt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unseen-legions/sn-into-the-shadows.png"
      },
      {
        "id": "unseen-legions-summonverminous",
        "nameEn": "Summon Verminous",
        "nameDe": "Beschwörung des Rattenkönigs",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter and choose 1 open monster group. Replace 1 master monster in that group with the Verminous agent. If the Verminous agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Verminous lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Szene und wähle eine offene Monstergruppe. Ersetze 1 Elite-Monster der gewählten Gruppe durch den Anführer Rattenkönig.\n\nWird dieser Anführer besiegt, legst du diese Karte zurück in dein Handlungsdeck.\n\nDiese Karte kannst du in keinem Abenteuer einsetzen, in dem der Rattenkönig als Hauptmann vorkommt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unseen-legions/sn-summon-verminous.png"
      },
      {
        "id": "unseen-legions-alwayswatching",
        "nameEn": "Always Watching",
        "nameDe": "Stets Wachsam",
        "threatCost": 4,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of an encounter. While this card is exhausted, at the start of each overlord turn, you may look at the top card of the Overlord deck. Then, place that card on the top or bottom of the Overlord deck. This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn einer Szene. Solange diese Karte erschöpft ist, kannst du dir zu Beginn jedes deiner Züge die oberste Karte des Overlorddecks ansehen und sie entweder auf oder unter das Deck legen.\n\nDiese Karte wird nicht normal spielbereit gemacht, sondern erst am Ende des Abenteuers.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/shadow-of-nerekhall/unseen-legions/sn-always-watching.png"
      }
    ]
  }
]
