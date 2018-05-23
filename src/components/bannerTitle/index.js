import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BannerTitle = styled.h1`
  display: block;
  color: #2d2f7f;
  font-size: 28px;
  margin-bottom: 0;

  & span {
    background-color: #ffffff;
    display: inline-block;
    padding: 0 10px;
  }
`

const StyledBannerTitle = ({ children }) => (
  <BannerTitle>
    <span>{children}</span>
  </BannerTitle>
)

StyledBannerTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default StyledBannerTitle
