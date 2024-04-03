import React from "react";
import Style from "./Navbar.module.css";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className={Style.navbarContainer}>
      <div onClick={() => {
            window.open("/", "_self");
          }} className={Style.logoContainer}>
        <img
          className={Style.logo}
          src={require("../assets/logo.png")}
          alt="logo"
        />
      </div>
      <div className={Style.navItemsContainer}>
        <div className={Style.toggleBtnContainer}>
          {/* <IoMoonOutline className={`${Style.toggleIcon} ${Style.moonIcon}`} /> */}
          <IoSunnyOutline className={`${Style.toggleBtn} ${Style.sunIcon}`} />
        </div>
        <div className={Style.btnContainer}>
          <button className={Style.loginBtn}>Login</button>
        </div>
      </div>
    </div>
  );
}
