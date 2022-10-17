import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Services from "../../Components/Services/Services";
import Sliders from "../../Components/SliderComponent/Sliders";

function Home(props) {
  return (
    <div>
      <Sliders lang={props.lang} />
      <AboutUs lang={props.lang} />
      <Services />
    </div>
  );
}

export default Home;
