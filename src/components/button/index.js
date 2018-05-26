import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'

export const Button = props => {
  const StyledButton = styled[props.link ? 'a' : 'button']`
    box-sizing: border-box;
    padding: 12px;
    border-radius: 4px;
    display: inline-block;
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
    text-decoration: none;
    transition: background-color 0.15s linear;

    &:hover {
      background-color: ${props =>
        props.primary
          ? darken(0.1, props.theme.colors.eucalyptusGreen)
          : darken(0.1, props.theme.colors.indigo)};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `

  return (
    <StyledButton
      type={props.link ? null : props.type}
      primary={props.primary}
      onClick={props.onClick}
      disabled={props.disabled}
      href={props.link ? props.to : null}
    >
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  link: PropTypes.bool,
  type: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  to: PropTypes.string,
}

Button.defaultProps = {
  link: false,
  type: 'button',
  primary: false,
  children: 'Button',
  disabled: false,
  small: false,
  to: null,
}

export default Button
