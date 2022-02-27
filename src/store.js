import create from 'zustand'

const useStore = create(set => ({
  name: "James",
  setName: (name) => set(state => ({ name })),
  r: 2,
  setR: (r) => set(state => ({r}))
}))

export { useStore }