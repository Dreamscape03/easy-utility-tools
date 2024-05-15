import React from "react";
import { Navbar } from "../partial/Navbar";
import Style from "./Home.module.css";
import { Footer } from "../partial/Footer";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const goToTool = (tool) => {
    if (tool === "clipboard") {
      navigate("/online-clipboard");
    } else if (tool === "gpa") {
      navigate("/gpa-calculator");
    } else if (tool === "cgpa") {
      navigate("/cgpa-calculator");
    }
  };

  return (
    <div>
      <Navbar />
      <div className={Style.homeContainer}>
        <div className={Style.headerContainer}>
          <div className={Style.headerText}>Easy Utility Tools</div>
        </div>
        <div className={Style.toolContainer}>
          <div className={Style.toolCard}>
            <div className={Style.cardContent}>
              <div className={Style.icon}>
                <img
                  src={require("../assets/online-clipboard.jpg")}
                  alt="Online Clipboard Icon"
                />
              </div>
              <h2>Online Clipboard</h2>
              <p>Store and manage your copied text online.</p>
            </div>
            <div className={Style.toolButtonContainer}>
              <button
                className={Style.toolButton}
                onClick={() => goToTool("clipboard")}
              >
                Go to tool
              </button>
            </div>
          </div>

          <div className={Style.toolCard}>
            <div className={Style.cardContent}>
              <div className={Style.icon}>
                <img
                  src={require("../assets/gpa-calculator.jpg")}
                  alt="GPA Calculator Icon"
                />
              </div>
              <h2>GPA Calculator</h2>
              <p>Calculate your Grade Point Average (GPA) for a semester.</p>
            </div>
            <div className={Style.toolButtonContainer}>
              <button
                className={Style.toolButton}
                onClick={() => goToTool("gpa")}
              >
                Go to tool
              </button>
            </div>
          </div>

          <div className={Style.toolCard}>
            <div className={Style.cardContent}>
              <div className={Style.icon}>
                <img
                  src={require("../assets/gpa-calculator.jpg")}
                  alt="CGPA Calculator Icon"
                />
              </div>
              <h2>CGPA Calculator</h2>
              <p>
                Calculate your Cumulative Grade Point Average (CGPA) over
                multiple semesters.
              </p>
            </div>
            <div className={Style.toolButtonContainer}>
              <button
                className={Style.toolButton}
                onClick={() => goToTool("cgpa")}
              >
                Go to tool
              </button>
            </div>
          </div>
        </div>
        <div className={Style.subHeaderContainer}>
          <div className={Style.subHeaderText}>
            A collection of easy-to-use utility tools that will make your life
            easier. Online tools that will help you in your daily life like
            Online Clipboard, GPA Calculator, CGPA Calculator, and many more.
            These tools are free to use and can be accessed from anywhere in the
            world. You can use these tools to save time and make your life
            easier. These tools are designed to be simple and easy to use so
            that anyone can use them. You can use these tools to save time and
            be more productive.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
