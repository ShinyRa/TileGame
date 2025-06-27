export class Cell {
  bonus: string;
  constructor() {
    this.setBonus();
  }

  setBonus() {
    if (Math.floor(Math.random() * 100) >= 75) {
      this.bonus = Math.floor(Math.random() * 4 + 1) + "x";
    }
  }

  getBonus() {
    return this.bonus;
  }
}
