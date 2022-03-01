import PropTypes from "prop-types";
import { useStore } from "../store";
import Tile from "./Tile.js";
import { useState } from "react";

const Grid = () => {
 const width =  window.innerWidth;
 console.log(width);
  const [tiles, setTiles] = useState(new Array(20).fill(false));
  console.log(tiles);
 //    boxes.map((filled, i) => <Box filled={filled} index={i} key={i} cols={10} size={10} onClick={() => handleBoxClick(i)} />)
 
  return (
    <> 
    <svg viewBox="0 0 100 100">
      <defs>
        <style>
          {`.cls-1{fill:#3c51a2;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px;}.cls-2{fill:#0c0d0d;}.cls-3{fill:#e9e4e6;}`}
        </style>
      </defs>
      {
      tiles.map((filled, i) => <Tile key={i} x = {i*110}/>)
      }
      
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
