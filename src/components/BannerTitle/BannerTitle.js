import React from 'react'
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

export default StyledBannerTitle
