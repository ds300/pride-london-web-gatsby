import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

export default class Event extends Component {
  constructor(props) {
    super(props)

    this.state = {
      event: props.data.contentfulEvent,
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.event.title}</h1>
        <ReactMarkdown source={this.state.event.content.content} />
      </div>
    )
  }
}

Event.propTypes = {
  data: PropTypes.object.isRequired,
}

export const eventPageQuery = graphql`
  query eventQuery($id: String!) {
    contentfulEvent(id: { eq: $id }) {
      id
      name
      eventDescription {
        eventDescription
      }
    }
  }
`
