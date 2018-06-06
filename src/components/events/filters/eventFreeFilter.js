import React from 'react'
import styled from 'styled-components'
import { media } from '../../../theme/media'
import { Consumer } from '../../../components/appContext'
import Checkbox from '../../../components/checkbox'

const Wrapper = styled.div`
  background-color: transparent;
  padding: 9px 20px;
  display: flex;
  align-items: center;
  min-height: 48px;
  box-sizing: border-box;

  input {
    & + label {
      font-weight: 500;
    }

    &:checked {
      & + label {
        font-weight: 500;
      }
    }
  }

  ${media.tablet`
    border: 2px solid ${props => props.theme.colors.mediumGrey};
    border-radius: 4px;

    &:focus-within {
      border-color: ${props => props.theme.colors.eucalyptusGreen};
    }
  `};
`
const FilterHeader = styled.div`
  padding: 16px 20px;
  background-color: ${props => props.theme.colors.lightGrey};
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.title};
  font-weight: 600;
  color: ${props => props.theme.colors.indigo};

  ${media.tablet`
    display: none;
  `};
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
            handleChange={e => {
              context.actions.getCheckboxBool('free', e.target.checked)
              context.actions.closeSiblingFilters('free', e.target.checked)
            }}
          />
        </Wrapper>
      </div>
    )}
  </Consumer>
)

export default EventFreeFilter
