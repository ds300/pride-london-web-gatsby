import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Column } from '../components/grid/grid'

import FaqsAccordion from '../templates/help/FaqsAccordion'

const PageWrapper = styled.div`
  background-color: #ffffff;
`

const Help = () => (
  <Fragment>
    <PageWrapper>
      <Container>
        <Row>
          <Column width={[1, 1, 1, 0.65]}>
            <h1> We're often asked... </h1>
            <FaqsAccordion />
          </Column>
        </Row>
      </Container>
    </PageWrapper>
  </Fragment>
)

export default Help
