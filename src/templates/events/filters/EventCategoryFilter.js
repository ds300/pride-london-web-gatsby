import React, { Component } from 'react'
import styled from 'styled-components'
import { Consumer } from '../../../components/AppContext'
import CheckboxSet from '../../../components/CheckboxSet'
import constants from '../../../constants/constants'

const Wrapper = styled.div`
  border: 2px solid ${props => props.theme.colors.mediumGrey};
  background-color: transparent;
  border-radius: 4px;
  padding: 9px 20px;
  font-sizeL 0.875rem;
  position: relative;
`

class EventCategoryFilter extends Component {
  render() {
    return (
    <Wrapper>
      Category <span>1</span>
      <CheckboxSet options={constants.eventCategories} />
    </Wrapper>
    )
  }
}

export default EventCategoryFilter
