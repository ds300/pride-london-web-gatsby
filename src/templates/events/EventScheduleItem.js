import React from 'react'
import PropTypes from 'prop-types'

const EventScheduleItem = props => (
  <table>
    <th colSpan="2">{props.title}</th>
    {props.data.map(item => (
      <tr key={item.act}>
        <td>{item.time}</td>
        <td>{item.act}</td>
      </tr>
    ))}
  </table>
)

EventScheduleItem.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
}

export default EventScheduleItem

// make a table header in here using style components
// small left column for time
// large right column for act name

// then get data from contentful
