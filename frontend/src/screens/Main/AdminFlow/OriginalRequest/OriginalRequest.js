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
  Card,
  CardContent,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import ManualUploadSection from "../../../../components/ManualUploadSection";

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
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Design File Link"
                      fullWidth
                      value={designLink}
                      onChange={(e) => setDesignLink(e.target.value)}
                    />
                    <Box sx={{ mt: 2 }}>
                      <Button variant="contained" sx={{ mr: 2 }}>
                        Open Link
                      </Button>
                      <Button variant="outlined">Save Link</Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Completed File Link"
                      fullWidth
                      value={completedFileLink}
                      onChange={(e) => setCompletedFileLink(e.target.value)}
                      margin="normal"
                    />
                    <Box sx={{ mt: 1 }}>
                      <Button variant="contained" sx={{ mr: 2 }}>
                        Open Link
                      </Button>
                      <Button variant="outlined">Save Link</Button>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid container spacing={3}>
                      {/* Date Pickers */}
                      <Grid item xs={12}>
                        <DesktopDatePicker
                          label="Expected Completion Date"
                          inputFormat="MM/dd/yyyy"
                          value={expectedCompletionDate}
                          onChange={setExpectedCompletionDate}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <DesktopDatePicker
                          label="Client's Requested Deadline"
                          inputFormat="MM/dd/yyyy"
                          value={clientRequestedDeadline}
                          onChange={setClientRequestedDeadline}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Grid>
                    </Grid>
                  </LocalizationProvider>
                  {/* <Box mt={2}>
                    <Button
                      variant="contained"
                      component="label"
                      sx={{ mt: 2 }}
                    >
                      Upload File
                      <input type="file" hidden onChange={handleFileChange} />
                    </Button>
                  </Box> */}
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Box mt={3} mb={1}>
                        <Typography variant="h4" gutterBottom>
                          Products
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} justifyContent="flex-end">
                    <Grid item xs={12} md={3}>
                      <FormControl fullWidth>
                        <InputLabel id="select-brand-label">
                          Select Brand
                        </InputLabel>
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <FormControl fullWidth>
                        <InputLabel id="select-style-label">
                          Select Style
                        </InputLabel>
                        <Select
                          labelId="select-style-label"
                          id="select-style"
                          label="Select Style"
                        ></Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <FormControl fullWidth>
                        <InputLabel id="select-color-label">
                          Select Color
                        </InputLabel>
                        <Select
                          labelId="select-color-label"
                          id="select-color"
                          label="Select Color"
                        ></Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <FormControl fullWidth>
                        <InputLabel id="select-installation-label">
                          Select Installation
                        </InputLabel>
                        <Select
                          labelId="select-installation-label"
                          id="select-installation"
                          label="Select Installation"
                        ></Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Button fullWidth variant="contained">
                        Add Product
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <ManualUploadSection title="File Upload" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          {/* Product Selection */}

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
