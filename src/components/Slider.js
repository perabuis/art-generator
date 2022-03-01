import PropTypes from "prop-types";
import { useStore } from "../store";

import './Slider.css';

const Slider = ({value, onValueChange}) => {
 
  return (
    <>   
    <label>
      <span>size</span>
      <input
        type="range"
        min={1}
        max={10}
        value={value}
        onChange={(e) => onValueChange(parseInt(e.target.value, 10))}
      />
      <span>{value}</span>
    </label>
   
    </>
    
  );
};

Slider.defaultProps = {
  //min: 0
}

Slider.propTypes = {
 /* onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,*/
};

export default Slider;


/*
const Slider = ({ onValueChange, value, max, min, label }) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onValueChange(parseInt(e.target.value, 10))}
      />
      <span>{value}</span>
    </label>
  );
};*/