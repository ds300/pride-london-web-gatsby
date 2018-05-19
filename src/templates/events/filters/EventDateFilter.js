import React, { Component, Fragment } from 'react'
import DatePicker from 'react-datepicker'
import { Consumer } from '../../../components/AppContext'
import moment from 'moment'
import styled from 'styled-components'
import theme from '../../../theme/theme'
import iconCalendar from '../../../theme/assets/images/icon-calendar.svg'

import 'react-datepicker/dist/react-datepicker.css'

const DatePickerWrapper = styled.div`
  display: block
  align-items: center;
  flex-grow: 1;
  min-height: 48px;
  box-sizing: border-box;

  & > div {
    flex-basis: 100%;
  }

  .react-datepicker-wrapper {
    display: block;

    .react-datepicker__input-container {
      display: block;
      flex-basis: 100%;
    }

    input[type='text'] {
      appearance: none;
      border: none;
      padding: 20px;
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

    @media (min-width: ${props => props.theme.breakpoints[1]}) {
      display: flex;

      input[type='text'] {
        border: 2px solid ${props => props.theme.colors.mediumGrey};
        border-radius: 4px;
        padding: 14px 20px;

        &:focus {
          border-color: ${props => props.theme.colors.eucalyptusGreen};
          outline: none;
        }
      }
    }
  }
`

const DatePickerHeader = styled.div`
  background-color: ${props => props.theme.colors.lightGrey};
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.title};
  font-weight: 600;
  padding: 16px 20px;
  color: ${props => props.theme.colors.indigo};

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  }
`

class EventDateFilter extends Component {
  render() {
    return (
      <Consumer>
        {context => (
          <DatePickerWrapper>
            <DatePickerHeader>Date</DatePickerHeader>
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
