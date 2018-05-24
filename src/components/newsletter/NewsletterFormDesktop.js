import React from 'react'
import PropTypes from 'prop-types'
import { Column, Row } from '../grid'
import { sendRequestToSurveyMonkey } from './helpers'
import * as Styles from './styles'

class NewsletterFormDesktop extends React.Component {
  state = {
    inputContent: '',
  }

  handleChange = ({ target: { val } }) => this.setState({ inputContent: val })

  handleSubmit = () => {
    sendRequestToSurveyMonkey(this.state.inputContent)

    this.setState({
      inputContent: '',
    })
  }

  render() {
    return (
      <Styles.StyledContainer>
        <Row>
          <Column width={1 / 3}>
            <Styles.StyledRow>
              <Styles.StyledTitle>
                {this.props.newsletterTitle}
              </Styles.StyledTitle>
            </Styles.StyledRow>
            <Styles.StyledRow>
              <Styles.StyledSubtitle>
                {this.props.newsletterSubtitle}
              </Styles.StyledSubtitle>
            </Styles.StyledRow>
          </Column>
          <Column width={1 / 3}>
            <Styles.StyledInput
              onChange={this.handleChange}
              value={this.state.inputContent}
              placeholder={this.props.placeholder}
              type="text"
            />
          </Column>
          <Styles.StyledButtonColumn width={1 / 3}>
            <Styles.StyledButton onClick={this.handleSubmit}>
              {this.props.buttonText}
            </Styles.StyledButton>
          </Styles.StyledButtonColumn>
        </Row>
      </Styles.StyledContainer>
    )
  }
}

NewsletterFormDesktop.propTypes = {
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  newsletterTitle: PropTypes.string,
  newsletterSubtitle: PropTypes.string,
}

NewsletterFormDesktop.defaultProps = {
  placeholder: 'email address',
  newsletterTitle: 'Stay on top of Pride events',
  newsletterSubtitle: 'Sign up to receive occasional updates',
}

export default NewsletterFormDesktop
