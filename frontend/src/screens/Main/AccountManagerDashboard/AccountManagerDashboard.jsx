import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MaterialReactTable } from "material-react-table";
import Header from "../../../components/Header";
import AddIcon from "@mui/icons-material/Add";
import {
  Grid,
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
  Tab,
  Tabs,
} from "@mui/material";
// Dummy data for the tables
const designRequestsData = [
  {
    projectName: "Alpha",
    accountManager: "John Doe",
    requests: 5,
    projectId: "A001",
    status: "In Progress",
    dueDate: "2023-08-01",
  },
  {
    projectName: "Alpha",
    accountManager: "John Doe",
    requests: 5,
    projectId: "A001",
    status: "In Progress",
    dueDate: "2023-08-01",
  },
  {
    projectName: "Alpha",
    accountManager: "John Doe",
    requests: 5,
    projectId: "A001",
    status: "In Progress",
    dueDate: "2023-08-01",
  },
  {
    projectName: "Alpha",
    accountManager: "John Doe",
    requests: 5,
    projectId: "A001",
    status: "In Progress",
    dueDate: "2023-08-01",
  },
  {
    projectName: "Alpha",
    accountManager: "John Doe",
    requests: 5,
    projectId: "A001",
    status: "In Progress",
    dueDate: "2023-08-01",
  },
  {
    projectName: "Alpha",
    accountManager: "John Doe",
    requests: 5,
    projectId: "A001",
    status: "In Progress",
    dueDate: "2023-08-01",
  },
  {
    projectName: "Alpha",
    accountManager: "John Doe",
    requests: 5,
    projectId: "A001",
    status: "In Progress",
    dueDate: "2023-08-01",
  },
  {
    projectName: "Alpha",
    accountManager: "John Doe",
    requests: 5,
    projectId: "A001",
    status: "In Progress",
    dueDate: "2023-08-01",
  },
  {
    projectName: "Alpha",
    accountManager: "John Doe",
    requests: 5,
    projectId: "A001",
    status: "In Progress",
    dueDate: "2023-08-01",
  },
  {
    projectName: "Alpha",
    accountManager: "John Doe",
    requests: 5,
    projectId: "A001",
    status: "In Progress",
    dueDate: "2023-08-01",
  },
  // ... other dummy data
];

const completedRequestsData = [
  {
    projectName: "Beta",
    accountManager: "Jane Smith",
    requests: 3,
    projectId: "B002",
    status: "Completed",
    dueDate: "2023-07-20",
  },
  {
    projectName: "Beta",
    accountManager: "Jane Smith",
    requests: 3,
    projectId: "B002",
    status: "Completed",
    dueDate: "2023-07-20",
  },
  {
    projectName: "Beta",
    accountManager: "Jane Smith",
    requests: 3,
    projectId: "B002",
    status: "Completed",
    dueDate: "2023-07-20",
  },
  {
    projectName: "Beta",
    accountManager: "Jane Smith",
    requests: 3,
    projectId: "B002",
    status: "Completed",
    dueDate: "2023-07-20",
  },
  {
    projectName: "Beta",
    accountManager: "Jane Smith",
    requests: 3,
    projectId: "B002",
    status: "Completed",
    dueDate: "2023-07-20",
  },
  {
    projectName: "Beta",
    accountManager: "Jane Smith",
    requests: 3,
    projectId: "B002",
    status: "Completed",
    dueDate: "2023-07-20",
  },
  {
    projectName: "Beta",
    accountManager: "Jane Smith",
    requests: 3,
    projectId: "B002",
    status: "Completed",
    dueDate: "2023-07-20",
  },
  {
    projectName: "Beta",
    accountManager: "Jane Smith",
    requests: 3,
    projectId: "B002",
    status: "Completed",
    dueDate: "2023-07-20",
  },
  {
    projectName: "Beta",
    accountManager: "Jane Smith",
    requests: 3,
    projectId: "B002",
    status: "Completed",
    dueDate: "2023-07-20",
  },
  {
    projectName: "Beta",
    accountManager: "Jane Smith",
    requests: 3,
    projectId: "B002",
    status: "Completed",
    dueDate: "2023-07-20",
  },
  {
    projectName: "Beta",
    accountManager: "Jane Smith",
    requests: 3,
    projectId: "B002",
    status: "Completed",
    dueDate: "2023-07-20",
  },

  // ... other dummy data
];

const AccountManagerDashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();

  const CustomCell = ({ cell }) => (
    <div onClick={() => handleCellClick(cell.row.original)}>
      {cell.getValue()}
    </div>
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "projectName", // accessorKey is the key in the data
        header: "Project Name",
        Cell: CustomCell,
      },
      {
        accessorKey: "accountManager",
        header: "Account Manager",
        Cell: CustomCell,
      },
      {
        accessorKey: "requests",
        header: "# of Requests",
        Cell: CustomCell,
      },
      {
        accessorKey: "projectId",
        header: "Project ID / Request #",
        Cell: CustomCell,
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: CustomCell,
      },
      {
        accessorKey: "dueDate",
        header: "Due Date",
        Cell: CustomCell,
      },
    ],
    []
  );

  const handleCellClick = (rowData) => {
    console.log("Row clicked:", rowData);
    navigate("/request-status", { state: { data: rowData } });
  };

  return (
    <>
      <Header />
      <Grid container direction="row" className="PageSpacing SideSpacing">
        <Grid item xs={12} md={12} className="">
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: "20px" }}
            onClick={() => navigate("/design-request-details")}
            startIcon={<AddIcon />}
            // Add your logic here to handle the creation of a new request
          >
            Add new request
          </Button>
        </Grid>
        <Grid item xs={12} md={12} className="">
          <Tabs
            className="CustomTabsBox"
            value={tabIndex}
            onChange={(event, newValue) => setTabIndex(newValue)}
            aria-label="Design and Completed Requests Tabs"
          >
            <Tab label="Design Requests" />
            <Tab label="Completed Requests" />
          </Tabs>
          <Box className="MaterialTableBox">
            <MaterialReactTable
              columns={columns}
              data={tabIndex === 0 ? designRequestsData : completedRequestsData}
              // Add any additional props you need for the table here
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default AccountManagerDashboard;
