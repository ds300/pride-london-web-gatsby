import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'
import { Consumer } from '../../../components/AppContext'
import CheckboxSet from '../../../components/CheckboxSet'
import theme from '../../../theme/theme'
import iconDown from '../../../theme/assets/images/icon-chevron-down.svg'
import iconUp from '../../../theme/assets/images/icon-chevron-up.svg'

const Wrapper = styled.div`
  position: relative;
  line-height: 1.214;
`

const Button = styled.button`
  font-family: ${props => props.theme.fonts.title};
  font-weight: 600;
  font-size: 1.6rem;
  width: 100%;
  background-color: ${props => props.theme.colors.lightGrey};
  border-color: ${props => props.theme.colors.lightGrey};
  color: ${props => props.theme.colors.indigo};
  padding: 11px 10px;
  display: flex;
  align-items: center;
  min-height: 48px;
  box-sizing: border-box;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    padding: 11px 20px;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fonts.body};
    font-weight: 400;
    font-size: 1.4rem;
    background-image: url(${props => (props.isOpen ? iconUp : iconDown)});
    background-repeat: no-repeat;
    background-position: right 20px center;
    background-color: transparent;
    border-radius: 4px;
    border: 2px solid;
    border-color: ${props =>
      props.isOpen
        ? props.theme.colors.eucalyptusGreen
        : props.theme.colors.mediumGrey};

    &:focus {
      border-color: ${props => props.theme.colors.eucalyptusGreen};
      outline: none;
    }
  }
`

const DropDown = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 1;
  }
`

const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.eucalyptusGreen};
  height: 22px;
  width: 22px;
  line-height: 1;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    background-color: ${props => props.theme.colors.indigo};
  }
`

class EventDropdownFilter extends Component {
  state = {
    isOpen: false,
  }

  handleClickOutside = evt => {
    this.setState({ isOpen: false })
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
          <Wrapper>
            <Button
              aria-controls={this.props.filterName}
              aria-expanded={this.state.isOpen}
              type="button"
              id={`button_${this.props.filterName}`}
              onClick={this.toggleMenu}
              isOpen={this.state.isOpen}
            >
              {this.props.heading}
              {context.state.filters[this.props.filterName].length > 0 ? (
                <Badge>
                  {context.state.filters[this.props.filterName].length}
                </Badge>
              ) : null}
            </Button>
            <DropDown
              isOpen={this.state.isOpen}
              id={this.props.filterName}
              aria-hidden={!this.state.isOpen}
              aria-labelledby={`button_${this.props.filterName}`}
            >
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

export default onClickOutside(EventDropdownFilter)
