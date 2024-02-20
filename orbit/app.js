import CanvasSetting from "./CanvasSetting.js";

function toRadian(d) {
  // radian으로 변환하는 함수, 각도를 파라미터로 넣는다
  return (d * Math.PI) / 180;
}

class Canvas extends CanvasSetting {
  constructor() {
    super();
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

  create(x, y, start, dely) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, 20, toRadian(start), toRadian(dely));
    // this.ctx.fillStyle = "blue";
    this.ctx.stroke();
    this.ctx.closePath();
  }

  render() {
    let now, delta;
    let them = Date.now();
    let b = Math.floor(Math.random() * 180);
    let a = b + 20;
    let x = 100;
    let y = 100;

    const frame = () => {
      requestAnimationFrame(frame);
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

      this.create(x, y, b, a);
      a += 0.4;
      b += 0.4;

      now = Date.now();
      delta = now - them;

      if (delta < this.interval) return;
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
