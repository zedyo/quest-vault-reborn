export const CELL_SIZE = 48
// Grid expanded to accommodate large base-game tiles (up to 8×6 squares)
export const GRID_COLS = 40
export const GRID_ROWS = 32

// Pixel-exact inset of the playable rectangle from the PNG canvas edge on connector sides.
// A Descent 2e tile PNG canvas equals exactly cols×75 × rows×75 px. Edge-profile analysis
// of the any2cards/d2e tiles shows the body wall (playable grid boundary) sits 18 px in
// from the canvas edge on every connector side; the tab protrudes out to the edge and the
// notch cuts in to ~35 px. 18 / 75 = 0.24 squares.
export const CONNECTOR_INSET_FRAC = 18 / 75
