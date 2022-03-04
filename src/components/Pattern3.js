import PropTypes from "prop-types";
import { useStore } from "../store";

const Pattern3 = ({index}) => {
    const colors = useStore(state => state.colors);
    const sliderInput = useStore(state => state.cols);
  
    //determine size and position
    const size = 100 / sliderInput;
    const scale = size / 100;
    let xPosition = index % sliderInput;
    xPosition = xPosition * size;
    let yPosition = Math.floor(index / sliderInput);
  
   
    //Rotation and yPosition
    let rotation = 'scale(1,-1)';
        if (yPosition % 2 == 0){
          yPosition =  (yPosition * size) + size;
          rotation = 'scale(1,-1)';
        }
          else{
            yPosition =  (yPosition * size);
            rotation = 'scale(1,1)';
        }

    //determine style
    const tileStyling1 = {
      stroke: colors.primary,
      strokeMiterLimit: 10,
      strokeWidth: 0.3,
      fill: colors.tertiary
    };
    const tileStyling2 = {
      stroke: colors.primary,
      strokeMiterLimit: 10,
      strokeWidth: 0.3,
      fill: colors.secondary
    };

  return (    
    <>
      <g  transform={` translate(${xPosition},${yPosition}) scale(${scale}) ${rotation}`} >
        <polygon style={tileStyling1} points="50 50.04 50 100 0 100 0 0.04 50 50.04"/>
        <polygon style={tileStyling1} points="100 0 100 0.04 50 50.04 50 0 100 0"/>
        <polygon style={tileStyling2} points="100 0.04 100 100 50 100 50 50.04 100 0.04"/>
        <polygon style={tileStyling2} points="50 0 50 50.04 0 0.04 0 0 50 0"/>
    </g>
    </>
  );
};

Pattern3.defaultProps = {
 // min: 0
}

Pattern3.propTypes = {
 /* onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,*/
};

export default Pattern3;
