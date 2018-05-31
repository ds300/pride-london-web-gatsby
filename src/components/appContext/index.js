import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  filterByDate,
  filterByFree,
  filterByCategory,
  filterByArea,
  filterByTime,
  filterPastEvents,
} from '../events/helpers'
import { itemsToLoad } from '../../constants'
import theme from '../../theme/theme'
import debounce from '../../lib/debounce'

const AppContext = React.createContext()
const { Consumer } = AppContext

function getInitialFilterState() {
  return {
    date: null,
    free: false,
    eventCategories: [],
    venueDetails: [],
    audience: [],
    accessibilityOptions: [],
    area: [],
    timeOfDay: [],
  }
}

const initialState = {
  filterOpen: null,
  eventsToShow: itemsToLoad,
  filters: getInitialFilterState(),
}

class Provider extends Component {
  constructor() {
    super()
    this.state = {
      ...initialState,
      breakpoint: this.getCurrentBreakpoint(),
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.setCurrentBreakpoint)
    }
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.setCurrentBreakpoint)
    }
  }

  getCurrentBreakpoint = () => {
    if (typeof window !== 'undefined') {
      switch (true) {
        case window.matchMedia(`(min-width: ${theme.breakpoints[3]})`).matches:
          return 3
          break
        case window.matchMedia(`(min-width: ${theme.breakpoints[2]})`).matches:
          return 2
          break
        case window.matchMedia(`(min-width: ${theme.breakpoints[1]})`).matches:
          return 1
          break
        default:
          return 0
      }
    }
  }

  setCurrentBreakpoint = debounce(() => {
    const state = { ...this.state }
    state.breakpoint = this.getCurrentBreakpoint()
    this.setState(state)
  }, 25)

  getDatepickerValue = date => {
    this.setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        date,
      },
    }))
  }

  getCheckboxBool = (name, checked) => {
    this.setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        free: checked,
      },
    }))
  }

  getCheckboxSetValues = (e, name) => {
    const state = {
      ...this.state,
      filters: { ...this.state.filters },
    }

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
    this.setState({
      ...this.state,
      filterOpen: null,
      filters: getInitialFilterState(),
    })
  }

  closeSiblingFilters = (filterName, isOpen) => {
    if (isOpen && filterName != this.state.openFilter) {
      this.setState(prevState => ({
        ...prevState,
        filterOpen: filterName,
      }))
    }
  }

  filterEvents = () => {
    const filteredEvents = this.props.events
      .filter(filterPastEvents)
      .filter(filterByDate, this.state.filters.date)
      .filter(filterByFree, this.state.filters.free)
      .filter(filterByCategory, {
        array: this.state.filters.eventCategories,
        key: 'eventCategories',
      })
      .filter(filterByCategory, {
        array: this.state.filters.venueDetails,
        key: 'venueDetails',
      })
      .filter(filterByCategory, {
        array: this.state.filters.accessibilityOptions,
        key: 'accessibilityOptions',
      })
      .filter(filterByCategory, {
        array: this.state.filters.audience,
        key: 'audience',
      })
      .filter(filterByArea, this.state.filters.area)
      .filter(filterByTime, this.state.filters.timeOfDay)

    return filteredEvents
  }

  showMore = filteredCount => {
    if (this.state.eventsToShow < filteredCount) {
      this.setState({ eventsToShow: this.state.eventsToShow + itemsToLoad })
    }
  }

  render() {
    const filteredEvents = this.filterEvents()
    const filteredCount = filteredEvents.length
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          events: this.props.events.filter(filterPastEvents),
          filteredEvents,
          filteredCount,
          actions: {
            getCheckboxBool: this.getCheckboxBool,
            getDatepickerValue: this.getDatepickerValue,
            getCheckboxSetValues: this.getCheckboxSetValues,
            clearFilters: this.clearFilters,
            closeSiblingFilters: this.closeSiblingFilters,
            showMore: this.showMore,
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
  ]).isRequired,
  events: PropTypes.array,
}

Provider.defaultProps = {
  events: [],
}

module.exports = {
  Provider,
  Consumer,
}
