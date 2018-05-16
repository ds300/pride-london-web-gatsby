import React from 'react'
import styled from 'styled-components'
import { Container, Row, Column } from '../../components/grid/grid'

const ViewAll = styled.a`
  color: ${props => props.theme.colors.indigo};
  display: block;
  font-family: ${props => props.theme.fonts.title};
  font-size: 0.8em;
  letter-spacing: 0.1px;
  padding-top: 5px;
  text-align: right;
  text-decoration: none;
  width: 100%;
`

const EventYouMayAlsoLike = () => (
  <Container>
    <Row>
      <Column width={0.7}>
        <h2>You may also like</h2>
      </Column>
      <Column width={0.3}>
        <ViewAll href="../events/">View all events</ViewAll>
      </Column>
    </Row>
  </Container>
)

export default EventYouMayAlsoLike

export const query = graphql`
  fragment eventYouMayAlsoLikeFragment on ContentfulYouMayAlsoLike {
    id
  }
`

// price
// date
// time
// title

// also add chevron to 'back to events'
