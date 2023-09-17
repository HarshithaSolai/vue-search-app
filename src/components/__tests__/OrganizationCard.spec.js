import { mount } from '@vue/test-utils'
import OrganizationCard from '../OrganizationCard.vue'
import mockImage from '../../assets/images/organization.png' // Update the path accordingly

describe('OrganizationCard', () => {
  it('renders the component with prop data', () => {
    const sampleOrganization = {
      name: 'Example Organization',
      industry: 'Technology'
    }

    const wrapper = mount(OrganizationCard, {
      props: {
        result: sampleOrganization
      }
    })

    // Verify that the component exists
    expect(wrapper.exists()).toBe(true)

    // Check if the organization name and industry are displayed
    expect(wrapper.find('[data-testid="name"]').text()).toContain(
      'Organization Name: Example Organization'
    )
    expect(wrapper.find('[data-testid="industry"]').text()).toContain('Industry: Technology')
  })

  it('displays the organization image', () => {
    const organization = {
      name: 'Example Organization',
      industry: 'Technology'
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

    // Verify that the image element exists
    const imgElement = wrapper.find('img')
    expect(imgElement.exists()).toBe(true)

    // Check if the src and alt attributes match the organization data
    expect(imgElement.attributes('src')).toEqual(expect.stringContaining(mockImage))
    expect(imgElement.attributes('alt')).toBe('Example Organization')
  })
})
