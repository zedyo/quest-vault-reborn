export const CELL_SIZE = 48
// Grid expanded to accommodate large base-game tiles (up to 8×6 squares)
export const GRID_COLS = 40
export const GRID_ROWS = 32

// Calibrated inset of the playable rectangle from the PNG canvas edge on connector sides.
// A Descent 2e tile PNG canvas equals exactly cols×75 × rows×75 px; the tab/notch zone
// occupies this fraction of a square on each connector edge, with the playable grid inside.
export const CONNECTOR_INSET_FRAC = 0.269
