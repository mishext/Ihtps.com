import React from "react";
import "./Footer.css";
import Logo from "../../Images/Logo.png";
import Sparkles from "../SparkleInstance/Sparkle";

export default function Footer() {
  return (
    <div className="Container">
      <div className="footerContainer">
        <img src={Logo} className="footerLogo" alt="footer-logo" />
        <div className="footerInfo">
          <div className="footerPhone">
            <p className="phone">PHONE</p>
            <p>+971 45 126 872</p>
            <p>+971 50 251 1764</p>
          </div>
          <div className="footerEmail">
            <p className="email">EMAIL</p>
            <p>contact@ihtps.com</p>
            <p>sales@ihtps.com</p>
          </div>
        </div>
      </div>
      <p className="copyRight">
        Copyright 2022 © <strong>IHTPS</strong>
      </p>
    </div>
  );
}
