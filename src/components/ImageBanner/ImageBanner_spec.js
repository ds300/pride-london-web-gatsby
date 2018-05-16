import React from 'react'
import { shallow } from 'enzyme'

import ImageBanner from './ImageBanner'

describe('ImageBanner', () => {
  it('should render', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper).toMatchSnapshot()
  })
})
