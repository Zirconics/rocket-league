import Game from './Game.js';
import GameItem from './GameItem.js';

export default class Rocket extends GameItem {
  private name: string;

  private xPos: number;

  private yPos: number;

  private speed: number;

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

    // this.xPos = Rocket.randomInteger(0, this.canvas.width - 200);
    // this.yPos = Rocket.randomInteger(0, this.canvas.height - 200);

    // if (type === 'leftToRight') {
    //   this.image = Rocket.loadNewImage('./assets/rocket-horizontal.png');
    // } else {
    //   this.image = Rocket.loadNewImage('./assets/rocket-vertical.png');
    // }
  }
}
