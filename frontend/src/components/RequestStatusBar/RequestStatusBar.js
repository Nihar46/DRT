import React, { useState } from "react";
import { Stepper, Step, StepLabel, Box } from "@mui/material";

const steps = [
  "Pending",
  "Approved",
  "In Progress",
  "Internal Review",
  "External Review",
  "Revision Review",
  "Estimation Review",
  "Estimate",
  "Complete",
  "On Hold",
];

const RequestStatusBar = ({ status }) => {
  const [activeStep, setActiveStep] = useState(0); // Assuming 'Pending' as the first step

  // Handle the logic here to determine which step should be active
  // based on your application's state

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={status} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={status > index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default RequestStatusBar;
