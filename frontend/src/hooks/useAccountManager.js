//import { useCallback } from "react";         Will be required later on
import { useNavigate, useParams } from "react-router-dom";
import axios from "../utilities/axiosConfig";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { CLIENT_KEY } from "../config/keys";
import { useStepContext } from "../context/StepFormContext";

const useAccountManager = () => {
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
      if (response.data.success) {
        toast.success(response.data.message, {
          autoClose: 5000,
          position: "top-center",
        });
        navigate("/design-request-details");
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

  const submitRequest = async (projectInformation, designDetails) => {
    try {
      console.log("first:", projectInformation);
      console.log("second:", designDetails);
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        "/account-manager-sales-rep/create-request",
        {
          projectInformation,
          designDetails,
          userId,
        },
        { withCredentials: true, credentials: "include" }
      );
      console.log("RESPONSE:", response);
      if (response.data.success) {
        toast.success(response.data.message, {
          autoClose: 5000,
          position: "top-center",
        });
        navigate("/account-manager-dashboard");
      }
      console.log("LoginResponse:", response.data);
    } catch (error) {
      console.log("Error while submitting request:", error);
      toast.error("Request creation failed!", {
        autoClose: 2000,
        position: "top-center",
      });
    }
  };

  return {
    submitRequest,
  };
};

export default useAccountManager;
