import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import { Consumer } from '../../../components/AppContext'
import moment from 'moment'
import styled from 'styled-components'
import iconCalendar from '../../../theme/assets/images/icon-calendar.svg'

import 'react-datepicker/dist/react-datepicker.css'

const DatePickerWrapper = styled.div`
  border: 2px solid ${props => props.theme.colors.mediumGrey};
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-grow: 1;

  & > div {
    flex-basis: 100%;
  }

  .react-datepicker-wrapper {
    display: block;

    .react-datepicker__input-container {
      display: block;
    }

    input[type='text'] {
      border: none;
      appearance: none;
      padding: 14px 20px;
      font-size: 0.875em;
      line-height: 1.214;
      box-sizing: border-box;
      display: block;
      background-color: transparent;
      background-image: url(${iconCalendar});
      background-repeat: no-repeat;
      background-position: right 20px center;
      width: 100%;

      &::placeholder {
        color: ${props => props.theme.colors.black};
      }
    }
  }
`

class EventDateFilter extends Component {
  render() {
    return (
      <Consumer>
        {context => (
          <DatePickerWrapper>
            <DatePicker
              selected={
                context.state.filters.date ? context.state.filters.date : null
              }
              onChange={context.actions.getDatepickerValue}
              placeholderText="Date"
              locale="en-GB"
            />
          </DatePickerWrapper>
        )}
      </Consumer>
    )
  }
}

export default EventDateFilter
