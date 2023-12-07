// Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const AdminNavBar = ({ activeTab, onChangeTab }) => {
  const tabStyle = (isSelected) => ({
    fontWeight: isSelected ? "bold" : "normal",
    fontSize: isSelected ? "1.1rem" : "1rem",
    color: isSelected ? "info.light" : "inherit",
  });
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tarkett
        </Typography>
        <Tabs
          value={activeTab}
          onChange={onChangeTab}
          aria-label="nav tabs example"
          textColor="inherit"
          indicatorColor="primary"
        >
          <Tab label="Admin Page" value={0} sx={tabStyle(activeTab === 0)} />
          <Tab
            label="Design Requests"
            value={1}
            sx={tabStyle(activeTab === 1)}
          />
          <Tab
            label="Completed Requests"
            value={2}
            sx={tabStyle(activeTab === 2)}
          />
          <Tab
            label="Download Report"
            value={3}
            sx={tabStyle(activeTab === 3)}
          />
          <Tab
            label="Download Feedback Report"
            value={4}
            sx={tabStyle(activeTab === 4)}
          />
          {/* Add or remove tabs as needed */}
        </Tabs>
        <Button color="inherit" startIcon={<LogoutIcon />}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavBar;
