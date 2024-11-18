import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "" || password === "") {
      setError("Email and password are required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      console.log("Login successful");
      navigate("/") 
    }
  };

  return (
    <div className={Style.loginContainer}>
      <div className={Style.loginFormContainer}>
        <h1 className={Style.loginHeading}>Login</h1>
        {error && <p className={Style.errorMessage}>{error}</p>}
        <input
          className={Style.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={Style.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={Style.loginBtn} onClick={handleLogin}>
          Login
        </button>
        <p className={Style.helperText}>
          Don't have an account?{" "}
          <span className={Style.link} onClick={() => navigate("/signup")}>
            Create Account
          </span>
        </p>
        <p className={Style.helperText}>
          <span
            className={Style.link}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </span>
        </p>
      </div>
    </div>
  );
};
