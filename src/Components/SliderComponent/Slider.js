import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MovingComponent from "react-moving-text";
import "./slider.css";

export default function Slider() {
  return (
    <div className="SliderContainer">
      <AliceCarousel
        infinite
        touchTracking
        // autoPlayStrategy="action"
        autoPlayInterval="3000"
        autoPlay={true}
        animationType="fadeout"
        animationDuration="2800"
        className="SliderImageContainer"
      >
        <div>
          <img
            src={require("../../Images/bg111.jpg")}
            className="SliderImage"
          />
          <MovingComponent
            type="slideInFromLeft"
            duration="1000ms"
            delay="1s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both"
            className="movingText2"
          >
            <p>
            Are you planning <br/>
            to start a project
              <br />in your country
            </p>
            <button className="clickHereButton"><Link to="/ourbusiness">CLICK<br/>HERE</Link></button>
          </MovingComponent>
          {/* <div className="FadiInComp">
            <MovingComponent
              type="unfold"
              duration="1000ms"
              delay="3s"
              direction="alternate"
              timing="ease-in-out"
              iteration="1"
              fillMode="backwards"
              className="movingText1"
            >
              <p>
                We study the preliminary project with you and its economic
                profitability
              </p>
              <p>
                We select for you the best equipment adapted to your situation
                and location
              </p>
              <p>We install the equipment and start your production</p>
              <p>
                It is an integrated turnkey solution that respects your needs
              </p>
            </MovingComponent>
          </div> */}
        </div>

        <div>
          <img
            src={require("../../Images/test5.jpg")}
            className="SliderImage darkness"
          />
          <MovingComponent
            type="slideInFromLeft"
            duration="1000ms"
            delay="1s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both"
            className="movingText2"
          >
            <p>
            Are you planning <br/>
            to start a project
              <br />in your country
            </p>
            <button className="clickHereButton"><Link to="/ourbusiness">CLICK<br/>HERE</Link></button>
          </MovingComponent>
          {/* <div className="FadiInComp">
            <MovingComponent
              type="unfold"
              duration="1000ms"
              delay="3s"
              direction="alternate"
              timing="ease-in-out"
              iteration="1"
              fillMode="backwards"
              className="movingText1"
            >
              <p>
                We study the preliminary project with you and its economic
                profitability
              </p>
              <p>
                We select for you the best equipment adapted to your situation
                and location
              </p>
              <p>We install the equipment and start your production</p>
              <p>
                It is an integrated turnkey solution that respects your needs
              </p>
            </MovingComponent>
          </div> */}
        </div>
        <div>
          <img
            src={require("../../Images/test2.jpg")}
            className="SliderImage darkness"
          />
          <MovingComponent
            type="slideInFromLeft"
            duration="1000ms"
            delay="1s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both"
            className="movingText2"
          >
            <p>
            Are you planning <br/>
            to start a project
              <br />in your country
            </p>
            <button className="clickHereButton"><Link to="/ourbusiness">CLICK<br/>HERE</Link></button>
          </MovingComponent>
          {/* <div className="FadiInComp">
            <MovingComponent
              type="unfold"
              duration="1000ms"
              delay="3s"
              direction="alternate"
              timing="ease-in-out"
              iteration="1"
              fillMode="backwards"
              className="movingText1"
            >
              <p>
                We study the preliminary project with you and its economic
                profitability
              </p>
              <p>
                We select for you the best equipment adapted to your situation
                and location
              </p>
              <p>We install the equipment and start your production</p>
              <p>
                It is an integrated turnkey solution that respects your needs
              </p>
            </MovingComponent>
          </div> */}
        </div>
        <div>
          <img
            src={require("../../Images/bg4.jpg")}
            className="SliderImage darkness"
          />
          <MovingComponent
            type="slideInFromLeft"
            duration="1000ms"
            delay="1s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both"
            className="movingText2"
          >
             <p>
            Are you planning <br/>
            to start a project
              <br />in your country
            </p>
            <button className="clickHereButton"><Link to="/ourbusiness">CLICK<br/>HERE</Link></button>
          </MovingComponent>
          {/* <div className="FadiInComp">
            <MovingComponent
              type="unfold"
              duration="1000ms"
              delay="3s"
              direction="alternate"
              timing="ease-in-out"
              iteration="1"
              fillMode="backwards"
              className="movingText1"
            >
              <p>
                We study the preliminary project with you and its economic
                profitability
              </p>
              <p>
                We select for you the best equipment adapted to your situation
                and location
              </p>
              <p>We install the equipment and start your production</p>
              <p>
                It is an integrated turnkey solution that respects your needs
              </p>
            </MovingComponent>
          </div> */}
        </div>
        <div>
          <img
            src={require("../../Images/test1.jpg")}
            className="SliderImage darkness"
          />
          <MovingComponent
            type="slideInFromLeft"
            duration="1000ms"
            delay="1s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both"
            className="movingText2"
          >
            <p>
            Are you planning <br/>
            to start a project
              <br />in your country
            </p>
            <button className="clickHereButton"><Link to="/ourbusiness">CLICK<br/>HERE</Link></button>
          </MovingComponent>
          {/* <div className="FadiInComp">
            <MovingComponent
              type="unfold"
              duration="1000ms"
              delay="3s"
              direction="alternate"
              timing="ease-in-out"
              iteration="1"
              fillMode="backwards"
              className="movingText1"
            >
              <p>
                We study the preliminary project with you and its economic
                profitability
              </p>
              <p>
                We select for you the best equipment adapted to your situation
                and location
              </p>
              <p>We install the equipment and start your production</p>
              <p>
                It is an integrated turnkey solution that respects your needs
              </p>
            </MovingComponent>
          </div> */}
        </div>
      </AliceCarousel>
    </div>
  );
}
