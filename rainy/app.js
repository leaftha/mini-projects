const canvas = document.querySelector(".canvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio;

let CanvasWidth;
let CanvasHeigt;
let rains;

let clicked = false;

const randomNum = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

function init() {
  CanvasWidth = innerWidth;
  CanvasHeigt = innerHeight;
  canvas.style.width = CanvasWidth + "px";
  canvas.style.height = CanvasHeigt + "px";
  canvas.style.backgroundColor = "#111";
  canvas.width = CanvasWidth * dpr;
  canvas.height = CanvasHeigt * dpr;
  ctx.scale(dpr, dpr);
  rains = [];
  const total = CanvasWidth / 10;

  for (let i = 0; i < total; i++) {
    const x = randomNum(0, CanvasWidth);
    const y = randomNum(0, CanvasHeigt);
    const speed = randomNum(2, 5);
    const length = randomNum(0, 20);
    const vy = randomNum(1, 5);
    const rain = new Rain(x, y, speed, length, vy);
    rains.push(rain);
  }
}

class Rain {
  constructor(x, y, speed, length, vy, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.length = length;
    this.vy = vy;
    this.color = color;
    this.acc = 1.03;
  }

  update() {
    this.vy *= this.acc;
    this.y += this.vy;
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.length);
    ctx.stroke();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  rains.forEach((rain) => {
    rain.update();
    rain.draw();

    if (rain.y > CanvasHeigt) {
      rain.y = 0;
      rain.x = randomNum(0, CanvasWidth);
      rain.vy = randomNum(1, 5);
    }

    if (clicked) {
      rain.color = `rgb(
        ${randomNum(0, 255)},
        ${randomNum(0, 255)},
        ${randomNum(0, 255)}
      )`;
    } else {
      rain.color = "white";
    }
  });
  window.requestAnimationFrame(animate);
}

window.addEventListener("load", () => {
  init();
  animate();
});
window.addEventListener("resize", () => {
  init();
});

window.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
  } else {
    clicked = false;
  }
});
