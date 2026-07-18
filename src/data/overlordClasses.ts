import type { OverlordDeck } from '../types/game'

// Quelle: any2cards/d2e strukturierte Daten (data/overlord-decks.js).
// Englischer Text = Originalwortlaut der Karten. Deutscher Name + Regeltext (nameDe/rulesDe)
// = kartengenau von den deutschen Original-Karten transkribiert (v1.3.7).
//
// Umfang dieser Datei: VOLLSTÄNDIGER Overlord-Kartensatz aus overlord-decks.js –
// Grundspiel (Basis + Magus/Saboteur/Kriegsherr + Universal), die Erweiterungs-Klassen
// (Basis II + Punisher/Infector/Enchanter/Unkindness/Shadowmancer/Soulbinder + Universal-
// Erweiterungen) sowie die BELOHNUNGSKARTEN (Overlord/Quest/Rumor Reward; xpCost null,
// kind 'reward', über Kampagnen erworben, nicht mit XP kaufbar).
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
        id: 'criticalblow', nameEn: 'Critical Blow', nameDe: "Wuchtiger Schlag",
        cardType: 'Event', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a monster attacks a hero, after rolling dice. The attack gains: Surge: +3 Hearts',
        rulesDe: "Spiele diese Karte nach dem Angriffswurf eines Monsters gegen einen Helden. Der Angriff hat: Schub: +3 Herz",
        imageUrl: `${IMG}/basic/bg-critical-blow.png`,
      },
      {
        id: 'darkcharm', nameEn: 'Dark Charm', nameDe: "Dunkle Bezauberung",
        cardType: 'Magic', count: 1, xpCost: 0,
        rulesEn: 'Play this card on a hero at the start of your turn. The hero tests Willpower. If he passes, draw 1 Overlord card. If he fails, you may perform a move or attack action with that hero as if he were one of your monsters this turn. You cannot force him to suffer Fatigue or use a Potion, but you may force him to attack himself.',
        rulesDe: "Spiele diese Karte zu Beginn deines Zugs auf einen Helden. Dieser Held legt eine Willenskraft-Probe ab. Wenn sie gelingt, ziehst du eine Overlordkarte. Wenn sie misslingt, kannst du mit diesem Helden eine Bewegungs- oder Angriffsaktion ausführen, als ob er eines deiner Monster wäre. Du kannst ihn nicht zwingen, Erschöpfung zu erleiden oder einen Trank einzusetzen, aber du kannst ihn sich selbst angreifen lassen.",
        imageUrl: `${IMG}/basic/bg-dark-charm.png`,
      },
      {
        id: 'darkfortune', nameEn: 'Dark Fortune', nameDe: "Dunkles Karma",
        cardType: 'Event', count: 2, xpCost: 0,
        rulesEn: 'Play this card after you roll dice. You may reroll 1 die.',
        rulesDe: "Spiele diese Karte nach einem eigenen Würfelwurf. Du kannst 1 Würfel neu werfen. Das neue Ergebnis gilt.",
        imageUrl: `${IMG}/basic/bg-dark-fortune.png`,
      },
      {
        id: 'darkmight', nameEn: 'Dark Might', nameDe: "Dunkle Macht",
        cardType: 'Magic', count: 2, xpCost: 0,
        rulesEn: 'Play this card after you roll dice for an attack. Add 1 Surge to the results.',
        rulesDe: "Spiele diese Karte nach einem eigenen Angriffswurf. Der Angriff erhält 1 Schub zusätzlich.",
        imageUrl: `${IMG}/basic/bg-dark-might.png`,
      },
      {
        id: 'dash', nameEn: 'Dash', nameDe: "Rennen",
        cardType: 'Event', count: 2, xpCost: 0,
        rulesEn: 'Play this card when activating a monster during your turn. That monster may perform an additional move action this turn in addition to its normal 2 actions.',
        rulesDe: "Spiele diese Karte, wenn du in deinem Zug ein Monster aktivierst. Das Monster erhält in dieser Aktivierung zu seinen 2 normalen Aktionen eine zusätzliche Bewegungsaktion.",
        imageUrl: `${IMG}/basic/bg-dash.png`,
      },
      {
        id: 'frenzy', nameEn: 'Frenzy', nameDe: "Wutausbruch",
        cardType: 'Event', count: 2, xpCost: 0,
        rulesEn: 'Play this card when activating a monster during your turn. That monster may perform an additional attack action this turn in addition to its normal 2 actions.',
        rulesDe: "Spiele diese Karte, wenn du in deinem Zug ein Monster aktivierst. Das Monster kann in dieser Aktivierung zu seinen 2 normalen Aktionen eine zusätzliche Angriffsaktion ausführen.",
        imageUrl: `${IMG}/basic/bg-frenzy.png`,
      },
      {
        id: 'pittrap', nameEn: 'Pit Trap', nameDe: "Fallgrube",
        cardType: 'Trap', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a hero enters an empty space. He tests Awareness. If he fails, he suffers 1 Heart and loses 1 movement point. If he has no movement points to lose (such as if he suffered fatigue to move), he is Stunned.',
        rulesDe: "Spiele diese Karte, wenn ein Held ein leeres Feld betritt. Der Held legt eine Gespür-Probe ab. Wenn sie misslingt, erleidet er 1 Herz und verliert 1 Bewegungspunkt. Wenn er keine Bewegungspunkte mehr hat, die er verlieren könnte (z. B. wenn er sich mithilfe von Erschöpfung bewegt hat), ist er betäubt.",
        imageUrl: `${IMG}/basic/bg-pit-trap.png`,
      },
      {
        id: 'poisondart', nameEn: 'Poison Dart', nameDe: "Giftpfeil",
        cardType: 'Trap', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a hero opens a door or searches. He tests Awareness or Might (your choice). If he passes, draw 1 Overlord card. If he fails, he suffers 1 Heart, 1 Fatigue, and he is Poisoned.',
        rulesDe: "Spiele diese Karte, nachdem ein Held eine Tür öffnet oder sucht. Er legt eine Gespür- oder Stärke-Probe ab (nach deiner Wahl). Wenn sie gelingt, ziehst du eine Overlordkarte. Wenn sie misslingt, erleidet er 1 Herz und 1 Erschöpfung und wird vergiftet.",
        imageUrl: `${IMG}/basic/bg-poison-dart.png`,
      },
      {
        id: 'tripwire', nameEn: 'Tripwire', nameDe: "Stolperdraht",
        cardType: 'Trap', count: 2, xpCost: 0,
        rulesEn: 'Play this card when a hero enters an empty space during a move action. He tests Awareness. If he fails, he must end his move action (he can still suffer Fatigue to move further, or perform a second move action if this was his first action).',
        rulesDe: "Spiele diese Karte, wenn ein Held in einer Bewegungsaktion ein leeres Feld betritt. Der Held legt eine Gespür-Probe ab. Wenn sie misslingt, endet seine Bewegungsaktion sofort (er kann aber weiterhin Erschöpfung erleiden, um sich zu bewegen oder noch eine Bewegungsaktion ausführen, falls er noch Aktionen übrig hat).",
        imageUrl: `${IMG}/basic/bg-tripwire.png`,
      },
      {
        id: 'wordofmisery', nameEn: 'Word of Misery', nameDe: "Worte der Qual",
        cardType: 'Magic', count: 1, xpCost: 0,
        rulesEn: 'Play this card at the start of your turn. During this turn, each time a hero suffers any Hearts, he also suffers 1 Fatigue in addition to the Hearts suffered.',
        rulesDe: "Spiele diese Karte zu Beginn deines Zugs. Jedes Mal, wenn in diesem Zug ein Held Herz erleidet, erleidet er auch 1 Erschöpfung.",
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
        id: 'unholyritual', nameEn: 'Unholy Ritual', nameDe: "Teuflisches Ritual",
        cardType: 'Magic', count: 2, xpCost: 1,
        rulesEn: 'Play this card at the start of your turn. Choose one of your monster groups and draw Overlord cards equal to the number of figures from that group on the map. Choose and keep 2 cards and discard the rest. Each monster in that group performs 1 less action during this turn.',
        rulesDe: "Spiele diese Karte zu Beginn deines Zugs. Wähle eine Monstergruppe dieses Abenteuers und ziehe so viele Overlordkarten, wie Figuren dieses Typs auf dem Spielplan stehen. Nimm davon 2 Karten auf die Hand und wirf die anderen ab. Jedes Monster dieser Gruppe führt in diesem Zug eine Aktion weniger aus.",
        imageUrl: `${IMG}/magus/bg-unholy-ritual-errata.png`,
      },
      {
        id: 'wordofpain', nameEn: 'Word of Pain', nameDe: "Worte des Schmerzes",
        cardType: 'Magic', count: 2, xpCost: 1,
        rulesEn: 'Play this card at the end of your turn. Each hero tests Might. Each hero who fails suffers 1 Heart.',
        rulesDe: "Spiele diese Karte am Ende deines Zugs. Jeder Held legt eine Stärke-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 1 Herz.",
        imageUrl: `${IMG}/magus/bg-word-of-pain.png`,
      },
      {
        id: 'riseagain', nameEn: 'Rise Again', nameDe: "Wiederkehr",
        cardType: 'Magic', count: 1, xpCost: 2,
        rulesEn: "Play this card when a minion or master monster is defeated to place a fatigue token on the map in that monster's space. At the start of your next turn, place that monster on the map within 5 spaces of where it was defeated. At the end of your next turn, remove that monster (and the token) from the map.",
        rulesDe: "Spiele diese Karte, wenn ein normales oder ein Elite-Monster besiegt wurde. Lege einen Erschöpfungsmarker auf sein Feld. Stelle das Monster zu Beginn deines nächsten Zuges innerhalb von 5 Feldern zum Marker auf den Spielplan. Am Ende deines nächsten Zuges werden das Monster und der Marker wieder vom Spielplan genommen.",
        imageUrl: `${IMG}/magus/bg-rise-again.png`,
      },
      {
        id: 'wordofdespair', nameEn: 'Word of Despair', nameDe: "Worte der Verzweiflung",
        cardType: 'Magic', count: 1, xpCost: 2,
        rulesEn: 'Play this card at the end of your turn. Each hero tests Willpower. Each hero who fails suffers 1 Fatigue each time he performs an action during his next turn. This Fatigue is suffered after the hero completely resolves the action. (He may perform actions even if his Fatigue equals his Stamina; excess Fatigue is converted to Hearts as usual).',
        rulesDe: "Spiele diese Karte am Ende deines Zugs. Jeder Held legt eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 1 Erschöpfung pro Aktion, die er in seinem nächsten Zug ausführt. Die Erschöpfung erleidet er ganz am Ende der jeweiligen Aktion. (Er kann Aktionen ausführen, auch wenn er so viel Erschöpfung wie Ausdauer hat. Jede weitere Erschöpfung wird dann wie üblich als Herz erlitten.)",
        imageUrl: `${IMG}/magus/bg-word-of-despair.png`,
      },
      {
        id: 'diabolicpower', nameEn: 'Diabolic Power', nameDe: "Teuflische Macht",
        cardType: 'Magic', count: 1, xpCost: 3,
        rulesEn: 'Play this card during your turn. Search your deck and discard pile for the card of your choice, reveal it, and place it in your hand, then shuffle your deck. If the chosen card is an Event, every hero tests Willpower. If it is a Trap, every hero tests Awareness. If it is Magic, every hero tests Knowledge. Each hero who fails suffers 2 Hearts.',
        rulesDe: "Spiele diese Karte in deinem Zug. Durchsuche dein Deck und deinen Ablagestapel nach einer Karte deiner Wahl, zeige den Helden diese Karte und nimm sie auf die Hand. Mische dann dein Deck. Wenn die Karte ein Ereignis war, legt jeder Held eine Willenskraft-Probe ab. Wenn es eine Falle war, legt jeder Held eine Gespür-Probe ab. Wenn es Magie war, legt jeder Held eine Wissen-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 2 Herz.",
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
        id: 'explosiverunes', nameEn: 'Explosive Runes', nameDe: "Explodierende Runen",
        cardType: 'Trap', count: 2, xpCost: 1,
        rulesEn: 'Play this card after a hero opens a door or searches. That hero, and each hero within 2 spaces of him tests Awareness. Each hero who fails suffers 1 Heart for each Shield rolled in excess of his Awareness.',
        rulesDe: "Spiele diese Karte, nachdem ein Held eine Tür geöffnet oder gesucht hat. Dieser Held und alle Helden innerhalb von 2 Feldern zu ihm legen eine Gespür-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 1 Herz pro Schild, das er in seiner Gespür-Probe zu viel gewürfelt hat.",
        imageUrl: `${IMG}/saboteur/bg-explosive-runes.png`,
      },
      {
        id: 'webtrap', nameEn: 'Web Trap', nameDe: "Netzfalle",
        cardType: 'Trap', count: 2, xpCost: 1,
        rulesEn: 'Play this card when a hero enters an empty space. That hero and each hero adjacent to him tests Might. Each hero who fails is Immobilized.',
        rulesDe: "Spiele diese Karte, wenn ein Held ein leeres Feld betritt. Dieser Held und alle Helden auf seinen Nachbarfeldern legen eine Stärke-Probe ab. Jeder Held, dessen Probe misslingt, wird gelähmt.",
        imageUrl: `${IMG}/saboteur/bg-web-trap.png`,
      },
      {
        id: 'curseofthemonkeygod', nameEn: 'Curse of the Monkey God', nameDe: "Fluch des Affengottes",
        cardType: 'Trap', count: 1, xpCost: 2,
        rulesEn: 'Play this card after a hero searches. That hero tests Knowledge. If he passes, draw 1 Overlord card. If he fails, he becomes a monkey until the end of his next turn. Take 1 of his hero tokens as a reminder. Monkeys cannot roll defense dice (except to test an attribute), have a Speed of 5, and cannot attack for any reason.',
        rulesDe: "Spiele diese Karte, nachdem ein Held gesucht hat. Dieser Held legt eine Wissen-Probe ab. Wenn sie gelingt, ziehst du eine Overlordkarte. Wenn sie misslingt, wird der Held bis zum Ende seines nächsten Zugs ein Affe. Lege zur Erinnerung 1 seiner Heldenmarker vor dir ab. Ein Affe kann keine Verteidigungswürfel werfen (außer für eine Attributsprobe), hat Geschwindigkeit 5 und kann keinerlei Angriffe durchführen.",
        imageUrl: `${IMG}/saboteur/bg-curse-of-the-monkey-god.png`,
      },
      {
        id: 'wickedlaughter', nameEn: 'Wicked Laughter', nameDe: "Hämisches Gelächter",
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card when a hero passes an attribute test. The hero must take the test again, this time treating his attribute as if it were 1 lower. If the hero passes this new attribute test, draw 1 Overlord card.',
        rulesDe: "Spiele diese Karte, wenn eine Attributsprobe eines Helden gelingt. Der Held muss die Probe noch einmal ablegen und zwar so, als wäre sein Attributwert um 1 geringer. Wenn diese Probe auch gelingt, ziehst du 1 Overlordkarte.",
        imageUrl: `${IMG}/saboteur/bg-wicked-laughter.png`,
      },
      {
        id: 'uthukdemontrap', nameEn: 'Uthuk Demon Trap', nameDe: "Dämonenfalle der Uthuk",
        cardType: 'Trap', count: 1, xpCost: 3,
        rulesEn: 'Play this card after a hero opens a door or searches. He tests Awareness or Might (his choice). If he passes, he suffers Hearts equal to the attribute tested. If he fails, he is defeated.',
        rulesDe: "Spiele diese Karte, nachdem ein Held eine Tür geöffnet oder gesucht hat. Er legt eine Gespür- oder Stärke-Probe ab (nach seiner Wahl). Wenn sie gelingt, erleidet er so viel Herz, wie sein entsprechender Attributwert angibt. Wenn sie misslingt, ist er besiegt.",
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
        id: 'bloodrage', nameEn: 'Blood Rage', nameDe: "Blutrausch",
        cardType: 'Event', count: 2, xpCost: 1,
        rulesEn: 'Play this card at the end of your turn and choose a monster. That monster immediately performs 2 attack actions, and is then defeated.',
        rulesDe: "Spiele diese Karte am Ende deines Zugs und wähle ein Monster. Das Monster führt sofort 2 Angriffsaktionen aus und ist danach besiegt.",
        imageUrl: `${IMG}/warlord/bg-blood-rage.png`,
      },
      {
        id: 'darkfortitude', nameEn: 'Dark Fortitude', nameDe: "Unheilige Stärke",
        cardType: 'Event', count: 2, xpCost: 1,
        rulesEn: 'Play this card after rolling defense dice. Add 2 Shields to the results.',
        rulesDe: "Spiele diese Karte nach einem eigenen Verteidigungswurf. Du erhältst 2 Schild zusätzlich.",
        imageUrl: `${IMG}/warlord/bg-dark-fortitude.png`,
      },
      {
        id: 'bloodlust', nameEn: 'Bloodlust', nameDe: "Blutdurst",
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card when a hero is knocked out. Draw 2 Overlord cards. This is in addition to your normal 1 Overlord card (or threat token) drawn for defeating a hero.',
        rulesDe: "Spiele diese Karte, wenn ein Held besiegt wurde. Ziehe 2 Overlordkarten – zusätzlich zu der Karte, die du sowieso für einen besiegten Helden ziehen darfst.",
        imageUrl: `${IMG}/warlord/bg-bloodlust-errata.png`,
      },
      {
        id: 'expertblow', nameEn: 'Expert Blow', nameDe: "Erfahrener Kämpfer",
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card when a monster attacks a hero, before rolling dice. The attack gains +2 Hearts and: Surge: Return this card to your hand.',
        rulesDe: "Spiele diese Karte, wenn ein Monster einen Helden angreift, aber vor dem Angriffswurf. Der Angriff hat +2 Herz und: Schub: Nimm diese Karte wieder auf deine Hand.",
        imageUrl: `${IMG}/warlord/bg-expert-blow.png`,
      },
      {
        id: 'reinforce', nameEn: 'Reinforce', nameDe: "Verstärkung rufen",
        cardType: 'Event', count: 1, xpCost: 3,
        rulesEn: "Play this card at the end of your turn and choose a master monster on the map. Place minion monsters of that monster's group in empty spaces adjacent to that monster up to the group limit. These monsters may not be placed within 3 spaces of any hero, but may otherwise be placed in any empty space.",
        rulesDe: "Spiele diese Karte am Ende deines Zugs und wähle ein Elite-Monster auf dem Spielplan. Du kannst sofort auf jedes benachbarte leere Feld des Elite-Monsters jeweils ein normales Monster dieses Typs stellen (Gruppengröße einhalten).",
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
        id: 'darkresilience', nameEn: 'Dark Resilience', nameDe: "Dunkle Heilkraft",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card on a monster during your turn. Roll 2 red dice. The monster recovers Hearts equal to the Hearts rolled.',
        rulesDe: "Spiele diese Karte in deinem Zug auf ein Monster. Wirf 2 rote Machtwürfel. Das Monster gewinnt die gewürfelten Herz zurück.",
        imageUrl: `${IMG}/universal/bg-dark-resilience.png`,
      },
      {
        id: 'planahead', nameEn: 'Plan Ahead', nameDe: "Vorausplanen",
        cardType: 'Event', count: 2, xpCost: 1,
        rulesEn: 'Play this card on your turn. Look at the top 5 cards of the Overlord deck and place them on top of the deck in the order of your choice.',
        rulesDe: "Spiele diese Karte in deinem Zug. Sieh dir die obersten 5 Karten deines Decks an und lege sie in beliebiger Reihenfolge wieder zurück.",
        imageUrl: `${IMG}/universal/bg-plan-ahead.png`,
      },
      {
        id: 'schemes', nameEn: 'Schemes', nameDe: "Finstere Pläne",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card on your turn. Choose Event, Magic, or Trap. Reveal cards from the top of the Overlord deck until you find a card with the chosen trait or until you run out of cards in your deck. Add the card with the chosen trait (if possible) to your hand and discard all other cards revealed.',
        rulesDe: "Spiele diese Karte in deinem Zug. Wähle Ereignis, Magie oder Falle. Decke so lange Karten von deinem Deck auf, bis du eine Karte mit dem gewählten Merkmal findest oder bis das Deck aufgebraucht ist. Nimm die Karte mit dem gewählten Merkmal auf die Hand (falls eine dabei war) und wirf alle anderen aufgedeckten Karten ab.",
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
        id: 'befuddle', nameEn: 'Befuddle', nameDe: "Verwirren",
        cardType: 'Magic', count: 2, xpCost: 0,
        rulesEn: 'Play this card immediately after a hero passes an attribute test. The hero must reroll the test and add 1 Shield to the results. Scout: The hero also suffers 1 Fatigue.',
        rulesDe: "Spiele diese Karte, sofort nachdem einem Helden eine Attributsprobe gelingt. Der Held muss die Probe wiederholen und 1 Schild zu seinem Würfelergebnis hinzuzählen. Kundschafter: Der Held erleidet außerdem 1 Erschöpfung.",
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-befuddle.png`,
      },
      {
        id: 'blindingspeed', nameEn: 'Blinding Speed', nameDe: "Blitzschnell",
        cardType: 'Magic', count: 2, xpCost: 0,
        rulesEn: 'Play this card when activating a monster. Choose a hero to test both Knowledge and Awareness. If he passes both tests, draw 1 Overlord card. If he fails at least one test, the monster gains 2 movement points. Warrior: If he fails both tests, the monster gains 4 movement points.',
        rulesDe: "Spiele diese Karte, wenn du ein Monster aktivierst. Ein Held deiner Wahl legt eine Wissen- und eine Gespür-Probe ab. Wenn beide Proben gelingen, ziehst du 1 Overlordkarte. Wenn mindestens eine Probe misslingt, erhält das Monster 2 Bewegungspunkte. Krieger: Wenn beide Proben misslingen, erhält das Monster 4 Bewegungspunkte.",
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-blinding-speed.png`,
      },
      {
        id: 'dirtyfighting', nameEn: 'Dirty Fighting', nameDe: "Harte Bandagen",
        cardType: 'Event', count: 2, xpCost: 0,
        rulesEn: 'Play this card when a monster attacks a hero, after rolling dice. Add 1 Surge to the results. Healer: This attack gains Pierce 1.',
        rulesDe: "Spiele diese Karte nach dem Angriffswurf eines Monsters gegen einen Helden. Der Angriff hat +1 Schub. Heiler: Der Angriff erhält zusätzlich Durchbohren 1.",
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-dirty-fighting.png`,
      },
      {
        id: 'flurry', nameEn: 'Flurry', nameDe: "Zerfleischen",
        cardType: 'Event', count: 1, xpCost: 0,
        rulesEn: "Play this card when a monster attacks a hero, after rolling dice. This attack gains: Surge: Perform an additional attack after resolving this attack. Add 1 additional green power die to the monster's attack pool.",
        rulesDe: "Spiele diese Karte nach dem Angriffswurf eines Monsters gegen einen Helden. Dieser Angriff hat: Schub: Führe nach der Abhandlung dieses Angriffs einen weiteren Angriff durch. Füge diesem Angriffswurf 1 grünen Machtwürfel hinzu.",
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-flurry.png`,
      },
      {
        id: 'greasetrap', nameEn: 'Grease Trap', nameDe: "Rutschiger Boden",
        cardType: 'Trap', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a hero enters an empty space from an adjacent space. He tests Awareness. If he passes, he suffers 1 Fatigue. If he fails, move the hero 3 spaces in a straight line in the same direction he last moved. For each space he cannot move, he suffers 1 Heart or 1 Fatigue (your choice). Mage: If he fails, the hero is also Stunned.',
        rulesDe: "Spiele diese Karte, wenn ein Held ein benachbartes leeres Feld betritt. Er legt eine Gespür-Probe ab. Wenn sie gelingt, erleidet er 1 Erschöpfung. Wenn sie misslingt, bewegst du den Helden 3 Felder weit in die Richtung, in die er sich zuletzt bewegt hat. Für jedes Feld, das er sich dabei nicht bewegen kann, erleidet er 1 Herz oder 1 Erschöpfung (deine Wahl). Magier: Wenn seine Probe misslingt, wird er zusätzlich betäubt.",
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-grease-trap.png`,
      },
      {
        id: 'mentalerror', nameEn: 'Mental Error', nameDe: "Denkfehler",
        cardType: 'Event', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a monster attacks a hero, after rolling dice. The hero tests Knowledge. If he passes, the hero suffers 1 Fatigue. If he fails, the attack gains +2 Hearts. Warrior: If he fails, the attack also gains 1 Surge.',
        rulesDe: "Spiele diese Karte nach dem Angriffswurf eines Monsters gegen einen Helden. Der Held legt eine Wissen-Probe ab. Wenn sie gelingt, erleidet er 1 Erschöpfung. Wenn sie misslingt, hat der Angriff +2 Herz. Krieger: Wenn seine Probe misslingt, hat der Angriff außerdem +1 Schub.",
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-mental-error.png`,
      },
      {
        id: 'mimic', nameEn: 'Mimic', nameDe: "Mimikry",
        cardType: 'Trap', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a hero searches, before revealing the search token. Place a fatigue token on the search token. The search token is now treated as a minion Volucrix Reaver. Once defeated, the search token is immediately revealed and is considered searched by the closest hero. Scout: The Volucrix Reaver may perform an immediate Skirmish action.',
        rulesDe: "Spiele diese Karte, wenn ein Held sucht, aber bevor er den Suchmarker aufdeckt. Lege einen Erschöpfungsmarker auf den Suchmarker. Der Suchmarker gilt ab jetzt als normaler Volucrix-Jäger. Sobald er besiegt ist, wird der Suchmarker aufgedeckt. Der nächststehende Held gilt jetzt als der, der gesucht hat. Kundschafter: Der Volucrix-Jäger darf sofort eine Vorstoß-Aktion ausführen.",
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-mimic.png`,
      },
      {
        id: 'overwhelm', nameEn: 'Overwhelm', nameDe: "Überwältigende Meute",
        cardType: 'Event', count: 1, xpCost: 0,
        rulesEn: 'Play this card during your turn on a hero adjacent to 4 or more monsters. He tests Willpower. If he passes, immediately perform an attack with 1 adjacent monster or your choice. If he fails, the hero is Stunned and Immobilized.',
        rulesDe: "Spiele diese Karte in deinem Zug auf einen Helden, auf dessen Nachbarfeldern mindestens 4 Monster stehen. Er legt eine Willenskraft-Probe ab. Wenn sie gelingt, führt eines dieser Monster (deiner Wahl) sofort 1 Angriff durch (nicht unbedingt gegen diesen Helden). Wenn sie misslingt, ist der Held betäubt und gelähmt.",
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-overwhelm.png`,
      },
      {
        id: 'reflectiveward', nameEn: 'Reflective Ward', nameDe: "Auge um Auge",
        cardType: 'Magic', count: 1, xpCost: 0,
        rulesEn: 'Play this card when a hero attacks a monster, before rolling dice. The attacking hero may choose to suffer 2 Fatigue. If he cannot suffer the Fatigue, or chooses not to, he will be dealt Hearts equal to the Hearts dealt to the monster.',
        rulesDe: "Spiele diese Karte vor dem Angriffswurf eines Helden gegen ein Monster. Der angreifende Held kann 2 Erschöpfung erleiden. Wenn er das nicht kann oder will, fügt er sich mit diesem Angriff ebenso viele Herz zu wie dem Monster (er wirft seine eigenen Verteidigungswürfel gegen diesen Angriff).",
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-reflective-ward.png`,
      },
      {
        id: 'signofweakness', nameEn: 'Sign of Weakness', nameDe: "Zeichen der Schwäche",
        cardType: 'Trap', count: 1, xpCost: 0,
        rulesEn: "Play this card when a hero performs a rest action. He tests Awareness. If he passes, draw 1 Overlord card. If he fails, each monster in that hero's line of sight may move 1 space. Healer: If he fails, the hero is also Cursed.",
        rulesDe: "Spiele diese Karte, wenn ein Held eine Aktion Ausruhen ausführt. Er legt eine Gespür-Probe ab. Wenn sie gelingt, ziehst du eine Overlordkarte. Wenn sie misslingt, kann sich jedes Monster in der Sichtlinie des Helden um 1 Feld bewegen. Heiler: Wenn seine Probe misslingt, wird er zusätzlich verflucht.",
        imageUrl: `${OD}/labyrinth-of-ruin/basic2/lr-sign-of-weakness.png`,
      },
      {
        id: 'uncontrolledpower', nameEn: 'Uncontrolled Power', nameDe: "Ungezügelte Kraft",
        cardType: 'Magic', count: 2, xpCost: 0,
        rulesEn: 'Play this card when a hero attacks a monster, after rolling dice. He tests Willpower. If he fails, you choose how he spends his Surge results. You must spend as many Surge results as possible and the attack gains: Surge: Suffer 1 Fatigue. Mage: If he fails, the attack also gains: Surge: Suffer 1 Heart and 1 Fatigue',
        rulesDe: "Spiele diese Karte nach dem Angriffswurf eines Helden gegen ein Monster. Er legt eine Willenskraft-Probe ab. Wenn sie misslingt, entscheidest du, wofür er seine Schub benutzt. Du musst so viele Schub benutzen, wie möglich und der Angriff hat: Schub: Erleide 1 Erschöpfung. Magier: Wenn seine Probe misslingt, hat der Angriff zusätzlich: Schub: Erleide 1 Herz und 1 Erschöpfung.",
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
        id: 'norestforthewicked', nameEn: 'No Rest for the Wicked', nameDe: "Keine Atempause",
        cardType: 'Event', count: 2, xpCost: 1,
        rulesEn: 'Play this card when a hero suffers 1 Fatigue to gain an additional movement point. Choose 1 monster to move 1 space immediately after the hero spends that movement point. Until the start of your turn, you may trigger this ability each time a hero suffers 1 Fatigue to gain an additional movement point.',
        rulesDe: "Spiele diese Karte, wenn ein Held 1 Erschöpfung erleidet, um einen Bewegungspunkt zu erhalten. Sofort nachdem der Held diesen Bewegungspunkt ausgibt, kannst du 1 beliebiges Monster 1 Feld weit bewegen. Bis zum Beginn deines nächsten Zuges kannst du diese Fähigkeit jedes Mal nutzen, wenn ein Held 1 Erschöpfung erleidet, um einen Bewegungspunkt zu erhalten.",
        imageUrl: `${OD}/lair-of-the-wyrm/punisher/lw-no-rest-for-the-wicked.png`,
      },
      {
        id: 'tradingpains', nameEn: 'Trading Pains', nameDe: "Schmerzensbande",
        cardType: 'Event', count: 2, xpCost: 1,
        rulesEn: 'Play this card on a hero when he would recover any amount of Hearts. In response to this card, the hero may choose to reduce the amount of Hearts he recovers. Another hero of your choice within 3 spaces of that hero suffers Hearts equal to half (rounded up) the Hearts recovered.',
        rulesDe: "Spiele diese Karte auf einen Helden, wenn er Herz zurückgewinnen würde. Als Reaktion auf diese Karte kann der Held wahlweise weniger Herz zurückgewinnen. Ein anderer Held deiner Wahl innerhalb von 3 Feldern zu diesem Helden erleidet halb so viele Herz, wie der erste Held zurückgewinnt (aufgerundet).",
        imageUrl: `${OD}/lair-of-the-wyrm/punisher/lw-trading-pains.png`,
      },
      {
        id: 'exploitweakness', nameEn: 'Exploit Weakness', nameDe: "Die Schwachen zuerst",
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card after a hero ends his turn with an amount of Fatigue on his Hero sheet equal to his Stamina. Immediately move a monster up to its Speed toward that hero. Then perform an attack with that monster against that hero, if able.',
        rulesDe: "Spiele diese Karte, nachdem ein Held seinen Zug beendet hat, der so viel Erschöpfung auf seinem Heldenbogen hat, wie er Ausdauer hat. Bewege sofort ein Monster gemäß seiner Geschwindigkeit auf diesen Helden zu. Führe dann, wenn möglich, einen Angriff mit diesem Monster gegen diesen Helden durch.",
        imageUrl: `${OD}/lair-of-the-wyrm/punisher/lw-exploit-weakness.png`,
      },
      {
        id: 'priceofprevention', nameEn: 'Price of Prevention', nameDe: "Alles hat seinen Preis",
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card on a hero at the start of your turn. The hero may suffer Hearts equal to an attribute of his choice to test that attribute. If he passes, discard this card. If he fails, or chooses not to test an attribute, you may search your discard pile for 1 Event or Trap card and add it to your hand.',
        rulesDe: "Spiele diese Karte zu Beginn deines Zuges auf einen Helden. Der Held kann eines seiner Attribute wählen und ebenso viele Herz erleiden, wie sein Attributwert beträgt. Dann legt er eine Probe auf dieses Attribut ab. Wenn sie gelingt, wird diese Karte abgeworfen. Wenn sie misslingt oder er keine Probe ablegt, kannst du 1 beliebige Karte des Typs Ereignis oder Falle aus deinem Ablagestapel auf die Hand nehmen.",
        imageUrl: `${OD}/lair-of-the-wyrm/punisher/lw-price-of-prevention.png`,
      },
      {
        id: 'bloodbargaining', nameEn: 'Blood Bargaining', nameDe: "Blutsbande",
        cardType: 'Event', count: 1, xpCost: 3,
        rulesEn: "Play this card at the start of a hero's turn. Take 1 hero token from each hero and choose an equal number of monsters in play. Assign 1 token to each chosen monster. Until the end of this round, each time a monster suffers Hearts, the hero whose token is assigned to that monster suffers an equal amount of Hearts.",
        rulesDe: "Spiele diese Karte zu Beginn eines Heldenzuges. Nimm 1 Heldenmarker von jedem Helden und wähle ebenso viele Monster auf dem Spielplan. Gib jedem Monster einen Heldenmarker. Bis zum Ende der Runde gilt: Wenn ein Monster Herz erleidet, erleidet der Held, dessen Marker dieses Monster hat, ebenso viele Herz.",
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
        id: 'adaptivecontagion', nameEn: 'Adaptive Contagion', nameDe: "Adaptive Ansteckung",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card during your turn and keep it in your play area. During this quest, when a hero would be Poisoned or Diseased, you may instead place 1 infection token in his play area. Additionally, when an infected hero performs an attribute test, you may discard 1 infection token from that hero before rolling dice to add 1 Shield to his results.',
        rulesDe: "Spiele diese Karte in deinem Zug. Sie bleibt im Spiel. Wenn in diesem Abenteuer ein Held erkranken oder vergiftet würde, kannst du stattdessen 1 Infektionsmarker auf seinen Heldenbogen legen. Außerdem kannst du, wenn ein infizierter Held eine Attributsprobe ablegt, vor dem Wurf 1 Infektionsmarker von ihm abwerfen, um 1 Schild zu seinem Ergebnis zu addieren.",
        imageUrl: `${OD}/the-trollfens/infector/tf-adaptive-contagion.png`,
      },
      {
        id: 'airborne', nameEn: 'Airborne', nameDe: "Pestwolke",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card during your turn and keep it in your play area. During this quest, each time a monster misses or deals no Hearts on an attack, the targeted hero gains 1 infection token. Additionally, when an infected hero performs an attack, you may discard 1 infection token from that hero after rolling dice to add 1 Shield to the defense results.',
        rulesDe: "Spiele diese Karte in deinem Zug. Sie bleibt im Spiel. Wenn in diesem Abenteuer ein Monsterangriff fehlschlägt oder keinen Herz zufügt, erhält das Ziel 1 Infektionsmarker. Außerdem kannst du, wenn ein infizierter Held einen Angriff durchführt, nach dem Wurf 1 Infektionsmarker von ihm abwerfen, um 1 Schild zum Verteidigungswurf zu addieren.",
        imageUrl: `${OD}/the-trollfens/infector/tf-airborne.png`,
      },
      {
        id: 'contaminated', nameEn: 'Contaminated', nameDe: "Kontaminiert",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card during your turn and keep it in your play area. During this quest, each of your monsters gains: Surge: Infect your target. Additionally, each time a monster performs an attack targeting an infected hero, you may discard 1 infection token from that hero after rolling dice to gain +1 Heart on the attack.',
        rulesDe: "Spiele diese Karte in deinem Zug. Sie bleibt im Spiel. In diesem Abenteuer haben alle deine Monster: Schub: Infiziere das Ziel. Außerdem kannst du jedes Mal, wenn ein Monsterangriff auf einen infizierten Helden zielt, nach dem Angriffswurf 1 Infektionsmarker von diesem Helden abwerfen um dem Angriff +1 Herz zu geben.",
        imageUrl: `${OD}/the-trollfens/infector/tf-contaminated.png`,
      },
      {
        id: 'virulentinfection', nameEn: 'Virulent Infection', nameDe: "Heftige Infektion",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card at the start of your turn. During this turn, each time a hero gains an infection token, he gains 1 additional infection token.',
        rulesDe: "Spiele diese Karte zu Beginn deines Zuges. Helden, die in diesem Zug einen Infektionsmarker erhalten, erhalten 1 zusätzlichen Infektionsmarker.",
        imageUrl: `${OD}/the-trollfens/infector/tf-virulent-infection.png`,
      },
      {
        id: 'outbreak', nameEn: 'Outbreak', nameDe: "Ausbruch",
        cardType: 'Trap', count: 1, xpCost: 2,
        rulesEn: "Play this card at the start of an infected hero's turn. Each hero within 3 spaces of that hero must test Might. Each hero that fails gains 1 infection token and then suffers Hearts equal to the number of infection tokens he has in his play area.",
        rulesDe: "Spiele diese Karte zu Beginn des Zuges eines infizierten Helden. Jeder Held innerhalb von 3 Feldern zu diesem Helden legt eine Stärke-Probe ab. Jeder Held, dessen Probe misslingt, erhält 1 Infektionsmarker und erleidet dann so viel Herz, wie er Infektionsmarker auf seinem Heldenbogen hat.",
        imageUrl: `${OD}/the-trollfens/infector/tf-outbreak.png`,
      },
      {
        id: 'taintedblow', nameEn: 'Tainted Blow', nameDe: "Seuchenhieb",
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card when a monster attacks a hero, before rolling dice. This attack gains 1 Surge and +1 Heart. Discard 2 infection tokens from the target hero to return this card to your hand.',
        rulesDe: "Spiele diese Karte, wenn ein Monster einen Helden angreift, aber vor dem Angriffswurf. Der Angriff hat +1 Schub und +1 Herz. Wirf 2 Infektionsmarker vom Ziel des Angriffs ab, um diese Karte wieder auf die Hand zu nehmen.",
        imageUrl: `${OD}/the-trollfens/infector/tf-tainted-blow.png`,
      },
      {
        id: 'darkhost', nameEn: 'Dark Host', nameDe: "Dunkler Wirt",
        cardType: 'Magic', count: 1, xpCost: 3,
        rulesEn: 'Play this card at the start of your turn and discard 3 infection tokens from 1 infected hero. During this turn, you may perform 1 move action and 1 attack action with this hero, treating him as a monster in his own monster group.',
        rulesDe: "Spiele diese Karte zu Beginn deines Zuges und wirf 3 Infektionsmarker von einem infizierten Helden ab. In diesem Zug kannst du 1 Bewegungs- und 1 Angriffsaktion mit diesem Helden ausführen. Er gilt dabei als Monster seiner eigenen Monstergruppe.",
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
        id: 'dragonbonependant', nameEn: 'Dragonbone Pendant', nameDe: "Drachenbein-Amulett",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card during on 1 monster group during your turn and keep it in your play area. Each attack performed by a monster in this group gains +1 Heart. Discard this card if a monster in this group defeats a hero.',
        rulesDe: "Spiele diese Karte in deinem Zug auf 1 Monstergruppe. Diese Karte bleibt im Spiel. Jeder Angriff der Monster dieser Gruppe hat +1 Herz. Wirf diese Karte ab, wenn ein Monster dieser Gruppe einen Helden besiegt.",
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-dragonbone-pendant.png`,
      },
      {
        id: 'elixirofstone', nameEn: 'Elixir of Stone', nameDe: "Steinelixier",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. Each time a monster in this group is attacked, add 1 Shield to the results. Each attack that targets a monster in this group gains: Surge Surge: Discard "Elixir of Stone."',
        rulesDe: "Spiele diese Karte in deinem Zug auf 1 Monstergruppe. Diese Karte bleibt im Spiel. Jedes Monster dieser Gruppe hat bei der Verteidigung +1 Schild. Jeder Angriff, der auf ein Monster dieser Gruppe zielt, hat: Schub Schub: Wirf „Steinelixier“ ab.",
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-elixir-of-stone.png`,
      },
      {
        id: 'ringsofzholalam', nameEn: "Rings of Zhol'alam", nameDe: "Zhol'alam-Ringe",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. Each time a monster in this group is defeated, each hero within 2 spaces of that monster suffers 1 Heart. Discard this card if there are no monsters in this group on the map.',
        rulesDe: "Spiele diese Karte in deinem Zug auf 1 Monstergruppe. Diese Karte bleibt im Spiel. Jedes Mal, wenn ein Monster dieser Gruppe besiegt wird, erleidet jeder Held innerhalb von 2 Feldern zu diesem Monster 1 Herz. Wirf diese Karte ab, wenn keine Monster dieser Gruppe auf dem Spielplan sind.",
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-rings-of-zholalam.png`,
      },
      {
        id: 'wristletofwind', nameEn: 'Wristlet of Wind', nameDe: "Windarmbänder",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. After a monster in this group performs an attack, it may move 1 space. Discard this card immediately if a monster in this group does not move 1 or more spaces during its activation.',
        rulesDe: "Spiele diese Karte in deinem Zug auf 1 Monstergruppe. Diese Karte bleibt im Spiel. Jedes Monster dieser Gruppe kann sich nach einem eigenen Angriff um 1 Feld bewegen. Wirf diese Karte sofort ab, wenn ein Monster dieser Gruppe sich in seiner Aktivierung nicht mindestens um 1 Feld bewegt.",
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-wristlet-of-wind.png`,
      },
      {
        id: 'runeofthephoenix', nameEn: 'Rune of the Phoenix', nameDe: "Phönixrune",
        cardType: 'Magic', count: 1, xpCost: 2,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. Discard this card when a monster in this group suffers Hearts equal to its Health. That monster immediately recovers 5 Hearts.',
        rulesDe: "Spiele diese Karte in deinem Zug auf 1 Monstergruppe. Diese Karte bleibt im Spiel. Wirf diese Karte ab, wenn ein Monster dieser Gruppe seinen letzten Lebenspunkt verliert. Dieses Monster gewinnt sofort 5 Herz zurück.",
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-rune-of-the-phoenix.png`,
      },
      {
        id: 'wardofpeace', nameEn: 'Ward of Peace', nameDe: "Zauber des Friedens",
        cardType: 'Magic', count: 1, xpCost: 2,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. Discard all conditions from this monster group. Each monster in this group is immune to all conditions. Discard this card if a monster in this group spends a Surge result during an attack.',
        rulesDe: "Spiele diese Karte in deinem Zug auf 1 Monstergruppe. Diese Karte bleibt im Spiel. Jedes Monster dieser Gruppe verliert alle Zustände und ist ab sofort immun gegen alle Zustände. Wirf diese Karte ab, wenn ein Monster dieser Gruppe bei einem Angriff ein Schub einsetzt.",
        imageUrl: `${OD}/manor-of-ravens/enchanter/mr-ward-of-peace.png`,
      },
      {
        id: 'signofthelastzenith', nameEn: 'Sign of the Last Zenith', nameDe: "Zeichen des letzten Zenits",
        cardType: 'Magic', count: 1, xpCost: 3,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. Each time an Enchanter Overlord card is discarded from another monster group, play that card on this monster group and keep it in your play area. Then, draw an Overlord card.',
        rulesDe: "Spiele diese Karte in deinem Zug auf 1 Monstergruppe. Diese Karte bleibt im Spiel. Jedes Mal, wenn eine Verzauberer-Karte von einer anderen Monstergruppe abgeworfen wird, spielst du sie sofort auf diese Gruppe. Die Karte bleibt im Spiel. Ziehe dann 1 Overlordkarte.",
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
        id: 'beneaththeshadow', nameEn: 'Beneath the Shadow', nameDe: "Im Schatten",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 servant at the end of your turn and keep this card in your play area. This servant gains: Shadow: A hero adjacent to this monster that declares an attack must spend 1 Surge or that attack is a miss. DIscard this card if this servant is defeated.',
        rulesDe: "Spiele diese Karte am Ende deines Zuges auf 1 Diener. Diese Karte bleibt im Spiel. Der Diener erhält: Schatten: Wenn ein Held auf einem Nachbarfeld dieses Monsters angreift, muss er 1 Schub einsetzen, ansonsten schlägt der Angriff fehl. Wirf diese Karte ab, wenn dieser Diener besiegt wird.",
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-beneath-the-shadow.png`,
      },
      {
        id: 'beware', nameEn: 'Beware', nameDe: "Obacht",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 servant at the end of your turn and keep this card in your play area. This servant gains: Skittish: Each time a hero within 3 spaces of this figure suffers 1 Fatigue to gain 1 movement point, this monster may move 1 space. Discard this card if this servant is defeated.',
        rulesDe: "Spiele diese Karte am Ende deines Zuges auf 1 Diener. Diese Karte bleibt im Spiel. Der Diener erhält: Ruhelos: Jedes Mal, wenn ein Held innerhalb von 3 Feldern zu diesem Diener 1 Erschöpfung erleidet, um 1 Bewegungspunkt zu erhalten, kann sich dieser Diener um 1 Feld bewegen. Wirf diese Karte ab, wenn dieser Diener besiegt wird.",
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-beware.png`,
      },
      {
        id: 'calloftheravens', nameEn: 'Call of the Ravens', nameDe: "Ruf der Raben",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'When purchased, place this card in your play area. This card cannot be discarded or shuffled into your deck. Exhaust this card at the start of your turn and choose 1 monster. Place 1 Raven Flock Servant token in a space adjacent to that monster. Then, that monster suffers 4 Hearts.',
        rulesDe: "Wenn du diese Karte gekauft hast, bleibt sie immer vor dir liegen. Sie ist nicht Teil deines Decks und kann nicht abgeworfen werden. Erschöpfe diese Karte zu Beginn deines Zuges und wähle 1 Monster. Lege den Rabenschwarmmarker auf ein leeres Nachbarfeld des gewählten Monsters. Dann erleidet das gewählte Monster 4 Herz.",
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-call-of-the-ravens.png`,
      },
      {
        id: 'feast', nameEn: 'Feast', nameDe: "Schmaus",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card when a hero is defeated within 5 spaces of a servant and keep this card in your play area. That servant recovers all Hearts. That servant applies +3 to its Health while this card is in your play area. Discard this card if that servant is defeated.',
        rulesDe: "Spiele diese Karte, wenn ein Held innerhalb von 5 Feldern zu einem Diener besiegt wird. Diese Karte bleibt im Spiel. Dieser Diener gewinnt alle Herz zurück. Solange diese Karte im Spiel ist, steigt die Lebenskraft dieses Dieners um 3 Punkte. Wirf diese Karte ab, wenn dieser Diener besiegt wird.",
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-feast.png`,
      },
      {
        id: 'illomen', nameEn: 'Ill Omen', nameDe: "Böses Omen",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 servant at the end of your turn and keep this card in your play area. This servant gains: Ominous: Each time a hero starts his turn within 3 spaces of this figure, he tests Willpower. If he fails, he is Doomed. Discard this card if this servant is defeated.',
        rulesDe: "Spiele diese Karte am Ende deines Zuges auf 1 Diener. Diese Karte bleibt im Spiel. Der Diener erhält: Unheilvoll: Jedes Mal, wenn ein Held seinen Zug innerhalb von 3 Feldern zu diesem Diener beginnt, legt er eine Gespür-Probe ab. Wenn sie misslingt, ist er todgeweiht. Wirf diese Karte ab, wenn dieser Diener besiegt wird.",
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-ill-omen.png`,
      },
      {
        id: 'imitation', nameEn: 'Imitation', nameDe: "Imitation",
        cardType: 'Trap', count: 1, xpCost: 2,
        rulesEn: 'Play this card on 1 servant when a hero declares an attack that targets that servant. Immediately perform an attack that targets that hero, using the same attack type, special abilities, and dice of the weapon the hero declared for his attack. After this attack is resolved, if the hero was not defeated, he continues his attack.',
        rulesDe: "Spiele diese Karte auf 1 Diener, wenn ein Held einen Angriff ansagt, der auf diesen Diener zielt. Führe sofort einen Angriff durch, der auf diesen Helden zielt und dieselbe Angriffsart, dieselben Fähigkeiten und Würfel wie die Waffe hat, mit welcher der Held angreifen wollte. Wenn der Held dann nicht besiegt ist, führt er seinen angesagten Angriff durch.",
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-imitation.png`,
      },
      {
        id: 'suddenflurry', nameEn: 'Sudden Flurry', nameDe: "Plötzlicher Ausbruch",
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card when you activate a servant during your turn. Perform 1 additional attack with that servant. This attack affects each hero within 2 spaces of the servant.',
        rulesDe: "Spiele diese Karte, wenn du in deinem Zug einen Diener aktivierst. Er darf 1 zusätzlichen Angriff durchführen. Dieser Angriff betrifft alle Helden innerhalb von 2 Feldern zu dem Diener.",
        imageUrl: `${OD}/manor-of-ravens/unkindness/mr-sudden-flurry.png`,
      },
      {
        id: 'envelop', nameEn: 'Envelop', nameDe: "Eingehüllt",
        cardType: 'Event', count: 1, xpCost: 3,
        rulesEn: 'Play this card when 1 servant resolves an attack that defeats a hero. Remove his hero token from the map and place it on this card. If the servant is defeated (or of it is removed from the map for any reason), place the hero token in its space and discard this card. The hero cannot recover Hearts for any reason until this card is discarded.',
        rulesDe: "Spiele diese Karte nach dem Angriff eines Dieners, der einen Helden besiegt. Nimm den Heldenmarker vom Spielplan und lege ihn auf diese Karte. Wenn dieser Diener besiegt wird (oder aus einem anderen Grund vom Spielplan genommen wird), legst du den Heldenmarker auf das Feld des Dieners und wirfst diese Karte ab. Der Held kann keine Herz zurückgewinnen, bis diese Karte abgeworfen wird.",
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
        id: 'implodingrift', nameEn: 'Imploding Rift', nameDe: "Implodierender Graben",
        cardType: 'Trap', count: 1, xpCost: 1,
        rulesEn: 'Play this card when a hero enters an empty space. That hero and each hero adjacent to him tests Willpower. Each hero who fails suffers Fatigue up to his Stamina.',
        rulesDe: "Spiele diese Karte, wenn ein Held ein leeres Feld betritt. Dieser Held und alle Helden auf seinen Nachbarfeldern legen eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, erleidet Erschöpfung in Höhe seiner verbleibenden Ausdauer.",
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-imploding-rift.png`,
      },
      {
        id: 'mistrust', nameEn: 'Mistrust', nameDe: "Misstrauen",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card at the end of your turn. Until the start of your next turn, each time a hero enters a space adjacent to another hero, the first hero suffers 1 Fatigue.',
        rulesDe: "Spiele diese Karte am Ende deines Zuges. Bis zum Beginn deines nächsten Zuges erleidet jeder Held jedes Mal 1 Erschöpfung, wenn ein anderer Held eins seiner Nachbarfelder betritt.",
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-mistrust.png`,
      },
      {
        id: 'outofdarkness', nameEn: 'Out of Darkness', nameDe: "Aus der Dunkelheit",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card when a hero is revived. Immediately perform an attack with that hero as if he were one of your monsters. This attack must target another hero.',
        rulesDe: "Spiele diese Karte, wenn einem Helden aufgeholfen wird. Führe sofort einen Angriff mit diesem Helden durch, als wäre er ein Monster. Der Angriff muss auf einen anderen Helden zielen.",
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-out-of-darkness.png`,
      },
      {
        id: 'shadowofdoubt', nameEn: 'Shadow of Doubt', nameDe: "Zaghaftigkeit",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card at the end of your turn and choose 1 hero. Next round, that hero takes his turn after all other heroes have taken their turns.',
        rulesDe: "Spiele diese Karte am Ende deines Zuges und wähle einen Helden. In der nächsten Runde führt dieser Held seinen Zug nach allen anderen Helden aus.",
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-shadow-of-doubt.png`,
      },
      {
        id: 'blackout', nameEn: 'Black Out', nameDe: "Dunkelheit",
        cardType: 'Magic', count: 1, xpCost: 2,
        rulesEn: 'Play this card at the end of your turn. Until the start of your next turn, monsters cannot be targeted by an attack unless the attacking hero is within 2 spaces of them.',
        rulesDe: "Spiele diese Karte am Ende deines Zuges. Bis zum Beginn deines nächsten Zuges können Helden nur dann mit einem Angriff auf ein Monster zielen, wenn sie innerhalb von 2 Feldern zu diesem Monster stehen.",
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-black-out.png`,
      },
      {
        id: 'shadowwalk', nameEn: 'Shadow Walk', nameDe: "Schattenflug",
        cardType: 'Magic', count: 1, xpCost: 2,
        rulesEn: 'Play this card when you activate a monster. During this activation, that monster gains: Fly: This figure may ignore enemy figures and the effects of terrain while moving. It must end its movement in an empty space following normal movement rules.',
        rulesDe: "Spiele diese Karte, wenn du ein Monster aktivierst. In dieser Aktivierung hat das Monster: Fliegen: Dieses Monster kann während der Bewegung feindliche Figuren und Terrain ignorieren. Es muss seine Bewegung nach den normalen Regeln auf einem leeren Feld beenden.",
        imageUrl: `${OD}/shadow-of-nerekhall/shadowmancer/sn-shadow-walk.png`,
      },
      {
        id: 'treacherousshadows', nameEn: 'Treacherous Shadows', nameDe: "Tückische Schatten",
        cardType: 'Magic', count: 1, xpCost: 3,
        rulesEn: 'Play this card at the start of your turn. Each hero tests Willpower. For each hero who fails, you may perform an attack with that hero as if he were one of your monsters. You can force him to attack himself.',
        rulesDe: "Spiele diese Karte zu Beginn deines Zuges. Jeder Held legt eine Willenskraft-Probe ab. Führe sofort mit jedem Helden, dessen Probe misslingt, einen Angriff durch, als wäre er ein Monster. Er kann auch gezwungen werden, sich selbst anzugreifen.",
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
        id: 'darksilhouette', nameEn: 'Dark Silhouette', nameDe: "Dunkle Silhouette",
        cardType: 'Trap', count: 1, xpCost: 1,
        rulesEn: "Play this card when a hero declares an attack that targets another non-large monster within 3 spaces of a servant. Place that monster in the servant's space and that servant in the target space. That servant is now the target of this attack.",
        rulesDe: "Spiele diese Karte, sobald ein Held einen Angriff ansagt, der ein nicht großes Monster innerhalb von 3 Feldern zu einem Diener zum Ziel hat. Stelle das Monster auf das Feld des Dieners und den Diener auf das Zielfeld. Dieser Diener ist nun das Ziel des Angriffs.",
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-dark-silhouette.png`,
      },
      {
        id: 'grotesque', nameEn: 'Grotesque', nameDe: "Grotesk",
        cardType: 'Magic', count: 1, xpCost: 1,
        rulesEn: 'Play this card when a hero adjacent to a servant declares an attack. That hero tests Willpower. If he passes, he suffers 2 Fatigue. If he fails, he is Terrified.',
        rulesDe: "Spiele diese Karte sobald ein zu einem Diener benachbarter Held einen Angriff ansagt. Dieser Held legt eine Willenskraft-Probe ab. Wenn die Probe gelingt, erleidet er 2 Erschöpfung. Wenn die Probe misslingt, wird er verängstigt.",
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-grotesque.png`,
      },
      {
        id: 'possessive', nameEn: 'Possessive', nameDe: "Besitzergreifend",
        cardType: 'Trap', count: 1, xpCost: 1,
        rulesEn: 'Play this card when a hero defeats a servant. That hero suffers 2 Hearts. Then, if that hero was not defeated, perform an attack with that hero as if he were one of your monsters.',
        rulesDe: "Spiele diese Karte sobald ein Held einen Diener besiegt. Dieser Held erleidet 2 Herz. Dann, wenn dieser Held nicht besiegt worden ist, führe einen Angriff mit diesem Helden aus, als ob er 1 deiner Monster ist.",
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-possessive.png`,
      },
      {
        id: 'restlessspirit', nameEn: 'Restless Spirit', nameDe: "Ruheloser Geist",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card on 1 servant at the end of your turn and keep this card in your play area. This servant applies +2 to its Speed while this card is in your play area. Discard this card if this servant is defeated.',
        rulesDe: "Spiele diese Karte am Ende deines Zuges auf 1 Diener und behalte sie in deinem Spielbereich. Dieser Diener fügt 2 zu seiner Geschwindigkeit hinzu, solange sich diese Karte in deinem Spielbereich befindet. Wirf diese Karte ab, wenn dieser Diener besiegt wird.",
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-restless-spirit.png`,
      },
      {
        id: 'tiesthatbind', nameEn: 'Ties That Bind', nameDe: "Fesselnde Bande",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: "When purchased, place this card in your play area. This card cannot be discarded or shuffled into your deck. Exhaust this card when a non-servant monster is defeated. Place 1 Scourge Servant token in that monster's space.",
        rulesDe: "Sobald diese Karte erworben wird, lege sie in deinen Spielbereich. Diese Karte kann nicht abgeworfen oder in dein Deck gemischt werden. Erschöpfe diese Karte, sobald ein Monster, das kein Diener ist, besiegt wird. Lege 1 Geissel-Dienermarker auf das Feld des Monsters.",
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-ties-that-bind.png`,
      },
      {
        id: 'hauntedsteps', nameEn: 'Haunted Steps', nameDe: "Geisterhafte Schritte",
        cardType: 'Trap', count: 1, xpCost: 2,
        rulesEn: 'Play this card on 1 servant when a hero adjacent to that servant exists its current space. Move that servant 1 space, and keep this card in your play area. Each time a hero adjacent to this servant exists a space, you may move this servant 1 space. Discard this card if this servant is defeated.',
        rulesDe: "Spiele diese Karte auf 1 Diener, sobald ein zu diesem Diener benachbarter Held sein aktuelles Feld verlässt. Bewege diesen Diener um 1 Feld und behalte diese Karte in deinem Spielbereich. Jedes Mal wenn ein zu diesem Diener benachbarter Held ein Feld verlässt, darfst du diesen Diener um 1 Feld bewegen. Wirf diese Karte ab, sobald dieser Diener besiegt wird.",
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-haunted-steps.png`,
      },
      {
        id: 'unblinking', nameEn: 'Unblinking', nameDe: "Unerschrocken",
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: "Play this card at the end of a servant's activation. Each hero in line of sight of that servant may choose to suffer either 2 Fatigue or 4 Hearts. For each hero who does not or cannot suffer either 2 Fatigue or 4 Hearts, draw 1 Overlord card.",
        rulesDe: "Spiele diese Karte am Ende der Aktivierung eines Dieners. Jeder Held in der Sichtlinie dieses Monsters darf wählen, entweder 2 Erschöpfung oder 4 Herz zu erleiden. Für jeden Helden, der nicht entweder 2 Erschöpfung oder 4 Herz erleiden kann oder will, ziehe 1 Overlordkarte.",
        imageUrl: `${OD}/the-chains-that-rust/soulbinder/cr-unblinking.png`,
      },
      {
        id: 'dansemacabre', nameEn: 'Danse Macabre', nameDe: "Totentanz",
        cardType: 'Magic', count: 1, xpCost: 3,
        rulesEn: "Play this card at the start of a servant's activation. Trace a path of 4 spaces starting in a space adjacent to that servant. Each hero on that path suffers Fatigue up to his Stamina. Then, move that servant and each of those heroes up to 3 spaces.",
        rulesDe: "Spiele diese Karte zu Beginn der Aktivierung eines Dieners. Ziehe einen Pfad von 4 Feldern, beginnend auf einem zu diesem Diener benachbarten Feld. Jeder Held auf diesem Pfad erleidet Erschöpfung bis zu seiner Ausdauer. Bewege dann diesen Diener und jeden dieser Helden um bis zu 3 Felder.",
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
        id: 'darkremedy', nameEn: 'Dark Remedy', nameDe: "Dunkles Heilmittel",
        cardType: 'Magic', count: 2, xpCost: 1,
        rulesEn: 'Play this card on a monster group during your turn and choose 1 condition. Each monster in that group may discard 1 token corresponding to the chosen condition.',
        rulesDe: "Spiele diese Karte in deinem Zug auf eine Monstergruppe und wähle 1 Zustand. Jedes Monster dieser Gruppe darf 1 Marker dieses Zustands abwerfen.",
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
        id: 'placebo', nameEn: 'Placebo', nameDe: "Placebo",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: "Play this card at the start of any turn and choose a faceup Search card in a hero's play area. Flip that Search card facedown.",
        rulesDe: "Spiele diese Karte zu Beginn des Zuges eines beliebigen Spielers. Wähle eine offen liegende Suchkarte vor einem Heldenspieler. Drehe diese Karte auf die Rückseite.",
        imageUrl: `${OD}/shadow-of-nerekhall/universal/sn-placebo.png`,
      },
      {
        id: 'refresh', nameEn: 'Refresh', nameDe: "Neuanfang",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card during your turn to shuffle the Overlord discard pile into the Overlord deck. Then, draw 1 Overlord card.',
        rulesDe: "Spiele diese Karte in deinem Zug, um deinen Ablagestapel wieder ins Overlorddeck zu mischen. Ziehe dann 1 Overlordkarte.",
        imageUrl: `${OD}/shadow-of-nerekhall/universal/sn-refresh.png`,
      },
      {
        id: 'solidarity', nameEn: 'Solidarity', nameDe: "Solidarität",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card at the start of your turn and choose 1 Hero sheet. Until the start of your next turn, each time any hero tests an attribute, he must use the attribute value on that Hero sheet.',
        rulesDe: "Spiele diese Karte zu Beginn deines Zuges und wähle einen Heldenbogen. Bis zum Beginn deines nächsten Zuges muss jeder Held bei Attributsproben die Werte dieses Helden benutzen.",
        imageUrl: `${OD}/shadow-of-nerekhall/universal/sn-solidarity.png`,
      },
      {
        id: 'upgrade', nameEn: 'Upgrade', nameDe: "Alternative",
        cardType: 'Event', count: 1, xpCost: 1,
        rulesEn: 'Play this card during your turn and discard any 1 card from your hand. Search your Overlord deck for 1 card of your choice with the same trait (Event, Magic, Trap) as the discarded card. Reveal the chosen card and place it in your hand. Then shuffle your Overlord deck.',
        rulesDe: "Spiele diese Karte in deinem Zug und wirf 1 Handkarte ab. Suche 1 Karte aus dem Overlorddeck, die dasselbe Merkmal (Ereignis, Magie, Falle) wie die abgeworfene hat. Zeige die Karte den Helden und nimm sie auf die Hand. Mische danach das Overlorddeck.",
        imageUrl: `${OD}/shadow-of-nerekhall/universal/sn-upgrade.png`,
      },
      {
        id: 'diversemeans', nameEn: 'Diverse Means', nameDe: "Vielseitigkeit",
        cardType: 'Event', count: 1, xpCost: 2,
        rulesEn: 'Play this card when a monster is attacked, after dice are rolled. Reveal any number of Overlord cards from your hand. That monster recovers 1 Heart and adds 1 Shield to his defense results for each non-Basic Overlord card you reveal.',
        rulesDe: "Spiele diese Karte wenn ein Monster angegriffen wurde aber nach allen Würfelwürfen. Zeige den Helden beliebig viele Overlordkarten auf deiner Hand. Pro Nicht-Arsenal-Karte, die du zeigst, gewinnt das Monster 1 Herz zurück und erhält +1 Schild.",
        imageUrl: `${OD}/shadow-of-nerekhall/universal/sn-diverse-means-errata.png`,
      },
    ],
  },

  // ─── Belohnungskarten (über Kampagnen erworben, nicht mit XP kaufbar) ────────

  // Quest-Belohnung – Labyrinth des Verderbens
  {
    id: 'reward-lr',
    nameEn: 'Quest Reward',
    nameDe: 'Quest-Belohnung',
    kind: 'reward',
    expansionId: 'labyrinth-of-ruin',
    cards: [
      {
        id: 'spligsrevenge', nameEn: "Splig's Revenge", nameDe: "Spligs Rache",
        cardType: 'Event', count: 1, xpCost: null,
        rulesEn: 'Return this card to the game box at the start of your turn. Replace a figure with goblin in its name with Splig. Splig cannot wield a relic. At the end of the quest, if Splig was not defeated, regain this card from the game box.',
        rulesDe: "Lege diese Karte zu Beginn deines Zuges zurück in die Schachtel. Ersetze eine Figur im Spiel, die Goblin als Namensbestandteil hat, durch Splig. Splig kann kein Relikt tragen. Wenn Splig am Ende dieses Abenteuers nicht besiegt ist, nimmst du die Karte wieder in dein Deck.",
        imageUrl: `${OD}/labyrinth-of-ruin/quest-reward/lr-spligs-revenge.png`,
      },
      {
        id: 'twinsouls', nameEn: 'Twin Souls', nameDe: "Zwillingsseele",
        cardType: 'Magic', count: 1, xpCost: null,
        rulesEn: 'Play this card when activating Lord Merick Farrow. Immediately remove Lord Merick Farrow from the map and replace him with Sir Alric Farrow. Sir Alric Farrow cannon wield a relic.',
        rulesDe: "Spiele diese Karte, wenn du Lord Merick Farrow aktivierst. Nimm Merick sofort vom Spielplan und ersetze ihn durch Sir Alric Farrow, den du an dessen Stelle sofort aktivierst. Sir Alric Farrow kann kein Relikt tragen.",
        imageUrl: `${OD}/labyrinth-of-ruin/quest-reward/lr-twin-souls.png`,
      },
    ],
  },

  // Gerücht-Belohnung – Höhle des Lindwurms
  {
    id: 'reward-lw',
    nameEn: 'Rumor Reward',
    nameDe: 'Gerücht-Belohnung',
    kind: 'reward',
    expansionId: 'lair-of-the-wyrm',
    cards: [
      {
        id: 'thewyrmqueensfavor', nameEn: "The Wyrm Queen's Favor", nameDe: "Gunst der Lindwurmkönigin",
        cardType: 'Special', count: 1, xpCost: null,
        rulesEn: 'Play this card at the start of your turn. Each hero tests Awareness. If all heroes pass, shuffle this card back into your deck. If a hero fails, choose 1 hero that failed his test and place 1 master hybrid sentinel within 3 spaces of that hero, respecting group limits. You may play this card even when hybrid sentinels are not 1 of your monster groups.',
        rulesDe: "Spiele diese Karte zu Beginn deines Zuges. Jeder Held legt eine Gespür-Probe ab. Wenn alle Proben gelingen, mischst du diese Karte wieder ins Overlorddeck. Wenn nicht, wählst du 1 Helden, dessen Probe misslungen ist, und stellst einen Elite-Halbdrachenkrieger auf ein leeres Feld innerhalb von 3 Feldern zu diesem Helden (Gruppengröße einhalten). Du kannst diese Karte spielen, auch wenn Halbdrachenkrieger nicht zu deinen Monstergruppen gehören.",
        imageUrl: `${OD}/lair-of-the-wyrm/rumor-reward/lw-the-wyrm-queens-favor.png`,
      },
    ],
  },

  // Overlord-Belohnung – Bündnisse der Wildnis
  {
    id: 'reward-bw',
    nameEn: 'Overlord Reward',
    nameDe: 'Overlord-Belohnung',
    kind: 'reward',
    expansionId: 'bonds-of-the-wild',
    cards: [
      {
        id: 'hunkofjunk', nameEn: 'Hunk of Junk', nameDe: "Schrotthaufen",
        cardType: 'Trap', count: 1, xpCost: null,
        rulesEn: 'Play this card when a hero uses a Potion or Item Search card, before its effect is resolved. That hero tests Knowledge. If he passes, draw 1 Overlord card. If he fails, flip that Search card facedown without resolving its effect.',
        rulesDe: "Spiele diese Karte wenn ein Held eine Trank- oder Gegenstand-Suchkarte verwendet, bevor ihr Effekt abgehandelt wird. Dieser Held legt eine Wissen-Probe ab. Falls er erfolgreich ist, ziehst du 1 Overlordkarte. Falls er nicht erfolgreich ist, drehe die Karte auf die Rückseite ohne ihren Effekt abzuhandeln.",
        imageUrl: `${OD}/bonds-of-the-wild/overlord-reward/bw-hunk-of-junk.png`,
      },
    ],
  },

  // Overlord-Belohnung – Krone des Schicksals
  {
    id: 'reward-cd',
    nameEn: 'Overlord Reward',
    nameDe: 'Overlord-Belohnung',
    kind: 'reward',
    expansionId: 'crown-of-destiny',
    cards: [
      {
        id: 'firegems', nameEn: 'Fire Gems', nameDe: "Feuerkristalle",
        cardType: 'Trap', count: 1, xpCost: null,
        rulesEn: 'Play this card when a hero enters an empty space. He tests Awareness. If he fails, roll 1 red power die. That hero and each figure adjacent to him suffers Hearts equal to the Hearts rolled.',
        rulesDe: "Spiele diese Karte, sobald ein Held ein leeres Feld betritt. Er legt eine Gespür-Probe ab. Wenn sie misslingt, wirf einen roten Machtwürfel. Der Held und jede Figur auf seinen Nachbarfeldern erleiden die gewürfelten Herz.",
        imageUrl: `${OD}/crown-of-destiny/overlord-reward/cd-fire-gems.png`,
      },
    ],
  },

  // Overlord-Belohnung – Kreuzzug der Vergessenen
  {
    id: 'reward-cf',
    nameEn: 'Overlord Reward',
    nameDe: 'Overlord-Belohnung',
    kind: 'reward',
    expansionId: 'crusade-of-the-forgotten',
    cards: [
      {
        id: 'forgottensorcery', nameEn: 'Forgotten Sorcery', nameDe: "Vergessene Hexerei",
        cardType: 'Magic', count: 1, xpCost: null,
        rulesEn: 'Play this card when you activate a monster group with the Ranged attack type. Until the end of the round, each monster in that group gains: Sorcery 2: After making an attack roll, this monster may convert up to 2 range to Hearts, or up to 2 Hearts to range.',
        rulesDe: "Spiele diese Karte, sobald du eine Monstergruppe mit dem Angriffstyp Fernkampf aktivierst. Bis zum Ende dieser Runde hat jedes Monster dieser Gruppe: Hexerei 2: Nach seinem Angriffswurf kann dieses Monster bis zu 2 Punkte Reichweite in Herz umwandeln oder bis zu 2 Herz in Reichweite.",
        imageUrl: `${OD}/crusade-of-the-forgotten/overlord-reward/cf-forgotten-sorcery.png`,
      },
    ],
  },

  // Overlord-Belohnung – Wächter von Deephall
  {
    id: 'reward-gd',
    nameEn: 'Overlord Reward',
    nameDe: 'Overlord-Belohnung',
    kind: 'reward',
    expansionId: 'guardians-of-deephall',
    cards: [
      {
        id: 'powerinnumbers', nameEn: 'Power in Numbers', nameDe: "Erdrückende Überzahl",
        cardType: 'Event', count: 1, xpCost: null,
        rulesEn: 'Play this card during your turn and choose a map tile. If there are more monsters on that map tile than heroes, each hero on that tile suffers 1 Heart and 2 Fatigue, and each monster on that tile recovers 2 Hearts.',
        rulesDe: "Spiele diese Karte während deines eigenen Zuges und wähle ein Spielplanteil. Falls mehr Monster als Helden auf diesem Spielplanteil sind, erleidet jeder Held auf diesem Teil 1 Herz und 2 Erschöpfung und jedes Monster auf diesem Teil gewinnt 2 Herz zurück.",
        imageUrl: `${OD}/guardians-of-deephall/overlord-reward/gd-power-in-numbers.png`,
      },
    ],
  },

  // Overlord-Belohnung – Schloss Rabenfels
  {
    id: 'reward-mr',
    nameEn: 'Overlord Reward',
    nameDe: 'Overlord-Belohnung',
    kind: 'reward',
    expansionId: 'manor-of-ravens',
    cards: [
      {
        id: 'downandout', nameEn: 'Down and Out', nameDe: "Völlig am Boden",
        cardType: 'Event', count: 1, xpCost: null,
        rulesEn: "Play this card when a hero performs a revive action, before dice are rolled. That hero or the knocked-out hero immediately tests Might, the heroes' choice. If the chosen hero fails, the knocked-out hero does not recover any Hearts and remains knocked-out. If the chosen hero passes, draw 1 Overlord card.",
        rulesDe: "Spiele diese Karte, bevor die Würfel für eine Aktion „Aufhelfen“ eines Helden geworfen werden. Dieser Held oder der niedergestreckte Held legt eine Stärke-Probe ab (nach Wahl der Helden). Wenn die Probe misslingt, gewinnt der niedergestreckte Held keine Herz zurück und bleibt niedergestreckt. Wenn sie gelingt, ziehst du 1 Overlordkarte.",
        imageUrl: `${OD}/manor-of-ravens/overlord-reward/mr-down-and-out.png`,
      },
      {
        id: 'endlesssupply', nameEn: 'Endless Supply', nameDe: "Endlose Vorräte",
        cardType: 'Event', count: 1, xpCost: null,
        rulesEn: 'Play this card at the start of your turn. If you started this quest with 20 or more cards in your Overlord deck, draw 4 Overlord cards.',
        rulesDe: "Spiele diese Karte zu Beginn deines Zuges. Wenn du zu Beginn dieses Abenteuers mindestens 20 Karten in deinem Deck hattest, ziehst du 4 Overlordkarten.",
        imageUrl: `${OD}/manor-of-ravens/overlord-reward/mr-endless-supply.png`,
      },
      {
        id: 'unbroken', nameEn: 'Unbroken', nameDe: "Ungebrochen",
        cardType: 'Event', count: 1, xpCost: null,
        rulesEn: 'Play this card on 1 monster at the end of your turn. Until the start of your next turn, each time that monster suffers 3 or more Hearts, it suffers 2 Hearts instead.',
        rulesDe: "Spiele diese Karte am Ende deines Zuges auf 1 Monster. Bis zum Beginn deines nächsten Zuges erleidet das Monster jedes Mal, wenn es 3 oder mehr Herz erleiden würde, stattdessen 2 Herz.",
        imageUrl: `${OD}/manor-of-ravens/overlord-reward/mr-unbroken.png`,
      },
    ],
  },

  // Overlord-Belohnung – Eid des Ausgestoßenen
  {
    id: 'reward-oo',
    nameEn: 'Overlord Reward',
    nameDe: 'Overlord-Belohnung',
    kind: 'reward',
    expansionId: 'oath-of-the-outcast',
    cards: [
      {
        id: 'unseenwings', nameEn: 'Unseen Wings', nameDe: "Unsichtbare Schwingen",
        cardType: 'Event', count: 1, xpCost: null,
        rulesEn: 'Play this card during your turn and choose 1 monster group. Move up to 3 monsters in that group up to 3 spaces.',
        rulesDe: "Spiele diese Karte in deinem Zug, um 1 Monstergruppe zu wählen. Bewege bis zu 3 Monster dieser Gruppe um je bis zu 3 Felder.",
        imageUrl: `${OD}/oath-of-the-outcast/overlord-reward/oo-unseen-wings.png`,
      },
    ],
  },

  // Overlord-Belohnung – Splitter der Ewigen Dunkelheit
  {
    id: 'reward-se',
    nameEn: 'Overlord Reward',
    nameDe: 'Overlord-Belohnung',
    kind: 'reward',
    expansionId: 'shards-of-everdark',
    cards: [
      {
        id: 'mockery', nameEn: 'Mockery', nameDe: "Spott",
        cardType: 'Event', count: 1, xpCost: null,
        rulesEn: "Play this card when a hero fails a Willpower test. Place this card in that hero's play area. Each time that hero tests any attribute, he rolls 1 additional gray die. If this card is in a hero's play area at the end of an encounter, the overlord may either discard it or return it to his hand.",
        rulesDe: "Spiele diese Karte, wenn einem Helden eine Willenskraft-Probe misslingt. Lege diese Karte dann in den Spielbereich dieses Helden. Jedes Mal wenn dieser Held eine Attributsprobe ablegt, wirft er 1 grauen Würfel zusätzlich. Falls diese Karte zum Ende einer Szene im Spielbereich eines Helden liegt, kann der Overlord sie entweder abwerfen oder wieder auf seine Hand nehmen.",
        imageUrl: `${OD}/shards-of-everdark/overlord-reward/se-mockery.png`,
      },
    ],
  },

  // Overlord-Belohnung – Hüter des Geheimnisses
  {
    id: 'reward-ss',
    nameEn: 'Overlord Reward',
    nameDe: 'Overlord-Belohnung',
    kind: 'reward',
    expansionId: 'stewards-of-the-secret',
    cards: [
      {
        id: 'splice', nameEn: 'Splice', nameDe: "Spleissen",
        cardType: 'Magic', count: 1, xpCost: null,
        rulesEn: 'Play this card on 1 monster group during your turn and keep it in your play area. Each time a monster in this group performs an attack, that attack gains: Surge: +2 Hearts and a monster within 3 spaces of this monster suffers 2 Hearts.',
        rulesDe: "Spiele diese Karte während deines Zuges auf 1 Monstergruppe und behalte sie in deinem Spielbereich. Jedes Mal wenn ein Monster dieser Gruppe einen Angriff ausführt, erhält es: Schub: +2 Herz und ein Monster innerhalb von 3 Feldern Entfernung zu diesem Monster erleidet 2 Herz.",
        imageUrl: `${OD}/stewards-of-the-secret/overlord-reward/ss-splice.png`,
      },
    ],
  },

  // Overlord-Belohnung – Die Trollsümpfe
  {
    id: 'reward-tf',
    nameEn: 'Overlord Reward',
    nameDe: 'Overlord-Belohnung',
    kind: 'reward',
    expansionId: 'the-trollfens',
    cards: [
      {
        id: 'offertoryaffliction', nameEn: 'Offertory Affliction', nameDe: "Wandelndes Gebrechen",
        cardType: 'Event', count: 1, xpCost: null,
        rulesEn: 'Play this card when activating a monster with a condition token during your turn. Choose a hero adjacent to that monster. Discard the condition token from the monster, and the chosen hero gains the corresponding Condition card.',
        rulesDe: "Spiele diese Karte, wenn du in deinem Zug ein Monster aktivierst, das einen Zustandsmarker hat. Wähle einen benachbarten Helden. Wirf den Zustandsmarker von dem Monster ab und gib dem Helden die entsprechende Zustandskarte.",
        imageUrl: `${OD}/the-trollfens/overlord-reward/tf-offertory-affliction.png`,
      },
      {
        id: 'secretsofflesh', nameEn: 'Secrets of Flesh', nameDe: "Geheimnis des Fleisches",
        cardType: 'Magic', count: 1, xpCost: null,
        rulesEn: 'Play this card at the start of your turn and roll 1 red power die. Each of your monsters recovers Hearts equal to the Hearts rolled.',
        rulesDe: "Spiele diese Karte zu Beginn deines Zuges und wirf 1 roten Machtwürfel. Jedes Monster gewinnt die gewürfelten Herz zurück.",
        imageUrl: `${OD}/the-trollfens/overlord-reward/tf-secrets-of-flesh.png`,
      },
      {
        id: 'toxicreprisal', nameEn: 'Toxic Reprisal', nameDe: "Toxische Vergeltung",
        cardType: 'Trap', count: 1, xpCost: null,
        rulesEn: 'Play this card when a monster is defeated. A hero of your choice within 3 spaces of that monster is Diseased and Weakened.',
        rulesDe: "Spiele diese Karte, wenn ein Monster besiegt wurde. Ein Held deiner Wahl innerhalb von 3 Feldern zu diesem Monster erkrankt und wird geschwächt.",
        imageUrl: `${OD}/the-trollfens/overlord-reward/tf-toxic-reprisal.png`,
      },
    ],
  },

  // Overlord-Belohnung – Vertrag der Champions
  {
    id: 'reward-tc',
    nameEn: 'Overlord Reward',
    nameDe: 'Overlord-Belohnung',
    kind: 'reward',
    expansionId: 'treaty-of-champions',
    cards: [
      {
        id: 'hagshunger', nameEn: "Hag's Hunger", nameDe: "Hexenhunger",
        cardType: 'Event', count: 1, xpCost: null,
        rulesEn: 'Play this card when a hero is defeated. Each hero within 3 spaces of that hero suffers 2 Fatigue.',
        rulesDe: "Spiele diese Karte wenn ein Held besiegt wird. Jeder Held innerhalb von 3 Feldern Entfernung zu diesem Helden erleidet 2 Erschöpfung.",
        imageUrl: `${OD}/treaty-of-champions/overlord-reward/tc-hags-hunger.png`,
      },
    ],
  },

  // Overlord-Belohnung – Visionen der Dämmerung
  {
    id: 'reward-vd',
    nameEn: 'Overlord Reward',
    nameDe: 'Overlord-Belohnung',
    kind: 'reward',
    expansionId: 'visions-of-dawn',
    cards: [
      {
        id: 'hardknocks', nameEn: 'Hard Knocks', nameDe: "Harte Schläge",
        cardType: 'Event', count: 1, xpCost: null,
        rulesEn: 'Play this card when a monster attacks a hero, after rolling dice. This attack gains: Surge: Remove the target from the map, then place him on any empty space within 3 spaces of his original space. He counts as entering that space and is Stunned.',
        rulesDe: "Spiele diese Karte, sobald ein Monster einen Helden angreift und zwar nach dem Würfelwurf. Dieser Angriff erhält: Schub: Nimm das Ziel vom Spielplan und stelle es dann auf ein leeres Feld innerhalb von 3 Feldern seines ursprünglichen Feldes. Das Ziel betritt dieses Feld und ist betäubt.",
        imageUrl: `${OD}/visions-of-dawn/overlord-reward/vd-hard-knocks.png`,
      },
    ],
  },
]
