import './App.css';
import { Canvas } from '@react-three/fiber';
import Plane from './componencts/Plane';

function App() {
    return (
        <div className="App">
            <Canvas>
                <Plane num={1} />
                <Plane num={2} />
                <Plane num={3} />
                <Plane num={4} />
                <Plane num={5} />
                <Plane num={6} />
            </Canvas>
        </div>
    );
}

export default App;
