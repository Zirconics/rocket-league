import Game from './Game.js';
import GameItem from './GameItem.js';
export default class Rocket extends GameItem {
    type;
    image;
    game;
    constructor(name, xPos, yPos, speed, type, image) {
        super(name, xPos, yPos, speed);
        this.type = type;
        this.image = image;
    }
    getXPos() {
        return this.xPosition;
    }
    getYPos() {
        return this.yPosition;
    }
    getImage() {
        return this.image;
    }
    move() {
        if (this.type === 'leftToRight') {
            this.xPosition += this.speed;
        }
        else {
            this.yPosition += this.speed;
        }
    }
    outOfCanvas(width, height, canvas) {
        if (this.type === 'leftToRight') {
            if (this.xPosition + this.image.width >= canvas.width) {
                this.xPosition = 0;
                this.yPosition = Game.randomInteger(0, canvas.height);
            }
        }
        else if (this.yPosition + this.image.height >= canvas.height) {
            this.yPosition = 0;
            this.xPosition = Game.randomInteger(0, canvas.height);
        }
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPosition, this.yPosition);
    }
}
//# sourceMappingURL=Rocket.js.map