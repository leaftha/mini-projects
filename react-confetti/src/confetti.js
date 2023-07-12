import { useEffect, useRef } from 'react';

const Confetti = () => {
    const canvasref = useRef(null);
    useEffect(() => {
        const canvas = canvasref.current;
        const canvasParent = canvas.parentNode;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio > 1 ? 2 : 1;

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
        window.addEventListener('resize', resize);
        resize();
    }, []);
    return <canvas ref={canvasref} />;
};

export default Confetti;
