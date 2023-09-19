import { mount } from '@vue/test-utils'
import FilterComponent from '../FilterComponent.vue'

describe('FilterComponent', () => {
  it('renders the component with prop data', () => {
    const label = 'Filter By Topics'
    const options = ['Option 1', 'Option 2', 'Option 3']
    const selectedOption = 'Option 2'

    const wrapper = mount(FilterComponent, {
      props: {
        label,
        options,
        selectedOption
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('h3').text()).toContain(label)

    const selectElement = wrapper.find('select')
    expect(selectElement.exists()).toBe(true)
    expect(selectElement.element.value).toBe(selectedOption)

    const optionElements = wrapper.findAll('option')
    expect(optionElements.length).toBe(options.length)
    optionElements.forEach((option, index) => {
      expect(option.text()).toBe(options[index])
      expect(option.element.value).toBe(options[index])
    })
  })

  it('emits "optionSelected" event when an option is selected', async () => {
    const label = 'Filter By Topics'
    const options = ['Option 1', 'Option 2', 'Option 3']
    const selectedOption = 'Option 2'

    const wrapper = mount(FilterComponent, {
      props: {
        label,
        options,
        selectedOption
      }
    })

    const selectElement = wrapper.find('select')
    await selectElement.setValue('Option 3')

    expect(wrapper.emitted('optionSelected')).toBeTruthy()
    expect(wrapper.emitted('optionSelected')[0]).toEqual(['Option 3'])
  })
})
