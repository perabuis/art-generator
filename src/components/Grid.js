import PropTypes from "prop-types";
import { useStore } from "../store";
import Tile from "./Tile.js";


const Grid = () => {
 const width =  window.innerWidth;
 console.log(width);
 
  return (
    <>  
    <svg viewBox="0 0 500 500" width="10%" height="10%">
      <defs>
        <style>
          {`.cls-2{fill:#0d0d0d}.cls-3{fill:#eae5e7}`}
        </style>
      </defs>
      <Tile />
      
    </svg>
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
