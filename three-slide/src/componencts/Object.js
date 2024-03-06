import { Environment, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
function Object({ num }) {
  const model1 = useGLTF(`./models/1.glb`);
  const model2 = useGLTF(`./models/2.glb`);
  const model3 = useGLTF(`./models/3.glb`);
  const model4 = useGLTF(`./models/4.glb`);
  const model5 = useGLTF(`./models/5.glb`);
  const model6 = useGLTF(`./models/6.glb`);
  const refMesh1 = useRef();
  const refMesh2 = useRef();
  const refMesh3 = useRef();
  const refMesh4 = useRef();
  const refMesh5 = useRef();
  const refMesh6 = useRef();

  useFrame((state, delta) => {
    // refMesh1.current.rotation.y += delta;
  });

  // 반투명 효과를 위해 모델의 material을 반복하여 수정
  useEffect(() => {
    if (
      refMesh1.current &&
      refMesh2.current &&
      refMesh3.current &&
      refMesh4.current &&
      refMesh5.current &&
      refMesh6.current
    ) {
      refMesh1.current.traverse((child) => {
        if (child.isMesh) {
          child.material.transparent = true;
          child.material.opacity = 0;
        }
      });
      refMesh2.current.traverse((child) => {
        if (child.isMesh) {
          child.material.transparent = true;
          child.material.opacity = 0;
        }
      });
      refMesh3.current.traverse((child) => {
        if (child.isMesh) {
          child.material.transparent = true;
          child.material.opacity = 0;
        }
      });
      refMesh4.current.traverse((child) => {
        if (child.isMesh) {
          child.material.transparent = true;
          child.material.opacity = 0;
        }
      });
      refMesh5.current.traverse((child) => {
        if (child.isMesh) {
          child.material.transparent = true;
          child.material.opacity = 0;
        }
      });
      refMesh6.current.traverse((child) => {
        if (child.isMesh) {
          child.material.transparent = true;
          child.material.opacity = 0;
        }
      });
    }
  }, [num]);

  return (
    <>
      {/* <Environment preset="sunset" /> */}
      <primitive
        ref={refMesh1}
        scale={2}
        position-y={-3}
        object={model1.scene}
      />
      <primitive
        ref={refMesh2}
        scale={0.5}
        position-y={-2}
        object={model2.scene}
      />
      <primitive
        ref={refMesh3}
        scale={0.2}
        position-y={-2}
        object={model3.scene}
      />
      <primitive
        ref={refMesh4}
        scale={0.15}
        position-y={-2.4}
        object={model4.scene}
      />
      <primitive
        ref={refMesh5}
        scale={0.015}
        position-y={-3}
        object={model5.scene}
      />
      <primitive
        ref={refMesh6}
        scale={0.03}
        position-y={-3}
        object={model6.scene}
      />
    </>
  );
}

export default Object;
