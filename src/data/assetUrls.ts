// ── Zentrales Asset-URL-Modul ────────────────────────────────────────────────
//
// Alle Kartenbilder stammen aus dem Community-Repo any2cards/d2e. Zuvor wurde die
// Basis-URL und die Erweiterungs-Ordnerzuordnung an mehreren Stellen dupliziert
// (MonstersPage, mapTiles). Dieses Modul bündelt:
//   • die Repo-Basis-URL
//   • EXPANSION_PATH  (expansionId → Ordnersegment im any2cards-Pfad)
//   • EXPANSION_PREFIX (expansionId → Dateinamen-Präfix, z. B. "bg", "lw")
//   • monsterImageUrl() / tileImageUrl() — die beiden berechneten URL-Helfer
//
// Helden- und Item-Bilder werden weiterhin als vollständige `imageUrl` in den
// Datendateien (heroes.ts/items.ts) gepflegt, da sie pro Karte validiert sind.

export const ANY2CARDS_IMAGES =
  'https://raw.githubusercontent.com/any2cards/d2e/master/images'

/**
 * expansionId → Ordnername im any2cards-Pfad. Für die meisten Erweiterungen ist
 * der Ordnername identisch mit der id; Sonderfall ist das Grundspiel
 * (`base` → `base-game`). Unbekannte ids fallen über `?? id` auf die identische
 * Zuordnung zurück (verhält sich exakt wie die früheren lokalen Maps).
 */
export const EXPANSION_PATH: Record<string, string> = {
  'base':                    'base-game',
  'lair-of-the-wyrm':        'lair-of-the-wyrm',
  'labyrinth-of-ruin':       'labyrinth-of-ruin',
  'the-trollfens':           'the-trollfens',
  'shadow-of-nerekhall':     'shadow-of-nerekhall',
  'manor-of-ravens':         'manor-of-ravens',
  'oath-of-the-outcast':     'oath-of-the-outcast',
  'crown-of-destiny':        'crown-of-destiny',
  'crusade-of-the-forgotten':'crusade-of-the-forgotten',
  'guardians-of-deephall':   'guardians-of-deephall',
  'visions-of-dawn':         'visions-of-dawn',
  'bonds-of-the-wild':       'bonds-of-the-wild',
  'treaty-of-champions':     'treaty-of-champions',
  'stewards-of-the-secret':  'stewards-of-the-secret',
  'shards-of-everdark':      'shards-of-everdark',
  'mists-of-bilehall':       'mists-of-bilehall',
  'the-chains-that-rust':    'the-chains-that-rust',
}

/**
 * expansionId → Dateinamen-Präfix (any2cards-Namenskonvention). Grundspiel-Bilder
 * heißen `bg-<id>`, Erweiterungen haben ein eigenes 2-Buchstaben-Kürzel.
 */
export const EXPANSION_PREFIX: Record<string, string> = {
  'base':                    'bg',
  'lair-of-the-wyrm':        'lw',
  'labyrinth-of-ruin':       'lr',
  'the-trollfens':           'tf',
  'shadow-of-nerekhall':     'sn',
  'manor-of-ravens':         'mr',
  'oath-of-the-outcast':     'oo',
  'crown-of-destiny':        'cd',
  'crusade-of-the-forgotten':'cf',
  'guardians-of-deephall':   'gd',
  'visions-of-dawn':         'vd',
  'bonds-of-the-wild':       'bw',
  'treaty-of-champions':     'tc',
  'stewards-of-the-secret':  'ss',
  'shards-of-everdark':      'se',
  'mists-of-bilehall':       'mb',
  'the-chains-that-rust':    'cr',
}

/** Vollständige URL zur Monster-Vorderseite (Akt 1 oder Akt 2). */
export function monsterImageUrl(
  monsterId: string,
  expansionId: string,
  act: 1 | 2 = 1,
): string {
  const prefix = EXPANSION_PREFIX[expansionId] ?? 'bg'
  const expPath = EXPANSION_PATH[expansionId] ?? expansionId
  const actPath = act === 2 ? 'act2' : 'act1'
  return `${ANY2CARDS_IMAGES}/monsters/d2e/${expPath}/${actPath}/${prefix}-${monsterId}-front.png`
}

