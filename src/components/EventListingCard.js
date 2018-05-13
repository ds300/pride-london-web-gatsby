import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import formatDate from './helpers'

export const EventListingCard = props => {
  const { event } = props
  return (
    <div>
      <img
        src={event.eventsListPicture.resolutions.src}
        alt={event.eventsListPicture.title}
        width={event.eventsListPicture.resolutions.width}
        height={event.eventsListPicture.resolutions.height}
      />
      <h2>
        <Link to={`/events/${event.id}`}>{event.name}</Link>
      </h2>
      <p>{formatDate(event)}</p>
    </div>
  )
}

EventListingCard.propTypes = {
  event: PropTypes.object,
}

export default EventListingCard
