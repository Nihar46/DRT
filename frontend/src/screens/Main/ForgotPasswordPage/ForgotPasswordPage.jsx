import axios from "../../../utilities/axiosConfig";
import useAuth from "../../../hooks/useAuth";
import "./ForgotPasswordPage.css";
import { useState } from "react";
import {
  TextField,
  Box,
  Grid,
  Typography,
  Button,
  Link,
} from "@mui/material";

const ForgotPasswordPage = () => {
  const { forgotPassword } = useAuth();
  //const [email, setEmail] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    //setEmail(event.target.email.value);
    //console.log("EMAIl:", event.target.email.value);
    forgotPassword(event.target.email.value);
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
      className="Fullheight"
    >
      <Grid item xs={12} md={6} className="LoginLeftCol">
        {/* <img
            src={require("../../../assets/images/login-banner.jpg")}
            alt=""
          /> */}
      </Grid>
      <Grid item xs={12} md={6} className="LoginRightCol">
        <Box className="LoginWrapper">
          <form onSubmit={handleSubmit}>
            <Grid container direction="row">
              <Grid item xs={12}>
                <Typography
                  variant="h2"
                  component="div"
                  className="MainHeading LoginHeading"
                >
                  Forgot Password
                </Typography>
              </Grid>
              <Grid item xs={12} className="InputFldBox">
                {/* <InputLabel htmlFor="email">Email:</InputLabel> */}
                <TextField
                  label="Enter Your Registered Email"
                   type="email"
            name="email"
            placeholder=""
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} className="InputButtonBox">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Get Reset Password Link
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
    
  );
};

export default ForgotPasswordPage;
