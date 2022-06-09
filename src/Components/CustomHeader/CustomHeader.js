import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import "./CustomHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import en from "../../Images/en.png";
import fr from "../../Images/fr.png";
import strings from "../../Translation/Translation";

export default function CustomHeader({ onChangeEnglish, onChangeFrench }) {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      {" "}
      <div>
        <div className="HeaderSlider">
          {/* <Slider className="HeaderSlider" /> */}
          <div className="onHeader">
            <div className="logo">
              <img src={Logo} className="LogoPic" />
            </div>
            <div className="TabBarContainer">
              <button
                className="tab-btn"
                onClick={() => setShowLinks(!showLinks)}
              >
                <FontAwesomeIcon icon={faBars} className="tab-bar" />
              </button>

              <div className="links" id={showLinks ? "hidden" : ""}>
                <Link
                  className="link-underheader hover-underline-animation1"
                  to="/"
                >
                  HOME
                </Link>
                <Link
                  className="link-underheader hover-underline-animation2"
                  to="/aboutUs"
                >
                  ABOUT US
                </Link>

                <Link
                  className="link-underheader hover-underline-animation3"
                  to="/ourbusiness"
                >
                  OUR BUSINESS
                </Link>

                <Link
                  className="link-underheader hover-underline-animation4"
                  to="/turnkey-projects"
                >
                  TURNKEY PROJECTS
                </Link>


                <div className="DropDown">
                <Link
                  className="popUp link-underheader hover-underline-animation5"
                  to="/business-opportunities"
                >
                  BUSINESS OPPORTUNITIES
                </Link>
                <Link to="/contact-us" className="popOn">USED LINES</Link>
                </div>



                <Link
                  className="link-underheader hover-underline-animation6"
                  to="/contact-us"
                >
                  CONTACT
                </Link>
                {/* <div className="LangContainer">
                  <button className="langButton" onClick={onChangeFrench}>
                    <img src={fr} className="enIcon" alt="enIcon" />
                  </button>
                  <button className="langButton" onClick={onChangeEnglish}>
                    <img src={en} className="enIcon" alt="enIcon" />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
