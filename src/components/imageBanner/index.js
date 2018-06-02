import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../theme/media'

import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 270px;
  justify-content: center;
  line-height: 0;
  overflow: hidden;
  padding-left: 10px;
  position: relative;
  background-color: ${props => props.color};

  & img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  ${media.tablet`
    height: 400px;
    padding-left: 90px;
  `};
`

const ImageBanner = ({ titleText, subtitleText, imageSrc, altText, color }) => (
  <Container color={color}>
    {imageSrc && <img src={imageSrc} alt={altText} />}
    <div>
      <BannerTitle>{titleText}</BannerTitle>
      <BannerSubtitle>{subtitleText}</BannerSubtitle>
    </div>
  </Container>
)

ImageBanner.propTypes = {
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
  subtitleText: PropTypes.string,
  titleText: PropTypes.string,
  color: PropTypes.string,
}

ImageBanner.defaultProps = {
  imageSrc: '',
  altText: '',
  subtitleText: '',
  titleText: '',
  color: '',
}

export default ImageBanner
