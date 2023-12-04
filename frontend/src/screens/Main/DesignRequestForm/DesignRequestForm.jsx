// MultiStepForm.js
import React from "react";
import { TextField, Box, Grid, Typography, Button, Container } from "@mui/material";
import DesignRequestStep1 from "../DesignRequestStep1/DesignRequestStep1";
import DesignRequestStep2 from "../DesignRequestStep2/DesignRequestStep2";
import DesignRequestStep3 from "../DesignRequestStep3/DesignRequestStep3";
import RequestProgressBar from "../../../components/RequestProgressBar";
import { useStepContext } from "../../../context/StepFormContext";
import Header from "../../../components/Header";

const DesignRequestForm = () => {
  const { state } = useStepContext();
  console.log("State data:", state);
  return (
    <>
    <Header />
    <Container className="PageSpacing">
      <Grid container direction="row" className="">
        <Grid item xs={12} md={12} className="">
          <Typography variant="h2" component="div">Design Request</Typography>
        </Grid>
        <Grid item xs={12} md={12} className="DesignRequestContent">
          <RequestProgressBar activeStep={state.step} />
          {state.step === 1 && <DesignRequestStep1 />}
       
          {state.step === 2 && <DesignRequestStep2 />}
     
          {state.step === 3 && <DesignRequestStep3 />}
          </Grid>
          
        </Grid>
      </Container>
      </>
  );
};

export default DesignRequestForm;
