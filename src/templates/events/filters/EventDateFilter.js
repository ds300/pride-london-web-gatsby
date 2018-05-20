import React, { Component } from 'react'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'
import theme from '../../../theme/theme'
import { Consumer } from '../../../components/AppContext'
import iconCalendar from '../../../theme/assets/images/icon-calendar.svg'
import moment from 'moment'

const DatePickerWrapper = styled.div`
  display: block
  align-items: center;
  flex-grow: 1;
  min-height: 48px;
  box-sizing: border-box;

  & > div {
    flex-basis: 100%;
  }
`
const SingleDatePickerWrapper = styled.div`
    .SingleDatePicker,
    .SingleDatePickerInput,
    .DateInput {
      width: 100%;
    }

    input.DateInput_input {
    appearance: none;
    border: none;
    padding: 14px 50px 14px 20px;
    font-size: 0.875rem;
    font-weight: ${props => props.dateSelected ? '700' : '400'};
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
  state = {
    date: moment()
  }

  render() {
    return (
      <Consumer>
        {context => (
          <div>
          <DatePickerWrapper>
            <DatePickerHeader>Date</DatePickerHeader>
            <SingleDatePickerWrapper dateSelected={context.state.filters.date ? true : false}>
              <SingleDatePicker
                date={context.state.filters.date ? context.state.filters.date : null} // momentPropTypes.momentObj or null
                onDateChange={context.actions.getDatepickerValue} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => {this.setState({ focused }); context.actions.closeSiblingFilters('date', focused) }} // PropTypes.func.isRequired
                numberOfMonths={1}
                displayFormat="DD/MM/YYYY"
                noBorder={true}
              />
            </SingleDatePickerWrapper>
          </DatePickerWrapper>
          </div>
        )}
      </Consumer>
    )
  }
}
export default EventDateFilter
