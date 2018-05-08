import React from 'react'
import { shallow, mount } from 'enzyme'

import ImageBanner from './ImageBanner'
import BannerTitle from '../BannerTitle/BannerTitle'
import BannerSubtitle from '../BannerSubtitle/BannerSubtitle'

describe('ImageBanner', () => {
  it('should render', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a <BannerTitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find(BannerTitle).length).toBe(1)
  })

  it('should render a <BannerSubtitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find(BannerSubtitle).length).toBe(1)
  })

  it('should render the titleText from props to BannerTitle ', () => {
    const titleText = 'Here is a test title!'
    const wrapper = mount(<ImageBanner />)
    wrapper.setProps({ titleText })
    expect(wrapper.find(BannerTitle).text()).toContain(titleText)
  })

  it('should render the subtitleText from props to BannerTitle ', () => {
    const subtitleText = 'And here is a test subtitle!'
    const wrapper = mount(<ImageBanner />)
    wrapper.setProps({ subtitleText })
    expect(wrapper.find(BannerSubtitle).text()).toBe(subtitleText)
  })
})
