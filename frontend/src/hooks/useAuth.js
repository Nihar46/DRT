//import { useCallback } from "react";         Will be required later on
import { useNavigate, useParams } from "react-router-dom";
import axios from "../utilities/axiosConfig";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import { CLIENT_KEY } from "../config/keys";

const useAuth = () => {
  const navigate = useNavigate();
  const params = useParams();

  const login = async (formValues) => {
    // console.log("LoginFormValues:", formValues);

    try {
      const response = await axios.post(
        "/user/login",
        { ...formValues },
        { withCredentials: true, credentials: "include" }
      );
      console.log("RESPONSE:", response);
      if (response.data.key) {
        toast.info(response.data.message, {
          autoClose: 5000,
          position: "top-center",
        });
        return;
      }
      console.log("LoginResponse:", response.data);
      if (response.data) {
        navigate("/2fa");
      }
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
        "/user/forgot-password",
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
      }
      navigate("/");
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
      console.log("Password New:", password);
      const hashedPassword = CryptoJS.AES.encrypt(
        password,
        CLIENT_KEY
      ).toString();
      console.log("HAshed password:", hashedPassword);
      const response = await axios.post(
        `/user/${params.id}/reset-password/${params.token}`,
        { hashedPassword },
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
      navigate("/");
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post("/user/logout", {
        withCredentials: true,
        credentials: "include",
      });

      if (response.data.success === true) {
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        Cookies.remove("token");
        Cookies.remove("user");
        Cookies.remove("temp_secret");
        Cookies.remove("verified");

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
