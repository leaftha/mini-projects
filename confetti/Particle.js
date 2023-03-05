import { randomNumBetween } from "./utils.js";

export default class Particle {
  constructor(x, y) {
    this.width = 10;
    this.height = 10;

    this.x = x - this.width / 2;
    this.y = y - this.height / 2;

    this.radius = randomNumBetween(3, 10);
    this.angle = randomNumBetween(0, 360);
    this.vx = this.radius * Math.cos(this.angle);
    this.vy = this.radius * Math.sin(this.angle);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
