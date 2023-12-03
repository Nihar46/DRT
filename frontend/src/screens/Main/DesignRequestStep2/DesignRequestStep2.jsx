import React, { useContext } from "react";
import {
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Button,
} from "@mui/material";
import { useStepContext } from "../../../context/StepFormContext"; // Adjust the import path accordingly
import RequestStep2Accordion from "../../../components/RequestStep2Accordion";

const DesignRequestStep2 = () => {
  const { state, dispatch } = useStepContext();
  console.log("STEP 2:", state);

  // Generate dropdowns for room scenes

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ my: 4, p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Design Request
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Project ID: {state.projectInformation.projectID}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Requested Completion Date: {state.projectInformation.completionDate}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Rooms Scenes/Floor Plans:{" "}
          {state.projectInformation.roomScenesFloorPlans}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Notes: {state.projectInformation.notes}
        </Typography>

        <RequestStep2Accordion
          count={state.projectInformation.roomScenesFloorPlans}
        />

        {/* Add any additional fields and buttons here */}
        <Button
          type="submit"
          onSubmit={handleSubmit}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </Paper>
    </Container>
  );
};

export default DesignRequestStep2;
