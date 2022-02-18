export const state = () => ({
  counter: 0,
})

export const mutations = {
  increment: (state) => {
    state.counter++
  },
  decrement: (state) => {
    state.counter--
  },
  reset: (state) => {
    state.counter = 0
  },
}

export const actions = {}

export const getters = {}
