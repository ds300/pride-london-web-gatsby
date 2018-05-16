import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Provider } from '../components/AppContext'
import theme from '../theme/theme'
import Navigation from '../components/navigation/Navigation'

import './index.css'
import './fonts.css'

const Layout = props => (
  <Provider value={props.data.allContentfulEvent.edges}>
    <ThemeProvider theme={theme}>
      <div>
        <Helmet
          title={props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Navigation
          items={{
            logo: 'http://via.placeholder.com/164x64',
            listItems: [
              'Learn',
              'Attend',
              'Support us',
              'Take part',
              'Plan',
              'Help',
            ],
            cta: 'donate',
          }}
        />
        <div>{props.children()}</div>
      </div>
    </ThemeProvider>
  </Provider>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default Layout

export const query = graphql`
  query rootQuery {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulEvent(filter: {}) {
      edges {
        node {
          id
          name
          startTime
          endTime
          eventPriceLow
          eventsListPicture {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`
