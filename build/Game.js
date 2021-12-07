import KeyboardListener from './KeyboardListener.js';
import Player from './Player.js';
import Rocket from './Rocket.js';
export default class Game {
    rockets;
    player;
    canvas;
    score;
    ctx;
    keyBoardListener;
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.rockets = [];
        this.keyBoardListener = new KeyboardListener();
        for (let index = 0; index < 10; index++) {
            if (index % 2 === 0) {
                this.rockets.push(this.rocketFactory('Rocket', 'leftToRight'));
                console.log('leftToRight');
            }
            else {
                this.rockets.push(this.rocketFactory('Rocket', 'topToBottom'));
            }
        }
        console.log(this.rockets);
        this.player = this.createPlayer('Me');
        console.log(this.player);
        this.score = 0;
        this.loop();
    }
    loop = () => {
        this.score += 1;
        this.draw();
        this.move();
        this.rocketOutOfCanvas();
        this.player.collidesWithRocket(this.rockets);
        this.player.move();
        requestAnimationFrame(this.loop);
    };
    rocketFactory(name, type) {
        let xPosition = Game.randomInteger(0, this.canvas.width - 200);
        let yPosition = Game.randomInteger(0, this.canvas.height - 200);
        let image;
        if (type === 'leftToRight') {
            xPosition = 0;
            image = Game.loadNewImage('./assets/rocket-horizontal.png');
        }
        else {
            yPosition = 0;
            image = Game.loadNewImage('./assets/rocket-vertical.png');
        }
        const speed = Game.randomInteger(0, 15);
        return new Rocket(name, xPosition, yPosition, speed, type, image);
    }
    createPlayer(name) {
        return new Player(name, this.canvas.width / 2, this.canvas.height / 2);
    }
    move() {
        this.rockets.forEach((rocket) => {
            rocket.move();
        });
    }
    rocketOutOfCanvas() {
        this.rockets.forEach((rocket) => {
            rocket.outOfCanvas(this.canvas.width, this.canvas.height, this.canvas);
        });
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.ctx);
        if (this.rockets.length !== 0) {
            this.rockets.forEach((rocket) => {
                rocket.draw(this.ctx);
            });
            this.writeTextToCanvas(`Score is: ${this.score}`, this.canvas.width / 2, 40, 40);
        }
    }
    writeTextToCanvas(text, xCoordinate, yCoordinate, fontSize = 20, color = 'red', alignment = 'center') {
        const ctx = this.canvas.getContext('2d');
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
//# sourceMappingURL=Game.js.map