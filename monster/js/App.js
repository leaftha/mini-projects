import Mouse from "./Mouse.js";
import Rope from "./Rope.js";

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

    this.mouse = new Mouse(this.canvas);
  }

  resize() {
    App.width = innerWidth;
    App.height = innerHeight;

    this.canvas.style.width = `${App.width}px`;
    this.canvas.style.height = `${App.height}px`;
    this.canvas.width = App.dpr * App.width;
    this.canvas.height = App.dpr * App.height;
    this.ctx.scale(App.dpr, App.dpr);

    this.initRopes();
  }

  initRopes() {
    this.ropes = [];
    const TOTAL = 31;
    let Xindex = 0;
    let add = 150;
    let Yindex = 0;

    for (let i = 0; i < TOTAL; i++) {
      const rope = new Rope({
        x: Xindex,
        y: Yindex,
        gap: 20,
      });
      Xindex += add;
      if (Xindex >= App.width) {
        Xindex = 0;
        add += 50;
        Yindex += 300;
      }
      console.log(Yindex);
      rope.pin(0);
      this.ropes.push(rope);
    }
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

      this.ropes.forEach((rope) => {
        rope.update(this.mouse);
        rope.draw(this.ctx);
      });
    };
    requestAnimationFrame(frame);
  }
}
