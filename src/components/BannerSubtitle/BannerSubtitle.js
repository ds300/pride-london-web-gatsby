import React from 'react'
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

export default StyledBannerSubtitle
