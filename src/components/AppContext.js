import React, { Component } from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext()
const { Consumer } = AppContext

const initialState = {
  filterOpen: null,
  filters: {
    date: null,
    free: false,
    eventCategories: [],
    venueDetails: [],
    audience: [],
    accessibilityOptions: [],
    area: [],
    timeOfDay: [],
  },
}

class Provider extends Component {
  state = initialState

  getDatepickerValue = date => {
    const { state } = this
    state.filters.date = date
    this.setState(state)
  }

  getCheckboxBool = (e, name) => {
    const { state } = this
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

  clearFilters = () => {
    let state = {...initialState}
    this.setState(state)
  }

  closeSiblingFilters = (filterName, isOpen) => {
    if (isOpen && filterName != this.state.openFilter) {
      let state = this.state
      this.state.filterOpen = filterName
      this.setState(state)
    }
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
            clearFilters: this.clearFilters,
            closeSiblingFilters: this.closeSiblingFilters,
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
