import Game from './Game.js';
import ScoringItem from './ScoringItem.js';
export default class Rocket extends ScoringItem {
    type;
    constructor(name, xPos, yPos, speed, type) {
        super(name, xPos, yPos, speed, 3);
        this.type = type;
        if (type === 'leftToRight') {
            this.xPosition = 0;
            this.setImage(Rocket.loadNewImage('./assets/rocket-horizontal.png'));
        }
        else {
            this.yPosition = 0;
            this.setImage(Rocket.loadNewImage('./assets/rocket-vertical.png'));
        }
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
            if (this.xPosition + this.getImage().width >= canvas.width) {
                this.xPosition = 0;
                this.yPosition = Game.randomInteger(0, canvas.height);
            }
        }
        else if (this.yPosition + this.getImage().height >= canvas.height) {
            this.yPosition = 0;
            this.xPosition = Game.randomInteger(0, canvas.height);
        }
    }
}
//# sourceMappingURL=Rocket.js.map