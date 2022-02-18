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
    expect(counter.text()).toContain('0')
  })
  it('counter should increment when buttonIncrement for the clicked', async () => {
    const { wrapper } = await mountIndex()
    const counter = await wrapper.find('[data-testid="counter"]')
    const button = wrapper.find('[data-testid="button-increment"]')
    await button.trigger('click')
    expect(counter.text()).toEqual('1')
    await button.trigger('click')
    expect(counter.text()).toEqual('2')
  })

  it('counter should decrement when buttonDecrement for the clicked', async () => {
    const { wrapper } = await mountIndex()

    const counter = await wrapper.find('[data-testid="counter"]')
    const button = wrapper.find('[data-testid="button-decrement"]')

    await button.trigger('click')
    expect(counter.text()).toEqual('-1')
    await button.trigger('click')
    expect(counter.text()).toEqual('-2')
  })

  it('counter should reset when buttonReset for the clicked', async () => {
    const { wrapper } = await mountIndex()

    const counter = await wrapper.find('[data-testid="counter"]')
    const reset = wrapper.find('[data-testid="button-reset"]')
    const decrement = wrapper.find('[data-testid="button-decrement"]')

    await decrement.trigger('click')
    expect(counter.text()).toEqual('-1')
    await reset.trigger('click')
    expect(counter.text()).toEqual('0')
  })
})
