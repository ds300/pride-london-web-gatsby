import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import { media } from '../theme/media'
import theme from '../theme/theme'
import { EventListingCard } from '../components/events'
import EventsFilters from '../components/events/eventsFilters'
import ImageBanner from '../components/imageBanner'
import Button from '../components/button'
import { Container, Row, Column } from '../components/grid'
import { Consumer } from '../components/appContext'
import { filterByLimit } from '../components/events/helpers'
import filterIcon from '../theme/assets/images/icon-filters.svg'
import noScroll from 'no-scroll'

const FlexColumn = styled(Column)`
  display: flex;
`

const ColumnTextCenter = styled(Column)`
  text-align: center;
`

const ContainerAddFilters = styled(Container)`
  padding: 20px 0;
  background-color: ${props => props.theme.colors.white};

  ${media.tablet`
    display: none;
  `};
`

const OffsetContainer = styled(Container)`
  ${media.tablet`
    margin-top: -50px;
    position: relative;
    z-index: 1;
  `};
`

const EventCount = styled.p`
  font-size: 0.875rem;
  line-height: 1.214;
  color: ${props => props.theme.colors.darkGrey};
`

class Events extends Component {
  state = {
    showFiltersMobile: false,
  }

  toggleFiltersMobile = () => {
    this.setState(
      prevState => ({
        ...prevState,
        showFiltersMobile: !prevState.showFiltersMobile,
      }),
      () => noScroll.toggle()
    )
  }

  render() {
    return (
      <Consumer>
        {context => (
          <Fragment>
            <ImageBanner
              titleText="Celebrate Pride"
              subtitleText="Events, shows, talks"
              imageSrc=""
              altText="Celebrate Pride banner"
              color={theme.colors.beachBlue}
            />
            <OffsetContainer>
              <EventsFilters
                showFiltersMobile={this.state.showFiltersMobile}
                toggleFiltersMobile={this.toggleFiltersMobile}
              />
            </OffsetContainer>
            <ContainerAddFilters>
              <Row>
                <ColumnTextCenter width={1}>
                  <Button onClick={this.toggleFiltersMobile} primary>
                    <img
                      src={filterIcon}
                      width="22"
                      height="18"
                      alt="Filters Icon"
                      role="presentation"
                    />{' '}
                    Add Filters
                  </Button>
                </ColumnTextCenter>
              </Row>
            </ContainerAddFilters>
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
                    onClick={() =>
                      context.actions.showMore(context.filteredCount)
                    }
                    primary
                    disabled={
                      context.state.eventsToShow >= context.filteredCount
                    }
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
  }
}

export default Events
