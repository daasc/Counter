import { mount } from '@vue/test-utils'
import buttonReset from '@/components/buttonReset'

describe('buttonReset', () => {
  it('should mount the component', async () => {
    const wrapper = await mount(buttonReset)

    expect(wrapper.vm).toBeDefined()
  })
  it('should mount the button decrement', async () => {
    const wrapper = await mount(buttonReset)
    const button = wrapper.find('[data-testid="button-reset"]')
    expect(button.text()).toContain('Reset')
  })
  it('Should reset to the counter when reset button clicked', async () => {
    const wrapper = await mount(buttonReset)
    const button = wrapper.find('[data-testid="button-reset"]')
    await button.trigger('click')
    expect(button.emitted().setReset).toBeDefined()
    expect(wrapper.emitted().setReset.length).toBe(1)
  })
})
