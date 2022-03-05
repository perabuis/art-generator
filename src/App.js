//import { useState } from "react";
import { useStore } from "./store";
import Color from "./components/Color.js";
import Slider from "./components/Slider.js";
import Radio from "./components/Radio.js";
import Grid from "./components/Grid.js";

import { saveSvgAsPng } from "save-svg-as-png";
import './Reset.css';
import './App.css';


function App() {

  const colors = useStore(state => state.colors);
 
  const downloadImage = () => {
   saveSvgAsPng(document.getElementById("tilePattern"), "titlePattern.png", {scale: 10});
  }
  
   const stepStyling = {
      color: colors.primary
    }

    const buttonStyling = {
      backgroundColor: colors.primary
    }

  return (
    <>
    <div className="inputs">
    <h1 className="inputs__title">Spanish tile generator</h1>
     <p className="inputs__description">Ola seniorita! Get your spanish-inspired tile inspiration right here. Have fun costumizing.</p>

      <div className="inputs__step inputs__colors">
        <p className="step" style={stepStyling}>Pick your colors</p>
        <Color name='primary' /> 
        <Color name='secondary' />  
        <Color name='tertiary' /> 
      </div>

      <div className="inputs__step inputs__slider">
        <p className="step" style={stepStyling}>Choose a size</p>
        <Slider /> 
      </div>

      <div className="inputs__step inputs__radio">
        <p className="step" style={stepStyling}>Select a pattern</p>
        <div className="radio__input">
        <Radio />  
        </div> 
      </div>

      <a onClick={downloadImage} className="download" style={buttonStyling}>Download</a>
      </div>
      <Grid />
  
    </>
  );
}

export default App;
