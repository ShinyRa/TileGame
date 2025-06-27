export class Tile {
  asset: string = "";
  rotation: number = 0;

  constructor(options?: { asset: string; rotation: number }) {
    if (options) {
      this.asset = options.asset;
      this.rotation = options.rotation;
    } else {
      this.randomise();
    }
  }

  randomise() {
    const imageModules = import.meta.glob("/static/tiles/*.png", {
      eager: true,
      query: {
        enhanced: true,
      },
    });
    let randomIndex = Math.floor(Math.random() * 3);
    this.asset =
      Object.entries(imageModules)[randomIndex]?.[0].split("/static/")[1];
    this.rotation = [0, 90, 180, 270][randomIndex];
  }
}
