import type { Tile } from "../deck/Tile";

export class Cell {
  bonus: string = "";
  tile: Tile | null = null;

  constructor(options?: { bonus: string; tile: Tile }) {
    if (options) {
      this.bonus = options.bonus;
      this.tile = options.tile;
    } else {
      this.randomiseBonus();
    }
  }

  place(tile: Tile) {
    this.tile = tile;
  }

  randomiseBonus() {
    if (Math.floor(Math.random() * 100) >= 75) {
      this.bonus = Math.floor(Math.random() * 4 + 1) + "x";
    }
  }
  getBonus() {
    return this.bonus;
  }
}
