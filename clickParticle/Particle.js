export default class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {}

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = `#fff`;
    ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}
