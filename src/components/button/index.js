import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  box-sizing: border-box;
  padding: 12px;
  border-radius: 4px;
  color: ${props =>
    props.primary
      ? props.theme.colors.indigo
      : props.theme.colors.eucalyptusGreen};
  background-color: ${props =>
    props.primary
      ? props.theme.colors.eucalyptusGreen
      : props.theme.colors.indigo};
  font-family: ${props => props.theme.fonts.title};
  font-weight: 700;
  font-size: ${props => (props.small ? '0.875rem' : '1.125rem')};
  line-height: 1.388;
  min-width: 250px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Button = props => {
  return (
    <StyledButton
      type={props.type}
      primary={props.primary}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
  primary: false,
  children: 'Button',
  disabled: false,
  small: false,
}

export default Button
