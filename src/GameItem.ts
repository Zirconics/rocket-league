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
}
