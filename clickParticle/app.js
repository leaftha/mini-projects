import Particle from "./Particle.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio;

let interval = 1000 / 60;

let particles = [];

function init() {
  let canvasWidth = innerWidth;
  let canvasHeight = innerHeight;

  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;

  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  ctx.scale(dpr, dpr);
}

function createParticle(e) {
  let x = e.pageX;
  let y = e.pageY;

  const NUM = 1;
  for (let i = 0; i < NUM; i++) {
    particles.push(new Particle(x, y));
  }
}

function render() {
  let now, delta;
  let then = Date.now();
  const frams = () => {
    requestAnimationFrame(frams);
    now = Date.now();
    delta = now - then;
    if (delta < interval) return;

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(ctx);
    }

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

window.addEventListener("click", (e) => {
  createParticle(e);
});
