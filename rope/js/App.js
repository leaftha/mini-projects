export default class App {
  static width = innerWidth;
  static height = innerHeight;
  static dpr = devicePixelRatio;

  constructor() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.resize();
    window.addEventListener("resize", this.resize.bind(this));
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

  render() {}
}
