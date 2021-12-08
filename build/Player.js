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
    collidesWithScoringItem(scoringItems) {
        scoringItems.forEach((scoringItem, index) => {
            let testX;
            let testY;
            if (this.getXPos() < scoringItem.getXPos()) {
                testX = scoringItem.getXPos();
            }
            else if (this.getXPos() > scoringItem.getXPos() + scoringItem.getImage().width) {
                testX = scoringItem.getXPos() + scoringItem.getImage().width;
            }
            if (this.getYPos() < scoringItem.getYPos()) {
                testY = scoringItem.getYPos();
            }
            else if (this.getYPos() > scoringItem.getYPos() + scoringItem.getImage().height) {
                testY = scoringItem.getYPos() + scoringItem.getImage().height;
            }
            const distX = this.getXPos() - testX;
            const distY = this.getYPos() - testY;
            const distance = Math.sqrt(distX * distX + distY * distY);
            if (distance <= this.radius) {
                console.log('Collides with Player');
                this.radius += scoringItem.getPoints();
                if (scoringItem.getPoints() < 0 && this.radius > scoringItem.getPoints() + 3) {
                    scoringItems.splice(index, 1);
                }
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