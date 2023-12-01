import React from "react";
import {
  TextField,
  Box,
  Grid,
  Typography,
  Button,
  Link,
} from "@mui/material";
import Header from "../../../components/Header"; // Adjust the path based on your file structure

const HomePage = () => {
  return (
    <>
    <Header />
    <Grid
      container
        direction="row"
        className="HomePageContainer"
    >
      <Grid item xs={12} md={3} className="HomeLeftCol">
        <Box className="BannerImg1">
        <img
            src={require("../../../assets/images/banner-img-1.jpg")}
            alt=""
          />
        </Box>
        <Grid
      container
          direction="row"
          className="BannerImg2Container"
        >
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
        <Typography variant="h1" component='div' className="HomeMainHeading">Welcome, Let’s Get Started!</Typography>
        <Box className='HomeSubTitle'><Typography variant="h5" component='div'>Make your first design request: </Typography>
        <Button variant="contained" color="primary">Request Design</Button>
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
        <Grid
      container
          direction="row"
          className="BannerImg5Container"
        >
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
