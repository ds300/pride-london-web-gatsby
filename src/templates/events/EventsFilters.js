import React from 'react'
import styled from 'styled-components'
import { Consumer } from '../../components/AppContext'
import { Column } from '../../components/grid/grid'
import { Flex } from 'grid-styled'
import EventDateFilter from './filters/EventDateFilter'
import EventFreeFilter from './filters/EventFreeFilter'
import EventDropdownFilter from './filters/EventDropdownFilter'
import theme from '../../theme/theme'
import iconClear from '../../theme/assets/images/icon-clear.svg'
import iconClose from '../../theme/assets/images/icon-close.svg'

const FilterWrapper = styled(Flex)`
  background-color: ${props => props.theme.colors.white};
`

const FlexColumn = styled(Column)`
  display: flex;

  & > * {
    flex-basis: 100%;
  }
`

const FilterHeader = styled(Column)`
  background-color: ${props => props.theme.colors.indigo};
  min-height: 90px;
  display: flex;
  align-items: center;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    background-color: transparent;
    height: auto;
  }
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
  position: left center;
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

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  }
`

const EventsFilters = props => {
  return (
    <Consumer>
      {context => (
        <FilterWrapper
          mx={[
            -1, // btwn 0 and first breakpoint (375px)
            -2, // btwn 1st breakpoint(375px) and 2nd breakpoint (768px)
            25, // btwn 2nd breakpoint(768px) and 3rd breakpoint (1280px)
            60, // btwn 3rd breakpoint(1280px) and 4th breakpoint (1440px)
          ]}
          px={[0, 0, 15, 15]}
          py={4}
          flexWrap="wrap"
        >
          <FilterHeader width={1} mb={[-2, -2, 0]}>
            <FilterHeaderInner>
              <Label>Filter events by</Label>
              <ClearButton type="button" aria-label="Close Filters" onClick={context.actions.clearFilters}>
                Clear filters
              </ClearButton>
              <CloseButton />
            </FilterHeaderInner>
          </FilterHeader>
          <FlexColumn width={[1, 1, 0.5, 0.25]}>
            <EventDropdownFilter
              heading="Category"
              filterName="eventCategories"
            />
          </FlexColumn>
          <FlexColumn width={[1, 1, 0.5, 0.25]}>
            <EventDateFilter />
          </FlexColumn>
          <FlexColumn width={[1, 1, 0.5, 0.25]}>
            <EventDropdownFilter heading="Area of London" filterName="area" />
          </FlexColumn>
          <FlexColumn width={[1, 1, 0.5, 0.25]}>
            <EventDropdownFilter heading="Time of day" filterName="timeOfDay" />
          </FlexColumn>
          <FlexColumn width={[1, 1, 0.5, 0.25]}>
            <EventDropdownFilter heading="Age group" filterName="audience" />
          </FlexColumn>
          <FlexColumn width={[1, 1, 0.5, 0.25]}>
            <EventDropdownFilter
              heading="Venue options"
              filterName="venueDetails"
            />
          </FlexColumn>
          <FlexColumn width={[1, 1, 0.5, 0.25]}>
            <EventDropdownFilter
              heading="Accessibility"
              filterName="accessibilityOptions"
            />
          </FlexColumn>
          <FlexColumn width={[1, 1, 0.5, 0.25]}>
            <EventFreeFilter />
          </FlexColumn>
        </FilterWrapper>
      )}
    </Consumer>
  )
}

export default EventsFilters
