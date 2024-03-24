import React from "react";
import Style from "./Footer.module.css";
import { redirect } from "react-router-dom";
export const Footer = () => {
  return (
    <div className={Style.footerContainer}>
      <div>© 2024 Online Clipboard</div>
      <div className="d-flex gap-4">
        <span
          onClick={() => {
            window.open("/terms-and-conditions", "_self");
          }}
        >
          Terms of Service
        </span>
        <span onClick={() => {
            window.open("/privacy-policy", "_self");
          }}>Privacy Policy</span>
        <span>Cookie Policy</span>
      </div>
    </div>
  );
};
