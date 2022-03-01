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
  cols: 10,
  setCols: (cols) => set(state => ({ cols})),
 
}))

export { useStore }