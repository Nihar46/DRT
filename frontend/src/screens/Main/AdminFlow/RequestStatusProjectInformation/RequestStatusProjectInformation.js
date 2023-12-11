import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  Autocomplete,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Save, Delete, Print } from "@mui/icons-material";

const projectData = {
  projectName: "Adani Ports",
  projectID: "0064wD00001N3j8AAK",
  requestNumber: "REQ8721",
  brandName: "Tarkett",
  division: "60",
  region: "393",
  territory: "371B",
  accountManagerName: "Ketan Damle",
  accountManagerEmail: "ketan.damle@azularc.com",
  accountManagerPhone: "61",
};

const ProjectInformation = () => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Project Information
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(projectData).map(([key, value]) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <TextField
                label={key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())} // Converts camelCase to normal text
                value={value}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

const OriginalRequest = () => {
  // Component logic...
};

const HistoryCard = () => {
  // Mock history data
  const historyItems = [
    { id: 1, text: "Ashish Malvadkar assigned as Admin by Jyoti Admin" },
    { id: 2, text: "Parvaiz Patel assigned as Designer by Jyoti Admin" },
    // ... more items
  ];

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">History</Typography>
        <List dense>
          {historyItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

const designers = ["Designer 1", "Designer 2", "Designer 3", "Designer 4"];
const admins = ["Admin 1", "Admin 2", "Admin 3", "Admin 4"];

// History items
const historyItems = [
  { id: 1, text: "Ashish Malvadkar assigned as Admin by Jyoti Admin" },
  { id: 2, text: "Parvaiz Patel assigned as Designer by Jyoti Admin" },
];

const RightSideComponents = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        {/* ProjectInformation component should go here */}
      </Grid>
      <Grid item xs={12} md={6}>
        <Card variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Autocomplete
              options={designers}
              renderInput={(params) => (
                <TextField {...params} label="Designer" />
              )}
              fullWidth
            />
            <Autocomplete
              options={admins}
              renderInput={(params) => <TextField {...params} label="Admin" />}
              fullWidth
              sx={{ my: 2 }}
            />
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">History</Typography>
                <List dense>
                  {historyItems.map((item) => (
                    <ListItem key={item.id}>
                      <Typography>{item.text}</Typography>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const RequestStatusProjectInformation = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        {/* Action Buttons */}
        <Button startIcon={<Save />} variant="contained">
          Save
        </Button>
        <Button startIcon={<Delete />} color="error" variant="contained">
          Delete
        </Button>
        <Button variant="contained">Set to external review</Button>
        <Button variant="contained">complete request</Button>
        <Button variant="contained">Put on hold</Button>
        <Button variant="contained">Mark as Pending</Button>
        <Button variant="contained">Print</Button>
        {/* More Buttons... */}
      </Box>
      <Divider />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ProjectInformation />
          </Grid>
          <Grid item xs={12} md={6}>
            <RightSideComponents />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RequestStatusProjectInformation;