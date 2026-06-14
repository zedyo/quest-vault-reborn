import type { OverlordDeck } from '../types/game'

// Quelle: any2cards/d2e strukturierte Daten (data/overlord-decks.js).
// Englischer Text = Originalwortlaut der Karten. Deutscher Text = Community-Übersetzung
// (nicht zwingend identisch mit der offiziellen deutschen FFG-Edition).
//
// Umfang dieser Datei: GRUNDSPIEL (Basis-Deck + die 3 Grundspiel-Klassen Magus,
// Saboteur, Kriegsherr + Universal-Karten). Erweiterungs-Klassen und Belohnungs-
// karten folgen in späteren Increments.
//
// Hinweise zur Datenpflege:
// - Die Kartenrückseite ('overlord-decks-back') ist KEINE Spielkarte und wird ausgelassen.
// - Errata-Dubletten: Bei „Unholy Ritual", „Bloodlust" und „Reinforce" existiert eine
//   ältere und eine errata-Fassung. Hier ist jeweils die ERRATA-Fassung erfasst (Text +
//   Kartenbild), die ältere Fassung ist bewusst weggelassen (siehe overlord-classes.md).

const IMG = 'https://raw.githubusercontent.com/any2cards/d2e/master/images/overlord-decks/d2e/base-game'

