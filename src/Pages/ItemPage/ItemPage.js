import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import emailjs from "@emailjs/browser";
import "./ItemPage.css";
import { useLocation } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CheckIcon from "@mui/icons-material/Check";
import { useTranslation } from "react-i18next";

export default function ItemPage(props) {
  const { t } = useTranslation();
  const { state } = useLocation();

  // const handleDragStart = (e) => e.preventDefault();

  const form = useRef();

  const sendEmail = (e) => {
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

  const initialValues = { firstName: "", lastName: "", email: "", phone: "" };
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
    window.scrollTo(0, 0);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);

      sendEmail();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = t("firstName_err");
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
  let lng = props.lang;
  return (
    <div className="itemPageContainer">
      <p className="productName">{state.name}</p>

      <div className="infoContainer">
        <div className="ImageContainer">
          <Slider infinite mouseTracking touchTracking items>
            {state.img &&
              state.img.map((e, key) => {
                return (
                  <img
                    images={e}
                    alt={e.name}
                    // onMouseEnter={() => setOpenImage(true)}
                    // onMouseLeave={() => setOpenImage(false)}
                    className="productImage"
                    src={e}
                    // onDragStart={handleDragStart}
                    // role="presentation"
                  />
                );
              })}
          </Slider>
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className={
            lng === "ar" ? "FormSlideContainerRight" : "FormSlideContainer"
          }
        >
          <p className="FormWord1">{t("contact_info")}:</p>
          {/* <label className="label">Name</label> */}
          <div className="insideForm">
            <div>
              <input
                placeholder={t("firstName")}
                type="firstName"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                className="inputNormal1"
              />
              <p className="errors1">{formErrors.firstName}</p>
            </div>
            <div>
              <input
                placeholder={t("lastName")}
                type="lastName"
                name="lastName"
                className="inputNormal1"
              />
            </div>
          </div>
          <div className="insideForm">
            <div>
              <input
                placeholder="Your E-mail"
                type="email"
                name="email"
                className="inputNormal1"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className="errors1">{formErrors.email}</p>
            </div>
            <div>
              <input
                placeholder={t("phone_p1")}
                type="number"
                name="phone"
                className="inputNormal1"
                id="phone"
                value={formValues.phone}
                onChange={handleChange}
              />
              <p className="errors1">{formErrors.phone}</p>
            </div>
          </div>
          <label className="FormWord2">{t("your_request")}:</label>
          <textarea
            placeholder={t("message_p1")}
            name="message"
            className="inputMessg1"
          />
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
      <div className="descContainer">
        <p className="descWord">{t("desc_w1")}</p>
        {state.details.map((d, id) => {
          return (
            <div className="descSmallContainer">
              <p className="desc-p1">{d.p1}</p>
              <p className="desc-p2">{d.p2}</p>
              <p className="desc-p3">{d.p3}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
