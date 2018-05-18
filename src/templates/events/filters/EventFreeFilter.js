import React, { Component } from 'react'
import styled from 'styled-components'
import { Consumer } from '../../../components/AppContext'
import Checkbox from '../../../components/Checkbox'

const Wrapper = styled.div`
  border: 2px solid ${props => props.theme.colors.mediumGrey};
  background-color: transparent;
  border-radius: 4px;
  padding: 9px 20px;
`

class EventCategoryFilter extends Component {
  render() {
    return (
      <Consumer>
        {context => (
          <Wrapper>
            <Checkbox
              id="free"
              value="free"
              checked={false}
              label="Show only free events"
              name="free"
              handleChange={e => context.actions.getCheckboxBool(e, 'free')}
            />
          </Wrapper>
        )}
      </Consumer>
    )
  }
}

export default EventCategoryFilter
