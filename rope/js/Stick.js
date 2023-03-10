export default class Stick {
  constructor(p1, p2) {
    this.startPoint = p1;
    this.endPoint = p2;
    this.length = this.startPoint.pos.dist(this.endPoint.pos);
    this.tension = 0.4;
  }

  update() {
    const dx = this.endPoint.pos.x - this.startPoint.pos.x;
    const dy = this.endPoint.pos.y - this.startPoint.pos.y;

    const dist = Math.sqrt(dx * dx + dy * dy);
    const diff = (dist - this.length) / dist;

    const ax = diff * dx * this.tension;
    const ay = diff * dy * this.tension;

    if (!this.startPoint.pinned) {
      this.startPoint.pos.x += ax;
      this.startPoint.pos.y += ay;
    }
    if (!this.endPoint.pinned) {
      this.endPoint.pos.x -= ax;
      this.endPoint.pos.y -= ay;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "#999";
    ctx.lineWidth = 1;
    ctx.moveTo(this.startPoint.pos.x, this.startPoint.pos.y);
    ctx.lineTo(this.endPoint.pos.x, this.endPoint.pos.y);
    ctx.stroke();
    ctx.closePath();
  }
}
