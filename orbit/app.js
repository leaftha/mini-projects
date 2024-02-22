import { randomNumBetween } from '../orbit/utils.js';
import CanvasSetting from './CanvasSetting.js';
import Orbit from './orbit.js';

class Canvas extends CanvasSetting {
    constructor() {
        super();
        this.orbit = [];
    }

    init() {
        this.canvasWidth = innerWidth;
        this.canvasHeight = innerHeight;
        this.canvas.width = this.canvasWidth * this.dpr;
        this.canvas.height = this.canvasHeight * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);

        this.canvas.style.width = this.canvasWidth + 'px';
        this.canvas.style.height = this.canvasHeight + 'px';
    }

    createOrbit() {
        let x = this.canvasWidth / 2;
        let y = this.canvasHeight / 4;
        let color = '#ffffff';
        for (let i = 0; i < 900; i++) {
            let size = randomNumBetween(10, 1000);
            let start = randomNumBetween(20, 360);
            let length = randomNumBetween(10, 30);
            let opacity = randomNumBetween(0.1, 1);
            let end = start;
            this.orbit.push(new Orbit(x, y, size, start, end, 0.04, length, 255, 255, 255, opacity));
            this.orbit[i].draw();
        }
    }

    render() {
        let now, delta;
        let them = Date.now();

        const frame = () => {
            requestAnimationFrame(frame);
            now = Date.now();
            delta = now - them;
            if (delta < this.interval) return;

            this.ctx.fillStyle = '#25354d';
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.createOrbit();
            this.orbit.forEach((item, idx) => {
                item.update();
            });
        };

        requestAnimationFrame(frame);
    }
}
const canvas = new Canvas();

window.addEventListener('load', () => {
    canvas.init();
    canvas.render();
});

window.addEventListener('resize', () => {
    canvas.init();
});
