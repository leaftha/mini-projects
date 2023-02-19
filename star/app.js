import CanvasSetting from "./CanvasSetting.js";
import Star from "./Star.js";
import { randomNumBetween } from "./utils.js";

let isfalse = false;

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
    let color;
    const r = randomNumBetween(this.canvasWidth / 2, this.canvasWidth);
    const angle = (Math.PI / 180) * randomNumBetween(0, 360);
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);
    const speed = randomNumBetween(1, 6);
    if (!isfalse) {
      color = "white";
    } else {
      color = `rgb(
        ${randomNumBetween(0, 255)},
        ${randomNumBetween(0, 255)},
        ${randomNumBetween(0, 255)})`;
    }
    this.stars.push(new Star(x, y, speed, color));
  }

  render() {
    let now, delta;
    let them = Date.now();

    const frame = () => {
      requestAnimationFrame(frame);
      now = Date.now();
      delta = now - them;
      if (delta < this.interval) return;
      if (!isfalse) {
        this.ctx.fillStyle = this.bgColor + 40;
      } else {
        this.ctx.fillStyle = "#000000" + 40;
      }
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
        if (star.opacity < 0) {
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

window.addEventListener("click", () => {
  if (isfalse) {
    isfalse = false;
  } else {
    isfalse = true;
  }
});
