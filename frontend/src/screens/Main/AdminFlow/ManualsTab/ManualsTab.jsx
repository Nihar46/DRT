import React from "react";
import { Typography, Box } from "@mui/material";
import ManualUploadSection from "../../../../components/ManualUploadSection";

const ManualsTab = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", p: 2 }}>
      <ManualUploadSection title="Room Scene Catalog" />
      <ManualUploadSection title="Account Manager User Manual" />
      <ManualUploadSection title="Designer User Manual" />
      <ManualUploadSection title="Admin User Manual" />
      {/* Add more sections if necessary */}
    </Box>
  );
};

export default ManualsTab;
