
import styled from 'styled-components'

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

	.accordion__title[aria-selected='true'] {
	    border-top: 2px solid #2cda9d !important;
	    border-left: 2px solid #2cda9d !important;
	    border-right: 2px solid #2cda9d !important;
	    border-bottom-left-radius: 0 !important;
	    border-bottom-right-radius: 0 !important;
	    
	}

  	.accordion__body[aria-hidden='false'] {
	    border-bottom: 2px solid #2cda9d !important;
	    border-left: 2px solid #2cda9d !important;
	    border-right: 2px solid #2cda9d !important;
	    border-bottom-left-radius: 4px !important;
	    border-bottom-right-radius: 4px !important;
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

	    [aria-selected='true'] {
	      	background-color: #ffffff !important;

		    h3 {
		        color: #2d2f7f;
		    }
	    }
  	}
`


export default AccordionWrapper
