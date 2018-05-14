import React, { Component } from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext()
const { Consumer } = AppContext

class Provider extends Component {
  constructor(props) {
    super()
    this.state = {
      events: props.events,
      filters: {
        date: '',
      },
      actions: {
        getFilterDate: this.getFilterDate,
      },
    }
  }

  getFilterDate = e => {
    this.setState({filters: {date: e.target.value}})
  }

  render() {
    return (
      <AppContext.Provider value={{ state: this.state }}>
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
