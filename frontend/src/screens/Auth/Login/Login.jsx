import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  InputLabel,
  Box,
  Grid,
  Typography,
  Button,
  Link,
} from "@mui/material";
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item xs={12} md={6} className="LoginLeftCol">
          <img
            src={require("../../../assets/images/login-banner.jpg")}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="LoginWrapper">
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
                {errors.email && <span>{errors.email.message}</span>}
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
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button isDisabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>

      <div>
        <a href="/forgot-password">Forgot password Link</a>
      </div>
      <div>
        <a href="/reset-password">Reset password Link</a>
      </div>
    </div>
  );
};

export default Login;
