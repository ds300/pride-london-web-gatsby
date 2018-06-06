const path = require('path')
const moment = require('moment')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allContentfulEvent(filter: {}) {
        edges {
          node {
            id
            name
            recurrenceDates
            startTime
            endTime
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        throw result.errors
      }

      const eventTemplate = path.resolve('./src/templates/event.js')

      result.data.allContentfulEvent.edges.forEach(edge => {

        if(!edge.node.recurrenceDates) {
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/events/${edge.node.id}/`,
            component: eventTemplate,
            context: {
              id: edge.node.id,
              startTime: edge.node.startTime,
              endTime: edge.node.endTime,
            },
          })
        } else {

          // extract this logic into a helper function as it will be required again in the appContext

          const dateFormat = 'DD/MM/YYYY'
          const startDate = moment(edge.node.startTime).format(dateFormat)
          const endDate = moment(edge.node.endTime).format(dateFormat)

          startDateTime = moment(edge.node.startTime)
          endDateTime = moment(edge.node.endTime)
          const duration = moment.duration(startDateTime.diff(endDateTime))
          const recurrenceDates = []

          console.log(edge.node.name, startDateTime, endDateTime);

          // const startDate = moment("2018-07-21T18:00:00.000")
          // const endDate = moment("2018-07-21T20:00:00.000")

          // const anotherDate = moment("2018-07-22T20:00:00.000")

          // const duration =endDate.diff(startDate)

          // const anotherEnd =  moment("2018-07-22T20:00:00.000").add(7200000, 'milliseconds')

          // console.log(anotherDate.format("DD-MM-YYYY HH:mm") ,anotherEnd.format("DD-MM-YYYY HH:mm"))

          // Normalize date formatting
          // if (event.node.recurrenceDates) {
          //   event.node.recurrenceDates.map(date => {
          //     const dateSplit = date.split('/')
          //     const [day, month, year] = dateSplit
          //     const formattedDate = moment(`${year}-${month}-${day}`).format(dateFormat)

          //     // Create array of valid dates
          //     if (moment(formattedDate).isValid()) {
          //       recurrenceDates.push(formattedDate)
          //     }
          //   })
          // }

          // Strip any duplicates
          // const eventDates = Array.from(
          //   new Set([startDate, ...recurrenceDates, endDate])
          // )

          // if recurring dates
          // get event start and end datetime calculate duration of event
          // get array of recurrence dates
          // normalize recurrence dates and check they are valid dates
          // if valid create array of recurrence dates and start date
          // loop through each and create a page - use the recurrence date + id to create a unique slug for each instance of this event
          // set start/end dates in the createPage context to be the start date of recurrence &  end date (recurrence date + duration)
          // Update event page template to take event date from props.pathContext
        }

      })
    })
    .then(() =>
      graphql(`
        {
          allContentfulGenericContentPage(filter: {}) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `)
    )
    .then(result => {
      if (result.errors) {
        throw result.errors
      }

      const genericContentPageTemplate = path.resolve(
        './src/templates/genericContentPage.js'
      )

      result.data.allContentfulGenericContentPage.edges.forEach(edge => {
        console.log(`creating /pages/${edge.node.slug}`)
        createPage({
          path: `/pages/${edge.node.slug}`,
          component: genericContentPageTemplate,
          context: {
            id: edge.node.id,
          },
        })
      })
    })
}
