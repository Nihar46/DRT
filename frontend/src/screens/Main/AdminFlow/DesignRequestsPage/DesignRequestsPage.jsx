import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";

const dummyProjects = [
  {
    id: 1,
    name: "Adani Ports",
    accountManager: "Ketan Damle",
    country: "India",
    admin: "Rahul Bose",
    dateCreated: "12/15/2021 3:03 am",
    dateApproved: "12/21/2021",
    dueDate: "12/30/2021",
    dateSentToClient: "",
    revisionDate: "",
  },
  {
    id: 2,
    name: "Metro Rail Expansion",
    accountManager: "Anjali Kumar",
    country: "India",
    admin: "",
    dateCreated: "01/10/2022 10:15 am",
    dateApproved: "",
    dueDate: "02/20/2022",
    dateSentToClient: "",
    revisionDate: "",
  },
  {
    id: 3,
    name: "Solar Power Project",
    accountManager: "Mohammed Ali",
    country: "UAE",
    admin: "Sara Alvi",
    dateCreated: "11/05/2021 9:00 am",
    dateApproved: "11/15/2021",
    dueDate: "12/15/2021",
    dateSentToClient: "11/20/2021",
    revisionDate: "",
  },
  {
    id: 4,
    name: "Highway Construction",
    accountManager: "Alex Johnson",
    country: "USA",
    admin: "",
    dateCreated: "12/25/2021 4:30 pm",
    dateApproved: "",
    dueDate: "03/30/2022",
    dateSentToClient: "",
    revisionDate: "",
  },
  {
    id: 5,
    name: "Urban Development Plan",
    accountManager: "Samantha Paul",
    country: "UK",
    admin: "John Doe",
    dateCreated: "02/28/2022 11:20 am",
    dateApproved: "03/10/2022",
    dueDate: "04/22/2022",
    dateSentToClient: "03/15/2022",
    revisionDate: "03/18/2022",
  },
  // Add more dummy project data here
];

const DesignRequestsPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredProjects = (filter) => {
    return dummyProjects.filter((project) => {
      if (filter === "assigned") return project.admin !== "";
      if (filter === "unassigned") return project.admin === "";
      return true; // for 'all' projects
    });
  };

  const renderTable = (projects) => (
    <TableContainer component={Paper}>
      <Table aria-label="design requests table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Account Manager</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Currently/Last Assigned To</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Date Approved</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Date Sent To Client</TableCell>
            <TableCell>Revision Date</TableCell>
            <TableCell>Complete Project</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.accountManager}</TableCell>
              <TableCell>{project.country}</TableCell>
              <TableCell>{project.admin}</TableCell>
              <TableCell>{project.admin}</TableCell>
              <TableCell>{project.admin}</TableCell>
              <TableCell>{project.admin}</TableCell>
              <TableCell>{project.admin}</TableCell>
              <TableCell>{project.admin}</TableCell>
              <TableCell>{project.admin}</TableCell>
              {/* Render other project details */}
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "Complete Project" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="design request tabs"
        >
          <Tab label="Unassigned Projects" />
          <Tab label="Assigned Projects" />
          <Tab label="All Projects" />
        </Tabs>
      </Box>
      {activeTab === 0 && renderTable(filteredProjects("unassigned"))}
      {activeTab === 1 && renderTable(filteredProjects("assigned"))}
      {activeTab === 2 && renderTable(filteredProjects("all"))}
    </Box>
  );
};

export default DesignRequestsPage;
