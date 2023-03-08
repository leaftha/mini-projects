import Vector from "./Vector.js";
<<<<<<< HEAD
import Dot from "./Dot.js";
=======
>>>>>>> 22e0663e1f0e124bcabd8551f43cfeee7f9a538f

export default class App {
  static width = innerWidth;
  static height = innerHeight;
  static dpr = devicePixelRatio > 1 ? 2 : 1;
  static interval = 1000 / 60;

  constructor() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.resize();
    window.addEventListener("resize", this.resize.bind(this));

<<<<<<< HEAD
    this.dots = [new Dot(500, 100), new Dot(700, 100)];
=======
    const x = new Vector(10, 10);
>>>>>>> 22e0663e1f0e124bcabd8551f43cfeee7f9a538f
  }

  resize() {
    App.width = innerWidth;
    App.height = innerHeight;

    this.canvas.style.width = `${App.width}px`;
    this.canvas.style.height = `${App.height}px`;
    this.canvas.width = App.dpr * App.width;
    this.canvas.height = App.dpr * App.height;
    this.ctx.scale(App.dpr, App.dpr);
  }
  render() {
    let now, delta;
    let then = Date.now();
    const frame = () => {
      requestAnimationFrame(frame);
      now = Date.now();
      delta = now - then;
      if (delta < App.interval) return;
      then = now - (delta & App.interval);

<<<<<<< HEAD
      // this.ctx.clearRect(0, 0, App.width, App.height);

      this.dots.forEach((dot) => {
        dot.update();
        dot.draw(this.ctx);
      });
=======
      this.ctx.clearRect(0, 0, App.width, App.height);
>>>>>>> 22e0663e1f0e124bcabd8551f43cfeee7f9a538f
    };
    requestAnimationFrame(frame);
  }
}
