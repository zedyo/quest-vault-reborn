import type { Rumor } from '../types/game'

// Gerücht-Karten (Rumor) – faktische Metadaten + deutsches Kartenbild.
// Quelle: eingescannte DEUTSCHE Original-Karten (Name DE 1:1 vom Kartentitel,
// Akt-Badge I/II, Reise-Symbole von den Karten gelesen). EN/Erweiterung:
// Akt I aus any2cards rumors.js; Akt II aus der verknüpften Advanced Quest
// (nameEn = Quest-Name). Der Kartentext wird BEWUSST nicht reproduziert (FFG-IP,
// konsistent zu Reise-/Kampagnenkarten); das deutsche Kartenbild zeigt ihn ohnehin.
// Bild: rumorCardDeUrl(id) -> public/cards/de/geruechte/<id>.webp.
//
// Ausgeschlossen: Erweiterung „Sands of the Past" (nicht in expansions.ts,
// halluzinationsverdächtig – s. CLAUDE.md); deren 3 Rumor-Karten entfallen.

export const RUMORS: Rumor[] = [
  { id: "rudeawakening", nameDe: "Böses Erwachen", nameEn: "Rude Awakening", expansionId: "lair-of-the-wyrm", act: 1, travel: ["Plain", "Plain", "Forest", "Road"] },
  { id: "myhousemyrules", nameDe: "Der Herr des Hauses", nameEn: "My House, My Rules", expansionId: "manor-of-ravens", act: 1, travel: ["Forest", "Forest", "Plain"] },
  { id: "onemanstrash", nameDe: "Des einen Müll …", nameEn: "One Man's Trash", expansionId: "bonds-of-the-wild", act: 1, travel: ["Road", "Forest", "Mountain"] },
  { id: "shardsofeverdark", nameDe: "Die Scherben von Everdark", nameEn: "Shards of Everdark", expansionId: "shards-of-everdark", act: 1, travel: ["Road", "Plain", "Mountain"] },
  { id: "guardiansofdeephall", nameDe: "Die Wächter von Deephall", nameEn: "Guardians of Deephall", expansionId: "guardians-of-deephall", act: 1, travel: ["Road", "Plain", "Mountain", "Road"] },
  { id: "threeheadsonemind", nameDe: "Drei Köpfe, ein Gedanke", nameEn: "Three Heads, One Mind", expansionId: "the-trollfens", act: 1, travel: ["Water", "Road", "Mountain"] },
  { id: "burningharvest", nameDe: "Feurige Ernte", nameEn: "Burning Harvest", expansionId: "crown-of-destiny", act: 1, travel: ["Mountain", "Plain", "Mountain"] },
  { id: "findersandkeepers", nameDe: "Finderlohn", nameEn: "Finders and Keepers", expansionId: "manor-of-ravens", act: 1, travel: ["Road", "Plain", "Forest"] },
  { id: "trucebreaker", nameDe: "Friedensbrecher", nameEn: "Trucebreaker", expansionId: "visions-of-dawn", act: 1, travel: ["Plain", "Forest", "Mountain"] },
  { id: "adangerouspath", nameDe: "Gefährliche Pfade", nameEn: "A Dangerous Path", expansionId: "lair-of-the-wyrm", act: 1, travel: [] },
  { id: "ghosttown", nameDe: "Geisterstadt", nameEn: "Ghost Town", expansionId: "the-trollfens", act: 1, travel: ["Forest", "Road", "Road"] },
  { id: "atrocities", nameDe: "Gräueltaten", nameEn: "Atrocities", expansionId: "the-trollfens", act: 1, travel: [] },
  { id: "whatsyoursismine", nameDe: "Gute Mine zum bösen Spiel", nameEn: "What's Yours Is Mine", expansionId: "lair-of-the-wyrm", act: 1, travel: ["Plain", "Forest", "Mountain", "Mountain"] },
  { id: "famineandstrife", nameDe: "Hunger und Not", nameEn: "Famine and Strife", expansionId: "the-trollfens", act: 1, travel: [] },
  { id: "stewardsofthesecret", nameDe: "Hüter des Geheimnisses", nameEn: "Stewards of the Secret", expansionId: "stewards-of-the-secret", act: 1, travel: ["Forest", "Water", "Mountain"] },
  { id: "crusadeoftheforgotten", nameDe: "Kreuzzug der Vergessenen", nameEn: "Crusade of the Forgotten", expansionId: "crusade-of-the-forgotten", act: 1, travel: ["Road", "Water", "Plain"] },
  { id: "golddigger", nameDe: "Schatzjäger", nameEn: "Gold Digger", expansionId: "lair-of-the-wyrm", act: 1, travel: ["Road", "Road", "Road"] },
  { id: "scarcegoods", nameDe: "Schwer erhältliche Waren", nameEn: "Scarce Goods", expansionId: "the-trollfens", act: 1, travel: [] },
  { id: "oathoftheoutcast", nameDe: "Schwur der Verbannten", nameEn: "Oath of the Outcast", expansionId: "oath-of-the-outcast", act: 1, travel: ["Forest", "Forest", "Mountain"] },
  { id: "sindaessecret", nameDe: "Sindaeas Geheimnis", nameEn: "Sindae's Secret", expansionId: "treaty-of-champions", act: 1, travel: ["Road", "Forest", "Plain"] },
  { id: "valyndrasfury", nameDe: "Valyndras Zorn", nameEn: "Valyndra's Fury", expansionId: "lair-of-the-wyrm", act: 1, travel: [] },
  { id: "cursedtreasures", nameDe: "Verfluchte Schätze", nameEn: "Cursed Treasures", expansionId: "manor-of-ravens", act: null, travel: [] },
  { id: "spreadyourwings", nameDe: "Vogelfrei", nameEn: "Spread Your Wings", expansionId: "manor-of-ravens", act: 1, travel: ["Mountain", "Water", "Plain"] },
  { id: "foodforworms", nameDe: "Wurmfraß", nameEn: "Food for Worms", expansionId: "the-trollfens", act: 1, travel: ["Forest", "Water", "Water"] },
  { id: "unknowntreasures", nameDe: "Zweifelhafte Schätze", nameEn: "Unknown Treasures", expansionId: "lair-of-the-wyrm", act: null, travel: [] },
  { id: "spreadingaffliction", nameDe: "Ausbreitung der Pest", nameEn: "Spreading Affliction", expansionId: "the-trollfens", act: 2, travel: ["Road", "Mountain", "Mountain"] },
  { id: "armedtotheteeth", nameDe: "Bis an die Zähne bewaffnet", nameEn: "Armed to the Teeth", expansionId: "lair-of-the-wyrm", act: 2, travel: ["Plain", "Forest", "Mountain", "Road"] },
  { id: "hostofeverdark", nameDe: "Das Heer von Everdark", nameEn: "Host of Everdark", expansionId: "shards-of-everdark", act: 2, travel: ["Forest", "Plain", "Mountain"] },
  { id: "thecurseofiona", nameDe: "Der Fluch von Iona", nameEn: "The Curse of Iona", expansionId: "guardians-of-deephall", act: 2, travel: ["Road", "Mountain", "Mountain"] },
  { id: "bloodspireofdevis", nameDe: "Devis' Blutturm", nameEn: "Bloodspire of Devis", expansionId: "stewards-of-the-secret", act: 2, travel: ["Road", "Water", "Mountain"] },
  { id: "attheforge", nameDe: "Die Waffenschmiede", nameEn: "At the Forge", expansionId: "lair-of-the-wyrm", act: 2, travel: ["Forest", "Forest", "Mountain", "Mountain"] },
  { id: "prisonoficeandlies", nameDe: "Ein Käfig aus Eis und Lügen", nameEn: "Prison of Ice and Lies", expansionId: "oath-of-the-outcast", act: 2, travel: ["Water", "Forest", "Mountain"] },
  { id: "bondsofthewild", nameDe: "Erwachen der Wildnis", nameEn: "Bonds of the Wild", expansionId: "bonds-of-the-wild", act: 2, travel: ["Road", "Forest", "Forest"] },
  { id: "wheretheheartis", nameDe: "Herzensangelegenheit", nameEn: "Where the Heart Is", expansionId: "manor-of-ravens", act: 2, travel: ["Road", "Road"] },
  { id: "treatyofchampions", nameDe: "Kontrakt der Unbesiegten", nameEn: "Treaty of Champions", expansionId: "treaty-of-champions", act: 2, travel: ["Water", "Forest", "Water"] },
  { id: "crownofdestiny", nameDe: "Krone des Schicksals", nameEn: "Crown of Destiny", expansionId: "crown-of-destiny", act: 2, travel: ["Plain", "Mountain", "Mountain"] },
  { id: "visionsofdawn", nameDe: "Prophezeiung eines neuen Anfangs", nameEn: "Visions of Dawn", expansionId: "visions-of-dawn", act: 2, travel: ["Road", "Plain", "Mountain"] },
  { id: "sourceofsickness", nameDe: "Quell der Krankheit", nameEn: "Source of Sickness", expansionId: "the-trollfens", act: 2, travel: ["Water", "Forest", "Water"] },
  { id: "shadowsidewatch", nameDe: "Schattenwacht", nameEn: "Shadowside Watch", expansionId: "crusade-of-the-forgotten", act: 2, travel: ["Forest", "Water", "Mountain"] },
  { id: "beneaththemanor", nameDe: "Tief unterm Schloss", nameEn: "Beneath the Manor", expansionId: "manor-of-ravens", act: 2, travel: ["Road", "Road"] },
  { id: "wrongmanforthejob", nameDe: "Zur falschen Zeit am falschen Ort", nameEn: "Wrong Man for the Job", expansionId: "manor-of-ravens", act: 2, travel: ["Road", "Road"] },
]
