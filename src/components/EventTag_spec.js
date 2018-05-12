import React from 'react'
import { mount } from 'enzyme'
import EventTag from './EventTag'

describe('The EventTag component', () => {
  it('renders', () => {
    const wrapper = mount(<EventTag value="Banana" />)
    expect(wrapper.text()).toBe('Banana ')
  })
})
