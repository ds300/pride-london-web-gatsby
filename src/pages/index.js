import React from 'react'
import Link from 'gatsby-link'

const Home = () => (
  <React.Fragment>
    <h1>Pride!!!!</h1>
    <p>{React.version}</p>
    <Link to="/events/">Events</Link>
  </React.Fragment>
)

export default Home
