import type { PlotDeck } from '../types/game'

// Quelle: any2cards/d2e strukturierte Daten (data/plot-decks.js).
// Englischer Text = Originalwortlaut der Karten. Deutscher Text = Community-Übersetzung
// (nicht zwingend identisch mit der offiziellen deutschen FFG-Edition).
//
// Plotdecks gehören je zu einem Agenten (Leutnants-Pack). threatCost = Kaufkosten in
// Bedrohungsmarkern, triggerCost = Auslösekosten. Kartenrückseiten ('plot-decks-back')
// werden ausgelassen. EN 1:1 aus Quelle geparst, DE handübersetzt.
// Umfang: GRUNDSPIEL Batch 1 (Seeds of Betrayal, Hybrid Loyalty, Endless Thirst — 30 Karten).
// Weitere Plotdecks folgen in weiteren Increments.

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
  }
]
