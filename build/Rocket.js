import ScoringItem from './ScoringItem.js';
export default class Rocket extends ScoringItem {
    type;
    constructor(type, canvasWidth, canvasHeight) {
        super('Rocket');
        let xPosition = ScoringItem.randomInteger(0, canvasWidth - 200);
        let yPosition = ScoringItem.randomInteger(0, canvasHeight - 200);
        if (type === 'leftToRight') {
            xPosition = 0;
            this.setImage(Rocket.loadNewImage('./assets/rocket-horizontal.png'));
        }
        else {
            yPosition = 0;
            this.setImage(Rocket.loadNewImage('./assets/rocket-vertical.png'));
        }
        this.setXPos(xPosition);
        this.setYPos(yPosition);
        this.type = type;
        this.setSpeed(ScoringItem.randomInteger(5, 15));
        this.setPoints(3);
    }
    draw(ctx) {
        ctx.drawImage(this.getImage(), this.getXPos(), this.getYPos());
    }
    move() {
        if (this.type === 'leftToRight') {
            this.setXPos(this.getXPos() + this.getSpeed());
        }
        else {
            this.setYPos(this.getYPos() + this.getSpeed());
        }
    }
    outOfCanvas(canvasWidth, canvasHeight) {
        if (this.type === 'leftToRight') {
            if (this.getXPos() + this.getImage().width >= canvasWidth) {
                this.setXPos(0);
                this.setYPos(ScoringItem.randomInteger(0, canvasHeight));
            }
        }
        else if (this.getXPos() + this.getImage().height >= canvasHeight) {
            this.setYPos(0);
            this.setXPos(ScoringItem.randomInteger(0, canvasWidth));
        }
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
//# sourceMappingURL=Rocket.js.map