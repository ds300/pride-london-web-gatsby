import React, { Component } from 'react';
import Link from 'gatsby-link'
import moment from 'moment'

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
      <div>
        <img 
            src={event.eventsListPicture.resolutions.src} 
            alt={event.eventsListPicture.title}
            width={event.eventsListPicture.resolutions.width}
            height={event.eventsListPicture.resolutions.height}
        />   
        <h2><Link to={`/events/${event.id}`}>{event.name}</Link></h2>
        <p>{this.formatDate()}</p>
      </div>
    )   
  }
}