import GameItem from './GameItem.js';

export default abstract class ScoringItem extends GameItem {
  private image: HTMLImageElement;

  private points: number;

  /**
   * Getter for image
   *
   * @returns Image of scoringItem
   */
  public getImage(): HTMLImageElement {
    return this.image;
  }

  /**
   * Setter for image
   *
   * @param img new image value
   */
  public setImage(img: HTMLImageElement): void {
    this.image = img;
  }

  /**
   * Getter for ScoringItem points
   *
   * @returns The pooint value of ScoringItem
   */
  public getPoints() {
    return this.points;
  }

  /**
   * Setter for ScoringItems points.
   *
   * @param points new value of points
   */
  public setPoints(points: number): void {
    this.points = points;
  }
  /**
   * Checks if ScoringItem is out of canvas
   *
   * @param canvasWidth widht of the canvas
   * @param canvasHeight height of the canvas
   */
  public abstract outOfCanvas(canvasWidth: number, canvasHeight: number): void;

  /**
   * Moves the scoringItem.
   */
  public abstract move(): void;

  /**
   * Method to draw the ScoringItem on the canvas
   *
   * @param ctx rendering context
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.getXPos(), this.getYPos());
  }

  /**
   * Loads an image in such a way that the screen doesn't constantly flicker
   *
   *
   * NOTE: this is a 'static' method. This means that this method must be called like
   * `Game.loadNewImage()` instead of `this.loadNewImage()`.
   *
   * @param source The address or URL of the a media resource that is to be loaded
   * @returns an HTMLImageElement with the source as its src attribute
   */
  protected static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

  /**
   * Generates a random integer number between min and max
   *
   * NOTE: this is a 'static' method. This means that this method must be called like
   * `Game.randomInteger()` instead of `this.randomInteger()`.
   *
   * @param min - minimal time
   * @param max - maximal time
   * @returns a random integer number between min and max
   */
  protected static randomInteger(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }
}
