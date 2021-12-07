import GameItem from './GameItem.js';

export default abstract class ScoringItem extends GameItem {
  private points: number;

  private image: HTMLImageElement;

  /**
   * Initialise Scoringobject
   *
   * @param name Name of ScoringObject
   * @param xPos X Position of ScoringObject
   * @param yPos Y Position of ScoringObject
   * @param speed Speed of ScoringObject
   * @param points Points of ScoringObject
   */
  public constructor(
    name: string,
    xPos: number,
    yPos: number,
    speed: number,
    points: number,
  ) {
    super(name, xPos, yPos, speed);
    this.points = points;
  }

  /**
   * Getter for Rocket's Image element
   *
   * @returns Image element of Rocket.
   */
  public getImage(): HTMLImageElement {
    return this.image;
  }

  /**
   * Setter for ScoringItem image.
   *
   * @param image Image of item.
   */
  public setImage(image: HTMLImageElement): void {
    this.image = image;
  }

  /**
   *  Getter for scoringItem points
   *
   * @returns the amount of points of scoringItem.
   */
  public getPoints(): number {
    return this.points;
  }

  /**
   *
   *
   * @param width Canvas width
   * @param height Canvas height
   * @param canvas Canvas Element
   */
  public abstract outOfCanvas(width: number, height: number, canvas: HTMLCanvasElement): void;

  /**
   *
   */
  public abstract move(): void;

  /**
   * Draws the ScoringItem.
   *
   * @param ctx Canvas Rendering Context 2D
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.xPosition, this.yPosition);
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
