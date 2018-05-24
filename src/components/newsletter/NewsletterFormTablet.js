import React from 'react'
import PropTypes from 'prop-types'
import { Row } from '../grid'
import * as Styles from './styles'

// add mock api request to formmonkey

const NewsletterButton = props => (
  <Styles.StyledContainer>
    <Row>
      <Styles.StyledTitle>{props.newsletterTitle}</Styles.StyledTitle>
      <Styles.StyledSubtitle>{props.newsletterSubtitle}</Styles.StyledSubtitle>
    </Row>
    <Row>
      <Styles.StyledInput placeholder={props.placeholder} type="text" />
    </Row>
    <Row>
      <Styles.StyledButton>{props.buttonText}</Styles.StyledButton>
    </Row>
  </Styles.StyledContainer>
)

NewsletterButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  newsletterTitle: PropTypes.string,
  newsletterSubtitle: PropTypes.string,
}

NewsletterButton.defaultProps = {
  placeholder: 'email address',
  newsletterTitle: 'Stay on top of Pride events',
  newsletterSubtitle: 'Sign up to receive occasional updates',
}

export default NewsletterButton
