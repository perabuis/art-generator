import { useState } from "react";
import Color from "./components/Color.js";
import Slider from "./components/Slider.js";
import Grid from "./components/Grid.js";
import Tile from "./components/Tile.js";
//import Dimensions from "./components/Dimensions";
import { useStore } from "./store";

function App() {

  return (
    <>
      <Color name='primary' />    
      <Color name='secondary' />  
      <Color name='tertiary' />  
      <Grid />
    </>
  );
}

export default App;
