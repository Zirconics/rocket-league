import ScoringItem from './ScoringItem.js';
export default class PowerUp extends ScoringItem {
    constructor(name, xPos, yPos, speed) {
        super(name, xPos, yPos, speed, -6);
        this.setImage(ScoringItem.loadNewImage('./assets/face_on_plus_health.png'));
    }
    move() {
        this.setXPos(ScoringItem.randomInteger(this.getYPos(), 400));
    }
    outOfCanvas(width, height) {
        if (this.getXPos() + this.getImage().width >= height) {
            this.setXPos(ScoringItem.randomInteger(0, width - 200));
            this.setYPos(ScoringItem.randomInteger(0, height - 200));
        }
    }
}
//# sourceMappingURL=PowerUp.js.map