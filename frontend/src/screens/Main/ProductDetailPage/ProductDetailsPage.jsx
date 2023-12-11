import React, { useState } from "react";
import "./ProductDetailsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import image1 from "../../../assets/floor/image1.jpg";
import Header from "../../../components/Header";
import ArrowBack from "@mui/icons-material/ArrowBack";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CachedIcon from '@mui/icons-material/Cached';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Typography } from "@mui/material";

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-section">
      <Box display="flex" justifyContent="space-between" alignItems="center" className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <Typography variant="h4">{title}{" "}</Typography>
        <span className="accordion-arrow">
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </span>
      </Box>
      <Box>
        {isOpen && <Typography variant="h6" className="accordion-content">{children}</Typography>}
      </Box>
      {/* <hr></hr> */}
    </div>
  );
};

const ProductDetailsPage = () => {
  // Dummy product data - replace with actual data
  const product = {
    name: "Abrasive Action II",
    images: [image1], // Replace with actual image paths
    swatches: [
      { color: "Soft Pewter", code: "#A9A9A9", image: image1 },
      { color: "Slate Stone", code: "#708090", image: image1 },
      { color: "Cool Ash", code: "#B0C4DE", image: image1 },
      { color: "Dusty Beige", code: "#D3D3D3", image: image1 },
      { color: "Pebble Path", code: "#C0C0C0", image: image1 },
      // ... other swatches
    ],
    formats: [
      { type: "Tile", available: true },
      { type: "Roll", available: true },
    ],
    description: "Abrasive Action II",
    // ... other product details
  };

  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  return (
    <Box>
    {/*<Header />*/}
    <Box className="product-details-container" p={2}>
      <div className="back-button">
        <Button
          type="button"
          onClick={() => navigate("/product-catalog")}
          variant=""
          color="primary"
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </div>
      <div className="main-content-product">
        <div className="image-section">
          <Button startIcon={<CachedIcon />} endIcon={<OpenInNewIcon/>} className="view-visualizer-button">VIEW IN VISUALIZER</Button>
          <Button className="download-button"><GetAppRoundedIcon /></Button>
          {/* <GetAppRoundedIcon className="download-button" /> */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-main-image"
          />

          <Box mt={2}>
            <Typography variant="h6">Products | Carpet | Powerbond - Resilient/Carpet Hybrid </Typography>
            <hr></hr>
          </Box>
        </div>
        <div className="details-section">
          <Typography className="product-title" variant="h4">{product.name}</Typography>
          <Box className="colors" display="flex" justifyContent="space-between" my={2}>
            <Typography variant="h6">Colors ({product.swatches.length})</Typography>
            <AddBoxIcon  />
          </Box>
          <Box display="flex" justifyContent="flex-end" flexDirection="column" alignItems="flex-end" mb={3}>
            <Box>
              <div className="swatches">
                {product.swatches.map((swatch) => (
                  <div
                    key={swatch.id}
                    className="swatch"
                    style={{ backgroundColor: `${swatch.code}` }}
                  >
                    {/* <img src={swatch.image} alt={swatch.label} /> */}
                  </div>
                ))}
              </div>
              <div className="product-description">
                <p>{product.description}</p>
              </div>
              <Button startIcon={<AddIcon/>} variant="contained" color="primary" fullWidth>
                Add
              </Button>
            </Box>
          </Box>

          <div className="formats-sizes">
            <Typography variant="h6">Fomats and sizes</Typography>
            <Box className="formats" display="flex">
              {product.formats.map((format, index) => (
                
                <Box key={index} mr={3}>
                  {/* <input type="radio" name="format" value={format.type} disabled={!format.available} />
                                    {format.type} ({format.available ? '1' : '0'}) */}
                  <Typography variant="h6">{format.type}</Typography>
                </Box>
              ))}
            </Box>
          </div>
        </div>
      </div>

      <div className="details-container">
        <div className="main-details">
          <div className="header">
            <Typography variant="h1">Abrasive Action II 02578 WINTER GRAY 19103</Typography>
          </div>
          <div className="content">
            <Typography variant="h6">
              Properly designed entryway systems can prevent 80% of outside soil
              from being tracked inside. Abrasive Action is a versatile
              Powerbond and modular product that is ideal for use as an entryway
              system or for interior environments. Welded seams create a
              complete wall-to-wall moisture barrier. This system provides a
              sound, cost-effective solution for long-term appearance retention
              at entryways and other high traffic areas.
            </Typography>
            <Box mt={2}>
              <Typography variant="h6">
                Discover this product's environmental attributes and its
                contribution to LEED at ecomedes.
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h4">KEY FEATURES</Typography>
              <ul>
                <li><Typography variant="h6">Available in 7 colors</Typography></li>
                <li>
                <Typography variant="h6">Available in Modular Carpet Tile (24" x 24") and Powerbond
                  (Roll)</Typography>
                </li>
                <li><Typography variant="h6">TTX SD Solution Dyed</Typography></li>
                <li><Typography variant="h6">Permanent stain resistance</Typography></li>
                <li>
                <Typography variant="h6"><a>Tarket Footprint - Powerbond®</a> / <a>Tarket Footprint - Ethos®
                  Modular</a></Typography>
                </li>
              </ul>
            </Box>
          </div>
        </div>
        <div className="sidebar">
          <div className="accordion">
            <AccordionSection title="SUSTAINABILITY">
              Content for sustainability...
            </AccordionSection>
            <AccordionSection title="SPECIFICATIONS">
              Content for specifications...
            </AccordionSection>
            <AccordionSection title="INSTALLATION">
              Content for installation...
            </AccordionSection>
            <AccordionSection title="DOWNLOADS & IMAGES">
              Content for downloads & images...
            </AccordionSection>
          </div>
        </div>
      </div>
    </Box>
    </Box>
  );
};

export default ProductDetailsPage;
