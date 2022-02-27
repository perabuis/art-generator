import PropTypes from "prop-types";


const Slider = ({ onValueChange, value}) => {
  console.log(value);
  return (
    <>
     <input type="color" id="head" name="head"
           value={value} onChange={(e) => onValueChange(e.target.value)}></input>
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
