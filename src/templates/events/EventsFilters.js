import React from 'react'
import styled from 'styled-components'
import { Column } from '../../components/grid/grid'
import { Flex } from 'grid-styled'
import EventDateFilter from './filters/EventDateFilter'
import EventFreeFilter from './filters/EventFreeFilter'
import EventDropdownFilter from './filters/EventDropdownFilter'

const FilterWrapper = styled(Flex)`
  background-color: ${props => props.theme.colors.white};
`

const FlexColumn = styled(Column)`
  display: flex;

  & > * {
    flex-basis: 100%;
  }
`

const Label = styled.span`
  color: ${props => props.theme.colors.indigo};
  font-family: ${props => props.theme.fonts.title};
  font-weight: 600;
`

const EventsFilters = props => {
  return (
    <FilterWrapper
      mx={[
        0, // btwn 0 and first breakpoint (375px)
        0, // btwn 1st breakpoint(375px) and 2nd breakpoint (768px)
        25, // btwn 2nd breakpoint(768px) and 3rd breakpoint (1280px)
        60, // btwn 3rd breakpoint(1280px) and 4th breakpoint (1440px)
      ]}
      px={[1, 2, 15, 15]}
      py={4}
      flexWrap="wrap"
    >
      <FlexColumn width={1}>
        <Label>Filter events by</Label>
      </FlexColumn>
      <FlexColumn width={[1, 0.5, 0.5, 0.25]}>
        <EventDropdownFilter heading="Category" filterName="eventCategories"/>
      </FlexColumn>
      <FlexColumn width={[1, 0.5, 0.5, 0.25]}>
        <EventDateFilter />
      </FlexColumn>
      <FlexColumn width={[1, 0.5, 0.5, 0.25]}>
        <EventDropdownFilter heading="Age group" filterName="audience"/>
      </FlexColumn>
      <FlexColumn width={[1, 0.5, 0.5, 0.25]}>
        <EventDropdownFilter heading="Venue options" filterName="venueDetails"/>
      </FlexColumn>
      <FlexColumn width={[1, 0.5, 0.5, 0.25]}>
        <EventDropdownFilter heading="Accessibility" filterName="accessibilityOptions"/>
      </FlexColumn>
      <FlexColumn width={[1, 0.5, 0.5, 0.25]}>
        <EventFreeFilter />
      </FlexColumn>
    </FilterWrapper>
  )
}

export default EventsFilters
