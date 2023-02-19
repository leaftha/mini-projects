export default class CanvasSetting {
  constructor() {
    this.canvas = document.querySelector(".canvas");
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.canvas.getContext("2d");
    this.dpr = window.devicePixelRatio;
    this.fps = 144;
    this.interval = 1000 / this.fps;
    this.canvasWidth = innerWidth;
    this.canvasHeight = innerHeight;
    this.bgColor = "#14275b";
  }
}
