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

let interval = 1000 / 60;

function render() {
  let now, delta;
  let then = Date.now();
  const frams = () => {
    requestAnimationFrame(frams);
    now = Date.now();
    delta = now - then;
    if (delta < interval) return;

    then = now - (delta % interval);
  };
  requestAnimationFrame(frams);
}

window.addEventListener("load", () => {
  init();
  render();
});

window.addEventListener("resize", () => {
  init();
});
