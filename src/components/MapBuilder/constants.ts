export const CELL_SIZE = 48
// Grid expanded to accommodate large base-game tiles (up to 8×6 squares)
export const GRID_COLS = 40
export const GRID_ROWS = 32

// Inset of the playable rectangle from the PNG canvas edge on connector sides,
// in squares. A Descent 2e tile PNG canvas equals exactly cols×75 × rows×75 px.
// On each connector edge the image is stretched so the playable grid (canvas
// minus this inset on connector sides only) maps exactly onto the board cells;
// the connector tab/notch margin then overflows outside the footprint.
// Value calibrated visually by connecting tiles 01a and 02a.
export const CONNECTOR_INSET_FRAC = 0.269
