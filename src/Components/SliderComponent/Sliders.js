import React, { useContext, useEffect, AppContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovingComponent from "react-moving-text";
import MovingText from "react-moving-text";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import "./Sliderssss.css";
const Pictures = [
  {
    src: require("../../Images/bg111.jpg"),
  },
  { src: require("../../Images/test5.jpg") },
  { src: require("../../Images/test2.jpg") },
  { src: require("../../Images/bg4.jpg") },
  { src: require("../../Images/test1.jpg") },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className="Arrowss" onClick={onClick} />;
}

export default function Sliders(props) {
  let lng = props.lang;
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Slider">
      <Slider {...settings} className="SliderContainer">
        <div className="displaySlider">
          <img src={require("../../Images/bg111.jpg")} className="SliderImg" />
        </div>
        <div className="displaySlider">
          <img src={require("../../Images/test2.jpg")} className="SliderImg" />
        </div>
        <div className="displaySlider">
          <img src={require("../../Images/test5.jpg")} className="SliderImg" />
        </div>
        <div className="displaySlider">
          <img src={require("../../Images/bg1.jpg")} className="SliderImg" />
        </div>
        <div className="displaySlider">
          <img src={require("../../Images/bg3.jpg")} className="SliderImg" />
        </div>
        <div className="displaySlider">
          <img src={require("../../Images/bg4.jpg")} className="SliderImg" />
        </div>
      </Slider>
      <MovingComponent
        type="slideInFromLeft"
        duration="1000ms"
        delay="1s"
        direction="normal"
        timing="ease-in-out"
        iteration="1"
        fillMode="both"
        className={lng === "ar" ? "movingText2Right" : "movingText2"}
      >
        <p>
          {t("slider_p1")}
          <br />
          {t("slider_p2")}
          <br />
          {t("slider_p3")}
        </p>
        <button className="clickHereButton">
          <Link to="/ourbusiness">
            {t("slider_p4")}
            <br />
            {t("slider_p5")}
          </Link>
        </button>
      </MovingComponent>
    </div>
  );
}
