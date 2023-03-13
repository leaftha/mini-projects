import Dot from "./Dot.js";
import Stick from "./Stick.js";

export default class Rope {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.segements = config.segements || 10;
    this.gap = config.gap || 80;
    this.iterations = config.iterations || 10;

    this.dots = [];
    this.sticks = [];
    this.create();
  }

  pin(index) {
    this.dots[index].pinned = true;
  }

  check() {
    const dist = this.dots[0].pos.dist(this.dots[1].pos);
    if (dist / this.sticks[0].length > 1.4) {
      this.dots[0].pinned = false;
    }
  }

  create() {
    for (let i = 0; i < this.segements; i++) {
      this.dots.push(new Dot(this.x, this.y + i * this.gap));
    }

    for (let i = 0; i < this.segements - 1; i++) {
      this.sticks.push(new Stick(this.dots[i], this.dots[i + 1]));
    }
  }

  update(mouse) {
    this.check();
    this.dots.forEach((dot) => {
      dot.update(mouse);
    });

    for (let i = 0; i < this.iterations; i++) {
      this.sticks.forEach((stick) => {
        stick.update();
      });
    }
  }

  draw(ctx) {
    this.dots.forEach((dot) => {
      dot.draw(ctx);
    });
    this.sticks.forEach((stick) => {
      stick.draw(ctx);
    });
  }
}
