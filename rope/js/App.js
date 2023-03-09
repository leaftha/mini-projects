<<<<<<< HEAD
import Dot from "./Dot.js";
=======
import Vector from "./Vector";
>>>>>>> ef24870c24fe39204d6aa80743cf64ffb6a94a28

export default class App {
  static width = innerWidth;
  static height = innerHeight;
  static dpr = devicePixelRatio;
  static interval = 1000 / 60;

  constructor() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.resize();
    window.addEventListener("resize", this.resize.bind(this));

    this.dots = [new Dot(500, 100)];
  }

  resize() {
    App.width = innerWidth;
    App.height = innerHeight;

    this.canvas.style.width = `${App.width}px`;
    this.canvas.style.height = `${App.height}px`;
    this.canvas.width = App.width * App.dpr;
    this.canvas.height = App.height * App.dpr;
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
      then = now - (delta % App.interval);
<<<<<<< HEAD

      this.dots.forEach((dot) => {
        dot.update();
        dot.draw(this.ctx);
      });
=======
      this.ctx.fillRect(100, 100, 100, 100);
      console.log(new Vector(100, 100));
>>>>>>> ef24870c24fe39204d6aa80743cf64ffb6a94a28
    };
    requestAnimationFrame(frame);
  }
}
