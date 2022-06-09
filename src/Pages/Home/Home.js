import React from "react";
import Header from "../../Components/Header/Header";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Services from "../../Components/Services/Services";
import Slider from "../../Components/SliderComponent/Slider";

function Home() {
  return (
    <div>
      <Slider />
      {/* <Header /> */}
      <AboutUs />
      <Services />
    </div>
  );
}

export default Home;
