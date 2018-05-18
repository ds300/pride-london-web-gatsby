import React, { Component } from 'react'
import styled from 'styled-components'
import { Consumer } from '../../../components/AppContext'
import CheckboxSet from '../../../components/CheckboxSet'
import constants from '../../../constants/constants'
import theme from '../../../theme/theme'
import iconDown from '../../../theme/assets/images/icon-chevron-down.svg'
import iconUp from '../../../theme/assets/images/icon-chevron-up.svg'

const Wrapper = styled.div`
  position: relative;
  font-size: 0.875rem;
  line-height: 1.214;
`

const Header = styled.div`
  border: 2px solid ${props => props.theme.colors.mediumGrey};
  background-color: transparent;
  border-radius: 4px;
  padding: 14px 20px;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    background-image: url(${props => (props.isOpen ? iconUp : iconDown)});
    background-repeat: no-repeat;
    background-position: right 20px center;
    border-color: ${props =>
      props.isOpen
        ? props.theme.colors.eucalyptusGreen
        : props.theme.colors.mediumGrey};
  }
`

const DropDown = styled.div`
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }
`

class EventCategoryFilter extends Component {
  state = {
    isOpen: false,
  }

  toggleMenu = e => {
    let isOpen = this.state.isOpen
    isOpen = !isOpen
    this.setState({ isOpen })
  }

  render() {
    return (
      <Wrapper onMouseEnter={this.toggleMenu} onMouseLeave={this.toggleMenu}>
        <Header onTouchStart={this.toggleMenu} isOpen={this.state.isOpen}>
          Category <span>1</span>
        </Header>
        <DropDown isOpen={this.state.isOpen}>
          <CheckboxSet options={constants.eventCategories} />
        </DropDown>
      </Wrapper>
    )
  }
}

export default EventCategoryFilter
