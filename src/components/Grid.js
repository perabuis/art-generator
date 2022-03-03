import PropTypes from "prop-types";
import { useStore } from "../store";
import Pattern1 from "./Pattern1.js";
import Pattern2 from "./Pattern2.js";
import { useState } from "react";

const Grid = () => {
//berekenen hoeveel tiles er in de array moeten
 const width =  window.innerWidth;
 const height = window.innerHeight;

 const sliderInput = useStore(state => state.cols);

 
  const cols = useStore(state => state.cols);
  //nu vul ik met 20 tegels maar eigenlijk moeth et userinput * userinput


 const tiles = useStore(state => state.tiles);
  const numberOfTiles = sliderInput * sliderInput;
  const setTiles = useStore(state => state.numberOfTiles);


  //const [tiles, setTiles] = useState(new Array(numberOfTiles).fill(false));


  console.log(tiles);
 //    boxes.map((filled, i) => <Box filled={filled} index={i} key={i} cols={10} size={10} onClick={() => handleBoxClick(i)} />)

const test = true;  
  const patternselection = useStore(state => state.patternselection);
  let pattern1 = false;
  let pattern2 = false;

   if(patternselection == 'cross'){
     pattern1 = true;
  }

  if(patternselection == 'polygon'){
     pattern2 = true;
  }

  /*
   if(patternselection == 'polygon'){
     console.log('ja');
     pattern1 = false;
    pattern2 = true;
  }*/

  return (
    <> 
    <svg viewBox="0 0 100 100">
      <defs>
        <style>
          {`.cls-1{fill:#3c51a2;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px;}.cls-2{fill:#0c0d0d;}.cls-3{fill:#e9e4e6;}`}
        </style>
      </defs>
{/*if statements zetten en op basis daarvan andere component inladen */}
      {pattern1 &&  
      tiles.map((filled, i) => <Pattern1 index = {i} key={i}/>)
      }
       {pattern2 &&  
      tiles.map((filled, i) => <Pattern2 index = {i} key={i}/>)
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
