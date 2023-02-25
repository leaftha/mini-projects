const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio;

function init() {
  let canvasWidth = innerWidth;
  let canvasHeight = innerHeight;

  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;

  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  ctx.scale(dpr, dpr);
}

window.addEventListener("load", () => {
  init();
});

window.addEventListener("resize", () => {
  init();
});
