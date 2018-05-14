import React, { Component } from 'react'
import { Consumer } from '../../components/AppContext'

class EventsFilter extends Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div>
            <input type="date" onChange={context.state.actions.getFilterDate} />
          </div>
        )}
      </Consumer>
    )
  }
}

export default EventsFilter
