import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Navbar.module.css";
import { IoSunnyOutline } from "react-icons/io5";

export const Navbar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLoginClick = () => {
    console.log("Login button clicked");
    navigate("/login"); // Replace "/login" with your desired path
  };

  return (
    <div className={Style.navbarContainer}>
      {/* Logo Section */}
      <div
        onClick={() => window.open("/", "_self")} // Open the root path
        className={Style.logoContainer}
      >
        <img
          className={Style.logo}
          src={require("../assets/logo_easy.png")}
          alt="logo"
        />
      </div>

      {/* Navigation Items */}
      <div className={Style.navItemsContainer}>
        {/* Theme Toggle Button */}
        <div className={Style.toggleBtnContainer}>
          {/* Uncomment and use IoMoonOutline for the moon icon */}
          {/* <IoMoonOutline className={`${Style.toggleIcon} ${Style.moonIcon}`} /> */}
          <IoSunnyOutline className={`${Style.toggleBtn} ${Style.sunIcon}`} />
        </div>

        {/* Login Button */}
        <div className={Style.btnContainer}>
          <button className={Style.loginBtn} onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
