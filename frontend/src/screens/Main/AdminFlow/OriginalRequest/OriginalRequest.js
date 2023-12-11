import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Link,
  Stack,
  Checkbox,
  FormControlLabel,
  ListItemText,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";

const OriginalRequest = () => {
  const [designLink, setDesignLink] = useState("");
  const [completedFileLink, setCompletedFileLink] = useState("");
  const [expectedCompletionDate, setExpectedCompletionDate] = useState(
    new Date()
  );
  const [clientRequestedDeadline, setClientRequestedDeadline] = useState(
    new Date()
  );
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  // Other state variables and event handlers would be defined here

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Design File Link"
            fullWidth
            value={designLink}
            onChange={(e) => setDesignLink(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" sx={{ mr: 1 }}>
            Open Link
          </Button>
          <Button variant="outlined">Save Link</Button>

          <TextField
            label="Completed File Link"
            fullWidth
            value={completedFileLink}
            onChange={(e) => setCompletedFileLink(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" sx={{ mr: 1 }}>
            Open Link
          </Button>
          <Button variant="outlined">Save Link</Button>

          {/* Date Pickers */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Expected Completion Date"
              inputFormat="MM/dd/yyyy"
              value={expectedCompletionDate}
              onChange={setExpectedCompletionDate}
              renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
              label="Client's Requested Deadline"
              inputFormat="MM/dd/yyyy"
              value={clientRequestedDeadline}
              onChange={setClientRequestedDeadline}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          {/* Product Selection */}
          <FormControl fullWidth>
            <InputLabel id="select-brand-label">Select Brand</InputLabel>
            <Select
              labelId="select-brand-label"
              id="select-brand"
              label="Select Brand"
              // value={selectedBrand}
              // onChange={handleBrandChange}
            >
              {/* Map through your brands here */}
            </Select>
          </FormControl>

          <Button variant="contained" component="label" sx={{ mt: 2 }}>
            Upload File
            <input type="file" hidden onChange={handleFileChange} />
          </Button>

          {file && (
            <Stack direction="row" alignItems="center" spacing={1} mt={1}>
              <Typography variant="body2">{file.name}</Typography>
              {/* Implement the delete functionality */}
              <Button color="error">Delete</Button>
            </Stack>
          )}

          {/* More components to be added here */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OriginalRequest;
