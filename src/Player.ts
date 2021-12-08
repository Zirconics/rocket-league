import GameItem from './GameItem.js';
import KeyboardListener from './KeyboardListener.js';
import ScoringItem from './ScoringItem.js';

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
  public constructor(xPos: number, yPos: number) {
    super('tests');
    this.setXPos(xPos / 2);
    this.setYPos(yPos / 2);
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
  // TODO: Fix getXPos and getYPos;
  public move(): void {
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_LEFT)) {
      this.xPosition -= this.getSpeed();
    }
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_RIGHT)) {
      this.xPosition += this.getSpeed();
    }
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_UP)) {
      this.yPosition -= this.getSpeed();
    }
    if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_DOWN)) {
      this.yPosition += this.getSpeed();
    }
  }

  /**
   * Method to find out if player collides with a scoring item
   *
   * @param scoringItems array of scoringItems
   */
  public collidesWithScoringItem(scoringItems: ScoringItem[]): void {
    scoringItems.forEach((scoringItem, index) => {
      let testX: number;
      let testY: number;
      if (this.getXPos() < scoringItem.getXPos()) {
        testX = scoringItem.getXPos();
      } else if (
        this.getXPos() > scoringItem.getXPos() + scoringItem.getImage().width
      ) {
        testX = scoringItem.getXPos() + scoringItem.getImage().width;
      }

      if (this.getYPos() < scoringItem.getYPos()) {
        testY = scoringItem.getYPos();
      } else if (
        this.getYPos() > scoringItem.getYPos() + scoringItem.getImage().height
      ) {
        testY = scoringItem.getYPos() + scoringItem.getImage().height;
      }

      const distX = this.getXPos() - testX;
      const distY = this.getYPos() - testY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance <= this.radius) {
        console.log('Collides with Player');
        // TODO: make sure the player does not shrink to unvisible portions :-)
        this.radius += scoringItem.getPoints();
        if (
          scoringItem.getPoints() < 0 && this.radius > scoringItem.getPoints() + 3
        ) {
          scoringItems.splice(index, 1);
        }
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
      this.getXPos(),
      this.getYPos(),
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
