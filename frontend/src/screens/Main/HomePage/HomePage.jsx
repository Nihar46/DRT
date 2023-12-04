import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Grid, Typography, Button, Link } from "@mui/material";
import Header from "../../../components/Header"; // Adjust the path based on your file structure
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const HomePage = () => {
  const navigate = useNavigate();
  const user = Cookies.get("user");
  const token = Cookies.get("token");

  const handleClick = () => {
    if (user && token) {
      navigate("/design-request-details");
    } else {
      toast.info("Please login to create request", {
        autoClose: 5000,
        position: "top-center",
      });
      navigate("/sign-in");
    }
  };

  return (
    <>
      <Header />
      <Grid container direction="row" className="HomePageContainer">
        <Grid item xs={12} md={3} className="HomeLeftCol">
          <Box className="BannerImg1">
            <img
              src={require("../../../assets/images/banner-img-1.jpg")}
              alt=""
            />
          </Box>
          <Grid container direction="row" className="BannerImg2Container">
            <Grid item xs={12} md={7} className="">
              <Box className="BannerImg2">
                <img
                  src={require("../../../assets/images/banner-img-2.jpg")}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className="HomeMidCol">
          <Typography variant="h1" component="div" className="HomeMainHeading">
            Welcome, Let’s Get Started!
          </Typography>
          <Box className="HomeSubTitle">
            <Typography variant="h5" component="div">
              Make your first design request:{" "}
            </Typography>
            <Button variant="contained" onClick={handleClick} color="primary">
              Request Design
            </Button>
          </Box>
          <Box className="DesignImgBox">
            <img
              src={require("../../../assets/images/design-img.jpg")}
              alt=""
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={3} className="HomeRightCol">
          <Box className="BannerImg4">
            <img
              src={require("../../../assets/images/tarkett-logo-mid.jpg")}
              alt=""
            />
          </Box>
          <Grid container direction="row" className="BannerImg5Container">
            <Grid item xs={12} md={7} className="">
              <Box className="BannerImg5">
                <img
                  src={require("../../../assets/images/banner-img-5.jpg")}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
