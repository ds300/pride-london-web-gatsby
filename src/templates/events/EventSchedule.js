import React from 'react'
import EventScheduleItem from './EventScheduleItem'

const tempData = [
  {
    id: 1234,
    time: '8:00',
    act: 'KY Kelly',
  },
  {
    id: 3294,
    time: '9:00',
    act: 'KY Kelly',
  },
  {
    id: 9932,
    time: '10:00',
    act: 'KY Kelly',
  },
]

const EventSchedule = () => (
  <div>
    <h2>Schedule</h2>
    <EventScheduleItem title="Morning" data={tempData} />
    <EventScheduleItem title="Afternoon" data={tempData} />
    <EventScheduleItem title="Evening" data={tempData} />
  </div>
)

export default EventSchedule
