import { Environment, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
function Object({ num }) {
  const model = useGLTF(`./models/${num}.glb`);
  const refMesh = useRef();

  useFrame((state, delta) => {
    refMesh.current.rotation.y += delta;
  });
  let modalScale = 1;

  if (num === 4) {
    modalScale = 0.2;
  } else if (num === 5) {
    modalScale = 0.02;
  } else if (num === 6) {
    modalScale = 0.03;
  } else if (num === 1) {
    modalScale = 2;
  } else if (num === 2) {
    modalScale = 0.3;
  } else if (num === 3) {
    modalScale = 0.2;
  }

  return (
    <>
      {/* <Environment preset="sunset" /> */}
      <primitive
        ref={refMesh}
        scale={modalScale}
        position-y={-2.5}
        object={model.scene}
      />
    </>
  );
}

export default Object;
