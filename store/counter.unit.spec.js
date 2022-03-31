import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { actions, getters, mutations, state } from '@/store/counter.js'

const storeConfig = {
  state,
  getters,
  mutations,
  actions,
}

describe('Counter store', () => {
  const createStore = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store(storeConfig)

    return { store }
  }

  it('State => counter should start with the value zero', () => {
    const { store } = createStore()
    expect(store.state.counter).toEqual(0)
  })

  it('Mutation => should increment one more when increment is called ', async () => {
    const { store } = createStore()
    await store.commit('increment')
    expect(store.state.counter).toEqual(1)
    await store.commit('increment')
    expect(store.state.counter).toEqual(2)
  })

  it('Mutation => should decrement one more when decrement is called ', async () => {
    const { store } = createStore()
    await store.commit('decrement')
    expect(store.state.counter).toEqual(-1)
    await store.commit('decrement')
    expect(store.state.counter).toEqual(-2)
  })

  it('Mutation => should reset counter when reset is called ', async () => {
    const { store } = createStore()
    await store.commit('increment')
    await store.commit('reset')
    expect(store.state.counter).toEqual(0)
    await store.commit('decrement')
    await store.commit('reset')
    expect(store.state.counter).toEqual(0)
  })
})
