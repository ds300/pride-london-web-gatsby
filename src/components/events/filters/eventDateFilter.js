import React, { Component } from 'react'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import styled from 'styled-components'
import { darken, lighten } from 'polished'
import { media } from '../../../theme/media'
import { Consumer } from '../../../components/appContext'
import iconCalendar from '../../../theme/assets/images/icon-calendar.svg'

const SingleDatePickerWrapper = styled.div`
  border: none;
  border-radius: 4px;
  position: relative;

  .DayPicker_weekHeader_li {
    line-height: 1;
    font-size: 0.875rem;
  }

  .CalendarDay__selected {
    background-color: ${props =>
      darken(0.1, props.theme.colors.eucalyptusGreen)};
    border: 1px solid #e4e7e7;

    &:hover {
      background-color: ${props =>
        darken(0.1, props.theme.colors.eucalyptusGreen)};
      border: 1px solid #e4e7e7;
    }
  }

  .CalendarDay__selected_span {
    background-color: ${props => props.theme.colors.eucalyptusGreen};
    border: 1px solid #e4e7e7;
    &:active,
    &:hover {
      background-color: ${props =>
        lighten(0.1, props.theme.colors.eucalyptusGreen)};
      border: 1px solid #e4e7e7;
    }
  }

  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    background-color: ${props =>
      lighten(0.1, props.theme.colors.eucalyptusGreen)};
    border: 1px solid #e4e7e7;
    color: ${props => props.theme.colors.white};
  }

  .DateRangePickerInput {
    display: flex;
    align-items: center;
    padding-right: 45px;
    padding-left: 10px;
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
    padding: 25px 0;

    &::placeholder {
      color: ${props => props.theme.colors.black};
    }
  }

  .DayPickerKeyboardShortcuts_show__bottomRight {
    border-right-color: ${props => props.theme.colors.eucalyptusGreen};
  }

  ${media.tablet`
    display: flex;
    border: 2px solid ${props => props.theme.colors.mediumGrey};

    input.DateInput_input {
      font-weight: 500;
      padding: 14px 0;

      &:focus {
        border-color: ${props => props.theme.colors.eucalyptusGreen};
        outline: none;
      }
    }
  `};

  ${media.mobile`
    .DateRangePickerInput {
      padding-left: 20px;
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
