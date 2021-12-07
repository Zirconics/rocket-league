import GameItem from './GameItem.js';
export default class ScoringItem extends GameItem {
    points;
    image;
    constructor(name, xPos, yPos, speed, points) {
        super(name, xPos, yPos, speed);
        this.points = points;
    }
    getImage() {
        return this.image;
    }
    setImage(image) {
        this.image = image;
    }
    getPoints() {
        return this.points;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.xPosition, this.yPosition);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
//# sourceMappingURL=ScoringItem.js.map