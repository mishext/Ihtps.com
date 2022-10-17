import React from "react";
import "./TurnKey.css";
import { useTranslation } from "react-i18next";

export default function TurnKey(props) {
  const { t } = useTranslation();
  let lng = props.lang;

  return (
    <div className="koko">
      <div
        className={lng === "ar" ? "turnKeyContainerRight" : "turnKeyContainer"}
      >
        <p className="heading">
          <span>{t("turnkey_w2")}</span> {t("turnkey_w3")}
        </p>
        <p className="headingInfo1">{t("turnkey_p1")}</p>
        <p className="headingInfoO">{t("turnkey_p2")}</p>
        <p className="headingInfoO">{t("turnkey_p3")}</p>
        <p className="headingInfoO">{t("turnkey_p4")}</p>
        <p className="headingInfoO">{t("turnkey_p5")}</p>
        <p className="headingInfoO">{t("turnkey_p6")}</p>
        <p className="headingInfoO">{t("turnkey_p7")}</p>
        <p className="headingInfoO">{t("turnkey_p8")}</p>
        <p className="headingInfoO">{t("turnkey_p9")}</p>
        <p className="headingInfoO">{t("turnkey_p10")}</p>
        <p className="headingInfoO">{t("turnkey_p11")}</p>
        <p className="headingInfoO">{t("turnkey_p12")}</p>
        <p className="headingInfoO">{t("turnkey_p13")}</p>
        <p className="headingInfoO">{t("turnkey_p14")}</p>
        <p className="headingInfoOBig">{t("turnkey_p15")}</p>
      </div>
    </div>
  );
}
