import React from 'react'
import Link from 'gatsby-link'
import EventTag from '../components/EventTag'

const Home = () => (
  <div>
    <h1>Pride!!!!</h1>
    <EventTag value="Music" />
    <EventTag value="Nightlife" />
    <EventTag value="Fried Tofu" />
    <EventTag value="Cat Pictures" />
    <Link to="/events/">Events</Link>
  </div>
)

export default Home
