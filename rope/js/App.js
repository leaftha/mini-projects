<<<<<<< HEAD
import Mouse from "./Mouse.js";
import Rope from "./Rope.js";
import { randomNumBetween } from "./utils.js";
=======
import Dot from "./Dot.js";
import Stick from "./Stick.js";
import Mouse from "./Mouse.js";
>>>>>>> acaba1796ed456aeca298de3e7b9382d6ac6dc6d

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

<<<<<<< HEAD
    this.mouse = new Mouse(this.canvas);

    this.initRops();
  }

  initRops() {
    this.ropes = [];
    const total = App.width * 0.06;

    for (let i = 0; i < total; i++) {
      const rope = new Rope({
        x: randomNumBetween(0, App.width),
        y: 0,
      });
      rope.pin(0);
      this.ropes.push(rope);
    }
=======
    this.dots = [
      new Dot(500, 100),
      new Dot(600, 100),
      new Dot(700, 100),
      new Dot(800, 100),
    ];
    this.sticks = [
      new Stick(this.dots[0], this.dots[1]),
      new Stick(this.dots[1], this.dots[2]),
      new Stick(this.dots[2], this.dots[3]),
    ];
    this.dots[0].pinned = true;

    this.mouse = new Mouse(this.canvas);
>>>>>>> acaba1796ed456aeca298de3e7b9382d6ac6dc6d
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
      this.ctx.clearRect(0, 0, App.width, App.height);

<<<<<<< HEAD
      this.ropes.forEach((rope) => {
        rope.update(this.mouse);
        rope.draw(this.ctx);
=======
      this.dots.forEach((dot) => {
        dot.draw(this.ctx);
      });
      this.sticks.forEach((stick) => {
        stick.draw(this.ctx);
>>>>>>> acaba1796ed456aeca298de3e7b9382d6ac6dc6d
      });
      this.dots.forEach((dot) => {
        dot.update(this.mouse);
      });
      this.sticks.forEach((stick) => {
        stick.update();
      });
    };
    requestAnimationFrame(frame);
  }
}
