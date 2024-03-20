import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accordiondata from './component/accordion.json';
import Button from '@mui/material/Button';
 
export default function AccordionUsage(accordion) {
  return (
    <div className="container bg-dark p-4 mt-5">
      <div className="row bg-dark">
       {accordiondata.map(accordion => (
        <Accordion key={accordion.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${accordion + 1}content`}
            id={`panel${accordion + 1}header`}>
              <h3></h3>
            <strong><h3 className='row'> {accordion.id}   {accordion.question}</h3></strong>
          </AccordionSummary>
          <AccordionDetails>
            <p className='bg'>{accordion.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
      </div>
    </div>
  );
}


