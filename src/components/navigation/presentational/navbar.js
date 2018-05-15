import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Container, Row, Column } from '../../grid/grid'

const fontStyles = `
  font-size: 1.250em
  letter-spacing: 0.4px;
  padding: 8px 12px;
  font-weight: 600;
  font-family: Poppins
`

const Background = styled.header`
  background-color: ${props => props.theme.colors.indigo};
  color: ${props => props.theme.colors.white};
  height: 100px;
  width: 100%;
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  ${fontStyles};
`

const Header = props => (
  <Background>
    <Container>
      <Row alignItems="center" justifyContent="space-between">
        <Column>
          <StyledLink to="/">
            <img src="https://www.fillmurray.com/164/64" />
          </StyledLink>
        </Column>
        <Column alignItems="center">
          <StyledLink to="/events/">Learn</StyledLink>
        </Column>
        <Column alignItems="center">
          <StyledLink to="/events/">Attend</StyledLink>
        </Column>
        <Column alignItems="center">
          <StyledLink to="/events/">Support us</StyledLink>
        </Column>
        <Column alignItems="center">
          <StyledLink to="/events/">Take part</StyledLink>
        </Column>
        <Column alignItems="center">
          <StyledLink to="/events/">Plan</StyledLink>
        </Column>
        <Column alignItems="center">
          <StyledLink to="/events/">Help</StyledLink>
        </Column>
        <Column alignItems="center">
          <StyledLink to="/events/">btn</StyledLink>
        </Column>
      </Row>
    </Container>
  </Background>
)
export default Header
