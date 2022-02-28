import create from 'zustand';

const useStore = create(set => ({
  colors : {
    primary: '#ffff00',
    secondary: '#000000',
    tertiary: '#ffffff'
  },
  setColors : (name, value) => set(state => {
        const tmp = {...state.colors};
        tmp[name] = value;
        return { ...state, colors: tmp };
  }),
 
}))

export { useStore }