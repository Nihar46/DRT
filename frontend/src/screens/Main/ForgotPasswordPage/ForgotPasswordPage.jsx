import axios from "../../../utilities/axiosConfig";
import useAuth from "../../../hooks/useAuth";
import "./ForgotPasswordPage.css";
import { useState } from "react";

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
    <div className="form-container-outer">
      <h2>Forgot Password</h2>
      <div className="login-outer">
        <form
          onSubmit={handleSubmit}
          className="form-container"
        >
          <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your registered email"
          />
          </div>
          <div className="form-button">
            <button type="submit" >
              Get Reset Password Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
