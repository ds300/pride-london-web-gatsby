import React, { Component } from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext()
const { Consumer } = AppContext

class Provider extends Component {
  state = {
    events: this.props.value,
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
  value: PropTypes.array,
}

module.exports = {
  Provider,
  Consumer,
}
