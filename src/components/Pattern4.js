import PropTypes from "prop-types";
import { useStore } from "../store";

const randomColor = require('randomcolor');
const strangeColor = randomColor();
const strangeColor2 = randomColor();
const strangeColor3 = randomColor();


const Pattern4 = ({index}) => {
    const colors = useStore(state => state.colors);
    const sliderInput = useStore(state => state.cols);
  
    //determine size and position
    const size = 100 / sliderInput;
    const scale = size / 100;
    let xPosition = index % sliderInput;
    xPosition = xPosition * size;
    let yPosition = Math.floor(index / sliderInput);
    yPosition = yPosition * size;

    //determine style
    const tileStyling1 = {
          fill: colors.tertiary,
          stroke: "#434854",
          strokeMiterlimit:10,
          strokeWidth:0.5
    };
    const tileStyling2 = {
      fill: colors.secondary
    };
    const tileStyling3 = {
      fill:  strangeColor
    };
    
    const tileStyling4 = {
      fill: colors.tertiary,
    }
  const tileStyling5 = {
      fill: strangeColor2
    }
  
  return (
    <>
      <g  transform={` translate(${xPosition},${yPosition}) scale(${scale}) `}>
        <rect style={tileStyling1} x="0.25" y="0.25" width="99.5" height="99.5"/>
        <path style={tileStyling2} d="M86.82.5H99.51V.55s0,0,0,.07V3.25s0,0,0,.08v9.74L13,99.57H.42V86.89Z"/>
        <polygon style={tileStyling3} points="99.51 13.06 99.51 17.15 17.1 99.57 13.01 99.57 99.51 13.06"/>
        <path style={tileStyling4} d="M99.51,25.25v1.68a.59.59,0,0,0,0,.14v2.29L29.28,99.57H25.19Z"/>
        <polygon style={tileStyling5} points="99.51 18.96 99.51 25.25 25.19 99.57 18.91 99.57 99.51 18.96"/>
        <polygon style={tileStyling4} points="99.51 17.18 99.51 18.97 18.92 99.57 17.12 99.57 99.51 17.18"/>
        <polygon style={tileStyling2} points="0.31 87 0.31 82.91 82.72 0.5 86.82 0.5 0.31 87"/>
        <path style={tileStyling4} d="M.31,74.82V73.14a.89.89,0,0,0,0-.14V70.7L70.54.5h4.09Z"/>
        <polygon style={tileStyling5} points="0.31 81.1 0.31 74.82 74.63 0.5 80.92 0.5 0.31 81.1"/>
        <polygon style={tileStyling4} points="0.31 82.89 0.31 81.09 80.91 0.5 82.7 0.5 0.31 82.89"/>
        <path style={tileStyling2} d="M13.15.48H.45V.53A.19.19,0,0,1,.47.6V3.23a.19.19,0,0,1,0,.08v9.74L87,99.55h12.6V86.88Z"/>
        <polygon style={tileStyling3} points="0.45 13.04 0.45 17.14 82.86 99.55 86.96 99.55 0.45 13.04"/>
        <path style={tileStyling4} d="M.45,25.23v1.68a.7.7,0,0,1,0,.14v2.3l70.2,70.2h4.09Z"/>
        <polygon style={tileStyling5} points="0.45 18.94 0.45 25.23 74.77 99.55 81.06 99.55 0.45 18.94"/>
        <polygon style={tileStyling4} points="0.45 17.16 0.45 18.95 81.05 99.55 82.84 99.55 0.45 17.16"/>
        <circle style={tileStyling4} cx="50" cy="50" r="3.98"/>
        <path style={tileStyling3} d="M53.42,48a4.54,4.54,0,0,1,.07.75,4,4,0,0,1-7.4,2A4,4,0,1,0,53.42,48Z"/>
        <polygon style={tileStyling2} points="99.66 86.98 99.66 82.89 17.24 0.48 13.15 0.48 99.66 86.98"/>
        <path style={tileStyling4} d="M99.65,74.8V73.12a.68.68,0,0,1,0-.14v-2.3L29.42.48H25.33Z"/>
        <polygon style={tileStyling5} points="99.66 81.09 99.66 74.8 25.33 0.48 19.05 0.48 99.66 81.09"/>
        <polygon style={tileStyling4} points="99.66 82.87 99.66 81.08 19.06 0.48 17.26 0.48 99.66 82.87"/>
      </g>
    </>
  );
};

Pattern4.defaultProps = {
 // min: 0
}

Pattern4.propTypes = {
 /* onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,*/
};

export default Pattern4;
