import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const EventListingCard = props => (
  <div>
    <h2>
      <Link to={`/events/${props.id}`}>{props.title}</Link>
    </h2>
  </div>
)

EventListingCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
}

EventListingCard.defaultProps = {
  id: '',
  title: '',
}

export default EventListingCard
