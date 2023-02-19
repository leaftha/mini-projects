import CanvasSetting from "./CanvasSetting.js";

export default class Star extends CanvasSetting {
  constructor(x, y, speed) {
    super();
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  update() {
    this.x += this.speed;
    this.y += this.speed;
  }

  draw() {
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }
}
