import create from 'zustand';

const useStore = create(set => ({
  colors : {
    primary: '#3c51a2',
    secondary: '#000000',
    tertiary: '#ffffff'
  },
  setColors : (name, value) => set(state => {
        const tmp = {...state.colors};
        tmp[name] = value;
        return { ...state, colors: tmp };
  }),
  cols: 5,
  setCols: (cols) => set(state => ({ cols})),
  tiles: new Array(25).fill(false),
  setTiles: (tiles) => set(state => ({ tiles})),
  patternselection: "pattern2",
  setPatternselection: (patternselection) => set(state => ({ patternselection})),
}))

export { useStore }