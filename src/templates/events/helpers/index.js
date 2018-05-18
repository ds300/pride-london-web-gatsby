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
  const dateFormat = 'YYYY-MM-DD'

  if (!this) return true
  const startDate = moment(event.node.startTime).format(dateFormat)
  const endDate = moment(event.node.endTime).format(dateFormat)
  const filterDate = moment(this).format(dateFormat)
  return moment(filterDate).isBetween(startDate, endDate, null, '[]')
}

function filterByFree(event) {
  if (!this) return true
  return event.node.isFree
}

function filterByCategory(event) {
  const { key } = this
  console.log(event, key)
  if (this.array.length === 0) return true

  return this.array.some(function(category) {
    if(Array.isArray(event.node[key])) {
      return event.node[key].indexOf(category) >= 0
    }
    else {
      return false
    }
  })
}

module.exports = {
  formatDate,
  filterByDate,
  filterByFree,
  filterByCategory,
}