export const OVERLORD_DECKS: OverlordDeck[] = [
  // ─── Basis-Deck (immer im Spiel, unabhängig von der gewählten Klasse) ───────
  {
    id: 'basic',
    nameEn: 'Basic',
    nameDe: 'Basis',
    kind: 'basic',
    expansionId: 'base',
    cards: [
      {
        id: 'criticalblow', nameEn: 'Critical Blow', nameDe: 'Kritischer Schlag',
        cardType: 'Event', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a monster attacks a hero, after rolling dice. The attack gains: Surge: +3 Hearts',
        rulesDe: 'Spiele diese Karte, wenn ein Monster einen Helden angreift, nachdem die Würfel geworfen wurden. Der Angriff erhält: Schub: +3 Herzen.',
        imageUrl: `${IMG}/basic/bg-critical-blow.png`,
      },
      {
        id: 'darkcharm', nameEn: 'Dark Charm', nameDe: 'Dunkler Zauber',
        cardType: 'Magic', count: 1, xpCost: 0,
        rulesEn: 'Play this card on a hero at the start of your turn. The hero tests Willpower. If he passes, draw 1 Overlord card. If he fails, you may perform a move or attack action with that hero as if he were one of your monsters this turn. You cannot force him to suffer Fatigue or use a Potion, but you may force him to attack himself.',
        rulesDe: 'Spiele diese Karte zu Beginn deines Zuges auf einen Helden. Der Held legt eine Willenskraft-Probe ab. Gelingt sie, ziehe 1 Overlord-Karte. Misslingt sie, darfst du in diesem Zug eine Bewegungs- oder Angriffsaktion mit diesem Helden ausführen, als wäre er eines deiner Monster. Du kannst ihn nicht zwingen, Erschöpfung zu erleiden oder einen Trank zu benutzen, aber du darfst ihn zwingen, sich selbst anzugreifen.',
        imageUrl: `${IMG}/basic/bg-dark-charm.png`,
      },
      {
        id: 'darkfortune', nameEn: 'Dark Fortune', nameDe: 'Dunkles Schicksal',
        cardType: 'Event', count: 2, xpCost: 0,
        rulesEn: 'Play this card after you roll dice. You may reroll 1 die.',
        rulesDe: 'Spiele diese Karte, nachdem du Würfel geworfen hast. Du darfst 1 Würfel neu würfeln.',
        imageUrl: `${IMG}/basic/bg-dark-fortune.png`,
      },
      {
        id: 'darkmight', nameEn: 'Dark Might', nameDe: 'Dunkle Macht',
        cardType: 'Magic', count: 2, xpCost: 0,
        rulesEn: 'Play this card after you roll dice for an attack. Add 1 Surge to the results.',
        rulesDe: 'Spiele diese Karte, nachdem du für einen Angriff Würfel geworfen hast. Füge 1 Schub zu den Ergebnissen hinzu.',
        imageUrl: `${IMG}/basic/bg-dark-might.png`,
      },
      {
        id: 'dash', nameEn: 'Dash', nameDe: 'Sprint',
        cardType: 'Event', count: 2, xpCost: 0,
        rulesEn: 'Play this card when activating a monster during your turn. That monster may perform an additional move action this turn in addition to its normal 2 actions.',
        rulesDe: 'Spiele diese Karte, wenn du während deines Zuges ein Monster aktivierst. Dieses Monster darf in diesem Zug zusätzlich zu seinen normalen 2 Aktionen eine weitere Bewegungsaktion ausführen.',
        imageUrl: `${IMG}/basic/bg-dash.png`,
      },
      {
        id: 'frenzy', nameEn: 'Frenzy', nameDe: 'Raserei',
        cardType: 'Event', count: 2, xpCost: 0,
        rulesEn: 'Play this card when activating a monster during your turn. That monster may perform an additional attack action this turn in addition to its normal 2 actions.',
        rulesDe: 'Spiele diese Karte, wenn du während deines Zuges ein Monster aktivierst. Dieses Monster darf in diesem Zug zusätzlich zu seinen normalen 2 Aktionen eine weitere Angriffsaktion ausführen.',
        imageUrl: `${IMG}/basic/bg-frenzy.png`,
      },
      {
        id: 'pittrap', nameEn: 'Pit Trap', nameDe: 'Fallgrube',
        cardType: 'Trap', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a hero enters an empty space. He tests Awareness. If he fails, he suffers 1 Heart and loses 1 movement point. If he has no movement points to lose (such as if he suffered fatigue to move), he is Stunned.',
        rulesDe: 'Spiele diese Karte, wenn ein Held ein leeres Feld betritt. Er legt eine Gespür-Probe ab. Misslingt sie, erleidet er 1 Herz und verliert 1 Bewegungspunkt. Hat er keine Bewegungspunkte zu verlieren (z. B. wenn er Erschöpfung erlitten hat, um sich zu bewegen), ist er betäubt.',
        imageUrl: `${IMG}/basic/bg-pit-trap.png`,
      },
      {
        id: 'poisondart', nameEn: 'Poison Dart', nameDe: 'Giftpfeil',
        cardType: 'Trap', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a hero opens a door or searches. He tests Awareness or Might (your choice). If he passes, draw 1 Overlord card. If he fails, he suffers 1 Heart, 1 Fatigue, and he is Poisoned.',
        rulesDe: 'Spiele diese Karte, wenn ein Held eine Tür öffnet oder durchsucht. Er legt eine Gespür- oder Stärke-Probe ab (deine Wahl). Gelingt sie, ziehe 1 Overlord-Karte. Misslingt sie, erleidet er 1 Herz, 1 Erschöpfung und ist vergiftet.',
        imageUrl: `${IMG}/basic/bg-poison-dart.png`,
      },
      {
        id: 'tripwire', nameEn: 'Tripwire', nameDe: 'Stolperdraht',
        cardType: 'Trap', count: 2, xpCost: 0,
        rulesEn: 'Play this card when a hero enters an empty space during a move action. He tests Awareness. If he fails, he must end his move action (he can still suffer Fatigue to move further, or perform a second move action if this was his first action).',
        rulesDe: 'Spiele diese Karte, wenn ein Held während einer Bewegungsaktion ein leeres Feld betritt. Er legt eine Gespür-Probe ab. Misslingt sie, muss er seine Bewegungsaktion beenden (er kann weiterhin Erschöpfung erleiden, um sich weiterzubewegen, oder eine zweite Bewegungsaktion ausführen, falls dies seine erste Aktion war).',
        imageUrl: `${IMG}/basic/bg-tripwire.png`,
      },
      {
        id: 'wordofmisery', nameEn: 'Word of Misery', nameDe: 'Wort des Elends',
        cardType: 'Magic', count: 1, xpCost: 0,
        rulesEn: 'Play this card at the start of your turn. During this turn, each time a hero suffers any Hearts, he also suffers 1 Fatigue in addition to the Hearts suffered.',
        rulesDe: 'Spiele diese Karte zu Beginn deines Zuges. Jedes Mal, wenn ein Held in diesem Zug Herzen erleidet, erleidet er zusätzlich zu den erlittenen Herzen 1 Erschöpfung.',
        imageUrl: `${IMG}/basic/bg-word-of-misery.png`,
      },
    ],
  },

  // ─── Klasse: Magus ──────────────────────────────────────────────────────────
  {
    id: 'magus',
    nameEn: 'Magus',
    nameDe: 'Magus',
    kind: 'class',
    expansionId: 'base',
    cards: [
      {
        id: 'unholyritual', nameEn: 'Unholy Ritual', nameDe: 'Unheiliges Ritual',
        cardType: 'Magic', count: 2, xpCost: 1,
        rulesEn: 'Play this card at the start of your turn. Choose one of your monster groups and draw Overlord cards equal to the number of figures from that group on the map. Choose and keep 2 cards and discard the rest. Each monster in that group performs 1 less action during this turn.',
        rulesDe: 'Spiele diese Karte zu Beginn deines Zuges. Wähle eine deiner Monstergruppen und ziehe so viele Overlord-Karten, wie Figuren dieser Gruppe auf dem Spielplan stehen. Wähle 2 Karten und behalte sie, lege den Rest ab. Jedes Monster dieser Gruppe führt in diesem Zug 1 Aktion weniger aus.',
        imageUrl: `${IMG}/magus/bg-unholy-ritual-errata.png`,
      },
      {
        id: 'wordofpain', nameEn: 'Word of Pain', nameDe: 'Wort des Schmerzes',
        cardType: 'Magic', count: 2, xpCost: 1,
        rulesEn: 'Play this card at the end of your turn. Each hero tests Might. Each hero who fails suffers 1 Heart.',
        rulesDe: 'Spiele diese Karte am Ende deines Zuges. Jeder Held legt eine Stärke-Probe ab. Jeder Held, dem sie misslingt, erleidet 1 Herz.',
        imageUrl: `${IMG}/magus/bg-word-of-pain.png`,
      },
      {
        id: 'riseagain', nameEn: 'Rise Again', nameDe: 'Wiederauferstehung',
        cardType: 'Magic', count: 1, xpCost: 2,
        rulesEn: "Play this card when a minion or master monster is defeated to place a fatigue token on the map in that monster's space. At the start of your next turn, place that monster on the map within 5 spaces of where it was defeated. At the end of your next turn, remove that monster (and the token) from the map.",
        rulesDe: 'Spiele diese Karte, wenn ein Diener- oder Meister-Monster besiegt wird, um einen Erschöpfungsmarker auf dem Feld dieses Monsters zu platzieren. Zu Beginn deines nächsten Zuges platziere dieses Monster innerhalb von 5 Feldern von dem Ort, an dem es besiegt wurde, auf dem Spielplan. Am Ende deines nächsten Zuges entferne dieses Monster (und den Marker) vom Spielplan.',
        imageUrl: `${IMG}/magus/bg-rise-again.png`,
      },
      {
        id: 'wordofdespair', nameEn: 'Word of Despair', nameDe: 'Wort der Verzweiflung',
        cardType: 'Magic', count: 1, xpCost: 2,
        rulesEn: 'Play this card at the end of your turn. Each hero tests Willpower. Each hero who fails suffers 1 Fatigue each time he performs an action during his next turn. This Fatigue is suffered after the hero completely resolves the action. (He may perform actions even if his Fatigue equals his Stamina; excess Fatigue is converted to Hearts as usual).',
        rulesDe: 'Spiele diese Karte am Ende deines Zuges. Jeder Held legt eine Willenskraft-Probe ab. Jeder Held, dem sie misslingt, erleidet in seinem nächsten Zug jedes Mal 1 Erschöpfung, wenn er eine Aktion ausführt. Diese Erschöpfung wird erlitten, nachdem der Held die Aktion vollständig abgehandelt hat. (Er darf Aktionen ausführen, selbst wenn seine Erschöpfung seiner Ausdauer entspricht; überschüssige Erschöpfung wird wie üblich in Herzen umgewandelt.)',
        imageUrl: `${IMG}/magus/bg-word-of-despair.png`,
      },
      {
        id: 'diabolicpower', nameEn: 'Diabolic Power', nameDe: 'Diabolische Macht',
        cardType: 'Magic', count: 1, xpCost: 3,
        rulesEn: 'Play this card during your turn. Search your deck and discard pile for the card of your choice, reveal it, and place it in your hand, then shuffle your deck. If the chosen card is an Event, every hero tests Willpower. If it is a Trap, every hero tests Awareness. If it is Magic, every hero tests Knowledge. Each hero who fails suffers 2 Hearts.',
        rulesDe: 'Spiele diese Karte während deines Zuges. Durchsuche deinen Nachziehstapel und Ablagestapel nach einer Karte deiner Wahl, decke sie auf und nimm sie auf die Hand, dann mische deinen Nachziehstapel. Ist die gewählte Karte ein Ereignis, legt jeder Held eine Willenskraft-Probe ab. Ist es eine Falle, legt jeder Held eine Gespür-Probe ab. Ist es Magie, legt jeder Held eine Wissen-Probe ab. Jeder Held, dem die Probe misslingt, erleidet 2 Herzen.',
        imageUrl: `${IMG}/magus/bg-diabolic-power.png`,
      },
    ],
  },

  // ─── Klasse: Saboteur ───────────────────────────────────────────────────────
  {
    id: 'saboteur',
    nameEn: 'Saboteur',
    nameDe: 'Saboteur',
    kind: 'class',
    expansionId: 'base',
    cards: [
      {
        id: 'explosiverunes', nameEn: 'Explosive Runes', nameDe: 'Explosive Runen',
        cardType: 'Trap', count: 2, xpCost: 1,
        rulesEn: 'Play this card after a hero opens a door or searches. That hero, and each hero within 2 spaces of him tests Awareness. Each hero who fails suffers 1 Heart for each Shield rolled in excess of his Awareness.',
        rulesDe: 'Spiele diese Karte, nachdem ein Held eine Tür geöffnet oder durchsucht hat. Dieser Held und jeder Held innerhalb von 2 Feldern um ihn legen eine Gespür-Probe ab. Jeder Held, dem sie misslingt, erleidet 1 Herz für jedes Schild, das über seinen Gespür-Wert hinaus gewürfelt wurde.',
        imageUrl: `${IMG}/saboteur/bg-explosive-runes.png`,
      },
      {
        id: 'webtrap', nameEn: 'Web Trap', nameDe: 'Netzfalle',
        cardType: 'Trap', count: 2, xpCost: 1,
        rulesEn: 'Play this card when a hero enters an empty space. That hero and each hero adjacent to him tests Might. Each hero who fails is Immobilized.',
        rulesDe: 'Spiele diese Karte, wenn ein Held ein leeres Feld betritt. Dieser Held und jeder zu ihm benachbarte Held legen eine Stärke-Probe ab. Jeder Held, dem sie misslingt, ist bewegungsunfähig.',
        imageUrl: `${IMG}/saboteur/bg-web-trap.png`,
      },
      {
        id: 'curseofthemonkeygod', nameEn: 'Curse of the Monkey God', nameDe: 'Fluch des Affengottes',
        cardType: 'Trap', count: 1, xpCost: 2,
        rulesEn: 'Play this card after a hero searches. That hero tests Knowledge. If he passes, draw 1 Overlord card. If he fails, he becomes a monkey until the end of his next turn. Take 1 of his hero tokens as a reminder. Monkeys cannot roll defense dice (except to test an attribute), have a Speed of 5, and cannot attack for any reason.',
        rulesDe: 'Spiele diese Karte, nachdem ein Held durchsucht hat. Dieser Held legt eine Wissen-Probe ab. Gelingt sie, ziehe 1 Overlord-Karte. Misslingt sie, wird er bis zum Ende seines nächsten Zuges zu einem Affen. Nimm 1 seiner Heldenmarker als Erinnerung. Affen können keine Verteidigungswürfel werfen (außer um eine Attributsprobe abzulegen), haben eine Bewegung von 5 und können aus keinem Grund angreifen.',
        imageUrl: `${IMG}/saboteur/bg-curse-of-the-monkey-god.png`,
      },
      {
        id: 'wickedlaughter', nameEn: 'Wicked Laughter', nameDe: 'Boshaftes Gelächter',
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card when a hero passes an attribute test. The hero must take the test again, this time treating his attribute as if it were 1 lower. If the hero passes this new attribute test, draw 1 Overlord card.',
        rulesDe: 'Spiele diese Karte, wenn einem Helden eine Attributsprobe gelingt. Der Held muss die Probe erneut ablegen, wobei sein Attribut diesmal als um 1 niedriger gilt. Gelingt dem Helden diese neue Attributsprobe, ziehe 1 Overlord-Karte.',
        imageUrl: `${IMG}/saboteur/bg-wicked-laughter.png`,
      },
      {
        id: 'uthukdemontrap', nameEn: 'Uthuk Demon Trap', nameDe: 'Uthuk-Dämonenfalle',
        cardType: 'Trap', count: 1, xpCost: 3,
        rulesEn: 'Play this card after a hero opens a door or searches. He tests Awareness or Might (his choice). If he passes, he suffers Hearts equal to the attribute tested. If he fails, he is defeated.',
        rulesDe: 'Spiele diese Karte, nachdem ein Held eine Tür geöffnet oder durchsucht hat. Er legt eine Gespür- oder Stärke-Probe ab (seine Wahl). Gelingt sie, erleidet er so viele Herzen wie der Wert des geprüften Attributs. Misslingt sie, ist er besiegt.',
        imageUrl: `${IMG}/saboteur/bg-uthuk-demon-trap.png`,
      },
    ],
  },

  // ─── Klasse: Kriegsherr (Warlord) ───────────────────────────────────────────
  {
    id: 'warlord',
    nameEn: 'Warlord',
    nameDe: 'Kriegsherr',
    kind: 'class',
    expansionId: 'base',
    cards: [
      {
        id: 'bloodrage', nameEn: 'Blood Rage', nameDe: 'Blutrausch',
        cardType: 'Event', count: 2, xpCost: 1,
        rulesEn: 'Play this card at the end of your turn and choose a monster. That monster immediately performs 2 attack actions, and is then defeated.',
        rulesDe: 'Spiele diese Karte am Ende deines Zuges und wähle ein Monster. Dieses Monster führt sofort 2 Angriffsaktionen aus und wird dann besiegt.',
        imageUrl: `${IMG}/warlord/bg-blood-rage.png`,
      },
      {
        id: 'darkfortitude', nameEn: 'Dark Fortitude', nameDe: 'Dunkle Standhaftigkeit',
        cardType: 'Event', count: 2, xpCost: 1,
        rulesEn: 'Play this card after rolling defense dice. Add 2 Shields to the results.',
        rulesDe: 'Spiele diese Karte, nachdem du Verteidigungswürfel geworfen hast. Füge 2 Schilde zu den Ergebnissen hinzu.',
        imageUrl: `${IMG}/warlord/bg-dark-fortitude.png`,
      },
      {
        id: 'bloodlust', nameEn: 'Bloodlust', nameDe: 'Blutdurst',
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card when a hero is knocked out. Draw 2 Overlord cards. This is in addition to your normal 1 Overlord card (or threat token) drawn for defeating a hero.',
        rulesDe: 'Spiele diese Karte, wenn ein Held kampfunfähig wird. Ziehe 2 Overlord-Karten. Dies geschieht zusätzlich zu der 1 Overlord-Karte (oder dem Bedrohungsmarker), die du normalerweise für das Besiegen eines Helden ziehst.',
        imageUrl: `${IMG}/warlord/bg-bloodlust-errata.png`,
      },
      {
        id: 'expertblow', nameEn: 'Expert Blow', nameDe: 'Meisterhafter Schlag',
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card when a monster attacks a hero, before rolling dice. The attack gains +2 Hearts and: Surge: Return this card to your hand.',
        rulesDe: 'Spiele diese Karte, wenn ein Monster einen Helden angreift, bevor die Würfel geworfen werden. Der Angriff erhält +2 Herzen und: Schub: Nimm diese Karte zurück auf deine Hand.',
        imageUrl: `${IMG}/warlord/bg-expert-blow.png`,
      },
      {
        id: 'reinforce', nameEn: 'Reinforce', nameDe: 'Verstärkung',
        cardType: 'Event', count: 1, xpCost: 3,
        rulesEn: "Play this card at the end of your turn and choose a master monster on the map. Place minion monsters of that monster's group in empty spaces adjacent to that monster up to the group limit. These monsters may not be placed within 3 spaces of any hero, but may otherwise be placed in any empty space.",
        rulesDe: 'Spiele diese Karte am Ende deines Zuges und wähle ein Meister-Monster auf dem Spielplan. Platziere Diener-Monster der Gruppe dieses Monsters auf leeren Feldern benachbart zu diesem Monster, bis zum Gruppenlimit. Diese Monster dürfen nicht innerhalb von 3 Feldern um einen Helden platziert werden, ansonsten aber auf jedem leeren Feld.',
        imageUrl: `${IMG}/warlord/bg-reinforce-errata.png`,
      },
    ],
  },

  // ─── Universal-Karten (von jeder Klasse kaufbar) ────────────────────────────
  {
    id: 'universal',
    nameEn: 'Universal',
    nameDe: 'Universal',
    kind: 'universal',
    expansionId: 'base',
    cards: [
      {
        id: 'darkresilience', nameEn: 'Dark Resilience', nameDe: 'Dunkle Widerstandskraft',
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card on a monster during your turn. Roll 2 red dice. The monster recovers Hearts equal to the Hearts rolled.',
        rulesDe: 'Spiele diese Karte während deines Zuges auf ein Monster. Wirf 2 rote Würfel. Das Monster gewinnt so viele Herzen zurück, wie gewürfelt wurden.',
        imageUrl: `${IMG}/universal/bg-dark-resilience.png`,
      },
      {
        id: 'planahead', nameEn: 'Plan Ahead', nameDe: 'Vorausplanung',
        cardType: 'Event', count: 2, xpCost: 1,
        rulesEn: 'Play this card on your turn. Look at the top 5 cards of the Overlord deck and place them on top of the deck in the order of your choice.',
        rulesDe: 'Spiele diese Karte in deinem Zug. Sieh dir die obersten 5 Karten des Overlord-Decks an und lege sie in einer Reihenfolge deiner Wahl wieder oben auf das Deck.',
        imageUrl: `${IMG}/universal/bg-plan-ahead.png`,
      },
      {
        id: 'schemes', nameEn: 'Schemes', nameDe: 'Ränke',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card on your turn. Choose Event, Magic, or Trap. Reveal cards from the top of the Overlord deck until you find a card with the chosen trait or until you run out of cards in your deck. Add the card with the chosen trait (if possible) to your hand and discard all other cards revealed.',
        rulesDe: 'Spiele diese Karte in deinem Zug. Wähle Ereignis, Magie oder Falle. Decke Karten von der Oberseite des Overlord-Decks auf, bis du eine Karte mit dem gewählten Merkmal findest oder keine Karten mehr im Deck sind. Nimm die Karte mit dem gewählten Merkmal (falls möglich) auf die Hand und lege alle anderen aufgedeckten Karten ab.',
        imageUrl: `${IMG}/universal/bg-schemes.png`,
      },
    ],
  },
]
