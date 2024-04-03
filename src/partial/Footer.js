import React from "react";
import Style from "./Footer.module.css";
import { redirect } from "react-router-dom";
export const Footer = () => {
  return (
    <div className={Style.footerContainer}>
      <div className="d-flex w-100" >© 2024 Online Clipboard</div>
      <div className="d-flex justify-content-sm-end justify-content-between gap-sm-4 gap-1 w-100">
        <span
          onClick={() => {
            window.open("/terms-and-conditions", "_self");
          }}
        >
          Terms of Service
        </span>
        <span
          onClick={() => {
            window.open("/privacy-policy", "_self");
          }}
        >
          Privacy Policy
        </span>
        <span
          onClick={() => {
            window.open("/cookie-policy", "_self");
          }}
        >
          Cookie Policy
        </span>
      </div>
    </div>
  );
};
