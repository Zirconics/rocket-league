import GameItem from './GameItem.js';
import KeyboardListener from './KeyboardListener.js';

export default class Player extends GameItem {
  private name: string;

  private xPos: number;

  private yPos: number;

  private speed: number;

  private radius: number;

  private keyBoardListener: KeyboardListener;

  /**
   * Initialise the player.
   *
   * @param name Name of the player
   * @param xPos X Position of the player
   * @param yPos Y Position of the player
   * @param speed Speed of the player
   * @param radius Initial radius of the player
   */
  public constructor(name: string, xPos: number, yPos: number, speed: number, radius: number) {
    super(name, xPos, yPos, speed);
    this.radius = 4;
    this.keyBoardListener = new KeyboardListener();
  }

  /**
   *
   */
  public move() {
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_LEFT)) {
      this.xPos -= this.speed;
    }
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_RIGHT)) {
      this.xPos += this.speed;
    }
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_UP)) {
      this.yPos -= this.speed;
    }
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_DOWN)) {
      this.yPos += this.speed;
    }
  }
}
