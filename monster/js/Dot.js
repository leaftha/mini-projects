import Vector from "./Vector.js";

export default class Dot {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.oldPost = new Vector(x, y);

    this.gravity = new Vector(0, 1);
    this.friction = 0.97;

    this.pinned = false;

    this.mass = 1;
  }

<<<<<<< HEAD
  update(mouse) {
=======
  update() {
>>>>>>> 422076e0af038425ad97643d0f6639ee89c3d3eb
    if (this.pinned) return;
    let vel = Vector.sub(this.pos, this.oldPost);
    this.oldPost.setXY(this.pos.x, this.pos.y);
    vel.mult(this.friction);
    vel.add(this.gravity);

    let { x: dx, y: dy } = Vector.sub(mouse.pos, this.pos);
    const dist = Math.sqrt(dx * dx + dy * dy);
    const direction = new Vector(dx / dist, dy / dist);

    const force = Math.max((mouse.radius - dist) / mouse.radius, 0);

    if (force > 0.8) this.pos.setXY(mouse.pos.x, mouse.pos.y);
    else {
      this.pos.add(vel);
      this.pos.add(direction.mult(force).mult(5));
    }
  }

  draw(ctx) {
    ctx.fillStyle = "#111";
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}
