import React from 'react'
import PropTypes from 'prop-types'
import { Column, Row } from '../grid/grid'
import * as Styles from './NewsletterFormStyles'

// add mock api request to formmonkey

const NewsletterButton = props => (
  <Styles.StyledContainer>
    <Row>
      <Column width={1 / 3}>
        <Styles.StyledRow>
          <Styles.StyledTitle>{props.newsletterTitle}</Styles.StyledTitle>
        </Styles.StyledRow>
        <Styles.StyledRow>
          <Styles.StyledSubtitle>
            {props.newsletterSubtitle}
          </Styles.StyledSubtitle>
        </Styles.StyledRow>
      </Column>
      <Column width={1 / 3}>
        <Styles.StyledInput placeholder={props.placeholder} type="text" />
      </Column>
      <Column width={1 / 3}>
        <Styles.StyledButton>{props.buttonText}</Styles.StyledButton>
      </Column>
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
