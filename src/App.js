import { useState } from "react";
import Slider from "./components/Slider.js";
import Tile from "./components/Tile.js";

function App() {
  const [r, setR] = useState(200);
  const [g, setG] = useState(200);
  const [b, setB] = useState(200);

  return (
    <div style={{ backgroundColor: `rgb(${r},${g},${b})`, color: `rgb(${255 - r},${255 - g},${255 - b})` }}>
      <Tile />
      <Slider label="R" max={255} value={r} onValueChange={(value) => setR(value)} />
      <Slider label="G" max={255} value={g} onValueChange={(value) => setG(value)} />
      <Slider label="B" max={255} value={b} onValueChange={(value) => setB(value)} />
    </div>
  );
}

export default App;
