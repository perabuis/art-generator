import PropTypes from "prop-types";
import { useStore } from "../store";
import Tile from "./Tile.js";


const Grid = () => {
 
  return (
    <>  
   <Tile />
           </>
    
  );
};

Grid.defaultProps = {
  //min: 0
}

Grid.propTypes = {
 /* onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,*/
};

export default Grid;
