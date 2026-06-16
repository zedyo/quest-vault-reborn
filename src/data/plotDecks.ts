import type { PlotDeck } from '../types/game'

// Quelle: any2cards/d2e strukturierte Daten (data/plot-decks.js).
// Englischer Text = Originalwortlaut der Karten. Deutscher Text = Community-Übersetzung
// (nicht zwingend identisch mit der offiziellen deutschen FFG-Edition).
//
// Plotdecks gehören je zu einem Agenten (Leutnants-Pack). threatCost = Kaufkosten in
// Bedrohungsmarkern, triggerCost = Auslösekosten. Kartenrückseiten ('plot-decks-back')
// werden ausgelassen. EN 1:1 aus Quelle geparst, DE handübersetzt.
// Umfang: GRUNDSPIEL (6) + Erweiterungs-Plotdecks (Lindwurm/Trollsümpfe/Labyrinth/Rabenfels/
// Bilehall) = 15 Decks / 150 Karten. Karten-ID = deckId-xws (ein xws kommt in zwei Decks vor).
// Offen: Nerekhall (4 Decks) + First Legion (Bilehall).

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
        "id": "seeds-of-betrayal-solepurpose",
        "nameEn": "Sole Purpose",
        "nameDe": "Einziger Zweck",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Use this card when removing Overlord cards from your deck before a quest to remove additional Overlord cards, creating an Overlord deck with a minimum of 13 Overlord cards instead of 15.",
        "rulesDe": "Nutze diese Karte, wenn du vor einem Szenario Overlord-Karten aus deinem Deck entfernst, um zusätzliche Overlord-Karten zu entfernen und so ein Overlord-Deck mit mindestens 13 statt 15 Overlord-Karten zu erstellen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-sole-purpose.png"
      },
      {
        "id": "seeds-of-betrayal-scryingandplotting",
        "nameEn": "Scrying And Plotting",
        "nameDe": "Spähen und Intrigieren",
        "threatCost": 1,
        "triggerCost": 3,
        "rulesEn": "Exhaust this card during quest setup. Instead of drawing your starting hand as normal, search your Overlord deck and choose a number of Overlord cards equal to the number of heroes. These cards are your starting hand. Then, shuffle your Overlord deck.",
        "rulesDe": "Erschöpfe diese Karte während des Szenario-Aufbaus. Anstatt deine Starthand wie üblich zu ziehen, durchsuche dein Overlord-Deck und wähle so viele Overlord-Karten wie Helden. Diese Karten sind deine Starthand. Mische dann dein Overlord-Deck.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-scrying-and-plotting.png"
      },
      {
        "id": "seeds-of-betrayal-alwaysprepared",
        "nameEn": "Always Prepared",
        "nameDe": "Stets vorbereitet",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn and discard up to 2 Overlord cards from your hand. Then, draw Overlord cards equal to the number of discarded cards.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges und lege bis zu 2 Overlord-Karten von deiner Hand ab. Ziehe dann so viele Overlord-Karten wie abgelegte Karten.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-always-prepared.png"
      },
      {
        "id": "seeds-of-betrayal-nefariouspower",
        "nameEn": "Nefarious Power",
        "nameDe": "Niederträchtige Macht",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero performs an attribute test, after the dice are rolled, to add 1 Shield to his results.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held eine Attributsprobe ablegt, nachdem die Würfel geworfen wurden, um 1 Schild zu seinen Ergebnissen hinzuzufügen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-nefarious-power.png"
      },
      {
        "id": "seeds-of-betrayal-rushofpower",
        "nameEn": "Rush Of Power",
        "nameDe": "Machtrausch",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. At the end of this turn, draw 2 Overlord cards.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Am Ende dieses Zuges ziehe 2 Overlord-Karten.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-rush-of-power.png"
      },
      {
        "id": "seeds-of-betrayal-twoprongedgambit",
        "nameEn": "Two-Pronged Gambit",
        "nameDe": "Zweigleisiges Spiel",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card during setup of the first encounter. Then, place a threat token from the supply beneath this card with either the threat or fortune side faceup. No hero player can know which side is faceup. Reveal the token at the end of the quest. If the threat side is faceup and the overlord won, gain 3 threat. If the fortune side is faceup and the heroes won, gain 3 threat.",
        "rulesDe": "Erschöpfe diese Karte während des Aufbaus der ersten Begegnung. Lege dann einen Bedrohungsmarker aus dem Vorrat unter diese Karte, entweder mit der Bedrohungs- oder der Glücksseite nach oben. Kein Heldenspieler darf wissen, welche Seite oben liegt. Decke den Marker am Ende des Szenarios auf. Liegt die Bedrohungsseite oben und der Overlord hat gewonnen, erhalte 3 Bedrohung. Liegt die Glücksseite oben und die Helden haben gewonnen, erhalte 3 Bedrohung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-two-pronged-gambit.png"
      },
      {
        "id": "seeds-of-betrayal-falsefriends",
        "nameEn": "False Friends",
        "nameDe": "Falsche Freunde",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card during setup of the first encounter. While this card is exhausted, reveal 2 fewer Shop Item cards during the next Shopping step of the Campaign phase. This card does not refresh as normal. Refresh this card after the next Shopping step.",
        "rulesDe": "Erschöpfe diese Karte während des Aufbaus der ersten Begegnung. Solange diese Karte erschöpft ist, decke im nächsten Einkaufsschritt der Kampagnenphase 2 Shop-Karten weniger auf. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte nach dem nächsten Einkaufsschritt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-false-friends.png"
      },
      {
        "id": "seeds-of-betrayal-summonzachareth",
        "nameEn": "Summon - Zachareth",
        "nameDe": "Beschwören – Zachareth",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of each encounter to choose an open monster group. Replace 1 master and 1 minion monster in the chosen group with the Baron Zachareth agent. If the Baron Zachareth agent is defeated, return this card to your Plot deck. You cannot use this card in \"The Shadow Rune\" campaign.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau jeder Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 1 Diener-Monster der gewählten Gruppe durch den Baron-Zachareth-Agenten. Wird der Baron-Zachareth-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in der Kampagne „Die Schattenrune\" verwenden.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-summon-zachareth.png"
      },
      {
        "id": "seeds-of-betrayal-troubleontheroad",
        "nameEn": "Trouble On The Road",
        "nameDe": "Ärger unterwegs",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after the Travel step of the Campaign phase. Each hero tests one attribute of your choice. Each hero that tests Might or Knowledge and fails is Stunned. Each hero that tests Awareness and fails is Diseased. Each hero that tests Willpower and fails is Poisoned.",
        "rulesDe": "Erschöpfe diese Karte nach dem Reiseschritt der Kampagnenphase. Jeder Held legt eine Probe auf ein Attribut deiner Wahl ab. Jeder Held, der eine Stärke- oder Wissen-Probe ablegt und scheitert, ist betäubt. Jeder Held, der eine Gespür-Probe ablegt und scheitert, ist verseucht. Jeder Held, der eine Willenskraft-Probe ablegt und scheitert, ist vergiftet.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/seeds-of-betrayal/bg-trouble-on-the-road.png"
      },
      {
        "id": "seeds-of-betrayal-meticulousplanning",
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
        "id": "hybrid-loyalty-dualtraining",
        "nameEn": "Dual Training",
        "nameDe": "Doppelausbildung",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you target a monster with the \"Frenzy\" Overlord card. During this turn, each monster in the target monster's group gains +1 Heart on each attack. Exhaust this card when you target a monster with the \"Dash\" Overlord card. Each other monster in the target monster's group may immediately move 1 space.",
        "rulesDe": "Erschöpfe diese Karte, wenn du ein Monster mit der Overlord-Karte „Raserei\" zum Ziel hast. In diesem Zug erhält jedes Monster der Gruppe des Zielmonsters +1 Herz auf jeden Angriff. Erschöpfe diese Karte, wenn du ein Monster mit der Overlord-Karte „Sprint\" zum Ziel hast. Jedes andere Monster der Gruppe des Zielmonsters darf sich sofort 1 Feld bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-dual-training.png"
      },
      {
        "id": "hybrid-loyalty-bribery",
        "nameEn": "Bribery",
        "nameDe": "Bestechung",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after resolving the effects of a \"Dark Charm\" Overlord card to return that card to your hand. Immediately play it, targeting a different hero. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte, nachdem du die Effekte einer „Dunkler Zauber\"-Overlord-Karte abgehandelt hast, um diese Karte auf deine Hand zurückzunehmen. Spiele sie sofort und ziele auf einen anderen Helden. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-bribery.png"
      },
      {
        "id": "hybrid-loyalty-cutadeal",
        "nameEn": "Cut A Deal",
        "nameDe": "Einen Handel schließen",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card at the end of a quest to add the following Rewards to that quest: If the heroes win, the overlord gains 1 threat token and the heroes receive 25 gold. If the overlord wins, he gains 2 threat tokens and the heroes receive 25 gold.",
        "rulesDe": "Erschöpfe diese Karte am Ende eines Szenarios, um diesem Szenario folgende Belohnungen hinzuzufügen: Gewinnen die Helden, erhält der Overlord 1 Bedrohungsmarker und die Helden erhalten 25 Gold. Gewinnt der Overlord, erhält er 2 Bedrohungsmarker und die Helden erhalten 25 Gold.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-cut-a-deal.png"
      },
      {
        "id": "hybrid-loyalty-endit",
        "nameEn": "End It!",
        "nameDe": "Mach Schluss!",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you play a \"Critical Blow\" Overlord card to add 1 Surge to the attack results.",
        "rulesDe": "Erschöpfe diese Karte, wenn du eine „Kritischer Schlag\"-Overlord-Karte spielst, um 1 Schub zu den Angriffsergebnissen hinzuzufügen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-end-it.png"
      },
      {
        "id": "hybrid-loyalty-fightwithhonor",
        "nameEn": "Fight With Honor",
        "nameDe": "Mit Ehre kämpfen",
        "threatCost": 2,
        "triggerCost": 0,
        "rulesEn": "Exhaust this card and discard a Trap Overlord card before triggering the ability of another Plot card. Reduce the Plot card's trigger cost by 1 (to a minimum of 0).",
        "rulesDe": "Erschöpfe diese Karte und lege eine Fallen-Overlord-Karte ab, bevor du die Fähigkeit einer anderen Plotkarte auslöst. Verringere die Auslösekosten dieser Plotkarte um 1 (mindestens 0).",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-fight-with-honor.png"
      },
      {
        "id": "hybrid-loyalty-makeourownluck",
        "nameEn": "Make Our Own Luck",
        "nameDe": "Unser Glück selbst schmieden",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after resolving a \"Dark Fortune\" Overlord card to change the rerolled die to a result of your choice.",
        "rulesDe": "Erschöpfe diese Karte, nachdem du eine „Dunkles Schicksal\"-Overlord-Karte abgehandelt hast, um den neu gewürfelten Würfel auf ein Ergebnis deiner Wahl zu ändern.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-make-our-own-luck.png"
      },
      {
        "id": "hybrid-loyalty-showofforce",
        "nameEn": "Show Of Force",
        "nameDe": "Machtdemonstration",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when you knock out a hero, before drawing an overlord card or gaining a threat token for knocking out that hero. While this card is exhausted, each time you gain a threat token, you may draw an Overlord card. This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte, wenn du einen Helden kampfunfähig machst, bevor du eine Overlord-Karte ziehst oder einen Bedrohungsmarker für das Kampfunfähigmachen dieses Helden erhältst. Solange diese Karte erschöpft ist, darfst du jedes Mal, wenn du einen Bedrohungsmarker erhältst, eine Overlord-Karte ziehen. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-show-of-force.png"
      },
      {
        "id": "hybrid-loyalty-resourceful",
        "nameEn": "Resourceful",
        "nameDe": "Einfallsreich",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn instead of drawing an Overlord card. Choose a basic Overlord card in your discard pile and place it on top of your Overlord deck.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges, anstatt eine Overlord-Karte zu ziehen. Wähle eine Basis-Overlord-Karte in deinem Ablagestapel und lege sie oben auf dein Overlord-Deck.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-resourceful.png"
      },
      {
        "id": "hybrid-loyalty-summonbelthir",
        "nameEn": "Summon - Belthir",
        "nameDe": "Beschwören – Belthir",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 1 minion monster in the chosen group with the Belthir agent. If the Belthir agent is defeated during this encounter, return this card to your Plot deck. You cannot use this card in any quest that uses the Belthir lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 1 Diener-Monster der gewählten Gruppe durch den Belthir-Agenten. Wird der Belthir-Agent während dieser Begegnung besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Belthir-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/base-game/hybrid-loyalty/bg-summon-belthir.png"
      },
      {
        "id": "hybrid-loyalty-hazardpay",
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
    "nameDe": "Wütende Infektion",
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
        "rulesDe": "Erschöpfe diese Karte, wenn ein vergifteter oder verseuchter Held besiegt wird. War dieser Held vergiftet, legt jeder Held innerhalb von 3 Feldern eine Stärke-Probe ab. Jeder Held, dem sie misslingt, ist vergiftet. War dieser Held verseucht, legt jeder Held innerhalb von 3 Feldern eine Willenskraft-Probe ab. Jeder Held, dem sie misslingt, ist verseucht.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-plague-release.png"
      },
      {
        "id": "raging-infection-envenom",
        "nameEn": "Envenom",
        "nameDe": "Vergiften",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter to choose one of your monster groups, and place this card near that group's Monster card. While this card is exhausted, each master monster in the group gains: Surge: Poison. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine deiner Monstergruppen zu wählen, und lege diese Karte neben die Monsterkarte dieser Gruppe. Solange diese Karte erschöpft ist, erhält jedes Meister-Monster der Gruppe: Schub: Vergiften. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-envenom.png"
      },
      {
        "id": "raging-infection-infected",
        "nameEn": "Infected",
        "nameDe": "Infiziert",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card after setup of an encounter to choose one of your monster groups, and place this card near that group's Monster card. While this card is exhausted, each master monster in the group gains: Surge: Disease. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine deiner Monstergruppen zu wählen, und lege diese Karte neben die Monsterkarte dieser Gruppe. Solange diese Karte erschöpft ist, erhält jedes Meister-Monster der Gruppe: Schub: Seuche. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-infected.png"
      },
      {
        "id": "raging-infection-afflictionaura",
        "nameEn": "Affliction Aura",
        "nameDe": "Aura des Leidens",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Use this card after setup of an encounter to choose a monster. Each hero that starts his turn within 5 spaces of that monster is Diseased. Place a threat token on the monster's base as a reminder.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung, um ein Monster zu wählen. Jeder Held, der seinen Zug innerhalb von 5 Feldern um dieses Monster beginnt, ist verseucht. Lege als Erinnerung einen Bedrohungsmarker auf die Basis des Monsters.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-affliction-aura.png"
      },
      {
        "id": "raging-infection-fetidstench",
        "nameEn": "Fetid Stench",
        "nameDe": "Fauliger Gestank",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero passes an attribute test from a Poisoned or Diseased Condition card. That hero fails the test instead.",
        "rulesDe": "Erschöpfe diese Karte, wenn einem Helden eine Attributsprobe von einer Zustandskarte „Vergiftet\" oder „Verseucht\" gelingt. Diesem Helden misslingt die Probe stattdessen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-fetid-stench.png"
      },
      {
        "id": "raging-infection-massmutation",
        "nameEn": "Mass Mutation",
        "nameDe": "Massenmutation",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. Each hero discards all Condition cards from his play area. For each Condition card discarded, gain 1 threat token (to a maximum of 4). This card does not refresh as normal. Refresh this card at the end of each quest.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Jeder Held legt alle Zustandskarten aus seiner Auslage ab. Erhalte für jede abgelegte Zustandskarte 1 Bedrohungsmarker (bis zu maximal 4). Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jedes Szenarios.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-mass-mutation.png"
      },
      {
        "id": "raging-infection-weaknesswithin",
        "nameEn": "Weakness Within",
        "nameDe": "Schwäche im Innern",
        "threatCost": 2,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter. While this card is exhausted, each time a hero fails an attribute test while Poisoned or Diseased, that hero suffers 1 Heart in addition to any other effects. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung. Solange diese Karte erschöpft ist, erleidet jedes Mal, wenn einem vergifteten oder verseuchten Helden eine Attributsprobe misslingt, dieser Held zusätzlich zu allen anderen Effekten 1 Herz. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-weakness-within.png"
      },
      {
        "id": "raging-infection-summonbolgoreth",
        "nameEn": "Summon - Bol'Goreth",
        "nameDe": "Beschwören – Bol'Goreth",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 2 minion monsters in the chosen group with the Bol'Goreth agent. If the Bol'Goreth agent is defeated, return this card to your Plot deck. You cannot use this card in a quest that uses the Bol'Goreth lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 2 Diener-Monster der gewählten Gruppe durch den Bol'Goreth-Agenten. Wird der Bol'Goreth-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Bol'Goreth-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-summon-bolgoreth.png"
      },
      {
        "id": "raging-infection-weakenedspirit",
        "nameEn": "Weakened Spirit",
        "nameDe": "Geschwächter Geist",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero is defeated to mark that hero with a threat token from the supply. Each marked hero applies -1 to his Willpower (to a minimum of 1) while he is Diseased and -1 to his Might (to a minimum of 1) while he is Poisoned. Discard all threat tokens on heroes at the end of the quest.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held besiegt wird, um diesen Helden mit einem Bedrohungsmarker aus dem Vorrat zu markieren. Jeder markierte Held erhält -1 auf seine Willenskraft (mindestens 1), solange er verseucht ist, und -1 auf seine Stärke (mindestens 1), solange er vergiftet ist. Lege am Ende des Szenarios alle Bedrohungsmarker auf Helden ab.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/the-trollfens/raging-infection/tf-weakened-spirit.png"
      },
      {
        "id": "raging-infection-virulentcloud",
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
        "id": "dark-illusions-misdirection",
        "nameEn": "Misdirection",
        "nameDe": "Ablenkung",
        "threatCost": 0,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a monster performs an attack that is a miss. Reroll the attack die. If that monster has the Cursed monster trait, you may also reroll 1 power die. If that attack deals at least 1 Heart (after the defense roll), the monster that performed the attack may move 1 space.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Monster einen Angriff ausführt, der danebengeht. Würfle den Angriffswürfel neu. Hat dieses Monster das Monster-Merkmal „Verflucht\", darfst du außerdem 1 Machtwürfel neu würfeln. Fügt dieser Angriff mindestens 1 Herz zu (nach dem Verteidigungswurf), darf sich das Monster, das den Angriff ausgeführt hat, 1 Feld bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-misdirection.png"
      },
      {
        "id": "dark-illusions-intricateschemes",
        "nameEn": "Intricate Schemes",
        "nameDe": "Verschachtelte Ränke",
        "threatCost": 1,
        "triggerCost": 0,
        "rulesEn": "During the Choose Next Quest step of the Campaign Phase, each time you would choose the next quest to be played, you may force the heroes to choose which quest will be played next. If you do, gain 3 threat tokens.",
        "rulesDe": "Während des Schritts „Nächstes Szenario wählen\" der Kampagnenphase darfst du jedes Mal, wenn du das nächste zu spielende Szenario wählen würdest, die Helden zwingen zu wählen, welches Szenario als Nächstes gespielt wird. Tust du das, erhalte 3 Bedrohungsmarker.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-intricate-schemes.png"
      },
      {
        "id": "dark-illusions-taintedblood",
        "nameEn": "Tainted Blood",
        "nameDe": "Verdorbenes Blut",
        "threatCost": 1,
        "triggerCost": 1,
        "rulesEn": "Use this card after setup of an encounter to choose one of your monster groups. During this encounter, that monster group gains the Cursed monster trait. Place 1 threat token from the supply on that group's Monster card as a reminder.",
        "rulesDe": "Nutze diese Karte nach dem Aufbau einer Begegnung, um eine deiner Monstergruppen zu wählen. Während dieser Begegnung erhält diese Monstergruppe das Monster-Merkmal „Verflucht\". Lege als Erinnerung 1 Bedrohungsmarker aus dem Vorrat auf die Monsterkarte dieser Gruppe.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-tainted-blood.png"
      },
      {
        "id": "dark-illusions-enthrall",
        "nameEn": "Enthrall",
        "nameDe": "Versklaven",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn to choose 1 monster. Each hero in that monster's line of sight tests Willpower. If that monster has the Cursed monster trait, add 1 Shield to the results of each test. You may move each hero who fails 2 spaces.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges, um 1 Monster zu wählen. Jeder Held in der Sichtlinie dieses Monsters legt eine Willenskraft-Probe ab. Hat dieses Monster das Monster-Merkmal „Verflucht\", füge 1 Schild zu den Ergebnissen jeder Probe hinzu. Du darfst jeden Helden, dem sie misslingt, 2 Felder bewegen.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-enthrall.png"
      },
      {
        "id": "dark-illusions-malediction",
        "nameEn": "Malediction",
        "nameDe": "Verwünschung",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the end of your turn. While this card is exhausted, each attack that targets a monster with the Cursed monster trait gains +1 Heart. After resolving each of these attacks, the attacking hero suffers 1 Heart and 1 Fatigue.",
        "rulesDe": "Erschöpfe diese Karte am Ende deines Zuges. Solange diese Karte erschöpft ist, erhält jeder Angriff, der ein Monster mit dem Monster-Merkmal „Verflucht\" zum Ziel hat, +1 Herz. Nach dem Abhandeln jedes dieser Angriffe erleidet der angreifende Held 1 Herz und 1 Erschöpfung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-malediction.png"
      },
      {
        "id": "dark-illusions-mirage",
        "nameEn": "Mirage",
        "nameDe": "Trugbild",
        "threatCost": 2,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero resolves an attack that does not deal at least 1 Heart (after the defense roll). Remove 1 monster affected by this attack from the map and place it in an empty space within 3 spaces of its original space. If that monster has the Cursed monster trait, the attacking hero suffers 1 Fatigue.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held einen Angriff abhandelt, der nicht mindestens 1 Herz zufügt (nach dem Verteidigungswurf). Entferne 1 von diesem Angriff betroffenes Monster vom Spielplan und platziere es auf einem leeren Feld innerhalb von 3 Feldern um sein ursprüngliches Feld. Hat dieses Monster das Monster-Merkmal „Verflucht\", erleidet der angreifende Held 1 Erschöpfung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-mirage.png"
      },
      {
        "id": "dark-illusions-darknessfalls",
        "nameEn": "Darkness Falls",
        "nameDe": "Dunkelheit bricht herein",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card at the start of your turn. Until the start of your next turn, line of sight for Ranged attacks can only be measured up to a range of 2. Monsters with the Cursed monster trait, lieutenants, and agents are not affected by this card. This card does not refresh as normal. Refresh this card at the end of each encounter.",
        "rulesDe": "Erschöpfe diese Karte zu Beginn deines Zuges. Bis zum Beginn deines nächsten Zuges kann die Sichtlinie für Fernkampfangriffe nur bis zu einer Reichweite von 2 gemessen werden. Monster mit dem Monster-Merkmal „Verflucht\", Leutnants und Agenten sind von dieser Karte nicht betroffen. Diese Karte erholt sich nicht wie üblich. Erhole diese Karte am Ende jeder Begegnung.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-darkness-falls.png"
      },
      {
        "id": "dark-illusions-phantasm",
        "nameEn": "Phantasm",
        "nameDe": "Phantasma",
        "threatCost": 3,
        "triggerCost": 1,
        "rulesEn": "Exhaust this card when a hero attacks a master monster with the Cursed monster trait, before dice are rolled. While this card is exhausted, each attack that targets that monster must roll 3 range in addition to any other range requirements, or the attack is a miss.",
        "rulesDe": "Erschöpfe diese Karte, wenn ein Held ein Meister-Monster mit dem Monster-Merkmal „Verflucht\" angreift, bevor die Würfel geworfen werden. Solange diese Karte erschöpft ist, muss jeder Angriff, der dieses Monster zum Ziel hat, zusätzlich zu allen anderen Reichweitenanforderungen 3 Reichweite würfeln, sonst geht der Angriff daneben.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-phantasm.png"
      },
      {
        "id": "dark-illusions-summonariad",
        "nameEn": "Summon - Ariad",
        "nameDe": "Beschwören – Ariad",
        "threatCost": 3,
        "triggerCost": 2,
        "rulesEn": "Exhaust this card after setup of an encounter to choose an open monster group. Replace 1 master and 1 minion monster in that group with the Ariad agent. If the Ariad agent is defeated, return this card to your Plot deck. You cannot use this card in any quest that uses the Ariad or Queen Ariad lieutenant.",
        "rulesDe": "Erschöpfe diese Karte nach dem Aufbau einer Begegnung, um eine offene Monstergruppe zu wählen. Ersetze 1 Meister- und 1 Diener-Monster dieser Gruppe durch den Ariad-Agenten. Wird der Ariad-Agent besiegt, nimm diese Karte zurück in dein Plotdeck. Du kannst diese Karte nicht in einem Szenario verwenden, das den Ariad- oder Königin-Ariad-Leutnant nutzt.",
        "imageUrl": "https://raw.githubusercontent.com/any2cards/d2e/master/images/plot-decks/d2e/labyrinth-of-ruin/dark-illusions/lr-summon-ariad.png"
      },
      {
        "id": "dark-illusions-theritualcontinues",
        "nameEn": "The Ritual Continues",
        "nameDe": "Das Ritual geht weiter",
        "threatCost": 4,
        "triggerCost": 0,
        "rulesEn": "At the start of each encounter, place fatigue tokens on this card equal to the number of heroes. Each of your master monsters gains: Action: Discard 1 fatigue token from \"The Ritual Continues\". At the end of each encounter, if there are no fatigue tokens on this card, gain 2 threat tokens. Then, discard all tokens from this card.",
        "rulesDe": "Lege zu Beginn jeder Begegnung so viele Erschöpfungsmarker auf diese Karte wie Helden. Jedes deiner Meister-Monster erhält: Aktion: Lege 1 Erschöpfungsmarker von „Das Ritual geht weiter\" ab. Liegen am Ende jeder Begegnung keine Erschöpfungsmarker auf dieser Karte, erhalte 2 Bedrohungsmarker. Lege dann alle Marker von dieser Karte ab.",
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
  }
]
