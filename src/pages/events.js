import React, { Component } from 'react';
import Link from 'gatsby-link'
import EventListingCard from '../components/EventListingCard'

class Events extends Component {
  state = {
    events: this.props.data.allContentfulEvent.edges
  }

  componentWillMount() {
    console.log("MOUNTED")
  }

  render() {
    return (
      <div>
        <h1>Hi from the events page</h1>
        <Link to="/">Go back to the homepage</Link>
        {this.state.events.map((event, index) => (
          <EventListingCard
            title={event.node.title}
            key={index}
          />
        ))}
      </div>
    )
  }
}

export default Events

export const EventsQuery = graphql`
query EventsQuery {
  allContentfulEvent(filter: {}) {
    edges {
      node {
        id
        title
      }
    }
  }
}
`
