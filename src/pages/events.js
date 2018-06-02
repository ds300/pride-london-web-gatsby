import React, { Fragment } from 'react'
import styled from 'styled-components'
import { EventListingCard } from '../templates/events'
import EventsFilters from '../templates/events/eventsFilters'
import ImageBanner from '../components/imageBanner'
import Button from '../components/button'
import { Container, Row, Column } from '../components/grid'
import { Consumer } from '../components/appContext'
import { filterByLimit } from '../templates/events/helpers'
import theme from '../theme/theme'

const FlexColumn = styled(Column)`
  display: flex;
`

const ColumnTextCenter = styled(Column)`
  text-align: center;
`

const EventCount = styled.p`
  font-size: 0.875rem;
  line-height: 1.214;
  color: ${props => props.theme.colors.darkGrey};
`

const Events = () => (
  <Consumer>
    {context => (
      <Fragment>
        <Container>
          <ImageBanner
            titleText="Celebrate Pride"
            subtitleText="Events, shows, talks"
            imageSrc=""
            altText="Celebrate Pride banner"
            color={theme.colors.beachBlue}
          />
          <EventsFilters />
        </Container>
        <Container>
          <Row>
            {context.filteredEvents
              .filter(filterByLimit, context.state.eventsToShow)
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
            <ColumnTextCenter width={1}>
              <EventCount>
                You're viewing{' '}
                {context.state.eventsToShow <= context.filteredCount
                  ? context.state.eventsToShow
                  : context.filteredCount}{' '}
                of {context.filteredCount} events
              </EventCount>
              <Button
                onClick={() => context.actions.showMore(context.filteredCount)}
                primary
                disabled={context.state.eventsToShow >= context.filteredCount}
              >
                Show more events
              </Button>
            </ColumnTextCenter>
          </Row>
        </Container>
      </Fragment>
    )}
  </Consumer>
)

export default Events
