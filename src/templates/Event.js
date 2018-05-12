import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

export default class Event extends Component {
  state = {
    event: this.props.data.contentfulEvent
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.event.name}</h1>
        <ReactMarkdown source={this.state.event.eventDescription.eventDescription}/>
      </div>
    )
  }
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