import { useState } from "react";
import Color from "./components/Color.js";
import Slider from "./components/Slider.js";
import Radio from "./components/Radio.js";
import Grid from "./components/Grid.js";

import './App.css';

function App() {
 
  
  return (
    <>
    {/*input components*/}
      <Color name='primary' />    
      <Color name='secondary' />  
      <Color name='tertiary' /> 
      <Slider />  
      <Radio />  
    {/*show grid*/}
      <Grid />
    </>
  );
}

export default App;
