import React from 'react'
import { Row, Column } from '../grid'
import styled from 'styled-components'
import Link from 'gatsby-link'
import logo from '../../theme/assets/images/logo-pride.svg'

const Header = styled.header`
  background-color: ${props => props.theme.colors.indigo};
  height: 100px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
`

const FlexColumn = styled(Column)`
  display: flex;
  align-items: center;
`

const LogoWrapper = styled(Link)`
  display: block;
`

const Logo = styled.img``

const SimpleNav = () => (
  <Header>
    <Row>
      <FlexColumn>
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
      </FlexColumn>
    </Row>
  </Header>
)

export default SimpleNav
