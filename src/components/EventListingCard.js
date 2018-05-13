import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import moment from 'moment'
import styled from 'styled-components'

const Card = styled(Link)`
  display: block;
  border-radius: 5px;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

const CardImage = styled.img`
  display: block;
  width: 100%;
`

const CardBody = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.white};
  flex-grow: 1;

  @media (min-width: 375px) {
    padding: 30px;
  }
`

const CardDate = styled.span`
  display: block;
  color: ${props => props.theme.colors.darkGrey};
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.625rem;
`

const CardPrice = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.indigo};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.title};
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 5px;
`

export default class EventListingCard extends Component {
  formatDate = () => {
    const year = moment(this.props.event.startTime).year()

    const startDate = moment(this.props.event.startTime).format('L')
    const endDate = moment(this.props.event.endTime).format('L')

    const startMonth = moment(this.props.event.startTime).format('MMM')
    const endMonth = moment(this.props.event.endTime).format('MMM')

    const startDay = moment(this.props.event.startTime).date()
    const endDay = moment(this.props.event.endTime).date()

    const startTime = this.formatTime(this.props.event.startTime);
    const endTime = this.formatTime(this.props.event.endTime);

    if(startDate === endDate) {
      return `${startDay} ${startMonth} ${year} • ${startTime} - ${endTime}`
    }
    else if (startMonth === endMonth) {
      return `${startDay} - ${endDay} ${startMonth} ${year} • ${startTime} - ${endTime}`
    }
    else {
      return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${year} • ${startTime} - ${endTime}`
    }
  }

  formatTime = (time) => {
    if(moment(time).format('mm') === '00') {
      return moment(time).format('ha')
    } 
    else {
      return moment(time).format('h:mma')
    }
  }

  render() {
    const event = this.props.event

    return (
      <Card to={`/events/${event.id}`}>
        <CardImage 
            src={`${event.eventsListPicture.file.url}?fit=fill&w=400&h=225&f=faces`} 
            alt={event.eventsListPicture.title}
            width="400"
            height="225"
        />
        <CardBody>
          <CardDate>{this.formatDate()}</CardDate>
          <h2>{event.name}</h2>
        </CardBody>
        <CardPrice>from £{event.eventPriceLow}</CardPrice>   
      </Card>
    )   
  }
}

EventListingCard.propTypes = {
  event: PropTypes.object
}