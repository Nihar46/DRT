import React, { useContext } from "react";
import { Typography, Box, Paper } from "@mui/material";
import { useStepContext } from "../../../context/StepFormContext"; // Adjust the import path accordingly
import RequestStep2Accordion from "../../../components/RequestStep2Accordion";
import { format } from "date-fns";
const DesignRequestStep2 = () => {
  const { state, dispatch } = useStepContext();
  console.log("STEP 2:", state);
  // Generate dropdowns for room scenes
  return (
    <Paper>
      <Box className="RequestBox">
        <Typography variant="h3" component="div" className="InfoHeading">
          Design Request
        </Typography>
        <Box className="RequestInfo">
          <Box className="RequestInfoContent">
            <Typography variant="body2" component="div" className="InfoLabel">
              Project ID
            </Typography>
            <Typography variant="body1" component="div" className="InfoData">
              {state.projectInformation.projectID}
            </Typography>
          </Box>
          <Box className="RequestInfoContent">
            <Typography variant="body2" component="div" className="InfoLabel">
              Requested Completion Date
            </Typography>
            <Typography variant="body1" component="div" className="InfoData">
              {state.projectInformation.completionDate}
              {/*format(state.projectInformation.completionDate, "MM/dd/yyyy")*/}
            </Typography>
          </Box>
          <Box className="RequestInfoContent">
            <Typography variant="body2" component="div" className="InfoLabel">
              Rooms Scenes/Floor Plans
            </Typography>
            <Typography variant="body1" component="div" className="InfoData">
              {state.projectInformation.roomScenesFloorPlans}
            </Typography>
          </Box>
        </Box>
        <Box className="NoteInfo">
          <Typography variant="body2" component="div" className="InfoLabel">
            Notes
          </Typography>
          <Typography variant="body1" component="div" className="InfoData">
            {state.projectInformation.notes}
          </Typography>
        </Box>
      </Box>
      <Box className="RequestAccordionBox">
        <RequestStep2Accordion
          count={state.projectInformation.roomScenesFloorPlans}
        />
      </Box>
      {/* Add any additional fields and buttons here */}
    </Paper>
  );
};

export default DesignRequestStep2;
