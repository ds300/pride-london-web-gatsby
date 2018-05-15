import React, { Fragment } from 'react'
import Link from 'gatsby-link'

const Home = () => (
  <Fragment>
    <h1>Pride!!!!</h1>
    <p>{React.version}</p>
    <Link to="/events/">Events</Link>
  </Fragment>
)

export default Home
