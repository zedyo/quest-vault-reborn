import type { Condition } from '../types/game'

// Zustandskarten (Conditions) – deutsche Original-Karten.
// Name + Effekttext (textDe) 1:1 von den deutschen Karten transkribiert
// (Workflow: transkribieren + adversarial verifizieren). Erweiterungs-Zuordnung
// aus der any2cards-Ordnerstruktur (images/conditions/d2e/<expansion>/).
// Bild: conditionCardDeUrl(id) -> public/cards/de/zustand/<id>.webp.

export const CONDITIONS: Condition[] = [
  { id: "stunned", nameEn: "Stunned", nameDe: "Betäubt", expansionId: "base", textDe: "Aktion: Wirf diese Karte bzw. diesen Marker ab. Dies muss deine nächste Aktion in deinem Zug sein, solange du diese Karte bzw. diesen Marker hast." },
  { id: "diseased", nameEn: "Diseased", nameDe: "Erkrankt", expansionId: "base", textDe: "Lege zu Beginn deines Zugs eine Aktion-Probe ab. Wenn sie gelingt, wirf diese Karte bzw. diesen Marker ab. Wenn sie misslingt, erleidest du 1 Erschöpfung und behältst diese Karte bzw. diesen Marker." },
  { id: "immobilized", nameEn: "Immobilized", nameDe: "Gelähmt", expansionId: "base", textDe: "Du kannst keine Bewegungsaktionen ausführen und keine Erschöpfung erleiden, um Bewegungspunkte zu erhalten. Wirf diese Karte bzw. diesen Marker am Ende deines Zugs ab." },
  { id: "poisoned", nameEn: "Poisoned", nameDe: "Vergiftet", expansionId: "base", textDe: "Lege zu Beginn deines Zugs eine Stärke-Probe ab. Wenn sie gelingt, wirf diese Karte bzw. diesen Marker ab. Wenn sie misslingt, erleidest du 1 Herz und behältst diese Karte bzw. diesen Marker." },
  { id: "bleeding", nameEn: "Bleeding", nameDe: "Blutend", expansionId: "shadow-of-nerekhall", textDe: "Aktion: Wirf diese Karte bzw. diesen Marker ab.\n\nSolange du diese Karte bzw. diesen Marker hast, erleidest du für jede andere Aktion, die du ausführst, 1 Erschöpfung." },
  { id: "burning", nameEn: "Burning", nameDe: "Brennend", expansionId: "lair-of-the-wyrm", textDe: "Du oder eine zu dir benachbarte Figur können eine Aktion ausführen, um diese Karte bzw. diesen Marker abzuwerfen. Am Ende deines Zuges erleiden du und alle zu dir benachbarten Verbündeten 1 Herz." },
  { id: "weakened", nameEn: "Weakened", nameDe: "Geschwächt", expansionId: "the-trollfens", textDe: "Du erhältst -1 Schild auf alle deine Verteidigungswürfe und -1 Herz auf alle deine Angriffswürfe. Wenn du eine Ausruhaktion ausführst, wirfst du diese Karte bzw. diesen Marker ab." },
  { id: "doomed", nameEn: "Doomed", nameDe: "Todgeweiht", expansionId: "manor-of-ravens", textDe: "Jedes Mal, wenn du Herz erleidest, erleidest du 1 Herz zusätzlich.\n\nJeder deiner Angriffe hat: Schub: Wirf diese Karte bzw. diesen Marker ab." },
  { id: "cursed", nameEn: "Cursed", nameDe: "Verflucht", expansionId: "labyrinth-of-ruin", textDe: "Du kannst keine Monsteraktionen oder Aktion-Fertigkeiten ausführen.\n\nZu Beginn deines Zuges legst du eine Wissen-Probe ab. Wenn sie gelingt, wirfst du diese Karte bzw. diesen Marker ab. Wenn sie misslingt, behältst du diese Karte bzw. diesen Marker." },
  { id: "terrified", nameEn: "Terrified", nameDe: "Verängstigt", expansionId: "mists-of-bilehall", textDe: "Du kannst keine Schub einsetzen.\n\nWenn sich am Ende deines Zuges keine gegnerischen Figuren in deiner Sichtlinie befinden, lege diese Karte oder diesen Marker ab." },
]
