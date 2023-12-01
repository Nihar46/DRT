import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Box,
  Grid,
  Typography,
  Button,
  Link,
} from "@mui/material";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Box className="logo">
        <img
            src={require("../../assets/images/Tarkett-logo.png")}
            alt="Tarkett" className="LogoImg"
          />
        <img
            src={require("../../assets/images/RDM-logo.png")}
            alt="" className="LogoImg"
          />
        
      </Box>
      <nav>
        {/* Add navigation links or other header content as needed */}
        <Button variant="contained" color="secondary" onClick={() => navigate("/sign-in")}>Login</Button>
      </nav>
    </header>
  );
};

export default Header;
