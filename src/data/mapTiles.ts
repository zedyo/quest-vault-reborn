export interface MapTileDefinition {
  id: string
  label: string
  expansionId: string
  cols: number
  rows: number
  color: string
}

// Dimensions verified from any2cards/d2e PNG pixel sizes (75px = 1 game square)
// cols = image width / 75, rows = image height / 75
export const MAP_TILES: MapTileDefinition[] = [
  // ─── Grundspiel – Plättchen 01–13 (große Räume / Verbindungsstücke) ───────
  { id: '01a', label: '01a', expansionId: 'base', cols: 8, rows: 6, color: '#374151' },
  { id: '01b', label: '01b', expansionId: 'base', cols: 8, rows: 6, color: '#374151' },
  { id: '02a', label: '02a', expansionId: 'base', cols: 6, rows: 6, color: '#374151' },
  { id: '02b', label: '02b', expansionId: 'base', cols: 6, rows: 6, color: '#374151' },
  { id: '03a', label: '03a', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '03b', label: '03b', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '04a', label: '04a', expansionId: 'base', cols: 6, rows: 6, color: '#374151' },
  { id: '04b', label: '04b', expansionId: 'base', cols: 6, rows: 6, color: '#374151' },
  { id: '05a', label: '05a', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '05b', label: '05b', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '06a', label: '06a', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '06b', label: '06b', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '07a', label: '07a', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '07b', label: '07b', expansionId: 'base', cols: 6, rows: 4, color: '#374151' },
  { id: '08a', label: '08a', expansionId: 'base', cols: 4, rows: 4, color: '#374151' },
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
  // ─── Grundspiel – Plättchen 14–18 (mittlere Räume 4×4) ──────────────────
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
  // ─── Grundspiel – Plättchen 19–21 (breite Gänge 6×3 / 8×3) ─────────────
  { id: '19a', label: '19a', expansionId: 'base', cols: 6, rows: 3, color: '#374151' },
  { id: '19b', label: '19b', expansionId: 'base', cols: 6, rows: 3, color: '#374151' },
  { id: '20a', label: '20a', expansionId: 'base', cols: 8, rows: 3, color: '#374151' },
  { id: '20b', label: '20b', expansionId: 'base', cols: 8, rows: 3, color: '#374151' },
  { id: '21a', label: '21a', expansionId: 'base', cols: 6, rows: 3, color: '#374151' },
  { id: '21b', label: '21b', expansionId: 'base', cols: 6, rows: 3, color: '#374151' },
  // ─── Grundspiel – Plättchen 22–25 (schmale Gänge 6×2) ───────────────────
  { id: '22a', label: '22a', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '22b', label: '22b', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '23a', label: '23a', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '23b', label: '23b', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '24a', label: '24a', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '24b', label: '24b', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '25a', label: '25a', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  { id: '25b', label: '25b', expansionId: 'base', cols: 6, rows: 2, color: '#374151' },
  // ─── Grundspiel – Plättchen 26–30 (kleine Stücke / Verbinder) ───────────
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
  // ─── Grundspiel – Sonderplättchen ────────────────────────────────────────
  { id: 'entrance', label: 'Eingang', expansionId: 'base', cols: 2, rows: 2, color: '#1e3a5f' },
  { id: 'exit',     label: 'Ausgang', expansionId: 'base', cols: 2, rows: 2, color: '#1a4a2a' },
  // ─── Erweiterungen (Abmessungen noch nicht verifiziert – Bilder folgen) ──
  // Die Höhle des Lindwurms
  { id: 'lotw-01a', label: 'LotW 01a', expansionId: 'lair-of-the-wyrm', cols: 6, rows: 4, color: '#4a1942' },
  { id: 'lotw-01b', label: 'LotW 01b', expansionId: 'lair-of-the-wyrm', cols: 6, rows: 4, color: '#4a1942' },
  { id: 'lotw-02a', label: 'LotW 02a', expansionId: 'lair-of-the-wyrm', cols: 4, rows: 4, color: '#4a1942' },
  { id: 'lotw-02b', label: 'LotW 02b', expansionId: 'lair-of-the-wyrm', cols: 4, rows: 4, color: '#4a1942' },
  { id: 'lotw-03a', label: 'LotW 03a', expansionId: 'lair-of-the-wyrm', cols: 6, rows: 6, color: '#4a1942' },
  { id: 'lotw-03b', label: 'LotW 03b', expansionId: 'lair-of-the-wyrm', cols: 6, rows: 6, color: '#4a1942' },
  { id: 'lotw-s1a', label: 'LotW S1a', expansionId: 'lair-of-the-wyrm', cols: 8, rows: 6, color: '#6b2160' },
  { id: 'lotw-s1b', label: 'LotW S1b', expansionId: 'lair-of-the-wyrm', cols: 8, rows: 6, color: '#6b2160' },
  // Labyrinth des Verderbens
  { id: 'lor-36a', label: 'LoR 36a', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 4, color: '#3b2a00' },
  { id: 'lor-36b', label: 'LoR 36b', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 4, color: '#3b2a00' },
  { id: 'lor-37a', label: 'LoR 37a', expansionId: 'labyrinth-of-ruin', cols: 4, rows: 4, color: '#3b2a00' },
  { id: 'lor-37b', label: 'LoR 37b', expansionId: 'labyrinth-of-ruin', cols: 4, rows: 4, color: '#3b2a00' },
  { id: 'lor-38a', label: 'LoR 38a', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 6, color: '#3b2a00' },
  { id: 'lor-38b', label: 'LoR 38b', expansionId: 'labyrinth-of-ruin', cols: 6, rows: 6, color: '#3b2a00' },
  { id: 'lor-39a', label: 'LoR 39a', expansionId: 'labyrinth-of-ruin', cols: 8, rows: 6, color: '#3b2a00' },
  { id: 'lor-39b', label: 'LoR 39b', expansionId: 'labyrinth-of-ruin', cols: 8, rows: 6, color: '#3b2a00' },
  // Die Trollsümpfe
  { id: 'tf-01a', label: 'TS 01a', expansionId: 'the-trollfens', cols: 6, rows: 4, color: '#1a3a1a' },
  { id: 'tf-01b', label: 'TS 01b', expansionId: 'the-trollfens', cols: 6, rows: 4, color: '#1a3a1a' },
  { id: 'tf-02a', label: 'TS 02a', expansionId: 'the-trollfens', cols: 4, rows: 4, color: '#1a3a1a' },
  { id: 'tf-02b', label: 'TS 02b', expansionId: 'the-trollfens', cols: 4, rows: 4, color: '#1a3a1a' },
  { id: 'tf-03a', label: 'TS 03a', expansionId: 'the-trollfens', cols: 6, rows: 6, color: '#1a3a1a' },
  { id: 'tf-s2a', label: 'TS S2a', expansionId: 'the-trollfens', cols: 8, rows: 6, color: '#2a5a2a' },
  { id: 'tf-s2b', label: 'TS S2b', expansionId: 'the-trollfens', cols: 8, rows: 6, color: '#2a5a2a' },
  // Schloss Rabenfels
  { id: 'mor-01a', label: 'SR 01a', expansionId: 'manor-of-ravens', cols: 6, rows: 4, color: '#2a1a00' },
  { id: 'mor-01b', label: 'SR 01b', expansionId: 'manor-of-ravens', cols: 6, rows: 4, color: '#2a1a00' },
  { id: 'mor-02a', label: 'SR 02a', expansionId: 'manor-of-ravens', cols: 4, rows: 4, color: '#2a1a00' },
  { id: 'mor-02b', label: 'SR 02b', expansionId: 'manor-of-ravens', cols: 4, rows: 4, color: '#2a1a00' },
  { id: 'mor-03a', label: 'SR 03a', expansionId: 'manor-of-ravens', cols: 6, rows: 6, color: '#2a1a00' },
  { id: 'mor-03b', label: 'SR 03b', expansionId: 'manor-of-ravens', cols: 6, rows: 6, color: '#2a1a00' },
  // Schatten von Nerekhall
  { id: 'son-01a', label: 'SvN 01a', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 4, color: '#1a1a3a' },
  { id: 'son-01b', label: 'SvN 01b', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 4, color: '#1a1a3a' },
  { id: 'son-02a', label: 'SvN 02a', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 4, color: '#1a1a3a' },
  { id: 'son-02b', label: 'SvN 02b', expansionId: 'shadow-of-nerekhall', cols: 4, rows: 4, color: '#1a1a3a' },
  { id: 'son-03a', label: 'SvN 03a', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 6, color: '#1a1a3a' },
  { id: 'son-03b', label: 'SvN 03b', expansionId: 'shadow-of-nerekhall', cols: 6, rows: 6, color: '#1a1a3a' },
  { id: 'son-04a', label: 'SvN 04a', expansionId: 'shadow-of-nerekhall', cols: 8, rows: 6, color: '#1a1a3a' },
  { id: 'son-04b', label: 'SvN 04b', expansionId: 'shadow-of-nerekhall', cols: 8, rows: 6, color: '#1a1a3a' },
  // Nebel von Bilehall
  { id: 'mob-01a', label: 'NvB 01a', expansionId: 'mists-of-bilehall', cols: 6, rows: 4, color: '#1a2a3a' },
  { id: 'mob-01b', label: 'NvB 01b', expansionId: 'mists-of-bilehall', cols: 6, rows: 4, color: '#1a2a3a' },
  { id: 'mob-02a', label: 'NvB 02a', expansionId: 'mists-of-bilehall', cols: 4, rows: 4, color: '#1a2a3a' },
  { id: 'mob-02b', label: 'NvB 02b', expansionId: 'mists-of-bilehall', cols: 4, rows: 4, color: '#1a2a3a' },
  // Rostende Ketten
  { id: 'tcr-01a', label: 'RK 01a', expansionId: 'the-chains-that-rust', cols: 6, rows: 4, color: '#3a1a00' },
  { id: 'tcr-01b', label: 'RK 01b', expansionId: 'the-chains-that-rust', cols: 6, rows: 4, color: '#3a1a00' },
  { id: 'tcr-02a', label: 'RK 02a', expansionId: 'the-chains-that-rust', cols: 4, rows: 4, color: '#3a1a00' },
  { id: 'tcr-02b', label: 'RK 02b', expansionId: 'the-chains-that-rust', cols: 4, rows: 4, color: '#3a1a00' },
]
