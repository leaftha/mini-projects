import "./App.css";
import { Canvas } from "@react-three/fiber";
import Plane from "./componencts/Plane";
import { useState } from "react";

function App() {
  const [rotationAngle, setRotationAngle] = useState(0);

  const Nextrortaion = () => {
    setRotationAngle(rotationAngle + 1.05);
  };
  const Prevrortaion = () => {
    setRotationAngle(rotationAngle - 1.05);
  };
  return (
    <div className="App">
      <button onClick={Prevrortaion}>prev</button>
      <button onClick={Nextrortaion}>next</button>
      <Canvas>
        <Plane num={1} rotationAngle={rotationAngle} />
        <Plane num={2} rotationAngle={rotationAngle} />
        <Plane num={3} rotationAngle={rotationAngle} />
        <Plane num={4} rotationAngle={rotationAngle} />
        <Plane num={5} rotationAngle={rotationAngle} />
        <Plane num={6} rotationAngle={rotationAngle} />
      </Canvas>
    </div>
  );
}

export default App;
