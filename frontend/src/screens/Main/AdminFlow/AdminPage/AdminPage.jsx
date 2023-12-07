import React, { useState } from "react";
import UsersTab from "../UsersTab";
import CountryTab from "../CountryTab";
import ManualsTab from "../ManualsTab";
import { Box, Tab, Tabs } from "@mui/material";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const getTabContent = () => {
    switch (activeTab) {
      case 0:
        return <UsersTab />;
      case 1:
        return <CountryTab />;
      case 2:
        return <ManualsTab />;
      default:
        return null;
    }
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="Users" />
          <Tab label="Countries" />
          <Tab label="Manuals" />
        </Tabs>
      </Box>
      {getTabContent()}
    </>
  );
};

export default AdminPage;
