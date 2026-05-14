export type Rotation = 0 | 90 | 180 | 270

export interface PlacedMapTile {
  instanceId: string
  tileId: string
  col: number
  row: number
  rotation: Rotation
}
