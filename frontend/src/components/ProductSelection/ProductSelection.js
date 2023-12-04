import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  List,
  ListItem,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStepContext } from "../../context/StepFormContext";

const ProductSelection = ({ onSubmitDesignDetails }) => {
  const { state, dispatch } = useStepContext();
  const [selections, setSelections] = useState({
    brand: "",
    style: "",
    color: "",
    installation: "",
  });
  const [productList, setProductList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    onSubmitDesignDetails(productList);
  }, [productList, onSubmitDesignDetails]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelections((prevSelections) => ({
      ...prevSelections,
      [name]: value,
    }));
  };

  const canAddOrEditProduct = Object.values(selections).every((x) => x);

  const addOrEditProduct = () => {
    if (canAddOrEditProduct) {
      if (editIndex >= 0) {
        // Edit existing product
        setProductList((prevList) =>
          prevList.map((item, index) =>
            index === editIndex ? selections : item
          )
        );
        setEditIndex(-1); // Reset edit index
      } else {
        // Add new product
        setProductList((prevList) => [...prevList, selections]);
      }
      // Reset selections
      setSelections({
        brand: "",
        style: "",
        color: "",
        installation: "",
      });
    }
  };

  const editProduct = (index) => {
    setSelections(productList[index]);
    setEditIndex(index);
  };

  const deleteProduct = (index) => {
    setProductList((prevList) => prevList.filter((_, i) => i !== index));
    if (index === editIndex) {
      // Reset selections if currently editing this product
      setSelections({
        brand: "",
        style: "",
        color: "",
        installation: "",
      });
      setEditIndex(-1);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        {/* Brand Dropdown */}
        <FormControl fullWidth>
          <InputLabel id="brand-select-label">Brand</InputLabel>
          <Select
            labelId="brand-select-label"
            id="brand-select"
            value={selections.brand}
            label="Brand"
            name="brand"
            onChange={handleChange}
          >
            {["Tarkett", "Vog", "Jest"].map((brand) => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Style Dropdown */}
        <FormControl fullWidth>
          <InputLabel id="style-select-label">Style</InputLabel>
          <Select
            labelId="style-select-label"
            id="style-select"
            value={selections.style}
            label="Style"
            name="style"
            onChange={handleChange}
          >
            {["Heritage", "Northstar", "Westend"].map((style) => (
              <MenuItem key={style} value={style}>
                {style}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Color Dropdown */}
        <FormControl fullWidth>
          <InputLabel id="color-select-label">Color</InputLabel>
          <Select
            labelId="color-select-label"
            id="color-select"
            value={selections.color}
            label="Color"
            name="color"
            onChange={handleChange}
          >
            {["red", "blue", "green"].map((color) => (
              <MenuItem key={color} value={color}>
                {color}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Installation Dropdown */}
        <FormControl fullWidth>
          <InputLabel id="installation-select-label">Installation</InputLabel>
          <Select
            labelId="installation-select-label"
            id="installation-select"
            value={selections.installation}
            label="Installation"
            name="installation"
            onChange={handleChange}
          >
            {["random", "quarter turn", "surprise me"].map((installation) => (
              <MenuItem key={installation} value={installation}>
                {installation}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Add/Edit Button */}
        <Button
          variant="contained"
          onClick={addOrEditProduct}
          disabled={!canAddOrEditProduct}
        >
          {editIndex >= 0 ? "Update Product" : "Add Product"}
        </Button>
      </div>

      {/* List of selected products */}
      <List>
        {productList.map((product, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <>
                <IconButton edge="end" onClick={() => editProduct(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" onClick={() => deleteProduct(index)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <Typography variant="body1">
              Brand: {product.brand}, Style: {product.style}, Color:{" "}
              {product.color}, Installation: {product.installation}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ProductSelection;
