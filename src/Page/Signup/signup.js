import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./signup.module.css";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (name === "" || email === "" || password === "") {
      setError("All fields are required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      console.log("Sign Up successful");
      navigate("/login"); 
    }
  };

  return (
    <div className={Style.signupContainer}>
      <div className={Style.signupFormContainer}>
        <h1 className={Style.signupHeading}>Sign Up</h1>
        {error && <p className={Style.errorMessage}>{error}</p>}
        <input
          className={Style.input}
          type=""
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button className={Style.signupBtn} onClick={handleSignup}>
          Sign Up
        </button>
        <p className={Style.helperText}>
          Already have an account?{" "}
          <span className={Style.link} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};
