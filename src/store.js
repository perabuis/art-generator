import create from 'zustand';

const useStore = create(set => ({
  colors : {
    primary: '#000000',
    secondary: '#ffffff'
  },
  setColors : (name, value) => set(state => {
        const tmp = {...state.colors};
        tmp[name] = value;
        return { ...state, colors: tmp };
  }),
 
}))

export { useStore }