import styled from 'styled-components/'
import { Row } from '../grid'
import { media } from '../../theme/media'

const localStyles = {
  height: '40px',
}

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
`

export const StyledTitle = styled.h3`
  font-size: 1rem;
  margin: 10px 0 0 0;
  padding: 3px 0;
  text-align: center;
  width: 100%;
  ${media.tablet`
    font-size: 0.8em;
    margin: 0;
    text-align: left;
  `};
`

export const StyledRow = styled(Row)`
  margin: 0;
`

export const StyledSubtitle = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  margin: 10px 0;
  text-align: center;
  width: 100%;
  ${media.tablet`
    font-size: 0.7em;
    margin: 0;
    text-align: left;
  `};
`

export const StyledInput = styled.input`
  height: ${localStyles.height};
  margin-bottom: 10px;
  padding-left: 10px;
  width: 100%;
  ${media.desktop`
    margin-bottom: 0;
  `};
`

export const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.eucalyptusGreen};
  border-radius: 4px;
  color: ${props => props.theme.colors.indigo};
  height: ${localStyles.height};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  outline: none;
  text-decoration: none;
  width: 100%;
  ${media.tablet`
    margin-bottom: 0;
    width: 138px;
  `};
`
