const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allContentfulEvent(filter: {}) {
        edges {
          node {
            id
            recurrenceDates
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
            },
          })
        } else {

          // extract this logic into a helper function as it will be required again in the appContext

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
