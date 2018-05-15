import React, { Component } from 'react'
import { Consumer } from '../../../components/AppContext'
import Checkbox from '../../../components/Checkbox'

class EventCategoryFilter extends Component {
  state = {
    checked: false,
  }

  handleChange = e => {
    console.log(e.target.checked)
  }

  render() {
    return (
      <Consumer>
        {context => (
          <Checkbox
            id="free"
            value="free"
            checked={false}
            label="Show only free events"
            name="free"
            handleChange={e => context.actions.getCheckboxBool(e, 'free')}
          />
        )}
      </Consumer>
    )
  }
}

export default EventCategoryFilter
