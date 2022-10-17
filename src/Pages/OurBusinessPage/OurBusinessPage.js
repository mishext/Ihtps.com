import React from "react";
import "./OurBusinessPage.css";
import BGPhoto from "../../Images/service4.jpg";
import { useTranslation } from "react-i18next";

export default function OurBusinessPage(props) {
  const { t } = useTranslation();
  let lng = props.lang;
  return (
    <div>
      <div
        className={
          lng === "ar" ? "ourBusinessContainerRight" : "ourBusinessContainer"
        }
      >
        <p className={lng === "ar" ? "headingRight" : "heading"}>
          <span>{t("ourbusiness_w2")}</span> {t("ourbusiness_w3")}
        </p>
        <div className="firstRowBusiness">
          <div>
            <p>{t("our_business_p1")}</p>
            <p>{t("our_business_p2")}</p>
            <p>{t("our_business_p3")}</p>
            <p>{t("our_business_p4")}</p>
          </div>
          <img
            src={BGPhoto}
            className={lng === "ar" ? "firstRowImageRight" : "firstRowImage"}
            alt="Our-Business-Image"
          />
        </div>

        <p className="headingInfoO">{t("our_business_p5")}</p>
        <p className="headingInfoO">{t("our_business_p6")}</p>
        <p className="headingInfoO">{t("our_business_p7")}</p>
        <p className="headingInfoO">{t("our_business_p8")}</p>
        <p className="headingInfoO">{t("our_business_p9")}</p>
        <p className="headingInfoO">{t("our_business_p10")}</p>
        <p className="headingInfoOBig">{t("our_business_p11")}</p>
      </div>
    </div>
  );
}
