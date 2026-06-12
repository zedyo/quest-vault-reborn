import type { Monster } from '../types/game'

// Quelle der Werte: offizielle Kartenscans (Vorder- und Rückseite, Akt 1 + Akt 2)
// aus dem any2cards/d2e-Datensatz. Alle Werte wurden gegen die Karten validiert.
// Fähigkeitstypen:
//   surges    = Energie  – durch Blitz/Schub (⚡) ausgelöst
//   abilities = Fähigkeiten – passiv, kein Auslöser
//   actions   = Aktion   – durch den gebogenen Pfeil (↻) ausgelöst
// Elite-/Master-exklusive Fähigkeiten stehen nur beim master/act2Master.
// act2Normal/act2Master enthalten nur Zahlenwerte, wenn Fähigkeitstext mit
// Akt 1 identisch ist (wird via getActStats geerbt); abweichender Text/Wert
// wird dort explizit angegeben.

export const MONSTERS: Monster[] = [
  // ─── Grundspiel ──────────────────────────────────────────────────────────
  {
    id: 'barghest',
    nameDe: 'Barghest',
    nameEn: 'Barghest',
    expansionId: 'base',
    traits: ['Wildnis', 'Dunkel'],
    normal: {
      speed: 4, health: 4, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['+1 Herz'],
      actions: ['Geheul: Alle Helden innerhalb von 3 Feldern zu diesem Monster legen eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 1 Erschöpfung.'],
    },
    master: {
      speed: 4, health: 6, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['+2 Herzen'],
      abilities: ['Schemen: Wird dieses Monster von einem nicht benachbarten Helden angegriffen, darf es 1 zusätzlichen braunen Würfel zu seinem Verteidigungswurf hinzufügen.'],
      actions: ['Geheul: Alle Helden innerhalb von 3 Feldern zu diesem Monster legen eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 1 Erschöpfung.'],
    },
    act2Normal: { speed: 4, health: 6, defense: ['gray'], attack: ['blue', 'red'], surges: ['+2 Herzen'] },
    act2Master: { speed: 4, health: 8, defense: ['gray'], attack: ['blue', 'red', 'yellow'], surges: ['+2 Herzen'] },
  },
  {
    id: 'cave-spider',
    nameDe: 'Höhlenspinne',
    nameEn: 'Cave Spider',
    expansionId: 'base',
    traits: ['Wildnis', 'Höhle'],
    normal: {
      speed: 4, health: 3, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.', '+1 Herz'],
    },
    master: {
      speed: 4, health: 5, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.', '+2 Herzen'],
      abilities: ['Netz: Jeder zu diesem Monster benachbarte Held muss 1 Erschöpfung erleiden, um sein Feld zu verlassen – zusätzlich zu jeder anderen Erschöpfung für die Bewegung.'],
    },
    act2Normal: { speed: 4, health: 5, defense: ['gray'], attack: ['blue', 'yellow', 'yellow'], surges: ['Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.', '+2 Herzen'] },
    act2Master: { speed: 4, health: 7, defense: ['gray'], attack: ['blue', 'yellow', 'yellow'], surges: ['Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.', '+2 Herzen', '+1 Herz'] },
  },
  {
    id: 'elemental',
    nameDe: 'Elementar',
    nameEn: 'Elemental',
    expansionId: 'base',
    traits: ['Kalt', 'Heiß'],
    normal: {
      speed: 4, health: 4, defense: ['gray'], attack: ['blue', 'red'],
      actions: [
        'Feuer: Führe einen Angriff aus, der alle zu diesem Monster benachbarten Figuren als Ziel hat. Jede Figur würfelt ihre Verteidigung separat.',
        'Erde: Jeder zu diesem Monster benachbarte Held legt eine Stärke-Probe ab. Jeder Held, dessen Probe misslingt, ist bewegungsunfähig.',
        'Wasser: Jeder zu diesem Monster benachbarte Held legt eine Gespür-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 2 Erschöpfung.',
        'Luft: Bis zum Beginn deines nächsten Zuges kann dieses Monster nur von Angriffen benachbarter Figuren betroffen werden.',
      ],
    },
    master: {
      speed: 4, health: 6, defense: ['gray'], attack: ['blue', 'red'],
      actions: [
        'Feuer: Führe einen Angriff aus, der alle zu diesem Monster benachbarten Figuren als Ziel hat. Jede Figur würfelt ihre Verteidigung separat.',
        'Erde: Jeder zu diesem Monster benachbarte Held legt eine Stärke-Probe ab. Jeder Held, dessen Probe misslingt, ist bewegungsunfähig.',
        'Wasser: Jeder zu diesem Monster benachbarte Held legt eine Gespür-Probe ab. Jeder Held, dessen Probe misslingt, erleidet 2 Erschöpfung.',
        'Luft: Bis zum Beginn deines nächsten Zuges kann dieses Monster nur von Angriffen benachbarter Figuren betroffen werden.',
      ],
    },
    act2Normal: { speed: 4, health: 8, defense: ['gray', 'black'], attack: ['blue', 'red', 'yellow'] },
    act2Master: { speed: 4, health: 10, defense: ['gray', 'black'], attack: ['blue', 'red', 'yellow'] },
  },
  {
    id: 'ettin',
    nameDe: 'Ettin',
    nameEn: 'Ettin',
    expansionId: 'base',
    traits: ['Gebirge', 'Höhle'],
    normal: {
      speed: 3, health: 5, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['+2 Herzen'],
      abilities: ['Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.'],
    },
    master: {
      speed: 3, health: 8, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['+3 Herzen'],
      abilities: ['Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.'],
      actions: ['Werfen: Wähle einen zu diesem Monster benachbarten Helden. Dieser Held legt eine Stärke-Probe ab. Misslingt sie, entferne den Helden von der Karte und platziere ihn auf einem beliebigen leeren Feld innerhalb von 3 Feldern seines ursprünglichen Feldes. Er gilt als hätte er dieses Feld betreten und erleidet dann 1 Herz.'],
    },
    act2Normal: { speed: 3, health: 7, defense: ['gray', 'black'], attack: ['blue', 'red', 'red'], surges: ['+1 Herz'] },
    act2Master: { speed: 3, health: 9, defense: ['gray'], attack: ['blue', 'red', 'red'], surges: ['+2 Herzen'] },
  },
  {
    id: 'flesh-moulder',
    nameDe: 'Fleischformer',
    nameEn: 'Flesh Moulder',
    expansionId: 'base',
    traits: ['Verflucht', 'Zivilisiert'],
    normal: {
      speed: 4, health: 4, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Flicken 1: Dieses Monster heilt 1 Herz.'],
    },
    master: {
      speed: 4, health: 5, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Flicken 2: Dieses Monster heilt 2 Herzen.'],
      actions: ['Heilen: Wähle ein Monster innerhalb von 3 Feldern zu diesem Monster und würfle 1 roten Machtwürfel. Das gewählte Monster heilt Herzen in Höhe der gewürfelten Herzen.'],
    },
    act2Normal: { speed: 4, health: 5, defense: ['gray', 'black'], attack: ['blue', 'yellow'], surges: ['Flicken 2: Dieses Monster heilt 2 Herzen.'] },
    act2Master: { speed: 4, health: 7, defense: ['gray'], attack: ['blue', 'yellow', 'yellow'], surges: ['Flicken 3: Dieses Monster heilt 3 Herzen.'] },
  },
  {
    id: 'goblin-archer',
    nameDe: 'Goblin-Bogenschütze',
    nameEn: 'Goblin Archer',
    expansionId: 'base',
    traits: ['Gebäude', 'Höhle'],
    normal: {
      speed: 5, health: 2, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['+1 Reichweite', '+1 Herz'],
      abilities: [
        'Wuseln: Dieses Monster darf sich durch Felder mit Helden bewegen.',
        'Feigling: Dieses Monster darf keine Schübe für Fähigkeiten ausgeben, sofern es nicht innerhalb von 3 Feldern eines Master-Monsters oder Leutnants ist.',
      ],
    },
    master: {
      speed: 5, health: 4, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['+2 Reichweite', '+2 Herzen'],
      abilities: ['Wuseln: Dieses Monster darf sich durch Felder mit Helden bewegen.'],
    },
    act2Normal: { speed: 5, health: 4, defense: ['gray'], attack: ['blue', 'yellow'], surges: ['+2 Reichweite', '+2 Herzen'] },
    act2Master: { speed: 5, health: 6, defense: ['gray'], attack: ['blue', 'yellow', 'yellow'], surges: ['+3 Reichweite', '+2 Herzen'] },
  },
  {
    id: 'merriod',
    nameDe: 'Merriod',
    nameEn: 'Merriod',
    expansionId: 'base',
    traits: ['Wildnis', 'Wasser'],
    normal: {
      speed: 3, health: 5, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['Immobilisieren: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel bewegungsunfähig.', '+1 Herz'],
      abilities: ['Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.'],
    },
    master: {
      speed: 3, health: 7, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['Immobilisieren: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel bewegungsunfähig.', '+2 Herzen'],
      abilities: [
        'Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.',
        'Dreschflegel: Beim Angriff darf dieses Monster 2 verschiedene Helden als Ziel wählen. Es macht 1 Angriffswurf, jeder Held würfelt seine Verteidigung separat.',
      ],
    },
    act2Normal: { speed: 3, health: 7, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'], surges: ['Immobilisieren: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel bewegungsunfähig.', '+2 Herzen'] },
    act2Master: { speed: 3, health: 9, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'], surges: ['Immobilisieren: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel bewegungsunfähig.', '+3 Herzen'] },
  },
  {
    id: 'shadow-dragon',
    nameDe: 'Schattendrache',
    nameEn: 'Shadow Dragon',
    expansionId: 'base',
    traits: ['Dunkel', 'Höhle'],
    normal: {
      speed: 3, health: 6, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: ['+1 Herz'],
      abilities: ['Schatten: Ein zu diesem Monster benachbarter Held, der einen Angriff ansagt, muss 1 Erschöpfung ausgeben, sonst gilt der Angriff als Fehlschlag.'],
    },
    master: {
      speed: 3, health: 9, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: ['+2 Herzen'],
      abilities: ['Schatten: Ein zu diesem Monster benachbarter Held, der einen Angriff ansagt, muss 1 Erschöpfung ausgeben, sonst gilt der Angriff als Fehlschlag.'],
      actions: ['Feueratem: Beginnend mit dem Zielfeld ziehe einen Pfad aus 4 Feldern in eine beliebige Richtung. Alle Figuren auf diesem Pfad sind von diesem Angriff betroffen. Jede Figur würfelt ihre Verteidigung separat.'],
    },
    act2Normal: { speed: 3, health: 8, defense: ['gray', 'black'], attack: ['blue', 'red', 'red'], surges: ['+2 Herzen'] },
    act2Master: { speed: 3, health: 10, defense: ['gray', 'black'], attack: ['blue', 'red', 'red'], surges: ['+3 Herzen'] },
  },
  {
    id: 'zombie',
    nameDe: 'Zombie',
    nameEn: 'Zombie',
    expansionId: 'base',
    traits: ['Verflucht', 'Gebäude'],
    normal: {
      speed: 3, health: 3, defense: ['brown'], attack: ['blue', 'yellow'],
      surges: ['Verseuchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verseucht.', '+1 Herz'],
      abilities: ['Schwerfällig: Dieses Monster darf pro Zug höchstens 1 Bewegungsaktion ausführen.'],
    },
    master: {
      speed: 3, health: 6, defense: ['brown'], attack: ['blue', 'yellow'],
      surges: ['Verseuchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verseucht.', '+1 Herz'],
      abilities: ['Schwerfällig: Dieses Monster darf pro Zug höchstens 1 Bewegungsaktion ausführen.'],
      actions: ['Packen: Wähle einen zu diesem Monster benachbarten Helden. Dieser Held legt eine Stärke-Probe ab. Misslingt sie, ist er bewegungsunfähig.'],
    },
    act2Normal: { speed: 3, health: 5, defense: ['brown'], attack: ['blue', 'yellow'], surges: ['Verseuchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verseucht.', '+2 Herzen'] },
    act2Master: { speed: 3, health: 9, defense: ['brown'], attack: ['blue', 'red', 'yellow'], surges: ['Verseuchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verseucht.', '+2 Herzen'] },
  },
  // ─── Die Höhle des Lindwurms ──────────────────────────────────────────────
  {
    id: 'fire-imps',
    nameDe: 'Feuerimps',
    nameEn: 'Fire Imps',
    expansionId: 'lair-of-the-wyrm',
    traits: ['Heiß', 'Verflucht'],
    normal: {
      speed: 5, health: 2, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Verbrennen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), brennt das Ziel.', '+1 Reichweite'],
      abilities: ['Flammenwesen: Dieses Monster ignoriert alle Effekte von Lava. Beendet es seinen Zug auf einem Lavafeld, heilt es 1 Herz. Außerdem brennt dieses Monster nie.'],
    },
    master: {
      speed: 5, health: 4, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Verbrennen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), brennt das Ziel.', '+1 Herz'],
      abilities: [
        'Flammenwesen: Dieses Monster ignoriert alle Effekte von Lava. Beendet es seinen Zug auf einem Lavafeld, heilt es 1 Herz. Außerdem brennt dieses Monster nie.',
        'Brennbar: Wird dieses Monster besiegt, erleidet jeder zu ihm benachbarte Held 1 Herz.',
      ],
    },
    act2Normal: { speed: 5, health: 4, defense: ['gray'], attack: ['blue', 'yellow'] },
    act2Master: { speed: 5, health: 6, defense: ['gray'], attack: ['blue', 'yellow', 'yellow'] },
  },
  {
    id: 'hybrid-sentinel',
    nameDe: 'Hybridwächter',
    nameEn: 'Hybrid Sentinel',
    expansionId: 'lair-of-the-wyrm',
    traits: ['Gebirge', 'Höhle'],
    normal: {
      speed: 4, health: 5, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['+1 Herz'],
      abilities: [
        'Fliegen: Dieses Monster darf beim Bewegen feindliche Figuren und Geländeeffekte ignorieren. Es muss seine Bewegung regelkonform auf einem leeren Feld beenden.',
        'Schwächejäger: Jeder Angriff dieses Monsters auf einen Helden mit 2 oder weniger Erschöpfung erhält +1 Herz.',
      ],
    },
    master: {
      speed: 4, health: 8, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['+1 Herz'],
      abilities: [
        'Fliegen: Dieses Monster darf beim Bewegen feindliche Figuren und Geländeeffekte ignorieren. Es muss seine Bewegung regelkonform auf einem leeren Feld beenden.',
        'Schwächejäger: Jeder Angriff dieses Monsters auf einen Helden mit 2 oder weniger Erschöpfung erhält +1 Herz.',
      ],
      actions: ['Feueratem: Beginnend mit dem Zielfeld ziehe einen Pfad aus 4 Feldern in eine beliebige Richtung. Alle Figuren auf diesem Pfad sind von diesem Angriff betroffen. Jede Figur würfelt ihre Verteidigung separat.'],
    },
    act2Normal: { speed: 4, health: 6, defense: ['gray', 'black'], attack: ['blue', 'red'], surges: ['+1 Herz', '+1 Herz'] },
    act2Master: { speed: 4, health: 9, defense: ['gray'], attack: ['blue', 'red', 'yellow'], surges: ['+2 Herzen'] },
  },
  // ─── Labyrinth des Verderbens ─────────────────────────────────────────────
  {
    id: 'arachyura',
    nameDe: 'Arachyura',
    nameEn: 'Arachyura',
    expansionId: 'labyrinth-of-ruin',
    traits: ['Wildnis', 'Verflucht'],
    normal: {
      speed: 3, health: 5, defense: ['gray', 'brown'], attack: ['blue', 'red', 'yellow'],
      surges: ['Durchbohren 1: Dieser Angriff ignoriert 1 Schild im Verteidigungswurf.'],
      actions: ['Zangenangriff: Führe einen Angriff auf bis zu 2 zu diesem Monster benachbarte Helden aus. Es wird 1 Angriffswurf gemacht, jeder Held würfelt seine Verteidigung separat. Jedes Ziel, das mindestens 1 Herz erleidet (nach dem Verteidigungswurf), ist bewegungsunfähig.'],
    },
    master: {
      speed: 3, health: 7, defense: ['gray'], attack: ['blue', 'red', 'yellow'],
      surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.'],
      abilities: ['Nachhallender Fluch: Wird dieses Monster besiegt, legt jeder benachbarte Held eine Wissen-Probe ab. Jeder Held, dessen Probe misslingt, ist verflucht.'],
      actions: ['Zangenangriff: Führe einen Angriff auf bis zu 2 zu diesem Monster benachbarte Helden aus. Es wird 1 Angriffswurf gemacht, jeder Held würfelt seine Verteidigung separat. Jedes Ziel, das mindestens 1 Herz erleidet (nach dem Verteidigungswurf), ist bewegungsunfähig.'],
    },
    act2Normal: { speed: 3, health: 7, defense: ['gray'], attack: ['blue', 'red', 'yellow'], surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.'] },
    act2Master: { speed: 3, health: 9, defense: ['gray'], attack: ['blue', 'red', 'yellow'], surges: ['Durchbohren 3: Dieser Angriff ignoriert 3 Schild im Verteidigungswurf.'] },
  },
  {
    id: 'carrion-drake',
    nameDe: 'Aasdrake',
    nameEn: 'Carrion Drake',
    expansionId: 'labyrinth-of-ruin',
    traits: ['Wasser', 'Dunkel'],
    normal: {
      speed: 5, health: 6, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Verseuchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verseucht.', '+1 Herz'],
      abilities: ['Fliegen: Dieses Monster darf beim Bewegen feindliche Figuren und Geländeeffekte ignorieren. Es muss seine Bewegung regelkonform auf einem leeren Feld beenden.'],
    },
    master: {
      speed: 5, health: 8, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Verseuchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verseucht.', '+2 Herzen'],
      abilities: [
        'Fliegen: Dieses Monster darf beim Bewegen feindliche Figuren und Geländeeffekte ignorieren. Es muss seine Bewegung regelkonform auf einem leeren Feld beenden.',
        'Verpestet: Würde ein zu diesem Monster benachbarter Held eine Vergiftet- oder Verseucht-Zustandskarte ablegen, behält er die Karte stattdessen.',
      ],
    },
    act2Normal: { speed: 5, health: 7, defense: ['gray'], attack: ['blue', 'yellow', 'yellow'] },
    act2Master: { speed: 5, health: 10, defense: ['gray'], attack: ['blue', 'yellow', 'yellow'] },
  },
  {
    id: 'goblin-witcher',
    nameDe: 'Goblin-Hexer',
    nameEn: 'Goblin Witcher',
    expansionId: 'labyrinth-of-ruin',
    traits: ['Gebäude', 'Verflucht'],
    normal: {
      speed: 4, health: 3, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Verfluchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verflucht.', '+1 Reichweite'],
    },
    master: {
      speed: 4, health: 5, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Verfluchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verflucht.', '+2 Reichweite'],
      actions: ['Verhexen: Bewege jeden benachbarten verfluchten Helden bis zu 2 Felder in eine Richtung deiner Wahl.'],
    },
    act2Normal: { speed: 4, health: 6, defense: ['gray'], attack: ['blue', 'yellow'], surges: ['Verfluchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verflucht.', '+2 Reichweite', '+1 Herz'] },
    act2Master: { speed: 4, health: 8, defense: ['gray'], attack: ['blue', 'yellow', 'yellow'], surges: ['Verfluchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verflucht.', '+2 Reichweite', '+2 Herzen'] },
  },
  {
    id: 'volucrix-reaver',
    nameDe: 'Volucrix-Räuber',
    nameEn: 'Volucrix Reaver',
    expansionId: 'labyrinth-of-ruin',
    traits: ['Gebäude', 'Gebirge'],
    normal: {
      speed: 4, health: 3, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.'],
      actions: ['Scharmützel: Dieses Monster darf sich 3 Felder bewegen und dann einen Angriff ausführen.'],
    },
    master: {
      speed: 4, health: 5, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.', '+1 Herz'],
      abilities: ['Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.'],
      actions: ['Scharmützel: Dieses Monster darf sich 3 Felder bewegen und dann einen Angriff ausführen.'],
    },
    act2Normal: { speed: 4, health: 4, defense: ['gray', 'brown'], attack: ['blue', 'red'], surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.'] },
    act2Master: { speed: 4, health: 6, defense: ['gray'], attack: ['blue', 'red'], surges: ['Durchbohren 3: Dieser Angriff ignoriert 3 Schild im Verteidigungswurf.', '+2 Herzen'] },
  },
  // ─── Die Trollsümpfe ─────────────────────────────────────────────────────
  {
    id: 'harpy',
    nameDe: 'Harpyie',
    nameEn: 'Harpy',
    expansionId: 'the-trollfens',
    traits: ['Wildnis', 'Gebirge'],
    normal: {
      speed: 5, health: 3, defense: ['gray'], attack: ['blue', 'green'],
      surges: ['Schwarm: Dieses Monster verursacht +1 Herz für jedes andere Monster, das an das Ziel angrenzt.'],
      abilities: ['Fliegen: Dieses Monster darf beim Bewegen feindliche Figuren und Geländeeffekte ignorieren. Es muss seine Bewegung regelkonform auf einem leeren Feld beenden.'],
    },
    master: {
      speed: 5, health: 5, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['Schwarm: Dieses Monster verursacht +1 Herz für jedes andere Monster, das an das Ziel angrenzt.'],
      abilities: ['Fliegen: Dieses Monster darf beim Bewegen feindliche Figuren und Geländeeffekte ignorieren. Es muss seine Bewegung regelkonform auf einem leeren Feld beenden.'],
      actions: ['Schwarmruf: Jedes Minion-Monster dieser Monstergruppe innerhalb von 5 Feldern zu diesem Monster darf sich sofort 2 Felder bewegen.'],
    },
    act2Normal: { speed: 5, health: 4, defense: ['gray'], attack: ['blue', 'yellow', 'green'] },
    act2Master: { speed: 5, health: 6, defense: ['gray'], attack: ['blue', 'red', 'yellow'] },
  },
  {
    id: 'plague-worm',
    nameDe: 'Seuchenwurm',
    nameEn: 'Plague Worm',
    expansionId: 'the-trollfens',
    traits: ['Wasser', 'Höhle'],
    normal: {
      speed: 2, health: 5, defense: ['gray', 'black'], attack: ['blue', 'red'],
      surges: ['Schwächen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel geschwächt.', '+1 Herz'],
      actions: ['Graben: Entferne diese Figur von der Karte und platziere sie auf einem leeren oder unbesetzten Feld bis zu 3 Felder entfernt. Jede Figur auf dem Zielfeld wird auf das nächstgelegene leere Feld deiner Wahl bewegt und erleidet 1 Herz. Höchstens 1× pro Monster pro Zug.'],
    },
    master: {
      speed: 2, health: 7, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['Schwächen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel geschwächt.', '+2 Herzen'],
      abilities: ['Pestilenz: Jeder zu diesem Monster benachbarte Held legt zu Beginn seines Zuges eine Ausdauer-Probe ab. Jeder Held, dessen Probe misslingt, ist verseucht.'],
      actions: ['Graben: Entferne diese Figur von der Karte und platziere sie auf einem leeren oder unbesetzten Feld bis zu 3 Felder entfernt. Jede Figur auf dem Zielfeld wird auf das nächstgelegene leere Feld deiner Wahl bewegt und erleidet 1 Herz. Höchstens 1× pro Monster pro Zug.'],
    },
    act2Normal: { speed: 2, health: 6, defense: ['gray'], attack: ['blue', 'red', 'green'], surges: ['Schwächen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel geschwächt.', '+2 Herzen'] },
    act2Master: { speed: 2, health: 9, defense: ['gray'], attack: ['blue', 'red', 'green'], surges: ['Schwächen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel geschwächt.', '+3 Herzen'] },
  },
  // ─── Schloss Rabenfels ────────────────────────────────────────────────────
  {
    id: 'bandit',
    nameDe: 'Bandit',
    nameEn: 'Bandit',
    expansionId: 'manor-of-ravens',
    traits: ['Wildnis', 'Gebäude'],
    normal: {
      speed: 4, health: 4, defense: ['gray', 'brown'], attack: ['blue', 'red'],
      surges: ['Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.', '+1 Herz'],
      actions: ['Plündern: Führe einen Angriff auf einen benachbarten Helden aus. Wird dieser Held durch den Angriff kampfunfähig, wähle 1 seiner Suchkarten und mische sie in den Suchstapel.'],
    },
    master: {
      speed: 4, health: 5, defense: ['gray', 'gray'], attack: ['blue', 'yellow'],
      surges: ['Schwarzes Gift: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verdammt und vergiftet.', '+1 Herz'],
      actions: ['Plündern: Führe einen Angriff auf einen benachbarten Helden aus. Wird dieser Held durch den Angriff kampfunfähig, wähle 1 seiner Suchkarten und mische sie in den Suchstapel.'],
    },
    act2Normal: { speed: 4, health: 6, defense: ['gray', 'gray'], attack: ['blue', 'red'], surges: ['Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.', '+2 Herzen'] },
    act2Master: { speed: 4, health: 7, defense: ['gray', 'gray'], attack: ['blue', 'yellow', 'yellow'], surges: ['Schwarzes Gift: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verdammt und vergiftet.', '+2 Herzen'] },
  },
  {
    id: 'wraith',
    nameDe: 'Wraith',
    nameEn: 'Wraith',
    expansionId: 'manor-of-ravens',
    traits: ['Zivilisiert', 'Verflucht'],
    normal: {
      speed: 4, health: 5, defense: ['gray', 'gray'], attack: ['blue', 'yellow'],
      surges: ['Verdammen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verdammt.', '+1 Herz'],
      actions: ['Todesschrei: Wähle 1 Helden innerhalb von 3 Feldern zu diesem Monster. Dieser Held legt eine Wissen-Probe ab. Misslingt sie, ist er verdammt oder erleidet 1 Herz (deine Wahl). Höchstens 1× pro Runde.'],
    },
    master: {
      speed: 4, health: 7, defense: ['gray', 'gray'], attack: ['blue', 'yellow'],
      surges: ['Verdammen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verdammt.', '+2 Herzen'],
      abilities: ['Schnitter: Wird ein Held innerhalb von 5 Feldern zu diesem Monster kampfunfähig, darf sich dieses Monster sofort bis zu seiner Bewegung weit bewegen und dann einen Angriff ausführen. Höchstens 1× pro Runde.'],
      actions: ['Todesschrei: Wähle 1 Helden innerhalb von 3 Feldern zu diesem Monster. Dieser Held legt eine Wissen-Probe ab. Misslingt sie, ist er verdammt oder erleidet 1 Herz (deine Wahl). Höchstens 1× pro Runde.'],
    },
    act2Normal: { speed: 5, health: 6, defense: ['gray', 'gray'], attack: ['blue', 'yellow'], surges: ['Verdammen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verdammt.', '+2 Herzen'] },
    act2Master: { speed: 5, health: 8, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'], surges: ['Verdammen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verdammt.', '+3 Herzen'] },
  },
  // ─── Schatten von Nerekhall ───────────────────────────────────────────────
  {
    id: 'changeling',
    nameDe: 'Wechselbalg',
    nameEn: 'Changeling',
    expansionId: 'shadow-of-nerekhall',
    traits: ['Zivilisiert', 'Verflucht'],
    normal: {
      speed: 4, health: 4, defense: ['gray', 'brown'], attack: ['blue', 'red'],
      surges: [
        'Verdorren: Das Ziel erleidet 1 Erschöpfung.',
        'Bluten: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), blutet das Ziel.',
      ],
      actions: ['Flüstern: Jeder zu diesem Monster benachbarte Held legt eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, bewegt sich 1 Feld in eine Richtung deiner Wahl.'],
    },
    master: {
      speed: 4, health: 6, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: [
        'Verdorren: Das Ziel erleidet 1 Erschöpfung.',
        'Bluten: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), blutet das Ziel.',
      ],
      abilities: ['Schauriges Gelächter: Jeder Held innerhalb von 3 Feldern zu diesem Monster wendet -1 auf seine Stärke, sein Wissen, seine Willenskraft und sein Gespür an (Minimum 1).'],
      actions: ['Flüstern: Jeder zu diesem Monster benachbarte Held legt eine Willenskraft-Probe ab. Jeder Held, dessen Probe misslingt, bewegt sich 1 Feld in eine Richtung deiner Wahl.'],
    },
    act2Normal: { speed: 4, health: 6, defense: ['gray', 'black'], attack: ['blue', 'red'] },
    act2Master: { speed: 4, health: 8, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'] },
  },
  {
    id: 'ironbound',
    nameDe: 'Eisengebundener',
    nameEn: 'Ironbound',
    expansionId: 'shadow-of-nerekhall',
    traits: ['Zivilisiert', 'Gebäude'],
    normal: {
      speed: 2, health: 8, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: ['+2 Herzen'],
      abilities: [
        'Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.',
        'Eisenhaut: Dieses Monster ist immun gegen Durchbohren und gegen alle Zustände.',
        'Beschützen: Jedes Mal, wenn eine Figur in der Sichtlinie dieses Monsters einen Angriff auf eine zu diesem Monster benachbarte Figur ausführt, darf dieses Monster vor dem Würfeln 1 Erschöpfung erleiden, um Ziel des Angriffs zu werden. Reichweite und Sichtlinie werden weiterhin zum ursprünglichen Ziel gemessen.',
      ],
    },
    master: {
      speed: 2, health: 10, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: ['+3 Herzen'],
      abilities: [
        'Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.',
        'Eisenhaut: Dieses Monster ist immun gegen Durchbohren und gegen alle Zustände.',
        'Beschützen: Jedes Mal, wenn eine Figur in der Sichtlinie dieses Monsters einen Angriff auf eine zu diesem Monster benachbarte Figur ausführt, darf dieses Monster vor dem Würfeln 1 Erschöpfung erleiden, um Ziel des Angriffs zu werden. Reichweite und Sichtlinie werden weiterhin zum ursprünglichen Ziel gemessen.',
      ],
    },
    act2Normal: { speed: 2, health: 10, defense: ['gray', 'black'], attack: ['blue', 'red', 'green'] },
    act2Master: { speed: 2, health: 12, defense: ['gray', 'gray'], attack: ['blue', 'red', 'green'] },
  },
  {
    id: 'rat-swarm',
    nameDe: 'Rattenschwarm',
    nameEn: 'Rat Swarm',
    expansionId: 'shadow-of-nerekhall',
    traits: ['Gebäude', 'Dunkel'],
    normal: {
      speed: 3, health: 4, defense: ['brown'], attack: ['green'],
      surges: ['Festmahl: Dieser Angriff erhält +X Herz, wobei X der verbleibenden Lebenspunkte dieses Monsters entspricht.'],
      actions: [
        'Verschmelzen: Wähle 1 zu diesem Monster benachbartes Monster derselben Gruppe. Dieses Monster erleidet Herzen in Höhe seiner verbleibenden Lebenspunkte, das gewählte Monster heilt eine entsprechende Anzahl Herzen.',
        'Zerfleischen: Wähle einen zu diesem Monster benachbarten Helden, der eine Stärke-Probe ablegt. Misslingt sie, blutet er.',
      ],
    },
    master: {
      // Kartenscan-validiert 2026-06-12: Master-Verteidigung in Akt 1 ist braun
      // (vorher fälschlich grau); Gefräßig gibt 1 Energie, nicht 1 Herz.
      speed: 3, health: 5, defense: ['brown'], attack: ['green'],
      surges: ['Festmahl: Dieser Angriff erhält +X Herz, wobei X der verbleibenden Lebenspunkte dieses Monsters entspricht.'],
      abilities: ['Gefräßig: Greift dieses Monster einen blutenden Helden an, fügt es seinen Angriffsergebnissen 1 Energie hinzu.'],
      actions: [
        'Verschmelzen: Wähle 1 zu diesem Monster benachbartes Monster derselben Gruppe. Dieses Monster erleidet Herzen in Höhe seiner verbleibenden Lebenspunkte, das gewählte Monster heilt eine entsprechende Anzahl Herzen.',
        'Zerfleischen: Wähle einen zu diesem Monster benachbarten Helden, der eine Stärke-Probe ablegt. Misslingt sie, blutet er.',
      ],
    },
    act2Normal: { speed: 3, health: 5, defense: ['gray'], attack: ['green'] },
    act2Master: { speed: 3, health: 6, defense: ['gray'], attack: ['green'] },
  },
  {
    id: 'ynfernael-hulk',
    nameDe: 'Ynfernael-Koloss',
    nameEn: 'Ynfernael Hulk',
    expansionId: 'shadow-of-nerekhall',
    traits: ['Verflucht', 'Heiß'],
    normal: {
      speed: 3, health: 8, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: ['Rückstoß: Entferne das Ziel von der Karte und platziere es auf einem beliebigen leeren Feld innerhalb von 3 Feldern seines ursprünglichen Feldes. Es gilt als hätte es dieses Feld betreten.'],
      actions: ['Blutrausch: Dieses Monster erleidet 1 Herz und erhält 5 Bewegungspunkte. Höchstens 1× pro Zug.'],
    },
    master: {
      speed: 3, health: 9, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: [
        'Rückstoß: Entferne das Ziel von der Karte und platziere es auf einem beliebigen leeren Feld innerhalb von 3 Feldern seines ursprünglichen Feldes. Es gilt als hätte es dieses Feld betreten.',
        'Ansturm: War dieses Monster zu Beginn seiner Aktivierung nicht zum Ziel benachbart, erhält dieser Angriff +3 Herzen.',
      ],
      actions: ['Blutrausch: Dieses Monster erleidet 1 Herz und erhält 5 Bewegungspunkte. Höchstens 1× pro Zug.'],
    },
    act2Normal: { speed: 3, health: 9, defense: ['gray', 'gray'], attack: ['blue', 'red'] },
    act2Master: { speed: 3, health: 10, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'] },
  },
  // ─── Schwur der Verbannten ────────────────────────────────────────────────
  {
    id: 'bane-spider',
    nameDe: 'Fluchspinne',
    nameEn: 'Bane Spider',
    expansionId: 'oath-of-the-outcast',
    traits: ['Dunkel', 'Höhle'],
    normal: {
      speed: 4, health: 4, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: [
        'Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.',
        'Durchbohren 1: Dieser Angriff ignoriert 1 Schild im Verteidigungswurf.',
      ],
    },
    master: {
      speed: 4, health: 7, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: [
        'Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.',
        'Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.',
      ],
      actions: ['Einspinnen: Jeder zu diesem Monster benachbarte Held legt eine Stärke-Probe ab. Jeder Held, dessen Probe misslingt, ist bewegungsunfähig.'],
    },
    act2Normal: { speed: 4, health: 6, defense: ['gray', 'brown'], attack: ['blue', 'red'], surges: ['Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.', 'Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.'] },
    act2Master: { speed: 4, health: 9, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'], surges: ['Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.', 'Durchbohren 3: Dieser Angriff ignoriert 3 Schild im Verteidigungswurf.'] },
  },
  {
    id: 'beastman',
    nameDe: 'Tiermensch',
    nameEn: 'Beastman',
    expansionId: 'oath-of-the-outcast',
    traits: ['Gebirge', 'Wildnis'],
    normal: {
      speed: 4, health: 4, defense: ['gray', 'gray'], attack: ['blue', 'yellow'],
      abilities: ['Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.'],
    },
    master: {
      speed: 4, health: 5, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      abilities: [
        'Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.',
        'Befehl: Jedes Minion-Monster innerhalb von 3 Feldern zu diesem Monster darf bei jedem seiner Angriffe 1 Würfel neu würfeln. Jedes Minion kann pro Angriff nur von 1 Monster mit Befehl profitieren.',
      ],
    },
    act2Normal: { speed: 5, health: 5, defense: ['gray', 'gray'], attack: ['blue', 'red'] },
    act2Master: { speed: 5, health: 6, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'] },
  },
  {
    id: 'razorwing',
    nameDe: 'Klingenschwinge',
    nameEn: 'Razorwing',
    expansionId: 'oath-of-the-outcast',
    traits: ['Wildnis', 'Höhle'],
    normal: {
      speed: 5, health: 4, defense: ['gray', 'brown'], attack: ['blue', 'yellow'],
      surges: ['+1 Herz'],
      abilities: ['Fliegen: Dieses Monster darf beim Bewegen feindliche Figuren und Geländeeffekte ignorieren. Es muss seine Bewegung regelkonform auf einem leeren Feld beenden.'],
    },
    master: {
      speed: 6, health: 6, defense: ['gray', 'gray'], attack: ['blue', 'yellow'],
      surges: [
        'Betäuben: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel betäubt.',
        '+2 Herzen',
      ],
      abilities: ['Fliegen: Dieses Monster darf beim Bewegen feindliche Figuren und Geländeeffekte ignorieren. Es muss seine Bewegung regelkonform auf einem leeren Feld beenden.'],
    },
    act2Normal: { speed: 5, health: 7, defense: ['gray', 'brown'], attack: ['blue', 'yellow'] },
    act2Master: { speed: 6, health: 9, defense: ['gray', 'gray'], attack: ['blue', 'yellow', 'yellow'] },
  },
  // ─── Krone des Schicksals ─────────────────────────────────────────────────
  {
    id: 'chaos-beast',
    nameDe: 'Chaosbiest',
    nameEn: 'Chaos Beast',
    expansionId: 'crown-of-destiny',
    traits: ['Dunkel', 'Verflucht'],
    normal: {
      speed: 3, health: 5, defense: ['gray'], attack: [],
      surges: ['+1 Herz'],
      abilities: ['Wandeln: Wenn dieses Monster angreift, verwendet es die Würfel einer Figur (Wahl des Overlords) in seiner Sichtlinie. Wird ein Held gewählt, darf der Overlord wählen, welche der ausgerüsteten Waffen des Helden verwendet wird. Das Monster kann keine anderen Fähigkeiten der Figur nutzen.'],
    },
    master: {
      speed: 3, health: 6, defense: ['gray'], attack: [],
      surges: ['Zauberei 2: Nach einem Angriffswurf darf dieses Monster bis zu 2 Reichweite in Herzen oder bis zu 2 Herzen in Reichweite umwandeln.', '+1 Herz'],
      abilities: ['Wandeln: Wenn dieses Monster angreift, verwendet es die Würfel einer Figur (Wahl des Overlords) in seiner Sichtlinie. Wird ein Held gewählt, darf der Overlord wählen, welche der ausgerüsteten Waffen des Helden verwendet wird. Das Monster kann keine anderen Fähigkeiten der Figur nutzen.'],
    },
    act2Normal: { speed: 3, health: 7, defense: ['gray'], attack: [], surges: ['+1 Herz'] },
    act2Master: { speed: 3, health: 10, defense: ['gray'], attack: [], surges: ['Zauberei 3: Nach einem Angriffswurf darf dieses Monster bis zu 3 Reichweite in Herzen oder bis zu 3 Herzen in Reichweite umwandeln.', '+1 Herz'] },
  },
  {
    id: 'giant',
    nameDe: 'Riese',
    nameEn: 'Giant',
    expansionId: 'crown-of-destiny',
    traits: ['Gebirge', 'Wildnis'],
    normal: {
      speed: 3, health: 10, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['Betäuben: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel betäubt.'],
      abilities: ['Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.'],
    },
    master: {
      speed: 3, health: 12, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['Betäuben: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel betäubt.'],
      abilities: ['Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.'],
      actions: ['Rundumschlag: Führe einen Angriff aus. Dieser Angriff betrifft jede andere Figur innerhalb von 2 Feldern und in Sichtlinie dieses Monsters. Jede Figur würfelt ihre Verteidigung separat.'],
    },
    act2Normal: { speed: 3, health: 12, defense: ['gray'], attack: ['blue', 'red', 'yellow'] },
    act2Master: { speed: 3, health: 15, defense: ['gray'], attack: ['blue', 'red', 'yellow'] },
  },
  {
    id: 'lava-beetle',
    nameDe: 'Lavakäfer',
    nameEn: 'Lava Beetle',
    expansionId: 'crown-of-destiny',
    traits: ['Heiß', 'Höhle'],
    normal: {
      speed: 3, health: 3, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['Druckwelle: Dieser Angriff betrifft alle Figuren, die zum Zielfeld benachbart sind.', '+1 Herz'],
    },
    master: {
      speed: 3, health: 5, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['Druckwelle: Dieser Angriff betrifft alle Figuren, die zum Zielfeld benachbart sind.', '+2 Herzen'],
    },
    act2Normal: { speed: 3, health: 5, defense: ['gray'], attack: ['blue', 'red'], surges: ['Druckwelle: Dieser Angriff betrifft alle Figuren, die zum Zielfeld benachbart sind.', '+2 Herzen'] },
    act2Master: { speed: 3, health: 7, defense: ['gray'], attack: ['blue', 'red', 'yellow'], surges: ['Druckwelle: Dieser Angriff betrifft alle Figuren, die zum Zielfeld benachbart sind.', '+2 Herzen', '+1 Herz'] },
  },
  // ─── Kreuzzug der Vergessenen ─────────────────────────────────────────────
  {
    id: 'golem',
    nameDe: 'Golem',
    nameEn: 'Golem',
    expansionId: 'crusade-of-the-forgotten',
    traits: ['Gebirge', 'Gebäude'],
    normal: {
      speed: 3, health: 8, defense: ['gray', 'black'], attack: ['blue', 'red'],
      surges: ['+1 Herz'],
      abilities: ['Eisenhaut: Dieses Monster ist immun gegen Durchbohren und gegen alle Zustände.'],
    },
    master: {
      speed: 3, health: 10, defense: ['gray', 'black'], attack: ['blue', 'red'],
      surges: ['+2 Herzen'],
      abilities: [
        'Eisenhaut: Dieses Monster ist immun gegen Durchbohren und gegen alle Zustände.',
        'Unverrückbar: Dieses Monster darf jeden Spieleffekt ignorieren, der es zur Bewegung zwingen würde.',
      ],
    },
    act2Normal: { speed: 3, health: 10, defense: ['gray', 'black'], attack: ['blue', 'red', 'yellow'] },
    act2Master: { speed: 3, health: 12, defense: ['gray', 'black'], attack: ['blue', 'red', 'yellow'] },
  },
  {
    id: 'medusa',
    nameDe: 'Medusa',
    nameEn: 'Medusa',
    expansionId: 'crusade-of-the-forgotten',
    traits: ['Verflucht', 'Gebäude'],
    normal: {
      speed: 4, health: 4, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: [
        'Immobilisieren: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel bewegungsunfähig.',
        'Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.',
      ],
    },
    master: {
      speed: 4, health: 6, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: [
        'Immobilisieren: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel bewegungsunfähig.',
        'Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.',
        'Betäuben: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel betäubt.',
      ],
    },
    act2Normal: { speed: 4, health: 6, defense: ['gray'], attack: ['blue', 'yellow'] },
    act2Master: { speed: 4, health: 9, defense: ['gray'], attack: ['blue', 'yellow', 'yellow'] },
  },
  {
    id: 'sorcerer',
    nameDe: 'Zauberer',
    nameEn: 'Sorcerer',
    expansionId: 'crusade-of-the-forgotten',
    traits: ['Zivilisiert', 'Gebäude'],
    normal: {
      speed: 4, health: 3, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Zauberei 2: Nach einem Angriffswurf darf dieses Monster bis zu 2 Reichweite in Herzen oder bis zu 2 Herzen in Reichweite umwandeln.'],
      actions: ['Beschwören: Wähle ein Minion-Monster innerhalb von 3 Feldern zu diesem Monster. Platziere dieses Minion-Monster auf einem leeren Feld benachbart zu diesem Monster.'],
    },
    master: {
      speed: 4, health: 5, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Zauberei 3: Nach einem Angriffswurf darf dieses Monster bis zu 3 Reichweite in Herzen oder bis zu 3 Herzen in Reichweite umwandeln.'],
      abilities: ['Todeswunsch: Würde dieses Master-Monster besiegt, darf der Overlord 1 Minion-Monster derselben Gruppe stattdessen besiegen lassen. Tut er das, heilt dieses Master-Monster alle Herzen.'],
      actions: ['Beschwören: Wähle ein Minion-Monster innerhalb von 3 Feldern zu diesem Monster. Platziere dieses Minion-Monster auf einem leeren Feld benachbart zu diesem Monster.'],
    },
    act2Normal: { speed: 4, health: 5, defense: ['gray'], attack: ['blue', 'red'] },
    act2Master: { speed: 4, health: 8, defense: ['gray'], attack: ['blue', 'red'] },
  },
  // ─── Wächter von Deephall ─────────────────────────────────────────────────
  {
    id: 'crypt-dragon',
    nameDe: 'Kryptendrache',
    nameEn: 'Crypt Dragon',
    expansionId: 'guardians-of-deephall',
    traits: ['Dunkel', 'Verflucht'],
    normal: {
      speed: 3, health: 5, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Druckwelle: Dieser Angriff betrifft alle Figuren, die zum Zielfeld benachbart sind.', '+2 Herzen'],
    },
    master: {
      speed: 3, health: 7, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Druckwelle: Dieser Angriff betrifft alle Figuren, die zum Zielfeld benachbart sind.', '+2 Herzen'],
      actions: ['Furcht einflößen: Wähle einen zu diesem Monster benachbarten Helden. Dieser Held legt eine Willenskraft-Probe ab. Misslingt sie, bewegt er sich 2 Felder direkt von diesem Monster weg und ist bewegungsunfähig.'],
    },
    act2Normal: {
      speed: 3, health: 7, defense: ['gray', 'black'], attack: ['blue', 'red', 'yellow'],
      surges: ['Druckwelle: Dieser Angriff betrifft alle Figuren, die zum Zielfeld benachbart sind.', '+2 Herzen'],
      abilities: ['Schreckenerregend: Jeder Held, der zu 1 oder mehr Monstern mit Schreckenerregend benachbart ist, wendet -1 auf seine Willenskraft an (Minimum 1).'],
    },
    act2Master: {
      speed: 3, health: 10, defense: ['gray', 'black'], attack: ['blue', 'red', 'yellow'],
      surges: ['Druckwelle: Dieser Angriff betrifft alle Figuren, die zum Zielfeld benachbart sind.', '+2 Herzen'],
      abilities: ['Schreckenerregend: Jeder Held, der zu 1 oder mehr Monstern mit Schreckenerregend benachbart ist, wendet -1 auf seine Willenskraft an (Minimum 1).'],
      actions: ['Furcht einflößen: Wähle einen zu diesem Monster benachbarten Helden. Dieser Held legt eine Willenskraft-Probe ab. Misslingt sie, bewegt er sich 2 Felder direkt von diesem Monster weg und ist bewegungsunfähig.'],
    },
  },
  {
    id: 'dark-priest',
    nameDe: 'Dunkelpriester',
    nameEn: 'Dark Priest',
    expansionId: 'guardians-of-deephall',
    traits: ['Zivilisiert', 'Verflucht'],
    normal: {
      speed: 4, health: 4, defense: ['brown'], attack: ['blue', 'yellow'],
      surges: ['+1 Herz'],
      actions: ['Dunkles Gebet: Wähle 1 Helden innerhalb von 5 Feldern zu diesem Monster. Dieser Held legt eine Willenskraft-Probe ab. Misslingt sie, erleidet er 1 Erschöpfung.'],
    },
    master: {
      speed: 4, health: 6, defense: ['brown'], attack: ['blue', 'yellow'],
      surges: ['+1 Herz'],
      actions: [
        'Dunkles Gebet: Wähle 1 Helden innerhalb von 5 Feldern zu diesem Monster. Dieser Held legt eine Willenskraft-Probe ab. Misslingt sie, erleidet er 1 Erschöpfung.',
        'Heilen: Wähle ein Monster innerhalb von 3 Feldern zu diesem Monster und würfle 1 roten Machtwürfel. Dieses Monster heilt Herzen in Höhe der gewürfelten Herzen.',
      ],
    },
    act2Normal: { speed: 4, health: 7, defense: ['brown'], attack: ['blue', 'yellow'], surges: ['+2 Herzen'] },
    act2Master: {
      speed: 4, health: 9, defense: ['brown'], attack: ['blue', 'yellow', 'yellow'],
      surges: ['+2 Herzen'],
      abilities: ['Schreckenerregend: Jeder Held, der zu 1 oder mehr Monstern mit Schreckenerregend benachbart ist, wendet -1 auf seine Willenskraft an (Minimum 1).'],
      actions: [
        'Dunkles Gebet: Wähle 1 Helden innerhalb von 5 Feldern zu diesem Monster. Dieser Held legt eine Willenskraft-Probe ab. Misslingt sie, erleidet er 1 Erschöpfung.',
        'Heilen: Wähle ein Monster innerhalb von 3 Feldern zu diesem Monster und würfle 1 roten Machtwürfel. Dieses Monster heilt Herzen in Höhe der gewürfelten Herzen.',
      ],
    },
  },
  {
    id: 'wendigo',
    nameDe: 'Wendigo',
    nameEn: 'Wendigo',
    expansionId: 'guardians-of-deephall',
    traits: ['Kalt', 'Höhle'],
    normal: {
      speed: 4, health: 5, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['+1 Herz'],
      abilities: [
        'Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.',
        'Heimlich: Jeder Angriff auf dieses Monster muss 3 zusätzliche Reichweite über die normalerweise nötige hinaus erzielen, sonst ist der Angriff ein Fehlschlag.',
      ],
    },
    master: {
      speed: 4, health: 7, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['+1 Herz'],
      abilities: [
        'Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.',
        'Heimlich: Jeder Angriff auf dieses Monster muss 3 zusätzliche Reichweite über die normalerweise nötige hinaus erzielen, sonst ist der Angriff ein Fehlschlag.',
        'Eisig: Jedes Mal, wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet er 1 Erschöpfung.',
      ],
    },
    act2Normal: { speed: 4, health: 7, defense: ['gray'], attack: ['blue', 'red'], surges: ['+2 Herzen'] },
    act2Master: { speed: 4, health: 10, defense: ['gray'], attack: ['blue', 'red', 'yellow'], surges: ['+2 Herzen'] },
  },
  // ─── Prophezeiung eines neuen Anfangs ─────────────────────────────────────
  {
    id: 'manticore',
    nameDe: 'Manticore',
    nameEn: 'Manticore',
    expansionId: 'visions-of-dawn',
    traits: ['Wildnis', 'Dunkel'],
    normal: {
      speed: 4, health: 5, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.', '+1 Reichweite'],
      abilities: ['Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.'],
    },
    master: {
      speed: 4, health: 7, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: [
        'Durchbohren 3: Dieser Angriff ignoriert 3 Schild im Verteidigungswurf.',
        'Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.',
        '+1 Reichweite',
      ],
      abilities: ['Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.'],
    },
    act2Normal: { speed: 4, health: 7, defense: ['gray'], attack: ['blue', 'yellow', 'yellow'], surges: ['Durchbohren 3: Dieser Angriff ignoriert 3 Schild im Verteidigungswurf.', '+2 Reichweite'] },
    act2Master: { speed: 4, health: 9, defense: ['gray'], attack: ['blue', 'yellow', 'yellow'], surges: ['Durchbohren 4: Dieser Angriff ignoriert 4 Schild im Verteidigungswurf.', 'Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.', '+2 Reichweite'] },
  },
  {
    id: 'ogre',
    nameDe: 'Oger',
    nameEn: 'Ogre',
    expansionId: 'visions-of-dawn',
    traits: ['Gebäude', 'Höhle'],
    normal: {
      speed: 3, health: 6, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Rückstoß: Entferne das Ziel von der Karte und platziere es auf einem beliebigen leeren Feld innerhalb von 3 Feldern seines ursprünglichen Feldes. Es gilt als hätte es dieses Feld betreten.', '+3 Lebenspunkte'],
    },
    master: {
      speed: 3, health: 9, defense: ['gray'], attack: ['blue', 'red'],
      surges: ['Rückstoß: Entferne das Ziel von der Karte und platziere es auf einem beliebigen leeren Feld innerhalb von 3 Feldern seines ursprünglichen Feldes. Es gilt als hätte es dieses Feld betreten.', '+3 Lebenspunkte'],
      abilities: ['Fleischhändler: Jedes Mal, wenn ein Held, dessen Heldenmarker nicht auf dieser Karte liegt, 1 oder mehr Herzen durch einen Angriff dieses Monsters erleidet, lege 1 seiner Heldenmarker auf diese Karte. Für jeden Heldenmarker auf dieser Karte erhält dieses Monster +2 Lebenspunkte. Wird dieses Monster besiegt, lege alle Heldenmarker von dieser Karte ab.'],
    },
    act2Normal: { speed: 3, health: 9, defense: ['gray'], attack: ['blue', 'yellow'] },
    act2Master: { speed: 3, health: 12, defense: ['gray'], attack: ['blue', 'red', 'yellow'] },
  },
  {
    id: 'troll',
    nameDe: 'Troll',
    nameEn: 'Troll',
    expansionId: 'visions-of-dawn',
    traits: ['Gebirge', 'Höhle'],
    normal: {
      speed: 3, health: 8, defense: ['gray'], attack: ['blue', 'red'],
      abilities: [
        'Rückschwung: Sofort nach einem Angriff einsetzbar: Wähle eine beliebige Anzahl der vom Angriff betroffenen Figuren. Jede dieser Figuren legt eine Stärke-Probe ab. Besteht keine, erleidet jede gewählte Figur 2 Herzen und ist betäubt.',
        'Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.',
      ],
    },
    master: {
      speed: 3, health: 10, defense: ['gray'], attack: ['blue', 'red'],
      abilities: [
        'Rückschwung: Sofort nach einem Angriff einsetzbar: Wähle eine beliebige Anzahl der vom Angriff betroffenen Figuren. Jede dieser Figuren legt eine Stärke-Probe ab. Besteht keine, erleidet jede gewählte Figur 2 Herzen und ist betäubt.',
        'Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.',
      ],
      actions: ['Rundumschlag: Führe einen Angriff aus. Dieser Angriff betrifft jede andere Figur innerhalb von 2 Feldern und in Sichtlinie dieses Monsters. Jede Figur würfelt ihre Verteidigung separat.'],
    },
    act2Normal: { speed: 3, health: 10, defense: ['gray'], attack: ['blue', 'red', 'red'] },
    act2Master: { speed: 3, health: 13, defense: ['gray'], attack: ['blue', 'red', 'red'] },
  },
  // ─── Erwachen der Wildnis ─────────────────────────────────────────────────
  {
    id: 'deep-elf',
    nameDe: 'Tiefelfe',
    nameEn: 'Deep Elf',
    expansionId: 'bonds-of-the-wild',
    traits: ['Dunkel', 'Höhle'],
    normal: {
      speed: 5, health: 7, defense: ['gray', 'brown'], attack: ['blue', 'yellow'],
      surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.', '+1 Lebenspunkt'],
      abilities: ['Heimlich: Jeder Angriff auf dieses Monster muss 3 zusätzliche Reichweite über die normalerweise nötige hinaus erzielen, sonst ist der Angriff ein Fehlschlag.'],
    },
    master: {
      speed: 5, health: 9, defense: ['gray', 'brown'], attack: ['blue', 'yellow'],
      surges: ['Durchbohren 3: Dieser Angriff ignoriert 3 Schild im Verteidigungswurf.', '+1 Lebenspunkt'],
      abilities: [
        'Heimlich: Jeder Angriff auf dieses Monster muss 3 zusätzliche Reichweite über die normalerweise nötige hinaus erzielen, sonst ist der Angriff ein Fehlschlag.',
        'Riposte: Jedes Mal, wenn eine benachbarte Figur einen Angriff abschließt, der dieses Monster betrifft, erleidet diese Figur Herzen in Höhe der Verteidigungsergebnisse; ist der Angriff ein Fehlschlag, erleidet die Figur stattdessen Herzen in Höhe der gewürfelten Schild.',
      ],
    },
    act2Normal: { speed: 5, health: 8, defense: ['gray', 'brown'], attack: ['blue', 'yellow'], surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.', '+2 Lebenspunkte'] },
    act2Master: { speed: 5, health: 10, defense: ['gray', 'brown'], attack: ['blue', 'yellow'], surges: ['Durchbohren 4: Dieser Angriff ignoriert 4 Schild im Verteidigungswurf.', '+2 Lebenspunkte'] },
  },
  {
    id: 'hellhound',
    nameDe: 'Höllenhund',
    nameEn: 'Hellhound',
    expansionId: 'bonds-of-the-wild',
    traits: ['Heiß', 'Verflucht'],
    normal: {
      speed: 4, health: 4, defense: ['gray'], attack: ['blue', 'red'],
      surges: [
        'Jagen: Nachdem dieser Angriff abgeschlossen ist, darfst du das Ziel von der Karte entfernen und auf einem leeren Feld benachbart zu diesem Monster platzieren.',
        'Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.',
      ],
    },
    master: {
      speed: 4, health: 6, defense: ['gray'], attack: ['blue', 'red'],
      surges: [
        'Jagen: Nachdem dieser Angriff abgeschlossen ist, darfst du das Ziel von der Karte entfernen und auf einem leeren Feld benachbart zu diesem Monster platzieren.',
        'Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.',
        'Feueratem: Beginnend mit dem Zielfeld ziehe einen Pfad aus 4 Feldern in eine beliebige Richtung. Alle Figuren auf diesem Pfad sind von diesem Angriff betroffen. Jede Figur würfelt ihre Verteidigung separat.',
      ],
    },
    act2Normal: { speed: 5, health: 6, defense: ['gray'], attack: ['blue', 'red'], surges: ['Jagen: Nachdem dieser Angriff abgeschlossen ist, darfst du das Ziel von der Karte entfernen und auf einem leeren Feld benachbart zu diesem Monster platzieren.', 'Durchbohren 3: Dieser Angriff ignoriert 3 Schild im Verteidigungswurf.'] },
    act2Master: { speed: 5, health: 8, defense: ['gray'], attack: ['blue', 'red', 'yellow'], surges: ['Jagen: Nachdem dieser Angriff abgeschlossen ist, darfst du das Ziel von der Karte entfernen und auf einem leeren Feld benachbart zu diesem Monster platzieren.', 'Durchbohren 3: Dieser Angriff ignoriert 3 Schild im Verteidigungswurf.', 'Feueratem: Beginnend mit dem Zielfeld ziehe einen Pfad aus 4 Feldern in eine beliebige Richtung. Alle Figuren auf diesem Pfad sind von diesem Angriff betroffen. Jede Figur würfelt ihre Verteidigung separat.'] },
  },
  {
    id: 'kobold',
    nameDe: 'Kobold',
    nameEn: 'Kobold',
    expansionId: 'bonds-of-the-wild',
    traits: ['Gebäude', 'Höhle'],
    normal: {
      speed: 3, health: 2, defense: ['brown'], attack: ['blue'],
      surges: ['Schwarm: Dieses Monster verursacht +1 Herz für jedes andere benachbarte Monster zum Ziel.'],
      abilities: [
        'Wuseln: Dieses Monster darf sich durch Felder mit Helden bewegen.',
        'Kleine Anfänge: Platziere dieses Monster nicht beim Aufbau.',
      ],
    },
    master: {
      speed: 3, health: 5, defense: ['brown'], attack: ['blue', 'yellow'],
      surges: ['Schwarm: Dieses Monster verursacht +1 Herz für jedes andere benachbarte Monster zum Ziel.'],
      abilities: [
        'Wuseln: Dieses Monster darf sich durch Felder mit Helden bewegen.',
        'Erschaffer: Platziere zu Beginn jedes Overlord-Zuges 1 Minion-Kobold benachbart zu diesem Monster (unter Beachtung der Gruppengrenzen).',
      ],
    },
    act2Normal: { speed: 4, health: 4, defense: ['brown'], attack: ['blue'] },
    act2Master: { speed: 4, health: 7, defense: ['brown'], attack: ['blue', 'yellow'] },
  },
  // ─── Kontrakt der Unbesiegten ─────────────────────────────────────────────
  {
    id: 'crow-hag',
    nameDe: 'Krähenhexe',
    nameEn: 'Crow Hag',
    expansionId: 'treaty-of-champions',
    traits: ['Dunkel', 'Zivilisiert'],
    normal: {
      speed: 4, health: 5, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['+1 Lebenspunkt'],
      abilities: ['Lebensdurst 1: Jedes Mal, wenn ein Held innerhalb von 5 Feldern zu diesem Monster 1 oder mehr Herzen heilt, reduziert er die geheilte Anzahl Herzen um 1 (Minimum 0).'],
    },
    master: {
      speed: 4, health: 7, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['+1 Lebenspunkt'],
      abilities: ['Lebensdurst 1: Jedes Mal, wenn ein Held innerhalb von 5 Feldern zu diesem Monster 1 oder mehr Herzen heilt, reduziert er die geheilte Anzahl Herzen um 1 (Minimum 0).'],
      actions: ['Todesomen: Wähle 1 Helden in der Sichtlinie dieses Monsters. Dieser Held darf 2 Herzen erleiden. Tut er das nicht, erleidet er 1 Zustand deiner Wahl.'],
    },
    act2Normal: { speed: 5, health: 7, defense: ['gray'], attack: ['blue', 'yellow'], surges: ['+2 Lebenspunkte'] },
    act2Master: {
      speed: 5, health: 9, defense: ['gray', 'black'], attack: ['blue', 'yellow'],
      surges: ['+2 Lebenspunkte'],
      abilities: ['Lebensdurst 2: Jedes Mal, wenn ein Held innerhalb von 5 Feldern zu diesem Monster 1 oder mehr Herzen heilt, reduziert er die geheilte Anzahl Herzen um 2 (Minimum 0).'],
      actions: ['Todesomen: Wähle 1 Helden in der Sichtlinie dieses Monsters. Dieser Held darf 2 Herzen erleiden. Tut er das nicht, erleidet er 1 Zustand deiner Wahl.'],
    },
  },
  {
    id: 'demon-lord',
    nameDe: 'Dämonenfürst',
    nameEn: 'Demon Lord',
    expansionId: 'treaty-of-champions',
    traits: ['Heiß', 'Verflucht'],
    normal: {
      speed: 3, health: 6, defense: ['gray', 'gray'], attack: ['blue', 'yellow'],
      surges: ['Verdorren: Das Ziel erleidet 1 Erschöpfung.'],
      abilities: ['Zauberei 2: Nach einem Angriffswurf darf dieses Monster bis zu 2 Reichweite in Herzen oder bis zu 2 Herzen in Reichweite umwandeln.'],
    },
    master: {
      speed: 3, health: 9, defense: ['gray', 'gray'], attack: ['blue', 'yellow'],
      surges: ['Verdorren: Das Ziel erleidet 1 Erschöpfung.'],
      abilities: [
        'Zauberei 3: Nach einem Angriffswurf darf dieses Monster bis zu 3 Reichweite in Herzen oder bis zu 3 Herzen in Reichweite umwandeln.',
        'Aura 1: Jedes Mal, wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet er 1 Herz.',
      ],
    },
    act2Normal: { speed: 3, health: 8, defense: ['gray', 'gray'], attack: ['blue', 'yellow', 'yellow'] },
    act2Master: { speed: 3, health: 12, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'] },
  },
  {
    id: 'skeleton-archer',
    nameDe: 'Skelett-Bogenschütze',
    nameEn: 'Skeleton Archer',
    expansionId: 'treaty-of-champions',
    traits: ['Verflucht', 'Zivilisiert'],
    normal: {
      speed: 4, health: 3, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Durchbohren 1: Dieser Angriff ignoriert 1 Schild im Verteidigungswurf.', '+1 Reichweite'],
      abilities: ['Wiederbelebung: Jedes Mal, wenn dieses Monster Herzen erleidet und nicht besiegt wird, heilt es Herzen in Höhe des erlittenen Schadens oder der Anzahl Monster dieser Gruppe innerhalb von 3 Feldern, je nachdem, was kleiner ist.'],
    },
    master: {
      speed: 4, health: 6, defense: ['gray'], attack: ['blue', 'yellow'],
      surges: ['Durchbohren 1: Dieser Angriff ignoriert 1 Schild im Verteidigungswurf.', '+1 Reichweite', '+1 Lebenspunkt'],
      abilities: ['Wiederbelebung: Jedes Mal, wenn dieses Monster Herzen erleidet und nicht besiegt wird, heilt es Herzen in Höhe des erlittenen Schadens oder der Anzahl Monster dieser Gruppe innerhalb von 3 Feldern, je nachdem, was kleiner ist.'],
    },
    act2Normal: { speed: 4, health: 4, defense: ['gray'], attack: ['blue', 'yellow'], surges: ['Durchbohren 1: Dieser Angriff ignoriert 1 Schild im Verteidigungswurf.', '+2 Reichweite'] },
    act2Master: { speed: 4, health: 8, defense: ['gray'], attack: ['blue', 'yellow'], surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.', '+2 Reichweite', '+2 Lebenspunkte'] },
  },
  // ─── Hüter des Geheimnisses ───────────────────────────────────────────────
  {
    id: 'blood-ape',
    nameDe: 'Blutaffe',
    nameEn: 'Blood Ape',
    expansionId: 'stewards-of-the-secret',
    traits: ['Höhle', 'Heiß'],
    normal: {
      speed: 4, health: 5, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: ['+1 Herz'],
      abilities: ['Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.'],
    },
    master: {
      speed: 4, health: 7, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: ['+2 Herzen'],
      abilities: ['Wüten: Beide Aktionen dieses Monsters in einem Zug dürfen Angriffsaktionen sein.'],
      actions: ['Sprungangriff: Dieses Monster bewegt sich bis zu seiner Bewegung weit. Während dieser Bewegung darf es sich durch Felder mit feindlichen Figuren bewegen. Führe dann einen Angriff aus, der jede Figur betrifft, durch die sich dieses Monster bei dieser Aktion bewegt hat.'],
    },
    act2Normal: { speed: 4, health: 7, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'], surges: ['+2 Herzen'] },
    act2Master: { speed: 4, health: 9, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'], surges: ['+2 Herzen'] },
  },
  {
    id: 'ferrox',
    nameDe: 'Ferrox',
    nameEn: 'Ferrox',
    expansionId: 'stewards-of-the-secret',
    traits: ['Höhle', 'Wasser'],
    normal: {
      speed: 4, health: 4, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: [
        'Verseuchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verseucht.',
        'Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.',
      ],
    },
    master: {
      speed: 4, health: 5, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: [
        'Verseuchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verseucht.',
        'Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.',
      ],
      actions: ['Extrahieren: Wähle einen zu diesem Monster benachbarten Helden. Dieser Held legt eine Stärke-Probe ab. Misslingt sie, erleidet der Held 2 Herzen und dieses Monster heilt 2 Herzen.'],
    },
    act2Normal: { speed: 4, health: 5, defense: ['gray', 'brown'], attack: ['blue', 'red', 'yellow'], surges: ['Verseuchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verseucht.', 'Durchbohren 3: Dieser Angriff ignoriert 3 Schild im Verteidigungswurf.'] },
    act2Master: { speed: 4, health: 8, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'], surges: ['Verseuchen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel verseucht.', 'Durchbohren 3: Dieser Angriff ignoriert 3 Schild im Verteidigungswurf.'] },
  },
  {
    id: 'naga',
    nameDe: 'Naga',
    nameEn: 'Naga',
    expansionId: 'stewards-of-the-secret',
    traits: ['Wasser', 'Höhle'],
    normal: {
      speed: 4, health: 5, defense: ['gray', 'black'], attack: ['blue', 'red'],
      surges: ['Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.'],
      abilities: ['Zauberei 1: Nach einem Angriffswurf darf dieses Monster bis zu 1 Reichweite in Herzen oder bis zu 1 Herz in Reichweite umwandeln.'],
    },
    master: {
      speed: 4, health: 6, defense: ['gray', 'black'], attack: ['blue', 'red'],
      surges: ['Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.'],
      abilities: ['Zauberei 2: Nach einem Angriffswurf darf dieses Monster bis zu 2 Reichweite in Herzen oder bis zu 2 Herzen in Reichweite umwandeln.'],
      actions: ['Umschlingen: Wähle 1 zu diesem Monster benachbarten Helden. Dieser Held legt eine Stärke-Probe ab. Misslingt sie, ist er bewegungsunfähig; dann darf sich dieses Monster 1 Feld bewegen und du darfst den Helden auf einem leeren Feld benachbart zu diesem Monster platzieren.'],
    },
    act2Normal: { speed: 4, health: 6, defense: ['gray', 'black'], attack: ['blue', 'red'], surges: ['Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.'], abilities: ['Zauberei 3: Nach einem Angriffswurf darf dieses Monster bis zu 3 Reichweite in Herzen oder bis zu 3 Herzen in Reichweite umwandeln.'] },
    act2Master: { speed: 4, health: 8, defense: ['gray', 'black'], attack: ['blue', 'red', 'yellow'], surges: ['Vergiften: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), wird das Ziel vergiftet.'], abilities: ['Zauberei 3: Nach einem Angriffswurf darf dieses Monster bis zu 3 Reichweite in Herzen oder bis zu 3 Herzen in Reichweite umwandeln.'] },
  },
  // ─── Scherben von Everdark ────────────────────────────────────────────────
  {
    id: 'dark-minotaur',
    nameDe: 'Dunkelminotaurus',
    nameEn: 'Dark Minotaur',
    expansionId: 'shards-of-everdark',
    traits: ['Zivilisiert', 'Dunkel'],
    normal: {
      speed: 4, health: 8, defense: ['gray'], attack: ['blue'],
      surges: ['Durchbohren 1: Dieser Angriff ignoriert 1 Schild im Verteidigungswurf.'],
      abilities: [
        'Sturmangriff: Jedes Mal, wenn dieses Monster ein Feld als Ziel wählt, zu dem es zu Beginn seiner Aktivierung nicht benachbart war, füge 1 roten Machtwürfel zu seinem Angriffspool hinzu.',
        'Fauliger Schlick: Am Ende der Aktivierung dieses Monsters ist jeder Held innerhalb von 3 Feldern verseucht.',
        'Eiterbeulen: Jedes Mal, wenn ein verseuchter Held innerhalb von 3 Feldern zu 1 oder mehr Monstern mit Eiterbeulen freiwillig 1 oder mehr Herzen erleidet, erleidet dieser Held 1 Herz.',
      ],
    },
    master: {
      speed: 4, health: 8, defense: ['gray', 'black'], attack: ['blue'],
      surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.'],
      abilities: [
        'Sturmangriff: Jedes Mal, wenn dieses Monster ein Feld als Ziel wählt, zu dem es zu Beginn seiner Aktivierung nicht benachbart war, füge 1 roten Machtwürfel zu seinem Angriffspool hinzu.',
        'Fauliger Schlick: Am Ende der Aktivierung dieses Monsters ist jeder Held innerhalb von 3 Feldern verseucht.',
        'Eiterbeulen: Jedes Mal, wenn ein verseuchter Held innerhalb von 3 Feldern zu 1 oder mehr Monstern mit Eiterbeulen freiwillig 1 oder mehr Herzen erleidet, erleidet dieser Held 1 Herz.',
      ],
    },
    act2Normal: { speed: 4, health: 10, defense: ['gray', 'brown'], attack: ['blue', 'red'], surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.'] },
    act2Master: { speed: 4, health: 10, defense: ['gray', 'gray'], attack: ['blue', 'red'], surges: ['Durchbohren 4: Dieser Angriff ignoriert 4 Schild im Verteidigungswurf.'] },
  },
  {
    id: 'ice-wyrm',
    nameDe: 'Eiswurm',
    nameEn: 'Ice Wyrm',
    expansionId: 'shards-of-everdark',
    traits: ['Kalt', 'Höhle'],
    normal: {
      speed: 4, health: 7, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      abilities: [
        'Begraben: Kampfunfähige Helden innerhalb von 1 Feld zu diesem Monster können Herzen nur durch Aufsteh-Aktionen und Heldentaten heilen.',
        'Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.',
      ],
    },
    master: {
      speed: 4, health: 9, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      abilities: [
        'Begraben: Kampfunfähige Helden innerhalb von 1 Feld zu diesem Monster können Herzen nur durch Aufsteh-Aktionen und Heldentaten heilen.',
        'Reichweite: Dieses Monster darf Ziele in bis zu 2 Feldern Entfernung angreifen.',
        'Eisig: Jedes Mal, wenn ein Held ein zu diesem Monster benachbartes Feld betritt, erleidet er 1 Herz.',
      ],
    },
    act2Normal: { speed: 4, health: 11, defense: ['gray', 'gray'], attack: ['blue', 'red', 'red'] },
    act2Master: { speed: 4, health: 14, defense: ['gray', 'gray'], attack: ['blue', 'red', 'red'] },
  },
  {
    id: 'shade',
    nameDe: 'Schatten',
    nameEn: 'Shade',
    expansionId: 'shards-of-everdark',
    traits: ['Verflucht', 'Dunkel'],
    normal: {
      speed: 4, health: 2, defense: ['gray', 'black'], attack: ['blue', 'yellow'],
      surges: ['Durchbohren 1: Dieser Angriff ignoriert 1 Schild im Verteidigungswurf.'],
      abilities: ['Seelenfessel 1: Jedes Mal, wenn ein Held innerhalb von 3 Feldern zu diesem Monster 1 oder mehr Herzen heilt, darf dieses Monster die geheilte Anzahl Herzen um 1 reduzieren (Minimum 0).'],
      actions: ['Flackern: Wähle 1 Helden innerhalb von 3 Feldern zu diesem Monster. Entferne dieses Monster von der Karte und platziere es benachbart zu diesem Helden. Hat dieses Monster in dieser Aktivierung noch nicht angegriffen, darf es dann einen Angriff auf diesen Helden ausführen.'],
    },
    master: {
      speed: 4, health: 5, defense: ['gray', 'black'], attack: ['blue', 'yellow'],
      surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.'],
      abilities: ['Seelenfessel 2: Jedes Mal, wenn ein Held innerhalb von 3 Feldern zu diesem Monster 1 oder mehr Herzen heilt, darf dieses Monster die geheilte Anzahl Herzen um 2 reduzieren (Minimum 0).'],
      actions: ['Flackern: Wähle 1 Helden innerhalb von 3 Feldern zu diesem Monster. Entferne dieses Monster von der Karte und platziere es benachbart zu diesem Helden. Hat dieses Monster in dieser Aktivierung noch nicht angegriffen, darf es dann einen Angriff auf diesen Helden ausführen.'],
    },
    act2Normal: { speed: 5, health: 4, defense: ['gray', 'black'], attack: ['blue', 'red'], surges: ['Durchbohren 1: Dieser Angriff ignoriert 1 Schild im Verteidigungswurf.'], abilities: ['Seelenfessel 1: Jedes Mal, wenn ein Held innerhalb von 3 Feldern zu diesem Monster 1 oder mehr Herzen heilt, darf dieses Monster die geheilte Anzahl Herzen um 1 reduzieren (Minimum 0).'] },
    act2Master: { speed: 5, health: 7, defense: ['gray', 'black'], attack: ['blue', 'red', 'yellow'], surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.'], abilities: ['Seelenfessel 3: Jedes Mal, wenn ein Held innerhalb von 3 Feldern zu diesem Monster 1 oder mehr Herzen heilt, darf dieses Monster die geheilte Anzahl Herzen um 3 reduzieren (Minimum 0).'] },
  },
  // ─── Nebel von Bilehall ───────────────────────────────────────────────────
  {
    id: 'bone-horror',
    nameDe: 'Knochenschrecken',
    nameEn: 'Bone Horror',
    expansionId: 'mists-of-bilehall',
    traits: ['Höhle', 'Verflucht'],
    normal: {
      speed: 5, health: 5, defense: ['gray', 'gray'], attack: ['blue', 'yellow'],
      surges: ['Durchbohren 1: Dieser Angriff ignoriert 1 Schild im Verteidigungswurf.'],
      abilities: [
        'Ausstrecken: Jedes Mal, wenn dieses Monster angreift, darf es eine Figur bis zu 3 Felder entfernt und in seiner Sichtlinie als Ziel wählen.',
        'Geschmeidig: Befreundete Figuren blockieren die Sichtlinie dieses Monsters nicht.',
      ],
    },
    master: {
      speed: 5, health: 7, defense: ['gray', 'gray'], attack: ['blue', 'yellow'],
      surges: [
        'Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.',
        'Peitschen: Nachdem dieser Angriff abgeschlossen ist, platziere das Ziel auf einem leeren Feld bis zu 2 Felder von diesem Monster entfernt.',
      ],
      abilities: [
        'Ausstrecken: Jedes Mal, wenn dieses Monster angreift, darf es eine Figur bis zu 3 Felder entfernt und in seiner Sichtlinie als Ziel wählen.',
        'Geschmeidig: Befreundete Figuren blockieren die Sichtlinie dieses Monsters nicht.',
      ],
    },
    act2Normal: { speed: 5, health: 6, defense: ['gray', 'gray'], attack: ['blue', 'red'], surges: ['Durchbohren 1: Dieser Angriff ignoriert 1 Schild im Verteidigungswurf.'] },
    act2Master: { speed: 5, health: 9, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'], surges: ['Durchbohren 2: Dieser Angriff ignoriert 2 Schild im Verteidigungswurf.', 'Peitschen: Nachdem dieser Angriff abgeschlossen ist, platziere das Ziel auf einem leeren Feld bis zu 2 Felder von diesem Monster entfernt.'] },
  },
  {
    id: 'broodwalker',
    nameDe: 'Brutläufer',
    nameEn: 'Broodwalker',
    expansionId: 'mists-of-bilehall',
    traits: ['Dunkel', 'Gebäude'],
    normal: {
      speed: 2, health: 7, defense: ['gray', 'brown'], attack: ['blue', 'yellow'],
      surges: ['Verängstigen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel verängstigt.', '+1 Herz'],
      abilities: ['Überfluten: Helden behandeln jedes zu diesem Monster benachbarte Feld als Schlamm-Feld.'],
    },
    master: {
      speed: 2, health: 10, defense: ['gray', 'black'], attack: ['blue', 'yellow'],
      surges: ['Kolonisieren: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel bewegungsunfähig und verängstigt.', '+1 Herz'],
      abilities: [
        'Überfluten: Helden behandeln jedes zu diesem Monster benachbarte Feld als Schlamm-Feld.',
        'Schwarmverteidigung: Helden behandeln jedes zu diesem Monster benachbarte Feld als Gefahrenfeld.',
      ],
    },
    act2Normal: { speed: 2, health: 8, defense: ['gray', 'gray'], attack: ['blue', 'yellow', 'yellow'] },
    act2Master: { speed: 2, health: 12, defense: ['gray', 'black'], attack: ['blue', 'red', 'yellow'] },
  },
  {
    // Kartenscan-validiert 2026-06-12 (any2cards mb-reanimate Akt 1+2, Vorder-/Rückseite):
    // Verteidigung ist in ALLEN vier Varianten 1× braun (vorher fälschlich grau+schwarz) –
    // passt zum Phalanx-Text. act2Normal-Angriff nur 1× gelb ist laut Karte KORREKT.
    // act2Master-Angriff hat 3 Würfel: blau+gelb+gelb (vorher fehlte 1 gelber).
    id: 'reanimate',
    nameDe: 'Wiederbelebter',
    nameEn: 'Reanimate',
    expansionId: 'mists-of-bilehall',
    traits: ['Zivilisiert', 'Verflucht'],
    normal: {
      speed: 3, health: 3, defense: ['brown'], attack: ['blue'],
      surges: ['Schwarm: Dieses Monster verursacht +1 Herz für jedes andere zum Ziel benachbarte Monster.'],
      abilities: [
        'Phalanx: Ist dieses Monster zu einer Figur seiner Monstergruppe benachbart, ersetze seinen braunen Verteidigungswürfel durch 1 grauen Verteidigungswürfel.',
        'Wiederbelebung: Jedes Mal, wenn dieses Monster Herzen erleidet und nicht besiegt wird, heilt es Herzen in Höhe des erlittenen Schadens oder der Anzahl Monster dieser Gruppe innerhalb von 3 Feldern, je nachdem, was kleiner ist.',
      ],
    },
    master: {
      speed: 3, health: 5, defense: ['brown'], attack: ['blue', 'red'],
      surges: ['Schwarm: Dieses Monster verursacht +1 Herz für jedes andere zum Ziel benachbarte Monster.'],
      abilities: [
        'Phalanx: Ist dieses Monster zu einer Figur seiner Monstergruppe benachbart, ersetze seinen braunen Verteidigungswürfel durch 1 grauen Verteidigungswürfel.',
        'Wiederbelebung: Jedes Mal, wenn dieses Monster Herzen erleidet und nicht besiegt wird, heilt es Herzen in Höhe des erlittenen Schadens oder der Anzahl Monster dieser Gruppe innerhalb von 3 Feldern, je nachdem, was kleiner ist.',
      ],
      actions: ['Manövrieren: Wähle 1 zu diesem Monster benachbartes Minion-Monster. Dieses Monster erhält 2 Bewegungspunkte.'],
    },
    act2Normal: { speed: 3, health: 5, defense: ['brown'], attack: ['yellow'] },
    act2Master: { speed: 3, health: 8, defense: ['brown'], attack: ['blue', 'yellow', 'yellow'] },
  },
  // ─── Rostende Ketten ──────────────────────────────────────────────────────
  {
    id: 'marrow-priest',
    nameDe: 'Markpriester',
    nameEn: 'Marrow Priest',
    expansionId: 'the-chains-that-rust',
    traits: ['Dunkel', 'Gebäude'],
    normal: {
      speed: 5, health: 7, defense: ['gray', 'brown'], attack: ['blue', 'yellow'],
      surges: ['Sterbliche Bindung: Das Ziel legt eine Wissen-Probe ab. Misslingt sie, lege seinen Heldenmarker auf diese Karte. Ein Held, dessen Marker auf dieser Karte liegt, kann keine Herzen heilen. Wird ein Monster dieser Gruppe besiegt oder ein Held kampfunfähig, lege alle Heldenmarker von dieser Karte ab.', '+1 Herz'],
      abilities: ['Schattenschritt: Jedes Mal, wenn ein Held einen Angriff auf dieses Monster ausführt, darf er 1 Herz ausgeben. Tut er das nicht, erhält dieses Monster 3 Bewegungspunkte, nachdem der Angriff abgeschlossen ist.'],
    },
    master: {
      speed: 5, health: 9, defense: ['gray', 'gray'], attack: ['blue', 'yellow'],
      surges: ['Sterbliche Bindung: Das Ziel legt eine Wissen-Probe ab. Misslingt sie, lege seinen Heldenmarker auf diese Karte. Ein Held, dessen Marker auf dieser Karte liegt, kann keine Herzen heilen. Wird ein Monster dieser Gruppe besiegt oder ein Held kampfunfähig, lege alle Heldenmarker von dieser Karte ab.', '+1 Herz'],
      abilities: ['Schattenschritt: Jedes Mal, wenn ein Held einen Angriff auf dieses Monster ausführt, darf er 1 Herz ausgeben. Tut er das nicht, erhält dieses Monster 3 Bewegungspunkte, nachdem der Angriff abgeschlossen ist.'],
    },
    act2Normal: { speed: 5, health: 8, defense: ['gray', 'gray'], attack: ['blue', 'yellow', 'yellow'] },
    act2Master: { speed: 5, health: 10, defense: ['gray', 'gray'], attack: ['blue', 'yellow'] },
  },
  {
    id: 'shambling-colossus',
    nameDe: 'Taumelnder Koloss',
    nameEn: 'Shambling Colossus',
    expansionId: 'the-chains-that-rust',
    traits: ['Wildnis', 'Verflucht'],
    normal: {
      speed: 3, health: 5, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: ['+1 Herz'],
      abilities: ['Durchstoßen: Jeder Angriff dieses Monsters ignoriert 1 Schild für jeden Verteidigungswürfel, den das Ziel des Angriffs würfelt.'],
    },
    master: {
      speed: 3, health: 8, defense: ['gray', 'gray'], attack: ['blue', 'red'],
      surges: ['+1 Herz'],
      abilities: [
        'Durchstoßen: Jeder Angriff dieses Monsters ignoriert 1 Schild für jeden Verteidigungswürfel, den das Ziel des Angriffs würfelt.',
        'Quälend: Jedes Mal, wenn ein Held innerhalb von 3 Feldern zu diesem Monster einen Angriff auf dieses Monster ausführt, legt dieser Held vor dem Würfeln eine Willenskraft-Probe ab. Misslingt sie, ist er verängstigt.',
      ],
    },
    act2Normal: { speed: 3, health: 7, defense: ['gray', 'gray'], attack: ['blue', 'red'], surges: ['+2 Herzen'] },
    act2Master: { speed: 3, health: 9, defense: ['gray', 'gray'], attack: ['blue', 'red', 'yellow'], surges: ['+2 Herzen'] },
  },
  {
    id: 'the-dispossessed',
    nameDe: 'Die Besitzlosen',
    nameEn: 'The Dispossessed',
    expansionId: 'the-chains-that-rust',
    traits: ['Zivilisiert', 'Verflucht'],
    normal: {
      speed: 2, health: 6, defense: ['gray', 'gray'], attack: ['blue', 'yellow'],
      surges: ['+1 Herz'],
      actions: [
        'Ätherischer Griff: Zu Beginn des Overlord-Zuges darf dieses Monster 1 Heldenmarker von seinem Sockel ablegen. Tut es das, entferne es von der Karte und platziere es innerhalb von 3 Feldern zum entsprechenden Helden.',
        'Furchtmal: Wähle einen Helden in der Sichtlinie dieses Monsters und lege dessen Heldenmarker auf den Sockel dieses Monsters.',
      ],
    },
    master: {
      speed: 2, health: 8, defense: ['gray', 'gray'], attack: ['blue', 'yellow'],
      surges: ['Verängstigen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel verängstigt.', '+1 Herz'],
      actions: [
        'Ätherischer Griff: Zu Beginn des Overlord-Zuges darf dieses Monster 1 Heldenmarker von seinem Sockel ablegen. Tut es das, entferne es von der Karte und platziere es innerhalb von 3 Feldern zum entsprechenden Helden.',
        'Furchtmal: Wähle einen Helden in der Sichtlinie dieses Monsters und lege dessen Heldenmarker auf den Sockel dieses Monsters.',
      ],
    },
    act2Normal: { speed: 2, health: 8, defense: ['gray', 'brown'], attack: ['blue', 'yellow'], surges: ['+2 Herzen'] },
    act2Master: { speed: 2, health: 10, defense: ['gray', 'gray'], attack: ['blue', 'yellow', 'yellow'], surges: ['Verängstigen: Verursacht dieser Angriff mindestens 1 Herz (nach dem Verteidigungswurf), ist das Ziel verängstigt.', '+2 Herzen'] },
  },
]
