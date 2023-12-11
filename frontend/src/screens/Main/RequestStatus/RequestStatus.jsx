import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Box,
  Stepper,
  Step,
  StepButton,
  Accordion,
  Button,
  AccordionSummary,
  AccordionDetails,
  Container,
  Divider,
  TextareaAutosize,
} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Header from "../../../components/Header";
const steps = [
  "Pending",
  "In Progress",
  "Delivered",
  "Revision Requested",
  "Revision In Progress",
  "Revision Delivered",
];

const RequestStatus = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Extract the data from the location state

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  // Check if data is present
  if (!data) {
    return (
      <div>
        <p>No data available.</p>
        {/* Add a Link to navigate back */}
        <Link to="/dashboard">Return to Dashboard</Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Container className="PageSpacing">
        <Grid container direction="row" className="" spacing={4}>
          <Grid item xs={12} md={8} className="RequestStatusLeftCol">
            <Box className="RequestBox">
              <Typography variant="h3" component="div" className="InfoHeading">
                Request Status
              </Typography>
              <Box className="RequestInfo">
                <Box className="RequestInfoContent">
                  <Typography
                    variant="body2"
                    component="div"
                    className="InfoLabel"
                  >
                    Project Name
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    className="InfoData"
                  >
                    {data.projectName}
                  </Typography>
                </Box>
                <Box className="RequestInfoContent">
                  <Typography
                    variant="body2"
                    component="div"
                    className="InfoLabel"
                  >
                    Account Manager
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    className="InfoData"
                  >
                    {data.accountManager}
                  </Typography>
                </Box>
                <Box className="RequestInfoContent">
                  <Typography
                    variant="body2"
                    component="div"
                    className="InfoLabel"
                  >
                    # of Requests
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    className="InfoData"
                  >
                    {data.requests}
                  </Typography>
                </Box>
                <Box className="RequestInfoContent">
                  <Typography
                    variant="body2"
                    component="div"
                    className="InfoLabel"
                  >
                    Project ID / Request #
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    className="InfoData"
                  >
                    {data.projectId}
                  </Typography>
                </Box>
                <Box className="RequestInfoContent">
                  <Typography
                    variant="body2"
                    component="div"
                    className="InfoLabel"
                  >
                    Status
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    className="InfoData"
                  >
                    {data.status}
                  </Typography>
                </Box>
                <Box className="RequestInfoContent">
                  <Typography
                    variant="body2"
                    component="div"
                    className="InfoLabel"
                  >
                    Due Date
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    className="InfoData"
                  >
                    {data.dueDate}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="RequestBox ">
              <Typography variant="h3" component="div" className="">
                Estimated Delivery
              </Typography>
              <Typography
                variant="body2"
                component="div"
                className="InfoSubHeading"
              >
                Sep 31 - Oct 3
              </Typography>
              <Box className="StatusSteps">
                <Stepper nonLinear activeStep={activeStep}>
                  {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                      <StepButton color="inherit" onClick={handleStep(index)}>
                        {label}
                      </StepButton>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Box>
            <Box className="RequestBox">
              <Typography variant="h3" component="div" className="InfoHeading">
                Contact Information
              </Typography>
            </Box>
            <Box className="AccordBox">
              Nihar Call your Accordion section Here
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="RequestStatusRightCol">
            <Box className="GreySection SideSection">
              <Typography variant="h3" component="div" className="InfoHeading">
                History
              </Typography>
              <Divider />
              <Box mt={2}>
                <Box display="flex" alignItems="center">
                  <Box sx={{ width: '45%' }}>
                    <Typography
                      variant="body2"
                      component="div"
                      className="InfoLabel"
                    >
                      11/27/2023 11:12am
                    </Typography>
                  </Box>
                  <Box px={2} display="flex" justifyContent="center" sx={{ width: '10%' }}>
                    <AccessTimeIcon className="HistoryIcon" />
                  </Box>
                  <Box sx={{ width: '45%' }}>
                    <Typography
                      variant="body1"
                      component="div"
                      className="InfoData"
                    >
                      Request Submitted by Stella Garcia
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Divider style={{height: '35px'}} orientation="vertical" variant="middle" flexItem />
                </Box>
                <Box display="flex" alignItems="center">
                  <Box sx={{ width: '45%' }}>
                    <Typography
                      variant="body2"
                      component="div"
                      className="InfoLabel"
                    >
                      11/29/2023 2:38pm
                    </Typography>
                  </Box>
                  <Box px={2} display="flex" justifyContent="center" sx={{ width: '10%' }}>
                    <AccessTimeIcon className="HistoryIcon" />
                  </Box>
                  <Box sx={{ width: '45%' }}>
                    <Typography
                      variant="body1"
                      component="div"
                      className="InfoData"
                    >
                      Request Reviewed by Brian Kent
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="GreySection SideSection">
              <Typography variant="h3" component="div" className="InfoHeading">
                Comments
              </Typography>
              <Divider />
              <Box style={{height: '300px'}}></Box>
            </Box>
            <Box className="GreySection SideSection">
              <TextareaAutosize
                minRows={3}
                placeholder="Comments"
              />
              <Box mt={2} display="flex" justifyContent="flex-end">
                <Button variant="contained">COMMENT</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <div>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/account-manager-dashboard"
          >
            Return to Dashboard
          </Button>
        </div>
      </Container>
    </>
  );
};

export default RequestStatus;
