import PropTypes from "prop-types";
import { useStore } from "../store";
//import chroma from "chroma-js";

const Pattern2 = ({index}) => {
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
    console.log('ik zie hier');

/*
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
  };*/
  const tileStyling1 = {
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
  }

  const screenWidth = window.innerWidth;
  console.log(screenWidth / 2);



  //Hier of statement met telkens wat er in de <g> tag zit

  
  return (
    <>
         <g  transform={` translate(${xPosition},${yPosition}) scale(${scale}) `}>
      
<rect style={tileStyling1} x="0.25" y="0.25" width="99.49" height="99.5"/>
<polygon style={tileStyling2} points="73.81 62.32 75.36 65.56 78.72 66.86 77.53 70.25 78.98 73.54 75.74 75.1 74.45 78.45 71.05 77.26 67.77 78.72 66.21 75.47 62.85 74.18 64.05 70.79 62.59 67.5 65.83 65.94 67.12 62.59 70.52 63.78 73.81 62.32"/>
<path style={tileStyling3} d="M87.87,68.87c-2.06.11-7.52-2.8-7.52-2.8s1.41-5.71,2.75-7.14c1-1.1,5.47-2.63,5.47-2.63L93.7,60l-.35,6.29S89.37,68.79,87.87,68.87Z"/>
<path style={tileStyling3} d="M81.68,57.32c-1.38,1.54-7.29,3.34-7.29,3.34s-3-5-3.11-7c0-1.5,2-5.73,2-5.73l6.21-1,4.19,4.7S82.68,56.2,81.68,57.32Z"/>
<path style={tileStyling3} d="M69.15,53.4c.11,2.06-2.8,7.52-2.8,7.52s-5.71-1.41-7.14-2.75c-1.1-1-2.63-5.48-2.63-5.48l3.65-5.12,6.29.35S69.07,51.9,69.15,53.4Z"/>
<path style={tileStyling3} d="M57.49,59.6C59,61,60.83,66.9,60.83,66.9s-5,3-7,3.11c-1.5,0-5.73-2-5.73-2l-1-6.21,4.69-4.19S56.37,58.6,57.49,59.6Z"/>
<path style={tileStyling3} d="M53.69,72.15c2.06-.12,7.52,2.79,7.52,2.79s-1.41,5.71-2.75,7.15c-1,1.09-5.48,2.62-5.48,2.62l-5.12-3.65.35-6.29S52.19,72.23,53.69,72.15Z"/>
<path style={tileStyling3} d="M84,81.44c-1.53-1.38-3.34-7.29-3.34-7.29s5-3.05,7-3.11c1.5-.05,5.73,2,5.73,2l1,6.21-4.7,4.2S85.16,82.44,84,81.44Z"/>
<path style={tileStyling3} d="M72.42,87.56C72.31,85.5,75.21,80,75.21,80s5.71,1.41,7.15,2.75c1.1,1,2.63,5.48,2.63,5.48l-3.66,5.12L75.05,93S72.5,89.06,72.42,87.56Z"/>
<path style={tileStyling3} d="M59.9,83.78c1.38-1.53,7.3-3.34,7.3-3.34s3,5,3.11,7c0,1.5-2,5.73-2,5.73l-6.2,1-4.2-4.7S58.9,84.9,59.9,83.78Z"/>
<polygon style={tileStyling2} points="99.5 11.3 95.22 16.32 94.16 9.82 87.95 12.03 90.27 5.87 83.78 4.68 88.88 0.5 99.49 0.5 99.5 11.3"/>
<rect style={tileStyling4} x="0.25" y="0.25" width="99.49" height="99.5"/>
<polygon points="59.32 23.14 53.92 18.37 53.8 11.39 67.82 4.8 83.57 4.72 73.34 16.56 59.32 23.14"/>
<polygon points="71.63 37.91 64.9 35.34 62.33 28.85 73.15 17.76 87.86 12.14 82.44 26.82 71.63 37.91"/>
<polygon points="89.05 46.45 81.84 46.42 77.14 41.26 83.34 27.06 95.11 16.61 95.24 32.25 89.05 46.45"/>
<polygon points="82.13 0.5 67.82 4.66 52.33 4.66 49.45 0.5 82.13 0.5"/>
<polygon style={tileStyling3} points="33.3 20.96 34.85 24.2 38.21 25.5 37.02 28.89 38.48 32.18 35.23 33.74 33.94 37.09 30.55 35.9 27.26 37.36 25.7 34.12 22.34 32.82 23.54 29.43 22.08 26.14 25.32 24.58 26.61 21.23 30.01 22.42 33.3 20.96"/>
<path style={tileStyling2} d="M47.36,27.51c-2.06.11-7.52-2.8-7.52-2.8s1.41-5.71,2.75-7.14c1-1.1,5.48-2.63,5.48-2.63l5.12,3.65-.35,6.29S48.86,27.43,47.36,27.51Z"/>
<path style={tileStyling2} d="M41.17,16c-1.37,1.54-7.29,3.34-7.29,3.34s-3.05-5-3.11-7c-.05-1.5,2-5.73,2-5.73l6.21-1,4.2,4.7S42.18,14.84,41.17,16Z"/>
<path style={tileStyling2} d="M28.64,12c.11,2.06-2.8,7.52-2.8,7.52s-5.71-1.41-7.14-2.75c-1.1-1-2.63-5.48-2.63-5.48l3.66-5.12L26,6.56S28.56,10.54,28.64,12Z"/>
<path style={tileStyling2} d="M17,18.24c1.54,1.38,3.34,7.3,3.34,7.3s-5,3-7,3.11c-1.5,0-5.73-2-5.73-2l-1-6.21,4.7-4.19S15.86,17.24,17,18.24Z"/>
<path style={tileStyling2} d="M13.18,30.79c2.06-.12,7.52,2.79,7.52,2.79S19.3,39.29,18,40.73c-1,1.09-5.47,2.62-5.47,2.62L7.35,39.7l.35-6.29S11.68,30.87,13.18,30.79Z"/>
<path style={tileStyling2} d="M43.54,40.08c-1.54-1.38-3.35-7.29-3.35-7.29s5-3.05,7-3.11c1.5-.05,5.73,2,5.73,2l1,6.21-4.69,4.2S44.65,41.08,43.54,40.08Z"/>
<path style={tileStyling2} d="M31.91,46.2c-.11-2.06,2.8-7.52,2.8-7.52s5.71,1.41,7.14,2.75c1.1,1,2.63,5.48,2.63,5.48L40.82,52l-6.28-.35S32,47.7,31.91,46.2Z"/>
<path style={tileStyling2} d="M19.4,42.42c1.37-1.53,7.29-3.34,7.29-3.34s3,5,3.11,7c.05,1.5-2,5.73-2,5.73l-6.21,1-4.2-4.7S18.39,43.54,19.4,42.42Z"/>
<path style={tileStyling5} d="M90,99.5H75.28s3.65-4.49,5.47-5.23c1.38-.56,6.07-.12,6.07-.12Z"/>
<path style={tileStyling5} d="M38.66,54c1.88-.84,8-.09,8-.09s.63,5.78-.13,7.58c-.59,1.38-4.21,4.39-4.21,4.39l-6-1.56-1.81-5.93S37.29,54.59,38.66,54Z"/>
<path style={tileStyling5} d="M61.51,46.85c-1.88.84-7.95.1-7.95.1s-.63-5.78.13-7.59C54.28,38,57.9,35,57.9,35l6,1.55,1.81,5.94S62.88,46.25,61.51,46.85Z"/>
<polygon style={tileStyling2} points="91.23 99.5 93.69 93.79 99.5 91.34 99.49 99.5 91.23 99.5"/>
<path style={tileStyling5} d="M50.78,99.5H65.47S61.82,95,60,94.27c-1.38-.56-6.07-.12-6.07-.12Z"/>
<path style={tileStyling5} d="M99.51,50.9V65.59S95,61.94,94.28,60.12c-.56-1.38-.12-6.07-.12-6.07Z"/>
<path style={tileStyling5} d="M99.51,90.09V75.4S95,79.05,94.28,80.87c-.56,1.38-.12,6.07-.12,6.07Z"/>
<polygon points="99.49 17.89 95.33 32.21 95.33 47.7 99.49 50.57 99.49 17.89"/>
<polygon style={tileStyling2} points="0.49 88.7 4.76 83.68 5.83 90.18 12.04 87.97 9.72 94.13 16.2 95.32 11.11 99.5 0.5 99.5 0.49 88.7"/>
<polygon points="40.67 76.86 46.07 81.64 46.19 88.61 32.16 95.2 16.42 95.28 26.64 83.44 40.67 76.86"/>
<polygon points="28.36 62.09 35.09 64.66 37.66 71.15 26.84 82.25 12.13 87.86 17.54 73.18 28.36 62.09"/>
<polygon points="10.94 53.55 18.15 53.58 22.84 58.74 16.65 72.94 4.87 83.39 4.75 67.75 10.94 53.55"/>
<polygon points="17.86 99.5 32.17 95.34 47.66 95.34 50.54 99.5 17.86 99.5"/>
<path style={tileStyling5} d="M10,.5H24.71S21.06,5,19.24,5.73c-1.38.56-6.07.12-6.07.12Z"/>
<polygon style={tileStyling2} points="8.75 0.5 6.3 6.21 0.48 8.66 0.5 0.5 8.75 0.5"/>
<path style={tileStyling5} d="M49.21.5H34.52S38.17,5,40,5.73c1.38.56,6.07.12,6.07.12Z"/>
<path style={tileStyling5} d="M.48,49.1V34.41S5,38.06,5.71,39.88c.56,1.38.12,6.07.12,6.07Z"/>
<path style={tileStyling5} d="M.48,9.91V24.6S5,21,5.71,19.13c.56-1.38.12-6.07.12-6.07Z"/>
<polygon points="0.5 82.11 4.66 67.79 4.66 52.3 0.5 49.43 0.5 82.11"/>
</g>
    </>
  );
};

Pattern2.defaultProps = {
 // min: 0
}

Pattern2.propTypes = {
 /* onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,*/
};

export default Pattern2;
