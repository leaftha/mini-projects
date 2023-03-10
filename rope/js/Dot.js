import Vector from "./Vector.js";

export default class Dot {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.oldPos = new Vector(x, y);

    this.gravity = new Vector(0, 1);
    this.friction = 0.97;

    this.pinned = false;
  }

  update() {
    if (this.pinned) return;
    let vel = Vector.sub(this.pos, this.oldPos);
    this.oldPos.setXY(this.pos.x, this.pos.y);
    vel.add(this.gravity);
    vel.mult(this.friction);
    this.pos.add(vel);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}
