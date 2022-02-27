import { useState } from "react";
import Slider from "./components/Slider.js";
import Tile from "./components/Tile.js";
import { useStore } from "./store";

function App() {
  const r = useStore(state => state.r);
  const setR = useStore(state => state.setR);
  
 // const toggleShowDislikes = useStore(state => state.toggleShowDislikes)
  const [a, setA] = useState('#A23345');
  const [g, setG] = useState(200);
  const [b, setB] = useState(200);

  return (
    <div style={{ backgroundColor: `rgb(${r},${g},${b})`, color: `rgb(${255 - r},${255 - g},${255 - b})` }}>
      <Slider value={r} onValueChange={(value) => setR(value)} />
      <Tile />
   
    </div>
  );
}

export default App;
