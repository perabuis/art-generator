import PropTypes from "prop-types";
import { useStore } from "../store";

const Color = ({value}) => {
  const colors = useStore(state => state.colors);
  const setColors = useStore(state => state.setColors);
  

  return (
    <>  
    <input type="color" id="head" name="head"
           value={colors[value]} onChange={(e) => setColors(value,  e.target.value)}></input>
           </>
    
  );
};

Color.defaultProps = {
  //min: 0
}

Color.propTypes = {
 /* onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,*/
};

export default Color;
