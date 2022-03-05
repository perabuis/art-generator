//import PropTypes from "prop-types";
import { useStore } from "../store";


const Radio = ({}) => {
  
  const setPatternselection = useStore(state => state.setPatternselection);
 
  return (
    <>
      <div>
        <input type="radio" value="pattern1" name="pattern"   onClick={(e) => setPatternselection(e.target.value)} />Hmm, not bad
      </div>
      <div>
        <input type="radio" value="pattern2" name="pattern" onClick={(e) => setPatternselection(e.target.value)}/>Grandma approves
      </div>
      <div>
        <input type="radio" value="pattern3" name="pattern"  onClick={(e) => setPatternselection(e.target.value)}/>Very stylish
        </div>
        <div>
        <input type="radio" value="pattern4" name="pattern"  onClick={(e) => setPatternselection(e.target.value)}/>Ouch my eyes
        </div>
    </>
    
  );
};

Radio.defaultProps = {
 // Patternselection: pattern2
}

Radio.propTypes = {
/*
  value: PropTypes.number.isRequired,
*/
};

export default Radio;

