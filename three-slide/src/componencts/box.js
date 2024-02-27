function Box() {
  return (
    <>
      <directionalLight position={[1, 1, 1]} />
      <mesh scale={2}>
        <boxGeometry />
        <meshStandardMaterial color={"#F2BED1"} />
      </mesh>
    </>
  );
}

export default Box;
