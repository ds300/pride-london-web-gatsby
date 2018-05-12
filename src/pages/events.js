import React, { Component } from 'react'
import Link from 'gatsby-link'
import EventListingCard from '../components/EventListingCard'
import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme.js'

export default class Events extends Component {
  state = {
    events: this.props.data.allContentfulEvent.edges
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <h1>Hi from the events page</h1>
          <Link to="/">Go back to the homepage</Link>
          {this.state.events.map((event, index) => (
            <EventListingCard
              title={event.node.title}
              id={event.node.id}
              key={index}
            />
          ))}
        </div>
      </ThemeProvider>
    )
  }
}

export const EventsQuery = graphql`
query EventsQuery {
  allContentfulEvent(filter: {}) {
    edges {
      node {
        id
        name
      }
    }
  }
}
`
