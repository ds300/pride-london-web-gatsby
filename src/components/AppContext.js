import React, { Component } from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext()
const { Consumer } = AppContext

class Provider extends Component {
  state = {
    filters: {
      date: '',
    },
  }

  getFilterDate = e => {
    this.setState({ filters: { date: e.target.value } })
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          events: this.props.events,
          actions: {
            getFilterDate: this.getFilterDate,
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
