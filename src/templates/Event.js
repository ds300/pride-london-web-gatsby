import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { EventTagList, EventSchedule } from './events'

export default class Event extends Component {
  state = { event: this.props.data.contentfulEvent }

  render() {
    return (
      <div>
        <h1>{this.state.event.name}</h1>
        <EventTagList
          values={['Golf', 'Fancy Cheeses', 'Lifestyle', 'Music']}
        />
        <ReactMarkdown
          source={this.state.event.eventDescription.eventDescription}
        />
        <EventSchedule />
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
