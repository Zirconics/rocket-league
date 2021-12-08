export default class GameItem {
    name;
    xPosition;
    yPosition;
    speed;
    constructor(name) {
        this.name = name;
    }
    getXPos() {
        return this.xPosition;
    }
    getYPos() {
        return this.yPosition;
    }
    setXPos(xPos) {
        this.xPosition = xPos;
    }
    setYPos(yPos) {
        this.yPosition = yPos;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
}
//# sourceMappingURL=GameItem.js.map