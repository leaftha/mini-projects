const canvas = document.querySelector(".canvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio;

let CanvasWidth;
let CanvasHeigt;

function init() {
  CanvasHeigt = innerWidth;
  canvasHeight = innerHeight;
  canvas.style.width = CanvasWidth + "px";
  canvas.style.height = CanvasHeigt + "px";
  canvas.style.backgroundColor = "#111";

  canvas.width = CanvasWidth * dpr;
  canvas.height = CanvasHeigt * dpr;
  ctx.scale(dpr, dpr);
}

window.addEventListener("resize", init);
window.addEventListener("load", init);
