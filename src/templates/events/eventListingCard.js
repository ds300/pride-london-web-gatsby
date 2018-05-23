import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { formatDate } from './helpers'

const Card = styled(Link)`
  display: block;
  border-radius: 5px;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

const CardImage = styled.img`
  display: block;
  width: 100%;
`

const CardBody = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.white};
  flex-grow: 1;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    padding: 30px;
  }
`

const CardDate = styled.span`
  display: block;
  color: ${props => props.theme.colors.darkGrey};
  font-size: 0.875rem;
  line-height: 1.43;
  font-weight: 600;
  margin-bottom: 0.65rem;
  font-family: Poppins, sans-serif;
`

const CardPrice = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.indigo};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.title};
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1rem;
`

const CardHeading = styled.h2`
  margin-bottom: 0;
  line-height: 1.21;
  color: black;
`

export const EventListingCard = props => {
  const { event } = props

  return (
    <Card to={`/events/${event.id}`}>
      <CardImage
        src={`${event.eventsListPicture.file.url}?fit=fill&w=400&h=225&f=faces`}
        alt={event.eventsListPicture.title}
        width="400"
        height="225"
      />
      <CardBody>
        <CardDate>{formatDate(event)}</CardDate>
        <CardHeading>{event.name}</CardHeading>
      </CardBody>
      <CardPrice>from £{event.eventPriceLow}</CardPrice>
    </Card>
  )
}

EventListingCard.propTypes = {
  event: PropTypes.object.isRequired,
}

export default EventListingCard
