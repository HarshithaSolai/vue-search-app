import { mount } from '@vue/test-utils'
import HeaderComponent from '../HeaderComponent.vue'

describe('HeaderComponent', () => {
  it('renders the component with the correct title', () => {
    const wrapper = mount(HeaderComponent)
    const heading = wrapper.find('[data-testid="nav-heading"]')

    expect(wrapper.exists()).toBe(true)
    expect(heading.text()).toBe('ABN AMRO ASSIGNMENT')
  })
})
