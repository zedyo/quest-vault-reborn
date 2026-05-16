export interface TileConnectors {
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
}

export interface MapTileDefinition {
  id: string
  label: string
  expansionId: string
  cols: number
  rows: number
  color: string
  /** Edges with a puzzle connector (tab/notch). Undefined = plain rectangle. */
  connectors?: TileConnectors
}

/** Connector overhang as a fraction of one game square. The puzzle tab reaches
 *  the PNG canvas edge while the body wall sits ~17/75 in and the notch ~34/75
 *  in; tiles interlock by overlapping a neighbour on shared connector edges by
 *  roughly this depth. Tunable for visual calibration. */
export const CONNECTOR_OVERHANG_FRAC = 0.34

/** Rotate a connector map clockwise by the given tile rotation. */
export function rotateConnectors(
  c: TileConnectors,
  rotation: 0 | 90 | 180 | 270,
): TileConnectors {
  switch (rotation) {
    case 90: return { top: c.left, right: c.top, bottom: c.right, left: c.bottom }
    case 180: return { top: c.bottom, right: c.left, bottom: c.top, left: c.right }
    case 270: return { top: c.right, right: c.bottom, bottom: c.left, left: c.top }
    default: return c
  }
}

// URL helper — base game uses prefix "bg-"; expansions embed their prefix in the tile id.
export function tileImageUrl(tile: MapTileDefinition): string {
  const expPath: Record<string, string> = {
    'base':                  'base-game',
    'lair-of-the-wyrm':     'lair-of-the-wyrm',
    'labyrinth-of-ruin':    'labyrinth-of-ruin',
    'the-trollfens':        'the-trollfens',
    'shadow-of-nerekhall':  'shadow-of-nerekhall',
    'manor-of-ravens':      'manor-of-ravens',
    'mists-of-bilehall':    'mists-of-bilehall',
    'the-chains-that-rust': 'the-chains-that-rust',
  }
  const folder = expPath[tile.expansionId] ?? tile.expansionId
  const filename = tile.expansionId === 'base' ? `bg-${tile.id}` : tile.id
  return `https://raw.githubusercontent.com/any2cards/d2e/master/images/map-tiles/d2e/${folder}/${filename}.png`
}

// Returns the partner tile id (a↔b) or null for unpaired tiles.
export function getTilePartner(id: string): string | null {
  if (id.endsWith('a')) return id.slice(0, -1) + 'b'
  if (id.endsWith('b')) return id.slice(0, -1) + 'a'
  return null
}

