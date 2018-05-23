import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Column, Row } from './grid/grid'

const localStyles = {
  height: '40px',
}

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
`

const StyledTitle = styled.h3`
  font-size: 0.8rem;
  margin: 0;
  padding: 3px 0;
`

const StyledRow = styled(Row)`
  margin: 0;
`

const StyledSubtitle = styled.p`
  font-size: 0.7rem;
  font-weight: 300;
`

const StyledInput = styled.input`
  height: ${localStyles.height};
  padding-left: 10px;
  width: 100%;
`

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.eucalyptusGreen};
  border-radius: 4px;
  color: ${props => props.theme.colors.indigo};
  height: ${localStyles.height};
  font-size: 20px;
  font-weight: 600;
  outline: none;
  text-decoration: none;
  width: 138px;
`

const NewsletterButton = props => {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <StyledContainer>
      <Row>
        <Column width={1 / 3}>
          <StyledRow>
            <StyledTitle>{props.newsletterTitle}</StyledTitle>
          </StyledRow>
          <StyledRow>
            <StyledSubtitle>{props.newsletterSubtitle}</StyledSubtitle>
          </StyledRow>
        </Column>
        <Column width={1 / 3}>
          <StyledInput placeholder={props.placeholder} type="text" />
        </Column>
        <Column width={1 / 3}>
          <StyledButton onClick={handleClick}>{props.buttonText}</StyledButton>
        </Column>
      </Row>
    </StyledContainer>
  )
}

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
