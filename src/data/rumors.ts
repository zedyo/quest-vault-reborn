// AUTO-GENERIERT von scripts/build_rumors.py – nicht von Hand editieren.
//
// Gerücht-Karten (Rumor) – faktische Metadaten + deutsches Kartenbild.
// Quelle: eingescannte deutsche Karten (Name DE), any2cards (Name EN, Akt,
// Reise-Gelände). Der Kartentext wird BEWUSST nicht reproduziert (FFG-IP);
// er liegt als Referenz in scans/geruechte/Geruechtkarten.md.

import type { Rumor } from '../types/game'

export const RUMORS: Rumor[] = [
  { id: "burningharvest", nameDe: "Feurige Ernte", nameEn: "Burning Harvest", expansionId: "crown-of-destiny", act: 1, travel: ["Mountain", "Plain", "Mountain"], imageDe: "geruechte/de/burningharvest.webp" },
  { id: "crusadeoftheforgotten", nameDe: "Kreuzzug der Vergessenen", nameEn: "Crusade of the Forgotten", expansionId: "crusade-of-the-forgotten", act: 1, travel: ["Road", "Water", "Plain"], imageDe: "geruechte/de/crusadeoftheforgotten.webp" },
  { id: "guardiansofdeephall", nameDe: "Die Wächter von Deephall", nameEn: "Guardians of Deephall", expansionId: "guardians-of-deephall", act: 1, travel: ["Road", "Plain", "Mountain", "Road"], imageDe: "geruechte/de/guardiansofdeephall.webp" },
  { id: "adangerouspath", nameDe: "Gefährliche Pfade", nameEn: "A Dangerous Path", expansionId: "lair-of-the-wyrm", act: 1, travel: [], imageDe: "geruechte/de/adangerouspath.webp" },
  { id: "golddigger", nameDe: "Schatzjäger", nameEn: "Gold Digger", expansionId: "lair-of-the-wyrm", act: 1, travel: ["Road", "Road", "Road"], imageDe: "geruechte/de/golddigger.webp" },
  { id: "rudeawakening", nameDe: "Böses Erwachen", nameEn: "Rude Awakening", expansionId: "lair-of-the-wyrm", act: 1, travel: ["Plain", "Plain", "Forest", "Road"], imageDe: "geruechte/de/rudeawakening.webp" },
  { id: "unknowntreasures", nameDe: "Zweifelhafte Schätze", nameEn: "Unknown Treasures", expansionId: "lair-of-the-wyrm", act: null, travel: [], imageDe: "geruechte/de/unknowntreasures.webp" },
  { id: "valyndrasfury", nameDe: "Valyndras Zorn", nameEn: "Valyndra's Fury", expansionId: "lair-of-the-wyrm", act: 1, travel: [], imageDe: "geruechte/de/valyndrasfury.webp" },
  { id: "whatsyoursismine", nameDe: "Gute Mine zum bösen Spiel", nameEn: "What's Yours Is Mine", expansionId: "lair-of-the-wyrm", act: 1, travel: ["Plain", "Forest", "Mountain", "Mountain"], imageDe: "geruechte/de/whatsyoursismine.webp" },
  { id: "cursedtreasures", nameDe: "Verfluchte Schätze", nameEn: "Cursed Treasures", expansionId: "manor-of-ravens", act: null, travel: [], imageDe: "geruechte/de/cursedtreasures.webp" },
  { id: "findersandkeepers", nameDe: "Finderlohn", nameEn: "Finders and Keepers", expansionId: "manor-of-ravens", act: 1, travel: ["Road", "Plain", "Forest"], imageDe: "geruechte/de/findersandkeepers.webp" },
  { id: "myhousemyrules", nameDe: "Der Herr des Hauses", nameEn: "My House, My Rules", expansionId: "manor-of-ravens", act: 1, travel: ["Forest", "Forest", "Plain"], imageDe: "geruechte/de/myhousemyrules.webp" },
  { id: "spreadyourwings", nameDe: "Vogelfrei", nameEn: "Spread Your Wings", expansionId: "manor-of-ravens", act: 1, travel: ["Mountain", "Water", "Plain"], imageDe: "geruechte/de/spreadyourwings.webp" },
  { id: "oathoftheoutcast", nameDe: "Schwur der Verbannten", nameEn: "Oath of the Outcast", expansionId: "oath-of-the-outcast", act: 1, travel: ["Forest", "Forest", "Mountain"], imageDe: "geruechte/de/oathoftheoutcast.webp" },
  { id: "shardsofeverdark", nameDe: "Die Scherben von Everdark", nameEn: "Shards of Everdark", expansionId: "shards-of-everdark", act: 1, travel: ["Road", "Plain", "Mountain"], imageDe: "geruechte/de/shardsofeverdark.webp" },
  { id: "stewardsofthesecret", nameDe: "Hüter des Geheimnisses", nameEn: "Stewards of the Secret", expansionId: "stewards-of-the-secret", act: 1, travel: ["Forest", "Water", "Mountain"], imageDe: "geruechte/de/stewardsofthesecret.webp" },
  { id: "atrocities", nameDe: "Gräueltaten", nameEn: "Atrocities", expansionId: "the-trollfens", act: 1, travel: [], imageDe: "geruechte/de/atrocities.webp" },
  { id: "famineandstrife", nameDe: "Hunger und Not", nameEn: "Famine and Strife", expansionId: "the-trollfens", act: 1, travel: [], imageDe: "geruechte/de/famineandstrife.webp" },
  { id: "foodforworms", nameDe: "Wurmfraß", nameEn: "Food for Worms", expansionId: "the-trollfens", act: 1, travel: ["Forest", "Water", "Water"], imageDe: "geruechte/de/foodforworms.webp" },
  { id: "ghosttown", nameDe: "Geisterstadt", nameEn: "Ghost Town", expansionId: "the-trollfens", act: 1, travel: ["Forest", "Road", "Road"], imageDe: "geruechte/de/ghosttown.webp" },
  { id: "scarcegoods", nameDe: "Schwer erhältliche Waren", nameEn: "Scarce Goods", expansionId: "the-trollfens", act: 1, travel: [], imageDe: "geruechte/de/scarcegoods.webp" },
  { id: "threeheadsonemind", nameDe: "Drei Köpfe, ein Gedanke", nameEn: "Three Heads, One Mind", expansionId: "the-trollfens", act: 1, travel: ["Water", "Road", "Mountain"], imageDe: "geruechte/de/threeheadsonemind.webp" },
  { id: "sindaessecret", nameDe: "Sindaeas Geheimnis", nameEn: "Sindae's Secret", expansionId: "treaty-of-champions", act: 1, travel: ["Road", "Forest", "Plain"], imageDe: "geruechte/de/sindaessecret.webp" },
  { id: "trucebreaker", nameDe: "Friedensbrecher", nameEn: "Trucebreaker", expansionId: "visions-of-dawn", act: 1, travel: ["Plain", "Forest", "Mountain"], imageDe: "geruechte/de/trucebreaker.webp" },
]
