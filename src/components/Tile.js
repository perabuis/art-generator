import PropTypes from "prop-types";
import { useStore } from "../store";

const Tile = ({}) => {
  const r = useStore(state => state.r);
  console.log(r);
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="10%" height="10%">
      <defs>
        <style>
          {`.cls-2{fill:#0d0d0d}.cls-3{fill:#eae5e7}`}
        </style>
      </defs>
      <g id="Layer_2" data-name="Layer 2" >
        <path style={{
          fill: r,
          stroke:'#000',
          strokeMiterlimit:10}} d="M.51.35h498.95V499.3H.51z"/>
        <path className="cls-2" d="M249.46 248.72 1.15.41H.63v62.64l186.03 186.04L.51 435.25v62.64h.52l248.31-248.3v-.34h.12v-.53z"/>
        <path className="cls-3" d="M434.54 499.24 250.46 315.16v.44L66.58 499.48h60.91L250.66 376.3v-.04l122.97 122.98h60.91zM1.23 310.32l60.64-61.16L.68 187.97v-60.9l122.09 122.09L1.23 371.23v-60.91z"/>
        <path d="M189.5 499.48h122.11l-61.05-61.06-61.06 61.06zM311.61.53H189.5l61.06 61.06L311.61.53z" 
        style={{fill: '#1e1e1e'}}/>
        <path className="cls-2" d="M251.02 248.84 499.33.53h.52v62.64L313.82 249.21l186.15 186.16v62.64h-.52L251.13 249.7v-.34h-.11v-.52z"/>
        <path className="cls-3" d="m66.58.77 184.08 184.08v-.44L434.54.53h-60.91L250.46 123.71v.04L127.49.77H66.58zm432.33 187.89-60.64 61.16 61.19 61.19v60.89L377.37 249.82l121.54-122.07v60.91z"/>
      </g>
    </svg>



           
    </>
  );
};

Tile.defaultProps = {
 // min: 0
}

Tile.propTypes = {
 /* onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,*/
};

export default Tile;
