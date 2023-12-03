import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Box, Grid, Typography, Button, Link } from "@mui/material";
import "./Login.css";
// import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="row">
              <Grid item xs={12}>
                <Typography
                  variant="h2"
                  component="div"
                  className="MainHeading LoginHeading"
                >
                  Log In
                </Typography>
              </Grid>
              <Grid item xs={12} className="InputFldBox">
                {/* <InputLabel htmlFor="email">Email:</InputLabel> */}
                <TextField
                  label="Email"
                  type="text"
                  id="email"
                  name="email"
                  fullWidth
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {/* <input
            type="text"
            id="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          /> */}
                {errors.email && (
                  <Typography variant="body1" className="CustomError">
                    {errors.email.message}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} className="InputFldBox">
                {/* <InputLabel htmlFor="password">Password:</InputLabel> */}
                <TextField
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  fullWidth
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {/* <input
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          /> */}
                {errors.password && (
                  <Typography variant="body1" className="CustomError">
                    {errors.password.message}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} className="InputButtonBox">
                <Button
                  variant="contained"
                  color="primary"
                  isDisabled={isSubmitting}
                  type="submit"
                  fullWidth
                >
                  Log In
                </Button>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Link href="/forgot-password" className="ForgotLink">
                  Forgot password?
                </Link>
                <Link href="/reset-password" className="ForgotLink">
                  Reset password
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
