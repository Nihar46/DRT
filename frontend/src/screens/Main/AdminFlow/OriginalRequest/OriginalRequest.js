import React, { useCallback, useState } from "react";
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
  Paper,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import ManualUploadSection from "../../../../components/ManualUploadSection";
import DeleteIcon from "@mui/icons-material/Delete";

const OriginalRequest = () => {
  const [fileBlob, setFileBlob] = useState(null);
  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    if (fileRejections.length) {
      alert("Only PDF files are allowed!");
    } else {
      const uploadedFile = acceptedFiles[0];
      setFile(uploadedFile);
      setFileBlob(URL.createObjectURL(uploadedFile));
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileBlob;
    link.download = file.name; // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const removeFile = () => {
    URL.revokeObjectURL(fileBlob); // Clean up the object URL
    setFile(null);
    setFileBlob(null);
  };

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
                  <Box>
                    <Typography variant="h4">File Upload</Typography>
                    <Paper
                      {...getRootProps()}
                      sx={{
                        p: 2,
                        mt: 1,
                        mb: 2,
                        border: "1px dashed grey",
                        bgcolor: "#fafafa",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      <input {...getInputProps()} />
                      {file ? (
                        <Typography>{file.name}</Typography>
                      ) : (
                        <Typography>
                          Click here or drag file into this box to upload.
                        </Typography>
                      )}
                    </Paper>
                    <Button
                      variant="contained"
                      onClick={handleDownload}
                      disabled={!file}
                      sx={{ mb: 2 }}
                    >
                      Save PDF
                    </Button>
                    {file && (
                      <Box
                        border={1}
                        p={1}
                        borderRadius={1}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          borderColor: "grey.500",
                        }}
                      >
                        <Typography
                          variant="body1"
                          component={Link}
                          href="#"
                          download
                        >
                          {file.name}
                        </Typography>
                        <Button
                          variant="contained"
                          color="error"
                          startIcon={<DeleteIcon />}
                          onClick={removeFile}
                        >
                          Remove
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          {/* Product Selection */}

          {/* {file && (
            <Stack direction="row" alignItems="center" spacing={1} mt={1}>
              <Typography variant="body2">{file.name}</Typography>
              <Button color="error">Delete</Button>
            </Stack>
          )} */}

          {/* More components to be added here */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OriginalRequest;
