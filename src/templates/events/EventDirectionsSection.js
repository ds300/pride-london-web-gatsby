import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import moment from 'moment'
import querystring from 'querystring'

import EventListingCard from './EventListingCard'
import { ChevronRight } from '../../components/ChevronRight'
import { Consumer } from '../../components/AppContext'
import { Container, Row, Column } from '../../components/grid/grid'
import { media } from '../../theme/media'
import theme from '../../theme/theme'

const StyledContainer = styled(Container)`
  padding: 0px 0px 30px;
  background-color: white;
  ${media.desktop`
    padding: 60px 0px;
    background-color: ${theme.colors.indigo};
  `};
`

const Heading = styled.h2`
  font-size: 1.125rem;
  font-weight: 300;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.indigo};
  ${media.desktop`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 30px;
    color: white;
  `};
`

const MapWrapper = styled.a`
  display: block;
  height: 215px;
  background-size: cover;
  background-position: center center;
  margin: 0px;
  ${media.tablet`
    height: 350px;
    margin: 0px 40px;
  `};
  ${media.desktop`
    height: 450px;
    max-width: 830px;
    margin: 0px 80px;
  `};
`

export class EventDirectionSection extends React.Component {
  state = { width: null, height: null }

  componentDidMount() {
    this.componentDidUpdate()
  }

  componentDidUpdate() {
    const rect = this.wrapperRef.getBoundingClientRect()
    if (rect.width !== this.state.width && rect.height !== this.state.height) {
      this.setState({
        width: rect.width,
        height: rect.height,
      })
    }
  }

  render() {
    const {
      lat,
      lon,
      description,
      addressLine1,
      addressLine2,
      postcode,
      city,
    } = this.props
    const { width, height } = this.state

    return (
      <StyledContainer>
        <Row>
          <Heading>Getting there</Heading>
        </Row>
        <MapWrapper
          alt="Get directions to the venue"
          innerRef={ref => (this.wrapperRef = ref)}
          href={`https://www.google.com/maps/search/?api=1&${querystring.encode(
            {
              query: [description, addressLine1, addressLine2, city, postcode]
                .filter(Boolean)
                .join(', '),
            }
          )}`}
          style={{
            backgroundImage:
              Boolean(width && height) &&
              `url(https://maps.googleapis.com/maps/api/staticmap?${querystring.encode(
                {
                  center: `${lat},${lon}`,
                  zoom: 14,
                  size: `${width}x${height}`,
                  scale: 2,
                  maptype: 'roadmap',
                  markers: `color:red|label:${description}|${lat},${lon}`,
                  key: process.env.GOOGLE_MAPS_API_KEY,
                }
              )})`,
          }}
        />
      </StyledContainer>
    )
  }
}

EventDirectionSection.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  addressLine1: PropTypes.string,
  addressLine2: PropTypes.string,
  postcode: PropTypes.string,
  city: PropTypes.string,
}
