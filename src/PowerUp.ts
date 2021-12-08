import ScoringItem from './ScoringItem.js';

export default class PowerUp extends ScoringItem {
  /**
   * Constructor of PowerUp
   *
   * @param canvasWidth width
   * @param canvasHeight height
   */
  public constructor(canvasWidth: number, canvasHeight: number) {
    super('PowerUp');

    const xPosition = ScoringItem.randomInteger(0, canvasWidth - 200);
    const yPosition = ScoringItem.randomInteger(0, canvasHeight - 200);

    this.setImage(ScoringItem.loadNewImage('./assets/face_on_plus_health.png'));

    this.setXPos(xPosition);
    this.setYPos(yPosition);

    this.setPoints(-3);
  }

  /**
   * Checks if Rocket is out of canvas
   *
   * @param canvasWidth widht of the canvas
   * @param canvasHeight height of the canvas
   */
  // eslint-disable-next-line class-methods-use-this
  public outOfCanvas(canvasWidth: number, canvasHeight: number): void {
    // Empty
  }

  /**
   * Method to move the Rocket
   */
  // eslint-disable-next-line class-methods-use-this
  public move(): void {
    // Empty
  }
}
