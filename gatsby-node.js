require('babel-register')
const path = require('path')
const moment = require('moment')
const {
  sanitizeDates,
  formatTime,
  getDuration,
  filterPastEvents,
} = require('./src/components/events/helpers')

const { dateFormat } = require('./src/constants')

const featureFlags = require('./src/featureFlags')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const result = graphql(`
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
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const eventTemplate = path.resolve('./src/templates/event.js')
    const prettyDate = 'D MMM YYYY'
    // Don't create pages for past events
    result.data.allContentfulEvent.edges
      .filter(filterPastEvents)
      .forEach(edge => {
        if (!edge.node.recurrenceDates) {
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/events/${edge.node.id}/`,
            component: eventTemplate,
            context: {
              id: edge.node.id,
              showSchedule: featureFlags.SCHEDULE,
              startDate: moment(edge.node.startTime).format(prettyDate),
              endDate: moment(edge.node.endTime).format(prettyDate),
              startTime: formatTime(edge.node.startTime),
              endTime: formatTime(edge.node.endTime),
            },
          })
        } else {
          const recurrenceDates = sanitizeDates([
            moment(edge.node.startTime).format(dateFormat),
            ...edge.node.recurrenceDates,
          ])

          recurrenceDates.forEach(date => {
            const customId = `${edge.node.id}-${date.split('/').join('')}`
            createPage({
              path: `/events/${customId}/`,
              component: eventTemplate,
              context: {
                id: edge.node.id,
                showSchedule: featureFlags.SCHEDULE,
                startDate: moment(date, dateFormat).format(prettyDate),
                endDate: moment(date, dateFormat)
                  .add(
                    getDuration(edge.node.startTime, edge.node.endTime),
                    'milliseconds'
                  )
                  .format(prettyDate),
                startTime: formatTime(edge.node.startTime),
                endTime: formatTime(edge.node.endTime),
              },
            })
          })
        }
      })
  })

  if (!featureFlags.GENERIC_CONTENT_PAGES) {
    return result
  }

  return result
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
