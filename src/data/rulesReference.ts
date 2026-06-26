import type { DieColor } from '../types/game'

// ── Regeln & Referenz (eigene, knappe Erklärungen) ───────────────────────────
//
// WICHTIG: Dies ist KEINE Reproduktion des FFG-Regelhefts/Questbuchs (Urheberrecht).
// Alle Texte sind eigene, zusammenfassende Kurzbeschreibungen allgemein bekannter
// Spielmechaniken – als Schnellnachschlag am Tisch, nicht als Ersatz für die Regeln.
// Keine erfundenen Daten: nur faktische, breit dokumentierte Grundmechaniken.

/** Kartensymbol mit kurzer Bedeutung. `symbol` = Render-Schlüssel in der Seite. */
export interface SymbolInfo {
  id: string
  symbol: 'heart' | 'surge' | 'fatigue' | 'action' | 'movement' | 'defense'
  nameDe: string
  nameEn: string
  descriptionDe: string
}

export const GAME_SYMBOLS: SymbolInfo[] = [
  { id: 'heart', symbol: 'heart', nameDe: 'Herz (Schaden)', nameEn: 'Heart / Damage',
    descriptionDe: 'Ein Herz steht für einen Schadenspunkt. Erreichen die Lebenspunkte einer Figur 0, wird sie besiegt.' },
  { id: 'surge', symbol: 'surge', nameDe: 'Schub', nameEn: 'Surge',
    descriptionDe: 'Wird auf Angriffswürfeln gewürfelt. Jeder Schub kann für eine Schub-Fähigkeit ausgegeben werden (z. B. +1 Schaden, Reichweite oder ein Sondereffekt der Karte).' },
  { id: 'fatigue', symbol: 'fatigue', nameDe: 'Erschöpfung', nameEn: 'Fatigue',
    descriptionDe: 'Erschöpfungspunkte werden u. a. für zusätzliche Bewegung und viele Klassenfähigkeiten ausgegeben. Die Obergrenze ist der Ausdauerwert; durch Ausruhen wird Erschöpfung wieder abgelegt.' },
  { id: 'action', symbol: 'action', nameDe: 'Aktion', nameEn: 'Action',
    descriptionDe: 'Markiert eine Aktion. Ein Held führt pro Zug zwei Aktionen aus; manche Fähigkeiten kosten ebenfalls eine Aktion.' },
  { id: 'movement', symbol: 'movement', nameDe: 'Bewegung', nameEn: 'Movement',
    descriptionDe: 'Bewegungspunkte. Ein Punkt bewegt eine Figur ein angrenzendes Feld; bestimmtes Gelände kostet mehr oder blockiert.' },
  { id: 'defense', symbol: 'defense', nameDe: 'Verteidigung (Schild)', nameEn: 'Defense / Shield',
    descriptionDe: 'Schildsymbol der Verteidigungswürfel. Jeder gewürfelte Schild verhindert einen Schadenspunkt des Angriffs.' },
]

/** Würfelfarbe mit kurzer Rolle. */
export interface DiceInfo {
  color: DieColor
  nameDe: string
  descriptionDe: string
}

export const ATTACK_DICE: DiceInfo[] = [
  { color: 'blue', nameDe: 'Blau', descriptionDe: 'Angriffswürfel. Zeigt zusätzlich die Reichweite (Distanz) – bei Fernkampf muss sie bis zum Ziel reichen.' },
  { color: 'red', nameDe: 'Rot', descriptionDe: 'Angriffswürfel mit verlässlich hohem Schaden, aber ohne Reichweite.' },
  { color: 'yellow', nameDe: 'Gelb', descriptionDe: 'Angriffswürfel mit Schaden, Reichweite und vielen Schüben.' },
  { color: 'green', nameDe: 'Grün', descriptionDe: 'Ausgewogener Angriffswürfel mit Schaden, Reichweite und Schub.' },
]

export const DEFENSE_DICE: DiceInfo[] = [
  { color: 'gray', nameDe: 'Grau', descriptionDe: 'Schwächster Verteidigungswürfel – wenige Schilde.' },
  { color: 'brown', nameDe: 'Braun', descriptionDe: 'Mittlerer Verteidigungswürfel.' },
  { color: 'black', nameDe: 'Schwarz', descriptionDe: 'Stärkster Verteidigungswürfel – die meisten Schilde.' },
]

