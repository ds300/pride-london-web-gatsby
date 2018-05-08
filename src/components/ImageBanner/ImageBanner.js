import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BannerTitle from '../BannerTitle/BannerTitle'
import BannerSubtitle from '../BannerSubtitle/BannerSubtitle'

const BackgroundImage = styled.div`
  justify-content: center;
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  height: 400px;
`

const ImageBanner = ({ titleText, subtitleText, imageSrc }) => (
  <BackgroundImage imageSrc={imageSrc}>
    <BannerTitle>{titleText}</BannerTitle>
    <BannerSubtitle>{subtitleText}</BannerSubtitle>
  </BackgroundImage>
)

ImageBanner.propTypes = {
  imageSrc: PropTypes.string,
  subtitleText: PropTypes.string,
  titleText: PropTypes.string,
}

ImageBanner.defaultProps = {
  imageSrc: '',
  subtitleText: '',
  titleText: '',
}

export default ImageBanner