// Dimensions verified via any2cards/d2e PNG pixel sizes (75 px = 1 game square).
// B-sides always match A-side dimensions (same physical tile, different face).
export const MAP_TILES: MapTileDefinition[] = [
  // ─── Grundspiel (01–30) ──────────────────────────────────────────────────
  { id: '01a', label: '01a', expansionId: 'base', cols: 8, rows: 6, color: '#374151', connectors: { top: true, right: true, bottom: true, left: false } },
  { id: '01b', label: '01b', expansionId: 'base', cols: 8, rows: 6, color: '#374151' },
  { id: '02a', label: '02a', expansionId: 'base', cols: 6, rows: 6, color: '#374151', connectors: { top: true, right: false, bottom: true, left: false } },
  { id: '02b', label: '02b', expansionId: 'base', cols: 6, rows: 6, color: '#374151' },
  { id: '03a', label: '03a', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '03b', label: '03b', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '04a', label: '04a', expansionId: 'base', cols: 6, rows: 6, color: '#374151' },
  { id: '04b', label: '04b', expansionId: 'base', cols: 6, rows: 6, color: '#374151' },
  { id: '05a', label: '05a', expansionId: 'base', cols: 6, rows: 4, color: '#374151', connectors: { top: false, right: true, bottom: true, left: true } },
  { id: '05b', label: '05b', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '06a', label: '06a', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '06b', label: '06b', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '07a', label: '07a', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '07b', label: '07b', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '08a', label: '08a', expansionId: 'base', cols: 4, rows: 4, color: '#374151', connectors: { top: true, right: true, bottom: false, left: false } },
  { id: '08b', label: '08b', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '09a', label: '09a', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '09b', label: '09b', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '10a', label: '10a', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '10b', label: '10b', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '11a', label: '11a', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '11b', label: '11b', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '12a', label: '12a', expansionId: 'base', cols: 5, rows: 5, color: '#374151' },
  { id: '12b', label: '12b', expansionId: 'base', cols: 5, rows: 5, color: '#374151' },
  { id: '13a', label: '13a', expansionId: 'base', cols: 6, rows: 6, color: '#374151' },
  { id: '13b', label: '13b', expansionId: 'base', cols: 6, rows: 6, color: '#374151' },
  { id: '14a', label: '14a', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '14b', label: '14b', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '15a', label: '15a', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '15b', label: '15b', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '16a', label: '16a', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '16b', label: '16b', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '17a', label: '17a', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '17b', label: '17b', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '18a', label: '18a', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '18b', label: '18b', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
  { id: '19a', label: '19a', expansionId: 'base', cols: 6, rows: 3, color: '#374151' },
  { id: '19b', label: '19b', expansionId: 'base', cols: 6, rows: 3, color: '#374151' },
  { id: '20a', label: '20a', expansionId: 'base', cols: 8, rows: 3, color: '#374151' },
  { id: '20b', label: '20b', expansionId: 'base', cols: 8, rows: 3, color: '#374151' },
  { id: '21a', label: '21a', expansionId: 'base', cols: 6, rows: 3, color: '#374151' },
  { id: '21b', label: '21b', expansionId: 'base', cols: 6, rows: 3, color: '#374151' },
  { id: '22a', label: '22a', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '22b', label: '22b', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '23a', label: '23a', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '23b', label: '23b', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '24a', label: '24a', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '24b', label: '24b', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '25a', label: '25a', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '25b', label: '25b', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '26a', label: '26a', expansionId: 'base', cols: 4, rows: 3, color: '#374151' },
  { id: '26b', label: '26b', expansionId: 'base', cols: 4, rows: 3, color: '#374151' },
  { id: '27a', label: '27a', expansionId: 'base', cols: 2, rows: 4, color: '#374151' },
  { id: '27b', label: '27b', expansionId: 'base', cols: 2, rows: 4, color: '#374151' },
  { id: '28a', label: '28a', expansionId: 'base', cols: 4, rows: 2, color: '#374151' },
  { id: '28b', label: '28b', expansionId: 'base', cols: 4, rows: 2, color: '#374151' },
  { id: '29a', label: '29a', expansionId: 'base', cols: 4, rows: 2, color: '#374151' },
  { id: '29b', label: '29b', expansionId: 'base', cols: 4, rows: 2, color: '#374151' },
  { id: '30a', label: '30a', expansionId: 'base', cols: 4, rows: 2, color: '#374151' },
  { id: '30b', label: '30b', expansionId: 'base', cols: 4, rows: 2, color: '#374151' },

  // ─── Die Höhle des Lindwurms (lw-31 – lw-35, lw-s1) ─────────────────────
  { id: 'lw-31a', label: 'LW 31a', expansionId: 'lair-of-the-wyrm', cols: 6, rows: 6, color: '#4a1942' },
  { id: 'lw-31b', label: 'LW 31b', expansionId: 'lair-of-the-wyrm', cols: 6, rows: 6, color: '#4a1942' },
  { id: 'lw-32a', label: 'LW 32a', expansionId: 'lair-of-the-wyrm', cols: 4, rows: 4, color: '#4a1942' },
  { id: 'lw-32b', label: 'LW 32b', expansionId: 'lair-of-the-wyrm', cols: 4, rows: 4, color: '#4a1942' },
  { id: 'lw-33a', label: 'LW 33a', expansionId: 'lair-of-the-wyrm', cols: 4, rows: 2, color: '#4a1942' },
  { id: 'lw-33b', label: 'LW 33b', expansionId: 'lair-of-the-wyrm', cols: 4, rows: 2, color: '#4a1942' },
  { id: 'lw-34a', label: 'LW 34a', expansionId: 'lair-of-the-wyrm', cols: 3, rows: 6, color: '#4a1942' },
  { id: 'lw-34b', label: 'LW 34b', expansionId: 'lair-of-the-wyrm', cols: 3, rows: 6, color: '#4a1942' },
  { id: 'lw-35a', label: 'LW 35a', expansionId: 'lair-of-the-wyrm', cols: 5, rows: 5, color: '#4a1942' },
  { id: 'lw-35b', label: 'LW 35b', expansionId: 'lair-of-the-wyrm', cols: 5, rows: 5, color: '#4a1942' },
  { id: 'lw-s1a', label: 'LW S1a', expansionId: 'lair-of-the-wyrm', cols: 5, rows: 5, color: '#6b2160' },
  { id: 'lw-s1b', label: 'LW S1b', expansionId: 'lair-of-the-wyrm', cols: 5, rows: 5, color: '#6b2160' },

  // ─── Labyrinth des Verderbens (lr-36 – lr-43) ────────────────────────────
  { id: 'lr-36a', label: 'LR 36a', expansionId: 'labyrinth-of-ruin', cols: 8, rows: 8, color: '#3b2a00' },
  { id: 'lr-36b', label: 'LR 36b', expansionId: 'labyrinth-of-ruin', cols: 8, rows: 8, color: '#3b2a00' },
  { id: 'lr-37a', label: 'LR 37a', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 9, color: '#3b2a00' },
  { id: 'lr-37b', label: 'LR 37b', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 9, color: '#3b2a00' },
  { id: 'lr-38a', label: 'LR 38a', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 7, color: '#3b2a00' },
  { id: 'lr-38b', label: 'LR 38b', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 7, color: '#3b2a00' },
  { id: 'lr-39a', label: 'LR 39a', expansionId: 'labyrinth-of-ruin', cols: 7, rows: 8, color: '#3b2a00' },
  { id: 'lr-39b', label: 'LR 39b', expansionId: 'labyrinth-of-ruin', cols: 7, rows: 8, color: '#3b2a00' },
  { id: 'lr-40a', label: 'LR 40a', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 5, color: '#3b2a00' },
  { id: 'lr-40b', label: 'LR 40b', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 5, color: '#3b2a00' },
  { id: 'lr-41a', label: 'LR 41a', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 2, color: '#3b2a00' },
  { id: 'lr-41b', label: 'LR 41b', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 2, color: '#3b2a00' },
  { id: 'lr-42a', label: 'LR 42a', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 2, color: '#3b2a00' },
  { id: 'lr-42b', label: 'LR 42b', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 2, color: '#3b2a00' },
  { id: 'lr-43a', label: 'LR 43a', expansionId: 'labyrinth-of-ruin', cols: 2, rows: 2, color: '#3b2a00' },
  { id: 'lr-43b', label: 'LR 43b', expansionId: 'labyrinth-of-ruin', cols: 2, rows: 2, color: '#3b2a00' },

  // ─── Die Trollsümpfe (tf-44 – tf-49, tf-s2) ──────────────────────────────
  { id: 'tf-44a', label: 'TS 44a', expansionId: 'the-trollfens', cols: 6, rows: 6, color: '#1a3a1a' },
  { id: 'tf-44b', label: 'TS 44b', expansionId: 'the-trollfens', cols: 6, rows: 6, color: '#1a3a1a' },
  { id: 'tf-45a', label: 'TS 45a', expansionId: 'the-trollfens', cols: 8, rows: 3, color: '#1a3a1a' },
  { id: 'tf-45b', label: 'TS 45b', expansionId: 'the-trollfens', cols: 8, rows: 3, color: '#1a3a1a' },
  { id: 'tf-46a', label: 'TS 46a', expansionId: 'the-trollfens', cols: 4, rows: 3, color: '#1a3a1a' },
  { id: 'tf-46b', label: 'TS 46b', expansionId: 'the-trollfens', cols: 4, rows: 3, color: '#1a3a1a' },
  { id: 'tf-47a', label: 'TS 47a', expansionId: 'the-trollfens', cols: 2, rows: 2, color: '#1a3a1a' },
  { id: 'tf-47b', label: 'TS 47b', expansionId: 'the-trollfens', cols: 2, rows: 2, color: '#1a3a1a' },
  { id: 'tf-48a', label: 'TS 48a', expansionId: 'the-trollfens', cols: 7, rows: 7, color: '#1a3a1a' },
  { id: 'tf-48b', label: 'TS 48b', expansionId: 'the-trollfens', cols: 7, rows: 7, color: '#1a3a1a' },
  { id: 'tf-49a', label: 'TS 49a', expansionId: 'the-trollfens', cols: 7, rows: 7, color: '#1a3a1a' },
  { id: 'tf-49b', label: 'TS 49b', expansionId: 'the-trollfens', cols: 7, rows: 7, color: '#1a3a1a' },
  { id: 'tf-s2a', label: 'TS S2a', expansionId: 'the-trollfens', cols: 4, rows: 3, color: '#2a5a2a' },
  { id: 'tf-s2b', label: 'TS S2b', expansionId: 'the-trollfens', cols: 4, rows: 3, color: '#2a5a2a' },

  // ─── Schatten von Nerekhall (sn-50 – sn-69, Sonderplättchen) ─────────────
  { id: 'sn-50a', label: 'SN 50a', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 6, color: '#1a1a3a' },
  { id: 'sn-50b', label: 'SN 50b', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 6, color: '#1a1a3a' },
  { id: 'sn-51a', label: 'SN 51a', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 4, color: '#1a1a3a' },
  { id: 'sn-51b', label: 'SN 51b', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 4, color: '#1a1a3a' },
  { id: 'sn-52a', label: 'SN 52a', expansionId: 'shadow-of-nerekhall', cols: 5, rows: 4, color: '#1a1a3a' },
  { id: 'sn-52b', label: 'SN 52b', expansionId: 'shadow-of-nerekhall', cols: 5, rows: 4, color: '#1a1a3a' },
  { id: 'sn-53a', label: 'SN 53a', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 4, color: '#1a1a3a' },
  { id: 'sn-53b', label: 'SN 53b', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 4, color: '#1a1a3a' },
  { id: 'sn-54a', label: 'SN 54a', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 4, color: '#1a1a3a' },
  { id: 'sn-54b', label: 'SN 54b', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 4, color: '#1a1a3a' },
  { id: 'sn-55a', label: 'SN 55a', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 4, color: '#1a1a3a' },
  { id: 'sn-55b', label: 'SN 55b', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 4, color: '#1a1a3a' },
  { id: 'sn-56a', label: 'SN 56a', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 4, color: '#1a1a3a' },
  { id: 'sn-56b', label: 'SN 56b', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 4, color: '#1a1a3a' },
  { id: 'sn-57a', label: 'SN 57a', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 6, color: '#1a1a3a' },
  { id: 'sn-57b', label: 'SN 57b', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 6, color: '#1a1a3a' },
  { id: 'sn-58a', label: 'SN 58a', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 3, color: '#1a1a3a' },
  { id: 'sn-58b', label: 'SN 58b', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 3, color: '#1a1a3a' },
  { id: 'sn-59a', label: 'SN 59a', expansionId: 'shadow-of-nerekhall', cols: 5, rows: 5, color: '#1a1a3a' },
  { id: 'sn-59b', label: 'SN 59b', expansionId: 'shadow-of-nerekhall', cols: 5, rows: 5, color: '#1a1a3a' },
  { id: 'sn-60a', label: 'SN 60a', expansionId: 'shadow-of-nerekhall', cols: 5, rows: 5, color: '#1a1a3a' },
  { id: 'sn-60b', label: 'SN 60b', expansionId: 'shadow-of-nerekhall', cols: 5, rows: 5, color: '#1a1a3a' },
  { id: 'sn-61a', label: 'SN 61a', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 4, color: '#1a1a3a' },
  { id: 'sn-61b', label: 'SN 61b', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 4, color: '#1a1a3a' },
  { id: 'sn-62a', label: 'SN 62a', expansionId: 'shadow-of-nerekhall', cols: 3, rows: 3, color: '#1a1a3a' },
  { id: 'sn-62b', label: 'SN 62b', expansionId: 'shadow-of-nerekhall', cols: 3, rows: 3, color: '#1a1a3a' },
  { id: 'sn-63a', label: 'SN 63a', expansionId: 'shadow-of-nerekhall', cols: 5, rows: 3, color: '#1a1a3a' },
  { id: 'sn-63b', label: 'SN 63b', expansionId: 'shadow-of-nerekhall', cols: 5, rows: 3, color: '#1a1a3a' },
  { id: 'sn-64a', label: 'SN 64a', expansionId: 'shadow-of-nerekhall', cols: 5, rows: 2, color: '#1a1a3a' },
  { id: 'sn-64b', label: 'SN 64b', expansionId: 'shadow-of-nerekhall', cols: 5, rows: 2, color: '#1a1a3a' },
  { id: 'sn-65a', label: 'SN 65a', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 2, color: '#1a1a3a' },
  { id: 'sn-65b', label: 'SN 65b', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 2, color: '#1a1a3a' },
  { id: 'sn-66a', label: 'SN 66a', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 2, color: '#1a1a3a' },
  { id: 'sn-66b', label: 'SN 66b', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 2, color: '#1a1a3a' },
  { id: 'sn-67a', label: 'SN 67a', expansionId: 'shadow-of-nerekhall', cols: 2, rows: 2, color: '#1a1a3a' },
  { id: 'sn-67b', label: 'SN 67b', expansionId: 'shadow-of-nerekhall', cols: 2, rows: 2, color: '#1a1a3a' },
  { id: 'sn-68a', label: 'SN 68a', expansionId: 'shadow-of-nerekhall', cols: 2, rows: 2, color: '#1a1a3a' },
  { id: 'sn-68b', label: 'SN 68b', expansionId: 'shadow-of-nerekhall', cols: 2, rows: 2, color: '#1a1a3a' },
  { id: 'sn-69a', label: 'SN 69a', expansionId: 'shadow-of-nerekhall', cols: 2, rows: 2, color: '#1a1a3a' },
  { id: 'sn-69b', label: 'SN 69b', expansionId: 'shadow-of-nerekhall', cols: 2, rows: 2, color: '#1a1a3a' },
  { id: 'sn-entrance', label: 'SN Eingang', expansionId: 'shadow-of-nerekhall', cols: 2, rows: 2, color: '#2a2a5a' },
  { id: 'sn-exit',     label: 'SN Ausgang', expansionId: 'shadow-of-nerekhall', cols: 2, rows: 2, color: '#2a2a5a' },

  // ─── Schloss Rabenfels (mr-70 – mr-77) ────────────────────────────────────
  { id: 'mr-70a', label: 'SR 70a', expansionId: 'manor-of-ravens', cols: 6, rows: 6, color: '#2a1a00' },
  { id: 'mr-70b', label: 'SR 70b', expansionId: 'manor-of-ravens', cols: 6, rows: 6, color: '#2a1a00' },
  { id: 'mr-71a', label: 'SR 71a', expansionId: 'manor-of-ravens', cols: 6, rows: 6, color: '#2a1a00' },
  { id: 'mr-71b', label: 'SR 71b', expansionId: 'manor-of-ravens', cols: 6, rows: 6, color: '#2a1a00' },
  { id: 'mr-72a', label: 'SR 72a', expansionId: 'manor-of-ravens', cols: 4, rows: 6, color: '#2a1a00' },
  { id: 'mr-72b', label: 'SR 72b', expansionId: 'manor-of-ravens', cols: 4, rows: 6, color: '#2a1a00' },
  { id: 'mr-73a', label: 'SR 73a', expansionId: 'manor-of-ravens', cols: 3, rows: 6, color: '#2a1a00' },
  { id: 'mr-73b', label: 'SR 73b', expansionId: 'manor-of-ravens', cols: 3, rows: 6, color: '#2a1a00' },
  { id: 'mr-74a', label: 'SR 74a', expansionId: 'manor-of-ravens', cols: 4, rows: 5, color: '#2a1a00' },
  { id: 'mr-74b', label: 'SR 74b', expansionId: 'manor-of-ravens', cols: 4, rows: 5, color: '#2a1a00' },
  { id: 'mr-75a', label: 'SR 75a', expansionId: 'manor-of-ravens', cols: 4, rows: 4, color: '#2a1a00' },
  { id: 'mr-75b', label: 'SR 75b', expansionId: 'manor-of-ravens', cols: 4, rows: 4, color: '#2a1a00' },
  { id: 'mr-76a', label: 'SR 76a', expansionId: 'manor-of-ravens', cols: 2, rows: 4, color: '#2a1a00' },
  { id: 'mr-76b', label: 'SR 76b', expansionId: 'manor-of-ravens', cols: 2, rows: 4, color: '#2a1a00' },
  { id: 'mr-77a', label: 'SR 77a', expansionId: 'manor-of-ravens', cols: 2, rows: 2, color: '#2a1a00' },
  { id: 'mr-77b', label: 'SR 77b', expansionId: 'manor-of-ravens', cols: 2, rows: 2, color: '#2a1a00' },

  // ─── Nebel von Bilehall (mb-78 – mb-87, Sonderplättchen) ─────────────────
  { id: 'mb-78a', label: 'NvB 78a', expansionId: 'mists-of-bilehall', cols: 2, rows: 2, color: '#1a2a3a' },
  { id: 'mb-78b', label: 'NvB 78b', expansionId: 'mists-of-bilehall', cols: 2, rows: 2, color: '#1a2a3a' },
  { id: 'mb-79a', label: 'NvB 79a', expansionId: 'mists-of-bilehall', cols: 2, rows: 2, color: '#1a2a3a' },
  { id: 'mb-79b', label: 'NvB 79b', expansionId: 'mists-of-bilehall', cols: 2, rows: 2, color: '#1a2a3a' },
  { id: 'mb-80a', label: 'NvB 80a', expansionId: 'mists-of-bilehall', cols: 4, rows: 2, color: '#1a2a3a' },
  { id: 'mb-80b', label: 'NvB 80b', expansionId: 'mists-of-bilehall', cols: 4, rows: 2, color: '#1a2a3a' },
  { id: 'mb-81a', label: 'NvB 81a', expansionId: 'mists-of-bilehall', cols: 5, rows: 5, color: '#1a2a3a' },
  { id: 'mb-81b', label: 'NvB 81b', expansionId: 'mists-of-bilehall', cols: 5, rows: 5, color: '#1a2a3a' },
  { id: 'mb-82a', label: 'NvB 82a', expansionId: 'mists-of-bilehall', cols: 3, rows: 4, color: '#1a2a3a' },
  { id: 'mb-82b', label: 'NvB 82b', expansionId: 'mists-of-bilehall', cols: 3, rows: 4, color: '#1a2a3a' },
  { id: 'mb-83a', label: 'NvB 83a', expansionId: 'mists-of-bilehall', cols: 6, rows: 3, color: '#1a2a3a' },
  { id: 'mb-83b', label: 'NvB 83b', expansionId: 'mists-of-bilehall', cols: 6, rows: 3, color: '#1a2a3a' },
  { id: 'mb-84a', label: 'NvB 84a', expansionId: 'mists-of-bilehall', cols: 7, rows: 5, color: '#1a2a3a' },
  { id: 'mb-84b', label: 'NvB 84b', expansionId: 'mists-of-bilehall', cols: 7, rows: 5, color: '#1a2a3a' },
  { id: 'mb-85a', label: 'NvB 85a', expansionId: 'mists-of-bilehall', cols: 6, rows: 6, color: '#1a2a3a' },
  { id: 'mb-85b', label: 'NvB 85b', expansionId: 'mists-of-bilehall', cols: 6, rows: 6, color: '#1a2a3a' },
  { id: 'mb-86a', label: 'NvB 86a', expansionId: 'mists-of-bilehall', cols: 8, rows: 3, color: '#1a2a3a' },
  { id: 'mb-86b', label: 'NvB 86b', expansionId: 'mists-of-bilehall', cols: 8, rows: 3, color: '#1a2a3a' },
  { id: 'mb-87a', label: 'NvB 87a', expansionId: 'mists-of-bilehall', cols: 8, rows: 8, color: '#1a2a3a' },
  { id: 'mb-87b', label: 'NvB 87b', expansionId: 'mists-of-bilehall', cols: 8, rows: 8, color: '#1a2a3a' },
  { id: 'mb-entrance-indoor',  label: 'NvB Eingang I', expansionId: 'mists-of-bilehall', cols: 2, rows: 2, color: '#1a2a3a' },
  { id: 'mb-entrance-outdoor', label: 'NvB Eingang A', expansionId: 'mists-of-bilehall', cols: 2, rows: 2, color: '#1a2a3a' },

  // ─── Rostende Ketten (cr-78/79, cr-88 – cr-98) ───────────────────────────
  { id: 'cr-78a', label: 'RK 78a', expansionId: 'the-chains-that-rust', cols: 2, rows: 2, color: '#3a1a00' },
  { id: 'cr-78b', label: 'RK 78b', expansionId: 'the-chains-that-rust', cols: 2, rows: 2, color: '#3a1a00' },
  { id: 'cr-79a', label: 'RK 79a', expansionId: 'the-chains-that-rust', cols: 2, rows: 2, color: '#3a1a00' },
  { id: 'cr-79b', label: 'RK 79b', expansionId: 'the-chains-that-rust', cols: 2, rows: 2, color: '#3a1a00' },
  { id: 'cr-88a', label: 'RK 88a', expansionId: 'the-chains-that-rust', cols: 6, rows: 6, color: '#3a1a00' },
  { id: 'cr-88b', label: 'RK 88b', expansionId: 'the-chains-that-rust', cols: 6, rows: 6, color: '#3a1a00' },
  { id: 'cr-89a', label: 'RK 89a', expansionId: 'the-chains-that-rust', cols: 4, rows: 6, color: '#3a1a00' },
  { id: 'cr-89b', label: 'RK 89b', expansionId: 'the-chains-that-rust', cols: 4, rows: 6, color: '#3a1a00' },
  { id: 'cr-90a', label: 'RK 90a', expansionId: 'the-chains-that-rust', cols: 5, rows: 5, color: '#3a1a00' },
  { id: 'cr-90b', label: 'RK 90b', expansionId: 'the-chains-that-rust', cols: 5, rows: 5, color: '#3a1a00' },
  { id: 'cr-91a', label: 'RK 91a', expansionId: 'the-chains-that-rust', cols: 4, rows: 6, color: '#3a1a00' },
  { id: 'cr-91b', label: 'RK 91b', expansionId: 'the-chains-that-rust', cols: 4, rows: 6, color: '#3a1a00' },
  { id: 'cr-92a', label: 'RK 92a', expansionId: 'the-chains-that-rust', cols: 4, rows: 6, color: '#3a1a00' },
  { id: 'cr-92b', label: 'RK 92b', expansionId: 'the-chains-that-rust', cols: 4, rows: 6, color: '#3a1a00' },
  { id: 'cr-93a', label: 'RK 93a', expansionId: 'the-chains-that-rust', cols: 4, rows: 5, color: '#3a1a00' },
  { id: 'cr-93b', label: 'RK 93b', expansionId: 'the-chains-that-rust', cols: 4, rows: 5, color: '#3a1a00' },
  { id: 'cr-94a', label: 'RK 94a', expansionId: 'the-chains-that-rust', cols: 3, rows: 5, color: '#3a1a00' },
  { id: 'cr-94b', label: 'RK 94b', expansionId: 'the-chains-that-rust', cols: 3, rows: 5, color: '#3a1a00' },
  { id: 'cr-95a', label: 'RK 95a', expansionId: 'the-chains-that-rust', cols: 4, rows: 4, color: '#3a1a00' },
  { id: 'cr-95b', label: 'RK 95b', expansionId: 'the-chains-that-rust', cols: 4, rows: 4, color: '#3a1a00' },
  { id: 'cr-96a', label: 'RK 96a', expansionId: 'the-chains-that-rust', cols: 3, rows: 4, color: '#3a1a00' },
  { id: 'cr-96b', label: 'RK 96b', expansionId: 'the-chains-that-rust', cols: 3, rows: 4, color: '#3a1a00' },
  { id: 'cr-97a', label: 'RK 97a', expansionId: 'the-chains-that-rust', cols: 2, rows: 4, color: '#3a1a00' },
  { id: 'cr-97b', label: 'RK 97b', expansionId: 'the-chains-that-rust', cols: 2, rows: 4, color: '#3a1a00' },
  { id: 'cr-98a', label: 'RK 98a', expansionId: 'the-chains-that-rust', cols: 2, rows: 4, color: '#3a1a00' },
  { id: 'cr-98b', label: 'RK 98b', expansionId: 'the-chains-that-rust', cols: 2, rows: 4, color: '#3a1a00' },
]
