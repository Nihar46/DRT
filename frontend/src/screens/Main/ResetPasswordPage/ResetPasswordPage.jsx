import React, { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./ResetPasswordPage.css";
import {
  TextField,
  Box,
  Grid,
  Typography,
  Button,
  Link,
} from "@mui/material";

const ResetPasswordPage = () => {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const [successfulPasswordReset, setSuccessfulPasswordReset] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    /*if (
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|;':",.<>?/\\])(.{8,24})$/.test(
        event.target.password.value
      )
    ) {
      const success = resetPassword(event.target.password.value);
      setSuccessfulPasswordReset(success);
    } else {
      toast.error("Password criteria not met!", {
        autoClose: 2000,
        position: "top-center",
      });
    }*/
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
                  Reset Password
                </Typography>
              </Grid>
              <Grid item xs={12} className="InputFldBox">
                {/* <InputLabel htmlFor="password">Password:</InputLabel> */}
                <TextField
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
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
                  Reset Password
                </Button>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
              onClick={() => {
                navigate("/");
              }}
              style={{ width: "100%" }}
            >
              Proceed to Login
            </Button>
              </Grid>
                </Grid>
             
          </form>
        </Box>
      </Grid>
    </Grid>
  //  <div className="form-container-outer">
  //     <h2>Reset Password</h2>
  //     <div className="login-outer">
  //       {" "}
  //       {successfulPasswordReset ? (
  //         <button
  //           onClick={() => {
  //             navigate("/");
  //           }}
  //           style={{ width: "100%" }}
  //         >
  //           Proceed to Login
  //         </button>
  //       ) : (
  //         <>
  //           <form className="form-container" onSubmit={handleSubmit}>
  //             <div className="form-group">
  //               <input
  //                 type="password"
  //                 name="password"
  //                 placeholder="Enter new password"
  //               />
  //             </div>
  //             <div className="form-button">
  //               <button type="submit">Reset Password</button>
  //             </div>
  //           </form>
  //           <button
  //             onClick={() => {
  //               navigate("/");
  //             }}
  //             style={{ width: "100%" }}
  //           >
  //             Proceed to Login
  //           </button>
  //         </>
  //       )}
  //     </div>
  //   </div>
  );
};

export default ResetPasswordPage;
