import React from "react";
import { useStepContext } from "../../../context/StepFormContext";
import useAccountManager from "../../../hooks/useAccountManager";
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
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

const DesignRequestStep3 = () => {
  const { state } = useStepContext();
  const { designDetails, projectInformation } = state;
  const { submitRequest } = useAccountManager();

  console.log("Design Details:", designDetails);
  console.log("Project Information:", projectInformation);

  const handleClick = () => {
    if (state.projectInformation && state.designDetails) {
      submitRequest(state.projectInformation, state.designDetails);
    }
  };

  return (
    <Paper>
      <Box className="RequestBox">
        <Typography variant="h3" component="div" className="InfoHeading">
          Project Information
        </Typography>
        <Box className="RequestInfo">
          <Box className="RequestInfoContent">
            <Typography variant="body2" component="div" className="InfoLabel">
              Project ID
            </Typography>
            <Typography variant="body1" component="div" className="InfoData">
              {projectInformation.projectID || "N/A"}
            </Typography>
          </Box>
          <Box className="RequestInfoContent">
            <Typography variant="body2" component="div" className="InfoLabel">
              Project Name
            </Typography>
            <Typography variant="body1" component="div" className="InfoData">
              {projectInformation.projectName || "N/A"}
            </Typography>
          </Box>
          <Box className="RequestInfoContent">
            <Typography variant="body2" component="div" className="InfoLabel">
              Completion Date
            </Typography>
            <Typography variant="body1" component="div" className="InfoData">
              {projectInformation.completionDate || "N/A"}
            </Typography>
          </Box>
          <Box className="RequestInfoContent">
            <Typography variant="body2" component="div" className="InfoLabel">
              Design Input Type
            </Typography>
            <Typography variant="body1" component="div" className="InfoData">
              {projectInformation.designInputType || "N/A"}
            </Typography>
          </Box>
          <Box className="RequestInfoContent">
            <Typography variant="body2" component="div" className="InfoLabel">
              Rooms Scenes/Floor Plans
            </Typography>
            <Typography variant="body1" component="div" className="InfoData">
              {projectInformation.roomScenesFloorPlans || "N/A"}
            </Typography>
          </Box>
          <Box className="RequestInfoContent">
            <Typography variant="body2" component="div" className="InfoLabel">
              2D count
            </Typography>
            <Typography variant="body1" component="div" className="InfoData">
              {projectInformation.count2D || "N/A"}
            </Typography>
          </Box>
          <Box className="RequestInfoContent">
            <Typography variant="body2" component="div" className="InfoLabel">
              3D count
            </Typography>
            <Typography variant="body1" component="div" className="InfoData">
              {projectInformation.count3D || "N/A"}
            </Typography>
          </Box>
          <Box className="RequestInfoContent">
            <Typography variant="body2" component="div" className="InfoLabel">
              Generic Pattern
            </Typography>
            <Typography variant="body1" component="div" className="InfoData">
              {projectInformation.isGenericPattern ? "Yes" : "No"}
            </Typography>
          </Box>
        </Box>
        <Box className="NoteInfo">
          <Typography variant="body2" component="div" className="InfoLabel">
            Notes
          </Typography>
          <Typography variant="body1" component="div" className="InfoData">
            {projectInformation.notes || "N/A"}
          </Typography>
        </Box>
      </Box>
      <Box></Box>
      <Box className="RequestAccordionBox">
        {/* Design Details */}
        {Object.entries(designDetails).map(([index, design]) => (
          <Accordion key={index} className="AccordionBox">
            <AccordionSummary
              className="AccordionTitleBox"
              expandIcon={<ArrowDropDownOutlinedIcon className="ArrowAccord" />}
            >
              <Typography variant="h5" className="AccordionTitleInfo">
                Design {parseInt(index) + 1}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="AccordionContentBox">
              <Box>
                {design.productList.map((product, idx) => (
                  <React.Fragment key={idx}>
                    <Box className="RequestBox RequestBoxSecond">
                      <InsertPhotoOutlinedIcon
                        color="primary"
                        className="FilesIcon"
                      />
                      <Box>
                        <Typography
                          variant="body2"
                          component="div"
                          className="InfoLabel"
                        >
                          Uploaded Files
                        </Typography>
                        <Box>
                          {design.uploadedFiles.map((file, fileIndex) => (
                            <Box key={fileIndex}>
                              <Typography variant="body1" component="div">
                                {file}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    <Box className="RequestViewSection">
                      <Box className="RequestViewContent">
                        <Typography
                          variant="body2"
                          component="div"
                          className="InfoLabel"
                        >
                          Brand
                        </Typography>
                        <Typography
                          variant="body1"
                          component="div"
                          className="InfoData"
                        >
                          {product.brand}
                        </Typography>
                      </Box>
                      <Box className="RequestViewContent">
                        <Typography
                          variant="body2"
                          component="div"
                          className="InfoLabel"
                        >
                          Style
                        </Typography>
                        <Typography
                          variant="body1"
                          component="div"
                          className="InfoData"
                        >
                          {product.style}
                        </Typography>
                      </Box>
                      <Box className="RequestViewContent">
                        <Typography
                          variant="body2"
                          component="div"
                          className="InfoLabel"
                        >
                          Color
                        </Typography>
                        <Typography
                          variant="body1"
                          component="div"
                          className="InfoData"
                        >
                          {product.color}
                        </Typography>
                      </Box>
                      <Box className="RequestViewContent">
                        <Typography
                          variant="body2"
                          component="div"
                          className="InfoLabel"
                        >
                          Installation
                        </Typography>
                        <Typography
                          variant="body1"
                          component="div"
                          className="InfoData"
                        >
                          {product.installation}
                        </Typography>
                      </Box>
                    </Box>
                  </React.Fragment>
                ))}
                <Box className="RequestViewContent">
                  <Typography
                    variant="body2"
                    component="div"
                    className="InfoLabel"
                  >
                    Rendering Notes
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    className="InfoData"
                  >
                    {design.notes || "N/A"}
                  </Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box className="BottomActionButtton">
        <Button type="button" variant="contained" color="primary">
          Back
        </Button>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Submit Request
        </Button>
      </Box>
    </Paper>
  );
};

export default DesignRequestStep3;
