import React, { Component } from 'react'
import styled from 'styled-components'
import { Consumer } from '../../../components/AppContext'
import Checkbox from '../../../components/Checkbox'
import theme from '../../../theme/theme'

const Wrapper = styled.div`
  background-color: transparent;
  padding: 9px 20px;
  display: flex;
  align-items: center;
  min-height: 48px;
  box-sizing: border-box;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    border: 2px solid ${props => props.theme.colors.mediumGrey};
    border-radius: 4px;

    &:focus-within {
      border-color: ${props => props.theme.colors.eucalyptusGreen};
    }
  }
`
const FilterHeader = styled.div`
  padding: 16px 20px;
  background-color: ${props => props.theme.colors.lightGrey};
  font-family: ${props => props.theme.fonts.title};
  font-weight: 600;
  color: ${props => props.theme.colors.indigo};

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  }
`

const EventFreeFilter = () => (
  <Consumer>
    {context => (
      <div>
        <FilterHeader>Price</FilterHeader>
        <Wrapper>
          <Checkbox
            id="free"
            value="free"
            checked={context.state.filters.free}
            label="Show only free events"
            name="free"
            handleChange={e => context.actions.getCheckboxBool(e, 'free')}
          />
        </Wrapper>
      </div>
    )}
  </Consumer>
)

export default EventFreeFilter
