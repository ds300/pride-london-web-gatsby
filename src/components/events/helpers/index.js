import moment from 'moment'

const formatTime = time => {
  if (moment(time).format('mm') === '00') {
    return moment(time).format('ha')
  }
  return moment(time).format('h:mma')
}

const formatDate = event => {
  const year = moment(event.startTime).year()

  const startDate = moment(event.startTime).format('L')
  const endDate = moment(event.endTime).format('L')

  const startMonth = moment(event.startTime).format('MMM')
  const endMonth = moment(event.endTime).format('MMM')

  const startDay = moment(event.startTime).date()
  const endDay = moment(event.endTime).date()

  const startTime = formatTime(event.startTime)
  const endTime = formatTime(event.endTime)

  if (startDate === endDate) {
    return `${startDay} ${startMonth} ${year} • ${startTime} - ${endTime}`
  } else if (startMonth === endMonth) {
    return `${startDay} - ${endDay} ${startMonth} ${year} • ${startTime} - ${endTime}`
  }
  return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${year} • ${startTime} - ${endTime}`
}

function filterByDate(event) {
  if (!(this.startDate && this.endDate)) return true

  const dateFormat = 'DD/MM/YYYY'
  const startDate = moment(event.node.startTime).format(dateFormat)
  const endDate = moment(event.node.endTime).format(dateFormat)
  const recurrenceDates = []

  // Normalize date formatting
  if (event.node.recurrenceDates) {
    event.node.recurrenceDates.map(date => {
      const dateSplit = date.split('/')
      const [day, month, year] = dateSplit
      const formattedDate = moment(`${year}-${month}-${day}`).format(dateFormat)

      // Create array of valid dates
      if (moment(formattedDate).isValid()) {
        recurrenceDates.push(formattedDate)
      }
    })
  }

  // Strip any duplicates
  const eventDates = Array.from(
    new Set([startDate, ...recurrenceDates, endDate])
  )

  // Check if at least one of the dates is in the range
  return eventDates.some(date => {
    return moment(date).isBetween(this.startDate, this.endDate, null, '[]')
  })
}

function filterByFree(event) {
  if (!this) return true
  return event.node.eventPriceLow === 0
}

function filterByCategory(event) {
  const { key } = this
  if (this.array.length === 0) return true

  return this.array.some(category => {
    if (Array.isArray(event.node[key])) {
      return event.node[key].indexOf(category) >= 0
    }
    return false
  })
}

function filterByArea(event) {
  if (this.length === 0) return true

  if (typeof event.node.postcode === 'string') {
    let area
    const postcode = event.node.postcode.toLowerCase()
    switch (true) {
      case postcode.lastIndexOf('wc', 0) === 0 ||
        postcode.lastIndexOf('ec', 0) === 0:
        area = 'Central'
        break
      case postcode.lastIndexOf('w', 0) === 0:
        area = 'West'
        break
      case postcode.lastIndexOf('e', 0) === 0:
        area = 'East'
        break
      case postcode.lastIndexOf('s', 0) === 0:
        area = 'South'
        break
      case postcode.lastIndexOf('n', 0) === 0:
        area = 'North'
        break
      default:
        return false
    }
    return this.indexOf(area) !== -1
  }
  return false
}

function filterByTime(event) {
  if (this.length === 0) return true
  const format = 'HH:MM'
  const startTime = moment(event.node.startTime).format(format)
  const afternoonStart = '12:00'
  const afternoonEnd = '17:59'

  let timeOfDay

  switch (true) {
    case startTime < afternoonStart:
      timeOfDay = 'Morning'
      break
    case startTime >= afternoonStart && startTime <= afternoonEnd:
      timeOfDay = 'Afternoon'
      break
    case startTime > afternoonEnd:
      timeOfDay = 'Evening'
      break
    default:
      return false
  }
  return this.indexOf(timeOfDay) !== -1
}

function filterPastEvents(event) {
  const today = moment()
  return moment(event.node.startTime).isSameOrAfter(today)
}

function filterByLimit(event, index) {
  return index < this
}

module.exports = {
  formatDate,
  filterByDate,
  filterByFree,
  filterByCategory,
  filterByArea,
  filterByTime,
  filterPastEvents,
  filterByLimit,
}
