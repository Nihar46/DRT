import React, { useCallback, useState } from "react";
import { Box, Button, Paper, Typography, Link } from "@mui/material";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";

const ManualUploadSection = ({ title }) => {
  const [file, setFile] = useState(null);
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

  const removeFile = () => {
    URL.revokeObjectURL(fileBlob); // Clean up the object URL
    setFile(null);
    setFileBlob(null);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileBlob;
    link.download = file.name; // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ p: 2, m: 1 }}>
      <Typography variant="h6">{title}</Typography>
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
      {file && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={removeFile}
            sx={{ mr: 1 }}
          >
            Remove
          </Button>
          <Typography variant="body1" component={Link} href="#" download>
            {file.name}
          </Typography>
        </Box>
      )}
      <Button
        variant="contained"
        onClick={handleDownload}
        disabled={!file}
        sx={{ mt: 2 }}
      >
        Save PDF
      </Button>
    </Box>
  );
};

export default ManualUploadSection;
