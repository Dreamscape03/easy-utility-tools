import React from "react";
import Style from "./Footer.module.css";
import { redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaI, FaX } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className={Style.footerContainer}>
      <div className={Style.footerHeader}>
        <div className={Style.aboutUs}>
          <h4 style={{ color: "#007bff" }}>About Us</h4>
          <p>
            Easy Utility Tools is a website that provides free online tools for
            students and professionals. We provide tools like Online Clipboard,
            GPA Calculator, CGPA Calculator, and many more.
          </p>
        </div>
        <div className={Style.links}>
          <h4 style={{ color: "#007bff" }}>Categories</h4>
          <span
            onClick={() => {
              window.open("/online-clipboard", "_self");
            }}
          >
            Online Clipboard
          </span>
          <span
            onClick={() => {
              window.open("/gpa-calculator", "_self");
            }}
          >
            GPA Calculator
          </span>
          <span
            onClick={() => {
              window.open("/cgpa-calculator", "_self");
            }}
          >
            CGPA Calculator
          </span>
        </div>
        <div className={Style.links}>
          <h4 style={{ color: "#007bff" }}>Quick Links</h4>
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
      <hr />
      <div className={Style.footerBottom}>
        <div className="d-flex w-100">© 2024 Easy Utility Tools</div>
        <div className="d-flex justify-content-sm-end justify-content-between gap-sm-4 gap-1 w-100">
          <div className="d-flex gap-2">
            <FaFacebook style={{ color: "#1877f2", fontSize: "1.5rem" }} />
            <FaInstagram style={{ color: "#c32aa3", fontSize: "1.5rem" }} />
            <FaLinkedin style={{ color: "#0a66c2", fontSize: "1.5rem" }} />
            <FaTwitter style={{ color: "#1da1f2", fontSize: "1.5rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
