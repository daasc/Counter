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
  namespaced: true,
}

describe('index', () => {
  const mountIndex = async () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
      modules: {
        counter: storeConfig,
      },
    })
    const wrapper = await mount(index, {
      localVue,
      store,
    })
    return { store, wrapper }
  }
  it('should mount the component', async () => {
    const { wrapper } = await mountIndex()
    expect(wrapper.vm).toBeDefined()
  })
  it('counter should start with the value zero', async () => {
    const { wrapper } = await mountIndex()
    const counter = await wrapper.find('[data-testid="counter"]')
    const button = wrapper.find('[data-testid="button-increment"]')
    await button.trigger('click')
    expect(counter.text()).toContain('1')
    await button.trigger('click')
    expect(counter.text()).toContain('2')
  })
})
