import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'

import ImageBanner, { BackgroundImage } from './ImageBanner'
import BannerTitle from '../BannerTitle/BannerTitle'
import BannerSubtitle from '../BannerSubtitle/BannerSubtitle'

describe('ImageBanner', () => {
  it('should render', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a <BannerTitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find(BannerTitle)).toHaveLength(1)
  })

  it('should render a <BannerSubtitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find(BannerSubtitle)).toHaveLength(1)
  })

  it('should render the titleText from props to BannerTitle ', () => {
    const titleText = 'Here is a test title!'
    const wrapper = mount(<ImageBanner titleText={titleText} />)
    expect(wrapper.find(BannerTitle).text()).toBe(titleText)
  })

  it('should render the subtitleText from props to BannerTitle ', () => {
    const subtitleText = 'And here is a test subtitle!'
    const wrapper = mount(<ImageBanner subtitleText={subtitleText} />)
    expect(wrapper.find(BannerSubtitle).text()).toBe(subtitleText)
  })

  it('should pass the imageSrc prop to the BackgroundImage component', () => {
    const imageSrc = 'http://www.pics.com/coolpic'
    const wrapper = shallow(<ImageBanner imageSrc={imageSrc} />)
    expect(wrapper.find(BackgroundImage).props().imageSrc).toBe(imageSrc)
  })
})
