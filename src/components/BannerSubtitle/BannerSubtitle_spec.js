import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow } from 'enzyme'

import BannerSubtitle from '../BannerSubtitle/BannerSubtitle'

describe('BannerSubtitle', () => {
  it('should render', () => {
    const tree = renderer.create(<BannerSubtitle />)
    expect(tree).toMatchSnapshot()
  })

  it('should render a <span />', () => {
    const wrapper = shallow(<BannerSubtitle />)
    expect(wrapper.find('span')).toHaveLength(1)
  })

  it('should render child text ', () => {
    const text = 'And here is a test subtitle!'
    const wrapper = shallow(<BannerSubtitle>{text}</BannerSubtitle>)
    expect(wrapper.find('span').text()).toBe(text)
  })
})
