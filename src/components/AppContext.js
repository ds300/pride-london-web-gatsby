import React, { Component } from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext()
const { Consumer } = AppContext

class Provider extends Component {
  state = {
    filters: {
      date: null,
      free: false,
      eventCategories: [],
      venueDetails: [],
      audience: [],
      accessibilityOptions: [],
      area: [],
      timeOfDay: []
    },
  }

  getDatepickerValue = date => {
    let state = this.state
    state.filters.date = date
    this.setState(state)
  }

  getCheckboxBool = (e, name) => {
    let state = this.state
    state.filters[name] = e.target.checked
    this.setState(state)
  }

  getCheckboxSetValues = (e, name) => {
    let state = this.state

    if (
      e.target.checked &&
      state.filters[name].indexOf(e.target.value) === -1
    ) {
      state.filters[name].push(e.target.value)
    } else {
      const index = state.filters[name].indexOf(e.target.value)
      if (index > -1) {
        this.state.filters[name].splice(index, 1)
      }
    }

    this.setState(state)
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          events: this.props.events,
          actions: {
            getCheckboxBool: this.getCheckboxBool,
            getDatepickerValue: this.getDatepickerValue,
            getCheckboxSetValues: this.getCheckboxSetValues,
          },
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  events: PropTypes.array,
}

module.exports = {
  Provider,
  Consumer,
}
