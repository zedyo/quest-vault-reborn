import type { Campaign, AdvancedQuest } from '../types/game'

// ── Offizielle Kampagnen (faktischer Überblick) ──────────────────────────────
// Bewusst NUR strukturelle Eckdaten: Name, Erweiterung, Typ (Groß-/Mini-Kampagne)
// und Verzweigung. Die detaillierten Szenario-Inhalte (Ziele, Monsterlisten,
// Aufbauten) stehen ausschließlich in den FFG-Questbüchern (Urheberrecht) und
// liegen in keiner zuverlässigen strukturierten Quelle vor — sie werden daher
// NICHT reproduziert. Beschreibungen sind eigene, faktische Kurztexte.
export const CAMPAIGNS: Campaign[] = [
  { id:'the-shadow-rune', nameEn:'The Shadow Rune', nameDe:'Die Schattenrune', expansionId:'base', kind:'campaign', branching:true,
    descriptionDe:'Die Großkampagne des Grundspiels über zwei Akte. Der Szenariobaum verzweigt sich – welches Szenario als Nächstes gespielt wird, hängt von Sieg oder Niederlage ab.' },
  { id:'heirs-of-blood', nameEn:'Heirs of Blood', nameDe:'Das Blutvermächtnis', expansionId:'heirs-of-blood', kind:'campaign', branching:true,
    descriptionDe:'Alternative Grundspiel-Großkampagne (separate Hefte) mit großem Szenario-Pool und Verzweigungen; benötigt nur das Grundspiel.' },
  { id:'lair-of-the-wyrm', nameEn:'Lair of the Wyrm', nameDe:'Die Höhle des Lindwurms', expansionId:'lair-of-the-wyrm', kind:'mini', branching:false,
    descriptionDe:'Mini-Kampagne der Erweiterung „Die Höhle des Lindwurms" mit wenigen, linear gespielten Szenarien.' },
  { id:'labyrinth-of-ruin', nameEn:'Labyrinth of Ruin', nameDe:'Labyrinth des Verderbens', expansionId:'labyrinth-of-ruin', kind:'campaign', branching:true,
    descriptionDe:'Großkampagne der Erweiterung „Labyrinth des Verderbens" über zwei Akte mit verzweigtem Szenariobaum.' },
  { id:'the-trollfens', nameEn:'The Trollfens', nameDe:'Die Trollsümpfe', expansionId:'the-trollfens', kind:'mini', branching:false,
    descriptionDe:'Mini-Kampagne der Erweiterung „Die Trollsümpfe" mit wenigen, linear gespielten Szenarien.' },
  { id:'shadow-of-nerekhall', nameEn:'Shadow of Nerekhall', nameDe:'Schatten von Nerekhall', expansionId:'shadow-of-nerekhall', kind:'campaign', branching:true,
    descriptionDe:'Großkampagne der Erweiterung „Schatten von Nerekhall" über zwei Akte mit Verzweigungen.' },
  { id:'manor-of-ravens', nameEn:'Manor of Ravens', nameDe:'Schloss Rabenfels', expansionId:'manor-of-ravens', kind:'mini', branching:false,
    descriptionDe:'Mini-Kampagne der Erweiterung „Schloss Rabenfels" mit wenigen, linear gespielten Szenarien.' },
  { id:'mists-of-bilehall', nameEn:'Mists of Bilehall', nameDe:'Nebel von Bilehall', expansionId:'mists-of-bilehall', kind:'campaign', branching:true,
    descriptionDe:'Großkampagne der Erweiterung „Nebel von Bilehall" über zwei Akte mit Verzweigungen.' },
  { id:'the-chains-that-rust', nameEn:'The Chains That Rust', nameDe:'Rostende Ketten', expansionId:'the-chains-that-rust', kind:'campaign', branching:true,
    descriptionDe:'Print-and-Play-Großkampagne und Fortsetzung von „Nebel von Bilehall".' },
]

