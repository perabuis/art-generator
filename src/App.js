import { useState } from "react";
import Color from "./components/Color.js";
import Slider from "./components/Slider.js";
import Grid from "./components/Grid.js";
import Tile from "./components/Pattern1.js";
//import Dimensions from "./components/Dimensions";
import { useStore } from "./store";
import './App.css';
import Radio from "./components/Radio.js";

function App() {
 
  
  return (
    <>
      <Color name='primary' />    
      <Color name='secondary' />  
      <Color name='tertiary' /> 
      <Slider />  
       <Radio />  
      <Grid />
    </>
  );
}

export default App;
