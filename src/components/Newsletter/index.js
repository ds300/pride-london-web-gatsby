import React from 'react'
import PropTypes from 'prop-types'
import withSizes from 'react-sizes'
import NewsletterFormDesktop from './NewsletterFormDesktop'
import NewsletterFormMobile from './NewsletterFormTablet'

const NewsletterForm = props => {
  if (props.isTablet) {
    return <NewsletterFormMobile {...props} />
  }

  return <NewsletterFormDesktop {...props} />
}

const mapSizesToProps = ({ width }) => ({
  isTablet: width < 768,
})

NewsletterForm.propTypes = {
  isTablet: PropTypes.bool.isRequired,
}

export default withSizes(mapSizesToProps)(NewsletterForm)
