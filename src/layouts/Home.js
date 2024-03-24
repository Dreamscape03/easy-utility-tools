import React from "react";
import Style from "./Home.module.css";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { CiShare2 } from "react-icons/ci";
import OtpInput from "react-otp-input";
import { FaFacebook, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Footer } from "../partial/Footer";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
export const Home = () => {
  const [key, setKey] = useState("share");
  const [showRetrieveModal, setShowRetrieveModal] = useState(false);
  const [showCopiedTextModal, setShowCopiedTextModal] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [inputId, setInputId] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [inputText, setInputText] = useState("");
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
    toast.success("ID has been copied");
  };

  const handleRetrieveButtonClick = async () => {
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
      if (response.status == 404) {
        toast.dismiss();
        toast.error("Invalid retrieval ID");
        return;
      }
      toast.dismiss();
      toast.success("Text retrieved");
      setCopiedText(response.data.cache_values);
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error("Error retrieving text");
    }
    closeModal();
    setShowCopiedTextModal(true);
  };

  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(copiedText).then(() => {
      setShowCopiedTextModal(true);
    });
    toast.success("Text has been copied");
  };

  const handleOtpChange = (otp) => {
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
      <div className={Style.homeContainer}>
        <div className={Style.headerContainer}>
          <div className={Style.headerText}>Online Clipboard</div>
          <div className={Style.shareBtnContainer}>
            <button className={Style.shareBtn}>
              <CiShare2 style={{ fontSize: "1rem" }} />
              <span style={{ fontSize: "1rem" }}>Share</span>
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <div className={Style.subHeaderText}>
              Online clipboard is an utility tool which helps you to share the
              text in an easy way to your mates. The tool is intended to help
              students, working professionals, business owners and others to
              share their texts across. Not only this, we also need this tool
              when we have to share our texts between our different devices. It
              is a simple tool to say the least, but it will help us in
              different places.Below, we provide an in-depth look at the
              features, benefits, and frequently asked questions (FAQs) about
              our innovative tool.
            </div>
            <div className={Style.clipboardContainer}>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 p-1"
              >
                <Tab eventKey="share" title="Share">
                  <div className="d-flex flex-column">
                    <textarea
                      rows={12}
                      placeholder="Type or Paste Text here"
                      className={Style.textarea}
                      value={inputText}
                      onChange={handleInputTextChange}
                    ></textarea>
                    <div className={Style.clipboardBottomContainer}>
                      <div className={Style.labelContainer}>
                        <label className={Style.inputTextLabel}>
                          Erase the clipboard contents automatically after
                          viewing them once.
                        </label>
                        <input
                          checked
                          type="checkbox"
                          className={Style.checkbox}
                        />
                      </div>
                      <button
                        onClick={handleSendToClipboard}
                        className={Style.shareClipboardBtn}
                      >
                        SEND TO ONLINE CLIPBOARD
                      </button>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="retrieve" title="Retrieve">
                  <div className={Style.clipboardRetrieveContainer}>
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

                    <button
                      onClick={handleRetrieveButtonClick}
                      className={Style.retrieveClipboardBtn}
                    >
                      RETRIEVE CLIPBOARD
                    </button>
                  </div>
                  <Modal
                    show={showRetrieveModal}
                    onHide={handleCloseRetrieveModal}
                    dialogClassName="custom-modal"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Retrieve ID: {inputId}</Modal.Title>
                      {/* <i
                        className="fas fa-times close-icon"
                        onClick={handleCloseRetrieveModal}
                      ></i> */}
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
                        value={
                          copiedText ? copiedText : "No text has been copied"
                        }
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
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className={Style.verticalAdsContainer}>
            {/* <div className={Style.verticalAds}>Ads</div> */}
          </div>
        </div>
        {/* <div className={Style.horizontalAdsContainer}></div> */}
        <div className={Style.statsContainer}>
          <div className={Style.statsCardContainer}>
            <div className={Style.statsCard}>
              <div className={Style.statsCardHeaderText}>620K+</div>
              <div className={Style.statsCardSubHeaderText}>
                users created clipboard
              </div>
            </div>
            <div className={Style.statsCard}>
              <div className={Style.statsCardHeaderText}>6M+</div>
              <div className={Style.statsCardSubHeaderText}>
                users viewed clipboard
              </div>
            </div>
            <div className={Style.statsCard}>
              <div className={Style.statsCardHeaderText}>170K+</div>
              <div className={Style.statsCardSubHeaderText}>
                users used live clipboard
              </div>
            </div>
          </div>
          <div className={Style.statsBottomText}>
            *Stats based on the last audit conducted in January 2024
          </div>
        </div>
        <div className="d-flex justify-content-between gap-2">
          <div className={Style.contentContainer}>
            <iframe
              class="aspect-video w-full"
              src="https://www.youtube.com/embed/AqzbYdfzQVE"
              title="Best Online Clipboard - How to use?"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen=""
            ></iframe>
            <div
              style={{
                marginTop: "1rem",
              }}
            >
              <h2
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  columnGap: "0.25rem",
                }}
              >
                <FaHandPointRight /> Steps involved in using this tool
              </h2>
              <ol style={{ marginBottom: "20px" }}>
                <li>
                  Search OnlineClipboard.org in google or Directly type the URL
                  in the URL Box of any browser.
                </li>
                <li>
                  Just paste the text or write on the box given on the screen.
                </li>
                <li>
                  Click on the button “Send text to Clipboard’ and save the
                  retrieval id shown there.
                </li>
                <li>
                  For retrieving your text, click on the retrieve option and
                  paste or write the retrieval ID and then click on the Retrieve
                  text Button.
                </li>
              </ol>

              <h2
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  columnGap: "0.25rem",
                }}
              >
                {" "}
                <FaHandPointRight /> Features of this tool
              </h2>
              <ul style={{ marginBottom: "20px" }}>
                <li>
                  <strong>Simplified Information Management:</strong> Our online
                  clipboard helps you to organise and access texts efficiently.
                  Whether you want to share important links, articles or any
                  type of text, our platform provides a centralised hub for
                  managing a variety of content types. You can just write or
                  paste the texts and click on the send text to clipboard button
                  and then for retrieval just retrieve texts through retrieval
                  ID.
                </li>
                <li>
                  <strong>Seamless Collaboration:</strong> Collaboration is made
                  seamless with our online clipboard. You can share specific
                  content with colleagues, clients, or collaborators, fostering
                  real-time collaboration and feedback.
                </li>
                <li>
                  <strong>Cross-Platform Accessibility:</strong> Online
                  clipboard is designed for cross-platform accessibility,
                  allowing you to access your data from any device with an
                  internet connection. Whether working on a desktop computer,
                  laptop, tablet, or smartphone, you can seamlessly sync their
                  clipboard content across devices, ensuring continuity and
                  flexibility in their work environment.
                </li>
                <li>
                  <strong>Enhanced Privacy and Security:</strong> Security and
                  privacy are important in today's digital world. Online
                  clipboard is deployed with advanced encryption protocols and
                  secure access controls to safeguard your data. So, there is no
                  need to worry about the privacy of your texts shared by using
                  this Online Clipboard. Online Clipboard also doesn't save your
                  texts in the database for more than a day and no one else can
                  view your text without the retrieval ID. We are strongly
                  serious about the privacy of the texts shared with this tool
                  and are trying to give you a secure and seamless experience.
                </li>
              </ul>

              <h2
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  columnGap: "0.25rem",
                }}
              >
                <FaHandPointRight /> Frequently Asked Questions (FAQs)
              </h2>
              <ol style={{ marginBottom: "20px" }}>
                <li>
                  <strong>Is my data secure on your online clipboard?</strong>
                  <br />
                  Obviously! We ensure data security and privacy our top
                  priority. By using sophisticated encryption techniques, we
                  protect the information of the user on our platform.
                </li>
                <li>
                  <strong>
                    Can I collaborate with others using the online clipboard?
                  </strong>
                  <br />
                  Collaboration has been designed as one of the important
                  features of our online clipboard. Through this function, text
                  can be shared with other users, thereby facilitating
                  coordination and seamless teamwork among colleagues.
                </li>
                <li>
                  <strong>How does cross-platform accessibility work?</strong>
                  <br />
                  The online clipboard has a function to synchronise data
                  between different devices, thus making it possible to obtain
                  information through any gadget that is connected to the
                  Internet. If changes are made on one device, they will be
                  reflected in updates on other devices as well.
                </li>
                <li>
                  <strong>
                    Can I store an infinite amount of content in the online
                    clipboard?
                  </strong>
                  <br />
                  Our platform has been designed to accommodate an enormous
                  storage capacity, enabling you to share a considerable amount
                  of text using this system. However, we cannot keep your data
                  on our server for longer than 24 hours, as it would lead to an
                  overwhelming volume of information and strain our resources.
                </li>
              </ol>

              <h2
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  columnGap: "0.25rem",
                }}
              >
                {" "}
                <FaHandPointRight />
                <span> Conclusion</span>
              </h2>
              <p style={{ marginBottom: "20px" }}>
                <ol>
                  <li>
                    If you are one person or a team of people who deal in text
                    sharing and you are looking for an effective way to manage
                    information and ensure that you collaborate with each other
                    while giving full scope to your creativity, our online
                    clipboard is a great solution. Its functionality allows
                    rapid sharing of texts with the help of features like
                    simplified access to content, seamless collaboration,
                    versatility across all platforms as well as robust security
                    mechanisms to ensure that no matter what is important data
                    should not be stolen or leaked. To inform and equip users
                    how to use our extraordinary tools, we provide answers to
                    frequently asked questions on our homepage, as well as
                    complete information about our online clipboard. Whether you
                    are a student, working person or entrepreneur, our online
                    clipboard is suitable to use to organise your data with
                    efficacy and efficiency.
                  </li>
                </ol>
              </p>
            </div>
          </div>
          <div className={Style.socialMediaContainer}>
            <div className={Style.socialIconContainer}>
              <button className={`${Style.socialIcon} ${Style.fbIcon}`}>
                <FaFacebook />
              </button>
              <button className={`${Style.socialIcon} ${Style.xIcon}`}>
                <FaSquareXTwitter />
              </button>
              <button className={`${Style.socialIcon} ${Style.whatsappIcon}`}>
                <FaWhatsappSquare />
              </button>
              <button className={`${Style.socialIcon} ${Style.telegramIcon}`}>
                <FaTelegram />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
