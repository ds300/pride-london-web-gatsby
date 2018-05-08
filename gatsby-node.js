const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) =>{
        graphql(
            `
                {
                    allContentfulEvent(filter: {}) {
                        edges {
                            node {
                                id
                            }
                        }
                    }
                }
            `
        ).then(result => {
            if (result.errors) {
                reject(result.errors);
            }

            const eventTemplate = path.resolve(`./src/templates/Event.js`);

            result.data.allContentfulEvent.edges.forEach((edge) => {
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
            resolve();
        })
    });
}
