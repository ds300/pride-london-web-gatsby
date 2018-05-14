import React, { Component } from 'react'

const AppContext = React.createContext()
const { Consumer } = AppContext;

class Provider extends Component {
  state = {
    events: this.props.value
  }

  render() {
    return(
      <AppContext.Provider value={{state: this.state}}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

module.exports = {
  Provider,
  Consumer
}