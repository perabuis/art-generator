import { useStore } from "../store";

const Slider = ({}) => {
  const cols = useStore(state => state.cols);
  const setCols = useStore(state => state.setCols);

  const setTiles = useStore(state => state.setTiles);

  const handleSliderChange = (e) => {
    const sliderInput = parseInt(e.target.value, 10);
    setCols(sliderInput);
    setTiles(new Array(sliderInput * sliderInput).fill(false));
  };

  return (
    <>   
    <label>
      <span></span>
      <input
        type="range"
        min={1}
        max={20}
        value={cols}
        onChange={(e) => handleSliderChange(e)}
      />
      <span>{cols} rows / columns</span>
    </label>
   
    </>
    
  );
};

export default Slider;
