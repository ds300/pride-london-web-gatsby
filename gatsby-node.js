const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allContentfulEvent(filter: {}) {
        edges {
          node {
            id
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
