import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { media } from '../../theme/media'
import { Consumer } from '../../components/appContext'
import EventDateFilter from './filters/eventDateFilter'
import EventFreeFilter from './filters/eventFreeFilter'
import EventDropdownFilter from './filters/eventDropdownFilter'
import iconClear from '../../theme/assets/images/icon-clear.svg'
import iconClose from '../../theme/assets/images/icon-close.svg'

const FilterWrapper = styled(Flex)`
  background-color: ${props => props.theme.colors.white};
  position: fixed;
  padding-top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  transition: left 0.15s linear;
  top: 0;
  left: 100%;
  z-index: 1;

  &.open {
    left: 0;
  }

  ${media.tablet`
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    padding-top: 20px;
  `};
`

const FlexColumn = styled(Box)`
  display: flex;
  padding: 0px;

  & > * {
    flex-basis: 100%;
  }

  ${media.tablet`
    padding: 10px;
  `};

  ${media.desktop`
    padding: 10px 15px;
  `};
`

const FilterHeader = styled(Box)`
  background-color: ${props => props.theme.colors.indigo};
  min-height: 90px;
  display: flex;
  align-items: center;
  position: relative;

  ${media.mobile`
    padding: 0px;
  `};

  ${media.tablet`
    background-color: transparent;
    height: auto;
    min-height: 0;
    padding: 10px;
  `};

  ${media.desktop`
    padding: 10px 15px;
  `};
`

const FilterHeaderInner = styled.div`
  padding: 0 10px;
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    padding: 20px;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    padding: 0;
  }
`

const Label = styled.span`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.title};
  font-weight: 600;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    color: ${props => props.theme.colors.indigo};
  }
`

const ClearButton = styled.button`
  border: none;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.indigo};
  background-image: url(${iconClear});
  background-repeat: no-repeat;
  background-position: left center;
  padding: 0 0 0 25px;
  position: absolute;
  right: 20px;
  top: 104px;
  z-index: 1;
  background-color: transparent;
  cursor: pointer;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    right: 30px;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    position: static;
  }
`

const CloseButton = styled.button`
  display: inline-block;
  height: 20px;
  width: 20px;
  background-image: url(${iconClose});
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${media.tablet`
    display: none;
  `};
`

const EventsFilters = props => (
  <Consumer>
    {context => (
      <FilterWrapper
        className={props.showFiltersMobile ? 'open' : null}
        mx={[
          0, // btwn 0 and first breakpoint (375px)
          0, // btwn 1st breakpoint(375px) and 2nd breakpoint (768px)
          25, // btwn 2nd breakpoint(768px) and 3rd breakpoint (1280px)
          60, // btwn 3rd breakpoint(1280px) and 4th breakpoint (1440px)
        ]}
        mb={[0, 0, 40]}
        px={[0, 0, 15, 15]}
        py={4}
        flexWrap="wrap"
      >
        <FilterHeader width={1}>
          <FilterHeaderInner>
            <Label>Filter events by</Label>
            <ClearButton type="button" onClick={context.actions.clearFilters}>
              Clear filters
            </ClearButton>
            <CloseButton
              aria-label="Close filters"
              onClick={props.toggleFiltersMobile}
            />
          </FilterHeaderInner>
        </FilterHeader>
        <FlexColumn width={[1, 1, 0.5, 0.25]}>
          <EventDropdownFilter
            heading="Category"
            filterName="eventCategories"
            filterOpen={context.state.filterOpen}
          />
        </FlexColumn>
        <FlexColumn width={[1, 1, 0.5, 0.25]}>
          <EventDateFilter />
        </FlexColumn>
        <FlexColumn width={[1, 1, 0.5, 0.25]}>
          <EventDropdownFilter
            heading="Area of London"
            filterName="area"
            filterOpen={context.state.filterOpen}
          />
        </FlexColumn>
        <FlexColumn width={[1, 1, 0.5, 0.25]}>
          <EventDropdownFilter
            heading="Time of day"
            filterName="timeOfDay"
            filterOpen={context.state.filterOpen}
          />
        </FlexColumn>
        <FlexColumn width={[1, 1, 0.5, 0.25]}>
          <EventDropdownFilter
            heading="Age group"
            filterName="audience"
            filterOpen={context.state.filterOpen}
          />
        </FlexColumn>
        <FlexColumn width={[1, 1, 0.5, 0.25]}>
          <EventDropdownFilter
            heading="Venue options"
            filterName="venueDetails"
            filterOpen={context.state.filterOpen}
          />
        </FlexColumn>
        <FlexColumn width={[1, 1, 0.5, 0.25]}>
          <EventDropdownFilter
            heading="Accessibility"
            filterName="accessibilityOptions"
            filterOpen={context.state.filterOpen}
          />
        </FlexColumn>
        <FlexColumn width={[1, 1, 0.5, 0.25]}>
          <EventFreeFilter />
        </FlexColumn>
      </FilterWrapper>
    )}
  </Consumer>
)

EventsFilters.propTypes = {
  showFiltersMobile: PropTypes.bool.isRequired,
  toggleFiltersMobile: PropTypes.func.isRequired,
}

export default EventsFilters
