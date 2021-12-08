export default abstract class GameItem {
  private name: string;

  protected xPosition: number;

  protected yPosition: number;

  private speed: number;

  /**
   * Initialize the GameItem class
   *
   * @param name name of the Game
   */
  public constructor(name: string) {
    this.name = name;
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

  /**
   * Getter for GameItem speed.
   *
   * @returns speed value of GameItem
   */
  public getSpeed(): number {
    return this.speed;
  }

  /**
   * Setter for GameItem speed.
   *
   * @param speed new value of GameItem speed
   */
  public setSpeed(speed: number): void {
    this.speed = speed;
  }
}
