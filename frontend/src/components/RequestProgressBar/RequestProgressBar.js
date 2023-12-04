import React from "react";
import { TextField, Box, Grid, Typography, Paper, Avatar, Divider } from "@mui/material";
import { styled } from "@mui/system";

const ProgressBar = styled(Paper)(({ theme }) => ({
  // display: "flex",
  // justifyContent: "space-between",
  // width: "60%",
  // margin: "0 auto",
  // padding: theme.spacing(2),
  // marginBottom: theme.spacing(2),
}));

const Step = styled("div")(({ theme, isActive }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
}));

const ActiveStep = styled(Step)(({ theme }) => ({
  color: theme.palette.primary.main,
  "& .MuiAvatar-root": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.30)",
  marginRight: theme.spacing(1),
}));

const RequestProgressBar = ({ activeStep }) => {
  const steps = [
    { text: "Project Information", number: 1 },
    { text: "Design Details", number: 2 },
    { text: "Confirm and Submit", number: 3 },
  ];

  return (
    <ProgressBar elevation={3} className="StepContainer">
      {steps.map((step) => (
        < Box key={step.number} className="StepBox">
          {activeStep === step.number ? (
            <ActiveStep isActive={activeStep === step.number} className="ActiveStep">
              <AvatarStyled>{step.number}</AvatarStyled>
              <Typography variant="h6">{step.text}</Typography>
            </ActiveStep>
          ) : (
            <Step isActive={activeStep === step.number} className="InActiveStep">
              <AvatarStyled>{step.number}</AvatarStyled>
              <Typography variant="h6">{step.text}</Typography>
            </Step>
          )}
          
        </Box>
        
      ))}
      <Divider className="StepDivider FirstDivider" />
      <Divider className="StepDivider SecondDivider"/>
    </ProgressBar>
  );
};

export default RequestProgressBar;
