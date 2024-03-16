import React, { useState } from "react";
import Navbar from "../partial/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OtpInput from "react-otp-input";
import "./clipboard.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Clipboard() {
  const [showRetrieveModal, setShowRetrieveModal] = useState(false);
  const [showCopiedTextModal, setShowCopiedTextModal] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [inputId, setInputId] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [inputText, setInputText] = useState("");
  // const handleRetrieve = () => {
  //   setShowRetrieveModal(true);
  // };

  // const handleRetrieveConfirmation = () => {
  //   setInputId("1234");
  //   setShowRetrieveModal(false);
  //   setShowModal(true);
  // };

  const handleCloseRetrieveModal = () => {
    setShowRetrieveModal(false);
    closeModal();
  };

  const handleCloseCopiedTextModal = () => {
    setShowCopiedTextModal(false);
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
    setOtpValue("");
  };

  const handleCopyRetrieveId = () => {
    navigator.clipboard.writeText(inputId).then(() => {
      setShowRetrieveModal(false);
      setInputId("");
      setInputText("");
    });
    // alert("ID has been copied");
    toast.success("ID has been copied");
  };

  const handleRetrieveButtonClick = async() => {
    if (otpValue.length < 4) {
      // alert("Please enter the 4 digit retrieval ID");
      toast.error("Please enter the 4 digit retrieval ID");
      return;
    }
    // alert("Retrieving text");
    toast.loading("Retrieving text");
    try {
      const response = await axios.get(
        `https://wip7mhydwhcixryqgshs6em4te0nxrks.lambda-url.us-west-2.on.aws/get_cache/online-clipboard/${otpValue}`
      );
      response.then((data) => {
        toast.dismiss();
        toast.success("Text retrieved");
        setCopiedText(data.data.cache_values);
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.dismiss();
      // alert("Error retrieving text");
      toast.error("Error retrieving text");
    }
    closeModal();
    setShowCopiedTextModal(true);
  };

  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(copiedText).then(() => {
      setShowCopiedTextModal(true);
    });
    // alert("Text has been copied");
    toast.success("Text has been copied");
  };

  const handleOtpChange = (otp) => {
    // accept only numbers
    // if (isNaN(otp)){
    //   console.log("Invalid input");
    //   return;
    // }
    setOtpValue(otp);
  };
  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSendToClipboard = async () => {
    console.log("Send to clipboard");
    if (inputText.length < 1) {
      // alert("Please enter text to send to clipboard");
      toast.error("Please enter text to send to clipboard");
      return;
    }
    toast.loading("Sending text to clipboard");
    let id = Math.floor(1000 + Math.random() * 9000);
    setInputId(id);
    try {
      const response = await axios.post(
        "https://23up4yfe42aq3iaggfo726rzqu0wntdo.lambda-url.us-west-2.on.aws/create_cache",
        {
          cache_id: id,
          game_id: "online-clipboard",
          cache_values: inputText,
          expiry: 1000,
        }
      );
      console.log(response.data);
      if (response.status == 200) {
        toast.dismiss();
        toast.success("Text sent to clipboard");
        setShowRetrieveModal(true);
      }
    } catch (error) {
      console.log(error);
      // alert("Error sending text to clipboard");
      toast.dismiss();
      toast.error("Error sending text to clipboard");
    }
  };
  return (
    <div>
      <Toaster />
      <div className="clipboard-container">
        <Navbar />
        <div className="clipboard-body flex cols-2 gap-4 justify-center px-2 py-2">
          <div className="clipboard-input">
            <textarea
              className="textarea-style"
              name="clipboard-input"
              id="clipboard-input"
              placeholder="Enter text here"
              cols={30}
              rows={10}
              value={inputText}
              onChange={handleInputTextChange}
            ></textarea>
            <div className="clipboard-button-container flex flex-col md:flex-row gap-2 justify-between">
              <Button
                className="button"
                variant="primary"
                onClick={handleSendToClipboard}
              >
                <i className="fas fa-clipboard"></i> Send text to clipboard
              </Button>
              <div className="clipboard-retrieve-id">
                <Button
                  className="button"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  <i className="fas fa-paste"></i> Retrieve text from clipboard
                </Button>
              </div>
              <Modal
                show={showRetrieveModal}
                onHide={handleCloseRetrieveModal}
                dialogClassName="custom-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Retrieve ID: {inputId}</Modal.Title>
                  <i
                    className="fas fa-times close-icon"
                    onClick={handleCloseRetrieveModal}
                  ></i>
                </Modal.Header>
                <Modal.Body>
                  Copy the text and retrieve from the clipboard
                </Modal.Body>
                <Modal.Footer>
                  <div className="copy-retrieve-id">
                    <Button
                      className="button"
                      variant="primary"
                      onClick={handleCopyRetrieveId}
                    >
                      <i className="fas fa-copy"></i> Copy Retrieve ID
                    </Button>
                  </div>
                  {/* <Button variant="secondary" onClick={handleCloseRetrieveModal}>
                  Close
                </Button> */}
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div>
            <Modal
              show={showModal}
              onHide={closeModal}
              dialogClassName="custom-modal"
            >
              <Modal.Header closeButton>
                <Modal.Title>Enter Retrieval ID</Modal.Title>
                <i className="fas fa-times close-icon" onClick={closeModal}></i>
              </Modal.Header>
              <Modal.Body className="otp-input-container">
                <OtpInput
                  value={otpValue}
                  onChange={handleOtpChange}

                  numInputs={4}
                  separator={<span> </span>}
                  inputStyle={{ width: "3rem", height: "3rem" }}
                  inputType="tel"
                  
                  renderInput={(inputProps, index) => (
                    <input
                      {...inputProps}
                      key={index}
                      style={{
                        width: "3rem",
                        height: "3rem",
                        fontSize: "1.5rem",
                        margin: "0 1rem",
                        textAlign: "center",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    />
                  )}
                />
              </Modal.Body>
              <Modal.Footer className="py-2">
                <Button
                  className="button"
                  variant="secondary"
                  onClick={handleRetrieveButtonClick}
                >
                  Retrieve
                </Button>
                {/* <Button variant="secondary" onClick={closeModal}>
                Close
              </Button> */}
              </Modal.Footer>
            </Modal>
            <Modal
              className="custom-modal"
              show={showCopiedTextModal}
              onHide={handleCloseCopiedTextModal}
            >
              <Modal.Header closeButton>
                <Modal.Title>Copied Text</Modal.Title>
                <i
                  className="fas fa-times close-icon"
                  onClick={handleCloseCopiedTextModal}
                ></i>
              </Modal.Header>
              <Modal.Body>
                <textarea
                  className="h-100 form-control"
                  rows="5"
                  value={copiedText ? copiedText : "No text has been copied"}
                  readOnly
                ></textarea>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="button"
                  variant="secondary"
                  onClick={handleCopyButtonClick}
                >
                  <i className="fas fa-copy"></i> Copy Text
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clipboard;
