import Game from './Game.js';
import ScoringItem from './ScoringItem.js';

export default class Rocket extends ScoringItem {
  private type: string;

  /**
   * @param name Name of rocket
   * @param xPos X Position of rocket
   * @param yPos Y Position of rocket
   * @param speed Speed of rocket
   * @param type Type of rocket
   */
  public constructor(
    name: string,
    xPos: number,
    yPos: number,
    speed: number,
    type: string,
  ) {
    super(name, xPos, yPos, speed, 3);
    this.type = type;

    if (type === 'leftToRight') {
      this.xPosition = 0;
      this.setImage(Rocket.loadNewImage('./assets/rocket-horizontal.png'));
    } else {
      this.yPosition = 0;
      this.setImage(Rocket.loadNewImage('./assets/rocket-vertical.png'));
    }
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
      if (this.xPosition + this.getImage().width >= canvas.width) {
        this.xPosition = 0;
        this.yPosition = Game.randomInteger(0, canvas.height);
      }
    } else if (this.yPosition + this.getImage().height >= canvas.height) {
      this.yPosition = 0;
      this.xPosition = Game.randomInteger(0, canvas.height);
    }
  }
}
