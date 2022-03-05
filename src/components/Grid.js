import { useStore } from "../store";
import Pattern1 from "./Pattern1.js";
import Pattern2 from "./Pattern2.js";
import Pattern3 from "./Pattern3.js";
import Pattern4 from "./Pattern4.js";


const Grid = () => {
//Extra svg on mobile
 const width =  window.innerWidth;
 const height = window.innerHeight;
  let twoSvg = false;
  if(height > width){
    twoSvg = true;
  }

  const tiles = useStore(state => state.tiles);
  const patternselection = useStore(state => state.patternselection);
  
  //each pattern has different styling / rotation, so I created 4 different components per pattern
  let pattern1 = false;
  let pattern2 = false;
  let pattern3 = false;
  let pattern4 = false;

   if(patternselection == 'pattern1'){
     pattern1 = true;
  }

  if(patternselection == 'pattern2'){
     pattern2 = true;
  }
  if(patternselection == 'pattern3'){
     pattern3 = true;
  }
  if(patternselection == 'pattern4'){
     pattern4 = true;
  }

  return (
    <> 
    <svg viewBox="0 0 100 100" id="tilePattern">
      <defs>
        <style>
          {`.cls-1{fill:#3c51a2;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px;}.cls-2{fill:#0c0d0d;}.cls-3{fill:#e9e4e6;}`}
        </style>
      </defs>
      {pattern1 &&  
      tiles.map((filled, i) => <Pattern1 index = {i} key={i}/>)
      }
       {pattern2 &&  
      tiles.map((filled, i) => <Pattern2 index = {i} key={i}/>)
      }
       {pattern3 &&  
      tiles.map((filled, i) => <Pattern3 index = {i} key={i}/>)
      }
      {pattern4 &&  
      tiles.map((filled, i) => <Pattern4 index = {i} key={i}/>)
      }
    </svg>
       {/*Second svg on mobile */}
          {twoSvg && 
            <svg viewBox="0 0 100 100">
              <defs>
                <style>
                  {`.cls-1{fill:#3c51a2;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px;}.cls-2{fill:#0c0d0d;}.cls-3{fill:#e9e4e6;}`}
                </style>
              </defs>
              {pattern1 &&  
              tiles.map((filled, i) => <Pattern1 index = {i} key={i}/>)
              }
              {pattern2 &&  
              tiles.map((filled, i) => <Pattern2 index = {i} key={i}/>)
              }
              {pattern3 &&  
              tiles.map((filled, i) => <Pattern3 index = {i} key={i}/>)
              }
              {pattern4 &&  
              tiles.map((filled, i) => <Pattern4 index = {i} key={i}/>)
              }
            </svg>
          }
    </>
    
  );
};

export default Grid;
