import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';

function Plane({ num }) {
    const refMesh = useRef();
    const { camera } = useThree();
    const [x, setX] = useState(0);
    const [z, setZ] = useState(0);
    const radius = 50;
    const angleStep = (Math.PI * 2) / 6;
    let angle = angleStep * num;

    useFrame((state, delta) => {
        angle += delta;
        const x = Math.cos(angle) * radius + camera.position.x;
        const z = Math.sin(angle) * radius + camera.position.z;
        refMesh.current.position.set(x, 0, z);
        refMesh.current.lookAt(camera.position);
    });

    return (
        <>
            <directionalLight position={[1, 1, 1]} />
            <mesh ref={refMesh} scale={1}>
                <planeGeometry args={[10, 10, 10]} />
                <meshStandardMaterial color={'#F2BED1'} />
            </mesh>
        </>
    );
}

export default Plane;
