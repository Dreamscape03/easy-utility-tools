import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar flex flex-row items-center px-2 gap-4">
      <div
        onClick={() => {
          window.location.href = "/";
        }}
        className="logo"
      >
        Easy Utility Tools
      </div>
    </div>
  );
};

export default Navbar;
