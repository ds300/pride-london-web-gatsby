import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Column } from '../grid'
import { media } from '../../theme/media'
import { sendRequestToSurveyMonkey } from './helpers'

const StyledInput = styled.input`
  font-size: 1.25em;
  height: 40px;
  margin-bottom: 10px;
  padding-left: 10px;
  width: 100%;
  ${media.desktop`
    margin-bottom: 0;
  `};
`

export const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.eucalyptusGreen};
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.colors.indigo};
  cursor: pointer;
  height: 40px;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 20px;
  outline: none;
  text-decoration: none;
  width: 100%;
  ${media.tablet`
    margin-bottom: 0;
    width: 138px;
  `};
`

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  width: 90%;
  ${media.desktop`
    padding: 60px auto;
  `};
`

export const StyledTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  padding: 3px 0;
  text-align: center;
  width: 100%;
  ${media.tablet`
    font-size: 0.8em;
    text-align: left;
  `};
`

export const StyledRow = styled(Row)`
  margin: 0;
`

export const StyledButtonColumn = styled(Column)`
  text-align: center;
`

export const StyledSubtitle = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  margin: 0 0 10px 0;
  text-align: center;
  width: 100%;
  ${media.tablet`
    font-size: 0.7em;
    margin: 0;
    text-align: left;
  `};
`

class NewsletterForm extends React.Component {
  state = { value: '' }

  handleChange = ({ target: { value } }) => this.setState({ value })

  handleSubmit = e => {
    e.preventDefault()
    sendRequestToSurveyMonkey(this.state.value)
    this.setState({
      value: '',
    })
  }

  render() {
    return (
      <StyledContainer>
        <Row>
          <Column width={[1, 1, 1 / 3, 1 / 3]}>
            <StyledRow>
              <StyledTitle>{this.props.newsletterTitle}</StyledTitle>
            </StyledRow>
            <StyledRow>
              <StyledSubtitle>{this.props.newsletterSubtitle}</StyledSubtitle>
            </StyledRow>
          </Column>
          <Column width={[1, 1, 1 / 3, 1 / 3]}>
            <StyledInput
              onChange={this.handleChange}
              placeholder={this.props.placeholder}
              type="text"
            />
          </Column>
          <StyledButtonColumn width={[1, 1, 1 / 3, 1 / 3]}>
            <StyledButton onClick={this.handleSubmit}>
              {this.props.buttonText}
            </StyledButton>
          </StyledButtonColumn>
        </Row>
      </StyledContainer>
    )
  }
}

NewsletterForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  newsletterTitle: PropTypes.string,
  newsletterSubtitle: PropTypes.string,
}

NewsletterForm.defaultProps = {
  placeholder: 'email address',
  newsletterTitle: 'Stay on top of Pride events',
  newsletterSubtitle: 'Sign up to receive occasional updates',
}

export default NewsletterForm
