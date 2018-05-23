import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Column } from '../components/grid/grid'

import HelpFaq from '../templates/help/HelpFaq'

const PageWrapper = styled.div`
  background-color: #ffffff;
`

export const Help = () => (
  <Fragment>
    <PageWrapper>
      <Container>
        <Row>
          <Column width={[1, 1, 1, 0.65]}>
            <h1> We're often asked... </h1>
            <HelpFaq
              title="The help question goes here cheesecake jelly pie donut cake chocolate bar"
              body="Gummies chocolate cake marzipan powder pastry cheesecake lollipop. Bonbon candy gummi bears. Marzipan lemon drops soufflé. Cake jelly chocolate cake chocolate cake dragée. Biscuit pudding jelly beans dessert jujubes chocolate bar candy. Tiramisu lollipop icing. Cupcake soufflé sweet roll. Apple pie biscuit cookie sesame snaps. Danish marzipan pie jelly beans chocolate bar fruitcake. Tootsie roll topping candy icing chupa chups pie lollipop muffin. Chocolate cake pastry cookie candy canes ice cream. Sesame snaps sweet roll halvah sugar plum sugar plum sesame snaps cupcake jelly. Bear claw tart gingerbread oat cake lollipop sweet. Candy canes donut lemon drops wafer."
            />
            <HelpFaq
              title="The help question goes here cheesecake jelly pie donut cake chocolate bar gingerbread oat cake lollipop sweet. Candy canes donut lemon drops wafer"
              body="Gummies chocolate cake marzipan powder pastry cheesecake lollipop. Bonbon candy gummi bears. Marzipan lemon drops soufflé. Cake jelly chocolate cake chocolate cake dragée. Biscuit pudding jelly beans dessert jujubes chocolate bar candy. Tiramisu lollipop icing. Cupcake soufflé sweet roll. Apple pie biscuit cookie sesame snaps. Danish marzipan pie jelly beans chocolate bar fruitcake. Tootsie roll topping candy icing chupa chups pie lollipop muffin. Chocolate cake pastry cookie candy canes ice cream. Sesame snaps sweet roll halvah sugar plum sugar plum sesame snaps cupcake jelly. Bear claw tart gingerbread oat cake lollipop sweet. Candy canes donut lemon drops wafer."
            />
          </Column>
        </Row>
      </Container>
    </PageWrapper>
  </Fragment>
)

export default Help
