import { randomNumBetween } from "./utils.js";

export default class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.r = randomNumBetween(0, 255);
    this.g = randomNumBetween(0, 255);
    this.b = randomNumBetween(0, 255);

    this.vx = randomNumBetween(-20, 20);
    this.vy = randomNumBetween(-20, 20);

    this.ball = randomNumBetween(1, 50);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = `rgb(${this.r},${this.b},${this.g})`;
    ctx.arc(this.x, this.y, this.ball, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}
