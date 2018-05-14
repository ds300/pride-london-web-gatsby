import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { EventListingCard } from '../templates/events'
import { Container, Row, Column } from '../components/grid/grid'
import { Consumer } from '../components/AppContext'

const FlexColumn = styled(Column)`
  display: flex;
`

export default class Events extends Component {
  render() {
    return (
      <Consumer>
        {
          (context) => (
            <Container>
              <Row>
                <Column width={1}>
                  <h1>Hi from the events page</h1>
                  <Link to="/">Go back to the homepage</Link>
                  <p>{context.state.count}</p>
                </Column>
              </Row>
              <Row>
                {context.state.events.map(event => (
                  <FlexColumn
                    width={[
                      1, // 100% between 0px screen width and first breakpoint (375px)
                      1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                      1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1280px)
                      1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
                    ]}
                    key={event.node.id}
                  >
                    <EventListingCard event={event.node} />
                  </FlexColumn>
                ))}
              </Row>
            </Container>
          )
        }
      </Consumer>
    )
  }
}

Events.propTypes = {
  data: PropTypes.object,
}