import React, { Component } from 'react'
import Link from 'gatsby-link'
import EventListingCard from '../components/EventListingCard'
import styled from 'styled-components'
import {Container, Row, Column} from '../components/grid/grid'

const FlexColumn = styled(Column)`
  display: flex;
`

export default class Events extends Component {
  state = {
    events: this.props.data.allContentfulEvent.edges
  }

  render() {
    return (  
      <Container>
        <Row>
          <Column width={1}>
            <h1>Hi from the events page</h1>
            <Link to="/">Go back to the homepage</Link>
          </Column>
        </Row>
        <Row>
          {this.state.events.map((event, index) => (
            <FlexColumn 
              width={[
                1, // 100% between 0px screen width and first breakpoint (375px)
                1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                1/2, // 50% between second breakpoint(768px) and third breakpoint (1280px)
                1/3,  // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
              ]}
              key={index}
            >
              <EventListingCard
                event={event.node}
              />
            </FlexColumn>
          ))}
        </Row>
      </Container>
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
        startTime
        endTime
        eventPriceLow
        eventsListPicture {
          title
          file {
            url
          }
        }
      }
    }
  }
}
`
