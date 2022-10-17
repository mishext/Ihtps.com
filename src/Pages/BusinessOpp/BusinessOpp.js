import React from "react";
import "./BusinessOpp.css";
import { useTranslation } from "react-i18next";

export default function BusinessOpp(props) {
  const { t } = useTranslation();
  let lng = props.lang;
  return (
    <div>
      {/* <CustomHeader /> */}
      <div
        className={
          lng === "ar" ? "BusinessOppContainerRight" : "BusinessOppContainer"
        }
      >
        <p className="heading headingWord">
          <span>{t("businessOp_w2")}</span> {t("businessOp_w3")}
        </p>
        <p className="headingInfoO">{t("businessOpp_p1")}</p>
        <p className="headingInfoO">{t("businessOpp_p2")}</p>
        <p className="headingInfoO">{t("businessOpp_p3")}</p>
        <p className="headingInfo">{t("businessOpp_p4")}</p>
        <ol className="orderList">
          <p>{t("businessOpp_p5")}</p>
          <li>{t("businessOpp_p6")}</li>
          <li>{t("businessOpp_p7_7")}</li>
          <li>{t("businessOpp_p7")}</li>
          <li>{t("businessOpp_p8")}</li>
          <li>{t("businessOpp_p9")}</li>
        </ol>
        <p className="headingInfoO">{t("businessOpp_p10")}</p>

        <ol className="orderList">
          <p>{t("businessOpp_p11")}</p>
          <li>{t("businessOpp_p12")}</li>
          <li>{t("businessOpp_p13")}</li>
          <li>{t("businessOpp_p14")}</li>
          <li>{t("businessOpp_p15")}</li>
          <li>{t("businessOpp_p16")}</li>
        </ol>
        <ol className="orderList">
          <p>{t("businessOpp_p17")}</p>
          <li>{t("businessOpp_p18")}</li>
          <li>{t("businessOpp_p19")}</li>
        </ol>
        <ol className="orderList">
          <p>{t("businessOpp_p20")}</p>
          <li>{t("businessOpp_p21")}</li>
          <li>{t("businessOpp_p22")}</li>
        </ol>
        <ol className="orderList">
          <p>{t("businessOpp_p23")}</p>
          <li>{t("businessOpp_p24")}</li>
          <li>{t("businessOpp_p25")}</li>
        </ol>

        <p className="headingInfoOBig">{t("businessOpp_p26")}</p>
      </div>
    </div>
  );
}
