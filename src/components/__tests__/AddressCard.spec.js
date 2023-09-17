import { mount } from '@vue/test-utils'
import AddressCard from '../AddressCard.vue'
import mockImage from '../../assets/images/map.png' // Update the path accordingly

describe('AddressCard', () => {
  it('renders the component with prop data and a loaded image', () => {
    const sampleResult = {
      street: '123 Main St',
      house_number: '42',
      city: 'Example City',
      postal_code: '12345',
      country: 'Example Country'
    }

    const wrapper = mount(AddressCard, {
      props: {
        result: sampleResult
      }
    })

    // Verify that the component exists
    expect(wrapper.exists()).toBe(true)

    expect(wrapper.find('[data-testid="street"]').text()).toContain('Street: 123 Main St')
    expect(wrapper.find('[data-testid="house_number"]').text()).toContain('House number: 42')
    expect(wrapper.find('[data-testid="city"]').text()).toContain('City: Example City')
    expect(wrapper.find('[data-testid="postal_code"]').text()).toContain('Postal Code: 12345')
    expect(wrapper.find('[data-testid="country"]').text()).toContain('Country: Example Country')

    const imageElement = wrapper.find('img')
    expect(imageElement.exists()).toBe(true)
  })

  it('displays the map image', () => {
    const result = {
      street: '123 Main St',
      house_number: '42',
      city: 'Example City',
      postal_code: '12345',
      country: 'Example Country'
    }

    const wrapper = mount(AddressCard, {
      props: {
        result: result
      },
      data() {
        return {
          mapImage: mockImage
        }
      }
    })

    const imgElement = wrapper.find('img')
    expect(imgElement.attributes('src')).toEqual(expect.stringContaining(mockImage))
    expect(imgElement.attributes('alt')).toBe('123 Main St')
  })
})
