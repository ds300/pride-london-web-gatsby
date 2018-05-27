import styled from 'styled-components'

const AccordionWrapper = styled.div`
  .accordion__body {
    padding-top: 0 !important;
    background-color: ${props => props.theme.colors.lightGrey} !important;
    animation: none !important;
  }

  .accordion__title {
    padding: 20px !important;
    border-radius: 4px;
    outline: none;
    background-color: ${props => props.theme.colors.lightGrey} !important;

    h3 {
      color: ${props => props.theme.colors.black};

      &:hover {
        color: ${props => props.theme.colors.indigo};
      }
    }
  }

  .accordion__title[aria-selected='true'] {
    border-top: 2px solid ${props => props.theme.colors.eucalyptusGreen} !important;
    border-left: 2px solid ${props => props.theme.colors.eucalyptusGreen} !important;
    border-right: 2px solid ${props => props.theme.colors.eucalyptusGreen} !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    background-color: ${props => props.theme.colors.white} !important;

    h3 {
      color: ${props => props.theme.colors.indigo};
    }
  }

  .accordion__body[aria-hidden='false'] {
    border-bottom: 2px solid ${props => props.theme.colors.eucalyptusGreen} !important;
    border-left: 2px solid ${props => props.theme.colors.eucalyptusGreen} !important;
    border-right: 2px solid ${props => props.theme.colors.eucalyptusGreen} !important;
    border-bottom-left-radius: 4px !important;
    border-bottom-right-radius: 4px !important;
    background-color: ${props => props.theme.colors.white} !important;
  }

  .accordion__item + .accordion__item {
    border-top: none;
    margin-top: 20px;
  }

  .accordion {
    border: none;
    border-radius: 4px !important;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export default AccordionWrapper
