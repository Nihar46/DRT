import React from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
} from "@mui/material";

const Auth = () => {
  return (
    // <Box className="ContentWrapper">
      <Outlet />
    // </Box>
  );
};

Auth.propTypes = {};

export default Auth;
