import GameItem from './GameItem.js';
export default class ScoringItem extends GameItem {
    image;
    points;
    getImage() {
        return this.image;
    }
    setImage(img) {
        this.image = img;
    }
    getPoints() {
        return this.points;
    }
    setPoints(points) {
        this.points = points;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.getXPos(), this.getYPos());
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