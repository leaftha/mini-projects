import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Plane(num) {
  const refMesh = useRef();

  useFrame((state, delta) => {
    // refMesh.current.rotation.y += delta;
    // console.log(refMesh.current.rotation);
  });
  // console.log(num);

  return (
    <>
      <directionalLight position={[1, 1, 1]} />
      <mesh ref={refMesh} scale={1} position={[num.num + 1, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        {/* <meshStandardMaterial color={"#F2BED1"} /> */}
      </mesh>
    </>
  );
}

export default Plane;
