import PropTypes from "prop-types";
import { useStore } from "../store";


const Radio = ({}) => {
  
  const setPatternselection = useStore(state => state.setPatternselection);
 
  return (
    <>
      <div>
        <input type="radio" value="pattern1" name="pattern"   onClick={(e) => setPatternselection(e.target.value)} /> 'ni slecht'
      </div>
      <div>
        <input type="radio" value="pattern2" name="pattern" onClick={(e) => setPatternselection(e.target.value)}/> 'Moemoe is ook fan'
      </div>
      <div>
        <input type="radio" value="pattern3" name="pattern"  onClick={(e) => setPatternselection(e.target.value)}/> 'Very stylish'
        </div>
        <div>
        <input type="radio" value="pattern4" name="pattern"  onClick={(e) => setPatternselection(e.target.value)}/> 'Aw mijn ogen'
        </div>
    </>
    
  );
};



export default Radio;

