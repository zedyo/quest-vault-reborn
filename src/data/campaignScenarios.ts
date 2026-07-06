import type { CampaignScenario } from '../types/game'

// ── Kuratierte Szenario-Titel je Kampagne ────────────────────────────────────
//
// BEWUSST NUR faktische Metadaten: offizieller deutscher Szenario-TITEL + AKT +
// nominale Reihenfolge. KEINE Questbuch-Inhalte (Ziele, Monsterlisten, Aufbauten,
// Story) — die sind FFG-Urheberrecht und werden NICHT reproduziert.
//
// Quellen (2026-07-05):
//   • `titleDe` = offizielle deutsche Questhandbücher aus dem projekteigenen
//     `scans-transfer`-Release (siehe docs/game-data/scan-sources.md): pro Quest die
//     Titelseite bzw. der Kampagnen-Regeltext (PyMuPDF-Extraktion). Für Schloss
//     Rabenfels, Nebel von Bilehall und Rostende Ketten aus den jeweiligen PDFs.
//   • `titleEn` = Community-Datenbanken (Sadgit-HL/D2eMap `campaign_quest_lists.txt`
//     + `constants.js` Akt-Tags, jaredswarts55/DescentCampaignSaver `Scenario.csv`,
//     any2cards) — als Anker/Gegenprüfung positionsweise zur deutschen Reihenfolge.
//     Wo keine verlässliche EN-Quelle vorlag (v. a. Interludes), fehlt `titleEn`.
//   • Akt: aus den Akt-Abschnitten der deutschen Questbücher + den D2eMap-Akt-Tags
//     (beide gegengeprüft). Interlude-Quests sind Akt 1 zugeordnet (Übergang Akt 1→2).
//
// Hinweis zu einzelnen Kampagnen:
//   • Nebel von Bilehall: das Release enthält nur das Regelheft (keine Quest-Titel-
//     seiten) → die 6 Titel stammen aus dem offiziellen Kampagnen-Regeltext; die
//     Community-Liste nennt zusätzliche Begegnungen. Liste daher ggf. unvollständig.
//   • Nebel von Bilehall wird als Akt-I-Kampagne gespielt, Rostende Ketten als deren
//     Akt-II-Fortsetzung — Bilehall-Quests = Akt 1, Ketten-Quests = Akt 2.
//
// `role` markiert die FESTEN Szenarien (nicht Teil des verzweigenden Pools):
//   • 'intro'     = erstes Szenario (Einführung) — bei jeder Kampagne außer Rostende
//                   Ketten (reine Akt-II-Fortsetzung von Bilehall, kein eigenes Intro).
//   • 'interlude' = Zwischenspiel am Übergang Akt 1→2. Nur die verzweigenden Großkampagnen
//                   haben ein formales Zwischenspiel (Blutvermächtnis hat DEREN ZWEI);
//                   Mini-Kampagnen + Bilehall/Ketten haben keins.
//   • 'finale'    = letztes Szenario — bei jeder Kampagne außer Nebel von Bilehall
//                   (läuft in Rostende Ketten weiter; das echte Finale ist dort).

export interface CampaignScenarioMap {
  [campaignId: string]: CampaignScenario[]
}

