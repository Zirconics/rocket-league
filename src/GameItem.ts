export default class GameItem {
  private name: string;

  private xPos: number;

  private yPos: number;

  private speed: number;

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
    this.xPos = xPos;
    this.yPos = yPos;
    this.speed = speed;
  }

  /**
   * Getter for GameItem name
   *
   * @returns name of GameItem
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Getter for GameItem x position.
   *
   * @returns x position of GameItem
   */
  public getXPos(): number {
    return this.xPos;
  }

  /**
   * Getter for GameItem y position.
   *
   * @returns y position of GameItem
   */
  public getYPos(): number {
    return this.yPos;
  }
}
