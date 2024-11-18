import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./ForgotPassword.module.css";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (email === "") {
      setError("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      console.log("Password reset link sent to email");
      navigate("/login"); 
    }
  };

  return (
    <div className={Style.forgotPasswordContainer}>
      <div className={Style.forgotPasswordFormContainer}>
        <h1 className={Style.forgotPasswordHeading}>Forgot Password</h1>
        {error && <p className={Style.errorMessage}>{error}</p>}
        <input
          className={Style.input}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={Style.resetBtn} onClick={handleResetPassword}>
          Reset Password
        </button>
        <p className={Style.helperText}>
          Remember your password?{" "}
          <span className={Style.link} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};