export const CAMPAIGN_SCENARIOS: CampaignScenarioMap = {
  'the-shadow-rune': [
    { id: 'first-blood', titleDe: 'Erstes Blut', titleEn: 'First Blood', act: 1, order: 1, role: 'intro' },
    { id: 'a-fat-goblin', titleDe: 'Ein fetter Goblin', titleEn: 'A Fat Goblin', act: 1, order: 2 },
    { id: 'castle-daerion', titleDe: 'Schloss Daerion', titleEn: 'Castle Daerion', act: 1, order: 3 },
    { id: 'the-cardinals-plight', titleDe: 'Der Kardinal in Not', titleEn: "The Cardinal's Plight", act: 1, order: 4 },
    { id: 'the-masquerade-ball', titleDe: 'Der Maskenball', titleEn: 'The Masquerade Ball', act: 1, order: 5 },
    { id: 'death-on-the-wing', titleDe: 'Flügel des Todes', titleEn: 'Death on the Wing', act: 1, order: 6 },
    { id: 'the-shadow-vault', titleDe: 'Die Kammer der Schatten', titleEn: 'The Shadow Vault', act: 1, order: 7 },
    { id: 'the-overlord-revealed', titleDe: 'Der wahre Overlord', titleEn: 'The Overlord Revealed', act: 1, order: 8, role: 'interlude' },
    { id: 'the-monsters-hoard', titleDe: 'Die Schatzkammer der Monster', titleEn: "The Monster's Hoard", act: 2, order: 9 },
    { id: 'the-frozen-spire', titleDe: 'Die Frostzinne', titleEn: 'The Frozen Spire', act: 2, order: 10 },
    { id: 'the-dawnblade', titleDe: 'Die Klinge der Morgenröte', titleEn: 'The Dawnblade', act: 2, order: 11 },
    { id: 'the-desecrated-tomb', titleDe: 'Das entweihte Grabmal', titleEn: 'The Desecrated Tomb', act: 2, order: 12 },
    { id: 'enduring-the-elements', titleDe: 'Im Kampf gegen die Elemente', titleEn: 'Enduring the Elements', act: 2, order: 13 },
    { id: 'the-ritual-of-shadows', titleDe: 'Das Ritual der Schatten', titleEn: 'The Ritual of Shadows', act: 2, order: 14 },
    { id: 'blood-of-heroes', titleDe: 'Heldenblut', titleEn: 'Blood of Heroes', act: 2, order: 15 },
    { id: 'the-twin-idols', titleDe: 'Die Zwillingsstatuen', titleEn: 'The Twin Idols', act: 2, order: 16 },
    { id: 'the-wyrm-turns', titleDe: 'Des Drachen Umkehr', titleEn: 'The Wyrm Turns', act: 2, order: 17 },
    { id: 'the-wyrm-rises', titleDe: 'Des Drachen Wiederkehr', titleEn: 'The Wyrm Rises', act: 2, order: 18 },
    { id: 'gryvorn-unleashed', titleDe: 'Gryvorns Wiedergeburt', titleEn: 'Gryvorn Unleashed', act: 2, order: 19 },
    { id: 'the-man-who-would-be-king', titleDe: 'Der Mann, der König sein wollte', titleEn: 'The Man Who Would Be King', act: 2, order: 20, role: 'finale' },
  ],

  'heirs-of-blood': [
    { id: 'acolyte-of-saradyn', titleDe: 'Der Novize', titleEn: 'Acolyte of Saradyn', act: 1, order: 1, role: 'intro' },
    { id: 'rellegars-rest', titleDe: 'Rellegars Ruhestätte', titleEn: "Rellegar's Rest", act: 1, order: 2 },
    { id: 'siege-of-skytower', titleDe: 'Die Belagerung der Himmelsfeste', titleEn: 'Siege of Skytower', act: 1, order: 3 },
    { id: 'blood-will-tell', titleDe: 'Böses Blut', titleEn: 'Blood Will Tell', act: 1, order: 4 },
    { id: 'the-baron-returns', titleDe: 'Die Rückkehr des Barons', titleEn: 'The Baron Returns', act: 1, order: 5 },
    { id: 'archive-of-arrizon', titleDe: 'Das Archiv des Arrizon', titleEn: 'Archive of Arrizon', act: 1, order: 6 },
    { id: 'rise-of-urthko', titleDe: 'Urkho wird kommen', titleEn: 'Rise of Urthko', act: 1, order: 7 },
    { id: 'caladens-crossing', titleDe: 'Caladens Brücke', titleEn: "Caladen's Crossing", act: 1, order: 8 },
    { id: 'der-lockvogel', titleDe: 'Der Lockvogel', act: 1, order: 9, role: 'interlude' },
    { id: 'die-tiefen-des-klosters', titleDe: 'Die Tiefen des Klosters', act: 1, order: 10, role: 'interlude' },
    { id: 'army-of-dalzunm', titleDe: 'Die Armee von Dal’Zunm', titleEn: "Army of Dal'Zunm", act: 2, order: 11 },
    { id: 'prison-of-khinn', titleDe: 'Der Kerker von Khinn', titleEn: 'Prison of Khinn', act: 2, order: 12 },
    { id: 'lord-of-flame', titleDe: 'Der Herr der Flammen', titleEn: 'Lord of Flame', act: 2, order: 13 },
    { id: 'dead-or-drowning', titleDe: 'Tot oder untot', titleEn: 'Dead or Drowning', act: 2, order: 14 },
    { id: 'rite-of-the-red-dawn', titleDe: 'Das Ritual der Morgenröte', titleEn: 'Rite of the Red Dawn', act: 2, order: 15 },
    { id: 'shadowfall-mountain', titleDe: 'Die Schattenspitze', titleEn: 'Shadowfall Mountain', act: 2, order: 16 },
    { id: 'edge-of-dawn', titleDe: 'Kampf ums Morgengrauen', titleEn: 'Edge of Dawn', act: 2, order: 17 },
    { id: 'piercing-darkness', titleDe: 'Allumfassende Dunkelheit', titleEn: 'Piercing Darkness', act: 2, order: 18 },
    { id: 'blood-and-betrayal', titleDe: 'Blut und Verrat', titleEn: 'Blood and Betrayal', act: 2, order: 19, role: 'finale' },
  ],

  'lair-of-the-wyrm': [
    { id: 'gold-digger', titleDe: 'Schatzjäger', titleEn: 'Gold Digger', act: 1, order: 1, role: 'intro' },
    { id: 'rude-awakening', titleDe: 'Böses Erwachen', titleEn: 'Rude Awakening', act: 1, order: 2 },
    { id: 'whats-mine-is-yours', titleDe: 'Gute Mine zum bösen Spiel', titleEn: "What's Mine is Yours", act: 1, order: 3 },
    { id: 'at-the-forge', titleDe: 'Die Waffenschmiede', titleEn: 'At the Forge', act: 2, order: 4 },
    { id: 'armed-to-the-teeth', titleDe: 'Bis an die Zähne bewaffnet', titleEn: 'Armed to the Teeth', act: 2, order: 5, role: 'finale' },
  ],

  'labyrinth-of-ruin': [
    { id: 'ruinous-whispers', titleDe: 'Verderbliches Geflüster', titleEn: 'Ruinous Whispers', act: 1, order: 1, role: 'intro' },
    { id: 'gathering-foretold', titleDe: 'Geweissagtes Zusammentreffen', titleEn: 'Gathering Foretold', act: 1, order: 2 },
    { id: 'honor-among-thieves', titleDe: 'Ganovenehre', titleEn: 'Honor Among Thieves', act: 1, order: 3 },
    { id: 'reclamation', titleDe: 'Rückeroberung', titleEn: 'Reclamation', act: 1, order: 4 },
    { id: 'through-the-mist', titleDe: 'Tief im Nebel', titleEn: 'Through the Mist', act: 1, order: 5 },
    { id: 'barrow-of-barris', titleDe: 'Hugins Hügelgrab', titleEn: 'Barrow of Barris', act: 1, order: 6 },
    { id: 'secrets-in-stone', titleDe: 'Geheimnisse in Stein', titleEn: 'Secrets in Stone', act: 1, order: 7 },
    { id: 'fury-of-the-tempest', titleDe: 'Die Wut des Sturms', titleEn: 'Fury of the Tempest', act: 1, order: 8 },
    { id: 'back-from-the-dead', titleDe: 'Auferstanden von den Toten', titleEn: 'Back from the Dead', act: 1, order: 9 },
    { id: 'pilgrimage', titleDe: 'Pilgerreise', titleEn: 'Pilgrimage', act: 1, order: 10 },
    { id: 'fortune-and-glory', titleDe: 'Ruhm und Reichtum', titleEn: 'Fortune and Glory', act: 1, order: 11, role: 'interlude' },
    { id: 'heart-of-the-wilds', titleDe: 'Im Herzen der Wildnis', titleEn: 'Heart of the Wilds', act: 2, order: 12 },
    { id: 'let-the-truth-be-buried', titleDe: 'Lasst die Wahrheit begraben bleiben', titleEn: 'Let the Truth be Buried', act: 2, order: 13 },
    { id: 'fountain-of-insight', titleDe: 'Der Brunnen der Erkenntnis', titleEn: 'Fountain of Insight', act: 2, order: 14 },
    { id: 'tipping-the-scales', titleDe: 'Das Zünglein an der Waage', titleEn: 'Tipping the Scales', act: 2, order: 15 },
    { id: 'web-of-power', titleDe: 'Im Netz der Macht', titleEn: 'Web of Power', act: 2, order: 16 },
    { id: 'fire-and-brimstone', titleDe: 'Feuer und Schwefel', titleEn: 'Fire and Brimstone', act: 2, order: 17 },
    { id: 'endless-night', titleDe: 'Endlose Nacht', titleEn: 'Endless Night', act: 2, order: 18 },
    { id: 'a-glimmer-of-hope', titleDe: 'Ein Hoffnungsschimmer', titleEn: 'A Glimmer of Hope', act: 2, order: 19, role: 'finale' },
  ],

  'the-trollfens': [
    { id: 'ghost-town', titleDe: 'Geisterstadt', titleEn: 'Ghost Town', act: 1, order: 1, role: 'intro' },
    { id: 'food-for-worms', titleDe: 'Wurmfrass', titleEn: 'Food for Worms', act: 1, order: 2 },
    { id: 'three-heads-one-mind', titleDe: 'Drei Köpfe, ein Gedanke', titleEn: 'Three Heads, One Mind', act: 1, order: 3 },
    { id: 'source-of-sickness', titleDe: 'Quell der Krankheit', titleEn: 'Source of Sickness', act: 2, order: 4 },
    { id: 'spreading-affliction', titleDe: 'Ausbreitung der Pest', titleEn: 'Spreading Affliction', act: 2, order: 5, role: 'finale' },
  ],

  'shadow-of-nerekhall': [
    { id: 'a-demonstration', titleDe: 'Eine Demonstration', titleEn: 'A Demonstration', act: 1, order: 1, role: 'intro' },
    { id: 'civil-war', titleDe: 'Bürgerkrieg', titleEn: 'Civil War', act: 1, order: 2 },
    { id: 'without-mercy', titleDe: 'Keine Gnade', titleEn: 'Without Mercy', act: 1, order: 3 },
    { id: 'local-politics', titleDe: 'Lokalpolitik', titleEn: 'Local Politics', act: 1, order: 4 },
    { id: 'prey', titleDe: 'Beute', titleEn: 'Prey', act: 1, order: 5 },
    { id: 'the-price-of-power', titleDe: 'Der Preis der Macht', titleEn: 'The Price of Power', act: 1, order: 6 },
    { id: 'the-incident', titleDe: 'Der Vorfall', titleEn: 'The Incident', act: 1, order: 7 },
    { id: 'the-rat-thing-king', titleDe: 'Der Rattenkönig', titleEn: 'The Rat-Thing King', act: 1, order: 8 },
    { id: 'respected-citizen', titleDe: 'Ein ehrwürdiger Bürger', titleEn: 'Respected Citizen', act: 1, order: 9 },
    { id: 'the-true-enemy', titleDe: 'Der wahre Feind', titleEn: 'The True Enemy', act: 1, order: 10 },
    { id: 'traitors-among-us', titleDe: 'Verräter in unserer Mitte', titleEn: 'Traitors Among Us', act: 1, order: 11, role: 'interlude' },
    { id: 'overdue-demise', titleDe: 'Überfälliges Ableben', titleEn: 'Overdue Demise', act: 2, order: 12 },
    { id: 'arise-my-friends', titleDe: 'Erhebt euch, meine Freunde', titleEn: 'Arise My Friends', act: 2, order: 13 },
    { id: 'into-the-dark', titleDe: 'Ins Dunkel', titleEn: 'Into the Dark', act: 2, order: 14 },
    { id: 'widespread-panic', titleDe: 'Massenpanik', titleEn: 'Widespread Panic', act: 2, order: 15 },
    { id: 'nightmares', titleDe: 'Albträume', titleEn: 'Nightmares', act: 2, order: 16 },
    { id: 'lost', titleDe: 'Verirrt', titleEn: 'Lost', act: 2, order: 17 },
    { id: 'the-black-realm', titleDe: 'Das Schwarze Reich', titleEn: 'The Black Realm', act: 2, order: 18 },
    { id: 'the-city-falls', titleDe: 'Der Untergang der Stadt', titleEn: 'The City Falls', act: 2, order: 19, role: 'finale' },
  ],

  'manor-of-ravens': [
    { id: 'vogelfrei', titleDe: 'Vogelfrei', act: 1, order: 1, role: 'intro' },
    { id: 'finders-and-keepers', titleDe: 'Finderlohn', titleEn: 'Finders and Keepers', act: 1, order: 2 },
    { id: 'my-house-my-rules', titleDe: 'Der Herr des Hauses', titleEn: 'My House, My Rules', act: 1, order: 3 },
    { id: 'where-the-heart-is', titleDe: 'Herzensangelegenheit', titleEn: 'Where the Heart Is', act: 2, order: 4 },
    { id: 'wrong-man-for-the-job', titleDe: 'Zur falschen Zeit am falschen Ort', titleEn: 'Wrong Man for the Job', act: 2, order: 5 },
    { id: 'beneath-the-manor', titleDe: 'Tief unterm Schloss', titleEn: 'Beneath the Manor', act: 2, order: 6, role: 'finale' },
  ],

  'mists-of-bilehall': [
    { id: 'strange-awakening', titleDe: 'Merkwürdiges Erwachen', titleEn: 'Strange Awakening', act: 1, order: 1, role: 'intro' },
    { id: 'sanguine-lord', titleDe: 'Der blutrote Lord', titleEn: 'Sanguine Lord', act: 1, order: 2 },
    { id: 'song-of-bones', titleDe: 'Lied der Knochen', titleEn: 'Song of Bone', act: 1, order: 3 },
    { id: 'julidens-keep', titleDe: 'Julidens Burg', titleEn: "Juliden's Keep", act: 1, order: 4 },
    { id: 'durchkreuzte-plaene', titleDe: 'Durchkreuzte Pläne', act: 1, order: 5 },
    { id: 'hallowing-fire', titleDe: 'Heiligendes Feuer', titleEn: 'Hallowing Fire', act: 1, order: 6 },
  ],

  'the-chains-that-rust': [
    { id: 'castle-dalibor', titleDe: 'Burg Dalibor', titleEn: 'Castle Dalibor', act: 2, order: 1 },
    { id: 'legions-hunter', titleDe: 'Jäger der Legion', titleEn: "Legion's Hunter", act: 2, order: 2 },
    { id: 'freedom-from-flesh', titleDe: 'Freiheit vom Fleisch', titleEn: 'Freedom from Flesh', act: 2, order: 3 },
    { id: 'seeking-sanctuary', titleDe: 'Auf der Suche nach einer Zuflucht', titleEn: 'Seeking Sanctuary', act: 2, order: 4 },
    { id: 'taskmaster', titleDe: 'Zuchtmeister', titleEn: 'Taskmaster', act: 2, order: 5 },
    { id: 'the-quarry', titleDe: 'Steinbruch', titleEn: 'Quarry', act: 2, order: 6 },
    { id: 'halls-of-phetra', titleDe: 'Die Hallen von Phetra', titleEn: 'Halls of Phetra', act: 2, order: 7 },
    { id: 'restless-memories', titleDe: 'Rastlose Erinnerungen', titleEn: 'Unquiet Memories', act: 2, order: 8 },
    { id: 'profane-nexus', titleDe: 'Gotteslästerlicher Nexus', titleEn: 'Profane Nexus', act: 2, order: 9, role: 'finale' },
  ],
}

/** Kuratierte Szenarien einer Kampagne (leer, wenn keine Liste vorliegt). */
export function scenariosForCampaign(campaignId: string): CampaignScenario[] {
  return CAMPAIGN_SCENARIOS[campaignId] ?? []
}
