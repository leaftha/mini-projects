import Particle from "./Particle.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const dpr = window.devicePixelRatio > 1 ? 2 : 1;
let canvasWidth = innerWidth;
let canvasHeight = innerHeight;

const interval = 1000 / 60;

let partices = [];

function init() {
  canvasWidth = innerWidth;
  canvasHeight = innerHeight;
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;
  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  ctx.scale(dpr, dpr);
}

function confetti(ex, ey, count) {
  for (let i = 0; i < count; i++) {
    partices.push(new Particle(ex, ey));
  }
}

function render() {
  let now, delta;
  let then = Date.now();

  const frame = () => {
    requestAnimationFrame(frame);
    now = Date.now();
    delta = now - then;
    if (delta < interval) return;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (let i = partices.length - 1; i >= 0; i--) {
      partices[i].update();
      partices[i].draw(ctx);

      if (partices[i].opacity < 0) {
        partices.splice(i, 1);
      }
    }

    then = now - (delta % interval);
  };
  requestAnimationFrame(frame);
}

window.addEventListener("load", () => {
  init();
  render();
});

window.addEventListener("click", (e) => {
  let ex = e.clientX;
  let ey = e.clientY;
  const count = 100;
  confetti(ex, ey, count);
});

window.addEventListener("resize", init);