// ── Advanced Quests (Rumor-Quests der kleinen Packs) ─────────────────────────
// Quelle: any2cards `advanced-quests.js`. NUR faktische Metadaten (Titel,
// Erweiterung, Akt, Reise-Geländetypen) + Kartenbild-Links; Quest-Texte werden
// NICHT reproduziert. Ausgeschlossen: „The Sunken Temple" (Erweiterung „Sands of
// the Past" nicht in expansions.ts).
// DE-Titel (v1.8.0): kartengenau vom deutschen Original — Zusatzabenteuerkarten
// liegen unter DERSELBEN ID auch in `rumors.ts` (Akt II, aus den Scans
// transkribiert, v1.3.4). 12 der 16 Community-Übersetzungen wichen davon ab und
// wurden zum Kartentitel hin korrigiert (z. B. „An der Schmiede" → „Die
// Waffenschmiede", „Wo das Herz wohnt" → „Herzensangelegenheit"). Regel:
// „Kartentext = priorisierte Wahrheit".
export const ADVANCED_QUESTS: AdvancedQuest[] = [
  {
    "id": "bondsofthewild",
    "nameEn": "Bonds of the Wild",
    "nameDe": "Erwachen der Wildnis",
    "expansionId": "bonds-of-the-wild",
    "travel": [
      "Road",
      "Forest",
      "Forest"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/bonds-of-the-wild/act2/bw-bonds-of-the-wild-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/bonds-of-the-wild/act2/bw-bonds-of-the-wild-back.png",
    "act": 2
  },
  {
    "id": "crownofdestiny",
    "nameEn": "Crown of Destiny",
    "nameDe": "Krone des Schicksals",
    "expansionId": "crown-of-destiny",
    "travel": [
      "Plain",
      "Mountain",
      "Mountain"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/crown-of-destiny/act2/cd-crown-of-destiny-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/crown-of-destiny/act2/cd-crown-of-destiny-back.png",
    "act": 2
  },
  {
    "id": "shadowsidewatch",
    "nameEn": "Shadowside Watch",
    "nameDe": "Schattenwacht",
    "expansionId": "crusade-of-the-forgotten",
    "travel": [
      "Forest",
      "Water",
      "Mountain"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/crusade-of-the-forgotten/act2/cf-shadowside-watch-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/crusade-of-the-forgotten/act2/cf-shadowside-watch-back.png",
    "act": 2
  },
  {
    "id": "thecurseofiona",
    "nameEn": "The Curse of Iona",
    "nameDe": "Der Fluch von Iona",
    "expansionId": "guardians-of-deephall",
    "travel": [
      "Road",
      "Mountain",
      "Mountain"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/guardians-of-deephall/act2/gd-the-curse-of-iona-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/guardians-of-deephall/act2/gd-the-curse-of-iona-back.png",
    "act": 2
  },
  {
    "id": "armedtotheteeth",
    "nameEn": "Armed to the Teeth",
    "nameDe": "Bis an die Zähne bewaffnet",
    "expansionId": "lair-of-the-wyrm",
    "travel": [
      "Plain",
      "Forest",
      "Mountain",
      "Road"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/lair-of-the-wyrm/act2/lw-armed-to-the-teeth-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/lair-of-the-wyrm/act2/lw-armed-to-the-teeth-back.png",
    "act": 2
  },
  {
    "id": "attheforge",
    "nameEn": "At the Forge",
    "nameDe": "Die Waffenschmiede",
    "expansionId": "lair-of-the-wyrm",
    "travel": [
      "Forest",
      "Forest",
      "Mountain",
      "Mountain"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/lair-of-the-wyrm/act2/lw-at-the-forge-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/lair-of-the-wyrm/act2/lw-at-the-forge-back.png",
    "act": 2
  },
  {
    "id": "beneaththemanor",
    "nameEn": "Beneath the Manor",
    "nameDe": "Tief unterm Schloss",
    "expansionId": "manor-of-ravens",
    "travel": [
      "Road",
      "Road"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/manor-of-ravens/act2/mr-beneath-the-manor-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/manor-of-ravens/act2/mr-beneath-the-manor-back.png",
    "act": 2
  },
  {
    "id": "wheretheheartis",
    "nameEn": "Where the Heart Is",
    "nameDe": "Herzensangelegenheit",
    "expansionId": "manor-of-ravens",
    "travel": [
      "Road",
      "Road"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/manor-of-ravens/act2/mr-where-the-heart-is-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/manor-of-ravens/act2/mr-where-the-heart-is-back.png",
    "act": 2
  },
  {
    "id": "wrongmanforthejob",
    "nameEn": "Wrong Man for the Job",
    "nameDe": "Zur falschen Zeit am falschen Ort",
    "expansionId": "manor-of-ravens",
    "travel": [
      "Road",
      "Road"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/manor-of-ravens/act2/mr-wrong-man-for-the-job-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/manor-of-ravens/act2/mr-wrong-man-for-the-job-back.png",
    "act": 2
  },
  {
    "id": "prisonoficeandlies",
    "nameEn": "Prison of Ice and Lies",
    "nameDe": "Ein Käfig aus Eis und Lügen",
    "expansionId": "oath-of-the-outcast",
    "travel": [
      "Water",
      "Forest",
      "Mountain"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/oath-of-the-outcast/act2/oo-prison-of-ice-and-lies-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/oath-of-the-outcast/act2/oo-prison-of-ice-and-lies-back.png",
    "act": 2
  },
  {
    "id": "hostofeverdark",
    "nameEn": "Host of Everdark",
    "nameDe": "Das Heer von Everdark",
    "expansionId": "shards-of-everdark",
    "travel": [],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/shards-of-everdark/act2/se-host-of-everdark-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/shards-of-everdark/act2/se-host-of-everdark-back.png"
  },
  {
    "id": "bloodspireofdevis",
    "nameEn": "Bloodspire of Devis",
    "nameDe": "Devis' Blutturm",
    "expansionId": "stewards-of-the-secret",
    "travel": [
      "Road",
      "Water",
      "Mountain"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/stewards-of-the-secret/act2/ss-bloodspire-of-devis-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/stewards-of-the-secret/act2/ss-bloodspire-of-devis-back.png",
    "act": 2
  },
  {
    "id": "treatyofchampions",
    "nameEn": "Treaty of Champions",
    "nameDe": "Kontrakt der Unbesiegten",
    "expansionId": "treaty-of-champions",
    "travel": [
      "Water",
      "Forest",
      "Water"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/treaty-of-champions/act2/tc-treaty-of-champions-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/treaty-of-champions/act2/tc-treaty-of-champions-back.png",
    "act": 2
  },
  {
    "id": "sourceofsickness",
    "nameEn": "Source of Sickness",
    "nameDe": "Quell der Krankheit",
    "expansionId": "the-trollfens",
    "travel": [
      "Water",
      "Forest",
      "Water"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/the-trollfens/act2/tf-source-of-sickness-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/the-trollfens/act2/tf-source-of-sickness-back.png",
    "act": 2
  },
  {
    "id": "spreadingaffliction",
    "nameEn": "Spreading Affliction",
    "nameDe": "Ausbreitung der Pest",
    "expansionId": "the-trollfens",
    "travel": [
      "Road",
      "Mountain",
      "Mountain"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/the-trollfens/act2/tf-spreading-affliction-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/the-trollfens/act2/tf-spreading-affliction-back.png",
    "act": 2
  },
  {
    "id": "visionsofdawn",
    "nameEn": "Visions of Dawn",
    "nameDe": "Prophezeiung eines neuen Anfangs",
    "expansionId": "visions-of-dawn",
    "travel": [
      "Road",
      "Plain",
      "Mountain"
    ],
    "imageUrlFront": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/visions-of-dawn/act2/vd-visions-of-dawn-front.png",
    "imageUrlBack": "https://raw.githubusercontent.com/any2cards/d2e/master/images/advanced-quests/d2e/visions-of-dawn/act2/vd-visions-of-dawn-back.png",
    "act": 2
  }
]
