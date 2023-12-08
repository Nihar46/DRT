import UsersTab from "../UsersTab";
import AdminPage from "../AdminPage";
import React, { useState } from "react";
import AdminNavBar from "../../../../components/AdminNavBar";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TextField,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./AdminLandingScreen.css";

const Counter = ({ label, value, onIncrement, onDecrement }) => {
  return (
    <Box pl={3} sx={{ display: "flex" }}>
      <Box mt={.5}>
        <Typography variant="body1">
          {label}
        </Typography>
      </Box>
      <Box display="flex" ml={2} flexDirection="column">
        <Box display="flex" alignItems="center">
          <Button onClick={onDecrement} variant="outlined" color="primary">
            <RemoveIcon />
          </Button>
          <Box sx={{ mx: 2, textAlign: "center" }}>
            <Typography variant="body1">
              {value}
            </Typography>
          </Box>
          <Button onClick={onIncrement} variant="outlined" color="primary">
            <AddIcon />
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" mt={1}>
          <Typography variant="body1">
            Business Days
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const MainComponent = () => {
  const [activeTab, setActiveTab] = useState(0); // '0' corresponds to the "Admin Page" tab
  const [leadTime, setLeadTime] = useState(3); // Default value for lead time counter
  const [closeProjects, setCloseProjects] = useState(90); // Default value for close projects counter
  const incrementLeadTime = () => setLeadTime((prev) => prev + 1);
  const decrementLeadTime = () =>
    setLeadTime((prev) => (prev > 0 ? prev - 1 : 0));

  const incrementCloseProjects = () => setCloseProjects((prev) => prev + 1);
  const decrementCloseProjects = () =>
    setCloseProjects((prev) => (prev > 0 ? prev - 1 : 0));

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <AdminNavBar activeTab={activeTab} onChangeTab={handleTabChange} />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="flex-end"
        m={2}
      >
        <Counter
          className="CounterText"
          label="Lead Time for New Requests"
          value={leadTime}
          onIncrement={incrementLeadTime}
          onDecrement={decrementLeadTime}
        />
        <Counter
          label="Automatically Close Projects"
          value={closeProjects}
          onIncrement={incrementCloseProjects}
          onDecrement={decrementCloseProjects}
        />
      </Stack>
      {activeTab === 0 && <AdminPage />}
      {/* Render other components based on the selected tab */}
    </>
  );
};
export default MainComponent;
