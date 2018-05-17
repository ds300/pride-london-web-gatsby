import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'
import Checkbox from './Checkbox'

const List = styled.ul`
    list-style: none;
    padding: none;
    margin: 0;
    box-shadow: 0 2px 4px 0 ${props => rgba(props.theme.colors.black, 0.2)};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 1;
    box-sizing: border-box;
`
const ListItem = styled.li`
    padding: 5px 20px;
`

class CheckboxSet extends Component {
  render() {
    return (
      <List>
        {this.props.options.map((option, index) => {
          return (
            <ListItem key={index}>
              <Checkbox label={option} />
            </ListItem>
          )
        })}
      </List>
    )
  }
}

CheckboxSet.propTypes = {
  options: PropTypes.array.isRequired,
}

export default CheckboxSet
