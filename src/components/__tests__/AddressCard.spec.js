import { mount } from '@vue/test-utils';
import AddressCard from '../AddressCard.vue';

describe('AddressCard', () => {
  it('renders the component with prop data', () => {
    const result = {
      street: '123 Main St',
      house_number: '42',
      city: 'Example City',
      postal_code: '12345',
      country: 'Example Country',
    };

    const wrapper = mount(AddressCard, {
      props: {
        result: result,
      },
    });

    // Verify that the component renders with the expected data
    expect(wrapper.find('[data-testid="street"]').text()).toContain('Street: 123 Main St');
  expect(wrapper.find('[data-testid="house_number"]').text()).toContain('House number: 42');
  expect(wrapper.find('[data-testid="city"]').text()).toContain('City: Example City');
  expect(wrapper.find('[data-testid="postal_code"]').text()).toContain('Postal Code: 12345');
  expect(wrapper.find('[data-testid="country"]').text()).toContain('Country: Example Country');
});

  it('displays the map image', () => {
    const result = {
      street: '123 Main St',
      house_number: '42',
      city: 'Example City',
      postal_code: '12345',
      country: 'Example Country',
    };

    const wrapper = mount(AddressCard, {
      props: {
        result: result,
      },
    });

    // Verify that the map image is displayed with the correct alt text
    const imgElement = wrapper.find('img');
    expect(imgElement.attributes('src')).toEqual(expect.stringContaining('map.png'));
    expect(imgElement.attributes('alt')).toBe('123 Main St');
  });

  // Add more test cases as needed...
});
