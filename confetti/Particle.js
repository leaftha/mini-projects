import { randomNumBetween } from "./utils.js";

export default class Particle {
  constructor(x, y) {
    this.width = 10;
    this.height = 10;

    this.x = x - this.width / 2;
    this.y = y - this.height / 2;

    this.radius = randomNumBetween(30, 100);
    this.angle = randomNumBetween(0, 360);
    this.vx = this.radius * Math.cos(this.angle);
    this.vy = this.radius * Math.sin(this.angle);

    this.r = randomNumBetween(0, 255);
    this.g = randomNumBetween(0, 255);
    this.b = randomNumBetween(0, 255);
    this.opacity = randomNumBetween(0, 1);

    this.gracity = 0.5;
    this.friction = 0.89;
  }

  update() {
    this.vy += this.gracity;

    this.vx *= this.friction;
    this.vy *= this.friction;

    this.x += this.vx;
    this.y += this.vy;
    this.opacity -= 0.005;
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.opacity})`;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
