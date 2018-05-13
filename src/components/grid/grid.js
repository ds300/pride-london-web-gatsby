import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

const Container = styled(Box)`
  @media (min-width: 375px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    max-width: 668px;
  }

  @media (min-width: 1280px) {
    max-width: 1100px;
  }

  @media (min-width: 1440px) {
    max-width: 1260px;
  }  
`
Container.defaultProps = {
  mx: 'auto',
}

const Row = props => (
  <Flex
    {...props}
    mx={[1, -2,-3]}
    flexWrap="wrap"
  />
)

const Column = props => (
  <Box
    {...props}
    px={[1,2,2,3]}
    py={2}
    flex='1 1 auto'
  />
)

module.exports = {
  Container,
  Row,
  Column
}