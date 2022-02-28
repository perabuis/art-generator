import create from 'zustand'

const useStore = create(set => ({
  firstColor: 235204,
  setFirstColor: (firstColor) => set(state => ({firstColor})),
  secondColor: 235204,
  setSecondColor: (secondColor) => set(state => ({secondColor}))
}))

export { useStore }