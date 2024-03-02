import { Environment, useGLTF } from "@react-three/drei";

function Object() {
  const modal = useGLTF("./modal/model.glb");
  return (
    <>
      <Environment preset="sunset" />
      <primitive object={modal.scene} />
    </>
  );
}

export default Object;
