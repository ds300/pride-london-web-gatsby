import React from 'react'
import Table from '../../components/Table'

const tempData = {
  scheduleItem: {
    time: '8:00',
    act: 'KY Kelly',
  },
  scheduleItem2: {
    time: '9:00',
    act: 'KY Kelly',
  },
  scheduleItem3: {
    time: '10:00',
    act: 'KY Kelly',
  },
}

const EventSchedule = () => (
  <React.Fragment>
    <h2>Schedule</h2>
    <Table title="Morning" data={tempData} />
    <Table title="Afternoon" data={tempData} />
    <Table title="Evening" data={tempData} />
  </React.Fragment>
)

export default EventSchedule
