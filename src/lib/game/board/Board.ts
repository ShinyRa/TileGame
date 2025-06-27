import { Cell } from "./Cell";

export class Board {
  layout;

  constructor() {
    this.layout = Array.from({ length: 6 }, () =>
      Array.from({ length: 5 }, () => new Cell())
    );
  }

  get(x: number, y: number) {
    return this.layout[x][y];
  }

  asArray() {
    return this.layout.flat();
  }
}
