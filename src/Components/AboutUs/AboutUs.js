import React from "react";
import AboutUsImage from "../../Images/about.png";
import "./AboutUs.css";
import { useTranslation } from "react-i18next";

function AboutUs(props) {
  const { t } = useTranslation();
  let lng = props.lang;

  return (
    <div className="AboutUsContainer">
      <div
        className={
          lng === "ar" ? "AboutUsContainerSRight" : "AboutUsContainerS"
        }
      >
        <div className="AboutUsText">
          <p className="AboutUsp1">
            <span>{t("about_w1")}</span> IHTPS
          </p>
          <p className="AboutUsp2">{t("aboutus_p1")},</p>
          <p className="AboutUsp3">{t("aboutus_p2")}</p>
        </div>
        <div className="AboutUsImageContainer">
          <img src={AboutUsImage} className="AboutUsImage" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
