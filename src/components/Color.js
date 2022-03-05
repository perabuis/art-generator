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


Color.propTypes = {
  name: PropTypes.string.isRequired
};

export default Color;
