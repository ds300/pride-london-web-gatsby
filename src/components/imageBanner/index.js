import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BannerTitle from '../BannerTitle'
import BannerSubtitle from '../BannerSubtitle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 210px;
  justify-content: center;
  line-height: 0;
  overflow: hidden;
  padding-left: 10px;
  position: relative;

  & img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  @media (min-width: 768px) {
    height: 250px;
    padding-left: 90px;
  }
`

const ImageBanner = ({ titleText, subtitleText, imageSrc, altText }) => (
  <Container>
    <img src={imageSrc} alt={altText} />
    <BannerTitle>{titleText}</BannerTitle>
    <BannerSubtitle>{subtitleText}</BannerSubtitle>
  </Container>
)

ImageBanner.propTypes = {
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
  subtitleText: PropTypes.string,
  titleText: PropTypes.string,
}

ImageBanner.defaultProps = {
  imageSrc: '',
  altText: '',
  subtitleText: '',
  titleText: '',
}

export default ImageBanner
