import React, { Component } from 'react'
import { Consumer } from '../../../components/AppContext'

class EventDateFilter extends Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div>
            <input type="date" onChange={context.actions.getFilterDate} />
          </div>
        )}
      </Consumer>
    )
  }
}

export default EventDateFilter
