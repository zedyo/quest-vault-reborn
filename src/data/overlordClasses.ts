import type { OverlordDeck } from '../types/game'

// Quelle: any2cards/d2e strukturierte Daten (data/overlord-decks.js).
// Englischer Text = Originalwortlaut der Karten. Deutscher Text = Community-Übersetzung
// (nicht zwingend identisch mit der offiziellen deutschen FFG-Edition).
//
// Umfang dieser Datei: GRUNDSPIEL (Basis-Deck + Magus/Saboteur/Kriegsherr + Universal)
// sowie die ERWEITERUNGS-KLASSEN (Basis II + Punisher/Infector/Enchanter/Unkindness/
// Shadowmancer/Soulbinder + Universal-Erweiterungen). Belohnungskarten (Overlord/Quest/
// Rumor Reward) folgen als letztes Increment.
//
// Hinweise zur Datenpflege:
// - Die Kartenrückseite ('overlord-decks-back') ist KEINE Spielkarte und wird ausgelassen.
// - Errata-Dubletten: Bei „Unholy Ritual", „Bloodlust", „Reinforce" und „Diverse Means"
//   existiert eine ältere und eine errata-Fassung. Hier ist jeweils die ERRATA-Fassung
//   erfasst (Text + Kartenbild), die ältere Fassung ist bewusst weggelassen.
// - „Universal" kommt in mehreren Erweiterungen vor; jede Erweiterung ist ein eigenes
//   Deck-Objekt (eigene expansionId), Deckname bleibt „Universal".

