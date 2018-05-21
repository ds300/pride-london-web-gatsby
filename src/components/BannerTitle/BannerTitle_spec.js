import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow } from 'enzyme'

import BannerTitle from '../BannerTitle/BannerTitle'

describe('BannerTitle', () => {
  it('should render', () => {
    const tree = renderer.create(<BannerTitle />)
    expect(tree).toMatchSnapshot()
  })

  it('should render a <span />', () => {
    const wrapper = shallow(<BannerTitle />)
    expect(wrapper.find('span')).toHaveLength(1)
  })

  it('should render child text ', () => {
    const text = 'Here is a test title!'
    const wrapper = shallow(<BannerTitle>{text}</BannerTitle>)
    expect(wrapper.find('span').text()).toBe(text)
  })
})
