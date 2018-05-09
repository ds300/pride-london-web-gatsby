import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

export default class Event extends Component {
  state = {
    event: this.props.data.contentfulEvent
  }
  render() {
    return (
      <div>
        <h1>{this.state.event.title}</h1>
        <ReactMarkdown source={this.state.event.content.content}/>
      </div>
    )
  }
}

export const eventPageQuery = graphql`
  query eventQuery($id: String!) {
    contentfulEvent(id: { eq: $id }) {
      id
      title
      content {
        content
      }
    }
  }
`