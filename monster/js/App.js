import Vector from "./Vector.js";

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

    const x = new Vector(10, 10);
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

      this.ctx.clearRect(0, 0, App.width, App.height);
    };
    requestAnimationFrame(frame);
  }
}
