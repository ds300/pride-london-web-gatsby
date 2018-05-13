import React, { Component } from 'react'
import Link from 'gatsby-link'
import EventListingCard from '../components/EventListingCard'
import styled from 'styled-components'
import {Container, Row, Column} from '../components/grid/grid'

const Wrapper = styled.div`
  color: ${props => props.theme.colors.green}
`

export default class Events extends Component {
  state = {
    events: this.props.data.allContentfulEvent.edges
  }

  render() {
    return (  
      <Wrapper>
        <Container>
          <Row>
            <Column width={1}>
              <h1>Hi from the events page</h1>
              <Link to="/">Go back to the homepage</Link>
            </Column>
          </Row>
          <Row>
            {this.state.events.map((event, index) => (
              <Column 
                width={[
                  1, 
                  1, 
                  1/2,
                  1/3
                ]}
                key={index}
              >
                <EventListingCard
                  event={event.node}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
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
