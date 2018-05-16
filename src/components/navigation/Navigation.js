import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './presentational/header'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      isHovered: false,
    }
  }

  render() {
    return <Header {...this.props}>{this.props.children}</Header>
  }
}

Navigation.propTypes = {
  items: PropTypes.shape({
    logo: PropTypes.string,
    listItems: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.objectOf(PropTypes.string),
    cta: PropTypes.string,
  }).isRequired,
}

export default Navigation
