import React, { Component } from 'react';
import Link from 'gatsby-link'

const EventListingCard = (props) => (
  <div>
    <h2><Link to={`/events/${props.id}`}>{props.title}</Link></h2>
  </div>
)

export default EventListingCard
