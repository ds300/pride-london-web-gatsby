import React from 'react'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Column } from '../../components/grid/grid'
import EventDateFilter from './filters/EventDateFilter'
import EventFreeFilter from './filters/EventFreeFilter'

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

const EventsFilters = () => (
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
    <FlexColumn width={[1, 1 / 2, 1 / 2, 1 / 4]}>
      <EventDateFilter />
    </FlexColumn>
    <FlexColumn width={[1, 1 / 2, 1 / 2, 1 / 4]}>
      <EventFreeFilter />
    </FlexColumn>
  </FilterWrapper>
)

export default EventsFilters
