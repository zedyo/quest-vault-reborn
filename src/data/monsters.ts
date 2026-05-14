import type { Monster } from '../types/game'

export const MONSTERS: Monster[] = [
  // Grundspiel
  { id: 'barghest', nameDe: 'Barghest', nameEn: 'Barghest', expansionId: 'base' },
  { id: 'cave-spider', nameDe: 'Höhlenspinne', nameEn: 'Cave Spider', expansionId: 'base' },
  { id: 'elemental', nameDe: 'Elementar', nameEn: 'Elemental', expansionId: 'base' },
  { id: 'ettin', nameDe: 'Ettin', nameEn: 'Ettin', expansionId: 'base' },
  { id: 'flesh-moulder', nameDe: 'Fleischformer', nameEn: 'Flesh Moulder', expansionId: 'base' },
  { id: 'goblin-archer', nameDe: 'Goblin-Bogenschütze', nameEn: 'Goblin Archer', expansionId: 'base' },
  { id: 'merriod', nameDe: 'Merriod', nameEn: 'Merriod', expansionId: 'base' },
  { id: 'shadow-dragon', nameDe: 'Schattendrache', nameEn: 'Shadow Dragon', expansionId: 'base' },
  { id: 'zombie', nameDe: 'Zombie', nameEn: 'Zombie', expansionId: 'base' },
  // Die Höhle des Lindwurms
  { id: 'fire-imps', nameDe: 'Feuerimps', nameEn: 'Fire Imps', expansionId: 'lair-of-the-wyrm' },
  { id: 'hybrid-sentinel', nameDe: 'Hybridwächter', nameEn: 'Hybrid Sentinel', expansionId: 'lair-of-the-wyrm' },
  // Labyrinth des Verderbens
  { id: 'arachyura', nameDe: 'Arachyura', nameEn: 'Arachyura', expansionId: 'labyrinth-of-ruin' },
  { id: 'carrion-drake', nameDe: 'Aasdrake', nameEn: 'Carrion Drake', expansionId: 'labyrinth-of-ruin' },
  { id: 'goblin-witcher', nameDe: 'Goblin-Hexer', nameEn: 'Goblin Witcher', expansionId: 'labyrinth-of-ruin' },
  { id: 'volucrix-reaver', nameDe: 'Volucrix-Räuber', nameEn: 'Volucrix Reaver', expansionId: 'labyrinth-of-ruin' },
  // Die Trollsümpfe
  { id: 'harpy', nameDe: 'Harpyie', nameEn: 'Harpy', expansionId: 'the-trollfens' },
  { id: 'plague-worm', nameDe: 'Seuchenwurm', nameEn: 'Plague Worm', expansionId: 'the-trollfens' },
  // Schloss Rabenfels
  { id: 'bandit', nameDe: 'Bandit', nameEn: 'Bandit', expansionId: 'manor-of-ravens' },
  { id: 'wraith', nameDe: 'Wraith', nameEn: 'Wraith', expansionId: 'manor-of-ravens' },
  // Schatten von Nerekhall
  { id: 'changeling', nameDe: 'Wechselbalg', nameEn: 'Changeling', expansionId: 'shadow-of-nerekhall' },
  { id: 'ironbound', nameDe: 'Eisengebundener', nameEn: 'Ironbound', expansionId: 'shadow-of-nerekhall' },
  { id: 'rat-swarm', nameDe: 'Rattenschwarm', nameEn: 'Rat Swarm', expansionId: 'shadow-of-nerekhall' },
  { id: 'ynfernael-hulk', nameDe: 'Ynfernael-Koloss', nameEn: 'Ynfernael Hulk', expansionId: 'shadow-of-nerekhall' },
  // Schwur der Verbannten
  { id: 'bane-spider', nameDe: 'Fluchspinne', nameEn: 'Bane Spider', expansionId: 'oath-of-the-outcast' },
  { id: 'beastman', nameDe: 'Tiermensch', nameEn: 'Beastman', expansionId: 'oath-of-the-outcast' },
  { id: 'razorwing', nameDe: 'Klingenschwinge', nameEn: 'Razorwing', expansionId: 'oath-of-the-outcast' },
  // Krone des Schicksals
  { id: 'chaos-beast', nameDe: 'Chaosbiest', nameEn: 'Chaos Beast', expansionId: 'crown-of-destiny' },
  { id: 'giant', nameDe: 'Riese', nameEn: 'Giant', expansionId: 'crown-of-destiny' },
  { id: 'lava-beetle', nameDe: 'Lavakäfer', nameEn: 'Lava Beetle', expansionId: 'crown-of-destiny' },
  // Kreuzzug der Vergessenen
  { id: 'golem', nameDe: 'Golem', nameEn: 'Golem', expansionId: 'crusade-of-the-forgotten' },
  { id: 'medusa', nameDe: 'Medusa', nameEn: 'Medusa', expansionId: 'crusade-of-the-forgotten' },
  { id: 'sorcerer', nameDe: 'Zauberer', nameEn: 'Sorcerer', expansionId: 'crusade-of-the-forgotten' },
  // Wächter von Deephall
  { id: 'crypt-dragon', nameDe: 'Kryptendrache', nameEn: 'Crypt Dragon', expansionId: 'guardians-of-deephall' },
  { id: 'dark-priest', nameDe: 'Dunkelpriester', nameEn: 'Dark Priest', expansionId: 'guardians-of-deephall' },
  { id: 'wendigo', nameDe: 'Wendigo', nameEn: 'Wendigo', expansionId: 'guardians-of-deephall' },
  // Prophezeiung eines neuen Anfangs
  { id: 'manticore', nameDe: 'Manticore', nameEn: 'Manticore', expansionId: 'visions-of-dawn' },
  { id: 'ogre', nameDe: 'Oger', nameEn: 'Ogre', expansionId: 'visions-of-dawn' },
  { id: 'troll', nameDe: 'Troll', nameEn: 'Troll', expansionId: 'visions-of-dawn' },
  // Erwachen der Wildnis
  { id: 'deep-elf', nameDe: 'Tiefelfe', nameEn: 'Deep Elf', expansionId: 'bonds-of-the-wild' },
  { id: 'hellhound', nameDe: 'Höllenhund', nameEn: 'Hellhound', expansionId: 'bonds-of-the-wild' },
  { id: 'kobold', nameDe: 'Kobold', nameEn: 'Kobold', expansionId: 'bonds-of-the-wild' },
  // Kontrakt der Unbesiegten
  { id: 'crow-hag', nameDe: 'Krähenhexe', nameEn: 'Crow Hag', expansionId: 'treaty-of-champions' },
  { id: 'demon-lord', nameDe: 'Dämonenfürst', nameEn: 'Demon Lord', expansionId: 'treaty-of-champions' },
  { id: 'skeleton-archer', nameDe: 'Skelett-Bogenschütze', nameEn: 'Skeleton Archer', expansionId: 'treaty-of-champions' },
  // Hüter des Geheimnisses
  { id: 'blood-ape', nameDe: 'Blutaffe', nameEn: 'Blood Ape', expansionId: 'stewards-of-the-secret' },
  { id: 'ferrox', nameDe: 'Ferrox', nameEn: 'Ferrox', expansionId: 'stewards-of-the-secret' },
  { id: 'naga', nameDe: 'Naga', nameEn: 'Naga', expansionId: 'stewards-of-the-secret' },
  // Scherben von Everdark
  { id: 'dark-minotaur', nameDe: 'Dunkelminotaurus', nameEn: 'Dark Minotaur', expansionId: 'shards-of-everdark' },
  { id: 'ice-wyrm', nameDe: 'Eiswurm', nameEn: 'Ice Wyrm', expansionId: 'shards-of-everdark' },
  { id: 'shade', nameDe: 'Schatten', nameEn: 'Shade', expansionId: 'shards-of-everdark' },
  // Nebel von Bilehall
  { id: 'bone-horror', nameDe: 'Knochenschrecken', nameEn: 'Bone Horror', expansionId: 'mists-of-bilehall' },
  { id: 'broodwalker', nameDe: 'Brutläufer', nameEn: 'Broodwalker', expansionId: 'mists-of-bilehall' },
  { id: 'reanimate', nameDe: 'Wiederbelebter', nameEn: 'Reanimate', expansionId: 'mists-of-bilehall' },
  // Rostende Ketten
  { id: 'marrow-priest', nameDe: 'Markpriester', nameEn: 'Marrow Priest', expansionId: 'the-chains-that-rust' },
  { id: 'shambling-colossus', nameDe: 'Taumelnder Koloss', nameEn: 'Shambling Colossus', expansionId: 'the-chains-that-rust' },
  { id: 'the-dispossessed', nameDe: 'Die Besitzlosen', nameEn: 'The Dispossessed', expansionId: 'the-chains-that-rust' },
]
