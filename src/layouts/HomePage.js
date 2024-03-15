import React from "react";
// import { useHistory } from "react-router-dom";
import Navbar from "../partial/Navbar";
import clipboardImage from "../assets/clipboard.jpg";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/Clipboard");
  };

  return (
    <div className="HomePage">
      <Navbar />
      <div className="container cols-1 mx-auto">
        <div className="header-container text-center">
          {/* <div className="header-text">Easy Utility Tools</div> */}
          <div className="subheader-text">
            Welcome to a suite of utility tools crafted to simplify your daily
            tasks. These tools are accessible worldwide, free of charge, and
            engineered for user-friendliness. They're optimized for speed and
            efficiency, ensuring seamless integration into your routine,
            wherever you are.
          </div>
        </div>
        <div className="card-container flex justify-center">
          <div className="card grid" onClick={handleCardClick}>
            <div className="card-img">
              <img
                src={clipboardImage}
                style={{ width: "150px", height: "150px" }}
                alt="Clipboard"
              />
            </div>
            <div className="card-body">
              <div className="card-title">Clipboard</div>
              <div className="card-text">
                Combine text snippets with ease using the most intuitive
                clipboard.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
