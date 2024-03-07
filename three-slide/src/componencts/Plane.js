import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Plane({ num, rotationAngle }) {
  const refMesh = useRef();
  const lightMesh = useRef();
  const { camera } = useThree();
  const radius = 100;
  const angleStep = (Math.PI * 2) / 6;

  const [currentAngle, setCurrentAngle] = useState(angleStep * num + 0.5);

  useFrame((state, delta) => {
    const targetAngle = angleStep * num + 0.5 + rotationAngle;
    const newAngle = currentAngle + (targetAngle - currentAngle) * 0.05;
    const x = Math.cos(newAngle) * radius + camera.position.x;
    const z = Math.sin(newAngle) * radius + camera.position.z;
    refMesh.current.position.set(x, 0, z);
    refMesh.current.lookAt(camera.position);

    setCurrentAngle(newAngle);
  });

  const texture = useLoader(TextureLoader, `texture/${num}.jpg`);

  return (
    <>
      <directionalLight ref={lightMesh} position={[0.5, 3, 1]} />
      <mesh ref={refMesh} scale={3}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
}

export default Plane;
