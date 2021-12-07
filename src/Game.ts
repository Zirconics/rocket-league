import KeyboardListener from './KeyboardListener.js';
import Player from './Player.js';
import Rocket from './Rocket.js';

export default class Game {
  private rockets: Rocket[];

  private player: Player;

  private canvas: HTMLCanvasElement;

  private score: number;

  private ctx: CanvasRenderingContext2D;

  private keyBoardListener: KeyboardListener;

  /**
   * Construct the Game
   *
   * @param canvasId - id of the canvas
   */
  public constructor(canvasId: HTMLElement) {
    // Construct all of the canvas
    this.canvas = <HTMLCanvasElement>canvasId;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.rockets = [];

    this.keyBoardListener = new KeyboardListener();

    // add some rockets
    for (let index = 0; index < 10; index++) {
      if (index % 2 === 0) {
        this.rockets.push(this.rocketFactory('Rocket', 'leftToRight'));
        console.log('leftToRight');
      } else {
        this.rockets.push(this.rocketFactory('Rocket', 'topToBottom'));
      }
    }

    console.log(this.rockets);

    this.player = this.createPlayer('Me');
    console.log(this.player);

    this.score = 0;
    this.loop();
  }

  /**
   * Method for the Game Loop
   */
  public loop = (): void => {
    this.score += 1;
    this.draw();
    this.move();
    this.rocketOutOfCanvas();
    this.player.collidesWithRocket(this.rockets);

    this.player.move();

    requestAnimationFrame(this.loop);
  };

  /**
   * Method to create a Rocket object
   *
   * @param name - name of the rocket
   * @param type - type of the rocket
   * @returns Rocket - returns a rocket object
   *
   * The rocket object has the following attributes:
   * - name of the rocket object
   * - xPos: x position on the canvas
   * - yPos: y position on the canvas
   * - type: type of the rocket. The type will be used to determine left-to-right or
   *         top-to-bottom movement
   * - speed: speed of the rocket
   * - image: an HTMLimageElement
   */
  public rocketFactory(name: string, type: string): Rocket {
    let xPosition = Game.randomInteger(0, this.canvas.width - 200);
    let yPosition = Game.randomInteger(0, this.canvas.height - 200);
    let image: HTMLImageElement;

    if (type === 'leftToRight') {
      xPosition = 0;
      image = Game.loadNewImage('./assets/rocket-horizontal.png');
    } else {
      yPosition = 0;
      image = Game.loadNewImage('./assets/rocket-vertical.png');
    }
    const speed = Game.randomInteger(0, 15);
    return new Rocket(name, xPosition, yPosition, speed, type, image);
  }

  /**
   * Method to create a player object
   *
   * @param name - name of the player
   * @returns player - player object
   */
  public createPlayer(name: string): Player {
    return new Player(name, this.canvas.width / 2, this.canvas.height / 2);
    // return {
    //   name: name,
    //   xPos: this.canvas.width / 2,
    //   yPos: this.canvas.height / 2,
    //   radius: 15,
    //   speed: 4,
    // };
  }

  /**
   * Method to move the rockets
   */
  public move(): void {
    this.rockets.forEach((rocket) => {
      rocket.move();
    });
  }

  /**
   * Method to determine of a rocket leaves the window
   */
  public rocketOutOfCanvas(): void {
    this.rockets.forEach((rocket) => {
      rocket.outOfCanvas(this.canvas.width, this.canvas.height, this.canvas);
    });
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
  private static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

  /**
   * Draws all the necessary elements to the canvas
   */
  public draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw(this.ctx);
    // when there are elements in the rocket array
    if (this.rockets.length !== 0) {
      // clear the canvas

      // draw each rocket
      this.rockets.forEach((rocket) => {
        rocket.draw(this.ctx);
      });

      //  write the current score
      this.writeTextToCanvas(
        `Score is: ${this.score}`,
        this.canvas.width / 2,
        40,
        40,
      );
    }
  }

  /**
   * Writes text to the canvas
   *
   * @param text - Text to write
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param fontSize - Font size in pixels
   * @param color - The color of the text
   * @param alignment - Where to align the text
   */
  public writeTextToCanvas(
    text: string,
    xCoordinate: number,
    yCoordinate: number,
    fontSize: number = 20,
    color: string = 'red',
    alignment: CanvasTextAlign = 'center',
  ): void {
    const ctx = this.canvas.getContext('2d');
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = alignment;
    ctx.fillText(text, xCoordinate, yCoordinate);
  }

  /**
   * Generates a random integer number between min and max
   *
   * NOTE: this is a 'static' method. This means that this method must be called like
   * `Game.randomInteger()` instead of `this.randomInteger()`.
   *
   * @param min - minimal time
   * @param max - maximal time
   * @returns a random integer number between min and max
   */
  public static randomInteger(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }
}
