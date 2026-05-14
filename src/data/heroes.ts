import type { Hero } from '../types/game'

export const HEROES: Hero[] = [
  // Grundspiel
  {
    id: 'avric-albright', name: 'Avric Albright', archetype: 'heiler', expansionId: 'base',
    speed: 4, health: 12, stamina: 4, defense: ['gray'],
    heroAbility: 'Jeder Held bis Reichweite 3 (einschließlich dir) erhält: „Schub: 1 Herz zurückgewinnen" bei allen Angriffswürfen.',
    heroicFeat: 'Aktion: Würfle 2 rote Kraftwürfel. Jeder Held bis Reichweite 3 kann Herzen in Höhe der gewürfelten Herzen zurückgewinnen.',
  },
  {
    id: 'ashrian', name: 'Ashrian', archetype: 'heiler', expansionId: 'base',
    speed: 5, health: 10, stamina: 4, defense: ['gray'],
    heroAbility: 'Wenn ein normales Monster zu Beginn seiner Aktivierung an dich angrenzt, wird es betäubt.',
    heroicFeat: 'Aktion: Wähle ein Monster bis Reichweite 3. Jedes Monster dieser Monstergruppe wird betäubt.',
  },
  {
    id: 'leoric-of-the-book', name: 'Leoric of the Book', archetype: 'magier', expansionId: 'base',
    speed: 4, health: 8, stamina: 5, defense: ['gray'],
    heroAbility: 'Jedes Monster bis Reichweite 3 erhält -1 Herz auf alle Angriffswürfe (Minimum 1).',
    heroicFeat: 'Aktion: Führe einen Angriff mit einer Magie-Waffe durch. Ignoriert Reichweite; trifft alle angrenzenden Figuren. 1 Wurf, jede Figur verteidigt separat.',
  },
  {
    id: 'widow-tarha', name: 'Widow Tarha', archetype: 'magier', expansionId: 'base',
    speed: 4, health: 10, stamina: 4, defense: ['gray'],
    heroAbility: 'Einmal pro Runde nach dem Würfeln für einen Angriff darfst du 1 Angriffs- oder Kraftwürfel neu würfeln. Das neue Ergebnis muss behalten werden.',
    heroicFeat: 'Aktion: Führe einen Angriff gegen 2 verschiedene Monster in Sichtlinie durch. 1 Wurf, jedes Monster verteidigt separat.',
  },
  {
    id: 'jain-fairwood', name: 'Jain Fairwood', archetype: 'spaeher', expansionId: 'base',
    speed: 5, health: 8, stamina: 5, defense: ['gray'],
    heroAbility: 'Wenn du durch einen Angriff Herzen erleidest, darfst du einige oder alle als Erschöpfung erleiden (max. deine Ausdauer).',
    heroicFeat: 'Aktion: Bewege die doppelte Bewegungsweite und führe einen Angriff durch (vor, während oder nach der Bewegung).',
  },
  {
    id: 'tomble-burrowell', name: 'Tomble Burrowell', archetype: 'spaeher', expansionId: 'base',
    speed: 4, health: 8, stamina: 5, defense: ['gray'],
    heroAbility: 'Wenn du angegriffen wirst und an mindestens einem anderen Helden angrenzt, darfst du dessen Verteidigungswürfelpool deinem eigenen hinzufügen.',
    heroicFeat: 'Aktion: Entferne deine Figur und platziere einen Heldenmarker. Zu Beginn deines nächsten Zuges erscheinst du auf einem freien Feld bis Reichweite 4 des Markers.',
  },
  {
    id: 'grisban-the-thirsty', name: 'Grisban the Thirsty', archetype: 'krieger', expansionId: 'base',
    speed: 3, health: 14, stamina: 4, defense: ['gray'],
    heroAbility: 'Jedes Mal, wenn du Erschöpfung durch eine Rastenaktion zurückgewinnst, darfst du auch 1 Zustandskarte von dir ablegen.',
    heroicFeat: 'Verwende während deines Zuges: Führe 1 zusätzliche Angriffsaktion durch (zusätzlich zu den normalen 2 Aktionen).',
  },
  {
    id: 'syndrael', name: 'Syndrael', archetype: 'krieger', expansionId: 'base',
    speed: 4, health: 12, stamina: 4, defense: ['gray'],
    heroAbility: 'Wenn du dich in diesem Zug nicht bewegt hast, gewinne am Ende deines Zuges 2 Erschöpfung zurück.',
    heroicFeat: 'Verwende während deines Zuges: Wähle einen Helden bis Reichweite 3. Du und dieser Held führen sofort je eine Bewegungsaktion durch (zusätzlich zu den normalen 2 Aktionen).',
  },
  // Die Höhle des Lindwurms
  { id: 'high-mage-quellen', name: 'High Mage Quellen', archetype: 'magier', expansionId: 'lair-of-the-wyrm' },
  { id: 'reynhart-the-worthy', name: 'Reynhart the Worthy', archetype: 'krieger', expansionId: 'lair-of-the-wyrm' },
  // Labyrinth des Verderbens
  { id: 'serena', name: 'Serena', archetype: 'heiler', expansionId: 'labyrinth-of-ruin' },
  { id: 'ulma-grimstone', name: 'Ulma Grimstone', archetype: 'heiler', expansionId: 'labyrinth-of-ruin' },
  { id: 'dezra-the-vile', name: 'Dezra the Vile', archetype: 'magier', expansionId: 'labyrinth-of-ruin' },
  { id: 'logan-lashley', name: 'Logan Lashley', archetype: 'spaeher', expansionId: 'labyrinth-of-ruin' },
  { id: 'raythen', name: 'Raythen', archetype: 'spaeher', expansionId: 'labyrinth-of-ruin' },
  { id: 'pathfinder-durik', name: 'Pathfinder Durik', archetype: 'krieger', expansionId: 'labyrinth-of-ruin' },
  // Die Trollsümpfe
  { id: 'augur-grisom', name: 'Augur Grisom', archetype: 'heiler', expansionId: 'the-trollfens' },
  { id: 'roganna-the-shade', name: 'Roganna the Shade', archetype: 'spaeher', expansionId: 'the-trollfens' },
  // Schatten von Nerekhall
  { id: 'rendiel', name: 'Rendiel', archetype: 'heiler', expansionId: 'shadow-of-nerekhall' },
  { id: 'ravaella-lightfoot', name: 'Ravaella Lightfoot', archetype: 'magier', expansionId: 'shadow-of-nerekhall' },
  { id: 'tinashi-the-wanderer', name: 'Tinashi the Wanderer', archetype: 'spaeher', expansionId: 'shadow-of-nerekhall' },
  { id: 'orkell-the-swift', name: 'Orkell the Swift', archetype: 'krieger', expansionId: 'shadow-of-nerekhall' },
  // Schloss Rabenfels
  { id: 'thaiden-mistpeak', name: 'Thaiden Mistpeak', archetype: 'spaeher', expansionId: 'manor-of-ravens' },
  { id: 'alys-raine', name: 'Alys Raine', archetype: 'krieger', expansionId: 'manor-of-ravens' },
  // Schwur der Verbannten
  { id: 'elder-mok', name: 'Elder Mok', archetype: 'heiler', expansionId: 'oath-of-the-outcast' },
  { id: 'shiver', name: 'Shiver', archetype: 'magier', expansionId: 'oath-of-the-outcast' },
  { id: 'laurel-of-bloodwood', name: 'Laurel of Bloodwood', archetype: 'spaeher', expansionId: 'oath-of-the-outcast' },
  { id: 'trenloe-the-strong', name: 'Trenloe the Strong', archetype: 'krieger', expansionId: 'oath-of-the-outcast' },
  // Krone des Schicksals
  { id: 'brother-gherinn', name: 'Brother Gherinn', archetype: 'heiler', expansionId: 'crown-of-destiny' },
  { id: 'jaes-the-exile', name: 'Jaes the Exile', archetype: 'magier', expansionId: 'crown-of-destiny' },
  { id: 'lindel', name: 'Lindel', archetype: 'spaeher', expansionId: 'crown-of-destiny' },
  { id: 'corbin', name: 'Corbin', archetype: 'krieger', expansionId: 'crown-of-destiny' },
  // Kreuzzug der Vergessenen
  { id: 'andira-runehand', name: 'Andira Runehand', archetype: 'heiler', expansionId: 'crusade-of-the-forgotten' },
  { id: 'astarra', name: 'Astarra', archetype: 'magier', expansionId: 'crusade-of-the-forgotten' },
  { id: 'tetherys', name: 'Tetherys', archetype: 'spaeher', expansionId: 'crusade-of-the-forgotten' },
  { id: 'tahlia', name: 'Tahlia', archetype: 'krieger', expansionId: 'crusade-of-the-forgotten' },
  // Wächter von Deephall
  { id: 'sahla', name: 'Sahla', archetype: 'heiler', expansionId: 'guardians-of-deephall' },
  { id: 'silhouette', name: 'Silhouette', archetype: 'spaeher', expansionId: 'guardians-of-deephall' },
  { id: 'lord-hawthorne', name: 'Lord Hawthorne', archetype: 'krieger', expansionId: 'guardians-of-deephall' },
  { id: 'mordrog', name: 'Mordrog', archetype: 'krieger', expansionId: 'guardians-of-deephall' },
  // Prophezeiung eines neuen Anfangs
  { id: 'ispher', name: 'Ispher', archetype: 'heiler', expansionId: 'visions-of-dawn' },
  { id: 'master-thorn', name: 'Master Thorn', archetype: 'magier', expansionId: 'visions-of-dawn' },
  { id: 'nara-the-fang', name: 'Nara the Fang', archetype: 'krieger', expansionId: 'visions-of-dawn' },
  { id: 'sir-valadir', name: 'Sir Valadir', archetype: 'krieger', expansionId: 'visions-of-dawn' },
  // Erwachen der Wildnis
  { id: 'challara', name: 'Challara', archetype: 'magier', expansionId: 'bonds-of-the-wild' },
  { id: 'lyssa', name: 'Lyssa', archetype: 'magier', expansionId: 'bonds-of-the-wild' },
  { id: 'ronan-of-the-wild', name: 'Ronan of the Wild', archetype: 'spaeher', expansionId: 'bonds-of-the-wild' },
  { id: 'vyrah-the-falconer', name: 'Vyrah the Falconer', archetype: 'spaeher', expansionId: 'bonds-of-the-wild' },
  // Kontrakt der Unbesiegten
  { id: 'jonas-the-kind', name: 'Jonas the Kind', archetype: 'heiler', expansionId: 'treaty-of-champions' },
  { id: 'zyla', name: 'Zyla', archetype: 'magier', expansionId: 'treaty-of-champions' },
  { id: 'grey-ker', name: 'Grey Ker', archetype: 'spaeher', expansionId: 'treaty-of-champions' },
  { id: 'krutzbeck', name: 'Krutzbeck', archetype: 'krieger', expansionId: 'treaty-of-champions' },
  // Hüter des Geheimnisses
  { id: 'okaluk-and-rakash', name: 'Okaluk and Rakash', archetype: 'heiler', expansionId: 'stewards-of-the-secret' },
  { id: 'seer-kel', name: 'Seer Kel', archetype: 'magier', expansionId: 'stewards-of-the-secret' },
  { id: 'tatianna', name: 'Tatianna', archetype: 'spaeher', expansionId: 'stewards-of-the-secret' },
  { id: 'nanok-of-the-blade', name: 'Nanok of the Blade', archetype: 'krieger', expansionId: 'stewards-of-the-secret' },
  // Scherben von Everdark
  { id: 'arvel-worldwalker', name: 'Arvel Worldwalker', archetype: 'spaeher', expansionId: 'shards-of-everdark' },
  { id: 'karnon', name: 'Karnon', archetype: 'krieger', expansionId: 'shards-of-everdark' },
  { id: 'one-fist', name: 'One Fist', archetype: 'krieger', expansionId: 'shards-of-everdark' },
  { id: 'steelhorns', name: 'Steelhorns', archetype: 'krieger', expansionId: 'shards-of-everdark' },
]

export const ARCHETYPE_LABELS: Record<Hero['archetype'], string> = {
  krieger: 'Krieger',
  heiler: 'Heiler',
  magier: 'Magier',
  spaeher: 'Späher',
}

export const ARCHETYPE_ICONS: Record<Hero['archetype'], string> = {
  krieger: '⚔️',
  heiler: '✚',
  magier: '✦',
  spaeher: '🏹',
}

export const ARCHETYPE_COLORS: Record<Hero['archetype'], string> = {
  krieger: 'text-red-400 bg-red-950 border-red-800',
  heiler: 'text-green-400 bg-green-950 border-green-800',
  magier: 'text-blue-400 bg-blue-950 border-blue-800',
  spaeher: 'text-yellow-400 bg-yellow-950 border-yellow-800',
}
