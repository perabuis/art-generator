import PropTypes from "prop-types";
import { useStore } from "../store";


const Radio = ({}) => {
  const patternselection = useStore(state => state.patternselection);
  const setPatternselection = useStore(state => state.setPatternselection);
 
  //setCols(parseInt(e.target.value, 10)
  return (
    <>  
  
     <div>
        <input type="radio" value="cross" name="gender"   onClick={(e) => setPatternselection(e.target.value)} /> Modern
        <input type="radio" value="polygon" name="gender" onClick={(e) => setPatternselection(e.target.value)}/> Traditional
        <input type="radio" value="other" name="gender" onClick={(e) => setPatternselection(e.target.value)}/> Abstract
      </div>
  
    </>
    
  );
};



export default Radio;

