import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow } from 'enzyme'

import Checkbox from './'
import theme from '../../theme/theme'

// SVGs need to be mocked as the SVG output causes Babel to throw
jest.mock('../../theme/assets/images/icon-check.svg', () => 'foo')

describe('Checkbox', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Checkbox id="test" />, { context: { theme } })
  })
  describe('@renders', () => {
    it('should render', () => {
      expect(wrapper).toMatchSnapshot()
    })
    describe('input', () => {
      it('should have id from props', () => {
        const id = 'myInput'
        wrapper.setProps({ id })
        expect(wrapper.find('[type="checkbox"]').props().id).toBe(id)
      })

      it('should have name from props', () => {
        const name = 'myInput'
        wrapper.setProps({ name })
        expect(wrapper.find('[type="checkbox"]').props().name).toBe(name)
      })

      it('should have value from props', () => {
        const value = 'selected'
        wrapper.setProps({ value })
        expect(wrapper.find('[type="checkbox"]').props().value).toBe(value)
      })
    })

    describe('label', () => {
      it('should have htmlFor from props', () => {
        expect(wrapper.find('[htmlFor="test"]')).toHaveLength(1)
      })

      it('should have text from props ', () => {
        const label = 'hello'
        wrapper.setProps({ label })
        expect(
          wrapper
            .find('[htmlFor="test"]')
            .dive()
            .text()
        ).toBe(label)
      })
    })
  })

  describe('@events', () => {
    it('should toggle its checked state when changed', () => {
      expect(wrapper.state().checked).toBeFalsy()
      wrapper.find('#test').simulate('change')
      expect(wrapper.state().checked).toBeTruthy()
    })

    it('should fire the handleChange prop with an event when changed', () => {
      const handleChange = jest.fn()
      const event = 'event'
      wrapper.setProps({ handleChange })
      wrapper.find('#test').simulate('change', event)
      expect(handleChange).toHaveBeenCalledWith(event)
    })
  })
})
