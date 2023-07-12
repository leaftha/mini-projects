import { useEffect, useRef } from 'react';

const Confetti = () => {
    const canvasref = useRef(null);
    useEffect(() => {
        const canvas = canvasref.current;
        const canvasParent = canvas.parentNode;
        const ctx = canvas.getContext('2d');
    }, []);
    return <canvas ref={canvasref} />;
};

export default Confetti;
