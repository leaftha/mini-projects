import { useEffect, useRef } from 'react';
import Particle from './particle';

const Confetti = () => {
    const canvasref = useRef(null);
    useEffect(() => {
        const canvas = canvasref.current;
        const canvasParent = canvas.parentNode;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio > 1 ? 2 : 1;
        const interval = 1000 / 60;

        let canvasWidth, canvasHeight;
        let particles = [];

        function resize() {
            canvasWidth = canvasParent.clientWidth;
            canvasHeight = canvasParent.clientHeight;
            canvas.style.width = canvasWidth + 'px';
            canvas.style.height = canvasHeight + 'px';
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            ctx.scale(dpr, dpr);
        }

        function confetti(ex, ey, count) {
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(ex, ey));
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

                for (let i = particles.length - 1; i >= 0; i--) {
                    particles[i].update();
                    particles[i].draw(ctx);
                }
                then = now - (delta % interval);
            };
            requestAnimationFrame(frame);
        }

        window.addEventListener('resize', resize);
        resize();
        render();

        window.addEventListener('click', (e) => {
            let ex = e.clientX;
            let ey = e.clientY;
            let count = 100;
            confetti(ex, ey, count);
        });
    }, []);
    return <canvas ref={canvasref} />;
};

export default Confetti;
