import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import EventListingCard from './EventListingCard'
import { ChevronRight } from '../../components/ChevronRight'
import { Consumer } from '../../components/AppContext'
import { Container, Row, Column } from '../../components/grid/grid'

const ViewAll = styled.a`
  color: ${props => props.theme.colors.indigo};
  display: block;
  font-family: ${props => props.theme.fonts.title};
  font-size: 1rem;
  padding-top: 5px;
  text-align: right;
  text-decoration: none;
  width: 100%;
`

const FlexColumn = styled(Column)`
  display: flex;
`

const filterEventsYouMayLike = (events, eventId) => {
  const filteredEvents = events.filter(event => {
    if (event.node.id === eventId) return false

    return moment(event.node.startTime).diff(moment(), 'hours') > 0
  })

  return filteredEvents.splice(0, 3)
}

const StyledContainer = styled(Container)`
  padding-top: 60px;
  background-color: ${props => props.theme.colors.lightGrey};
`

const EventsYouMayLike = ({ eventId }) => (
  <Consumer>
    {({ events }) => {
      const eventsYouMayLike = filterEventsYouMayLike(events, eventId)

      if (eventsYouMayLike.length === 0) return null

      return (
        <StyledContainer>
          <Row>
            <Column width={0.7}>
              <h1>You may also like</h1>
            </Column>
            <Column width={0.3}>
              <ViewAll href="/events">
                View all events <ChevronRight />
              </ViewAll>
            </Column>
          </Row>
          <Row>
            {eventsYouMayLike.map(event => (
              <FlexColumn width={[1, 1 / 2, 1 / 3, 1 / 3]} key={event.node.id}>
                <EventListingCard event={event.node} />
              </FlexColumn>
            ))}
          </Row>
        </StyledContainer>
      )
    }}
  </Consumer>
)

EventsYouMayLike.propTypes = {
  eventId: PropTypes.string,
}

export default EventsYouMayLike
