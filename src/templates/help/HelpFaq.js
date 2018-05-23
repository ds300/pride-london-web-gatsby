import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'

const AccordionWrapper = styled.div`
  .accordion__body {
    padding-top: 0 !important;
  }

  .accordion__title {
    padding: 20px !important;
    border-radius: 4px;
    outline: none;
    background-color: #efefef !important;

    h3 {
      color: #000000;

      &:hover {
        color: #2d2f7f;
      }
    }
  }

  .accordion__item + .accordion__item {
    border-top: none;
    margin-top: 20px;
  }

  .accordion {
    border: ${props => props.border.style};
    border-radius: 4px !important;
    margin-top: 20px;
    margin-bottom: 20px;

    [aria-selected='true'] {
      background-color: #ffffff !important;

      h3 {
        color: #2d2f7f;
      }
    }
  }
`

const withBorder = {
  style: '2px solid #2cda9d',
}

const withoutBorder = {
  style: 'none',
}

class HelpFaq extends Component {
  state = {
    isOpen: false,
  }

  updateAccordionState = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { isOpen } = this.state

    return (
      <AccordionWrapper border={isOpen == true ? withBorder : withoutBorder}>
        <Accordion onChange={this.updateAccordionState}>
          <AccordionItem>
            <AccordionItemTitle>
              <h3>{this.props.title}</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>{this.props.body}</p>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionWrapper>
    )
  }
}

export default HelpFaq
