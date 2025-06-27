import { Tile } from "./Tile";

export class Deck {
  tiles: Tile[];
  constructor() {
    let i = 0;
    this.tiles = Array.from({ length: 45 }, () => new Tile());
  }

  draw(num: number): Tile[] {
    const cards = [];

    for (let i = 0; i < num; i++) {
      let topTile = this.tiles.pop();
      cards.push(topTile);
    }

    return cards;
  }

  getTiles() {
    return this.tiles;
  }
}
