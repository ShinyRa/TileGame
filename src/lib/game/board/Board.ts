import type { Tile } from "../deck/Tile";
import { Cell } from "./Cell";

export class Board {
  layout: Cell[][];

  constructor() {
    this.layout = Array.from({ length: 6 }, () =>
      Array.from({ length: 5 }, () => new Cell())
    );
  }

  place(x: number, y: number, tile: Tile) {
    this.layout[x][y].place(tile);
  }

  get(x: number, y: number) {
    return this.layout[x][y];
  }

  asArray() {
    return this.layout.flat();
  }
}
