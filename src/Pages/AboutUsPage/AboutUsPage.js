import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";

import "./AboutUsPage.css";

export default function AboutUsPage(props) {
  return (
    <div className="AboutUsPage">
      {/* <CustomHeader /> */}
      <AboutUs className="AboutUs" lang={props.lang} />
    </div>
  );
}
