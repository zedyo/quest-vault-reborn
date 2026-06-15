import type { PlotDeck } from '../types/game'

// Quelle: any2cards/d2e strukturierte Daten (data/plot-decks.js).
// Englischer Text = Originalwortlaut der Karten. Deutscher Text = Community-Übersetzung
// (nicht zwingend identisch mit der offiziellen deutschen FFG-Edition).
//
// Plotdecks gehören je zu einem Agenten (Leutnants-Pack). threatCost = Kaufkosten in
// Bedrohungsmarkern, triggerCost = Auslösekosten. Kartenrückseiten ('plot-decks-back')
// werden ausgelassen. EN 1:1 aus Quelle geparst, DE handübersetzt.
// Umfang: GRUNDSPIEL (6 Decks) + Erweiterungs-Plotdecks Batch 1 (Dragon's Greed, Raging
// Infection, Dark Illusions) = 9 Decks / 90 Karten. Weitere Erweiterungs-Plotdecks folgen.

export const PLOT_DECKS: PlotDeck[] = [
  {
    "id": "seeds-of-betrayal",
    "nameEn": "Seeds of Betrayal",
    "nameDe": "Saat des Verrats",
    "agentEn": "Baron Zachareth",
    "agentDe": "Baron Zachareth",
    "expansionId": "base",
    "cards": [
      {
        "id": "solepurpose",
        "nameEn": "Sole Purpose",
        "nameDe": "Einziger Zweck",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Use this card when removing Overlord cards from your deck before a quest to remove additional Overlord cards, creating an Overlord deck with a minimum of 13 Overlord cards instead of 15.",
        "rulesDe": "Nutze diese Karte, wenn du vor einem Szenario Overlord-Karten aus deinem Deck entfernst, um zusätzliche Overlord-Karten zu entfernen und so ein Overlord-Deck mit mindestens 13 statt 15 Overlord-Karten zu erstellen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-sole-purpose.png"
      },
      {
        "id": "scryingandplotting",
        "nameEn": "Scrying And Plotting",
        "nameDe": "Spähen und Intrigieren",
        "threatCost": 1,
        "triggerCost": 3,
        "rulesEn": "Exhaust this card during quest setup. Instead of drawing your starting hand as normal, search your Overlord deck and choose a number of Overlord cards equal to the number of heroes. These cards are your starting hand. Then, shuffle your Overlord deck.",
        "rulesDe": "Erschöpfe diese Karte während des Szenario-Aufbaus. Anstatt deine Starthand wie üblich zu ziehen, durchsuche dein Overlord-Deck und wähle so viele Overlord-Karten wie Helden. Diese Karten sind deine Starthand. Mische dann dein Overlord-Deck.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-scrying-and-plotting.png"
      },
      {
        "id": "alwaysprepared",
        "nameEn": "Always Prepared",
        "nameDe": "Stets vorbereitet",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn and discard up to 2 Overlord cards from your hand. Then, draw Overlord cards equal to the number of discarded cards.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges und lege bis zu 2 Overlord-Karten von deiner Hand ab. Ziehe dann so viele Overlord-Karten wie abgelegte Karten.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-always-prepared.png"
      },
      {
        "id": "nefariouspower",
        "nameEn": "Nefarious Power",
        "nameDe": "Niederträchtige Macht",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero performs an attribute test, after the dice are rolled, to add 1 Shield to his results.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held eine Attributsprobe ablegt, nachdem die Würfel geworfen wurden, um 1 Schild zu seinen Ergebnissen hinzuzufügen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-nefarious-power.png"
      },
      {
        "id": "rushofpower",
        "nameEn": "Rush Of Power",
        "nameDe": "Machtrausch",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. At the end of this turn, draw 2 Overlord cards.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Am Ende dieses Zuges ziehe 2 Overlord-Karten.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-rush-of-power.png"
      },
      {
        "id": "twoprongedgambit",
        "nameEn": "Two-Pronged Gambit",
        "nameDe": "Zweigleisiges Spiel",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during setup of the first encounter. Then, place a threat token from the supply beneath this card with either the threat or fortune side faceup. No hero player can know which side is faceup. Reveal the token at the end of the quest. If the threat side is faceup and the overlord won, gain 3 threat. If the fortune side is faceup and the heroes won, gain 3 threat.",
        "rulesDe": "Erschöpfe diese Karte während des Aufbaus der ersten Begegnung. Lege dann einen Bedrohungsmarker aus dem Vorrat unter diese Karte, entweder mit der Bedrohungs- oder der Glücksseite nach oben. Kein Heldenspieler darf wissen, welche Seite oben liegt. Decke den Marker am Ende des Szenarios auf. Liegt die Bedrohungsseite oben und der Overlord hat gewonnen, erhalte 3 Bedrohung. Liegt die Glücksseite oben und die Helden haben gewonnen, erhalte 3 Bedrohung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-two-pronged-gambit.png"
      },
      {
        "id": "falsefriends",
        "nameEn": "False Friends",
        "nameDe": "Falsche Freunde",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card during setup of the first encounter. While this card is exhausted, reveal 2 fewer Shop Item cards during the next Shopping step of the Campaign phase. This card does not refresh as normal. Refresh this card after the next Shopping step.",
        "rulesDe": "Erschöpfe diese Karte während des Aufbaus der ersten Begegnung. Solange diese Karte erschöpft ist, decke im nächsten Einkaufsschritt der Kampagnenphase 2 Shop-Karten weniger auf. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte nach dem nächsten Einkaufsschritt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-false-friends.png"
      },
      {
        "id": "summonzachareth",
        "nameEn": "Summon - Zachareth",
        "nameDe": "Beschwören – Zachareth",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of each encounter to choose an open monster group. Replace 1 master and 1 minion monster in the chosen group with the Baron Zachareth agent. If the Baron Zachareth agent is defeated, return this card to your Plot deck. You cannot use this card in \"The Shadow Rune\" campaign.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau jeder Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 1 Diener-Monster der gewählten Gruppe durch den Baron-Zachareth-Agenten. Wird der Baron-Zachareth-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in der Kampagne „Die Schattenrune\" verwenden.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-summon-zachareth.png"
      },
      {
        "id": "troubleontheroad",
        "nameEn": "Trouble On The Road",
        "nameDe": "Ärger unterwegs",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after the Travel step of the Campaign phase. Each hero tests one attribute of your choice. Each hero that tests Might or Knowledge and fails is Stunned. Each hero that tests Awareness and fails is Diseased. Each hero that tests Willpower and fails is Poisoned.",
        "rulesDe": "Erschöpfe diese Karte nach dem Reiseschritt der Kampagnenphase. Jeder Held legt eine Probe auf ein Attribut deiner Wahl ab. Jeder Held, der eine Stärke- oder Wissen-Probe ablegt und scheitert, ist betäubt. Jeder Held, der eine Gespür-Probe ablegt und scheitert, ist verseucht. Jeder Held, der eine Willenskraft-Probe ablegt und scheitert, ist vergiftet.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-trouble-on-the-road.png"
      },
      {
        "id": "meticulousplanning",
        "nameEn": "Meticulous Planning",
        "nameDe": "Akribische Planung",
        "threatCost": 4,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after a hero draws (and chooses to keep) a Search card to force that hero to place that Search card on the bottom of the deck and draw a new one.",
        "rulesDe": "Erschöpfe diese Karte, nachdem ein Held eine Suchkarte gezogen (und sich entschieden hat, sie zu behalten) hat, um diesen Helden zu zwingen, diese Suchkarte unter den Stapel zu legen und eine neue zu ziehen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-meticulous-planning.png"
      }
    ]
  },
  {
    "id": "hybrid-loyalty",
    "nameEn": "Hybrid Loyalty",
    "nameDe": "Hybride Loyalität",
    "agentEn": "Belthir",
    "agentDe": "Belthir",
    "expansionId": "base",
    "cards": [
      {
        "id": "dualtraining",
        "nameEn": "Dual Training",
        "nameDe": "Doppelausbildung",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you target a monster with the \"Frenzy\" Overlord card. During this turn, each monster in the target monster's group gains +1 Heart on each attack. Exhaust this card when you target a monster with the \"Dash\" Overlord card. Each other monster in the target monster's group may immediately move 1 space.",
        "rulesDe": "Erschöpfe diese Karte, wenn du ein Monster mit der Overlord-Karte „Raserei\" zum Ziel hast. In diesem Zug erhält jedes Monster der Gruppe des Zielmonsters +1 Herz auf jeden Angriff. Erschöpfe diese Karte, wenn du ein Monster mit der Overlord-Karte „Sprint\" zum Ziel hast. Jedes andere Monster der Gruppe des Zielmonsters darf sich sofort 1 Feld bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-dual-training.png"
      },
      {
        "id": "bribery",
        "nameEn": "Bribery",
        "nameDe": "Bestechung",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after resolving the effects of a \"Dark Charm\" Overlord card to return that card to your hand. Immediately play it, targeting a different hero. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, nachdem du die Effekte einer „Dunkler Zauber\"-Overlord-Karte abgehandelt hast, um diese Karte auf deine Hand zurückzunehmen. Spiele sie sofort und ziele auf einen anderen Helden. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-bribery.png"
      },
      {
        "id": "cutadeal",
        "nameEn": "Cut A Deal",
        "nameDe": "Einen Handel schließen",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card at the end of a quest to add the following Rewards to that quest: If the heroes win, the overlord gains 1 threat token and the heroes receive 25 gold. If the overlord wins, he gains 2 threat tokens and the heroes receive 25 gold.",
        "rulesDe": "Erschöpfe diese Karte am Ende eines Szenarios, um diesem Szenario folgende Belohnungen hinzuzufügen: Gewinnen die Helden, erhält der Overlord 1 Bedrohungsmarker und die Helden erhalten 25 Gold. Gewinnt der Overlord, erhält er 2 Bedrohungsmarker und die Helden erhalten 25 Gold.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-cut-a-deal.png"
      },
      {
        "id": "endit",
        "nameEn": "End It!",
        "nameDe": "Mach Schluss!",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you play a \"Critical Blow\" Overlord card to add 1 Surge to the attack results.",
        "rulesDe": "Erschöpfe diese Karte, wenn du eine „Kritischer Schlag\"-Overlord-Karte spielst, um 1 Schub zu den Angriffsergebnissen hinzuzufügen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-end-it.png"
      },
      {
        "id": "fightwithhonor",
        "nameEn": "Fight With Honor",
        "nameDe": "Mit Ehre kämpfen",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card and discard a Trap Overlord card before triggering the ability of another Plot card. Reduce the Plot card's trigger cost by 1 (to a minimum of 0).",
        "rulesDe": "Erschöpfe diese Karte und lege eine Fallen-Overlord-Karte ab, bevor du die Fähigkeit einer anderen Plotkarte auslöst. Verringere die Auslösekosten dieser Plotkarte um 1 (mindestens 0).",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-fight-with-honor.png"
      },
      {
        "id": "makeourownluck",
        "nameEn": "Make Our Own Luck",
        "nameDe": "Unser Glück selbst schmieden",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after resolving a \"Dark Fortune\" Overlord card to change the rerolled die to a result of your choice.",
        "rulesDe": "Erschöpfe diese Karte, nachdem du eine „Dunkles Schicksal\"-Overlord-Karte abgehandelt hast, um den neu gewürfelten Würfel auf ein Ergebnis deiner Wahl zu ändern.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-make-our-own-luck.png"
      },
      {
        "id": "showofforce",
        "nameEn": "Show Of Force",
        "nameDe": "Machtdemonstration",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you knock out a hero, before drawing an overlord card or gaining a threat token for knocking out that hero. While this card is exhausted, each time you gain a threat token, you may draw an Overlord card. This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte, wenn du einen Helden kampfunfähig machst, bevor du eine Overlord-Karte ziehst oder einen Bedrohungsmarker für das Kampfunfähigmachen dieses Helden erhältst. Solange diese Karte erschöpft ist, darfst du jedes Mal, wenn du einen Bedrohungsmarker erhältst, eine Overlord-Karte ziehen. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-show-of-force.png"
      },
      {
        "id": "resourceful",
        "nameEn": "Resourceful",
        "nameDe": "Einfallsreich",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn instead of drawing an Overlord card. Choose a basic Overlord card in your discard pile and place it on top of your Overlord deck.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges, anstatt eine Overlord-Karte zu ziehen. Wähle eine Basis-Overlord-Karte in deinem Ablagestapel und lege sie oben auf dein Overlord-Deck.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-resourceful.png"
      },
      {
        "id": "summonbelthir",
        "nameEn": "Summon - Belthir",
        "nameDe": "Beschwören – Belthir",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 1 minion monster in the chosen group with the Belthir agent. If the Belthir agent is defeated during this encounter, return this card to your Plot deck. You cannot use this card in any quest that uses the Belthir lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 1 Diener-Monster der gewählten Gruppe durch den Belthir-Agenten. Wird der Belthir-Agent während dieser Begegnung besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Belthir-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-summon-belthir.png"
      },
      {
        "id": "hazardpay",
        "nameEn": "Hazard Pay",
        "nameDe": "Gefahrenzulage",
        "threatCost": 4,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card when placing reinforcements. You may spend threat tokens to place 1 additional monster from one of your monster groups that you can reinforce, respecting group limits. Spend threat tokens as follows: SMALL monsters cost 1 threat token. MEDIUM monsters cost 2 threat tokens. HUGE monsters cost 3 threat tokens. MASSIVE monsters cost 4 threat tokens.",
        "rulesDe": "Erschöpfe diese Karte beim Platzieren von Verstärkungen. Du darfst Bedrohungsmarker ausgeben, um 1 zusätzliches Monster aus einer deiner verstärkbaren Monstergruppen zu platzieren, unter Beachtung der Gruppenlimits. Gib Bedrohungsmarker wie folgt aus: KLEINE Monster kosten 1 Bedrohungsmarker. MITTLERE Monster kosten 2 Bedrohungsmarker. RIESIGE Monster kosten 3 Bedrohungsmarker. GEWALTIGE Monster kosten 4 Bedrohungsmarker.",
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
        "id": "bloodline",
        "nameEn": "Bloodline",
        "nameDe": "Blutlinie",
        "threatCost": 0,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card during your turn to choose two monsters. One monster suffers 2 Hearts and the other monster recovers 1 Heart. If both monsters have the Dark monster trait, the monster suffering Hearts suffers 1 fewer Heart.",
        "rulesDe": "Erschöpfe diese Karte während deines Zuges, um zwei Monster zu wählen. Ein Monster erleidet 2 Herzen und das andere Monster gewinnt 1 Herz zurück. Haben beide Monster das Monster-Merkmal „Dunkel\", erleidet das Herzen erleidende Monster 1 Herz weniger.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-bloodline.png"
      },
      {
        "id": "baddreams",
        "nameEn": "Bad Dreams",
        "nameDe": "Albträume",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of the Travel step of the Campaign phase. Each hero tests Willpower. Each hero who fails suffers 2 Fatigue.",
        "rulesDe": "Erschöpfe diese Karte am Ende des Reiseschritts der Kampagnenphase. Jeder Held legt eine Willenskraft-Probe ab. Jeder Held, dem sie misslingt, erleidet 2 Erschöpfung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-bad-dreams.png"
      },
      {
        "id": "nightsembrace",
        "nameEn": "Night'S Embrace",
        "nameDe": "Umarmung der Nacht",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Use this card after setup of an encounter to choose one of your monster groups. During this encounter, that monster group gains the Dark monster trait. Place a threat token from the supply on that group's Monster card as a reminder.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung, um eine deiner Monstergruppen zu wählen. Während dieser Begegnung erhält diese Monstergruppe das Monster-Merkmal „Dunkel\". Lege als Erinnerung einen Bedrohungsmarker aus dem Vorrat auf die Monsterkarte dieser Gruppe.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-nights-embrace.png"
      },
      {
        "id": "fangsinthedark",
        "nameEn": "Fangs In The Dark",
        "nameDe": "Reißzähne im Dunkeln",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster deals at least 1 Heart from an attack. That monster recovers 2 Hearts. If that monster has the Dark monster trait, it recovers an additional 1 Heart.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster mit einem Angriff mindestens 1 Herz zufügt. Dieses Monster gewinnt 2 Herzen zurück. Hat dieses Monster das Monster-Merkmal „Dunkel\", gewinnt es 1 zusätzliches Herz zurück.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-fangs-in-the-dark.png"
      },
      {
        "id": "thepowerofblood",
        "nameEn": "The Power Of Blood",
        "nameDe": "Die Macht des Blutes",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a SMALL monster declares a move action. Move that monster 1 space. While this card is exhausted, if that monster has the Dark monster trait, it gains +1 Heart on each attack.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein KLEINES Monster eine Bewegungsaktion ansagt. Bewege dieses Monster 1 Feld. Solange diese Karte erschöpft ist, erhält dieses Monster +1 Herz auf jeden Angriff, falls es das Monster-Merkmal „Dunkel\" hat.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-the-power-of-blood.png"
      },
      {
        "id": "nighttimehunt",
        "nameEn": "Nighttime Hunt",
        "nameDe": "Nächtliche Jagd",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster with the Dark monster trait performs an attack, before dice are rolled, to add 1 additional yellow power die to its attack pool. Exhaust this card when a monster with the Dark monster trait is attacked, before dice are rolled, to add 1 additional black die to its defense pool.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster mit dem Monster-Merkmal „Dunkel\" einen Angriff ausführt, bevor die Würfel geworfen werden, um 1 zusätzlichen gelben Machtwürfel zu seinem Angriffspool hinzuzufügen. Erschöpfe diese Karte, wenn ein Monster mit dem Monster-Merkmal „Dunkel\" angegriffen wird, bevor die Würfel geworfen werden, um 1 zusätzlichen schwarzen Würfel zu seinem Verteidigungspool hinzuzufügen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-nighttime-hunt.png"
      },
      {
        "id": "scentofblood",
        "nameEn": "Scent Of Blood",
        "nameDe": "Witterung von Blut",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster attacks a hero that has 6 or more damage tokens on his Hero sheet, before dice are rolled. This attack gains: Surge: +3 Hearts. If the monster has the Dark monster trait, you may reroll the attack die once during this attack.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster einen Helden angreift, der 6 oder mehr Schadensmarker auf seinem Heldenbogen hat, bevor die Würfel geworfen werden. Dieser Angriff erhält: Schub: +3 Herzen. Hat das Monster das Monster-Merkmal „Dunkel\", darfst du den Angriffswürfel während dieses Angriffs einmal neu würfeln.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-scent-of-blood.png"
      },
      {
        "id": "summoneliza",
        "nameEn": "Summon - Eliza",
        "nameDe": "Beschwören – Eliza",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master monster in that group with the Lady Eliza Farrow agent. If the Lady Eliza Farrow agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Lady Eliza Farrow lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister-Monster dieser Gruppe durch den Lady-Eliza-Farrow-Agenten. Wird der Lady-Eliza-Farrow-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Lady-Eliza-Farrow-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-summon-eliza.png"
      },
      {
        "id": "theladyscare",
        "nameEn": "The Lady'S Care",
        "nameDe": "Die Fürsorge der Lady",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during your turn to choose a monster and roll 1 red power die. The chosen monster recovers Hearts equal to the Hearts rolled. If the chosen monster has the Dark monster trait, each other monster in its group recovers 1 Heart.",
        "rulesDe": "Erschöpfe diese Karte während deines Zuges, um ein Monster zu wählen und 1 roten Machtwürfel zu werfen. Das gewählte Monster gewinnt so viele Herzen zurück, wie gewürfelt wurden. Hat das gewählte Monster das Monster-Merkmal „Dunkel\", gewinnt jedes andere Monster seiner Gruppe 1 Herz zurück.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/endless-thirst/bg-the-ladys-care.png"
      },
      {
        "id": "thetasteofsuffering",
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
        "id": "darkpact",
        "nameEn": "Dark Pact",
        "nameDe": "Dunkler Pakt",
        "threatCost": 0,
        "triggerCost": 0,
        "rulesEn": "After setup of the first encounter of each quest, the hero players choose a hero and place that hero's hero token on this card. When the chosen hero suffers any amount of Hearts, he may exhaust this card to reduce the amount of Hearts suffered by up to 2. If he does, you gain 1 threat token. At the end of each quest, discard the hero token from this card.",
        "rulesDe": "Nach dem Aufbau der ersten Begegnung jedes Szenarios wählen die Heldenspieler einen Helden und legen den Heldenmarker dieses Helden auf diese Karte. Wenn der gewählte Held eine beliebige Menge Herzen erleidet, darf er diese Karte erschöpfen, um die Menge der erlittenen Herzen um bis zu 2 zu verringern. Tut er das, erhältst du 1 Bedrohungsmarker. Am Ende jedes Szenarios entferne den Heldenmarker von dieser Karte.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-dark-pact.png"
      },
      {
        "id": "greaterpower",
        "nameEn": "Greater Power",
        "nameDe": "Größere Macht",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster performs an attack, after dice are rolled, to discard the top card from your Overlord deck. This attack gains +2 Hearts. If the discarded card was a Magic Overlord card, this attack gains +3 Hearts instead.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster einen Angriff ausführt, nachdem die Würfel geworfen wurden, um die oberste Karte deines Overlord-Decks abzulegen. Dieser Angriff erhält +2 Herzen. War die abgelegte Karte eine Magie-Overlord-Karte, erhält dieser Angriff stattdessen +3 Herzen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-greater-power.png"
      },
      {
        "id": "masques",
        "nameEn": "Masques",
        "nameDe": "Maskenspiel",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero performs an attack, before dice are rolled. If you do, the attack is a miss. This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held einen Angriff ausführt, bevor die Würfel geworfen werden. Tust du das, geht der Angriff daneben. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-masques.png"
      },
      {
        "id": "thedarkmark",
        "nameEn": "The Dark Mark",
        "nameDe": "Das dunkle Mal",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "After setup of the first encounter of each quest, the hero players choose a hero and place that hero's hero token on this card. Exhaust this card when a hero suffers at least 1 Heart. That hero suffers no Hearts and the hero whose hero token is on this card suffers 2 Hearts instead. At the end of the quest, discard the hero token from this card.",
        "rulesDe": "Nach dem Aufbau der ersten Begegnung jedes Szenarios wählen die Heldenspieler einen Helden und legen den Heldenmarker dieses Helden auf diese Karte. Erschöpfe diese Karte, wenn ein Held mindestens 1 Herz erleidet. Dieser Held erleidet keine Herzen, und stattdessen erleidet der Held, dessen Heldenmarker auf dieser Karte liegt, 2 Herzen. Am Ende des Szenarios entferne den Heldenmarker von dieser Karte.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-the-dark-mark.png"
      },
      {
        "id": "thegraspinggrave",
        "nameEn": "The Grasping Grave",
        "nameDe": "Das greifende Grab",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero performs a stand-up action or is revived by another hero. That hero rolls 1 red power die instead of 2.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held eine Aufsteh-Aktion ausführt oder von einem anderen Helden wiederbelebt wird. Dieser Held wirft 1 roten Machtwürfel statt 2.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-the-grasping-grave.png"
      },
      {
        "id": "boltfromtheblue",
        "nameEn": "Bolt From The Blue",
        "nameDe": "Blitz aus heiterem Himmel",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during your turn to choose a hero. Perform an attack targeting the chosen hero using the following dice: Range: Blue Yellow. If the total range is less than 4, it is a miss. This attack gains: Surge: +2 Range. Surge: +2 Hearts.",
        "rulesDe": "Erschöpfe diese Karte während deines Zuges, um einen Helden zu wählen. Führe einen Angriff gegen den gewählten Helden mit folgenden Würfeln aus: Reichweite: Blau Gelb. Ist die Gesamtreichweite kleiner als 4, geht er daneben. Dieser Angriff erhält: Schub: +2 Reichweite. Schub: +2 Herzen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-bolt-from-the-blue.png"
      },
      {
        "id": "mysticmight",
        "nameEn": "Mystic Might",
        "nameDe": "Mystische Macht",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Use this card after you play a Magic Overlord card. Place 1 fatigue token on this card. You may discard 1 fatigue token from this card, after dice are rolled, to either gain +2 Hearts for an attack or add 2 Shields to a defense result. At the end of each quest, discard all fatigue tokens on this card.",
        "rulesDe": "Nutze diese Karte, nachdem du eine Magie-Overlord-Karte gespielt hast. Lege 1 Erschöpfungsmarker auf diese Karte. Du darfst 1 Erschöpfungsmarker von dieser Karte ablegen, nachdem die Würfel geworfen wurden, um entweder +2 Herzen für einen Angriff zu erhalten oder 2 Schilde zu einem Verteidigungsergebnis hinzuzufügen. Am Ende jedes Szenarios entferne alle Erschöpfungsmarker von dieser Karte.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-mystic-might.png"
      },
      {
        "id": "summonmerick",
        "nameEn": "Summon - Merick",
        "nameDe": "Beschwören – Merick",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master monster in that group with the Lord Merick Farrow agent. If the Lord Merick Farrow agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Lord Merick Farrow lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister-Monster dieser Gruppe durch den Lord-Merick-Farrow-Agenten. Wird der Lord-Merick-Farrow-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Lord-Merick-Farrow-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-summon-merick.png"
      },
      {
        "id": "thaumaturgy",
        "nameEn": "Thaumaturgy",
        "nameDe": "Thaumaturgie",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn and discard a Magic Overlord card from your hand to search your discard pile for a Magic Overlord card of your choice. Reveal that card and place it in your hand.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges und lege eine Magie-Overlord-Karte von deiner Hand ab, um deinen Ablagestapel nach einer Magie-Overlord-Karte deiner Wahl zu durchsuchen. Decke diese Karte auf und nimm sie auf deine Hand.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/cursed-by-power/bg-thaumaturgy.png"
      },
      {
        "id": "cabal",
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
        "id": "armorofdarkness",
        "nameEn": "Armor Of Darkness",
        "nameDe": "Rüstung der Finsternis",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster is attacked, after dice are rolled, to add 2 Shields to the results.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster angegriffen wird, nachdem die Würfel geworfen wurden, um 2 Schilde zu den Ergebnissen hinzuzufügen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-armor-of-darkness.png"
      },
      {
        "id": "darkchampions",
        "nameEn": "Dark Champions",
        "nameDe": "Dunkle Champions",
        "threatCost": 2,
        "triggerCost": 3,
        "rulesEn": "Exhaust this card after setup of an encounter. While this card is exhausted, each master monster gains +2 Health and adds 1 additional brown die to its defense pool. Each of its attacks gains: Surge: +2 Hearts. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung. Solange diese Karte erschöpft ist, erhält jedes Meister-Monster +2 Lebenspunkte und fügt 1 zusätzlichen braunen Würfel zu seinem Verteidigungspool hinzu. Jeder seiner Angriffe erhält: Schub: +2 Herzen. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-dark-champions.png"
      },
      {
        "id": "fightinformation",
        "nameEn": "Fight In Formation",
        "nameDe": "In Formation kämpfen",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster is attacked, before dice are rolled. Add 1 Shield to the results for each monster in the monster's group that is adjacent to it (to a maximum of 3 Shields). If the defending monster does not suffer at least 1 Heart from this attack, gain 1 threat token.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster angegriffen wird, bevor die Würfel geworfen werden. Füge 1 Schild zu den Ergebnissen hinzu für jedes Monster der Gruppe des Monsters, das ihm benachbart ist (bis zu maximal 3 Schilde). Erleidet das verteidigende Monster durch diesen Angriff nicht mindestens 1 Herz, erhalte 1 Bedrohungsmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-fight-in-formation.png"
      },
      {
        "id": "trialofknighthood",
        "nameEn": "Trial Of Knighthood",
        "nameDe": "Ritterprobe",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a master monster performs an attack, before dice are rolled. If this attack defeats a hero that has at least 4 Might, gain 2 threat tokens. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Meister-Monster einen Angriff ausführt, bevor die Würfel geworfen werden. Besiegt dieser Angriff einen Helden mit mindestens 4 Stärke, erhalte 2 Bedrohungsmarker. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-trial-of-knighthood.png"
      },
      {
        "id": "veterancouncil",
        "nameEn": "Veteran Council",
        "nameDe": "Veteranenrat",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter. At the end of this encounter, gain 1 threat token for each master monster remaining on the map (to a maximum of 3 threat tokens). This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung. Am Ende dieser Begegnung erhalte 1 Bedrohungsmarker für jedes auf dem Spielplan verbliebene Meister-Monster (bis zu maximal 3 Bedrohungsmarker). Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-veteran-council.png"
      },
      {
        "id": "knighttraining",
        "nameEn": "Knight Training",
        "nameDe": "Ritterausbildung",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "After setup of each encounter, choose a monster group of SMALL monsters and place this card near the chosen group's Monster card. Exhaust this card when a monster of the chosen group is attacked, after dice are rolled, to reroll 1 defense die. While this card is exhausted, each time a monster of that group is attacked, after dice are rolled, you may reroll 1 defense die.",
        "rulesDe": "Wähle nach dem Aufbau jeder Begegnung eine Monstergruppe aus KLEINEN Monstern und lege diese Karte neben die Monsterkarte der gewählten Gruppe. Erschöpfe diese Karte, wenn ein Monster der gewählten Gruppe angegriffen wird, nachdem die Würfel geworfen wurden, um 1 Verteidigungswürfel neu zu würfeln. Solange diese Karte erschöpft ist, darfst du jedes Mal, wenn ein Monster dieser Gruppe angegriffen wird, nachdem die Würfel geworfen wurden, 1 Verteidigungswürfel neu würfeln.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-knight-training.png"
      },
      {
        "id": "summonalric",
        "nameEn": "Summon - Alric",
        "nameDe": "Beschwören – Alric",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 1 minion monster in the chosen group with the Sir Alric Farrow agent. If the Sir Alric Farrow agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Sir Alric Farrow lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 1 Diener-Monster der gewählten Gruppe durch den Sir-Alric-Farrow-Agenten. Wird der Sir-Alric-Farrow-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Sir-Alric-Farrow-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-summon-alric.png"
      },
      {
        "id": "unkillable",
        "nameEn": "Unkillable",
        "nameDe": "Untötbar",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card when a master monster is defeated. Replace the master monster with a minion monster from the same monster group, respecting group limits. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Meister-Monster besiegt wird. Ersetze das Meister-Monster durch ein Diener-Monster derselben Monstergruppe, unter Beachtung der Gruppenlimits. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-unkillable.png"
      },
      {
        "id": "vengefulresolve",
        "nameEn": "Vengeful Resolve",
        "nameDe": "Rachsüchtige Entschlossenheit",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "After setup of each encounter, choose a monster group of SMALL monsters and place this card near the chosen group's Monster card. Exhaust this card at the end of your turn. While this card is exhausted, each time a hero performs an attack that deals at least 1 Heart to a monster of that group, that hero suffers 1 Heart.",
        "rulesDe": "Wähle nach dem Aufbau jeder Begegnung eine Monstergruppe aus KLEINEN Monstern und lege diese Karte neben die Monsterkarte der gewählten Gruppe. Erschöpfe diese Karte am Ende deines Zuges. Solange diese Karte erschöpft ist, erleidet jedes Mal, wenn ein Held einen Angriff ausführt, der einem Monster dieser Gruppe mindestens 1 Herz zufügt, dieser Held 1 Herz.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/the-fallen-elite/bg-vengeful-resolve.png"
      },
      {
        "id": "refusetodie",
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
        "id": "spiritedretreat",
        "nameEn": "Spirited Retreat",
        "nameDe": "Beherzter Rückzug",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a SMALL monster with the Wilderness monster trait declares a move action. Move that monster 1 space. If that monster ends this move action within 3 spaces of a hero, it may move 1 additional space.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein KLEINES Monster mit dem Monster-Merkmal „Wildnis\" eine Bewegungsaktion ansagt. Bewege dieses Monster 1 Feld. Beendet dieses Monster diese Bewegungsaktion innerhalb von 3 Feldern um einen Helden, darf es sich 1 zusätzliches Feld bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-spirited-retreat.png"
      },
      {
        "id": "feralinstincts",
        "nameEn": "Feral Instincts",
        "nameDe": "Wilde Instinkte",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Use this card after setup of an encounter to choose one of your monster groups. During this encounter, that group gains the Wilderness monster trait. Place a threat token from the supply on that group's Monster card as a reminder.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung, um eine deiner Monstergruppen zu wählen. Während dieser Begegnung erhält diese Gruppe das Monster-Merkmal „Wildnis\". Lege als Erinnerung einen Bedrohungsmarker aus dem Vorrat auf die Monsterkarte dieser Gruppe.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-feral-instincts.png"
      },
      {
        "id": "emergencyrations",
        "nameEn": "Emergency Rations",
        "nameDe": "Notrationen",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during your turn to choose a monster and roll 1 red power die. The chosen monster recovers Hearts equal to the Hearts rolled. If that monster has the Wilderness monster trait, it recovers 1 additional Heart.",
        "rulesDe": "Erschöpfe diese Karte während deines Zuges, um ein Monster zu wählen und 1 roten Machtwürfel zu werfen. Das gewählte Monster gewinnt so viele Herzen zurück, wie gewürfelt wurden. Hat dieses Monster das Monster-Merkmal „Wildnis\", gewinnt es 1 zusätzliches Herz zurück.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-emergency-rations.png"
      },
      {
        "id": "meatshield",
        "nameEn": "Meat Shield",
        "nameDe": "Kanonenfutter",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster suffers any amount of Hearts. Choose a monster adjacent to that monster to suffer all of the Hearts instead.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster eine beliebige Menge Herzen erleidet. Wähle ein zu diesem Monster benachbartes Monster, das stattdessen alle Herzen erleidet.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-meat-shield.png"
      },
      {
        "id": "overfed",
        "nameEn": "Overfed",
        "nameDe": "Überfüttert",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter. While this card is exhausted, each monster with the Wilderness monster trait applies +2 to its Health and -1 to its Speed. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung. Solange diese Karte erschöpft ist, erhält jedes Monster mit dem Monster-Merkmal „Wildnis\" +2 auf seine Lebenspunkte und -1 auf seine Bewegung. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-overfed.png"
      },
      {
        "id": "diveintocover",
        "nameEn": "Dive Into Cover",
        "nameDe": "In Deckung springen",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after a hero resolves an attack affecting a monster. If that monster was not defeated, it may immediately move 3 spaces. If that monster has the Wilderness monster trait, it adds 1 additional black die to its defense pool until the start of your next turn. Place a threat token from the supply on that monster's base as a reminder.",
        "rulesDe": "Erschöpfe diese Karte, nachdem ein Held einen Angriff abgehandelt hat, der ein Monster betrifft. Wurde dieses Monster nicht besiegt, darf es sich sofort 3 Felder bewegen. Hat dieses Monster das Monster-Merkmal „Wildnis\", fügt es bis zum Beginn deines nächsten Zuges 1 zusätzlichen schwarzen Würfel zu seinem Verteidigungspool hinzu. Lege als Erinnerung einen Bedrohungsmarker aus dem Vorrat auf die Basis dieses Monsters.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-dive-into-cover.png"
      },
      {
        "id": "goblinambush",
        "nameEn": "Goblin Ambush",
        "nameDe": "Goblin-Hinterhalt",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after a hero enters an empty space. Perform an attack targeting that hero as if from a master goblin archer. If the total range of this attack is less than 4, it is a miss. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, nachdem ein Held ein leeres Feld betreten hat. Führe einen Angriff gegen diesen Helden aus, als käme er von einem Meister-Goblin-Schützen. Ist die Gesamtreichweite dieses Angriffs kleiner als 4, geht er daneben. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-goblin-ambush.png"
      },
      {
        "id": "summonsplig",
        "nameEn": "Summon - Splig",
        "nameDe": "Beschwören – Splig",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master monster in the chosen group with the Splig agent. If the Splig agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Splig lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister-Monster der gewählten Gruppe durch den Splig-Agenten. Wird der Splig-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Splig-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-summon-splig.png"
      },
      {
        "id": "raidedarmory",
        "nameEn": "Raided Armory",
        "nameDe": "Geplünderte Waffenkammer",
        "threatCost": 4,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card at the start of your turn and choose a monster group. Place this card near that group's Monster card. While this card is exhausted, each monster in that group adds 1 Surge to each of its attack results and 1 Shield to each of its defense results. If that group has the Wilderness monster trait, each monster in that group gains +1 Heart on each attack.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges und wähle eine Monstergruppe. Lege diese Karte neben die Monsterkarte dieser Gruppe. Solange diese Karte erschöpft ist, fügt jedes Monster dieser Gruppe 1 Schub zu jedem seiner Angriffsergebnisse und 1 Schild zu jedem seiner Verteidigungsergebnisse hinzu. Hat diese Gruppe das Monster-Merkmal „Wildnis\", erhält jedes Monster dieser Gruppe +1 Herz auf jeden Angriff.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/goblin-uprising/bg-raided-armory.png"
      },
      {
        "id": "scavenge",
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
        "id": "mineallmine",
        "nameEn": "Mine All Mine",
        "nameDe": "Alles meins",
        "threatCost": 0,
        "triggerCost": 0,
        "rulesEn": "At the end of each encounter, place a number of threat tokens on this card equal to the number of search tokens remaining on the map. You may return this card to the game box at the end of any quest to gain all threat tokens on this card. If you do not do this, discard all threat tokens on this card.",
        "rulesDe": "Lege am Ende jeder Begegnung so viele Bedrohungsmarker auf diese Karte wie Suchmarker auf dem Spielplan verbleiben. Du darfst diese Karte am Ende eines beliebigen Szenarios zurück in die Spielschachtel legen, um alle Bedrohungsmarker auf dieser Karte zu erhalten. Tust du das nicht, lege alle Bedrohungsmarker auf dieser Karte ab.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-mine-all-mine.png"
      },
      {
        "id": "ironhardscales",
        "nameEn": "Iron-Hard Scales",
        "nameDe": "Eisenharte Schuppen",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster is attacked, before dice are rolled, to add 2 Shields to the results. If you roll one or more blanks, add an additional 1 Shield to the results.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster angegriffen wird, bevor die Würfel geworfen werden, um 2 Schilde zu den Ergebnissen hinzuzufügen. Würfelst du eine oder mehr Leerseiten, füge 1 zusätzliches Schild zu den Ergebnissen hinzu.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-iron-hard-scales.png"
      },
      {
        "id": "terrifyingpresence",
        "nameEn": "Terrifying Presence",
        "nameDe": "Furchteinflößende Präsenz",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each hero within 3 spaces of a HUGE or MASSIVE monster applies -1 to his Might, Willpower, Knowledge, and Awareness, (to a minimum of 1).",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, erhält jeder Held innerhalb von 3 Feldern um ein RIESIGES oder GEWALTIGES Monster -1 auf seine Stärke, Willenskraft, sein Wissen und Gespür (mindestens 1).",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-terrifying-presence.png"
      },
      {
        "id": "auriumplating",
        "nameEn": "Aurium Plating",
        "nameDe": "Auriumpanzerung",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose a HUGE or MASSIVE monster group. Place this card near that group's Monster card. Each monster in that group applies +2 to its Health and is immune to Pierce. This card does not refresh as normal. Refresh this card at the start of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine RIESIGE oder GEWALTIGE Monstergruppe zu wählen. Lege diese Karte neben die Monsterkarte dieser Gruppe. Jedes Monster dieser Gruppe erhält +2 auf seine Lebenspunkte und ist immun gegen Durchbohren. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte zu Beginn jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-aurium-plating.png"
      },
      {
        "id": "jealousrage",
        "nameEn": "Jealous Rage",
        "nameDe": "Eifersüchtige Wut",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card when a hero declares a search action to choose a monster within 5 spaces of that hero. Remove that monster from the map and place it in an empty space adjacent to that hero. Then, that monster immediately performs an attack targeting that hero. After resolving this attack, if the hero was not defeated, he may continue his turn.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held eine Durchsuchen-Aktion ansagt, um ein Monster innerhalb von 5 Feldern um diesen Helden zu wählen. Entferne dieses Monster vom Spielplan und platziere es auf einem leeren Feld benachbart zu diesem Helden. Dann führt dieses Monster sofort einen Angriff gegen diesen Helden aus. Wurde der Held nach dem Abhandeln dieses Angriffs nicht besiegt, darf er seinen Zug fortsetzen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-jealous-rage.png"
      },
      {
        "id": "massivebulk",
        "nameEn": "Massive Bulk",
        "nameDe": "Gewaltige Masse",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a HUGE or MASSIVE monster ends or interrupts its movement. You can place that monster's base in spaces occupied by heroes. Move each hero in the occupied spaces to the closest empty space. The HUGE or MASSIVE monster suffers 1 Heart for each hero it moves.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein RIESIGES oder GEWALTIGES Monster seine Bewegung beendet oder unterbricht. Du darfst die Basis dieses Monsters auf von Helden besetzten Feldern platzieren. Bewege jeden Helden auf den besetzten Feldern auf das nächstgelegene leere Feld. Das RIESIGE oder GEWALTIGE Monster erleidet 1 Herz für jeden Helden, den es bewegt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-massive-bulk.png"
      },
      {
        "id": "punishtheweak",
        "nameEn": "Punish The Weak",
        "nameDe": "Die Schwachen bestrafen",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card at the start of your turn. While this card is exhausted, each of your monsters gains: Surge: Crush: This monster deals +1 Heart for each space its base occupies that exceeds the target hero's Might.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Solange diese Karte erschöpft ist, erhält jedes deiner Monster: Schub: Zermalmen: Dieses Monster fügt +1 Herz für jedes von seiner Basis besetzte Feld zu, das die Stärke des Zielhelden übersteigt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-punish-the-weak.png"
      },
      {
        "id": "summonvalyndra",
        "nameEn": "Summon - Valyndra",
        "nameDe": "Beschwören – Valyndra",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 2 minion monsters in the chosen group with the Valyndra agent. If the Valyndra agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Valyndra lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 2 Diener-Monster der gewählten Gruppe durch den Valyndra-Agenten. Wird der Valyndra-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Valyndra-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-summon-valyndra.png"
      },
      {
        "id": "guardiansofthehoard",
        "nameEn": "Guardians Of The Hoard",
        "nameDe": "Wächter des Hortes",
        "threatCost": 4,
        "triggerCost": 0,
        "rulesEn": "Use this card after setup of an encounter to place any number of your threat tokens on this card. Threat tokens on this card cannot be spent during this encounter. Return all threat tokens from this card to your play area at the end of each encounter. If there are more threat tokens on this card than there are HUGE and MASSIVE monsters on the map, each HUGE and MASSIVE monster gains gain +1 Heart on each attack.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung, um beliebig viele deiner Bedrohungsmarker auf diese Karte zu legen. Bedrohungsmarker auf dieser Karte können während dieser Begegnung nicht ausgegeben werden. Lege am Ende jeder Begegnung alle Bedrohungsmarker von dieser Karte zurück in deine Auslage. Liegen auf dieser Karte mehr Bedrohungsmarker, als es RIESIGE und GEWALTIGE Monster auf dem Spielplan gibt, erhält jedes RIESIGE und GEWALTIGE Monster +1 Herz auf jeden Angriff.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/lair-of-the-wyrm/dragons-greed/lw-guardians-of-the-hoard.png"
      },
      {
        "id": "valyndrasshadow",
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
    "nameDe": "Wütende Infektion",
    "agentEn": "Bol'Goreth",
    "agentDe": "Bol'Goreth",
    "expansionId": "the-trollfens",
    "cards": [
      {
        "id": "plaguerelease",
        "nameEn": "Plague Release",
        "nameDe": "Seuchenausbruch",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero who is Poisoned or Diseased is defeated. If that hero was Poisoned, each hero within 3 spaces tests Might. Each hero who fails is Poisoned. If that hero was Diseased, each hero within 3 spaces tests Willpower. Each hero who fails is Diseased.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein vergifteter oder verseuchter Held besiegt wird. War dieser Held vergiftet, legt jeder Held innerhalb von 3 Feldern eine Stärke-Probe ab. Jeder Held, dem sie misslingt, ist vergiftet. War dieser Held verseucht, legt jeder Held innerhalb von 3 Feldern eine Willenskraft-Probe ab. Jeder Held, dem sie misslingt, ist verseucht.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-plague-release.png"
      },
      {
        "id": "envenom",
        "nameEn": "Envenom",
        "nameDe": "Vergiften",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter to choose one of your monster groups, and place this card near that group's Monster card. While this card is exhausted, each master monster in the group gains: Surge: Poison. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine deiner Monstergruppen zu wählen, und lege diese Karte neben die Monsterkarte dieser Gruppe. Solange diese Karte erschöpft ist, erhält jedes Meister-Monster der Gruppe: Schub: Vergiften. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-envenom.png"
      },
      {
        "id": "infected",
        "nameEn": "Infected",
        "nameDe": "Infiziert",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter to choose one of your monster groups, and place this card near that group's Monster card. While this card is exhausted, each master monster in the group gains: Surge: Disease. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine deiner Monstergruppen zu wählen, und lege diese Karte neben die Monsterkarte dieser Gruppe. Solange diese Karte erschöpft ist, erhält jedes Meister-Monster der Gruppe: Schub: Seuche. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-infected.png"
      },
      {
        "id": "afflictionaura",
        "nameEn": "Affliction Aura",
        "nameDe": "Aura des Leidens",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Use this card after setup of an encounter to choose a monster. Each hero that starts his turn within 5 spaces of that monster is Diseased. Place a threat token on the monster's base as a reminder.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung, um ein Monster zu wählen. Jeder Held, der seinen Zug innerhalb von 5 Feldern um dieses Monster beginnt, ist verseucht. Lege als Erinnerung einen Bedrohungsmarker auf die Basis des Monsters.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-affliction-aura.png"
      },
      {
        "id": "fetidstench",
        "nameEn": "Fetid Stench",
        "nameDe": "Fauliger Gestank",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero passes an attribute test from a Poisoned or Diseased Condition card. That hero fails the test instead.",
        "rulesDe": "Erschöpfe diese Karte, wenn einem Helden eine Attributsprobe von einer Zustandskarte „Vergiftet\" oder „Verseucht\" gelingt. Diesem Helden misslingt die Probe stattdessen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-fetid-stench.png"
      },
      {
        "id": "massmutation",
        "nameEn": "Mass Mutation",
        "nameDe": "Massenmutation",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. Each hero discards all Condition cards from his play area. For each Condition card discarded, gain 1 threat token (to a maximum of 4). This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Jeder Held legt alle Zustandskarten aus seiner Auslage ab. Erhalte für jede abgelegte Zustandskarte 1 Bedrohungsmarker (bis zu maximal 4). Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-mass-mutation.png"
      },
      {
        "id": "weaknesswithin",
        "nameEn": "Weakness Within",
        "nameDe": "Schwäche im Innern",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter. While this card is exhausted, each time a hero fails an attribute test while Poisoned or Diseased, that hero suffers 1 Heart in addition to any other effects. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung. Solange diese Karte erschöpft ist, erleidet jedes Mal, wenn einem vergifteten oder verseuchten Helden eine Attributsprobe misslingt, dieser Held zusätzlich zu allen anderen Effekten 1 Herz. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-weakness-within.png"
      },
      {
        "id": "summonbolgoreth",
        "nameEn": "Summon - Bol'Goreth",
        "nameDe": "Beschwören – Bol'Goreth",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 2 minion monsters in the chosen group with the Bol'Goreth agent. If the Bol'Goreth agent is defeated, return this card to your Plot deck. You cannot use this card in a quest that uses the Bol'Goreth lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 2 Diener-Monster der gewählten Gruppe durch den Bol'Goreth-Agenten. Wird der Bol'Goreth-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Bol'Goreth-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-summon-bolgoreth.png"
      },
      {
        "id": "weakenedspirit",
        "nameEn": "Weakened Spirit",
        "nameDe": "Geschwächter Geist",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero is defeated to mark that hero with a threat token from the supply. Each marked hero applies -1 to his Willpower (to a minimum of 1) while he is Diseased and -1 to his Might (to a minimum of 1) while he is Poisoned. Discard all threat tokens on heroes at the end of the quest.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held besiegt wird, um diesen Helden mit einem Bedrohungsmarker aus dem Vorrat zu markieren. Jeder markierte Held erhält -1 auf seine Willenskraft (mindestens 1), solange er verseucht ist, und -1 auf seine Stärke (mindestens 1), solange er vergiftet ist. Lege am Ende des Szenarios alle Bedrohungsmarker auf Helden ab.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-weakened-spirit.png"
      },
      {
        "id": "virulentcloud",
        "nameEn": "Virulent Cloud",
        "nameDe": "Giftige Wolke",
        "threatCost": 4,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during your turn. Each hero with the Poisoned condition suffers 1 Heart and each hero with the Diseased condition suffers 1 Fatigue. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte während deines Zuges. Jeder Held mit dem Zustand „Vergiftet\" erleidet 1 Herz und jeder Held mit dem Zustand „Verseucht\" erleidet 1 Erschöpfung. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
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
        "id": "misdirection",
        "nameEn": "Misdirection",
        "nameDe": "Ablenkung",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster performs an attack that is a miss. Reroll the attack die. If that monster has the Cursed monster trait, you may also reroll 1 power die. If that attack deals at least 1 Heart (after the defense roll), the monster that performed the attack may move 1 space.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster einen Angriff ausführt, der danebengeht. Würfle den Angriffswürfel neu. Hat dieses Monster das Monster-Merkmal „Verflucht\", darfst du außerdem 1 Machtwürfel neu würfeln. Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), darf sich das Monster, das den Angriff ausgeführt hat, 1 Feld bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-misdirection.png"
      },
      {
        "id": "intricateschemes",
        "nameEn": "Intricate Schemes",
        "nameDe": "Verschachtelte Ränke",
        "threatCost": 1,
        "triggerCost": 0,
        "rulesEn": "During the Choose Next Quest step of the Campaign Phase, each time you would choose the next quest to be played, you may force the heroes to choose which quest will be played next. If you do, gain 3 threat tokens.",
        "rulesDe": "Während des Schritts „Nächstes Szenario wählen\" der Kampagnenphase darfst du jedes Mal, wenn du das nächste zu spielende Szenario wählen würdest, die Helden zwingen zu wählen, welches Szenario als Nächstes gespielt wird. Tust du das, erhalte 3 Bedrohungsmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-intricate-schemes.png"
      },
      {
        "id": "taintedblood",
        "nameEn": "Tainted Blood",
        "nameDe": "Verdorbenes Blut",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Use this card after setup of an encounter to choose one of your monster groups. During this encounter, that monster group gains the Cursed monster trait. Place 1 threat token from the supply on that group's Monster card as a reminder.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung, um eine deiner Monstergruppen zu wählen. Während dieser Begegnung erhält diese Monstergruppe das Monster-Merkmal „Verflucht\". Lege als Erinnerung 1 Bedrohungsmarker aus dem Vorrat auf die Monsterkarte dieser Gruppe.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-tainted-blood.png"
      },
      {
        "id": "enthrall",
        "nameEn": "Enthrall",
        "nameDe": "Versklaven",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn to choose 1 monster. Each hero in that monster's line of sight tests Willpower. If that monster has the Cursed monster trait, add 1 Shield to the results of each test. You may move each hero who fails 2 spaces.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges, um 1 Monster zu wählen. Jeder Held in der Sichtlinie dieses Monsters legt eine Willenskraft-Probe ab. Hat dieses Monster das Monster-Merkmal „Verflucht\", füge 1 Schild zu den Ergebnissen jeder Probe hinzu. Du darfst jeden Helden, dem sie misslingt, 2 Felder bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-enthrall.png"
      },
      {
        "id": "malediction",
        "nameEn": "Malediction",
        "nameDe": "Verwünschung",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn. While this card is exhausted, each attack that targets a monster with the Cursed monster trait gains +1 Heart. After resolving each of these attacks, the attacking hero suffers 1 Heart and 1 Fatigue.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges. Solange diese Karte erschöpft ist, erhält jeder Angriff, der ein Monster mit dem Monster-Merkmal „Verflucht\" zum Ziel hat, +1 Herz. Nach dem Abhandeln jedes dieser Angriffe erleidet der angreifende Held 1 Herz und 1 Erschöpfung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-malediction.png"
      },
      {
        "id": "mirage",
        "nameEn": "Mirage",
        "nameDe": "Trugbild",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero resolves an attack that does not deal at least 1 Heart (after the defense roll). Remove 1 monster affected by this attack from the map and place it in an empty space within 3 spaces of its original space. If that monster has the Cursed monster trait, the attacking hero suffers 1 Fatigue.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held einen Angriff abhandelt, der nicht mindestens 1 Herz zufügt (nach dem Verteidigungswurf). Entferne 1 von diesem Angriff betroffenes Monster vom Spielplan und platziere es auf einem leeren Feld innerhalb von 3 Feldern um sein ursprüngliches Feld. Hat dieses Monster das Monster-Merkmal „Verflucht\", erleidet der angreifende Held 1 Erschöpfung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-mirage.png"
      },
      {
        "id": "darknessfalls",
        "nameEn": "Darkness Falls",
        "nameDe": "Dunkelheit bricht herein",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. Until the start of your next turn, line of sight for Ranged attacks can only be measured up to a range of 2. Monsters with the Cursed monster trait, lieutenants, and agents are not affected by this card. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Bis zum Beginn deines nächsten Zuges kann die Sichtlinie für Fernkampfangriffe nur bis zu einer Reichweite von 2 gemessen werden. Monster mit dem Monster-Merkmal „Verflucht\", Leutnants und Agenten sind von dieser Karte nicht betroffen. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-darkness-falls.png"
      },
      {
        "id": "phantasm",
        "nameEn": "Phantasm",
        "nameDe": "Phantasma",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero attacks a master monster with the Cursed monster trait, before dice are rolled. While this card is exhausted, each attack that targets that monster must roll 3 range in addition to any other range requirements, or the attack is a miss.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held ein Meister-Monster mit dem Monster-Merkmal „Verflucht\" angreift, bevor die Würfel geworfen werden. Solange diese Karte erschöpft ist, muss jeder Angriff, der dieses Monster zum Ziel hat, zusätzlich zu allen anderen Reichweitenanforderungen 3 Reichweite würfeln, sonst geht der Angriff daneben.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-phantasm.png"
      },
      {
        "id": "summonariad",
        "nameEn": "Summon - Ariad",
        "nameDe": "Beschwören – Ariad",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 1 minion monster in that group with the Ariad agent. If the Ariad agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Ariad or Queen Ariad lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 1 Diener-Monster dieser Gruppe durch den Ariad-Agenten. Wird der Ariad-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Ariad- oder Königin-Ariad-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-summon-ariad.png"
      },
      {
        "id": "theritualcontinues",
        "nameEn": "The Ritual Continues",
        "nameDe": "Das Ritual geht weiter",
        "threatCost": 4,
        "triggerCost": 0,
        "rulesEn": "At the start of each encounter, place fatigue tokens on this card equal to the number of heroes. Each of your master monsters gains: Action: Discard 1 fatigue token from \"The Ritual Continues\". At the end of each encounter, if there are no fatigue tokens on this card, gain 2 threat tokens. Then, discard all tokens from this card.",
        "rulesDe": "Lege zu Beginn jeder Begegnung so viele Erschöpfungsmarker auf diese Karte wie Helden. Jedes deiner Meister-Monster erhält: Aktion: Lege 1 Erschöpfungsmarker von „Das Ritual geht weiter\" ab. Liegen am Ende jeder Begegnung keine Erschöpfungsmarker auf dieser Karte, erhalte 2 Bedrohungsmarker. Lege dann alle Marker von dieser Karte ab.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-the-ritual-continues.png"
      }
    ]
  }
]