/** Abschnitt der Spielablauf-Kurzreferenz. */
export interface GameplayStep {
  id: string
  title: string
  textDe: string
}

export const GAMEPLAY_STEPS: GameplayStep[] = [
  { id: 'rounds', title: 'Spielrunde',
    textDe: 'Eine Runde besteht aus der Heldenphase und der Overlord-Phase. In der Heldenphase ist jeder Held einmal am Zug (Reihenfolge frei wählbar), danach aktiviert der Overlord seine Monster.' },
  { id: 'two-actions', title: 'Zwei Aktionen pro Zug',
    textDe: 'In seinem Zug führt ein Held zwei Aktionen aus. Beide dürfen gleich sein (z. B. zweimal Bewegen) oder verschieden.' },
  { id: 'action-types', title: 'Aktionsarten',
    textDe: 'Übliche Aktionen sind: Bewegen (Bewegungspunkte erhalten), Angreifen, Ausruhen (Erschöpfung ablegen), eine Sonder-/Klassenaktion sowie Durchsuchen oder eine besiegte Heldin/einen Helden wiederbeleben.' },
  { id: 'attack', title: 'Angriff & Verteidigung',
    textDe: 'Der Angreifer wirft seine Angriffswürfel, der Verteidiger seine Verteidigungswürfel. Zugefügter Schaden = gewürfelte Herzen minus gewürfelte Schilde. Übrige Schübe werden für Schub-Fähigkeiten ausgegeben. Bei Fernkampf muss die blaue Reichweite bis zum Ziel reichen.' },
  { id: 'line-of-sight', title: 'Sichtlinie',
    textDe: 'Eine Sichtlinie besteht, wenn sich eine gerade Linie von einer Ecke des eigenen Feldes zu einer Ecke des Zielfeldes ziehen lässt, ohne durch eine blockierende Kante (Wand, Hindernis) zu verlaufen.' },
  { id: 'acts', title: 'Akt 1 und Akt 2',
    textDe: 'Eine Kampagne läuft über zwei Akte. Zwischen den Akten werden Helden und Monster stärker (Akt-2-Karten); Markt- und Monsterkarten gibt es daher je Akt in einer eigenen Fassung.' },
]

/** Glossar-Begriff. `link` verweist optional auf eine Referenzseite der App. */
export interface GlossaryTerm {
  id: string
  term: string
  textDe: string
  link?: string
}

export const GLOSSARY: GlossaryTerm[] = [
  { id: 'conditions', term: 'Zustände', textDe: 'Negative Effekte wie Vergiftet, Betäubt oder Blutend, die eine Figur per Zustandskarte erhält und nach den Kartenregeln wieder los wird.', link: '/zustaende' },
  { id: 'search', term: 'Durchsuchen', textDe: 'Steht eine Figur auf einem Suchmarker, kann sie ihn mit einer Aktion durchsuchen und eine Suchkarte ziehen (Gold, Tränke oder Quest-Funde).' },
  { id: 'threat', term: 'Bedrohung', textDe: 'Eine Ressource des Overlords, die sich im Spielverlauf ansammelt und für bestimmte Overlord- und Plotdeck-Karten ausgegeben wird.' },
  { id: 'fatigue', term: 'Ausdauer & Erschöpfung', textDe: 'Die Ausdauer ist die Obergrenze der Erschöpfung. Erschöpfung wird für Extrabewegung und Fähigkeiten ausgegeben und durch Ausruhen abgelegt.' },
  { id: 'terrain', term: 'Gelände', textDe: 'Felder können Sondereigenschaften tragen (z. B. Wasser, Hitze, Hindernis). Sie verändern Bewegungskosten oder lösen Effekte aus; im Kartenbauer als Overlay-Token platzierbar.', link: '/karte' },
  { id: 'group-size', term: 'Gruppengröße', textDe: 'Wie viele Diener und Meister einer Monstergruppe ins Spiel kommen, hängt von der Spielerzahl (2/3/4) ab – pro Monster auf der Übersicht angegeben.', link: '/monster' },
  { id: 'master', term: 'Diener & Meister', textDe: 'Jede Monstergruppe hat schwächere Diener und mindestens einen stärkeren Meister mit eigenen Werten und Zusatzfähigkeiten.' },
  { id: 'overlord', term: 'Overlord', textDe: 'Die Spielerin oder der Spieler, die alle Monster, Leutnants und das Overlord-Kartendeck steuern – die Gegenseite der Heldengruppe.', link: '/overlord' },
]
