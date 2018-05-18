import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Consumer } from '../../../components/AppContext'
import CheckboxSet from '../../../components/CheckboxSet'
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
  padding: 11px 20px;
  display: flex;
  align-items: center;
  min-height: 48px;
  box-sizing: border-box;

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

const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.indigo};
  height: 22px;
  width: 22px;
`

class EventDropdownFilter extends Component {
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
      <Consumer>
      {context => (
        <Wrapper onMouseEnter={this.toggleMenu} onMouseLeave={this.toggleMenu}>
          <Header onTouchStart={this.toggleMenu} isOpen={this.state.isOpen}>
            {this.props.heading}
            {context.state.filters[this.props.filterName].length > 0 ? <Badge>{context.state.filters[this.props.filterName].length}</Badge> : null}
            
          </Header>
          <DropDown isOpen={this.state.isOpen}>
            <CheckboxSet filterName={this.props.filterName} />
          </DropDown>
        </Wrapper>
      )}
      </Consumer>
    )
  }
}

EventDropdownFilter.propTypes = {
  heading: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
}

export default EventDropdownFilter