const OD = 'https://raw.githubusercontent.com/any2cards/d2e/master/images/overlord-decks/d2e'
const IMG = `${OD}/base-game`

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

  // ─── Basis II – Labyrinth des Verderbens (alternatives Basis-Deck) ──────────
  {
    id: 'basic2',
    nameEn: 'Basic II',
    nameDe: 'Basis II',
    kind: 'basic',
    expansionId: 'labyrinth-of-ruin',
    cards: [
      {
        id: 'befuddle', nameEn: 'Befuddle', nameDe: 'Verwirren',
        cardType: 'Magic', count: 2, xpCost: 0,
        rulesEn: 'Play this card immediately after a hero passes an attribute test. The hero must reroll the test and add 1 Shield to the results. Scout: The hero also suffers 1 Fatigue.',
        rulesDe: 'Spiele diese Karte unmittelbar nachdem einem Helden eine Attributsprobe gelungen ist. Der Held muss die Probe neu würfeln und 1 Schild zu den Ergebnissen hinzufügen. Späher: Der Held erleidet außerdem 1 Erschöpfung.',
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-befuddle.png`,
      },
      {
        id: 'blindingspeed', nameEn: 'Blinding Speed', nameDe: 'Blendende Geschwindigkeit',
        cardType: 'Magic', count: 2, xpCost: 0,
        rulesEn: 'Play this card when activating a monster. Choose a hero to test both Knowledge and Awareness. If he passes both tests, draw 1 Overlord card. If he fails at least one test, the monster gains 2 movement points. Warrior: If he fails both tests, the monster gains 4 movement points.',
        rulesDe: 'Spiele diese Karte, wenn du ein Monster aktivierst. Wähle einen Helden, der sowohl eine Wissen- als auch eine Gespür-Probe ablegt. Gelingen ihm beide Proben, ziehe 1 Overlord-Karte. Misslingt ihm mindestens eine Probe, erhält das Monster 2 Bewegungspunkte. Krieger: Misslingen ihm beide Proben, erhält das Monster 4 Bewegungspunkte.',
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-blinding-speed.png`,
      },
      {
        id: 'dirtyfighting', nameEn: 'Dirty Fighting', nameDe: 'Hinterhältiger Kampf',
        cardType: 'Event', count: 2, xpCost: 0,
        rulesEn: 'Play this card when a monster attacks a hero, after rolling dice. Add 1 Surge to the results. Healer: This attack gains Pierce 1.',
        rulesDe: 'Spiele diese Karte, wenn ein Monster einen Helden angreift, nachdem die Würfel geworfen wurden. Füge 1 Schub zu den Ergebnissen hinzu. Heiler: Dieser Angriff erhält Durchbohren 1.',
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-dirty-fighting.png`,
      },
      {
        id: 'flurry', nameEn: 'Flurry', nameDe: 'Schlaghagel',
        cardType: 'Event', count: 1, xpCost: 0,
        rulesEn: "Play this card when a monster attacks a hero, after rolling dice. This attack gains: Surge: Perform an additional attack after resolving this attack. Add 1 additional green power die to the monster's attack pool.",
        rulesDe: 'Spiele diese Karte, wenn ein Monster einen Helden angreift, nachdem die Würfel geworfen wurden. Dieser Angriff erhält: Schub: Führe nach dem Abhandeln dieses Angriffs einen weiteren Angriff aus. Füge dem Angriffspool des Monsters 1 zusätzlichen grünen Machtwürfel hinzu.',
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-flurry.png`,
      },
      {
        id: 'greasetrap', nameEn: 'Grease Trap', nameDe: 'Schmierfalle',
        cardType: 'Trap', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a hero enters an empty space from an adjacent space. He tests Awareness. If he passes, he suffers 1 Fatigue. If he fails, move the hero 3 spaces in a straight line in the same direction he last moved. For each space he cannot move, he suffers 1 Heart or 1 Fatigue (your choice). Mage: If he fails, the hero is also Stunned.',
        rulesDe: 'Spiele diese Karte, wenn ein Held aus einem benachbarten Feld ein leeres Feld betritt. Er legt eine Gespür-Probe ab. Gelingt sie, erleidet er 1 Erschöpfung. Misslingt sie, bewege den Helden 3 Felder in gerader Linie in dieselbe Richtung, in die er sich zuletzt bewegt hat. Für jedes Feld, das er sich nicht bewegen kann, erleidet er 1 Herz oder 1 Erschöpfung (deine Wahl). Magier: Misslingt sie, ist der Held außerdem betäubt.',
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-grease-trap.png`,
      },
      {
        id: 'mentalerror', nameEn: 'Mental Error', nameDe: 'Denkfehler',
        cardType: 'Event', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a monster attacks a hero, after rolling dice. The hero tests Knowledge. If he passes, the hero suffers 1 Fatigue. If he fails, the attack gains +2 Hearts. Warrior: If he fails, the attack also gains 1 Surge.',
        rulesDe: 'Spiele diese Karte, wenn ein Monster einen Helden angreift, nachdem die Würfel geworfen wurden. Der Held legt eine Wissen-Probe ab. Gelingt sie, erleidet der Held 1 Erschöpfung. Misslingt sie, erhält der Angriff +2 Herzen. Krieger: Misslingt sie, erhält der Angriff außerdem 1 Schub.',
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-mental-error.png`,
      },
      {
        id: 'mimic', nameEn: 'Mimic', nameDe: 'Mimik',
        cardType: 'Trap', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a hero searches, before revealing the search token. Place a fatigue token on the search token. The search token is now treated as a minion Volucrix Reaver. Once defeated, the search token is immediately revealed and is considered searched by the closest hero. Scout: The Volucrix Reaver may perform an immediate Skirmish action.',
        rulesDe: 'Spiele diese Karte, wenn ein Held durchsucht, bevor der Suchmarker aufgedeckt wird. Lege einen Erschöpfungsmarker auf den Suchmarker. Der Suchmarker gilt nun als Diener-Volucrix-Reaver. Sobald er besiegt ist, wird der Suchmarker sofort aufgedeckt und gilt als vom nächstgelegenen Helden durchsucht. Späher: Der Volucrix-Reaver darf sofort eine Skirmish-Aktion ausführen.',
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-mimic.png`,
      },
      {
        id: 'overwhelm', nameEn: 'Overwhelm', nameDe: 'Überwältigen',
        cardType: 'Event', count: 1, xpCost: 0,
        rulesEn: 'Play this card during your turn on a hero adjacent to 4 or more monsters. He tests Willpower. If he passes, immediately perform an attack with 1 adjacent monster or your choice. If he fails, the hero is Stunned and Immobilized.',
        rulesDe: 'Spiele diese Karte während deines Zuges auf einen Helden, der zu 4 oder mehr Monstern benachbart ist. Er legt eine Willenskraft-Probe ab. Gelingt sie, führe sofort einen Angriff mit 1 benachbarten Monster deiner Wahl aus. Misslingt sie, ist der Held betäubt und bewegungsunfähig.',
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-overwhelm.png`,
      },
      {
        id: 'reflectiveward', nameEn: 'Reflective Ward', nameDe: 'Reflektierender Bann',
        cardType: 'Magic', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a hero attacks a monster, before rolling dice. The attacking hero may choose to suffer 2 Fatigue. If he cannot suffer the Fatigue, or chooses not to, he will be dealt Hearts equal to the Hearts dealt to the monster.',
        rulesDe: 'Spiele diese Karte, wenn ein Held ein Monster angreift, bevor die Würfel geworfen werden. Der angreifende Held darf sich entscheiden, 2 Erschöpfung zu erleiden. Kann er die Erschöpfung nicht erleiden oder entscheidet sich dagegen, werden ihm so viele Herzen zugefügt, wie dem Monster zugefügt werden.',
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-reflective-ward.png`,
      },
      {
        id: 'signofweakness', nameEn: 'Sign of Weakness', nameDe: 'Zeichen der Schwäche',
        cardType: 'Trap', count: 1, xpCost: 0,
        rulesEn: "Play this card when a hero performs a rest action. He tests Awareness. If he passes, draw 1 Overlord card. If he fails, each monster in that hero's line of sight may move 1 space. Healer: If he fails, the hero is also Cursed.",
        rulesDe: 'Spiele diese Karte, wenn ein Held eine Rast-Aktion ausführt. Er legt eine Gespür-Probe ab. Gelingt sie, ziehe 1 Overlord-Karte. Misslingt sie, darf sich jedes Monster in der Sichtlinie dieses Helden 1 Feld weit bewegen. Heiler: Misslingt sie, ist der Held außerdem verflucht.',
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-sign-of-weakness.png`,
      },
      {
        id: 'uncontrolledpower', nameEn: 'Uncontrolled Power', nameDe: 'Unkontrollierte Macht',
        cardType: 'Magic', count: 2, xpCost: 0,
        rulesEn: 'Play this card when a hero attacks a monster, after rolling dice. He tests Willpower. If he fails, you choose how he spends his Surge results. You must spend as many Surge results as possible and the attack gains: Surge: Suffer 1 Fatigue. Mage: If he fails, the attack also gains: Surge: Suffer 1 Heart and 1 Fatigue',
        rulesDe: 'Spiele diese Karte, wenn ein Held ein Monster angreift, nachdem die Würfel geworfen wurden. Er legt eine Willenskraft-Probe ab. Misslingt sie, bestimmst du, wie er seine Schub-Ergebnisse einsetzt. Du musst so viele Schub-Ergebnisse wie möglich einsetzen, und der Angriff erhält: Schub: Erleide 1 Erschöpfung. Magier: Misslingt sie, erhält der Angriff außerdem: Schub: Erleide 1 Herz und 1 Erschöpfung',
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-uncontrolled-power.png`,
      },
    ],
  },

  // ─── Klasse: Peiniger (Punisher) – Die Höhle des Lindwurms ──────────────────
  {
    id: 'punisher',
    nameEn: 'Punisher',
    nameDe: 'Peiniger',
    kind: 'class',
    expansionId: 'lair-of-the-wyrm',
    cards: [
      {
        id: 'norestforthewicked', nameEn: 'No Rest for the Wicked', nameDe: 'Keine Ruhe für die Bösen',
        cardType: 'Event', count: 2, xpCost: 1,
        rulesEn: 'Play this card when a hero suffers 1 Fatigue to gain an additional movement point. Choose 1 monster to move 1 space immediately after the hero spends that movement point. Until the start of your turn, you may trigger this ability each time a hero suffers 1 Fatigue to gain an additional movement point.',
        rulesDe: 'Spiele diese Karte, wenn ein Held 1 Erschöpfung erleidet, um einen zusätzlichen Bewegungspunkt zu erhalten. Wähle 1 Monster, das sich 1 Feld weit bewegt, unmittelbar nachdem der Held diesen Bewegungspunkt eingesetzt hat. Bis zum Beginn deines Zuges darfst du diese Fähigkeit jedes Mal auslösen, wenn ein Held 1 Erschöpfung erleidet, um einen zusätzlichen Bewegungspunkt zu erhalten.',
        imageUrl: `${OD}/lair-of-the-wyrm/punisher/lw-no-rest-for-the-wicked.png`,
      },
      {
        id: 'tradingpains', nameEn: 'Trading Pains', nameDe: 'Geteilter Schmerz',
        cardType: 'Event', count: 2, xpCost: 1,
        rulesEn: 'Play this card on a hero when he would recover any amount of Hearts. In response to this card, the hero may choose to reduce the amount of Hearts he recovers. Another hero of your choice within 3 spaces of that hero suffers Hearts equal to half (rounded up) the Hearts recovered.',
        rulesDe: 'Spiele diese Karte auf einen Helden, wenn er eine beliebige Menge Herzen zurückgewinnen würde. Als Reaktion auf diese Karte darf der Held die Menge der zurückgewonnenen Herzen verringern. Ein anderer Held deiner Wahl innerhalb von 3 Feldern um diesen Helden erleidet so viele Herzen wie die Hälfte (aufgerundet) der zurückgewonnenen Herzen.',
        imageUrl: `${OD}/lair-of-the-wyrm/punisher/lw-trading-pains.png`,
      },
      {
        id: 'exploitweakness', nameEn: 'Exploit Weakness', nameDe: 'Schwäche ausnutzen',
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card after a hero ends his turn with an amount of Fatigue on his Hero sheet equal to his Stamina. Immediately move a monster up to its Speed toward that hero. Then perform an attack with that monster against that hero, if able.',
        rulesDe: 'Spiele diese Karte, nachdem ein Held seinen Zug mit einer Erschöpfung auf seinem Heldenbogen beendet, die seiner Ausdauer entspricht. Bewege sofort ein Monster bis zu seiner Bewegung weit auf diesen Helden zu. Führe dann, wenn möglich, einen Angriff mit diesem Monster gegen diesen Helden aus.',
        imageUrl: `${OD}/lair-of-the-wyrm/punisher/lw-exploit-weakness.png`,
      },
      {
        id: 'priceofprevention', nameEn: 'Price of Prevention', nameDe: 'Preis der Vorbeugung',
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card on a hero at the start of your turn. The hero may suffer Hearts equal to an attribute of his choice to test that attribute. If he passes, discard this card. If he fails, or chooses not to test an attribute, you may search your discard pile for 1 Event or Trap card and add it to your hand.',
        rulesDe: 'Spiele diese Karte zu Beginn deines Zuges auf einen Helden. Der Held darf so viele Herzen wie ein Attribut seiner Wahl erleiden, um dieses Attribut zu prüfen. Gelingt die Probe, lege diese Karte ab. Misslingt sie oder entscheidet er sich, kein Attribut zu prüfen, darfst du deinen Ablagestapel nach 1 Ereignis- oder Fallenkarte durchsuchen und sie auf deine Hand nehmen.',
        imageUrl: `${OD}/lair-of-the-wyrm/punisher/lw-price-of-prevention.png`,
      },
      {
        id: 'bloodbargaining', nameEn: 'Blood Bargaining', nameDe: 'Bluthandel',
        cardType: 'Event', count: 1, xpCost: 3,
        rulesEn: "Play this card at the start of a hero's turn. Take 1 hero token from each hero and choose an equal number of monsters in play. Assign 1 token to each chosen monster. Until the end of this round, each time a monster suffers Hearts, the hero whose token is assigned to that monster suffers an equal amount of Hearts.",
        rulesDe: 'Spiele diese Karte zu Beginn des Zuges eines Helden. Nimm 1 Heldenmarker von jedem Helden und wähle ebenso viele Monster im Spiel. Weise jedem gewählten Monster 1 Marker zu. Bis zum Ende dieser Runde erleidet jedes Mal, wenn ein Monster Herzen erleidet, der Held, dessen Marker diesem Monster zugewiesen ist, ebenso viele Herzen.',
        imageUrl: `${OD}/lair-of-the-wyrm/punisher/lw-blood-bargaining.png`,
      },
    ],
  },

  // ─── Klasse: Seuchenbringer (Infector) – Die Trollsümpfe ────────────────────
  {
    id: 'infector',
    nameEn: 'Infector',
    nameDe: 'Seuchenbringer',
    kind: 'class',
    expansionId: 'the-trollfens',
    cards: [
      {
        id: 'adaptivecontagion', nameEn: 'Adaptive Contagion', nameDe: 'Anpassungsfähige Seuche',
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card during your turn and keep it in your play area. During this quest, when a hero would be Poisoned or Diseased, you may instead place 1 infection token in his play area. Additionally, when an infected hero performs an attribute test, you may discard 1 infection token from that hero before rolling dice to add 1 Shield to his results.',
        rulesDe: 'Spiele diese Karte während deines Zuges und lege sie in deine Auslage. Während dieses Szenarios darfst du, wenn ein Held vergiftet oder verseucht werden würde, stattdessen 1 Infektionsmarker in seine Auslage legen. Außerdem darfst du, wenn ein infizierter Held eine Attributsprobe ablegt, vor dem Würfeln 1 Infektionsmarker von diesem Helden ablegen, um 1 Schild zu seinen Ergebnissen hinzuzufügen.',
        imageUrl: `${OD}/the-trollfens/infector/tf-adaptive-contagion.png`,
      },
      {
        id: 'airborne', nameEn: 'Airborne', nameDe: 'Luftübertragung',
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card during your turn and keep it in your play area. During this quest, each time a monster misses or deals no Hearts on an attack, the targeted hero gains 1 infection token. Additionally, when an infected hero performs an attack, you may discard 1 infection token from that hero after rolling dice to add 1 Shield to the defense results.',
        rulesDe: 'Spiele diese Karte während deines Zuges und lege sie in deine Auslage. Während dieses Szenarios erhält jedes Mal, wenn ein Monster bei einem Angriff verfehlt oder keine Herzen zufügt, der angegriffene Held 1 Infektionsmarker. Außerdem darfst du, wenn ein infizierter Held einen Angriff ausführt, nach dem Würfeln 1 Infektionsmarker von diesem Helden ablegen, um 1 Schild zu den Verteidigungsergebnissen hinzuzufügen.',
        imageUrl: `${OD}/the-trollfens/infector/tf-airborne.png`,
      },
      {
        id: 'contaminated', nameEn: 'Contaminated', nameDe: 'Kontaminiert',
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card during your turn and keep it in your play area. During this quest, each of your monsters gains: Surge: Infect your target. Additionally, each time a monster performs an attack targeting an infected hero, you may discard 1 infection token from that hero after rolling dice to gain +1 Heart on the attack.',
        rulesDe: 'Spiele diese Karte während deines Zuges und lege sie in deine Auslage. Während dieses Szenarios erhält jedes deiner Monster: Schub: Infiziere dein Ziel. Außerdem darfst du jedes Mal, wenn ein Monster einen Angriff gegen einen infizierten Helden ausführt, nach dem Würfeln 1 Infektionsmarker von diesem Helden ablegen, um +1 Herz auf den Angriff zu erhalten.',
        imageUrl: `${OD}/the-trollfens/infector/tf-contaminated.png`,
      },
      {
        id: 'virulentinfection', nameEn: 'Virulent Infection', nameDe: 'Bösartige Infektion',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card at the start of your turn. During this turn, each time a hero gains an infection token, he gains 1 additional infection token.',
        rulesDe: 'Spiele diese Karte zu Beginn deines Zuges. In diesem Zug erhält jeder Held jedes Mal, wenn er einen Infektionsmarker erhält, 1 zusätzlichen Infektionsmarker.',
        imageUrl: `${OD}/the-trollfens/infector/tf-virulent-infection.png`,
      },
      {
        id: 'outbreak', nameEn: 'Outbreak', nameDe: 'Ausbruch',
        cardType: 'Trap', count: 1, xpCost: 2,
        rulesEn: "Play this card at the start of an infected hero's turn. Each hero within 3 spaces of that hero must test Might. Each hero that fails gains 1 infection token and then suffers Hearts equal to the number of infection tokens he has in his play area.",
        rulesDe: 'Spiele diese Karte zu Beginn des Zuges eines infizierten Helden. Jeder Held innerhalb von 3 Feldern um diesen Helden muss eine Stärke-Probe ablegen. Jeder Held, dem sie misslingt, erhält 1 Infektionsmarker und erleidet dann so viele Herzen, wie er Infektionsmarker in seiner Auslage hat.',
        imageUrl: `${OD}/the-trollfens/infector/tf-outbreak.png`,
      },
      {
        id: 'taintedblow', nameEn: 'Tainted Blow', nameDe: 'Vergifteter Schlag',
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card when a monster attacks a hero, before rolling dice. This attack gains 1 Surge and +1 Heart. Discard 2 infection tokens from the target hero to return this card to your hand.',
        rulesDe: 'Spiele diese Karte, wenn ein Monster einen Helden angreift, bevor die Würfel geworfen werden. Dieser Angriff erhält 1 Schub und +1 Herz. Lege 2 Infektionsmarker vom Zielhelden ab, um diese Karte auf deine Hand zurückzunehmen.',
        imageUrl: `${OD}/the-trollfens/infector/tf-tainted-blow.png`,
      },
      {
        id: 'darkhost', nameEn: 'Dark Host', nameDe: 'Dunkler Wirt',
        cardType: 'Magic', count: 1, xpCost: 3,
        rulesEn: 'Play this card at the start of your turn and discard 3 infection tokens from 1 infected hero. During this turn, you may perform 1 move action and 1 attack action with this hero, treating him as a monster in his own monster group.',
        rulesDe: 'Spiele diese Karte zu Beginn deines Zuges und lege 3 Infektionsmarker von 1 infizierten Helden ab. In diesem Zug darfst du 1 Bewegungsaktion und 1 Angriffsaktion mit diesem Helden ausführen und ihn dabei als Monster in seiner eigenen Monstergruppe behandeln.',
        imageUrl: `${OD}/the-trollfens/infector/tf-dark-host.png`,
      },
    ],
  },

  // ─── Klasse: Verzauberer (Enchanter) – Schloss Rabenfels ────────────────────
  {
    id: 'enchanter',
    nameEn: 'Enchanter',
    nameDe: 'Verzauberer',
    kind: 'class',
    expansionId: 'manor-of-ravens',
    cards: [
      {
        id: 'dragonbonependant', nameEn: 'Dragonbone Pendant', nameDe: 'Drachenknochen-Anhänger',
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card during on 1 monster group during your turn and keep it in your play area. Each attack performed by a monster in this group gains +1 Heart. Discard this card if a monster in this group defeats a hero.',
        rulesDe: 'Spiele diese Karte während deines Zuges auf 1 Monstergruppe und lege sie in deine Auslage. Jeder Angriff eines Monsters dieser Gruppe erhält +1 Herz. Lege diese Karte ab, wenn ein Monster dieser Gruppe einen Helden besiegt.',
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-dragonbone-pendant.png`,
      },
      {
        id: 'elixirofstone', nameEn: 'Elixir of Stone', nameDe: 'Elixier des Steins',
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. Each time a monster in this group is attacked, add 1 Shield to the results. Each attack that targets a monster in this group gains: Surge Surge: Discard "Elixir of Stone."',
        rulesDe: 'Spiele diese Karte während deines Zuges auf 1 Monstergruppe und lege sie in deine Auslage. Jedes Mal, wenn ein Monster dieser Gruppe angegriffen wird, füge 1 Schild zu den Ergebnissen hinzu. Jeder Angriff, der ein Monster dieser Gruppe zum Ziel hat, erhält: Schub Schub: Lege „Elixier des Steins" ab.',
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-elixir-of-stone.png`,
      },
      {
        id: 'ringsofzholalam', nameEn: "Rings of Zhol'alam", nameDe: "Ringe von Zhol'alam",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. Each time a monster in this group is defeated, each hero within 2 spaces of that monster suffers 1 Heart. Discard this card if there are no monsters in this group on the map.',
        rulesDe: 'Spiele diese Karte während deines Zuges auf 1 Monstergruppe und lege sie in deine Auslage. Jedes Mal, wenn ein Monster dieser Gruppe besiegt wird, erleidet jeder Held innerhalb von 2 Feldern um dieses Monster 1 Herz. Lege diese Karte ab, wenn sich keine Monster dieser Gruppe mehr auf dem Spielplan befinden.',
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-rings-of-zholalam.png`,
      },
      {
        id: 'wristletofwind', nameEn: 'Wristlet of Wind', nameDe: 'Windarmreif',
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. After a monster in this group performs an attack, it may move 1 space. Discard this card immediately if a monster in this group does not move 1 or more spaces during its activation.',
        rulesDe: 'Spiele diese Karte während deines Zuges auf 1 Monstergruppe und lege sie in deine Auslage. Nachdem ein Monster dieser Gruppe einen Angriff ausgeführt hat, darf es sich 1 Feld weit bewegen. Lege diese Karte sofort ab, wenn sich ein Monster dieser Gruppe während seiner Aktivierung nicht 1 oder mehr Felder bewegt.',
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-wristlet-of-wind.png`,
      },
      {
        id: 'runeofthephoenix', nameEn: 'Rune of the Phoenix', nameDe: 'Rune des Phönix',
        cardType: 'Magic', count: 1, xpCost: 2,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. Discard this card when a monster in this group suffers Hearts equal to its Health. That monster immediately recovers 5 Hearts.',
        rulesDe: 'Spiele diese Karte während deines Zuges auf 1 Monstergruppe und lege sie in deine Auslage. Lege diese Karte ab, wenn ein Monster dieser Gruppe so viele Herzen erleidet wie seine Lebenspunkte. Dieses Monster gewinnt sofort 5 Herzen zurück.',
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-rune-of-the-phoenix.png`,
      },
      {
        id: 'wardofpeace', nameEn: 'Ward of Peace', nameDe: 'Bann des Friedens',
        cardType: 'Magic', count: 1, xpCost: 2,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. Discard all conditions from this monster group. Each monster in this group is immune to all conditions. Discard this card if a monster in this group spends a Surge result during an attack.',
        rulesDe: 'Spiele diese Karte während deines Zuges auf 1 Monstergruppe und lege sie in deine Auslage. Lege alle Zustände von dieser Monstergruppe ab. Jedes Monster dieser Gruppe ist immun gegen alle Zustände. Lege diese Karte ab, wenn ein Monster dieser Gruppe während eines Angriffs ein Schub-Ergebnis einsetzt.',
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-ward-of-peace.png`,
      },
      {
        id: 'signofthelastzenith', nameEn: 'Sign of the Last Zenith', nameDe: 'Zeichen des letzten Zenits',
        cardType: 'Magic', count: 1, xpCost: 3,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. Each time an Enchanter Overlord card is discarded from another monster group, play that card on this monster group and keep it in your play area. Then, draw an Overlord card.',
        rulesDe: 'Spiele diese Karte während deines Zuges auf 1 Monstergruppe und lege sie in deine Auslage. Jedes Mal, wenn eine Verzauberer-Overlord-Karte von einer anderen Monstergruppe abgelegt wird, spiele diese Karte auf diese Monstergruppe und lege sie in deine Auslage. Ziehe dann eine Overlord-Karte.',
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-sign-of-the-last-zenith.png`,
      },
    ],
  },

  // ─── Klasse: Bosheit (Unkindness) – Schloss Rabenfels ───────────────────────
  {
    id: 'unkindness',
    nameEn: 'Unkindness',
    nameDe: 'Bosheit',
    kind: 'class',
    expansionId: 'manor-of-ravens',
    cards: [
      {
        id: 'beneaththeshadow', nameEn: 'Beneath the Shadow', nameDe: 'Unter dem Schatten',
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 servant at the end of your turn and keep this card in your play area. This servant gains: Shadow: A hero adjacent to this monster that declares an attack must spend 1 Surge or that attack is a miss. DIscard this card if this servant is defeated.',
        rulesDe: 'Spiele diese Karte am Ende deines Zuges auf 1 Diener und lege sie in deine Auslage. Dieser Diener erhält: Schatten: Ein zu diesem Monster benachbarter Held, der einen Angriff ansagt, muss 1 Schub einsetzen, sonst geht der Angriff daneben. Lege diese Karte ab, wenn dieser Diener besiegt wird.',
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-beneath-the-shadow.png`,
      },
      {
        id: 'beware', nameEn: 'Beware', nameDe: 'Hab Acht',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 servant at the end of your turn and keep this card in your play area. This servant gains: Skittish: Each time a hero within 3 spaces of this figure suffers 1 Fatigue to gain 1 movement point, this monster may move 1 space. Discard this card if this servant is defeated.',
        rulesDe: 'Spiele diese Karte am Ende deines Zuges auf 1 Diener und lege sie in deine Auslage. Dieser Diener erhält: Schreckhaft: Jedes Mal, wenn ein Held innerhalb von 3 Feldern um diese Figur 1 Erschöpfung erleidet, um 1 Bewegungspunkt zu erhalten, darf sich dieses Monster 1 Feld weit bewegen. Lege diese Karte ab, wenn dieser Diener besiegt wird.',
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-beware.png`,
      },
      {
        id: 'calloftheravens', nameEn: 'Call of the Ravens', nameDe: 'Ruf der Raben',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'When purchased, place this card in your play area. This card cannot be discarded or shuffled into your deck. Exhaust this card at the start of your turn and choose 1 monster. Place 1 Raven Flock Servant token in a space adjacent to that monster. Then, that monster suffers 4 Hearts.',
        rulesDe: 'Beim Kauf lege diese Karte in deine Auslage. Diese Karte kann nicht abgelegt oder in dein Deck gemischt werden. Erschöpfe diese Karte zu Beginn deines Zuges und wähle 1 Monster. Platziere 1 Rabenschwarm-Diener-Marker auf einem Feld benachbart zu diesem Monster. Dann erleidet dieses Monster 4 Herzen.',
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-call-of-the-ravens.png`,
      },
      {
        id: 'feast', nameEn: 'Feast', nameDe: 'Festmahl',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card when a hero is defeated within 5 spaces of a servant and keep this card in your play area. That servant recovers all Hearts. That servant applies +3 to its Health while this card is in your play area. Discard this card if that servant is defeated.',
        rulesDe: 'Spiele diese Karte, wenn ein Held innerhalb von 5 Feldern um einen Diener besiegt wird, und lege sie in deine Auslage. Dieser Diener gewinnt alle Herzen zurück. Dieser Diener erhält +3 auf seine Lebenspunkte, solange diese Karte in deiner Auslage liegt. Lege diese Karte ab, wenn dieser Diener besiegt wird.',
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-feast.png`,
      },
      {
        id: 'illomen', nameEn: 'Ill Omen', nameDe: 'Böses Omen',
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 servant at the end of your turn and keep this card in your play area. This servant gains: Ominous: Each time a hero starts his turn within 3 spaces of this figure, he tests Willpower. If he fails, he is Doomed. Discard this card if this servant is defeated.',
        rulesDe: 'Spiele diese Karte am Ende deines Zuges auf 1 Diener und lege sie in deine Auslage. Dieser Diener erhält: Unheilvoll: Jedes Mal, wenn ein Held seinen Zug innerhalb von 3 Feldern um diese Figur beginnt, legt er eine Willenskraft-Probe ab. Misslingt sie, ist er verdammt. Lege diese Karte ab, wenn dieser Diener besiegt wird.',
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-ill-omen.png`,
      },
      {
        id: 'imitation', nameEn: 'Imitation', nameDe: 'Nachahmung',
        cardType: 'Trap', count: 1, xpCost: 2,
        rulesEn: 'Play this card on 1 servant when a hero declares an attack that targets that servant. Immediately perform an attack that targets that hero, using the same attack type, special abilities, and dice of the weapon the hero declared for his attack. After this attack is resolved, if the hero was not defeated, he continues his attack.',
        rulesDe: 'Spiele diese Karte auf 1 Diener, wenn ein Held einen Angriff ansagt, der diesen Diener zum Ziel hat. Führe sofort einen Angriff aus, der diesen Helden zum Ziel hat, und nutze dabei denselben Angriffstyp, dieselben Spezialfähigkeiten und Würfel der Waffe, die der Held für seinen Angriff angesagt hat. Nachdem dieser Angriff abgehandelt wurde, setzt der Held seinen Angriff fort, falls er nicht besiegt wurde.',
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-imitation.png`,
      },
      {
        id: 'suddenflurry', nameEn: 'Sudden Flurry', nameDe: 'Plötzlicher Schlaghagel',
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card when you activate a servant during your turn. Perform 1 additional attack with that servant. This attack affects each hero within 2 spaces of the servant.',
        rulesDe: 'Spiele diese Karte, wenn du während deines Zuges einen Diener aktivierst. Führe 1 zusätzlichen Angriff mit diesem Diener aus. Dieser Angriff betrifft jeden Helden innerhalb von 2 Feldern um den Diener.',
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-sudden-flurry.png`,
      },
      {
        id: 'envelop', nameEn: 'Envelop', nameDe: 'Umhüllen',
        cardType: 'Event', count: 1, xpCost: 3,
        rulesEn: 'Play this card when 1 servant resolves an attack that defeats a hero. Remove his hero token from the map and place it on this card. If the servant is defeated (or of it is removed from the map for any reason), place the hero token in its space and discard this card. The hero cannot recover Hearts for any reason until this card is discarded.',
        rulesDe: 'Spiele diese Karte, wenn 1 Diener einen Angriff abhandelt, der einen Helden besiegt. Entferne dessen Heldenmarker vom Spielplan und lege ihn auf diese Karte. Wird der Diener besiegt (oder aus irgendeinem Grund vom Spielplan entfernt), lege den Heldenmarker auf sein Feld und lege diese Karte ab. Der Held kann aus keinem Grund Herzen zurückgewinnen, bis diese Karte abgelegt wird.',
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-envelop.png`,
      },
    ],
  },

  // ─── Klasse: Schattenmagier (Shadowmancer) – Schatten von Nerekhall ─────────
  {
    id: 'shadowmancer',
    nameEn: 'Shadowmancer',
    nameDe: 'Schattenmagier',
    kind: 'class',
    expansionId: 'shadow-of-nerekhall',
    cards: [
      {
        id: 'implodingrift', nameEn: 'Imploding Rift', nameDe: 'Implodierender Riss',
        cardType: 'Trap', count: 1, xpCost: 1,
        rulesEn: 'Play this card when a hero enters an empty space. That hero and each hero adjacent to him tests Willpower. Each hero who fails suffers Fatigue up to his Stamina.',
        rulesDe: 'Spiele diese Karte, wenn ein Held ein leeres Feld betritt. Dieser Held und jeder zu ihm benachbarte Held legen eine Willenskraft-Probe ab. Jeder Held, dem sie misslingt, erleidet Erschöpfung bis zu seiner Ausdauer.',
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-imploding-rift.png`,
      },
      {
        id: 'mistrust', nameEn: 'Mistrust', nameDe: 'Misstrauen',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card at the end of your turn. Until the start of your next turn, each time a hero enters a space adjacent to another hero, the first hero suffers 1 Fatigue.',
        rulesDe: 'Spiele diese Karte am Ende deines Zuges. Bis zum Beginn deines nächsten Zuges erleidet jedes Mal, wenn ein Held ein Feld betritt, das zu einem anderen Helden benachbart ist, der erste Held 1 Erschöpfung.',
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-mistrust.png`,
      },
      {
        id: 'outofdarkness', nameEn: 'Out of Darkness', nameDe: 'Aus der Dunkelheit',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card when a hero is revived. Immediately perform an attack with that hero as if he were one of your monsters. This attack must target another hero.',
        rulesDe: 'Spiele diese Karte, wenn ein Held wiederbelebt wird. Führe sofort einen Angriff mit diesem Helden aus, als wäre er eines deiner Monster. Dieser Angriff muss einen anderen Helden zum Ziel haben.',
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-out-of-darkness.png`,
      },
      {
        id: 'shadowofdoubt', nameEn: 'Shadow of Doubt', nameDe: 'Schatten des Zweifels',
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card at the end of your turn and choose 1 hero. Next round, that hero takes his turn after all other heroes have taken their turns.',
        rulesDe: 'Spiele diese Karte am Ende deines Zuges und wähle 1 Helden. In der nächsten Runde nimmt dieser Held seinen Zug, nachdem alle anderen Helden ihre Züge genommen haben.',
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-shadow-of-doubt.png`,
      },
      {
        id: 'blackout', nameEn: 'Black Out', nameDe: 'Verdunkelung',
        cardType: 'Magic', count: 1, xpCost: 2,
        rulesEn: 'Play this card at the end of your turn. Until the start of your next turn, monsters cannot be targeted by an attack unless the attacking hero is within 2 spaces of them.',
        rulesDe: 'Spiele diese Karte am Ende deines Zuges. Bis zum Beginn deines nächsten Zuges können Monster nicht zum Ziel eines Angriffs werden, es sei denn, der angreifende Held ist innerhalb von 2 Feldern um sie.',
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-black-out.png`,
      },
      {
        id: 'shadowwalk', nameEn: 'Shadow Walk', nameDe: 'Schattengang',
        cardType: 'Magic', count: 1, xpCost: 2,
        rulesEn: 'Play this card when you activate a monster. During this activation, that monster gains: Fly: This figure may ignore enemy figures and the effects of terrain while moving. It must end its movement in an empty space following normal movement rules.',
        rulesDe: 'Spiele diese Karte, wenn du ein Monster aktivierst. Während dieser Aktivierung erhält dieses Monster: Fliegen: Diese Figur darf bei der Bewegung feindliche Figuren und die Auswirkungen von Gelände ignorieren. Sie muss ihre Bewegung gemäß den normalen Bewegungsregeln auf einem leeren Feld beenden.',
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-shadow-walk.png`,
      },
      {
        id: 'treacherousshadows', nameEn: 'Treacherous Shadows', nameDe: 'Tückische Schatten',
        cardType: 'Magic', count: 1, xpCost: 3,
        rulesEn: 'Play this card at the start of your turn. Each hero tests Willpower. For each hero who fails, you may perform an attack with that hero as if he were one of your monsters. You can force him to attack himself.',
        rulesDe: 'Spiele diese Karte zu Beginn deines Zuges. Jeder Held legt eine Willenskraft-Probe ab. Für jeden Helden, dem sie misslingt, darfst du einen Angriff mit diesem Helden ausführen, als wäre er eines deiner Monster. Du darfst ihn zwingen, sich selbst anzugreifen.',
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-treacherous-shadows.png`,
      },
    ],
  },

  // ─── Klasse: Seelenbinder (Soulbinder) – Die rostenden Ketten ───────────────
  {
    id: 'soulbinder',
    nameEn: 'Soulbinder',
    nameDe: 'Seelenbinder',
    kind: 'class',
    expansionId: 'the-chains-that-rust',
    cards: [
      {
        id: 'darksilhouette', nameEn: 'Dark Silhouette', nameDe: 'Dunkle Silhouette',
        cardType: 'Trap', count: 1, xpCost: 1,
        rulesEn: "Play this card when a hero declares an attack that targets another non-large monster within 3 spaces of a servant. Place that monster in the servant's space and that servant in the target space. That servant is now the target of this attack.",
        rulesDe: 'Spiele diese Karte, wenn ein Held einen Angriff ansagt, der ein anderes nicht-großes Monster innerhalb von 3 Feldern um einen Diener zum Ziel hat. Platziere dieses Monster auf dem Feld des Dieners und diesen Diener auf dem Zielfeld. Dieser Diener ist nun das Ziel dieses Angriffs.',
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-dark-silhouette.png`,
      },
      {
        id: 'grotesque', nameEn: 'Grotesque', nameDe: 'Grotesk',
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card when a hero adjacent to a servant declares an attack. That hero tests Willpower. If he passes, he suffers 2 Fatigue. If he fails, he is Terrified.',
        rulesDe: 'Spiele diese Karte, wenn ein zu einem Diener benachbarter Held einen Angriff ansagt. Dieser Held legt eine Willenskraft-Probe ab. Gelingt sie, erleidet er 2 Erschöpfung. Misslingt sie, ist er verängstigt.',
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-grotesque.png`,
      },
      {
        id: 'possessive', nameEn: 'Possessive', nameDe: 'Besitzergreifend',
        cardType: 'Trap', count: 1, xpCost: 1,
        rulesEn: 'Play this card when a hero defeats a servant. That hero suffers 2 Hearts. Then, if that hero was not defeated, perform an attack with that hero as if he were one of your monsters.',
        rulesDe: 'Spiele diese Karte, wenn ein Held einen Diener besiegt. Dieser Held erleidet 2 Herzen. Dann, falls dieser Held nicht besiegt wurde, führe einen Angriff mit diesem Helden aus, als wäre er eines deiner Monster.',
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-possessive.png`,
      },
      {
        id: 'restlessspirit', nameEn: 'Restless Spirit', nameDe: 'Ruheloser Geist',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 servant at the end of your turn and keep this card in your play area. This servant applies +2 to its Speed while this card is in your play area. Discard this card if this servant is defeated.',
        rulesDe: 'Spiele diese Karte am Ende deines Zuges auf 1 Diener und lege sie in deine Auslage. Dieser Diener erhält +2 auf seine Bewegung, solange diese Karte in deiner Auslage liegt. Lege diese Karte ab, wenn dieser Diener besiegt wird.',
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-restless-spirit.png`,
      },
      {
        id: 'tiesthatbind', nameEn: 'Ties That Bind', nameDe: 'Bindende Fesseln',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: "When purchased, place this card in your play area. This card cannot be discarded or shuffled into your deck. Exhaust this card when a non-servant monster is defeated. Place 1 Scourge Servant token in that monster's space.",
        rulesDe: 'Beim Kauf lege diese Karte in deine Auslage. Diese Karte kann nicht abgelegt oder in dein Deck gemischt werden. Erschöpfe diese Karte, wenn ein Nicht-Diener-Monster besiegt wird. Platziere 1 Geißel-Diener-Marker auf dem Feld dieses Monsters.',
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-ties-that-bind.png`,
      },
      {
        id: 'hauntedsteps', nameEn: 'Haunted Steps', nameDe: 'Spukende Schritte',
        cardType: 'Trap', count: 1, xpCost: 2,
        rulesEn: 'Play this card on 1 servant when a hero adjacent to that servant exists its current space. Move that servant 1 space, and keep this card in your play area. Each time a hero adjacent to this servant exists a space, you may move this servant 1 space. Discard this card if this servant is defeated.',
        rulesDe: 'Spiele diese Karte auf 1 Diener, wenn ein zu diesem Diener benachbarter Held sein aktuelles Feld verlässt. Bewege diesen Diener 1 Feld weit und lege diese Karte in deine Auslage. Jedes Mal, wenn ein zu diesem Diener benachbarter Held ein Feld verlässt, darfst du diesen Diener 1 Feld weit bewegen. Lege diese Karte ab, wenn dieser Diener besiegt wird.',
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-haunted-steps.png`,
      },
      {
        id: 'unblinking', nameEn: 'Unblinking', nameDe: 'Ohne zu blinzeln',
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: "Play this card at the end of a servant's activation. Each hero in line of sight of that servant may choose to suffer either 2 Fatigue or 4 Hearts. For each hero who does not or cannot suffer either 2 Fatigue or 4 Hearts, draw 1 Overlord card.",
        rulesDe: 'Spiele diese Karte am Ende der Aktivierung eines Dieners. Jeder Held in der Sichtlinie dieses Dieners darf wählen, entweder 2 Erschöpfung oder 4 Herzen zu erleiden. Für jeden Helden, der nicht entweder 2 Erschöpfung oder 4 Herzen erleidet oder erleiden kann, ziehe 1 Overlord-Karte.',
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-unblinking.png`,
      },
      {
        id: 'dansemacabre', nameEn: 'Danse Macabre', nameDe: 'Totentanz',
        cardType: 'Magic', count: 1, xpCost: 3,
        rulesEn: "Play this card at the start of a servant's activation. Trace a path of 4 spaces starting in a space adjacent to that servant. Each hero on that path suffers Fatigue up to his Stamina. Then, move that servant and each of those heroes up to 3 spaces.",
        rulesDe: 'Spiele diese Karte zu Beginn der Aktivierung eines Dieners. Zeichne einen Pfad von 4 Feldern, beginnend auf einem Feld benachbart zu diesem Diener. Jeder Held auf diesem Pfad erleidet Erschöpfung bis zu seiner Ausdauer. Bewege dann diesen Diener und jeden dieser Helden bis zu 3 Felder weit.',
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-danse-macabre.png`,
      },
    ],
  },

  // ─── Universal – Labyrinth des Verderbens ───────────────────────────────────
  {
    id: 'universal-lr',
    nameEn: 'Universal',
    nameDe: 'Universal',
    kind: 'universal',
    expansionId: 'labyrinth-of-ruin',
    cards: [
      {
        id: 'darkremedy', nameEn: 'Dark Remedy', nameDe: 'Dunkles Heilmittel',
        cardType: 'Magic', count: 2, xpCost: 1,
        rulesEn: 'Play this card on a monster group during your turn and choose 1 condition. Each monster in that group may discard 1 token corresponding to the chosen condition.',
        rulesDe: 'Spiele diese Karte während deines Zuges auf eine Monstergruppe und wähle 1 Zustand. Jedes Monster dieser Gruppe darf 1 Marker ablegen, der dem gewählten Zustand entspricht.',
        imageUrl: `${OD}/labyrinth-of-ruin/universal/lr-dark-remedy.png`,
      },
    ],
  },

  // ─── Universal – Schatten von Nerekhall ─────────────────────────────────────
  {
    id: 'universal-sn',
    nameEn: 'Universal',
    nameDe: 'Universal',
    kind: 'universal',
    expansionId: 'shadow-of-nerekhall',
    cards: [
      {
        id: 'placebo', nameEn: 'Placebo', nameDe: 'Placebo',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: "Play this card at the start of any turn and choose a faceup Search card in a hero's play area. Flip that Search card facedown.",
        rulesDe: 'Spiele diese Karte zu Beginn eines beliebigen Zuges und wähle eine offen liegende Suchkarte in der Auslage eines Helden. Drehe diese Suchkarte verdeckt.',
        imageUrl: `${OD}/shadow-of-nerekhall/universal/sn-placebo.png`,
      },
      {
        id: 'refresh', nameEn: 'Refresh', nameDe: 'Auffrischen',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card during your turn to shuffle the Overlord discard pile into the Overlord deck. Then, draw 1 Overlord card.',
        rulesDe: 'Spiele diese Karte während deines Zuges, um den Overlord-Ablagestapel in das Overlord-Deck zu mischen. Ziehe dann 1 Overlord-Karte.',
        imageUrl: `${OD}/shadow-of-nerekhall/universal/sn-refresh.png`,
      },
      {
        id: 'solidarity', nameEn: 'Solidarity', nameDe: 'Solidarität',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card at the start of your turn and choose 1 Hero sheet. Until the start of your next turn, each time any hero tests an attribute, he must use the attribute value on that Hero sheet.',
        rulesDe: 'Spiele diese Karte zu Beginn deines Zuges und wähle 1 Heldenbogen. Bis zum Beginn deines nächsten Zuges muss jeder Held, jedes Mal wenn er ein Attribut prüft, den Attributswert auf diesem Heldenbogen verwenden.',
        imageUrl: `${OD}/shadow-of-nerekhall/universal/sn-solidarity.png`,
      },
      {
        id: 'upgrade', nameEn: 'Upgrade', nameDe: 'Aufwertung',
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card during your turn and discard any 1 card from your hand. Search your Overlord deck for 1 card of your choice with the same trait (Event, Magic, Trap) as the discarded card. Reveal the chosen card and place it in your hand. Then shuffle your Overlord deck.',
        rulesDe: 'Spiele diese Karte während deines Zuges und lege 1 beliebige Karte von deiner Hand ab. Durchsuche dein Overlord-Deck nach 1 Karte deiner Wahl mit demselben Merkmal (Ereignis, Magie, Falle) wie die abgelegte Karte. Decke die gewählte Karte auf und nimm sie auf deine Hand. Mische dann dein Overlord-Deck.',
        imageUrl: `${OD}/shadow-of-nerekhall/universal/sn-upgrade.png`,
      },
      {
        id: 'diversemeans', nameEn: 'Diverse Means', nameDe: 'Vielfältige Mittel',
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card when a monster is attacked, after dice are rolled. Reveal any number of Overlord cards from your hand. That monster recovers 1 Heart and adds 1 Shield to his defense results for each non-Basic Overlord card you reveal.',
        rulesDe: 'Spiele diese Karte, wenn ein Monster angegriffen wird, nachdem die Würfel geworfen wurden. Decke beliebig viele Overlord-Karten von deiner Hand auf. Dieses Monster gewinnt 1 Herz zurück und fügt seinen Verteidigungsergebnissen 1 Schild für jede aufgedeckte Nicht-Basis-Overlord-Karte hinzu.',
        imageUrl: `${OD}/shadow-of-nerekhall/universal/sn-diverse-means-errata.png`,
      },
    ],
  },
]
