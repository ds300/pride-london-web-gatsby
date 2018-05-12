import React from 'react'
import PropTypes from 'prop-types'

const Table = props => (
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

Table.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
}

export default Table
