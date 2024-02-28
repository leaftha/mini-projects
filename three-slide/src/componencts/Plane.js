import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

function Plane({ num }) {
  const refMesh = useRef();
  const { camera } = useThree();

  console.log(camera.position);

  // console.log(camera);
  // const angleStep = (2 * Math.PI) / 10;
  const angle = (num / 10) * Math.PI * 2;
  const x = 5 * Math.cos(angle);
  const z = 5 * Math.sin(angle);
  useFrame((state, delta) => {
    // refMesh.current.position.x += 0.01;
    // refMesh.current.position.y = camera.position.y;
    // refMesh.current.position.z = camera.position.z;
    // refMesh.current.lookAt(
    //   camera.position.x,
    //   camera.position.y,
    //   camera.position.z
    // );
  });
  // console.log(num);

  return (
    <>
      <directionalLight position={[1, 1, 1]} />
      <mesh ref={refMesh} scale={2} position={[x, 0, z]}>
        <planeGeometry />
        {/* <meshStandardMaterial color={"#F2BED1"} /> */}
      </mesh>
    </>
  );
}

export default Plane;
