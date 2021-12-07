import GameItem from './GameItem.js';
import KeyboardListener from './KeyboardListener.js';
import Rocket from './Rocket.js';

export default class Player extends GameItem {
  public static readonly INITIAL_RADIUS = 15;

  public static readonly INITIAL_SPEED = 4;

  private radius: number;

  private keyBoardListener: KeyboardListener;

  /**
   * Initialise the player.
   *
   * @param name Name of the player
   * @param xPos X Position of the player
   * @param yPos Y Position of the player
   */
  public constructor(name: string, xPos: number, yPos: number) {
    super(name, xPos, yPos, Player.INITIAL_SPEED);
    this.radius = Player.INITIAL_RADIUS;
    this.keyBoardListener = new KeyboardListener();
  }

  /**
   * Sets a new radius.
   *
   * @param radius new radius.
   */
  public setRadius(radius: number): void {
    this.radius = radius;
  }

  /**
   *
   */
  public move(): void {
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_LEFT)) {
      this.xPosition -= this.speed;
    }
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_RIGHT)) {
      this.xPosition += this.speed;
    }
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_UP)) {
      this.yPosition -= this.speed;
    }
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_DOWN)) {
      this.yPosition += this.speed;
    }
  }

  /**
   * Checks if the player collides with a rocket
   *
   * @param rockets Rocket array.
   */
  public collidesWithRocket(rockets: Rocket[]): void {
    rockets.forEach((rocket) => {
      let testX: number;
      let testY: number;
      if (this.xPosition < rocket.getXPos()) {
        testX = rocket.getXPos();
      } else if (this.xPosition > rocket.getXPos() + rocket.getImage().width) {
        testX = rocket.getXPos() + rocket.getImage().width;
      }

      if (this.yPosition < rocket.getYPos()) {
        testY = rocket.getYPos();
      } else if (this.yPosition > rocket.getYPos() + rocket.getImage().height) {
        testY = rocket.getYPos() + rocket.getImage().height;
      }

      const distX = this.xPosition - testX;
      const distY = this.yPosition - testY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance <= this.radius) {
        console.log('Collides with Player');
        this.radius += 3;
      }
    });
  }

  /**
   * Method to draw the player
   *
   * @param ctx Canvas Rendering Context 2D
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    // console.log(this.player);
    ctx.beginPath();
    ctx.arc(
      this.xPosition,
      this.yPosition,
      this.radius,
      0,
      Math.PI * 2,
      false,
    );
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.stroke();
  }
}
