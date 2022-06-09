import React from "react";
import "./ContactUs.css";
import WhatsAppIcon from "../../Images/whatsApp.png";

export default function ContactUs() {
  return (
    <div>
      {/* <CustomHeader /> */}
      <div className="ContactUsContainer">
        <p className="heading">
          <span>CONTACT</span> US
        </p>
        <p className="headingInfo">You can contact us in this ways</p>
        <ol className="orderList">
          <li className="contact">
            <span className="headingInfo1">TEL:</span> +971 45 126 872
          </li>
          <br />
          <li className="contact">
            <span className="headingInfo1">Email:</span> contact@ihtps.com
          </li>
          <br />
          <li className="contact">
            <span className="headingInfo1">WhatsApp: </span> +971 50 251 1764 Or
            <span> Just Click Here -- ></span>
            <a href="https://wa.me/+971502511764">
              <img
                src={WhatsAppIcon}
                className="whatsAppIcon"
                alt="whatsApp-Icon"
              />
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
