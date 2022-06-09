import React from "react";
import AboutUsImage from "../../Images/about.png";
import "./AboutUs.css";
import strings from "../../Translation/Translation";

function AboutUs() {
  return (
    <div className="AboutUsContainer">
      <div className="AboutUsContainerS">
        <div className="AboutUsText">
          <p className="AboutUsp1">
            <span>ABOUT</span> IHTPS
          </p>
          <p className="AboutUsp2">More than 75 years of experience,</p>
          <p className="AboutUsp3">We have joined in our company men with several skills, thus accumulating more than 75 years of experience in the industrial environment, both in the creation of companies and factories and in the assembly of technological production lines. Faced with certain difficulties encountered, we quickly understood that at the beginning, help is precious and to succeed in your project, you must surround yourself with the right experts. Saving a few dollars of advice can be very expensive at the exit, especially in the choice of techniques and processes. And it is often too late. We work upstream of the project and downstream. One goal…. Run the production line at the best cost and the fastest. A common success.</p>
        </div>
        <div className="AboutUsImageContainer">
          <img src={AboutUsImage} className="AboutUsImage" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
