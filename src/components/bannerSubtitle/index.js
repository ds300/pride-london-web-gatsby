import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../theme/media'

const BannerSubtitle = styled.h2`
  color: #ffffff;
  font-size: 1rem;
  display: inline;
  background-color: ${props => props.theme.colors.indigo};
  line-height: 1.4;
  box-shadow: 10px 0 0 ${props => props.theme.colors.indigo},
    -10px 0 0 ${props => props.theme.colors.indigo};

  ${media.tablet`  
    font-size: 1.5rem;
  `};
`

const BannerSubtitleWrapper = styled.div`
  max-width: 255px;
  margin-left: 10px;
  ${media.desktop`  
    max-width: 420px;
  `};
`
const StyledBannerSubtitle = ({ children }) => (
  <BannerSubtitleWrapper>
    <BannerSubtitle>{children}</BannerSubtitle>
  </BannerSubtitleWrapper>
)

StyledBannerSubtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default StyledBannerSubtitle
