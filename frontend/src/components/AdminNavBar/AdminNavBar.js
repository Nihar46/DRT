// Navbar.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  Box,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import "./AdminNavBar.css";
import useAuth from "../../hooks/useAuth";

const AdminNavBar = ({ activeTab, onChangeTab }) => {
  const { logout } = useAuth();
  const tabStyle = (isSelected) => ({
    fontWeight: isSelected ? "normal" : "normal",
    fontSize: isSelected ? "16px" : "16px",
    color: isSelected ? "#F1A12F" : "#fff",
    opacity: isSelected ? "1" : "1",
  });

  const handleLogout = () => {
    logout();
  };
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <Typography variant="h6" component="div" >
          Tarkett
        </Typography> */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
        >
          <Box className="logo">
            <Link to="/">
              <img
                src={require("../../assets/images/Tarkett-logo.png")}
                alt="Tarkett"
                className="LogoImg"
              />
            </Link>
          </Box>
          <Box display="flex" className="nav">
            <Tabs
              value={activeTab}
              onChange={onChangeTab}
              aria-label="nav tabs example"
              textColor="inherit"
              indicatorColor="primary"
            >
              <Tab
                label="Admin Page"
                value={0}
                sx={tabStyle(activeTab === 0)}
              />
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
            <Box ml={2} display="flex">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavBar;
