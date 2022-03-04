import PropTypes from "prop-types";
import { useStore } from "../store";


const Radio = ({}) => {
  const patternselection = useStore(state => state.patternselection);
  const setPatternselection = useStore(state => state.setPatternselection);
 
  return (
    <>  
     <div>
        <input type="radio" value="pattern1" name="pattern"   onClick={(e) => setPatternselection(e.target.value)} /> Modern
        <input type="radio" value="pattern2" name="pattern" onClick={(e) => setPatternselection(e.target.value)}/> Traditional
        <input type="radio" value="pattern3" name="pattern"  onClick={(e) => setPatternselection(e.target.value)}/> Abstract
      </div>
  
    </>
    
  );
};



export default Radio;

