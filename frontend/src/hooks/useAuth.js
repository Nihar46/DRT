//import { useCallback } from "react";         Will be required later on
import { useNavigate, useParams } from "react-router-dom";
import axios from "../utilities/axiosConfig";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import { CLIENT_KEY } from "../config/keys";
import { useStepContext } from "../context/StepFormContext";

const useAuth = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { dispatch } = useStepContext();

  const login = async (formValues) => {
    console.log("LoginFormValues:", formValues);

    try {
      const response = await axios.post(
        "/login",
        { ...formValues },
        { withCredentials: true, credentials: "include" }
      );
      console.log("RESPONSE:", response);
      localStorage.setItem("userId", response.data.user);
      localStorage.setItem("userType", response.data.userType);

      if (response.data.success) {
        toast.success(response.data.message, {
          autoClose: 5000,
          position: "top-center",
        });
        navigate("/dashboard", { replace: true });
        window.location.reload();
      }
      console.log("LoginResponse:", response.data);
    } catch (error) {
      console.log("Error while logging in:", error);
      toast.error("Login Failed!", {
        autoClose: 2000,
        position: "top-center",
      });
    }
  };

  const forgotPassword = async (email) => {
    try {
      if (!email) {
        toast.error("Please enter email", {
          autoClose: 2000,
          position: "top-center",
        });
        return;
      }
      const response = await axios.post(
        "/forgot-password",
        { email },
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      console.log("Response:", response);

      if (response.data.success) {
        toast.success(response.data.message, {
          autoClose: 2000,
          position: "top-center",
        });
        navigate("/sign-in");
      }
    } catch (error) {
      console.log("Error occured:", error);
      toast.error("Please enter a registered email!", {
        autoClose: 2000,
        position: "top-center",
      });
    }
  };

  const resetPassword = async (password) => {
    try {
      console.log("Password New HOOk:", password);
      console.log("ID:", params.id);
      console.log("Token:", params.token);

      const response = await axios.post(
        `/users/${params.id}/reset-password/${params.token}`,
        { password },
        { withCredentials: true, credentials: "include" }
      );

      if (response.data.success) {
        toast.success(response.data.message, {
          autoClose: 2000,
          position: "top-center",
        });
      }

      return response.data.success;
    } catch (error) {
      console.log("Error occured:", error);
      toast.error("Password reset failed, please try again!", {
        autoClose: 2000,
        position: "top-center",
      });
      navigate("/sign-in");
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post("/logout", {
        withCredentials: true,
        credentials: "include",
      });

      if (response.data.success === true) {
        Cookies.remove("token");
        Cookies.remove("user");
        localStorage.removeItem("userId");
        localStorage.removeItem("userType");
        dispatch({ type: "RESET_STATE" });

        toast.success("You have logged out!", {
          autoClose: 2000,
          position: "top-center",
        });
        navigate("/");
      }
    } catch (error) {
      console.log("Error while logging out:", error);
    }
  };

  return {
    login,
    logout,
    forgotPassword,
    resetPassword,
  };
};

export default useAuth;
