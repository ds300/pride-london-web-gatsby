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
  padding-left: 10px;
  height: 210px;

  @media (min-width: 768px) {
    height: 250px;
    padding-left: 90px;
  }
`

const Container = styled.div`
  line-height: 0;
`

const ImageBanner = ({ titleText, subtitleText, imageSrc }) => (
  <BackgroundImage imageSrc={imageSrc}>
    <Container>
      <BannerTitle>{titleText}</BannerTitle>
      <br />
      <BannerSubtitle>{subtitleText}</BannerSubtitle>
    </Container>
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

export { BackgroundImage }
