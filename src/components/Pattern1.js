import PropTypes from "prop-types";
import { useStore } from "../store";
//import chroma from "chroma-js";

const Pattern1 = ({index}) => {
    const colors = useStore(state => state.colors);
    const sliderInput = useStore(state => state.cols);
  
    //determine size and position
    const size = 100 / sliderInput;
    const scale = size / 100;
    let xPosition = index % sliderInput;
    xPosition = xPosition * size;
    let yPosition = Math.floor(index / sliderInput);
    yPosition = yPosition * size;
    //determine pattern and style

    //twee classes aanmaken, een voor de kleuren en dan nog specifiek per patroon
    


  const tileStyling1 = {
    fill: colors.primary,
    stroke:'#000',
    strokeMiterlimit:10
  };
  const tileStyling2 = {
    fill: colors.secondary
  };
  const tileStyling3 = {
    fill:  colors.tertiary
  };
 /* const tileStyling1 = {
    fill: '#bdccd4'
  };
  const tileStyling2 = {
    fill: '#1c1f36'
  };
  const tileStyling3 = {
    fill:  '#477163'
  };
  
  const tileStyling4 = {
    fill:'#fff',
    stroke: '#000',
    strokeMiterlimit:10,
    strokeWidth:0.5
  }
 const tileStyling5 = {
    fill:'#60342b'
  }*/

  const screenWidth = window.innerWidth;
  console.log(screenWidth / 2);



  //Hier of statement met telkens wat er in de <g> tag zit

  
  return (
    <>
        <g  transform={` translate(${xPosition},${yPosition}) scale(${scale}) `}>
         <rect style={tileStyling1} x="0.27" y="0.26" width="99.47" height="99.47"/>
        <polygon style={tileStyling2} points="49.9 49.78 0.4 0.27 0.29 0.27 0.29 12.76 37.38 49.85 0.27 86.97 0.27 99.45 0.37 99.45 49.88 49.95 49.88 49.88 49.9 49.88 49.9 49.78"/>
        <polygon style={tileStyling3} points="86.8 99.45 50.1 62.75 50.1 62.83 13.44 99.49 25.58 99.49 50.14 74.93 50.14 74.93 74.66 99.45 86.8 99.45"/>
        <polygon style={tileStyling3} points="0.53 62.24 12.73 49.87 0.53 37.67 0.53 25.52 24.87 49.87 0.53 74.27 0.53 62.24"/>
        <polygon style={tileStyling2} points="37.95 99.77 62.29 99.77 50.12 87.6 37.95 99.77"/>
        <polygon style={tileStyling2} points="62.29 0.3 37.95 0.3 50.12 12.47 62.29 0.3"/>
        <polygon style={tileStyling2} points="50.21 49.8 99.72 0.3 99.82 0.3 99.82 12.79 62.73 49.88 99.84 86.99 99.84 99.48 99.74 99.48 50.24 49.97 50.24 49.91 50.21 49.91 50.21 49.8"/>
        <polygon style={tileStyling3} points="13.44 0.52 50.14 37.22 50.14 37.13 86.8 0.47 74.66 0.47 50.1 25.03 50.1 25.04 25.58 0.52 13.44 0.52"/>
        <polygon style={tileStyling3} points="99.48 37.56 87.28 49.93 99.48 62.13 99.48 74.27 75.14 49.93 99.48 25.52 99.48 37.56"/>
 
        </g>
    </>
  );
};

Pattern1.defaultProps = {
 // min: 0
}

Pattern1.propTypes = {
 /* onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,*/
};

export default Pattern1;
