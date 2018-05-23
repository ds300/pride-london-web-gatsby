import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { EventListingCard } from '../templates/events'
import ImageBanner from '../components/imageBanner'
import EventsFilters from '../templates/events/eventsFilters'
import { Container, Row, Column } from '../components/grid'
import { Consumer } from '../components/appContext'

const FlexColumn = styled(Column)`
  display: flex;
`

const Events = () => (
  <Consumer>
    {context => (
      <Fragment>
        <Container>
          <EventsFilters />
        </Container>
        <Container>
          <Row>
            <Column width={1}>
              <ImageBanner
                titleText="Celebrate Pride"
                subtitleText="Events, shows, talks"
                imageSrc=""
                altText="Celebrate Pride banner"
              />
              <h1> Hi from the events page </h1>
              <Link to="/"> Go back to the homepage </Link>
            </Column>
          </Row>
          <Row>
            {context.filteredEvents.map(event => (
              <FlexColumn
                width={[
                  1, // 100% between 0px screen width and first breakpoint (375px)
                  1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                  1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1280px)
                  1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
                ]}
                key={event.node.id}
              >
                <EventListingCard event={event.node} />
              </FlexColumn>
            ))}
          </Row>
        </Container>
      </Fragment>
    )}
  </Consumer>
)

export default Events
