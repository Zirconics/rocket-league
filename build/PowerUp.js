import ScoringItem from './ScoringItem.js';
export default class PowerUp extends ScoringItem {
    constructor(canvasWidth, canvasHeight) {
        super('PowerUp');
        const xPosition = ScoringItem.randomInteger(0, canvasWidth - 200);
        const yPosition = ScoringItem.randomInteger(0, canvasHeight - 200);
        this.setImage(ScoringItem.loadNewImage('./assets/face_on_plus_health.png'));
        this.setXPos(xPosition);
        this.setYPos(yPosition);
        this.setPoints(-3);
    }
    outOfCanvas(canvasWidth, canvasHeight) {
    }
    move() {
    }
}
//# sourceMappingURL=PowerUp.js.map