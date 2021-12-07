import ScoringItem from './ScoringItem.js';

export default class PowerUp extends ScoringItem {
  /**
   * Initialises PowerUp
   *
   * @param name Name of PowerUp
   * @param xPos X Position of PowerUp
   * @param yPos Y Position of PowerUp
   * @param speed Speed of PowerUp
   */
  public constructor(
    name: string,
    xPos: number,
    yPos: number,
    speed: number,
  ) {
    super(name, xPos, yPos, speed, -6);
    this.setImage(ScoringItem.loadNewImage('./assets/face_on_plus_health.png'));
  }

  /**
   * Moves for powerup
   */
  public move(): void {
    this.setXPos(ScoringItem.randomInteger(this.getYPos(), 400));
  }

  /**
   * Out of canvas
   *
   * @param width Width of canvas
   * @param height Height of canvas
   */
  public outOfCanvas(width: number, height: number): void {
    if (this.getXPos() + this.getImage().width >= height) {
      this.setXPos(ScoringItem.randomInteger(0, width - 200));
      this.setYPos(ScoringItem.randomInteger(0, height - 200));
    }
  }
}
