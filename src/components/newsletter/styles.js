import styled from 'styled-components/'
import { Column, Row } from '../grid'
import { media } from '../../theme/media'

const localStyles = {
  height: '40px',
}

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

export const StyledInput = styled.input`
  font-size: 1.25em;
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
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.colors.indigo};
  cursor: pointer;
  height: ${localStyles.height};
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
