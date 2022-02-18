import { mount } from '@vue/test-utils'
import ButtonIncrement from '@/components/buttonIncrement'

describe('ButtonIncrement', () => {
  const mountButton = () => {
    const wrapper = mount(ButtonIncrement)
    return { wrapper }
  }

  it('should mount the component', async () => {
    const { wrapper } = await mountButton()
    expect(wrapper.vm).toBeDefined()
  })

  it('should mount the button increment', async () => {
    const { wrapper } = await mountButton()
    const button = wrapper.find('[data-testid="button-increment"]')
    expect(button.text()).toContain('Increment')
  })

  it('Should increment more in counter when increment to button clicked', async () => {
    const { wrapper } = await mountButton()
    const button = wrapper.find('[data-testid="button-increment"]')
    await button.trigger('click')

    expect(button.emitted().setIncrement).toBeDefined()
    expect(wrapper.emitted().setIncrement.length).toBe(1)
  })
})
