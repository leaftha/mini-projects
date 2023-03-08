import Vector from "./Vector.js";

export default class Dot {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.oldPost = new Vector(x, y);

    this.gravity = new Vector(0, 1);
    this.friction = 0.97;
  }

  update() {
    let vel = Vector.sub(this.pos, this.oldPost);
    this.oldPost.setXY(this.pos.x, this.pos.y);
    vel.mult(this.friction);
    vel.add(this.gravity);

    this.pos.add(vel);
  }

  draw(ctx) {
    ctx.fillStyle = "#111";
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}
