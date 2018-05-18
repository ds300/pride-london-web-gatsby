import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { EventListingCard } from '../templates/events'
import EventsFilters from '../templates/events/EventsFilters'
import { Container, Row, Column } from '../components/grid/grid'
import { Consumer } from '../components/AppContext'
import {
  filterByDate,
  filterByFree,
  filterByCategory,
  filterByArea,
  filterByTime
} from '../templates/events/helpers/index.js'
import moment from 'moment'

const FlexColumn = styled(Column)`
  display: flex;
`
export const Events = () => (
  <Consumer>
    {context => (
      <Fragment>
        <Container>
          <EventsFilters />
        </Container>
        <Container>
          <Row>
            <Column width={1}>
              <h1>Hi from the events page</h1>
              <Link to="/">Go back to the homepage</Link>
            </Column>
          </Row>
          <Row>
            {context.events
              .filter(filterByDate, context.state.filters.date)
              .filter(filterByFree, context.state.filters.free)
              .filter(filterByCategory, {
                array: context.state.filters.eventCategories,
                key: 'eventCategories',
              })
              .filter(filterByCategory, {
                array: context.state.filters.venueDetails,
                key: 'venueDetails',
              })
              .filter(filterByCategory, {
                array: context.state.filters.accessibilityOptions,
                key: 'accessibilityOptions',
              })
              .filter(filterByCategory, {
                array: context.state.filters.audience,
                key: 'audience',
              })
              .filter(filterByArea, context.state.filters.area)
              .filter(filterByTime, context.state.filters.timeOfDay)
              .map(event => (
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
