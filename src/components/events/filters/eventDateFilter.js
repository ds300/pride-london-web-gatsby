import React, { Component } from 'react'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
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
  .SingleDatePicker,
  .SingleDatePickerInput,
  .DateInput {
    width: 100%;
  }

  input.DateInput_input {
    appearance: none;
    border: none;
    padding: 20px 50px 20px 10px;
    font-size: 0.875rem;
    font-family: ${props => props.theme.fonts.body};
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

  ${media.mobile`
    input.DateInput_input {
      padding: 20px 50px 20px 20px;
    }
  `};

  ${media.tablet`
    display: flex;

    input.DateInput_input {
      border: 2px solid ${props => props.theme.colors.mediumGrey};
      border-radius: 4px;
      padding: 14px 20px;
      font-weight: 500;

      &:focus {
        border-color: ${props => props.theme.colors.eucalyptusGreen};
        outline: none;
      }
    }
  `};
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
  }

  render() {
    return (
      <Consumer>
        {context => (
          <div>
            <DatePickerWrapper>
              <DatePickerHeader>Date</DatePickerHeader>
              <SingleDatePickerWrapper>
                <SingleDatePicker
                  date={
                    context.state.filters.date
                      ? context.state.filters.date
                      : null
                  } // momentPropTypes.momentObj or null
                  onDateChange={context.actions.getDatepickerValue} // PropTypes.func.isRequired
                  focused={this.state.focused} // PropTypes.bool
                  onFocusChange={({ focused }) => {
                    this.setState({ focused })
                    context.actions.closeSiblingFilters('date', focused)
                  }} // PropTypes.func.isRequired
                  numberOfMonths={1}
                  displayFormat="DD/MM/YYYY"
                  noBorder
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
