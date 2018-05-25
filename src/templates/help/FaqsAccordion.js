import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'
import AccordionWrapper from './AccordionWrapper'
import 'react-accessible-accordion/dist/fancy-example.css'



const FaqsAccordion = () => (
  <AccordionWrapper>
    <Accordion accordion="false">
      <AccordionItem uuid="0">
        <AccordionItemTitle>
          <h3 className="u-position-relative">
            Question question questionnnn
            <div class="accordion__arrow" role="presentation"></div>
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
            <div class="accordion__arrow" role="presentation"></div>
          </h3>
        </AccordionItemTitle>
        <AccordionItemBody>
          <p>
            Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
          </p>
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  </AccordionWrapper>
)

export default FaqsAccordion
