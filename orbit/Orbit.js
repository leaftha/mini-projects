import CanvasSetting from "./CanvasSetting.js";
import { radion } from "../orbit/utils.js";

export default class Orbit extends CanvasSetting {
  constructor(x, y, size, start, end, speed, random, r, g, b, opacity) {
    super();
    this.x = x;
    this.y = y;
    this.size = size;
    this.start = start;
    this.end = end;
    this.speed = speed;
    this.random = random;
    this.r = r;
    this.g = g;
    this.b = b;
    this.opacity = opacity;
  }

  update() {
    // console.log(this.end, this.random);
    if (this.start - this.end >= this.random) {
      this.start -= this.speed;
    }
    this.end -= this.speed;
  }

  draw() {
    this.ctx.strokeStyle = `rgba(${this.r},${this.g},${this.b},${this.opacity})`;
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
    this.ctx.lineWidth = 1.5;

    this.ctx.beginPath();
    this.ctx.arc(
      this.x,
      this.y,
      this.size,
      radion(this.start),
      radion(this.end),
      true
    );
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
