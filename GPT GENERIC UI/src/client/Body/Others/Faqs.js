import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGlobalProvider } from "../../../GlobalProvider";
import useFetchMultipleDbData from "../../Utilities/useFetchMultipleDbData";


function Faqs() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";
  // const [expanded, setExpanded] = React.useState("panel1");
  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  const faqData = useFetchMultipleDbData("faqs");
  // console.log("faqData", faqData);

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>
        {glbVals.telugu
          ? "తరచుగా అడుగు ప్రశ్నలు"
          : "Frequently Asked Questions"}
      </h3>
      <div className="Accordion">
        {Object.entries(faqData).map((faq) => {
          return (
            <Accordion key={faq[0]}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontSize: "16px" }}>
                  <strong> {faq[1][lang]?.faqQstn}</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ fontSize: "16px" }}>
                  {faq[1][lang]?.faqAns}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default Faqs;
