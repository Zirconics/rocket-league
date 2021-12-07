export default class GameItem {
  private name: string;

  protected xPosition: number;

  protected yPosition: number;

  protected speed: number;

  /**
   * Initialise the GameItem
   *
   * @param name Name of the GameItem
   * @param xPos X Position of the GameItem
   * @param yPos Y Position of the GameItem
   * @param speed Speed of the GameItem
   */
  public constructor(name: string, xPos: number, yPos: number, speed: number) {
    this.name = name;
    this.xPosition = xPos;
    this.yPosition = yPos;
    this.speed = speed;
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
   * Setter for x position
   *
   * @param xPos new x position
   */
  public setXPos(xPos: number): void {
    this.xPosition = xPos;
  }

  /**
   * Setter for y position
   *
   * @param yPos new y position
   */
  public setYPos(yPos: number): void {
    this.yPosition = yPos;
  }
}