/**
 * Vollständige URL zu einem Map-Tile-Bild. Akzeptiert ein strukturelles Objekt
 * (id + expansionId), damit dieses Modul nicht von mapTiles.ts abhängt.
 * Grundspiel-Tiles tragen das `bg-`-Präfix, Erweiterungs-Tiles haben ihr Präfix
 * bereits in der id.
 */
export function tileImageUrl(tile: { id: string; expansionId: string }): string {
  const folder = EXPANSION_PATH[tile.expansionId] ?? tile.expansionId
  const filename = tile.expansionId === 'base' ? `bg-${tile.id}` : tile.id
  return `${ANY2CARDS_IMAGES}/map-tiles/d2e/${folder}/${filename}.png`
}

/**
 * Lokales deutsches Karten­bild eines Helden (aus den Original-Karten-Scans,
 * `public/cards/de/heroes/<id>.webp`). `back=true` liefert die Rückseite
 * (Flavor-Seite mit Heldenfähigkeit statt Heldentat). Der `BASE_URL`-Präfix
 * sorgt für den korrekten Pfad unter GitHub Pages (`/quest-vault-reborn/`).
 */
export function heroCardDeUrl(id: string, back = false): string {
  return `${import.meta.env.BASE_URL}cards/de/heroes/${id}${back ? '-back' : ''}.webp`
}

/**
 * Lokales deutsches Monster-Kartenbild (aus den Original-Karten-Scans,
 * `public/cards/de/monsters/<id>-act1|act2[-back].webp`). `act` = 1 oder 2;
 * `back=true` liefert die Rückseite (Fähigkeitstexte + Gruppengrößen).
 */
export function monsterCardDeUrl(id: string, act: 1 | 2 = 1, back = false): string {
  return `${import.meta.env.BASE_URL}cards/de/monsters/${id}-act${act}${back ? '-back' : ''}.webp`
}

/**
 * Lokales deutsches Gerücht-Kartenbild (aus den Original-Karten-Scans,
 * `public/cards/de/geruechte/<id>.webp`).
 */
export function rumorCardDeUrl(id: string): string {
  return `${import.meta.env.BASE_URL}cards/de/geruechte/${id}.webp`
}

/**
 * Rückseiten-Bild einer Akt-II-Gerücht-Karte (Belohnungs-Seite,
 * `public/cards/de/geruechte/<id>-back.webp`). Nur für doppelseitige Karten.
 */
export function rumorCardBackDeUrl(id: string): string {
  return `${import.meta.env.BASE_URL}cards/de/geruechte/${id}-back.webp`
}

/**
 * Lokales deutsches Marktkarten-Bild (aus den Original-Karten-Scans,
 * `public/cards/de/items/<id>.webp`).
 */
export function itemCardDeUrl(id: string): string {
  return `${import.meta.env.BASE_URL}cards/de/items/${id}.webp`
}

/**
 * Lokales deutsches Relikt-Kartenbild – Helden-Seite (`id`) bzw. Overlord-Seite
 * (`id` endet auf `-ol`), aus den Original-Karten-Scans
 * (`public/cards/de/relics/<id>.webp`).
 */
export function relicCardDeUrl(id: string): string {
  return `${import.meta.env.BASE_URL}cards/de/relics/${id}.webp`
}

/**
 * Lokales deutsches Overlord-Kartenbild (aus den Original-Karten-Scans,
 * `public/cards/de/overlord/<id>.webp`).
 */
export function overlordCardDeUrl(id: string): string {
  return `${import.meta.env.BASE_URL}cards/de/overlord/${id}.webp`
}

/**
 * Lokales deutsches Hauptmann-(Leutnant-)Kartenbild je Akt-Form
 * (`public/cards/de/lieutenants/<id>-act<1|2>.webp`).
 */
export function lieutenantCardDeUrl(id: string, act: 1 | 2): string {
  return `${import.meta.env.BASE_URL}cards/de/lieutenants/${id}-act${act}.webp`
}

/**
 * Lokales deutsches Reise-/Stadtereignis-Kartenbild
 * (`public/cards/de/reisekarten/<id>.webp`).
 */
export function travelCardDeUrl(id: string): string {
  return `${import.meta.env.BASE_URL}cards/de/reisekarten/${id}.webp`
}

/**
 * Lokales deutsches Zustandskarten-Bild (`public/cards/de/zustand/<id>.webp`).
 */
export function conditionCardDeUrl(id: string): string {
  return `${import.meta.env.BASE_URL}cards/de/zustand/${id}.webp`
}
