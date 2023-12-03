import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextareaAutosize,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDropzone } from "react-dropzone";

const DesignAccordion = ({ index }) => {
  const [selectedType, setSelectedType] = useState("");
  const [notes, setNotes] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [products, setProducts] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/svg+xml": [".svg"],
    },
    maxSize: 3000000, // 3MB
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles.map((file) => ({ name: file.name })));
    },
  });

  const handleRemoveFile = (fileName) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.name !== fileName));
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleAddProduct = () => {
    // Logic to add a new product
  };

  const renderProductImages = () => {
    return products.map((product, idx) => (
      <div key={idx}>
        <img
          src={product.preview}
          alt={`Product ${idx + 1}`}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    ));
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Design {index + 1}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div
          {...getRootProps()}
          style={{
            border: "2px dashed black",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <List>
          {uploadedFiles.map((file, idx) => (
            <ListItem key={idx}>
              <ListItemText primary={file.name} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleRemoveFile(file.name)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <FormControl fullWidth margin="normal">
          <InputLabel>Type</InputLabel>
          <Select value={selectedType} label="Type" onChange={handleTypeChange}>
            <MenuItem value="floor-plan">Floor Plan</MenuItem>
            <MenuItem value="room-scene">Room Scene</MenuItem>
          </Select>
        </FormControl>
        <Typography>Products</Typography>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          {renderProductImages()}
        </div>
        <Button variant="contained" onClick={handleAddProduct}>
          + Add Product
        </Button>
        <TextareaAutosize
          minRows={3}
          placeholder="Rendering Notes"
          style={{ width: "100%", marginTop: "20px" }}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </AccordionDetails>
    </Accordion>
  );
};

const RequestStep2Accordion = ({ count }) => {
  return (
    <div>
      {Array.from({ length: count }, (_, index) => (
        <DesignAccordion key={index} index={index} />
      ))}
    </div>
  );
};

export default RequestStep2Accordion;
