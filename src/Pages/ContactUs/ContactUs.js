import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import WhatsAppIcon from "../../Images/whatsApp.png";
import CheckIcon from "@mui/icons-material/Check";
import { useTranslation } from "react-i18next";

export default function ContactUs(props) {
  const { t } = useTranslation();
  const form = useRef();
  let lng = props.lang;
  const sendEmail = () => {
    // e.preventDefault();

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

  const initialValues = { fullName: "", email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      sendEmail();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullName = t("err_name_w1");
    }
    if (!values.email) {
      errors.email = t("err_mail_w1");
    } else if (!regex.test(values.email)) {
      errors.email = t("err_mail_w2");
    }
    if (!values.phone) {
      errors.phone = t("err_phone_w1");
    }
    if (values.phone.length < 4) {
      errors.phone = t("err_phone_w2");
    }

    return errors;
  };

  return (
    <div>
      <div
        className={
          lng === "ar" ? "ContactUsContainerRight" : "ContactUsContainer"
        }
      >
        <p className="heading">
          <span>{t("contactus_p1")}</span> {t("contactus_p2")}
        </p>
        <p className="headingInfoC">{t("contact_p1")}</p>
        <ol className="orderList">
          <li className={lng === "ar" ? "contactRight" : "contact"}>
            <span className="headingInfo3">{t("phone_p1")} :</span>{" "}
            {t("phone_numm")}
          </li>
          <br />
          <li className={lng === "ar" ? "contactRight" : "contact"}>
            <span className="headingInfo3">{t("email_w")}:</span>{" "}
            contact@ihtps.com
          </li>
          <br />
          <li className={lng === "ar" ? "contactRight" : "contact"}>
            <span className="headingInfo3">{t("whatsapp2")}: </span> +971 50 251
            1764 Or
            <span> {t("contact_p2")} -- > </span>
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
          <form ref={form} onSubmit={handleSubmit} className="formContainer">
            <p className="FormWord">{t("contact_p3")}</p>
            <input
              placeholder={t("fullname_p1")}
              type="fullName"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
              className="inputNormal"
            />
            <p className="errors">{formErrors.fullName}</p>

            <input
              placeholder="E-mail"
              type="email"
              name="email"
              className="inputNormal"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="errors">{formErrors.email}</p>

            <input
              placeholder={t("phone_p1")}
              type="number"
              name="phone"
              className="inputNormal"
              id="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            <p className="errors">{formErrors.phone}</p>
            <label className="label">{t("message_p1")}</label>
            <textarea name="message" className="inputMessg" />
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div>
                <p className="success">
                  {t("sentSuccess_p1")} <CheckIcon className="checkIcon" />
                </p>
              </div>
            ) : (
              <input
                type="submit"
                value={t("submit_p1")}
                className="sendButton"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
