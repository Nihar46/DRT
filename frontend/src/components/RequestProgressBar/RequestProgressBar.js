import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";

const ProgressBar = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "60%",
  margin: "0 auto",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
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
  backgroundColor: theme.palette.grey[300],
  marginRight: theme.spacing(1),
}));

const RequestProgressBar = ({ activeStep }) => {
  const steps = [
    { text: "Project Information", number: 1 },
    { text: "Design Details", number: 2 },
    { text: "Confirm and Submit", number: 3 },
  ];

  return (
    <ProgressBar elevation={3}>
      {steps.map((step) => (
        <div key={step.number}>
          {activeStep === step.number ? (
            <ActiveStep isActive={activeStep === step.number}>
              <AvatarStyled>{step.number}</AvatarStyled>
              <Typography variant="h6">{step.text}</Typography>
            </ActiveStep>
          ) : (
            <Step isActive={activeStep === step.number}>
              <AvatarStyled>{step.number}</AvatarStyled>
              <Typography variant="h6">{step.text}</Typography>
            </Step>
          )}
        </div>
      ))}
    </ProgressBar>
  );
};

export default RequestProgressBar;
