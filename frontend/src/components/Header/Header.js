import React from "react";
import "./Header.css";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { TextField, Box, Grid, Typography, Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";
const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const user = Cookies.get("user");
  const token = Cookies.get("token");

  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <Box className="logo">
        <Link to="/">
          <img
            src={require("../../assets/images/Tarkett-logo.png")}
            alt="Tarkett"
            className="LogoImg"
          />
        </Link>
        <img
          src={require("../../assets/images/RDM-logo.png")}
          alt=""
          className="LogoImg"
        />
      </Box>
      <nav>
        {/* Add navigation links or other header content as needed */}
        {user && token ? (
          <>
            {" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/account-manager-dashboard")}
            >
              My Requests
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/sign-in")}
          >
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
