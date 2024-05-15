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
            Simplify Your Life with Easy Utility Tools! The ultimate collection
            of user-friendly tools at your fingertips. Bid farewell to tedious
            tasks and embrace efficiency like never before. Effortlessly Copy,
            Paste, and Organize with the Online Clipboard. Say goodbye to losing
            important snippets of text or struggling to transfer data between
            devices. Unlock Academic Excellence with GPA and CGPA Calculators.
            Seamlessly track your academic progress and stay ahead of the curve.
            The Possibilities are Endless with Easy Utility Tools. From unit
            converters to advanced calculators, we've got you covered.
            Productivity on the Go, Anytime, Anywhere. Access these powerful
            tools from any device, at your convenience. Experience the Perfect
            Fusion of Simplicity and Functionality. Intuitive interfaces and
            user-friendly designs, making your life a breeze. Embrace the Future
            of Productivity with Easy Utility Tools. Upgrade your workflow and
            unlock your true potential today!
          </div>
        </div>
        <div className={Style.featureSection}>
          <div className={Style.featureHeader}>
            Unveil the Power of Productivity with Easy Utility Tools' Remarkable
            Features:
          </div>
          <div className={Style.featureContainer}>
            <div className={Style.featureCard}>
              <div className={Style.featureCardContent}>
                <h5>Online Clipboard Features:</h5>
                <ol style={{ marginBottom: "20px", paddingLeft: "20px" }}>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>1.</span> Store
                    unlimited text snippets online.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>2.</span> Access your
                    clipboard from any device.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>3.</span> Organize and
                    categorize entries seamlessly.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>4.</span> Share
                    specific text with collaborators
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>5.</span> Enjoy robust
                    security and privacy
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>6.</span> Sync data
                    with ease across devices and platforms.
                  </li>
                </ol>
                <p>
                  Simplify your workflow and enhance productivity with the Online!
                </p>
              </div>
            </div>
            <div className={Style.featureCard}>
              <div className={Style.featureCardContent}>
                <h5>GPA Calculator Features:</h5>
                <ol style={{ marginBottom: "20px", paddingLeft: "20px" }}>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>1.</span> Input course
                    details and grades effortlessly.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>2.</span> Calculate
                    weighted GPAs for varying credit hours.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>3.</span> Get
                    comprehensive GPA results and course breakdowns.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>4.</span> Track
                    academic performance across semesters.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>5.</span> Set target
                    GPAs and receive guidance
                  </li>
                </ol>
                <p>Unlock your academic potential with ease!</p>
              </div>
            </div>
            <div className={Style.featureCard}>
              <div className={Style.featureCardContent}>
                <h5>CGPA Calculator Features:</h5>
                <ol style={{ marginBottom: "20px", paddingLeft: "20px" }}>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>1.</span> Input GPA and
                    credits for multiple semesters.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>2.</span> Calculate
                    accurate cumulative GPAs effortlessly.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>3.</span> Visualize
                    academic progress with charts and graphs.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>4.</span> Set CGPA
                    goals and track your trajectory.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>5.</span> Customize
                    semester weightages as per your needs.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>6.</span> Get
                    personalized recommendations for academic planning.
                  </li>
                </ol>
                <p>
                  Elevate your academic journey with comprehensive CGPA
                  insights!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.feedbackSection}>
          <div className={Style.feedbackHeader}>
            The Easy Utility Tools Used and Loved by Millions Worldwide!
          </div>
          <div className={Style.feedbackContainer}>
            <div className={Style.feedbackCard}>
              <div className={Style.feedbackCardContent}>
                <div className={Style.feedbackText}>
                  "Easy Utility tools is your one-stop solution for storing and managing text snippets online. Enjoy all the tools you need to stay organized and efficient with your work while on the go!"
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
