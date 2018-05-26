import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'

import AccordionWrapper from './accordionWrapper'
import 'react-accessible-accordion/dist/fancy-example.css'

const FaqsAccordion = () => (
  <AccordionWrapper>
    <Accordion>
      <AccordionItem uuid="0">
        <AccordionItemTitle>
          <h3 className="u-position-relative">
            Question question questionnnn
            <div className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>Here's your answer</p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem uuid="1">
        <AccordionItemTitle>
          <h3 className="u-position-relative">
            Another question!
            <div className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
            Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
          </p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem uuid="2">
        <AccordionItemTitle>
          <h3 className="u-position-relative">
            Another question!
            <div className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
            Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
          </p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem uuid="3">
        <AccordionItemTitle>
          <h3 className="u-position-relative">
            Another question!
            <div className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
            Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
          </p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem uuid="4">
        <AccordionItemTitle>
          <h3 className="u-position-relative">
            Question question questionnnn
            <div className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>Here's your answer</p>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem uuid="5">
        <AccordionItemTitle>
          <h3 className="u-position-relative">
            Question question questionnnn
            <div className="accordion__arrow" role="presentation" />
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>Here's your answer</p>
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  </AccordionWrapper>
)

export default FaqsAccordion
