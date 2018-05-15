import React, { Component } from 'react'
import { Consumer } from '../../../components/AppContext'
import Checkbox from '../../../components/Checkbox'

class EventCategoryFilter extends Component {
  state = {
    checked: false
  }

  handleChange = (e) => {
    console.log(e.target.checked)
  }

  render() {
    return (
      <Checkbox
        id="test"
        value="test"
        checked={false}
        label="test"
        name="test"
        handleChange={this.handleChange}
      />
    )
  }
}

export default EventCategoryFilter
