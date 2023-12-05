import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@mui/material";

const RequestStatus = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Extract the data from the location state

  // Check if data is present
  if (!data) {
    return (
      <div>
        <p>No data available.</p>
        {/* Add a Link to navigate back */}
        <Link to="/dashboard">Return to Dashboard</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Request Status</h2>
      {/* Render the details of your data here */}
      <p>Project Name: {data.projectName}</p>
      <p>Account Manager: {data.accountManager}</p>
      <p># of Requests: {data.requests}</p>
      <p>Project ID / Request #: {data.projectId}</p>
      <p>Status: {data.status}</p>
      <p>Due Date: {data.dueDate}</p>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/account-manager-dashboard"
      >
        Return to Dashboard
      </Button>
    </div>
  );
};

export default RequestStatus;
