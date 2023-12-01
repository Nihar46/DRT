import React, { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./ResetPasswordPage.css";

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
    <div className="form-container-outer">
      <h2>Reset Password</h2>
      <div className="login-outer">
        {" "}
        {successfulPasswordReset ? (
          <button
            onClick={() => {
              navigate("/");
            }}
            style={{ width: "100%" }}
          >
            Proceed to Login
          </button>
        ) : (
          <>
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                />
              </div>
              <div className="form-button">
                <button type="submit">Reset Password</button>
              </div>
            </form>
            <button
              onClick={() => {
                navigate("/");
              }}
              style={{ width: "100%" }}
            >
              Proceed to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
