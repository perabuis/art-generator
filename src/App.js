import { useState } from "react";
import Slider from "./components/Slider.js";
import Tile from "./components/Tile.js";
import { useStore } from "./store";

function App() {
  const firstColor = useStore(state => state.firstColor);
  const setFirstColor = useStore(state => state.setFirstColor);
   const secondColor = useStore(state => state.secondColor);
  const setSecondColor = useStore(state => state.setSecondColor);

  return (
    <>
      <Slider value={firstColor} onValueChange={(value) => setFirstColor(value)} />
      <Slider value={secondColor} onValueChange={(value) => setSecondColor(value)} />
      <Tile />
    </>
  );
}

export default App;
