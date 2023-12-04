import React from "react";
import { useStepContext } from "../../../context/StepFormContext";
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Accordion,
  Button,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DesignRequestStep3 = () => {
  const { state } = useStepContext();
  const { designDetails, projectInformation } = state;

  return (
    <Box sx={{ padding: 2 }}>
      {/* Project Information */}
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          Project Information
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Project ID"
              secondary={projectInformation.projectID || "N/A"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Project Name"
              secondary={projectInformation.projectName || "N/A"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Completion Date"
              secondary={projectInformation.completionDate || "N/A"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Design Input Type"
              secondary={projectInformation.designInputType || "N/A"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Room Scenes/Floor Plans"
              secondary={projectInformation.roomScenesFloorPlans || "N/A"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Notes"
              secondary={projectInformation.notes || "N/A"}
            />
          </ListItem>
        </List>
      </Paper>

      {/* Design Details */}
      {Object.entries(designDetails).map(([index, design]) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Design {parseInt(index) + 1}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {design.productList.map((product, idx) => (
                <React.Fragment key={idx}>
                  <ListItem>
                    <ListItemText primary="Brand" secondary={product.brand} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Style" secondary={product.style} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Color" secondary={product.color} />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Installation"
                      secondary={product.installation}
                    />
                  </ListItem>
                </React.Fragment>
              ))}
              <ListItem>
                <ListItemText
                  primary="Rendering Notes"
                  secondary={design.notes || "N/A"}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Uploaded Files" />
              </ListItem>
              {design.uploadedFiles.map((file, fileIndex) => (
                <ListItem key={fileIndex}>
                  <ListItemText secondary={file} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
      <Button type="button" variant="contained" color="primary">
        Submit Request
      </Button>
    </Box>
  );
};

export default DesignRequestStep3;
