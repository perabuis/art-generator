import PropTypes from "prop-types";
import { useStore } from "../store";

const Color = ({name}) => {
  const colors = useStore(state => state.colors);
  const setColors = useStore(state => state.setColors);
  

  return (
    <>  
    <input type="color" id="head" name={name}
           value={colors[name]} onChange={(e) => setColors(name,  e.target.value)}></input>
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
