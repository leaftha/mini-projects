import CanvasSetting from "./CanvasSetting.js";
import { radion } from "../orbit/utils.js";

export default class Orbit extends CanvasSetting {
  constructor(x, y, size, start, end, speed, random, color) {
    super();
    this.x = x;
    this.y = y;
    this.size = size;
    this.start = start;
    this.end = end;
    this.speed = speed;
    this.random = random;
    this.color = color;
  }

  update() {
    // console.log(this.end, this.random);
    if (this.end - this.start >= this.random) {
      this.start += this.speed;
    }
    this.end += this.speed;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(
      this.x,
      this.y,
      this.size,
      radion(this.start),
      radion(this.end)
    );
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
