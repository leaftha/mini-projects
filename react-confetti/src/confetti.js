import { useEffect, useRef } from 'react';

const Confetti = () => {
    const canvasref = useRef(null);
    useEffect(() => {
        const canvas = canvasref.current;
        const canvasParent = canvas.parentNode;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio > 1 ? 2 : 1;
        const interval = 1000 / 60;

        let canvasWidth, canvasHeight;

        function resize() {
            canvasWidth = canvasParent.clientWidth;
            canvasHeight = canvasParent.clientHeight;
            canvas.style.width = canvasWidth + 'px';
            canvas.style.height = canvasHeight + 'px';
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            ctx.scale(dpr, dpr);
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

                then = now - (delta % interval);
            };
            requestAnimationFrame(frame);
        }

        window.addEventListener('resize', resize);
        resize();
    }, []);
    return <canvas ref={canvasref} />;
};

export default Confetti;
