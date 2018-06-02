import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../theme/media'

const BannerTitle = styled.h1`
  margin: 0;
  display: inline-block;
  background-color: white;
  color: ${props => props.theme.colors.indigo};
  font-size: 1.75rem;
  padding: 0px 5px;

  ${media.tablet`
    font-size: 3.5rem;
    padding: 0px 10px;
    max-width: 740px;
  `};
`

BannerTitle.displayName = 'TestBannerTitle'

const StyledBannerTitle = ({ children }) => (
  <BannerTitle>{children}</BannerTitle>
)

StyledBannerTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default StyledBannerTitle
