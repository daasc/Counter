import { mount } from '@vue/test-utils'
import buttonDecrement from '@/components/buttonDecrement'

describe('buttonDecrement', () => {
  const mountButton = () => {
    const wrapper = mount(buttonDecrement)
    return { wrapper }
  }
  it('should mount the component', async () => {
    const { wrapper } = await mountButton()
    expect(wrapper.vm).toBeDefined()
  })

  it('should mount the button decrement', async () => {
    const { wrapper } = await mountButton()
    const button = wrapper.find('[data-testid="button-decrement"]')
    expect(button.text()).toContain('Decrement')
  })
  it('Should decrement more in counter when decrement to button clicked', async () => {
    const { wrapper } = await mountButton()
    const button = wrapper.find('[data-testid="button-decrement"]')
    await button.trigger('click')

    expect(button.emitted().setDecrement).toBeDefined()
    expect(wrapper.emitted().setDecrement.length).toBe(1)
  })
})
