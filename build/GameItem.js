export default class GameItem {
    name;
    xPosition;
    yPosition;
    speed;
    constructor(name, xPos, yPos, speed) {
        this.name = name;
        this.xPosition = xPos;
        this.yPosition = yPos;
        this.speed = speed;
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
}
//# sourceMappingURL=GameItem.js.map