import React, { Component } from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext()
const { Consumer } = AppContext

class Provider extends Component {
  state = {
    filters: {
      date: null,
      free: false,
    },
  }

  getInputValue = (e, name) => {
    let state = this.state
    state.filters[name] = e.target.value
    this.setState(state)
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

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          events: this.props.events,
          actions: {
            getInputValue: this.getInputValue,
            getCheckboxBool: this.getCheckboxBool,
            getDatepickerValue: this.getDatepickerValue,
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
