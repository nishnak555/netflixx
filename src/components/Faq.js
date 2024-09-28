import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useState } from "react";
  import ExpandMoreIcon  from "@mui/icons-material/ExpandMore";
  // import CheckCircleIcon from "@mui/icons-material/CheckCircle";
  import faqs from "../utils/faq";
  

  
  const Faq = () => {
    const [expanded, setExpanded] = useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return (
      <div style={{ width: "50%", margin: "0px auto" ,marginTop:"80px"}}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            style={{
              marginBottom: "10px",
              backgroundColor: "#444",
              color: "#fff",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon  style={{ color: "#fff" }} />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
  
            <hr style={{ border: "1px solid black" }} />
  
            <AccordionDetails
            
            >
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
  };
  
  export default Faq;
  