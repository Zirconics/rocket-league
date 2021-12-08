import ScoringItem from './ScoringItem.js';

export default class Rocket extends ScoringItem {
  private type: string;

  /**
   * Initialize the Rocket
   *
   * @param type type of the Rocket
   * @param canvasWidth width of the canvas
   * @param canvasHeight heighst of the canvas
   */
  public constructor(type: string, canvasWidth: number, canvasHeight: number) {
    super('Rocket');

    let xPosition = ScoringItem.randomInteger(0, canvasWidth - 200);
    let yPosition = ScoringItem.randomInteger(0, canvasHeight - 200);

    if (type === 'leftToRight') {
      xPosition = 0;
      this.setImage(Rocket.loadNewImage('./assets/rocket-horizontal.png'));
    } else {
      yPosition = 0;
      this.setImage(Rocket.loadNewImage('./assets/rocket-vertical.png'));
    }

    this.setXPos(xPosition);
    this.setYPos(yPosition);

    this.type = type;
    this.setSpeed(ScoringItem.randomInteger(5, 15));

    this.setPoints(3);
  }

  /**
   * Method to draw the Rocket on the canvas
   *
   * @param ctx rendering context
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.getImage(), this.getXPos(), this.getYPos());
  }

  /**
   * Method to move the Rocket
   */
  public move(): void {
    if (this.type === 'leftToRight') {
      this.setXPos(this.getXPos() + this.getSpeed());
    } else {
      this.setYPos(this.getYPos() + this.getSpeed());
    }
  }

  /**
   * Checks if Rocket is out of canvas
   *
   * @param canvasWidth widht of the canvas
   * @param canvasHeight height of the canvas
   */
  public outOfCanvas(canvasWidth: number, canvasHeight: number): void {
    if (this.type === 'leftToRight') {
      if (this.getXPos() + this.getImage().width >= canvasWidth) {
        this.setXPos(0);
        this.setYPos(ScoringItem.randomInteger(0, canvasHeight));
      }
    } else if (this.getXPos() + this.getImage().height >= canvasHeight) {
      this.setYPos(0);
      this.setXPos(ScoringItem.randomInteger(0, canvasWidth));
    }
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
}
