import Game from './Game.js';
import GameItem from './GameItem.js';

export default class Rocket extends GameItem {
  private type: string;

  private image: HTMLImageElement;

  private game: Game;

  /**
   * @param name Name of rocket
   * @param xPos X Position of rocket
   * @param yPos Y Position of rocket
   * @param speed Speed of rocket
   * @param type Type of rocket
   * @param image Image of rocket
   */
  public constructor(
    name: string,
    xPos: number,
    yPos: number,
    speed: number,
    type: string,
    image: HTMLImageElement,
  ) {
    super(name, xPos, yPos, speed);
    this.type = type;
    this.image = image;
  }

  /**
   * Getter for Rocket's X Position
   *
   * @returns X Position of Rocket.
   */
  public getXPos(): number {
    return this.xPosition;
  }

  /**
   * Getter for Rocket's Y Position.
   *
   * @returns Y Position of Rocket.
   */
  public getYPos(): number {
    return this.yPosition;
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
   * Moves the rocket
   */
  public move(): void {
    if (this.type === 'leftToRight') {
      this.xPosition += this.speed;
    } else {
      this.yPosition += this.speed;
    }
  }

  /**
   *
   *
   * @param width Canvas width
   * @param height Canvas height
   * @param canvas Canvas Element
   */
  public outOfCanvas(width: number, height: number, canvas: HTMLCanvasElement): void {
    if (this.type === 'leftToRight') {
      if (this.xPosition + this.image.width >= canvas.width) {
        this.xPosition = 0;
        this.yPosition = Game.randomInteger(0, canvas.height);
      }
    } else if (this.yPosition + this.image.height >= canvas.height) {
      this.yPosition = 0;
      this.xPosition = Game.randomInteger(0, canvas.height);
    }
  }

  /**
   * Method that draws the rockets.
   *
   * @param ctx Canvas Rendering Context 2D
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.xPosition, this.yPosition);
  }
}
