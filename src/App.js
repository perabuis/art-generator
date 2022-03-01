import { useState } from "react";
import Color from "./components/Color.js";
import Slider from "./components/Slider.js";
import Grid from "./components/Grid.js";
import Tile from "./components/Tile.js";
//import Dimensions from "./components/Dimensions";
import { useStore } from "./store";
import './App.css';

function App() {
  const cols = useStore(state => state.cols);
  const setCols = useStore(state => state.setCols);
  
  return (
    <>
      <Color name='primary' />    
      <Color name='secondary' />  
      <Color name='tertiary' /> 
      <Slider value={cols} onValueChange={(value) => setCols(value)}/>  
      <Grid />
    </>
  );
}

export default App;
