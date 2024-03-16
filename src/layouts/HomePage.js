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
          <h1>Free Online Clipboard: Effortless Sharing and Organization</h1>
          <div className="subheader-text">
            Welcome to Easy Utility Tools, your ultimate destination for the
            best online clipboard experience. Say goodbye to traditional
            clipboard limitations and embrace the freedom of digital sharing and
            organization with our intuitive platform
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
