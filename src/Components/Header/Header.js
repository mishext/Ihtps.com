import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo2.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Slider from "../SliderComponent/Slider";
import en from "../../Images/en.png";
import fr from "../../Images/fr.png";
import strings from "../../Translation/Translation";
import { setLanguage } from "react-localization";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);


  // strings.setLanguage("en");

  const [englsih, setEnglish] = useState();
  const [french, setFrench] = useState();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  // function setToEnglish() {
  //   strings.setLanguage("en");
  //   setEnglish({});
  // }
  // function setToFrench() {
  //   strings.setLanguage("fr");
  //   setFrench({});
  // }
  function _onSetLanguageToEnglish() {
    strings.setLanguage('en');
   setEnglish(englsih);
   forceUpdate();

  }
  function _onSetLanguageToFrench() {
    strings.setLanguage('fr');
    setFrench(french);
    forceUpdate();
  }

  return (
    <div>
      <div className="HeaderSlider">
        {/* <Slider className="HeaderSlider" /> */}
        <div className="onHeader">
          <div className="logo">
            <a href="./">
            <img src={Logo} className="LogoPic" alt="Logo"/>
            </a>
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
                {/* <a className="drop">OUR BUSINESS</a> */}
                {/* <ul className="DropDownMenu">
                  <li>
                    <a href="#">ONEONEONE</a>
                  </li>
                  <li>
                    <a href="#">ONEONEONE</a>
                  </li>
                  <li>
                    <a href="#">ONEONEONE</a>
                  </li>
                  <li>
                    <a href="#">ONEONEONE</a>
                  </li>
                </ul> */}
              </Link>

              <Link
                className="link-underheader hover-underline-animation4"
                to="/turnkey-projects"
              >
                TURNKEY PROJECTS
              </Link>
              <Link
                className="link-underheader hover-underline-animation5"
                to="/business-opportunities"
              >
                BUSINESS OPPORTUNITIES
              </Link>
              <Link
                className="link-underheader hover-underline-animation6"
                to="/machines"
              >
                CONTACT
              </Link>
              {/* <div className="langContainer">
                <button
                  className="langButton"
                  onClick={() => _onSetLanguageToFrench()}
                >
                  <img src={fr} className="enIcon" alt="enIcon" />
                </button>
                <button
                  className="langButton"
                  onClick={() => _onSetLanguageToEnglish()}
                >
                  <img src={en} className="enIcon" alt="enIcon" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
