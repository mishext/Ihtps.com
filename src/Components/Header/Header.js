import React, { useState, useReducer, Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/Last-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import UAEFlag from "../../Images/uae-flag.png";

export default function Header(props) {
  const { i18n } = useTranslation();

  const { t } = useTranslation();

  const [showLinks, setShowLinks] = useState(false);
  const [dropDown, setDropdown] = useState(true);
  const options = [
    {
      label: "ENGLISH",
      value: "en",
    },
    {
      label: "FRENCH",
      value: "fr",
    },
    {
      label: "RUSSIAN",
      value: "ru",
    },
    {
      label: "ARABIC",
      value: "ar",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // strings.setLanguage("en");
  let lng = props.lang;
  const handleChange = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div>
      <div className="HeaderSlider">
        {/* <Slider className="HeaderSlider" /> */}
        <div className="onHeader">
          <img src={UAEFlag} className="uaeFlag" alt="uae-flag" />

          <div className="logo">
            <a href="./">
              <img src={Logo} className="LogoPic" alt="Logo" />
            </a>
          </div>
          <div className="TabBarContainer">
            <button
              className="tab-btn"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FontAwesomeIcon icon={faBars} className="tab-bar" />
            </button>

            <div
              className={lng === "ar" ? "linksRight" : "links"}
              // className="links"
              id={showLinks ? "hidden" : ""}
            >
              <Link
                onClick={() => setShowLinks(!showLinks)}
                className="link-underheader hover-underline-animation1"
                to="/"
              >
                {t("home")}
              </Link>
              <Link
                onClick={() => setShowLinks(!showLinks)}
                className="link-underheader hover-underline-animation2"
                to="/aboutUs"
              >
                {t("aboutus_w1")}
              </Link>

              <Link
                onClick={() => setShowLinks(!showLinks)}
                className="link-underheader hover-underline-animation3"
                to="/ourbusiness"
              >
                {t("ourbusiness_w1")}
                {/* <a className="drop">OUR BUSINESS</a> */}
              </Link>

              <Link
                onClick={() => setShowLinks(!showLinks)}
                className="link-underheader hover-underline-animation4"
                to="/turnkey-projects"
              >
                {t("turnkey_w1")}
              </Link>

              <Link
                onClick={() => setShowLinks(!showLinks)}
                className="link-underheader hover-underline-animation5 flux1 BOwidth"
                to="/business-opportunities"
                onMouseEnter={() => setDropdown(false)}
                onMouseLeave={() => setDropdown(true)}
              >
                {t("businessOp_w1")}
                <div
                  // className={
                  //   dropDown ? "DropDownMenu-clicked " : "DropDownMenu"
                  // }
                  className="DropDownMenu"
                >
                  <Link to="/UsedLines" className="link-dropDown neon">
                    <p>{t("usedLines_w1")}</p>
                    <p>{t("usedLines_w2")}</p>
                  </Link>
                </div>
              </Link>

              <Link
                onClick={() => setShowLinks(!showLinks)}
                className="link-underheader hover-underline-animation6 hiddenLink flux2"
                to="/UsedLines"
              >
                <p className="afterhiddenp">{t("usedLines_w1")}</p>
                <p className="afterhiddenp">{t("usedLines_w2")}</p>
              </Link>
              <Link
                onClick={() => setShowLinks(!showLinks)}
                className="link-underheader hover-underline-animation6"
                to="/contact-us"
              >
                {t("contact_w600")}
              </Link>
              {/* <Select
                placeholder="Language"
                styles={customStyles}
                components={{
                  SingleValue: IconSingleValue,
                  Option: IconOption,
                }}
                options={console.log(options)}
                value={console.log(options.value)}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                data={options}
              /> */}

              <div className="select">
                <select
                  value={i18n.language}
                  onChange={props.onChange}
                  className="select-option"
                >
                  {options.map((item) => {
                    return (
                      <option
                        className="select-option1"
                        value={item.value}
                        onClick={() => setShowLinks(false)}
                      >
                        {item.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
