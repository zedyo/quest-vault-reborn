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
