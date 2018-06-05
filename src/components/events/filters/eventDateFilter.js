import React, { Component } from 'react'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import styled from 'styled-components'
import { media } from '../../../theme/media'
import { Consumer } from '../../../components/appContext'
import iconCalendar from '../../../theme/assets/images/icon-calendar.svg'

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
  border: 2px solid ${props => props.theme.colors.mediumGrey};
  border-radius: 4px;
  position: relative;

  .DayPicker_weekHeader_li {
    line-height: 1;
    font-size: 0.875rem;
  }

  .DateRangePickerInput {
    display: flex;
    align-items: center;
    padding-right: 45px;
    padding-left: 20px;
  }

  .DateRangePickerInput_arrow {
    padding-right: 8px;
    display: flex;
    align-items: center;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .DateRangePicker {
    display: block;
    width: 100%;
  }

  .DateInput {
    width: auto;
    background-color: transparent;
    width: 80px;
    box-sizing: content;
  }

  input.DateInput_input {
    appearance: none;
    border: none;
    color: ${props => props.theme.colors.black};
    font-size: 0.875rem;
    font-family: ${props => props.theme.fonts.body};
    line-height: 1.214;
    box-sizing: border-box;
    display: block;
    background-color: transparent;
    width: 100%;
    padding: 14px 0;

    &::placeholder {
      color: ${props => props.theme.colors.black};
    }
  }

  ${media.mobile`
    input.DateInput_input {

    }
  `};

  ${media.tablet`
    display: flex;

    input.DateInput_input {
      font-weight: 500;

      &:focus {
        border-color: ${props => props.theme.colors.eucalyptusGreen};
        outline: none;
      }
    }
  `};
`

const Label = styled.label`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);

  img {
    display: block;
  }
`

const DatePickerHeader = styled.div`
  background-color: ${props => props.theme.colors.lightGrey};
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.title};
  font-weight: 600;
  padding: 16px 10px;
  color: ${props => props.theme.colors.indigo};

  ${media.mobile`
    padding: 16px 20px;
  `};

  ${media.tablet`
    display: none;
  `};
`
class EventDateFilter extends Component {
  state = {
    focused: false,
    focusedInput: null,
    startDate: null,
    endDate: null,
  }

  render() {
    return (
      <Consumer>
        {context => (
          <div>
            <DatePickerWrapper>
              <DatePickerHeader>Date</DatePickerHeader>
              <SingleDatePickerWrapper>
                <DateRangePicker
                  startDate={context.state.filters.startDate}
                  startDateId="start_date"
                  endDate={context.state.filters.endDate}
                  endDateId="end_date"
                  onDatesChange={context.actions.getDatepickerValues} // PropTypes.func.isRequired
                  focusedInput={this.state.focusedInput} // PropTypes.bool
                  onFocusChange={focusedInput => {
                    console.log(focusedInput)
                    this.setState({ focusedInput })
                    context.actions.closeSiblingFilters(focusedInput, true)
                  }} // PropTypes.func.isRequired
                  numberOfMonths={1}
                  displayFormat="DD/MM/YYYY"
                  minimumNights={0}
                  noBorder
                />
                <Label htmlFor="start_date" aria-label="Select start date">
                  <img src={iconCalendar} alt="Calendar icon" />
                </Label>
              </SingleDatePickerWrapper>
            </DatePickerWrapper>
          </div>
        )}
      </Consumer>
    )
  }
}
export default EventDateFilter

// <SingleDatePicker
// date={
//   context.state.filters.date
//     ? context.state.filters.date
//     : null
// } // momentPropTypes.momentObj or null
// onDateChange={context.actions.getDatepickerValue} // PropTypes.func.isRequired
// focused={this.state.focused} // PropTypes.bool
// onFocusChange={({ focused }) => {
//   this.setState({ focused })
//   context.actions.closeSiblingFilters('date', focused)
// }} // PropTypes.func.isRequired
// numberOfMonths={1}
// displayFormat="DD/MM/YYYY"
// noBorder
// />
