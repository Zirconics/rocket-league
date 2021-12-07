import GameItem from './GameItem.js';
import KeyboardListener from './KeyboardListener.js';
export default class Player extends GameItem {
    static INITIAL_RADIUS = 15;
    static INITIAL_SPEED = 4;
    radius;
    keyBoardListener;
    constructor(name, xPos, yPos) {
        super(name, xPos, yPos, Player.INITIAL_SPEED);
        this.radius = Player.INITIAL_RADIUS;
        this.keyBoardListener = new KeyboardListener();
    }
    setRadius(radius) {
        this.radius = radius;
    }
    move() {
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_LEFT)) {
            this.xPosition -= this.speed;
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_RIGHT)) {
            this.xPosition += this.speed;
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_UP)) {
            this.yPosition -= this.speed;
        }
        if (this.keyBoardListener.isKeyDown(KeyboardListener.KEY_DOWN)) {
            this.yPosition += this.speed;
        }
    }
    collidesWithRocket(rockets) {
        rockets.forEach((rocket) => {
            let testX;
            let testY;
            if (this.xPosition < rocket.getXPos()) {
                testX = rocket.getXPos();
            }
            else if (this.xPosition > rocket.getXPos() + rocket.getImage().width) {
                testX = rocket.getXPos() + rocket.getImage().width;
            }
            if (this.yPosition < rocket.getYPos()) {
                testY = rocket.getYPos();
            }
            else if (this.yPosition > rocket.getYPos() + rocket.getImage().height) {
                testY = rocket.getYPos() + rocket.getImage().height;
            }
            const distX = this.xPosition - testX;
            const distY = this.yPosition - testY;
            const distance = Math.sqrt(distX * distX + distY * distY);
            if (distance <= this.radius) {
                console.log('Collides with Player');
                this.radius += 3;
            }
        });
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.xPosition, this.yPosition, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }
}
//# sourceMappingURL=Player.js.map