import CanvasSetting from "./CanvasSetting.js";
import Star from "./Star.js";
import { randomNumBetween } from "./utils.js";

class Canvas extends CanvasSetting {
  constructor() {
    super();

    this.stars = [];
  }

  init() {
    this.canvasWidth = innerWidth;
    this.canvasHeight = innerHeight;
    this.canvas.width = this.canvasWidth * this.dpr;
    this.canvas.height = this.canvasHeight * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);

    this.canvas.style.width = this.canvasWidth + "px";
    this.canvas.style.height = this.canvasHeight + "px";
  }

  createStar() {
    const r = randomNumBetween(this.canvasWidth / 2, this.canvasWidth);
    const angle = (Math.PI / 180) * randomNumBetween(0, 360);
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);
    const speed = randomNumBetween(1, 20);
    this.stars.push(new Star(x, y, speed));
  }

  render() {
    let now, delta;
    let them = Date.now();

    const frame = () => {
      requestAnimationFrame(frame);
      now = Date.now();
      delta = now - them;
      if (delta < this.interval) return;
      this.ctx.fillStyle = this.bgColor;
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.createStar();

      this.stars.forEach((star, index) => {
        star.update();
        star.draw();

        if (star.x > this.canvasWidth) {
          this.stars.splice(index, 1);
        } else if (star.y > this.canvasHeight) {
          this.stars.splice(index, 1);
        }
      });
    };
    requestAnimationFrame(frame);
  }
}
const canvas = new Canvas();

window.addEventListener("load", () => {
  canvas.init();
  canvas.render();
});

window.addEventListener("resize", () => {
  canvas.init();
});
