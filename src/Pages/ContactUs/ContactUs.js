import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import WhatsAppIcon from "../../Images/whatsApp.png";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f701v97",
        "template_2wgkdgj",
        form.current,
        "xYHUFHTWR65s0lfxd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <div>
          <form ref={form} onSubmit={sendEmail} className="formContainer">
            <p className="FormWord">For Any inquiry, please Fill the Form</p>
            <label className="label">Name</label>
            <input type="name" name="name" className="inputNormal" />
            <label className="label">Email</label>
            <input type="email" name="email" className="inputNormal" />
            <label className="label">Phone Number</label>
            <input type="tel" name="phone" className="inputNormal" id="phone" />
            <label className="label">Message</label>
            <textarea name="message" className="inputMessg" />
            <input type="submit" value="Submit" className="sendButton" />
          </form>
        </div>
      </div>
    </div>
  );
}
