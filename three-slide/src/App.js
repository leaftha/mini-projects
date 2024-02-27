import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./componencts/box";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
