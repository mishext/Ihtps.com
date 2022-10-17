import React from "react";
import "./Footer.css";
import Logo from "../../Images/Last-logo.png";
import WhatsAppIcon from "../../Images/whatsapp-icon.png";
import { useTranslation } from "react-i18next";

export default function Footer(props) {
  const { t } = useTranslation();

  let lng = props.lang;
  return (
    <div className="Container">
      <a href="https://wa.me/+971502511764" className="whatsApp-Icon">
        <img
          src={WhatsAppIcon}
          alt="whatsapp-Icon"
          className="whatsApp-Image"
        />
      </a>
      <div className="footerContainer">
        <img src={Logo} className="footerLogo" alt="footer-logo" />

        <div>
          <div className="footerInfo">
            <div className="footerPhone">
              <p className="phone">{t("phone_c_w1")}</p>
              <p>+971 45 126 872</p>
              <p>+971 50 251 1764</p>
            </div>

            <div className="footerEmail">
              <p className="email">{t("email_w")}</p>
              <p>contact@ihtps.com</p>
              <p>sales@ihtps.com</p>
            </div>
          </div>
          <div
            className={lng === "ar" ? "footerAddressRight" : "footerAddress"}
          >
            <p>{t("address")}:&nbsp;</p>
            <p className="address">{t("address_1")}</p>
          </div>
        </div>
      </div>
      <p className="copyRight">
        Copyright 2022 © <strong>IHTPS</strong>
      </p>
    </div>
  );
}
