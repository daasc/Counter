/* eslint-disable import/no-named-as-default-member */
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import index from '@/pages/index'
import { actions, getters, mutations, state } from '@/store/counter.js'
const storeConfig = {
  state,
  getters,
  mutations,
  actions,
}

describe('index', () => {
  const mountIndex = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store(storeConfig)
    const wrapper = mount(index, {
      mocks: {
        $store: store,
      },
    })
    return { store, wrapper }
  }
  it('should mount the component', () => {
    const { wrapper } = mountIndex()
    expect(wrapper.vm).toBeDefined()
  })
})
