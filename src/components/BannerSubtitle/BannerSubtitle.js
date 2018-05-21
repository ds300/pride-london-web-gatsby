import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BannerSubtitle = styled.h3`
  color: #ffffff;
  font-size: 16px;

  & span {
    background-color: #2d2f7f;
    display: inline-block;
    padding: 0 10px;
  }
`
const StyledBannerSubtitle = ({ children }) => (
  <BannerSubtitle>
    <span>{children}</span>
  </BannerSubtitle>
)

StyledBannerSubtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default StyledBannerSubtitle
