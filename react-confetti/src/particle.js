import { randomNumBetween } from './utils';

export default class Particle {
    constructor(x, y) {
        this.width = 12;
        this.height = 12;
        this.x = x - this.width / 2;
        this.y = y - this.height / 2;

        this.r = randomNumBetween(0, 255);
        this.g = randomNumBetween(0, 255);
        this.b = randomNumBetween(0, 255);
        this.opacity = randomNumBetween(0, 1);
        this.radius = randomNumBetween(30, 100);
        this.angle = randomNumBetween(0, 360);
        this.vx = this.radius * Math.cos(this.angle);
        this.vy = this.radius * Math.sin(this.angle);

        this.gracity = 0.5;
        this.friction = 0.89;
        this.rotation = randomNumBetween(0, 360);
        this.rotationDelta = randomNumBetween(-1, 1);
        this.widthDelta = randomNumBetween(0, 360);
        this.heightDelta = randomNumBetween(0, 360);
    }

    update() {
        this.vy += this.gracity;

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;
        this.opacity -= 0.005;

        this.rotation += this.rotationDelta;

        this.widthDelta += 2;
        this.heightDelta += 2;
    }

    draw(ctx) {
        ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.opacity})`;

        ctx.fillRect(
            this.x,
            this.y,
            this.width * Math.cos((Math.PI / 180) * this.widthDelta),
            this.height * Math.sin((Math.PI / 180) * this.heightDelta)
        );
    }
}
