import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utilities/axiosConfig";
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
import ProductSelection from "../ProductSelection";
import { useStepContext } from "../../context/StepFormContext";

const DesignAccordion = ({ index, onDesignChange }) => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");
  const [notes, setNotes] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const { state, dispatch } = useStepContext();

  useEffect(() => {
    // Call the onDesignChange callback whenever the design data changes
    onDesignChange(index, {
      productList,
      uploadedFiles: uploadedFiles.map((file) => file.name),
      notes,
    });
  }, [index, productList, uploadedFiles, notes, onDesignChange]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/svg+xml": [".svg"],
    },
    maxSize: 3000000, // 3MB
    onDrop: async (acceptedFiles) => {
      setUploadedFiles(acceptedFiles.map((file) => ({ name: file.name })));
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("files", file, file.name);
      });

      try {
        const response = await axios.post("/upload", formData, {
          withCredentials: true,
          credentials: "include",
        });

        console.log("Response:", response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    },
  });

  const handleRemoveFile = async (fileName) => {
    //setUploadedFiles(uploadedFiles.filter((file) => file.name !== fileName));
    try {
      const response = await axios.delete(`/delete-file/${fileName}`, {
        withCredentials: true,
        credentials: "include",
      });
      // Update state if file successfully deleted
      setUploadedFiles(uploadedFiles.filter((file) => file.name !== fileName));
      console.log("Response for file removal:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleAddProduct = () => {
    navigate("/product-catalog");
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

  const handleOnSubmitDesignDetails = (newProductList) => {
    setProductList(newProductList);
  };

  const handleClick = () => {
    const designData = {
      productList,
      uploadedFiles: uploadedFiles.map((file) => file.name),
      notes,
    };
    dispatch({ type: "SET_DESIGN_DETAILS", payload: { index, designData } });
    dispatch({ type: "NEXT_STEP" });
  };

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      console.log("Uploaded files:", uploadedFiles);
    }
  }, [uploadedFiles]);

  return (
    <>
      <Accordion>
        <AccordionSummary
          style={{ backgroundColor: "#003057" }}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography color="white">Design {index + 1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ProductSelection
            onSubmitDesignDetails={handleOnSubmitDesignDetails}
          />
        </AccordionDetails>
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
          {/*<FormControl fullWidth margin="normal">
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
        />*/}
          <TextareaAutosize
            minRows={3}
            placeholder="Rendering Notes"
            style={{ width: "100%", marginTop: "20px" }}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

const RequestStep2Accordion = ({ count }) => {
  const [allDesigns, setAllDesigns] = useState({});
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const { dispatch } = useStepContext();

  const handleDesignChange = (index, designData) => {
    setAllDesigns((prevDesigns) => {
      const newDesigns = { ...prevDesigns, [index]: designData };

      // Check if every design has at least one product and one uploaded file
      const allDesignsValid = Object.values(newDesigns).every(
        (design) =>
          design.productList.length > 0 && design.uploadedFiles.length > 0
      );

      setIsNextEnabled(allDesignsValid); // Enable or disable the Next button
      return newDesigns;
    });
  };

  const handleClick = () => {
    console.log("ALL DESIGNS:", allDesigns);
    dispatch({ type: "SET_DESIGN_DETAILS", payload: allDesigns });
    dispatch({ type: "NEXT_STEP" });
  };
  return (
    <div>
      {Array.from({ length: count }, (_, index) => (
        <DesignAccordion
          key={index}
          index={index}
          onDesignChange={handleDesignChange}
        />
      ))}
      <Button
        type="button"
        onClick={handleClick}
        variant="contained"
        color="primary"
        disabled={!isNextEnabled}
      >
        Next
      </Button>
    </div>
  );
};

export default RequestStep2Accordion;