import React, { useState } from "react";
import RequestStatusBar from "../../../../components/RequestStatusBar";
import AdminNavBar from "../../../../components/AdminNavBar";
import RequestStatusProjectInformation from "../RequestStatusProjectInformation";
import OriginalRequest from "../OriginalRequest";
import { Box } from "@mui/material";
const RequestStatusPage = () => {
  const [activeTab, setActiveTab] = useState(0); // '0' corresponds to the "Admin Page" tab

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <>
      {/*<AdminNavBar activeTab={activeTab} onChangeTab={handleTabChange} />*/}
      <Box className="PageSpacing SideSpacing">
        <RequestStatusBar status={2} />
        <RequestStatusProjectInformation />
        <OriginalRequest />
      </Box>
    </>
  );
};

export default RequestStatusPage;
