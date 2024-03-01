import "./App.css";
import { Canvas } from "@react-three/fiber";
import Plane from "./componencts/Plane";
import { useState } from "react";

function App() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [currentNum, setCurrentNum] = useState(4);

  const Nextrortaion = () => {
    setRotationAngle(rotationAngle - 1.0471975512);
    if (currentNum + 1 > 6) {
      setCurrentNum(1);
    } else {
      setCurrentNum(currentNum + 1);
    }
  };
  const Prevrortaion = () => {
    setRotationAngle(rotationAngle + 1.0471975512);
    if (currentNum - 1 < 1) {
      setCurrentNum(6);
    } else {
      setCurrentNum(currentNum - 1);
    }
  };

  console.log(currentNum);
  return (
    <div className="App">
      <button onClick={Prevrortaion}>prev</button>
      <button onClick={Nextrortaion}>next</button>

      <Canvas>
        {/* modal */}
        <Plane num={1} rotationAngle={rotationAngle} />
        {/* dragon */}
        <Plane num={2} rotationAngle={rotationAngle} />
        {/* cat */}
        <Plane num={3} rotationAngle={rotationAngle} />
        {/* 해태 */}
        <Plane num={4} rotationAngle={rotationAngle} />
        {/* car */}
        <Plane num={5} rotationAngle={rotationAngle} />
        {/* Minion */}
        <Plane num={6} rotationAngle={rotationAngle} />
      </Canvas>
    </div>
  );
}

export default App;
