import { mount } from '@vue/test-utils'
import OrganizationCard from '../OrganizationCard.vue'
import mockImage from '../../assets/images/organization.png' // Update the path accordingly

describe('OrganizationCard', () => {
  it('renders the component with prop data', () => {
    const sampleOrganization = {
      type: 'organizations',
      name: 'Wisoky, Weimann and Altenwerth',
      industry: 'Travel',
      website: 'wisoky.com',
      company_size: 53458
    }

    const wrapper = mount(OrganizationCard, {
      props: {
        result: sampleOrganization
      }
    })

    expect(wrapper.exists()).toBe(true)

    expect(wrapper.find('[data-testid="name"]').text()).toContain('Organization Name: Wisoky, Weimann and Altenwerth')
    expect(wrapper.find('[data-testid="industry"]').text()).toContain('Industry: Travel')
    expect(wrapper.find('[data-testid="website"]').text()).toContain('Website: wisoky.com')
    expect(wrapper.find('[data-testid="company_size"]').text()).toContain('Number of Employees: 53458')
 
  })

  it('displays the organization image', () => {
    const organization =  {
      type: 'organizations',
      name: 'Wisoky, Weimann and Altenwerth',
      industry: 'Travel',
      website: 'wisoky.com',
      company_size: 53458
    }

    const wrapper = mount(OrganizationCard, {
      props: {
        result: organization
      },
      data() {
        return {
          organizationImage: mockImage
        }
      }
    })

    const imgElement = wrapper.find('img')
    expect(imgElement.exists()).toBe(true)

    expect(imgElement.attributes('src')).toEqual(expect.stringContaining(mockImage))
    expect(imgElement.attributes('alt')).toBe('Wisoky, Weimann and Altenwerth')
  })
})
