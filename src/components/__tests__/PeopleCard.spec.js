import { mount } from '@vue/test-utils'
import PeopleCard from '../PeopleCard.vue'
import femaleImage from '../../assets/images/female.png'
import maleImage from '../../assets/images/male.png'

describe('PeopleCard', () => {
  it('renders the component with prop data', () => {
    const samplePerson = {
      first_name: 'John',
      last_name: 'Doe',
      gender: 'Male',
      email: 'johndoe@example.com'
    }

    const wrapper = mount(PeopleCard, {
      props: {
        result: samplePerson
      }
    })

    expect(wrapper.exists()).toBe(true)

    expect(wrapper.find('[data-testid="people_title"]').text()).toContain('John Doe')
    expect(wrapper.find('[data-testid="first_name"]').text()).toContain('First Name: John')
    expect(wrapper.find('[data-testid="last_name"]').text()).toContain('Last Name: Doe')
    expect(wrapper.find('[data-testid="gender"]').text()).toContain('Gender: Male')
    expect(wrapper.find('[data-testid="email"]').text()).toContain('Email: johndoe@example.com')
  })

  it('displays the correct profile image for males', () => {
    const person = {
      first_name: 'John',
      last_name: 'Doe',
      gender: 'Male',
      email: 'johndoe@example.com'
    }

    const wrapper = mount(PeopleCard, {
      props: {
        result: person
      }
    })

    // Verify that the image element exists
    const imgElement = wrapper.find('img')
    expect(imgElement.exists()).toBe(true)

    // Check if the src and alt attributes match the male profile image
    expect(imgElement.attributes('src')).toEqual(expect.stringContaining(maleImage))
    expect(imgElement.attributes('alt')).toBe('John')
  })

  it('displays the correct profile image for females', () => {
    const person = {
      first_name: 'Jane',
      last_name: 'Doe',
      gender: 'Female',
      email: 'janedoe@example.com'
    }

    const wrapper = mount(PeopleCard, {
      props: {
        result: person
      }
    })

    // Verify that the image element exists
    const imgElement = wrapper.find('img')
    expect(imgElement.exists()).toBe(true)

    // Check if the src and alt attributes match the female profile image
    expect(imgElement.attributes('src')).toEqual(expect.stringContaining(femaleImage))
    expect(imgElement.attributes('alt')).toBe('Jane')
  })
})
